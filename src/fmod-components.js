const FMOD = {};
let gSystem;             // Global 'System' object which has the Studio API functions.
let gSystemCore;         // Global 'SystemCore' object which has the Core API functions.
let FMODloaded = false;

function CHECK_RESULT(result) {
  if (result !== FMOD.OK) {
    console.error(`[FMOD]: Error: ${FMOD.ErrorString(result)}`);
  }
}

AFRAME.registerComponent('fmod', {
  schema: {
    banks: { type: 'array', default: [] },
    initialMemory: { type: 'number', default: 64 * 1024 * 1024 }
  },

  loadBank: function (name) {
    const bankhandle = {};
    CHECK_RESULT(gSystem.loadBankFile("/" + name, FMOD.STUDIO_LOAD_BANK_NORMAL, bankhandle));
    return bankhandle.val;
  },

  prerun: function () {
    const fileUrl = "res/fmod/";
    const folderName = "/";
    let fileName;
    let canRead = true;
    let canWrite = false;
  
    fileName = [
      "Master.bank",
      "Master.strings.bank",
    ];
  
    for (var count = 0; count < fileName.length; count++) {
      FMOD.FS_createPreloadedFile(folderName, fileName[count], fileUrl + fileName[count], canRead, canWrite);
    }
  },

  main: function () {
    // Temp object to send values to
    const outval = {};
  
    // Assign FMOD Studio System object
    CHECK_RESULT(FMOD.Studio_System_Create(outval));
    gSystem = outval.val;
  
    // Assign FMOD Core System Object
    CHECK_RESULT(gSystem.getCoreSystem(outval));
    gSystemCore = outval.val;
  
    // Can optionally set DSP buffer size here
    CHECK_RESULT(gSystemCore.setDSPBufferSize(2048, 2));

    // Set mixer sample rate to match OS output rate
    CHECK_RESULT(gSystemCore.getDriverInfo(0, null, null, outval, null, null));
    CHECK_RESULT(gSystemCore.setSoftwareFormat(outval.val, FMOD.SPEAKERMODE_DEFAULT, 0));
  
    CHECK_RESULT(gSystem.initialize(1024, FMOD.STUDIO_INIT_NORMAL, FMOD.INIT_NORMAL, null));

    FMODloaded = true;
    document.dispatchEvent(new CustomEvent('fmod-loaded'));
    window.FMOD = FMOD;
  },

  init: function () {
    FMOD['preRun'] = this.prerun;
    FMOD['onRuntimeInitialized'] = this.main;
    FMOD['INITIAL_MEMORY'] = this.data.initialMemory;
    FMODModule(FMOD);

    // We want to load banks once FMOD has initialized
    document.addEventListener('fmod-loaded', () => {
      // Load default Master Bank and strings bank
      this.loadBank("Master.bank");
      this.loadBank("Master.strings.bank");
      // Load any extra banks passed in
      for (const bank in this.data.banks) {
        this.loadBank(bank);
      }
      document.dispatchEvent(new CustomEvent('fmod-banks-loaded'));
    })
  },

  tick: function (time, timeDelta) {
    if (FMODloaded) {
      CHECK_RESULT(gSystem.update());
    }
  }
});

AFRAME.registerComponent('fmod-listener', {
  schema: {

  },

  init: function () {
    this.listenerAttributes = {
      position: { x: 0, y: 0, z: 0 },
      velocity: { x: 0, y: 0, z: 0 },
      forward: { x: 0, y: 0, z: 1 },
      up: { x: 0, y: 1, z: 0 },
    };
    this.forward = new THREE.Vector3(0, 0, 1);
    this.up = new THREE.Vector3(0, 1, 0);
    this.head = document.querySelector('#head');
  },

  tick: function (time, timeDelta) {
    if (FMODloaded) {
      this.forward.set(0, 0, 1).applyQuaternion(this.head.object3D.quaternion).normalize();
      this.up.set(0, 1, 0).applyQuaternion(this.head.object3D.quaternion).normalize();
      this.listenerAttributes.position = { x: this.el.object3D.position.x, y: this.el.object3D.position.y, z: this.el.object3D.position.z };
      this.listenerAttributes.forward = { x: this.forward.x, y: this.forward.y, z: this.forward.z };
      this.listenerAttributes.up = { x: this.up.x, y: this.up.y, z: this.up.z };
      gSystem.setListenerAttributes(0, this.listenerAttributes, null);
    }
  }
});

