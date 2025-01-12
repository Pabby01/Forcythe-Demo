'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [933],
  {
    7141: function (e, t, n) {
      var r = n(2265),
        a = r && 'object' == typeof r && 'default' in r ? r : { default: r };
      !(function (e) {
        if (!e || 'undefined' == typeof window) return;
        let t = document.createElement('style');
        t.setAttribute('type', 'text/css'),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
      );
      let i = r.forwardRef(function (e, t) {
        let {
            style: n = {},
            className: i = '',
            autoFill: s = !1,
            play: l = !0,
            pauseOnHover: o = !1,
            pauseOnClick: c = !1,
            direction: d = 'left',
            speed: m = 50,
            delay: u = 0,
            loop: f = 0,
            gradient: g = !1,
            gradientColor: h = 'white',
            gradientWidth: x = 200,
            onFinish: p,
            onCycleComplete: v,
            onMount: b,
            children: y,
          } = e,
          [w, j] = r.useState(0),
          [N, E] = r.useState(0),
          [k, C] = r.useState(1),
          [R, S] = r.useState(!1),
          A = r.useRef(null),
          M = t || A,
          B = r.useRef(null),
          F = r.useCallback(() => {
            if (B.current && M.current) {
              let e = M.current.getBoundingClientRect(),
                t = B.current.getBoundingClientRect(),
                n = e.width,
                r = t.width;
              ('up' === d || 'down' === d) && ((n = e.height), (r = t.height)),
                s && n && r ? C(r < n ? Math.ceil(n / r) : 1) : C(1),
                j(n),
                E(r);
            }
          }, [s, M, d]);
        r.useEffect(() => {
          if (R && (F(), B.current && M.current)) {
            let e = new ResizeObserver(() => F());
            return (
              e.observe(M.current),
              e.observe(B.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [F, M, R]),
          r.useEffect(() => {
            F();
          }, [F, y]),
          r.useEffect(() => {
            S(!0);
          }, []),
          r.useEffect(() => {
            'function' == typeof b && b();
          }, []);
        let q = r.useMemo(
            () => (s ? (N * k) / m : N < w ? w / m : N / m),
            [s, w, N, k, m],
          ),
          O = r.useMemo(
            () =>
              Object.assign(Object.assign({}, n), {
                '--pause-on-hover': !l || o ? 'paused' : 'running',
                '--pause-on-click': !l || (o && !c) || c ? 'paused' : 'running',
                '--width': 'up' === d || 'down' === d ? '100vh' : '100%',
                '--transform':
                  'up' === d
                    ? 'rotate(-90deg)'
                    : 'down' === d
                      ? 'rotate(90deg)'
                      : 'none',
              }),
            [n, l, o, c, d],
          ),
          Z = r.useMemo(
            () => ({
              '--gradient-color': h,
              '--gradient-width': 'number' == typeof x ? ''.concat(x, 'px') : x,
            }),
            [h, x],
          ),
          V = r.useMemo(
            () => ({
              '--play': l ? 'running' : 'paused',
              '--direction': 'left' === d ? 'normal' : 'reverse',
              '--duration': ''.concat(q, 's'),
              '--delay': ''.concat(u, 's'),
              '--iteration-count': f ? ''.concat(f) : 'infinite',
              '--min-width': s ? 'auto' : '100%',
            }),
            [l, d, q, u, f, s],
          ),
          z = r.useMemo(
            () => ({
              '--transform':
                'up' === d
                  ? 'rotate(90deg)'
                  : 'down' === d
                    ? 'rotate(-90deg)'
                    : 'none',
            }),
            [d],
          ),
          I = r.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                a.default.createElement(
                  r.Fragment,
                  { key: t },
                  r.Children.map(y, (e) =>
                    a.default.createElement(
                      'div',
                      { style: z, className: 'rfm-child' },
                      e,
                    ),
                  ),
                ),
              ),
            [z, y],
          );
        return R
          ? a.default.createElement(
              'div',
              { ref: M, style: O, className: 'rfm-marquee-container ' + i },
              g &&
                a.default.createElement('div', {
                  style: Z,
                  className: 'rfm-overlay',
                }),
              a.default.createElement(
                'div',
                {
                  className: 'rfm-marquee',
                  style: V,
                  onAnimationIteration: v,
                  onAnimationEnd: p,
                },
                a.default.createElement(
                  'div',
                  { className: 'rfm-initial-child-container', ref: B },
                  r.Children.map(y, (e) =>
                    a.default.createElement(
                      'div',
                      { style: z, className: 'rfm-child' },
                      e,
                    ),
                  ),
                ),
                I(k - 1),
              ),
              a.default.createElement(
                'div',
                { className: 'rfm-marquee', style: V },
                I(k),
              ),
            )
          : null;
      });
      t.Z = i;
    },
    5506: function (e, t, n) {
      var r = n(7437),
        a = n(2265);
      t.Z = (e) => {
        let { start: t = 0, end: n } = e,
          [i, s] = (0, a.useState)(t),
          l = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(
            () => () => {
              cancelAnimationFrame(l.current);
            },
            [],
          ),
          (0, a.useEffect)(() => {
            let e = performance.now(),
              r = (a) => {
                let i = Math.min((a - e) / 1e3, 1);
                s(Math.floor(t + (n - t) * i)),
                  i < 1 && (l.current = requestAnimationFrame(r));
              };
            return (
              (l.current = requestAnimationFrame(r)),
              () => {
                cancelAnimationFrame(l.current);
              }
            );
          }, [t, n]),
          (0, r.jsxs)('div', {
            className:
              'text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium',
            children: [i, '+'],
          })
        );
      };
    },
    44: function (e, t, n) {
      n.d(t, {
        F: function () {
          return d;
        },
      });
      var r = n(7437),
        a = n(2265),
        i = n(3577),
        s = n(9159),
        l = n(6990),
        o = n(1715),
        c = n(6135);
      let d = (e) => {
        let {
            words: t,
            className: n,
            innerClassName: d,
            delay: m = 0,
            wordStyles: u = [],
          } = e,
          [f, g] = (0, i.H)(),
          [h, x] = (0, a.useState)(!1),
          p = (0, a.useRef)(null),
          v = (0, s.Y)(p);
        (0, a.useEffect)(() => {
          v &&
            !h &&
            'function' == typeof g &&
            (m > 0
              ? setTimeout(() => {
                  b();
                }, 1e3 * m)
              : b());
        }, [v, h, g, m]);
        let b = () => {
            g('span', { opacity: 1 }, { duration: 2, delay: (0, l.E)(0.2) }),
              x(!0);
          },
          y = t.split(' ');
        return (0, r.jsx)('div', {
          className: (0, c.cn)('', n),
          ref: p,
          children: (0, r.jsx)('div', {
            className: '',
            children: (0, r.jsx)('p', {
              className:
                d || 'text-darkGrey text-base md:text-lg mb-8 leading-7',
              children: (0, r.jsx)(o.E.div, {
                ref: f,
                children: y.map((e, t) => {
                  let n = u.find((t) => t.word === e),
                    a = n ? n.classes : '';
                  return (0, r.jsxs)(
                    o.E.span,
                    { className: 'opacity-0 '.concat(a), children: [e, ' '] },
                    e + t,
                  );
                }),
              }),
            }),
          }),
        });
      };
    },
    4529: function (e, t, n) {
      var r = n(7437),
        a = n(1128);
      n(2265),
        (t.Z = () =>
          (0, r.jsx)('div', {
            style: {
              backgroundColor: 'rgb(7,22,38)',
              background:
                'linear-gradient(0deg, rgba(7,22,38,1) 20%, rgba(3,5,22,1) 69%)',
            },
            className:
              'section-padding py-10 text-center bg-[071626] bg-opacity-0',
            children: (0, r.jsxs)('div', {
              className: 'max-w-[45rem] mx-auto',
              children: [
                (0, r.jsxs)('h2', {
                  className:
                    'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6',
                  children: [
                    (0, r.jsx)('span', {
                      className: 'text-accent',
                      children: 'Ready to Scale?',
                    }),
                    (0, r.jsx)('br', {}),
                    ' Join successful brands that chose us as their',
                    (0, r.jsx)('span', {
                      className: 'text-accent',
                      children: ' growth accelerator',
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  className: 'w-fit mx-auto mb-5',
                  children: (0, r.jsx)(a.Z, {
                    buttonText: 'Book a Call',
                    width: 'w-fit',
                    book: !0,
                  }),
                }),
              ],
            }),
          }));
    },
    1460: function (e, t, n) {
      var r = n(7437),
        a = n(703);
      n(2265);
      var i = n(4411),
        s = n(8395),
        l = n(44);
      t.Z = (e) => {
        let { page: t = 'home' } = e;
        return (0, r.jsxs)('div', {
          style: {
            backgroundColor: 'home' === t ? 'rgb(12,38,69)' : 'rgb(3,5,22)',
            background:
              'home' === t
                ? 'linear-gradient(0deg, rgba(12,38,69,1) 20%, rgba(3,5,22,1) 70%)'
                : 'linear-gradient(0deg, rgba(3,5,22,1) 20%, rgba(12,38,69,1) 90%)',
          },
          className: 'section-padding py-14',
          children: [
            (0, r.jsx)(l.F, {
              words: 'Your best call for B2B/B2C product innovation',
              innerClassName:
                'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center',
              wordStyles: [{ word: 'B2B/B2C', classes: 'capitalize' }],
            }),
            (0, r.jsx)('div', {
              className: 'grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8',
              children: i.pt.map((e, t) =>
                (0, r.jsx)(
                  s.C,
                  {
                    containerClassName: 'rounded-2xl text-left',
                    as: 'div',
                    children: (0, r.jsxs)('div', {
                      className:
                        'w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate',
                      children: [
                        (0, r.jsx)('div', {
                          className:
                            'w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5',
                          children: (0, r.jsx)(a.default, {
                            src: '/images/layers-three.svg',
                            alt: e.title,
                            width: 30,
                            height: 30,
                          }),
                        }),
                        (0, r.jsx)('h4', {
                          className: 'text-2xl font-medium mb-5',
                          children: e.title,
                        }),
                        (0, r.jsx)(
                          l.F,
                          {
                            words: e.text,
                            innerClassName: 'mb-0 text-darkGrey text-[17.5px]',
                          },
                          t,
                        ),
                      ],
                    }),
                  },
                  t,
                ),
              ),
            }),
          ],
        });
      };
    },
    2716: function (e, t, n) {
      var r = n(7437),
        a = n(2265),
        i = n(7110),
        s = n(5506),
        l = n(44),
        o = n(4411);
      t.Z = (e) => {
        let { page: t } = e,
          [n, c] = (0, a.useState)(!1),
          { ref: d, inView: m } = (0, i.YD)({ threshold: 1, triggerOnce: !0 });
        return (
          (0, a.useEffect)(() => {
            m && c(!0);
          }, [m]),
          (0, r.jsx)('div', {
            style: {
              backgroundColor: 'home' === t ? 'rgb(12,38,69)' : '',
              background:
                'home' === t
                  ? 'linear-gradient(180deg, rgba(12,38,69,1) 20%, rgba(3,5,22,1) 60%)'
                  : '',
            },
            className: 'py-14 md:py-20 xl:py-28',
            children: (0, r.jsx)('div', {
              ref: d,
              className:
                "max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat",
              children: (0, r.jsxs)('div', {
                className:
                  'pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5',
                children: [
                  (0, r.jsx)(l.F, {
                    words:
                      'We build solutions that help businesses of all sizes to scale',
                    innerClassName:
                      'text-xl md:text-2xl lg:text-3xl font-medium',
                    className:
                      'mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto',
                    wordStyles: [
                      { word: 'businesses', classes: 'text-[#60a6e7]' },
                      { word: 'scale', classes: 'text-[#60a6e7]' },
                    ],
                  }),
                  (0, r.jsx)('div', {
                    className:
                      'flex justify-evenly sm:justify-between items-center gap-3',
                    children: o.ot.map((e) =>
                      (0, r.jsxs)(
                        'div',
                        {
                          className: 'flex flex-col gap-3 text-left w-fit',
                          children: [
                            n && (0, r.jsx)(s.Z, { start: 0, end: e.stat }),
                            (0, r.jsx)('span', {
                              className:
                                'text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis',
                              children: e.title,
                            }),
                          ],
                        },
                        'stat-'.concat(e.title),
                      ),
                    ),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    7110: function (e, t, n) {
      n.d(t, {
        YD: function () {
          return c;
        },
      });
      var r = n(2265),
        a = Object.defineProperty,
        i = new Map(),
        s = new WeakMap(),
        l = 0,
        o = void 0;
      function c() {
        var e;
        let {
            threshold: t,
            delay: n,
            trackVisibility: a,
            rootMargin: c,
            root: d,
            triggerOnce: m,
            skip: u,
            initialInView: f,
            fallbackInView: g,
            onChange: h,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [x, p] = r.useState(null),
          v = r.useRef(),
          [b, y] = r.useState({ inView: !!f, entry: void 0 });
        (v.current = h),
          r.useEffect(() => {
            let e;
            if (!u && x)
              return (
                (e = (function (e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : o;
                  if (void 0 === window.IntersectionObserver && void 0 !== r) {
                    let a = e.getBoundingClientRect();
                    return (
                      t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio:
                          'number' == typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: a,
                        intersectionRect: a,
                        rootBounds: a,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: a,
                      observer: c,
                      elements: d,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var n;
                            return ''
                              .concat(t, '_')
                              .concat(
                                'root' === t
                                  ? (n = e.root)
                                    ? (s.has(n) ||
                                        ((l += 1), s.set(n, l.toString())),
                                      s.get(n))
                                    : '0'
                                  : e[t],
                              );
                          })
                          .toString(),
                        n = i.get(t);
                      if (!n) {
                        let r;
                        let a = new Map(),
                          s = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var n;
                              let i =
                                t.isIntersecting &&
                                r.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = i),
                                null == (n = a.get(t.target)) ||
                                  n.forEach((e) => {
                                    e(i, t);
                                  });
                            });
                          }, e);
                        (r =
                          s.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (n = { id: t, observer: s, elements: a }),
                          i.set(t, n);
                      }
                      return n;
                    })(n),
                    m = d.get(e) || [];
                  return (
                    d.has(e) || d.set(e, m),
                    m.push(t),
                    c.observe(e),
                    function () {
                      m.splice(m.indexOf(t), 1),
                        0 === m.length && (d.delete(e), c.unobserve(e)),
                        0 === d.size && (c.disconnect(), i.delete(a));
                    }
                  );
                })(
                  x,
                  (t, n) => {
                    y({ inView: t, entry: n }),
                      v.current && v.current(t, n),
                      n.isIntersecting && m && e && (e(), (e = void 0));
                  },
                  {
                    root: d,
                    rootMargin: c,
                    threshold: t,
                    trackVisibility: a,
                    delay: n,
                  },
                  g,
                )),
                () => {
                  e && e();
                }
              );
          }, [Array.isArray(t) ? t.toString() : t, x, d, c, m, u, a, g, n]);
        let w = null == (e = b.entry) ? void 0 : e.target,
          j = r.useRef();
        x ||
          !w ||
          m ||
          u ||
          j.current === w ||
          ((j.current = w), y({ inView: !!f, entry: void 0 }));
        let N = [p, b.inView, b.entry];
        return (N.ref = N[0]), (N.inView = N[1]), (N.entry = N[2]), N;
      }
      r.Component;
    },
  },
]);
