(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [469],
  {
    5632: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 4359));
    },
    9573: function (e, t, a) {
      'use strict';
      var s = a(7437),
        l = a(2265),
        r = a(703),
        i = a(44);
      t.Z = (e) => {
        var t, a, n, o, d, c, u, x, m, p;
        let { project: g, ourVenture: b } = e,
          [v, h] = (0, l.useState)('sector');
        return (0, s.jsxs)('div', {
          onClick: (e) => {
            let t = e.target.id;
            if (
              'venture-options' !== t &&
              'sector' !== t &&
              'use-cases' !== t
            ) {
              var a;
              window.open(
                null == g
                  ? void 0
                  : null === (a = g.attributes) || void 0 === a
                    ? void 0
                    : a.projectLink,
                '_blank',
              );
            }
          },
          style: {
            backgroundColor: 'rgb(3,5,22)',
            background:
              'linear-gradient(0deg, rgba(254, 249, 231, 0.03), rgba(254, 249, 231,0.15) )',
          },
          className: 'w-full '.concat(
            (null == g
              ? void 0
              : null === (t = g.attributes) || void 0 === t
                ? void 0
                : t.columnSpan) === 2
              ? 'lg:col-span-2'
              : (null == g
                    ? void 0
                    : null === (a = g.attributes) || void 0 === a
                      ? void 0
                      : a.columnSpan) === 3
                ? 'lg:col-span-3'
                : (null == g
                      ? void 0
                      : null === (n = g.attributes) || void 0 === n
                        ? void 0
                        : n.columnSpan) === 4
                  ? 'lg:col-span-4'
                  : (null == g
                        ? void 0
                        : null === (o = g.attributes) || void 0 === o
                          ? void 0
                          : o.columnSpan) === 6
                    ? 'lg:col-span-6'
                    : null,
            ' bg-[#E6E0E9] bg-opacity-10 p-5 md:p-9 rounded-3xl shadow-md shadow-black cursor-pointer col',
          ),
          children: [
            (0, s.jsxs)('div', {
              className: 'image-section w-full h-60 relative rounded-2xl group',
              children: [
                b &&
                  (0, s.jsx)('div', {
                    id: 'venture-options',
                    className:
                      'hidden custom-animate absolute w-full h-full bg-black bg-opacity-70 top-0 right-0 z-10 rounded-2xl group-hover:flex justify-center items-center',
                    children: (0, s.jsxs)('div', {
                      className: 'w-[80%]',
                      children: [
                        (0, s.jsx)('div', {
                          className:
                            'text-sm leading-6 mb-3 line-clamp-4 text-center',
                          children:
                            'sector' === v
                              ? g.attributes.sectorText
                              : g.attributes.usecaseText,
                        }),
                        (0, s.jsxs)('div', {
                          className: 'w-fit mx-auto flex gap-3',
                          children: [
                            (0, s.jsx)('button', {
                              id: 'sector',
                              onClick: () => h('sector'),
                              className:
                                'capitalize text-sm px-4 py-2 rounded-full bg-accent2 text-[#48464C] border-[1px] border-accent',
                              children: 'Sector',
                            }),
                            (0, s.jsx)('button', {
                              id: 'use-cases',
                              onClick: () => h('use-cases'),
                              className:
                                'capitalize text-sm px-4 py-2 rounded-full bg-accent2 text-[#48464C] border-[1px] border-accent',
                              children: 'Use cases',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                (0, s.jsx)(r.default, {
                  className: 'w-full rounded-2xl',
                  src:
                    null == g
                      ? void 0
                      : g.attributes.projectCover.data.attributes.url,
                  alt:
                    null == g
                      ? void 0
                      : null === (d = g.attributes) || void 0 === d
                        ? void 0
                        : d.projectName,
                  layout: 'fill',
                  objectFit: 'cover',
                }),
                (0, s.jsx)('div', {
                  className:
                    'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-2xl animate-pulse',
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: 'mt-6 max-w-md',
              children: [
                (0, s.jsx)(i.F, {
                  words:
                    null == g
                      ? void 0
                      : null === (c = g.attributes) || void 0 === c
                        ? void 0
                        : c.projectName,
                  innerClassName: 'mb-5 text-[1.4rem] leading-7 font-medium',
                }),
                (null == g
                  ? void 0
                  : null === (u = g.attributes) || void 0 === u
                    ? void 0
                    : u.projectTags) &&
                  (0, s.jsx)('div', {
                    className: 'tags flex flex-wrap gap-2 mb-5',
                    children:
                      null == g
                        ? void 0
                        : null === (m = g.attributes) || void 0 === m
                          ? void 0
                          : null === (x = m.projectTags) || void 0 === x
                            ? void 0
                            : x.data.map((e) =>
                                (0, s.jsx)(
                                  'div',
                                  {
                                    className:
                                      'w-fit bg-[#071626] text-[13px] py-1.5 px-4 rounded-full border border-[#085BBF]',
                                    children: e,
                                  },
                                  e,
                                ),
                              ),
                  }),
                (0, s.jsx)(i.F, {
                  words:
                    null == g
                      ? void 0
                      : null === (p = g.attributes) || void 0 === p
                        ? void 0
                        : p.projectDesc,
                  innerClassName:
                    'text-[15px] text-darkGrey leading-[1.6rem] font-light',
                  delay: 1,
                }),
              ],
            }),
          ],
        });
      };
    },
    7065: function (e, t, a) {
      'use strict';
      var s = a(7437);
      a(2265),
        (t.Z = (e) => {
          let { icon: t, text: a, width: l } = e;
          return (0, s.jsxs)('div', {
            className: ''.concat(
              l ? 'w-'.concat(l) : 'w-full',
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
    4359: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var s = a(7437),
        l = a(1460),
        r = a(1128);
      a(2265);
      var i = a(9549),
        n = a(1715),
        o = a(44),
        d = () =>
          (0, s.jsxs)('div', {
            className: 'section-padding py-10',
            children: [
              (0, s.jsx)(n.E.div, {
                initial: { scale: 0.9 },
                animate: { scale: 1 },
                transition: { duration: 0.5, type: 'tween' },
                style: {
                  backgroundColor: 'rgb(12,38,69)',
                  background:
                    'linear-gradient(70deg, rgba(12,38,69,1) 30%, rgba(69,12,60,1) 68%)',
                },
                className:
                  'py-2 px-4 text-[15px] leading-7 w-fit mx-auto rounded-full mb-8',
                children: 'Catalysing Growth, Delivering Excellence',
              }),
              (0, s.jsx)('div', {
                className: 'min-h-[100px]',
                children: (0, s.jsx)(i.Z, {
                  typingDelay: 100,
                  children: (0, s.jsxs)('h1', {
                    className:
                      'text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-5 max-w-4xl mx-auto text-center',
                    children: [
                      'From ',
                      (0, s.jsx)('span', {
                        className: 'text-accent',
                        children: 'idea',
                      }),
                      ' to market-leading',
                      ' ',
                      (0, s.jsx)('span', {
                        className: 'text-accent',
                        children: 'product',
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsx)(o.F, {
                words:
                  'Embark on a journey of transformation with our comprehensive suite of services.',
                innerClassName:
                  'text-darkGrey text-base md:text-lg mb-8 leading-7 max-w-lg mx-auto text-center',
                delay: 3.5,
              }),
              (0, s.jsxs)('div', {
                className: 'flex gap-5 w-fit mx-auto mb-10 lg:mb-20',
                children: [
                  (0, s.jsx)(r.Z, {
                    buttonText: 'Book a Call',
                    play: !0,
                    book: !0,
                  }),
                  (0, s.jsx)(r.Z, {
                    buttonText: 'Our Portfolio',
                    outline: !0,
                    attributes: {
                      onClick: function () {
                        let e = document.getElementById('portfolio');
                        e &&
                          window.scrollTo({
                            top: e.offsetTop,
                            behavior: 'smooth',
                          });
                      },
                    },
                  }),
                ],
              }),
            ],
          }),
        c = a(7065),
        u = a(7141),
        x = a(4411),
        m = () =>
          (0, s.jsxs)('div', {
            style: {
              backgroundColor: 'rgb(12,38,69)',
              background:
                'linear-gradient(0deg, rgba(12,38,69,1) 20%, rgba(3,5,22,1) 70%)',
            },
            className: 'py-10 lg:py-20',
            children: [
              (0, s.jsxs)('div', {
                className: 'section-padding',
                children: [
                  (0, s.jsx)(o.F, {
                    words: 'More than just product development',
                    innerClassName:
                      'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 text-center',
                  }),
                  (0, s.jsx)(o.F, {
                    words:
                      'We are more than a studio; we are your strategic partner in innovation. Our array of services is designed to cover every aspect of startup development, providing you with the tools and expertise to thrive in the tech ecosystem.',
                    innerClassName:
                      'text-darkGrey text-base md:text-lg mb-8 leading-7 max-w-[52rem] mx-auto text-center',
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'flex flex-col gap-3',
                children: [
                  (0, s.jsx)(u.Z, {
                    pauseOnHover: !0,
                    children: (0, s.jsx)('div', {
                      className:
                        'skills overflow-hidden flex items-center gap-3 w-full ml-3',
                      children: x.nb.map((e, t) =>
                        (0, s.jsx)(
                          c.Z,
                          { icon: e.icon, text: e.text, width: 'fit' },
                          t,
                        ),
                      ),
                    }),
                  }),
                  (0, s.jsx)(u.Z, {
                    pauseOnHover: !0,
                    direction: 'right',
                    children: (0, s.jsx)('div', {
                      className:
                        'skills overflow-hidden flex items-center gap-3 w-full ml-3',
                      children: x.nb.map((e, t) =>
                        (0, s.jsx)(
                          c.Z,
                          { icon: e.icon, text: e.text, width: 'fit' },
                          t,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        p = a(9573),
        g = () =>
          (0, s.jsxs)('div', {
            className: 'section-padding py-10',
            children: [
              (0, s.jsxs)('div', {
                className: 'max-w-4xl mx-auto mb-10',
                children: [
                  (0, s.jsx)(o.F, {
                    words: 'Forcythe’s product portfolio',
                    innerClassName:
                      'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 text-center',
                    wordStyles: [
                      {
                        word: 'Forcythe’s',
                        classes: 'text-[#60a6e7] capitalize',
                      },
                    ],
                  }),
                  (0, s.jsx)(o.F, {
                    words:
                      'Our variety of custom solutions enables you to do many things; cut additional costs, increase the speed of delivery, access expertise that is not available in-house and, solely focus on your business objectives',
                    innerClassName:
                      'text-darkGrey text-base md:text-lg mb-8 leading-7 max-w-[52rem] mx-auto text-center',
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className:
                  'grid grid-cols-1 lg:grid-cols-6 gap-x-5 gap-y-5 lg:gap-y-8',
                children: x.vZ.map((e) =>
                  (0, s.jsx)(
                    p.Z,
                    {
                      project: e,
                      id: '',
                      createdAt: '',
                      projectDesc: '',
                      projectLink: '',
                      projectName: '',
                      projectTags: { data: [] },
                      publishedAt: '',
                      updatedAt: '',
                    },
                    e.id + e.attributes.projectName,
                  ),
                ),
              }),
            ],
          }),
        b = a(4529),
        v = a(2716);
      function h() {
        return (0, s.jsxs)('main', {
          className: 'min-h-screen mt-[6rem] md:mt-[6.5rem] w-full',
          children: [
            (0, s.jsx)(d, {}),
            (0, s.jsx)(m, {}),
            (0, s.jsx)(l.Z, { page: 'services' }),
            (0, s.jsx)('div', { id: 'portfolio' }),
            (0, s.jsx)(g, {}),
            (0, s.jsx)(v.Z, {}),
            (0, s.jsx)(b.Z, {}),
          ],
        });
      }
    },
    8395: function (e, t, a) {
      'use strict';
      a.d(t, {
        C: function () {
          return n;
        },
      });
      var s = a(7437),
        l = a(2265),
        r = a(1715),
        i = a(6135);
      function n(e) {
        let {
            children: t,
            containerClassName: a,
            className: n,
            as: o = 'button',
            duration: d = 1,
            clockwise: c = !0,
            ...u
          } = e,
          [x, m] = (0, l.useState)(!1),
          [p, g] = (0, l.useState)('TOP'),
          b = (e) => {
            let t = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'],
              a = t.indexOf(e),
              s = c ? (a - 1 + t.length) % t.length : (a + 1) % t.length;
            return t[s];
          },
          v = {
            TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            BOTTOM:
              'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            RIGHT:
              'radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
          };
        return (
          (0, l.useEffect)(() => {
            if (!x) {
              let e = setInterval(() => {
                g((e) => b(e));
              }, 1e3 * d);
              return () => clearInterval(e);
            }
          }, [x]),
          (0, s.jsxs)(o, {
            onMouseEnter: (e) => {
              m(!0);
            },
            onMouseLeave: () => m(!1),
            className: (0, i.cn)(
              'relative flex rounded-full border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit',
              a,
            ),
            ...u,
            children: [
              (0, s.jsx)('div', {
                className: (0, i.cn)(
                  'w-auto text-white z-10 bg-transparent rounded-[inherit]',
                  n,
                ),
                children: t,
              }),
              (0, s.jsx)(r.E.div, {
                className: (0, i.cn)(
                  'flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]',
                ),
                style: {
                  filter: 'blur(2px)',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                },
                initial: { background: v[p] },
                animate: {
                  background: x
                    ? [
                        v[p],
                        'radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)',
                      ]
                    : v[p],
                },
                transition: { ease: 'linear', duration: null != d ? d : 1 },
              }),
              (0, s.jsx)('div', {
                className:
                  'bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]',
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [406, 150, 411, 523, 933, 971, 69, 744], function () {
      return e((e.s = 5632));
    }),
      (_N_E = e.O());
  },
]);
