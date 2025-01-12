(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [324],
  {
    1318: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 4642));
    },
    7141: function (e, t, a) {
      'use strict';
      var s = a(2265),
        r = s && 'object' == typeof s && 'default' in s ? s : { default: s };
      !(function (e) {
        if (!e || 'undefined' == typeof window) return;
        let t = document.createElement('style');
        t.setAttribute('type', 'text/css'),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
      );
      let n = s.forwardRef(function (e, t) {
        let {
            style: a = {},
            className: n = '',
            autoFill: l = !1,
            play: i = !0,
            pauseOnHover: o = !1,
            pauseOnClick: c = !1,
            direction: d = 'left',
            speed: u = 50,
            delay: m = 0,
            loop: x = 0,
            gradient: h = !1,
            gradientColor: p = 'white',
            gradientWidth: g = 200,
            onFinish: f,
            onCycleComplete: b,
            onMount: v,
            children: w,
          } = e,
          [j, y] = s.useState(0),
          [N, D] = s.useState(0),
          [k, C] = s.useState(1),
          [Z, F] = s.useState(!1),
          E = s.useRef(null),
          S = t || E,
          z = s.useRef(null),
          A = s.useCallback(() => {
            if (z.current && S.current) {
              let e = S.current.getBoundingClientRect(),
                t = z.current.getBoundingClientRect(),
                a = e.width,
                s = t.width;
              ('up' === d || 'down' === d) && ((a = e.height), (s = t.height)),
                l && a && s ? C(s < a ? Math.ceil(a / s) : 1) : C(1),
                y(a),
                D(s);
            }
          }, [l, S, d]);
        s.useEffect(() => {
          if (Z && (A(), z.current && S.current)) {
            let e = new ResizeObserver(() => A());
            return (
              e.observe(S.current),
              e.observe(z.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [A, S, Z]),
          s.useEffect(() => {
            A();
          }, [A, w]),
          s.useEffect(() => {
            F(!0);
          }, []),
          s.useEffect(() => {
            'function' == typeof v && v();
          }, []);
        let T = s.useMemo(
            () => (l ? (N * k) / u : N < j ? j / u : N / u),
            [l, j, N, k, u],
          ),
          P = s.useMemo(
            () =>
              Object.assign(Object.assign({}, a), {
                '--pause-on-hover': !i || o ? 'paused' : 'running',
                '--pause-on-click': !i || (o && !c) || c ? 'paused' : 'running',
                '--width': 'up' === d || 'down' === d ? '100vh' : '100%',
                '--transform':
                  'up' === d
                    ? 'rotate(-90deg)'
                    : 'down' === d
                      ? 'rotate(90deg)'
                      : 'none',
              }),
            [a, i, o, c, d],
          ),
          O = s.useMemo(
            () => ({
              '--gradient-color': p,
              '--gradient-width': 'number' == typeof g ? ''.concat(g, 'px') : g,
            }),
            [p, g],
          ),
          W = s.useMemo(
            () => ({
              '--play': i ? 'running' : 'paused',
              '--direction': 'left' === d ? 'normal' : 'reverse',
              '--duration': ''.concat(T, 's'),
              '--delay': ''.concat(m, 's'),
              '--iteration-count': x ? ''.concat(x) : 'infinite',
              '--min-width': l ? 'auto' : '100%',
            }),
            [i, d, T, m, x, l],
          ),
          q = s.useMemo(
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
          B = s.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                r.default.createElement(
                  s.Fragment,
                  { key: t },
                  s.Children.map(w, (e) =>
                    r.default.createElement(
                      'div',
                      { style: q, className: 'rfm-child' },
                      e,
                    ),
                  ),
                ),
              ),
            [q, w],
          );
        return Z
          ? r.default.createElement(
              'div',
              { ref: S, style: P, className: 'rfm-marquee-container ' + n },
              h &&
                r.default.createElement('div', {
                  style: O,
                  className: 'rfm-overlay',
                }),
              r.default.createElement(
                'div',
                {
                  className: 'rfm-marquee',
                  style: W,
                  onAnimationIteration: b,
                  onAnimationEnd: f,
                },
                r.default.createElement(
                  'div',
                  { className: 'rfm-initial-child-container', ref: z },
                  s.Children.map(w, (e) =>
                    r.default.createElement(
                      'div',
                      { style: q, className: 'rfm-child' },
                      e,
                    ),
                  ),
                ),
                B(k - 1),
              ),
              r.default.createElement(
                'div',
                { className: 'rfm-marquee', style: W },
                B(k),
              ),
            )
          : null;
      });
      t.Z = n;
    },
    4642: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        });
      var s = a(7437),
        r = a(4529),
        n = a(1128),
        l = a(703),
        i = a(2265),
        o = a(9549),
        c = a(44),
        d = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('div', {
                className: 'section-padding pb-10',
                children: (0, s.jsxs)('div', {
                  className: 'relative',
                  children: [
                    (0, s.jsxs)('div', {
                      style: {
                        backgroundColor: 'rgb(3,5,22)',
                        background:
                          'linear-gradient(0deg, rgba(254, 249, 231, 0.03), rgba(254, 249, 231, 0.15))',
                      },
                      className:
                        'w-full relative p-5 md:p-8 lg:p-10 lg:pb-40 mb-20 md:mb-60 lg:mb-60 rounded-[3rem]',
                      children: [
                        (0, s.jsx)('div', {
                          className: 'min-h-[150px] lg:min-h-[80px]',
                          children: (0, s.jsx)(o.Z, {
                            typingDelay: 100,
                            children: (0, s.jsxs)('h1', {
                              className:
                                'text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-5 max-w-6xl mx-auto text-center',
                              children: [
                                'Dare to ',
                                (0, s.jsx)('span', {
                                  className: 'text-accent',
                                  children: 'Dream!',
                                }),
                                ' Dare to',
                                ' ',
                                (0, s.jsx)('span', {
                                  className: 'text-accent',
                                  children: 'Do!',
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, s.jsx)(c.F, {
                          words:
                            'Become part of a team that values creativity, encourages exploration, and rewards the bold. Here, you’ll not only witness the future of technology but also play an active role in creating it. Forge your path with us and leave a lasting mark on the tech world.',
                          innerClassName:
                            'text-darkGrey text-base md:text-lg md:mb-8 leading-7 max-w-3xl mx-auto text-center mb-48',
                          delay: 2,
                        }),
                        (0, s.jsx)('div', {
                          className:
                            'hidden md:flex flex-col justify-center items-center md:flex-row gap-5 w-fit mx-auto mb-0 md:mb-20 relative top-10 md:top-0',
                          children: (0, s.jsx)(n.Z, {
                            buttonText: 'See Open Roles',
                            play: !0,
                            attributes: {
                              onClick: function () {
                                let e = document.getElementById('open-roles');
                                e &&
                                  window.scrollTo({
                                    top: e.offsetTop,
                                    behavior: 'smooth',
                                  });
                              },
                            },
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className:
                        'w-[90%] lg:w-[60%] h-[300px] md:h-[400px] lg:h-[400px] absolute right-[50%] -bottom-[20%] sm:-bottom-[25%] md:-bottom-[50%] lg:-bottom-[38%] translate-x-[50%]',
                      children: [
                        (0, s.jsx)('div', {
                          className:
                            'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-[2rem]',
                        }),
                        (0, s.jsx)(l.default, {
                          className: 'w-full rounded-[2rem]',
                          src: '/images/career-header-img.svg',
                          alt: 'hero-img',
                          layout: 'fill',
                          objectFit: 'cover',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)('div', {
                className:
                  'section-padding py-10 flex flex-col-reverse md:flex-row gap-16 md:gap-8 lg:gap-16 xl:gap-24',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'basis-1/2 flex flex-col-reverse md:flex-col gap-10 md:gap-20',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'w-full relative h-[25rem]',
                        children: [
                          (0, s.jsx)('div', {
                            className:
                              'bg-accent z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-3xl animate-pulse',
                          }),
                          (0, s.jsx)(l.default, {
                            className: 'rounded-3xl',
                            src: '/images/career-header-3.svg',
                            alt: '',
                            layout: 'fill',
                            objectFit: 'cover',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)(c.F, {
                            words: 'Cultivating Excellence',
                            innerClassName: 'text-4xl font-medium mb-5',
                          }),
                          (0, s.jsx)(c.F, {
                            words:
                              'Our culture is built on trust and transparency, encouraging open communication and shared goals. We’re committed to not only achieving excellence in our projects but also in the personal and professional growth of our people. At Forcythe, we’re not just a team; we’re a community driven by passion, purpose, and the pursuit of excellence.',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'basis-1/2 flex flex-col gap-10 md:gap-20',
                    children: [
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)(c.F, {
                            words: 'Life at Forcythe',
                            innerClassName: 'text-4xl font-medium mb-5',
                          }),
                          (0, s.jsx)(c.F, {
                            words:
                              'Over here, innovation flourishes and collaboration reigns. Our environment is one of continuous learning, where every team member is empowered to explore new ideas and push the boundaries of what’s possible. We value diversity, not just in backgrounds but in thoughts and approaches, fostering a workspace where creativity and innovation are nurtured.',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'w-full relative h-[25rem]',
                        children: [
                          (0, s.jsx)('div', {
                            className:
                              'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-3xl animate-pulse',
                          }),
                          (0, s.jsx)(l.default, {
                            className: 'rounded-3xl',
                            src: '/images/career-header-2.svg',
                            alt: '',
                            layout: 'fill',
                            objectFit: 'cover',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        u = a(7065),
        m = a(9880),
        x = a(8792),
        h = a(7141),
        p = a(5201),
        g = a(8721),
        f = (e) => {
          let { openings: t } = e,
            { departments: a } = (0, p.useAppContext)(),
            [r, n] = (0, i.useState)(''),
            l = r
              ? t.filter(
                  (e) => e.attributes.roleDepartment.data.attributes.name === r,
                )
              : t;
          return (
            console.log(r, l),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)('div', {
                  style: {
                    backgroundColor: 'rgb(3,5,22)',
                    background:
                      'linear-gradient(0deg, rgba(3,5,22,1) 32%, rgba(12,38,69,1) 85%)',
                  },
                  className: 'py-10',
                  children: [
                    (0, s.jsx)(c.F, {
                      words: 'Benefits and Perks',
                      innerClassName:
                        'section-padding text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 text-center',
                    }),
                    (0, s.jsxs)('div', {
                      id: 'open-roles',
                      className:
                        'section-padding hidden lg:flex items-center justify-center flex-wrap gap-y-4 gap-x-7 max-w-6xl mx-auto',
                      children: [
                        (0, s.jsx)(u.Z, {
                          icon: '\uD83D\uDD5D',
                          text: 'Flexible Work',
                          width: 'fit',
                        }),
                        (0, s.jsx)(u.Z, {
                          icon: '\uD83D\uDD10',
                          text: 'Retirement Plans',
                          width: 'fit',
                        }),
                        (0, s.jsx)(u.Z, {
                          icon: '\uD83C\uDFD6️',
                          text: 'Paid Time Off',
                          width: 'fit',
                        }),
                        (0, s.jsx)(u.Z, {
                          icon: '\uD83E\uDDD1‍\uD83C\uDF93',
                          text: 'Professional Development',
                          width: 'fit',
                        }),
                        (0, s.jsx)(u.Z, {
                          icon: '\uD83E\uDDD8',
                          text: 'Wellness Programs',
                          width: 'fit',
                        }),
                        (0, s.jsx)(u.Z, {
                          icon: '\uD83D\uDCC5',
                          text: 'Company Events',
                          width: 'fit',
                        }),
                        (0, s.jsx)(u.Z, {
                          icon: '⛑️',
                          text: 'Health Insurance',
                          width: 'fit',
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex lg:hidden flex-col gap-3',
                      children: [
                        (0, s.jsx)(h.Z, {
                          pauseOnHover: !0,
                          children: (0, s.jsxs)('div', {
                            className:
                              'skills overflow-hidden flex items-center gap-3 w-full ml-3',
                            children: [
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83D\uDD5D',
                                text: 'Flexible Work',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83D\uDD10',
                                text: 'Retirement Plans',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83C\uDFD6️',
                                text: 'Paid Time Off',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83E\uDDD1‍\uD83C\uDF93',
                                text: 'Professional Development',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83E\uDDD8',
                                text: 'Wellness Programs',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83D\uDCC5',
                                text: 'Company Events',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '⛑️',
                                text: 'Health Insurance',
                                width: 'fit',
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(h.Z, {
                          pauseOnHover: !0,
                          direction: 'right',
                          children: (0, s.jsxs)('div', {
                            className:
                              'skills overflow-hidden flex items-center gap-3 w-full ml-3',
                            children: [
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83D\uDD5D',
                                text: 'Flexible Work',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83D\uDD10',
                                text: 'Retirement Plans',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83C\uDFD6️',
                                text: 'Paid Time Off',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83E\uDDD1‍\uD83C\uDF93',
                                text: 'Professional Development',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83E\uDDD8',
                                text: 'Wellness Programs',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '\uD83D\uDCC5',
                                text: 'Company Events',
                                width: 'fit',
                              }),
                              (0, s.jsx)(u.Z, {
                                icon: '⛑️',
                                text: 'Health Insurance',
                                width: 'fit',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'py-10 section-padding',
                  children: [
                    (0, s.jsxs)('div', {
                      className:
                        'mb-8 flex flex-col lg:flex-row gap-8 items-center justify-between',
                      children: [
                        (0, s.jsx)(c.F, {
                          words: 'Current Openings',
                          innerClassName: 'text-4xl font-normal',
                          wordStyles: [
                            { word: 'Openings', classes: 'capitalize' },
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className:
                            'w-full sm:w-fit flex flex-col sm:flex-row items-center gap-6',
                          children: [
                            (0, s.jsx)('div', {
                              className: 'min-w-full sm:min-w-[300px]',
                              children: (0, s.jsx)(m.Z, {
                                placeholder: 'All Departments',
                                options: a.map((e) => {
                                  var t;
                                  return null == e
                                    ? void 0
                                    : null === (t = e.attributes) ||
                                        void 0 === t
                                      ? void 0
                                      : t.name;
                                }),
                                attributes: {
                                  onChange: (e) => n(e.target.value),
                                },
                              }),
                            }),
                            (0, s.jsx)('div', {
                              className: 'min-w-full sm:min-w-[300px]',
                              children: (0, s.jsx)(m.Z, {
                                placeholder: 'All Locations',
                                options: ['Nigeria', 'Ghana'],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.length
                      ? (0, s.jsx)('div', {
                          className: 'flex flex-col gap-5 md:gap-10',
                          children: l.map((e) => {
                            var t, a, r;
                            return (0, s.jsx)(
                              x.default,
                              {
                                href: '/career/apply/'.concat(
                                  null == e ? void 0 : e.attributes.slug,
                                ),
                                children: (0, s.jsxs)('div', {
                                  style: {
                                    backgroundColor: 'rgb(3,5,22)',
                                    background:
                                      'linear-gradient(0deg, rgba(254, 249, 231, 0.05), rgba(254, 249, 231, 0.15))',
                                  },
                                  className:
                                    'bg-white bg-opacity-10 w-full rounded-3xl p-7 flex gap-3 md:gap-5 lg:gap-8 items-start lg:items-center justify-between',
                                  children: [
                                    (0, s.jsxs)('div', {
                                      className:
                                        'grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-0 flex-1',
                                      children: [
                                        (0, s.jsxs)('div', {
                                          className: 'md:pr-5 lg:pr-10',
                                          children: [
                                            (0, s.jsx)('h4', {
                                              className:
                                                'text-3xl font-medium mb-3',
                                              children:
                                                null == e
                                                  ? void 0
                                                  : e.attributes.role,
                                            }),
                                            (0, s.jsxs)('div', {
                                              className:
                                                'text-darkGrey text-base flex items-center gap-3',
                                              children: [
                                                (0, s.jsx)('span', {
                                                  children:
                                                    null == e
                                                      ? void 0
                                                      : null ===
                                                            (a =
                                                              e.attributes
                                                                .roleDepartment) ||
                                                          void 0 === a
                                                        ? void 0
                                                        : null ===
                                                              (t = a.data) ||
                                                            void 0 === t
                                                          ? void 0
                                                          : t.attributes.name,
                                                }),
                                                (0, s.jsx)('span', {
                                                  children:
                                                    e.attributes.roleType,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)('div', {
                                          className:
                                            'text-base md:pr-5 lg:pr-10 line-clamp-4',
                                          children:
                                            null == e
                                              ? void 0
                                              : e.attributes.roleDesc,
                                        }),
                                        (null == e
                                          ? void 0
                                          : e.attributes.skills) &&
                                          (0, s.jsxs)('div', {
                                            className: 'md:pr-5 lg:pr-10',
                                            children: [
                                              (0, s.jsx)('p', {
                                                className: 'text-base mb-3',
                                                children:
                                                  null == e
                                                    ? void 0
                                                    : null ===
                                                          (r =
                                                            e.attributes.skills
                                                              .data) ||
                                                        void 0 === r
                                                      ? void 0
                                                      : r.map((t, a) =>
                                                          (0, s.jsxs)(
                                                            'span',
                                                            {
                                                              className:
                                                                'capitalize',
                                                              children: [
                                                                t.attributes
                                                                  .name,
                                                                a !==
                                                                  e.attributes
                                                                    .skills.data
                                                                    .length -
                                                                    1 && ', ',
                                                              ],
                                                            },
                                                            t.id,
                                                          ),
                                                        ),
                                              }),
                                              (0, s.jsx)('p', {
                                                className:
                                                  'text-lg text-darkGrey',
                                                children: 'Core Skills',
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, s.jsx)(x.default, {
                                      className: 'cursor-pointer w-fit h-fit',
                                      href: '/career/apply/'.concat(
                                        null == e ? void 0 : e.attributes.slug,
                                      ),
                                      children: (0, s.jsx)('img', {
                                        className: 'w-6 md:w-auto mt-5 md:mt-0',
                                        src: '/images/arrow-right.svg',
                                        alt: 'arrow-right',
                                        width: 40,
                                        height: 40,
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              null == e ? void 0 : e.id,
                            );
                          }),
                        })
                      : (0, s.jsx)('div', {
                          className: ' py-10',
                          children: (0, s.jsx)(g.Z, {
                            header: '',
                            message:
                              "We don't have any openings at this time. Please check back later.",
                            wideTextWidth: !0,
                          }),
                        }),
                  ],
                }),
              ],
            })
          );
        },
        b = () =>
          (0, s.jsxs)('div', {
            className: 'section-padding py-10',
            children: [
              (0, s.jsx)(c.F, {
                words: 'Employee Testimonials',
                innerClassName:
                  'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 text-center',
                wordStyles: [{ word: 'Testimonials', classes: 'capitalize' }],
              }),
              (0, s.jsxs)('div', {
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-5',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'w-full rounded-[1.8rem] flex flex-col sm:flex-row p-7 bg-accent3',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'sm:basis-[58%] sm:pr-3',
                        children: [
                          (0, s.jsx)('h4', {
                            className: 'text-[15px] font-bold mb-3',
                            children: 'Marketing Executive',
                          }),
                          (0, s.jsx)('p', {
                            className: 'text-[15px] leading-6 mb-2',
                            children:
                              "Life at Forcythe is dynamic & supportive, fostering collaboration & innovation. The exceptional culture is inclusive, respectful, and team-oriented, where everyone's voice is valued, & diversity is celebrated. Being here has transformed my personal & professional growth, enhancing my leadership skills through learning, mentorship & challenging projects.",
                          }),
                          (0, s.jsx)('p', {
                            className: 'text-[15px] font-semibold',
                            children: 'Emmanuella Asante',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className:
                          'w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-8 sm:mt-0',
                        children: [
                          (0, s.jsx)('div', {
                            className:
                              'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl',
                          }),
                          (0, s.jsx)(l.default, {
                            className: 'rounded-xl relative object-top',
                            src: '/images/emanuella.svg',
                            layout: 'fill',
                            objectFit: 'cover',
                            alt: 'ceo',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className:
                      'w-full rounded-[1.8rem] flex flex-col sm:flex-row p-7 bg-accent3',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'sm:basis-[58%] sm:pr-3',
                        children: [
                          (0, s.jsx)('h4', {
                            className: 'text-[15px] font-bold mb-3',
                            children: 'Product Manager',
                          }),
                          (0, s.jsx)('p', {
                            className: 'text-[15px] leading-6 mb-2',
                            children:
                              'My experience at Forcythe was nothing short of a transformative learning journey, deeply enriched by its vibrant culture of collaboration and growth. Embracing this culture empowered me to flourish in my role as a product manager, fostering invaluable personal and professional development at every turn.',
                          }),
                          (0, s.jsx)('p', {
                            className: 'text-[15px] font-semibold',
                            children: 'Courageous Ugbe',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className:
                          'w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-8 sm:mt-0',
                        children: [
                          (0, s.jsx)('div', {
                            className:
                              'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl',
                          }),
                          (0, s.jsx)(l.default, {
                            className: 'rounded-xl relative object-top',
                            src: '/images/ugbe.svg',
                            layout: 'fill',
                            objectFit: 'cover',
                            alt: 'ceo',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      let v = (e) => {
        let { number: t, title: a, text: r } = e;
        return (0, s.jsxs)('div', {
          style: {
            backgroundColor: 'rgb(3,5,22)',
            background:
              'linear-gradient(90deg, rgba(12, 38, 69, 0), rgba(12, 38, 69, 1))',
          },
          className: 'p-7 rounded-e-3xl shadow-md shadow-black',
          children: [
            (0, s.jsxs)('div', {
              style: {
                backgroundColor: 'rgb(3,5,22)',
                background:
                  'linear-gradient(90deg, rgba(12, 38, 69, 0), rgba(12, 38, 69, 1))',
              },
              className:
                'py-3 shadow-sm rounded-e-full flex items-center gap-5 mb-2',
              children: [
                (0, s.jsx)('span', {
                  className:
                    'w-10 h-10 rounded-full bg-[#06438C] text-[#60A6E7] flex justify-center items-center font-bold text-2xl',
                  children: t,
                }),
                (0, s.jsx)('h6', {
                  className:
                    'font-semibold text-2xl truncate lowercase first-letter:capitalize',
                  children: a,
                }),
              ],
            }),
            (0, s.jsx)(c.F, { words: r, innerClassName: 'text-lg leading-7' }),
          ],
        });
      };
      var w = () =>
          (0, s.jsxs)('div', {
            className: 'section-padding py-10',
            children: [
              (0, s.jsx)(c.F, {
                words: 'Application Process',
                innerClassName:
                  'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 text-center',
                wordStyles: [{ word: 'Process', classes: 'capitalize' }],
              }),
              (0, s.jsxs)('div', {
                className:
                  'w-full flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-16',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'basis-1/2 w-full relative lg:sticky lg:top-40 min-h-[350px] h-[380px]',
                    children: [
                      (0, s.jsx)('div', {
                        className:
                          'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-3xl animate-pulse',
                      }),
                      (0, s.jsx)(l.default, {
                        className: 'rounded-3xl',
                        src: '/images/man-with-laptop.svg',
                        alt: '',
                        layout: 'fill',
                        objectFit: 'cover',
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'basis-1/2 flex flex-col gap-6',
                    children: [
                      (0, s.jsx)(v, {
                        number: '1',
                        title: 'First Step Towards Impact',
                        text: 'Begin your journey with Forcythe by submitting your application. Show us how your skills, experience, and passion align with our mission. This is your opportunity to shine and stand out.',
                      }),
                      (0, s.jsx)(v, {
                        number: '2',
                        title: 'Showcase Your Expertise',
                        text: 'Engage with our team through in-depth interviews and demonstrate your problem-solving abilities with test projects. This stage is all about understanding your potential and fit within our innovative culture.',
                      }),
                      (0, s.jsx)(v, {
                        number: '3',
                        title: 'Mutual Success In Sight',
                        text: 'Our team carefully reviews each candidate’s application, interview performance, and project results. We seek individuals who not only have the right skills but also share our vision for the future.',
                      }),
                      (0, s.jsx)(v, {
                        number: '4',
                        title: 'Welcome to the Team',
                        text: 'Successful candidates will receive an offer to join us. Our onboarding process is designed to integrate you smoothly into our team, setting you up for success from day one.',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        j = a(8595),
        y = () => {
          let [e, t] = (0, i.useState)(-1),
            { faqs: a } = (0, p.useAppContext)(),
            r = (e) => {
              t((t) => (t === e ? -1 : e));
            };
          return (0, s.jsxs)('div', {
            className: 'section-padding py-10',
            children: [
              (0, s.jsxs)('div', {
                className: 'text-center max-w-[60rem] mx-auto mb-10 lg:mb-14',
                children: [
                  (0, s.jsx)('h2', {
                    className:
                      'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-8 text-center',
                    children: 'Frequently Asked Questions',
                  }),
                  (0, s.jsx)('p', {
                    className: 'text-darkGrey text-lg leading-7',
                    children:
                      'Have questions? We’ve got answers! Browse through our FAQ section to find quick and detailed responses to the most common inquiries. If you don’t find what you’re looking for, feel free to reach out to us directly.',
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className: 'flex flex-col gap-5',
                children: a.map((t, a) =>
                  (0, s.jsx)(
                    j.Z,
                    { faq: t, opened: e === a, toggle: () => r(a) },
                    a,
                  ),
                ),
              }),
            ],
          });
        },
        N = a(7908),
        D = a(1672);
      function k() {
        let [e, t] = (0, i.useState)([]),
          a = async () => {
            try {
              let e = (
                await N.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/current-openings?populate=*&sort=publishedAt:desc',
                  ),
                )
              ).data.data;
              t(e);
            } catch (e) {
              alert('Error fetching roles');
            }
          };
        return (
          (0, i.useLayoutEffect)(() => {
            a();
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)('main', {
                className: 'min-h-screen mt-[6rem] md:mt-[6.5rem] w-full',
                children: [
                  (0, s.jsx)(d, {}),
                  (0, s.jsx)(f, { openings: e }),
                  (0, s.jsx)(b, {}),
                  (0, s.jsx)(w, {}),
                  (0, s.jsx)(y, {}),
                  (0, s.jsx)(r.Z, {}),
                ],
              }),
              (0, s.jsx)(D.Z, {}),
            ],
          })
        );
      }
    },
    7065: function (e, t, a) {
      'use strict';
      var s = a(7437);
      a(2265),
        (t.Z = (e) => {
          let { icon: t, text: a, width: r } = e;
          return (0, s.jsxs)('div', {
            className: ''.concat(
              r ? 'w-'.concat(r) : 'w-full',
              ' text-base flex flex-nowrap items-center gap-2 py-3.5 px-5 rounded-full border border-[#085BBF] bg-[#071626]',
            ),
            children: [
              (0, s.jsx)('span', { className: 'text-lg', children: t }),
              (0, s.jsx)('span', {
                className:
                  ' text-nowrap overflow-hidden whitespace-nowrap max-w-[90%] text-ellipsis',
                children: a,
              }),
            ],
          });
        });
    },
    1128: function (e, t, a) {
      'use strict';
      var s = a(7437),
        r = a(703),
        n = a(8792),
        l = a(1218),
        i = a(9735),
        o = a(2265);
      t.Z = (e) => {
        let {
          buttonText: t,
          buttonType: a,
          link: c,
          width: d,
          attributes: u,
          loading: m = !1,
          play: x,
          outline: h = !1,
          book: p = !1,
          dottedBorder: g = !0,
        } = e;
        return (
          (0, o.useEffect)(() => {
            !(async function () {
              p &&
                (await (0, i.o)())('ui', {
                  styles: { branding: { brandColor: '#1f3449' } },
                  hideEventTypeDetails: !1,
                  layout: 'month_view',
                });
            })();
          }, []),
          (0, s.jsxs)('div', {
            className: 'relative w-fit group',
            children: [
              c
                ? (0, s.jsx)(n.default, {
                    href: c || '',
                    children: (0, s.jsxs)('span', {
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          h
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: [
                        t,
                        x &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(r.default, {
                                className: 'group-hover:hidden',
                                src: '/images/play.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                              (0, s.jsx)(r.default, {
                                className: 'hidden group-hover:block',
                                src: '/images/play-white.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                            ],
                          }),
                      ],
                    }),
                  })
                : p
                  ? (0, s.jsxs)('button', {
                      'data-cal-namespace': '',
                      'data-cal-link': 'forcythe/discovery',
                      'data-cal-config': '{"layout":"month_view"}',
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          h
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: [
                        t,
                        x &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(r.default, {
                                className: 'group-hover:hidden',
                                src: '/images/play.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                              (0, s.jsx)(r.default, {
                                className: 'hidden group-hover:block',
                                src: '/images/play-white.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                            ],
                          }),
                      ],
                    })
                  : (0, s.jsx)('button', {
                      ...u,
                      type: a || 'button',
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          h
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: m
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(l.Z, { size: 14, color: 'white' }),
                              ' ',
                              (0, s.jsx)('span', {
                                className: 'ml-2',
                                children: t,
                              }),
                            ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              t,
                              x &&
                                (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)(r.default, {
                                      className: 'group-hover:hidden',
                                      src: '/images/play.svg',
                                      width: 10,
                                      height: 10,
                                      alt: 'play',
                                    }),
                                    (0, s.jsx)(r.default, {
                                      className: 'hidden group-hover:block',
                                      src: '/images/play-white.svg',
                                      width: 10,
                                      height: 10,
                                      alt: 'play',
                                    }),
                                  ],
                                }),
                            ],
                          }),
                    }),
              g &&
                (0, s.jsx)('div', {
                  className:
                    'w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]',
                }),
            ],
          })
        );
      };
    },
    8721: function (e, t, a) {
      'use strict';
      var s = a(7437);
      t.Z = (e) => {
        let {
          header: t,
          message: a,
          wideTextWidth: r,
          containerClassName: n,
          objectClassName: l,
          notFullHeight: i,
        } = e;
        return (0, s.jsx)('div', {
          className: 'w-full '
            .concat(!i && 'grow', ' flex items-center justify-center ')
            .concat(n),
          children: (0, s.jsxs)('div', {
            className: ''.concat(l || (r ? 'w-[380px]' : 'w-[180px]')),
            children: [
              (0, s.jsx)('h6', {
                className: 'font-semibold text-center mt-1 mb-2',
                children: t,
              }),
              (0, s.jsx)('p', {
                className: 'text-center text-[15px] max-sm:text-sm',
                children: a,
              }),
            ],
          }),
        });
      };
    },
    8595: function (e, t, a) {
      'use strict';
      var s = a(7437);
      a(2265),
        (t.Z = (e) => {
          let { faq: t, opened: a, toggle: r } = e;
          return (0, s.jsxs)('div', {
            className: 'w-full',
            children: [
              (0, s.jsxs)('div', {
                onClick: r,
                style: {
                  backgroundColor: 'rgb(3,5,22)',
                  background:
                    'linear-gradient(0deg, rgba(3,5,22,1) 21%, rgba(7, 22, 38, 1) 70%)',
                },
                className:
                  'w-full p-5 lg:p-7 flex justify-between items-center rounded-3xl cursor-pointer',
                children: [
                  (0, s.jsx)('span', {
                    className:
                      'text-base lg:text-xl font-normal lg:font-medium',
                    children: t.attributes.question,
                  }),
                  (0, s.jsx)('img', {
                    className: 'transition-all duration-300 '.concat(
                      a ? 'rotate-90' : 'rotate-0',
                    ),
                    src: '/images/nav-arrow-right.svg',
                    alt: 'arrow',
                    width: 25,
                  }),
                ],
              }),
              a &&
                (0, s.jsx)('div', {
                  className: 'w-full p-8 py-5 rounded-3xl text-sm lg:text-lg',
                  children: t.attributes.answer,
                }),
            ],
          });
        });
    },
    1672: function (e, t, a) {
      'use strict';
      var s = a(7437),
        r = a(9491),
        n = a(5201),
        l = a(2265);
      t.Z = () => {
        let { showSuccessMessage: e, setShowSuccessMessage: t } = (0,
        n.useAppContext)();
        return ((0, l.useEffect)(() => {
          if (e) {
            let e = setTimeout(() => {
              t(!1);
            }, 3e3);
            return () => clearTimeout(e);
          }
        }, [e, t]),
        e)
          ? (0, s.jsx)(r.Z, {
              content: (0, s.jsx)('div', {
                style: {
                  backgroundColor: 'rgba(3, 5, 22, 1)',
                  background:
                    'linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgba(7, 22, 38, 1) 85%)',
                },
                className: 'py-28 px-10 w-[400px] max-sm:w-[75vw]',
                children: (0, s.jsxs)('div', {
                  className: 'text-center',
                  children: [
                    (0, s.jsx)('h2', {
                      className: 'text-4xl text-accent mb-3',
                      children: 'Thank You!',
                    }),
                    (0, s.jsx)('p', {
                      className: 'text-lg text-accent2',
                      children: 'We have received your message',
                    }),
                  ],
                }),
              }),
            })
          : null;
      };
    },
    9880: function (e, t, a) {
      'use strict';
      var s = a(7437),
        r = a(703);
      t.Z = (e) => {
        let {
          label: t,
          labelFor: a,
          placeholder: n,
          attributes: l,
          options: i,
          disabled: o,
          error: c,
        } = e;
        return (0, s.jsxs)('div', {
          className: 'Select w-full '.concat(o && 'opacity-80'),
          children: [
            (0, s.jsx)('label', {
              htmlFor: a,
              className: 'text-sm text-white font-normal capitalize',
              children: t,
            }),
            (0, s.jsxs)('div', {
              className: 'relative w-full mt-2',
              children: [
                (0, s.jsxs)('select', {
                  ...l,
                  className:
                    'w-full relative z-10 py-3 md:py-3.5 px-5 pr-14 flex items-center justify-between capitalize\n                    focus:outline-none rounded-full bg-transparent border border-white text-base '.concat(
                      !o && 'cursor-pointer',
                      ' \n                ',
                    ),
                  disabled: o,
                  children: [
                    (0, s.jsx)('option', { value: '', children: n }),
                    i &&
                      i.map((e, t) =>
                        (0, s.jsx)('option', { value: e, children: e }, t),
                      ),
                  ],
                }),
                (0, s.jsx)('div', {
                  className:
                    'bg-white p-3.5 w-fit h-full absolute right-0 top-0 rounded-e-full flex items-center z-0',
                  children: (0, s.jsx)(r.default, {
                    width: 20,
                    height: 20,
                    src: '/images/select.svg',
                    alt: 'search',
                    className: 'scale-[0.9]',
                  }),
                }),
              ],
            }),
            c &&
              (0, s.jsx)('div', {
                className: 'text-[11px] text-[#F50449] pl-4 mt-[2px]',
                children: c,
              }),
          ],
        });
      };
    },
    44: function (e, t, a) {
      'use strict';
      a.d(t, {
        F: function () {
          return d;
        },
      });
      var s = a(7437),
        r = a(2265),
        n = a(3577),
        l = a(9159),
        i = a(6990),
        o = a(1715),
        c = a(6135);
      let d = (e) => {
        let {
            words: t,
            className: a,
            innerClassName: d,
            delay: u = 0,
            wordStyles: m = [],
          } = e,
          [x, h] = (0, n.H)(),
          [p, g] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          b = (0, l.Y)(f);
        (0, r.useEffect)(() => {
          b &&
            !p &&
            'function' == typeof h &&
            (u > 0
              ? setTimeout(() => {
                  v();
                }, 1e3 * u)
              : v());
        }, [b, p, h, u]);
        let v = () => {
            h('span', { opacity: 1 }, { duration: 2, delay: (0, i.E)(0.2) }),
              g(!0);
          },
          w = t.split(' ');
        return (0, s.jsx)('div', {
          className: (0, c.cn)('', a),
          ref: f,
          children: (0, s.jsx)('div', {
            className: '',
            children: (0, s.jsx)('p', {
              className:
                d || 'text-darkGrey text-base md:text-lg mb-8 leading-7',
              children: (0, s.jsx)(o.E.div, {
                ref: x,
                children: w.map((e, t) => {
                  let a = m.find((t) => t.word === e),
                    r = a ? a.classes : '';
                  return (0, s.jsxs)(
                    o.E.span,
                    { className: 'opacity-0 '.concat(r), children: [e, ' '] },
                    e + t,
                  );
                }),
              }),
            }),
          }),
        });
      };
    },
    4529: function (e, t, a) {
      'use strict';
      var s = a(7437),
        r = a(1128);
      a(2265),
        (t.Z = () =>
          (0, s.jsx)('div', {
            style: {
              backgroundColor: 'rgb(7,22,38)',
              background:
                'linear-gradient(0deg, rgba(7,22,38,1) 20%, rgba(3,5,22,1) 69%)',
            },
            className:
              'section-padding py-10 text-center bg-[071626] bg-opacity-0',
            children: (0, s.jsxs)('div', {
              className: 'max-w-[45rem] mx-auto',
              children: [
                (0, s.jsxs)('h2', {
                  className:
                    'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6',
                  children: [
                    (0, s.jsx)('span', {
                      className: 'text-accent',
                      children: 'Ready to Scale?',
                    }),
                    (0, s.jsx)('br', {}),
                    ' Join successful brands that chose us as their',
                    (0, s.jsx)('span', {
                      className: 'text-accent',
                      children: ' growth accelerator',
                    }),
                  ],
                }),
                (0, s.jsx)('div', {
                  className: 'w-fit mx-auto mb-5',
                  children: (0, s.jsx)(r.Z, {
                    buttonText: 'Book a Call',
                    width: 'w-fit',
                    book: !0,
                  }),
                }),
              ],
            }),
          }));
    },
    9491: function (e, t, a) {
      'use strict';
      var s = a(7437),
        r = a(2265);
      t.Z = (e) => {
        let { popupRef: t, content: a } = e;
        return (
          (0, r.useEffect)(
            () => (
              (document.body.style.overflow = 'hidden'),
              () => {
                document.body.style.overflow = 'auto';
              }
            ),
            [],
          ),
          (0, s.jsx)('div', {
            ref: t,
            className:
              'fixed inset-0 z-[999] w-screen full-screen bg-[#030516] bg-opacity-70  grid place-content-center max-sm:flex items-center justify-center overflow-hidden py-10',
            children: (0, s.jsx)('div', {
              className:
                'hide-scrollbar overflow-x-scroll max-h-[85vh] h-fit bg-primaryBackground rounded-3xl border-2 border-[#071626] shadow-sm shadow-[#B3D0F24D]',
              children: a,
            }),
          })
        );
      };
    },
    5201: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          AppWrapper: function () {
            return i;
          },
          useAppContext: function () {
            return o;
          },
        });
      var s = a(7437),
        r = a(7908),
        n = a(2265);
      let l = (0, n.createContext)(null);
      function i(e) {
        let { children: t } = e,
          [a, i] = (0, n.useState)(!1),
          [o, c] = (0, n.useState)(!1),
          [d, u] = (0, n.useState)(!0),
          [m, x] = (0, n.useState)([]),
          [h, p] = (0, n.useState)([]),
          [g, f] = (0, n.useState)([]),
          [b, v] = (0, n.useState)([]),
          [w, j] = (0, n.useState)([]),
          [y, N] = (0, n.useState)([]),
          [D, k] = (0, n.useState)([]),
          C = async () => {
            try {
              let e = await r.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/faqs'),
              );
              x(e.data.data);
            } catch (e) {
              console.error(e);
            }
          },
          Z = async () => {
            try {
              let e = await r.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/foundation-faqs'),
              );
              p(e.data.data);
            } catch (e) {
              console.error(e);
            }
          },
          F = async () => {
            try {
              let e = (
                await r.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/our-ventures?populate=*&sort=publishedAt:desc',
                  ),
                )
              ).data.data;
              j(e);
            } catch (e) {
              console.error(e);
            }
          },
          E = async () => {
            try {
              let e = (
                await r.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/blogs?populate=*&sort=publishedAt:desc&pagination[pageSize]=1000',
                  ),
                )
              ).data.data;
              f(e);
            } catch (e) {
              console.error(e);
            }
          },
          S = async () => {
            try {
              let e = (
                await r.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/blogs?populate=*&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3',
                  ),
                )
              ).data.data;
              v(e);
            } catch (e) {
              console.error(e);
            }
          },
          z = async () => {
            try {
              let e = (
                await r.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/portfolios?populate=*&sort=publishedAt:desc',
                  ),
                )
              ).data.data;
              N(e);
            } catch (e) {
              console.error(e);
            }
          },
          A = async () => {
            try {
              let e = (
                await r.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/departments?populate=*',
                  ),
                )
              ).data.data;
              k(e);
            } catch (e) {
              console.error(e);
            }
          };
        return (
          (0, n.useEffect)(() => {
            E(), C(), Z(), S(), F(), z(), A();
          }, []),
          (0, s.jsx)(l.Provider, {
            value: {
              allBlogs: g,
              setAllBlogs: f,
              getInvolvedForm: a,
              setGetInvolvedForm: i,
              loading: d,
              setLoading: u,
              faqs: m,
              setFaqs: x,
              foundationFaqs: h,
              setFoundationFaqs: p,
              latestBlogs: b,
              setLatestBlogs: v,
              ourVentures: w,
              setOurVentures: j,
              ourPortfolios: y,
              setOurPortfolios: N,
              showSuccessMessage: o,
              setShowSuccessMessage: c,
              departments: D,
              setDepartments: k,
            },
            children: t,
          })
        );
      }
      function o() {
        return (0, n.useContext)(l);
      }
    },
    6135: function (e, t, a) {
      'use strict';
      a.d(t, {
        cn: function () {
          return n;
        },
      });
      var s = a(3167),
        r = a(1367);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, r.m6)((0, s.W)(t));
      }
    },
  },
  function (e) {
    e.O(0, [406, 150, 908, 411, 971, 69, 744], function () {
      return e((e.s = 1318));
    }),
      (_N_E = e.O());
  },
]);
