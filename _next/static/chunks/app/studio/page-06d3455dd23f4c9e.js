(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [348],
  {
    5169: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 1020));
    },
    557: function (e, t, r) {
      'use strict';
      r.d(t, {
        ZP: function () {
          return o;
        },
      });
      let s = { _origin: 'https://api.emailjs.com' },
        a = (e, t, r) => {
          if (!e)
            throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
          if (!t)
            throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
          if (!r)
            throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
          return !0;
        };
      class i {
        constructor(e) {
          (this.status = e.status), (this.text = e.responseText);
        }
      }
      let l = (e, t, r = {}) =>
          new Promise((a, l) => {
            let n = new XMLHttpRequest();
            n.addEventListener('load', ({ target: e }) => {
              let t = new i(e);
              200 === t.status || 'OK' === t.text ? a(t) : l(t);
            }),
              n.addEventListener('error', ({ target: e }) => {
                l(new i(e));
              }),
              n.open('POST', s._origin + e, !0),
              Object.keys(r).forEach((e) => {
                n.setRequestHeader(e, r[e]);
              }),
              n.send(t);
          }),
        n = (e) => {
          let t;
          if (
            !(t = 'string' == typeof e ? document.querySelector(e) : e) ||
            'FORM' !== t.nodeName
          )
            throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
          return t;
        };
      var o = {
        init: (e, t = 'https://api.emailjs.com') => {
          (s._userID = e), (s._origin = t);
        },
        send: (e, t, r, i) => {
          let n = i || s._userID;
          return (
            a(n, e, t),
            l(
              '/api/v1.0/email/send',
              JSON.stringify({
                lib_version: '3.2.0',
                user_id: n,
                service_id: e,
                template_id: t,
                template_params: r,
              }),
              { 'Content-type': 'application/json' },
            )
          );
        },
        sendForm: (e, t, r, i) => {
          let o = i || s._userID,
            d = n(r);
          a(o, e, t);
          let c = new FormData(d);
          return (
            c.append('lib_version', '3.2.0'),
            c.append('service_id', e),
            c.append('template_id', t),
            c.append('user_id', o),
            l('/api/v1.0/email/send-form', c)
          );
        },
      };
    },
    7907: function (e, t, r) {
      'use strict';
      var s = r(5313);
      r.o(s, 'useParams') &&
        r.d(t, {
          useParams: function () {
            return s.useParams;
          },
        }),
        r.o(s, 'usePathname') &&
          r.d(t, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        r.o(s, 'useRouter') &&
          r.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          });
    },
    9573: function (e, t, r) {
      'use strict';
      var s = r(7437),
        a = r(2265),
        i = r(703),
        l = r(44);
      t.Z = (e) => {
        var t, r, n, o, d, c, u, m, p, g;
        let { project: x, ourVenture: f } = e,
          [h, v] = (0, a.useState)('sector');
        return (0, s.jsxs)('div', {
          onClick: (e) => {
            let t = e.target.id;
            if (
              'venture-options' !== t &&
              'sector' !== t &&
              'use-cases' !== t
            ) {
              var r;
              window.open(
                null == x
                  ? void 0
                  : null === (r = x.attributes) || void 0 === r
                    ? void 0
                    : r.projectLink,
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
            (null == x
              ? void 0
              : null === (t = x.attributes) || void 0 === t
                ? void 0
                : t.columnSpan) === 2
              ? 'lg:col-span-2'
              : (null == x
                    ? void 0
                    : null === (r = x.attributes) || void 0 === r
                      ? void 0
                      : r.columnSpan) === 3
                ? 'lg:col-span-3'
                : (null == x
                      ? void 0
                      : null === (n = x.attributes) || void 0 === n
                        ? void 0
                        : n.columnSpan) === 4
                  ? 'lg:col-span-4'
                  : (null == x
                        ? void 0
                        : null === (o = x.attributes) || void 0 === o
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
                f &&
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
                            'sector' === h
                              ? x.attributes.sectorText
                              : x.attributes.usecaseText,
                        }),
                        (0, s.jsxs)('div', {
                          className: 'w-fit mx-auto flex gap-3',
                          children: [
                            (0, s.jsx)('button', {
                              id: 'sector',
                              onClick: () => v('sector'),
                              className:
                                'capitalize text-sm px-4 py-2 rounded-full bg-accent2 text-[#48464C] border-[1px] border-accent',
                              children: 'Sector',
                            }),
                            (0, s.jsx)('button', {
                              id: 'use-cases',
                              onClick: () => v('use-cases'),
                              className:
                                'capitalize text-sm px-4 py-2 rounded-full bg-accent2 text-[#48464C] border-[1px] border-accent',
                              children: 'Use cases',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                (0, s.jsx)(i.default, {
                  className: 'w-full rounded-2xl',
                  src:
                    null == x
                      ? void 0
                      : x.attributes.projectCover.data.attributes.url,
                  alt:
                    null == x
                      ? void 0
                      : null === (d = x.attributes) || void 0 === d
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
                (0, s.jsx)(l.F, {
                  words:
                    null == x
                      ? void 0
                      : null === (c = x.attributes) || void 0 === c
                        ? void 0
                        : c.projectName,
                  innerClassName: 'mb-5 text-[1.4rem] leading-7 font-medium',
                }),
                (null == x
                  ? void 0
                  : null === (u = x.attributes) || void 0 === u
                    ? void 0
                    : u.projectTags) &&
                  (0, s.jsx)('div', {
                    className: 'tags flex flex-wrap gap-2 mb-5',
                    children:
                      null == x
                        ? void 0
                        : null === (p = x.attributes) || void 0 === p
                          ? void 0
                          : null === (m = p.projectTags) || void 0 === m
                            ? void 0
                            : m.data.map((e) =>
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
                (0, s.jsx)(l.F, {
                  words:
                    null == x
                      ? void 0
                      : null === (g = x.attributes) || void 0 === g
                        ? void 0
                        : g.projectDesc,
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
    1020: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return N;
          },
        });
      var s = r(7437),
        a = r(4529),
        i = r(1128),
        l = r(703),
        n = r(2265),
        o = r(9549),
        d = r(44),
        c = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)('div', {
                className: 'section-padding py-10',
                children: [
                  (0, s.jsx)(o.Z, {
                    typingDelay: 100,
                    children: (0, s.jsxs)('h1', {
                      className:
                        'text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 max-w-5xl mx-auto text-center',
                      children: [
                        'Where ',
                        (0, s.jsx)('span', {
                          className: 'text-accent',
                          children: 'Ideas',
                        }),
                        ' Take Flight',
                      ],
                    }),
                  }),
                  (0, s.jsx)(d.F, {
                    words:
                      'Our studio is a dynamic ecosystem where creativity meets strategy and vision meets execution. We believe in the power of collaboration, innovation, and relentless pursuit of excellence to drive meaningful change in the world.',
                    delay: 2.5,
                    innerClassName:
                      'text-darkGrey text-base md:text-lg mb-8 leading-7 max-w-4xl mx-auto text-center',
                  }),
                  (0, s.jsx)('div', {
                    className: 'flex gap-5 w-fit mx-auto mb-40',
                    children: (0, s.jsx)(i.Z, {
                      buttonText: 'Explore Our Ventures',
                      outline: !0,
                      attributes: {
                        onClick: function () {
                          let e = document.getElementById('our-ventures');
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
                  'section-padding py-14 pt-14 md:pt-20 flex flex-col md:flex-row items-center',
                style: {
                  backgroundColor: 'rgb(3,5,22)',
                  background:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1) ',
                },
                children: [
                  (0, s.jsx)('div', {
                    className:
                      'basis-1/2 relative flex w-full justify-start mt-6 md:mt-0',
                    children: (0, s.jsxs)('div', {
                      className:
                        'relative w-full h-[400px] lg:w-[90%] lg:h-[500px] rounded-3xl',
                      children: [
                        (0, s.jsx)(l.default, {
                          className: 'w-full h-full rounded-3xl',
                          src: '/images/studio-header-img1.svg',
                          alt: 'image',
                          objectFit: 'cover',
                          layout: 'fill',
                        }),
                        (0, s.jsx)('div', {
                          className:
                            'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-3xl animate-pulse',
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)('div', {
                    className: 'basis-1/2 md:pl-10 pt-10 md:pt-0',
                    children: [
                      (0, s.jsx)(d.F, {
                        words:
                          'We’re shaping the future of industries through innovation',
                        innerClassName:
                          'text-[1.8rem] sm:text-[2.5rem] font-[500] leading-8 sm:leading-[3rem] mb-8',
                      }),
                      (0, s.jsx)(d.F, {
                        words:
                          'At Forcythe, we have a single vision: to enable innovators and entrepreneurs to turn their boldest ideas into profitable businesses. Our mission is to provide the support, resources, and expertise needed to navigate the journey from concept to market disruption.',
                        delay: 1,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className:
                  'section-padding pb-10 md:py-14 flex flex-col-reverse md:flex-row items-center',
                style: {
                  backgroundColor: 'rgb(3,5,22)',
                  background:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)',
                },
                children: [
                  (0, s.jsxs)('div', {
                    className: 'basis-1/2 md:pr-10 pt-10 md:pt-0',
                    children: [
                      (0, s.jsx)(d.F, {
                        words:
                          'Our Approach - fuelling innovations with global impact',
                        innerClassName:
                          'text-[1.8rem] sm:text-[2.5rem] font-[500] leading-8 sm:leading-[3rem] mb-8',
                      }),
                      (0, s.jsx)(d.F, {
                        words:
                          'At Forcythe, we’re sector-agnostic with a keen eye for ideas that promise widespread influence. Our venture studio model is built on the foundation of scalability and sustainability, aiming to foster technologies that have the potential to benefit billions.',
                        delay: 1,
                      }),
                    ],
                  }),
                  (0, s.jsx)('div', {
                    className:
                      'basis-1/2 relative flex w-full justify-end mt-6 md:mt-0',
                    children: (0, s.jsxs)('div', {
                      className:
                        'relative w-full h-[400px] lg:w-[90%] lg:h-[500px] rounded-3xl',
                      children: [
                        (0, s.jsx)(l.default, {
                          className: 'w-full h-full rounded-3xl',
                          src: '/images/studio-header-img2.svg',
                          alt: 'image',
                          objectFit: 'cover',
                          layout: 'fill',
                        }),
                        (0, s.jsx)('div', {
                          className:
                            'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-3xl animate-pulse',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className:
                  'section-padding pb-10 md:py-14 flex flex-col md:flex-row items-center',
                style: {
                  backgroundColor: 'rgb(3,5,22)',
                  background:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1) ',
                },
                children: [
                  (0, s.jsx)('div', {
                    className:
                      'basis-1/2 relative flex w-full justify-start mt-6 md:mt-0',
                    children: (0, s.jsxs)('div', {
                      className:
                        'relative w-full h-[400px] lg:w-[90%] lg:h-[500px] rounded-3xl',
                      children: [
                        (0, s.jsx)(l.default, {
                          className: 'w-full h-full rounded-3xl',
                          src: '/images/studio-header-img3.svg',
                          alt: 'image',
                          objectFit: 'cover',
                          layout: 'fill',
                        }),
                        (0, s.jsx)('div', {
                          className:
                            'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-3xl animate-pulse',
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)('div', {
                    className: 'basis-1/2 md:pl-10 pt-10 md:pt-0',
                    children: [
                      (0, s.jsx)(d.F, {
                        words: 'Our Reach - diverse sectors, unified vision',
                        innerClassName:
                          'text-[1.8rem] sm:text-[2.5rem] font-[500] leading-8 sm:leading-[3rem] mb-8',
                      }),
                      (0, s.jsx)(d.F, {
                        words:
                          'We are dedicated to nurturing ideas with the power to revolutionize. Our sector-agnostic approach allows us to support a wide array of industries, from hospitality and healthcare to education and beyond. We’re passionate about technologies that can scale to serve billions and create meaningful change.',
                        delay: 1,
                      }),
                      (0, s.jsx)(d.F, {
                        words: 'Media & Entertainment: A Creative Extension.',
                        innerClassName:
                          'text-darkGrey text-lg mb-5 leading-7 font-semibold',
                        delay: 4,
                      }),
                      (0, s.jsx)(d.F, {
                        words:
                          'As part of our diverse portfolio, we take pride in our venture into the arts and entertainment sector. We believe in the power of media to shape narratives and the future of technology to redefine experiences. This creative extension, including our Movie Production Studio, exemplifies our commitment to innovation across all forms of media, enriching lives and culture around the globe.',
                        delay: 5,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        u = r(8867),
        m = r(5201),
        p = () => {
          let { latestBlogs: e } = (0, m.useAppContext)();
          return (0, s.jsxs)('div', {
            className: 'section-margin my-10',
            children: [
              (0, s.jsxs)('div', {
                className:
                  'flex flex-col md:flex-row md:justify-between md:items-start mb-12',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'max-w-[60rem]',
                    children: [
                      (0, s.jsx)(d.F, {
                        words: 'Knowledge and Insights',
                        innerClassName:
                          'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-4',
                      }),
                      (0, s.jsx)(d.F, {
                        words:
                          'Explore our curated collection of resources, including thought-provoking blog posts, in-depth whitepapers, and insightful case studies. Gain valuable insights, stay informed about industry trends, and access the knowledge you need to succeed on your entrepreneurial journey.',
                        innerClassName:
                          'text-darkGrey text-base md:text-lg leading-7',
                      }),
                    ],
                  }),
                  (0, s.jsx)('div', {
                    className: 'mt-3',
                    children: (0, s.jsx)(i.Z, {
                      buttonText: 'Visit Blog',
                      width: 'w-fit',
                      play: !0,
                      link: '/blog',
                    }),
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className:
                  'blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12',
                children: e.map((e) =>
                  (0, s.jsx)(u.Z, { blogDetails: e }, e.id),
                ),
              }),
            ],
          });
        },
        g = r(4411),
        x = () => {
          let [e, t] = (0, n.useState)(0);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)('div', {
                className:
                  ' section-padding py-10 flex lg:items-start flex-col md:flex-row',
                children: [
                  (0, s.jsx)('div', {
                    className:
                      'basis-1/2 h-full flex flex-col justify-between mb-8 md:mb-0',
                    children: (0, s.jsxs)('div', {
                      className: 'md:pr-10',
                      children: [
                        (0, s.jsx)(d.F, {
                          words: 'How it Works',
                          innerClassName:
                            'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12',
                          wordStyles: [
                            {
                              word: 'Works',
                              classes: 'text-[#60a6e7] capitalize',
                            },
                          ],
                        }),
                        (0, s.jsx)('div', {
                          className:
                            'border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5',
                          children: g.bM.map((r, a) =>
                            (0, s.jsx)(
                              'div',
                              {
                                onClick: () => t(a),
                                className:
                                  'overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 '.concat(
                                    a === e
                                      ? 'bg-accent2 text-black'
                                      : 'bg-transparent text-white',
                                  ),
                                children: r.name,
                              },
                              a,
                            ),
                          ),
                        }),
                        0 === e
                          ? (0, s.jsx)(
                              n.Fragment,
                              {
                                children: (0, s.jsx)(d.F, {
                                  words:
                                    'Our proven methodology guides entrepreneurs through every stage of the venture-building journey, from ideation to market entry. With our strategic guidance and hands-on support, your ideas will flourish into transformative ventures.',
                                  innerClassName:
                                    'text-darkGrey text-lg mb-12 leading-7',
                                }),
                              },
                              e,
                            )
                          : 1 === e
                            ? (0, s.jsx)(
                                n.Fragment,
                                {
                                  children: (0, s.jsx)(d.F, {
                                    words:
                                      'Turn uncertainty into opportunity with our validation process. We rigorously test and refine your concept against real-world scenarios to ensure market fit. Our approach is data-driven and user-centric, giving you the confidence to proceed with conviction',
                                    innerClassName:
                                      'text-darkGrey text-lg mb-12 leading-7',
                                  }),
                                },
                                e,
                              )
                            : 2 === e
                              ? (0, s.jsx)(
                                  n.Fragment,
                                  {
                                    children: (0, s.jsx)(d.F, {
                                      words:
                                        'From prototype to product, our team of experts works tirelessly to bring your vision to life with precision and passion. We embrace agile methodologies to create solutions that are not only viable but also scalable and technologically robust.',
                                      innerClassName:
                                        'text-darkGrey text-lg mb-12 leading-7',
                                    }),
                                  },
                                  e,
                                )
                              : 3 === e
                                ? (0, s.jsx)(
                                    n.Fragment,
                                    {
                                      children: (0, s.jsx)(d.F, {
                                        words:
                                          'Launching for us, means making a splash in the market. We orchestrate a full-scale launch strategy that maximizes visibility and impact. From marketing buzz to user acquisition, we’re with you every step of the way as your venture takes flight.',
                                        innerClassName:
                                          'text-darkGrey text-lg mb-12 leading-7',
                                      }),
                                    },
                                    e,
                                  )
                                : null,
                        (0, s.jsx)(i.Z, {
                          buttonText: 'Book a call',
                          width: 'w-fit',
                          play: !0,
                          book: !0,
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)('div', {
                    className:
                      'basis-1/2 relative flex justify-center md:justify-end mt-6 md:mt-0',
                    children: (0, s.jsxs)('div', {
                      className:
                        'relative w-full md:w-[95%] h-[400px] lg:w-[90%] lg:h-[450px]',
                      children: [
                        (0, s.jsx)('div', {
                          className:
                            'bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-[2rem]',
                        }),
                        0 === e
                          ? (0, s.jsx)(
                              l.default,
                              {
                                className: 'w-full h-full rounded-[2rem]',
                                src: '/images/how-it-works-img1.svg',
                                alt: 'camera man',
                                layout: 'fill',
                                objectFit: 'cover',
                              },
                              e,
                            )
                          : 1 === e
                            ? (0, s.jsx)(
                                l.default,
                                {
                                  className: 'w-full h-full rounded-[2rem]',
                                  src: '/images/how-it-works-img2.svg',
                                  alt: 'camera man',
                                  layout: 'fill',
                                  objectFit: 'cover',
                                },
                                e,
                              )
                            : 2 === e
                              ? (0, s.jsx)(
                                  l.default,
                                  {
                                    className: 'w-full h-full rounded-[2rem]',
                                    src: '/images/how-it-works-img3.svg',
                                    alt: 'camera man',
                                    layout: 'fill',
                                    objectFit: 'cover',
                                  },
                                  e,
                                )
                              : 3 === e
                                ? (0, s.jsx)(
                                    l.default,
                                    {
                                      className: 'w-full h-full rounded-[2rem]',
                                      src: '/images/how-it-works-img4.svg',
                                      alt: 'camera man',
                                      layout: 'fill',
                                      objectFit: 'cover',
                                    },
                                    e,
                                  )
                                : null,
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)('div', { id: 'our-ventures' }),
            ],
          });
        },
        f = r(9573),
        h = () =>
          (0, s.jsxs)('div', {
            className: 'section-padding py-10',
            children: [
              (0, s.jsxs)('div', {
                className: 'max-w-4xl mx-auto mb-10',
                children: [
                  (0, s.jsx)(d.F, {
                    words: 'Explore our Ventures',
                    innerClassName:
                      'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 text-center',
                    wordStyles: [
                      { word: 'Explore', classes: 'text-[#B3D0F2] capitalize' },
                      { word: 'our', classes: 'text-[#B3D0F2]' },
                    ],
                  }),
                  (0, s.jsx)(d.F, {
                    words:
                      "Discover the groundbreaking products and ventures that have emerged from Forcythe's incubator. From disruptive startups to industry-leading solutions, our portfolio showcases the diverse range of innovation and excellence that defines",
                    innerClassName:
                      'text-accent2 text-base md:text-lg mb-8 leading-7 max-w-[45rem] mx-auto text-center',
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className:
                  'grid grid-cols-1 lg:grid-cols-6 gap-x-5 gap-y-5 lg:gap-y-8',
                children: g.o6.map((e) =>
                  (0, s.jsx)(
                    f.Z,
                    {
                      project: e,
                      ourVenture: !0,
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
        v = r(4550),
        b = () =>
          (0, s.jsxs)('div', {
            className: 'section-padding py-10',
            children: [
              (0, s.jsx)(d.F, {
                words: 'Our Tenets for Success',
                innerClassName:
                  'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-center',
                wordStyles: [
                  { word: 'Tenets', classes: 'text-[#60a6e7] capitalize' },
                ],
              }),
              (0, s.jsx)('div', {
                className: 'flex flex-wrap justify-center gap-7',
                children: g.e3.map((e, t) =>
                  (0, s.jsx)('div', {
                    className: 'w-full md:w-[47%] lg:w-[31.5%]',
                    children: (0, s.jsx)(
                      v.Z,
                      {
                        title: e.title,
                        text: e.text,
                        svgBackground: e.svgBackground,
                        background: e.background,
                      },
                      e.title + t,
                    ),
                  }),
                ),
              }),
            ],
          }),
        j = () => {
          let { setGetInvolvedForm: e } = (0, m.useAppContext)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('div', {
                className: 'section-padding py-10 hidden md:block',
                children: (0, s.jsxs)('div', {
                  style: {
                    backgroundColor: 'rgb(3,5,22)',
                    background:
                      'linear-gradient(0deg, rgba(7, 22, 38, 0), rgba(7, 22, 38, 1))',
                  },
                  className: 'rounded-3xl relative',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'p-8 max-w-[38.5rem] pt-16',
                      children: [
                        (0, s.jsx)(d.F, {
                          words: 'Collaboration opportunities',
                          innerClassName:
                            'text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-8',
                        }),
                        (0, s.jsx)(d.F, {
                          words:
                            "Join forces with us and unlock unparalleled opportunities for collaboration and growth. Whether you're an entrepreneur with a bold idea, an investor seeking strategic partnerships, or a corporate innovator looking to disrupt your industry, we invite you to explore collaboration opportunities with us.",
                          innerClassName:
                            'text-darkGrey text-lg mb-8 leading-7 font-light',
                        }),
                        (0, s.jsx)(i.Z, {
                          buttonText: 'Get Involved',
                          outline: !0,
                          attributes: { onClick: () => void e(!0) },
                        }),
                      ],
                    }),
                    (0, s.jsx)('div', {
                      className: 'absolute right-0 top-0 w-fit h-full',
                      style: { clipPath: 'polygon(0 0, 100% 0, 100% )' },
                      children: (0, s.jsx)(l.default, {
                        src: '/images/map.ng.svg',
                        alt: 'map',
                        width: 500,
                        height: 500,
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)('div', {
                className: 'py-10 md:hidden',
                children: [
                  (0, s.jsx)('div', {
                    className: '',
                    children: (0, s.jsx)('div', {
                      className:
                        "relative h-[400px] w-full bg-[url('/images/map.ng2.svg')] bg-no-repeat bg-top",
                    }),
                  }),
                  (0, s.jsxs)('div', {
                    className: 'section-padding pt-5',
                    children: [
                      (0, s.jsx)(d.F, {
                        words: 'Collaboration opportunities',
                        innerClassName:
                          'text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-8',
                      }),
                      (0, s.jsx)(d.F, {
                        words:
                          "Join forces with us and unlock unparalleled opportunities for collaboration and growth. Whether you're an entrepreneur with a bold idea, an investor seeking strategic partnerships, or a corporate innovator looking to disrupt your industry, we invite you to explore collaboration opportunities with us.",
                        innerClassName:
                          'text-darkGrey text-lg mb-8 leading-7 font-light',
                      }),
                      (0, s.jsx)(i.Z, {
                        buttonText: 'Get Involved',
                        outline: !0,
                        attributes: { onClick: () => void e(!0) },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        w = r(125),
        y = r(1672);
      function N() {
        let { getInvolvedForm: e } = (0, m.useAppContext)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)('main', {
              className: 'min-h-screen mt-[6rem] md:mt-[6.5rem] w-full',
              children: [
                (0, s.jsx)(c, {}),
                (0, s.jsx)(b, {}),
                (0, s.jsx)(x, {}),
                (0, s.jsx)(h, {}),
                (0, s.jsx)(j, {}),
                (0, s.jsx)(p, {}),
                (0, s.jsx)(a.Z, {}),
              ],
            }),
            e && (0, s.jsx)(w.Z, {}),
            (0, s.jsx)(y.Z, {}),
          ],
        });
      }
    },
    8867: function (e, t, r) {
      'use strict';
      var s = r(7437),
        a = r(703);
      r(2265);
      var i = r(4465),
        l = r(8792);
      t.Z = (e) => {
        var t, r, n, o, d, c, u;
        let { blogDetails: m } = e,
          p =
            null == m
              ? void 0
              : null === (t = m.attributes) || void 0 === t
                ? void 0
                : t.publishedAt,
          g = (p ? new Date(p) : new Date())
            .toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
            .replace(/(\d+)/, (e, t) => {
              let r = parseInt(t);
              return r + ['th', 'st', 'nd', 'rd'][r <= 3 && r >= 0 ? r : 0];
            });
        return (0, s.jsxs)(l.default, {
          href: '/blog/'.concat(
            null == m
              ? void 0
              : null === (r = m.attributes) || void 0 === r
                ? void 0
                : r.slug,
          ),
          className:
            'w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500',
          children: [
            (0, s.jsxs)('div', {
              className: 'h-60 sm:h-56 relative mb-6',
              children: [
                (0, s.jsx)('div', {
                  className:
                    'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse',
                }),
                (0, s.jsx)(a.default, {
                  className:
                    'w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105',
                  src:
                    null == m
                      ? void 0
                      : null === (n = m.attributes) || void 0 === n
                        ? void 0
                        : n.blogCover.data[0].attributes.url,
                  layout: 'fill',
                  objectFit: 'cover',
                  alt:
                    null == m
                      ? void 0
                      : null === (o = m.attributes) || void 0 === o
                        ? void 0
                        : o.blogTitle,
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className:
                'pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate',
              children: [
                (0, s.jsx)('p', {
                  className: 'text-lg font-semibold mb-1',
                  children:
                    null == m
                      ? void 0
                      : null === (d = m.attributes) || void 0 === d
                        ? void 0
                        : d.blogCategories,
                }),
                (0, s.jsxs)('div', {
                  className: 'text-base text-darkGrey flex items-center mb-6',
                  children: [
                    (0, s.jsx)('span', {
                      children:
                        null == m
                          ? void 0
                          : null === (c = m.attributes) || void 0 === c
                            ? void 0
                            : c.blogAuthor,
                    }),
                    (0, s.jsx)(i.Z, {}),
                    (0, s.jsx)('span', { children: g }),
                  ],
                }),
                (0, s.jsx)('h6', {
                  className: 'text-xl md:text-2xl font-semibold line-clamp-2',
                  children:
                    null == m
                      ? void 0
                      : null === (u = m.attributes) || void 0 === u
                        ? void 0
                        : u.blogTitle,
                }),
              ],
            }),
          ],
        });
      };
    },
    4465: function (e, t, r) {
      'use strict';
      var s = r(7437);
      t.Z = (e) => {
        let { m1: t } = e;
        return (0, s.jsx)('div', {
          className: 'h-2 w-2 rounded-full bg-white '.concat(
            t ? 'mx-1' : 'mx-[6px]',
            ' ',
          ),
        });
      };
    },
    6093: function (e, t, r) {
      'use strict';
      function s(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          )
        );
      }
      r.d(t, {
        _: function () {
          return s;
        },
      });
    },
    3430: function (e, t, r) {
      'use strict';
      r.d(t, {
        Y: function () {
          return n;
        },
      });
      var s = r(6696),
        a = r(5526),
        i = r(4205),
        l = r(2702);
      function n(e, ...t) {
        let r = e.length;
        return (function (e, t) {
          let r = (0, s.c)(t()),
            l = () => r.set(t());
          return (
            l(),
            (0, a.L)(() => {
              let t = () => i.Wi.preRender(l, !1, !0),
                r = e.map((e) => e.on('change', t));
              return () => {
                r.forEach((e) => e()), (0, i.Pn)(l);
              };
            }),
            r
          );
        })(t.filter(l.i), function () {
          let s = '';
          for (let a = 0; a < r; a++) {
            s += e[a];
            let r = t[a];
            r && (s += (0, l.i)(r) ? r.get() : r);
          }
          return s;
        });
      }
    },
    6696: function (e, t, r) {
      'use strict';
      r.d(t, {
        c: function () {
          return n;
        },
      });
      var s = r(2265),
        a = r(3299),
        i = r(3449),
        l = r(2435);
      function n(e) {
        let t = (0, l.h)(() => (0, a.BX)(e)),
          { isStatic: r } = (0, s.useContext)(i._);
        if (r) {
          let [, r] = (0, s.useState)(e);
          (0, s.useEffect)(() => t.on('change', r), []);
        }
        return t;
      }
    },
    158: function (e, t, r) {
      'use strict';
      r.d(t, {
        w_: function () {
          return c;
        },
      });
      var s = r(2265),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = s.createContext && s.createContext(a),
        l = ['attr', 'size', 'title'];
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var s in r)
                  Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var s, a;
                (s = t),
                  (a = r[t]),
                  (s = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var s = r.call(e, t || 'default');
                        if ('object' != typeof s) return s;
                        throw TypeError(
                          '@@toPrimitive must return a primitive value.',
                        );
                      }
                      return ('string' === t ? String : Number)(e);
                    })(e, 'string');
                    return 'symbol' == typeof t ? t : t + '';
                  })(s)) in e
                    ? Object.defineProperty(e, s, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[s] = a);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function c(e) {
        return (t) =>
          s.createElement(
            u,
            n({ attr: d({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  s.createElement(t.tag, d({ key: r }, t.attr), e(t.child)),
                )
              );
            })(e.child),
          );
      }
      function u(e) {
        var t = (t) => {
          var r,
            { attr: a, size: i, title: o } = e,
            c = (function (e, t) {
              if (null == e) return {};
              var r,
                s,
                a = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s)) {
                      if (t.indexOf(s) >= 0) continue;
                      r[s] = e[s];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (s = 0; s < i.length; s++)
                  (r = i[s]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (a[r] = e[r]);
              }
              return a;
            })(e, l),
            u = i || t.size || '1em';
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + ' ' : '') + e.className),
            s.createElement(
              'svg',
              n(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                a,
                c,
                {
                  className: r,
                  style: d(d({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: 'http://www.w3.org/2000/svg',
                },
              ),
              o && s.createElement('title', null, o),
              e.children,
            )
          );
        };
        return void 0 !== i
          ? s.createElement(i.Consumer, null, (e) => t(e))
          : t(a);
      }
    },
  },
  function (e) {
    e.O(0, [51, 406, 150, 908, 411, 523, 904, 971, 69, 744], function () {
      return e((e.s = 5169));
    }),
      (_N_E = e.O());
  },
]);