AFRAME.registerComponent('fmod-event', {
  schema: {
    path: { type: 'string' },
    enableOcclusion: { type: 'bool', default: false },
    listener: { type: 'selector' },
    obstructors: { type: 'string' },
    autostart: { type: 'bool', default: false }
  },

  init: function () {
    this.description = {};
    this.instance = {};
    this.outval = {};

    this.listenerPos = new THREE.Vector3();
    this.worldPos = new THREE.Vector3();
    this.direction = new THREE.Vector3();
    this.listenerCast = new THREE.Raycaster();

    if (this.data.enableOcclusion) {
      this.obstructors = Array.prototype.slice.call(document.querySelectorAll(this.data.obstructors)).map(ob => ob.object3D);
    }

    document.addEventListener('fmod-banks-loaded', () => {
      CHECK_RESULT(gSystem.getEvent(`event:${this.data.path}`, this.outval));
      this.description = this.outval.val;
      CHECK_RESULT(this.description.createInstance(this.outval));
      this.instance = this.outval.val;

      const { x, y, z } = this.el.object3D.position;
      CHECK_RESULT(this.instance.set3DAttributes({
        position: { x, y, z },
        velocity: { x: 0, y: 0, z: 0 },
        forward: { x: 0, y: 0, z: 1 },
        up: { x: 0, y: 1, z: 0 },
      }));

      if (this.data.autostart) {
        CHECK_RESULT(this.instance.start());
      }
    });
  },

  tick: function (time, timeDelta) {
    if (!FMODloaded) return;
    if (this.data.enableOcclusion) this.raycast();
  },

  raycast: function () {
    // Get world positions of listener and event instance
    this.data.listener.object3D.getWorldPosition(this.listenerPos);
    this.el.object3D.getWorldPosition(this.worldPos);

    // Get direction for first ray to point, distance to travel, then update raycaster ray
    this.direction.subVectors(this.listenerPos, this.worldPos).normalize();
    this.distance = this.worldPos.distanceTo(this.listenerPos);
    this.listenerCast.far = this.distance;
    this.listenerCast.set(this.worldPos, this.direction);

    const intersecting = this.listenerCast.intersectObjects(this.obstructors);
    CHECK_RESULT(this.instance.setParameterByName("Obstructors", intersecting.length, false));
  }
});

AFRAME.registerComponent('footstepper', {
  schema: {

  },

  init: function () {
    this.event = this.el.components['fmod-event'];
    this.forward = new THREE.Vector3(0, 0, 1);
    this.up = new THREE.Vector3(0, 1, 0);
    this.head = document.querySelector('#head');

    document.addEventListener('fmod-banks-loaded', () => {
      const { x, y, z } = this.el.parentEl.object3D.position;
      CHECK_RESULT(this.event.instance.set3DAttributes({
        position: { x, y, z },
        velocity: { x: 0, y: 0, z: 0 },
        forward: { x: 0, y: 0, z: 1 },
        up: { x: 0, y: 1, z: 0 },
      }));

      this.el.parentEl.addEventListener('teleported', e => {
        this.forward.set(0, 0, 1).applyQuaternion(this.head.object3D.quaternion).normalize();
        this.up.set(0, 1, 0).applyQuaternion(this.head.object3D.quaternion).normalize();
        const { x, y, z } = e.detail.newPosition;
        CHECK_RESULT(this.event.instance.set3DAttributes({
          position: { x, y, z },
          velocity: { x: 0, y: 0, z: 0 },
          forward: { x: this.forward.x, y: this.forward.y, z: this.forward.z },
          up: { x: this.up.x, y: this.up.y, z: this.up.z },
        }));
        this.event.instance.start();
      })
    });
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});
