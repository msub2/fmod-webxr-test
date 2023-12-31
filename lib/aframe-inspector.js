/*! For license information please see aframe-inspector.min.js.LICENSE.txt */
(() => {
  var e,
    t,
    n = {
      759: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => i });
        var r = n(187),
          o = new (n.n(r)())();
        o.setMaxListeners(0);
        const i = o;
      },
      719: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t() {
          return (
            (t =
              'undefined' != typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (e, t, r) {
                    var o = n(e, t);
                    if (o) {
                      var i = Object.getOwnPropertyDescriptor(o, t);
                      return i.get
                        ? i.get.call(arguments.length < 3 ? e : r)
                        : i.value;
                    }
                  }),
            t.apply(this, arguments)
          );
        }
        function n(e, t) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e));

          );
          return e;
        }
        function r(t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(
                t,
                (void 0,
                (i = (function (t, n) {
                  if ('object' !== e(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(t, 'string');
                    if ('object' !== e(o)) return o;
                    throw new TypeError(
                      '@@toPrimitive must return a primitive value.'
                    );
                  }
                  return String(t);
                })(o.key)),
                'symbol' === e(i) ? i : String(i)),
                o
              );
          }
          var i;
        }
        function o(e, t, n) {
          return (
            t && r(e.prototype, t),
            n && r(e, n),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          );
        }
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function a(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && s(e, t);
        }
        function s(e, t) {
          return (
            (s = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            s(e, t)
          );
        }
        function l(e) {
          var t = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = p(e);
            if (t) {
              var o = p(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return c(this, n);
          };
        }
        function c(t, n) {
          if (n && ('object' === e(n) || 'function' == typeof n)) return n;
          if (void 0 !== n)
            throw new TypeError(
              'Derived constructors may only return object or undefined'
            );
          return u(t);
        }
        function u(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function p(e) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            p(e)
          );
        }
        !(function () {
          'use strict';
          var e = (function (e) {
              a(n, THREE.MeshBasicMaterial);
              var t = l(n);
              function n(e) {
                var r;
                return (
                  i(this, n),
                  ((r = t.call(this)).depthTest = !1),
                  (r.depthWrite = !1),
                  (r.fog = !1),
                  (r.side = THREE.FrontSide),
                  (r.transparent = !0),
                  r.setValues(e),
                  (r.oldColor = r.color.clone()),
                  (r.oldOpacity = r.opacity),
                  (r.highlight = function (e) {
                    e
                      ? (this.color.setRGB(1, 1, 0), (this.opacity = 1))
                      : (this.color.copy(this.oldColor),
                        (this.opacity = this.oldOpacity));
                  }),
                  r
                );
              }
              return o(n);
            })(),
            n = (function (e) {
              a(n, THREE.LineBasicMaterial);
              var t = l(n);
              function n(e) {
                var r;
                return (
                  i(this, n),
                  ((r = t.call(this)).depthTest = !1),
                  (r.depthWrite = !1),
                  (r.fog = !1),
                  (r.transparent = !0),
                  (r.linewidth = 1),
                  r.setValues(e),
                  (r.oldColor = r.color.clone()),
                  (r.oldOpacity = r.opacity),
                  (r.highlight = function (e) {
                    e
                      ? (this.color.setRGB(1, 1, 0), (this.opacity = 1))
                      : (this.color.copy(this.oldColor),
                        (this.opacity = this.oldOpacity));
                  }),
                  r
                );
              }
              return o(n);
            })(),
            r = new e({ visible: !1, transparent: !1 });
          (THREE.TransformGizmo = (function (e) {
            a(n, THREE.Object3D);
            var t = l(n);
            function n() {
              return i(this, n), t.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: 'init',
                  value: function () {
                    (this.handles = new THREE.Object3D()),
                      (this.pickers = new THREE.Object3D()),
                      (this.planes = new THREE.Object3D()),
                      this.add(this.handles),
                      this.add(this.pickers),
                      this.add(this.planes);
                    var e = new THREE.PlaneGeometry(50, 50, 2, 2),
                      t = new THREE.MeshBasicMaterial({
                        visible: !1,
                        side: THREE.DoubleSide
                      }),
                      n = {
                        XY: new THREE.Mesh(e, t),
                        YZ: new THREE.Mesh(e, t),
                        XZ: new THREE.Mesh(e, t),
                        XYZE: new THREE.Mesh(e, t)
                      };
                    for (var r in ((this.activePlane = n.XYZE),
                    n.YZ.rotation.set(0, Math.PI / 2, 0),
                    n.XZ.rotation.set(-Math.PI / 2, 0, 0),
                    n))
                      (n[r].name = r),
                        this.planes.add(n[r]),
                        (this.planes[r] = n[r]);
                    var o = function (e, t) {
                      for (var n in e)
                        for (r = e[n].length; r--; ) {
                          var o = e[n][r][0],
                            i = e[n][r][1],
                            a = e[n][r][2];
                          (o.name = n),
                            (o.renderOrder = 1 / 0),
                            i && o.position.set(i[0], i[1], i[2]),
                            a && o.rotation.set(a[0], a[1], a[2]),
                            t.add(o);
                        }
                    };
                    o(this.handleGizmos, this.handles),
                      o(this.pickerGizmos, this.pickers),
                      this.traverse(function (e) {
                        if (e instanceof THREE.Mesh) {
                          e.updateMatrix();
                          var t = e.geometry.clone();
                          t.applyMatrix4(e.matrix),
                            (e.geometry = t),
                            e.position.set(0, 0, 0),
                            e.rotation.set(0, 0, 0),
                            e.scale.set(1, 1, 1);
                        }
                      });
                  }
                },
                {
                  key: 'highlight',
                  value: function (e) {
                    this.traverse(function (t) {
                      t.material &&
                        t.material.highlight &&
                        (t.name === e
                          ? t.material.highlight(!0)
                          : t.material.highlight(!1));
                    });
                  }
                },
                {
                  key: 'update',
                  value: function (e, t) {
                    var n = new THREE.Vector3(0, 0, 0),
                      r = new THREE.Vector3(0, 1, 0),
                      o = new THREE.Matrix4();
                    this.traverse(function (i) {
                      -1 !== i.name.search('E')
                        ? i.quaternion.setFromRotationMatrix(o.lookAt(t, n, r))
                        : (-1 === i.name.search('X') &&
                            -1 === i.name.search('Y') &&
                            -1 === i.name.search('Z')) ||
                          i.quaternion.setFromEuler(e);
                    });
                  }
                }
              ]),
              n
            );
          })()),
            (THREE.TransformGizmoTranslate = (function (t) {
              a(c, THREE.TransformGizmo);
              var s = l(c);
              function c() {
                var t;
                i(this, c), (t = s.call(this));
                var o = new THREE.ConeGeometry(0.05, 0.2, 12, 1, !1);
                o.translate(0, 0.5, 0);
                var a = new THREE.BufferGeometry();
                a.setAttribute(
                  'position',
                  new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3)
                );
                var l = new THREE.BufferGeometry();
                l.setAttribute(
                  'position',
                  new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3)
                );
                var u = new THREE.BufferGeometry();
                return (
                  u.setAttribute(
                    'position',
                    new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3)
                  ),
                  (t.handleGizmos = {
                    X: [
                      [
                        new THREE.Mesh(o, new e({ color: 16711680 })),
                        [0.5, 0, 0],
                        [0, 0, -Math.PI / 2]
                      ],
                      [new THREE.Line(a, new n({ color: 16711680 }))]
                    ],
                    Y: [
                      [new THREE.Mesh(o, new e({ color: 65280 })), [0, 0.5, 0]],
                      [new THREE.Line(l, new n({ color: 65280 }))]
                    ],
                    Z: [
                      [
                        new THREE.Mesh(o, new e({ color: 255 })),
                        [0, 0, 0.5],
                        [Math.PI / 2, 0, 0]
                      ],
                      [new THREE.Line(u, new n({ color: 255 }))]
                    ],
                    XYZ: [
                      [
                        new THREE.Mesh(
                          new THREE.OctahedronGeometry(0.1, 0),
                          new e({ color: 16777215, opacity: 0.25 })
                        ),
                        [0, 0, 0],
                        [0, 0, 0]
                      ]
                    ],
                    XY: [
                      [
                        new THREE.Mesh(
                          new THREE.PlaneGeometry(0.29, 0.29),
                          new e({ color: 16776960, opacity: 0.25 })
                        ),
                        [0.15, 0.15, 0]
                      ]
                    ],
                    YZ: [
                      [
                        new THREE.Mesh(
                          new THREE.PlaneGeometry(0.29, 0.29),
                          new e({ color: 65535, opacity: 0.25 })
                        ),
                        [0, 0.15, 0.15],
                        [0, Math.PI / 2, 0]
                      ]
                    ],
                    XZ: [
                      [
                        new THREE.Mesh(
                          new THREE.PlaneGeometry(0.29, 0.29),
                          new e({ color: 16711935, opacity: 0.25 })
                        ),
                        [0.15, 0, 0.15],
                        [-Math.PI / 2, 0, 0]
                      ]
                    ]
                  }),
                  (t.pickerGizmos = {
                    X: [
                      [
                        new THREE.Mesh(
                          new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, !1),
                          r
                        ),
                        [0.6, 0, 0],
                        [0, 0, -Math.PI / 2]
                      ]
                    ],
                    Y: [
                      [
                        new THREE.Mesh(
                          new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, !1),
                          r
                        ),
                        [0, 0.6, 0]
                      ]
                    ],
                    Z: [
                      [
                        new THREE.Mesh(
                          new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, !1),
                          r
                        ),
                        [0, 0, 0.6],
                        [Math.PI / 2, 0, 0]
                      ]
                    ],
                    XYZ: [
                      [new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), r)]
                    ],
                    XY: [
                      [
                        new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), r),
                        [0.2, 0.2, 0]
                      ]
                    ],
                    YZ: [
                      [
                        new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), r),
                        [0, 0.2, 0.2],
                        [0, Math.PI / 2, 0]
                      ]
                    ],
                    XZ: [
                      [
                        new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), r),
                        [0.2, 0, 0.2],
                        [-Math.PI / 2, 0, 0]
                      ]
                    ]
                  }),
                  t.init(),
                  t
                );
              }
              return (
                o(c, [
                  {
                    key: 'setActivePlane',
                    value: function (e, t) {
                      var n = new THREE.Matrix4();
                      t.applyMatrix4(
                        n
                          .copy(n.extractRotation(this.planes.XY.matrixWorld))
                          .invert()
                      ),
                        'X' === e &&
                          ((this.activePlane = this.planes.XY),
                          Math.abs(t.y) > Math.abs(t.z) &&
                            (this.activePlane = this.planes.XZ)),
                        'Y' === e &&
                          ((this.activePlane = this.planes.XY),
                          Math.abs(t.x) > Math.abs(t.z) &&
                            (this.activePlane = this.planes.YZ)),
                        'Z' === e &&
                          ((this.activePlane = this.planes.XZ),
                          Math.abs(t.x) > Math.abs(t.y) &&
                            (this.activePlane = this.planes.YZ)),
                        'XYZ' === e && (this.activePlane = this.planes.XYZE),
                        'XY' === e && (this.activePlane = this.planes.XY),
                        'YZ' === e && (this.activePlane = this.planes.YZ),
                        'XZ' === e && (this.activePlane = this.planes.XZ);
                    }
                  }
                ]),
                c
              );
            })()),
            (THREE.TransformGizmoRotate = (function (e) {
              a(c, THREE.TransformGizmo);
              var s = l(c);
              function c() {
                var e;
                i(this, c);
                var t = function (e, t, n) {
                  var r = new THREE.BufferGeometry(),
                    o = [];
                  n = n || 1;
                  for (var i = 0; i <= 64 * n; ++i)
                    'x' === t &&
                      o.push(
                        0,
                        Math.cos((i / 32) * Math.PI) * e,
                        Math.sin((i / 32) * Math.PI) * e
                      ),
                      'y' === t &&
                        o.push(
                          Math.cos((i / 32) * Math.PI) * e,
                          0,
                          Math.sin((i / 32) * Math.PI) * e
                        ),
                      'z' === t &&
                        o.push(
                          Math.sin((i / 32) * Math.PI) * e,
                          Math.cos((i / 32) * Math.PI) * e,
                          0
                        );
                  return (
                    r.setAttribute(
                      'position',
                      new THREE.Float32BufferAttribute(o, 3)
                    ),
                    r
                  );
                };
                return (
                  ((e = s.call(this)).handleGizmos = {
                    X: [
                      [
                        new THREE.Line(
                          new t(1, 'x', 0.5),
                          new n({ color: 16711680 })
                        )
                      ]
                    ],
                    Y: [
                      [
                        new THREE.Line(
                          new t(1, 'y', 0.5),
                          new n({ color: 65280 })
                        )
                      ]
                    ],
                    Z: [
                      [
                        new THREE.Line(
                          new t(1, 'z', 0.5),
                          new n({ color: 255 })
                        )
                      ]
                    ],
                    E: [
                      [
                        new THREE.Line(
                          new t(1.25, 'z', 1),
                          new n({ color: 13421568 })
                        )
                      ]
                    ],
                    XYZE: [
                      [
                        new THREE.Line(
                          new t(1, 'z', 1),
                          new n({ color: 7895160 })
                        )
                      ]
                    ]
                  }),
                  (e.pickerGizmos = {
                    X: [
                      [
                        new THREE.Mesh(
                          new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI),
                          r
                        ),
                        [0, 0, 0],
                        [0, -Math.PI / 2, -Math.PI / 2]
                      ]
                    ],
                    Y: [
                      [
                        new THREE.Mesh(
                          new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI),
                          r
                        ),
                        [0, 0, 0],
                        [Math.PI / 2, 0, 0]
                      ]
                    ],
                    Z: [
                      [
                        new THREE.Mesh(
                          new THREE.TorusGeometry(1, 0.12, 4, 12, Math.PI),
                          r
                        ),
                        [0, 0, 0],
                        [0, 0, -Math.PI / 2]
                      ]
                    ],
                    E: [
                      [
                        new THREE.Mesh(
                          new THREE.TorusGeometry(1.25, 0.12, 2, 24),
                          r
                        )
                      ]
                    ],
                    XYZE: [
                      [
                        new THREE.Mesh(
                          new THREE.TorusGeometry(1, 0.12, 2, 24),
                          r
                        )
                      ]
                    ]
                  }),
                  (e.pickerGizmos.XYZE[0][0].visible = !1),
                  e.init(),
                  e
                );
              }
              return (
                o(c, [
                  {
                    key: 'setActivePlane',
                    value: function (e) {
                      'E' === e && (this.activePlane = this.planes.XYZE),
                        'X' === e && (this.activePlane = this.planes.YZ),
                        'Y' === e && (this.activePlane = this.planes.XZ),
                        'Z' === e && (this.activePlane = this.planes.XY);
                    }
                  },
                  {
                    key: 'update',
                    value: function (e, n) {
                      t(p(c.prototype), 'update', this).call(this, e, n);
                      var r = new THREE.Matrix4(),
                        o = new THREE.Euler(0, 0, 1),
                        i = new THREE.Quaternion(),
                        a = new THREE.Vector3(1, 0, 0),
                        s = new THREE.Vector3(0, 1, 0),
                        l = new THREE.Vector3(0, 0, 1),
                        u = new THREE.Quaternion(),
                        f = new THREE.Quaternion(),
                        d = new THREE.Quaternion(),
                        m = n.clone();
                      o.copy(this.planes.XY.rotation),
                        i.setFromEuler(o),
                        r.makeRotationFromQuaternion(i).copy(r).invert(),
                        m.applyMatrix4(r),
                        this.traverse(function (e) {
                          i.setFromEuler(o),
                            'X' === e.name &&
                              (u.setFromAxisAngle(a, Math.atan2(-m.y, m.z)),
                              i.multiplyQuaternions(i, u),
                              e.quaternion.copy(i)),
                            'Y' === e.name &&
                              (f.setFromAxisAngle(s, Math.atan2(m.x, m.z)),
                              i.multiplyQuaternions(i, f),
                              e.quaternion.copy(i)),
                            'Z' === e.name &&
                              (d.setFromAxisAngle(l, Math.atan2(m.y, m.x)),
                              i.multiplyQuaternions(i, d),
                              e.quaternion.copy(i));
                        });
                    }
                  }
                ]),
                c
              );
            })()),
            (THREE.TransformGizmoScale = (function (t) {
              a(c, THREE.TransformGizmo);
              var s = l(c);
              function c() {
                var t;
                i(this, c), (t = s.call(this));
                var o = new THREE.BoxGeometry(0.125, 0.125, 0.125);
                o.translate(0, 0.5, 0);
                var a = new THREE.BufferGeometry();
                a.setAttribute(
                  'position',
                  new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3)
                );
                var l = new THREE.BufferGeometry();
                l.setAttribute(
                  'position',
                  new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3)
                );
                var u = new THREE.BufferGeometry();
                return (
                  u.setAttribute(
                    'position',
                    new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3)
                  ),
                  (t.handleGizmos = {
                    X: [
                      [
                        new THREE.Mesh(o, new e({ color: 16711680 })),
                        [0.5, 0, 0],
                        [0, 0, -Math.PI / 2]
                      ],
                      [new THREE.Line(a, new n({ color: 16711680 }))]
                    ],
                    Y: [
                      [new THREE.Mesh(o, new e({ color: 65280 })), [0, 0.5, 0]],
                      [new THREE.Line(l, new n({ color: 65280 }))]
                    ],
                    Z: [
                      [
                        new THREE.Mesh(o, new e({ color: 255 })),
                        [0, 0, 0.5],
                        [Math.PI / 2, 0, 0]
                      ],
                      [new THREE.Line(u, new n({ color: 255 }))]
                    ],
                    XYZ: [
                      [
                        new THREE.Mesh(
                          new THREE.BoxGeometry(0.125, 0.125, 0.125),
                          new e({ color: 16777215, opacity: 0.25 })
                        )
                      ]
                    ]
                  }),
                  (t.pickerGizmos = {
                    X: [
                      [
                        new THREE.Mesh(
                          new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, !1),
                          r
                        ),
                        [0.6, 0, 0],
                        [0, 0, -Math.PI / 2]
                      ]
                    ],
                    Y: [
                      [
                        new THREE.Mesh(
                          new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, !1),
                          r
                        ),
                        [0, 0.6, 0]
                      ]
                    ],
                    Z: [
                      [
                        new THREE.Mesh(
                          new THREE.CylinderGeometry(0.2, 0, 1, 4, 1, !1),
                          r
                        ),
                        [0, 0, 0.6],
                        [Math.PI / 2, 0, 0]
                      ]
                    ],
                    XYZ: [
                      [new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), r)]
                    ]
                  }),
                  t.init(),
                  t
                );
              }
              return (
                o(c, [
                  {
                    key: 'setActivePlane',
                    value: function (e, t) {
                      var n = new THREE.Matrix4();
                      t.applyMatrix4(
                        n
                          .copy(n.extractRotation(this.planes.XY.matrixWorld))
                          .invert()
                      ),
                        'X' === e &&
                          ((this.activePlane = this.planes.XY),
                          Math.abs(t.y) > Math.abs(t.z) &&
                            (this.activePlane = this.planes.XZ)),
                        'Y' === e &&
                          ((this.activePlane = this.planes.XY),
                          Math.abs(t.x) > Math.abs(t.z) &&
                            (this.activePlane = this.planes.YZ)),
                        'Z' === e &&
                          ((this.activePlane = this.planes.XZ),
                          Math.abs(t.x) > Math.abs(t.y) &&
                            (this.activePlane = this.planes.YZ)),
                        'XYZ' === e && (this.activePlane = this.planes.XYZE);
                    }
                  }
                ]),
                c
              );
            })()),
            (THREE.TransformControls = (function (e) {
              a(n, THREE.Object3D);
              var t = l(n);
              function n(e, r) {
                var o;
                i(this, n),
                  (o = t.call(this)),
                  (r = void 0 !== r ? r : document),
                  (o.object = void 0),
                  (o.visible = !1),
                  (o.translationSnap = null),
                  (o.rotationSnap = null),
                  (o.space = 'world'),
                  (o.size = 1),
                  (o.axis = null);
                var a = e,
                  s = u(o),
                  l = 'translate',
                  c = !1,
                  p = {
                    translate: new THREE.TransformGizmoTranslate(),
                    rotate: new THREE.TransformGizmoRotate(),
                    scale: new THREE.TransformGizmoScale()
                  };
                for (var f in p) {
                  var d = p[f];
                  (d.visible = f === l), o.add(d);
                }
                var m = { type: 'change' },
                  h = { type: 'mouseDown' },
                  y = { type: 'mouseUp', mode: l },
                  b = { type: 'objectChange' },
                  g = new THREE.Raycaster(),
                  v = new THREE.Vector2(),
                  A = new THREE.Vector3(),
                  C = new THREE.Vector3(),
                  w = new THREE.Vector3(),
                  E = new THREE.Vector3(),
                  x = 1,
                  S = new THREE.Matrix4(),
                  O = new THREE.Vector3(),
                  k = new THREE.Matrix4(),
                  j = new THREE.Vector3(),
                  T = new THREE.Quaternion(),
                  M = new THREE.Euler(),
                  I = new THREE.Vector3(1, 0, 0),
                  R = new THREE.Vector3(0, 1, 0),
                  P = new THREE.Vector3(0, 0, 1),
                  N = new THREE.Quaternion(),
                  L = new THREE.Quaternion(),
                  _ = new THREE.Quaternion(),
                  D = new THREE.Quaternion(),
                  B = new THREE.Quaternion(),
                  z = new THREE.Vector3(),
                  F = new THREE.Vector3(),
                  H = new THREE.Matrix4(),
                  U = new THREE.Matrix4(),
                  V = new THREE.Vector3(),
                  Y = new THREE.Vector3(),
                  W = new THREE.Euler(),
                  Z = new THREE.Matrix4(),
                  Q = new THREE.Vector3(),
                  G = new THREE.Euler();
                function $(e) {
                  if (
                    void 0 !== s.object &&
                    !0 !== c &&
                    (void 0 === e.button || 0 === e.button)
                  ) {
                    var t = J(
                        e.changedTouches ? e.changedTouches[0] : e,
                        p[l].pickers.children
                      ),
                      n = null;
                    t && ((n = t.object.name), e.preventDefault()),
                      s.axis !== n &&
                        ((s.axis = n), s.update(), s.dispatchEvent(m));
                  }
                }
                function X(e) {
                  if (
                    void 0 !== s.object &&
                    !0 !== c &&
                    (void 0 === e.button || 0 === e.button)
                  ) {
                    var t = e.changedTouches ? e.changedTouches[0] : e;
                    if (0 === t.button || void 0 === t.button) {
                      var n = J(t, p[l].pickers.children);
                      if (n) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          (s.axis = n.object.name),
                          s.dispatchEvent(h),
                          s.update(),
                          O.copy(Q).sub(Y).normalize(),
                          p[l].setActivePlane(s.axis, O);
                        var r = J(t, [p[l].activePlane]);
                        r &&
                          (z.copy(s.object.position),
                          F.copy(s.object.scale),
                          H.extractRotation(s.object.matrix),
                          Z.extractRotation(s.object.matrixWorld),
                          U.extractRotation(s.object.parent.matrixWorld),
                          V.setFromMatrixScale(
                            k.copy(s.object.parent.matrixWorld).invert()
                          ),
                          C.copy(r.point));
                      }
                    }
                    c = !0;
                  }
                }
                function q(e) {
                  if (
                    void 0 !== s.object &&
                    null !== s.axis &&
                    !1 !== c &&
                    (void 0 === e.button || 0 === e.button)
                  ) {
                    var t = J(e.changedTouches ? e.changedTouches[0] : e, [
                      p[l].activePlane
                    ]);
                    if (!1 !== t) {
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        A.copy(t.point),
                        'translate' === l)
                      )
                        A.sub(C),
                          A.multiply(V),
                          'local' === s.space &&
                            (A.applyMatrix4(k.copy(Z).invert()),
                            -1 === s.axis.search('X') && (A.x = 0),
                            -1 === s.axis.search('Y') && (A.y = 0),
                            -1 === s.axis.search('Z') && (A.z = 0),
                            A.applyMatrix4(H),
                            s.object.position.copy(z),
                            s.object.position.add(A)),
                          ('world' !== s.space &&
                            -1 === s.axis.search('XYZ')) ||
                            (-1 === s.axis.search('X') && (A.x = 0),
                            -1 === s.axis.search('Y') && (A.y = 0),
                            -1 === s.axis.search('Z') && (A.z = 0),
                            A.applyMatrix4(k.copy(U).invert()),
                            s.object.position.copy(z),
                            s.object.position.add(A)),
                          null !== s.translationSnap &&
                            ('local' === s.space &&
                              s.object.position.applyMatrix4(
                                k.copy(Z).invert()
                              ),
                            -1 !== s.axis.search('X') &&
                              (s.object.position.x =
                                Math.round(
                                  s.object.position.x / s.translationSnap
                                ) * s.translationSnap),
                            -1 !== s.axis.search('Y') &&
                              (s.object.position.y =
                                Math.round(
                                  s.object.position.y / s.translationSnap
                                ) * s.translationSnap),
                            -1 !== s.axis.search('Z') &&
                              (s.object.position.z =
                                Math.round(
                                  s.object.position.z / s.translationSnap
                                ) * s.translationSnap),
                            'local' === s.space &&
                              s.object.position.applyMatrix4(Z));
                      else if ('scale' === l)
                        A.sub(C),
                          A.multiply(V),
                          'local' === s.space &&
                            ('XYZ' === s.axis
                              ? ((x = 1 + A.y / Math.max(F.x, F.y, F.z)),
                                (s.object.scale.x = F.x * x),
                                (s.object.scale.y = F.y * x),
                                (s.object.scale.z = F.z * x))
                              : (A.applyMatrix4(k.copy(Z).invert()),
                                'X' === s.axis &&
                                  (s.object.scale.x = F.x * (1 + A.x / F.x)),
                                'Y' === s.axis &&
                                  (s.object.scale.y = F.y * (1 + A.y / F.y)),
                                'Z' === s.axis &&
                                  (s.object.scale.z = F.z * (1 + A.z / F.z))));
                      else if ('rotate' === l)
                        if (
                          (A.sub(Y),
                          A.multiply(V),
                          j.copy(C).sub(Y),
                          j.multiply(V),
                          'E' === s.axis)
                        )
                          A.applyMatrix4(k.copy(S).invert()),
                            j.applyMatrix4(k.copy(S).invert()),
                            w.set(
                              Math.atan2(A.z, A.y),
                              Math.atan2(A.x, A.z),
                              Math.atan2(A.y, A.x)
                            ),
                            E.set(
                              Math.atan2(j.z, j.y),
                              Math.atan2(j.x, j.z),
                              Math.atan2(j.y, j.x)
                            ),
                            T.setFromRotationMatrix(k.copy(U).invert()),
                            B.setFromAxisAngle(O, w.z - E.z),
                            N.setFromRotationMatrix(Z),
                            T.multiplyQuaternions(T, B),
                            T.multiplyQuaternions(T, N),
                            s.object.quaternion.copy(T);
                        else if ('XYZE' === s.axis) {
                          var n = A.clone().cross(j).normalize();
                          B.setFromEuler(M.set(n.x, n.y, n.z)),
                            T.setFromRotationMatrix(k.copy(U).invert()),
                            L.setFromAxisAngle(B, -A.clone().angleTo(j)),
                            N.setFromRotationMatrix(Z),
                            T.multiplyQuaternions(T, L),
                            T.multiplyQuaternions(T, N),
                            s.object.quaternion.copy(T);
                        } else
                          'local' === s.space
                            ? (A.applyMatrix4(k.copy(Z).invert()),
                              j.applyMatrix4(k.copy(Z).invert()),
                              w.set(
                                Math.atan2(A.z, A.y),
                                Math.atan2(A.x, A.z),
                                Math.atan2(A.y, A.x)
                              ),
                              E.set(
                                Math.atan2(j.z, j.y),
                                Math.atan2(j.x, j.z),
                                Math.atan2(j.y, j.x)
                              ),
                              N.setFromRotationMatrix(H),
                              null !== s.rotationSnap
                                ? (L.setFromAxisAngle(
                                    I,
                                    Math.round((w.x - E.x) / s.rotationSnap) *
                                      s.rotationSnap
                                  ),
                                  _.setFromAxisAngle(
                                    R,
                                    Math.round((w.y - E.y) / s.rotationSnap) *
                                      s.rotationSnap
                                  ),
                                  D.setFromAxisAngle(
                                    P,
                                    Math.round((w.z - E.z) / s.rotationSnap) *
                                      s.rotationSnap
                                  ))
                                : (L.setFromAxisAngle(I, w.x - E.x),
                                  _.setFromAxisAngle(R, w.y - E.y),
                                  D.setFromAxisAngle(P, w.z - E.z)),
                              'X' === s.axis && N.multiplyQuaternions(N, L),
                              'Y' === s.axis && N.multiplyQuaternions(N, _),
                              'Z' === s.axis && N.multiplyQuaternions(N, D),
                              s.object.quaternion.copy(N))
                            : 'world' === s.space &&
                              (w.set(
                                Math.atan2(A.z, A.y),
                                Math.atan2(A.x, A.z),
                                Math.atan2(A.y, A.x)
                              ),
                              E.set(
                                Math.atan2(j.z, j.y),
                                Math.atan2(j.x, j.z),
                                Math.atan2(j.y, j.x)
                              ),
                              T.setFromRotationMatrix(k.copy(U).invert()),
                              null !== s.rotationSnap
                                ? (L.setFromAxisAngle(
                                    I,
                                    Math.round((w.x - E.x) / s.rotationSnap) *
                                      s.rotationSnap
                                  ),
                                  _.setFromAxisAngle(
                                    R,
                                    Math.round((w.y - E.y) / s.rotationSnap) *
                                      s.rotationSnap
                                  ),
                                  D.setFromAxisAngle(
                                    P,
                                    Math.round((w.z - E.z) / s.rotationSnap) *
                                      s.rotationSnap
                                  ))
                                : (L.setFromAxisAngle(I, w.x - E.x),
                                  _.setFromAxisAngle(R, w.y - E.y),
                                  D.setFromAxisAngle(P, w.z - E.z)),
                              N.setFromRotationMatrix(Z),
                              'X' === s.axis && T.multiplyQuaternions(T, L),
                              'Y' === s.axis && T.multiplyQuaternions(T, _),
                              'Z' === s.axis && T.multiplyQuaternions(T, D),
                              T.multiplyQuaternions(T, N),
                              s.object.quaternion.copy(T));
                      'translate' === l
                        ? ((s.object.position.x = parseFloat(
                            s.object.position.x.toFixed(5)
                          )),
                          (s.object.position.y = parseFloat(
                            s.object.position.y.toFixed(5)
                          )),
                          (s.object.position.z = parseFloat(
                            s.object.position.z.toFixed(5)
                          )))
                        : 'rotate' === l
                        ? ((s.object.rotation.x = parseFloat(
                            s.object.rotation.x.toFixed(5)
                          )),
                          (s.object.rotation.y = parseFloat(
                            s.object.rotation.y.toFixed(5)
                          )),
                          (s.object.rotation.z = parseFloat(
                            s.object.rotation.z.toFixed(5)
                          )))
                        : ((s.object.scale.x = parseFloat(
                            s.object.scale.x.toFixed(5)
                          )),
                          (s.object.scale.y = parseFloat(
                            s.object.scale.y.toFixed(5)
                          )),
                          (s.object.scale.z = parseFloat(
                            s.object.scale.z.toFixed(5)
                          ))),
                        s.update(),
                        s.dispatchEvent(m),
                        (b.mode = l),
                        s.dispatchEvent(b);
                    }
                  }
                }
                function K(e) {
                  e.preventDefault(),
                    (void 0 !== e.button && 0 !== e.button) ||
                      (c &&
                        null !== s.axis &&
                        ((y.mode = l), s.dispatchEvent(y)),
                      (c = !1),
                      'TouchEvent' in window && e instanceof TouchEvent
                        ? ((s.axis = null), s.update(), s.dispatchEvent(m))
                        : $(e));
                }
                function J(e, t) {
                  var n = r.getBoundingClientRect(),
                    o = (e.clientX - n.left) / n.width,
                    i = (e.clientY - n.top) / n.height;
                  v.set(2 * o - 1, -2 * i + 1), g.setFromCamera(v, a);
                  var s = g.intersectObjects(t, !0);
                  return !!s[0] && s[0];
                }
                return (
                  (o.setCamera = function (e) {
                    a = e;
                  }),
                  (o.activate = function () {
                    r.addEventListener('mousedown', X, !1),
                      r.addEventListener('touchstart', X, !1),
                      r.addEventListener('mousemove', $, !1),
                      r.addEventListener('touchmove', $, !1),
                      r.addEventListener('mousemove', q, !1),
                      r.addEventListener('touchmove', q, !1),
                      r.addEventListener('mouseup', K, !1),
                      r.addEventListener('mouseout', K, !1),
                      r.addEventListener('touchend', K, !1),
                      r.addEventListener('touchcancel', K, !1),
                      r.addEventListener('touchleave', K, !1);
                  }),
                  o.activate(),
                  (o.dispose = function () {
                    r.removeEventListener('mousedown', X),
                      r.removeEventListener('touchstart', X),
                      r.removeEventListener('mousemove', $),
                      r.removeEventListener('touchmove', $),
                      r.removeEventListener('mousemove', q),
                      r.removeEventListener('touchmove', q),
                      r.removeEventListener('mouseup', K),
                      r.removeEventListener('mouseout', K),
                      r.removeEventListener('touchend', K),
                      r.removeEventListener('touchcancel', K),
                      r.removeEventListener('touchleave', K);
                  }),
                  (o.attach = function (e) {
                    (this.object = e), (this.visible = !0), this.update(!0);
                  }),
                  (o.detach = function () {
                    (this.object = void 0),
                      (this.visible = !1),
                      (this.axis = null);
                  }),
                  (o.getMode = function () {
                    return l;
                  }),
                  (o.setMode = function (e) {
                    for (var t in ('scale' === (l = e || l) &&
                      (s.space = 'local'),
                    p))
                      p[t].visible = t === l;
                    this.update(), s.dispatchEvent(m);
                  }),
                  (o.setTranslationSnap = function (e) {
                    s.translationSnap = e;
                  }),
                  (o.setRotationSnap = function (e) {
                    s.rotationSnap = e;
                  }),
                  (o.setSize = function (e) {
                    (s.size = e), this.update(!0), s.dispatchEvent(m);
                  }),
                  (o.setSpace = function (e) {
                    (s.space = e), this.update(), s.dispatchEvent(m);
                  }),
                  (o.update = function (e) {
                    void 0 !== s.object &&
                      (s.object.updateMatrixWorld(),
                      Y.setFromMatrixPosition(s.object.matrixWorld),
                      W.setFromRotationMatrix(
                        k.extractRotation(s.object.matrixWorld)
                      ),
                      a.updateMatrixWorld(),
                      Q.setFromMatrixPosition(a.matrixWorld),
                      G.setFromRotationMatrix(k.extractRotation(a.matrixWorld)),
                      (x = (Y.distanceTo(Q) / 6) * s.size),
                      this.position.copy(Y),
                      e && this.scale.set(x, x, x),
                      a instanceof THREE.PerspectiveCamera
                        ? O.copy(Q).sub(Y).normalize()
                        : a instanceof THREE.OrthographicCamera &&
                          O.copy(Q).normalize(),
                      'local' === s.space
                        ? p[l].update(W, O)
                        : 'world' === s.space &&
                          p[l].update(new THREE.Euler(), O),
                      p[l].highlight(s.axis));
                  }),
                  o
                );
              }
              return o(n);
            })());
        })();
      },
      390: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { updates: () => o });
        var r = n(759),
          o = {};
        r.Z.on('entityupdate', function (e) {
          var t = e.value,
            n = e.entity;
          o[n.id] = o[n.id] || {};
          var r = AFRAME.components[e.component];
          r &&
            (e.property
              ? ((o[n.id][e.component] = o[n.id][e.component] || {}),
                r.schema[e.property] &&
                  (t = r.schema[e.property].stringify(e.value)),
                (o[n.id][e.component][e.property] = t))
              : ((t = r.schema.stringify(e.value)),
                (o[n.id][e.component] = t)));
        });
      },
      826: () => {
        var e, t, n, r, o, i;
        (e = window),
          (t = document),
          (n = 'script'),
          (r = 'ga'),
          (e.GoogleAnalyticsObject = r),
          (e[r] =
            e[r] ||
            function () {
              (e[r].q = e[r].q || []).push(arguments);
            }),
          (e[r].l = 1 * new Date()),
          (o = t.createElement(n)),
          (i = t.getElementsByTagName(n)[0]),
          (o.async = 1),
          (o.src = 'https://www.google-analytics.com/analytics.js'),
          o.setAttribute('data-aframe-inspector', ''),
          i.parentNode.insertBefore(o, i),
          ga('create', 'UA-80530812-1', 'auto'),
          ga('send', 'pageview');
      },
      184: (e, t) => {
        var n;
        !(function () {
          'use strict';
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var i = typeof n;
                if ('string' === i || 'number' === i) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var a = o.apply(null, n);
                    a && e.push(a);
                  }
                } else if ('object' === i) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes('[native code]')
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var s in n) r.call(n, s) && n[s] && e.push(s);
                }
              }
            }
            return e.join(' ');
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      152: function (e) {
        var t;
        (t = function () {
          return (function () {
            var e = {
                686: function (e, t, n) {
                  'use strict';
                  n.d(t, {
                    default: function () {
                      return C;
                    }
                  });
                  var r = n(279),
                    o = n.n(r),
                    i = n(370),
                    a = n.n(i),
                    s = n(817),
                    l = n.n(s);
                  function c(e) {
                    try {
                      return document.execCommand(e);
                    } catch (e) {
                      return !1;
                    }
                  }
                  var u = function (e) {
                      var t = l()(e);
                      return c('cut'), t;
                    },
                    p = function (e, t) {
                      var n = (function (e) {
                        var t =
                            'rtl' ===
                            document.documentElement.getAttribute('dir'),
                          n = document.createElement('textarea');
                        (n.style.fontSize = '12pt'),
                          (n.style.border = '0'),
                          (n.style.padding = '0'),
                          (n.style.margin = '0'),
                          (n.style.position = 'absolute'),
                          (n.style[t ? 'right' : 'left'] = '-9999px');
                        var r =
                          window.pageYOffset ||
                          document.documentElement.scrollTop;
                        return (
                          (n.style.top = ''.concat(r, 'px')),
                          n.setAttribute('readonly', ''),
                          (n.value = e),
                          n
                        );
                      })(e);
                      t.container.appendChild(n);
                      var r = l()(n);
                      return c('copy'), n.remove(), r;
                    },
                    f = function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : { container: document.body },
                        n = '';
                      return (
                        'string' == typeof e
                          ? (n = p(e, t))
                          : e instanceof HTMLInputElement &&
                            ![
                              'text',
                              'search',
                              'url',
                              'tel',
                              'password'
                            ].includes(null == e ? void 0 : e.type)
                          ? (n = p(e.value, t))
                          : ((n = l()(e)), c('copy')),
                        n
                      );
                    };
                  function d(e) {
                    return (
                      (d =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                          ? function (e) {
                              return typeof e;
                            }
                          : function (e) {
                              return e &&
                                'function' == typeof Symbol &&
                                e.constructor === Symbol &&
                                e !== Symbol.prototype
                                ? 'symbol'
                                : typeof e;
                            }),
                      d(e)
                    );
                  }
                  function m(e) {
                    return (
                      (m =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                          ? function (e) {
                              return typeof e;
                            }
                          : function (e) {
                              return e &&
                                'function' == typeof Symbol &&
                                e.constructor === Symbol &&
                                e !== Symbol.prototype
                                ? 'symbol'
                                : typeof e;
                            }),
                      m(e)
                    );
                  }
                  function h(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  function y(e, t) {
                    return (
                      (y =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      y(e, t)
                    );
                  }
                  function b(e, t) {
                    return !t || ('object' !== m(t) && 'function' != typeof t)
                      ? (function (e) {
                          if (void 0 === e)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return e;
                        })(e)
                      : t;
                  }
                  function g(e) {
                    return (
                      (g = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                      g(e)
                    );
                  }
                  function v(e, t) {
                    var n = 'data-clipboard-'.concat(e);
                    if (t.hasAttribute(n)) return t.getAttribute(n);
                  }
                  var A = (function (e) {
                      !(function (e, t) {
                        if ('function' != typeof t && null !== t)
                          throw new TypeError(
                            'Super expression must either be null or a function'
                          );
                        (e.prototype = Object.create(t && t.prototype, {
                          constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          t && y(e, t);
                      })(l, e);
                      var t,
                        n,
                        r,
                        o,
                        i,
                        s =
                          ((o = l),
                          (i = (function () {
                            if (
                              'undefined' == typeof Reflect ||
                              !Reflect.construct
                            )
                              return !1;
                            if (Reflect.construct.sham) return !1;
                            if ('function' == typeof Proxy) return !0;
                            try {
                              return (
                                Date.prototype.toString.call(
                                  Reflect.construct(Date, [], function () {})
                                ),
                                !0
                              );
                            } catch (e) {
                              return !1;
                            }
                          })()),
                          function () {
                            var e,
                              t = g(o);
                            if (i) {
                              var n = g(this).constructor;
                              e = Reflect.construct(t, arguments, n);
                            } else e = t.apply(this, arguments);
                            return b(this, e);
                          });
                      function l(e, t) {
                        var n;
                        return (
                          (function (e, t) {
                            if (!(e instanceof t))
                              throw new TypeError(
                                'Cannot call a class as a function'
                              );
                          })(this, l),
                          (n = s.call(this)).resolveOptions(t),
                          n.listenClick(e),
                          n
                        );
                      }
                      return (
                        (t = l),
                        (n = [
                          {
                            key: 'resolveOptions',
                            value: function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              (this.action =
                                'function' == typeof e.action
                                  ? e.action
                                  : this.defaultAction),
                                (this.target =
                                  'function' == typeof e.target
                                    ? e.target
                                    : this.defaultTarget),
                                (this.text =
                                  'function' == typeof e.text
                                    ? e.text
                                    : this.defaultText),
                                (this.container =
                                  'object' === m(e.container)
                                    ? e.container
                                    : document.body);
                            }
                          },
                          {
                            key: 'listenClick',
                            value: function (e) {
                              var t = this;
                              this.listener = a()(e, 'click', function (e) {
                                return t.onClick(e);
                              });
                            }
                          },
                          {
                            key: 'onClick',
                            value: function (e) {
                              var t = e.delegateTarget || e.currentTarget,
                                n = this.action(t) || 'copy',
                                r = (function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                    t = e.action,
                                    n = void 0 === t ? 'copy' : t,
                                    r = e.container,
                                    o = e.target,
                                    i = e.text;
                                  if ('copy' !== n && 'cut' !== n)
                                    throw new Error(
                                      'Invalid "action" value, use either "copy" or "cut"'
                                    );
                                  if (void 0 !== o) {
                                    if (
                                      !o ||
                                      'object' !== d(o) ||
                                      1 !== o.nodeType
                                    )
                                      throw new Error(
                                        'Invalid "target" value, use a valid Element'
                                      );
                                    if (
                                      'copy' === n &&
                                      o.hasAttribute('disabled')
                                    )
                                      throw new Error(
                                        'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                      );
                                    if (
                                      'cut' === n &&
                                      (o.hasAttribute('readonly') ||
                                        o.hasAttribute('disabled'))
                                    )
                                      throw new Error(
                                        'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                      );
                                  }
                                  return i
                                    ? f(i, { container: r })
                                    : o
                                    ? 'cut' === n
                                      ? u(o)
                                      : f(o, { container: r })
                                    : void 0;
                                })({
                                  action: n,
                                  container: this.container,
                                  target: this.target(t),
                                  text: this.text(t)
                                });
                              this.emit(r ? 'success' : 'error', {
                                action: n,
                                text: r,
                                trigger: t,
                                clearSelection: function () {
                                  t && t.focus(),
                                    window.getSelection().removeAllRanges();
                                }
                              });
                            }
                          },
                          {
                            key: 'defaultAction',
                            value: function (e) {
                              return v('action', e);
                            }
                          },
                          {
                            key: 'defaultTarget',
                            value: function (e) {
                              var t = v('target', e);
                              if (t) return document.querySelector(t);
                            }
                          },
                          {
                            key: 'defaultText',
                            value: function (e) {
                              return v('text', e);
                            }
                          },
                          {
                            key: 'destroy',
                            value: function () {
                              this.listener.destroy();
                            }
                          }
                        ]),
                        (r = [
                          {
                            key: 'copy',
                            value: function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : { container: document.body };
                              return f(e, t);
                            }
                          },
                          {
                            key: 'cut',
                            value: function (e) {
                              return u(e);
                            }
                          },
                          {
                            key: 'isSupported',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : ['copy', 'cut'],
                                t = 'string' == typeof e ? [e] : e,
                                n = !!document.queryCommandSupported;
                              return (
                                t.forEach(function (e) {
                                  n = n && !!document.queryCommandSupported(e);
                                }),
                                n
                              );
                            }
                          }
                        ]),
                        n && h(t.prototype, n),
                        r && h(t, r),
                        l
                      );
                    })(o()),
                    C = A;
                },
                828: function (e) {
                  if (
                    'undefined' != typeof Element &&
                    !Element.prototype.matches
                  ) {
                    var t = Element.prototype;
                    t.matches =
                      t.matchesSelector ||
                      t.mozMatchesSelector ||
                      t.msMatchesSelector ||
                      t.oMatchesSelector ||
                      t.webkitMatchesSelector;
                  }
                  e.exports = function (e, t) {
                    for (; e && 9 !== e.nodeType; ) {
                      if ('function' == typeof e.matches && e.matches(t))
                        return e;
                      e = e.parentNode;
                    }
                  };
                },
                438: function (e, t, n) {
                  var r = n(828);
                  function o(e, t, n, r, o) {
                    var a = i.apply(this, arguments);
                    return (
                      e.addEventListener(n, a, o),
                      {
                        destroy: function () {
                          e.removeEventListener(n, a, o);
                        }
                      }
                    );
                  }
                  function i(e, t, n, o) {
                    return function (n) {
                      (n.delegateTarget = r(n.target, t)),
                        n.delegateTarget && o.call(e, n);
                    };
                  }
                  e.exports = function (e, t, n, r, i) {
                    return 'function' == typeof e.addEventListener
                      ? o.apply(null, arguments)
                      : 'function' == typeof n
                      ? o.bind(null, document).apply(null, arguments)
                      : ('string' == typeof e &&
                          (e = document.querySelectorAll(e)),
                        Array.prototype.map.call(e, function (e) {
                          return o(e, t, n, r, i);
                        }));
                  };
                },
                879: function (e, t) {
                  (t.node = function (e) {
                    return (
                      void 0 !== e &&
                      e instanceof HTMLElement &&
                      1 === e.nodeType
                    );
                  }),
                    (t.nodeList = function (e) {
                      var n = Object.prototype.toString.call(e);
                      return (
                        void 0 !== e &&
                        ('[object NodeList]' === n ||
                          '[object HTMLCollection]' === n) &&
                        'length' in e &&
                        (0 === e.length || t.node(e[0]))
                      );
                    }),
                    (t.string = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    }),
                    (t.fn = function (e) {
                      return (
                        '[object Function]' ===
                        Object.prototype.toString.call(e)
                      );
                    });
                },
                370: function (e, t, n) {
                  var r = n(879),
                    o = n(438);
                  e.exports = function (e, t, n) {
                    if (!e && !t && !n)
                      throw new Error('Missing required arguments');
                    if (!r.string(t))
                      throw new TypeError('Second argument must be a String');
                    if (!r.fn(n))
                      throw new TypeError('Third argument must be a Function');
                    if (r.node(e))
                      return (function (e, t, n) {
                        return (
                          e.addEventListener(t, n),
                          {
                            destroy: function () {
                              e.removeEventListener(t, n);
                            }
                          }
                        );
                      })(e, t, n);
                    if (r.nodeList(e))
                      return (function (e, t, n) {
                        return (
                          Array.prototype.forEach.call(e, function (e) {
                            e.addEventListener(t, n);
                          }),
                          {
                            destroy: function () {
                              Array.prototype.forEach.call(e, function (e) {
                                e.removeEventListener(t, n);
                              });
                            }
                          }
                        );
                      })(e, t, n);
                    if (r.string(e))
                      return (function (e, t, n) {
                        return o(document.body, e, t, n);
                      })(e, t, n);
                    throw new TypeError(
                      'First argument must be a String, HTMLElement, HTMLCollection, or NodeList'
                    );
                  };
                },
                817: function (e) {
                  e.exports = function (e) {
                    var t;
                    if ('SELECT' === e.nodeName) e.focus(), (t = e.value);
                    else if (
                      'INPUT' === e.nodeName ||
                      'TEXTAREA' === e.nodeName
                    ) {
                      var n = e.hasAttribute('readonly');
                      n || e.setAttribute('readonly', ''),
                        e.select(),
                        e.setSelectionRange(0, e.value.length),
                        n || e.removeAttribute('readonly'),
                        (t = e.value);
                    } else {
                      e.hasAttribute('contenteditable') && e.focus();
                      var r = window.getSelection(),
                        o = document.createRange();
                      o.selectNodeContents(e),
                        r.removeAllRanges(),
                        r.addRange(o),
                        (t = r.toString());
                    }
                    return t;
                  };
                },
                279: function (e) {
                  function t() {}
                  (t.prototype = {
                    on: function (e, t, n) {
                      var r = this.e || (this.e = {});
                      return (
                        (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this
                      );
                    },
                    once: function (e, t, n) {
                      var r = this;
                      function o() {
                        r.off(e, o), t.apply(n, arguments);
                      }
                      return (o._ = t), this.on(e, o, n);
                    },
                    emit: function (e) {
                      for (
                        var t = [].slice.call(arguments, 1),
                          n = ((this.e || (this.e = {}))[e] || []).slice(),
                          r = 0,
                          o = n.length;
                        r < o;
                        r++
                      )
                        n[r].fn.apply(n[r].ctx, t);
                      return this;
                    },
                    off: function (e, t) {
                      var n = this.e || (this.e = {}),
                        r = n[e],
                        o = [];
                      if (r && t)
                        for (var i = 0, a = r.length; i < a; i++)
                          r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
                      return o.length ? (n[e] = o) : delete n[e], this;
                    }
                  }),
                    (e.exports = t),
                    (e.exports.TinyEmitter = t);
                }
              },
              t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var o = (t[r] = { exports: {} });
              return e[r](o, o.exports, n), o.exports;
            }
            return (
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, { a: t }), t;
              }),
              (n.d = function (e, t) {
                for (var r in t)
                  n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              n(686)
            );
          })().default;
        }),
          (e.exports = t());
      },
      553: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(537),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          'body.aframe-inspector-opened,.toggle-edit{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI",Helvetica,Arial,sans-serif}.wf-roboto-n4-active body.aframe-inspector-opened,.wf-roboto-n4-active .toggle-edit{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI",Helvetica,Arial,sans-serif}body.aframe-inspector-opened{background:#1d1d1d;color:#fff;font-size:12px;margin:0;overflow:hidden}#aframeInspector #toolbar{background-color:#242424}#aframeInspector #toolbar .toolbarActions{padding:0 0 5px}#aframeInspector #toolbar .toolbarActions a.disabled{color:#666;cursor:default}#aframeInspector #scenegraph{background:#242424;border-top:1px solid #111;display:flex;flex-direction:column;overflow:auto;padding-top:32px;width:230px}#aframeInspector #scenegraph .entity{background:#242424;cursor:pointer;display:flex;justify-content:space-between;padding:3px;width:100%;white-space:nowrap}#aframeInspector #scenegraph .entity:hover{background:#1d2f39}#aframeInspector #scenegraph .entity.active{background-color:#155373;color:#fff}#aframeInspector #scenegraph .entity.active .component:hover{color:#1888c1}#aframeInspector #scenegraph .entity.active .entityActions{display:inline}#aframeInspector #scenegraph .entity.novisible.active span,#aframeInspector #scenegraph .entity.novisible.active .fa,#aframeInspector #scenegraph .entity.novisible.active .collapsespace,#aframeInspector #scenegraph .entity.novisible.active .id{color:#999}#aframeInspector #scenegraph .entity.novisible:not(.active) span,#aframeInspector #scenegraph .entity.novisible:not(.active) .fa,#aframeInspector #scenegraph .entity.novisible:not(.active) .collapsespace,#aframeInspector #scenegraph .entity.novisible:not(.active) .id{color:#626262}#aframeInspector #scenegraph .component:hover{color:#1faaf2}#aframeInspector #scenegraph .entityIcons{margin-left:2px}#aframeInspector #scenegraph .entityActions{display:none;margin:0 14px}#aframeInspector #scenegraph .entityActions .button{color:#fff;font-size:12px;margin-left:6px}#aframeInspector #scenegraph .fa{color:#ccc}#aframeInspector #scenegraph .entityActions .fa:hover{color:#1faaf2}#aframeInspector #scenegraph .active .fa{color:#fafafa}#aframeInspector #scenegraph .id{color:#ccc}#aframeInspector #scenegraph .option.active .id{color:#fff}#aframeInspector #scenegraph .collapsespace{color:#eee;display:inline-block;text-align:center;width:14px}#aframeInspector #scenegraph .fa-eye{color:#bbb}#aframeInspector #scenegraph .icons a.button{color:#fff}#aframeInspector #scenegraph .search{padding:5px;font-size:16px;position:relative}#aframeInspector #scenegraph .search input{color:#c3c3c3;background:#1d1d1d;border-radius:5px;height:22px;text-indent:10px;width:216px}#aframeInspector #scenegraph .search .fa-search{position:absolute;right:14px;top:8px}#aframeInspector #scenegraph .search .fa-times{position:absolute;right:15px;top:9px}#aframeInspector #scenegraph .outliner{background:#242424;color:#c3c3c3;cursor:default;flex:1 1 auto;font-size:13px;height:calc(100% - 98px);line-height:normal;outline:none;overflow-y:auto;padding:0;width:230px}#aframeInspector .scenegraph-bottom{background-color:#323232;border-top:1px solid #111;bottom:10;height:40px;left:0;z-index:100}#aframeInspector .scenegraph-bottom a{float:right;margin:10px}#aframeInspector .components{background-color:#242424;color:#c3c3c3;height:100%;overflow:auto;position:fixed;width:331px}#aframeInspector div.vec2,#aframeInspector div.vec3,#aframeInspector div.vec4{display:inline}#aframeInspector .vec2 input.number,#aframeInspector .vec3 input.number{width:40px}#aframeInspector .vec4 input.number{width:34px}#aframeInspector .collapsible-header{align-items:center;display:flex;justify-content:space-between}#aframeInspector .collapsible-header .entityPrint{color:#fff}#aframeInspector .collapsible-content{padding:5px 0}#aframeInspector .componentTitle span{max-width:200px;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap;color:#fff;font-weight:600;vertical-align:bottom !important}#aframeInspector .collapsible .static{background:#333;border-bottom:2px solid #242424;box-sizing:content-box;cursor:pointer;height:16px;padding:8px 10px 12px 10px;vertical-align:bottom;font-size:13px}#aframeInspector .collapsible .static:hover{background:#393939}#aframeInspector .collapsible .menu{text-align:right}#aframeInspector .collapsible .menuafter{color:#bbb;content:\'\\2807\';font-size:12px;padding:5px;text-align:right}#aframeInspector .collapsible .static{margin:0}#aframeInspector .collapsible .static .collapse-button{border:6px solid transparent;float:left;height:0;margin-right:10px;margin-left:2px;width:0}#aframeInspector .collapsible.collapsed .static .collapse-button{border-left-color:#c3c3c3;margin-top:4px}#aframeInspector .collapsible:not(.collapsed) .static .collapse-button{border-top-color:#c3c3c3;margin-top:7px}#aframeInspector .propertyRow{align-items:center;display:flex;font-size:13px;min-height:30px;padding:2px 15px}#aframeInspector .propertyRow .text{cursor:default;display:inline-block;overflow:hidden;padding-right:10px;text-overflow:ellipsis;vertical-align:middle;width:118px}#aframeInspector .propertyRow .map_value{margin:0 0 0 5px;width:68px}#aframeInspector .propertyRow .Select-control{font-size:11px;height:24px}#aframeInspector .propertyRow .Select-placeholder,#aframeInspector .propertyRow .Select--single > .Select-control .Select-value{line-height:19px}#aframeInspector .propertyRow .Select-input{height:22px}#aframeInspector .propertyRow input[type=text],#aframeInspector .propertyRow input[type=number],#aframeInspector .propertyRow input.string,#aframeInspector .propertyRow input.number{background:#1d1d1d;color:#1faaf2;min-height:26px;padding-bottom:1px;padding-left:5px;padding-right:5px;padding-top:1px}#aframeInspector .propertyRow input[type=text]:last-child,#aframeInspector .propertyRow input[type=number]:last-child,#aframeInspector .propertyRow input.string:last-child,#aframeInspector .propertyRow input.number:last-child{padding-right:0}#aframeInspector .propertyRow input.string{padding-left:8px;box-sizing:border-box;width:165px}#aframeInspector .propertyRow input[type=text]:focus,#aframeInspector .propertyRow input.string:focus{box-shadow:none}#aframeInspector .propertyRow .color_value{margin:0 0 0 5px;width:68px;letter-spacing:1px}#aframeInspector .propertyRowDefined .text{color:#fafafa;font-weight:500}#aframeInspector .components *{vertical-align:middle}#aframeInspector span.subcomponent{color:#999;float:none !important;margin-left:10px;vertical-align:top !important}#aframeInspector a.help-link{opacity:.4}#aframeInspector a.help-linkhover{opacity:1}#aframeInspector #addComponentContainer{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:20px 10px;background:#1d1d1d}#aframeInspector #addComponentContainer #addComponent{text-align:left;width:200px}#aframeInspector #addComponentContainer #addComponent .select__control{background:#161616;height:35px;color:#1faaf2}#aframeInspector #addComponentContainer #addComponent .option{display:flex;justify-content:space-between}#aframeInspector #addComponentContainer #addComponent .option span{color:#1faaf2}#aframeInspector #addComponentContainer #addComponentHeader{font-size:15px;margin:5px 0 10px 0}#aframeInspector #addComponentContainer input[type=text]:focus{box-shadow:none}#aframeInspector .Select-menu-outer .is-focused span{color:#fff}#aframeInspector .component-title{align-items:center;display:flex}#aframeInspector #componentEntityHeader .collapsible-header{bottom:4px;position:relative}#aframeInspector #componentEntityHeader .collapse-button{display:none}#aframeInspector #componentEntityHeader .static{height:13px}#aframeInspector #componentEntityHeader .entityPrint{font-size:15px;padding-left:5px}#aframeInspector #componentEntityHeader .entityName{max-width:160px;top:0}#aframeInspector #componentEntityHeader .entityIcons{color:#fafafa}#aframeInspector #mixinSelect{width:160px}#aframeInspector .propertyRow .texture{display:flex}#aframeInspector .propertyRow .texture input{margin-left:0;width:120px}#aframeInspector #componentEntityHeader .gltfIcon img{top:0}#aframeInspector .fa{color:#c3c3c3}#aframeInspector .fa:hover{color:#1faaf2}#aframeInspector .entityPrint{font-family:system-ui,BlinkMacSystemFont,-apple-system,"Segoe UI",Helvetica,Arial,sans-serif;line-height:1.15em}#aframeInspector .entityName{display:inline-block;overflow:hidden;position:relative;text-overflow:ellipsis;top:3px;white-space:nowrap}#aframeInspector [data-entity-name-type="id"]{color:#92374d}#aframeInspector [data-entity-name-type="class"]{color:#514b23}#aframeInspector [data-entity-name-type="mixin"]{color:#d66853}#aframeInspector .help-lists{display:flex;justify-content:space-around}#aframeInspector .help-list{list-style:none;margin:0;padding:0 0 10px;width:350px}#aframeInspector .help-list li{margin-right:40px}#aframeInspector .help-key-unit{line-height:1.8;margin-right:2em;padding:5px 0}#aframeInspector .help-key{bottom:2px;margin-right:4px;min-width:60px;position:relative}#aframeInspector .help-key span{background-color:#2e2e2e;background-repeat:repeat-x;border:1px solid #666;border-radius:3px;box-shadow:0 0 5px #000;color:#999;display:inline-block;font-size:12px;padding:0 8px;text-align:center}#aframeInspector .help-key-def{color:#bbb;display:inline-block;margin-left:1em}#aframeInspector .select__control{border:0;border-radius:0;cursor:pointer;min-height:26px;font-family:system-ui,BlinkMacSystemFont,-apple-system,"Segoe UI",Helvetica,Arial,sans-serif;font-size:13px}#aframeInspector .select__indicator{height:26px}#aframeInspector .select__indicator-separator{display:none}#aframeInspector .select__input{min-height:auto !important}#aframeInspector .select__control,#aframeInspector .select__menu{background:#1d1d1d}#aframeInspector .select__option{padding:5px 10px}#aframeInspector .select__placeholder,#aframeInspector .select__menu{color:#c3c3c3}#aframeInspector .select__single-value{color:#1faaf2}#aframeInspector .select__control--is-focused{box-shadow:none !important}#aframeInspector .select__option{cursor:pointer}#aframeInspector .select__clear-indicator{display:none}#aframeInspector .select__label{font-size:11px}#aframeInspector .select__option--is-focused{background:#155373}#aframeInspector .select__value-container{height:26px;position:static}#aframeInspector .select__value-container.select__value-container--is-multi{height:auto;padding:6px}#aframeInspector .select__dropdown-indicator{padding:3px 8px}#aframeInspector .select__multi-value{background:#242424;color:#1faaf2}#aframeInspector .select__multi-value__label{color:#1faaf2}#aframeInspector .select__value-container--is-multi > :last-child{display:none}#aframeInspector .select__multi-value__remove:hover{color:#fff;background:#242424}#aframeInspector .modal{animation:animateopacity .2s ease-out;background-color:#000;background-color:rgba(0,0,0,0.6);display:flex;height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:9999999999}#aframeInspector .modal h3{font-size:18px;font-weight:100;margin:.6em 0}#aframeInspector #textureModal .modal-content{height:calc(100% - 50px);width:calc(100% - 50px)}#aframeInspector .modal-content{animation:animatetop .2s ease-out;animation-duration:.2s;animation-name:animatetop;background-color:#232323;box-shadow:0 4px 8px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.5);margin:auto;overflow:hidden;padding:0}#aframeInspector .close{color:#fff;float:right;font-size:28px;font-weight:bold}#aframeInspector .closehover,#aframeInspector .closefocus{color:#08f;cursor:pointer;text-decoration:none}#aframeInspector .modal-header{color:#fff;padding:2px 16px}#aframeInspector .modal-body{overflow:auto;padding:16px}#aframeInspector .modal-footer{color:#fff;padding:2px 16px}#aframeInspector .gallery{background:#232323;display:flex;flex-wrap:wrap;margin:15px auto 0;overflow:auto;padding:15px 3px 3px}#aframeInspector .newimage .gallery{padding:16px}#aframeInspector .gallery li{border-radius:2px;box-shadow:0 0 6px rgba(0,0,0,0.6);cursor:pointer;margin:8px;overflow:hidden;width:155px}#aframeInspector .gallery li.selected,#aframeInspector .gallery li:hover{box-shadow:0 0 0 2px #1eaaf1}#aframeInspector .gallery li .detail{background-color:#323232;margin:0;min-height:60px;padding:3px 10px}#aframeInspector .gallery li .button.fa-external-link{margin-left:136px;margin-top:5px;position:fixed}#aframeInspector .preview{padding:10px;width:150px}#aframeInspector .preview input{display:block;margin:8px 0;width:144px}#aframeInspector .preview button{width:155px}#aframeInspector .preview .detail .title{color:#fff;display:inline-block;max-width:155px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#aframeInspector .gallery li.selected .detail,#aframeInspector .gallery li:hover .detail{background-color:#444}#aframeInspector .gallery li .detail span{color:#777;display:block;margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:140px}#aframeInspector .gallery li.selected .detail span,#aframeInspector .gallery li:hover .detail span{color:#888}#aframeInspector .gallery li .detail span.title{color:#fff !important}#aframeInspector .modal button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;box-shadow:none;cursor:pointer;display:inline-block;font-size:12px;line-height:1.8;margin:0 10px 0 0;padding:5px 10px}#aframeInspector .modal buttonfocus{outline:none}#aframeInspector .modal button{background-color:#1eaaf1;border:none;color:#fff}#aframeInspector .modal buttonhover,#aframeInspector .modal button.hover{background-color:#346392;text-shadow:-1px 1px #27496d}#aframeInspector .modal buttonactive,#aframeInspector .modal button.active{background-color:#27496d;text-shadow:-1px 1px #193047}#aframeInspector .modal buttondisabled{background-color:#888;cursor:none}#aframeInspector .newimage{background-color:#323232;color:#bcbcbc;display:flex;font-size:13px;justify-content:space-between;margin-top:10px;overflow:auto;padding:10px}#aframeInspector .newimage input{color:#1eaaf1;padding:3px 5px}#aframeInspector .texture canvas + input{margin-left:5px}#aframeInspector .texture .fa{padding-right:5px}#aframeInspector .texture .fa-external-link{font-size:14px;padding-top:2px}#aframeInspector .uploader-normal-button .hidden{display:none}#aframeInspector .gallery a.fa.texture-link{box-shadow:0 0 14px -1px rgba(0,0,0,0.75);position:fixed}#aframeInspector .assets.search{margin-top:10px;width:200px}#aframeInspector .assets.search .fa-search{top:7px}#aframeInspector .new_asset_options{margin:10px}#aframeInspector .new_asset_options > ul{margin-left:10px;padding:5px}#aframeInspector .new_asset_options > ul > li{padding:10px 0}#aframeInspector .new_asset_options .imageUrl{margin-left:5px;width:350px}#aframeInspector .texture canvas{border:1px solid #333;cursor:pointer}#aframeInspector #viewportBar{align-items:center;background-color:#242424;color:#c3c3c3;display:flex;flex-grow:2;height:32px;font-size:15px;justify-content:space-between;left:0;margin:0 auto;right:0;top:0}#aframeInspector .toolbarButtons{position:relative}#aframeInspector .toolbarButtons *{margin-left:0;padding:8px;vertical-align:middle}#aframeInspector .toolbarButtons a.button{margin:0 6px 0 0}#aframeInspector .toolbarButtons a.button:not(.active):hover{background-color:#444}#aframeInspector .toolbarButtons .active{background-color:#1faaf2;color:#fff}#aframeInspector .toolbarButtons .active:hover{color:#fff !important}#aframeInspector .local-transform{padding-left:10px}#aframeInspector .local-transform label{color:#aaa;padding-left:5px}#aframeInspector .local-transform a.button{padding-top:0}#aframeInspector #cameraSelect{cursor:pointer;width:110px}#aframeInspector #cameraSelect .select__dropdown-indicator{padding-left:3px;padding-right:3px}#aframeInspector #cameraToolbar{margin-left:5px;align-items:center;display:flex}#aframeInspector #cameraToolbar a{margin-right:10px}#aframeInspector #cameraToolbar .select__control{background:none}#aframeInspector #cameraToolbar .select__single-value{color:#c3c3c3}#aframeInspector #cameraToolbar .select__single-value:hover{color:#1faaf2}#aframeInspector #viewportHud{display:none}@media (min-width:1024px){#aframeInspector #viewportHud{display:block}}#aframeInspector .Select-control{background-color:#222 !important;border:none;border-radius:0;color:#1faaf2;font-family:$monosapce}#aframeInspector .Select-menu-outer{border:none}#aframeInspector .Select-menu-outer .is-focused{background-color:#1faaf2 !important;color:#c3c3c3}#aframeInspector .Select-option{background-color:#222 !important}#aframeInspector .select-widget{display:inline-block;width:157px}#aframeInspector .Select-placeholder,#aframeInspector .Select--single > .Select-control .Select-value{color:#1faaf2 !important}#aframeInspector .Select-value-label{color:#1faaf2 !important}#aframeInspector .dropbtn{border:none;color:#c3c3c3;cursor:pointer}#aframeInspector .dropdown{display:inline-block;position:relative}#aframeInspector .dropdown-content{background-color:#f9f9f9;box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);display:none;left:8px;min-width:38px;position:absolute;z-index:999}#aframeInspector .dropdown-content a{background-color:#232323;color:#7d7d7d;display:block;padding:10px 14px;text-decoration:none}#aframeInspector .dropdown-content a:hover{background-color:#4ecbff;color:#c3c3c3}#aframeInspector .dropdownhover .dropdown-content{display:block}#aframeInspector .dropdownhover .dropbtn{color:#1faaf2}#aframeInspector .Select,#aframeInspector code,#aframeInspector pre,#aframeInspector input,#aframeInspector textarea,#aframeInspector select{font-family:system-ui,BlinkMacSystemFont,-apple-system,"Segoe UI",Helvetica,Arial,sans-serif;font-size:13px}#aframeInspector .wf-robotomono-n4-active .Select,#aframeInspector .wf-robotomono-n4-active code,#aframeInspector .wf-robotomono-n4-active pre,#aframeInspector .wf-robotomono-n4-active input,#aframeInspector .wf-robotomono-n4-active textarea,#aframeInspector .wf-robotomono-n4-active select{font-family:Roboto Mono,Consolas,Andale Mono,Monaco,Courier New,monospace}#aframeInspector hr{border:0;border-top:1px solid #ccc}#aframeInspector a{cursor:pointer}#aframeInspector button{position:relative}#aframeInspector code{font-family:Consolas,Andale Mono,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}#aframeInspector textarea{-moz-tab-size:4;-o-tab-size:4;tab-size:4;white-space:pre;word-wrap:normal}#aframeInspector textarea.success{border-color:#8b8 !important}#aframeInspector textarea.fail{background-color:rgba(255,0,0,0.05);border-color:#f00 !important}#aframeInspector textarea,#aframeInspector input{outline:none}#aframeInspector .gltfIcon img{box-sizing:content-box;display:inline;height:20px;left:5px;padding:0 5px;position:relative;top:4px;vertical-align:baseline;width:20px}#aframeInspector #scenegraph,#aframeInspector #rightPanel{z-index:9998}#aframeInspector #sidebar,#aframeInspector #scenegraph,#aframeInspector .panel{cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}#aframeInspector .toggle-edit{background-color:#92374d;box-sizing:content-box;color:#fafafa;font-size:13px;left:3px;line-height:normal;margin:0;padding:6px 10px;position:fixed;text-align:center;text-decoration:none;top:3px;width:204px;z-index:999999999}#aframeInspector .toggle-edithover{background-color:#e42b5a}#aframeInspector input{background-color:transparent;border:1px solid #555;color:#fff}#aframeInspector input,#aframeInspector .texture canvas{transition:.1s background-color ease-in-out,.1s border-color ease-in-out,.1s color ease-in-out}#aframeInspector input[type=text],#aframeInspector input[type=number],#aframeInspector input.string,#aframeInspector input.number{min-height:14px;outline:none}#aframeInspector input[type="checkbox"]{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto;cursor:pointer;margin:0;height:18px;width:18px}#aframeInspector input[type="checkbox"]:focus{box-shadow:none}#aframeInspector input.number{background-color:transparent !important;border:0;color:#2cb7ff !important;cursor:col-resize;font-size:13px;padding:2px}#aframeInspector input.stringfocus,#aframeInspector input.numberfocus{border:1px solid #20b1fb;color:#fff;cursor:auto}#aframeInspector input.error{border:1px solid #a00}#aframeInspector #sidebar{background:#242424;width:331px}#aframeInspector #sidebar *{vertical-align:middle}#aframeInspector input,#aframeInspector textarea,#aframeInspector select{background:#222;border:1px solid transparent;color:#888}#aframeInspector select{background:#393939}#aframeInspector input[type=color]{background-color:#333;border:1px solid #111;height:28px;cursor:pointer}#aframeInspector input[type=color]{cursor:pointer;height:25px;padding:0;width:50px}#aframeInspector input[type=color]-webkit-color-swatch{border:0}#aframeInspector input[type=color]-webkit-color-swatch-wrapper{padding:0}#aframeInspector input[type=color]-moz-color-swatch{border:0}#aframeInspector input[type=color]-moz-focus-inner{border:0;padding:0}#aframeInspector .hidden{visibility:hidden}#aframeInspector a.button{color:#bcbcbc;font-size:16px;margin-left:10px;text-decoration:none}#aframeInspector a.buttonhover{color:#1faaf2}#aframeInspector .hide{display:none}#aframeInspector .a-canvas.state-dragging{cursor:grabbing}#aframeInspector #rightPanel{align-items:stretch;display:flex;justify-content:flex-end}#aframeInspector #inspectorContainer{display:flex;justify-content:space-between;left:0;height:100%;pointer-events:none;position:fixed;top:0;width:100%;z-index:999999}#aframeInspector #scenegraph,#aframeInspector #viewportBar,#aframeInspector #rightPanel{pointer-events:all}#aframeInspector .aframe-inspector-opened a-scene .a-canvas{background-color:#191919;z-index:9998}#aframeInspector .toggle-sidebar{align-items:center;display:flex;height:100%;position:absolute;z-index:9998}#aframeInspector .toggle-sidebar a{background-color:#262626;color:#bcbcbc;padding:5px;z-index:9998}#aframeInspector .toggle-sidebar a.hover{background-color:#1faaf2;color:#fff}#aframeInspector .toggle-sidebar.left{top:0;left:0}#aframeInspector .toggle-sidebar.right{top:0;right:0}@keyframes animateopacity{from{opacity:0}to{opacity:1}}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/style/index.styl',
              'webpack://./src/style/scenegraph.styl',
              'webpack://./src/style/components.styl',
              'webpack://./src/style/entity.styl',
              'webpack://./src/style/help.styl',
              'webpack://./src/style/select.styl',
              'webpack://./src/style/textureModal.styl',
              'webpack://./src/style/viewport.styl',
              'webpack://./src/style/lib.styl',
              'webpack://./src/style/widgets.styl'
            ],
            names: [],
            mappings:
              'AAEA,0CAEE,kFAA8B,CAEhC,oFAEE,kFAA8B,CAEhC,6BACE,kBAAW,CACX,UAAM,CACN,cAAU,CACV,QAAO,CACP,eAAS,CCbX,0BACE,wBAAiB,CAEjB,0CACE,eAAQ,CAER,qDACE,UAAM,CACN,cAAO,CAEb,6BACE,kBAAW,CACX,yBAAW,CACX,YAAQ,CACR,qBAAe,CACf,aAAS,CACT,gBAAY,CACZ,WAAM,CAEN,qCACE,kBAAW,CACX,cAAO,CACP,YAAQ,CACR,6BAAgB,CAChB,WAAQ,CACR,UAAM,CACN,kBAAY,CAEZ,2CACE,kBAAW,CAEb,4CACE,wBAAiB,CACjB,UAAM,CACN,6DACE,aAAM,CACR,2DACE,cAAQ,CAIR,oPAIE,UAAM,CAGR,4QAIE,aAAM,CAEd,8CACE,aAAM,CAER,0CACE,eAAY,CAEd,4CACE,YAAQ,CACR,aAAO,CAEP,oDACE,UAAM,CACN,cAAU,CACV,eAAY,CAEhB,iCACE,UAAM,CAER,sDACE,aAAM,CAER,yCACE,aAAM,CAER,iCACE,UAAM,CAER,gDACE,UAAM,CAER,4CACE,UAAM,CACN,oBAAQ,CACR,iBAAW,CACX,UAAM,CAER,qCACE,UAAM,CAER,6CACE,UAAM,CAER,qCACE,WAAQ,CACR,cAAU,CACV,iBAAS,CAET,2CACE,aAAM,CACN,kBAAW,CACX,iBAAc,CACd,WAAO,CACP,gBAAY,CACZ,WAAM,CAER,gDACE,iBAAS,CACT,UAAM,CACN,OAAI,CAEN,+CACE,iBAAS,CACT,UAAM,CACN,OAAI,CAER,uCACE,kBAAW,CACX,aAAM,CACN,cAAO,CACP,aAAK,CACL,cAAU,CACV,wBAAO,CACP,kBAAY,CACZ,YAAQ,CACR,eAAW,CACX,SAAQ,CACR,WAAM,CAEV,oCACE,wBAAiB,CACjB,yBAAW,CACX,SAAO,CACP,WAAO,CACP,MAAK,CACL,WAAQ,CAER,sCACE,WAAM,CACN,WAAO,CCxIX,6BACE,wBAAiB,CACjB,aAAM,CACN,WAAO,CACP,aAAS,CACT,cAAS,CACT,WAAM,CAER,8EAGE,cAAQ,CAEV,wEAEE,UAAM,CAER,oCACE,UAAM,CAER,qCACE,kBAAY,CACZ,YAAQ,CACR,6BAAgB,CAChB,kDACE,UAAM,CAEV,sCACE,aAAQ,CAEV,sCACE,eAAU,CACV,eAAS,CACT,sBAAc,CACd,wBAAe,CACf,kBAAY,CACZ,UAAM,CACN,eAAY,CACZ,gCAAe,CAEjB,sCACE,eAAW,CACX,+BAAc,CACd,sBAAW,CACX,cAAO,CACP,WAAO,CACP,0BAAQ,CACR,qBAAe,CACf,cAAU,CACV,4CACE,kBAAW,CAWf,oCACE,gBAAW,CAEb,yCACE,UAAM,CACN,eAAQ,CACR,cAAU,CACV,WAAQ,CACR,gBAAW,CAEb,sCACE,QAAO,CAET,uDACE,4BAAO,CACP,UAAM,CACN,QAAO,CACP,iBAAa,CACb,eAAY,CACZ,OAAM,CAER,iEACE,yBAAkB,CAClB,cAAW,CAEb,uEACE,wBAAiB,CACjB,cAAW,CAEb,8BACE,kBAAY,CACZ,YAAQ,CACR,cAAU,CACV,eAAW,CACX,gBAAQ,CAER,oCACE,cAAO,CACP,oBAAQ,CACR,eAAS,CACT,kBAAc,CACd,sBAAc,CACd,qBAAe,CACf,WAAM,CAER,yCACE,gBAAO,CACP,UAAM,CAER,8CACE,cAAU,CACV,WAAO,CAET,gIAEE,gBAAY,CAEd,4CACE,WAAO,CAET,sLAIE,kBAAW,CACX,aAAM,CACN,eAAW,CACX,kBAAe,CACf,gBAAa,CACb,iBAAc,CACd,eAAY,CACZ,kOACE,eAAc,CAElB,2CACE,gBAAa,CACb,qBAAW,CACX,WAAM,CAER,sGAEE,eAAW,CAEb,2CACE,gBAAO,CACP,UAAM,CACN,kBAAe,CAEnB,2CACE,aAAM,CACN,eAAY,CAEd,+BACE,qBAAe,CAEjB,mCACE,UAAM,CACN,qBAAM,CACN,gBAAY,CACZ,6BAAe,CAEjB,6BACE,UAAQ,CAEV,kCACE,SAAQ,CAEV,wCACE,kBAAY,CACZ,YAAQ,CACR,qBAAe,CACf,sBAAgB,CAChB,iBAAQ,CACR,kBAAW,CAEX,sDACE,eAAW,CACX,WAAM,CACN,uEACE,kBAAW,CACX,WAAO,CACP,aAAM,CACR,8DACE,YAAQ,CACR,6BAAgB,CAChB,mEACE,aAAM,CAEZ,4DACE,cAAU,CACV,mBAAO,CAET,+DACE,eAAW,CAEf,qDACE,UAAM,CAER,kCACE,kBAAY,CACZ,YAAQ,CAGR,4DACE,UAAO,CACP,iBAAS,CACX,yDACE,YAAQ,CACV,gDACE,WAAO,CACT,qDACE,cAAU,CACV,gBAAa,CACf,oDACE,eAAU,CACV,KAAI,CACN,qDACE,aAAM,CAEV,8BACE,WAAM,CAER,uCACE,YAAQ,CACR,6CACE,aAAY,CACZ,WAAM,CAEV,sDACE,KAAI,CAEN,qBACE,aAAM,CACN,2BACE,aAAM,CCjPV,8BACE,4FAAY,CACZ,kBAAY,CAEd,6BACE,oBAAQ,CACR,eAAS,CACT,iBAAS,CACT,sBAAc,CACd,OAAI,CACJ,kBAAY,CAEd,8CACE,aAAM,CAER,iDACE,aAAM,CAER,iDACE,aAAM,CCrBR,6BACE,YAAQ,CACR,4BAAgB,CAElB,4BACE,eAAW,CACX,QAAO,CACP,gBAAQ,CACR,WAAM,CAER,+BACE,iBAAa,CAEf,gCACE,eAAY,CACZ,gBAAa,CACb,aAAQ,CAEV,2BACE,UAAO,CACP,gBAAa,CACb,cAAU,CACV,iBAAS,CAEX,gCACE,wBAAiB,CACjB,0BAAkB,CAClB,qBAAO,CACP,iBAAc,CACd,uBAAW,CACX,UAAM,CACN,oBAAQ,CACR,cAAU,CACV,aAAQ,CACR,iBAAW,CAEb,+BACE,UAAM,CACN,oBAAQ,CACR,eAAY,CCrCd,kCACE,QAAO,CACP,eAAc,CACd,cAAO,CACP,eAAW,CACX,4FAAY,CACZ,cAAU,CAEZ,oCACE,WAAO,CAET,8CACE,YAAQ,CAEV,gCACE,0BAAW,CAEb,iEAEE,kBAAW,CAEb,iCACE,gBAAQ,CAEV,qEAEE,aAAM,CAER,uCACE,aAAM,CAER,8CACE,0BAAW,CAEb,iCACE,cAAO,CAET,0CACE,YAAQ,CAEV,gCACE,cAAU,CAEZ,6CACE,kBAAW,CAEb,0CACE,WAAO,CACP,eAAS,CACT,4EACE,WAAO,CACP,WAAQ,CAEZ,6CACE,eAAQ,CAEV,sCACE,kBAAW,CACX,aAAM,CAER,6CACE,aAAM,CAER,kEACE,YAAQ,CAEV,oDACE,UAAM,CACN,kBAAW,CCtEb,wBACE,qCAAU,CACV,qBAAiB,CACjB,gCAAiB,CACjB,YAAQ,CACR,WAAO,CACP,MAAK,CACL,aAAS,CACT,cAAS,CACT,KAAI,CACJ,UAAM,CACN,kBAAQ,CAEV,2BACE,cAAU,CACV,eAAY,CACZ,aAAO,CAET,8CACE,wBAAO,CACP,uBAAM,CAER,gCACE,iCAAU,CACV,sBAAmB,CACnB,yBAAe,CACf,wBAAiB,CACjB,mEAAyC,CACzC,WAAO,CACP,eAAS,CACT,SAAQ,CAEV,wBACE,UAAM,CACN,WAAM,CACN,cAAU,CACV,gBAAY,CAEd,0DAEE,UAAM,CACN,cAAO,CACP,oBAAgB,CAElB,+BACE,UAAM,CACN,gBAAQ,CAEV,6BACE,aAAS,CACT,YAAQ,CAEV,+BACE,UAAM,CACN,gBAAQ,CAGV,0BACE,kBAAW,CACX,YAAQ,CACR,cAAU,CACV,kBAAO,CACP,aAAS,CACT,oBAAQ,CAEV,oCACE,YAAQ,CAEV,6BACE,iBAAc,CACd,kCAAW,CACX,cAAO,CACP,UAAO,CACP,eAAS,CACT,WAAM,CAER,yEAEE,4BAAW,CAEb,qCACE,wBAAiB,CACjB,QAAO,CACP,eAAW,CACX,gBAAQ,CAEV,sDACE,iBAAY,CACZ,cAAW,CACX,cAAS,CAEX,0BACE,YAAQ,CACR,WAAM,CAER,gCACE,aAAQ,CACR,YAAO,CACP,WAAM,CAER,iCACE,WAAM,CAER,yCACE,UAAM,CACN,oBAAQ,CACR,eAAU,CACV,eAAS,CACT,sBAAc,CACd,kBAAY,CAEd,yFAEE,qBAAiB,CAEnB,0CACE,UAAM,CACN,aAAQ,CACR,cAAW,CACX,eAAS,CACT,sBAAc,CACd,kBAAY,CACZ,WAAM,CAER,mGAEE,UAAM,CAER,gDACE,qBAAM,CAER,+BACE,uBAAW,CAAX,oBAAW,CAAX,eAAW,CACX,eAAc,CACd,eAAW,CACX,cAAO,CACP,oBAAQ,CACR,cAAU,CACV,eAAY,CACZ,iBAAO,CACP,gBAAQ,CAEV,oCACE,YAAQ,CAEV,+BACE,wBAAiB,CACjB,WAAO,CACP,UAAM,CAER,yEAEE,wBAAiB,CACjB,4BAAY,CAEd,2EAEE,wBAAiB,CACjB,4BAAY,CAEd,uCACE,qBAAiB,CACjB,WAAO,CAET,2BACE,wBAAiB,CACjB,aAAM,CACN,YAAQ,CACR,cAAU,CACV,6BAAgB,CAChB,eAAW,CACX,aAAS,CACT,YAAQ,CAEV,iCACE,aAAM,CACN,eAAQ,CAEV,yCACE,eAAY,CAEd,8BACE,iBAAc,CAEhB,4CACE,cAAU,CACV,eAAY,CAEd,iDACE,YAAQ,CAEV,4CACE,yCAAW,CACX,cAAS,CAEX,gCACE,eAAW,CACX,WAAM,CAER,2CACE,OAAI,CAEN,oCACE,WAAO,CAET,yCACE,gBAAY,CACZ,WAAQ,CAEV,8CACE,cAAQ,CAEV,8CACE,eAAY,CACZ,WAAM,CAER,iCACE,qBAAO,CACP,cAAO,CCxNT,8BACE,kBAAY,CACZ,wBAAiB,CACjB,aAAM,CACN,YAAQ,CACR,WAAU,CACV,WAAO,CACP,cAAU,CACV,6BAAgB,CAChB,MAAK,CACL,aAAO,CACP,OAAM,CACN,KAAI,CAEN,iCACE,iBAAS,CAET,mCACE,aAAY,CACZ,WAAQ,CACR,qBAAe,CAEjB,0CACE,gBAAO,CACP,6DACE,qBAAiB,CAErB,yCACE,wBAAiB,CACjB,UAAM,CAER,+CACE,qBAAM,CAEV,kCACE,iBAAa,CAEf,wCACE,UAAM,CACN,gBAAa,CAEf,2CACE,aAAY,CAEd,+BACE,cAAO,CACP,WAAM,CACN,2DACE,gBAAa,CACb,iBAAc,CAElB,gCACE,eAAY,CACZ,kBAAY,CACZ,YAAQ,CACR,kCACE,iBAAa,CACf,iDACE,eAAW,CACb,sDACE,aAAM,CACN,4DACE,aAAM,CAEZ,8BACE,YAAQ,CC3CiB,0BAAA,8BD6CvB,aAAQ,CAAA,CEnEZ,iCACE,gCAAiB,CACjB,WAAO,CACP,eAAc,CACd,aAAM,CACN,sBAAY,CAEd,oCACE,WAAO,CAET,gDACE,mCAAiB,CACjB,aAAM,CAER,gCACE,gCAAiB,CAEnB,gCACE,oBAAQ,CACR,WAAM,CAER,sGAEE,wBAAM,CAER,qCACE,wBAAM,CAGR,0BACE,WAAO,CACP,aAAM,CACN,cAAO,CAET,2BACE,oBAAQ,CACR,iBAAS,CAEX,mCACE,wBAAiB,CACjB,uCAAW,CACX,YAAQ,CACR,QAAK,CACL,cAAU,CACV,iBAAS,CACT,WAAQ,CAEV,qCACE,wBAAiB,CACjB,aAAM,CACN,aAAQ,CACR,iBAAQ,CACR,oBAAgB,CAElB,2CACE,wBAAiB,CACjB,aAAM,CAER,kDACE,aAAQ,CAEV,yCACE,aAAM,CTrCN,6IAME,4FAAY,CACZ,cAAU,CAEZ,mSAME,yEAAuB,CAEzB,oBACE,QAAO,CACP,yBAAW,CAEb,mBACE,cAAO,CAET,wBACE,iBAAS,CAEX,sBACE,sIAAoB,CAEtB,0BACE,eAAS,CAAT,aAAS,CAAT,UAAS,CACT,eAAY,CACZ,gBAAU,CAEZ,kCACE,4BAAa,CAEf,+BACE,mCAAiB,CACjB,4BAAa,CAEf,iDAEE,YAAQ,CAEV,+BACE,sBAAW,CACX,cAAQ,CACR,WAAO,CACP,QAAK,CACL,aAAQ,CACR,iBAAS,CACT,OAAI,CACJ,uBAAe,CACf,UAAM,CAER,0DAEE,YAAQ,CAEV,+EAGI,cAAO,CACP,wBAAY,CAAZ,qBAAY,CAAZ,gBAAY,CAEhB,8BACE,wBAAiB,CACjB,sBAAW,CACX,aAAM,CACN,cAAU,CACV,QAAK,CACL,kBAAY,CACZ,QAAO,CACP,gBAAQ,CACR,cAAS,CACT,iBAAW,CACX,oBAAgB,CAChB,OAAI,CACJ,WAAM,CACN,iBAAQ,CAEV,mCACE,wBAAiB,CAEnB,uBACE,4BAAiB,CACjB,qBAAO,CACP,UAAM,CAER,wDAEE,8FAA4C,CAE9C,kIAIE,eAAW,CACX,YAAQ,CAEV,wCACE,uBAAW,CAAX,oBAAW,CAAX,eAAW,CACX,cAAO,CACP,QAAO,CACP,WAAO,CACP,UAAM,CAER,8CACE,eAAW,CAEb,8BACE,uCAAiB,CACjB,QAAO,CACP,wBAAM,CACN,iBAAO,CACP,cAAU,CACV,WAAQ,CAEV,sEAEE,wBAAO,CACP,UAAM,CACN,WAAO,CAET,6BACE,qBAAO,CAET,0BACE,kBAAW,CACX,WAAM,CAER,4BACE,qBAAe,CAEjB,yEAGE,eAAW,CACX,4BAAO,CACP,UAAM,CAER,wBACE,kBAAW,CAEb,mCACE,qBAAiB,CACjB,qBAAO,CACP,WAAO,CACP,cAAO,CAET,mCACE,cAAO,CACP,WAAO,CACP,SAAQ,CACR,UAAM,CAGR,uDACE,QAAO,CAET,+DACE,SAAQ,CAEV,oDACE,QAAO,CAET,mDACE,QAAO,CACP,SAAQ,CAEV,yBACE,iBAAW,CAEb,0BACE,aAAM,CACN,cAAU,CACV,gBAAY,CACZ,oBAAgB,CAElB,+BACE,aAAM,CAMR,uBACE,YAAQ,CAEV,0CACE,eAAO,CAET,6BACE,mBAAY,CACZ,YAAQ,CACR,wBAAgB,CAElB,qCACE,YAAQ,CACR,6BAAgB,CAChB,MAAK,CACL,WAAO,CACP,mBAAe,CACf,cAAS,CACT,KAAI,CACJ,UAAM,CACN,cAAQ,CAEV,wFAGE,kBAAe,CAEjB,4DACE,wBAAiB,CACjB,YAAQ,CAEV,iCACE,kBAAY,CACZ,YAAQ,CACR,WAAO,CACP,iBAAS,CACT,YAAQ,CAER,mCACE,wBAAiB,CACjB,aAAM,CACN,WAAQ,CACR,YAAQ,CAEV,yCACE,wBAAiB,CACjB,UAAM,CAEV,sCACE,KAAI,CACJ,MAAK,CAEP,uCACE,KAAI,CACJ,OAAM,CA1DR,0BACE,KAAO,SAAS,CAChB,GAAK,SAAS,CAAA',
            sourcesContent: [
              "@import './lib';\n\nbody.aframe-inspector-opened,\n.toggle-edit\n  font-family BlinkMacSystemFont, -apple-system, \"Segoe UI\", Helvetica, Arial, sans-serif\n\n.wf-roboto-n4-active body.aframe-inspector-opened,\n.wf-roboto-n4-active .toggle-edit\n  font-family BlinkMacSystemFont, -apple-system, \"Segoe UI\", Helvetica, Arial, sans-serif\n\nbody.aframe-inspector-opened\n  background $bgdark\n  color #fff\n  font-size 12px\n  margin 0\n  overflow hidden\n\n#aframeInspector\n  @import './scenegraph';\n  @import './components';\n  @import './entity';\n  @import './help';\n  @import './select';\n  @import './textureModal';\n  @import './viewport';\n  @import './widgets';\n\n  .Select,\n  code,\n  pre,\n  input,\n  textarea,\n  select\n    font-family $monospace\n    font-size 13px\n\n  .wf-robotomono-n4-active .Select,\n  .wf-robotomono-n4-active code,\n  .wf-robotomono-n4-active pre,\n  .wf-robotomono-n4-active input,\n  .wf-robotomono-n4-active textarea,\n  .wf-robotomono-n4-active select\n    font-family Roboto Mono, Consolas, Andale Mono, Monaco, Courier New, monospace\n\n  hr\n    border 0\n    border-top 1px solid #ccc\n\n  a\n    cursor pointer\n\n  button\n    position relative\n\n  code\n    font-family Consolas, Andale Mono, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace\n\n  textarea\n    tab-size 4\n    white-space pre\n    word-wrap normal\n\n  textarea.success\n    border-color #8b8 !important\n\n  textarea.fail\n    background-color rgba(255, 0, 0, 0.05)\n    border-color #f00 !important\n\n  textarea,\n  input\n    outline none /* osx */\n\n  .gltfIcon img\n    box-sizing content-box\n    display inline\n    height 20px\n    left 5px\n    padding 0 5px\n    position relative\n    top 4px\n    vertical-align baseline\n    width 20px\n\n  #scenegraph,\n  #rightPanel\n    z-index 9998\n\n  #sidebar,\n  #scenegraph,\n    .panel\n      cursor default\n      user-select none\n\n  .toggle-edit\n    background-color $red\n    box-sizing content-box\n    color #FAFAFA\n    font-size 13px\n    left 3px\n    line-height normal\n    margin 0\n    padding 6px 10px\n    position fixed\n    text-align center\n    text-decoration none\n    top 3px\n    width 204px\n    z-index 999999999\n\n  .toggle-edithover\n    background-color rgb(228, 43, 90)\n\n  input\n    background-color transparent\n    border 1px solid #555\n    color #fff\n\n  input,\n  .texture canvas\n    transition 0.1s background-color ease-in-out, 0.1s border-color ease-in-out, 0.1s color ease-in-out\n\n  input[type=text],\n  input[type=number],\n  input.string,\n  input.number\n    min-height 14px\n    outline none\n\n  input[type=\"checkbox\"]\n    appearance auto\n    cursor pointer\n    margin 0\n    height 18px\n    width 18px\n\n  input[type=\"checkbox\"]:focus\n    box-shadow none\n\n  input.number\n    background-color transparent !important\n    border 0\n    color #2cb7ff !important\n    cursor col-resize\n    font-size 13px\n    padding 2px\n\n  input.stringfocus,\n  input.numberfocus\n    border 1px solid #20b1fb\n    color #fff\n    cursor auto\n\n  input.error\n    border 1px solid #a00\n\n  #sidebar\n    background $bg\n    width 331px\n\n  #sidebar *\n    vertical-align middle\n\n  input,\n  textarea,\n  select\n    background $black\n    border 1px solid transparent\n    color #888\n\n  select\n    background $bglighter\n\n  input[type=color]\n    background-color #333\n    border 1px solid #111\n    height 28px\n    cursor pointer\n\n  input[type=color]\n    cursor pointer\n    height 25px\n    padding 0\n    width 50px\n\n  /* Note these vendor-prefixed selectors cannot be grouped! */\n  input[type=color]-webkit-color-swatch\n    border 0  /* To remove the gray border. */\n\n  input[type=color]-webkit-color-swatch-wrapper\n    padding 0  /* To remove the inner padding. */\n\n  input[type=color]-moz-color-swatch\n    border 0\n\n  input[type=color]-moz-focus-inner\n    border 0  /* To remove the inner border (specific to Firefox). */\n    padding 0\n\n  .hidden\n    visibility hidden\n\n  a.button\n    color #bcbcbc\n    font-size 16px\n    margin-left 10px\n    text-decoration none\n\n  a.buttonhover\n    color #1faaf2\n\n  @keyframes animateopacity\n    from { opacity: 0 }\n    to { opacity: 1 }\n\n  .hide\n    display none\n\n  .a-canvas.state-dragging\n    cursor grabbing\n\n  #rightPanel\n    align-items stretch\n    display flex\n    justify-content flex-end\n\n  #inspectorContainer\n    display flex\n    justify-content space-between\n    left 0\n    height 100%\n    pointer-events none\n    position fixed\n    top 0\n    width 100%\n    z-index 999999\n\n  #scenegraph,\n  #viewportBar,\n  #rightPanel\n    pointer-events all\n\n  .aframe-inspector-opened a-scene .a-canvas\n    background-color #191919\n    z-index 9998\n\n  .toggle-sidebar\n    align-items center\n    display flex\n    height 100%\n    position absolute\n    z-index 9998\n\n    a\n      background-color #262626\n      color #bcbcbc\n      padding 5px\n      z-index 9998\n\n    a.hover\n      background-color #1faaf2\n      color #fff\n\n  .toggle-sidebar.left\n    top 0\n    left 0\n\n  .toggle-sidebar.right\n    top 0\n    right 0\n",
              "@import './lib';\n\n#toolbar\n  background-color $bg\n\n  .toolbarActions\n    padding 0 0 5px\n\n    a.disabled\n      color #666\n      cursor default\n\n#scenegraph\n  background $bg\n  border-top 1px solid #111\n  display flex\n  flex-direction column\n  overflow auto\n  padding-top 32px\n  width 230px\n\n  .entity\n    background $bg\n    cursor pointer\n    display flex\n    justify-content space-between\n    padding 3px\n    width 100%\n    white-space nowrap\n\n    &:hover\n      background #1d2f39\n\n    &.active\n      background-color #155373\n      color #fff\n      .component:hover\n        color #1888c1\n      .entityActions\n        display inline\n\n    &.novisible\n      &.active\n        span,\n        .fa,\n        .collapsespace,\n        .id\n          color #999\n\n      &:not(.active)\n        span,\n        .fa,\n        .collapsespace,\n        .id\n          color #626262\n\n  .component:hover\n    color #1faaf2\n\n  .entityIcons\n    margin-left 2px\n\n  .entityActions\n    display none\n    margin 0 14px\n\n    .button\n      color #fff\n      font-size 12px\n      margin-left 6px\n\n  .fa\n    color #CCC\n\n  .entityActions .fa:hover\n    color $primary\n\n  .active .fa\n    color #FAFAFA\n\n  .id\n    color #ccc\n\n  .option.active .id\n    color #fff\n\n  .collapsespace\n    color #eee\n    display inline-block\n    text-align center\n    width 14px\n\n  .fa-eye\n    color #bbb\n\n  .icons a.button\n    color #fff\n\n  .search\n    padding 5px\n    font-size 16px\n    position relative\n\n    input\n      color $white\n      background $bgdark\n      border-radius 5px\n      height 22px\n      text-indent 10px\n      width 216px\n\n    .fa-search\n      position absolute\n      right 14px\n      top 8px\n\n    .fa-times\n      position absolute\n      right 15px\n      top 9px\n\n  .outliner\n    background $bg\n    color $white\n    cursor default\n    flex 1 1 auto\n    font-size 13px\n    height calc(100% - 98px)\n    line-height normal\n    outline none\n    overflow-y auto\n    padding 0\n    width 230px\n\n.scenegraph-bottom\n  background-color #323232\n  border-top 1px solid #111\n  bottom 10\n  height 40px\n  left 0\n  z-index 100\n\n  a\n    float right\n    margin 10px\n",
              "@import './lib';\n\npropertyRowDefined() {\n  .propertyRowDefined {\n    {block}\n  }\n}\n\n.components\n  background-color $bg\n  color $white\n  height 100%\n  overflow auto\n  position fixed\n  width 331px\n\ndiv.vec2,\ndiv.vec3,\ndiv.vec4\n  display inline\n\n.vec2 input.number,\n.vec3 input.number\n  width 40px\n\n.vec4 input.number\n  width 34px\n\n.collapsible-header\n  align-items center\n  display flex\n  justify-content space-between\n  .entityPrint\n    color #fff\n\n.collapsible-content\n  padding 5px 0\n\n.componentTitle span\n  max-width 200px\n  overflow hidden\n  text-overflow ellipsis\n  text-transform uppercase\n  white-space nowrap\n  color #fff\n  font-weight 600\n  vertical-align bottom !important\n\n.collapsible .static\n  background $bglight\n  border-bottom 2px solid $bg\n  box-sizing content-box\n  cursor pointer\n  height 16px\n  padding 8px 10px 12px 10px\n  vertical-align bottom\n  font-size 13px\n  &:hover\n    background $bglighter\n/*\n.collapsible\n  &.collapsed\n    background-color $grayalt\n    .static,\n    .componentHeaderActions\n      color #dedede\n    &:hover\n      background-color $grayhover\n*/\n.collapsible .menu\n  text-align right\n\n.collapsible .menuafter\n  color #bbb\n  content '\\2807'\n  font-size 12px\n  padding 5px\n  text-align right\n\n.collapsible .static\n  margin 0\n\n.collapsible .static .collapse-button\n  border 6px solid transparent\n  float left\n  height 0\n  margin-right 10px\n  margin-left 2px\n  width 0\n\n.collapsible.collapsed .static .collapse-button\n  border-left-color $white\n  margin-top 4px\n\n.collapsible:not(.collapsed) .static .collapse-button\n  border-top-color $white\n  margin-top 7px\n\n.propertyRow\n  align-items center\n  display flex\n  font-size 13px\n  min-height 30px\n  padding 2px 15px\n\n  .text\n    cursor default\n    display inline-block\n    overflow hidden\n    padding-right 10px\n    text-overflow ellipsis\n    vertical-align middle\n    width 118px\n\n  .map_value\n    margin 0 0 0 5px\n    width 68px\n\n  .Select-control\n    font-size 11px\n    height 24px\n\n  .Select-placeholder,\n  .Select--single > .Select-control .Select-value\n    line-height 19px\n\n  .Select-input\n    height 22px\n\n  input[type=text],\n  input[type=number],\n  input.string,\n  input.number\n    background $bgdark\n    color #1faaf2\n    min-height 26px\n    padding-bottom 1px\n    padding-left 5px\n    padding-right 5px\n    padding-top 1px\n    &:last-child\n      padding-right 0\n\n  input.string\n    padding-left 8px\n    box-sizing border-box\n    width 165px\n\n  input[type=text]:focus,\n  input.string:focus\n    box-shadow none\n\n  .color_value\n    margin 0 0 0 5px\n    width 68px\n    letter-spacing 1px\n\n.propertyRowDefined .text\n  color #FAFAFA\n  font-weight 500\n\n.components *\n  vertical-align middle\n\nspan.subcomponent\n  color #999\n  float none !important\n  margin-left 10px\n  vertical-align top !important\n\na.help-link\n  opacity 0.4\n\na.help-linkhover\n  opacity 1\n\n#addComponentContainer\n  align-items center\n  display flex\n  flex-direction column\n  justify-content center\n  padding 20px 10px\n  background $bgdark\n\n  #addComponent\n    text-align left\n    width 200px\n    .select__control\n      background #161616\n      height 35px\n      color $primary\n    .option\n      display flex\n      justify-content space-between\n      span\n        color $primary\n\n  #addComponentHeader\n    font-size 15px\n    margin 5px 0 10px 0\n\n  input[type=text]:focus\n    box-shadow none\n\n.Select-menu-outer .is-focused span\n  color #fff\n\n.component-title\n  align-items center\n  display flex\n\n#componentEntityHeader\n  .collapsible-header\n    bottom 4px\n    position relative\n  .collapse-button\n    display none\n  .static\n    height 13px\n  .entityPrint\n    font-size 15px\n    padding-left 5px\n  .entityName\n    max-width 160px\n    top 0\n  .entityIcons\n    color #FAFAFA\n\n#mixinSelect\n  width 160px\n\n.propertyRow .texture\n  display flex\n  input\n    margin-left 0\n    width 120px\n\n#componentEntityHeader .gltfIcon img\n  top 0\n\n.fa\n  color $white\n  &:hover\n    color $primary\n",
              '@import \'./lib\';\n\n.entityPrint\n  font-family $normalfont\n  line-height 1.15em\n\n.entityName\n  display inline-block\n  overflow hidden\n  position relative\n  text-overflow ellipsis\n  top 3px\n  white-space nowrap\n\n[data-entity-name-type="id"]\n  color $red\n\n[data-entity-name-type="class"]\n  color $green\n\n[data-entity-name-type="mixin"]\n  color $orange\n',
              '.help-lists\n  display flex\n  justify-content space-around\n\n.help-list\n  list-style none\n  margin 0\n  padding 0 0 10px\n  width 350px\n\n.help-list li\n  margin-right 40px\n\n.help-key-unit\n  line-height 1.8\n  margin-right 2em\n  padding 5px 0\n\n.help-key\n  bottom 2px\n  margin-right 4px\n  min-width 60px\n  position relative\n\n.help-key span\n  background-color #2e2e2e\n  background-repeat repeat-x\n  border 1px solid #666\n  border-radius 3px\n  box-shadow 0 0 5px #000\n  color #999\n  display inline-block\n  font-size 12px\n  padding 0 8px\n  text-align center\n\n.help-key-def\n  color #bbb\n  display inline-block\n  margin-left 1em\n',
              "@import './lib';\n\n.select__control\n  border 0\n  border-radius 0\n  cursor pointer\n  min-height 26px\n  font-family $monospace\n  font-size 13px\n\n.select__indicator\n  height 26px\n\n.select__indicator-separator\n  display none\n\n.select__input\n  min-height auto !important\n\n.select__control,\n.select__menu\n  background $bgdark\n\n.select__option\n  padding 5px 10px\n\n.select__placeholder,\n.select__menu\n  color $white\n\n.select__single-value\n  color $primary\n\n.select__control--is-focused\n  box-shadow none !important\n\n.select__option\n  cursor pointer\n\n.select__clear-indicator\n  display none\n\n.select__label\n  font-size 11px\n\n.select__option--is-focused\n  background #155373\n\n.select__value-container\n  height 26px\n  position static\n  &.select__value-container--is-multi\n    height auto\n    padding 6px\n\n.select__dropdown-indicator\n  padding 3px 8px\n\n.select__multi-value\n  background $bg\n  color $primary\n\n.select__multi-value__label\n  color $primary\n\n.select__value-container--is-multi > :last-child\n  display none\n\n.select__multi-value__remove:hover\n  color #fff\n  background $bg\n",
              '.modal\n  animation animateopacity 0.2s ease-out\n  background-color rgb(0, 0, 0)\n  background-color rgba(0, 0, 0, 0.6)\n  display flex\n  height 100%\n  left 0\n  overflow auto\n  position fixed\n  top 0\n  width 100%\n  z-index 9999999999\n\n.modal h3\n  font-size 18px\n  font-weight 100\n  margin 0.6em 0\n\n#textureModal .modal-content\n  height calc(100% - 50px)\n  width calc(100% - 50px)\n\n.modal-content\n  animation animatetop 0.2s ease-out\n  animation-duration 0.2s\n  animation-name animatetop\n  background-color #232323\n  box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)\n  margin auto\n  overflow hidden\n  padding 0\n\n.close\n  color white\n  float right\n  font-size 28px\n  font-weight bold\n\n.closehover,\n.closefocus\n  color #08f\n  cursor pointer\n  text-decoration none\n\n.modal-header\n  color white\n  padding 2px 16px\n\n.modal-body\n  overflow auto\n  padding 16px\n\n.modal-footer\n  color white\n  padding 2px 16px\n\n/* Gallery */\n.gallery\n  background #232323\n  display flex\n  flex-wrap wrap\n  margin 15px auto 0\n  overflow auto\n  padding 15px 3px 3px\n\n.newimage .gallery\n  padding 16px\n\n.gallery li\n  border-radius 2px\n  box-shadow 0 0 6px rgba(0, 0, 0, 0.6)\n  cursor pointer\n  margin 8px\n  overflow hidden\n  width 155px\n\n.gallery li.selected,\n.gallery li:hover\n  box-shadow 0 0 0 2px #1eaaf1\n\n.gallery li .detail\n  background-color #323232\n  margin 0\n  min-height 60px\n  padding 3px 10px\n\n.gallery li .button.fa-external-link\n  margin-left 136px\n  margin-top 5px\n  position fixed\n\n.preview\n  padding 10px\n  width 150px\n\n.preview input\n  display block\n  margin 8px 0\n  width 144px\n\n.preview button\n  width 155px\n\n.preview .detail .title\n  color #fff\n  display inline-block\n  max-width 155px\n  overflow hidden\n  text-overflow ellipsis\n  white-space nowrap\n\n.gallery li.selected .detail,\n.gallery li:hover .detail\n  background-color #444\n\n.gallery li .detail span\n  color #777\n  display block\n  margin-top 4px\n  overflow hidden\n  text-overflow ellipsis\n  white-space nowrap\n  width 140px\n\n.gallery li.selected .detail span,\n.gallery li:hover .detail span\n  color #888\n\n.gallery li .detail span.title\n  color #fff !important\n\n.modal button\n  appearance none\n  border-radius 0\n  box-shadow none\n  cursor pointer\n  display inline-block\n  font-size 12px\n  line-height 1.8\n  margin 0 10px 0 0\n  padding 5px 10px\n\n.modal buttonfocus\n  outline none\n\n.modal button\n  background-color #1eaaf1\n  border none\n  color #fff\n\n.modal buttonhover,\n.modal button.hover\n  background-color #346392\n  text-shadow -1px 1px #27496d\n\n.modal buttonactive,\n.modal button.active\n  background-color #27496d\n  text-shadow -1px 1px #193047\n\n.modal buttondisabled\n  background-color #888\n  cursor none\n\n.newimage\n  background-color #323232\n  color #bcbcbc\n  display flex\n  font-size 13px\n  justify-content space-between\n  margin-top 10px\n  overflow auto\n  padding 10px\n\n.newimage input\n  color #1eaaf1\n  padding 3px 5px\n\n.texture canvas + input\n  margin-left 5px\n\n.texture .fa\n  padding-right 5px\n\n.texture .fa-external-link\n  font-size 14px\n  padding-top 2px\n\n.uploader-normal-button .hidden\n  display none\n\n.gallery a.fa.texture-link\n  box-shadow 0 0 14px -1px rgba(0, 0, 0, 0.75)\n  position fixed\n\n.assets.search\n  margin-top 10px\n  width 200px\n\n.assets.search .fa-search\n  top 7px\n\n.new_asset_options\n  margin 10px\n\n.new_asset_options > ul\n  margin-left 10px\n  padding 5px\n\n.new_asset_options > ul > li\n  padding 10px 0\n\n.new_asset_options .imageUrl\n  margin-left 5px\n  width 350px\n\n.texture canvas\n  border 1px solid $bglight\n  cursor pointer\n',
              "@import './lib';\n\n#viewportBar\n  align-items center\n  background-color $bg\n  color $white\n  display flex\n  flex-grow 2\n  height 32px\n  font-size 15px\n  justify-content space-between\n  left 0\n  margin 0 auto\n  right 0\n  top 0\n\n.toolbarButtons\n  position relative\n\n  *\n    margin-left 0\n    padding 8px\n    vertical-align middle\n\n  a.button\n    margin 0 6px 0 0\n    &:not(.active):hover\n      background-color $grayhover\n\n  .active\n    background-color $primary\n    color #fff\n\n  .active:hover\n    color #fff !important\n\n.local-transform\n  padding-left 10px\n\n.local-transform label\n  color $lightgray\n  padding-left 5px\n\n.local-transform a.button\n  padding-top 0\n\n#cameraSelect\n  cursor pointer\n  width 110px\n  .select__dropdown-indicator\n    padding-left 3px\n    padding-right 3px\n\n#cameraToolbar\n  margin-left 5px\n  align-items center\n  display flex\n  a\n    margin-right 10px\n  .select__control\n    background none\n  .select__single-value\n    color $white\n    &:hover\n      color $primary\n\n#viewportHud\n  display none\n  +media--1024()\n    display block\n",
              '$primary=#1faaf2\n$primaryhover=lighten(#1faaf2, 35%)\n\n$bg=#242424\n$bgdark=#1d1d1d\n$bglight=#333\n$bglighter=#393939\n\n$red=#92374d\n$green=#514b23\n$orange=#d66853\n\n$black=#222\n$gray=#262626\n$grayalt=#323232\n$grayhover=#444\n\n$lightgray=#AAA\n$white=#c3c3c3\n\n$normalfont=system-ui, BlinkMacSystemFont, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif\n$monospace=system-ui, BlinkMacSystemFont, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif\n\nmedia--1024() {\n  @media (min-width: 1024px) {\n    {block}\n  }\n}\n',
              "@import './lib';\n\n.Select-control\n  background-color #222 !important\n  border none\n  border-radius 0\n  color $primary\n  font-family $monosapce\n\n.Select-menu-outer\n  border none\n\n.Select-menu-outer .is-focused\n  background-color $primary !important\n  color $white\n\n.Select-option\n  background-color #222 !important\n\n.select-widget\n  display inline-block\n  width 157px\n\n.Select-placeholder,\n.Select--single > .Select-control .Select-value\n  color $primary !important\n\n.Select-value-label\n  color $primary !important\n\n/* Dropdown menu */\n.dropbtn\n  border none\n  color $white\n  cursor pointer\n\n.dropdown\n  display inline-block\n  position relative\n\n.dropdown-content\n  background-color #f9f9f9\n  box-shadow 0 8px 16px 0 rgba(0, 0, 0, 0.2)\n  display none\n  left 8px\n  min-width 38px\n  position absolute\n  z-index 999\n\n.dropdown-content a\n  background-color #232323\n  color #7d7d7d\n  display block\n  padding 10px 14px\n  text-decoration none\n\n.dropdown-content a:hover\n  background-color #4ecbff\n  color $white\n\n.dropdownhover .dropdown-content\n  display block\n\n.dropdownhover .dropbtn\n  color $primary\n"
            ],
            sourceRoot: ''
          }
        ]);
        const s = a;
      },
      645: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, o, i) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (a[l] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var u = [].concat(e[c]);
                (r && a[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = i)),
                  n &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = n))
                      : (u[2] = n)),
                  o &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = o))
                      : (u[4] = ''.concat(o))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ('function' == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  r
                ),
              i = '/*# '.concat(o, ' */');
            return [t].concat([i]).join('\n');
          }
          return [t].join('\n');
        };
      },
      187: (e) => {
        'use strict';
        var t,
          n = 'object' == typeof Reflect ? Reflect : null,
          r =
            n && 'function' == typeof n.apply
              ? n.apply
              : function (e, t, n) {
                  return Function.prototype.apply.call(e, t, n);
                };
        t =
          n && 'function' == typeof n.ownKeys
            ? n.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
        var o =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
        function i() {
          i.init.call(this);
        }
        (e.exports = i),
          (e.exports.once = function (e, t) {
            return new Promise(function (n, r) {
              function o(n) {
                e.removeListener(t, i), r(n);
              }
              function i() {
                'function' == typeof e.removeListener &&
                  e.removeListener('error', o),
                  n([].slice.call(arguments));
              }
              h(e, t, i, { once: !0 }),
                'error' !== t &&
                  (function (e, t, n) {
                    'function' == typeof e.on && h(e, 'error', t, { once: !0 });
                  })(e, o);
            });
          }),
          (i.EventEmitter = i),
          (i.prototype._events = void 0),
          (i.prototype._eventsCount = 0),
          (i.prototype._maxListeners = void 0);
        var a = 10;
        function s(e) {
          if ('function' != typeof e)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof e
            );
        }
        function l(e) {
          return void 0 === e._maxListeners
            ? i.defaultMaxListeners
            : e._maxListeners;
        }
        function c(e, t, n, r) {
          var o, i, a, c;
          if (
            (s(n),
            void 0 === (i = e._events)
              ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
              : (void 0 !== i.newListener &&
                  (e.emit('newListener', t, n.listener ? n.listener : n),
                  (i = e._events)),
                (a = i[t])),
            void 0 === a)
          )
            (a = i[t] = n), ++e._eventsCount;
          else if (
            ('function' == typeof a
              ? (a = i[t] = r ? [n, a] : [a, n])
              : r
              ? a.unshift(n)
              : a.push(n),
            (o = l(e)) > 0 && a.length > o && !a.warned)
          ) {
            a.warned = !0;
            var u = new Error(
              'Possible EventEmitter memory leak detected. ' +
                a.length +
                ' ' +
                String(t) +
                ' listeners added. Use emitter.setMaxListeners() to increase limit'
            );
            (u.name = 'MaxListenersExceededWarning'),
              (u.emitter = e),
              (u.type = t),
              (u.count = a.length),
              (c = u),
              console && console.warn && console.warn(c);
          }
          return e;
        }
        function u() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            );
        }
        function p(e, t, n) {
          var r = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: n
            },
            o = u.bind(r);
          return (o.listener = n), (r.wrapFn = o), o;
        }
        function f(e, t, n) {
          var r = e._events;
          if (void 0 === r) return [];
          var o = r[t];
          return void 0 === o
            ? []
            : 'function' == typeof o
            ? n
              ? [o.listener || o]
              : [o]
            : n
            ? (function (e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                  t[n] = e[n].listener || e[n];
                return t;
              })(o)
            : m(o, o.length);
        }
        function d(e) {
          var t = this._events;
          if (void 0 !== t) {
            var n = t[e];
            if ('function' == typeof n) return 1;
            if (void 0 !== n) return n.length;
          }
          return 0;
        }
        function m(e, t) {
          for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
          return n;
        }
        function h(e, t, n, r) {
          if ('function' == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
          else {
            if ('function' != typeof e.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' +
                  typeof e
              );
            e.addEventListener(t, function o(i) {
              r.once && e.removeEventListener(t, o), n(i);
            });
          }
        }
        Object.defineProperty(i, 'defaultMaxListeners', {
          enumerable: !0,
          get: function () {
            return a;
          },
          set: function (e) {
            if ('number' != typeof e || e < 0 || o(e))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              );
            a = e;
          }
        }),
          (i.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (i.prototype.setMaxListeners = function (e) {
            if ('number' != typeof e || e < 0 || o(e))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              );
            return (this._maxListeners = e), this;
          }),
          (i.prototype.getMaxListeners = function () {
            return l(this);
          }),
          (i.prototype.emit = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t.push(arguments[n]);
            var o = 'error' === e,
              i = this._events;
            if (void 0 !== i) o = o && void 0 === i.error;
            else if (!o) return !1;
            if (o) {
              var a;
              if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
              var s = new Error(
                'Unhandled error.' + (a ? ' (' + a.message + ')' : '')
              );
              throw ((s.context = a), s);
            }
            var l = i[e];
            if (void 0 === l) return !1;
            if ('function' == typeof l) r(l, this, t);
            else {
              var c = l.length,
                u = m(l, c);
              for (n = 0; n < c; ++n) r(u[n], this, t);
            }
            return !0;
          }),
          (i.prototype.addListener = function (e, t) {
            return c(this, e, t, !1);
          }),
          (i.prototype.on = i.prototype.addListener),
          (i.prototype.prependListener = function (e, t) {
            return c(this, e, t, !0);
          }),
          (i.prototype.once = function (e, t) {
            return s(t), this.on(e, p(this, e, t)), this;
          }),
          (i.prototype.prependOnceListener = function (e, t) {
            return s(t), this.prependListener(e, p(this, e, t)), this;
          }),
          (i.prototype.removeListener = function (e, t) {
            var n, r, o, i, a;
            if ((s(t), void 0 === (r = this._events))) return this;
            if (void 0 === (n = r[e])) return this;
            if (n === t || n.listener === t)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete r[e],
                  r.removeListener &&
                    this.emit('removeListener', e, n.listener || t));
            else if ('function' != typeof n) {
              for (o = -1, i = n.length - 1; i >= 0; i--)
                if (n[i] === t || n[i].listener === t) {
                  (a = n[i].listener), (o = i);
                  break;
                }
              if (o < 0) return this;
              0 === o
                ? n.shift()
                : (function (e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop();
                  })(n, o),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener &&
                  this.emit('removeListener', e, a || t);
            }
            return this;
          }),
          (i.prototype.off = i.prototype.removeListener),
          (i.prototype.removeAllListeners = function (e) {
            var t, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== n[e] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete n[e]),
                this
              );
            if (0 === arguments.length) {
              var o,
                i = Object.keys(n);
              for (r = 0; r < i.length; ++r)
                'removeListener' !== (o = i[r]) && this.removeAllListeners(o);
              return (
                this.removeAllListeners('removeListener'),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ('function' == typeof (t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t)
              for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this;
          }),
          (i.prototype.listeners = function (e) {
            return f(this, e, !0);
          }),
          (i.prototype.rawListeners = function (e) {
            return f(this, e, !1);
          }),
          (i.listenerCount = function (e, t) {
            return 'function' == typeof e.listenerCount
              ? e.listenerCount(t)
              : d.call(e, t);
          }),
          (i.prototype.listenerCount = d),
          (i.prototype.eventNames = function () {
            return this._eventsCount > 0 ? t(this._events) : [];
          });
      },
      679: (e, t, n) => {
        'use strict';
        var r = n(109),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
          },
          i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
          },
          a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
          },
          s = {};
        function l(e) {
          return r.isMemo(e) ? a : s[e.$$typeof] || o;
        }
        (s[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0
        }),
          (s[r.Memo] = a);
        var c = Object.defineProperty,
          u = Object.getOwnPropertyNames,
          p = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          d = Object.getPrototypeOf,
          m = Object.prototype;
        e.exports = function e(t, n, r) {
          if ('string' != typeof n) {
            if (m) {
              var o = d(n);
              o && o !== m && e(t, o, r);
            }
            var a = u(n);
            p && (a = a.concat(p(n)));
            for (var s = l(t), h = l(n), y = 0; y < a.length; ++y) {
              var b = a[y];
              if (!(i[b] || (r && r[b]) || (h && h[b]) || (s && s[b]))) {
                var g = f(n, b);
                try {
                  c(t, b, g);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      103: (e, t) => {
        'use strict';
        var n = 'function' == typeof Symbol && Symbol.for,
          r = n ? Symbol.for('react.element') : 60103,
          o = n ? Symbol.for('react.portal') : 60106,
          i = n ? Symbol.for('react.fragment') : 60107,
          a = n ? Symbol.for('react.strict_mode') : 60108,
          s = n ? Symbol.for('react.profiler') : 60114,
          l = n ? Symbol.for('react.provider') : 60109,
          c = n ? Symbol.for('react.context') : 60110,
          u = n ? Symbol.for('react.async_mode') : 60111,
          p = n ? Symbol.for('react.concurrent_mode') : 60111,
          f = n ? Symbol.for('react.forward_ref') : 60112,
          d = n ? Symbol.for('react.suspense') : 60113,
          m = n ? Symbol.for('react.suspense_list') : 60120,
          h = n ? Symbol.for('react.memo') : 60115,
          y = n ? Symbol.for('react.lazy') : 60116,
          b = n ? Symbol.for('react.block') : 60121,
          g = n ? Symbol.for('react.fundamental') : 60117,
          v = n ? Symbol.for('react.responder') : 60118,
          A = n ? Symbol.for('react.scope') : 60119;
        function C(e) {
          if ('object' == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case u:
                  case p:
                  case i:
                  case s:
                  case a:
                  case d:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case f:
                      case y:
                      case h:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function w(e) {
          return C(e) === p;
        }
        (t.AsyncMode = u),
          (t.ConcurrentMode = p),
          (t.ContextConsumer = c),
          (t.ContextProvider = l),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = i),
          (t.Lazy = y),
          (t.Memo = h),
          (t.Portal = o),
          (t.Profiler = s),
          (t.StrictMode = a),
          (t.Suspense = d),
          (t.isAsyncMode = function (e) {
            return w(e) || C(e) === u;
          }),
          (t.isConcurrentMode = w),
          (t.isContextConsumer = function (e) {
            return C(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return C(e) === l;
          }),
          (t.isElement = function (e) {
            return 'object' == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return C(e) === f;
          }),
          (t.isFragment = function (e) {
            return C(e) === i;
          }),
          (t.isLazy = function (e) {
            return C(e) === y;
          }),
          (t.isMemo = function (e) {
            return C(e) === h;
          }),
          (t.isPortal = function (e) {
            return C(e) === o;
          }),
          (t.isProfiler = function (e) {
            return C(e) === s;
          }),
          (t.isStrictMode = function (e) {
            return C(e) === a;
          }),
          (t.isSuspense = function (e) {
            return C(e) === d;
          }),
          (t.isValidElementType = function (e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              e === i ||
              e === p ||
              e === s ||
              e === a ||
              e === d ||
              e === m ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === y ||
                  e.$$typeof === h ||
                  e.$$typeof === l ||
                  e.$$typeof === c ||
                  e.$$typeof === f ||
                  e.$$typeof === g ||
                  e.$$typeof === v ||
                  e.$$typeof === A ||
                  e.$$typeof === b))
            );
          }),
          (t.typeOf = C);
      },
      109: (e, t, n) => {
        'use strict';
        e.exports = n(103);
      },
      296: (e, t, n) => {
        var r = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          i = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          s = parseInt,
          l = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
          c = 'object' == typeof self && self && self.Object === Object && self,
          u = l || c || Function('return this')(),
          p = Object.prototype.toString,
          f = Math.max,
          d = Math.min,
          m = function () {
            return u.Date.now();
          };
        function h(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function y(e) {
          if ('number' == typeof e) return e;
          if (
            (function (e) {
              return (
                'symbol' == typeof e ||
                ((function (e) {
                  return !!e && 'object' == typeof e;
                })(e) &&
                  '[object Symbol]' == p.call(e))
              );
            })(e)
          )
            return NaN;
          if (h(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = h(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(r, '');
          var n = i.test(e);
          return n || a.test(e)
            ? s(e.slice(2), n ? 2 : 8)
            : o.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, n) {
          var r,
            o,
            i,
            a,
            s,
            l,
            c = 0,
            u = !1,
            p = !1,
            b = !0;
          if ('function' != typeof e)
            throw new TypeError('Expected a function');
          function g(t) {
            var n = r,
              i = o;
            return (r = o = void 0), (c = t), (a = e.apply(i, n));
          }
          function v(e) {
            return (c = e), (s = setTimeout(C, t)), u ? g(e) : a;
          }
          function A(e) {
            var n = e - l;
            return void 0 === l || n >= t || n < 0 || (p && e - c >= i);
          }
          function C() {
            var e = m();
            if (A(e)) return w(e);
            s = setTimeout(
              C,
              (function (e) {
                var n = t - (e - l);
                return p ? d(n, i - (e - c)) : n;
              })(e)
            );
          }
          function w(e) {
            return (s = void 0), b && r ? g(e) : ((r = o = void 0), a);
          }
          function E() {
            var e = m(),
              n = A(e);
            if (((r = arguments), (o = this), (l = e), n)) {
              if (void 0 === s) return v(l);
              if (p) return (s = setTimeout(C, t)), g(l);
            }
            return void 0 === s && (s = setTimeout(C, t)), a;
          }
          return (
            (t = y(t) || 0),
            h(n) &&
              ((u = !!n.leading),
              (i = (p = 'maxWait' in n) ? f(y(n.maxWait) || 0, t) : i),
              (b = 'trailing' in n ? !!n.trailing : b)),
            (E.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (c = 0),
                (r = l = o = s = void 0);
            }),
            (E.flush = function () {
              return void 0 === s ? a : w(m());
            }),
            E
          );
        };
      },
      703: (e, t, n) => {
        'use strict';
        var r = n(414);
        function o() {}
        function i() {}
        (i.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, i, a) {
              if (a !== r) {
                var s = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                );
                throw ((s.name = 'Invariant Violation'), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: o
            };
            return (n.PropTypes = n), n;
          });
      },
      697: (e, t, n) => {
        e.exports = n(703)();
      },
      414: (e) => {
        'use strict';
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
      448: (e, t, n) => {
        'use strict';
        var r = n(294),
          o = n(840);
        function i(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var a = new Set(),
          s = {};
        function l(e, t) {
          c(e, t), c(e + 'Capture', t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
        }
        var u = !(
            'undefined' == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          p = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          d = {},
          m = {};
        function h(e, t, n, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var y = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            y[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv']
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              y[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha'
          ].forEach(function (e) {
            y[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              y[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            y[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            y[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            y[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            y[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function v(e, t, n, r) {
          var o = y.hasOwnProperty(t) ? y[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!p.call(m, e) ||
                    (!p.call(d, e) &&
                      (f.test(e) ? (m[e] = !0) : ((d[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ''
                        : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(b, g);
            y[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(b, g);
              y[t] = new h(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(b, g);
            y[t] = new h(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            y[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new h(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            y[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          C = Symbol.for('react.element'),
          w = Symbol.for('react.portal'),
          E = Symbol.for('react.fragment'),
          x = Symbol.for('react.strict_mode'),
          S = Symbol.for('react.profiler'),
          O = Symbol.for('react.provider'),
          k = Symbol.for('react.context'),
          j = Symbol.for('react.forward_ref'),
          T = Symbol.for('react.suspense'),
          M = Symbol.for('react.suspense_list'),
          I = Symbol.for('react.memo'),
          R = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var P = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var N = Symbol.iterator;
        function L(e) {
          return null === e || 'object' != typeof e
            ? null
            : 'function' == typeof (e = (N && e[N]) || e['@@iterator'])
            ? e
            : null;
        }
        var _,
          D = Object.assign;
        function B(e) {
          if (void 0 === _)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              _ = (t && t[1]) || '';
            }
          return '\n' + _ + e;
        }
        var z = !1;
        function F(e, t) {
          if (!e || z) return '';
          z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  }
                }),
                'object' == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && 'string' == typeof t.stack) {
              for (
                var o = t.stack.split('\n'),
                  i = r.stack.split('\n'),
                  a = o.length - 1,
                  s = i.length - 1;
                1 <= a && 0 <= s && o[a] !== i[s];

              )
                s--;
              for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== i[s]) {
                  if (1 !== a || 1 !== s)
                    do {
                      if ((a--, 0 > --s || o[a] !== i[s])) {
                        var l = '\n' + o[a].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            l.includes('<anonymous>') &&
                            (l = l.replace('<anonymous>', e.displayName)),
                          l
                        );
                      }
                    } while (1 <= a && 0 <= s);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? B(e) : '';
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B('Lazy');
            case 13:
              return B('Suspense');
            case 19:
              return B('SuspenseList');
            case 0:
            case 2:
            case 15:
              return F(e.type, !1);
            case 11:
              return F(e.type.render, !1);
            case 1:
              return F(e.type, !0);
            default:
              return '';
          }
        }
        function U(e) {
          if (null == e) return null;
          if ('function' == typeof e) return e.displayName || e.name || null;
          if ('string' == typeof e) return e;
          switch (e) {
            case E:
              return 'Fragment';
            case w:
              return 'Portal';
            case S:
              return 'Profiler';
            case x:
              return 'StrictMode';
            case T:
              return 'Suspense';
            case M:
              return 'SuspenseList';
          }
          if ('object' == typeof e)
            switch (e.$$typeof) {
              case k:
                return (e.displayName || 'Context') + '.Consumer';
              case O:
                return (e._context.displayName || 'Context') + '.Provider';
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case I:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || 'Memo';
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (e) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return U(t);
            case 8:
              return t === x ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' == typeof t)
                return t.displayName || t.name || null;
              if ('string' == typeof t) return t;
          }
          return null;
        }
        function Y(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          );
        }
        function Z(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                'function' == typeof n.get &&
                'function' == typeof n.set
              ) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), i.call(this, e);
                    }
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    }
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = W(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            void 0 ===
            (e = e || ('undefined' != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function $(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Y(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value
            });
        }
        function q(e, t) {
          null != (t = t.checked) && v(e, 'checked', t, !1);
        }
        function K(e, t) {
          q(e, t);
          var n = Y(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ee(e, t.type, Y(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + Y(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: Y(n) };
        }
        function ie(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function ae(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function le(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? se(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ce,
          ue,
          pe =
            ((ue = function (e, t) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var de = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
          },
          me = ['Webkit', 'ms', 'Moz', 'O'];
        function he(e, t, n) {
          return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : n ||
              'number' != typeof t ||
              0 === t ||
              (de.hasOwnProperty(e) && de[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function ye(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                o = he(n, t[n], r);
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(de).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (de[t] = de[e]);
          });
        });
        var be = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              be[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                'object' != typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && 'object' != typeof t.style)
              throw Error(i(62));
          }
        }
        function ve(e, t) {
          if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var Ae = null;
        function Ce(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          Ee = null,
          xe = null;
        function Se(e) {
          if ((e = Ao(e))) {
            if ('function' != typeof we) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = wo(t)), we(e.stateNode, e.type, t));
          }
        }
        function Oe(e) {
          Ee ? (xe ? xe.push(e) : (xe = [e])) : (Ee = e);
        }
        function ke() {
          if (Ee) {
            var e = Ee,
              t = xe;
            if (((xe = Ee = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Te() {}
        var Me = !1;
        function Ie(e, t, n) {
          if (Me) return e(t, n);
          Me = !0;
          try {
            return je(e, t, n);
          } finally {
            (Me = !1), (null !== Ee || null !== xe) && (Te(), ke());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Pe = !1;
        if (u)
          try {
            var Ne = {};
            Object.defineProperty(Ne, 'passive', {
              get: function () {
                Pe = !0;
              }
            }),
              window.addEventListener('test', Ne, Ne),
              window.removeEventListener('test', Ne, Ne);
          } catch (ue) {
            Pe = !1;
          }
        function Le(e, t, n, r, o, i, a, s, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }
        var _e = !1,
          De = null,
          Be = !1,
          ze = null,
          Fe = {
            onError: function (e) {
              (_e = !0), (De = e);
            }
          };
        function He(e, t, n, r, o, i, a, s, l) {
          (_e = !1), (De = null), Le.apply(Fe, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ye(e) {
          if (Ue(e) !== e) throw Error(i(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return Ye(o), e;
                    if (a === r) return Ye(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var s = !1, l = o.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = o), (r = a);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = o), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = a.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = a), (r = o);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = a), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ze(e)
            : null;
        }
        function Ze(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ze(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = o.unstable_scheduleCallback,
          Ge = o.unstable_cancelCallback,
          $e = o.unstable_shouldYield,
          Xe = o.unstable_requestPaint,
          qe = o.unstable_now,
          Ke = o.unstable_getCurrentPriorityLevel,
          Je = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          it = null,
          at = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2,
          ct = 64,
          ut = 4194304;
        function pt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            i = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var s = a & ~o;
            0 !== s ? (r = pt(s)) : 0 != (i &= a) && (r = pt(i));
          } else 0 != (a = n & ~o) ? (r = pt(a)) : 0 !== i && (r = pt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 == (t & o) &&
            ((o = r & -r) >= (i = t & -t) || (16 === o && 0 != (4194240 & i)))
          )
            return t;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function dt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 == (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function bt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - at(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - at(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var vt = 0;
        function At(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var Ct,
          wt,
          Et,
          xt,
          St,
          Ot = !1,
          kt = [],
          jt = null,
          Tt = null,
          Mt = null,
          It = new Map(),
          Rt = new Map(),
          Pt = [],
          Nt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Lt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              jt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Tt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Mt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              It.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Rt.delete(t.pointerId);
          }
        }
        function _t(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [o]
              }),
              null !== t && null !== (t = Ao(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Dt(e) {
          var t = vo(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = $t(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = Ao(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Ae = r), n.target.dispatchEvent(r), (Ae = null), t.shift();
          }
          return !0;
        }
        function zt(e, t, n) {
          Bt(e) && n.delete(t);
        }
        function Ft() {
          (Ot = !1),
            null !== jt && Bt(jt) && (jt = null),
            null !== Tt && Bt(Tt) && (Tt = null),
            null !== Mt && Bt(Mt) && (Mt = null),
            It.forEach(zt),
            Rt.forEach(zt);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ot ||
              ((Ot = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Ft)));
        }
        function Ut(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < kt.length) {
            Ht(kt[0], e);
            for (var n = 1; n < kt.length; n++) {
              var r = kt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Ht(jt, e),
              null !== Tt && Ht(Tt, e),
              null !== Mt && Ht(Mt, e),
              It.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Pt.length;
            n++
          )
            (r = Pt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Pt.length && null === (n = Pt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Pt.shift();
        }
        var Vt = A.ReactCurrentBatchConfig,
          Yt = !0;
        function Wt(e, t, n, r) {
          var o = vt,
            i = Vt.transition;
          Vt.transition = null;
          try {
            (vt = 1), Qt(e, t, n, r);
          } finally {
            (vt = o), (Vt.transition = i);
          }
        }
        function Zt(e, t, n, r) {
          var o = vt,
            i = Vt.transition;
          Vt.transition = null;
          try {
            (vt = 4), Qt(e, t, n, r);
          } finally {
            (vt = o), (Vt.transition = i);
          }
        }
        function Qt(e, t, n, r) {
          if (Yt) {
            var o = $t(e, t, n, r);
            if (null === o) Yr(e, t, r, Gt, n), Lt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return (jt = _t(jt, e, t, n, r, o)), !0;
                  case 'dragenter':
                    return (Tt = _t(Tt, e, t, n, r, o)), !0;
                  case 'mouseover':
                    return (Mt = _t(Mt, e, t, n, r, o)), !0;
                  case 'pointerover':
                    var i = o.pointerId;
                    return It.set(i, _t(It.get(i) || null, e, t, n, r, o)), !0;
                  case 'gotpointercapture':
                    return (
                      (i = o.pointerId),
                      Rt.set(i, _t(Rt.get(i) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Lt(e, r), 4 & t && -1 < Nt.indexOf(e))) {
              for (; null !== o; ) {
                var i = Ao(o);
                if (
                  (null !== i && Ct(i),
                  null === (i = $t(e, t, n, r)) && Yr(e, t, r, Gt, n),
                  i === o)
                )
                  break;
                o = i;
              }
              null !== o && r.stopPropagation();
            } else Yr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function $t(e, t, n, r) {
          if (((Gt = null), null !== (e = vo((e = Ce(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Ke()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var qt = null,
          Kt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Kt,
            r = n.length,
            o = 'value' in qt ? qt.value : qt.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
          return (Jt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, i) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn
            }),
            t
          );
        }
        var an,
          sn,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
          },
          un = on(cn),
          pn = D({}, cn, { view: 0, detail: 0 }),
          fn = on(pn),
          dn = D({}, pn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== ln &&
                    (ln && 'mousemove' === e.type
                      ? ((an = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = an = 0),
                    (ln = e)),
                  an);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : sn;
            }
          }),
          mn = on(dn),
          hn = on(D({}, dn, { dataTransfer: 0 })),
          yn = on(D({}, pn, { relatedTarget: 0 })),
          bn = on(
            D({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = D({}, cn, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
            }
          }),
          vn = on(gn),
          An = on(D({}, cn, { data: 0 })),
          Cn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified'
          },
          wn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta'
          },
          En = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey'
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Sn() {
          return xn;
        }
        var On = D({}, pn, {
            key: function (e) {
              if (e.key) {
                var t = Cn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? wn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            }
          }),
          kn = on(On),
          jn = on(
            D({}, dn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0
            })
          ),
          Tn = on(
            D({}, pn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn
            })
          ),
          Mn = on(
            D({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          In = D({}, dn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0
          }),
          Rn = on(In),
          Pn = [9, 13, 27, 32],
          Nn = u && 'CompositionEvent' in window,
          Ln = null;
        u && 'documentMode' in document && (Ln = document.documentMode);
        var _n = u && 'TextEvent' in window && !Ln,
          Dn = u && (!Nn || (Ln && 8 < Ln && 11 >= Ln)),
          Bn = String.fromCharCode(32),
          zn = !1;
        function Fn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Pn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return 'object' == typeof (e = e.detail) && 'data' in e
            ? e.data
            : null;
        }
        var Un = !1,
          Vn = {
            color: !0,
            date: !0,
            datetime: !0,
            'datetime-local': !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
          };
        function Yn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Vn[e.type] : 'textarea' === t;
        }
        function Wn(e, t, n, r) {
          Oe(r),
            0 < (t = Zr(t, 'onChange')).length &&
              ((n = new un('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Zn = null,
          Qn = null;
        function Gn(e) {
          Br(e, 0);
        }
        function $n(e) {
          if (Q(Co(e))) return e;
        }
        function Xn(e, t) {
          if ('change' === e) return t;
        }
        var qn = !1;
        if (u) {
          var Kn;
          if (u) {
            var Jn = 'oninput' in document;
            if (!Jn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'),
                (Jn = 'function' == typeof er.oninput);
            }
            Kn = Jn;
          } else Kn = !1;
          qn = Kn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Zn && (Zn.detachEvent('onpropertychange', nr), (Qn = Zn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && $n(Qn)) {
            var t = [];
            Wn(t, Qn, e, Ce(e)), Ie(Gn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Qn = n), (Zn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function or(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return $n(Qn);
        }
        function ir(e, t) {
          if ('click' === e) return $n(t);
        }
        function ar(e, t) {
          if ('input' === e || 'change' === e) return $n(t);
        }
        var sr =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            'object' != typeof e ||
            null === e ||
            'object' != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!p.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function pr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? pr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function dr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function mr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            pr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && dr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                'selectionStart' in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  i = Math.min(r.start, o);
                (r = void 0 === r.end ? i : Math.min(r.end, o)),
                  !e.extend && i > r && ((o = r), (r = i), (i = o)),
                  (o = ur(n, i));
                var a = ur(n, r);
                o &&
                  a &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== a.node ||
                    e.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              'function' == typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = u && 'documentMode' in document && 11 >= document.documentMode,
          yr = null,
          br = null,
          gr = null,
          vr = !1;
        function Ar(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          vr ||
            null == yr ||
            yr !== G(r) ||
            ((r =
              'selectionStart' in (r = yr) && dr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                  }),
            (gr && lr(gr, r)) ||
              ((gr = r),
              0 < (r = Zr(br, 'onSelect')).length &&
                ((t = new un('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function Cr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var wr = {
            animationend: Cr('Animation', 'AnimationEnd'),
            animationiteration: Cr('Animation', 'AnimationIteration'),
            animationstart: Cr('Animation', 'AnimationStart'),
            transitionend: Cr('Transition', 'TransitionEnd')
          },
          Er = {},
          xr = {};
        function Sr(e) {
          if (Er[e]) return Er[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (Er[e] = n[t]);
          return e;
        }
        u &&
          ((xr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          'TransitionEvent' in window || delete wr.transitionend.transition);
        var Or = Sr('animationend'),
          kr = Sr('animationiteration'),
          jr = Sr('animationstart'),
          Tr = Sr('transitionend'),
          Mr = new Map(),
          Ir =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Rr(e, t) {
          Mr.set(e, t), l(t, [e]);
        }
        for (var Pr = 0; Pr < Ir.length; Pr++) {
          var Nr = Ir[Pr];
          Rr(Nr.toLowerCase(), 'on' + (Nr[0].toUpperCase() + Nr.slice(1)));
        }
        Rr(Or, 'onAnimationEnd'),
          Rr(kr, 'onAnimationIteration'),
          Rr(jr, 'onAnimationStart'),
          Rr('dblclick', 'onDoubleClick'),
          Rr('focusin', 'onFocus'),
          Rr('focusout', 'onBlur'),
          Rr(Tr, 'onTransitionEnd'),
          c('onMouseEnter', ['mouseout', 'mouseover']),
          c('onMouseLeave', ['mouseout', 'mouseover']),
          c('onPointerEnter', ['pointerout', 'pointerover']),
          c('onPointerLeave', ['pointerout', 'pointerover']),
          l(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          l(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          l('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste'
          ]),
          l(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          l(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          l(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Lr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          _r = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Lr)
          );
        function Dr(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, s, l, c) {
              if ((He.apply(this, arguments), _e)) {
                if (!_e) throw Error(i(198));
                var u = De;
                (_e = !1), (De = null), Be || ((Be = !0), (ze = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Br(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var s = r[a],
                    l = s.instance,
                    c = s.currentTarget;
                  if (((s = s.listener), l !== i && o.isPropagationStopped()))
                    break e;
                  Dr(o, s, c), (i = l);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((l = (s = r[a]).instance),
                    (c = s.currentTarget),
                    (s = s.listener),
                    l !== i && o.isPropagationStopped())
                  )
                    break e;
                  Dr(o, s, c), (i = l);
                }
            }
          }
          if (Be) throw ((e = ze), (Be = !1), (ze = null), e);
        }
        function zr(e, t) {
          var n = t[yo];
          void 0 === n && (n = t[yo] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Hr = '_reactListening' + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              a.forEach(function (t) {
                'selectionchange' !== t &&
                  (_r.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Fr('selectionchange', !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var o = Wt;
              break;
            case 4:
              o = Zt;
              break;
            default:
              o = Qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Pe ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Yr(e, t, n, r, o) {
          var i = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var s = r.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var l = a.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = a.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== s; ) {
                  if (null === (a = vo(s))) return;
                  if (5 === (l = a.tag) || 6 === l) {
                    r = i = a;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Ie(function () {
            var r = i,
              o = Ce(n),
              a = [];
            e: {
              var s = Mr.get(e);
              if (void 0 !== s) {
                var l = un,
                  c = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    l = kn;
                    break;
                  case 'focusin':
                    (c = 'focus'), (l = yn);
                    break;
                  case 'focusout':
                    (c = 'blur'), (l = yn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    l = yn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    l = mn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    l = hn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    l = Tn;
                    break;
                  case Or:
                  case kr:
                  case jr:
                    l = bn;
                    break;
                  case Tr:
                    l = Mn;
                    break;
                  case 'scroll':
                    l = fn;
                    break;
                  case 'wheel':
                    l = Rn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    l = vn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    l = jn;
                }
                var u = 0 != (4 & t),
                  p = !u && 'scroll' === e,
                  f = u ? (null !== s ? s + 'Capture' : null) : s;
                u = [];
                for (var d, m = r; null !== m; ) {
                  var h = (d = m).stateNode;
                  if (
                    (5 === d.tag &&
                      null !== h &&
                      ((d = h),
                      null !== f &&
                        null != (h = Re(m, f)) &&
                        u.push(Wr(m, h, d))),
                    p)
                  )
                    break;
                  m = m.return;
                }
                0 < u.length &&
                  ((s = new l(s, c, null, n, o)),
                  a.push({ event: s, listeners: u }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((l = 'mouseout' === e || 'pointerout' === e),
                (!(s = 'mouseover' === e || 'pointerover' === e) ||
                  n === Ae ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!vo(c) && !c[ho])) &&
                  (l || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? vo(c)
                          : null) &&
                        (c !== (p = Ue(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = r)),
                  l !== c))
              ) {
                if (
                  ((u = mn),
                  (h = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (m = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((u = jn),
                    (h = 'onPointerLeave'),
                    (f = 'onPointerEnter'),
                    (m = 'pointer')),
                  (p = null == l ? s : Co(l)),
                  (d = null == c ? s : Co(c)),
                  ((s = new u(h, m + 'leave', l, n, o)).target = p),
                  (s.relatedTarget = d),
                  (h = null),
                  vo(o) === r &&
                    (((u = new u(f, m + 'enter', c, n, o)).target = d),
                    (u.relatedTarget = p),
                    (h = u)),
                  (p = h),
                  l && c)
                )
                  e: {
                    for (f = c, m = 0, d = u = l; d; d = Qr(d)) m++;
                    for (d = 0, h = f; h; h = Qr(h)) d++;
                    for (; 0 < m - d; ) (u = Qr(u)), m--;
                    for (; 0 < d - m; ) (f = Qr(f)), d--;
                    for (; m--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Qr(u)), (f = Qr(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== l && Gr(a, s, l, u, !1),
                  null !== c && null !== p && Gr(a, p, c, u, !0);
              }
              if (
                'select' ===
                  (l =
                    (s = r ? Co(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ('input' === l && 'file' === s.type)
              )
                var y = Xn;
              else if (Yn(s))
                if (qn) y = ar;
                else {
                  y = or;
                  var b = rr;
                }
              else
                (l = s.nodeName) &&
                  'input' === l.toLowerCase() &&
                  ('checkbox' === s.type || 'radio' === s.type) &&
                  (y = ir);
              switch (
                (y && (y = y(e, r))
                  ? Wn(a, y, n, o)
                  : (b && b(e, s, r),
                    'focusout' === e &&
                      (b = s._wrapperState) &&
                      b.controlled &&
                      'number' === s.type &&
                      ee(s, 'number', s.value)),
                (b = r ? Co(r) : window),
                e)
              ) {
                case 'focusin':
                  (Yn(b) || 'true' === b.contentEditable) &&
                    ((yr = b), (br = r), (gr = null));
                  break;
                case 'focusout':
                  gr = br = yr = null;
                  break;
                case 'mousedown':
                  vr = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (vr = !1), Ar(a, n, o);
                  break;
                case 'selectionchange':
                  if (hr) break;
                case 'keydown':
                case 'keyup':
                  Ar(a, n, o);
              }
              var g;
              if (Nn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var v = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      v = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      v = 'onCompositionUpdate';
                      break e;
                  }
                  v = void 0;
                }
              else
                Un
                  ? Fn(e, n) && (v = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (v = 'onCompositionStart');
              v &&
                (Dn &&
                  'ko' !== n.locale &&
                  (Un || 'onCompositionStart' !== v
                    ? 'onCompositionEnd' === v && Un && (g = en())
                    : ((Kt = 'value' in (qt = o) ? qt.value : qt.textContent),
                      (Un = !0))),
                0 < (b = Zr(r, v)).length &&
                  ((v = new An(v, e, null, n, o)),
                  a.push({ event: v, listeners: b }),
                  (g || null !== (g = Hn(n))) && (v.data = g))),
                (g = _n
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Hn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((zn = !0), Bn);
                        case 'textInput':
                          return (e = t.data) === Bn && zn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return 'compositionend' === e || (!Nn && Fn(e, t))
                          ? ((e = en()), (Jt = Kt = qt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Dn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Zr(r, 'onBeforeInput')).length &&
                  ((o = new An('onBeforeInput', 'beforeinput', null, n, o)),
                  a.push({ event: o, listeners: r }),
                  (o.data = g));
            }
            Br(a, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Zr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i),
              null != (i = Re(e, n)) && r.unshift(Wr(e, i, o)),
              null != (i = Re(e, t)) && r.push(Wr(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, o) {
          for (var i = t._reactName, a = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              c = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== c &&
              ((s = c),
              o
                ? null != (l = Re(n, i)) && a.unshift(Wr(n, l, s))
                : o || (null != (l = Re(n, i)) && a.push(Wr(n, l, s)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var $r = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function qr(e) {
          return ('string' == typeof e ? e : '' + e)
            .replace($r, '\n')
            .replace(Xr, '');
        }
        function Kr(e, t, n) {
          if (((t = qr(t)), qr(e) !== t && n)) throw Error(i(425));
        }
        function Jr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' == typeof t.children ||
            'number' == typeof t.children ||
            ('object' == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = 'function' == typeof setTimeout ? setTimeout : void 0,
          oo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
          io = 'function' == typeof Promise ? Promise : void 0,
          ao =
            'function' == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== io
              ? function (e) {
                  return io.resolve(null).then(e).catch(so);
                }
              : ro;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ('/$' === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ut(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = o;
          } while (n);
          Ut(t);
        }
        function co(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function uo(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var po = Math.random().toString(36).slice(2),
          fo = '__reactFiber$' + po,
          mo = '__reactProps$' + po,
          ho = '__reactContainer$' + po,
          yo = '__reactEvents$' + po,
          bo = '__reactListeners$' + po,
          go = '__reactHandles$' + po;
        function vo(e) {
          var t = e[fo];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ho] || n[fo])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = uo(e); null !== e; ) {
                  if ((n = e[fo])) return n;
                  e = uo(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ao(e) {
          return !(e = e[fo] || e[ho]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Co(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function wo(e) {
          return e[mo] || null;
        }
        var Eo = [],
          xo = -1;
        function So(e) {
          return { current: e };
        }
        function Oo(e) {
          0 > xo || ((e.current = Eo[xo]), (Eo[xo] = null), xo--);
        }
        function ko(e, t) {
          xo++, (Eo[xo] = e.current), (e.current = t);
        }
        var jo = {},
          To = So(jo),
          Mo = So(!1),
          Io = jo;
        function Ro(e, t) {
          var n = e.type.contextTypes;
          if (!n) return jo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Po(e) {
          return null != e.childContextTypes;
        }
        function No() {
          Oo(Mo), Oo(To);
        }
        function Lo(e, t, n) {
          if (To.current !== jo) throw Error(i(168));
          ko(To, t), ko(Mo, n);
        }
        function _o(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), 'function' != typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(i(108, V(e) || 'Unknown', o));
          return D({}, n, r);
        }
        function Do(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              jo),
            (Io = To.current),
            ko(To, e),
            ko(Mo, Mo.current),
            !0
          );
        }
        function Bo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = _o(e, t, Io)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Oo(Mo),
              Oo(To),
              ko(To, e))
            : Oo(Mo),
            ko(Mo, n);
        }
        var zo = null,
          Fo = !1,
          Ho = !1;
        function Uo(e) {
          null === zo ? (zo = [e]) : zo.push(e);
        }
        function Vo() {
          if (!Ho && null !== zo) {
            Ho = !0;
            var e = 0,
              t = vt;
            try {
              var n = zo;
              for (vt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (zo = null), (Fo = !1);
            } catch (t) {
              throw (null !== zo && (zo = zo.slice(e + 1)), Qe(Je, Vo), t);
            } finally {
              (vt = t), (Ho = !1);
            }
          }
          return null;
        }
        var Yo = [],
          Wo = 0,
          Zo = null,
          Qo = 0,
          Go = [],
          $o = 0,
          Xo = null,
          qo = 1,
          Ko = '';
        function Jo(e, t) {
          (Yo[Wo++] = Qo), (Yo[Wo++] = Zo), (Zo = e), (Qo = t);
        }
        function ei(e, t, n) {
          (Go[$o++] = qo), (Go[$o++] = Ko), (Go[$o++] = Xo), (Xo = e);
          var r = qo;
          e = Ko;
          var o = 32 - at(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var i = 32 - at(t) + o;
          if (30 < i) {
            var a = o - (o % 5);
            (i = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (o -= a),
              (qo = (1 << (32 - at(t) + o)) | (n << o) | r),
              (Ko = i + e);
          } else (qo = (1 << i) | (n << o) | r), (Ko = e);
        }
        function ti(e) {
          null !== e.return && (Jo(e, 1), ei(e, 1, 0));
        }
        function ni(e) {
          for (; e === Zo; )
            (Zo = Yo[--Wo]), (Yo[Wo] = null), (Qo = Yo[--Wo]), (Yo[Wo] = null);
          for (; e === Xo; )
            (Xo = Go[--$o]),
              (Go[$o] = null),
              (Ko = Go[--$o]),
              (Go[$o] = null),
              (qo = Go[--$o]),
              (Go[$o] = null);
        }
        var ri = null,
          oi = null,
          ii = !1,
          ai = null;
        function si(e, t) {
          var n = Ic(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ri = e), (oi = co(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ri = e), (oi = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xo ? { id: qo, overflow: Ko } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824
                }),
                ((n = Ic(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ri = e),
                (oi = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ci(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function ui(e) {
          if (ii) {
            var t = oi;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (ci(e)) throw Error(i(418));
                t = co(n.nextSibling);
                var r = ri;
                t && li(e, t)
                  ? si(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e));
              }
            } else {
              if (ci(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e);
            }
          }
        }
        function pi(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ri = e;
        }
        function fi(e) {
          if (e !== ri) return !1;
          if (!ii) return pi(e), (ii = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                'head' !== (t = e.type) &&
                'body' !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oi))
          ) {
            if (ci(e)) throw (di(), Error(i(418)));
            for (; t; ) si(e, t), (t = co(t.nextSibling));
          }
          if ((pi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      oi = co(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              oi = null;
            }
          } else oi = ri ? co(e.stateNode.nextSibling) : null;
          return !0;
        }
        function di() {
          for (var e = oi; e; ) e = co(e.nextSibling);
        }
        function mi() {
          (oi = ri = null), (ii = !1);
        }
        function hi(e) {
          null === ai ? (ai = [e]) : ai.push(e);
        }
        var yi = A.ReactCurrentBatchConfig;
        function bi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gi = So(null),
          vi = null,
          Ai = null,
          Ci = null;
        function wi() {
          Ci = Ai = vi = null;
        }
        function Ei(e) {
          var t = gi.current;
          Oo(gi), (e._currentValue = t);
        }
        function xi(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Si(e, t) {
          (vi = e),
            (Ci = Ai = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (As = !0), (e.firstContext = null));
        }
        function Oi(e) {
          var t = e._currentValue;
          if (Ci !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Ai)
            ) {
              if (null === vi) throw Error(i(308));
              (Ai = e), (vi.dependencies = { lanes: 0, firstContext: e });
            } else Ai = Ai.next = e;
          return t;
        }
        var ki = null;
        function ji(e) {
          null === ki ? (ki = [e]) : ki.push(e);
        }
        function Ti(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), ji(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Mi(e, r)
          );
        }
        function Mi(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ii = !1;
        function Ri(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null
          };
        }
        function Pi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
              });
        }
        function Ni(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
          };
        }
        function Li(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 != (2 & jl))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Mi(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), ji(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Mi(e, n)
          );
        }
        function _i(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 != (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Di(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
                };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Bi(e, t, n, r) {
          var o = e.updateQueue;
          Ii = !1;
          var i = o.firstBaseUpdate,
            a = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var l = s,
              c = l.next;
            (l.next = null), null === a ? (i = c) : (a.next = c), (a = l);
            var u = e.alternate;
            null !== u &&
              (s = (u = u.updateQueue).lastBaseUpdate) !== a &&
              (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
              (u.lastBaseUpdate = l));
          }
          if (null !== i) {
            var p = o.baseState;
            for (a = 0, u = c = l = null, s = i; ; ) {
              var f = s.lane,
                d = s.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: d,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null
                    });
                e: {
                  var m = e,
                    h = s;
                  switch (((f = t), (d = n), h.tag)) {
                    case 1:
                      if ('function' == typeof (m = h.payload)) {
                        p = m.call(d, p, f);
                        break e;
                      }
                      p = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (f =
                          'function' == typeof (m = h.payload)
                            ? m.call(d, p, f)
                            : m)
                      )
                        break e;
                      p = D({}, p, f);
                      break e;
                    case 2:
                      Ii = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [s]) : f.push(s));
              } else
                (d = {
                  eventTime: d,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null
                }),
                  null === u ? ((c = u = d), (l = p)) : (u = u.next = d),
                  (a |= f);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === u && (l = p),
              (o.baseState = l),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = u),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (a |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === i && (o.shared.lanes = 0);
            (_l |= a), (e.lanes = a), (e.memoizedState = p);
          }
        }
        function zi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), 'function' != typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var Fi = new r.Component().refs;
        function Hi(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ui = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              o = tc(e),
              i = Ni(r, o);
            (i.payload = t),
              null != n && (i.callback = n),
              null !== (t = Li(e, i, o)) && (nc(t, e, o, r), _i(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              o = tc(e),
              i = Ni(r, o);
            (i.tag = 1),
              (i.payload = t),
              null != n && (i.callback = n),
              null !== (t = Li(e, i, o)) && (nc(t, e, o, r), _i(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              o = Ni(n, r);
            (o.tag = 2),
              null != t && (o.callback = t),
              null !== (t = Li(e, o, r)) && (nc(t, e, r, n), _i(t, e, r));
          }
        };
        function Vi(e, t, n, r, o, i, a) {
          return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                lr(n, r) &&
                lr(o, i)
              );
        }
        function Yi(e, t, n) {
          var r = !1,
            o = jo,
            i = t.contextType;
          return (
            'object' == typeof i && null !== i
              ? (i = Oi(i))
              : ((o = Po(t) ? Io : To.current),
                (i = (r = null != (r = t.contextTypes)) ? Ro(e, o) : jo)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ui),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Wi(e, t, n, r) {
          (e = t.state),
            'function' == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
        }
        function Zi(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Fi), Ri(e);
          var i = t.contextType;
          'object' == typeof i && null !== i
            ? (o.context = Oi(i))
            : ((i = Po(t) ? Io : To.current), (o.context = Ro(e, i))),
            (o.state = e.memoizedState),
            'function' == typeof (i = t.getDerivedStateFromProps) &&
              (Hi(e, t, i, n), (o.state = e.memoizedState)),
            'function' == typeof t.getDerivedStateFromProps ||
              'function' == typeof o.getSnapshotBeforeUpdate ||
              ('function' != typeof o.UNSAFE_componentWillMount &&
                'function' != typeof o.componentWillMount) ||
              ((t = o.state),
              'function' == typeof o.componentWillMount &&
                o.componentWillMount(),
              'function' == typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Ui.enqueueReplaceState(o, o.state, null),
              Bi(e, n, o, r),
              (o.state = e.memoizedState)),
            'function' == typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Qi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' != typeof e &&
            'object' != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = r,
                a = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' == typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Fi && (t = o.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ('string' != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Gi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e
              )
            ))
          );
        }
        function $i(e) {
          return (0, e._init)(e._payload);
        }
        function Xi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Pc(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Dc(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var i = n.type;
            return i === E
              ? p(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ('object' == typeof i &&
                    null !== i &&
                    i.$$typeof === R &&
                    $i(i) === t.type))
              ? (((r = o(t, n.props)).ref = Qi(e, t, n)), (r.return = e), r)
              : (((r = Nc(n.type, n.key, n.props, null, e.mode, r)).ref = Qi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bc(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function p(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Lc(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (('string' == typeof t && '' !== t) || 'number' == typeof t)
              return ((t = Dc('' + t, e.mode, n)).return = e), t;
            if ('object' == typeof t && null !== t) {
              switch (t.$$typeof) {
                case C:
                  return (
                    ((n = Nc(t.type, t.key, t.props, null, e.mode, n)).ref = Qi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Bc(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || L(t))
                return ((t = Lc(t, e.mode, n, null)).return = e), t;
              Gi(e, t);
            }
            return null;
          }
          function d(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (('string' == typeof n && '' !== n) || 'number' == typeof n)
              return null !== o ? null : l(e, t, '' + n, r);
            if ('object' == typeof n && null !== n) {
              switch (n.$$typeof) {
                case C:
                  return n.key === o ? c(e, t, n, r) : null;
                case w:
                  return n.key === o ? u(e, t, n, r) : null;
                case R:
                  return d(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || L(n)) return null !== o ? null : p(e, t, n, r, null);
              Gi(e, n);
            }
            return null;
          }
          function m(e, t, n, r, o) {
            if (('string' == typeof r && '' !== r) || 'number' == typeof r)
              return l(t, (e = e.get(n) || null), '' + r, o);
            if ('object' == typeof r && null !== r) {
              switch (r.$$typeof) {
                case C:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case R:
                  return m(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || L(r))
                return p(t, (e = e.get(n) || null), r, o, null);
              Gi(t, r);
            }
            return null;
          }
          function h(o, i, s, l) {
            for (
              var c = null, u = null, p = i, h = (i = 0), y = null;
              null !== p && h < s.length;
              h++
            ) {
              p.index > h ? ((y = p), (p = null)) : (y = p.sibling);
              var b = d(o, p, s[h], l);
              if (null === b) {
                null === p && (p = y);
                break;
              }
              e && p && null === b.alternate && t(o, p),
                (i = a(b, i, h)),
                null === u ? (c = b) : (u.sibling = b),
                (u = b),
                (p = y);
            }
            if (h === s.length) return n(o, p), ii && Jo(o, h), c;
            if (null === p) {
              for (; h < s.length; h++)
                null !== (p = f(o, s[h], l)) &&
                  ((i = a(p, i, h)),
                  null === u ? (c = p) : (u.sibling = p),
                  (u = p));
              return ii && Jo(o, h), c;
            }
            for (p = r(o, p); h < s.length; h++)
              null !== (y = m(p, o, h, s[h], l)) &&
                (e &&
                  null !== y.alternate &&
                  p.delete(null === y.key ? h : y.key),
                (i = a(y, i, h)),
                null === u ? (c = y) : (u.sibling = y),
                (u = y));
            return (
              e &&
                p.forEach(function (e) {
                  return t(o, e);
                }),
              ii && Jo(o, h),
              c
            );
          }
          function y(o, s, l, c) {
            var u = L(l);
            if ('function' != typeof u) throw Error(i(150));
            if (null == (l = u.call(l))) throw Error(i(151));
            for (
              var p = (u = null), h = s, y = (s = 0), b = null, g = l.next();
              null !== h && !g.done;
              y++, g = l.next()
            ) {
              h.index > y ? ((b = h), (h = null)) : (b = h.sibling);
              var v = d(o, h, g.value, c);
              if (null === v) {
                null === h && (h = b);
                break;
              }
              e && h && null === v.alternate && t(o, h),
                (s = a(v, s, y)),
                null === p ? (u = v) : (p.sibling = v),
                (p = v),
                (h = b);
            }
            if (g.done) return n(o, h), ii && Jo(o, y), u;
            if (null === h) {
              for (; !g.done; y++, g = l.next())
                null !== (g = f(o, g.value, c)) &&
                  ((s = a(g, s, y)),
                  null === p ? (u = g) : (p.sibling = g),
                  (p = g));
              return ii && Jo(o, y), u;
            }
            for (h = r(o, h); !g.done; y++, g = l.next())
              null !== (g = m(h, o, y, g.value, c)) &&
                (e &&
                  null !== g.alternate &&
                  h.delete(null === g.key ? y : g.key),
                (s = a(g, s, y)),
                null === p ? (u = g) : (p.sibling = g),
                (p = g));
            return (
              e &&
                h.forEach(function (e) {
                  return t(o, e);
                }),
              ii && Jo(o, y),
              u
            );
          }
          return function e(r, i, a, l) {
            if (
              ('object' == typeof a &&
                null !== a &&
                a.type === E &&
                null === a.key &&
                (a = a.props.children),
              'object' == typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case C:
                  e: {
                    for (var c = a.key, u = i; null !== u; ) {
                      if (u.key === c) {
                        if ((c = a.type) === E) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((i = o(u, a.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ('object' == typeof c &&
                            null !== c &&
                            c.$$typeof === R &&
                            $i(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((i = o(u, a.props)).ref = Qi(r, u, a)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    a.type === E
                      ? (((i = Lc(a.props.children, r.mode, l, a.key)).return =
                          r),
                        (r = i))
                      : (((l = Nc(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          l
                        )).ref = Qi(r, i, a)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case w:
                  e: {
                    for (u = a.key; null !== i; ) {
                      if (i.key === u) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === a.containerInfo &&
                          i.stateNode.implementation === a.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = o(i, a.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Bc(a, r.mode, l)).return = r), (r = i);
                  }
                  return s(r);
                case R:
                  return e(r, i, (u = a._init)(a._payload), l);
              }
              if (te(a)) return h(r, i, a, l);
              if (L(a)) return y(r, i, a, l);
              Gi(r, a);
            }
            return ('string' == typeof a && '' !== a) || 'number' == typeof a
              ? ((a = '' + a),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = o(i, a)).return = r), (r = i))
                  : (n(r, i), ((i = Dc(a, r.mode, l)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var qi = Xi(!0),
          Ki = Xi(!1),
          Ji = {},
          ea = So(Ji),
          ta = So(Ji),
          na = So(Ji);
        function ra(e) {
          if (e === Ji) throw Error(i(174));
          return e;
        }
        function oa(e, t) {
          switch ((ko(na, t), ko(ta, e), ko(ea, Ji), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, '');
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Oo(ea), ko(ea, t);
        }
        function ia() {
          Oo(ea), Oo(ta), Oo(na);
        }
        function aa(e) {
          ra(na.current);
          var t = ra(ea.current),
            n = le(t, e.type);
          t !== n && (ko(ta, e), ko(ea, n));
        }
        function sa(e) {
          ta.current === e && (Oo(ea), Oo(ta));
        }
        var la = So(0);
        function ca(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ua = [];
        function pa() {
          for (var e = 0; e < ua.length; e++)
            ua[e]._workInProgressVersionPrimary = null;
          ua.length = 0;
        }
        var fa = A.ReactCurrentDispatcher,
          da = A.ReactCurrentBatchConfig,
          ma = 0,
          ha = null,
          ya = null,
          ba = null,
          ga = !1,
          va = !1,
          Aa = 0,
          Ca = 0;
        function wa() {
          throw Error(i(321));
        }
        function Ea(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function xa(e, t, n, r, o, a) {
          if (
            ((ma = a),
            (ha = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fa.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, o)),
            va)
          ) {
            a = 0;
            do {
              if (((va = !1), (Aa = 0), 25 <= a)) throw Error(i(301));
              (a += 1),
                (ba = ya = null),
                (t.updateQueue = null),
                (fa.current = cs),
                (e = n(r, o));
            } while (va);
          }
          if (
            ((fa.current = as),
            (t = null !== ya && null !== ya.next),
            (ma = 0),
            (ba = ya = ha = null),
            (ga = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Sa() {
          var e = 0 !== Aa;
          return (Aa = 0), e;
        }
        function Oa() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
          };
          return (
            null === ba ? (ha.memoizedState = ba = e) : (ba = ba.next = e), ba
          );
        }
        function ka() {
          if (null === ya) {
            var e = ha.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ya.next;
          var t = null === ba ? ha.memoizedState : ba.next;
          if (null !== t) (ba = t), (ya = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ya = e).memoizedState,
              baseState: ya.baseState,
              baseQueue: ya.baseQueue,
              queue: ya.queue,
              next: null
            }),
              null === ba ? (ha.memoizedState = ba = e) : (ba = ba.next = e);
          }
          return ba;
        }
        function ja(e, t) {
          return 'function' == typeof t ? t(e) : t;
        }
        function Ta(e) {
          var t = ka(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = ya,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var s = o.next;
              (o.next = a.next), (a.next = s);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (a = o.next), (r = r.baseState);
            var l = (s = null),
              c = null,
              u = a;
            do {
              var p = u.lane;
              if ((ma & p) === p)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: p,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null
                };
                null === c ? ((l = c = f), (s = r)) : (c = c.next = f),
                  (ha.lanes |= p),
                  (_l |= p);
              }
              u = u.next;
            } while (null !== u && u !== a);
            null === c ? (s = r) : (c.next = l),
              sr(r, t.memoizedState) || (As = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (a = o.lane), (ha.lanes |= a), (_l |= a), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ma(e) {
          var t = ka(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (a = e(a, s.action)), (s = s.next);
            } while (s !== o);
            sr(a, t.memoizedState) || (As = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Ia() {}
        function Ra(e, t) {
          var n = ha,
            r = ka(),
            o = t(),
            a = !sr(r.memoizedState, o);
          if (
            (a && ((r.memoizedState = o), (As = !0)),
            (r = r.queue),
            Ya(La.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              a ||
              (null !== ba && 1 & ba.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              za(9, Na.bind(null, n, r, o, t), void 0, null),
              null === Tl)
            )
              throw Error(i(349));
            0 != (30 & ma) || Pa(n, t, o);
          }
          return o;
        }
        function Pa(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ha.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ha.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Na(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), _a(t) && Da(e);
        }
        function La(e, t, n) {
          return n(function () {
            _a(t) && Da(e);
          });
        }
        function _a(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Da(e) {
          var t = Mi(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Ba(e) {
          var t = Oa();
          return (
            'function' == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ja,
              lastRenderedState: e
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, ha, e)),
            [t.memoizedState, e]
          );
        }
        function za(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ha.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ha.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fa() {
          return ka().memoizedState;
        }
        function Ha(e, t, n, r) {
          var o = Oa();
          (ha.flags |= e),
            (o.memoizedState = za(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ua(e, t, n, r) {
          var o = ka();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ya) {
            var a = ya.memoizedState;
            if (((i = a.destroy), null !== r && Ea(r, a.deps)))
              return void (o.memoizedState = za(t, n, i, r));
          }
          (ha.flags |= e), (o.memoizedState = za(1 | t, n, i, r));
        }
        function Va(e, t) {
          return Ha(8390656, 8, e, t);
        }
        function Ya(e, t) {
          return Ua(2048, 8, e, t);
        }
        function Wa(e, t) {
          return Ua(4, 2, e, t);
        }
        function Za(e, t) {
          return Ua(4, 4, e, t);
        }
        function Qa(e, t) {
          return 'function' == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ga(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            Ua(4, 4, Qa.bind(null, t, e), n)
          );
        }
        function $a() {}
        function Xa(e, t) {
          var n = ka();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ea(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function qa(e, t) {
          var n = ka();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ea(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ka(e, t, n) {
          return 0 == (21 & ma)
            ? (e.baseState && ((e.baseState = !1), (As = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = ht()), (ha.lanes |= n), (_l |= n), (e.baseState = !0)),
              t);
        }
        function Ja(e, t) {
          var n = vt;
          (vt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = da.transition;
          da.transition = {};
          try {
            e(!1), t();
          } finally {
            (vt = n), (da.transition = r);
          }
        }
        function es() {
          return ka().memoizedState;
        }
        function ts(e, t, n) {
          var r = tc(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
          }),
            rs(e)
              ? os(t, n)
              : null !== (n = Ti(e, t, n, r)) &&
                (nc(n, e, r, ec()), is(n, t, r));
        }
        function ns(e, t, n) {
          var r = tc(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null
            };
          if (rs(e)) os(t, o);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  s = i(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), sr(s, a))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((o.next = o), ji(t))
                      : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (e) {}
            null !== (n = Ti(e, t, o, r)) &&
              (nc(n, e, r, (o = ec())), is(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === ha || (null !== t && t === ha);
        }
        function os(e, t) {
          va = ga = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function is(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var as = {
            readContext: Oi,
            useCallback: wa,
            useContext: wa,
            useEffect: wa,
            useImperativeHandle: wa,
            useInsertionEffect: wa,
            useLayoutEffect: wa,
            useMemo: wa,
            useReducer: wa,
            useRef: wa,
            useState: wa,
            useDebugValue: wa,
            useDeferredValue: wa,
            useTransition: wa,
            useMutableSource: wa,
            useSyncExternalStore: wa,
            useId: wa,
            unstable_isNewReconciler: !1
          },
          ss = {
            readContext: Oi,
            useCallback: function (e, t) {
              return (Oa().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oi,
            useEffect: Va,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Ha(4194308, 4, Qa.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ha(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ha(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Oa();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Oa();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, ha, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Oa().memoizedState = e);
            },
            useState: Ba,
            useDebugValue: $a,
            useDeferredValue: function (e) {
              return (Oa().memoizedState = e);
            },
            useTransition: function () {
              var e = Ba(!1),
                t = e[0];
              return (
                (e = Ja.bind(null, e[1])), (Oa().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ha,
                o = Oa();
              if (ii) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Tl)) throw Error(i(349));
                0 != (30 & ma) || Pa(r, t, n);
              }
              o.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (o.queue = a),
                Va(La.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                za(9, Na.bind(null, r, a, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Oa(),
                t = Tl.identifierPrefix;
              if (ii) {
                var n = Ko;
                (t =
                  ':' +
                  t +
                  'R' +
                  (n = (qo & ~(1 << (32 - at(qo) - 1))).toString(32) + n)),
                  0 < (n = Aa++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = Ca++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1
          },
          ls = {
            readContext: Oi,
            useCallback: Xa,
            useContext: Oi,
            useEffect: Ya,
            useImperativeHandle: Ga,
            useInsertionEffect: Wa,
            useLayoutEffect: Za,
            useMemo: qa,
            useReducer: Ta,
            useRef: Fa,
            useState: function () {
              return Ta(ja);
            },
            useDebugValue: $a,
            useDeferredValue: function (e) {
              return Ka(ka(), ya.memoizedState, e);
            },
            useTransition: function () {
              return [Ta(ja)[0], ka().memoizedState];
            },
            useMutableSource: Ia,
            useSyncExternalStore: Ra,
            useId: es,
            unstable_isNewReconciler: !1
          },
          cs = {
            readContext: Oi,
            useCallback: Xa,
            useContext: Oi,
            useEffect: Ya,
            useImperativeHandle: Ga,
            useInsertionEffect: Wa,
            useLayoutEffect: Za,
            useMemo: qa,
            useReducer: Ma,
            useRef: Fa,
            useState: function () {
              return Ma(ja);
            },
            useDebugValue: $a,
            useDeferredValue: function (e) {
              var t = ka();
              return null === ya
                ? (t.memoizedState = e)
                : Ka(t, ya.memoizedState, e);
            },
            useTransition: function () {
              return [Ma(ja)[0], ka().memoizedState];
            },
            useMutableSource: Ia,
            useSyncExternalStore: Ra,
            useId: es,
            unstable_isNewReconciler: !1
          };
        function us(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = '\nError generating stack: ' + e.message + '\n' + e.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function ps(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null
          };
        }
        function fs(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var ds = 'function' == typeof WeakMap ? WeakMap : Map;
        function ms(e, t, n) {
          ((n = Ni(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Yl || ((Yl = !0), (Wl = r)), fs(0, t);
            }),
            n
          );
        }
        function hs(e, t, n) {
          (n = Ni(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' == typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fs(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              'function' == typeof i.componentDidCatch &&
              (n.callback = function () {
                fs(0, t),
                  'function' != typeof r &&
                    (null === Zl ? (Zl = new Set([this])) : Zl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : ''
                });
              }),
            n
          );
        }
        function ys(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ds();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Sc.bind(null, e, t, n)), t.then(e, e));
        }
        function bs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gs(e, t, n, r, o) {
          return 0 == (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ni(-1, 1)).tag = 2), Li(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var vs = A.ReactCurrentOwner,
          As = !1;
        function Cs(e, t, n, r) {
          t.child = null === e ? Ki(t, null, n, r) : qi(t, e.child, n, r);
        }
        function ws(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            Si(t, o),
            (r = xa(e, t, n, r, i, o)),
            (n = Sa()),
            null === e || As
              ? (ii && n && ti(t), (t.flags |= 1), Cs(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ys(e, t, o))
          );
        }
        function Es(e, t, n, r, o) {
          if (null === e) {
            var i = n.type;
            return 'function' != typeof i ||
              Rc(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Nc(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), xs(e, t, i, r, o));
          }
          if (((i = e.child), 0 == (e.lanes & o))) {
            var a = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(a, r) &&
              e.ref === t.ref
            )
              return Ys(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Pc(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xs(e, t, n, r, o) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((As = !1), (t.pendingProps = r = i), 0 == (e.lanes & o)))
                return (t.lanes = e.lanes), Ys(e, t, o);
              0 != (131072 & e.flags) && (As = !0);
            }
          }
          return ks(e, t, n, r, o);
        }
        function Ss(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 == (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
              }),
                ko(Pl, Rl),
                (Rl |= n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                  }),
                  (t.updateQueue = null),
                  ko(Pl, Rl),
                  (Rl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
              }),
                (r = null !== i ? i.baseLanes : n),
                ko(Pl, Rl),
                (Rl |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ko(Pl, Rl),
              (Rl |= r);
          return Cs(e, t, o, n), t.child;
        }
        function Os(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function ks(e, t, n, r, o) {
          var i = Po(n) ? Io : To.current;
          return (
            (i = Ro(t, i)),
            Si(t, o),
            (n = xa(e, t, n, r, i, o)),
            (r = Sa()),
            null === e || As
              ? (ii && r && ti(t), (t.flags |= 1), Cs(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ys(e, t, o))
          );
        }
        function js(e, t, n, r, o) {
          if (Po(n)) {
            var i = !0;
            Do(t);
          } else i = !1;
          if ((Si(t, o), null === t.stateNode))
            Vs(e, t), Yi(t, n, r), Zi(t, n, r, o), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              s = t.memoizedProps;
            a.props = s;
            var l = a.context,
              c = n.contextType;
            c =
              'object' == typeof c && null !== c
                ? Oi(c)
                : Ro(t, (c = Po(n) ? Io : To.current));
            var u = n.getDerivedStateFromProps,
              p =
                'function' == typeof u ||
                'function' == typeof a.getSnapshotBeforeUpdate;
            p ||
              ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
              ((s !== r || l !== c) && Wi(t, a, r, c)),
              (Ii = !1);
            var f = t.memoizedState;
            (a.state = f),
              Bi(t, r, a, o),
              (l = t.memoizedState),
              s !== r || f !== l || Mo.current || Ii
                ? ('function' == typeof u &&
                    (Hi(t, n, u, r), (l = t.memoizedState)),
                  (s = Ii || Vi(t, n, s, r, f, l, c))
                    ? (p ||
                        ('function' != typeof a.UNSAFE_componentWillMount &&
                          'function' != typeof a.componentWillMount) ||
                        ('function' == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        'function' == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      'function' == typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' == typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (a.props = r),
                  (a.state = l),
                  (a.context = c),
                  (r = s))
                : ('function' == typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Pi(e, t),
              (s = t.memoizedProps),
              (c = t.type === t.elementType ? s : bi(t.type, s)),
              (a.props = c),
              (p = t.pendingProps),
              (f = a.context),
              (l =
                'object' == typeof (l = n.contextType) && null !== l
                  ? Oi(l)
                  : Ro(t, (l = Po(n) ? Io : To.current)));
            var d = n.getDerivedStateFromProps;
            (u =
              'function' == typeof d ||
              'function' == typeof a.getSnapshotBeforeUpdate) ||
              ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
              ((s !== p || f !== l) && Wi(t, a, r, l)),
              (Ii = !1),
              (f = t.memoizedState),
              (a.state = f),
              Bi(t, r, a, o);
            var m = t.memoizedState;
            s !== p || f !== m || Mo.current || Ii
              ? ('function' == typeof d &&
                  (Hi(t, n, d, r), (m = t.memoizedState)),
                (c = Ii || Vi(t, n, c, r, f, m, l) || !1)
                  ? (u ||
                      ('function' != typeof a.UNSAFE_componentWillUpdate &&
                        'function' != typeof a.componentWillUpdate) ||
                      ('function' == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, m, l),
                      'function' == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, m, l)),
                    'function' == typeof a.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' != typeof a.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' != typeof a.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (a.props = r),
                (a.state = m),
                (a.context = l),
                (r = c))
              : ('function' != typeof a.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' != typeof a.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ts(e, t, n, r, i, o);
        }
        function Ts(e, t, n, r, o, i) {
          Os(e, t);
          var a = 0 != (128 & t.flags);
          if (!r && !a) return o && Bo(t, n, !1), Ys(e, t, i);
          (r = t.stateNode), (vs.current = t);
          var s =
            a && 'function' != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = qi(t, e.child, null, i)),
                (t.child = qi(t, null, s, i)))
              : Cs(e, t, s, i),
            (t.memoizedState = r.state),
            o && Bo(t, n, !0),
            t.child
          );
        }
        function Ms(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Lo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Lo(0, t.context, !1),
            oa(e, t.containerInfo);
        }
        function Is(e, t, n, r, o) {
          return mi(), hi(o), (t.flags |= 256), Cs(e, t, n, r), t.child;
        }
        var Rs,
          Ps,
          Ns,
          Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
        function _s(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ds(e, t, n) {
          var r,
            o = t.pendingProps,
            a = la.current,
            s = !1,
            l = 0 != (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (a |= 1),
            ko(la, 1 & a),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (l = { mode: 'hidden', children: l }),
                      0 == (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = _c(l, o, 0, null)),
                      (e = Lc(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = _s(n)),
                      (t.memoizedState = Ls),
                      e)
                    : Bs(t, l))
            );
          if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
            return (function (e, t, n, r, o, a, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), zs(e, t, s, (r = ps(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = r.fallback),
                    (o = t.mode),
                    (r = _c(
                      { mode: 'visible', children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((a = Lc(a, o, s, null)).flags |= 2),
                    (r.return = t),
                    (a.return = t),
                    (r.sibling = a),
                    (t.child = r),
                    0 != (1 & t.mode) && qi(t, e.child, null, s),
                    (t.child.memoizedState = _s(s)),
                    (t.memoizedState = Ls),
                    a);
              if (0 == (1 & t.mode)) return zs(e, t, s, null);
              if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), zs(e, t, s, (r = ps((a = Error(i(419))), r, void 0)))
                );
              }
              if (((l = 0 != (s & e.childLanes)), As || l)) {
                if (null !== (r = Tl)) {
                  switch (s & -s) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 != (o & (r.suspendedLanes | s)) ? 0 : o) &&
                    o !== a.retryLane &&
                    ((a.retryLane = o), Mi(e, o), nc(r, e, o, -1));
                }
                return hc(), zs(e, t, s, (r = ps(Error(i(421)))));
              }
              return '$?' === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = kc.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = a.treeContext),
                  (oi = co(o.nextSibling)),
                  (ri = t),
                  (ii = !0),
                  (ai = null),
                  null !== e &&
                    ((Go[$o++] = qo),
                    (Go[$o++] = Ko),
                    (Go[$o++] = Xo),
                    (qo = e.id),
                    (Ko = e.overflow),
                    (Xo = t)),
                  ((t = Bs(t, r.children)).flags |= 4096),
                  t);
            })(e, t, l, o, r, a, n);
          if (s) {
            (s = o.fallback), (l = t.mode), (r = (a = e.child).sibling);
            var c = { mode: 'hidden', children: o.children };
            return (
              0 == (1 & l) && t.child !== a
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = c),
                  (t.deletions = null))
                : ((o = Pc(a, c)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== r
                ? (s = Pc(r, s))
                : ((s = Lc(s, l, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              (o = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? _s(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ls),
              o
            );
          }
          return (
            (e = (s = e.child).sibling),
            (o = Pc(s, { mode: 'visible', children: o.children })),
            0 == (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Bs(e, t) {
          return (
            ((t = _c(
              { mode: 'visible', children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function zs(e, t, n, r) {
          return (
            null !== r && hi(r),
            qi(t, e.child, null, n),
            ((e = Bs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Fs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xi(e.return, t, n);
        }
        function Hs(e, t, n, r, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o));
        }
        function Us(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((Cs(e, t, r.children, n), 0 != (2 & (r = la.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Fs(e, n, t);
                else if (19 === e.tag) Fs(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ko(la, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ca(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Hs(t, !1, o, n, i);
                break;
              case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ca(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Hs(t, !0, n, null, i);
                break;
              case 'together':
                Hs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vs(e, t) {
          0 == (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ys(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (_l |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Pc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Pc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ws(e, t) {
          if (!ii)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Zs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qs(e, t, n) {
          var r = t.pendingProps;
          switch ((ni(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Zs(t), null;
            case 1:
            case 17:
              return Po(t.type) && No(), Zs(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ia(),
                Oo(Mo),
                Oo(To),
                pa(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ai && (ac(ai), (ai = null)))),
                Zs(t),
                null
              );
            case 5:
              sa(t);
              var o = ra(na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ps(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Zs(t), null;
                }
                if (((e = ra(ea.current)), fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (
                    ((r[fo] = t), (r[mo] = a), (e = 0 != (1 & t.mode)), n)
                  ) {
                    case 'dialog':
                      zr('cancel', r), zr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      zr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < Lr.length; o++) zr(Lr[o], r);
                      break;
                    case 'source':
                      zr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      zr('error', r), zr('load', r);
                      break;
                    case 'details':
                      zr('toggle', r);
                      break;
                    case 'input':
                      X(r, a), zr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        zr('invalid', r);
                      break;
                    case 'textarea':
                      oe(r, a), zr('invalid', r);
                  }
                  for (var l in (ge(n, a), (o = null), a))
                    if (a.hasOwnProperty(l)) {
                      var c = a[l];
                      'children' === l
                        ? 'string' == typeof c
                          ? r.textContent !== c &&
                            (!0 !== a.suppressHydrationWarning &&
                              Kr(r.textContent, c, e),
                            (o = ['children', c]))
                          : 'number' == typeof c &&
                            r.textContent !== '' + c &&
                            (!0 !== a.suppressHydrationWarning &&
                              Kr(r.textContent, c, e),
                            (o = ['children', '' + c]))
                        : s.hasOwnProperty(l) &&
                          null != c &&
                          'onScroll' === l &&
                          zr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      Z(r), J(r, a, !0);
                      break;
                    case 'textarea':
                      Z(r), ae(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' == typeof a.onClick && (r.onclick = Jr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = se(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = l.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' == typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          'select' === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[fo] = t),
                    (e[mo] = r),
                    Rs(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((l = ve(n, r)), n)) {
                      case 'dialog':
                        zr('cancel', e), zr('close', e), (o = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        zr('load', e), (o = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (o = 0; o < Lr.length; o++) zr(Lr[o], e);
                        o = r;
                        break;
                      case 'source':
                        zr('error', e), (o = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        zr('error', e), zr('load', e), (o = r);
                        break;
                      case 'details':
                        zr('toggle', e), (o = r);
                        break;
                      case 'input':
                        X(e, r), (o = $(e, r)), zr('invalid', e);
                        break;
                      case 'option':
                      default:
                        o = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = D({}, r, { value: void 0 })),
                          zr('invalid', e);
                        break;
                      case 'textarea':
                        oe(e, r), (o = re(e, r)), zr('invalid', e);
                    }
                    for (a in (ge(n, o), (c = o)))
                      if (c.hasOwnProperty(a)) {
                        var u = c[a];
                        'style' === a
                          ? ye(e, u)
                          : 'dangerouslySetInnerHTML' === a
                          ? null != (u = u ? u.__html : void 0) && pe(e, u)
                          : 'children' === a
                          ? 'string' == typeof u
                            ? ('textarea' !== n || '' !== u) && fe(e, u)
                            : 'number' == typeof u && fe(e, '' + u)
                          : 'suppressContentEditableWarning' !== a &&
                            'suppressHydrationWarning' !== a &&
                            'autoFocus' !== a &&
                            (s.hasOwnProperty(a)
                              ? null != u && 'onScroll' === a && zr('scroll', e)
                              : null != u && v(e, a, u, l));
                      }
                    switch (n) {
                      case 'input':
                        Z(e), J(e, r, !1);
                        break;
                      case 'textarea':
                        Z(e), ae(e);
                        break;
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + Y(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? ne(e, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' == typeof o.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Zs(t), null;
            case 6:
              if (e && null != t.stateNode) Ns(0, t, e.memoizedProps, r);
              else {
                if ('string' != typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = ra(na.current)), ra(ea.current), fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fo] = t),
                    (a = r.nodeValue !== n) && null !== (e = ri))
                  )
                    switch (e.tag) {
                      case 3:
                        Kr(r.nodeValue, n, 0 != (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Kr(r.nodeValue, n, 0 != (1 & e.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fo] = t),
                    (t.stateNode = r);
              }
              return Zs(t), null;
            case 13:
              if (
                (Oo(la),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ii &&
                  null !== oi &&
                  0 != (1 & t.mode) &&
                  0 == (128 & t.flags)
                )
                  di(), mi(), (t.flags |= 98560), (a = !1);
                else if (((a = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(i(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(i(317));
                    a[fo] = t;
                  } else
                    mi(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Zs(t), (a = !1);
                } else null !== ai && (ac(ai), (ai = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !=
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 != (1 & t.mode) &&
                      (null === e || 0 != (1 & la.current)
                        ? 0 === Nl && (Nl = 3)
                        : hc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Zs(t),
                  null);
            case 4:
              return (
                ia(), null === e && Ur(t.stateNode.containerInfo), Zs(t), null
              );
            case 10:
              return Ei(t.type._context), Zs(t), null;
            case 19:
              if ((Oo(la), null === (a = t.memoizedState))) return Zs(t), null;
              if (((r = 0 != (128 & t.flags)), null === (l = a.rendering)))
                if (r) Ws(a, !1);
                else {
                  if (0 !== Nl || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ca(e))) {
                        for (
                          t.flags |= 128,
                            Ws(a, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((a = n).flags &= 14680066),
                            null === (l = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = e),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = l.childLanes),
                                (a.lanes = l.lanes),
                                (a.child = l.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = l.memoizedProps),
                                (a.memoizedState = l.memoizedState),
                                (a.updateQueue = l.updateQueue),
                                (a.type = l.type),
                                (e = l.dependencies),
                                (a.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                      })),
                            (n = n.sibling);
                        return ko(la, (1 & la.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    qe() > Ul &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ws(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ca(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ws(a, !0),
                      null === a.tail &&
                        'hidden' === a.tailMode &&
                        !l.alternate &&
                        !ii)
                    )
                      return Zs(t), null;
                  } else
                    2 * qe() - a.renderingStartTime > Ul &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ws(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = a.last) ? (n.sibling = l) : (t.child = l),
                    (a.last = l));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = qe()),
                  (t.sibling = null),
                  (n = la.current),
                  ko(la, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Zs(t), null);
            case 22:
            case 23:
              return (
                pc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                  ? 0 != (1073741824 & Rl) &&
                    (Zs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Zs(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Gs(e, t) {
          switch ((ni(t), t.tag)) {
            case 1:
              return (
                Po(t.type) && No(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ia(),
                Oo(Mo),
                Oo(To),
                pa(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return sa(t), null;
            case 13:
              if (
                (Oo(la),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                mi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Oo(la), null;
            case 4:
              return ia(), null;
            case 10:
              return Ei(t.type._context), null;
            case 22:
            case 23:
              return pc(), null;
            default:
              return null;
          }
        }
        (Rs = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ps = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ra(ea.current);
              var i,
                a = null;
              switch (n) {
                case 'input':
                  (o = $(e, o)), (r = $(e, r)), (a = []);
                  break;
                case 'select':
                  (o = D({}, o, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case 'textarea':
                  (o = re(e, o)), (r = re(e, r)), (a = []);
                  break;
                default:
                  'function' != typeof o.onClick &&
                    'function' == typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (u in (ge(n, r), (n = null), o))
                if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u])
                  if ('style' === u) {
                    var l = o[u];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== u &&
                      'children' !== u &&
                      'suppressContentEditableWarning' !== u &&
                      'suppressHydrationWarning' !== u &&
                      'autoFocus' !== u &&
                      (s.hasOwnProperty(u)
                        ? a || (a = [])
                        : (a = a || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((l = null != o ? o[u] : void 0),
                  r.hasOwnProperty(u) && c !== l && (null != c || null != l))
                )
                  if ('style' === u)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ''));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          l[i] !== c[i] &&
                          (n || (n = {}), (n[i] = c[i]));
                    } else n || (a || (a = []), a.push(u, n)), (n = c);
                  else
                    'dangerouslySetInnerHTML' === u
                      ? ((c = c ? c.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != c && l !== c && (a = a || []).push(u, c))
                      : 'children' === u
                      ? ('string' != typeof c && 'number' != typeof c) ||
                        (a = a || []).push(u, '' + c)
                      : 'suppressContentEditableWarning' !== u &&
                        'suppressHydrationWarning' !== u &&
                        (s.hasOwnProperty(u)
                          ? (null != c && 'onScroll' === u && zr('scroll', e),
                            a || l === c || (a = []))
                          : (a = a || []).push(u, c));
              }
              n && (a = a || []).push('style', n);
              var u = a;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Ns = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var $s = !1,
          Xs = !1,
          qs = 'function' == typeof WeakSet ? WeakSet : Set,
          Ks = null;
        function Js(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' == typeof n)
              try {
                n(null);
              } catch (n) {
                xc(e, t, n);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (n) {
            xc(e, t, n);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), void 0 !== i && el(t, n, i);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ol(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fo],
              delete t[mo],
              delete t[yo],
              delete t[bo],
              delete t[go]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function al(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || al(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var ul = null,
          pl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) dl(e, t, n), (n = n.sibling);
        }
        function dl(e, t, n) {
          if (it && 'function' == typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(ot, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              Xs || Js(n, t);
            case 6:
              var r = ul,
                o = pl;
              (ul = null),
                fl(e, t, n),
                (pl = o),
                null !== (ul = r) &&
                  (pl
                    ? ((e = ul),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ul.removeChild(n.stateNode));
              break;
            case 18:
              null !== ul &&
                (pl
                  ? ((e = ul),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lo(e.parentNode, n)
                      : 1 === e.nodeType && lo(e, n),
                    Ut(e))
                  : lo(ul, n.stateNode));
              break;
            case 4:
              (r = ul),
                (o = pl),
                (ul = n.stateNode.containerInfo),
                (pl = !0),
                fl(e, t, n),
                (ul = r),
                (pl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var i = o,
                    a = i.destroy;
                  (i = i.tag),
                    void 0 !== a &&
                      (0 != (2 & i) || 0 != (4 & i)) &&
                      el(n, t, a),
                    (o = o.next);
                } while (o !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !Xs &&
                (Js(n, t),
                'function' == typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  xc(n, t, e);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xs = (r = Xs) || null !== n.memoizedState),
                  fl(e, t, n),
                  (Xs = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function ml(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new qs()),
              t.forEach(function (t) {
                var r = jc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function hl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var a = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (ul = l.stateNode), (pl = !1);
                      break e;
                    case 3:
                    case 4:
                      (ul = l.stateNode.containerInfo), (pl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === ul) throw Error(i(160));
                dl(a, s, o), (ul = null), (pl = !1);
                var c = o.alternate;
                null !== c && (c.return = null), (o.return = null);
              } catch (e) {
                xc(o, t, e);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yl(t, e), (t = t.sibling);
        }
        function yl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hl(t, e), bl(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (t) {
                  xc(e, e.return, t);
                }
                try {
                  nl(5, e, e.return);
                } catch (t) {
                  xc(e, e.return, t);
                }
              }
              break;
            case 1:
              hl(t, e), bl(e), 512 & r && null !== n && Js(n, n.return);
              break;
            case 5:
              if (
                (hl(t, e),
                bl(e),
                512 & r && null !== n && Js(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  fe(o, '');
                } catch (t) {
                  xc(e, e.return, t);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var a = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : a,
                  l = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    'input' === l &&
                      'radio' === a.type &&
                      null != a.name &&
                      q(o, a),
                      ve(l, s);
                    var u = ve(l, a);
                    for (s = 0; s < c.length; s += 2) {
                      var p = c[s],
                        f = c[s + 1];
                      'style' === p
                        ? ye(o, f)
                        : 'dangerouslySetInnerHTML' === p
                        ? pe(o, f)
                        : 'children' === p
                        ? fe(o, f)
                        : v(o, p, f, u);
                    }
                    switch (l) {
                      case 'input':
                        K(o, a);
                        break;
                      case 'textarea':
                        ie(o, a);
                        break;
                      case 'select':
                        var d = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var m = a.value;
                        null != m
                          ? ne(o, !!a.multiple, m, !1)
                          : d !== !!a.multiple &&
                            (null != a.defaultValue
                              ? ne(o, !!a.multiple, a.defaultValue, !0)
                              : ne(o, !!a.multiple, a.multiple ? [] : '', !1));
                    }
                    o[mo] = a;
                  } catch (t) {
                    xc(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((hl(t, e), bl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (o = e.stateNode), (a = e.memoizedProps);
                try {
                  o.nodeValue = a;
                } catch (t) {
                  xc(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                (hl(t, e),
                bl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (t) {
                  xc(e, e.return, t);
                }
              break;
            case 4:
            default:
              hl(t, e), bl(e);
              break;
            case 13:
              hl(t, e),
                bl(e),
                8192 & (o = e.child).flags &&
                  ((a = null !== o.memoizedState),
                  (o.stateNode.isHidden = a),
                  !a ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Hl = qe())),
                4 & r && ml(e);
              break;
            case 22:
              if (
                ((p = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xs = (u = Xs) || p), hl(t, e), (Xs = u))
                  : hl(t, e),
                bl(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !p && 0 != (1 & e.mode))
                )
                  for (Ks = e, p = e.child; null !== p; ) {
                    for (f = Ks = p; null !== Ks; ) {
                      switch (((m = (d = Ks).child), d.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, d, d.return);
                          break;
                        case 1:
                          Js(d, d.return);
                          var h = d.stateNode;
                          if ('function' == typeof h.componentWillUnmount) {
                            (r = d), (n = d.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (e) {
                              xc(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          Js(d, d.return);
                          break;
                        case 22:
                          if (null !== d.memoizedState) {
                            Cl(f);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = d), (Ks = m)) : Cl(f);
                    }
                    p = p.sibling;
                  }
                e: for (p = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === p) {
                      p = f;
                      try {
                        (o = f.stateNode),
                          u
                            ? 'function' == typeof (a = o.style).setProperty
                              ? a.setProperty('display', 'none', 'important')
                              : (a.display = 'none')
                            : ((l = f.stateNode),
                              (s =
                                null != (c = f.memoizedProps.style) &&
                                c.hasOwnProperty('display')
                                  ? c.display
                                  : null),
                              (l.style.display = he('display', s)));
                      } catch (t) {
                        xc(e, e.return, t);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === p)
                      try {
                        f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                      } catch (t) {
                        xc(e, e.return, t);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    p === f && (p = null), (f = f.return);
                  }
                  p === f && (p = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              hl(t, e), bl(e), 4 & r && ml(e);
            case 21:
          }
        }
        function bl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (al(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ''), (r.flags &= -33)),
                    cl(e, sl(e), o);
                  break;
                case 3:
                case 4:
                  var a = r.stateNode.containerInfo;
                  ll(e, sl(e), a);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (t) {
              xc(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gl(e, t, n) {
          (Ks = e), vl(e, t, n);
        }
        function vl(e, t, n) {
          for (var r = 0 != (1 & e.mode); null !== Ks; ) {
            var o = Ks,
              i = o.child;
            if (22 === o.tag && r) {
              var a = null !== o.memoizedState || $s;
              if (!a) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Xs;
                s = $s;
                var c = Xs;
                if ((($s = a), (Xs = l) && !c))
                  for (Ks = o; null !== Ks; )
                    (l = (a = Ks).child),
                      22 === a.tag && null !== a.memoizedState
                        ? wl(o)
                        : null !== l
                        ? ((l.return = a), (Ks = l))
                        : wl(o);
                for (; null !== i; ) (Ks = i), vl(i, t, n), (i = i.sibling);
                (Ks = o), ($s = s), (Xs = c);
              }
              Al(e);
            } else
              0 != (8772 & o.subtreeFlags) && null !== i
                ? ((i.return = o), (Ks = i))
                : Al(e);
          }
        }
        function Al(e) {
          for (; null !== Ks; ) {
            var t = Ks;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xs || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xs)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : bi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && zi(t, a, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        zi(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            c.autoFocus && n.focus();
                            break;
                          case 'img':
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var p = u.memoizedState;
                          if (null !== p) {
                            var f = p.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Xs || (512 & t.flags && ol(t));
              } catch (e) {
                xc(t, t.return, e);
              }
            }
            if (t === e) {
              Ks = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ks = n);
              break;
            }
            Ks = t.return;
          }
        }
        function Cl(e) {
          for (; null !== Ks; ) {
            var t = Ks;
            if (t === e) {
              Ks = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ks = n);
              break;
            }
            Ks = t.return;
          }
        }
        function wl(e) {
          for (; null !== Ks; ) {
            var t = Ks;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (e) {
                    xc(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' == typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      xc(t, o, e);
                    }
                  }
                  var i = t.return;
                  try {
                    ol(t);
                  } catch (e) {
                    xc(t, i, e);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    ol(t);
                  } catch (e) {
                    xc(t, a, e);
                  }
              }
            } catch (e) {
              xc(t, t.return, e);
            }
            if (t === e) {
              Ks = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Ks = s);
              break;
            }
            Ks = t.return;
          }
        }
        var El,
          xl = Math.ceil,
          Sl = A.ReactCurrentDispatcher,
          Ol = A.ReactCurrentOwner,
          kl = A.ReactCurrentBatchConfig,
          jl = 0,
          Tl = null,
          Ml = null,
          Il = 0,
          Rl = 0,
          Pl = So(0),
          Nl = 0,
          Ll = null,
          _l = 0,
          Dl = 0,
          Bl = 0,
          zl = null,
          Fl = null,
          Hl = 0,
          Ul = 1 / 0,
          Vl = null,
          Yl = !1,
          Wl = null,
          Zl = null,
          Ql = !1,
          Gl = null,
          $l = 0,
          Xl = 0,
          ql = null,
          Kl = -1,
          Jl = 0;
        function ec() {
          return 0 != (6 & jl) ? qe() : -1 !== Kl ? Kl : (Kl = qe());
        }
        function tc(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & jl) && 0 !== Il
            ? Il & -Il
            : null !== yi.transition
            ? (0 === Jl && (Jl = ht()), Jl)
            : 0 !== (e = vt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Xl) throw ((Xl = 0), (ql = null), Error(i(185)));
          bt(e, n, r),
            (0 != (2 & jl) && e === Tl) ||
              (e === Tl && (0 == (2 & jl) && (Dl |= n), 4 === Nl && sc(e, Il)),
              rc(e, r),
              1 === n &&
                0 === jl &&
                0 == (1 & t.mode) &&
                ((Ul = qe() + 500), Fo && Vo()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var a = 31 - at(i),
                s = 1 << a,
                l = o[a];
              -1 === l
                ? (0 != (s & n) && 0 == (s & r)) || (o[a] = dt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Tl ? Il : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fo = !0), Uo(e);
                  })(lc.bind(null, e))
                : Uo(lc.bind(null, e)),
                ao(function () {
                  0 == (6 & jl) && Vo();
                }),
                (n = null);
            else {
              switch (At(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tc(n, oc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function oc(e, t) {
          if (((Kl = -1), (Jl = 0), 0 != (6 & jl))) throw Error(i(327));
          var n = e.callbackNode;
          if (wc() && e.callbackNode !== n) return null;
          var r = ft(e, e === Tl ? Il : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = yc(e, r);
          else {
            t = r;
            var o = jl;
            jl |= 2;
            var a = mc();
            for (
              (Tl === e && Il === t) ||
              ((Vl = null), (Ul = qe() + 500), fc(e, t));
              ;

            )
              try {
                gc();
                break;
              } catch (t) {
                dc(e, t);
              }
            wi(),
              (Sl.current = a),
              (jl = o),
              null !== Ml ? (t = 0) : ((Tl = null), (Il = 0), (t = Nl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = mt(e)) && ((r = o), (t = ic(e, o))),
              1 === t)
            )
              throw ((n = Ll), fc(e, 0), sc(e, r), rc(e, qe()), n);
            if (6 === t) sc(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              i = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(i(), o)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = yc(e, r)) &&
                    0 !== (a = mt(e)) &&
                    ((r = a), (t = ic(e, a))),
                  1 === t))
              )
                throw ((n = Ll), fc(e, 0), sc(e, r), rc(e, qe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  Cc(e, Fl, Vl);
                  break;
                case 3:
                  if (
                    (sc(e, r),
                    (130023424 & r) === r && 10 < (t = Hl + 500 - qe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(Cc.bind(null, e, Fl, Vl), t);
                    break;
                  }
                  Cc(e, Fl, Vl);
                  break;
                case 4:
                  if ((sc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var s = 31 - at(r);
                    (a = 1 << s), (s = t[s]) > o && (o = s), (r &= ~a);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = qe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(Cc.bind(null, e, Fl, Vl), r);
                    break;
                  }
                  Cc(e, Fl, Vl);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return rc(e, qe()), e.callbackNode === n ? oc.bind(null, e) : null;
        }
        function ic(e, t) {
          var n = zl;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = yc(e, t)) && ((t = Fl), (Fl = n), null !== t && ac(t)),
            e
          );
        }
        function ac(e) {
          null === Fl ? (Fl = e) : Fl.push.apply(Fl, e);
        }
        function sc(e, t) {
          for (
            t &= ~Bl,
              t &= ~Dl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - at(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lc(e) {
          if (0 != (6 & jl)) throw Error(i(327));
          wc();
          var t = ft(e, 0);
          if (0 == (1 & t)) return rc(e, qe()), null;
          var n = yc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = ic(e, r)));
          }
          if (1 === n) throw ((n = Ll), fc(e, 0), sc(e, t), rc(e, qe()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Cc(e, Fl, Vl),
            rc(e, qe()),
            null
          );
        }
        function cc(e, t) {
          var n = jl;
          jl |= 1;
          try {
            return e(t);
          } finally {
            0 === (jl = n) && ((Ul = qe() + 500), Fo && Vo());
          }
        }
        function uc(e) {
          null !== Gl && 0 === Gl.tag && 0 == (6 & jl) && wc();
          var t = jl;
          jl |= 1;
          var n = kl.transition,
            r = vt;
          try {
            if (((kl.transition = null), (vt = 1), e)) return e();
          } finally {
            (vt = r), (kl.transition = n), 0 == (6 & (jl = t)) && Vo();
          }
        }
        function pc() {
          (Rl = Pl.current), Oo(Pl);
        }
        function fc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Ml))
            for (n = Ml.return; null !== n; ) {
              var r = n;
              switch ((ni(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && No();
                  break;
                case 3:
                  ia(), Oo(Mo), Oo(To), pa();
                  break;
                case 5:
                  sa(r);
                  break;
                case 4:
                  ia();
                  break;
                case 13:
                case 19:
                  Oo(la);
                  break;
                case 10:
                  Ei(r.type._context);
                  break;
                case 22:
                case 23:
                  pc();
              }
              n = n.return;
            }
          if (
            ((Tl = e),
            (Ml = e = Pc(e.current, null)),
            (Il = Rl = t),
            (Nl = 0),
            (Ll = null),
            (Bl = Dl = _l = 0),
            (Fl = zl = null),
            null !== ki)
          ) {
            for (t = 0; t < ki.length; t++)
              if (null !== (r = (n = ki[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  i = n.pending;
                if (null !== i) {
                  var a = i.next;
                  (i.next = o), (r.next = a);
                }
                n.pending = r;
              }
            ki = null;
          }
          return e;
        }
        function dc(e, t) {
          for (;;) {
            var n = Ml;
            try {
              if ((wi(), (fa.current = as), ga)) {
                for (var r = ha.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ga = !1;
              }
              if (
                ((ma = 0),
                (ba = ya = ha = null),
                (va = !1),
                (Aa = 0),
                (Ol.current = null),
                null === n || null === n.return)
              ) {
                (Nl = 1), (Ll = t), (Ml = null);
                break;
              }
              e: {
                var a = e,
                  s = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Il),
                  (l.flags |= 32768),
                  null !== c &&
                    'object' == typeof c &&
                    'function' == typeof c.then)
                ) {
                  var u = c,
                    p = l,
                    f = p.tag;
                  if (0 == (1 & p.mode) && (0 === f || 11 === f || 15 === f)) {
                    var d = p.alternate;
                    d
                      ? ((p.updateQueue = d.updateQueue),
                        (p.memoizedState = d.memoizedState),
                        (p.lanes = d.lanes))
                      : ((p.updateQueue = null), (p.memoizedState = null));
                  }
                  var m = bs(s);
                  if (null !== m) {
                    (m.flags &= -257),
                      gs(m, s, l, 0, t),
                      1 & m.mode && ys(a, u, t),
                      (c = u);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var y = new Set();
                      y.add(c), (t.updateQueue = y);
                    } else h.add(c);
                    break e;
                  }
                  if (0 == (1 & t)) {
                    ys(a, u, t), hc();
                    break e;
                  }
                  c = Error(i(426));
                } else if (ii && 1 & l.mode) {
                  var b = bs(s);
                  if (null !== b) {
                    0 == (65536 & b.flags) && (b.flags |= 256),
                      gs(b, s, l, 0, t),
                      hi(us(c, l));
                    break e;
                  }
                }
                (a = c = us(c, l)),
                  4 !== Nl && (Nl = 2),
                  null === zl ? (zl = [a]) : zl.push(a),
                  (a = s);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Di(a, ms(0, c, t));
                      break e;
                    case 1:
                      l = c;
                      var g = a.type,
                        v = a.stateNode;
                      if (
                        0 == (128 & a.flags) &&
                        ('function' == typeof g.getDerivedStateFromError ||
                          (null !== v &&
                            'function' == typeof v.componentDidCatch &&
                            (null === Zl || !Zl.has(v))))
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          Di(a, hs(a, l, t));
                        break e;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              Ac(n);
            } catch (e) {
              (t = e), Ml === n && null !== n && (Ml = n = n.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = Sl.current;
          return (Sl.current = as), null === e ? as : e;
        }
        function hc() {
          (0 !== Nl && 3 !== Nl && 2 !== Nl) || (Nl = 4),
            null === Tl ||
              (0 == (268435455 & _l) && 0 == (268435455 & Dl)) ||
              sc(Tl, Il);
        }
        function yc(e, t) {
          var n = jl;
          jl |= 2;
          var r = mc();
          for ((Tl === e && Il === t) || ((Vl = null), fc(e, t)); ; )
            try {
              bc();
              break;
            } catch (t) {
              dc(e, t);
            }
          if ((wi(), (jl = n), (Sl.current = r), null !== Ml))
            throw Error(i(261));
          return (Tl = null), (Il = 0), Nl;
        }
        function bc() {
          for (; null !== Ml; ) vc(Ml);
        }
        function gc() {
          for (; null !== Ml && !$e(); ) vc(Ml);
        }
        function vc(e) {
          var t = El(e.alternate, e, Rl);
          (e.memoizedProps = e.pendingProps),
            null === t ? Ac(e) : (Ml = t),
            (Ol.current = null);
        }
        function Ac(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (32768 & t.flags))) {
              if (null !== (n = Qs(n, t, Rl))) return void (Ml = n);
            } else {
              if (null !== (n = Gs(n, t)))
                return (n.flags &= 32767), void (Ml = n);
              if (null === e) return (Nl = 6), void (Ml = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ml = t);
            Ml = t = e;
          } while (null !== t);
          0 === Nl && (Nl = 5);
        }
        function Cc(e, t, n) {
          var r = vt,
            o = kl.transition;
          try {
            (kl.transition = null),
              (vt = 1),
              (function (e, t, n, r) {
                do {
                  wc();
                } while (null !== Gl);
                if (0 != (6 & jl)) throw Error(i(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var a = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - at(n),
                        i = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
                    }
                  })(e, a),
                  e === Tl && ((Ml = Tl = null), (Il = 0)),
                  (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    Tc(tt, function () {
                      return wc(), null;
                    })),
                  (a = 0 != (15990 & n.flags)),
                  0 != (15990 & n.subtreeFlags) || a)
                ) {
                  (a = kl.transition), (kl.transition = null);
                  var s = vt;
                  vt = 1;
                  var l = jl;
                  (jl |= 4),
                    (Ol.current = null),
                    (function (e, t) {
                      if (((eo = Yt), dr((e = fr())))) {
                        if ('selectionStart' in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                p = 0,
                                f = e,
                                d = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (l = s + o),
                                    f !== a ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (d = f), (f = m);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (d === n && ++u === o && (l = s),
                                    d === a && ++p === r && (c = s),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  d = (f = d).parentNode;
                                }
                                f = m;
                              }
                              n =
                                -1 === l || -1 === c
                                  ? null
                                  : { start: l, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Yt = !1,
                          Ks = t;
                        null !== Ks;

                      )
                        if (
                          ((e = (t = Ks).child),
                          0 != (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ks = e);
                        else
                          for (; null !== Ks; ) {
                            t = Ks;
                            try {
                              var h = t.alternate;
                              if (0 != (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var y = h.memoizedProps,
                                        b = h.memoizedState,
                                        g = t.stateNode,
                                        v = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? y
                                            : bi(t.type, y),
                                          b
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = v;
                                    }
                                    break;
                                  case 3:
                                    var A = t.stateNode.containerInfo;
                                    1 === A.nodeType
                                      ? (A.textContent = '')
                                      : 9 === A.nodeType &&
                                        A.documentElement &&
                                        A.removeChild(A.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (e) {
                              xc(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ks = e);
                              break;
                            }
                            Ks = t.return;
                          }
                      (h = tl), (tl = !1);
                    })(e, n),
                    yl(n, e),
                    mr(to),
                    (Yt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    gl(n, e, o),
                    Xe(),
                    (jl = l),
                    (vt = s),
                    (kl.transition = a);
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (Gl = e), ($l = o)),
                  0 === (a = e.pendingLanes) && (Zl = null),
                  (function (e) {
                    if (it && 'function' == typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 == (128 & e.current.flags)
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  rc(e, qe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((o = t[n]).value, {
                      componentStack: o.stack,
                      digest: o.digest
                    });
                if (Yl) throw ((Yl = !1), (e = Wl), (Wl = null), e);
                0 != (1 & $l) && 0 !== e.tag && wc(),
                  0 != (1 & (a = e.pendingLanes))
                    ? e === ql
                      ? Xl++
                      : ((Xl = 0), (ql = e))
                    : (Xl = 0),
                  Vo();
              })(e, t, n, r);
          } finally {
            (kl.transition = o), (vt = r);
          }
          return null;
        }
        function wc() {
          if (null !== Gl) {
            var e = At($l),
              t = kl.transition,
              n = vt;
            try {
              if (((kl.transition = null), (vt = 16 > e ? 16 : e), null === Gl))
                var r = !1;
              else {
                if (((e = Gl), (Gl = null), ($l = 0), 0 != (6 & jl)))
                  throw Error(i(331));
                var o = jl;
                for (jl |= 4, Ks = e.current; null !== Ks; ) {
                  var a = Ks,
                    s = a.child;
                  if (0 != (16 & Ks.flags)) {
                    var l = a.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Ks = u; null !== Ks; ) {
                          var p = Ks;
                          switch (p.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, p, a);
                          }
                          var f = p.child;
                          if (null !== f) (f.return = p), (Ks = f);
                          else
                            for (; null !== Ks; ) {
                              var d = (p = Ks).sibling,
                                m = p.return;
                              if ((il(p), p === u)) {
                                Ks = null;
                                break;
                              }
                              if (null !== d) {
                                (d.return = m), (Ks = d);
                                break;
                              }
                              Ks = m;
                            }
                        }
                      }
                      var h = a.alternate;
                      if (null !== h) {
                        var y = h.child;
                        if (null !== y) {
                          h.child = null;
                          do {
                            var b = y.sibling;
                            (y.sibling = null), (y = b);
                          } while (null !== y);
                        }
                      }
                      Ks = a;
                    }
                  }
                  if (0 != (2064 & a.subtreeFlags) && null !== s)
                    (s.return = a), (Ks = s);
                  else
                    e: for (; null !== Ks; ) {
                      if (0 != (2048 & (a = Ks).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, a, a.return);
                        }
                      var g = a.sibling;
                      if (null !== g) {
                        (g.return = a.return), (Ks = g);
                        break e;
                      }
                      Ks = a.return;
                    }
                }
                var v = e.current;
                for (Ks = v; null !== Ks; ) {
                  var A = (s = Ks).child;
                  if (0 != (2064 & s.subtreeFlags) && null !== A)
                    (A.return = s), (Ks = A);
                  else
                    e: for (s = v; null !== Ks; ) {
                      if (0 != (2048 & (l = Ks).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (e) {
                          xc(l, l.return, e);
                        }
                      if (l === s) {
                        Ks = null;
                        break e;
                      }
                      var C = l.sibling;
                      if (null !== C) {
                        (C.return = l.return), (Ks = C);
                        break e;
                      }
                      Ks = l.return;
                    }
                }
                if (
                  ((jl = o),
                  Vo(),
                  it && 'function' == typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(ot, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (vt = n), (kl.transition = t);
            }
          }
          return !1;
        }
        function Ec(e, t, n) {
          (e = Li(e, (t = ms(0, (t = us(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (bt(e, 1, t), rc(e, t));
        }
        function xc(e, t, n) {
          if (3 === e.tag) Ec(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ec(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' == typeof t.type.getDerivedStateFromError ||
                  ('function' == typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r)))
                ) {
                  (t = Li(t, (e = hs(t, (e = us(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (bt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Sc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tl === e &&
              (Il & n) === n &&
              (4 === Nl ||
              (3 === Nl && (130023424 & Il) === Il && 500 > qe() - Hl)
                ? fc(e, 0)
                : (Bl |= n)),
            rc(e, t);
        }
        function Oc(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 == (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = Mi(e, t)) && (bt(e, t, n), rc(e, n));
        }
        function kc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Oc(e, n);
        }
        function jc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Oc(e, n);
        }
        function Tc(e, t) {
          return Qe(e, t);
        }
        function Mc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ic(e, t, n, r) {
          return new Mc(e, t, n, r);
        }
        function Rc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Pc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ic(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Nc(e, t, n, r, o, a) {
          var s = 2;
          if (((r = e), 'function' == typeof e)) Rc(e) && (s = 1);
          else if ('string' == typeof e) s = 5;
          else
            e: switch (e) {
              case E:
                return Lc(n.children, o, a, t);
              case x:
                (s = 8), (o |= 8);
                break;
              case S:
                return (
                  ((e = Ic(12, n, t, 2 | o)).elementType = S), (e.lanes = a), e
                );
              case T:
                return (
                  ((e = Ic(13, n, t, o)).elementType = T), (e.lanes = a), e
                );
              case M:
                return (
                  ((e = Ic(19, n, t, o)).elementType = M), (e.lanes = a), e
                );
              case P:
                return _c(n, o, a, t);
              default:
                if ('object' == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case O:
                      s = 10;
                      break e;
                    case k:
                      s = 9;
                      break e;
                    case j:
                      s = 11;
                      break e;
                    case I:
                      s = 14;
                      break e;
                    case R:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ''));
            }
          return (
            ((t = Ic(s, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Lc(e, t, n, r) {
          return ((e = Ic(7, e, r, t)).lanes = n), e;
        }
        function _c(e, t, n, r) {
          return (
            ((e = Ic(22, e, r, t)).elementType = P),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Dc(e, t, n) {
          return ((e = Ic(6, e, null, t)).lanes = n), e;
        }
        function Bc(e, t, n) {
          return (
            ((t = Ic(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation
            }),
            t
          );
        }
        function zc(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Fc(e, t, n, r, o, i, a, s, l) {
          return (
            (e = new zc(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Ic(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null
            }),
            Ri(i),
            e
          );
        }
        function Hc(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: w,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: n
          };
        }
        function Uc(e) {
          if (!e) return jo;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Po(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Po(n)) return _o(e, n, t);
          }
          return t;
        }
        function Vc(e, t, n, r, o, i, a, s, l) {
          return (
            ((e = Fc(n, r, !0, e, 0, i, 0, s, l)).context = Uc(null)),
            (n = e.current),
            ((i = Ni((r = ec()), (o = tc(n)))).callback = null != t ? t : null),
            Li(n, i, o),
            (e.current.lanes = o),
            bt(e, o, r),
            rc(e, r),
            e
          );
        }
        function Yc(e, t, n, r) {
          var o = t.current,
            i = ec(),
            a = tc(o);
          return (
            (n = Uc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ni(i, a)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Li(o, t, a)) && (nc(e, o, a, i), _i(e, o, a)),
            a
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Zc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qc(e, t) {
          Zc(e, t), (e = e.alternate) && Zc(e, t);
        }
        El = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Mo.current) As = !0;
            else {
              if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                  (As = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ms(t), mi();
                        break;
                      case 5:
                        aa(t);
                        break;
                      case 1:
                        Po(t.type) && Do(t);
                        break;
                      case 4:
                        oa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        ko(gi, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (ko(la, 1 & la.current), (t.flags |= 128), null)
                            : 0 != (n & t.child.childLanes)
                            ? Ds(e, t, n)
                            : (ko(la, 1 & la.current),
                              null !== (e = Ys(e, t, n)) ? e.sibling : null);
                        ko(la, 1 & la.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
                        ) {
                          if (r) return Us(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          ko(la, la.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ss(e, t, n);
                    }
                    return Ys(e, t, n);
                  })(e, t, n)
                );
              As = 0 != (131072 & e.flags);
            }
          else (As = !1), ii && 0 != (1048576 & t.flags) && ei(t, Qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vs(e, t), (e = t.pendingProps);
              var o = Ro(t, To.current);
              Si(t, n), (o = xa(null, t, r, e, o, n));
              var a = Sa();
              return (
                (t.flags |= 1),
                'object' == typeof o &&
                null !== o &&
                'function' == typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Po(r) ? ((a = !0), Do(t)) : (a = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Ri(t),
                    (o.updater = Ui),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Zi(t, r, e, n),
                    (t = Ts(null, t, r, !0, a, n)))
                  : ((t.tag = 0),
                    ii && a && ti(t),
                    Cs(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vs(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ('function' == typeof e) return Rc(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === I) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = bi(r, e)),
                  o)
                ) {
                  case 0:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 1:
                    t = js(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ws(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Es(null, t, r, bi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                ks(e, t, r, (o = t.elementType === r ? o : bi(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                js(e, t, r, (o = t.elementType === r ? o : bi(r, o)), n)
              );
            case 3:
              e: {
                if ((Ms(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (o = (a = t.memoizedState).element),
                  Pi(e, t),
                  Bi(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Is(e, t, r, n, (o = us(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Is(e, t, r, n, (o = us(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    oi = co(t.stateNode.containerInfo.firstChild),
                      ri = t,
                      ii = !0,
                      ai = null,
                      n = Ki(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((mi(), r === o)) {
                    t = Ys(e, t, n);
                    break e;
                  }
                  Cs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                aa(t),
                null === e && ui(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (s = o.children),
                no(r, o)
                  ? (s = null)
                  : null !== a && no(r, a) && (t.flags |= 32),
                Os(e, t),
                Cs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return Ds(e, t, n);
            case 4:
              return (
                oa(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = qi(t, null, r, n)) : Cs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                ws(e, t, r, (o = t.elementType === r ? o : bi(r, o)), n)
              );
            case 7:
              return Cs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Cs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (a = t.memoizedProps),
                  (s = o.value),
                  ko(gi, r._currentValue),
                  (r._currentValue = s),
                  null !== a)
                )
                  if (sr(a.value, s)) {
                    if (a.children === o.children && !Mo.current) {
                      t = Ys(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var l = a.dependencies;
                      if (null !== l) {
                        s = a.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === a.tag) {
                              (c = Ni(-1, n & -n)).tag = 2;
                              var u = a.updateQueue;
                              if (null !== u) {
                                var p = (u = u.shared).pending;
                                null === p
                                  ? (c.next = c)
                                  : ((c.next = p.next), (p.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (a.lanes |= n),
                              null !== (c = a.alternate) && (c.lanes |= n),
                              xi(a.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === a.tag)
                        s = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (s = a.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          xi(s, n, t),
                          (s = a.sibling);
                      } else s = a.child;
                      if (null !== s) s.return = a;
                      else
                        for (s = a; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (a = s.sibling)) {
                            (a.return = s.return), (s = a);
                            break;
                          }
                          s = s.return;
                        }
                      a = s;
                    }
                Cs(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Si(t, n),
                (r = r((o = Oi(o)))),
                (t.flags |= 1),
                Cs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = bi((r = t.type), t.pendingProps)),
                Es(e, t, r, (o = bi(r.type, o)), n)
              );
            case 15:
              return xs(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : bi(r, o)),
                Vs(e, t),
                (t.tag = 1),
                Po(r) ? ((e = !0), Do(t)) : (e = !1),
                Si(t, n),
                Yi(t, r, o),
                Zi(t, r, o, n),
                Ts(null, t, r, !0, e, n)
              );
            case 19:
              return Us(e, t, n);
            case 22:
              return Ss(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Gc =
          'function' == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function $c(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          this._internalRoot = e;
        }
        function qc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Kc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Jc() {}
        function eu(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var a = i;
            if ('function' == typeof o) {
              var s = o;
              o = function () {
                var e = Wc(a);
                s.call(e);
              };
            }
            Yc(t, a, e, o);
          } else
            a = (function (e, t, n, r, o) {
              if (o) {
                if ('function' == typeof r) {
                  var i = r;
                  r = function () {
                    var e = Wc(a);
                    i.call(e);
                  };
                }
                var a = Vc(t, r, e, 0, null, !1, 0, '', Jc);
                return (
                  (e._reactRootContainer = a),
                  (e[ho] = a.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  a
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ('function' == typeof r) {
                var s = r;
                r = function () {
                  var e = Wc(l);
                  s.call(e);
                };
              }
              var l = Fc(e, 0, !1, null, 0, !1, 0, '', Jc);
              return (
                (e._reactRootContainer = l),
                (e[ho] = l.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Yc(t, l, n, r);
                }),
                l
              );
            })(n, t, e, o, r);
          return Wc(a);
        }
        (Xc.prototype.render = $c.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Yc(e, t, null, null);
          }),
          (Xc.prototype.unmount = $c.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  Yc(null, e, null, null);
                }),
                  (t[ho] = null);
              }
            }),
          (Xc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Pt.length && 0 !== t && t < Pt[n].priority;
                n++
              );
              Pt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (Ct = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = pt(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    rc(t, qe()),
                    0 == (6 & jl) && ((Ul = qe() + 500), Vo()));
                }
                break;
              case 13:
                uc(function () {
                  var t = Mi(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  Qc(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Mi(e, 134217728);
              null !== t && nc(t, e, 134217728, ec()), Qc(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Mi(e, t);
              null !== n && nc(n, e, t, ec()), Qc(e, t);
            }
          }),
          (xt = function () {
            return vt;
          }),
          (St = function (e, t) {
            var n = vt;
            try {
              return (vt = e), t();
            } finally {
              vt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((K(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = wo(r);
                      if (!o) throw Error(i(90));
                      Q(r), K(r, o);
                    }
                  }
                }
                break;
              case 'textarea':
                ie(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = cc),
          (Te = uc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [Ao, Co, wo, Oe, ke, cc]
          },
          nu = {
            findFiberByHostInstance: vo,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom'
          },
          ru = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: A.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
          };
        if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ou.isDisabled && ou.supportsFiber)
            try {
              (ot = ou.inject(ru)), (it = ou);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!qc(t)) throw Error(i(200));
            return Hc(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!qc(e)) throw Error(i(299));
            var n = !1,
              r = '',
              o = Gc;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Fc(e, 1, !1, null, 0, n, 0, r, o)),
              (e[ho] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new $c(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' == typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(',')), Error(i(268, e)));
            }
            return null === (e = We(t)) ? null : e.stateNode;
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Kc(t)) throw Error(i(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!qc(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              a = '',
              s = Gc;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Vc(t, null, e, 1, null != n ? n : null, o, 0, a, s)),
              (e[ho] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Xc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Kc(t)) throw Error(i(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Kc(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ho] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Kc(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return eu(e, t, n, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      745: (e, t, n) => {
        'use strict';
        var r = n(935);
        (t.s = r.createRoot), r.hydrateRoot;
      },
      935: (e, t, n) => {
        'use strict';
        !(function e() {
          if (
            'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      251: (e, t, n) => {
        'use strict';
        var r = n(294),
          o = Symbol.for('react.element'),
          i = (Symbol.for('react.fragment'), Object.prototype.hasOwnProperty),
          a =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) {
          var r,
            l = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = '' + n),
          void 0 !== t.key && (c = '' + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: c,
            ref: u,
            props: l,
            _owner: a.current
          };
        }
        (t.jsx = l), (t.jsxs = l);
      },
      408: (e, t) => {
        'use strict';
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          i = Symbol.for('react.strict_mode'),
          a = Symbol.for('react.profiler'),
          s = Symbol.for('react.provider'),
          l = Symbol.for('react.context'),
          c = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          p = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          d = Symbol.iterator,
          m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
          },
          h = Object.assign,
          y = {};
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || m);
        }
        function g() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || m);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ('object' != typeof e && 'function' != typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (g.prototype = b.prototype);
        var A = (v.prototype = new g());
        (A.constructor = v), h(A, b.prototype), (A.isPureReactComponent = !0);
        var C = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          E = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var o,
            i = {},
            a = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (a = '' + t.key),
            t))
              w.call(t, o) && !x.hasOwnProperty(o) && (i[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            i.children = c;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: s,
            props: i,
            _owner: E.current
          };
        }
        function O(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n;
        }
        var k = /\/+/g;
        function j(e, t) {
          return 'object' == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function T(e, t, o, i, a) {
          var s = typeof e;
          ('undefined' !== s && 'boolean' !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case 'string':
              case 'number':
                l = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = e))),
              (e = '' === i ? '.' + j(l, 0) : i),
              C(a)
                ? ((o = ''),
                  null != e && (o = e.replace(k, '$&/') + '/'),
                  T(a, t, o, '', function (e) {
                    return e;
                  }))
                : null != a &&
                  (O(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                      };
                    })(
                      a,
                      o +
                        (!a.key || (l && l.key === a.key)
                          ? ''
                          : ('' + a.key).replace(k, '$&/') + '/') +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((l = 0), (i = '' === i ? '.' : i + ':'), C(e)))
            for (var c = 0; c < e.length; c++) {
              var u = i + j((s = e[c]), c);
              l += T(s, t, o, u, a);
            }
          else if (
            ((u = (function (e) {
              return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = (d && e[d]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' == typeof u)
          )
            for (e = u.call(e), c = 0; !(s = e.next()).done; )
              l += T((s = s.value), t, o, (u = i + j(s, c++)), a);
          else if ('object' === s)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return l;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, '', '', function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          P = { transition: null },
          N = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: P,
            ReactCurrentOwner: E
          };
        (t.Children = {
          map: M,
          forEach: function (e, t, n) {
            M(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              M(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              M(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!O(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return e;
          }
        }),
          (t.Component = b),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = v),
          (t.StrictMode = i),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var o = h({}, e.props),
              i = e.key,
              a = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (s = E.current)),
                void 0 !== t.key && (i = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in t)
                w.call(t, c) &&
                  !x.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = r;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: a,
              props: o,
              _owner: s
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: I
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = P.transition;
            P.transition = {};
            try {
              e();
            } finally {
              P.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      294: (e, t, n) => {
        'use strict';
        e.exports = n(408);
      },
      893: (e, t, n) => {
        'use strict';
        e.exports = n(251);
      },
      53: (e, t) => {
        'use strict';
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < i(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                c = s + 1,
                u = e[c];
              if (0 > i(l, n))
                c < o && 0 > i(u, l)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(c < o && 0 > i(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          'object' == typeof performance &&
          'function' == typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var c = [],
          u = [],
          p = 1,
          f = null,
          d = 3,
          m = !1,
          h = !1,
          y = !1,
          b = 'function' == typeof setTimeout ? setTimeout : null,
          g = 'function' == typeof clearTimeout ? clearTimeout : null,
          v = 'undefined' != typeof setImmediate ? setImmediate : null;
        function A(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) o(u);
            else {
              if (!(t.startTime <= e)) break;
              o(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function C(e) {
          if (((y = !1), A(e), !h))
            if (null !== r(c)) (h = !0), P(w);
            else {
              var t = r(u);
              null !== t && N(C, t.startTime - e);
            }
        }
        function w(e, n) {
          (h = !1), y && ((y = !1), g(O), (O = -1)), (m = !0);
          var i = d;
          try {
            for (
              A(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !T()));

            ) {
              var a = f.callback;
              if ('function' == typeof a) {
                (f.callback = null), (d = f.priorityLevel);
                var s = a(f.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' == typeof s
                    ? (f.callback = s)
                    : f === r(c) && o(c),
                  A(n);
              } else o(c);
              f = r(c);
            }
            if (null !== f) var l = !0;
            else {
              var p = r(u);
              null !== p && N(C, p.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (d = i), (m = !1);
          }
        }
        'undefined' != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          x = !1,
          S = null,
          O = -1,
          k = 5,
          j = -1;
        function T() {
          return !(t.unstable_now() - j < k);
        }
        function M() {
          if (null !== S) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? E() : ((x = !1), (S = null));
            }
          } else x = !1;
        }
        if ('function' == typeof v)
          E = function () {
            v(M);
          };
        else if ('undefined' != typeof MessageChannel) {
          var I = new MessageChannel(),
            R = I.port2;
          (I.port1.onmessage = M),
            (E = function () {
              R.postMessage(null);
            });
        } else
          E = function () {
            b(M, 0);
          };
        function P(e) {
          (S = e), x || ((x = !0), E());
        }
        function N(e, n) {
          O = b(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), P(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (k = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return d;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (d) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = d;
            }
            var n = d;
            d = t;
            try {
              return e();
            } finally {
              d = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = d;
            d = e;
            try {
              return t();
            } finally {
              d = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var a = t.unstable_now();
            switch (
              ((i =
                'object' == typeof i &&
                null !== i &&
                'number' == typeof (i = i.delay) &&
                0 < i
                  ? a + i
                  : a),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: p++,
                callback: o,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1
              }),
              i > a
                ? ((e.sortIndex = i),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (y ? (g(O), (O = -1)) : (y = !0), N(C, i - a)))
                : ((e.sortIndex = s), n(c, e), h || m || ((h = !0), P(w))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = d;
            return function () {
              var n = d;
              d = t;
              try {
                return e.apply(this, arguments);
              } finally {
                d = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        'use strict';
        e.exports = n(53);
      },
      379: (e) => {
        'use strict';
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var l = e[s],
              c = r.base ? l[0] + r.base : l[0],
              u = i[c] || 0,
              p = ''.concat(c, ' ').concat(u);
            i[c] = u + 1;
            var f = n(p),
              d = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5]
              };
            if (-1 !== f) t[f].references++, t[f].updater(d);
            else {
              var m = o(d, r);
              (r.byIndex = s),
                t.splice(s, 0, { identifier: p, updater: m, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              t[s].references--;
            }
            for (var l = r(e, o), c = 0; c < i.length; c++) {
              var u = n(i[c]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            i = l;
          };
        };
      },
      569: (e) => {
        'use strict';
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        'use strict';
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var i = n.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */'
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            }
          };
        };
      },
      589: (e) => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      }
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = (r[e] = { id: e, exports: {} });
    return n[e].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ('object' == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && 'function' == typeof n.then) return n;
      }
      var i = Object.create(null);
      o.r(i);
      var a = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & r && n; 'object' == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => (a[e] = () => n[e]));
      return (a.default = () => n), o.d(i, a), i;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.nc = void 0),
    (() => {
      'use strict';
      o(826);
      var e = o(745),
        t = o(759),
        n = (o(719), o(296)),
        r = o.n(n);
      function i(e, t, n) {
        var r = e.getBoundingClientRect();
        return [(t - r.left) / r.width, (n - r.top) / r.height];
      }
      function a(e) {
        var n = (function (e) {
            var n = document.createElement('a-entity');
            n.setAttribute('id', 'aframeInspectorMouseCursor'),
              n.setAttribute('cursor', 'rayOrigin', 'mouse'),
              n.setAttribute('data-aframe-inspector', 'true'),
              n.setAttribute('raycaster', {
                interval: 100,
                objects: 'a-scene :not([data-aframe-inspector])'
              });
            var o = n.components.raycaster,
              a = o.refreshObjects;
            (o.refreshObjects = function () {
              a.call(o);
              var e = o.objects;
              o.objects = e.filter(function (e) {
                for (; e; ) {
                  if (!e.visible) return !1;
                  e = e.parent;
                }
                return !0;
              });
            }),
              e.sceneEl.appendChild(n),
              (e.cursor = n),
              e.sceneEl.addEventListener(
                'child-attached',
                r()(function () {
                  n.components.raycaster.refreshObjects();
                }, 250)
              ),
              n.addEventListener('click', function (t) {
                s.distanceTo(l) >= 0.03 ||
                  e.selectEntity(t.detail.intersectedEl);
              }),
              n.addEventListener('mouseenter', function () {
                t.Z.emit(
                  'raycastermouseenter',
                  n.components.cursor.intersectedEl
                );
              }),
              n.addEventListener('mouseleave', function () {
                t.Z.emit(
                  'raycastermouseleave',
                  n.components.cursor.intersectedEl
                );
              }),
              e.container.addEventListener('mousedown', function (t) {
                if (!(t instanceof CustomEvent)) {
                  t.preventDefault();
                  var n = i(e.container, t.clientX, t.clientY);
                  s.fromArray(n);
                }
              }),
              e.container.addEventListener('mouseup', function (t) {
                if (!(t instanceof CustomEvent)) {
                  t.preventDefault();
                  var n = i(e.container, t.clientX, t.clientY);
                  l.fromArray(n);
                }
              }),
              e.container.addEventListener('dblclick', function (r) {
                var o = i(e.container, r.clientX, r.clientY);
                c.fromArray(o);
                var a = n.components.cursor.intersectedEl;
                a && t.Z.emit('objectfocus', a.object3D);
              }),
              e.sceneEl.canvas.addEventListener('mouseleave', function () {
                setTimeout(function () {
                  t.Z.emit('raycastermouseleave', null);
                });
              });
            var s = new THREE.Vector2(),
              l = new THREE.Vector2(),
              c = new THREE.Vector2();
            return {
              el: n,
              enable: function () {
                n.setAttribute('raycaster', 'enabled', !0);
              },
              disable: function () {
                n.setAttribute('raycaster', 'enabled', !1);
              }
            };
          })(e),
          o = e.sceneEl;
        o.addEventListener('camera-set-active', function (t) {
          e.opened && (e.cameras.original = t.detail.cameraEl);
        });
        var a = e.sceneHelpers,
          s = new THREE.GridHelper(30, 60, 11184810, 2500134);
        a.add(s);
        var l = new THREE.BoxHelper();
        function c(t) {
          t.traverse(function (t) {
            e.helpers[t.uuid] &&
              e.helpers[t.uuid].update &&
              e.helpers[t.uuid].update();
          });
        }
        (l.material.depthTest = !1),
          (l.material.transparent = !0),
          l.material.color.set(2075378),
          (l.visible = !1),
          a.add(l);
        var u = e.camera,
          p = new THREE.TransformControls(u, e.container);
        (p.size = 0.75),
          p.addEventListener('objectChange', function (e) {
            var n = p.object;
            if (void 0 !== n) {
              var r, o;
              if (
                (l.setFromObject(n),
                c(n),
                t.Z.emit('refreshsidebarobject3d', n),
                'translate' === e.mode)
              )
                (r = 'position'),
                  (o = ''
                    .concat(n.position.x, ' ')
                    .concat(n.position.y, ' ')
                    .concat(n.position.z));
              else if ('rotate' === e.mode) {
                r = 'rotation';
                var i = THREE.MathUtils.radToDeg;
                o = ''
                  .concat(i(n.rotation.x), ' ')
                  .concat(i(n.rotation.y), ' ')
                  .concat(i(n.rotation.z));
              } else
                'scale' === e.mode &&
                  ((r = 'scale'),
                  (o = ''
                    .concat(n.scale.x, ' ')
                    .concat(n.scale.y, ' ')
                    .concat(n.scale.z)));
              t.Z.emit('entityupdate', {
                component: r,
                entity: p.object.el,
                property: '',
                value: o
              }),
                t.Z.emit('entitytransformed', p.object.el);
            }
          }),
          p.addEventListener('mouseDown', function () {
            f.enabled = !1;
          }),
          p.addEventListener('mouseUp', function () {
            f.enabled = !0;
          }),
          a.add(p),
          t.Z.on('entityupdate', function (t) {
            e.selectedEntity.object3DMap.mesh && l.setFromObject(e.selected);
          });
        var f = new THREE.EditorControls(u, e.container);
        function d() {
          n.enable(), p.activate(), (f.enabled = !0);
        }
        f.center.set(0, 1.6, 0),
          (f.rotationSpeed = 0.0035),
          (f.zoomSpeed = 0.05),
          f.setAspectRatio(o.canvas.width / o.canvas.height),
          t.Z.on('cameratoggle', function (e) {
            f.setCamera(e.camera), p.setCamera(e.camera);
          }),
          d(),
          t.Z.on('inspectorcleared', function () {
            f.center.set(0, 0, 0);
          }),
          t.Z.on('transformmodechange', function (e) {
            p.setMode(e);
          }),
          t.Z.on('snapchanged', function (e) {
            p.setTranslationSnap(e);
          }),
          t.Z.on('transformspacechanged', function (e) {
            p.setSpace(e);
          }),
          t.Z.on('objectselect', function (e) {
            (l.visible = !1),
              p.detach(),
              e &&
                e.el &&
                (e.el.getObject3D('mesh') &&
                  (l.setFromObject(e), (l.visible = !0)),
                p.attach(e));
          }),
          t.Z.on('objectfocus', function (e) {
            f.focus(e), p.update();
          }),
          t.Z.on('geometrychanged', function (e) {
            null !== e && l.setFromObject(e);
          }),
          t.Z.on('entityupdate', function (t) {
            var n = t.entity.object3D;
            e.selected === n &&
              n.geometry &&
              ((n.geometry.vertices && n.geometry.vertices.length > 0) ||
                (n.geometry.attributes &&
                  n.geometry.attributes.position &&
                  n.geometry.attributes.position.array.length)) &&
              l.setFromObject(n),
              p.update(),
              n instanceof THREE.PerspectiveCamera &&
                n.updateProjectionMatrix(),
              c(n);
          }),
          t.Z.on('windowresize', function () {
            (u.aspect = e.container.offsetWidth / e.container.offsetHeight),
              u.updateProjectionMatrix();
          }),
          t.Z.on('gridvisibilitychanged', function (e) {
            s.visible = e;
          }),
          t.Z.on('togglegrid', function () {
            s.visible = !s.visible;
          }),
          t.Z.on('inspectortoggle', function (t) {
            t
              ? (d(),
                (AFRAME.scenes[0].camera = e.camera),
                Array.prototype.slice
                  .call(document.querySelectorAll('.a-enter-vr,.rs-base'))
                  .forEach(function (e) {
                    e.style.display = 'none';
                  }))
              : (n.disable(),
                p.dispose(),
                (f.enabled = !1),
                e.cameras.original.setAttribute('camera', 'active', 'true'),
                (AFRAME.scenes[0].camera =
                  e.cameras.original.getObject3D('camera')),
                Array.prototype.slice
                  .call(document.querySelectorAll('.a-enter-vr,.rs-base'))
                  .forEach(function (e) {
                    e.style.display = 'block';
                  })),
              'undefined' != typeof ga &&
                ga('send', 'event', 'Viewport', 'toggleEditor', t);
          });
      }
      (THREE.Box3.prototype.expandByObject = (function () {
        var e,
          t,
          n,
          r = new THREE.Vector3();
        function o(o) {
          var i = o.geometry;
          if (void 0 !== i)
            if (i.isGeometry) {
              var a = i.vertices;
              for (t = 0, n = a.length; t < n; t++)
                r.copy(a[t]),
                  r.applyMatrix4(o.matrixWorld),
                  isNaN(r.x) || isNaN(r.y) || isNaN(r.z) || e.expandByPoint(r);
            } else if (i.isBufferGeometry) {
              var s = i.attributes.position;
              if (void 0 !== s)
                for (t = 0, n = s.count; t < n; t++)
                  r.fromBufferAttribute(s, t).applyMatrix4(o.matrixWorld),
                    isNaN(r.x) ||
                      isNaN(r.y) ||
                      isNaN(r.z) ||
                      e.expandByPoint(r);
            }
        }
        return function (t) {
          return (e = this), t.updateMatrixWorld(!0), t.traverse(o), this;
        };
      })()),
        (THREE.EditorControls = function (e, t) {
          (t = void 0 !== t ? t : document),
            (this.enabled = !0),
            (this.center = new THREE.Vector3()),
            (this.panSpeed = 0.001),
            (this.zoomSpeed = 0.1),
            (this.rotationSpeed = 0.005);
          var n = e,
            o = this,
            i = new THREE.Vector3(),
            a = new THREE.Vector3(),
            s = new THREE.Box3(),
            l = -1,
            c = this.center,
            u = new THREE.Matrix3(),
            p = new THREE.Vector2(),
            f = new THREE.Vector2(),
            d = new THREE.Spherical(),
            m = new THREE.Sphere();
          (this.isOrthographic = !1),
            (this.rotationEnabled = !0),
            (this.setCamera = function (e) {
              'OrthographicCamera' === (n = e).type
                ? ((this.rotationEnabled = !1), (this.isOrthographic = !0))
                : ((this.rotationEnabled = !0), (this.isOrthographic = !1));
            }),
            this.setCamera(e);
          var h = { type: 'change' };
          (this.dispatchChange = r()(function () {
            o.dispatchEvent(h);
          }, 100)),
            (this.focus = function (e) {
              var t;
              s.setFromObject(e),
                !1 !== s.isEmpty() || isNaN(s.min.x)
                  ? (c.setFromMatrixPosition(e.matrixWorld), (t = 0.1))
                  : (s.getCenter(c), (t = s.getBoundingSphere(m).radius)),
                n.position.copy(e.localToWorld(new THREE.Vector3(0, 0, 2 * t))),
                n.lookAt(e.getWorldPosition(new THREE.Vector3())),
                o.dispatchEvent(h);
            }),
            (this.pan = function (e) {
              var t;
              (t = this.isOrthographic
                ? Math.abs(n.right)
                : n.position.distanceTo(c)),
                e.multiplyScalar(t * o.panSpeed),
                e.applyMatrix3(u.getNormalMatrix(n.matrix)),
                n.position.add(e),
                c.add(e),
                o.dispatchChange();
            });
          var y = 1;
          function b(e) {
            !1 !== o.enabled &&
              (0 === e.button
                ? (l = 0)
                : 1 === e.button
                ? (l = 1)
                : 2 === e.button && (l = 2),
              f.set(e.clientX, e.clientY),
              t.addEventListener('mousemove', g, !1),
              t.addEventListener('mouseup', v, !1),
              t.addEventListener('mouseout', v, !1),
              t.addEventListener('dblclick', v, !1));
          }
          function g(e) {
            if (!1 !== o.enabled) {
              p.set(e.clientX, e.clientY);
              var t = p.x - f.x,
                n = p.y - f.y;
              0 === l
                ? o.rotate(a.set(-t * o.rotationSpeed, -n * o.rotationSpeed, 0))
                : 1 === l
                ? o.zoom(a.set(0, 0, n))
                : 2 === l && o.pan(a.set(-t, n, 0)),
                f.set(e.clientX, e.clientY);
            }
          }
          function v(e) {
            t.removeEventListener('mousemove', g, !1),
              t.removeEventListener('mouseup', v, !1),
              t.removeEventListener('mouseout', v, !1),
              t.removeEventListener('dblclick', v, !1),
              (l = -1);
          }
          function A(e) {
            e.preventDefault(), o.zoom(a.set(0, 0, e.deltaY > 0 ? 1 : -1));
          }
          function C(e) {
            e.preventDefault();
          }
          (this.setAspectRatio = function (e) {
            y = e;
          }),
            (this.zoom = function (e) {
              var t = n.position.distanceTo(c);
              if ((e.multiplyScalar(t * o.zoomSpeed), !(e.length() > t))) {
                if (
                  (e.applyMatrix3(u.getNormalMatrix(n.matrix)),
                  this.isOrthographic)
                ) {
                  var r = 1;
                  if (
                    (e.x + e.y + e.z < 0 && (r = -1),
                    (e = t * o.zoomSpeed * r),
                    (n.left -= e * y),
                    (n.bottom -= e),
                    (n.right += e * y),
                    (n.top += e),
                    n.left >= -1e-4)
                  )
                    return;
                  n.updateProjectionMatrix();
                } else n.position.add(e);
                o.dispatchChange();
              }
            }),
            (this.rotate = function (e) {
              this.rotationEnabled &&
                (i.copy(n.position).sub(c),
                d.setFromVector3(i),
                (d.theta += e.x),
                (d.phi += e.y),
                d.makeSafe(),
                i.setFromSpherical(d),
                n.position.copy(c).add(i),
                n.lookAt(c),
                o.dispatchChange());
            }),
            (this.dispose = function () {
              t.removeEventListener('contextmenu', C, !1),
                t.removeEventListener('mousedown', b, !1),
                t.removeEventListener('wheel', A, !1),
                t.removeEventListener('mousemove', g, !1),
                t.removeEventListener('mouseup', v, !1),
                t.removeEventListener('mouseout', v, !1),
                t.removeEventListener('dblclick', v, !1),
                t.removeEventListener('touchstart', S, !1),
                t.removeEventListener('touchmove', O, !1);
            }),
            t.addEventListener('contextmenu', C, !1),
            t.addEventListener('mousedown', b, !1),
            t.addEventListener('wheel', A, !1);
          var w = [
              new THREE.Vector3(),
              new THREE.Vector3(),
              new THREE.Vector3()
            ],
            E = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()],
            x = null;
          function S(e) {
            if (!1 !== o.enabled) {
              switch (e.touches.length) {
                case 1:
                  w[0].set(e.touches[0].pageX, e.touches[0].pageY, 0),
                    w[1].set(e.touches[0].pageX, e.touches[0].pageY, 0);
                  break;
                case 2:
                  w[0].set(e.touches[0].pageX, e.touches[0].pageY, 0),
                    w[1].set(e.touches[1].pageX, e.touches[1].pageY, 0),
                    (x = w[0].distanceTo(w[1]));
              }
              E[0].copy(w[0]), E[1].copy(w[1]);
            }
          }
          function O(e) {
            if (!1 !== o.enabled) {
              switch (
                (e.preventDefault(), e.stopPropagation(), e.touches.length)
              ) {
                case 1:
                  w[0].set(e.touches[0].pageX, e.touches[0].pageY, 0),
                    w[1].set(e.touches[0].pageX, e.touches[0].pageY, 0),
                    o.rotate(
                      w[0].sub(i(w[0], E)).multiplyScalar(-o.rotationSpeed)
                    );
                  break;
                case 2:
                  w[0].set(e.touches[0].pageX, e.touches[0].pageY, 0),
                    w[1].set(e.touches[1].pageX, e.touches[1].pageY, 0);
                  var t = w[0].distanceTo(w[1]);
                  o.zoom(a.set(0, 0, x - t)), (x = t);
                  var n = w[0].clone().sub(i(w[0], E)),
                    r = w[1].clone().sub(i(w[1], E));
                  (n.x = -n.x),
                    (r.x = -r.x),
                    o.pan(n.add(r).multiplyScalar(0.5));
              }
              E[0].copy(w[0]), E[1].copy(w[1]);
            }
            function i(e, t) {
              var n = t[0];
              for (var r in t)
                n.distanceTo(e) > t[r].distanceTo(e) && (n = t[r]);
              return n;
            }
          }
          t.addEventListener('touchstart', S, !1),
            t.addEventListener('touchmove', O, !1);
        }),
        (THREE.EditorControls.prototype = Object.create(
          THREE.EventDispatcher.prototype
        )),
        (THREE.EditorControls.prototype.constructor = THREE.EditorControls);
      var s = 'https://aframe.io/sample-assets/';
      function l() {
        (this.images = []), (this.hasLoaded = !1);
      }
      function c(e) {
        return (
          (c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          c(e)
        );
      }
      function u(e, t) {
        var n,
          r,
          o = c(e);
        if (o !== c(t)) return !1;
        if ('object' !== o || null === e || null === t) return e === t;
        if (((n = Object.keys(e)), (r = Object.keys(t)), n.length !== r.length))
          return !1;
        for (var i = 0; i < n.length; i++) if (!u(e[n[i]], t[r[i]])) return !1;
        return !0;
      }
      function p(e, t) {
        var n = document.createElement('a');
        (n.style.display = 'none'),
          document.body.appendChild(n),
          (n.href = URL.createObjectURL(e)),
          (n.download = t || 'ascene.html'),
          n.click();
      }
      l.prototype = {
        load: function () {
          var e = this,
            n = new XMLHttpRequest(),
            r = s + 'dist/images.json';
          n.open('GET', r),
            (n.onload = function () {
              var r = JSON.parse(n.responseText);
              (e.images = r.images),
                e.images.forEach(function (e) {
                  (e.fullPath = s + r.basepath.images + e.path),
                    (e.fullThumbPath =
                      s + r.basepath.images_thumbnails + e.thumbnail);
                }),
                t.Z.emit('assetsimagesload', e.images);
            }),
            (n.onerror = function () {
              console.error('Error loading registry file.');
            }),
            n.send(),
            (this.hasLoaded = !0);
        }
      };
      var f = o(893);
      function d(e, n, r) {
        var o;
        if (-1 !== n.indexOf('.'))
          if (((o = n.split('.')), null == r)) {
            var i = e.getAttribute(o[0]);
            delete i[o[1]], e.setAttribute(o[0], i);
          } else e.setAttribute(o[0], o[1], r);
        else null == r ? e.removeAttribute(n) : e.setAttribute(n, r);
        t.Z.emit('entityupdate', {
          component: o ? o[0] : n,
          entity: e,
          property: o ? o[1] : '',
          value: r
        });
      }
      function m(e, t) {
        if (
          e &&
          (!0 === t ||
            confirm(
              'Do you really want to remove entity `' +
                (e.id || e.tagName) +
                '`?'
            ))
        ) {
          var n = (function (e) {
            for (
              var t = e.nextElementSibling;
              t && (!t.isEntity || t.isInspector);

            )
              t = t.nextElementSibling;
            if (t && t.isEntity && !t.isInspector) return t;
            for (
              var n = e.previousElementSibling;
              n && (!n.isEntity || n.isInspector);

            )
              n = n.previousElementSibling;
            return n && n.isEntity && !n.isInspector ? n : null;
          })(e);
          AFRAME.INSPECTOR.removeObject(e.object3D),
            e.parentNode.removeChild(e),
            AFRAME.INSPECTOR.selectEntity(n);
        }
      }
      function h(e) {
        AFRAME.INSPECTOR.selectedEntity &&
          m(AFRAME.INSPECTOR.selectedEntity, e);
      }
      function y(e) {
        e.flushToDOM();
        var n,
          r,
          o = e.cloneNode(!0);
        o.addEventListener('loaded', function () {
          AFRAME.INSPECTOR.selectEntity(o), t.Z.emit('entityclone');
        }),
          e.id &&
            (o.id = (function (e) {
              if (!document.getElementById(e)) return e;
              var t = 2,
                n = e.match(/(\w+)-(\d+)/);
              for (
                n && ((e = n[1]), (t = n[2]));
                document.getElementById(e + '-' + t);

              )
                t++;
              return e + '-' + t;
            })(e.id)),
          (n = o),
          (r = e).parentNode || (r = AFRAME.INSPECTOR.selectedEntity),
          r
            ? r.parentNode.insertBefore(n, r.nextSibling)
            : AFRAME.INSPECTOR.sceneEl.appendChild(n);
      }
      function b(e) {
        return g(e).outerHTML;
      }
      function g(e) {
        for (
          var t = e.cloneNode(!1), n = e.childNodes, r = 0, o = n.length;
          r < o;
          r++
        ) {
          var i = n[r];
          (i.nodeType === Node.ELEMENT_NODE &&
            (i.hasAttribute('aframe-injected') ||
              i.hasAttribute('data-aframe-inspector') ||
              i.hasAttribute('data-aframe-canvas'))) ||
            t.appendChild(g(n[r]));
        }
        return (
          (function (e, t) {
            var n = HTMLElement.prototype.removeAttribute,
              r = HTMLElement.prototype.setAttribute,
              o = t.components || {};
            Object.keys(o).forEach(function (i) {
              var a,
                s,
                l = o[i],
                c = (function (e, t) {
                  var n = !1,
                    r = (
                      w(e.schema)
                        ? function () {
                            var r = v(e, null, t);
                            return (
                              void 0 === r && (r = A(e, null, t)),
                              void 0 !== r ? (n = !0) : (r = C(e, null)),
                              void 0 !== r ? e.schema.parse(r) : r
                            );
                          }
                        : function () {
                            var r;
                            return (
                              Object.keys(e.schema).forEach(function (o) {
                                var i = (function (e, t, n) {
                                  var r,
                                    o = (function (e, t) {
                                      for (
                                        var n = Object.keys(e),
                                          r = 0,
                                          o = n.length;
                                        r < o;
                                        r++
                                      ) {
                                        var i = n[r];
                                        if (e[i] === t) return i;
                                      }
                                    })(n.mappings || {}, e.name + '.' + t);
                                  return (
                                    o &&
                                      n.hasAttribute(o) &&
                                      (r = n.getAttribute(o)),
                                    r
                                  );
                                })(e, o, t);
                                if (
                                  (void 0 === i && (i = v(e, o, t)),
                                  void 0 === i && (i = A(e, o, t)),
                                  void 0 !== i ? (n = n || !0) : (i = C(e, o)),
                                  void 0 !== i)
                                ) {
                                  var a = e.schema[o].parse;
                                  (r = r || {})[o] = a(i);
                                }
                              }),
                              r
                            );
                          }
                    )();
                  return [r, n];
                })(l, t),
                p = c[1],
                f = (function (e, t, n) {
                  if (u(t, n)) return null;
                  if (w(e.schema)) return n;
                  var r = {};
                  return (
                    Object.keys(n).forEach(function (e) {
                      !u(n[e], t[e]) && (r[e] = n[e]);
                    }),
                    r
                  );
                })(l, c[0], t.getAttribute(i));
              if (p && null === f) n.call(e, i);
              else {
                var d =
                  ((a = l.schema),
                  null === (s = void 0 === (s = f) ? {} : s)
                    ? ''
                    : (w(a)
                        ? function () {
                            return a.stringify(s);
                          }
                        : function () {
                            var e = {};
                            return (
                              Object.keys(s).forEach(function (t) {
                                a[t] && (e[t] = a[t].stringify(s[t]));
                              }),
                              AFRAME.utils.styleParser.stringify(e)
                            );
                          })());
                r.call(e, i, d);
              }
            });
          })(t, e),
          t
        );
      }
      function v(e, t, n) {
        for (
          var r, o = n.mixinEls.reverse(), i = 0;
          void 0 === r && i < o.length;
          i++
        ) {
          var a = o[i];
          a.attributes.hasOwnProperty(e.name) &&
            (r = t ? a.getAttribute(e.name)[t] : a.getAttribute(e.name));
        }
        return r;
      }
      function A(e, t, n) {
        for (
          var r,
            o = [
              n.defaultComponentsFromPrimitive || {},
              n.defaultComponents || {}
            ],
            i = 0;
          void 0 === r && i < o.length;
          i++
        ) {
          var a = o[i];
          a.hasOwnProperty(e.name) && (r = t ? a[e.name][t] : a[e.name]);
        }
        return r;
      }
      function C(e, t, n) {
        return t ? e.schema[t].default : e.schema.default;
      }
      function w(e) {
        return AFRAME.schema.isSingleProperty(e);
      }
      var E = {
        camera: 'fa-camera',
        mesh: 'fa-cube',
        light: 'fa-lightbulb-o',
        text: 'fa-font'
      };
      function x(e, t) {
        if (!e) return '';
        var n = '';
        for (var r in E)
          e.getObject3D(r) &&
            (n += '&nbsp;<i class="fa '
              .concat(E[r], '" title="')
              .concat(r, '"></i>'));
        var o = e.id,
          i = 'id';
        return (
          e.isScene || o || !e.getAttribute('class')
            ? e.isScene ||
              o ||
              !e.getAttribute('mixin') ||
              ((o = e.getAttribute('mixin').split(' ')[0]), (i = 'mixin'))
            : ((o = e.getAttribute('class').split(' ')[0]), (i = 'class')),
          (0, f.jsxs)('span', {
            className: 'entityPrint',
            onDoubleClick: t,
            children: [
              (0, f.jsx)('span', {
                className: 'entityTagName',
                children: '<' + e.tagName.toLowerCase()
              }),
              o &&
                (0, f.jsxs)('span', {
                  className: 'entityName',
                  'data-entity-name-type': i,
                  children: [' ', o]
                }),
              !!n &&
                (0, f.jsx)('span', {
                  className: 'entityIcons',
                  dangerouslySetInnerHTML: { __html: n }
                }),
              (0, f.jsx)('span', { className: 'entityCloseTag', children: '>' })
            ]
          })
        );
      }
      var S = (function () {
        var e = window.navigator.userAgent,
          t = window.navigator.platform,
          n = null;
        return (
          -1 !== ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(t)
            ? (n = 'macos')
            : -1 !== ['iPhone', 'iPad', 'iPod'].indexOf(t)
            ? (n = 'ios')
            : -1 !== ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(t)
            ? (n = 'windows')
            : /Android/.test(e)
            ? (n = 'android')
            : !n && /Linux/.test(t) && (n = 'linux'),
          n
        );
      })();
      function O(e) {
        return (
          !e.metaKey &&
          (e.target.closest('#cameraToolbar') ||
            ('INPUT' !== e.target.tagName && 'TEXTAREA' !== e.target.tagName))
        );
      }
      var k = {
          enabled: !1,
          shortcuts: { default: {}, modules: {} },
          onKeyUp: function (e) {
            if (O(e) && AFRAME.INSPECTOR.opened) {
              var n = e.keyCode;
              if (
                (72 === n && t.Z.emit('openhelpmodal'),
                27 === n &&
                  this.inspector.selectedEntity &&
                  this.inspector.selectEntity(null),
                87 === n && t.Z.emit('transformmodechange', 'translate'),
                69 === n && t.Z.emit('transformmodechange', 'rotate'),
                82 === n && t.Z.emit('transformmodechange', 'scale'),
                79 === n && t.Z.emit('transformspacechange'),
                71 === n && t.Z.emit('togglegrid'),
                77 === n && t.Z.emit('togglemotioncapture'),
                78 === n &&
                  t.Z.emit('entitycreate', {
                    element: 'a-entity',
                    components: {}
                  }),
                (8 !== n && 46 !== n) || h(),
                68 === n &&
                  AFRAME.INSPECTOR.selectedEntity &&
                  y(AFRAME.INSPECTOR.selectedEntity),
                70 === n)
              ) {
                var r = AFRAME.INSPECTOR.selectedEntity;
                null != r && t.Z.emit('objectfocus', r.object3D);
              }
              for (var o in (49 === n
                ? t.Z.emit('cameraperspectivetoggle')
                : 50 === n
                ? t.Z.emit('cameraorthographictoggle', 'left')
                : 51 === n
                ? t.Z.emit('cameraorthographictoggle', 'right')
                : 52 === n
                ? t.Z.emit('cameraorthographictoggle', 'top')
                : 53 === n
                ? t.Z.emit('cameraorthographictoggle', 'bottom')
                : 54 === n
                ? t.Z.emit('cameraorthographictoggle', 'back')
                : 55 === n && t.Z.emit('cameraorthographictoggle', 'front'),
              this.shortcuts.modules)) {
                var i = this.shortcuts.modules[o];
                i[n] &&
                  (!i[n].mustBeActive ||
                    (i[n].mustBeActive &&
                      AFRAME.INSPECTOR.modules[o].active)) &&
                  this.shortcuts.modules[o][n].callback();
              }
            }
          },
          onKeyDown: function (e) {
            O(e) &&
              AFRAME.INSPECTOR.opened &&
              (((e.ctrlKey && 'windows' === S) ||
                (e.metaKey && 'macos' === S)) &&
                (AFRAME.INSPECTOR.selectedEntity &&
                  'INPUT' !== document.activeElement.tagName &&
                  (88 === e.keyCode &&
                    ((AFRAME.INSPECTOR.entityToCopy =
                      AFRAME.INSPECTOR.selectedEntity),
                    h(!0)),
                  67 === e.keyCode &&
                    (AFRAME.INSPECTOR.entityToCopy =
                      AFRAME.INSPECTOR.selectedEntity),
                  86 === e.keyCode && y(AFRAME.INSPECTOR.entityToCopy)),
                83 === e.keyCode &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  document.getElementById('filter').focus())),
              48 === e.keyCode &&
                (t.Z.emit('togglesidebar', { which: 'all' }),
                e.preventDefault(),
                e.stopPropagation()));
          },
          enable: function () {
            this.enabled && this.disable(),
              window.addEventListener('keydown', this.onKeyDown, !1),
              window.addEventListener('keyup', this.onKeyUp, !1),
              (this.enabled = !0);
          },
          disable: function () {
            window.removeEventListener('keydown', this.onKeyDown),
              window.removeEventListener('keyup', this.onKeyUp),
              (this.enabled = !1);
          },
          checkModuleShortcutCollision: function (e, t, n) {
            this.shortcuts.modules[t] &&
              this.shortcuts.modules[t][e] &&
              console.warn(
                'Keycode <%s> already registered as shortcut within the same module',
                e
              );
          },
          registerModuleShortcut: function (e, t, n, r) {
            this.checkModuleShortcutCollision(e, n, r) ||
              (this.shortcuts.modules[n] || (this.shortcuts.modules[n] = {}),
              !1 !== r && (r = !0),
              (this.shortcuts.modules[n][e] = {
                callback: t,
                mustBeActive: r
              }));
          },
          init: function (e) {
            (this.inspector = e),
              (this.onKeyDown = this.onKeyDown.bind(this)),
              (this.onKeyUp = this.onKeyUp.bind(this));
          }
        },
        j = o(294),
        T = o.t(j, 2),
        M = o(697),
        I = o.n(M);
      function R(e) {
        return (
          (R =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          R(e)
        );
      }
      function P(e) {
        var t = (function (e, t) {
          if ('object' !== R(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== R(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === R(t) ? t : String(t);
      }
      function N(e, t, n) {
        return (
          (t = P(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function L(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                N(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function B(e, t) {
        if (e) {
          if ('string' == typeof e) return D(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? D(e, t)
              : void 0
          );
        }
      }
      function z(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          B(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function F(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var H = [
        'defaultInputValue',
        'defaultMenuIsOpen',
        'defaultValue',
        'inputValue',
        'menuIsOpen',
        'onChange',
        'onInputChange',
        'onMenuClose',
        'onMenuOpen',
        'value'
      ];
      function U() {
        return (
          (U = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          U.apply(this, arguments)
        );
      }
      function V(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, P(r.key), r);
        }
      }
      function Y(e, t) {
        return (
          (Y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Y(e, t)
        );
      }
      function W(e) {
        return (
          (W = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          W(e)
        );
      }
      function Z(e, t) {
        if (t && ('object' === R(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function Q(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return D(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          B(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var G = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement('style');
                    return (
                      t.setAttribute('data-emotion', e.key),
                      void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                      t.appendChild(document.createTextNode('')),
                      t.setAttribute('data-s', ''),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (e) {}
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        $ = Math.abs,
        X = String.fromCharCode,
        q = Object.assign;
      function K(e) {
        return e.trim();
      }
      function J(e, t, n) {
        return e.replace(t, n);
      }
      function ee(e, t) {
        return e.indexOf(t);
      }
      function te(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function ne(e, t, n) {
        return e.slice(t, n);
      }
      function re(e) {
        return e.length;
      }
      function oe(e) {
        return e.length;
      }
      function ie(e, t) {
        return t.push(e), e;
      }
      var ae = 1,
        se = 1,
        le = 0,
        ce = 0,
        ue = 0,
        pe = '';
      function fe(e, t, n, r, o, i, a) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: i,
          line: ae,
          column: se,
          length: a,
          return: ''
        };
      }
      function de(e, t) {
        return q(
          fe('', null, null, '', null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function me() {
        return (
          (ue = ce > 0 ? te(pe, --ce) : 0),
          se--,
          10 === ue && ((se = 1), ae--),
          ue
        );
      }
      function he() {
        return (
          (ue = ce < le ? te(pe, ce++) : 0),
          se++,
          10 === ue && ((se = 1), ae++),
          ue
        );
      }
      function ye() {
        return te(pe, ce);
      }
      function be() {
        return ce;
      }
      function ge(e, t) {
        return ne(pe, e, t);
      }
      function ve(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Ae(e) {
        return (ae = se = 1), (le = re((pe = e))), (ce = 0), [];
      }
      function Ce(e) {
        return (pe = ''), e;
      }
      function we(e) {
        return K(ge(ce - 1, Se(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function Ee(e) {
        for (; (ue = ye()) && ue < 33; ) he();
        return ve(e) > 2 || ve(ue) > 3 ? '' : ' ';
      }
      function xe(e, t) {
        for (
          ;
          --t &&
          he() &&
          !(
            ue < 48 ||
            ue > 102 ||
            (ue > 57 && ue < 65) ||
            (ue > 70 && ue < 97)
          );

        );
        return ge(e, be() + (t < 6 && 32 == ye() && 32 == he()));
      }
      function Se(e) {
        for (; he(); )
          switch (ue) {
            case e:
              return ce;
            case 34:
            case 39:
              34 !== e && 39 !== e && Se(ue);
              break;
            case 40:
              41 === e && Se(e);
              break;
            case 92:
              he();
          }
        return ce;
      }
      function Oe(e, t) {
        for (; he() && e + ue !== 57 && (e + ue !== 84 || 47 !== ye()); );
        return '/*' + ge(t, ce - 1) + '*' + X(47 === e ? e : he());
      }
      function ke(e) {
        for (; !ve(ye()); ) he();
        return ge(e, ce);
      }
      var je = '-ms-',
        Te = '-moz-',
        Me = '-webkit-',
        Ie = 'comm',
        Re = 'rule',
        Pe = 'decl',
        Ne = '@keyframes';
      function Le(e, t) {
        for (var n = '', r = oe(e), o = 0; o < r; o++)
          n += t(e[o], o, e, t) || '';
        return n;
      }
      function _e(e, t, n, r) {
        switch (e.type) {
          case '@import':
          case Pe:
            return (e.return = e.return || e.value);
          case Ie:
            return '';
          case Ne:
            return (e.return = e.value + '{' + Le(e.children, r) + '}');
          case Re:
            e.value = e.props.join(',');
        }
        return re((n = Le(e.children, r)))
          ? (e.return = e.value + '{' + n + '}')
          : '';
      }
      function De(e) {
        return Ce(Be('', null, null, null, [''], (e = Ae(e)), 0, [0], e));
      }
      function Be(e, t, n, r, o, i, a, s, l) {
        for (
          var c = 0,
            u = 0,
            p = a,
            f = 0,
            d = 0,
            m = 0,
            h = 1,
            y = 1,
            b = 1,
            g = 0,
            v = '',
            A = o,
            C = i,
            w = r,
            E = v;
          y;

        )
          switch (((m = g), (g = he()))) {
            case 40:
              if (108 != m && 58 == te(E, p - 1)) {
                -1 != ee((E += J(we(g), '&', '&\f')), '&\f') && (b = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              E += we(g);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              E += Ee(m);
              break;
            case 92:
              E += xe(be() - 1, 7);
              continue;
            case 47:
              switch (ye()) {
                case 42:
                case 47:
                  ie(Fe(Oe(he(), be()), t, n), l);
                  break;
                default:
                  E += '/';
              }
              break;
            case 123 * h:
              s[c++] = re(E) * b;
            case 125 * h:
            case 59:
            case 0:
              switch (g) {
                case 0:
                case 125:
                  y = 0;
                case 59 + u:
                  d > 0 &&
                    re(E) - p &&
                    ie(
                      d > 32
                        ? He(E + ';', r, n, p - 1)
                        : He(J(E, ' ', '') + ';', r, n, p - 2),
                      l
                    );
                  break;
                case 59:
                  E += ';';
                default:
                  if (
                    (ie(
                      (w = ze(E, t, n, c, u, o, s, v, (A = []), (C = []), p)),
                      i
                    ),
                    123 === g)
                  )
                    if (0 === u) Be(E, t, w, w, A, i, p, s, C);
                    else
                      switch (99 === f && 110 === te(E, 3) ? 100 : f) {
                        case 100:
                        case 109:
                        case 115:
                          Be(
                            e,
                            w,
                            w,
                            r &&
                              ie(ze(e, w, w, 0, 0, o, s, v, o, (A = []), p), C),
                            o,
                            C,
                            p,
                            s,
                            r ? A : C
                          );
                          break;
                        default:
                          Be(E, w, w, w, [''], C, 0, s, C);
                      }
              }
              (c = u = d = 0), (h = b = 1), (v = E = ''), (p = a);
              break;
            case 58:
              (p = 1 + re(E)), (d = m);
            default:
              if (h < 1)
                if (123 == g) --h;
                else if (125 == g && 0 == h++ && 125 == me()) continue;
              switch (((E += X(g)), g * h)) {
                case 38:
                  b = u > 0 ? 1 : ((E += '\f'), -1);
                  break;
                case 44:
                  (s[c++] = (re(E) - 1) * b), (b = 1);
                  break;
                case 64:
                  45 === ye() && (E += we(he())),
                    (f = ye()),
                    (u = p = re((v = E += ke(be())))),
                    g++;
                  break;
                case 45:
                  45 === m && 2 == re(E) && (h = 0);
              }
          }
        return i;
      }
      function ze(e, t, n, r, o, i, a, s, l, c, u) {
        for (
          var p = o - 1, f = 0 === o ? i : [''], d = oe(f), m = 0, h = 0, y = 0;
          m < r;
          ++m
        )
          for (
            var b = 0, g = ne(e, p + 1, (p = $((h = a[m])))), v = e;
            b < d;
            ++b
          )
            (v = K(h > 0 ? f[b] + ' ' + g : J(g, /&\f/g, f[b]))) &&
              (l[y++] = v);
        return fe(e, t, n, 0 === o ? Re : s, l, c, u);
      }
      function Fe(e, t, n) {
        return fe(e, t, n, Ie, X(ue), ne(e, 2, -2), 0);
      }
      function He(e, t, n, r) {
        return fe(e, t, n, Pe, ne(e, 0, r), ne(e, r + 1, -1), r);
      }
      var Ue = function (e, t, n) {
          for (
            var r = 0, o = 0;
            (r = o), (o = ye()), 38 === r && 12 === o && (t[n] = 1), !ve(o);

          )
            he();
          return ge(e, ce);
        },
        Ve = new WeakMap(),
        Ye = function (e) {
          if ('rule' === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              'rule' !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || Ve.get(n)) &&
              !r
            ) {
              Ve.set(e, !0);
              for (
                var o = [],
                  i = (function (e, t) {
                    return Ce(
                      (function (e, t) {
                        var n = -1,
                          r = 44;
                        do {
                          switch (ve(r)) {
                            case 0:
                              38 === r && 12 === ye() && (t[n] = 1),
                                (e[n] += Ue(ce - 1, t, n));
                              break;
                            case 2:
                              e[n] += we(r);
                              break;
                            case 4:
                              if (44 === r) {
                                (e[++n] = 58 === ye() ? '&\f' : ''),
                                  (t[n] = e[n].length);
                                break;
                              }
                            default:
                              e[n] += X(r);
                          }
                        } while ((r = he()));
                        return e;
                      })(Ae(e), t)
                    );
                  })(t, o),
                  a = n.props,
                  s = 0,
                  l = 0;
                s < i.length;
                s++
              )
                for (var c = 0; c < a.length; c++, l++)
                  e.props[l] = o[s]
                    ? i[s].replace(/&\f/g, a[c])
                    : a[c] + ' ' + i[s];
            }
          }
        },
        We = function (e) {
          if ('decl' === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ''), (e.value = ''));
          }
        };
      function Ze(e, t) {
        switch (
          (function (e, t) {
            return 45 ^ te(e, 0)
              ? (((((((t << 2) ^ te(e, 0)) << 2) ^ te(e, 1)) << 2) ^
                  te(e, 2)) <<
                  2) ^
                  te(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return Me + 'print-' + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return Me + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return Me + e + Te + e + je + e + e;
          case 6828:
          case 4268:
            return Me + e + je + e + e;
          case 6165:
            return Me + e + je + 'flex-' + e + e;
          case 5187:
            return (
              Me +
              e +
              J(e, /(\w+).+(:[^]+)/, Me + 'box-$1$2' + je + 'flex-$1$2') +
              e
            );
          case 5443:
            return Me + e + je + 'flex-item-' + J(e, /flex-|-self/, '') + e;
          case 4675:
            return (
              Me +
              e +
              je +
              'flex-line-pack' +
              J(e, /align-content|flex-|-self/, '') +
              e
            );
          case 5548:
            return Me + e + je + J(e, 'shrink', 'negative') + e;
          case 5292:
            return Me + e + je + J(e, 'basis', 'preferred-size') + e;
          case 6060:
            return (
              Me +
              'box-' +
              J(e, '-grow', '') +
              Me +
              e +
              je +
              J(e, 'grow', 'positive') +
              e
            );
          case 4554:
            return Me + J(e, /([^-])(transform)/g, '$1' + Me + '$2') + e;
          case 6187:
            return (
              J(
                J(J(e, /(zoom-|grab)/, Me + '$1'), /(image-set)/, Me + '$1'),
                e,
                ''
              ) + e
            );
          case 5495:
          case 3959:
            return J(e, /(image-set\([^]*)/, Me + '$1$`$1');
          case 4968:
            return (
              J(
                J(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  Me + 'box-pack:$3' + je + 'flex-pack:$3'
                ),
                /s.+-b[^;]+/,
                'justify'
              ) +
              Me +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return J(e, /(.+)-inline(.+)/, Me + '$1$2') + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (re(e) - 1 - t > 6)
              switch (te(e, t + 1)) {
                case 109:
                  if (45 !== te(e, t + 4)) break;
                case 102:
                  return (
                    J(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1' +
                        Me +
                        '$2-$3$1' +
                        Te +
                        (108 == te(e, t + 3) ? '$3' : '$2-$3')
                    ) + e
                  );
                case 115:
                  return ~ee(e, 'stretch')
                    ? Ze(J(e, 'stretch', 'fill-available'), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== te(e, t + 1)) break;
          case 6444:
            switch (te(e, re(e) - 3 - (~ee(e, '!important') && 10))) {
              case 107:
                return J(e, ':', ':' + Me) + e;
              case 101:
                return (
                  J(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    '$1' +
                      Me +
                      (45 === te(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      Me +
                      '$2$3$1' +
                      je +
                      '$2box$3'
                  ) + e
                );
            }
            break;
          case 5936:
            switch (te(e, t + 11)) {
              case 114:
                return Me + e + je + J(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
              case 108:
                return Me + e + je + J(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
              case 45:
                return Me + e + je + J(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
            return Me + e + je + e + e;
        }
        return e;
      }
      var Qe = [
        function (e, t, n, r) {
          if (e.length > -1 && !e.return)
            switch (e.type) {
              case Pe:
                e.return = Ze(e.value, e.length);
                break;
              case Ne:
                return Le([de(e, { value: J(e.value, '@', '@' + Me) })], r);
              case Re:
                if (e.length)
                  return (function (e, t) {
                    return e.map(t).join('');
                  })(e.props, function (t) {
                    switch (
                      (function (e, t) {
                        return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e;
                      })(t)
                    ) {
                      case ':read-only':
                      case ':read-write':
                        return Le(
                          [de(e, { props: [J(t, /:(read-\w+)/, ':-moz-$1')] })],
                          r
                        );
                      case '::placeholder':
                        return Le(
                          [
                            de(e, {
                              props: [J(t, /:(plac\w+)/, ':' + Me + 'input-$1')]
                            }),
                            de(e, { props: [J(t, /:(plac\w+)/, ':-moz-$1')] }),
                            de(e, {
                              props: [J(t, /:(plac\w+)/, je + 'input-$1')]
                            })
                          ],
                          r
                        );
                    }
                    return '';
                  });
            }
        }
      ];
      const Ge = function (e) {
        var t = e.key;
        if ('css' === t) {
          var n = document.querySelectorAll(
            'style[data-emotion]:not([data-s])'
          );
          Array.prototype.forEach.call(n, function (e) {
            -1 !== e.getAttribute('data-emotion').indexOf(' ') &&
              (document.head.appendChild(e), e.setAttribute('data-s', ''));
          });
        }
        var r,
          o,
          i = e.stylisPlugins || Qe,
          a = {},
          s = [];
        (r = e.container || document.head),
          Array.prototype.forEach.call(
            document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
            function (e) {
              for (
                var t = e.getAttribute('data-emotion').split(' '), n = 1;
                n < t.length;
                n++
              )
                a[t[n]] = !0;
              s.push(e);
            }
          );
        var l,
          c,
          u,
          p,
          f = [
            _e,
            ((p = function (e) {
              l.insert(e);
            }),
            function (e) {
              e.root || ((e = e.return) && p(e));
            })
          ],
          d =
            ((c = [Ye, We].concat(i, f)),
            (u = oe(c)),
            function (e, t, n, r) {
              for (var o = '', i = 0; i < u; i++) o += c[i](e, t, n, r) || '';
              return o;
            });
        o = function (e, t, n, r) {
          (l = n),
            Le(De(e ? e + '{' + t.styles + '}' : t.styles), d),
            r && (m.inserted[t.name] = !0);
        };
        var m = {
          key: t,
          sheet: new G({
            key: t,
            container: r,
            nonce: e.nonce,
            speedy: e.speedy,
            prepend: e.prepend,
            insertionPoint: e.insertionPoint
          }),
          nonce: e.nonce,
          inserted: a,
          registered: {},
          insert: o
        };
        return m.sheet.hydrate(s), m;
      };
      var $e = function (e, t, n) {
        var r = e.key + '-' + t.name;
        !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
      };
      const Xe = function (e) {
          for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(r)) |
                    ((255 & e.charCodeAt(++r)) << 8) |
                    ((255 & e.charCodeAt(++r)) << 16) |
                    ((255 & e.charCodeAt(++r)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
          switch (o) {
            case 3:
              n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
              n =
                1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                ((59797 * (n >>> 16)) << 16);
          }
          return (
            ((n =
              1540483477 * (65535 & (n ^= n >>> 13)) +
              ((59797 * (n >>> 16)) << 16)) ^
              (n >>> 15)) >>>
            0
          ).toString(36);
        },
        qe = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1
        };
      var Ke = /[A-Z]|^ms/g,
        Je = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        et = function (e) {
          return 45 === e.charCodeAt(1);
        },
        tt = function (e) {
          return null != e && 'boolean' != typeof e;
        },
        nt = (function (e) {
          var t = Object.create(null);
          return function (e) {
            return (
              void 0 === t[e] &&
                (t[e] = et((n = e)) ? n : n.replace(Ke, '-$&').toLowerCase()),
              t[e]
            );
            var n;
          };
        })(),
        rt = function (e, t) {
          switch (e) {
            case 'animation':
            case 'animationName':
              if ('string' == typeof t)
                return t.replace(Je, function (e, t, n) {
                  return (it = { name: t, styles: n, next: it }), t;
                });
          }
          return 1 === qe[e] || et(e) || 'number' != typeof t || 0 === t
            ? t
            : t + 'px';
        };
      function ot(e, t, n) {
        if (null == n) return '';
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case 'boolean':
            return '';
          case 'object':
            if (1 === n.anim)
              return (
                (it = { name: n.name, styles: n.styles, next: it }), n.name
              );
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (it = { name: r.name, styles: r.styles, next: it }),
                    (r = r.next);
              return n.styles + ';';
            }
            return (function (e, t, n) {
              var r = '';
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) r += ot(e, t, n[o]) + ';';
              else
                for (var i in n) {
                  var a = n[i];
                  if ('object' != typeof a)
                    null != t && void 0 !== t[a]
                      ? (r += i + '{' + t[a] + '}')
                      : tt(a) && (r += nt(i) + ':' + rt(i, a) + ';');
                  else if (
                    !Array.isArray(a) ||
                    'string' != typeof a[0] ||
                    (null != t && void 0 !== t[a[0]])
                  ) {
                    var s = ot(e, t, a);
                    switch (i) {
                      case 'animation':
                      case 'animationName':
                        r += nt(i) + ':' + s + ';';
                        break;
                      default:
                        r += i + '{' + s + '}';
                    }
                  } else
                    for (var l = 0; l < a.length; l++)
                      tt(a[l]) && (r += nt(i) + ':' + rt(i, a[l]) + ';');
                }
              return r;
            })(e, t, n);
          case 'function':
            if (void 0 !== e) {
              var o = it,
                i = n(e);
              return (it = o), ot(e, t, i);
            }
        }
        if (null == t) return n;
        var a = t[n];
        return void 0 !== a ? a : n;
      }
      var it,
        at = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        st = function (e, t, n) {
          if (
            1 === e.length &&
            'object' == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var r = !0,
            o = '';
          it = void 0;
          var i = e[0];
          null == i || void 0 === i.raw
            ? ((r = !1), (o += ot(n, t, i)))
            : (o += i[0]);
          for (var a = 1; a < e.length; a++)
            (o += ot(n, t, e[a])), r && (o += i[a]);
          at.lastIndex = 0;
          for (var s, l = ''; null !== (s = at.exec(o)); ) l += '-' + s[1];
          return { name: Xe(o) + l, styles: o, next: it };
        },
        lt = !!T.useInsertionEffect && T.useInsertionEffect,
        ct =
          lt ||
          function (e) {
            return e();
          },
        ut = (lt || j.useLayoutEffect, {}.hasOwnProperty),
        pt = (0, j.createContext)(
          'undefined' != typeof HTMLElement ? Ge({ key: 'css' }) : null
        );
      pt.Provider;
      var ft = function (e) {
          return (0, j.forwardRef)(function (t, n) {
            var r = (0, j.useContext)(pt);
            return e(t, r, n);
          });
        },
        dt = (0, j.createContext)({}),
        mt = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
        ht = function (e, t) {
          var n = {};
          for (var r in t) ut.call(t, r) && (n[r] = t[r]);
          return (n[mt] = e), n;
        },
        yt = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          return (
            $e(t, n, r),
            ct(function () {
              return (function (e, t, n) {
                $e(e, t, n);
                var r = e.key + '-' + t.name;
                if (void 0 === e.inserted[t.name]) {
                  var o = t;
                  do {
                    e.insert(t === o ? '.' + r : '', o, e.sheet, !0),
                      (o = o.next);
                  } while (void 0 !== o);
                }
              })(t, n, r);
            }),
            null
          );
        },
        bt = ft(function (e, t, n) {
          var r = e.css;
          'string' == typeof r &&
            void 0 !== t.registered[r] &&
            (r = t.registered[r]);
          var o = e[mt],
            i = [r],
            a = '';
          'string' == typeof e.className
            ? (a = (function (e, t, n) {
                var r = '';
                return (
                  n.split(' ').forEach(function (n) {
                    void 0 !== e[n] ? t.push(e[n] + ';') : (r += n + ' ');
                  }),
                  r
                );
              })(t.registered, i, e.className))
            : null != e.className && (a = e.className + ' ');
          var s = st(i, void 0, (0, j.useContext)(dt));
          a += t.key + '-' + s.name;
          var l = {};
          for (var c in e)
            ut.call(e, c) && 'css' !== c && c !== mt && (l[c] = e[c]);
          return (
            (l.ref = n),
            (l.className = a),
            (0, j.createElement)(
              j.Fragment,
              null,
              (0, j.createElement)(yt, {
                cache: t,
                serialized: s,
                isStringTag: 'string' == typeof o
              }),
              (0, j.createElement)(o, l)
            )
          );
        });
      o(679);
      var gt = function (e, t) {
        var n = arguments;
        if (null == t || !ut.call(t, 'css'))
          return j.createElement.apply(void 0, n);
        var r = n.length,
          o = new Array(r);
        (o[0] = bt), (o[1] = ht(e, t));
        for (var i = 2; i < r; i++) o[i] = n[i];
        return j.createElement.apply(null, o);
      };
      function vt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return st(t);
      }
      var At = o(935);
      Math.min, Math.max;
      function Ct(e) {
        var t;
        return (
          (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        );
      }
      function wt(e) {
        return Ct(e).getComputedStyle(e);
      }
      function Et(e) {
        return kt(e) ? (e.nodeName || '').toLowerCase() : '';
      }
      let xt;
      function St(e) {
        return e instanceof Ct(e).HTMLElement;
      }
      function Ot(e) {
        return e instanceof Ct(e).Element;
      }
      function kt(e) {
        return e instanceof Ct(e).Node;
      }
      function jt(e) {
        return (
          'undefined' != typeof ShadowRoot &&
          (e instanceof Ct(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function Tt(e) {
        const { overflow: t, overflowX: n, overflowY: r, display: o } = wt(e);
        return (
          /auto|scroll|overlay|hidden/.test(t + r + n) &&
          !['inline', 'contents'].includes(o)
        );
      }
      function Mt() {
        return !/^((?!chrome|android).)*safari/i.test(
          (function () {
            if (xt) return xt;
            const e = navigator.userAgentData;
            return e && Array.isArray(e.brands)
              ? ((xt = e.brands
                  .map((e) => e.brand + '/' + e.version)
                  .join(' ')),
                xt)
              : navigator.userAgent;
          })()
        );
      }
      ['top', 'right', 'bottom', 'left'].reduce(
        (e, t) => e.concat(t, t + '-start', t + '-end'),
        []
      ),
        Math.min,
        Math.max;
      const It = Math.round,
        Rt = { x: 1, y: 1 };
      function Pt(e) {
        const t =
          !Ot(e) && e.contextElement ? e.contextElement : Ot(e) ? e : null;
        if (!t) return Rt;
        const n = t.getBoundingClientRect(),
          r = wt(t);
        if ('border-box' !== r.boxSizing)
          return St(t)
            ? {
                x: (t.offsetWidth > 0 && It(n.width) / t.offsetWidth) || 1,
                y: (t.offsetHeight > 0 && It(n.height) / t.offsetHeight) || 1
              }
            : Rt;
        let o = n.width / parseFloat(r.width),
          i = n.height / parseFloat(r.height);
        return (
          (o && Number.isFinite(o)) || (o = 1),
          (i && Number.isFinite(i)) || (i = 1),
          { x: o, y: i }
        );
      }
      function Nt(e, t, n, r) {
        var o, i, a, s;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const l = e.getBoundingClientRect();
        let c = Rt;
        t && (r ? Ot(r) && (c = Pt(r)) : (c = Pt(e)));
        const u = Ot(e) ? Ct(e) : window,
          p = !Mt() && n,
          f =
            (l.left +
              (p &&
              null !=
                (o = null == (i = u.visualViewport) ? void 0 : i.offsetLeft)
                ? o
                : 0)) /
            c.x,
          d =
            (l.top +
              (p &&
              null !=
                (a = null == (s = u.visualViewport) ? void 0 : s.offsetTop)
                ? a
                : 0)) /
            c.y,
          m = l.width / c.x,
          h = l.height / c.y;
        return {
          width: m,
          height: h,
          top: d,
          right: f + m,
          bottom: d + h,
          left: f,
          x: f,
          y: d
        };
      }
      function Lt(e) {
        if ('html' === Et(e)) return e;
        const t =
          e.assignedSlot ||
          e.parentNode ||
          (jt(e) ? e.host : null) ||
          (function (e) {
            return ((kt(e) ? e.ownerDocument : e.document) || window.document)
              .documentElement;
          })(e);
        return jt(t) ? t.host : t;
      }
      function _t(e) {
        const t = Lt(e);
        return (function (e) {
          return ['html', 'body', '#document'].includes(Et(e));
        })(t)
          ? e.ownerDocument.body
          : St(t) && Tt(t)
          ? t
          : _t(t);
      }
      function Dt(e, t) {
        var n;
        void 0 === t && (t = []);
        const r = _t(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = Ct(r);
        return o
          ? t.concat(i, i.visualViewport || [], Tt(r) ? r : [])
          : t.concat(r, Dt(r));
      }
      const Bt = j.useLayoutEffect;
      var zt = [
          'className',
          'clearValue',
          'cx',
          'getStyles',
          'getClassNames',
          'getValue',
          'hasValue',
          'isMulti',
          'isRtl',
          'options',
          'selectOption',
          'selectProps',
          'setValue',
          'theme'
        ],
        Ft = function () {};
      function Ht(e, t) {
        return t ? ('-' === t[0] ? e + t : e + '__' + t) : e;
      }
      function Ut(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
        var i = [].concat(r);
        if (t && e)
          for (var a in t)
            t.hasOwnProperty(a) && t[a] && i.push(''.concat(Ht(e, a)));
        return i
          .filter(function (e) {
            return e;
          })
          .map(function (e) {
            return String(e).trim();
          })
          .join(' ');
      }
      var Vt = function (e) {
          return (
            (t = e),
            Array.isArray(t)
              ? e.filter(Boolean)
              : 'object' === R(e) && null !== e
              ? [e]
              : []
          );
          var t;
        },
        Yt = function (e) {
          return (
            e.className,
            e.clearValue,
            e.cx,
            e.getStyles,
            e.getClassNames,
            e.getValue,
            e.hasValue,
            e.isMulti,
            e.isRtl,
            e.options,
            e.selectOption,
            e.selectProps,
            e.setValue,
            e.theme,
            _({}, F(e, zt))
          );
        },
        Wt = function (e, t, n) {
          var r = e.cx,
            o = e.getStyles,
            i = e.getClassNames,
            a = e.className;
          return { css: o(t, e), className: r(null != n ? n : {}, i(t, e), a) };
        };
      function Zt(e) {
        return (
          [document.documentElement, document.body, window].indexOf(e) > -1
        );
      }
      function Qt(e) {
        return Zt(e) ? window.pageYOffset : e.scrollTop;
      }
      function Gt(e, t) {
        Zt(e) ? window.scrollTo(0, t) : (e.scrollTop = t);
      }
      function $t(e, t, n, r) {
        return n * ((e = e / r - 1) * e * e + 1) + t;
      }
      function Xt(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 200,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ft,
          o = Qt(e),
          i = t - o,
          a = 10,
          s = 0;
        function l() {
          var t = $t((s += a), o, i, n);
          Gt(e, t), s < n ? window.requestAnimationFrame(l) : r(e);
        }
        l();
      }
      function qt(e, t) {
        var n = e.getBoundingClientRect(),
          r = t.getBoundingClientRect(),
          o = t.offsetHeight / 3;
        r.bottom + o > n.bottom
          ? Gt(
              e,
              Math.min(
                t.offsetTop + t.clientHeight - e.offsetHeight + o,
                e.scrollHeight
              )
            )
          : r.top - o < n.top && Gt(e, Math.max(t.offsetTop - o, 0));
      }
      function Kt() {
        try {
          return document.createEvent('TouchEvent'), !0;
        } catch (e) {
          return !1;
        }
      }
      var Jt = !1,
        en = {
          get passive() {
            return (Jt = !0);
          }
        },
        tn = 'undefined' != typeof window ? window : {};
      tn.addEventListener &&
        tn.removeEventListener &&
        (tn.addEventListener('p', Ft, en), tn.removeEventListener('p', Ft, !1));
      var nn = Jt;
      function rn(e) {
        return null != e;
      }
      function on(e, t, n) {
        return e ? t : n;
      }
      var an = function (e) {
          return 'auto' === e ? 'bottom' : e;
        },
        sn = (0, j.createContext)(null),
        ln = function (e) {
          var t = e.children,
            n = e.minMenuHeight,
            r = e.maxMenuHeight,
            o = e.menuPlacement,
            i = e.menuPosition,
            a = e.menuShouldScrollIntoView,
            s = e.theme,
            l = ((0, j.useContext)(sn) || {}).setPortalPlacement,
            c = (0, j.useRef)(null),
            u = z((0, j.useState)(r), 2),
            p = u[0],
            f = u[1],
            d = z((0, j.useState)(null), 2),
            m = d[0],
            h = d[1],
            y = s.spacing.controlHeight;
          return (
            Bt(
              function () {
                var e = c.current;
                if (e) {
                  var t = 'fixed' === i,
                    s = (function (e) {
                      var t = e.maxHeight,
                        n = e.menuEl,
                        r = e.minHeight,
                        o = e.placement,
                        i = e.shouldScroll,
                        a = e.isFixedPosition,
                        s = e.controlHeight,
                        l = (function (e) {
                          var t = getComputedStyle(e),
                            n = 'absolute' === t.position,
                            r = /(auto|scroll)/;
                          if ('fixed' === t.position)
                            return document.documentElement;
                          for (var o = e; (o = o.parentElement); )
                            if (
                              ((t = getComputedStyle(o)),
                              (!n || 'static' !== t.position) &&
                                r.test(t.overflow + t.overflowY + t.overflowX))
                            )
                              return o;
                          return document.documentElement;
                        })(n),
                        c = { placement: 'bottom', maxHeight: t };
                      if (!n || !n.offsetParent) return c;
                      var u,
                        p = l.getBoundingClientRect().height,
                        f = n.getBoundingClientRect(),
                        d = f.bottom,
                        m = f.height,
                        h = f.top,
                        y = n.offsetParent.getBoundingClientRect().top,
                        b =
                          a || Zt((u = l))
                            ? window.innerHeight
                            : u.clientHeight,
                        g = Qt(l),
                        v = parseInt(getComputedStyle(n).marginBottom, 10),
                        A = parseInt(getComputedStyle(n).marginTop, 10),
                        C = y - A,
                        w = b - h,
                        E = C + g,
                        x = p - g - h,
                        S = d - b + g + v,
                        O = g + h - A,
                        k = 160;
                      switch (o) {
                        case 'auto':
                        case 'bottom':
                          if (w >= m)
                            return { placement: 'bottom', maxHeight: t };
                          if (x >= m && !a)
                            return (
                              i && Xt(l, S, k),
                              { placement: 'bottom', maxHeight: t }
                            );
                          if ((!a && x >= r) || (a && w >= r))
                            return (
                              i && Xt(l, S, k),
                              {
                                placement: 'bottom',
                                maxHeight: a ? w - v : x - v
                              }
                            );
                          if ('auto' === o || a) {
                            var j = t,
                              T = a ? C : E;
                            return (
                              T >= r && (j = Math.min(T - v - s, t)),
                              { placement: 'top', maxHeight: j }
                            );
                          }
                          if ('bottom' === o)
                            return (
                              i && Gt(l, S),
                              { placement: 'bottom', maxHeight: t }
                            );
                          break;
                        case 'top':
                          if (C >= m) return { placement: 'top', maxHeight: t };
                          if (E >= m && !a)
                            return (
                              i && Xt(l, O, k),
                              { placement: 'top', maxHeight: t }
                            );
                          if ((!a && E >= r) || (a && C >= r)) {
                            var M = t;
                            return (
                              ((!a && E >= r) || (a && C >= r)) &&
                                (M = a ? C - A : E - A),
                              i && Xt(l, O, k),
                              { placement: 'top', maxHeight: M }
                            );
                          }
                          return { placement: 'bottom', maxHeight: t };
                        default:
                          throw new Error(
                            'Invalid placement provided "'.concat(o, '".')
                          );
                      }
                      return c;
                    })({
                      maxHeight: r,
                      menuEl: e,
                      minHeight: n,
                      placement: o,
                      shouldScroll: a && !t,
                      isFixedPosition: t,
                      controlHeight: y
                    });
                  f(s.maxHeight), h(s.placement), null == l || l(s.placement);
                }
              },
              [r, o, i, a, n, l, y]
            ),
            t({
              ref: c,
              placerProps: _(
                _({}, e),
                {},
                { placement: m || an(o), maxHeight: p }
              )
            })
          );
        },
        cn = function (e, t) {
          var n = e.theme,
            r = n.spacing.baseUnit,
            o = n.colors;
          return _(
            { textAlign: 'center' },
            t
              ? {}
              : {
                  color: o.neutral40,
                  padding: ''.concat(2 * r, 'px ').concat(3 * r, 'px')
                }
          );
        },
        un = cn,
        pn = cn,
        fn = function (e) {
          var t = e.children,
            n = e.innerProps;
          return gt(
            'div',
            U(
              {},
              Wt(e, 'noOptionsMessage', {
                'menu-notice': !0,
                'menu-notice--no-options': !0
              }),
              n
            ),
            t
          );
        };
      fn.defaultProps = { children: 'No options' };
      var dn = function (e) {
        var t = e.children,
          n = e.innerProps;
        return gt(
          'div',
          U(
            {},
            Wt(e, 'loadingMessage', {
              'menu-notice': !0,
              'menu-notice--loading': !0
            }),
            n
          ),
          t
        );
      };
      dn.defaultProps = { children: 'Loading...' };
      var mn,
        hn,
        yn,
        bn = ['size'],
        gn = {
          name: '8mmkcg',
          styles:
            'display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0'
        },
        vn = function (e) {
          var t = e.size,
            n = F(e, bn);
          return gt(
            'svg',
            U(
              {
                height: t,
                width: t,
                viewBox: '0 0 20 20',
                'aria-hidden': 'true',
                focusable: 'false',
                css: gn
              },
              n
            )
          );
        },
        An = function (e) {
          return gt(
            vn,
            U({ size: 20 }, e),
            gt('path', {
              d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'
            })
          );
        },
        Cn = function (e) {
          return gt(
            vn,
            U({ size: 20 }, e),
            gt('path', {
              d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'
            })
          );
        },
        wn = function (e, t) {
          var n = e.isFocused,
            r = e.theme,
            o = r.spacing.baseUnit,
            i = r.colors;
          return _(
            {
              label: 'indicatorContainer',
              display: 'flex',
              transition: 'color 150ms'
            },
            t
              ? {}
              : {
                  color: n ? i.neutral60 : i.neutral20,
                  padding: 2 * o,
                  ':hover': { color: n ? i.neutral80 : i.neutral40 }
                }
          );
        },
        En = wn,
        xn = wn,
        Sn = (function () {
          var e = vt.apply(void 0, arguments),
            t = 'animation-' + e.name;
          return {
            name: t,
            styles: '@keyframes ' + t + '{' + e.styles + '}',
            anim: 1,
            toString: function () {
              return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
            }
          };
        })(
          mn ||
            ((hn = [
              '\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n'
            ]),
            yn || (yn = hn.slice(0)),
            (mn = Object.freeze(
              Object.defineProperties(hn, { raw: { value: Object.freeze(yn) } })
            )))
        ),
        On = function (e) {
          var t = e.delay,
            n = e.offset;
          return gt('span', {
            css: vt(
              {
                animation: ''
                  .concat(Sn, ' 1s ease-in-out ')
                  .concat(t, 'ms infinite;'),
                backgroundColor: 'currentColor',
                borderRadius: '1em',
                display: 'inline-block',
                marginLeft: n ? '1em' : void 0,
                height: '1em',
                verticalAlign: 'top',
                width: '1em'
              },
              '',
              ''
            )
          });
        },
        kn = function (e) {
          var t = e.innerProps,
            n = e.isRtl;
          return gt(
            'div',
            U(
              {},
              Wt(e, 'loadingIndicator', {
                indicator: !0,
                'loading-indicator': !0
              }),
              t
            ),
            gt(On, { delay: 0, offset: n }),
            gt(On, { delay: 160, offset: !0 }),
            gt(On, { delay: 320, offset: !n })
          );
        };
      kn.defaultProps = { size: 4 };
      var jn = ['data'],
        Tn = ['innerRef', 'isDisabled', 'isHidden', 'inputClassName'],
        Mn = {
          gridArea: '1 / 2',
          font: 'inherit',
          minWidth: '2px',
          border: 0,
          margin: 0,
          outline: 0,
          padding: 0
        },
        In = {
          flex: '1 1 auto',
          display: 'inline-grid',
          gridArea: '1 / 1 / 2 / 3',
          gridTemplateColumns: '0 min-content',
          '&:after': _(
            {
              content: 'attr(data-value) " "',
              visibility: 'hidden',
              whiteSpace: 'pre'
            },
            Mn
          )
        },
        Rn = function (e) {
          return _(
            {
              label: 'input',
              color: 'inherit',
              background: 0,
              opacity: e ? 0 : 1,
              width: '100%'
            },
            Mn
          );
        },
        Pn = function (e) {
          var t = e.children,
            n = e.innerProps;
          return gt('div', n, t);
        },
        Nn = {
          ClearIndicator: function (e) {
            var t = e.children,
              n = e.innerProps;
            return gt(
              'div',
              U(
                {},
                Wt(e, 'clearIndicator', {
                  indicator: !0,
                  'clear-indicator': !0
                }),
                n
              ),
              t || gt(An, null)
            );
          },
          Control: function (e) {
            var t = e.children,
              n = e.isDisabled,
              r = e.isFocused,
              o = e.innerRef,
              i = e.innerProps,
              a = e.menuIsOpen;
            return gt(
              'div',
              U(
                { ref: o },
                Wt(e, 'control', {
                  control: !0,
                  'control--is-disabled': n,
                  'control--is-focused': r,
                  'control--menu-is-open': a
                }),
                i
              ),
              t
            );
          },
          DropdownIndicator: function (e) {
            var t = e.children,
              n = e.innerProps;
            return gt(
              'div',
              U(
                {},
                Wt(e, 'dropdownIndicator', {
                  indicator: !0,
                  'dropdown-indicator': !0
                }),
                n
              ),
              t || gt(Cn, null)
            );
          },
          DownChevron: Cn,
          CrossIcon: An,
          Group: function (e) {
            var t = e.children,
              n = e.cx,
              r = e.getStyles,
              o = e.getClassNames,
              i = e.Heading,
              a = e.headingProps,
              s = e.innerProps,
              l = e.label,
              c = e.theme,
              u = e.selectProps;
            return gt(
              'div',
              U({}, Wt(e, 'group', { group: !0 }), s),
              gt(
                i,
                U({}, a, {
                  selectProps: u,
                  theme: c,
                  getStyles: r,
                  getClassNames: o,
                  cx: n
                }),
                l
              ),
              gt('div', null, t)
            );
          },
          GroupHeading: function (e) {
            var t = Yt(e);
            t.data;
            var n = F(t, jn);
            return gt(
              'div',
              U({}, Wt(e, 'groupHeading', { 'group-heading': !0 }), n)
            );
          },
          IndicatorsContainer: function (e) {
            var t = e.children,
              n = e.innerProps;
            return gt(
              'div',
              U({}, Wt(e, 'indicatorsContainer', { indicators: !0 }), n),
              t
            );
          },
          IndicatorSeparator: function (e) {
            var t = e.innerProps;
            return gt(
              'span',
              U(
                {},
                t,
                Wt(e, 'indicatorSeparator', { 'indicator-separator': !0 })
              )
            );
          },
          Input: function (e) {
            var t = e.cx,
              n = e.value,
              r = Yt(e),
              o = r.innerRef,
              i = r.isDisabled,
              a = r.isHidden,
              s = r.inputClassName,
              l = F(r, Tn);
            return gt(
              'div',
              U({}, Wt(e, 'input', { 'input-container': !0 }), {
                'data-value': n || ''
              }),
              gt(
                'input',
                U(
                  {
                    className: t({ input: !0 }, s),
                    ref: o,
                    style: Rn(a),
                    disabled: i
                  },
                  l
                )
              )
            );
          },
          LoadingIndicator: kn,
          Menu: function (e) {
            var t = e.children,
              n = e.innerRef,
              r = e.innerProps;
            return gt(
              'div',
              U({}, Wt(e, 'menu', { menu: !0 }), { ref: n }, r),
              t
            );
          },
          MenuList: function (e) {
            var t = e.children,
              n = e.innerProps,
              r = e.innerRef,
              o = e.isMulti;
            return gt(
              'div',
              U(
                {},
                Wt(e, 'menuList', {
                  'menu-list': !0,
                  'menu-list--is-multi': o
                }),
                { ref: r },
                n
              ),
              t
            );
          },
          MenuPortal: function (e) {
            var t = e.appendTo,
              n = e.children,
              r = e.controlElement,
              o = e.innerProps,
              i = e.menuPlacement,
              a = e.menuPosition,
              s = (0, j.useRef)(null),
              l = (0, j.useRef)(null),
              c = z((0, j.useState)(an(i)), 2),
              u = c[0],
              p = c[1],
              f = (0, j.useMemo)(function () {
                return { setPortalPlacement: p };
              }, []),
              d = z((0, j.useState)(null), 2),
              m = d[0],
              h = d[1],
              y = (0, j.useCallback)(
                function () {
                  if (r) {
                    var e = (function (e) {
                        var t = e.getBoundingClientRect();
                        return {
                          bottom: t.bottom,
                          height: t.height,
                          left: t.left,
                          right: t.right,
                          top: t.top,
                          width: t.width
                        };
                      })(r),
                      t = 'fixed' === a ? 0 : window.pageYOffset,
                      n = e[u] + t;
                    (n === (null == m ? void 0 : m.offset) &&
                      e.left === (null == m ? void 0 : m.rect.left) &&
                      e.width === (null == m ? void 0 : m.rect.width)) ||
                      h({ offset: n, rect: e });
                  }
                },
                [
                  r,
                  a,
                  u,
                  null == m ? void 0 : m.offset,
                  null == m ? void 0 : m.rect.left,
                  null == m ? void 0 : m.rect.width
                ]
              );
            Bt(
              function () {
                y();
              },
              [y]
            );
            var b = (0, j.useCallback)(
              function () {
                'function' == typeof l.current &&
                  (l.current(), (l.current = null)),
                  r &&
                    s.current &&
                    (l.current = (function (e, t, n, r) {
                      void 0 === r && (r = {});
                      const {
                          ancestorScroll: o = !0,
                          ancestorResize: i = !0,
                          elementResize: a = !0,
                          animationFrame: s = !1
                        } = r,
                        l = o && !s,
                        c =
                          l || i
                            ? [
                                ...(Ot(e)
                                  ? Dt(e)
                                  : e.contextElement
                                  ? Dt(e.contextElement)
                                  : []),
                                ...Dt(t)
                              ]
                            : [];
                      c.forEach((e) => {
                        l && e.addEventListener('scroll', n, { passive: !0 }),
                          i && e.addEventListener('resize', n);
                      });
                      let u,
                        p = null;
                      if (a) {
                        let r = !0;
                        (p = new ResizeObserver(() => {
                          r || n(), (r = !1);
                        })),
                          Ot(e) && !s && p.observe(e),
                          Ot(e) ||
                            !e.contextElement ||
                            s ||
                            p.observe(e.contextElement),
                          p.observe(t);
                      }
                      let f = s ? Nt(e) : null;
                      return (
                        s &&
                          (function t() {
                            const r = Nt(e);
                            !f ||
                              (r.x === f.x &&
                                r.y === f.y &&
                                r.width === f.width &&
                                r.height === f.height) ||
                              n(),
                              (f = r),
                              (u = requestAnimationFrame(t));
                          })(),
                        n(),
                        () => {
                          var e;
                          c.forEach((e) => {
                            l && e.removeEventListener('scroll', n),
                              i && e.removeEventListener('resize', n);
                          }),
                            null == (e = p) || e.disconnect(),
                            (p = null),
                            s && cancelAnimationFrame(u);
                        }
                      );
                    })(r, s.current, y, {
                      elementResize: 'ResizeObserver' in window
                    }));
              },
              [r, y]
            );
            Bt(
              function () {
                b();
              },
              [b]
            );
            var g = (0, j.useCallback)(
              function (e) {
                (s.current = e), b();
              },
              [b]
            );
            if ((!t && 'fixed' !== a) || !m) return null;
            var v = gt(
              'div',
              U(
                { ref: g },
                Wt(
                  _(
                    _({}, e),
                    {},
                    { offset: m.offset, position: a, rect: m.rect }
                  ),
                  'menuPortal',
                  { 'menu-portal': !0 }
                ),
                o
              ),
              n
            );
            return gt(
              sn.Provider,
              { value: f },
              t ? (0, At.createPortal)(v, t) : v
            );
          },
          LoadingMessage: dn,
          NoOptionsMessage: fn,
          MultiValue: function (e) {
            var t = e.children,
              n = e.components,
              r = e.data,
              o = e.innerProps,
              i = e.isDisabled,
              a = e.removeProps,
              s = e.selectProps,
              l = n.Container,
              c = n.Label,
              u = n.Remove;
            return gt(
              l,
              {
                data: r,
                innerProps: _(
                  _(
                    {},
                    Wt(e, 'multiValue', {
                      'multi-value': !0,
                      'multi-value--is-disabled': i
                    })
                  ),
                  o
                ),
                selectProps: s
              },
              gt(
                c,
                {
                  data: r,
                  innerProps: _(
                    {},
                    Wt(e, 'multiValueLabel', { 'multi-value__label': !0 })
                  ),
                  selectProps: s
                },
                t
              ),
              gt(u, {
                data: r,
                innerProps: _(
                  _(
                    {},
                    Wt(e, 'multiValueRemove', { 'multi-value__remove': !0 })
                  ),
                  {},
                  { 'aria-label': 'Remove '.concat(t || 'option') },
                  a
                ),
                selectProps: s
              })
            );
          },
          MultiValueContainer: Pn,
          MultiValueLabel: Pn,
          MultiValueRemove: function (e) {
            var t = e.children,
              n = e.innerProps;
            return gt(
              'div',
              U({ role: 'button' }, n),
              t || gt(An, { size: 14 })
            );
          },
          Option: function (e) {
            var t = e.children,
              n = e.isDisabled,
              r = e.isFocused,
              o = e.isSelected,
              i = e.innerRef,
              a = e.innerProps;
            return gt(
              'div',
              U(
                {},
                Wt(e, 'option', {
                  option: !0,
                  'option--is-disabled': n,
                  'option--is-focused': r,
                  'option--is-selected': o
                }),
                { ref: i, 'aria-disabled': n },
                a
              ),
              t
            );
          },
          Placeholder: function (e) {
            var t = e.children,
              n = e.innerProps;
            return gt(
              'div',
              U({}, Wt(e, 'placeholder', { placeholder: !0 }), n),
              t
            );
          },
          SelectContainer: function (e) {
            var t = e.children,
              n = e.innerProps,
              r = e.isDisabled,
              o = e.isRtl;
            return gt(
              'div',
              U(
                {},
                Wt(e, 'container', { '--is-disabled': r, '--is-rtl': o }),
                n
              ),
              t
            );
          },
          SingleValue: function (e) {
            var t = e.children,
              n = e.isDisabled,
              r = e.innerProps;
            return gt(
              'div',
              U(
                {},
                Wt(e, 'singleValue', {
                  'single-value': !0,
                  'single-value--is-disabled': n
                }),
                r
              ),
              t
            );
          },
          ValueContainer: function (e) {
            var t = e.children,
              n = e.innerProps,
              r = e.isMulti,
              o = e.hasValue;
            return gt(
              'div',
              U(
                {},
                Wt(e, 'valueContainer', {
                  'value-container': !0,
                  'value-container--is-multi': r,
                  'value-container--has-value': o
                }),
                n
              ),
              t
            );
          }
        },
        Ln =
          Number.isNaN ||
          function (e) {
            return 'number' == typeof e && e != e;
          };
      function _n(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (!((r = e[n]) === (o = t[n]) || (Ln(r) && Ln(o)))) return !1;
        var r, o;
        return !0;
      }
      for (
        var Dn = {
            name: '7pg0cj-a11yText',
            styles:
              'label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap'
          },
          Bn = function (e) {
            return gt('span', U({ css: Dn }, e));
          },
          zn = {
            guidance: function (e) {
              var t = e.isSearchable,
                n = e.isMulti,
                r = e.isDisabled,
                o = e.tabSelectsValue;
              switch (e.context) {
                case 'menu':
                  return 'Use Up and Down to choose options'
                    .concat(
                      r
                        ? ''
                        : ', press Enter to select the currently focused option',
                      ', press Escape to exit the menu'
                    )
                    .concat(
                      o
                        ? ', press Tab to select the option and exit the menu'
                        : '',
                      '.'
                    );
                case 'input':
                  return ''
                    .concat(e['aria-label'] || 'Select', ' is focused ')
                    .concat(
                      t ? ',type to refine list' : '',
                      ', press Down to open the menu, '
                    )
                    .concat(n ? ' press left to focus selected values' : '');
                case 'value':
                  return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
                default:
                  return '';
              }
            },
            onChange: function (e) {
              var t = e.action,
                n = e.label,
                r = void 0 === n ? '' : n,
                o = e.labels,
                i = e.isDisabled;
              switch (t) {
                case 'deselect-option':
                case 'pop-value':
                case 'remove-value':
                  return 'option '.concat(r, ', deselected.');
                case 'clear':
                  return 'All selected options have been cleared.';
                case 'initial-input-focus':
                  return 'option'
                    .concat(o.length > 1 ? 's' : '', ' ')
                    .concat(o.join(','), ', selected.');
                case 'select-option':
                  return 'option '.concat(
                    r,
                    i ? ' is disabled. Select another option.' : ', selected.'
                  );
                default:
                  return '';
              }
            },
            onFocus: function (e) {
              var t = e.context,
                n = e.focused,
                r = e.options,
                o = e.label,
                i = void 0 === o ? '' : o,
                a = e.selectValue,
                s = e.isDisabled,
                l = e.isSelected,
                c = function (e, t) {
                  return e && e.length
                    ? ''.concat(e.indexOf(t) + 1, ' of ').concat(e.length)
                    : '';
                };
              if ('value' === t && a)
                return 'value '.concat(i, ' focused, ').concat(c(a, n), '.');
              if ('menu' === t) {
                var u = s ? ' disabled' : '',
                  p = ''.concat(l ? 'selected' : 'focused').concat(u);
                return 'option '
                  .concat(i, ' ')
                  .concat(p, ', ')
                  .concat(c(r, n), '.');
              }
              return '';
            },
            onFilter: function (e) {
              var t = e.inputValue,
                n = e.resultsMessage;
              return ''.concat(n).concat(t ? ' for search term ' + t : '', '.');
            }
          },
          Fn = function (e) {
            var t = e.ariaSelection,
              n = e.focusedOption,
              r = e.focusedValue,
              o = e.focusableOptions,
              i = e.isFocused,
              a = e.selectValue,
              s = e.selectProps,
              l = e.id,
              c = s.ariaLiveMessages,
              u = s.getOptionLabel,
              p = s.inputValue,
              f = s.isMulti,
              d = s.isOptionDisabled,
              m = s.isSearchable,
              h = s.menuIsOpen,
              y = s.options,
              b = s.screenReaderStatus,
              g = s.tabSelectsValue,
              v = s['aria-label'],
              A = s['aria-live'],
              C = (0, j.useMemo)(
                function () {
                  return _(_({}, zn), c || {});
                },
                [c]
              ),
              w = (0, j.useMemo)(
                function () {
                  var e,
                    n = '';
                  if (t && C.onChange) {
                    var r = t.option,
                      o = t.options,
                      i = t.removedValue,
                      s = t.removedValues,
                      l = t.value,
                      c = i || r || ((e = l), Array.isArray(e) ? null : e),
                      p = c ? u(c) : '',
                      f = o || s || void 0,
                      m = f ? f.map(u) : [],
                      h = _(
                        { isDisabled: c && d(c, a), label: p, labels: m },
                        t
                      );
                    n = C.onChange(h);
                  }
                  return n;
                },
                [t, C, d, a, u]
              ),
              E = (0, j.useMemo)(
                function () {
                  var e = '',
                    t = n || r,
                    i = !!(n && a && a.includes(n));
                  if (t && C.onFocus) {
                    var s = {
                      focused: t,
                      label: u(t),
                      isDisabled: d(t, a),
                      isSelected: i,
                      options: o,
                      context: t === n ? 'menu' : 'value',
                      selectValue: a
                    };
                    e = C.onFocus(s);
                  }
                  return e;
                },
                [n, r, u, d, C, o, a]
              ),
              x = (0, j.useMemo)(
                function () {
                  var e = '';
                  if (h && y.length && C.onFilter) {
                    var t = b({ count: o.length });
                    e = C.onFilter({ inputValue: p, resultsMessage: t });
                  }
                  return e;
                },
                [o, p, h, C, y, b]
              ),
              S = (0, j.useMemo)(
                function () {
                  var e = '';
                  if (C.guidance) {
                    var t = r ? 'value' : h ? 'menu' : 'input';
                    e = C.guidance({
                      'aria-label': v,
                      context: t,
                      isDisabled: n && d(n, a),
                      isMulti: f,
                      isSearchable: m,
                      tabSelectsValue: g
                    });
                  }
                  return e;
                },
                [v, n, r, f, d, m, h, C, a, g]
              ),
              O = ''.concat(E, ' ').concat(x, ' ').concat(S),
              k = gt(
                j.Fragment,
                null,
                gt('span', { id: 'aria-selection' }, w),
                gt('span', { id: 'aria-context' }, O)
              ),
              T = 'initial-input-focus' === (null == t ? void 0 : t.action);
            return gt(
              j.Fragment,
              null,
              gt(Bn, { id: l }, T && k),
              gt(
                Bn,
                {
                  'aria-live': A,
                  'aria-atomic': 'false',
                  'aria-relevant': 'additions text'
                },
                i && !T && k
              )
            );
          },
          Hn = [
            { base: 'A', letters: 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ' },
            { base: 'AA', letters: 'Ꜳ' },
            { base: 'AE', letters: 'ÆǼǢ' },
            { base: 'AO', letters: 'Ꜵ' },
            { base: 'AU', letters: 'Ꜷ' },
            { base: 'AV', letters: 'ꜸꜺ' },
            { base: 'AY', letters: 'Ꜽ' },
            { base: 'B', letters: 'BⒷＢḂḄḆɃƂƁ' },
            { base: 'C', letters: 'CⒸＣĆĈĊČÇḈƇȻꜾ' },
            { base: 'D', letters: 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ' },
            { base: 'DZ', letters: 'ǱǄ' },
            { base: 'Dz', letters: 'ǲǅ' },
            { base: 'E', letters: 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ' },
            { base: 'F', letters: 'FⒻＦḞƑꝻ' },
            { base: 'G', letters: 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ' },
            { base: 'H', letters: 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ' },
            { base: 'I', letters: 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ' },
            { base: 'J', letters: 'JⒿＪĴɈ' },
            { base: 'K', letters: 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ' },
            { base: 'L', letters: 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ' },
            { base: 'LJ', letters: 'Ǉ' },
            { base: 'Lj', letters: 'ǈ' },
            { base: 'M', letters: 'MⓂＭḾṀṂⱮƜ' },
            { base: 'N', letters: 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ' },
            { base: 'NJ', letters: 'Ǌ' },
            { base: 'Nj', letters: 'ǋ' },
            {
              base: 'O',
              letters: 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ'
            },
            { base: 'OI', letters: 'Ƣ' },
            { base: 'OO', letters: 'Ꝏ' },
            { base: 'OU', letters: 'Ȣ' },
            { base: 'P', letters: 'PⓅＰṔṖƤⱣꝐꝒꝔ' },
            { base: 'Q', letters: 'QⓆＱꝖꝘɊ' },
            { base: 'R', letters: 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ' },
            { base: 'S', letters: 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ' },
            { base: 'T', letters: 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ' },
            { base: 'TZ', letters: 'Ꜩ' },
            { base: 'U', letters: 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ' },
            { base: 'V', letters: 'VⓋＶṼṾƲꝞɅ' },
            { base: 'VY', letters: 'Ꝡ' },
            { base: 'W', letters: 'WⓌＷẀẂŴẆẄẈⱲ' },
            { base: 'X', letters: 'XⓍＸẊẌ' },
            { base: 'Y', letters: 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ' },
            { base: 'Z', letters: 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ' },
            { base: 'a', letters: 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ' },
            { base: 'aa', letters: 'ꜳ' },
            { base: 'ae', letters: 'æǽǣ' },
            { base: 'ao', letters: 'ꜵ' },
            { base: 'au', letters: 'ꜷ' },
            { base: 'av', letters: 'ꜹꜻ' },
            { base: 'ay', letters: 'ꜽ' },
            { base: 'b', letters: 'bⓑｂḃḅḇƀƃɓ' },
            { base: 'c', letters: 'cⓒｃćĉċčçḉƈȼꜿↄ' },
            { base: 'd', letters: 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ' },
            { base: 'dz', letters: 'ǳǆ' },
            { base: 'e', letters: 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ' },
            { base: 'f', letters: 'fⓕｆḟƒꝼ' },
            { base: 'g', letters: 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ' },
            { base: 'h', letters: 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ' },
            { base: 'hv', letters: 'ƕ' },
            { base: 'i', letters: 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı' },
            { base: 'j', letters: 'jⓙｊĵǰɉ' },
            { base: 'k', letters: 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ' },
            { base: 'l', letters: 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ' },
            { base: 'lj', letters: 'ǉ' },
            { base: 'm', letters: 'mⓜｍḿṁṃɱɯ' },
            { base: 'n', letters: 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ' },
            { base: 'nj', letters: 'ǌ' },
            {
              base: 'o',
              letters: 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ'
            },
            { base: 'oi', letters: 'ƣ' },
            { base: 'ou', letters: 'ȣ' },
            { base: 'oo', letters: 'ꝏ' },
            { base: 'p', letters: 'pⓟｐṕṗƥᵽꝑꝓꝕ' },
            { base: 'q', letters: 'qⓠｑɋꝗꝙ' },
            { base: 'r', letters: 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ' },
            { base: 's', letters: 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ' },
            { base: 't', letters: 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ' },
            { base: 'tz', letters: 'ꜩ' },
            { base: 'u', letters: 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ' },
            { base: 'v', letters: 'vⓥｖṽṿʋꝟʌ' },
            { base: 'vy', letters: 'ꝡ' },
            { base: 'w', letters: 'wⓦｗẁẃŵẇẅẘẉⱳ' },
            { base: 'x', letters: 'xⓧｘẋẍ' },
            { base: 'y', letters: 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ' },
            { base: 'z', letters: 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ' }
          ],
          Un = new RegExp(
            '[' +
              Hn.map(function (e) {
                return e.letters;
              }).join('') +
              ']',
            'g'
          ),
          Vn = {},
          Yn = 0;
        Yn < Hn.length;
        Yn++
      )
        for (var Wn = Hn[Yn], Zn = 0; Zn < Wn.letters.length; Zn++)
          Vn[Wn.letters[Zn]] = Wn.base;
      var Qn = function (e) {
          return e.replace(Un, function (e) {
            return Vn[e];
          });
        },
        Gn = (function (e, t) {
          void 0 === t && (t = _n);
          var n = null;
          function r() {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            if (n && n.lastThis === this && t(r, n.lastArgs))
              return n.lastResult;
            var i = e.apply(this, r);
            return (n = { lastResult: i, lastArgs: r, lastThis: this }), i;
          }
          return (
            (r.clear = function () {
              n = null;
            }),
            r
          );
        })(Qn),
        $n = function (e) {
          return e.replace(/^\s+|\s+$/g, '');
        },
        Xn = function (e) {
          return ''.concat(e.label, ' ').concat(e.value);
        },
        qn = ['innerRef'];
      function Kn(e) {
        var t = e.innerRef,
          n = (function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o = Object.entries(e).filter(function (e) {
              var t = z(e, 1)[0];
              return !n.includes(t);
            });
            return o.reduce(function (e, t) {
              var n = z(t, 2),
                r = n[0],
                o = n[1];
              return (e[r] = o), e;
            }, {});
          })(F(e, qn), 'onExited', 'in', 'enter', 'exit', 'appear');
        return gt(
          'input',
          U({ ref: t }, n, {
            css: vt(
              {
                label: 'dummyInput',
                background: 0,
                border: 0,
                caretColor: 'transparent',
                fontSize: 'inherit',
                gridArea: '1 / 1 / 2 / 3',
                outline: 0,
                padding: 0,
                width: 1,
                color: 'transparent',
                left: -100,
                opacity: 0,
                position: 'relative',
                transform: 'scale(.01)'
              },
              '',
              ''
            )
          })
        );
      }
      var Jn = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'],
        er = {
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
          height: '100%'
        };
      function tr(e) {
        e.preventDefault();
      }
      function nr(e) {
        e.stopPropagation();
      }
      function rr() {
        var e = this.scrollTop,
          t = this.scrollHeight,
          n = e + this.offsetHeight;
        0 === e ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
      }
      function or() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
      }
      var ir = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        ar = 0,
        sr = { capture: !1, passive: !1 },
        lr = function () {
          return document.activeElement && document.activeElement.blur();
        },
        cr = {
          name: '1kfdb0e',
          styles: 'position:fixed;left:0;bottom:0;right:0;top:0'
        };
      function ur(e) {
        var t = e.children,
          n = e.lockEnabled,
          r = e.captureEnabled,
          o = (function (e) {
            var t = e.isEnabled,
              n = e.onBottomArrive,
              r = e.onBottomLeave,
              o = e.onTopArrive,
              i = e.onTopLeave,
              a = (0, j.useRef)(!1),
              s = (0, j.useRef)(!1),
              l = (0, j.useRef)(0),
              c = (0, j.useRef)(null),
              u = (0, j.useCallback)(
                function (e, t) {
                  if (null !== c.current) {
                    var l = c.current,
                      u = l.scrollTop,
                      p = l.scrollHeight,
                      f = l.clientHeight,
                      d = c.current,
                      m = t > 0,
                      h = p - f - u,
                      y = !1;
                    h > t && a.current && (r && r(e), (a.current = !1)),
                      m && s.current && (i && i(e), (s.current = !1)),
                      m && t > h
                        ? (n && !a.current && n(e),
                          (d.scrollTop = p),
                          (y = !0),
                          (a.current = !0))
                        : !m &&
                          -t > u &&
                          (o && !s.current && o(e),
                          (d.scrollTop = 0),
                          (y = !0),
                          (s.current = !0)),
                      y &&
                        (function (e) {
                          e.preventDefault(), e.stopPropagation();
                        })(e);
                  }
                },
                [n, r, o, i]
              ),
              p = (0, j.useCallback)(
                function (e) {
                  u(e, e.deltaY);
                },
                [u]
              ),
              f = (0, j.useCallback)(function (e) {
                l.current = e.changedTouches[0].clientY;
              }, []),
              d = (0, j.useCallback)(
                function (e) {
                  var t = l.current - e.changedTouches[0].clientY;
                  u(e, t);
                },
                [u]
              ),
              m = (0, j.useCallback)(
                function (e) {
                  if (e) {
                    var t = !!nn && { passive: !1 };
                    e.addEventListener('wheel', p, t),
                      e.addEventListener('touchstart', f, t),
                      e.addEventListener('touchmove', d, t);
                  }
                },
                [d, f, p]
              ),
              h = (0, j.useCallback)(
                function (e) {
                  e &&
                    (e.removeEventListener('wheel', p, !1),
                    e.removeEventListener('touchstart', f, !1),
                    e.removeEventListener('touchmove', d, !1));
                },
                [d, f, p]
              );
            return (
              (0, j.useEffect)(
                function () {
                  if (t) {
                    var e = c.current;
                    return (
                      m(e),
                      function () {
                        h(e);
                      }
                    );
                  }
                },
                [t, m, h]
              ),
              function (e) {
                c.current = e;
              }
            );
          })({
            isEnabled: void 0 === r || r,
            onBottomArrive: e.onBottomArrive,
            onBottomLeave: e.onBottomLeave,
            onTopArrive: e.onTopArrive,
            onTopLeave: e.onTopLeave
          }),
          i = (function (e) {
            var t = e.isEnabled,
              n = e.accountForScrollbars,
              r = void 0 === n || n,
              o = (0, j.useRef)({}),
              i = (0, j.useRef)(null),
              a = (0, j.useCallback)(
                function (e) {
                  if (ir) {
                    var t = document.body,
                      n = t && t.style;
                    if (
                      (r &&
                        Jn.forEach(function (e) {
                          var t = n && n[e];
                          o.current[e] = t;
                        }),
                      r && ar < 1)
                    ) {
                      var i = parseInt(o.current.paddingRight, 10) || 0,
                        a = document.body ? document.body.clientWidth : 0,
                        s = window.innerWidth - a + i || 0;
                      Object.keys(er).forEach(function (e) {
                        var t = er[e];
                        n && (n[e] = t);
                      }),
                        n && (n.paddingRight = ''.concat(s, 'px'));
                    }
                    t &&
                      or() &&
                      (t.addEventListener('touchmove', tr, sr),
                      e &&
                        (e.addEventListener('touchstart', rr, sr),
                        e.addEventListener('touchmove', nr, sr))),
                      (ar += 1);
                  }
                },
                [r]
              ),
              s = (0, j.useCallback)(
                function (e) {
                  if (ir) {
                    var t = document.body,
                      n = t && t.style;
                    (ar = Math.max(ar - 1, 0)),
                      r &&
                        ar < 1 &&
                        Jn.forEach(function (e) {
                          var t = o.current[e];
                          n && (n[e] = t);
                        }),
                      t &&
                        or() &&
                        (t.removeEventListener('touchmove', tr, sr),
                        e &&
                          (e.removeEventListener('touchstart', rr, sr),
                          e.removeEventListener('touchmove', nr, sr)));
                  }
                },
                [r]
              );
            return (
              (0, j.useEffect)(
                function () {
                  if (t) {
                    var e = i.current;
                    return (
                      a(e),
                      function () {
                        s(e);
                      }
                    );
                  }
                },
                [t, a, s]
              ),
              function (e) {
                i.current = e;
              }
            );
          })({ isEnabled: n });
        return gt(
          j.Fragment,
          null,
          n && gt('div', { onClick: lr, css: cr }),
          t(function (e) {
            o(e), i(e);
          })
        );
      }
      var pr = {
          name: '1a0ro4n-requiredInput',
          styles:
            'label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%'
        },
        fr = function (e) {
          var t = e.name,
            n = e.onFocus;
          return gt('input', {
            required: !0,
            name: t,
            tabIndex: -1,
            onFocus: n,
            css: pr,
            value: '',
            onChange: function () {}
          });
        },
        dr = {
          clearIndicator: xn,
          container: function (e) {
            var t = e.isDisabled;
            return {
              label: 'container',
              direction: e.isRtl ? 'rtl' : void 0,
              pointerEvents: t ? 'none' : void 0,
              position: 'relative'
            };
          },
          control: function (e, t) {
            var n = e.isDisabled,
              r = e.isFocused,
              o = e.theme,
              i = o.colors,
              a = o.borderRadius;
            return _(
              {
                label: 'control',
                alignItems: 'center',
                cursor: 'default',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                minHeight: o.spacing.controlHeight,
                outline: '0 !important',
                position: 'relative',
                transition: 'all 100ms'
              },
              t
                ? {}
                : {
                    backgroundColor: n ? i.neutral5 : i.neutral0,
                    borderColor: n ? i.neutral10 : r ? i.primary : i.neutral20,
                    borderRadius: a,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    boxShadow: r ? '0 0 0 1px '.concat(i.primary) : void 0,
                    '&:hover': { borderColor: r ? i.primary : i.neutral30 }
                  }
            );
          },
          dropdownIndicator: En,
          group: function (e, t) {
            var n = e.theme.spacing;
            return t
              ? {}
              : { paddingBottom: 2 * n.baseUnit, paddingTop: 2 * n.baseUnit };
          },
          groupHeading: function (e, t) {
            var n = e.theme,
              r = n.colors,
              o = n.spacing;
            return _(
              { label: 'group', cursor: 'default', display: 'block' },
              t
                ? {}
                : {
                    color: r.neutral40,
                    fontSize: '75%',
                    fontWeight: 500,
                    marginBottom: '0.25em',
                    paddingLeft: 3 * o.baseUnit,
                    paddingRight: 3 * o.baseUnit,
                    textTransform: 'uppercase'
                  }
            );
          },
          indicatorsContainer: function () {
            return {
              alignItems: 'center',
              alignSelf: 'stretch',
              display: 'flex',
              flexShrink: 0
            };
          },
          indicatorSeparator: function (e, t) {
            var n = e.isDisabled,
              r = e.theme,
              o = r.spacing.baseUnit,
              i = r.colors;
            return _(
              { label: 'indicatorSeparator', alignSelf: 'stretch', width: 1 },
              t
                ? {}
                : {
                    backgroundColor: n ? i.neutral10 : i.neutral20,
                    marginBottom: 2 * o,
                    marginTop: 2 * o
                  }
            );
          },
          input: function (e, t) {
            var n = e.isDisabled,
              r = e.value,
              o = e.theme,
              i = o.spacing,
              a = o.colors;
            return _(
              _(
                {
                  visibility: n ? 'hidden' : 'visible',
                  transform: r ? 'translateZ(0)' : ''
                },
                In
              ),
              t
                ? {}
                : {
                    margin: i.baseUnit / 2,
                    paddingBottom: i.baseUnit / 2,
                    paddingTop: i.baseUnit / 2,
                    color: a.neutral80
                  }
            );
          },
          loadingIndicator: function (e, t) {
            var n = e.isFocused,
              r = e.size,
              o = e.theme,
              i = o.colors,
              a = o.spacing.baseUnit;
            return _(
              {
                label: 'loadingIndicator',
                display: 'flex',
                transition: 'color 150ms',
                alignSelf: 'center',
                fontSize: r,
                lineHeight: 1,
                marginRight: r,
                textAlign: 'center',
                verticalAlign: 'middle'
              },
              t ? {} : { color: n ? i.neutral60 : i.neutral20, padding: 2 * a }
            );
          },
          loadingMessage: pn,
          menu: function (e, t) {
            var n,
              r = e.placement,
              o = e.theme,
              i = o.borderRadius,
              a = o.spacing,
              s = o.colors;
            return _(
              (N(
                (n = { label: 'menu' }),
                (function (e) {
                  return e ? { bottom: 'top', top: 'bottom' }[e] : 'bottom';
                })(r),
                '100%'
              ),
              N(n, 'position', 'absolute'),
              N(n, 'width', '100%'),
              N(n, 'zIndex', 1),
              n),
              t
                ? {}
                : {
                    backgroundColor: s.neutral0,
                    borderRadius: i,
                    boxShadow:
                      '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
                    marginBottom: a.menuGutter,
                    marginTop: a.menuGutter
                  }
            );
          },
          menuList: function (e, t) {
            var n = e.maxHeight,
              r = e.theme.spacing.baseUnit;
            return _(
              {
                maxHeight: n,
                overflowY: 'auto',
                position: 'relative',
                WebkitOverflowScrolling: 'touch'
              },
              t ? {} : { paddingBottom: r, paddingTop: r }
            );
          },
          menuPortal: function (e) {
            var t = e.rect,
              n = e.offset,
              r = e.position;
            return {
              left: t.left,
              position: r,
              top: n,
              width: t.width,
              zIndex: 1
            };
          },
          multiValue: function (e, t) {
            var n = e.theme,
              r = n.spacing,
              o = n.borderRadius,
              i = n.colors;
            return _(
              { label: 'multiValue', display: 'flex', minWidth: 0 },
              t
                ? {}
                : {
                    backgroundColor: i.neutral10,
                    borderRadius: o / 2,
                    margin: r.baseUnit / 2
                  }
            );
          },
          multiValueLabel: function (e, t) {
            var n = e.theme,
              r = n.borderRadius,
              o = n.colors,
              i = e.cropWithEllipsis;
            return _(
              {
                overflow: 'hidden',
                textOverflow: i || void 0 === i ? 'ellipsis' : void 0,
                whiteSpace: 'nowrap'
              },
              t
                ? {}
                : {
                    borderRadius: r / 2,
                    color: o.neutral80,
                    fontSize: '85%',
                    padding: 3,
                    paddingLeft: 6
                  }
            );
          },
          multiValueRemove: function (e, t) {
            var n = e.theme,
              r = n.spacing,
              o = n.borderRadius,
              i = n.colors,
              a = e.isFocused;
            return _(
              { alignItems: 'center', display: 'flex' },
              t
                ? {}
                : {
                    borderRadius: o / 2,
                    backgroundColor: a ? i.dangerLight : void 0,
                    paddingLeft: r.baseUnit,
                    paddingRight: r.baseUnit,
                    ':hover': {
                      backgroundColor: i.dangerLight,
                      color: i.danger
                    }
                  }
            );
          },
          noOptionsMessage: un,
          option: function (e, t) {
            var n = e.isDisabled,
              r = e.isFocused,
              o = e.isSelected,
              i = e.theme,
              a = i.spacing,
              s = i.colors;
            return _(
              {
                label: 'option',
                cursor: 'default',
                display: 'block',
                fontSize: 'inherit',
                width: '100%',
                userSelect: 'none',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
              },
              t
                ? {}
                : {
                    backgroundColor: o
                      ? s.primary
                      : r
                      ? s.primary25
                      : 'transparent',
                    color: n ? s.neutral20 : o ? s.neutral0 : 'inherit',
                    padding: ''
                      .concat(2 * a.baseUnit, 'px ')
                      .concat(3 * a.baseUnit, 'px'),
                    ':active': {
                      backgroundColor: n ? void 0 : o ? s.primary : s.primary50
                    }
                  }
            );
          },
          placeholder: function (e, t) {
            var n = e.theme,
              r = n.spacing,
              o = n.colors;
            return _(
              { label: 'placeholder', gridArea: '1 / 1 / 2 / 3' },
              t
                ? {}
                : {
                    color: o.neutral50,
                    marginLeft: r.baseUnit / 2,
                    marginRight: r.baseUnit / 2
                  }
            );
          },
          singleValue: function (e, t) {
            var n = e.isDisabled,
              r = e.theme,
              o = r.spacing,
              i = r.colors;
            return _(
              {
                label: 'singleValue',
                gridArea: '1 / 1 / 2 / 3',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              },
              t
                ? {}
                : {
                    color: n ? i.neutral40 : i.neutral80,
                    marginLeft: o.baseUnit / 2,
                    marginRight: o.baseUnit / 2
                  }
            );
          },
          valueContainer: function (e, t) {
            var n = e.theme.spacing,
              r = e.isMulti,
              o = e.hasValue,
              i = e.selectProps.controlShouldRenderValue;
            return _(
              {
                alignItems: 'center',
                display: r && o && i ? 'flex' : 'grid',
                flex: 1,
                flexWrap: 'wrap',
                WebkitOverflowScrolling: 'touch',
                position: 'relative',
                overflow: 'hidden'
              },
              t
                ? {}
                : {
                    padding: ''
                      .concat(n.baseUnit / 2, 'px ')
                      .concat(2 * n.baseUnit, 'px')
                  }
            );
          }
        },
        mr = {
          borderRadius: 4,
          colors: {
            primary: '#2684FF',
            primary75: '#4C9AFF',
            primary50: '#B2D4FF',
            primary25: '#DEEBFF',
            danger: '#DE350B',
            dangerLight: '#FFBDAD',
            neutral0: 'hsl(0, 0%, 100%)',
            neutral5: 'hsl(0, 0%, 95%)',
            neutral10: 'hsl(0, 0%, 90%)',
            neutral20: 'hsl(0, 0%, 80%)',
            neutral30: 'hsl(0, 0%, 70%)',
            neutral40: 'hsl(0, 0%, 60%)',
            neutral50: 'hsl(0, 0%, 50%)',
            neutral60: 'hsl(0, 0%, 40%)',
            neutral70: 'hsl(0, 0%, 30%)',
            neutral80: 'hsl(0, 0%, 20%)',
            neutral90: 'hsl(0, 0%, 10%)'
          },
          spacing: { baseUnit: 4, controlHeight: 38, menuGutter: 8 }
        },
        hr = {
          'aria-live': 'polite',
          backspaceRemovesValue: !0,
          blurInputOnSelect: Kt(),
          captureMenuScroll: !Kt(),
          classNames: {},
          closeMenuOnSelect: !0,
          closeMenuOnScroll: !1,
          components: {},
          controlShouldRenderValue: !0,
          escapeClearsValue: !1,
          filterOption: function (e, t) {
            if (e.data.__isNew__) return !0;
            var n = _(
                {
                  ignoreCase: !0,
                  ignoreAccents: !0,
                  stringify: Xn,
                  trim: !0,
                  matchFrom: 'any'
                },
                undefined
              ),
              r = n.ignoreCase,
              o = n.ignoreAccents,
              i = n.stringify,
              a = n.trim,
              s = n.matchFrom,
              l = a ? $n(t) : t,
              c = a ? $n(i(e)) : i(e);
            return (
              r && ((l = l.toLowerCase()), (c = c.toLowerCase())),
              o && ((l = Gn(l)), (c = Qn(c))),
              'start' === s ? c.substr(0, l.length) === l : c.indexOf(l) > -1
            );
          },
          formatGroupLabel: function (e) {
            return e.label;
          },
          getOptionLabel: function (e) {
            return e.label;
          },
          getOptionValue: function (e) {
            return e.value;
          },
          isDisabled: !1,
          isLoading: !1,
          isMulti: !1,
          isRtl: !1,
          isSearchable: !0,
          isOptionDisabled: function (e) {
            return !!e.isDisabled;
          },
          loadingMessage: function () {
            return 'Loading...';
          },
          maxMenuHeight: 300,
          minMenuHeight: 140,
          menuIsOpen: !1,
          menuPlacement: 'bottom',
          menuPosition: 'absolute',
          menuShouldBlockScroll: !1,
          menuShouldScrollIntoView: !(function () {
            try {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              );
            } catch (e) {
              return !1;
            }
          })(),
          noOptionsMessage: function () {
            return 'No options';
          },
          openMenuOnFocus: !1,
          openMenuOnClick: !0,
          options: [],
          pageSize: 5,
          placeholder: 'Select...',
          screenReaderStatus: function (e) {
            var t = e.count;
            return ''
              .concat(t, ' result')
              .concat(1 !== t ? 's' : '', ' available');
          },
          styles: {},
          tabIndex: 0,
          tabSelectsValue: !0,
          unstyled: !1
        };
      function yr(e, t, n, r) {
        return {
          type: 'option',
          data: t,
          isDisabled: wr(e, t, n),
          isSelected: Er(e, t, n),
          label: Ar(e, t),
          value: Cr(e, t),
          index: r
        };
      }
      function br(e, t) {
        return e.options
          .map(function (n, r) {
            if ('options' in n) {
              var o = n.options
                .map(function (n, r) {
                  return yr(e, n, t, r);
                })
                .filter(function (t) {
                  return vr(e, t);
                });
              return o.length > 0
                ? { type: 'group', data: n, options: o, index: r }
                : void 0;
            }
            var i = yr(e, n, t, r);
            return vr(e, i) ? i : void 0;
          })
          .filter(rn);
      }
      function gr(e) {
        return e.reduce(function (e, t) {
          return (
            'group' === t.type
              ? e.push.apply(
                  e,
                  Q(
                    t.options.map(function (e) {
                      return e.data;
                    })
                  )
                )
              : e.push(t.data),
            e
          );
        }, []);
      }
      function vr(e, t) {
        var n = e.inputValue,
          r = void 0 === n ? '' : n,
          o = t.data,
          i = t.isSelected,
          a = t.label,
          s = t.value;
        return (!Sr(e) || !i) && xr(e, { label: a, value: s, data: o }, r);
      }
      var Ar = function (e, t) {
          return e.getOptionLabel(t);
        },
        Cr = function (e, t) {
          return e.getOptionValue(t);
        };
      function wr(e, t, n) {
        return (
          'function' == typeof e.isOptionDisabled && e.isOptionDisabled(t, n)
        );
      }
      function Er(e, t, n) {
        if (n.indexOf(t) > -1) return !0;
        if ('function' == typeof e.isOptionSelected)
          return e.isOptionSelected(t, n);
        var r = Cr(e, t);
        return n.some(function (t) {
          return Cr(e, t) === r;
        });
      }
      function xr(e, t, n) {
        return !e.filterOption || e.filterOption(t, n);
      }
      var Sr = function (e) {
          var t = e.hideSelectedOptions,
            n = e.isMulti;
          return void 0 === t ? n : t;
        },
        Or = 1,
        kr = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Y(e, t);
          })(s, e);
          var t,
            n,
            r,
            o,
            i,
            a =
              ((o = s),
              (i = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = W(o);
                if (i) {
                  var n = W(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return Z(this, e);
              });
          function s(e) {
            var t;
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              ((t = a.call(this, e)).state = {
                ariaSelection: null,
                focusedOption: null,
                focusedValue: null,
                inputIsHidden: !1,
                isFocused: !1,
                selectValue: [],
                clearFocusValueOnUpdate: !1,
                prevWasFocused: !1,
                inputIsHiddenAfterUpdate: void 0,
                prevProps: void 0
              }),
              (t.blockOptionHover = !1),
              (t.isComposing = !1),
              (t.commonProps = void 0),
              (t.initialTouchX = 0),
              (t.initialTouchY = 0),
              (t.instancePrefix = ''),
              (t.openAfterFocus = !1),
              (t.scrollToFocusedOptionOnUpdate = !1),
              (t.userIsDragging = void 0),
              (t.controlRef = null),
              (t.getControlRef = function (e) {
                t.controlRef = e;
              }),
              (t.focusedOptionRef = null),
              (t.getFocusedOptionRef = function (e) {
                t.focusedOptionRef = e;
              }),
              (t.menuListRef = null),
              (t.getMenuListRef = function (e) {
                t.menuListRef = e;
              }),
              (t.inputRef = null),
              (t.getInputRef = function (e) {
                t.inputRef = e;
              }),
              (t.focus = t.focusInput),
              (t.blur = t.blurInput),
              (t.onChange = function (e, n) {
                var r = t.props,
                  o = r.onChange,
                  i = r.name;
                (n.name = i), t.ariaOnChange(e, n), o(e, n);
              }),
              (t.setValue = function (e, n, r) {
                var o = t.props,
                  i = o.closeMenuOnSelect,
                  a = o.isMulti,
                  s = o.inputValue;
                t.onInputChange('', { action: 'set-value', prevInputValue: s }),
                  i &&
                    (t.setState({ inputIsHiddenAfterUpdate: !a }),
                    t.onMenuClose()),
                  t.setState({ clearFocusValueOnUpdate: !0 }),
                  t.onChange(e, { action: n, option: r });
              }),
              (t.selectOption = function (e) {
                var n = t.props,
                  r = n.blurInputOnSelect,
                  o = n.isMulti,
                  i = n.name,
                  a = t.state.selectValue,
                  s = o && t.isOptionSelected(e, a),
                  l = t.isOptionDisabled(e, a);
                if (s) {
                  var c = t.getOptionValue(e);
                  t.setValue(
                    a.filter(function (e) {
                      return t.getOptionValue(e) !== c;
                    }),
                    'deselect-option',
                    e
                  );
                } else {
                  if (l)
                    return void t.ariaOnChange(e, {
                      action: 'select-option',
                      option: e,
                      name: i
                    });
                  o
                    ? t.setValue([].concat(Q(a), [e]), 'select-option', e)
                    : t.setValue(e, 'select-option');
                }
                r && t.blurInput();
              }),
              (t.removeValue = function (e) {
                var n = t.props.isMulti,
                  r = t.state.selectValue,
                  o = t.getOptionValue(e),
                  i = r.filter(function (e) {
                    return t.getOptionValue(e) !== o;
                  }),
                  a = on(n, i, i[0] || null);
                t.onChange(a, { action: 'remove-value', removedValue: e }),
                  t.focusInput();
              }),
              (t.clearValue = function () {
                var e = t.state.selectValue;
                t.onChange(on(t.props.isMulti, [], null), {
                  action: 'clear',
                  removedValues: e
                });
              }),
              (t.popValue = function () {
                var e = t.props.isMulti,
                  n = t.state.selectValue,
                  r = n[n.length - 1],
                  o = n.slice(0, n.length - 1),
                  i = on(e, o, o[0] || null);
                t.onChange(i, { action: 'pop-value', removedValue: r });
              }),
              (t.getValue = function () {
                return t.state.selectValue;
              }),
              (t.cx = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return Ut.apply(void 0, [t.props.classNamePrefix].concat(n));
              }),
              (t.getOptionLabel = function (e) {
                return Ar(t.props, e);
              }),
              (t.getOptionValue = function (e) {
                return Cr(t.props, e);
              }),
              (t.getStyles = function (e, n) {
                var r = t.props.unstyled,
                  o = dr[e](n, r);
                o.boxSizing = 'border-box';
                var i = t.props.styles[e];
                return i ? i(o, n) : o;
              }),
              (t.getClassNames = function (e, n) {
                var r, o;
                return null === (r = (o = t.props.classNames)[e]) ||
                  void 0 === r
                  ? void 0
                  : r.call(o, n);
              }),
              (t.getElementId = function (e) {
                return ''.concat(t.instancePrefix, '-').concat(e);
              }),
              (t.getComponents = function () {
                return (e = t.props), _(_({}, Nn), e.components);
                var e;
              }),
              (t.buildCategorizedOptions = function () {
                return br(t.props, t.state.selectValue);
              }),
              (t.getCategorizedOptions = function () {
                return t.props.menuIsOpen ? t.buildCategorizedOptions() : [];
              }),
              (t.buildFocusableOptions = function () {
                return gr(t.buildCategorizedOptions());
              }),
              (t.getFocusableOptions = function () {
                return t.props.menuIsOpen ? t.buildFocusableOptions() : [];
              }),
              (t.ariaOnChange = function (e, n) {
                t.setState({ ariaSelection: _({ value: e }, n) });
              }),
              (t.onMenuMouseDown = function (e) {
                0 === e.button &&
                  (e.stopPropagation(), e.preventDefault(), t.focusInput());
              }),
              (t.onMenuMouseMove = function (e) {
                t.blockOptionHover = !1;
              }),
              (t.onControlMouseDown = function (e) {
                if (!e.defaultPrevented) {
                  var n = t.props.openMenuOnClick;
                  t.state.isFocused
                    ? t.props.menuIsOpen
                      ? 'INPUT' !== e.target.tagName &&
                        'TEXTAREA' !== e.target.tagName &&
                        t.onMenuClose()
                      : n && t.openMenu('first')
                    : (n && (t.openAfterFocus = !0), t.focusInput()),
                    'INPUT' !== e.target.tagName &&
                      'TEXTAREA' !== e.target.tagName &&
                      e.preventDefault();
                }
              }),
              (t.onDropdownIndicatorMouseDown = function (e) {
                if (
                  !(
                    (e && 'mousedown' === e.type && 0 !== e.button) ||
                    t.props.isDisabled
                  )
                ) {
                  var n = t.props,
                    r = n.isMulti,
                    o = n.menuIsOpen;
                  t.focusInput(),
                    o
                      ? (t.setState({ inputIsHiddenAfterUpdate: !r }),
                        t.onMenuClose())
                      : t.openMenu('first'),
                    e.preventDefault();
                }
              }),
              (t.onClearIndicatorMouseDown = function (e) {
                (e && 'mousedown' === e.type && 0 !== e.button) ||
                  (t.clearValue(),
                  e.preventDefault(),
                  (t.openAfterFocus = !1),
                  'touchend' === e.type
                    ? t.focusInput()
                    : setTimeout(function () {
                        return t.focusInput();
                      }));
              }),
              (t.onScroll = function (e) {
                'boolean' == typeof t.props.closeMenuOnScroll
                  ? e.target instanceof HTMLElement &&
                    Zt(e.target) &&
                    t.props.onMenuClose()
                  : 'function' == typeof t.props.closeMenuOnScroll &&
                    t.props.closeMenuOnScroll(e) &&
                    t.props.onMenuClose();
              }),
              (t.onCompositionStart = function () {
                t.isComposing = !0;
              }),
              (t.onCompositionEnd = function () {
                t.isComposing = !1;
              }),
              (t.onTouchStart = function (e) {
                var n = e.touches,
                  r = n && n.item(0);
                r &&
                  ((t.initialTouchX = r.clientX),
                  (t.initialTouchY = r.clientY),
                  (t.userIsDragging = !1));
              }),
              (t.onTouchMove = function (e) {
                var n = e.touches,
                  r = n && n.item(0);
                if (r) {
                  var o = Math.abs(r.clientX - t.initialTouchX),
                    i = Math.abs(r.clientY - t.initialTouchY);
                  t.userIsDragging = o > 5 || i > 5;
                }
              }),
              (t.onTouchEnd = function (e) {
                t.userIsDragging ||
                  (t.controlRef &&
                    !t.controlRef.contains(e.target) &&
                    t.menuListRef &&
                    !t.menuListRef.contains(e.target) &&
                    t.blurInput(),
                  (t.initialTouchX = 0),
                  (t.initialTouchY = 0));
              }),
              (t.onControlTouchEnd = function (e) {
                t.userIsDragging || t.onControlMouseDown(e);
              }),
              (t.onClearIndicatorTouchEnd = function (e) {
                t.userIsDragging || t.onClearIndicatorMouseDown(e);
              }),
              (t.onDropdownIndicatorTouchEnd = function (e) {
                t.userIsDragging || t.onDropdownIndicatorMouseDown(e);
              }),
              (t.handleInputChange = function (e) {
                var n = t.props.inputValue,
                  r = e.currentTarget.value;
                t.setState({ inputIsHiddenAfterUpdate: !1 }),
                  t.onInputChange(r, {
                    action: 'input-change',
                    prevInputValue: n
                  }),
                  t.props.menuIsOpen || t.onMenuOpen();
              }),
              (t.onInputFocus = function (e) {
                t.props.onFocus && t.props.onFocus(e),
                  t.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
                  (t.openAfterFocus || t.props.openMenuOnFocus) &&
                    t.openMenu('first'),
                  (t.openAfterFocus = !1);
              }),
              (t.onInputBlur = function (e) {
                var n = t.props.inputValue;
                t.menuListRef && t.menuListRef.contains(document.activeElement)
                  ? t.inputRef.focus()
                  : (t.props.onBlur && t.props.onBlur(e),
                    t.onInputChange('', {
                      action: 'input-blur',
                      prevInputValue: n
                    }),
                    t.onMenuClose(),
                    t.setState({ focusedValue: null, isFocused: !1 }));
              }),
              (t.onOptionHover = function (e) {
                t.blockOptionHover ||
                  t.state.focusedOption === e ||
                  t.setState({ focusedOption: e });
              }),
              (t.shouldHideSelectedOptions = function () {
                return Sr(t.props);
              }),
              (t.onValueInputFocus = function (e) {
                e.preventDefault(), e.stopPropagation(), t.focus();
              }),
              (t.onKeyDown = function (e) {
                var n = t.props,
                  r = n.isMulti,
                  o = n.backspaceRemovesValue,
                  i = n.escapeClearsValue,
                  a = n.inputValue,
                  s = n.isClearable,
                  l = n.isDisabled,
                  c = n.menuIsOpen,
                  u = n.onKeyDown,
                  p = n.tabSelectsValue,
                  f = n.openMenuOnFocus,
                  d = t.state,
                  m = d.focusedOption,
                  h = d.focusedValue,
                  y = d.selectValue;
                if (
                  !(l || ('function' == typeof u && (u(e), e.defaultPrevented)))
                ) {
                  switch (((t.blockOptionHover = !0), e.key)) {
                    case 'ArrowLeft':
                      if (!r || a) return;
                      t.focusValue('previous');
                      break;
                    case 'ArrowRight':
                      if (!r || a) return;
                      t.focusValue('next');
                      break;
                    case 'Delete':
                    case 'Backspace':
                      if (a) return;
                      if (h) t.removeValue(h);
                      else {
                        if (!o) return;
                        r ? t.popValue() : s && t.clearValue();
                      }
                      break;
                    case 'Tab':
                      if (t.isComposing) return;
                      if (
                        e.shiftKey ||
                        !c ||
                        !p ||
                        !m ||
                        (f && t.isOptionSelected(m, y))
                      )
                        return;
                      t.selectOption(m);
                      break;
                    case 'Enter':
                      if (229 === e.keyCode) break;
                      if (c) {
                        if (!m) return;
                        if (t.isComposing) return;
                        t.selectOption(m);
                        break;
                      }
                      return;
                    case 'Escape':
                      c
                        ? (t.setState({ inputIsHiddenAfterUpdate: !1 }),
                          t.onInputChange('', {
                            action: 'menu-close',
                            prevInputValue: a
                          }),
                          t.onMenuClose())
                        : s && i && t.clearValue();
                      break;
                    case ' ':
                      if (a) return;
                      if (!c) {
                        t.openMenu('first');
                        break;
                      }
                      if (!m) return;
                      t.selectOption(m);
                      break;
                    case 'ArrowUp':
                      c ? t.focusOption('up') : t.openMenu('last');
                      break;
                    case 'ArrowDown':
                      c ? t.focusOption('down') : t.openMenu('first');
                      break;
                    case 'PageUp':
                      if (!c) return;
                      t.focusOption('pageup');
                      break;
                    case 'PageDown':
                      if (!c) return;
                      t.focusOption('pagedown');
                      break;
                    case 'Home':
                      if (!c) return;
                      t.focusOption('first');
                      break;
                    case 'End':
                      if (!c) return;
                      t.focusOption('last');
                      break;
                    default:
                      return;
                  }
                  e.preventDefault();
                }
              }),
              (t.instancePrefix =
                'react-select-' + (t.props.instanceId || ++Or)),
              (t.state.selectValue = Vt(e.value)),
              e.menuIsOpen && t.state.selectValue.length)
            ) {
              var n = t.buildFocusableOptions(),
                r = n.indexOf(t.state.selectValue[0]);
              t.state.focusedOption = n[r];
            }
            return t;
          }
          return (
            (t = s),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  this.startListeningComposition(),
                    this.startListeningToTouch(),
                    this.props.closeMenuOnScroll &&
                      document &&
                      document.addEventListener &&
                      document.addEventListener('scroll', this.onScroll, !0),
                    this.props.autoFocus && this.focusInput(),
                    this.props.menuIsOpen &&
                      this.state.focusedOption &&
                      this.menuListRef &&
                      this.focusedOptionRef &&
                      qt(this.menuListRef, this.focusedOptionRef);
                }
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.isDisabled,
                    r = t.menuIsOpen,
                    o = this.state.isFocused;
                  ((o && !n && e.isDisabled) || (o && r && !e.menuIsOpen)) &&
                    this.focusInput(),
                    o && n && !e.isDisabled
                      ? this.setState({ isFocused: !1 }, this.onMenuClose)
                      : o ||
                        n ||
                        !e.isDisabled ||
                        this.inputRef !== document.activeElement ||
                        this.setState({ isFocused: !0 }),
                    this.menuListRef &&
                      this.focusedOptionRef &&
                      this.scrollToFocusedOptionOnUpdate &&
                      (qt(this.menuListRef, this.focusedOptionRef),
                      (this.scrollToFocusedOptionOnUpdate = !1));
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.stopListeningComposition(),
                    this.stopListeningToTouch(),
                    document.removeEventListener('scroll', this.onScroll, !0);
                }
              },
              {
                key: 'onMenuOpen',
                value: function () {
                  this.props.onMenuOpen();
                }
              },
              {
                key: 'onMenuClose',
                value: function () {
                  this.onInputChange('', {
                    action: 'menu-close',
                    prevInputValue: this.props.inputValue
                  }),
                    this.props.onMenuClose();
                }
              },
              {
                key: 'onInputChange',
                value: function (e, t) {
                  this.props.onInputChange(e, t);
                }
              },
              {
                key: 'focusInput',
                value: function () {
                  this.inputRef && this.inputRef.focus();
                }
              },
              {
                key: 'blurInput',
                value: function () {
                  this.inputRef && this.inputRef.blur();
                }
              },
              {
                key: 'openMenu',
                value: function (e) {
                  var t = this,
                    n = this.state,
                    r = n.selectValue,
                    o = n.isFocused,
                    i = this.buildFocusableOptions(),
                    a = 'first' === e ? 0 : i.length - 1;
                  if (!this.props.isMulti) {
                    var s = i.indexOf(r[0]);
                    s > -1 && (a = s);
                  }
                  (this.scrollToFocusedOptionOnUpdate = !(
                    o && this.menuListRef
                  )),
                    this.setState(
                      {
                        inputIsHiddenAfterUpdate: !1,
                        focusedValue: null,
                        focusedOption: i[a]
                      },
                      function () {
                        return t.onMenuOpen();
                      }
                    );
                }
              },
              {
                key: 'focusValue',
                value: function (e) {
                  var t = this.state,
                    n = t.selectValue,
                    r = t.focusedValue;
                  if (this.props.isMulti) {
                    this.setState({ focusedOption: null });
                    var o = n.indexOf(r);
                    r || (o = -1);
                    var i = n.length - 1,
                      a = -1;
                    if (n.length) {
                      switch (e) {
                        case 'previous':
                          a = 0 === o ? 0 : -1 === o ? i : o - 1;
                          break;
                        case 'next':
                          o > -1 && o < i && (a = o + 1);
                      }
                      this.setState({
                        inputIsHidden: -1 !== a,
                        focusedValue: n[a]
                      });
                    }
                  }
                }
              },
              {
                key: 'focusOption',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'first',
                    t = this.props.pageSize,
                    n = this.state.focusedOption,
                    r = this.getFocusableOptions();
                  if (r.length) {
                    var o = 0,
                      i = r.indexOf(n);
                    n || (i = -1),
                      'up' === e
                        ? (o = i > 0 ? i - 1 : r.length - 1)
                        : 'down' === e
                        ? (o = (i + 1) % r.length)
                        : 'pageup' === e
                        ? (o = i - t) < 0 && (o = 0)
                        : 'pagedown' === e
                        ? (o = i + t) > r.length - 1 && (o = r.length - 1)
                        : 'last' === e && (o = r.length - 1),
                      (this.scrollToFocusedOptionOnUpdate = !0),
                      this.setState({
                        focusedOption: r[o],
                        focusedValue: null
                      });
                  }
                }
              },
              {
                key: 'getTheme',
                value: function () {
                  return this.props.theme
                    ? 'function' == typeof this.props.theme
                      ? this.props.theme(mr)
                      : _(_({}, mr), this.props.theme)
                    : mr;
                }
              },
              {
                key: 'getCommonProps',
                value: function () {
                  var e = this.clearValue,
                    t = this.cx,
                    n = this.getStyles,
                    r = this.getClassNames,
                    o = this.getValue,
                    i = this.selectOption,
                    a = this.setValue,
                    s = this.props,
                    l = s.isMulti,
                    c = s.isRtl,
                    u = s.options;
                  return {
                    clearValue: e,
                    cx: t,
                    getStyles: n,
                    getClassNames: r,
                    getValue: o,
                    hasValue: this.hasValue(),
                    isMulti: l,
                    isRtl: c,
                    options: u,
                    selectOption: i,
                    selectProps: s,
                    setValue: a,
                    theme: this.getTheme()
                  };
                }
              },
              {
                key: 'hasValue',
                value: function () {
                  return this.state.selectValue.length > 0;
                }
              },
              {
                key: 'hasOptions',
                value: function () {
                  return !!this.getFocusableOptions().length;
                }
              },
              {
                key: 'isClearable',
                value: function () {
                  var e = this.props,
                    t = e.isClearable,
                    n = e.isMulti;
                  return void 0 === t ? n : t;
                }
              },
              {
                key: 'isOptionDisabled',
                value: function (e, t) {
                  return wr(this.props, e, t);
                }
              },
              {
                key: 'isOptionSelected',
                value: function (e, t) {
                  return Er(this.props, e, t);
                }
              },
              {
                key: 'filterOption',
                value: function (e, t) {
                  return xr(this.props, e, t);
                }
              },
              {
                key: 'formatOptionLabel',
                value: function (e, t) {
                  if ('function' == typeof this.props.formatOptionLabel) {
                    var n = this.props.inputValue,
                      r = this.state.selectValue;
                    return this.props.formatOptionLabel(e, {
                      context: t,
                      inputValue: n,
                      selectValue: r
                    });
                  }
                  return this.getOptionLabel(e);
                }
              },
              {
                key: 'formatGroupLabel',
                value: function (e) {
                  return this.props.formatGroupLabel(e);
                }
              },
              {
                key: 'startListeningComposition',
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      'compositionstart',
                      this.onCompositionStart,
                      !1
                    ),
                    document.addEventListener(
                      'compositionend',
                      this.onCompositionEnd,
                      !1
                    ));
                }
              },
              {
                key: 'stopListeningComposition',
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      'compositionstart',
                      this.onCompositionStart
                    ),
                    document.removeEventListener(
                      'compositionend',
                      this.onCompositionEnd
                    ));
                }
              },
              {
                key: 'startListeningToTouch',
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      'touchstart',
                      this.onTouchStart,
                      !1
                    ),
                    document.addEventListener(
                      'touchmove',
                      this.onTouchMove,
                      !1
                    ),
                    document.addEventListener('touchend', this.onTouchEnd, !1));
                }
              },
              {
                key: 'stopListeningToTouch',
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      'touchstart',
                      this.onTouchStart
                    ),
                    document.removeEventListener('touchmove', this.onTouchMove),
                    document.removeEventListener('touchend', this.onTouchEnd));
                }
              },
              {
                key: 'renderInput',
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    n = e.isSearchable,
                    r = e.inputId,
                    o = e.inputValue,
                    i = e.tabIndex,
                    a = e.form,
                    s = e.menuIsOpen,
                    l = e.required,
                    c = this.getComponents().Input,
                    u = this.state,
                    p = u.inputIsHidden,
                    f = u.ariaSelection,
                    d = this.commonProps,
                    m = r || this.getElementId('input'),
                    h = _(
                      _(
                        _(
                          {
                            'aria-autocomplete': 'list',
                            'aria-expanded': s,
                            'aria-haspopup': !0,
                            'aria-errormessage':
                              this.props['aria-errormessage'],
                            'aria-invalid': this.props['aria-invalid'],
                            'aria-label': this.props['aria-label'],
                            'aria-labelledby': this.props['aria-labelledby'],
                            'aria-required': l,
                            role: 'combobox'
                          },
                          s && {
                            'aria-controls': this.getElementId('listbox'),
                            'aria-owns': this.getElementId('listbox')
                          }
                        ),
                        !n && { 'aria-readonly': !0 }
                      ),
                      this.hasValue()
                        ? 'initial-input-focus' ===
                            (null == f ? void 0 : f.action) && {
                            'aria-describedby': this.getElementId('live-region')
                          }
                        : {
                            'aria-describedby': this.getElementId('placeholder')
                          }
                    );
                  return n
                    ? j.createElement(
                        c,
                        U(
                          {},
                          d,
                          {
                            autoCapitalize: 'none',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            id: m,
                            innerRef: this.getInputRef,
                            isDisabled: t,
                            isHidden: p,
                            onBlur: this.onInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.onInputFocus,
                            spellCheck: 'false',
                            tabIndex: i,
                            form: a,
                            type: 'text',
                            value: o
                          },
                          h
                        )
                      )
                    : j.createElement(
                        Kn,
                        U(
                          {
                            id: m,
                            innerRef: this.getInputRef,
                            onBlur: this.onInputBlur,
                            onChange: Ft,
                            onFocus: this.onInputFocus,
                            disabled: t,
                            tabIndex: i,
                            inputMode: 'none',
                            form: a,
                            value: ''
                          },
                          h
                        )
                      );
                }
              },
              {
                key: 'renderPlaceholderOrValue',
                value: function () {
                  var e = this,
                    t = this.getComponents(),
                    n = t.MultiValue,
                    r = t.MultiValueContainer,
                    o = t.MultiValueLabel,
                    i = t.MultiValueRemove,
                    a = t.SingleValue,
                    s = t.Placeholder,
                    l = this.commonProps,
                    c = this.props,
                    u = c.controlShouldRenderValue,
                    p = c.isDisabled,
                    f = c.isMulti,
                    d = c.inputValue,
                    m = c.placeholder,
                    h = this.state,
                    y = h.selectValue,
                    b = h.focusedValue,
                    g = h.isFocused;
                  if (!this.hasValue() || !u)
                    return d
                      ? null
                      : j.createElement(
                          s,
                          U({}, l, {
                            key: 'placeholder',
                            isDisabled: p,
                            isFocused: g,
                            innerProps: { id: this.getElementId('placeholder') }
                          }),
                          m
                        );
                  if (f)
                    return y.map(function (t, a) {
                      var s = t === b,
                        c = ''
                          .concat(e.getOptionLabel(t), '-')
                          .concat(e.getOptionValue(t));
                      return j.createElement(
                        n,
                        U({}, l, {
                          components: { Container: r, Label: o, Remove: i },
                          isFocused: s,
                          isDisabled: p,
                          key: c,
                          index: a,
                          removeProps: {
                            onClick: function () {
                              return e.removeValue(t);
                            },
                            onTouchEnd: function () {
                              return e.removeValue(t);
                            },
                            onMouseDown: function (e) {
                              e.preventDefault();
                            }
                          },
                          data: t
                        }),
                        e.formatOptionLabel(t, 'value')
                      );
                    });
                  if (d) return null;
                  var v = y[0];
                  return j.createElement(
                    a,
                    U({}, l, { data: v, isDisabled: p }),
                    this.formatOptionLabel(v, 'value')
                  );
                }
              },
              {
                key: 'renderClearIndicator',
                value: function () {
                  var e = this.getComponents().ClearIndicator,
                    t = this.commonProps,
                    n = this.props,
                    r = n.isDisabled,
                    o = n.isLoading,
                    i = this.state.isFocused;
                  if (!this.isClearable() || !e || r || !this.hasValue() || o)
                    return null;
                  var a = {
                    onMouseDown: this.onClearIndicatorMouseDown,
                    onTouchEnd: this.onClearIndicatorTouchEnd,
                    'aria-hidden': 'true'
                  };
                  return j.createElement(
                    e,
                    U({}, t, { innerProps: a, isFocused: i })
                  );
                }
              },
              {
                key: 'renderLoadingIndicator',
                value: function () {
                  var e = this.getComponents().LoadingIndicator,
                    t = this.commonProps,
                    n = this.props,
                    r = n.isDisabled,
                    o = n.isLoading,
                    i = this.state.isFocused;
                  return e && o
                    ? j.createElement(
                        e,
                        U({}, t, {
                          innerProps: { 'aria-hidden': 'true' },
                          isDisabled: r,
                          isFocused: i
                        })
                      )
                    : null;
                }
              },
              {
                key: 'renderIndicatorSeparator',
                value: function () {
                  var e = this.getComponents(),
                    t = e.DropdownIndicator,
                    n = e.IndicatorSeparator;
                  if (!t || !n) return null;
                  var r = this.commonProps,
                    o = this.props.isDisabled,
                    i = this.state.isFocused;
                  return j.createElement(
                    n,
                    U({}, r, { isDisabled: o, isFocused: i })
                  );
                }
              },
              {
                key: 'renderDropdownIndicator',
                value: function () {
                  var e = this.getComponents().DropdownIndicator;
                  if (!e) return null;
                  var t = this.commonProps,
                    n = this.props.isDisabled,
                    r = this.state.isFocused,
                    o = {
                      onMouseDown: this.onDropdownIndicatorMouseDown,
                      onTouchEnd: this.onDropdownIndicatorTouchEnd,
                      'aria-hidden': 'true'
                    };
                  return j.createElement(
                    e,
                    U({}, t, { innerProps: o, isDisabled: n, isFocused: r })
                  );
                }
              },
              {
                key: 'renderMenu',
                value: function () {
                  var e = this,
                    t = this.getComponents(),
                    n = t.Group,
                    r = t.GroupHeading,
                    o = t.Menu,
                    i = t.MenuList,
                    a = t.MenuPortal,
                    s = t.LoadingMessage,
                    l = t.NoOptionsMessage,
                    c = t.Option,
                    u = this.commonProps,
                    p = this.state.focusedOption,
                    f = this.props,
                    d = f.captureMenuScroll,
                    m = f.inputValue,
                    h = f.isLoading,
                    y = f.loadingMessage,
                    b = f.minMenuHeight,
                    g = f.maxMenuHeight,
                    v = f.menuIsOpen,
                    A = f.menuPlacement,
                    C = f.menuPosition,
                    w = f.menuPortalTarget,
                    E = f.menuShouldBlockScroll,
                    x = f.menuShouldScrollIntoView,
                    S = f.noOptionsMessage,
                    O = f.onMenuScrollToTop,
                    k = f.onMenuScrollToBottom;
                  if (!v) return null;
                  var T,
                    M = function (t, n) {
                      var r = t.type,
                        o = t.data,
                        i = t.isDisabled,
                        a = t.isSelected,
                        s = t.label,
                        l = t.value,
                        f = p === o,
                        d = i
                          ? void 0
                          : function () {
                              return e.onOptionHover(o);
                            },
                        m = i
                          ? void 0
                          : function () {
                              return e.selectOption(o);
                            },
                        h = ''.concat(e.getElementId('option'), '-').concat(n),
                        y = {
                          id: h,
                          onClick: m,
                          onMouseMove: d,
                          onMouseOver: d,
                          tabIndex: -1
                        };
                      return j.createElement(
                        c,
                        U({}, u, {
                          innerProps: y,
                          data: o,
                          isDisabled: i,
                          isSelected: a,
                          key: h,
                          label: s,
                          type: r,
                          value: l,
                          isFocused: f,
                          innerRef: f ? e.getFocusedOptionRef : void 0
                        }),
                        e.formatOptionLabel(t.data, 'menu')
                      );
                    };
                  if (this.hasOptions())
                    T = this.getCategorizedOptions().map(function (t) {
                      if ('group' === t.type) {
                        var o = t.data,
                          i = t.options,
                          a = t.index,
                          s = ''.concat(e.getElementId('group'), '-').concat(a),
                          l = ''.concat(s, '-heading');
                        return j.createElement(
                          n,
                          U({}, u, {
                            key: s,
                            data: o,
                            options: i,
                            Heading: r,
                            headingProps: { id: l, data: t.data },
                            label: e.formatGroupLabel(t.data)
                          }),
                          t.options.map(function (e) {
                            return M(e, ''.concat(a, '-').concat(e.index));
                          })
                        );
                      }
                      if ('option' === t.type) return M(t, ''.concat(t.index));
                    });
                  else if (h) {
                    var I = y({ inputValue: m });
                    if (null === I) return null;
                    T = j.createElement(s, u, I);
                  } else {
                    var R = S({ inputValue: m });
                    if (null === R) return null;
                    T = j.createElement(l, u, R);
                  }
                  var P = {
                      minMenuHeight: b,
                      maxMenuHeight: g,
                      menuPlacement: A,
                      menuPosition: C,
                      menuShouldScrollIntoView: x
                    },
                    N = j.createElement(ln, U({}, u, P), function (t) {
                      var n = t.ref,
                        r = t.placerProps,
                        a = r.placement,
                        s = r.maxHeight;
                      return j.createElement(
                        o,
                        U({}, u, P, {
                          innerRef: n,
                          innerProps: {
                            onMouseDown: e.onMenuMouseDown,
                            onMouseMove: e.onMenuMouseMove,
                            id: e.getElementId('listbox')
                          },
                          isLoading: h,
                          placement: a
                        }),
                        j.createElement(
                          ur,
                          {
                            captureEnabled: d,
                            onTopArrive: O,
                            onBottomArrive: k,
                            lockEnabled: E
                          },
                          function (t) {
                            return j.createElement(
                              i,
                              U({}, u, {
                                innerRef: function (n) {
                                  e.getMenuListRef(n), t(n);
                                },
                                isLoading: h,
                                maxHeight: s,
                                focusedOption: p
                              }),
                              T
                            );
                          }
                        )
                      );
                    });
                  return w || 'fixed' === C
                    ? j.createElement(
                        a,
                        U({}, u, {
                          appendTo: w,
                          controlElement: this.controlRef,
                          menuPlacement: A,
                          menuPosition: C
                        }),
                        N
                      )
                    : N;
                }
              },
              {
                key: 'renderFormField',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.delimiter,
                    r = t.isDisabled,
                    o = t.isMulti,
                    i = t.name,
                    a = t.required,
                    s = this.state.selectValue;
                  if (i && !r) {
                    if (a && !this.hasValue())
                      return j.createElement(fr, {
                        name: i,
                        onFocus: this.onValueInputFocus
                      });
                    if (o) {
                      if (n) {
                        var l = s
                          .map(function (t) {
                            return e.getOptionValue(t);
                          })
                          .join(n);
                        return j.createElement('input', {
                          name: i,
                          type: 'hidden',
                          value: l
                        });
                      }
                      var c =
                        s.length > 0
                          ? s.map(function (t, n) {
                              return j.createElement('input', {
                                key: 'i-'.concat(n),
                                name: i,
                                type: 'hidden',
                                value: e.getOptionValue(t)
                              });
                            })
                          : j.createElement('input', {
                              name: i,
                              type: 'hidden',
                              value: ''
                            });
                      return j.createElement('div', null, c);
                    }
                    var u = s[0] ? this.getOptionValue(s[0]) : '';
                    return j.createElement('input', {
                      name: i,
                      type: 'hidden',
                      value: u
                    });
                  }
                }
              },
              {
                key: 'renderLiveRegion',
                value: function () {
                  var e = this.commonProps,
                    t = this.state,
                    n = t.ariaSelection,
                    r = t.focusedOption,
                    o = t.focusedValue,
                    i = t.isFocused,
                    a = t.selectValue,
                    s = this.getFocusableOptions();
                  return j.createElement(
                    Fn,
                    U({}, e, {
                      id: this.getElementId('live-region'),
                      ariaSelection: n,
                      focusedOption: r,
                      focusedValue: o,
                      isFocused: i,
                      selectValue: a,
                      focusableOptions: s
                    })
                  );
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.getComponents(),
                    t = e.Control,
                    n = e.IndicatorsContainer,
                    r = e.SelectContainer,
                    o = e.ValueContainer,
                    i = this.props,
                    a = i.className,
                    s = i.id,
                    l = i.isDisabled,
                    c = i.menuIsOpen,
                    u = this.state.isFocused,
                    p = (this.commonProps = this.getCommonProps());
                  return j.createElement(
                    r,
                    U({}, p, {
                      className: a,
                      innerProps: { id: s, onKeyDown: this.onKeyDown },
                      isDisabled: l,
                      isFocused: u
                    }),
                    this.renderLiveRegion(),
                    j.createElement(
                      t,
                      U({}, p, {
                        innerRef: this.getControlRef,
                        innerProps: {
                          onMouseDown: this.onControlMouseDown,
                          onTouchEnd: this.onControlTouchEnd
                        },
                        isDisabled: l,
                        isFocused: u,
                        menuIsOpen: c
                      }),
                      j.createElement(
                        o,
                        U({}, p, { isDisabled: l }),
                        this.renderPlaceholderOrValue(),
                        this.renderInput()
                      ),
                      j.createElement(
                        n,
                        U({}, p, { isDisabled: l }),
                        this.renderClearIndicator(),
                        this.renderLoadingIndicator(),
                        this.renderIndicatorSeparator(),
                        this.renderDropdownIndicator()
                      )
                    ),
                    this.renderMenu(),
                    this.renderFormField()
                  );
                }
              }
            ]),
            (r = [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  var n = t.prevProps,
                    r = t.clearFocusValueOnUpdate,
                    o = t.inputIsHiddenAfterUpdate,
                    i = t.ariaSelection,
                    a = t.isFocused,
                    s = t.prevWasFocused,
                    l = e.options,
                    c = e.value,
                    u = e.menuIsOpen,
                    p = e.inputValue,
                    f = e.isMulti,
                    d = Vt(c),
                    m = {};
                  if (
                    n &&
                    (c !== n.value ||
                      l !== n.options ||
                      u !== n.menuIsOpen ||
                      p !== n.inputValue)
                  ) {
                    var h = u
                        ? (function (e, t) {
                            return gr(br(e, t));
                          })(e, d)
                        : [],
                      y = r
                        ? (function (e, t) {
                            var n = e.focusedValue,
                              r = e.selectValue.indexOf(n);
                            if (r > -1) {
                              if (t.indexOf(n) > -1) return n;
                              if (r < t.length) return t[r];
                            }
                            return null;
                          })(t, d)
                        : null,
                      b = (function (e, t) {
                        var n = e.focusedOption;
                        return n && t.indexOf(n) > -1 ? n : t[0];
                      })(t, h);
                    m = {
                      selectValue: d,
                      focusedOption: b,
                      focusedValue: y,
                      clearFocusValueOnUpdate: !1
                    };
                  }
                  var g =
                      null != o && e !== n
                        ? { inputIsHidden: o, inputIsHiddenAfterUpdate: void 0 }
                        : {},
                    v = i,
                    A = a && s;
                  return (
                    a &&
                      !A &&
                      ((v = {
                        value: on(f, d, d[0] || null),
                        options: d,
                        action: 'initial-input-focus'
                      }),
                      (A = !s)),
                    'initial-input-focus' === (null == i ? void 0 : i.action) &&
                      (v = null),
                    _(
                      _(_({}, m), g),
                      {},
                      { prevProps: e, ariaSelection: v, prevWasFocused: A }
                    )
                  );
                }
              }
            ]),
            n && V(t.prototype, n),
            r && V(t, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            s
          );
        })(j.Component);
      kr.defaultProps = hr;
      var jr = (0, j.forwardRef)(function (e, t) {
        var n = (function (e) {
          var t = e.defaultInputValue,
            n = void 0 === t ? '' : t,
            r = e.defaultMenuIsOpen,
            o = void 0 !== r && r,
            i = e.defaultValue,
            a = void 0 === i ? null : i,
            s = e.inputValue,
            l = e.menuIsOpen,
            c = e.onChange,
            u = e.onInputChange,
            p = e.onMenuClose,
            f = e.onMenuOpen,
            d = e.value,
            m = F(e, H),
            h = z((0, j.useState)(void 0 !== s ? s : n), 2),
            y = h[0],
            b = h[1],
            g = z((0, j.useState)(void 0 !== l ? l : o), 2),
            v = g[0],
            A = g[1],
            C = z((0, j.useState)(void 0 !== d ? d : a), 2),
            w = C[0],
            E = C[1],
            x = (0, j.useCallback)(
              function (e, t) {
                'function' == typeof c && c(e, t), E(e);
              },
              [c]
            ),
            S = (0, j.useCallback)(
              function (e, t) {
                var n;
                'function' == typeof u && (n = u(e, t)),
                  b(void 0 !== n ? n : e);
              },
              [u]
            ),
            O = (0, j.useCallback)(
              function () {
                'function' == typeof f && f(), A(!0);
              },
              [f]
            ),
            k = (0, j.useCallback)(
              function () {
                'function' == typeof p && p(), A(!1);
              },
              [p]
            ),
            T = void 0 !== s ? s : y,
            M = void 0 !== l ? l : v,
            I = void 0 !== d ? d : w;
          return _(
            _({}, m),
            {},
            {
              inputValue: T,
              menuIsOpen: M,
              onChange: x,
              onInputChange: S,
              onMenuClose: k,
              onMenuOpen: O,
              value: I
            }
          );
        })(e);
        return j.createElement(kr, U({ ref: t }, n));
      });
      const Tr = jr;
      function Mr(e) {
        return (
          (Mr =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Mr(e)
        );
      }
      function Ir(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function Rr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Br(r.key), r);
        }
      }
      function Pr(e, t) {
        return (
          (Pr = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Pr(e, t)
        );
      }
      function Nr(e, t) {
        if (t && ('object' === Mr(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Lr(e);
      }
      function Lr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _r(e) {
        return (
          (_r = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          _r(e)
        );
      }
      function Dr(e, t, n) {
        return (
          (t = Br(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Br(e) {
        var t = (function (e, t) {
          if ('object' !== Mr(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Mr(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Mr(t) ? t : String(t);
      }
      var zr = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Pr(e, t);
        })(s, e);
        var n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = _r(o);
              if (i) {
                var n = _r(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Nr(this, e);
            });
        function s() {
          var e;
          Ir(this, s);
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            Dr(
              Lr((e = a.call.apply(a, [this].concat(r)))),
              'addComponent',
              function (n) {
                var r = n.value,
                  o = e.props.entity;
                if (AFRAME.components[r].multiple) {
                  var i = prompt(
                    "Provide an ID for this component (e.g., 'foo' for ".concat(
                      r,
                      '__foo).'
                    )
                  );
                  r = i ? ''.concat(r, '__').concat(i) : r;
                }
                o.setAttribute(r, ''),
                  t.Z.emit('componentadd', { entity: o, component: r }),
                  'undefined' != typeof ga &&
                    ga('send', 'event', 'Components', 'addComponent', r);
              }
            ),
            e
          );
        }
        return (
          (n = s),
          (r = [
            {
              key: 'getComponentsOptions',
              value: function () {
                var e = Object.keys(this.props.entity.components),
                  t = Object.keys(AFRAME.components)
                    .filter(function (t) {
                      return (
                        AFRAME.components[t].multiple || -1 === e.indexOf(t)
                      );
                    })
                    .sort()
                    .map(function (e) {
                      return { value: e, label: e, origin: 'loaded' };
                    });
                (this.options = t),
                  (this.options = this.options.sort(function (e, t) {
                    return e.label === t.label ? 0 : e.label < t.label ? -1 : 1;
                  }));
              }
            },
            {
              key: 'renderOption',
              value: function (e) {
                var t = (0, f.jsx)('span', {
                  title: 'Component already loaded in the scene',
                  children: '●'
                });
                return (0, f.jsxs)('strong', {
                  className: 'option',
                  children: [e.label, ' ', 'loaded' === e.origin ? t : '']
                });
              }
            },
            {
              key: 'render',
              value: function () {
                return this.props.entity
                  ? (this.getComponentsOptions(),
                    (0, f.jsxs)('div', {
                      id: 'addComponentContainer',
                      children: [
                        (0, f.jsx)('p', {
                          id: 'addComponentHeader',
                          children: 'COMPONENTS'
                        }),
                        (0, f.jsx)(Tr, {
                          id: 'addComponent',
                          className: 'addComponent',
                          classNamePrefix: 'select',
                          options: this.options,
                          simpleValue: !0,
                          clearable: !0,
                          placeholder: 'Add component...',
                          noResultsText: 'No components found',
                          onChange: this.addComponent,
                          optionRenderer: this.renderOption,
                          searchable: !0
                        })
                      ]
                    }))
                  : (0, f.jsx)('div', {});
              }
            }
          ]),
          r && Rr(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      Dr(zr, 'propTypes', { entity: I().object });
      var Fr = o(184),
        Hr = o.n(Fr);
      function Ur(e) {
        return (
          (Ur =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Ur(e)
        );
      }
      function Vr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, $r(r.key), r);
        }
      }
      function Yr(e, t) {
        return (
          (Yr = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Yr(e, t)
        );
      }
      function Wr(e, t) {
        if (t && ('object' === Ur(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Zr(e);
      }
      function Zr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Qr(e) {
        return (
          (Qr = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Qr(e)
        );
      }
      function Gr(e, t, n) {
        return (
          (t = $r(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function $r(e) {
        var t = (function (e, t) {
          if ('object' !== Ur(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Ur(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Ur(t) ? t : String(t);
      }
      var Xr = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Yr(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Qr(r);
              if (o) {
                var n = Qr(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Wr(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
            Gr(Zr((t = i.call(this, e))), 'onChange', function (e) {
              var n = e.target.checked;
              t.setState({ value: n }),
                t.props.onChange && t.props.onChange(t.props.name, n);
            }),
            (t.state = { value: t.props.value }),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.props.value !== e.value &&
                  this.setState({ value: this.props.value });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this.props.componentname + '.' + this.props.name;
                return (0, f.jsx)('input', {
                  id: e,
                  type: 'checkbox',
                  checked: this.state.value,
                  value: this.state.value,
                  onChange: this.onChange
                });
              }
            }
          ]) && Vr(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function qr(e) {
        return (
          (qr =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          qr(e)
        );
      }
      function Kr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, oo(r.key), r);
        }
      }
      function Jr(e, t) {
        return (
          (Jr = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Jr(e, t)
        );
      }
      function eo(e, t) {
        if (t && ('object' === qr(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return to(e);
      }
      function to(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function no(e) {
        return (
          (no = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          no(e)
        );
      }
      function ro(e, t, n) {
        return (
          (t = oo(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function oo(e) {
        var t = (function (e, t) {
          if ('object' !== qr(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== qr(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === qr(t) ? t : String(t);
      }
      Gr(Xr, 'propTypes', {
        componentname: I().string.isRequired,
        entity: I().object,
        name: I().string.isRequired,
        onChange: I().func,
        value: I().bool
      }),
        Gr(Xr, 'defaultProps', { value: !1 });
      var io = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Jr(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = no(r);
              if (o) {
                var n = no(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return eo(this, e);
            });
        function a(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
            ro(to((t = i.call(this, e))), 'onChange', function (e) {
              t.setValue(e.target.value);
            }),
            ro(to(t), 'onKeyUp', function (e) {
              e.stopPropagation(), t.setValue(e.target.value);
            }),
            ro(to(t), 'onChangeText', function (e) {
              t.setState({ value: e.target.value });
            });
          var n = t.props.value;
          return (
            (t.color = new THREE.Color()),
            (t.state = { value: n, pickerValue: t.getHexString(n) }),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'setValue',
              value: function (e) {
                var t = this.getHexString(e);
                this.setState({ value: e, pickerValue: t }),
                  this.props.onChange &&
                    this.props.onChange(this.props.name, e);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.props.value !== e.value &&
                  this.setState({
                    value: this.props.value,
                    pickerValue: this.getHexString(this.props.value)
                  });
              }
            },
            {
              key: 'getHexString',
              value: function (e) {
                return '#' + this.color.set(e).getHexString();
              }
            },
            {
              key: 'render',
              value: function () {
                return (0, f.jsxs)('span', {
                  className: 'color-widget',
                  children: [
                    (0, f.jsx)('input', {
                      type: 'color',
                      className: 'color',
                      value: this.state.pickerValue,
                      title: this.state.value,
                      onChange: this.onChange
                    }),
                    (0, f.jsx)('input', {
                      type: 'text',
                      className: 'color_value',
                      value: this.state.value,
                      onKeyUp: this.onKeyUp,
                      onChange: this.onChangeText
                    })
                  ]
                });
              }
            }
          ]) && Kr(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function ao(e) {
        return (
          (ao =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          ao(e)
        );
      }
      function so(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, mo(r.key), r);
        }
      }
      function lo(e, t) {
        return (
          (lo = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          lo(e, t)
        );
      }
      function co(e, t) {
        if (t && ('object' === ao(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return uo(e);
      }
      function uo(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function po(e) {
        return (
          (po = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          po(e)
        );
      }
      function fo(e, t, n) {
        return (
          (t = mo(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function mo(e) {
        var t = (function (e, t) {
          if ('object' !== ao(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== ao(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === ao(t) ? t : String(t);
      }
      ro(io, 'propTypes', {
        componentname: I().string.isRequired,
        entity: I().object,
        name: I().string.isRequired,
        onChange: I().func,
        value: I().string
      }),
        ro(io, 'defaultProps', { value: '#ffffff' });
      var ho = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && lo(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = po(r);
              if (o) {
                var n = po(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return co(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
            fo(uo((t = i.call(this, e))), 'onChange', function (e) {
              var n = e.target.value;
              t.setState({ value: n }),
                t.props.onChange && t.props.onChange(t.props.name, n);
            }),
            (t.state = { value: t.props.value || '' }),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.props.value !== e.value &&
                  this.setState({ value: this.props.value });
              }
            },
            {
              key: 'render',
              value: function () {
                return (0, f.jsx)('input', {
                  type: 'text',
                  className: 'string',
                  value: this.state.value || '',
                  onChange: this.onChange
                });
              }
            }
          ]) && so(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function yo(e) {
        return (
          (yo =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          yo(e)
        );
      }
      function bo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Eo(r.key), r);
        }
      }
      function go(e, t) {
        return (
          (go = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          go(e, t)
        );
      }
      function vo(e, t) {
        if (t && ('object' === yo(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Ao(e);
      }
      function Ao(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Co(e) {
        return (
          (Co = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Co(e)
        );
      }
      function wo(e, t, n) {
        return (
          (t = Eo(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Eo(e) {
        var t = (function (e, t) {
          if ('object' !== yo(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== yo(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === yo(t) ? t : String(t);
      }
      fo(ho, 'propTypes', {
        componentname: I().string,
        entity: I().object,
        name: I().string.isRequired,
        onChange: I().func,
        value: I().any
      });
      var xo = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && go(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Co(r);
              if (o) {
                var n = Co(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return vo(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
            wo(Ao((t = i.call(this, e))), 'onMouseMove', function (e) {
              var n = parseFloat(t.state.value),
                r = [e.clientX, e.clientY],
                o = r[0] - t.prevPointer[0] - (r[1] - t.prevPointer[1]);
              t.distance += o;
              var i =
                t.onMouseDownValue +
                ((t.distance / (e.shiftKey ? 5 : 50)) * t.props.step) / 2;
              n !== (i = Math.min(t.props.max, Math.max(t.props.min, i))) &&
                t.setValue(i),
                (t.prevPointer = [e.clientX, e.clientY]);
            }),
            wo(Ao(t), 'onMouseDown', function (e) {
              e.preventDefault(),
                (t.distance = 0),
                (t.onMouseDownValue = t.state.value),
                (t.prevPointer = [e.clientX, e.clientY]),
                document.addEventListener('mousemove', t.onMouseMove, !1),
                document.addEventListener('mouseup', t.onMouseUp, !1);
            }),
            wo(Ao(t), 'onMouseUp', function () {
              document.removeEventListener('mousemove', t.onMouseMove, !1),
                document.removeEventListener('mouseup', t.onMouseUp, !1),
                Math.abs(t.distance) < 2 &&
                  (t.input.current.focus(), t.input.current.select());
            }),
            wo(Ao(t), 'onBlur', function () {
              t.setValue(parseFloat(t.input.current.value)),
                t.setState({ class: '' });
            }),
            wo(Ao(t), 'onChange', function (e) {
              t.setState({
                value: e.target.value,
                displayValue: e.target.value
              });
            }),
            wo(Ao(t), 'onKeyDown', function (e) {
              if ((e.stopPropagation(), 13 === e.keyCode))
                return (
                  t.setValue(parseFloat(t.input.current.value)),
                  void t.input.current.blur()
                );
              38 !== e.keyCode
                ? 40 !== e.keyCode ||
                  t.setValue(parseFloat(t.state.value) - 0.01)
                : t.setValue(parseFloat(t.state.value) + 0.01);
            }),
            (t.state = {
              value: t.props.value,
              displayValue:
                'number' == typeof t.props.value
                  ? t.props.value.toFixed(t.props.precision)
                  : ''
            }),
            (t.input = j.createRef()),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'componentDidMount',
              value: function () {
                (this.distance = 0),
                  (this.onMouseDownValue = 0),
                  (this.prevPointer = [0, 0]),
                  this.setValue(this.props.value),
                  this.onBlur();
              }
            },
            {
              key: 'setValue',
              value: function (e) {
                e !== this.state.value &&
                  void 0 !== e &&
                  ((e =
                    0 === this.props.precision ? parseInt(e) : parseFloat(e)) <
                    this.props.min && (e = this.props.min),
                  e > this.props.max && (e = this.props.max),
                  this.setState({
                    value: e,
                    displayValue: e.toFixed(this.props.precision)
                  }),
                  this.props.onChange &&
                    this.props.onChange(
                      this.props.name,
                      parseFloat(e.toFixed(5))
                    ));
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.props.value !== e.value &&
                  this.setState({
                    value: this.props.value,
                    displayValue: this.props.value.toFixed(this.props.precision)
                  });
              }
            },
            {
              key: 'render',
              value: function () {
                return (0, f.jsx)('input', {
                  ref: this.input,
                  className: 'number',
                  type: 'text',
                  value: this.state.displayValue,
                  onKeyDown: this.onKeyDown,
                  onChange: this.onChange,
                  onMouseDown: this.onMouseDown,
                  onFocus: this.onFocus,
                  onBlur: this.onBlur
                });
              }
            }
          ]) && bo(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function So(e) {
        return (
          (So =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          So(e)
        );
      }
      function Oo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Ro(r.key), r);
        }
      }
      function ko(e, t) {
        return (
          (ko = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ko(e, t)
        );
      }
      function jo(e, t) {
        if (t && ('object' === So(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return To(e);
      }
      function To(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Mo(e) {
        return (
          (Mo = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Mo(e)
        );
      }
      function Io(e, t, n) {
        return (
          (t = Ro(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Ro(e) {
        var t = (function (e, t) {
          if ('object' !== So(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== So(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === So(t) ? t : String(t);
      }
      wo(xo, 'propTypes', {
        componentname: I().string,
        entity: I().object,
        max: I().number,
        min: I().number,
        name: I().string,
        onChange: I().func,
        precision: I().number,
        step: I().number,
        value: I().number
      }),
        wo(xo, 'defaultProps', {
          min: -1 / 0,
          max: 1 / 0,
          value: 0,
          precision: 3,
          step: 1
        });
      var Po = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && ko(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Mo(r);
              if (o) {
                var n = Mo(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return jo(this, e);
            });
        function a(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
            Io(To((t = i.call(this, e))), 'onChange', function (e) {
              t.setState({ value: e }, function () {
                t.props.onChange && t.props.onChange(t.props.name, e.value);
              });
            });
          var n = t.props.value || '';
          return (t.state = { value: { value: n, label: n } }), t;
        }
        return (
          (t = a),
          (n = [
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.props;
                t.value !== e.value &&
                  this.setState({ value: { value: t.value, label: t.value } });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this.props.options.map(function (e) {
                  return { value: e, label: e };
                });
                return (0, f.jsx)(Tr, {
                  className: 'select-widget',
                  classNamePrefix: 'select',
                  options: e,
                  simpleValue: !0,
                  clearable: !0,
                  placeholder: '',
                  value: this.state.value,
                  noResultsText: 'No value found',
                  onChange: this.onChange,
                  searchable: !0
                });
              }
            }
          ]),
          n && Oo(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function No(e) {
        return (
          (No =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          No(e)
        );
      }
      function Lo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Ho(r.key), r);
        }
      }
      function _o(e, t) {
        return (
          (_o = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          _o(e, t)
        );
      }
      function Do(e, t) {
        if (t && ('object' === No(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Bo(e);
      }
      function Bo(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function zo(e) {
        return (
          (zo = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          zo(e)
        );
      }
      function Fo(e, t, n) {
        return (
          (t = Ho(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Ho(e) {
        var t = (function (e, t) {
          if ('object' !== No(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== No(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === No(t) ? t : String(t);
      }
      Io(Po, 'propTypes', {
        componentname: I().string.isRequired,
        entity: I().object,
        name: I().string.isRequired,
        onChange: I().func,
        options: I().array.isRequired,
        value: I().string
      });
      var Uo = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && _o(e, t);
        })(s, e);
        var n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = zo(o);
              if (i) {
                var n = zo(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Do(this, e);
            });
        function s(e) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            Fo(Bo((n = a.call(this, e))), 'notifyChanged', function (e) {
              n.props.onChange && n.props.onChange(n.props.name, e),
                n.setState({ value: e });
            }),
            Fo(Bo(n), 'onChange', function (e) {
              var t = e.target.value;
              n.setState({ value: t }), n.notifyChanged(t);
            }),
            Fo(Bo(n), 'removeMap', function () {
              n.setValue(''), n.notifyChanged('');
            }),
            Fo(Bo(n), 'openDialog', function () {
              t.Z.emit('opentexturesmodal', n.state.value, function (e) {
                if (e) {
                  var t = e.value;
                  'asset' !== e.type &&
                    (t =
                      '#' +
                      (function (e) {
                        var t = (function (e) {
                            if (e) {
                              var t = e.toString().match(/.*\/(.+?)\./);
                              if (t && t.length > 1) return t[1];
                            }
                            return '';
                          })(e),
                          n = document.querySelector(
                            "a-assets > img[src='" + e + "']"
                          );
                        if (n) t = n.id;
                        else {
                          if (
                            (isNaN(parseInt(t[0], 10)) || (t = 'i' + t),
                            document.getElementById(t))
                          ) {
                            for (
                              var r = 1;
                              document.getElementById(t + '_' + r);

                            )
                              r++;
                            t += '_' + r;
                          }
                          !(function (e, t, n) {
                            var r = null;
                            ((r = document.createElement('img')).id = t),
                              (r.src = n),
                              r &&
                                document
                                  .getElementsByTagName('a-assets')[0]
                                  .appendChild(r);
                          })(0, t, e);
                        }
                        return t;
                      })(e.src)),
                    n.props.onChange && n.props.onChange(n.props.name, t),
                    n.setValue(t);
                }
              });
            }),
            (n.state = { value: n.props.value || '' }),
            (n.canvas = j.createRef()),
            n
          );
        }
        return (
          (n = s),
          (r = [
            {
              key: 'componentDidMount',
              value: function () {
                this.setValue(this.props.value || '');
              }
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                var e = this.props.entity.components[this.props.componentname];
                if (e) {
                  var t = e.attrValue && e.attrValue[this.props.name];
                  t && t !== this.state.value && this.setValue(t);
                }
              }
            },
            {
              key: 'setValue',
              value: function (e) {
                var t,
                  n = this.canvas.current,
                  r = n.getContext('2d');
                function o(e) {
                  var t = e.src.replace(/^.*[\\/]/, '');
                  if (void 0 !== e && e.width > 0) {
                    n.title = t;
                    var o = n.width / e.width;
                    r.drawImage(e, 0, 0, e.width * o, e.height * o);
                  } else r.clearRect(0, 0, n.width, n.height);
                }
                var i,
                  a = '#' === e[0],
                  s = e instanceof HTMLImageElement;
                t = s
                  ? e.src
                  : a
                  ? (i = e).length > 1 &&
                    document.querySelector(i) &&
                    document.querySelector(i).getAttribute('src')
                  : AFRAME.utils.srcLoader.parseUrl(e);
                var l,
                  c = (function (e) {
                    for (var t in AFRAME.INSPECTOR.sceneEl.systems.material
                      .textureCache)
                      if (JSON.parse(t).src === e)
                        return AFRAME.INSPECTOR.sceneEl.systems.material
                          .textureCache[t];
                    return null;
                  })(e);
                if (((l = s || a ? 'asset' : 'url'), c))
                  c.then(function (e) {
                    o(e.image);
                  });
                else if (t) {
                  var u = new Image();
                  u.addEventListener(
                    'load',
                    function () {
                      o(u);
                    },
                    !1
                  ),
                    (u.src = t);
                } else r.clearRect(0, 0, n.width, n.height);
                this.setState({
                  value: s ? '#' + e.id : e,
                  valueType: l,
                  url: t
                });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = '';
                return (
                  this.state.value &&
                    (e =
                      'asset' === this.state.valueType
                        ? 'Asset ID: ' +
                          this.state.value +
                          '\nURL: ' +
                          this.state.url
                        : 'URL: ' + this.state.value),
                  (0, f.jsxs)('span', {
                    className: 'texture',
                    children: [
                      (0, f.jsx)('input', {
                        className: 'map_value string',
                        type: 'text',
                        title: e,
                        value: this.state.value,
                        onChange: this.onChange
                      }),
                      (0, f.jsx)('canvas', {
                        ref: this.canvas,
                        width: '32',
                        height: '16',
                        title: e,
                        onClick: this.openDialog
                      })
                    ]
                  })
                );
              }
            }
          ]),
          r && Lo(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      function Vo(e) {
        return (
          (Vo =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Vo(e)
        );
      }
      function Yo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Wo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Yo(Object(n), !0).forEach(function (t) {
                qo(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Yo(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Zo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Ko(r.key), r);
        }
      }
      function Qo(e, t) {
        return (
          (Qo = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Qo(e, t)
        );
      }
      function Go(e, t) {
        if (t && ('object' === Vo(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return $o(e);
      }
      function $o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Xo(e) {
        return (
          (Xo = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Xo(e)
        );
      }
      function qo(e, t, n) {
        return (
          (t = Ko(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Ko(e) {
        var t = (function (e, t) {
          if ('object' !== Vo(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Vo(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Vo(t) ? t : String(t);
      }
      Fo(Uo, 'propTypes', {
        componentname: I().string,
        entity: I().object,
        mapName: I().string,
        name: I().string.isRequired,
        onChange: I().func,
        value: I().oneOfType([I().object, I().string])
      }),
        Fo(Uo, 'defaultProps', { value: '', mapName: 'nomap', dataURL: '' });
      var Jo = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Qo(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Xo(r);
              if (o) {
                var n = Xo(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Go(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
            qo($o((t = i.call(this, e))), 'onChange', function (e, n) {
              t.setState(qo({}, e, parseFloat(n.toFixed(5))), function () {
                t.props.onChange && t.props.onChange(e, t.state);
              });
            }),
            (t.state = {
              x: e.value.x,
              y: e.value.y,
              z: e.value.z,
              w: e.value.w
            }),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'componentDidUpdate',
              value: function () {
                var e = this.props;
                (e.value.x === this.state.x &&
                  e.value.y === this.state.y &&
                  e.value.z === this.state.z &&
                  e.value.w === this.state.w) ||
                  this.setState({
                    x: e.value.x,
                    y: e.value.y,
                    z: e.value.z,
                    w: e.value.w
                  });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = {
                  componentname: this.props.componentname,
                  entity: this.props.entity,
                  onChange: this.onChange
                };
                return (0, f.jsxs)('div', {
                  className: 'vec4',
                  children: [
                    (0, f.jsx)(xo, Wo({ name: 'x', value: this.state.x }, e)),
                    (0, f.jsx)(xo, Wo({ name: 'y', value: this.state.y }, e)),
                    (0, f.jsx)(xo, Wo({ name: 'z', value: this.state.z }, e)),
                    (0, f.jsx)(xo, Wo({ name: 'w', value: this.state.w }, e))
                  ]
                });
              }
            }
          ]) && Zo(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function ei(e) {
        return (
          (ei =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          ei(e)
        );
      }
      function ti(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ni(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ti(Object(n), !0).forEach(function (t) {
                li(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ti(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ri(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, ci(r.key), r);
        }
      }
      function oi(e, t) {
        return (
          (oi = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          oi(e, t)
        );
      }
      function ii(e, t) {
        if (t && ('object' === ei(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return ai(e);
      }
      function ai(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function si(e) {
        return (
          (si = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          si(e)
        );
      }
      function li(e, t, n) {
        return (
          (t = ci(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function ci(e) {
        var t = (function (e, t) {
          if ('object' !== ei(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== ei(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === ei(t) ? t : String(t);
      }
      qo(Jo, 'propTypes', {
        componentname: I().string,
        entity: I().object,
        onChange: I().func,
        value: I().object.isRequired
      });
      var ui = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && oi(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = si(r);
              if (o) {
                var n = si(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return ii(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
            li(ai((t = i.call(this, e))), 'onChange', function (e, n) {
              t.setState(li({}, e, parseFloat(n.toFixed(5))), function () {
                t.props.onChange && t.props.onChange(e, t.state);
              });
            }),
            (t.state = { x: e.value.x, y: e.value.y, z: e.value.z }),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'componentDidUpdate',
              value: function () {
                var e = this.props;
                (e.value.x === this.state.x &&
                  e.value.y === this.state.y &&
                  e.value.z === this.state.z) ||
                  this.setState({ x: e.value.x, y: e.value.y, z: e.value.z });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = {
                  componentname: this.props.componentname,
                  entity: this.props.entity,
                  onChange: this.onChange
                };
                return (0, f.jsxs)('div', {
                  className: 'vec3',
                  children: [
                    (0, f.jsx)(xo, ni({ name: 'x', value: this.state.x }, e)),
                    (0, f.jsx)(xo, ni({ name: 'y', value: this.state.y }, e)),
                    (0, f.jsx)(xo, ni({ name: 'z', value: this.state.z }, e))
                  ]
                });
              }
            }
          ]) && ri(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function pi(e) {
        return (
          (pi =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          pi(e)
        );
      }
      function fi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function di(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? fi(Object(n), !0).forEach(function (t) {
                vi(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fi(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function mi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Ai(r.key), r);
        }
      }
      function hi(e, t) {
        return (
          (hi = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          hi(e, t)
        );
      }
      function yi(e, t) {
        if (t && ('object' === pi(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return bi(e);
      }
      function bi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function gi(e) {
        return (
          (gi = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          gi(e)
        );
      }
      function vi(e, t, n) {
        return (
          (t = Ai(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Ai(e) {
        var t = (function (e, t) {
          if ('object' !== pi(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== pi(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === pi(t) ? t : String(t);
      }
      li(ui, 'propTypes', {
        componentname: I().string,
        entity: I().object,
        onChange: I().func,
        value: I().object.isRequired
      });
      var Ci = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && hi(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = gi(r);
              if (o) {
                var n = gi(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return yi(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
            vi(bi((t = i.call(this, e))), 'onChange', function (e, n) {
              t.setState(vi({}, e, parseFloat(n.toFixed(5))), function () {
                t.props.onChange && t.props.onChange(e, t.state);
              });
            }),
            (t.state = { x: e.value.x, y: e.value.y }),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'componentDidUpdate',
              value: function () {
                var e = this.props;
                (e.value.x === this.state.x && e.value.y === this.state.y) ||
                  this.setState({ x: e.value.x, y: e.value.y });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = {
                  componentname: this.props.componentname,
                  entity: this.props.entity,
                  onChange: this.onChange
                };
                return (0, f.jsxs)('div', {
                  className: 'vec2',
                  children: [
                    (0, f.jsx)(xo, di({ name: 'x', value: this.state.x }, e)),
                    (0, f.jsx)(xo, di({ name: 'y', value: this.state.y }, e))
                  ]
                });
              }
            }
          ]) && mi(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function wi(e) {
        return (
          (wi =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          wi(e)
        );
      }
      function Ei(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ei(Object(n), !0).forEach(function (t) {
                Ti(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ei(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Si(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Mi(r.key), r);
        }
      }
      function Oi(e, t) {
        return (
          (Oi = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Oi(e, t)
        );
      }
      function ki(e, t) {
        if (t && ('object' === wi(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function ji(e) {
        return (
          (ji = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ji(e)
        );
      }
      function Ti(e, t, n) {
        return (
          (t = Mi(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Mi(e) {
        var t = (function (e, t) {
          if ('object' !== wi(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== wi(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === wi(t) ? t : String(t);
      }
      vi(Ci, 'propTypes', {
        componentname: I().string,
        entity: I().object,
        onChange: I().func,
        value: I().object.isRequired
      });
      var Ii = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Oi(e, t);
        })(l, e);
        var n,
          o,
          i,
          a,
          s =
            ((i = l),
            (a = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = ji(i);
              if (a) {
                var n = ji(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return ki(this, e);
            });
        function l(e) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            ((n = s.call(this, e)).id = e.componentname + ':' + e.name),
            -1 !==
              ['position', 'rotation', 'scale'].indexOf(
                n.props.componentname
              ) &&
              t.Z.on(
                'entitytransformed',
                r()(function (t) {
                  t === e.entity && n.forceUpdate();
                }, 250)
              ),
            n
          );
        }
        return (
          (n = l),
          (o = [
            {
              key: 'getWidget',
              value: function () {
                var e = this.props,
                  t =
                    'material' === e.componentname &&
                    ('envMap' === e.name || 'src' === e.name),
                  n = e.schema.type;
                'animation' === e.componentname &&
                  'loop' === e.name &&
                  (n = 'boolean');
                var r =
                    'selector' === e.schema.type
                      ? e.entity.getDOMAttribute(e.componentname)[e.name]
                      : e.data,
                  o = {
                    componentname: e.componentname,
                    entity: e.entity,
                    isSingle: e.isSingle,
                    name: e.name,
                    onChange: function (t, n) {
                      var r = e.componentname;
                      e.isSingle || (r += '.' + e.name),
                        d.apply(this, [e.entity, r, n]);
                    },
                    value: r
                  },
                  i = {
                    min: e.schema.hasOwnProperty('min') ? e.schema.min : -1 / 0,
                    max: e.schema.hasOwnProperty('max') ? e.schema.max : 1 / 0
                  };
                if (e.schema.oneOf && e.schema.oneOf.length > 0)
                  return (0, f.jsx)(
                    Po,
                    xi(xi({}, o), {}, { options: e.schema.oneOf })
                  );
                if ('map' === n || t) return (0, f.jsx)(Uo, xi({}, o));
                switch (n) {
                  case 'number':
                    return (0, f.jsx)(xo, xi(xi({}, o), i));
                  case 'int':
                    return (0, f.jsx)(
                      xo,
                      xi(xi(xi({}, o), i), {}, { precision: 0 })
                    );
                  case 'vec2':
                    return (0, f.jsx)(Ci, xi({}, o));
                  case 'vec3':
                    return (0, f.jsx)(ui, xi({}, o));
                  case 'vec4':
                    return (0, f.jsx)(Jo, xi({}, o));
                  case 'color':
                    return (0, f.jsx)(io, xi({}, o));
                  case 'boolean':
                    return (0, f.jsx)(Xr, xi({}, o));
                  default:
                    return (0, f.jsx)(ho, xi({}, o));
                }
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t =
                    'selector' === e.schema.type
                      ? e.entity.getDOMAttribute(e.componentname)[e.name]
                      : JSON.stringify(e.data),
                  n =
                    e.name + '\n - type: ' + e.schema.type + '\n - value: ' + t,
                  r = Hr()({
                    propertyRow: !0,
                    propertyRowDefined: e.isSingle
                      ? !!e.entity.getDOMAttribute(e.componentname)
                      : e.name in
                        (e.entity.getDOMAttribute(e.componentname) || {})
                  });
                return (0, f.jsxs)('div', {
                  className: r,
                  children: [
                    (0, f.jsx)('label', {
                      htmlFor: this.id,
                      className: 'text',
                      title: n,
                      children: e.name
                    }),
                    this.getWidget(e.schema.type)
                  ]
                });
              }
            }
          ]) && Si(n.prototype, o),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          l
        );
      })(j.Component);
      function Ri(e) {
        return (
          (Ri =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Ri(e)
        );
      }
      function Pi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, zi(r.key), r);
        }
      }
      function Ni(e, t) {
        return (
          (Ni = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Ni(e, t)
        );
      }
      function Li(e, t) {
        if (t && ('object' === Ri(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return _i(e);
      }
      function _i(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Di(e) {
        return (
          (Di = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Di(e)
        );
      }
      function Bi(e, t, n) {
        return (
          (t = zi(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function zi(e) {
        var t = (function (e, t) {
          if ('object' !== Ri(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Ri(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Ri(t) ? t : String(t);
      }
      Ti(Ii, 'propTypes', {
        componentname: I().string.isRequired,
        data: I().oneOfType([
          I().array.isRequired,
          I().bool.isRequired,
          I().number.isRequired,
          I().object.isRequired,
          I().string.isRequired
        ]),
        entity: I().object.isRequired,
        id: I().string,
        isSingle: I().bool.isRequired,
        name: I().string.isRequired,
        schema: I().object.isRequired
      });
      var Fi = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Ni(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Di(r);
              if (o) {
                var n = Di(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Li(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
            Bi(_i((t = i.call(this, e))), 'toggleVisibility', function (e) {
              'A' !== e.target.nodeName &&
                (t.setState({ collapsed: !t.state.collapsed }),
                'undefined' != typeof ga &&
                  ga('send', 'event', 'Components', 'collapse'));
            }),
            (t.state = { collapsed: t.props.collapsed }),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'render',
              value: function () {
                var e = {
                  collapsible: !0,
                  component: !0,
                  collapsed: this.state.collapsed
                };
                this.props.className && (e[this.props.className] = !0);
                var t = Hr()(e),
                  n = Hr()({ content: !0, hide: this.state.collapsed });
                return (0, f.jsxs)('div', {
                  id: this.props.id,
                  className: t,
                  children: [
                    (0, f.jsxs)('div', {
                      className: 'static',
                      onClick: this.toggleVisibility,
                      children: [
                        (0, f.jsx)('div', { className: 'collapse-button' }),
                        this.props.children[0]
                      ]
                    }),
                    (0, f.jsx)('div', {
                      className: n,
                      children: this.props.children[1]
                    })
                  ]
                });
              }
            }
          ]) && Pi(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      Bi(Fi, 'propTypes', {
        className: I().string,
        collapsed: I().bool,
        children: I().oneOfType([I().array, I().element]).isRequired,
        id: I().string
      }),
        Bi(Fi, 'defaultProps', { collapsed: !1 });
      var Hi = o(152),
        Ui = o.n(Hi);
      function Vi(e) {
        return (
          (Vi =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Vi(e)
        );
      }
      function Yi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Xi(r.key), r);
        }
      }
      function Wi(e, t) {
        return (
          (Wi = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Wi(e, t)
        );
      }
      function Zi(e, t) {
        if (t && ('object' === Vi(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Qi(e);
      }
      function Qi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Gi(e) {
        return (
          (Gi = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Gi(e)
        );
      }
      function $i(e, t, n) {
        return (
          (t = Xi(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Xi(e) {
        var t = (function (e, t) {
          if ('object' !== Vi(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Vi(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Vi(t) ? t : String(t);
      }
      var qi = AFRAME.schema.isSingleProperty,
        Ki = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Wi(e, t);
          })(l, e);
          var n,
            r,
            o,
            i,
            a,
            s =
              ((i = l),
              (a = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = Gi(i);
                if (a) {
                  var n = Gi(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return Zi(this, e);
              });
          function l(e) {
            var n;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, l),
              $i(Qi((n = s.call(this, e))), 'removeComponent', function (e) {
                var r = n.props.name;
                e.stopPropagation(),
                  confirm(
                    'Do you really want to remove component `' + r + '`?'
                  ) &&
                    (n.props.entity.removeAttribute(r),
                    t.Z.emit('componentremove', {
                      entity: n.props.entity,
                      component: r
                    }),
                    'undefined' != typeof ga &&
                      ga('send', 'event', 'Components', 'removeComponent', r));
              }),
              $i(Qi(n), 'renderPropertyRows', function () {
                var e = n.props.component;
                if (qi(e.schema)) {
                  var t = n.props.name,
                    r = AFRAME.components[t.split('__')[0]].schema;
                  return (0, f.jsx)(
                    Ii,
                    {
                      name: t,
                      schema: r,
                      data: e.data,
                      componentname: t,
                      isSingle: !0,
                      entity: n.props.entity
                    },
                    t
                  );
                }
                return Object.keys(e.schema)
                  .sort()
                  .map(function (t) {
                    return (0,
                    f.jsx)(Ii, { name: t, schema: e.schema[t], data: e.data[t], componentname: n.props.name, isSingle: !1, entity: n.props.entity }, t);
                  });
              }),
              (n.state = { entity: n.props.entity, name: n.props.name }),
              n
            );
          }
          return (
            (n = l),
            (o = [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  return t.entity !== e.entity
                    ? { entity: e.entity }
                    : t.name !== e.name
                    ? { name: e.name }
                    : null;
                }
              }
            ]),
            (r = [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  new (Ui())('[data-action="copy-component-to-clipboard"]', {
                    text: function (t) {
                      var n = t.getAttribute('data-component').toLowerCase();
                      return (
                        'undefined' != typeof ga &&
                          ga(
                            'send',
                            'event',
                            'Components',
                            'copyComponentToClipboard',
                            n
                          ),
                        (function (e, t) {
                          var n = (function (e, t) {
                              var n = e.components[t].data,
                                r = e.components[t].schema,
                                o = {};
                              for (var i in n)
                                if (r[i]) {
                                  var a = r[i].default,
                                    s = n[i];
                                  (s || a) && s !== a && (o[i] = n[i]);
                                }
                              return o;
                            })(e, t),
                            r = AFRAME.utils.styleParser.stringify(n);
                          return ''.concat(t, '="').concat(r, '"');
                        })(e.state.entity, n)
                      );
                    }
                  }).on('error', function (e) {
                    console.error(e);
                  }),
                    t.Z.on('entityupdate', function (t) {
                      t.entity === e.props.entity &&
                        t.component === e.props.name &&
                        e.forceUpdate();
                    });
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.name,
                    t = '';
                  return (
                    -1 !== e.indexOf('__') &&
                      ((t = e), (e = e.substr(0, e.indexOf('__')))),
                    (0, f.jsxs)(Fi, {
                      collapsed: this.props.isCollapsed,
                      children: [
                        (0, f.jsxs)('div', {
                          className: 'componentHeader collapsible-header',
                          children: [
                            (0, f.jsx)('span', {
                              className: 'componentTitle',
                              title: t || e,
                              children: (0, f.jsx)('span', { children: t || e })
                            }),
                            (0, f.jsxs)('div', {
                              className: 'componentHeaderActions',
                              children: [
                                (0, f.jsx)('a', {
                                  title: 'Copy to clipboard',
                                  'data-action': 'copy-component-to-clipboard',
                                  'data-component': t || e,
                                  className: 'button fa fa-clipboard'
                                }),
                                (0, f.jsx)('a', {
                                  title: 'Remove component',
                                  className: 'button fa fa-trash-o',
                                  onClick: this.removeComponent
                                })
                              ]
                            })
                          ]
                        }),
                        (0, f.jsx)('div', {
                          className: 'collapsible-content',
                          children: this.renderPropertyRows()
                        })
                      ]
                    })
                  );
                }
              }
            ]) && Yi(n.prototype, r),
            o && Yi(n, o),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            l
          );
        })(j.Component);
      $i(Ki, 'propTypes', {
        component: I().any,
        entity: I().object,
        isCollapsed: I().bool,
        name: I().string
      });
      const Ji = ['visible', 'position', 'scale', 'rotation'];
      function ea(e) {
        return (
          (ea =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          ea(e)
        );
      }
      function ta(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, sa(r.key), r);
        }
      }
      function na(e, t) {
        return (
          (na = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          na(e, t)
        );
      }
      function ra(e, t) {
        if (t && ('object' === ea(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return oa(e);
      }
      function oa(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ia(e) {
        return (
          (ia = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ia(e)
        );
      }
      function aa(e, t, n) {
        return (
          (t = sa(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function sa(e) {
        var t = (function (e, t) {
          if ('object' !== ea(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== ea(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === ea(t) ? t : String(t);
      }
      var la = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && na(e, t);
        })(s, e);
        var n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = ia(o);
              if (i) {
                var n = ia(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return ra(this, e);
            });
        function s(e) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            aa(oa((n = a.call(this, e))), 'getMixinOptions', function () {
              var e = n.props.entity.mixinEls.map(function (e) {
                return e.id;
              });
              return Array.prototype.slice
                .call(document.querySelectorAll('a-mixin'))
                .filter(function (t) {
                  return -1 === e.indexOf(t.id);
                })
                .sort()
                .map(function (e) {
                  return { value: e.id, label: e.id };
                });
            }),
            aa(oa(n), 'updateMixins', function (e) {
              var r = n.props.entity;
              n.setState({ mixins: e });
              var o = e
                .map(function (e) {
                  return e.value;
                })
                .join(' ');
              r.setAttribute('mixin', o),
                t.Z.emit('entityupdate', {
                  component: 'mixin',
                  entity: r,
                  property: '',
                  value: o
                }),
                'undefined' != typeof ga &&
                  ga('send', 'event', 'Components', 'addMixin');
            }),
            (n.state = { mixins: n.getMixinValue() }),
            n
          );
        }
        return (
          (n = s),
          (r = [
            {
              key: 'componentDidUpdate',
              value: function (e, t) {
                this.props.entity !== e.entity &&
                  this.setState({ mixins: this.getMixinValue() });
              }
            },
            {
              key: 'getMixinValue',
              value: function () {
                return (this.props.entity.getAttribute('mixin') || '')
                  .split(/\s+/g)
                  .filter(function (e) {
                    return !!e;
                  })
                  .map(function (e) {
                    return { label: e, value: e };
                  });
              }
            },
            {
              key: 'render',
              value: function () {
                return (0, f.jsx)('div', {
                  className: 'mixinOptions',
                  children: (0, f.jsxs)('div', {
                    className: 'propertyRow',
                    children: [
                      (0, f.jsx)('span', {
                        className: 'text',
                        children: 'mixins'
                      }),
                      (0, f.jsx)('span', {
                        className: 'mixinValue',
                        children: (0, f.jsx)(Tr, {
                          id: 'mixinSelect',
                          classNamePrefix: 'select',
                          options: this.getMixinOptions(),
                          isMulti: !0,
                          placeholder: 'Add mixin...',
                          noResultsText: 'No mixins found',
                          onChange: this.updateMixins.bind(this),
                          simpleValue: !0,
                          value: this.state.mixins
                        })
                      })
                    ]
                  })
                });
              }
            }
          ]) && ta(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      aa(la, 'propTypes', { entity: I().object.isRequired });
      const ca =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHdpZHRoPSI4NjEuOTUzOTgiIGhlaWdodD0iNDUxLjk5OTAyIiB2aWV3Qm94PSIwIDAgMjI4LjA1ODY2IDExOS41OTE0IiB2ZXJzaW9uPSIxLjEiIGlkPSJzdmcxMDQwIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjAgcjE1Mjk5IiBzb2RpcG9kaTpkb2NuYW1lPSJnaXRmLnN2ZyI+CiAgPGRlZnMgaWQ9ImRlZnMxMDM0Ii8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldyBpZD0iYmFzZSIgcGFnZWNvbG9yPSIjZmZmZmZmIiBib3JkZXJjb2xvcj0iIzY2NjY2NiIgYm9yZGVyb3BhY2l0eT0iMS4wIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp6b29tPSIwLjQ3NDgyNDY0IiBpbmtzY2FwZTpjeD0iMzMxLjkwNzgzIiBpbmtzY2FwZTpjeT0iNDQzLjU3MTM1IiBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgc2hvd2dyaWQ9ImZhbHNlIiBmaXQtbWFyZ2luLXRvcD0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgdW5pdHM9InB4IiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NCIgaW5rc2NhcGU6d2luZG93LXg9Ii00IiBpbmtzY2FwZTp3aW5kb3cteT0iLTQiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiLz4KICA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMTAzNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgICAgICA8ZGM6dGl0bGUvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZyBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaWQ9ImxheWVyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3LjE4MjcyLC0yMTUuNzY1MjQpIj4KICAgIDxnIGlkPSJnMTMyNyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMywtMS45MDc3NjIxLDIwOS40MTUyNCkiPgogICAgICA8ZyBpZD0iZzEyOTkiPgoJPGcgaWQ9ImcxMjg1Ij4KCQk8cGF0aCBpZD0icGF0aDEyODEiIGQ9Im0gNDE5LjY3MSw0MDMuNzI3IGMgMTQuNzU3LC0xNi41NTQgMjIuNTYxLC00MC43MzUgMjIuNTYxLC03My4zMTYgViAxNDguMzcgaCAtMzEuMTc0IHYgMjguNDggaCAtMC4zODUgYyAtNS45MDUsLTExLjAyOSAtMTQuMTEzLC0xOS4zMDMgLTI0LjYzMSwtMjQuODIzIC0xMC41MjQsLTUuNTE1IC0yMi4wNjksLTguMjc1IC0zNC42MzcsLTguMjc1IC0xNy4xOTMsMCAtMzEuNjkxLDMuMjcxIC00My40OSw5LjgxNCAtMTEuODA0LDYuNTQzIC0yMS4yOTksMTQuOTUgLTI4LjQ3OSwyNS4yMDkgLTcuMTg3LDEwLjI2NCAtMTIuMzE1LDIxLjU1MiAtMTUuMzk1LDMzLjg2OCAtMy4wNzksMTIuMzE1IC00LjYxOCwyNC4zNzggLTQuNjE4LDM2LjE3NyAwLDEzLjYwMyAxLjg1OCwyNi40OTYgNS41ODEsMzguNjc5IDMuNzE2LDEyLjE5IDkuMjk2LDIyLjkgMTYuNzQxLDMyLjEzNyA3LjQzOSw5LjIzNiAxNi42NzUsMTYuNTQ4IDI3LjcxLDIxLjkzNiAxMS4wMzUsNS4zODggMjMuOTk0LDguMDgyIDM4Ljg3Nyw4LjA4MiA2LjE1OCwwIDEyLjM3NiwtMC43NjkgMTguNjY1LC0yLjMwOSA2LjI5MSwtMS41MzkgMTIuMTksLTMuNzgyIDE3LjcxLC02LjczNSA1LjUxNCwtMi45NDYgMTAuNDUyLC02LjY2OSAxNC44MTcsLTExLjE2IDQuMzYsLTQuNDg3IDcuOTUsLTkuODEzIDEwLjc3NiwtMTUuOTcyIGggMC43NTcgdiAxMy4wODQgYyAwLDExLjI5MyAtMS4wOTQsMjEuNTUzIC0zLjI3MiwzMC43OSAtMi4xODIsOS4yMzcgLTUuNzEyLDE3LjEyNyAtMTAuNTgzLDIzLjY2OCAtNC44NzcsNi41NDMgLTExLjAzNSwxMS42NzIgLTE4LjQ3NCwxNS4zOTUgLTcuNDQ1LDMuNzE3IC0xNi41NDksNS41ODEgLTI3LjMyNSw1LjU4MSAtNS4zODksMCAtMTEuMDM1LC0wLjU3OSAtMTYuOTM1LC0xLjczMiAtMi4xMywtMC40MTYgLTQuMiwtMC45MjggLTYuMjExLC0xLjUzIC0yLjE4OCwtMC43NzIgLTQuMzU4LC0xLjU1NyAtNi41MSwtMi4zNTYgLTAuMiwtMC4wODUgLTAuMzk5LC0wLjE3MiAtMC41OTgsLTAuMjU5IHYgMC4wMzYgQyAyMzYuNjIyLDM2NC41ODMgMTgwLjk5MiwzMTAuOTA5IDE4MC45OTIsMjUwLjAwMyBjIDAsLTk3LjE0NyAxNDEuNTIzLC0xNzUuODk5IDMxNi4xLC0xNzUuODk5IDk3LjI1MywwIDE4NC40NTEsMjIuMTUgMjQyLjQzNiw2MC41OTMgQyA2NzYuMjQsNzAuMjgzIDU2Mi43NTcsMjUuMDIyIDQzMy4wMDUsMjUgMjM0LjI4MiwyNC45NjUgNzMuMTcsMTI1LjY3NCA3My4xNTMsMjQ5LjkzOCBjIC0wLjAxMiw4NC44MjEgNzUuMDQyLDE1OC42OTcgMTg1Ljg5MywxOTcuMDU4IDg4LjkxOSwzLjA0NCAxMzQuMDQ4LC0xMy40NTkgMTYwLjYyNSwtNDMuMjY5IHogTSA0MDYuMjQ4LDI3MS41MjYgYyAtMi4xODIsOS4yMzYgLTUuNTgsMTcuNTEyIC0xMC4xOTksMjQuODIzIC00LjYxNyw3LjMxNCAtMTAuNzE1LDEzLjIxOSAtMTguMjgsMTcuNzAzIC03LjU3MSw0LjQ5MyAtMTYuNzQyLDYuNzM1IC0yNy41MTcsNi43MzUgLTEwLjc3NywwIC0xOS43NjEsLTIuMjQyIC0yNi45NDEsLTYuNzM1IC03LjE4NiwtNC40ODQgLTEyLjk1OSwtMTAuMzkgLTE3LjMxOSwtMTcuNzAzIC00LjM2NiwtNy4zMTEgLTcuNDQ0LC0xNS40NTQgLTkuMjM3LC0yNC40MzkgLTEuNzk3LC04Ljk3OCAtMi42OTQsLTE3Ljk1NiAtMi42OTQsLTI2Ljk0IDAsLTkuNDg5IDEuMDg4LC0xOC42IDMuMjcxLC0yNy4zMjYgMi4xNzgsLTguNzE5IDUuNjQxLC0xNi40MTcgMTAuMzkyLC0yMy4wOTIgNC43NDUsLTYuNjY5IDEwLjgzNywtMTEuOTkxIDE4LjI4MSwtMTUuOTcyIDcuNDM5LC0zLjk3NSAxNi40MTcsLTUuOTY1IDI2Ljk0MSwtNS45NjUgMTAuMjU5LDAgMTguOTg0LDIuMDU3IDI2LjE3LDYuMTU4IDcuMTgsNC4xMDcgMTMuMDE5LDkuNTYxIDE3LjUxMSwxNi4zNTYgNC40ODYsNi44MDEgNy43NTgsMTQuNDMyIDkuODE0LDIyLjg5OSAyLjA1MSw4LjQ2NyAzLjA3OSwxNy4wNjYgMy4wNzksMjUuNzg2IDAsOS4yMzggLTEuMDk1LDE4LjQ3NSAtMy4yNzIsMjcuNzEyIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmYWZhZmEiLz4KCgkJPHBhdGggaWQ9InBhdGgxMjgzIiBkPSJtIDQzNC44NDksNDIyLjQ4NSBjIC0xOC44NTQsMTcuMTEzIC01Mi41MzIsMzYuNjQ3IC05OC4zOTcsNDQuMzE2IDMwLjcwNyw1LjMzOSA2My4wNjUsOC4xOTQgOTYuNDksOC4xOTggMTI5LjIzNiwwLjAyNSAyNDIuNDI1LC00NS4wOTEgMzA1Ljg4MSwtMTA5LjA1NSAtNTcuOTg0LDM4LjIwNiAtMTQ0LjgzLDU5Ljk1MSAtMjQxLjcyOCw1OS45NTEgLTIzLjAxOCwwLjAwMiAtNDAuNjI2LC0wLjgwOSAtNjIuMjQ2LC0zLjQxIHoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmYWZhZmEiLz4KCgk8L2c+CgoJPGcgaWQ9ImcxMjk1Ij4KCQk8ZyBpZD0iZzEyODkiPgoJCQk8cGF0aCBpZD0icGF0aDEyODciIGQ9Ik0gNjMzLjg0LDM0Ny45MDggSCA1ODYuODc1IFYgMTg5LjcwNSBoIC01OC45MjIgdiAtNDAuMjM0IGggMTY0LjgxIHYgNDAuMjM0IEggNjMzLjg0IFoiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIHN0eWxlPSJmaWxsOiNmYWZhZmEiLz4KCgkJPC9nPgoKCQk8ZyBpZD0iZzEyOTMiPgoJCQk8cGF0aCBpZD0icGF0aDEyOTEiIGQ9Ik0gNzY0LjE3MywzNDcuOTA4IEggNzE3LjIwNiBWIDE0OS40NzEgaCAxNDQuOTg4IHYgNDAuMjM0IGggLTk4LjAyMSB2IDM3LjEyOCBoIDg1LjgwMyB2IDQwLjIzMyBoIC04NS44MDMgeiIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgc3R5bGU9ImZpbGw6I2ZhZmFmYSIvPgoKCQk8L2c+CgoJPC9nPgoKCTxwYXRoIGlkPSJwYXRoMTI5NyIgZD0ibSA0NjkuNTU0LDEwMC4wMzEgaCAzMi43MTQgdiAyNDcuMzEzIGggLTMyLjcxNCB6IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBzdHlsZT0iZmlsbDojZmFmYWZhIi8+Cgo8L2c+CiAgICAgIDxnIGlkPSJnMTMwNSI+Cgk8cG9seWdvbiBpZD0icG9seWdvbjEzMDEiIHBvaW50cz0iODk1LjQzNSwxNTUuMjg5IDg5NS40MzUsMTc0LjQgODg5LjAxNywxNzQuNCA4ODkuMDE3LDE1NS4yODkgODgxLjY3LDE1NS4yODkgODgxLjY3LDE0OS43NjkgOTAyLjc4MiwxNDkuNzY5IDkwMi43ODIsMTU1LjI4OSA5MDIuNzgzLDE1NS4yODkgIiBzdHlsZT0iZmlsbDojZmFmYWZhIi8+CgoJPHBvbHlnb24gaWQ9InBvbHlnb24xMzAzIiBwb2ludHM9IjkxOS40MTEsMTY2LjE5IDkyMy42NTQsMTQ5Ljc2OSA5MzMuMTA3LDE0OS43NjkgOTMzLjEwNywxNzQuNCA5MjcuMDY5LDE3NC40IDkyNy4wNjksMTU1LjcwMyA5MjcuMDAxLDE1NS43MDMgOTIxLjgyNiwxNzQuNCA5MTYuOTI5LDE3NC40IDkxMS43NTIsMTU1LjcwMyA5MTEuNjgzLDE1NS43MDMgOTExLjY4MywxNzQuNCA5MDUuNjQ3LDE3NC40IDkwNS42NDcsMTQ5Ljc2OSA5MTUuMSwxNDkuNzY5IDkxOS4zNDIsMTY2LjE5ICIgc3R5bGU9ImZpbGw6I2ZhZmFmYSIvPgoKPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==';
      function ua(e) {
        return (
          (ua =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          ua(e)
        );
      }
      function pa(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function fa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, ya(r.key), r);
        }
      }
      function da(e, t) {
        return (
          (da = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          da(e, t)
        );
      }
      function ma(e, t) {
        if (t && ('object' === ua(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function ha(e) {
        return (
          (ha = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ha(e)
        );
      }
      function ya(e) {
        var t = (function (e, t) {
          if ('object' !== ua(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== ua(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === ua(t) ? t : String(t);
      }
      function ba(e, n) {
        var r = AFRAME.INSPECTOR.selectedEntity;
        r.id !== n && ((r.id = n), t.Z.emit('entityidchange', r));
      }
      var va,
        Aa,
        Ca,
        wa = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && da(e, t);
          })(s, e);
          var n,
            r,
            o,
            i,
            a =
              ((o = s),
              (i = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = ha(o);
                if (i) {
                  var n = ha(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return ma(this, e);
              });
          function s() {
            return pa(this, s), a.apply(this, arguments);
          }
          return (
            (n = s),
            (r = [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  t.Z.on('entityupdate', function (t) {
                    t.entity === e.props.entity &&
                      -1 !== Ji.indexOf(t.component) &&
                      e.forceUpdate();
                  }),
                    t.Z.on('refreshsidebarobject3d', function () {
                      e.forceUpdate();
                    }),
                    new (Ui())('[data-action="copy-entity-to-clipboard"]', {
                      text: function (t) {
                        return b(e.props.entity);
                      }
                    }).on('error', function (e) {});
                }
              },
              {
                key: 'renderCommonAttributes',
                value: function () {
                  var e = this.props.entity;
                  return ['position', 'rotation', 'scale', 'visible'].map(
                    function (t) {
                      var n = AFRAME.components[t].schema,
                        r = e.object3D[t];
                      return (
                        'rotation' === t &&
                          (r = {
                            x: THREE.MathUtils.radToDeg(e.object3D.rotation.x),
                            y: THREE.MathUtils.radToDeg(e.object3D.rotation.y),
                            z: THREE.MathUtils.radToDeg(e.object3D.rotation.z)
                          }),
                        (0, f.jsx)(
                          Ii,
                          {
                            onChange: d,
                            name: t,
                            showHelp: !0,
                            schema: n,
                            data: r,
                            isSingle: !0,
                            componentname: t,
                            entity: e
                          },
                          t
                        )
                      );
                    }
                  );
                }
              },
              {
                key: 'exportToGLTF',
                value: function () {
                  var e = this.props.entity;
                  AFRAME.INSPECTOR.exporters.gltf.parse(
                    e.object3D,
                    function (t) {
                      p(
                        new Blob([t], { type: 'application/octet-stream' }),
                        (e.id || 'entity') + '.glb'
                      );
                    },
                    function (e) {
                      console.error(e);
                    },
                    { binary: !0 }
                  );
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.entity;
                  if (!t) return (0, f.jsx)('div', {});
                  var n = (0, f.jsxs)('div', {
                    children: [
                      (0, f.jsx)('a', {
                        title: 'Export entity to GLTF',
                        className: 'gltfIcon',
                        onClick: function (t) {
                          e.exportToGLTF(),
                            t.preventDefault(),
                            t.stopPropagation();
                        },
                        children: (0, f.jsx)('img', { src: ca })
                      }),
                      (0, f.jsx)('a', {
                        title: 'Copy entity HTML to clipboard',
                        'data-action': 'copy-entity-to-clipboard',
                        className: 'button fa fa-clipboard'
                      })
                    ]
                  });
                  return (0, f.jsxs)(Fi, {
                    id: 'componentEntityHeader',
                    className: 'commonComponents',
                    children: [
                      (0, f.jsxs)('div', {
                        className: 'collapsible-header',
                        children: [x(t), n]
                      }),
                      (0, f.jsxs)('div', {
                        className: 'collapsible-content',
                        children: [
                          (0, f.jsxs)('div', {
                            className: 'propertyRow',
                            children: [
                              (0, f.jsx)('label', {
                                htmlFor: 'id',
                                className: 'text',
                                children: 'ID'
                              }),
                              (0, f.jsx)(ho, {
                                onChange: ba,
                                entity: t,
                                name: 'id',
                                value: t.id
                              })
                            ]
                          }),
                          (0, f.jsxs)('div', {
                            className: 'propertyRow',
                            children: [
                              (0, f.jsx)('label', {
                                className: 'text',
                                children: 'class'
                              }),
                              (0, f.jsx)('span', {
                                children: t.getAttribute('class')
                              })
                            ]
                          }),
                          this.renderCommonAttributes(),
                          (0, f.jsx)(la, { entity: t })
                        ]
                      })
                    ]
                  });
                }
              }
            ]) && fa(n.prototype, r),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            s
          );
        })(j.Component);
      function Ea(e) {
        return (
          (Ea =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Ea(e)
        );
      }
      function xa(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function Sa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Ia(r.key), r);
        }
      }
      function Oa(e, t) {
        return (
          (Oa = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Oa(e, t)
        );
      }
      function ka(e, t) {
        if (t && ('object' === Ea(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return ja(e);
      }
      function ja(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ta(e) {
        return (
          (Ta = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ta(e)
        );
      }
      function Ma(e, t, n) {
        return (
          (t = Ia(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Ia(e) {
        var t = (function (e, t) {
          if ('object' !== Ea(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Ea(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Ea(t) ? t : String(t);
      }
      (va = wa),
        (Aa = 'propTypes'),
        (Ca = { entity: I().object }),
        (Aa = ya(Aa)) in va
          ? Object.defineProperty(va, Aa, {
              value: Ca,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (va[Aa] = Ca);
      var Ra = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Oa(e, t);
        })(a, e);
        var t,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Ta(r);
              if (o) {
                var n = Ta(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return ka(this, e);
            });
        function a() {
          var e;
          xa(this, a);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            Ma(
              ja((e = i.call.apply(i, [this].concat(n)))),
              'refresh',
              function () {
                e.forceUpdate();
              }
            ),
            e
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: 'render',
              value: function () {
                var e = this.props.entity,
                  t = e ? e.components : {},
                  n = Object.keys(t).filter(function (e) {
                    return -1 === Ji.indexOf(e);
                  }),
                  r = n.sort().map(function (r) {
                    return (0,
                    f.jsx)(Ki, { isCollapsed: n.length > 2, component: t[r], entity: e, name: r }, r);
                  });
                return (0, f.jsxs)('div', {
                  className: 'components',
                  children: [
                    (0, f.jsx)(wa, { entity: e }),
                    (0, f.jsx)(zr, { entity: e }),
                    r
                  ]
                });
              }
            }
          ]),
          n && Sa(t.prototype, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          a
        );
      })(j.Component);
      function Pa(e) {
        return (
          (Pa =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Pa(e)
        );
      }
      function Na(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Fa(r.key), r);
        }
      }
      function La(e, t) {
        return (
          (La = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          La(e, t)
        );
      }
      function _a(e, t) {
        if (t && ('object' === Pa(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Da(e);
      }
      function Da(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ba(e) {
        return (
          (Ba = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ba(e)
        );
      }
      function za(e, t, n) {
        return (
          (t = Fa(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Fa(e) {
        var t = (function (e, t) {
          if ('object' !== Pa(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Pa(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Pa(t) ? t : String(t);
      }
      Ma(Ra, 'propTypes', { entity: I().object });
      var Ha = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && La(e, t);
        })(s, e);
        var n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Ba(o);
              if (i) {
                var n = Ba(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return _a(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            za(Da((t = a.call(this, e))), 'handleToggle', function () {
              t.setState({ open: !t.state.open }),
                'undefined' != typeof ga &&
                  ga('send', 'event', 'Components', 'toggleSidebar');
            }),
            (t.state = { open: !1 }),
            t
          );
        }
        return (
          (n = s),
          (r = [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this;
                t.Z.on('componentremove', function (t) {
                  e.forceUpdate();
                }),
                  t.Z.on('componentadd', function (t) {
                    e.forceUpdate();
                  });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this.props.entity,
                  t = this.props.visible;
                return e && t
                  ? (0, f.jsx)('div', {
                      id: 'sidebar',
                      children: (0, f.jsx)(Ra, { entity: e })
                    })
                  : (0, f.jsx)('div', {});
              }
            }
          ]) && Na(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      function Ua(e) {
        return (
          (Ua =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Ua(e)
        );
      }
      function Va(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, $a(r.key), r);
        }
      }
      function Ya(e, t) {
        return (
          (Ya = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Ya(e, t)
        );
      }
      function Wa(e, t) {
        if (t && ('object' === Ua(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Za(e);
      }
      function Za(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Qa(e) {
        return (
          (Qa = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Qa(e)
        );
      }
      function Ga(e, t, n) {
        return (
          (t = $a(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function $a(e) {
        var t = (function (e, t) {
          if ('object' !== Ua(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Ua(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Ua(t) ? t : String(t);
      }
      za(Ha, 'propTypes', { entity: I().object, visible: I().bool });
      var Xa = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Ya(e, t);
        })(s, e);
        var t,
          n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Qa(o);
              if (i) {
                var n = Qa(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Wa(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            Ga(Za((t = a.call(this, e))), 'handleGlobalKeydown', function (e) {
              t.state.isOpen &&
                (27 === e.keyCode ||
                  (t.props.extraCloseKeyCode &&
                    e.keyCode === t.props.extraCloseKeyCode)) &&
                (t.close(), e.stopPropagation());
            }),
            Ga(Za(t), 'shouldClickDismiss', function (e) {
              var n = e.target;
              return (
                ('INPUT' !== n.tagName || 'file' !== n.type) &&
                n !== t.self.current &&
                !t.self.current.contains(n)
              );
            }),
            Ga(Za(t), 'handleGlobalMousedown', function (e) {
              t.props.closeOnClickOutside &&
                t.state.isOpen &&
                t.shouldClickDismiss(e) &&
                'function' == typeof t.props.onClose &&
                t.props.onClose();
            }),
            Ga(Za(t), 'close', function () {
              t.setState({ isOpen: !1 }), t.props.onClose && t.props.onClose();
            }),
            (t.state = { isOpen: t.props.isOpen }),
            (t.self = j.createRef()),
            t
          );
        }
        return (
          (t = s),
          (r = [
            {
              key: 'getDerivedStateFromProps',
              value: function (e, t) {
                return t.isOpen !== e.isOpen ? { isOpen: e.isOpen } : null;
              }
            }
          ]),
          (n = [
            {
              key: 'componentDidMount',
              value: function () {
                document.addEventListener('keyup', this.handleGlobalKeydown),
                  document.addEventListener(
                    'mousedown',
                    this.handleGlobalMousedown
                  );
              }
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                document.removeEventListener('keyup', this.handleGlobalKeydown),
                  document.removeEventListener(
                    'mousedown',
                    this.handleGlobalMousedown
                  );
              }
            },
            {
              key: 'render',
              value: function () {
                return (0, f.jsx)('div', {
                  id: this.props.id,
                  className: this.state.isOpen ? 'modal' : 'modal hide',
                  children: (0, f.jsxs)('div', {
                    className: 'modal-content',
                    ref: this.self,
                    children: [
                      (0, f.jsxs)('div', {
                        className: 'modal-header',
                        children: [
                          (0, f.jsx)('span', {
                            className: 'close',
                            onClick: this.close,
                            children: '×'
                          }),
                          (0, f.jsx)('h3', { children: this.props.title })
                        ]
                      }),
                      (0, f.jsx)('div', {
                        className: 'modal-body',
                        children: this.props.children
                      })
                    ]
                  })
                });
              }
            }
          ]) && Va(t.prototype, n),
          r && Va(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      function qa(e) {
        return (
          (qa =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          qa(e)
        );
      }
      function Ka(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, os(r.key), r);
        }
      }
      function Ja(e, t) {
        return (
          (Ja = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Ja(e, t)
        );
      }
      function es(e, t) {
        if (t && ('object' === qa(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return ts(e);
      }
      function ts(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ns(e) {
        return (
          (ns = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ns(e)
        );
      }
      function rs(e, t, n) {
        return (
          (t = os(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function os(e) {
        var t = (function (e, t) {
          if ('object' !== qa(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== qa(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === qa(t) ? t : String(t);
      }
      function is(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.split('/').pop();
        return t && (n = ss(n)), n;
      }
      function as(e) {
        return /^[A-Za-z]+[\w-]*$/.test(e);
      }
      function ss(e) {
        return e
          .split('.')
          .shift()
          .replace(/\s/, '-')
          .replace(/^\d+\s*/, '')
          .replace(/[\W]/, '')
          .toLowerCase();
      }
      Ga(Xa, 'propTypes', {
        id: I().string,
        children: I().oneOfType([I().array, I().element]).isRequired,
        isOpen: I().bool,
        extraCloseKeyCode: I().number,
        closeOnClickOutside: I().bool,
        onClose: I().func,
        title: I().string
      }),
        Ga(Xa, 'defaultProps', { closeOnClickOutside: !0 });
      var ls = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Ja(e, t);
        })(l, e);
        var n,
          r,
          o,
          i,
          a,
          s =
            ((i = l),
            (a = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = ns(i);
              if (a) {
                var n = ns(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return es(this, e);
            });
        function l(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            rs(ts((t = s.call(this, e))), 'onClose', function (e) {
              t.props.onClose && t.props.onClose();
            }),
            rs(ts(t), 'selectTexture', function (e) {
              t.props.onClose && t.props.onClose(e);
            }),
            rs(ts(t), 'generateFromRegistry', function () {
              var e = ts(t);
              AFRAME.INSPECTOR.assetsLoader.images.forEach(function (t) {
                var n = new Image();
                n.addEventListener('load', function () {
                  e.state.registryImages.push({
                    id: t.id,
                    src: t.fullPath,
                    width: t.width,
                    height: t.height,
                    name: t.id,
                    type: 'registry',
                    tags: t.tags,
                    value: 'url(' + t.fullPath + ')'
                  }),
                    e.setState({
                      registryImages: e.state.registryImages.slice()
                    });
                }),
                  (n.src = t.fullThumbPath);
              });
            }),
            rs(ts(t), 'generateFromAssets', function () {
              t.setState({ assetsImages: [] });
              var e = ts(t);
              Array.prototype.slice
                .call(document.querySelectorAll('a-assets img'))
                .forEach(function (t) {
                  var n = new Image();
                  n.addEventListener('load', function () {
                    e.state.assetsImages.push({
                      id: t.id,
                      src: n.src,
                      width: n.width,
                      height: n.height,
                      name: t.id,
                      type: 'asset',
                      value: '#' + t.id
                    }),
                      e.setState({ assetsImages: e.state.assetsImages });
                  }),
                    (n.src = t.src);
                });
            }),
            rs(ts(t), 'onNewUrl', function (e) {
              if (13 === e.keyCode) {
                var n = ts(t);
                t.preview.current.addEventListener('load', function e(t) {
                  var r = n.preview.current.src;
                  n.setState({
                    preview: {
                      width: n.preview.current.naturalWidth,
                      height: n.preview.current.naturalHeight,
                      src: r,
                      id: '',
                      name: is(r, !0),
                      filename: is(r),
                      type: 'new',
                      loaded: !0,
                      value: 'url(' + r + ')'
                    }
                  }),
                    n.preview.current.removeEventListener('load', e);
                }),
                  (t.preview.current.src = e.target.value),
                  t.imageName.current.focus();
              }
            }),
            rs(ts(t), 'onNameKeyUp', function (e) {
              13 === e.keyCode && t.isValidAsset() && t.addNewAsset();
            }),
            rs(ts(t), 'onNameChanged', function (e) {
              var n = t.state.preview;
              (n.name = e.target.value), t.setState({ preview: n });
            }),
            rs(ts(t), 'toggleNewDialog', function () {
              t.setState({ addNewDialogOpened: !t.state.addNewDialogOpened });
            }),
            rs(ts(t), 'onUrlChange', function (e) {
              t.setState({ newUrl: e.target.value });
            }),
            rs(ts(t), 'addNewAsset', function () {
              var e,
                n,
                r,
                o,
                i = ts(t);
              (e = t.state.preview.name),
                (n = t.state.preview.src),
                (r = function () {
                  i.generateFromAssets(),
                    i.setState({ addNewDialogOpened: !1 }),
                    i.clear();
                }),
                (o = null),
                ((o = document.createElement('img')).id = e),
                (o.src = n),
                (o.crossOrigin = 'anonymous'),
                o &&
                  ((o.onload = function () {
                    r && r();
                  }),
                  document.getElementsByTagName('a-assets')[0].appendChild(o));
            }),
            rs(ts(t), 'onChangeFilter', function (e) {
              t.setState({ filterText: e.target.value });
            }),
            (t.state = {
              filterText: '',
              isOpen: t.props.isOpen,
              loadedTextures: [],
              assetsImages: [],
              registryImages: [],
              addNewDialogOpened: !1,
              newUrl: '',
              preview: {
                width: 0,
                height: 0,
                src: '',
                id: '',
                name: '',
                filename: '',
                type: '',
                value: '',
                loaded: !1
              }
            }),
            (t.imageName = j.createRef()),
            (t.preview = j.createRef()),
            (t.registryGallery = j.createRef()),
            t
          );
        }
        return (
          (n = l),
          (o = [
            {
              key: 'getDerivedStateFromProps',
              value: function (e, t) {
                return t.isOpen !== e.isOpen ? { isOpen: e.isOpen } : null;
              }
            }
          ]),
          (r = [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this;
                t.Z.on('assetsimagesload', function (t) {
                  e.generateFromRegistry();
                }),
                  this.generateFromAssets();
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.state.isOpen &&
                  !AFRAME.INSPECTOR.assetsLoader.hasLoaded &&
                  AFRAME.INSPECTOR.assetsLoader.load(),
                  this.state.isOpen &&
                    this.state.isOpen !== e.isOpen &&
                    this.generateFromAssets();
              }
            },
            {
              key: 'clear',
              value: function () {
                this.setState({
                  preview: {
                    width: 0,
                    height: 0,
                    src: '',
                    id: '',
                    filename: '',
                    name: '',
                    type: '',
                    loaded: !1,
                    value: ''
                  },
                  newUrl: ''
                });
              }
            },
            {
              key: 'isValidAsset',
              value: function () {
                var e = as(this.state.preview.name);
                return this.state.preview.loaded && e;
              }
            },
            {
              key: 'renderRegistryImages',
              value: function () {
                var e = this,
                  t = function (t) {
                    e.setState({
                      preview: {
                        width: t.width,
                        height: t.height,
                        src: t.src,
                        id: '',
                        name: is(t.name, !0),
                        filename: is(t.src),
                        type: 'registry',
                        loaded: !0,
                        value: 'url(' + t.src + ')'
                      }
                    }),
                      e.imageName.current.focus();
                  },
                  n = this.state.filterText.toUpperCase();
                return this.state.registryImages
                  .filter(function (e) {
                    return (
                      e.id.toUpperCase().indexOf(n) > -1 ||
                      e.name.toUpperCase().indexOf(n) > -1 ||
                      e.tags.indexOf(n) > -1
                    );
                  })
                  .map(function (e) {
                    var n = t.bind(this, e);
                    return (0,
                    f.jsxs)('li', { onClick: n, children: [(0, f.jsx)('img', { width: '155px', height: '155px', src: e.src }), (0, f.jsxs)('div', { className: 'detail', children: [(0, f.jsx)('span', { className: 'title', children: e.name }), (0, f.jsx)('span', { children: is(e.src) }), (0, f.jsxs)('span', { children: [e.width, ' x ', e.height] })] })] }, e.src);
                  });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this.state.isOpen,
                  t = this.state.loadedTextures,
                  n = this.state.preview,
                  r = as(this.state.preview.name),
                  o = this.isValidAsset(),
                  i = this.state.addNewDialogOpened ? 'BACK' : 'LOAD TEXTURE';
                return (0, f.jsxs)(Xa, {
                  id: 'textureModal',
                  title: 'Textures',
                  isOpen: e,
                  onClose: this.onClose,
                  closeOnClickOutside: !1,
                  children: [
                    (0, f.jsx)('button', {
                      onClick: this.toggleNewDialog,
                      children: i
                    }),
                    (0, f.jsx)('div', {
                      className: this.state.addNewDialogOpened ? '' : 'hide',
                      children: (0, f.jsxs)('div', {
                        className: 'newimage',
                        children: [
                          (0, f.jsxs)('div', {
                            className: 'new_asset_options',
                            children: [
                              (0, f.jsx)('span', {
                                children:
                                  'Load a new texture from one of these sources:'
                              }),
                              (0, f.jsxs)('ul', {
                                children: [
                                  (0, f.jsxs)('li', {
                                    children: [
                                      (0, f.jsx)('span', {
                                        children: 'From URL (and press Enter):'
                                      }),
                                      ' ',
                                      (0, f.jsx)('input', {
                                        type: 'text',
                                        className: 'imageUrl',
                                        value: this.state.newUrl,
                                        onChange: this.onUrlChange,
                                        onKeyUp: this.onNewUrl
                                      })
                                    ]
                                  }),
                                  (0, f.jsxs)('li', {
                                    children: [
                                      (0, f.jsx)('span', {
                                        children: 'From assets registry: '
                                      }),
                                      (0, f.jsxs)('div', {
                                        className: 'assets search',
                                        children: [
                                          (0, f.jsx)('input', {
                                            placeholder: 'Filter...',
                                            value: this.state.filterText,
                                            onChange: this.onChangeFilter
                                          }),
                                          (0, f.jsx)('span', {
                                            className: 'fa fa-search'
                                          })
                                        ]
                                      }),
                                      (0, f.jsx)('ul', {
                                        ref: this.registryGallery,
                                        className: 'gallery',
                                        children: this.renderRegistryImages()
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          }),
                          (0, f.jsxs)('div', {
                            className: 'preview',
                            children: [
                              'Name:',
                              ' ',
                              (0, f.jsx)('input', {
                                ref: this.imageName,
                                className:
                                  this.state.preview.name.length > 0 && !r
                                    ? 'error'
                                    : '',
                                type: 'text',
                                value: this.state.preview.name,
                                onChange: this.onNameChanged,
                                onKeyUp: this.onNameKeyUp
                              }),
                              (0, f.jsx)('img', {
                                ref: this.preview,
                                width: '155px',
                                height: '155px',
                                src: n.src
                              }),
                              this.state.preview.loaded
                                ? (0, f.jsxs)('div', {
                                    className: 'detail',
                                    children: [
                                      (0, f.jsx)('span', {
                                        className: 'title',
                                        title: n.filename,
                                        children: n.filename
                                      }),
                                      (0, f.jsx)('br', {}),
                                      (0, f.jsxs)('span', {
                                        children: [n.width, ' x ', n.height]
                                      })
                                    ]
                                  })
                                : (0, f.jsx)('span', {}),
                              (0, f.jsx)('br', {}),
                              (0, f.jsx)('button', {
                                disabled: !o,
                                onClick: this.addNewAsset,
                                children: 'LOAD THIS TEXTURE'
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    (0, f.jsx)('div', {
                      className: this.state.addNewDialogOpened ? 'hide' : '',
                      children: (0, f.jsxs)('ul', {
                        className: 'gallery',
                        children: [
                          this.state.assetsImages
                            .sort(function (e, t) {
                              return e.id > t.id;
                            })
                            .map(
                              function (e) {
                                var t = this.selectTexture.bind(this, e),
                                  n =
                                    this.props.selectedTexture === '#' + e.id
                                      ? 'selected'
                                      : '';
                                return (0, f.jsxs)(
                                  'li',
                                  {
                                    onClick: t,
                                    className: n,
                                    children: [
                                      (0, f.jsx)('img', {
                                        width: '155px',
                                        height: '155px',
                                        src: e.src
                                      }),
                                      (0, f.jsxs)('div', {
                                        className: 'detail',
                                        children: [
                                          (0, f.jsx)('span', {
                                            className: 'title',
                                            children: e.name
                                          }),
                                          (0, f.jsx)('span', {
                                            children: is(e.src)
                                          }),
                                          (0, f.jsxs)('span', {
                                            children: [e.width, ' x ', e.height]
                                          })
                                        ]
                                      })
                                    ]
                                  },
                                  e.id
                                );
                              }.bind(this)
                            ),
                          t.map(function (e) {
                            var t = e.image,
                              n = this.selectTexture.bind(this, e);
                            return (0,
                            f.jsxs)('li', { onClick: n, children: [(0, f.jsx)('img', { width: '155px', height: '155px', src: t.src }), (0, f.jsxs)('div', { className: 'detail', children: [(0, f.jsx)('span', { className: 'title', children: 'Name:' }), ' ', (0, f.jsx)('span', { children: t.name }), (0, f.jsx)('span', { className: 'title', children: 'Filename:' }), ' ', (0, f.jsx)('span', { children: is(t.src) }), (0, f.jsxs)('span', { children: [t.width, ' x ', t.height] })] })] }, e.uuid);
                          })
                        ]
                      })
                    })
                  ]
                });
              }
            }
          ]) && Ka(n.prototype, r),
          o && Ka(n, o),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          l
        );
      })(j.Component);
      function cs(e) {
        return (
          (cs =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          cs(e)
        );
      }
      function us(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, ys(r.key), r);
        }
      }
      function ps(e, t) {
        return (
          (ps = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ps(e, t)
        );
      }
      function fs(e, t) {
        if (t && ('object' === cs(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return ds(e);
      }
      function ds(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ms(e) {
        return (
          (ms = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ms(e)
        );
      }
      function hs(e, t, n) {
        return (
          (t = ys(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function ys(e) {
        var t = (function (e, t) {
          if ('object' !== cs(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== cs(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === cs(t) ? t : String(t);
      }
      rs(ls, 'propTypes', {
        isOpen: I().bool,
        onClose: I().func,
        selectedTexture: I().string
      });
      var bs = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && ps(e, t);
        })(s, e);
        var t,
          n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = ms(o);
              if (i) {
                var n = ms(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return fs(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            hs(ds((t = a.call(this, e))), 'onClose', function () {
              t.props.onClose && t.props.onClose();
            }),
            (t.state = { isOpen: t.props.isOpen }),
            t
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: 'render',
              value: function () {
                return (0, f.jsx)(Xa, {
                  title: 'Shortcuts',
                  isOpen: this.state.isOpen,
                  onClose: this.onClose,
                  extraCloseKeyCode: 72,
                  children: (0, f.jsx)('div', {
                    className: 'help-lists',
                    children: [
                      [
                        { key: ['w'], description: 'Translate' },
                        { key: ['e'], description: 'Rotate' },
                        { key: ['r'], description: 'Scale' },
                        {
                          key: ['d'],
                          description: 'Duplicate selected entity'
                        },
                        { key: ['f'], description: 'Focus on selected entity' },
                        { key: ['g'], description: 'Toggle grid visibility' },
                        { key: ['n'], description: 'Add new entity' },
                        {
                          key: ['o'],
                          description: 'Toggle local between global transform'
                        },
                        {
                          key: ['supr | backspace'],
                          description: 'Delete selected entity'
                        }
                      ],
                      [
                        { key: ['0'], description: 'Toggle panels' },
                        { key: ['1'], description: 'Perspective view' },
                        { key: ['2'], description: 'Left view' },
                        { key: ['3'], description: 'Right view' },
                        { key: ['4'], description: 'Top view' },
                        { key: ['5'], description: 'Bottom view' },
                        { key: ['6'], description: 'Back view' },
                        { key: ['7'], description: 'Front view' },
                        {
                          key: ['ctrl | cmd', 'x'],
                          description: 'Cut selected entity'
                        },
                        {
                          key: ['ctrl | cmd', 'c'],
                          description: 'Copy selected entity'
                        },
                        {
                          key: ['ctrl | cmd', 'v'],
                          description: 'Paste entity'
                        },
                        { key: ['h'], description: 'Show this help' },
                        { key: ['Esc'], description: 'Unselect entity' },
                        {
                          key: ['ctrl', 'alt', 'i'],
                          description: 'Switch Edit and VR Modes'
                        }
                      ]
                    ].map(function (e, t) {
                      return (0, f.jsx)(
                        'ul',
                        {
                          className: 'help-list',
                          children: e.map(function (e) {
                            return (0, f.jsxs)(
                              'li',
                              {
                                className: 'help-key-unit',
                                children: [
                                  e.key.map(function (e) {
                                    return (0,
                                    f.jsx)('kbd', { className: 'help-key', children: (0, f.jsx)('span', { children: e }) }, e);
                                  }),
                                  (0, f.jsx)('span', {
                                    className: 'help-key-def',
                                    children: e.description
                                  })
                                ]
                              },
                              e.key
                            );
                          })
                        },
                        t
                      );
                    })
                  })
                });
              }
            }
          ]),
          (r = [
            {
              key: 'getDerivedStateFromProps',
              value: function (e, t) {
                return t.isOpen !== e.isOpen ? { isOpen: e.isOpen } : null;
              }
            }
          ]),
          n && us(t.prototype, n),
          r && us(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      function gs(e) {
        return (
          (gs =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          gs(e)
        );
      }
      function vs(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Ss(r.key), r);
        }
      }
      function As(e, t) {
        return (
          (As = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          As(e, t)
        );
      }
      function Cs(e, t) {
        if (t && ('object' === gs(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return ws(e);
      }
      function ws(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Es(e) {
        return (
          (Es = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Es(e)
        );
      }
      function xs(e, t, n) {
        return (
          (t = Ss(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Ss(e) {
        var t = (function (e, t) {
          if ('object' !== gs(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== gs(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === gs(t) ? t : String(t);
      }
      hs(bs, 'propTypes', { isOpen: I().bool, onClose: I().func });
      var Os = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && As(e, t);
        })(s, e);
        var n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Es(o);
              if (i) {
                var n = Es(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Cs(this, e);
            });
        function s(e) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            xs(ws((n = a.call(this, e))), 'onClick', function () {
              return n.props.selectEntity(n.props.entity);
            }),
            xs(ws(n), 'onDoubleClick', function () {
              return t.Z.emit('objectfocus', n.props.entity.object3D);
            }),
            xs(ws(n), 'toggleVisibility', function () {
              var e = n.props.entity,
                t =
                  'a-scene' === e.tagName.toLowerCase()
                    ? e.object3D.visible
                    : e.getAttribute('visible');
              e.setAttribute('visible', !t);
            }),
            (n.state = {}),
            n
          );
        }
        return (
          (n = s),
          (r = [
            {
              key: 'render',
              value: function () {
                var e,
                  t = this,
                  n = this.props.isFiltering,
                  r = this.props.isExpanded,
                  o = this.props.entity,
                  i = o.tagName.toLowerCase(),
                  a =
                    'a-scene' === i
                      ? null
                      : (0, f.jsx)('a', {
                          onClick: function () {
                            return y(o);
                          },
                          title: 'Clone entity',
                          className: 'button fa fa-clone'
                        }),
                  s =
                    'a-scene' === i
                      ? null
                      : (0, f.jsx)('a', {
                          onClick: function (e) {
                            e.stopPropagation(), m(o);
                          },
                          title: 'Remove entity',
                          className: 'button fa fa-trash'
                        }),
                  l = '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(this.props.depth);
                e =
                  o.children.length > 0 && !n
                    ? (0, f.jsx)('span', {
                        onClick: function () {
                          return t.props.toggleExpandedCollapsed(o);
                        },
                        className: 'collapsespace fa '.concat(
                          r ? 'fa-caret-down' : 'fa-caret-right'
                        )
                      })
                    : (0, f.jsx)('span', { className: 'collapsespace' });
                var c =
                    'a-scene' === i
                      ? o.object3D.visible
                      : o.getAttribute('visible'),
                  u = (0, f.jsx)('i', {
                    title: 'Toggle entity visibility',
                    className: 'fa ' + (c ? 'fa-eye' : 'fa-eye-slash'),
                    onClick: this.toggleVisibility
                  }),
                  p = Hr()({
                    active: this.props.isSelected,
                    entity: !0,
                    novisible: !c,
                    option: !0
                  });
                return (0, f.jsxs)('div', {
                  className: p,
                  onClick: this.onClick,
                  children: [
                    (0, f.jsxs)('span', {
                      children: [
                        u,
                        (0, f.jsx)('span', {
                          className: 'entityChildPadding',
                          dangerouslySetInnerHTML: { __html: l }
                        }),
                        e,
                        x(o, this.onDoubleClick)
                      ]
                    }),
                    (0, f.jsxs)('span', {
                      className: 'entityActions',
                      children: [a, s]
                    })
                  ]
                });
              }
            }
          ]) && vs(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      function ks(e) {
        return (
          (ks =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          ks(e)
        );
      }
      function js(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Ns(r.key), r);
        }
      }
      function Ts(e, t) {
        return (
          (Ts = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Ts(e, t)
        );
      }
      function Ms(e, t) {
        if (t && ('object' === ks(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Is(e);
      }
      function Is(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Rs(e) {
        return (
          (Rs = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Rs(e)
        );
      }
      function Ps(e, t, n) {
        return (
          (t = Ns(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Ns(e) {
        var t = (function (e, t) {
          if ('object' !== ks(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== ks(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === ks(t) ? t : String(t);
      }
      function Ls(e, t) {
        e.traverse(function (e) {
          'INSPECTOR' === e.userData.source && (e.visible = t);
        });
      }
      xs(Os, 'propTypes', {
        depth: I().number,
        entity: I().object,
        isExpanded: I().bool,
        isFiltering: I().bool,
        isSelected: I().bool,
        selectEntity: I().func,
        toggleExpandedCollapsed: I().func
      });
      var _s = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Ts(e, t);
        })(s, e);
        var n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Rs(o);
              if (i) {
                var n = Rs(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Ms(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            Ps(Is((t = a.call(this, e))), 'writeChanges', function () {
              var e = new XMLHttpRequest();
              e.open('POST', 'http://localhost:51234/save'),
                (e.onerror = function () {
                  alert(
                    'aframe-watcher not running. This feature requires a companion service running locally. npm install aframe-watcher to save changes back to file. Read more at supermedium.com/aframe-watcher'
                  );
                }),
                e.setRequestHeader('Content-Type', 'application/json'),
                e.send(JSON.stringify(AFRAME.INSPECTOR.history.updates));
            }),
            Ps(Is(t), 'toggleScenePlaying', function () {
              if (t.state.isPlaying)
                return (
                  AFRAME.scenes[0].pause(),
                  t.setState({ isPlaying: !1 }),
                  (AFRAME.scenes[0].isPlaying = !0),
                  void document
                    .getElementById('aframeInspectorMouseCursor')
                    .play()
                );
              (AFRAME.scenes[0].isPlaying = !1),
                AFRAME.scenes[0].play(),
                t.setState({ isPlaying: !0 });
            }),
            (t.state = { isPlaying: !1 }),
            t
          );
        }
        return (
          (n = s),
          (r = [
            {
              key: 'exportSceneToGLTF',
              value: function () {
                'undefined' != typeof ga &&
                  ga('send', 'event', 'SceneGraph', 'exportGLTF');
                var e =
                    AFRAME.scenes[0].id ||
                    (window.location.host + window.location.pathname)
                      .toString()
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/[^\w-]+/g, '-')
                      .replace(/--+/g, '-')
                      .replace(/^-+/, '')
                      .replace(/-+$/, ''),
                  t = AFRAME.scenes[0].object3D;
                Ls(t, !1),
                  AFRAME.INSPECTOR.exporters.gltf.parse(
                    t,
                    function (n) {
                      Ls(t, !0),
                        p(
                          new Blob([n], { type: 'application/octet-stream' }),
                          e + '.glb'
                        );
                    },
                    function (e) {
                      console.error(e);
                    },
                    { binary: !0 }
                  );
              }
            },
            {
              key: 'addEntity',
              value: function () {
                t.Z.emit('entitycreate', {
                  element: 'a-entity',
                  components: {}
                });
              }
            },
            {
              key: 'render',
              value: function () {
                var e = Hr()({ button: !0, fa: !0, 'fa-save': !0 });
                return (0, f.jsx)('div', {
                  id: 'toolbar',
                  children: (0, f.jsxs)('div', {
                    className: 'toolbarActions',
                    children: [
                      (0, f.jsx)('a', {
                        className: 'button fa fa-plus',
                        title: 'Add a new entity',
                        onClick: this.addEntity
                      }),
                      (0, f.jsx)('a', {
                        id: 'playPauseScene',
                        className:
                          'button fa ' +
                          (this.state.isPlaying ? 'fa-pause' : 'fa-play'),
                        title: this.state.isPlaying
                          ? 'Pause scene'
                          : 'Resume scene',
                        onClick: this.toggleScenePlaying
                      }),
                      (0, f.jsx)('a', {
                        className: 'gltfIcon',
                        title: 'Export to GLTF',
                        onClick: this.exportSceneToGLTF,
                        children: (0, f.jsx)('img', { src: ca })
                      }),
                      (0, f.jsx)('a', {
                        className: e,
                        title: 'Write changes with aframe-watcher.',
                        onClick: this.writeChanges
                      })
                    ]
                  })
                });
              }
            }
          ]) && js(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      function Ds(e) {
        return (
          (Ds =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Ds(e)
        );
      }
      function Bs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function zs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Bs(Object(n), !0).forEach(function (t) {
                Ws(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Bs(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Fs(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Zs(r.key), r);
        }
      }
      function Hs(e, t) {
        return (
          (Hs = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Hs(e, t)
        );
      }
      function Us(e, t) {
        if (t && ('object' === Ds(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Vs(e);
      }
      function Vs(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ys(e) {
        return (
          (Ys = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ys(e)
        );
      }
      function Ws(e, t, n) {
        return (
          (t = Zs(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Zs(e) {
        var t = (function (e, t) {
          if ('object' !== Ds(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Ds(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Ds(t) ? t : String(t);
      }
      var Qs = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Hs(e, t);
        })(l, e);
        var n,
          o,
          i,
          a,
          s =
            ((i = l),
            (a = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Ys(i);
              if (a) {
                var n = Ys(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Us(this, e);
            });
        function l(e) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            Ws(Vs((n = s.call(this, e))), 'selectEntity', function (e) {
              for (var r = !1, o = 0; o < n.state.filteredEntities.length; o++)
                n.state.filteredEntities[o].entity === e &&
                  (n.setState({ selectedEntity: e, selectedIndex: o }),
                  n.expandToRoot(e),
                  n.props.onChange && n.props.onChange(e),
                  t.Z.emit('entityselect', e, !0),
                  (r = !0));
              r || n.setState({ selectedEntity: null, selectedIndex: -1 });
            }),
            Ws(Vs(n), 'rebuildEntityOptions', function () {
              var e = [{ depth: 0, entity: n.props.scene }];
              !(function t(n, r) {
                if (n) {
                  r += 1;
                  for (var o = 0; o < n.children.length; o++) {
                    var i = n.children[o];
                    i.dataset.isInspector ||
                      !i.isEntity ||
                      i.isInspector ||
                      'aframeInspector' in i.dataset ||
                      (e.push({ entity: i, depth: r }), t(i, r));
                  }
                }
              })(n.props.scene, 0),
                n.setState({
                  entities: e,
                  filteredEntities: n.getFilteredEntities(n.state.filter, e)
                });
            }),
            Ws(Vs(n), 'selectIndex', function (e) {
              e >= 0 &&
                e < n.state.entities.length &&
                n.selectEntity(n.state.entities[e].entity);
            }),
            Ws(Vs(n), 'onFilterKeyUp', function (e) {
              27 === e.keyCode && n.clearFilter();
            }),
            Ws(Vs(n), 'onKeyDown', function (e) {
              switch (e.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                  e.preventDefault(), e.stopPropagation();
              }
            }),
            Ws(Vs(n), 'onKeyUp', function (e) {
              if (null !== n.props.selectedEntity)
                switch (e.keyCode) {
                  case 37:
                    n.isExpanded(n.props.selectedEntity) &&
                      n.toggleExpandedCollapsed(n.props.selectedEntity);
                    break;
                  case 38:
                    n.selectIndex(
                      n.previousExpandedIndexTo(n.state.selectedIndex)
                    );
                    break;
                  case 39:
                    n.isExpanded(n.props.selectedEntity) ||
                      n.toggleExpandedCollapsed(n.props.selectedEntity);
                    break;
                  case 40:
                    n.selectIndex(n.nextExpandedIndexTo(n.state.selectedIndex));
                }
            }),
            Ws(Vs(n), 'isVisibleInSceneGraph', function (e) {
              var t = e.parentNode;
              if (!t) return !1;
              for (; void 0 !== t && t.isEntity; ) {
                if (!n.isExpanded(t)) return !1;
                t = t.parentNode;
              }
              return !0;
            }),
            Ws(Vs(n), 'isExpanded', function (e) {
              return !0 === n.state.expandedElements.get(e);
            }),
            Ws(Vs(n), 'toggleExpandedCollapsed', function (e) {
              n.setState({
                expandedElements: n.state.expandedElements.set(
                  e,
                  !n.isExpanded(e)
                )
              });
            }),
            Ws(Vs(n), 'expandToRoot', function (e) {
              for (var t = e.parentNode; void 0 !== t && t.isEntity; )
                n.state.expandedElements.set(t, !0), (t = t.parentNode);
              n.setState({ expandedElements: n.state.expandedElements });
            }),
            Ws(Vs(n), 'previousExpandedIndexTo', function (e) {
              for (var t = e - 1; t >= 0; t--) {
                var r = n.state.entities[t].entity;
                if (n.isVisibleInSceneGraph(r)) return t;
              }
              return -1;
            }),
            Ws(Vs(n), 'nextExpandedIndexTo', function (e) {
              for (var t = e + 1; t < n.state.entities.length; t++) {
                var r = n.state.entities[t].entity;
                if (n.isVisibleInSceneGraph(r)) return t;
              }
              return -1;
            }),
            Ws(Vs(n), 'onChangeFilter', function (e) {
              var t = e.target.value;
              n.setState({ filter: t }), n.updateFilteredEntities(t);
            }),
            Ws(Vs(n), 'clearFilter', function () {
              n.setState({ filter: '' }), n.updateFilteredEntities('');
            }),
            Ws(Vs(n), 'renderEntities', function () {
              return n.state.filteredEntities.map(function (e, t) {
                return n.isVisibleInSceneGraph(e.entity) || n.state.filter
                  ? (0, j.createElement)(
                      Os,
                      zs(
                        zs({}, e),
                        {},
                        {
                          key: t,
                          isFiltering: !!n.state.filter,
                          isExpanded: n.isExpanded(e.entity),
                          isSelected: n.props.selectedEntity === e.entity,
                          selectEntity: n.selectEntity,
                          toggleExpandedCollapsed: n.toggleExpandedCollapsed
                        }
                      )
                    )
                  : null;
              });
            }),
            (n.state = {
              entities: [],
              expandedElements: new WeakMap([[e.scene, !0]]),
              filter: '',
              filteredEntities: [],
              selectedIndex: -1
            }),
            (n.rebuildEntityOptions = r()(
              n.rebuildEntityOptions.bind(Vs(n)),
              1e3
            )),
            (n.updateFilteredEntities = r()(
              n.updateFilteredEntities.bind(Vs(n)),
              500
            )),
            n
          );
        }
        return (
          (n = l),
          (o = [
            {
              key: 'componentDidMount',
              value: function () {
                this.rebuildEntityOptions(),
                  t.Z.on('entityidchange', this.rebuildEntityOptions),
                  t.Z.on('entitycreated', this.rebuildEntityOptions),
                  t.Z.on('entityclone', this.rebuildEntityOptions);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                e.selectedEntity !== this.props.selectedEntity &&
                  this.selectEntity(this.props.selectedEntity);
              }
            },
            {
              key: 'getFilteredEntities',
              value: function (e, t) {
                var n = this;
                return (
                  (t = t || this.state.entities),
                  e
                    ? t.filter(function (t) {
                        return (function (e, t) {
                          return (
                            !t ||
                            !(
                              -1 ===
                                e.id.toUpperCase().indexOf(t.toUpperCase()) &&
                              -1 ===
                                e.tagName
                                  .toUpperCase()
                                  .indexOf(t.toUpperCase()) &&
                              !e.classList.contains(t) &&
                              !e.matches(t)
                            )
                          );
                        })(t.entity, e || n.state.filter);
                      })
                    : t
                );
              }
            },
            {
              key: 'updateFilteredEntities',
              value: function (e) {
                this.setState({
                  filteredEntities: this.getFilteredEntities(e)
                });
              }
            },
            {
              key: 'render',
              value: function () {
                if (!this.props.visible) return null;
                var e = this.state.filter
                  ? (0, f.jsx)('a', {
                      onClick: this.clearFilter,
                      className: 'button fa fa-times'
                    })
                  : null;
                return (0, f.jsxs)('div', {
                  id: 'scenegraph',
                  className: 'scenegraph',
                  children: [
                    (0, f.jsxs)('div', {
                      className: 'scenegraph-toolbar',
                      children: [
                        (0, f.jsx)(_s, {}),
                        (0, f.jsxs)('div', {
                          className: 'search',
                          children: [
                            (0, f.jsx)('input', {
                              id: 'filter',
                              placeholder: 'Search...',
                              onChange: this.onChangeFilter,
                              onKeyUp: this.onFilterKeyUp,
                              value: this.state.filter
                            }),
                            e,
                            !this.state.filter &&
                              (0, f.jsx)('span', { className: 'fa fa-search' })
                          ]
                        })
                      ]
                    }),
                    (0, f.jsx)('div', {
                      className: 'outliner',
                      tabIndex: '0',
                      onKeyDown: this.onKeyDown,
                      onKeyUp: this.onKeyUp,
                      children: this.renderEntities()
                    })
                  ]
                });
              }
            }
          ]) && Fs(n.prototype, o),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          l
        );
      })(j.Component);
      function Gs(e) {
        return (
          (Gs =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Gs(e)
        );
      }
      function $s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Xs(r.key), r);
        }
      }
      function Xs(e) {
        var t = (function (e, t) {
          if ('object' !== Gs(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Gs(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Gs(t) ? t : String(t);
      }
      function qs(e, t) {
        return (
          (qs = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          qs(e, t)
        );
      }
      function Ks(e, t) {
        if (t && ('object' === Gs(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function Js(e) {
        return (
          (Js = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Js(e)
        );
      }
      Ws(Qs, 'propTypes', {
        id: I().string,
        onChange: I().func,
        scene: I().object,
        selectedEntity: I().object,
        visible: I().bool
      }),
        Ws(Qs, 'defaultProps', {
          selectedEntity: '',
          index: -1,
          id: 'left-sidebar'
        });
      var el = [
        {
          value: 'perspective',
          event: 'cameraperspectivetoggle',
          payload: null,
          label: 'Perspective'
        },
        {
          value: 'ortholeft',
          event: 'cameraorthographictoggle',
          payload: 'left',
          label: 'Left View'
        },
        {
          value: 'orthoright',
          event: 'cameraorthographictoggle',
          payload: 'right',
          label: 'Right View'
        },
        {
          value: 'orthotop',
          event: 'cameraorthographictoggle',
          payload: 'top',
          label: 'Top View'
        },
        {
          value: 'orthobottom',
          event: 'cameraorthographictoggle',
          payload: 'bottom',
          label: 'Bottom View'
        },
        {
          value: 'orthoback',
          event: 'cameraorthographictoggle',
          payload: 'back',
          label: 'Back View'
        },
        {
          value: 'orthofront',
          event: 'cameraorthographictoggle',
          payload: 'front',
          label: 'Front View'
        }
      ];
      function tl(e) {
        return el.filter(function (t) {
          return t.value === e;
        })[0];
      }
      var nl = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && qs(e, t);
        })(s, e);
        var n,
          r,
          o,
          i,
          a =
            ((o = s),
            (i = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Js(o);
              if (i) {
                var n = Js(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Ks(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            ((t = a.call(this, e)).state = { selectedCamera: 'perspective' }),
            (t.justChangedCamera = !1),
            t
          );
        }
        return (
          (n = s),
          (r = [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this;
                t.Z.on('cameratoggle', function (t) {
                  e.justChangedCamera
                    ? (e.justChangedCamera = !1)
                    : e.setState({ selectedCamera: t.value });
                });
              }
            },
            {
              key: 'onChange',
              value: function (e) {
                console.log(e),
                  (this.justChangedCamera = !0),
                  this.setState({ selectedCamera: e.value }),
                  t.Z.emit(e.event, e.payload);
              }
            },
            {
              key: 'render',
              value: function () {
                return (0, f.jsx)('div', {
                  id: 'cameraToolbar',
                  children: (0, f.jsx)(Tr, {
                    id: 'cameraSelect',
                    classNamePrefix: 'select',
                    options: el,
                    simpleValue: !0,
                    value: tl(this.state.selectedCamera),
                    isSearchable: !1,
                    onChange: this.onChange.bind(this)
                  })
                });
              }
            }
          ]) && $s(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          s
        );
      })(j.Component);
      function rl(e) {
        return (
          (rl =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          rl(e)
        );
      }
      function ol(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, ul(r.key), r);
        }
      }
      function il(e, t) {
        return (
          (il = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          il(e, t)
        );
      }
      function al(e, t) {
        if (t && ('object' === rl(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return sl(e);
      }
      function sl(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ll(e) {
        return (
          (ll = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ll(e)
        );
      }
      function cl(e, t, n) {
        return (
          (t = ul(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function ul(e) {
        var t = (function (e, t) {
          if ('object' !== rl(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== rl(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === rl(t) ? t : String(t);
      }
      var pl = [
          { value: 'translate', icon: 'fa-arrows-alt' },
          { value: 'rotate', icon: 'fa-repeat' },
          { value: 'scale', icon: 'fa-expand' }
        ],
        fl = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && il(e, t);
          })(s, e);
          var n,
            r,
            o,
            i,
            a =
              ((o = s),
              (i = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = ll(o);
                if (i) {
                  var n = ll(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return al(this, e);
              });
          function s(e) {
            var n;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              cl(
                sl((n = a.call(this, e))),
                'changeTransformMode',
                function (e) {
                  n.setState({ selectedTransform: e }),
                    t.Z.emit('transformmodechange', e),
                    'undefined' != typeof ga &&
                      ga('send', 'event', 'Toolbar', 'selectHelper', e);
                }
              ),
              cl(sl(n), 'onLocalChange', function (e) {
                var r = e.target.checked;
                n.setState({ localSpace: r }),
                  t.Z.emit('transformspacechanged', r ? 'local' : 'world');
              }),
              cl(sl(n), 'renderTransformButtons', function () {
                return pl.map(
                  function (e, t) {
                    var n,
                      r = e.value === this.state.selectedTransform,
                      o = Hr()(
                        (cl((n = { button: !0, fa: !0 }), e.icon, !0),
                        cl(n, 'active', r),
                        n)
                      );
                    return (0, f.jsx)(
                      'a',
                      {
                        title: e.value,
                        onClick: this.changeTransformMode.bind(this, e.value),
                        className: o
                      },
                      t
                    );
                  }.bind(sl(n))
                );
              }),
              (n.state = { selectedTransform: 'translate', localSpace: !1 }),
              n
            );
          }
          return (
            (n = s),
            (r = [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  t.Z.on('transformmodechange', function (t) {
                    e.setState({ selectedTransform: t });
                  }),
                    t.Z.on('transformspacechange', function () {
                      t.Z.emit(
                        'transformspacechanged',
                        e.state.localSpace ? 'world' : 'local'
                      ),
                        e.setState({ localSpace: !e.state.localSpace });
                    });
                }
              },
              {
                key: 'render',
                value: function () {
                  return (0, f.jsxs)('div', {
                    id: 'transformToolbar',
                    className: 'toolbarButtons',
                    children: [
                      this.renderTransformButtons(),
                      (0, f.jsxs)('span', {
                        className: 'local-transform',
                        children: [
                          (0, f.jsx)('input', {
                            id: 'local',
                            type: 'checkbox',
                            title:
                              'Toggle between local and world space transforms',
                            checked:
                              this.state.localSpace ||
                              'scale' === this.state.selectedTransform,
                            disabled: 'scale' === this.state.selectedTransform,
                            onChange: this.onLocalChange
                          }),
                          (0, f.jsx)('label', {
                            htmlFor: 'local',
                            title:
                              'Toggle between local and world space transforms',
                            children: 'local'
                          })
                        ]
                      })
                    ]
                  });
                }
              }
            ]) && ol(n.prototype, r),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            s
          );
        })(j.Component);
      function dl(e) {
        return (
          (dl =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          dl(e)
        );
      }
      function ml(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, hl(r.key), r);
        }
      }
      function hl(e) {
        var t = (function (e, t) {
          if ('object' !== dl(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== dl(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === dl(t) ? t : String(t);
      }
      function yl(e, t) {
        return (
          (yl = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          yl(e, t)
        );
      }
      function bl(e, t) {
        if (t && ('object' === dl(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function gl(e) {
        return (
          (gl = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          gl(e)
        );
      }
      var vl,
        Al = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && yl(e, t);
          })(s, e);
          var n,
            r,
            o,
            i,
            a =
              ((o = s),
              (i = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = gl(o);
                if (i) {
                  var n = gl(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return bl(this, e);
              });
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              ((t = a.call(this, e)).state = {
                hoveredEntity: null,
                selectedEntity: null
              }),
              t
            );
          }
          return (
            (n = s),
            (r = [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  t.Z.on('raycastermouseenter', function (t) {
                    e.setState({ hoveredEntity: t });
                  }),
                    t.Z.on('raycastermouseleave', function (t) {
                      e.setState({ hoveredEntity: t });
                    });
                }
              },
              {
                key: 'render',
                value: function () {
                  return (0, f.jsx)('div', {
                    id: 'viewportHud',
                    children: (0, f.jsx)('p', {
                      children: x(this.state.hoveredEntity)
                    })
                  });
                }
              }
            ]) && ml(n.prototype, r),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            s
          );
        })(j.Component);
      function Cl(e) {
        return (
          (Cl =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Cl(e)
        );
      }
      function wl(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function El(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? wl(Object(n), !0).forEach(function (t) {
                Tl(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : wl(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function xl(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, Ml(r.key), r);
        }
      }
      function Sl(e, t) {
        return (
          (Sl = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Sl(e, t)
        );
      }
      function Ol(e, t) {
        if (t && ('object' === Cl(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return kl(e);
      }
      function kl(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function jl(e) {
        return (
          (jl = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          jl(e)
        );
      }
      function Tl(e, t, n) {
        return (
          (t = Ml(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Ml(e) {
        var t = (function (e, t) {
          if ('object' !== Cl(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, 'string');
            if ('object' !== Cl(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' === Cl(t) ? t : String(t);
      }
      (THREE.ImageUtils.crossOrigin = ''),
        ((vl = document.createElement('link')).href =
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'),
        (vl.type = 'text/css'),
        (vl.rel = 'stylesheet'),
        (vl.media = 'screen,print'),
        vl.setAttribute('data-aframe-inspector', 'style'),
        document.head.appendChild(vl);
      var Il = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Sl(e, t);
          })(s, e);
          var n,
            r,
            o,
            i,
            a =
              ((o = s),
              (i = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = jl(o);
                if (i) {
                  var n = jl(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return Ol(this, e);
              });
          function s(e) {
            var n;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              Tl(kl((n = a.call(this, e))), 'onCloseHelpModal', function (e) {
                n.setState({ isHelpOpen: !1 });
              }),
              Tl(kl(n), 'onModalTextureOnClose', function (e) {
                n.setState({ isModalTexturesOpen: !1 }),
                  n.state.textureOnClose && n.state.textureOnClose(e);
              }),
              Tl(kl(n), 'toggleEdit', function () {
                n.state.inspectorEnabled
                  ? AFRAME.INSPECTOR.close()
                  : AFRAME.INSPECTOR.open();
              }),
              (n.state = {
                entity: null,
                inspectorEnabled: !0,
                isModalTexturesOpen: !1,
                sceneEl: AFRAME.scenes[0],
                visible: { scenegraph: !0, attributes: !0 }
              }),
              t.Z.on('togglesidebar', function (e) {
                'all' === e.which
                  ? n.state.visible.scenegraph || n.state.visible.attributes
                    ? n.setState({
                        visible: { scenegraph: !1, attributes: !1 }
                      })
                    : n.setState({
                        visible: { scenegraph: !0, attributes: !0 }
                      })
                  : 'attributes' === e.which
                  ? n.setState(function (e) {
                      return {
                        visible: El(
                          El({}, e.visible),
                          {},
                          { attributes: !e.visible.attributes }
                        )
                      };
                    })
                  : 'scenegraph' === e.which &&
                    n.setState(function (e) {
                      return {
                        visible: El(
                          El({}, e.visible),
                          {},
                          { scenegraph: !e.visible.scenegraph }
                        )
                      };
                    });
              }),
              n
            );
          }
          return (
            (n = s),
            (r = [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  t.Z.on(
                    'opentexturesmodal',
                    function (e, t) {
                      this.setState({
                        selectedTexture: e,
                        isModalTexturesOpen: !0,
                        textureOnClose: t
                      });
                    }.bind(this)
                  ),
                    t.Z.on('entityselect', function (t) {
                      e.setState({ entity: t });
                    }),
                    t.Z.on('inspectortoggle', function (t) {
                      e.setState({ inspectorEnabled: t });
                    }),
                    t.Z.on('openhelpmodal', function () {
                      e.setState({ isHelpOpen: !0 });
                    });
                }
              },
              {
                key: 'renderComponentsToggle',
                value: function () {
                  return this.state.inspectorEnabled &&
                    this.state.entity &&
                    !this.state.visible.attributes
                    ? (0, f.jsx)('div', {
                        className: 'toggle-sidebar right',
                        children: (0, f.jsx)('a', {
                          onClick: function () {
                            t.Z.emit('togglesidebar', { which: 'attributes' });
                          },
                          className: 'fa fa-plus',
                          title: 'Show components'
                        })
                      })
                    : null;
                }
              },
              {
                key: 'renderSceneGraphToggle',
                value: function () {
                  return !this.state.inspectorEnabled ||
                    this.state.visible.scenegraph
                    ? null
                    : (0, f.jsx)('div', {
                        className: 'toggle-sidebar left',
                        children: (0, f.jsx)('a', {
                          onClick: function () {
                            t.Z.emit('togglesidebar', { which: 'scenegraph' });
                          },
                          className: 'fa fa-plus',
                          title: 'Show scenegraph'
                        })
                      });
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.sceneEl,
                    t = this.state.inspectorEnabled
                      ? 'Back to Scene'
                      : 'Inspect Scene';
                  return (0, f.jsxs)('div', {
                    children: [
                      (0, f.jsx)('a', {
                        className: 'toggle-edit',
                        onClick: this.toggleEdit,
                        children: t
                      }),
                      this.renderSceneGraphToggle(),
                      this.renderComponentsToggle(),
                      (0, f.jsxs)('div', {
                        id: 'inspectorContainer',
                        className: this.state.inspectorEnabled ? '' : 'hidden',
                        children: [
                          (0, f.jsx)(Qs, {
                            scene: e,
                            selectedEntity: this.state.entity,
                            visible: this.state.visible.scenegraph
                          }),
                          (0, f.jsxs)('div', {
                            id: 'viewportBar',
                            children: [
                              (0, f.jsx)(nl, {}),
                              (0, f.jsx)(Al, {}),
                              (0, f.jsx)(fl, {})
                            ]
                          }),
                          (0, f.jsx)('div', {
                            id: 'rightPanel',
                            children: (0, f.jsx)(Ha, {
                              entity: this.state.entity,
                              visible: this.state.visible.attributes
                            })
                          })
                        ]
                      }),
                      (0, f.jsx)(bs, {
                        isOpen: this.state.isHelpOpen,
                        onClose: this.onCloseHelpModal
                      }),
                      (0, f.jsx)(ls, {
                        isOpen: this.state.isModalTexturesOpen,
                        selectedTexture: this.state.selectedTexture,
                        onClose: this.onModalTextureOnClose
                      })
                    ]
                  });
                }
              }
            ]) && xl(n.prototype, r),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            s
          );
        })(j.Component),
        Rl = '',
        Pl = {
          left: {
            position: new THREE.Vector3(-10, 0, 0),
            rotation: new THREE.Euler()
          },
          right: {
            position: new THREE.Vector3(10, 0, 0),
            rotation: new THREE.Euler()
          },
          top: {
            position: new THREE.Vector3(0, 10, 0),
            rotation: new THREE.Euler()
          },
          bottom: {
            position: new THREE.Vector3(0, -10, 0),
            rotation: new THREE.Euler()
          },
          back: {
            position: new THREE.Vector3(0, 0, -10),
            rotation: new THREE.Euler()
          },
          front: {
            position: new THREE.Vector3(0, 0, 10),
            rotation: new THREE.Euler()
          }
        };
      function Nl(e, t) {
        if ('OrthographicCamera' === e.type) {
          var n = Pl[t];
          n.position.copy(e.position),
            n.rotation.copy(e.rotation),
            (n.left = e.left),
            (n.right = e.right),
            (n.top = e.top),
            (n.bottom = e.bottom);
        }
      }
      const Ll = THREE;
      class _l {
        constructor() {
          (this.pluginCallbacks = []),
            this.register(function (e) {
              return new Ql(e);
            }),
            this.register(function (e) {
              return new Gl(e);
            }),
            this.register(function (e) {
              return new $l(e);
            }),
            this.register(function (e) {
              return new Kl(e);
            }),
            this.register(function (e) {
              return new Jl(e);
            }),
            this.register(function (e) {
              return new Xl(e);
            }),
            this.register(function (e) {
              return new ql(e);
            });
        }
        register(e) {
          return (
            -1 === this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.push(e),
            this
          );
        }
        unregister(e) {
          return (
            -1 !== this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
          );
        }
        parse(e, t, n, r) {
          const o = new Zl(),
            i = [];
          for (let e = 0, t = this.pluginCallbacks.length; e < t; e++)
            i.push(this.pluginCallbacks[e](o));
          o.setPlugins(i), o.write(e, t, r).catch(n);
        }
        parseAsync(e, t) {
          const n = this;
          return new Promise(function (r, o) {
            n.parse(e, r, o, t);
          });
        }
      }
      const Dl = 5121,
        Bl = 5123,
        zl = {};
      (zl[Ll.NearestFilter] = 9728),
        (zl[Ll.NearestMipmapNearestFilter] = 9984),
        (zl[Ll.NearestMipmapLinearFilter] = 9986),
        (zl[Ll.LinearFilter] = 9729),
        (zl[Ll.LinearMipmapNearestFilter] = 9985),
        (zl[Ll.LinearMipmapLinearFilter] = 9987),
        (zl[Ll.ClampToEdgeWrapping] = 33071),
        (zl[Ll.RepeatWrapping] = 10497),
        (zl[Ll.MirroredRepeatWrapping] = 33648);
      const Fl = {
        scale: 'scale',
        position: 'translation',
        quaternion: 'rotation',
        morphTargetInfluences: 'weights'
      };
      function Hl(e, t) {
        return (
          e.length === t.length &&
          e.every(function (e, n) {
            return e === t[n];
          })
        );
      }
      function Ul(e) {
        return 4 * Math.ceil(e / 4);
      }
      function Vl(e, t = 0) {
        const n = Ul(e.byteLength);
        if (n !== e.byteLength) {
          const r = new Uint8Array(n);
          if ((r.set(new Uint8Array(e)), 0 !== t))
            for (let o = e.byteLength; o < n; o++) r[o] = t;
          return r.buffer;
        }
        return e;
      }
      function Yl() {
        return 'undefined' == typeof document &&
          'undefined' != typeof OffscreenCanvas
          ? new OffscreenCanvas(1, 1)
          : document.createElement('canvas');
      }
      function Wl(e, t) {
        if (void 0 !== e.toBlob) return new Promise((n) => e.toBlob(n, t));
        let n;
        return (
          'image/jpeg' === t ? (n = 0.92) : 'image/webp' === t && (n = 0.8),
          e.convertToBlob({ type: t, quality: n })
        );
      }
      class Zl {
        constructor() {
          (this.plugins = []),
            (this.options = {}),
            (this.pending = []),
            (this.buffers = []),
            (this.byteOffset = 0),
            (this.buffers = []),
            (this.nodeMap = new Map()),
            (this.skins = []),
            (this.extensionsUsed = {}),
            (this.uids = new Map()),
            (this.uid = 0),
            (this.json = {
              asset: { version: '2.0', generator: 'THREE.GLTFExporter' }
            }),
            (this.cache = {
              meshes: new Map(),
              attributes: new Map(),
              attributesNormalized: new Map(),
              materials: new Map(),
              textures: new Map(),
              images: new Map()
            });
        }
        setPlugins(e) {
          this.plugins = e;
        }
        async write(e, t, n) {
          (this.options = Object.assign(
            {},
            {
              binary: !1,
              trs: !1,
              onlyVisible: !0,
              maxTextureSize: 1 / 0,
              animations: [],
              includeCustomExtensions: !1
            },
            n
          )),
            this.options.animations.length > 0 && (this.options.trs = !0),
            this.processInput(e),
            await Promise.all(this.pending);
          const r = this,
            o = r.buffers,
            i = r.json;
          n = r.options;
          const a = r.extensionsUsed,
            s = new Blob(o, { type: 'application/octet-stream' }),
            l = Object.keys(a);
          if (
            (l.length > 0 && (i.extensionsUsed = l),
            i.buffers &&
              i.buffers.length > 0 &&
              (i.buffers[0].byteLength = s.size),
            !0 === n.binary)
          ) {
            const e = new FileReader();
            e.readAsArrayBuffer(s),
              (e.onloadend = function () {
                const n = Vl(e.result),
                  r = new DataView(new ArrayBuffer(8));
                r.setUint32(0, n.byteLength, !0), r.setUint32(4, 5130562, !0);
                const o = Vl(
                  ((a = JSON.stringify(i)), new TextEncoder().encode(a).buffer),
                  32
                );
                var a;
                const s = new DataView(new ArrayBuffer(8));
                s.setUint32(0, o.byteLength, !0),
                  s.setUint32(4, 1313821514, !0);
                const l = new ArrayBuffer(12),
                  c = new DataView(l);
                c.setUint32(0, 1179937895, !0), c.setUint32(4, 2, !0);
                const u =
                  12 +
                  s.byteLength +
                  o.byteLength +
                  r.byteLength +
                  n.byteLength;
                c.setUint32(8, u, !0);
                const p = new Blob([l, s, o, r, n], {
                    type: 'application/octet-stream'
                  }),
                  f = new FileReader();
                f.readAsArrayBuffer(p),
                  (f.onloadend = function () {
                    t(f.result);
                  });
              });
          } else if (i.buffers && i.buffers.length > 0) {
            const e = new FileReader();
            e.readAsDataURL(s),
              (e.onloadend = function () {
                const n = e.result;
                (i.buffers[0].uri = n), t(i);
              });
          } else t(i);
        }
        serializeUserData(e, t) {
          if (0 === Object.keys(e.userData).length) return;
          const n = this.options,
            r = this.extensionsUsed;
          try {
            const o = JSON.parse(JSON.stringify(e.userData));
            if (n.includeCustomExtensions && o.gltfExtensions) {
              void 0 === t.extensions && (t.extensions = {});
              for (const e in o.gltfExtensions)
                (t.extensions[e] = o.gltfExtensions[e]), (r[e] = !0);
              delete o.gltfExtensions;
            }
            Object.keys(o).length > 0 && (t.extras = o);
          } catch (t) {
            console.warn(
              "THREE.GLTFExporter: userData of '" +
                e.name +
                "' won't be serialized because of JSON.stringify error - " +
                t.message
            );
          }
        }
        getUID(e, t = !1) {
          if (!1 === this.uids.has(e)) {
            const t = new Map();
            t.set(!0, this.uid++), t.set(!1, this.uid++), this.uids.set(e, t);
          }
          return this.uids.get(e).get(t);
        }
        isNormalizedNormalAttribute(e) {
          if (this.cache.attributesNormalized.has(e)) return !1;
          const t = new Ll.Vector3();
          for (let n = 0, r = e.count; n < r; n++)
            if (Math.abs(t.fromBufferAttribute(e, n).length() - 1) > 5e-4)
              return !1;
          return !0;
        }
        createNormalizedNormalAttribute(e) {
          const t = this.cache;
          if (t.attributesNormalized.has(e))
            return t.attributesNormalized.get(e);
          const n = e.clone(),
            r = new Ll.Vector3();
          for (let e = 0, t = n.count; e < t; e++)
            r.fromBufferAttribute(n, e),
              0 === r.x && 0 === r.y && 0 === r.z ? r.setX(1) : r.normalize(),
              n.setXYZ(e, r.x, r.y, r.z);
          return t.attributesNormalized.set(e, n), n;
        }
        applyTextureTransform(e, t) {
          let n = !1;
          const r = {};
          (0 === t.offset.x && 0 === t.offset.y) ||
            ((r.offset = t.offset.toArray()), (n = !0)),
            0 !== t.rotation && ((r.rotation = t.rotation), (n = !0)),
            (1 === t.repeat.x && 1 === t.repeat.y) ||
              ((r.scale = t.repeat.toArray()), (n = !0)),
            n &&
              ((e.extensions = e.extensions || {}),
              (e.extensions.KHR_texture_transform = r),
              (this.extensionsUsed.KHR_texture_transform = !0));
        }
        buildMetalRoughTexture(e, t) {
          if (e === t) return e;
          function n(e) {
            return e.encoding === Ll.sRGBEncoding
              ? function (e) {
                  return e < 0.04045
                    ? 0.0773993808 * e
                    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
                }
              : function (e) {
                  return e;
                };
          }
          console.warn(
            'THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.'
          );
          const r = e?.image,
            o = t?.image,
            i = Math.max(r?.width || 0, o?.width || 0),
            a = Math.max(r?.height || 0, o?.height || 0),
            s = Yl();
          (s.width = i), (s.height = a);
          const l = s.getContext('2d');
          (l.fillStyle = '#00ffff'), l.fillRect(0, 0, i, a);
          const c = l.getImageData(0, 0, i, a);
          if (r) {
            l.drawImage(r, 0, 0, i, a);
            const t = n(e),
              o = l.getImageData(0, 0, i, a).data;
            for (let e = 2; e < o.length; e += 4)
              c.data[e] = 256 * t(o[e] / 256);
          }
          if (o) {
            l.drawImage(o, 0, 0, i, a);
            const e = n(t),
              r = l.getImageData(0, 0, i, a).data;
            for (let t = 1; t < r.length; t += 4)
              c.data[t] = 256 * e(r[t] / 256);
          }
          l.putImageData(c, 0, 0);
          const u = (e || t).clone();
          return (
            (u.source = new Ll.Source(s)), (u.encoding = Ll.LinearEncoding), u
          );
        }
        processBuffer(e) {
          const t = this.json,
            n = this.buffers;
          return t.buffers || (t.buffers = [{ byteLength: 0 }]), n.push(e), 0;
        }
        processBufferView(e, t, n, r, o) {
          const i = this.json;
          let a;
          i.bufferViews || (i.bufferViews = []),
            (a = t === Dl ? 1 : t === Bl ? 2 : 4);
          const s = Ul(r * e.itemSize * a),
            l = new DataView(new ArrayBuffer(s));
          let c = 0;
          for (let o = n; o < n + r; o++)
            for (let n = 0; n < e.itemSize; n++) {
              let r;
              e.itemSize > 4
                ? (r = e.array[o * e.itemSize + n])
                : 0 === n
                ? (r = e.getX(o))
                : 1 === n
                ? (r = e.getY(o))
                : 2 === n
                ? (r = e.getZ(o))
                : 3 === n && (r = e.getW(o)),
                5126 === t
                  ? l.setFloat32(c, r, !0)
                  : 5125 === t
                  ? l.setUint32(c, r, !0)
                  : t === Bl
                  ? l.setUint16(c, r, !0)
                  : t === Dl && l.setUint8(c, r),
                (c += a);
            }
          const u = {
            buffer: this.processBuffer(l.buffer),
            byteOffset: this.byteOffset,
            byteLength: s
          };
          return (
            void 0 !== o && (u.target = o),
            34962 === o && (u.byteStride = e.itemSize * a),
            (this.byteOffset += s),
            i.bufferViews.push(u),
            { id: i.bufferViews.length - 1, byteLength: 0 }
          );
        }
        processBufferViewImage(e) {
          const t = this,
            n = t.json;
          return (
            n.bufferViews || (n.bufferViews = []),
            new Promise(function (r) {
              const o = new FileReader();
              o.readAsArrayBuffer(e),
                (o.onloadend = function () {
                  const e = Vl(o.result),
                    i = {
                      buffer: t.processBuffer(e),
                      byteOffset: t.byteOffset,
                      byteLength: e.byteLength
                    };
                  (t.byteOffset += e.byteLength), r(n.bufferViews.push(i) - 1);
                });
            })
          );
        }
        processAccessor(e, t, n, r) {
          const o = this.json;
          let i;
          if (e.array.constructor === Float32Array) i = 5126;
          else if (e.array.constructor === Uint32Array) i = 5125;
          else if (e.array.constructor === Uint16Array) i = Bl;
          else {
            if (e.array.constructor !== Uint8Array)
              throw new Error(
                'THREE.GLTFExporter: Unsupported bufferAttribute component type.'
              );
            i = Dl;
          }
          if ((void 0 === n && (n = 0), void 0 === r && (r = e.count), 0 === r))
            return null;
          const a = (function (e, t, n) {
            const r = {
              min: new Array(e.itemSize).fill(Number.POSITIVE_INFINITY),
              max: new Array(e.itemSize).fill(Number.NEGATIVE_INFINITY)
            };
            for (let o = t; o < t + n; o++)
              for (let t = 0; t < e.itemSize; t++) {
                let n;
                e.itemSize > 4
                  ? (n = e.array[o * e.itemSize + t])
                  : 0 === t
                  ? (n = e.getX(o))
                  : 1 === t
                  ? (n = e.getY(o))
                  : 2 === t
                  ? (n = e.getZ(o))
                  : 3 === t && (n = e.getW(o)),
                  (r.min[t] = Math.min(r.min[t], n)),
                  (r.max[t] = Math.max(r.max[t], n));
              }
            return r;
          })(e, n, r);
          let s;
          void 0 !== t && (s = e === t.index ? 34963 : 34962);
          const l = this.processBufferView(e, i, n, r, s),
            c = {
              bufferView: l.id,
              byteOffset: l.byteOffset,
              componentType: i,
              count: r,
              max: a.max,
              min: a.min,
              type: {
                1: 'SCALAR',
                2: 'VEC2',
                3: 'VEC3',
                4: 'VEC4',
                16: 'MAT4'
              }[e.itemSize]
            };
          return (
            !0 === e.normalized && (c.normalized = !0),
            o.accessors || (o.accessors = []),
            o.accessors.push(c) - 1
          );
        }
        processImage(e, t, n, r = 'image/png') {
          const o = this,
            i = o.cache,
            a = o.json,
            s = o.options,
            l = o.pending;
          i.images.has(e) || i.images.set(e, {});
          const c = i.images.get(e),
            u = r + ':flipY/' + n.toString();
          if (void 0 !== c[u]) return c[u];
          a.images || (a.images = []);
          const p = { mimeType: r },
            f = Yl();
          (f.width = Math.min(e.width, s.maxTextureSize)),
            (f.height = Math.min(e.height, s.maxTextureSize));
          const d = f.getContext('2d');
          if (
            (!0 === n && (d.translate(0, f.height), d.scale(1, -1)),
            void 0 !== e.data)
          ) {
            t !== Ll.RGBAFormat &&
              console.error('GLTFExporter: Only RGBAFormat is supported.'),
              (e.width > s.maxTextureSize || e.height > s.maxTextureSize) &&
                console.warn(
                  'GLTFExporter: Image size is bigger than maxTextureSize',
                  e
                );
            const n = new Uint8ClampedArray(e.height * e.width * 4);
            for (let t = 0; t < n.length; t += 4)
              (n[t + 0] = e.data[t + 0]),
                (n[t + 1] = e.data[t + 1]),
                (n[t + 2] = e.data[t + 2]),
                (n[t + 3] = e.data[t + 3]);
            d.putImageData(new ImageData(n, e.width, e.height), 0, 0);
          } else d.drawImage(e, 0, 0, f.width, f.height);
          !0 === s.binary
            ? l.push(
                Wl(f, r)
                  .then((e) => o.processBufferViewImage(e))
                  .then((e) => {
                    p.bufferView = e;
                  })
              )
            : void 0 !== f.toDataURL
            ? (p.uri = f.toDataURL(r))
            : l.push(
                Wl(f, r)
                  .then((e) => new FileReader().readAsDataURL(e))
                  .then((e) => {
                    p.uri = e;
                  })
              );
          const m = a.images.push(p) - 1;
          return (c[u] = m), m;
        }
        processSampler(e) {
          const t = this.json;
          t.samplers || (t.samplers = []);
          const n = {
            magFilter: zl[e.magFilter],
            minFilter: zl[e.minFilter],
            wrapS: zl[e.wrapS],
            wrapT: zl[e.wrapT]
          };
          return t.samplers.push(n) - 1;
        }
        processTexture(e) {
          const t = this.cache,
            n = this.json;
          if (t.textures.has(e)) return t.textures.get(e);
          n.textures || (n.textures = []);
          let r = e.userData.mimeType;
          'image/webp' === r && (r = 'image/png');
          const o = {
            sampler: this.processSampler(e),
            source: this.processImage(e.image, e.format, e.flipY, r)
          };
          e.name && (o.name = e.name),
            this._invokeAll(function (t) {
              t.writeTexture && t.writeTexture(e, o);
            });
          const i = n.textures.push(o) - 1;
          return t.textures.set(e, i), i;
        }
        processMaterial(e) {
          const t = this.cache,
            n = this.json;
          if (t.materials.has(e)) return t.materials.get(e);
          if (e.isShaderMaterial)
            return (
              console.warn('GLTFExporter: THREE.ShaderMaterial not supported.'),
              null
            );
          n.materials || (n.materials = []);
          const r = { pbrMetallicRoughness: {} };
          !0 !== e.isMeshStandardMaterial &&
            !0 !== e.isMeshBasicMaterial &&
            console.warn(
              'GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.'
            );
          const o = e.color.toArray().concat([e.opacity]);
          if (
            (Hl(o, [1, 1, 1, 1]) ||
              (r.pbrMetallicRoughness.baseColorFactor = o),
            e.isMeshStandardMaterial
              ? ((r.pbrMetallicRoughness.metallicFactor = e.metalness),
                (r.pbrMetallicRoughness.roughnessFactor = e.roughness))
              : ((r.pbrMetallicRoughness.metallicFactor = 0.5),
                (r.pbrMetallicRoughness.roughnessFactor = 0.5)),
            e.metalnessMap || e.roughnessMap)
          ) {
            const t = this.buildMetalRoughTexture(
                e.metalnessMap,
                e.roughnessMap
              ),
              n = { index: this.processTexture(t) };
            this.applyTextureTransform(n, t),
              (r.pbrMetallicRoughness.metallicRoughnessTexture = n);
          }
          if (e.map) {
            const t = { index: this.processTexture(e.map) };
            this.applyTextureTransform(t, e.map),
              (r.pbrMetallicRoughness.baseColorTexture = t);
          }
          if (e.emissive) {
            const t = e.emissive.clone().multiplyScalar(e.emissiveIntensity),
              n = Math.max(t.r, t.g, t.b);
            if (
              (n > 1 &&
                (t.multiplyScalar(1 / n),
                console.warn(
                  'THREE.GLTFExporter: Some emissive components exceed 1; emissive has been limited'
                )),
              n > 0 && (r.emissiveFactor = t.toArray()),
              e.emissiveMap)
            ) {
              const t = { index: this.processTexture(e.emissiveMap) };
              this.applyTextureTransform(t, e.emissiveMap),
                (r.emissiveTexture = t);
            }
          }
          if (e.normalMap) {
            const t = { index: this.processTexture(e.normalMap) };
            e.normalScale &&
              1 !== e.normalScale.x &&
              (t.scale = e.normalScale.x),
              this.applyTextureTransform(t, e.normalMap),
              (r.normalTexture = t);
          }
          if (e.aoMap) {
            const t = { index: this.processTexture(e.aoMap), texCoord: 1 };
            1 !== e.aoMapIntensity && (t.strength = e.aoMapIntensity),
              this.applyTextureTransform(t, e.aoMap),
              (r.occlusionTexture = t);
          }
          e.transparent
            ? (r.alphaMode = 'BLEND')
            : e.alphaTest > 0 &&
              ((r.alphaMode = 'MASK'), (r.alphaCutoff = e.alphaTest)),
            e.side === Ll.DoubleSide && (r.doubleSided = !0),
            '' !== e.name && (r.name = e.name),
            this.serializeUserData(e, r),
            this._invokeAll(function (t) {
              t.writeMaterial && t.writeMaterial(e, r);
            });
          const i = n.materials.push(r) - 1;
          return t.materials.set(e, i), i;
        }
        processMesh(e) {
          const t = this.cache,
            n = this.json,
            r = [e.geometry.uuid];
          if (Array.isArray(e.material))
            for (let t = 0, n = e.material.length; t < n; t++)
              r.push(e.material[t].uuid);
          else r.push(e.material.uuid);
          const o = r.join(':');
          if (t.meshes.has(o)) return t.meshes.get(o);
          const i = e.geometry;
          let a;
          a = e.isLineSegments
            ? 1
            : e.isLineLoop
            ? 2
            : e.isLine
            ? 3
            : e.isPoints
            ? 0
            : e.material.wireframe
            ? 1
            : 4;
          const s = {},
            l = {},
            c = [],
            u = [],
            p = {
              uv: 'TEXCOORD_0',
              uv2: 'TEXCOORD_1',
              color: 'COLOR_0',
              skinWeight: 'WEIGHTS_0',
              skinIndex: 'JOINTS_0'
            },
            f = i.getAttribute('normal');
          void 0 === f ||
            this.isNormalizedNormalAttribute(f) ||
            (console.warn(
              'THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one.'
            ),
            i.setAttribute('normal', this.createNormalizedNormalAttribute(f)));
          let d = null;
          for (let e in i.attributes) {
            if ('morph' === e.slice(0, 5)) continue;
            const n = i.attributes[e];
            if (
              ((e = p[e] || e.toUpperCase()),
              /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(
                e
              ) || (e = '_' + e),
              t.attributes.has(this.getUID(n)))
            ) {
              l[e] = t.attributes.get(this.getUID(n));
              continue;
            }
            d = null;
            const r = n.array;
            'JOINTS_0' !== e ||
              r instanceof Uint16Array ||
              r instanceof Uint8Array ||
              (console.warn(
                'GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'
              ),
              (d = new Ll.BufferAttribute(
                new Uint16Array(r),
                n.itemSize,
                n.normalized
              )));
            const o = this.processAccessor(d || n, i);
            null !== o && ((l[e] = o), t.attributes.set(this.getUID(n), o));
          }
          if (
            (void 0 !== f && i.setAttribute('normal', f),
            0 === Object.keys(l).length)
          )
            return null;
          if (
            void 0 !== e.morphTargetInfluences &&
            e.morphTargetInfluences.length > 0
          ) {
            const n = [],
              r = [],
              o = {};
            if (void 0 !== e.morphTargetDictionary)
              for (const t in e.morphTargetDictionary)
                o[e.morphTargetDictionary[t]] = t;
            for (let a = 0; a < e.morphTargetInfluences.length; ++a) {
              const s = {};
              let l = !1;
              for (const e in i.morphAttributes) {
                if ('position' !== e && 'normal' !== e) {
                  l ||
                    (console.warn(
                      'GLTFExporter: Only POSITION and NORMAL morph are supported.'
                    ),
                    (l = !0));
                  continue;
                }
                const n = i.morphAttributes[e][a],
                  r = e.toUpperCase(),
                  o = i.attributes[e];
                if (t.attributes.has(this.getUID(n, !0))) {
                  s[r] = t.attributes.get(this.getUID(n, !0));
                  continue;
                }
                const c = n.clone();
                if (!i.morphTargetsRelative)
                  for (let e = 0, t = n.count; e < t; e++)
                    c.setXYZ(
                      e,
                      n.getX(e) - o.getX(e),
                      n.getY(e) - o.getY(e),
                      n.getZ(e) - o.getZ(e)
                    );
                (s[r] = this.processAccessor(c, i)),
                  t.attributes.set(this.getUID(o, !0), s[r]);
              }
              u.push(s),
                n.push(e.morphTargetInfluences[a]),
                void 0 !== e.morphTargetDictionary && r.push(o[a]);
            }
            (s.weights = n),
              r.length > 0 && ((s.extras = {}), (s.extras.targetNames = r));
          }
          const m = Array.isArray(e.material);
          if (m && 0 === i.groups.length) return null;
          const h = m ? e.material : [e.material],
            y = m
              ? i.groups
              : [{ materialIndex: 0, start: void 0, count: void 0 }];
          for (let e = 0, n = y.length; e < n; e++) {
            const n = { mode: a, attributes: l };
            if (
              (this.serializeUserData(i, n),
              u.length > 0 && (n.targets = u),
              null !== i.index)
            ) {
              let r = this.getUID(i.index);
              (void 0 === y[e].start && void 0 === y[e].count) ||
                (r += ':' + y[e].start + ':' + y[e].count),
                t.attributes.has(r)
                  ? (n.indices = t.attributes.get(r))
                  : ((n.indices = this.processAccessor(
                      i.index,
                      i,
                      y[e].start,
                      y[e].count
                    )),
                    t.attributes.set(r, n.indices)),
                null === n.indices && delete n.indices;
            }
            const r = this.processMaterial(h[y[e].materialIndex]);
            null !== r && (n.material = r), c.push(n);
          }
          (s.primitives = c),
            n.meshes || (n.meshes = []),
            this._invokeAll(function (t) {
              t.writeMesh && t.writeMesh(e, s);
            });
          const b = n.meshes.push(s) - 1;
          return t.meshes.set(o, b), b;
        }
        processCamera(e) {
          const t = this.json;
          t.cameras || (t.cameras = []);
          const n = e.isOrthographicCamera,
            r = { type: n ? 'orthographic' : 'perspective' };
          return (
            n
              ? (r.orthographic = {
                  xmag: 2 * e.right,
                  ymag: 2 * e.top,
                  zfar: e.far <= 0 ? 0.001 : e.far,
                  znear: e.near < 0 ? 0 : e.near
                })
              : (r.perspective = {
                  aspectRatio: e.aspect,
                  yfov: Ll.MathUtils.degToRad(e.fov),
                  zfar: e.far <= 0 ? 0.001 : e.far,
                  znear: e.near < 0 ? 0 : e.near
                }),
            '' !== e.name && (r.name = e.type),
            t.cameras.push(r) - 1
          );
        }
        processAnimation(e, t) {
          const n = this.json,
            r = this.nodeMap;
          n.animations || (n.animations = []);
          const o = (e = _l.Utils.mergeMorphTargetTracks(e.clone(), t)).tracks,
            i = [],
            a = [];
          for (let e = 0; e < o.length; ++e) {
            const n = o[e],
              s = Ll.PropertyBinding.parseTrackName(n.name);
            let l = Ll.PropertyBinding.findNode(t, s.nodeName);
            const c = Fl[s.propertyName];
            if (
              ('bones' === s.objectName &&
                (l =
                  !0 === l.isSkinnedMesh
                    ? l.skeleton.getBoneByName(s.objectIndex)
                    : void 0),
              !l || !c)
            )
              return (
                console.warn(
                  'THREE.GLTFExporter: Could not export animation track "%s".',
                  n.name
                ),
                null
              );
            const u = 1;
            let p,
              f = n.values.length / n.times.length;
            c === Fl.morphTargetInfluences &&
              (f /= l.morphTargetInfluences.length),
              !0 ===
              n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline
                ? ((p = 'CUBICSPLINE'), (f /= 3))
                : (p =
                    n.getInterpolation() === Ll.InterpolateDiscrete
                      ? 'STEP'
                      : 'LINEAR'),
              a.push({
                input: this.processAccessor(new Ll.BufferAttribute(n.times, u)),
                output: this.processAccessor(
                  new Ll.BufferAttribute(n.values, f)
                ),
                interpolation: p
              }),
              i.push({
                sampler: a.length - 1,
                target: { node: r.get(l), path: c }
              });
          }
          return (
            n.animations.push({
              name: e.name || 'clip_' + n.animations.length,
              samplers: a,
              channels: i
            }),
            n.animations.length - 1
          );
        }
        processSkin(e) {
          const t = this.json,
            n = this.nodeMap,
            r = t.nodes[n.get(e)],
            o = e.skeleton;
          if (void 0 === o) return null;
          const i = e.skeleton.bones[0];
          if (void 0 === i) return null;
          const a = [],
            s = new Float32Array(16 * o.bones.length),
            l = new Ll.Matrix4();
          for (let t = 0; t < o.bones.length; ++t)
            a.push(n.get(o.bones[t])),
              l.copy(o.boneInverses[t]),
              l.multiply(e.bindMatrix).toArray(s, 16 * t);
          return (
            void 0 === t.skins && (t.skins = []),
            t.skins.push({
              inverseBindMatrices: this.processAccessor(
                new Ll.BufferAttribute(s, 16)
              ),
              joints: a,
              skeleton: n.get(i)
            }),
            (r.skin = t.skins.length - 1)
          );
        }
        processNode(e) {
          const t = this.json,
            n = this.options,
            r = this.nodeMap;
          t.nodes || (t.nodes = []);
          const o = {};
          if (n.trs) {
            const t = e.quaternion.toArray(),
              n = e.position.toArray(),
              r = e.scale.toArray();
            Hl(t, [0, 0, 0, 1]) || (o.rotation = t),
              Hl(n, [0, 0, 0]) || (o.translation = n),
              Hl(r, [1, 1, 1]) || (o.scale = r);
          } else
            e.matrixAutoUpdate && e.updateMatrix(),
              !1 ===
                Hl(
                  e.matrix.elements,
                  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                ) && (o.matrix = e.matrix.elements);
          if (
            ('' !== e.name && (o.name = String(e.name)),
            this.serializeUserData(e, o),
            e.isMesh || e.isLine || e.isPoints)
          ) {
            const t = this.processMesh(e);
            null !== t && (o.mesh = t);
          } else e.isCamera && (o.camera = this.processCamera(e));
          if ((e.isSkinnedMesh && this.skins.push(e), e.children.length > 0)) {
            const t = [];
            for (let r = 0, o = e.children.length; r < o; r++) {
              const o = e.children[r];
              if (o.visible || !1 === n.onlyVisible) {
                const e = this.processNode(o);
                null !== e && t.push(e);
              }
            }
            t.length > 0 && (o.children = t);
          }
          this._invokeAll(function (t) {
            t.writeNode && t.writeNode(e, o);
          });
          const i = t.nodes.push(o) - 1;
          return r.set(e, i), i;
        }
        processScene(e) {
          const t = this.json,
            n = this.options;
          t.scenes || ((t.scenes = []), (t.scene = 0));
          const r = {};
          '' !== e.name && (r.name = e.name), t.scenes.push(r);
          const o = [];
          for (let t = 0, r = e.children.length; t < r; t++) {
            const r = e.children[t];
            if (r.visible || !1 === n.onlyVisible) {
              const e = this.processNode(r);
              null !== e && o.push(e);
            }
          }
          o.length > 0 && (r.nodes = o), this.serializeUserData(e, r);
        }
        processObjects(e) {
          const t = new Ll.Scene();
          t.name = 'AuxScene';
          for (let n = 0; n < e.length; n++) t.children.push(e[n]);
          this.processScene(t);
        }
        processInput(e) {
          const t = this.options;
          (e = e instanceof Array ? e : [e]),
            this._invokeAll(function (t) {
              t.beforeParse && t.beforeParse(e);
            });
          const n = [];
          for (let t = 0; t < e.length; t++)
            e[t] instanceof Ll.Scene ? this.processScene(e[t]) : n.push(e[t]);
          n.length > 0 && this.processObjects(n);
          for (let e = 0; e < this.skins.length; ++e)
            this.processSkin(this.skins[e]);
          for (let n = 0; n < t.animations.length; ++n)
            this.processAnimation(t.animations[n], e[0]);
          this._invokeAll(function (t) {
            t.afterParse && t.afterParse(e);
          });
        }
        _invokeAll(e) {
          for (let t = 0, n = this.plugins.length; t < n; t++)
            e(this.plugins[t]);
        }
      }
      class Ql {
        constructor(e) {
          (this.writer = e), (this.name = 'KHR_lights_punctual');
        }
        writeNode(e, t) {
          if (!e.isLight) return;
          if (!e.isDirectionalLight && !e.isPointLight && !e.isSpotLight)
            return void console.warn(
              'THREE.GLTFExporter: Only directional, point, and spot lights are supported.',
              e
            );
          const n = this.writer,
            r = n.json,
            o = n.extensionsUsed,
            i = {};
          e.name && (i.name = e.name),
            (i.color = e.color.toArray()),
            (i.intensity = e.intensity),
            e.isDirectionalLight
              ? (i.type = 'directional')
              : e.isPointLight
              ? ((i.type = 'point'), e.distance > 0 && (i.range = e.distance))
              : e.isSpotLight &&
                ((i.type = 'spot'),
                e.distance > 0 && (i.range = e.distance),
                (i.spot = {}),
                (i.spot.innerConeAngle = (e.penumbra - 1) * e.angle * -1),
                (i.spot.outerConeAngle = e.angle)),
            void 0 !== e.decay &&
              2 !== e.decay &&
              console.warn(
                'THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2.'
              ),
            !e.target ||
              (e.target.parent === e &&
                0 === e.target.position.x &&
                0 === e.target.position.y &&
                -1 === e.target.position.z) ||
              console.warn(
                'THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1.'
              ),
            o[this.name] ||
              ((r.extensions = r.extensions || {}),
              (r.extensions[this.name] = { lights: [] }),
              (o[this.name] = !0));
          const a = r.extensions[this.name].lights;
          a.push(i),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = { light: a.length - 1 });
        }
      }
      class Gl {
        constructor(e) {
          (this.writer = e), (this.name = 'KHR_materials_unlit');
        }
        writeMaterial(e, t) {
          if (!e.isMeshBasicMaterial) return;
          const n = this.writer.extensionsUsed;
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = {}),
            (n[this.name] = !0),
            (t.pbrMetallicRoughness.metallicFactor = 0),
            (t.pbrMetallicRoughness.roughnessFactor = 0.9);
        }
      }
      class $l {
        constructor(e) {
          (this.writer = e),
            (this.name = 'KHR_materials_pbrSpecularGlossiness');
        }
        writeMaterial(e, t) {
          if (!e.isGLTFSpecularGlossinessMaterial) return;
          const n = this.writer,
            r = n.extensionsUsed,
            o = {};
          t.pbrMetallicRoughness.baseColorFactor &&
            (o.diffuseFactor = t.pbrMetallicRoughness.baseColorFactor);
          const i = [1, 1, 1];
          if (
            (e.specular.toArray(i, 0),
            (o.specularFactor = i),
            (o.glossinessFactor = e.glossiness),
            t.pbrMetallicRoughness.baseColorTexture &&
              (o.diffuseTexture = t.pbrMetallicRoughness.baseColorTexture),
            e.specularMap)
          ) {
            const t = { index: n.processTexture(e.specularMap) };
            n.applyTextureTransform(t, e.specularMap),
              (o.specularGlossinessTexture = t);
          }
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = o),
            (r[this.name] = !0);
        }
      }
      class Xl {
        constructor(e) {
          (this.writer = e), (this.name = 'KHR_materials_clearcoat');
        }
        writeMaterial(e, t) {
          if (!e.isMeshPhysicalMaterial) return;
          const n = this.writer,
            r = n.extensionsUsed,
            o = {};
          if (((o.clearcoatFactor = e.clearcoat), e.clearcoatMap)) {
            const t = { index: n.processTexture(e.clearcoatMap) };
            n.applyTextureTransform(t, e.clearcoatMap),
              (o.clearcoatTexture = t);
          }
          if (
            ((o.clearcoatRoughnessFactor = e.clearcoatRoughness),
            e.clearcoatRoughnessMap)
          ) {
            const t = { index: n.processTexture(e.clearcoatRoughnessMap) };
            n.applyTextureTransform(t, e.clearcoatRoughnessMap),
              (o.clearcoatRoughnessTexture = t);
          }
          if (e.clearcoatNormalMap) {
            const t = { index: n.processTexture(e.clearcoatNormalMap) };
            n.applyTextureTransform(t, e.clearcoatNormalMap),
              (o.clearcoatNormalTexture = t);
          }
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = o),
            (r[this.name] = !0);
        }
      }
      class ql {
        constructor(e) {
          (this.writer = e), (this.name = 'KHR_materials_iridescence');
        }
        writeMaterial(e, t) {
          if (!e.isMeshPhysicalMaterial) return;
          const n = this.writer,
            r = n.extensionsUsed,
            o = {};
          if (((o.iridescenceFactor = e.iridescence), e.iridescenceMap)) {
            const t = { index: n.processTexture(e.iridescenceMap) };
            n.applyTextureTransform(t, e.iridescenceMap),
              (o.iridescenceTexture = t);
          }
          if (
            ((o.iridescenceIor = e.iridescenceIOR),
            (o.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0]),
            (o.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]),
            e.iridescenceThicknessMap)
          ) {
            const t = { index: n.processTexture(e.iridescenceThicknessMap) };
            n.applyTextureTransform(t, e.iridescenceThicknessMap),
              (o.iridescenceThicknessTexture = t);
          }
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = o),
            (r[this.name] = !0);
        }
      }
      class Kl {
        constructor(e) {
          (this.writer = e), (this.name = 'KHR_materials_transmission');
        }
        writeMaterial(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 === e.transmission) return;
          const n = this.writer,
            r = n.extensionsUsed,
            o = {};
          if (((o.transmissionFactor = e.transmission), e.transmissionMap)) {
            const t = { index: n.processTexture(e.transmissionMap) };
            n.applyTextureTransform(t, e.transmissionMap),
              (o.transmissionTexture = t);
          }
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = o),
            (r[this.name] = !0);
        }
      }
      class Jl {
        constructor(e) {
          (this.writer = e), (this.name = 'KHR_materials_volume');
        }
        writeMaterial(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 === e.transmission) return;
          const n = this.writer,
            r = n.extensionsUsed,
            o = {};
          if (((o.thicknessFactor = e.thickness), e.thicknessMap)) {
            const t = { index: n.processTexture(e.thicknessMap) };
            n.applyTextureTransform(t, e.thicknessMap),
              (o.thicknessTexture = t);
          }
          (o.attenuationDistance = e.attenuationDistance),
            (o.attenuationColor = e.attenuationColor.toArray()),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = o),
            (r[this.name] = !0);
        }
      }
      _l.Utils = {
        insertKeyframe: function (e, t) {
          const n = 0.001,
            r = e.getValueSize(),
            o = new e.TimeBufferType(e.times.length + 1),
            i = new e.ValueBufferType(e.values.length + r),
            a = e.createInterpolant(new e.ValueBufferType(r));
          let s;
          if (0 === e.times.length) {
            o[0] = t;
            for (let e = 0; e < r; e++) i[e] = 0;
            s = 0;
          } else if (t < e.times[0]) {
            if (Math.abs(e.times[0] - t) < n) return 0;
            (o[0] = t),
              o.set(e.times, 1),
              i.set(a.evaluate(t), 0),
              i.set(e.values, r),
              (s = 0);
          } else if (t > e.times[e.times.length - 1]) {
            if (Math.abs(e.times[e.times.length - 1] - t) < n)
              return e.times.length - 1;
            (o[o.length - 1] = t),
              o.set(e.times, 0),
              i.set(e.values, 0),
              i.set(a.evaluate(t), e.values.length),
              (s = o.length - 1);
          } else
            for (let l = 0; l < e.times.length; l++) {
              if (Math.abs(e.times[l] - t) < n) return l;
              if (e.times[l] < t && e.times[l + 1] > t) {
                o.set(e.times.slice(0, l + 1), 0),
                  (o[l + 1] = t),
                  o.set(e.times.slice(l + 1), l + 2),
                  i.set(e.values.slice(0, (l + 1) * r), 0),
                  i.set(a.evaluate(t), (l + 1) * r),
                  i.set(e.values.slice((l + 1) * r), (l + 2) * r),
                  (s = l + 1);
                break;
              }
            }
          return (e.times = o), (e.values = i), s;
        },
        mergeMorphTargetTracks: function (e, t) {
          const n = [],
            r = {},
            o = e.tracks;
          for (let e = 0; e < o.length; ++e) {
            let i = o[e];
            const a = Ll.PropertyBinding.parseTrackName(i.name),
              s = Ll.PropertyBinding.findNode(t, a.nodeName);
            if (
              'morphTargetInfluences' !== a.propertyName ||
              void 0 === a.propertyIndex
            ) {
              n.push(i);
              continue;
            }
            if (
              i.createInterpolant !== i.InterpolantFactoryMethodDiscrete &&
              i.createInterpolant !== i.InterpolantFactoryMethodLinear
            ) {
              if (i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
                throw new Error(
                  'THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.'
                );
              console.warn(
                'THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead.'
              ),
                (i = i.clone()),
                i.setInterpolation(Ll.InterpolateLinear);
            }
            const l = s.morphTargetInfluences.length,
              c = s.morphTargetDictionary[a.propertyIndex];
            if (void 0 === c)
              throw new Error(
                'THREE.GLTFExporter: Morph target name not found: ' +
                  a.propertyIndex
              );
            let u;
            if (void 0 === r[s.uuid]) {
              u = i.clone();
              const e = new u.ValueBufferType(l * u.times.length);
              for (let t = 0; t < u.times.length; t++)
                e[t * l + c] = u.values[t];
              (u.name = (a.nodeName || '') + '.morphTargetInfluences'),
                (u.values = e),
                (r[s.uuid] = u),
                n.push(u);
              continue;
            }
            const p = i.createInterpolant(new i.ValueBufferType(1));
            u = r[s.uuid];
            for (let e = 0; e < u.times.length; e++)
              u.values[e * l + c] = p.evaluate(u.times[e]);
            for (let e = 0; e < i.times.length; e++) {
              const t = this.insertKeyframe(u, i.times[e]);
              u.values[t * l + c] = i.values[e];
            }
          }
          return (e.tracks = n), e;
        }
      };
      var ec = o(379),
        tc = o.n(ec),
        nc = o(795),
        rc = o.n(nc),
        oc = o(569),
        ic = o.n(oc),
        ac = o(565),
        sc = o.n(ac),
        lc = o(216),
        cc = o.n(lc),
        uc = o(589),
        pc = o.n(uc),
        fc = o(553),
        dc = {};
      function mc() {
        var e = this;
        (this.assetsLoader = new l()),
          (this.exporters = { gltf: new _l() }),
          (this.history = o(390)),
          (this.isFirstOpen = !0),
          (this.modules = {}),
          (this.on = t.Z.on),
          (this.opened = !1),
          (function t() {
            AFRAME.scenes.length
              ? ((e.sceneEl = AFRAME.scenes[0]),
                e.sceneEl.hasLoaded
                  ? e.init()
                  : e.sceneEl.addEventListener('loaded', e.init.bind(e), {
                      once: !0
                    }))
              : setTimeout(function () {
                  t();
                }, 100);
          })();
      }
      (dc.styleTagTransform = pc()),
        (dc.setAttributes = sc()),
        (dc.insert = ic().bind(null, 'head')),
        (dc.domAPI = rc()),
        (dc.insertStyleElement = cc()),
        tc()(fc.Z, dc),
        fc.Z && fc.Z.locals && fc.Z.locals,
        (mc.prototype = {
          init: function () {
            var e = this;
            this.sceneEl.camera
              ? ((this.container = document.querySelector('.a-canvas')),
                (function (e) {
                  var n = e.sceneEl,
                    r = (e.currentCameraEl = n.camera.el);
                  e.currentCameraEl.setAttribute(
                    'data-aframe-inspector-original-camera',
                    ''
                  ),
                    e.currentCameraEl.hasAttribute(
                      'data-aframe-default-camera'
                    ) &&
                      (e.currentCameraEl.removeAttribute(
                        'data-aframe-default-camera'
                      ),
                      e.currentCameraEl.setAttribute(
                        'data-aframe-inspector',
                        'default-camera'
                      )),
                    e.currentCameraEl.setAttribute('camera', 'active', !1);
                  var o = (e.camera = new THREE.PerspectiveCamera());
                  (o.far = 1e4),
                    (o.near = 0.01),
                    o.position.set(0, 1.6, 2),
                    o.lookAt(new THREE.Vector3(0, 1.6, -1)),
                    o.updateMatrixWorld(),
                    n.object3D.add(o),
                    (n.camera = o);
                  var i = n.canvas.width / n.canvas.height,
                    a = new THREE.OrthographicCamera(-10 * i, 10 * i, 10, -10);
                  n.object3D.add(a);
                  var s = (e.cameras = {
                    perspective: o,
                    original: r,
                    ortho: a
                  });
                  t.Z.on('cameraperspectivetoggle', function () {
                    Nl(e.camera, Rl),
                      (n.camera = e.camera = s.perspective),
                      t.Z.emit('cameratoggle', {
                        camera: e.camera,
                        value: 'perspective'
                      });
                  }),
                    t.Z.on('cameraorthographictoggle', function (r) {
                      Nl(e.camera, Rl),
                        (n.camera = e.camera = s.ortho),
                        (Rl = r),
                        (function (e, t, n) {
                          var r = Pl[t];
                          (e.left = r.left || -10 * n),
                            (e.right = r.right || 10 * n),
                            (e.top = r.top || 10),
                            (e.bottom = r.bottom || -10),
                            e.position.copy(r.position),
                            e.rotation.copy(r.rotation);
                        })(s.ortho, r, i),
                        0 === s.ortho.rotation.x &&
                          0 === s.ortho.rotation.y &&
                          0 === s.ortho.rotation.z &&
                          s.ortho.lookAt(0, 0, 0),
                        t.Z.emit('cameratoggle', {
                          camera: e.camera,
                          value: 'ortho'.concat(r)
                        });
                    }),
                    e.cameras;
                })(this),
                this.initUI())
              : this.sceneEl.addEventListener(
                  'camera-set-active',
                  function () {
                    e.init();
                  },
                  { once: !0 }
                );
          },
          initUI: function () {
            var n = this;
            k.init(this), this.initEvents(), (this.selected = null);
            var r = document.createElement('div');
            (r.id = 'aframeInspector'),
              r.setAttribute('data-aframe-inspector', 'app'),
              document.body.appendChild(r),
              (0, e.s)(r).render((0, f.jsx)(Il, {})),
              (this.scene = this.sceneEl.object3D),
              (this.helpers = {}),
              (this.sceneHelpers = new THREE.Scene()),
              (this.sceneHelpers.userData.source = 'INSPECTOR'),
              (this.sceneHelpers.visible = !0),
              (this.inspectorActive = !1),
              (this.viewport = new a(this)),
              t.Z.emit('windowresize'),
              this.sceneEl.object3D.traverse(function (e) {
                n.addHelper(e);
              }),
              this.scene.add(this.sceneHelpers),
              this.open();
          },
          removeObject: function (e) {
            this.removeHelpers(e), t.Z.emit('objectremove', e);
          },
          addHelper: function (e) {
            var t;
            if (e instanceof THREE.Camera)
              this.cameraHelper = t = new THREE.CameraHelper(e, 0.1);
            else if (e instanceof THREE.PointLight)
              t = new THREE.PointLightHelper(e, 1);
            else if (e instanceof THREE.DirectionalLight)
              t = new THREE.DirectionalLightHelper(e, 1);
            else if (e instanceof THREE.SpotLight)
              t = new THREE.SpotLightHelper(e, 1);
            else if (e instanceof THREE.HemisphereLight)
              t = new THREE.HemisphereLightHelper(e, 1);
            else {
              if (!(e instanceof THREE.SkinnedMesh)) return;
              t = new THREE.SkeletonHelper(e);
            }
            (t.visible = !1),
              this.sceneHelpers.add(t),
              (this.helpers[e.uuid] = t),
              t.update && t.update();
          },
          removeHelpers: function (e) {
            var n = this;
            e.traverse(function (e) {
              var r = n.helpers[e.uuid];
              r &&
                (n.sceneHelpers.remove(r),
                delete n.helpers[e.uuid],
                t.Z.emit('helperremove', n.helpers[e.uuid]));
            });
          },
          selectEntity: function (e, n) {
            var r = this;
            for (var o in ((this.selectedEntity = e),
            e ? this.select(e.object3D) : this.select(null),
            e && void 0 === n && t.Z.emit('entityselect', e),
            this.helpers))
              this.helpers[o].visible = !1;
            e !== this.sceneEl &&
              e.object3D.traverse(function (e) {
                r.helpers[e.uuid] && (r.helpers[e.uuid].visible = !0);
              });
          },
          initEvents: function () {
            var e = this;
            window.addEventListener('keydown', function (t) {
              73 === t.keyCode &&
                ((t.ctrlKey && t.altKey) || t.getModifierState('AltGraph')) &&
                e.toggle();
            }),
              t.Z.on('entityselect', function (t) {
                e.selectEntity(t, !1);
              }),
              t.Z.on('inspectortoggle', function (t) {
                (e.inspectorActive = t),
                  (e.sceneHelpers.visible = e.inspectorActive);
              }),
              t.Z.on('entitycreate', function (n) {
                !(function (n, r) {
                  var o = document.createElement(n.element);
                  for (var i in n.components)
                    o.setAttribute(i, n.components[i]);
                  o.addEventListener('loaded', function () {
                    t.Z.emit('entitycreated', o),
                      (function (t) {
                        e.selectEntity(t);
                      })(o);
                  }),
                    AFRAME.scenes[0].appendChild(o);
                })(n);
              }),
              document.addEventListener('child-detached', function (e) {
                var t = e.detail.el;
                AFRAME.INSPECTOR.removeObject(t.object3D);
              });
          },
          selectById: function (e) {
            e !== this.camera.id
              ? this.select(this.scene.getObjectById(e, !0))
              : this.select(this.camera);
          },
          select: function (e) {
            this.selected !== e &&
              ((this.selected = e), t.Z.emit('objectselect', e));
          },
          deselect: function () {
            this.select(null);
          },
          toggle: function () {
            this.opened ? this.close() : this.open();
          },
          open: function (e) {
            (this.opened = !0),
              t.Z.emit('inspectortoggle', !0),
              this.sceneEl.hasAttribute('embedded') &&
                (this.sceneEl.removeAttribute('embedded'),
                this.sceneEl.setAttribute('aframe-inspector-removed-embedded')),
              document.body.classList.add('aframe-inspector-opened'),
              this.sceneEl.resize(),
              this.sceneEl.pause(),
              this.sceneEl.exitVR(),
              k.enable(),
              (this.sceneEl.isPlaying = !0),
              this.cursor.play(),
              !e &&
                this.isFirstOpen &&
                AFRAME.utils.getUrlParameter('inspector') &&
                (e = document.getElementById(
                  AFRAME.utils.getUrlParameter('inspector')
                )),
              e && (this.selectEntity(e), t.Z.emit('objectfocus', e.object3D)),
              (this.isFirstOpen = !1);
          },
          close: function () {
            (this.opened = !1),
              t.Z.emit('inspectortoggle', !1),
              (this.sceneEl.isPlaying = !1),
              this.sceneEl.play(),
              this.cursor.pause(),
              this.sceneEl.hasAttribute('aframe-inspector-removed-embedded') &&
                (this.sceneEl.setAttribute('embedded', ''),
                this.sceneEl.removeAttribute(
                  'aframe-inspector-removed-embedded'
                )),
              document.body.classList.remove('aframe-inspector-opened'),
              this.sceneEl.resize(),
              k.disable();
          }
        }),
        (AFRAME.INSPECTOR = new mc());
    })();
})();
//# sourceMappingURL=aframe-inspector.min.js.map
