'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [929],
  {
    8395: function (e, t, l) {
      l.d(t, {
        C: function () {
          return i;
        },
      });
      var r = l(7437),
        s = l(2265),
        a = l(1715),
        n = l(6135);
      function i(e) {
        let {
            children: t,
            containerClassName: l,
            className: i,
            as: o = 'button',
            duration: d = 1,
            clockwise: c = !0,
            ...m
          } = e,
          [h, u] = (0, s.useState)(!1),
          [f, x] = (0, s.useState)('TOP'),
          g = (e) => {
            let t = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'],
              l = t.indexOf(e),
              r = c ? (l - 1 + t.length) % t.length : (l + 1) % t.length;
            return t[r];
          },
          p = {
            TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            BOTTOM:
              'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
            RIGHT:
              'radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
          };
        return (
          (0, s.useEffect)(() => {
            if (!h) {
              let e = setInterval(() => {
                x((e) => g(e));
              }, 1e3 * d);
              return () => clearInterval(e);
            }
          }, [h]),
          (0, r.jsxs)(o, {
            onMouseEnter: (e) => {
              u(!0);
            },
            onMouseLeave: () => u(!1),
            className: (0, n.cn)(
              'relative flex rounded-full border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit',
              l,
            ),
            ...m,
            children: [
              (0, r.jsx)('div', {
                className: (0, n.cn)(
                  'w-auto text-white z-10 bg-transparent rounded-[inherit]',
                  i,
                ),
                children: t,
              }),
              (0, r.jsx)(a.E.div, {
                className: (0, n.cn)(
                  'flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]',
                ),
                style: {
                  filter: 'blur(2px)',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                },
                initial: { background: p[f] },
                animate: {
                  background: h
                    ? [
                        p[f],
                        'radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)',
                      ]
                    : p[f],
                },
                transition: { ease: 'linear', duration: null != d ? d : 1 },
              }),
              (0, r.jsx)('div', {
                className:
                  'bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]',
              }),
            ],
          })
        );
      }
    },
    4708: function (e, t, l) {
      l.r(t);
      var r = l(7437),
        s = l(703),
        a = l(4411),
        n = l(8792),
        i = l(2265),
        o = l(7907);
      t.default = () => {
        let [e, t] = (0, i.useState)(!1),
          l = (0, o.usePathname)(),
          d = () => {
            t(!e);
          };
        return (0, r.jsxs)('div', {
          className: 'section-padding py-10 bg-secondaryBackground',
          children: [
            (0, r.jsxs)('div', {
              className: 'lg:grid lg:grid-cols-3 my-10',
              children: [
                (0, r.jsxs)('div', {
                  className: 'max-w-lg mb-10 lg:mb-0',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'w-full grid grid-cols-4',
                      children: [
                        (0, r.jsx)('input', {
                          className:
                            'py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]',
                          type: 'text',
                          placeholder: 'Your Email Address',
                        }),
                        (0, r.jsx)('button', {
                          className:
                            'py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white',
                          children: 'Subscribe',
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className: 'flex gap-3 mt-5 items-center',
                      children: [
                        (0, r.jsxs)('div', {
                          onClick: d,
                          className:
                            'w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center',
                          children: [
                            e &&
                              (0, r.jsx)('div', {
                                className: 'bg-white rounded-full w-2 h-2',
                              }),
                            (0, r.jsx)('input', {
                              className: 'hidden',
                              type: 'checkbox',
                              name: 'agreement',
                              id: 'agreement',
                              checked: e,
                              onChange: () => {},
                            }),
                          ],
                        }),
                        (0, r.jsx)('label', {
                          onClick: (e) => {
                            e.preventDefault(), d();
                          },
                          htmlFor: 'agreement',
                          className: 'text-sm cursor-pointer',
                          children:
                            'I agree to receive other notifications from Forcythe',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)('div', {
                  className:
                    'grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'lg:pl-14 md:col-span-2 md:pr-10',
                      children: [
                        (0, r.jsx)(s.default, {
                          className: 'mb-5 md:mb-8',
                          src: '/images/forcythe logo.svg',
                          alt: 'Forcythe logo',
                          width: 130,
                          height: 9,
                          priority: !0,
                        }),
                        (0, r.jsx)('p', {
                          className:
                            'text-base text-darkGrey leadin font-normal',
                          children:
                            'We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.',
                        }),
                        (0, r.jsx)('div', {
                          className: 'mt-10 hidden md:flex items-center gap-2',
                          children: a.UY.map((e, t) =>
                            (0, r.jsx)(
                              n.default,
                              {
                                href: e.link,
                                target: '_blank',
                                className:
                                  'w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center',
                                children: (0, r.jsx)(s.default, {
                                  src: e.img,
                                  alt: 'social',
                                  width: 20,
                                  height: 20,
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className: 'lg:pl-10',
                      children: [
                        (0, r.jsx)('h3', {
                          className: 'mb-8 text-2xl font-bold',
                          children: 'Company',
                        }),
                        (0, r.jsx)('ul', {
                          className: 'flex flex-col gap-2',
                          children: a.dk.map((e, t) =>
                            (0, r.jsx)(
                              'li',
                              {
                                className: 'text-base text-accent2 font-medium',
                                children: (0, r.jsx)(n.default, {
                                  href: e.link,
                                  children: (0, r.jsx)('span', {
                                    onClick: (t) => {
                                      'Portfolio' === e.title &&
                                        '/services' === l &&
                                        (t.preventDefault(),
                                        (function () {
                                          let e =
                                            document.getElementById(
                                              'portfolio',
                                            );
                                          e &&
                                            window.scrollTo({
                                              top: e.offsetTop,
                                              behavior: 'smooth',
                                            });
                                        })(),
                                        d());
                                    },
                                    children: e.title,
                                  }),
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                        (0, r.jsx)('div', {
                          className:
                            'mt-10 flex md:hidden items-center gap-2 w-fit mx-auto',
                          children: a.UY.map((e, t) =>
                            (0, r.jsx)(
                              n.default,
                              {
                                href: e.link,
                                target: '_blank',
                                className:
                                  'w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center',
                                children: (0, r.jsx)(s.default, {
                                  src: e.img,
                                  alt: 'social',
                                  width: 20,
                                  height: 20,
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)('div', {
              className: 'copyright border-t-[1px] border-accent',
              children: (0, r.jsx)('p', {
                className: 'text-accent2 text-sm mt-5 text-center md:text-left',
                children: 'Copyright \xa9 2024 Forcythe. All rights reserved.',
              }),
            }),
          ],
        });
      };
    },
    8866: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var r = l(7437),
        s = l(1128),
        a = l(703),
        n = l(4411),
        i = l(8792),
        o = l(7907),
        d = l(3552),
        c = l(7495),
        m = l(2265),
        h = l(8395),
        u = (e) => {
          let { toggleMenu: t, refObject: l } = e,
            s = (0, o.usePathname)();
          return (0, r.jsx)(h.C, {
            as: 'div',
            containerClassName:
              'z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28',
            className: 'w-full',
            children: (0, r.jsx)('div', {
              ref: l,
              style: {
                backgroundColor: 'rgba(3, 5, 22, 1)',
                background:
                  'linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgba(7, 22, 38, 1) 85%)',
              },
              className: 'w-full p-5 py-8 rounded-[2rem]',
              children: (0, r.jsx)('ul', {
                className: 'flex flex-col',
                children: n.zk.map((e, l) =>
                  (0, r.jsx)(
                    'li',
                    {
                      className: 'w-full py-2.5',
                      children: (0, r.jsx)(i.default, {
                        onClick: t,
                        className: 'w-full text-base py-3',
                        href:
                          'Portfolio' === e.title && '/services' === s
                            ? ''
                            : e.link,
                        children: (0, r.jsx)('span', {
                          onClick: () => {
                            'Portfolio' === e.title &&
                              '/services' === s &&
                              (function () {
                                let e = document.getElementById('portfolio');
                                e &&
                                  window.scrollTo({
                                    top: e.offsetTop,
                                    behavior: 'smooth',
                                  });
                              })();
                          },
                          children: e.title,
                        }),
                      }),
                    },
                    'menu ' + l,
                  ),
                ),
              }),
            }),
          });
        },
        f = () => {
          let e = (0, o.usePathname)(),
            t = (0, m.useRef)(null),
            l = (0, m.useRef)(null),
            [h, { toggle: f }] = (0, d.Z)(!1);
          return (
            (0, c.Z)(() => {
              h && f();
            }, [t, l]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)('div', {
                  className:
                    'section-padding navbar w-full fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 backdrop-blur-md',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'flex items-center gap-20',
                      children: [
                        (0, r.jsx)('a', {
                          href: '/',
                          children: (0, r.jsx)(a.default, {
                            className: 'w-28 sm:w-32 md:w-auto',
                            src: '/images/forcythe logo.svg',
                            alt: 'Forcythe logo',
                            width: 150,
                            height: 10,
                            priority: !0,
                          }),
                        }),
                        (0, r.jsx)('div', {
                          className:
                            'hidden md:flex items-center gap-4 text-base',
                          children: n.tg.map((t, l) =>
                            (0, r.jsx)(
                              i.default,
                              {
                                href:
                                  'Portfolio' === t.title && '/services' === e
                                    ? ''
                                    : t.link,
                                children: (0, r.jsx)('span', {
                                  onClick: () => {
                                    'Portfolio' === t.title &&
                                      '/services' === e &&
                                      (function () {
                                        let e =
                                          document.getElementById('portfolio');
                                        e &&
                                          window.scrollTo({
                                            top: e.offsetTop,
                                            behavior: 'smooth',
                                          });
                                      })();
                                  },
                                  className: ''.concat(
                                    e === t.link ? 'text-accent' : '',
                                  ),
                                  children: t.title,
                                }),
                              },
                              l,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className: 'hidden md:block',
                      children: (0, r.jsx)(s.Z, {
                        buttonText: 'Book a Call',
                        width: 'w-fit',
                        book: !0,
                      }),
                    }),
                    (0, r.jsx)('div', {
                      ref: l,
                      onClick: () => f(),
                      className:
                        'menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer',
                      children: (0, r.jsx)(a.default, {
                        src: '/images/menu.svg',
                        alt: 'menu',
                        width: 18,
                        height: 18,
                      }),
                    }),
                    (0, r.jsx)('script', {
                      dangerouslySetInnerHTML: {
                        __html:
                          "\n            window.addEventListener('scroll', function() {\n              const navbar = document.querySelector('.navbar');\n              if (window.scrollY >= 5) {\n                 navbar.classList.add('backdrop-blur-md');\n              } else {\n                navbar.classList.remove('backdrop-blur-md');\n              }\n            });\n          ",
                      },
                    }),
                  ],
                }),
                h && (0, r.jsx)(u, { toggleMenu: f, refObject: t }),
              ],
            })
          );
        };
    },
  },
]);
