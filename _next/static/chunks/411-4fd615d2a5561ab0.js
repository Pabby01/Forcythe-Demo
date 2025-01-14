'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [411],
  {
    9549: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var r = n(7437),
        l = n(2265),
        i = (e) => null == e,
        a = (e, t) => {
          if ('string' != typeof t) {
            let { children: e, ...n } = t.props;
            t.key || (n.key = 'typist-cursor'), (t = l.cloneElement(t, n, e));
          }
          let n = (e) => {
            if (!e) return e;
            if (0 === e.length) return [t];
            let r = e[e.length - 1];
            if ('string' == typeof r) return [...e, t];
            let { children: a, ...u } = r.props;
            if (i(a)) return [...e, t];
            let s = n(a),
              o = l.cloneElement(r, u, s);
            return [...e.slice(0, -1), o];
          };
          return n(e);
        };
      let u = () => {},
        s = (e) => e.split('');
      var o = (e) => null,
        f = (e) => null,
        c = (e, t) => {
          let n = 0,
            r = (e) =>
              l.Children.map(e, (e) => {
                if (n >= t.length) return null;
                if ((0, l.isValidElement)(e)) {
                  if (e.type === o || e.type === f) return null;
                  let { children: a, ...u } = e.props;
                  if (i(a)) return t[n++];
                  let s = r(a);
                  return s && 0 === s.length
                    ? null
                    : (0, l.cloneElement)(e, u, s);
                }
                return 'string' == typeof e || 'number' == typeof e
                  ? t[n++]
                  : null;
              });
          return r(e);
        },
        h = ({ children: e }) => (0, r.jsx)(r.Fragment, { children: e });
      let p = (e) => ({ type: 'TYPE_TOKEN', payload: e }),
        d = (e) => ({ type: 'BACKSPACE', payload: e }),
        m = (e) => ({ type: 'DELAY', payload: e }),
        y = (e) => ({ type: 'PASTE', payload: e });
      var g = (e, t) => {
          let n = [],
            r = !1,
            a = 0,
            u = (e) => {
              l.Children.forEach(e, (e) => {
                if ((0, l.isValidElement)(e)) {
                  if (e.type === o) {
                    let t = e.props.count,
                      r = t > a ? a : t;
                    (a -= r), n.push(d(r));
                    return;
                  }
                  if (e.type === f) {
                    n.push(m(e.props.ms));
                    return;
                  }
                  if (e.type === h) {
                    (r = !0), l.Children.forEach(e.props.children, u), (r = !1);
                    return;
                  }
                  if (i(e.props.children)) {
                    (a += 1), n.push(p(e));
                    return;
                  }
                  l.Children.forEach(e.props.children, u);
                }
                let s =
                  'number' == typeof e
                    ? e.toString(10)
                    : 'string' == typeof e
                      ? e
                      : void 0;
                if (void 0 === s) return;
                if (r) {
                  (a += t(s).length), n.push(y(s));
                  return;
                }
                let c = t(s);
                (a += c.length),
                  c.forEach((e) => {
                    n.push(p(e));
                  });
              });
            };
          return u(e), n;
        },
        v = Object.assign(
          ({
            cursor: e,
            disabled: t = !1,
            restartKey: n,
            children: p,
            splitter: d = s,
            typingDelay: m = 75,
            backspaceDelay: y = m,
            onTypingDone: v,
            startDelay: E = 0,
            finishDelay: A = 0,
            loop: w = !1,
            pause: b = !1,
          }) => {
            let [k, C] = (0, l.useState)([]),
              [S, I] = (0, l.useState)(-1),
              P = (0, l.useRef)(u),
              T = (0, l.useRef)(w),
              M = (0, l.useRef)(b),
              x = (0, l.useCallback)(
                (e) =>
                  new Promise((t, n) => {
                    let r = setTimeout(t, 'number' == typeof e ? e : e());
                    P.current = () => {
                      clearTimeout(r), n();
                    };
                  }),
                [],
              ),
              O = (0, l.useCallback)(
                () =>
                  new Promise((e, t) => {
                    let n = setInterval(() => {
                      M.current || (clearInterval(n), e());
                    });
                    P.current = () => {
                      clearInterval(n), t();
                    };
                  }),
                [],
              ),
              j = (0, l.useCallback)(
                () =>
                  new Promise((e, t) => {
                    let n = setInterval(() => {
                      T.current && (clearInterval(n), e());
                    });
                    P.current = () => {
                      clearInterval(n), t();
                    };
                  }),
                [],
              );
            (0, l.useEffect)(() => {
              (T.current = w), (M.current = b);
            }, [w, b]),
              (0, l.useEffect)(() => {
                let e = (function (e, t) {
                  let n = [],
                    r = [],
                    a = !1,
                    u = (e) => {
                      l.Children.forEach(e, (e) => {
                        if ((0, l.isValidElement)(e)) {
                          if (e.type === f) return;
                          if (e.type === o) {
                            let l = e.props.count;
                            for (; l--; ) {
                              let e = r.length - 1,
                                l = r[e];
                              for (; null === l && e > 0; )
                                (e -= 1), (l = r[e]);
                              if (null === l) break;
                              if (
                                ('object' == typeof l && (r[e] = null),
                                'string' == typeof l)
                              ) {
                                let n = t(l).slice(0, -1).join('');
                                r[e] = n || null;
                              }
                              n.push([...r]);
                            }
                            return;
                          }
                          if (e.type === h) {
                            (a = !0),
                              l.Children.forEach(e.props.children, u),
                              (a = !1);
                            return;
                          }
                          if (i(e.props.children)) {
                            r.push(e), n.push([...r]);
                            return;
                          }
                          l.Children.forEach(e.props.children, u);
                        }
                        let s =
                          'number' == typeof e
                            ? e.toString(10)
                            : 'string' == typeof e
                              ? e
                              : void 0;
                        if (void 0 === s) return;
                        if (a) {
                          r.push(s), n.push([...r]);
                          return;
                        }
                        let c = t(s),
                          p = r.length;
                        for (let e = 1; e <= c.length; e++) {
                          let t = c.slice(0, e).join('');
                          (r[p] = t), n.push([...r]);
                        }
                      });
                    };
                  return u(e), n.map((t) => c(e, t));
                })(p, d);
                if ((C(e), t)) {
                  I(e.length - 1);
                  return;
                }
                return (
                  (async () => {
                    try {
                      do {
                        I(-1);
                        let e = g(p, d);
                        for (let { type: t, payload: n } of (E > 0 &&
                          (await x(E)),
                        e))
                          if ((M.current && (await O()), 'TYPE_TOKEN' === t))
                            I((e) => e + 1), await x(m);
                          else if ('BACKSPACE' === t) {
                            let e = n;
                            for (; e--; ) I((e) => e + 1), await x(y);
                          } else
                            'PASTE' === t
                              ? I((e) => e + 1)
                              : 'DELAY' === t && (await x(n));
                        v?.(), A > 0 && (await x(A)), T.current || (await j());
                      } while (T.current);
                    } catch (e) {}
                  })(),
                  () => {
                    P.current();
                  }
                );
              }, [n, t]);
            let R = k[S];
            return (0, r.jsx)(r.Fragment, { children: e ? a(R, e) : R });
          },
          { Delay: f, Backspace: o, Paste: h },
        );
    },
    3577: function (e, t, n) {
      n.d(t, {
        H: function () {
          return _;
        },
      });
      var r = n(2435),
        l = n(2444),
        i = n(4637),
        a = n(8854),
        u = n(9908),
        s = n(4205);
      let o = (0, n(6190).X)(() => void 0 !== window.ScrollTimeline);
      class f {
        constructor(e) {
          this.animations = e.filter(Boolean);
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => {
            if (!o() || !t.attachTimeline)
              return (
                t.pause(),
                (function (e, t) {
                  let n;
                  let r = () => {
                    let { currentTime: r } = t,
                      l = (null === r ? 0 : r.value) / 100;
                    n !== l && e(l), (n = l);
                  };
                  return s.Wi.update(r, !0), () => (0, s.Pn)(r);
                })((e) => {
                  t.time = t.duration * e;
                }, e)
              );
            t.attachTimeline(e);
          });
          return () => {
            t.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll('time');
        }
        set time(e) {
          this.setAll('time', e);
        }
        get speed() {
          return this.getAll('speed');
        }
        set speed(e) {
          this.setAll('speed', e);
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll('play');
        }
        pause() {
          this.runAll('pause');
        }
        stop() {
          this.runAll('stop');
        }
        cancel() {
          this.runAll('cancel');
        }
        complete() {
          this.runAll('complete');
        }
      }
      var c = n(1258),
        h = n(1937),
        p = n(1165),
        d = n(6276),
        m = n(2014),
        y = n(9806),
        g = n(9323),
        v = n(3303),
        E = n(5865),
        A = n(2426),
        w = n(9049),
        b = n(2702);
      function k(e, t, n, r) {
        var l;
        return 'number' == typeof t
          ? t
          : t.startsWith('-') || t.startsWith('+')
            ? Math.max(0, e + parseFloat(t))
            : '<' === t
              ? n
              : null !== (l = r.get(t)) && void 0 !== l
                ? l
                : e;
      }
      let C = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      };
      var S = n(113),
        I = n(406),
        P = n(5312);
      function T(e, t) {
        return e.at !== t.at
          ? e.at - t.at
          : null === e.value
            ? 1
            : null === t.value
              ? -1
              : 0;
      }
      function M(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e);
      }
      function x(e, t) {
        return t[e] || (t[e] = []), t[e];
      }
      let O = (e) => 'number' == typeof e,
        j = (e) => e.every(O);
      function R(e, t, n, r) {
        let l = (0, i.I)(e, r),
          s = l.length;
        (0, u.k)(!!s, 'No valid element provided.');
        let o = [];
        for (let e = 0; e < s; e++) {
          let r = l[e];
          a.R.has(r) ||
            (function (e) {
              let t = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                n = (0, h.v)(e)
                  ? new p.e(t, { enableHardwareAcceleration: !1 })
                  : new d.W(t, { enableHardwareAcceleration: !0 });
              n.mount(e), a.R.set(e, n);
            })(r);
          let i = a.R.get(r),
            u = { ...n };
          'function' == typeof u.delay && (u.delay = u.delay(e, s)),
            o.push(...(0, c.w)(i, { ...t, transition: u }, {}));
        }
        return new f(o);
      }
      let Y = (e) => Array.isArray(e) && Array.isArray(e[0]),
        N = (e) =>
          function (t, n, r) {
            let l;
            return (
              (l = Y(t)
                ? (function (e, t, n) {
                    let r = [];
                    return (
                      (function (
                        e,
                        { defaultTransition: t = {}, ...n } = {},
                        r,
                      ) {
                        let l = t.duration || 0.3,
                          a = new Map(),
                          u = new Map(),
                          s = {},
                          o = new Map(),
                          f = 0,
                          c = 0,
                          h = 0;
                        for (let n = 0; n < e.length; n++) {
                          let a = e[n];
                          if ('string' == typeof a) {
                            o.set(a, c);
                            continue;
                          }
                          if (!Array.isArray(a)) {
                            o.set(a.name, k(c, a.at, f, o));
                            continue;
                          }
                          let [p, d, m = {}] = a;
                          void 0 !== m.at && (c = k(c, m.at, f, o));
                          let w = 0,
                            T = (e, n, r, i = 0, a = 0) => {
                              let u = Array.isArray(e) ? e : [e],
                                {
                                  delay: s = 0,
                                  times: o = (0, E.Y)(u),
                                  type: f = 'keyframes',
                                  ...p
                                } = n,
                                { ease: d = t.ease || 'easeOut', duration: m } =
                                  n,
                                b = 'function' == typeof s ? s(i, a) : s,
                                k = u.length;
                              if (k <= 2 && 'spring' === f) {
                                let e = 100;
                                2 === k && j(u) && (e = Math.abs(u[1] - u[0]));
                                let t = { ...p };
                                void 0 !== m && (t.duration = (0, v.w)(m));
                                let n = (function (e, t = 100) {
                                  let n = (0, y.S)({ keyframes: [0, t], ...e }),
                                    r = Math.min((0, g.i)(n), g.E);
                                  return {
                                    type: 'keyframes',
                                    ease: (e) => n.next(r * e).value / t,
                                    duration: (0, v.X)(r),
                                  };
                                })(t, e);
                                (d = n.ease), (m = n.duration);
                              }
                              null != m || (m = l);
                              let T = c + b,
                                M = T + m;
                              1 === o.length && 0 === o[0] && (o[1] = 1);
                              let x = o.length - u.length;
                              x > 0 && (0, A.c)(o, x),
                                1 === u.length && u.unshift(null),
                                (function (e, t, n, r, l, i) {
                                  !(function (e, t, n) {
                                    for (let r = 0; r < e.length; r++) {
                                      let l = e[r];
                                      l.at > t &&
                                        l.at < n &&
                                        ((0, I.cl)(e, l), r--);
                                    }
                                  })(e, l, i);
                                  for (let u = 0; u < t.length; u++) {
                                    var a;
                                    e.push({
                                      value: t[u],
                                      at: (0, P.t)(l, i, r[u]),
                                      easing:
                                        ((a = u),
                                        (0, S.N)(n) ? n[C(0, n.length, a)] : n),
                                    });
                                  }
                                })(r, u, d, o, T, M),
                                (w = Math.max(b + m, w)),
                                (h = Math.max(M, h));
                            };
                          if ((0, b.i)(p)) T(d, m, x('default', M(p, u)));
                          else {
                            let e = (0, i.I)(p, r, s),
                              t = e.length;
                            for (let n = 0; n < t; n++) {
                              let r = M(e[n], u);
                              for (let e in d)
                                T(
                                  d[e],
                                  m[e] ? { ...m, ...m[e] } : { ...m },
                                  x(e, r),
                                  n,
                                  t,
                                );
                            }
                          }
                          (f = c), (c += w);
                        }
                        return (
                          u.forEach((e, r) => {
                            for (let l in e) {
                              let i = e[l];
                              i.sort(T);
                              let u = [],
                                s = [],
                                o = [];
                              for (let e = 0; e < i.length; e++) {
                                let { at: t, value: n, easing: r } = i[e];
                                u.push(n),
                                  s.push((0, w.Y)(0, h, t)),
                                  o.push(r || 'easeOut');
                              }
                              0 !== s[0] &&
                                (s.unshift(0),
                                u.unshift(u[0]),
                                o.unshift('easeInOut')),
                                1 !== s[s.length - 1] &&
                                  (s.push(1), u.push(null)),
                                a.has(r) ||
                                  a.set(r, { keyframes: {}, transition: {} });
                              let f = a.get(r);
                              (f.keyframes[l] = u),
                                (f.transition[l] = {
                                  ...t,
                                  duration: h,
                                  ease: o,
                                  times: s,
                                  ...n,
                                });
                            }
                          }),
                          a
                        );
                      })(e, t, n).forEach(
                        ({ keyframes: e, transition: t }, n) => {
                          let l;
                          (l = (0, b.i)(n)
                            ? (0, m.D)(n, e.default, t.default)
                            : R(n, e, t)),
                            r.push(l);
                        },
                      ),
                      new f(r)
                    );
                  })(t, n, e)
                : 'object' != typeof n || Array.isArray(n)
                  ? (0, m.D)(t, n, r)
                  : R(t, n, r, e)),
              e && e.animations.push(l),
              l
            );
          };
      function _() {
        let e = (0, r.h)(() => ({ current: null, animations: [] })),
          t = (0, r.h)(() => N(e));
        return (
          (0, l.z)(() => {
            e.animations.forEach((e) => e.stop());
          }),
          [e, t]
        );
      }
      N();
    },
    6990: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var r = n(7544);
      function l(e = 0.1, { startDelay: t = 0, from: n = 0, ease: l } = {}) {
        return (i, a) => {
          let u =
            e *
            Math.abs(
              ('number' == typeof n
                ? n
                : (function (e, t) {
                    if ('first' === e) return 0;
                    {
                      let n = t - 1;
                      return 'last' === e ? n : n / 2;
                    }
                  })(n, a)) - i,
            );
          if (l) {
            let t = a * e;
            u = (0, r.R)(l)(u / t) * t;
          }
          return t + u;
        };
      }
    },
    4637: function (e, t, n) {
      n.d(t, {
        I: function () {
          return l;
        },
      });
      var r = n(9908);
      function l(e, t, n) {
        var l;
        if ('string' == typeof e) {
          let i = document;
          t &&
            ((0, r.k)(!!t.current, 'Scope provided, but no element detected.'),
            (i = t.current)),
            n
              ? ((null !== (l = n[e]) && void 0 !== l) ||
                  (n[e] = i.querySelectorAll(e)),
                (e = n[e]))
              : (e = i.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    9159: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return a;
        },
      });
      var r = n(2265),
        l = n(4637);
      let i = { some: 0, all: 1 };
      function a(e, { root: t, margin: n, amount: a, once: u = !1 } = {}) {
        let [s, o] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (u && s)) return;
            let r = { root: (t && t.current) || void 0, margin: n, amount: a };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: a = 'some' } = {},
            ) {
              let u = (0, l.I)(e),
                s = new WeakMap(),
                o = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = s.get(e.target);
                      if (!!n !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let n = t(e);
                          'function' == typeof n
                            ? s.set(e.target, n)
                            : o.unobserve(e.target);
                        } else n && (n(e), s.delete(e.target));
                      }
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: 'number' == typeof a ? a : i[a],
                  },
                );
              return u.forEach((e) => o.observe(e)), () => o.disconnect();
            })(e.current, () => (o(!0), u ? void 0 : () => o(!1)), r);
          }, [t, e, n, u, a]),
          s
        );
      }
    },
    2444: function (e, t, n) {
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var r = n(2265);
      function l(e) {
        return (0, r.useEffect)(() => () => e(), []);
      }
    },
  },
]);
