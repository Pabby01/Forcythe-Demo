(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    8590: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 1126));
    },
    1126: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, {
          default: function () {
            return y;
          },
        });
      var a = s(7437),
        l = s(1128),
        r = s(8867),
        i = s(2265),
        n = s(5201),
        o = s(44),
        c = () => {
          let { latestBlogs: e } = (0, n.useAppContext)();
          return (0, a.jsxs)('div', {
            className: 'section-margin my-10 lg:mb-24',
            children: [
              (0, a.jsxs)('div', {
                className:
                  'flex flex-col md:flex-row md:justify-between md:items-center mb-12',
                children: [
                  (0, a.jsx)(o.F, {
                    words: 'Read our articles, news and product blog',
                    innerClassName:
                      'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0',
                  }),
                  (0, a.jsx)(l.Z, {
                    buttonText: 'Visit Blog',
                    width: 'w-fit',
                    play: !0,
                    link: '/blog',
                  }),
                ],
              }),
              (0, a.jsx)('div', {
                className:
                  'blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12',
                children: e.map((e) =>
                  (0, a.jsx)(r.Z, { blogDetails: e }, e.id),
                ),
              }),
            ],
          });
        },
        d = s(703),
        m = s(7141),
        u = s(4411),
        x = () =>
          (0, a.jsxs)('div', {
            className: 'py-10',
            children: [
              (0, a.jsx)('div', {
                className: 'min-h-[60px]',
                children: (0, a.jsx)(o.F, {
                  words: 'Success in Motion – Our clients’ journey',
                  innerClassName:
                    'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center',
                  delay: 4.5,
                  wordStyles: [
                    { word: 'Motion', classes: 'text-[#60a6e7] capitalize' },
                    { word: 'Our', classes: 'capitalize' },
                  ],
                }),
              }),
              (0, a.jsxs)('div', {
                style: {
                  backgroundColor: 'rgb(3,5,22)',
                  background:
                    'linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgba(3, 5, 22, 1) 80%)',
                },
                className: 'flex flex-col gap-5',
                children: [
                  (0, a.jsx)(m.Z, {
                    children: (0, a.jsx)('div', {
                      className:
                        'skills overflow-hidden flex items-stretch gap-5 w-full ml-5',
                      children: u._u.map((e, t) =>
                        (0, a.jsxs)(
                          'div',
                          {
                            className: 'relative w-auto h-[340px]',
                            children: [
                              (0, a.jsx)('div', {
                                className:
                                  'bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse',
                              }),
                              (0, a.jsx)(d.default, {
                                className: 'overflow-hidden w-full h-full',
                                src: '/images/Project Images/'.concat(e),
                                alt: 'project-image-'.concat(t),
                                width: 100,
                                height: 100,
                              }),
                            ],
                          },
                          'project-image-'.concat(t),
                        ),
                      ),
                    }),
                  }),
                  (0, a.jsx)(m.Z, {
                    direction: 'right',
                    children: (0, a.jsx)('div', {
                      className:
                        'skills overflow-hidden flex items-stretch gap-5 w-full ml-5',
                      children: u._u.map((e, t) =>
                        (0, a.jsxs)(
                          'div',
                          {
                            className: 'relative w-auto h-[340px]',
                            children: [
                              (0, a.jsx)('div', {
                                className:
                                  'bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse',
                              }),
                              (0, a.jsx)(d.default, {
                                className: 'overflow-hidden w-full h-full',
                                src: '/images/Project Images/'.concat(e),
                                alt: 'project-image-'.concat(t),
                                width: 100,
                                height: 100,
                              }),
                            ],
                          },
                          'project-image-'.concat(t),
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        h = s(4529),
        g = s(4708),
        p = s(9549),
        f = () =>
          (0, a.jsx)('div', {
            className: 'section-padding',
            children: (0, a.jsx)('div', {
              className:
                'w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]',
              children: (0, a.jsxs)('div', {
                className: 'max-w-[56rem]',
                children: [
                  (0, a.jsx)('div', {
                    className: 'min-h-[180px]',
                    children: (0, a.jsx)(p.Z, {
                      typingDelay: 100,
                      children: (0, a.jsxs)('h1', {
                        className:
                          'text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7',
                        children: [
                          'We build ',
                          (0, a.jsx)('span', {
                            className: 'text-accent',
                            children: 'products',
                          }),
                          ' that shape a better future',
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)(o.F, {
                    words:
                      'We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.',
                    delay: 4.5,
                    className: 'mb-8 max-w-3xl',
                  }),
                  (0, a.jsx)('div', {
                    className: 'mb-5',
                    children: (0, a.jsx)(l.Z, {
                      buttonText: 'Book a Call',
                      width: 'w-fit',
                      play: !0,
                      book: !0,
                    }),
                  }),
                ],
              }),
            }),
          }),
        b = s(8866),
        w = () => {
          let [e, t] = (0, i.useState)(0);
          return (0, a.jsxs)('div', {
            className: 'section-padding py-20',
            children: [
              (0, a.jsx)(o.F, {
                words:
                  'From Spark to Spotlight: we take you every step of the way to success.',
                innerClassName:
                  'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]',
                className: 'mb-12 xl:mb-0 max-w-[45rem]',
                wordStyles: [
                  { word: 'Spark', classes: 'text-[#60a6e7] capitalize' },
                  { word: 'Spotlight:', classes: 'text-[#60a6e7] capitalize' },
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'flex lg:items-end flex-col md:flex-row',
                children: [
                  (0, a.jsx)('div', {
                    className: 'basis-1/2 flex mb-8 md:mb-0',
                    children: (0, a.jsxs)('div', {
                      className: 'md:pr-10',
                      children: [
                        (0, a.jsx)('div', {
                          className:
                            'border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5',
                          children: u.z5.map((s, l) =>
                            (0, a.jsx)(
                              'div',
                              {
                                onClick: () => t(l),
                                className:
                                  'overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 '.concat(
                                    l === e
                                      ? 'bg-accent2 text-black'
                                      : 'bg-transparent text-white',
                                  ),
                                children: s.name,
                              },
                              l,
                            ),
                          ),
                        }),
                        0 === e
                          ? (0, a.jsxs)(
                              i.Fragment,
                              {
                                children: [
                                  (0, a.jsx)(o.F, {
                                    words: 'Your vision is unique.',
                                    innerClassName:
                                      'text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12',
                                  }),
                                  (0, a.jsx)(o.F, {
                                    words:
                                      'Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.',
                                  }),
                                ],
                              },
                              e,
                            )
                          : 1 === e
                            ? (0, a.jsxs)(
                                i.Fragment,
                                {
                                  children: [
                                    (0, a.jsx)(o.F, {
                                      words:
                                        'Crafting the blueprint for success',
                                      innerClassName:
                                        'text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12',
                                    }),
                                    (0, a.jsx)(o.F, {
                                      words:
                                        'Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.',
                                    }),
                                  ],
                                },
                                e,
                              )
                            : 2 === e
                              ? (0, a.jsxs)(
                                  i.Fragment,
                                  {
                                    children: [
                                      (0, a.jsx)(o.F, {
                                        words:
                                          'Turning blueprints into reality.',
                                        innerClassName:
                                          'text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12',
                                      }),
                                      (0, a.jsx)(o.F, {
                                        words:
                                          'We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.',
                                      }),
                                    ],
                                  },
                                  e,
                                )
                              : 3 === e
                                ? (0, a.jsxs)(
                                    i.Fragment,
                                    {
                                      children: [
                                        (0, a.jsx)(o.F, {
                                          words:
                                            'Your launchpad to the market.',
                                          innerClassName:
                                            'text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12',
                                        }),
                                        (0, a.jsx)(o.F, {
                                          words:
                                            'Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.',
                                        }),
                                      ],
                                    },
                                    e,
                                  )
                                : null,
                        (0, a.jsx)(l.Z, {
                          buttonText: 'Book a call',
                          width: 'w-fit',
                          play: !0,
                          book: !0,
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className:
                      'basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0',
                    children:
                      0 === e
                        ? (0, a.jsx)(
                            d.default,
                            {
                              className:
                                'w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]',
                              src: '/images/camera-man.svg',
                              alt: 'plan-img',
                              width: 200,
                              height: 200,
                            },
                            e,
                          )
                        : 1 === e
                          ? (0, a.jsx)(
                              d.default,
                              {
                                className:
                                  'w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]',
                                src: '/images/plan-design.svg',
                                alt: 'plan-img',
                                width: 200,
                                height: 200,
                              },
                              e,
                            )
                          : 2 === e
                            ? (0, a.jsx)(
                                d.default,
                                {
                                  className:
                                    'w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]',
                                  src: '/images/plan-develop.svg',
                                  alt: 'plan-img',
                                  width: 200,
                                  height: 200,
                                },
                                e,
                              )
                            : 3 === e
                              ? (0, a.jsx)(
                                  d.default,
                                  {
                                    className:
                                      'w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]',
                                    src: '/images/plan-launch.svg',
                                    alt: 'plan-img',
                                    width: 200,
                                    height: 200,
                                  },
                                  e,
                                )
                              : null,
                  }),
                ],
              }),
            ],
          });
        },
        j = s(1460),
        v = () => {
          let [e, t] = (0, i.useState)(0);
          return (
            (0, i.useEffect)(() => {
              let e = setInterval(() => {
                t((e) => (e + 1) % u.Pp.length);
              }, 17e3);
              return () => clearInterval(e);
            }, [e]),
            (0, a.jsxs)('div', {
              className: 'section-padding py-10',
              children: [
                (0, a.jsx)(o.F, {
                  words:
                    'Discover the transformative stories of startups that scaled new heights with us',
                  innerClassName:
                    'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center',
                  wordStyles: [
                    { word: 'transformative', classes: 'text-[#60a6e7]' },
                    { word: 'stories', classes: 'text-[#60a6e7]' },
                  ],
                }),
                (0, a.jsx)('div', {
                  className: 'w-full overflow-x-scroll hide-scrollbar',
                  children: (0, a.jsx)('div', {
                    className:
                      'w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]',
                    children: u.Pp.map((s, l) =>
                      (0, a.jsx)(
                        'div',
                        {
                          onClick: () => t(l),
                          className: 'w-full p-[1.1rem] cursor-pointer '
                            .concat(
                              l === e && 'bg-accent3',
                              ' transition-all duration-300 ',
                            )
                            .concat(
                              0 === l
                                ? 'rounded-s-full'
                                : l === u.Pp.length - 1
                                  ? 'rounded-e-full'
                                  : null,
                            ),
                          children: (0, a.jsxs)('div', {
                            className:
                              'w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center',
                            children: [
                              (0, a.jsx)(d.default, {
                                className: s.width
                                  ? 'w-'.concat(s.width)
                                  : 'w-full',
                                src: '/images/'.concat(s.logo),
                                width: '20',
                                height: '20',
                                alt: s.companyName,
                              }),
                              s.name,
                            ],
                          }),
                        },
                        l,
                      ),
                    ),
                  }),
                }),
                (0, a.jsxs)(
                  'div',
                  {
                    className:
                      'mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 '.concat(
                        e > 0 && 'lg:relative',
                      ),
                    style: {
                      left: ''.concat(
                        0 === e
                          ? '0'
                          : 1 === e
                            ? '20%'
                            : 2 === e
                              ? '40%'
                              : 3 === e
                                ? '30%'
                                : 4 === e
                                  ? '50%'
                                  : '0',
                      ),
                    },
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'sm:basis-[58%] pr-3',
                        children: [
                          (0, a.jsx)(o.F, {
                            words: u.Pp[e].companyName,
                            innerClassName: 'text-base font-bold mb-4',
                          }),
                          (0, a.jsx)(o.F, {
                            words: u.Pp[e].story,
                            delay: 0.5,
                            innerClassName: 'text-base leading-7 mb-3',
                          }),
                          (0, a.jsx)(o.F, {
                            words: u.Pp[e].author,
                            delay: 5,
                            innerClassName: 'text-[15px] font-semibold mb-4',
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className:
                          'w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0',
                        children: [
                          (0, a.jsx)('div', {
                            className:
                              'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl',
                          }),
                          (0, a.jsx)(d.default, {
                            className: 'rounded-xl relative object-top',
                            src: '/images/'.concat(u.Pp[e].dp),
                            layout: 'fill',
                            objectFit: 'cover',
                            alt: 'ceo',
                          }),
                        ],
                      }),
                    ],
                  },
                  e,
                ),
              ],
            })
          );
        },
        N = s(2716);
      function y() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(b.default, {}),
            (0, a.jsxs)('main', {
              className: 'w-full mt-[6.3rem] md:mt-[6.8rem]',
              children: [
                (0, a.jsxs)('div', {
                  className:
                    "md:min-h-screen bg-[url('/images/header-background.svg')] bg-no-repeat bg-top",
                  children: [(0, a.jsx)(f, {}), (0, a.jsx)(x, {})],
                }),
                (0, a.jsx)(v, {}),
                (0, a.jsx)(w, {}),
                (0, a.jsx)(j.Z, {}),
                (0, a.jsx)(N.Z, { page: 'home' }),
                (0, a.jsx)(c, {}),
                (0, a.jsx)(h.Z, {}),
              ],
            }),
            (0, a.jsx)(g.default, {}),
          ],
        });
      }
    },
    8867: function (e, t, s) {
      'use strict';
      var a = s(7437),
        l = s(703);
      s(2265);
      var r = s(4465),
        i = s(8792);
      t.Z = (e) => {
        var t, s, n, o, c, d, m;
        let { blogDetails: u } = e,
          x =
            null == u
              ? void 0
              : null === (t = u.attributes) || void 0 === t
                ? void 0
                : t.publishedAt,
          h = (x ? new Date(x) : new Date())
            .toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
            .replace(/(\d+)/, (e, t) => {
              let s = parseInt(t);
              return s + ['th', 'st', 'nd', 'rd'][s <= 3 && s >= 0 ? s : 0];
            });
        return (0, a.jsxs)(i.default, {
          href: '/blog/'.concat(
            null == u
              ? void 0
              : null === (s = u.attributes) || void 0 === s
                ? void 0
                : s.slug,
          ),
          className:
            'w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500',
          children: [
            (0, a.jsxs)('div', {
              className: 'h-60 sm:h-56 relative mb-6',
              children: [
                (0, a.jsx)('div', {
                  className:
                    'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse',
                }),
                (0, a.jsx)(l.default, {
                  className:
                    'w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105',
                  src:
                    null == u
                      ? void 0
                      : null === (n = u.attributes) || void 0 === n
                        ? void 0
                        : n.blogCover.data[0].attributes.url,
                  layout: 'fill',
                  objectFit: 'cover',
                  alt:
                    null == u
                      ? void 0
                      : null === (o = u.attributes) || void 0 === o
                        ? void 0
                        : o.blogTitle,
                }),
              ],
            }),
            (0, a.jsxs)('div', {
              className:
                'pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate',
              children: [
                (0, a.jsx)('p', {
                  className: 'text-lg font-semibold mb-1',
                  children:
                    null == u
                      ? void 0
                      : null === (c = u.attributes) || void 0 === c
                        ? void 0
                        : c.blogCategories,
                }),
                (0, a.jsxs)('div', {
                  className: 'text-base text-darkGrey flex items-center mb-6',
                  children: [
                    (0, a.jsx)('span', {
                      children:
                        null == u
                          ? void 0
                          : null === (d = u.attributes) || void 0 === d
                            ? void 0
                            : d.blogAuthor,
                    }),
                    (0, a.jsx)(r.Z, {}),
                    (0, a.jsx)('span', { children: h }),
                  ],
                }),
                (0, a.jsx)('h6', {
                  className: 'text-xl md:text-2xl font-semibold line-clamp-2',
                  children:
                    null == u
                      ? void 0
                      : null === (m = u.attributes) || void 0 === m
                        ? void 0
                        : m.blogTitle,
                }),
              ],
            }),
          ],
        });
      };
    },
    4465: function (e, t, s) {
      'use strict';
      var a = s(7437);
      t.Z = (e) => {
        let { m1: t } = e;
        return (0, a.jsx)('div', {
          className: 'h-2 w-2 rounded-full bg-white '.concat(
            t ? 'mx-1' : 'mx-[6px]',
            ' ',
          ),
        });
      };
    },
    5201: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, {
          AppWrapper: function () {
            return n;
          },
          useAppContext: function () {
            return o;
          },
        });
      var a = s(7437),
        l = s(7908),
        r = s(2265);
      let i = (0, r.createContext)(null);
      function n(e) {
        let { children: t } = e,
          [s, n] = (0, r.useState)(!1),
          [o, c] = (0, r.useState)(!1),
          [d, m] = (0, r.useState)(!0),
          [u, x] = (0, r.useState)([]),
          [h, g] = (0, r.useState)([]),
          [p, f] = (0, r.useState)([]),
          [b, w] = (0, r.useState)([]),
          [j, v] = (0, r.useState)([]),
          [N, y] = (0, r.useState)([]),
          [k, C] = (0, r.useState)([]),
          S = async () => {
            try {
              let e = await l.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/faqs'),
              );
              x(e.data.data);
            } catch (e) {
              console.error(e);
            }
          },
          F = async () => {
            try {
              let e = await l.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/foundation-faqs'),
              );
              g(e.data.data);
            } catch (e) {
              console.error(e);
            }
          },
          Z = async () => {
            try {
              let e = (
                await l.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/our-ventures?populate=*&sort=publishedAt:desc',
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
                await l.Z.get(
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
          P = async () => {
            try {
              let e = (
                await l.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/blogs?populate=*&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3',
                  ),
                )
              ).data.data;
              w(e);
            } catch (e) {
              console.error(e);
            }
          },
          A = async () => {
            try {
              let e = (
                await l.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/portfolios?populate=*&sort=publishedAt:desc',
                  ),
                )
              ).data.data;
              y(e);
            } catch (e) {
              console.error(e);
            }
          },
          _ = async () => {
            try {
              let e = (
                await l.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/departments?populate=*',
                  ),
                )
              ).data.data;
              C(e);
            } catch (e) {
              console.error(e);
            }
          };
        return (
          (0, r.useEffect)(() => {
            z(), S(), F(), P(), Z(), A(), _();
          }, []),
          (0, a.jsx)(i.Provider, {
            value: {
              allBlogs: p,
              setAllBlogs: f,
              getInvolvedForm: s,
              setGetInvolvedForm: n,
              loading: d,
              setLoading: m,
              faqs: u,
              setFaqs: x,
              foundationFaqs: h,
              setFoundationFaqs: g,
              latestBlogs: b,
              setLatestBlogs: w,
              ourVentures: j,
              setOurVentures: v,
              ourPortfolios: N,
              setOurPortfolios: y,
              showSuccessMessage: o,
              setShowSuccessMessage: c,
              departments: k,
              setDepartments: C,
            },
            children: t,
          })
        );
      }
      function o() {
        return (0, r.useContext)(i);
      }
    },
  },
  function (e) {
    e.O(0, [406, 150, 908, 949, 411, 523, 929, 933, 971, 69, 744], function () {
      return e((e.s = 8590));
    }),
      (_N_E = e.O());
  },
]);
