(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [301],
  {
    4078: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 8233));
    },
    8233: function (e, s, a) {
      'use strict';
      a.r(s),
        a.d(s, {
          default: function () {
            return b;
          },
        });
      var t = a(7437),
        l = a(4529),
        r = a(703),
        i = a(2265),
        n = a(9549),
        d = a(44),
        o = () =>
          (0, t.jsxs)('div', {
            className: 'section-padding py-10 lg:mb-20',
            children: [
              (0, t.jsx)('div', {
                className: 'min-h-[100px]',
                children: (0, t.jsx)(n.Z, {
                  typingDelay: 100,
                  children: (0, t.jsxs)('h1', {
                    className:
                      'text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-5 max-w-3xl mx-auto text-left sm:text-center',
                    children: [
                      'Innovating at the ',
                      (0, t.jsx)('span', {
                        className: 'text-accent',
                        children: 'Speed',
                      }),
                      ' of Thought',
                    ],
                  }),
                }),
              }),
              (0, t.jsx)(d.F, {
                words:
                  'Forcythe is where ambition meets expertise, turning today’s ideas into tomorrow’s technologies',
                className: 'max-w-lg mx-auto text-left sm:text-center mb-14',
                delay: 3.5,
              }),
              (0, t.jsxs)('div', {
                className:
                  'relative max-w-[52rem] h-[350px] md:h-[400px] lg:h-[460px] mx-auto md:mb-10 shadow-2xl rounded-[2.5rem] shadow-black',
                children: [
                  (0, t.jsx)('div', {
                    className:
                      'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[2.5rem] animate-pulse',
                  }),
                  (0, t.jsx)(r.default, {
                    className: 'w-full rounded-[2.5rem]',
                    src: '/images/about-header-img.svg',
                    alt: 'hero-img',
                    layout: 'fill',
                    objectFit: 'cover',
                  }),
                ],
              }),
            ],
          }),
        c = a(4411),
        m = () => {
          let e = {
              backgroundColor: 'rgb(3,5,22)',
              background:
                'linear-gradient(90deg, rgba(3,5,22,1) 20%, rgba(12,38,69,1) 60%)',
            },
            [s, a] = (0, i.useState)(0),
            [l, n] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            let e = setInterval(() => {
              l || a((e) => (e + 1) % c.zF.length);
            }, 5e3);
            return () => clearInterval(e);
          }, [l]);
          let o = (e) => {
              a(e), n(!0);
            },
            m = () => {
              n(!1);
            };
          return (0, t.jsxs)('div', {
            className: 'section-padding py-10 lg:mb-10',
            children: [
              (0, t.jsx)(d.F, {
                words: 'Our Process',
                innerClassName:
                  'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10',
                wordStyles: [
                  { word: 'Process', classes: 'text-[#60a6e7] capitalize' },
                ],
              }),
              (0, t.jsx)('div', {
                className: 'w-full overflow-x-scroll hide-scrollbar',
                children: (0, t.jsx)('div', {
                  className:
                    'grid grid-cols-3 gap-7 min-w-[1100px] md:min-w-max lg:min-w-fit',
                  children: c.zF.map((a, l) =>
                    (0, t.jsxs)(
                      'div',
                      {
                        className:
                          'w-[350px] md:min-w-[350px] lg:min-w-fit h-auto',
                        onMouseEnter: () => o(l),
                        onMouseLeave: m,
                        children: [
                          (0, t.jsxs)('div', {
                            style: s === l ? e : void 0,
                            className: 'border-[1.5px] border-l-0 '.concat(
                              s === l
                                ? 'border-primaryBackground'
                                : 'border-accent3',
                              ' flex items-center gap-5 p-5 pl-10 rounded-r-full mb-8 cursor-pointer',
                            ),
                            children: [
                              (0, t.jsx)(r.default, {
                                src: '/images/layers-three.svg',
                                alt: 'layers_three',
                                width: 30,
                                height: 30,
                              }),
                              (0, t.jsx)('p', {
                                className: 'text-xl md:text-[1.4rem] '.concat(
                                  s === l ? 'font-normal' : 'font-light',
                                ),
                                children: a.title,
                              }),
                            ],
                          }),
                          (0, t.jsx)('div', {
                            style: s === l ? e : void 0,
                            className: ' border-[1.5px] border-l-0 '.concat(
                              s === l
                                ? 'border-primaryBackground'
                                : 'border-accent3',
                              '  gap-3 p-5 pl-10 py-8 rounded-r-[2rem] text-[16.8px] leading-7 font-light',
                            ),
                            children: a.text,
                          }),
                        ],
                      },
                      a.title + l,
                    ),
                  ),
                }),
              }),
            ],
          });
        },
        x = a(4550),
        g = () =>
          (0, t.jsxs)('div', {
            className: 'section-padding py-10',
            children: [
              (0, t.jsx)(d.F, {
                words: 'Our Core Values',
                innerClassName:
                  'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-center',
                wordStyles: [
                  { word: 'Core', classes: 'capitalize' },
                  { word: 'Values', classes: 'text-[#60a6e7] capitalize' },
                ],
              }),
              (0, t.jsx)('div', {
                className: 'flex flex-wrap justify-center gap-7',
                children: c.VO.map((e, s) =>
                  (0, t.jsx)('div', {
                    className: 'w-full md:w-[47%] lg:w-[31.5%]',
                    children: (0, t.jsx)(
                      x.Z,
                      {
                        title: e.title,
                        text: e.text,
                        svgBackground: e.svgBackground,
                        background: e.background,
                      },
                      e.title + s,
                    ),
                  }),
                ),
              }),
            ],
          }),
        u = a(1715),
        h = () =>
          (0, t.jsxs)('div', {
            style: {
              backgroundColor: 'rgb(3,5,22)',
              background:
                'linear-gradient(0deg, rgba(3,5,22,1) 0%, rgba(12,38,69,1) 34%, rgba(12,38,69,1) 68%, rgba(3,5,22,1) 100%)',
            },
            className: 'section-padding py-10',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex flex-col md:flex-row mb-16',
                children: [
                  (0, t.jsxs)('div', {
                    className: 'basis-1/2 md:pr-10 lg:pr-14',
                    children: [
                      (0, t.jsx)(d.F, {
                        words: 'The Billion $$ Vision',
                        innerClassName:
                          'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10',
                      }),
                      (0, t.jsx)('div', {
                        className: 'mb-10 md:mb-5',
                        children: (0, t.jsx)(d.F, {
                          words:
                            'We are the catalysts for change in the tech ecosystem. With a relentless commitment to excellence and a passion for digital transformation, we empower businesses to scale new heights. Our venture studio model is designed to nurture startups from the ground up, providing a full spectrum of services to ensure rapid growth and sustainable success.',
                        }),
                      }),
                      (0, t.jsx)(d.F, {
                        words:
                          '“Our vision” To enable innovators and entrepreneurs to turn their boldest ideas into profitable businesses.',
                        delay: 8,
                        className: 'mb-5',
                      }),
                    ],
                  }),
                  (0, t.jsx)('div', {
                    className: 'basis-1/2 flex justify-end',
                    children: (0, t.jsx)('div', {
                      className:
                        'w-full lg:w-[85%] h-[350px] bg-[#0C2645] p-5 md:p-8 lg:p-11 pb-0 rounded-t-[2rem]',
                      style: {
                        boxShadow:
                          '0 -2px 8px -1px rgba(0, 0, 0, 0.1), 0 -2px 8px -1px rgba(0, 0, 0, 0.06) !important',
                      },
                      children: (0, t.jsx)(u.E.div, {
                        initial: { scale: 0.95 },
                        whileInView: { scale: 1 },
                        transition: { duration: 1, type: 'tween' },
                        className: 'w-full h-full',
                        children: (0, t.jsx)(r.default, {
                          className:
                            'w-full h-full object-cover rounded-t-[1.2rem]',
                          src: '/images/vision-img.svg',
                          alt: 'vision-image',
                          width: 400,
                          height: 300,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)('div', {
                className: 'flex flex-col-reverse md:flex-row',
                children: [
                  (0, t.jsx)('div', {
                    className: 'basis-1/2',
                    children: (0, t.jsx)('div', {
                      className:
                        'w-full lg:w-[85%] h-[350px] bg-[#0C2645] p-5 md:p-8 lg:p-11 pb-0 rounded-t-[2rem]',
                      style: {
                        boxShadow:
                          '0 -2px 8px -1px rgba(0, 0, 0, 0.1), 0 -2px 8px -1px rgba(0, 0, 0, 0.06) !important',
                      },
                      children: (0, t.jsx)(u.E.div, {
                        initial: { scale: 0.95 },
                        whileInView: { scale: 1 },
                        transition: { duration: 1, type: 'tween' },
                        className: 'w-full h-full',
                        children: (0, t.jsx)(r.default, {
                          className:
                            'w-full h-full object-cover rounded-t-[1.2rem]',
                          src: '/images/mission-img.svg',
                          alt: 'mission-image',
                          width: 400,
                          height: 300,
                        }),
                      }),
                    }),
                  }),
                  (0, t.jsxs)('div', {
                    className: 'basis-1/2 md:pl-10 lg:pl-14',
                    children: [
                      (0, t.jsx)(d.F, {
                        words: 'Our Mission',
                        innerClassName:
                          'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10',
                      }),
                      (0, t.jsx)('div', {
                        className: 'mb-10 md:mb-5',
                        children: (0, t.jsx)(d.F, {
                          words:
                            'We believe that every great innovation starts with a bold dream. Our mission is rooted in the transformative power of technology and entrepreneurship. We’re dedicated to guiding visionaries through the intricate dance of creation, from the first spark of an idea to the final applause of market success.',
                        }),
                      }),
                      (0, t.jsx)('div', {
                        className: 'mb-5',
                        children: (0, t.jsx)(d.F, {
                          words:
                            '“Our Mission”\xa0To provide the support, resources, and expertise needed to navigate the journey from concept to market disruption.',
                          delay: 8,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        p = () => {
          let [e, s] = (0, i.useState)(null);
          return (0, t.jsxs)('div', {
            className: 'section-padding py-10 lg:mb-10',
            children: [
              (0, t.jsx)(d.F, {
                words: 'The dynamic team leading forcythe’s innovation',
                innerClassName:
                  'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-center',
                wordStyles: [
                  { word: 'dynamic', classes: 'text-[#60a6e7]' },
                  { word: 'team', classes: 'text-[#60a6e7]' },
                ],
              }),
              (0, t.jsx)('div', {
                className:
                  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '.concat(
                    null !== e ? 'xl:grid-cols-5' : 'xl:grid-cols-4',
                    ' gap-5',
                  ),
                children: c.cz.map((a, l) =>
                  (0, t.jsxs)(
                    'div',
                    {
                      onMouseEnter: () => s(l),
                      onMouseLeave: () => s(null),
                      className:
                        'w-[60%] mx-auto sm:w-full transition-all duration-500 ease-in-out p-5 relative rounded-t-[2rem] text-center cursor-pointer '.concat(
                          e === l ? 'xl:col-span-2' : '',
                        ),
                      style: {
                        backgroundColor: 'rgb(3,5,22)',
                        background:
                          'linear-gradient(0deg, rgba(3,5,22,1) 21%, rgba(12, 38, 69, 1) 70%)',
                      },
                      children: [
                        (0, t.jsxs)('div', {
                          className: 'relative w-full h-auto xl:h-44 '.concat(
                            e === l && 'flex flex-col xl:flex-row',
                            ' mb-5',
                          ),
                          children: [
                            (0, t.jsxs)('div', {
                              className: ''.concat(
                                e === l ? 'w-full relative xl:basis-[40%]' : '',
                                ' h-44 min-[440px]:h-48 sm:h-44',
                              ),
                              children: [
                                (0, t.jsx)('div', {
                                  className:
                                    'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-3xl animate-pulse',
                                }),
                                (0, t.jsx)(r.default, {
                                  className: 'w-full rounded-3xl object-top',
                                  src: '/images/'.concat(a.picture),
                                  alt: 'team member',
                                  layout: 'fill',
                                  objectFit: 'cover',
                                }),
                              ],
                            }),
                            (0, t.jsx)('div', {
                              className:
                                'flex flex-col line-clamp-4 xl:line-clamp-[8] xl:basis-[60%]',
                              children:
                                e === l &&
                                a.about.map((e, s) =>
                                  (0, t.jsx)(
                                    'span',
                                    {
                                      className:
                                        'text-[13px] block font-normal leading-5 p-3 text-left',
                                      children: e,
                                    },
                                    s,
                                  ),
                                ),
                            }),
                          ],
                        }),
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)('h3', {
                              className: 'text-xl font-medium mb-1',
                              children: a.name,
                            }),
                            (0, t.jsx)('span', {
                              className: 'text-base text-darkGrey',
                              children: a.role,
                            }),
                          ],
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
            ],
          });
        };
      function b() {
        return (0, t.jsxs)('main', {
          className: 'min-h-screen mt-[6rem] md:mt-[6.5rem] w-full',
          children: [
            (0, t.jsx)(o, {}),
            (0, t.jsx)(h, {}),
            (0, t.jsx)(g, {}),
            (0, t.jsx)(m, {}),
            (0, t.jsx)(p, {}),
            (0, t.jsx)(l.Z, {}),
          ],
        });
      }
    },
    4550: function (e, s, a) {
      'use strict';
      var t = a(7437),
        l = a(703);
      a(2265);
      var r = a(44);
      s.Z = (e) => {
        let {
          background: s,
          svgBackground: a,
          title: i,
          text: n,
          svg: d = !0,
          bigTitle: o,
        } = e;
        return (0, t.jsxs)('div', {
          style: {
            backgroundColor: 'rgb(3,5,22)',
            background: 'linear-gradient(0deg, rgba(3,5,22,1) 21%, '.concat(
              s,
              ' 70%)',
            ),
          },
          className:
            'w-full bg-[#030516] rounded-[1.8rem] p-5 md:p-8 mx-auto hover:shadow-sm hover:shadow-white transition-all duration-500',
          children: [
            d &&
              (0, t.jsx)('div', {
                className: 'w-fit p-2 rounded-md mb-5 '.concat(a),
                children: (0, t.jsx)(l.default, {
                  src: '/images/layers-three.svg',
                  alt: 'layers_three',
                  width: 30,
                  height: 30,
                }),
              }),
            (0, t.jsx)(r.F, {
              words: i,
              innerClassName: ''.concat(
                o ? 'text-3xl' : 'text-2xl',
                ' font-medium mb-5 text-white',
              ),
            }),
            (0, t.jsx)(r.F, {
              words: n,
              innerClassName: 'text-darkGrey text-lg leading-7 font-[300]',
            }),
          ],
        });
      };
    },
    44: function (e, s, a) {
      'use strict';
      a.d(s, {
        F: function () {
          return c;
        },
      });
      var t = a(7437),
        l = a(2265),
        r = a(3577),
        i = a(9159),
        n = a(6990),
        d = a(1715),
        o = a(6135);
      let c = (e) => {
        let {
            words: s,
            className: a,
            innerClassName: c,
            delay: m = 0,
            wordStyles: x = [],
          } = e,
          [g, u] = (0, r.H)(),
          [h, p] = (0, l.useState)(!1),
          b = (0, l.useRef)(null),
          f = (0, i.Y)(b);
        (0, l.useEffect)(() => {
          f &&
            !h &&
            'function' == typeof u &&
            (m > 0
              ? setTimeout(() => {
                  j();
                }, 1e3 * m)
              : j());
        }, [f, h, u, m]);
        let j = () => {
            u('span', { opacity: 1 }, { duration: 2, delay: (0, n.E)(0.2) }),
              p(!0);
          },
          w = s.split(' ');
        return (0, t.jsx)('div', {
          className: (0, o.cn)('', a),
          ref: b,
          children: (0, t.jsx)('div', {
            className: '',
            children: (0, t.jsx)('p', {
              className:
                c || 'text-darkGrey text-base md:text-lg mb-8 leading-7',
              children: (0, t.jsx)(d.E.div, {
                ref: g,
                children: w.map((e, s) => {
                  let a = x.find((s) => s.word === e),
                    l = a ? a.classes : '';
                  return (0, t.jsxs)(
                    d.E.span,
                    { className: 'opacity-0 '.concat(l), children: [e, ' '] },
                    e + s,
                  );
                }),
              }),
            }),
          }),
        });
      };
    },
    4529: function (e, s, a) {
      'use strict';
      var t = a(7437),
        l = a(1128);
      a(2265),
        (s.Z = () =>
          (0, t.jsx)('div', {
            style: {
              backgroundColor: 'rgb(7,22,38)',
              background:
                'linear-gradient(0deg, rgba(7,22,38,1) 20%, rgba(3,5,22,1) 69%)',
            },
            className:
              'section-padding py-10 text-center bg-[071626] bg-opacity-0',
            children: (0, t.jsxs)('div', {
              className: 'max-w-[45rem] mx-auto',
              children: [
                (0, t.jsxs)('h2', {
                  className:
                    'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6',
                  children: [
                    (0, t.jsx)('span', {
                      className: 'text-accent',
                      children: 'Ready to Scale?',
                    }),
                    (0, t.jsx)('br', {}),
                    ' Join successful brands that chose us as their',
                    (0, t.jsx)('span', {
                      className: 'text-accent',
                      children: ' growth accelerator',
                    }),
                  ],
                }),
                (0, t.jsx)('div', {
                  className: 'w-fit mx-auto mb-5',
                  children: (0, t.jsx)(l.Z, {
                    buttonText: 'Book a Call',
                    width: 'w-fit',
                    book: !0,
                  }),
                }),
              ],
            }),
          }));
    },
  },
  function (e) {
    e.O(0, [406, 150, 411, 523, 971, 69, 744], function () {
      return e((e.s = 4078));
    }),
      (_N_E = e.O());
  },
]);
