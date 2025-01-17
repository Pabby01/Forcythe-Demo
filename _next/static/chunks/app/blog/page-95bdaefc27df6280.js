(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [404],
  {
    7810: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 5150));
    },
    4288: function (e, t, a) {
      'use strict';
      var r = a(2265),
        n = a(9341),
        s = a(1053),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, a = 1, r = arguments.length; a < r; a++)
                for (var n in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (a[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, r = Object.getOwnPropertySymbols(e);
              n < r.length;
              n++
            )
              0 > t.indexOf(r[n]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                (a[r[n]] = e[r[n]]);
          return a;
        },
        i = (0, s.i)(
          'FadeLoader',
          '50% {opacity: 0.3} 100% {opacity: 1}',
          'fade',
        );
      t.Z = function (e) {
        var t = e.loading,
          a = e.color,
          s = void 0 === a ? '#000000' : a,
          c = e.speedMultiplier,
          d = void 0 === c ? 1 : c,
          u = e.cssOverride,
          p = e.height,
          h = void 0 === p ? 15 : p,
          m = e.width,
          f = void 0 === m ? 5 : m,
          x = e.radius,
          g = void 0 === x ? 2 : x,
          b = e.margin,
          v = void 0 === b ? 2 : b,
          w = l(e, [
            'loading',
            'color',
            'speedMultiplier',
            'cssOverride',
            'height',
            'width',
            'radius',
            'margin',
          ]),
          y = (0, n.h)(v).value + 18,
          j = y / 2 + y / 5.5,
          N = o(
            {
              display: 'inherit',
              position: 'relative',
              fontSize: '0',
              top: y,
              left: y,
              width: ''.concat(3 * y, 'px'),
              height: ''.concat(3 * y, 'px'),
            },
            void 0 === u ? {} : u,
          ),
          S = function (e) {
            return {
              position: 'absolute',
              width: (0, n.E)(f),
              height: (0, n.E)(h),
              margin: (0, n.E)(v),
              backgroundColor: s,
              borderRadius: (0, n.E)(g),
              transition: '2s',
              animationFillMode: 'both',
              animation: ''
                .concat(i, ' ')
                .concat(1.2 / d, 's ')
                .concat(0.12 * e, 's infinite ease-in-out'),
            };
          },
          k = o(o({}, S(1)), { top: ''.concat(y, 'px'), left: '0' }),
          C = o(o({}, S(2)), {
            top: ''.concat(j, 'px'),
            left: ''.concat(j, 'px'),
            transform: 'rotate(-45deg)',
          }),
          E = o(o({}, S(3)), {
            top: '0',
            left: ''.concat(y, 'px'),
            transform: 'rotate(90deg)',
          }),
          Z = o(o({}, S(4)), {
            top: ''.concat(-1 * j, 'px'),
            left: ''.concat(j, 'px'),
            transform: 'rotate(45deg)',
          }),
          O = o(o({}, S(5)), { top: ''.concat(-1 * y, 'px'), left: '0' }),
          z = o(o({}, S(6)), {
            top: ''.concat(-1 * j, 'px'),
            left: ''.concat(-1 * j, 'px'),
            transform: 'rotate(-45deg)',
          }),
          F = o(o({}, S(7)), {
            top: '0',
            left: ''.concat(-1 * y, 'px'),
            transform: 'rotate(90deg)',
          }),
          M = o(o({}, S(8)), {
            top: ''.concat(j, 'px'),
            left: ''.concat(-1 * j, 'px'),
            transform: 'rotate(45deg)',
          });
        return void 0 === t || t
          ? r.createElement(
              'span',
              o({ style: N }, w),
              r.createElement('span', { style: k }),
              r.createElement('span', { style: C }),
              r.createElement('span', { style: E }),
              r.createElement('span', { style: Z }),
              r.createElement('span', { style: O }),
              r.createElement('span', { style: z }),
              r.createElement('span', { style: F }),
              r.createElement('span', { style: M }),
            )
          : null;
      };
    },
    5150: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var r = a(7437),
        n = a(4529),
        s = a(2442),
        o = (e) => {
          let { onSearch: t } = e,
            a = (e) => {
              t(e.target.value);
            };
          return (0, r.jsx)(s.Z, {
            attributes: {
              type: 'text',
              placeholder: 'Search keyword',
              onChange: (e) => {
                a(e);
              },
            },
            searchIcon: !0,
          });
        },
        l = (e) => {
          let {
            blogMenus: t,
            selectedCategory: a,
            onCategorySelect: n,
            onSearch: s,
          } = e;
          return (0, r.jsxs)('header', {
            className: 'pt-8 md:py-8 section-margin',
            children: [
              (0, r.jsx)('h1', {
                className:
                  'text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-5 text-center',
                children: 'Our Blog',
              }),
              (0, r.jsxs)('div', {
                className:
                  'flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-6',
                children: [
                  (0, r.jsx)('div', {
                    className: '',
                    children: (0, r.jsx)('div', {
                      className: 'flex items-center gap-2',
                      children: t.map((e, t) =>
                        (0, r.jsx)(
                          'button',
                          {
                            onClick: () => n(e),
                            className:
                              'py-2.5 md:py-3 px-4 md:px-5 rounded-full border-[1px] border-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-base capitalize cursor-pointer '.concat(
                                e === a ? 'bg-white text-black' : 'text-white',
                              ),
                            children: e,
                          },
                          e + t,
                        ),
                      ),
                    }),
                  }),
                  (0, r.jsx)('div', {
                    className: 'min-w-[350px]',
                    children: (0, r.jsx)(o, { onSearch: s }),
                  }),
                ],
              }),
            ],
          });
        },
        i = a(8867),
        c = a(2265),
        d = a(1128),
        u = a(7908),
        p = a(5201),
        h = a(4288),
        m = a(8721);
      function f() {
        return (0, r.jsx)(c.Suspense, {
          fallback: (0, r.jsx)('div', {
            className:
              'fixed inset-0 bg-primaryBackground/30 flex justify-center items-center w-screen h-screen  z-[999] ',
            children: (0, r.jsx)(h.Z, { color: '#60a6e7' }),
          }),
          children: (0, r.jsx)(x, {}),
        });
      }
      let x = () => {
        let [e, t] = (0, c.useState)('all'),
          [a, s] = (0, c.useState)([]),
          [o, f] = (0, c.useState)([]),
          [x, g] = (0, c.useState)(''),
          [b, v] = (0, c.useState)(1),
          [w, y] = (0, c.useState)(1),
          { loading: j, setLoading: N } = (0, p.useAppContext)(),
          S = a;
        e &&
          'all' !== e &&
          (S = S.filter((t) => t.attributes.blogCategories === e)),
          x &&
            (S = S.filter((e) =>
              e.attributes.blogTitle.toLowerCase().includes(x.toLowerCase()),
            ));
        let k = async (e) => {
          try {
            N(!0);
            let t = await u.Z.get(
                ''
                  .concat(
                    'https://cms.forcythe.com/api',
                    '/blogs?populate=*&sort=createdAt:desc&pagination[page]=',
                  )
                  .concat(e, '&pagination[pageSize]=12'),
              ),
              a = t.data.data;
            s(a);
            let r = new Set(a.map((e) => e.attributes.blogCategories)),
              n = Array.from(r).filter((e) => 'all' !== e);
            n.unshift('all'), f(n);
            let o = t.data.meta.pagination;
            v(o.page), y(o.pageCount);
          } catch (e) {
            alert('Error fetching blogs');
          } finally {
            N(!1);
          }
        };
        (0, c.useLayoutEffect)(() => {
          k(b);
        }, [b]);
        let C = (e) => {
          v(e);
        };
        return (0, r.jsxs)('main', {
          className: 'min-h-screen mt-[6rem] md:mt-[6.5rem] w-full',
          children: [
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(l, {
                  blogMenus: o,
                  selectedCategory: e,
                  onCategorySelect: (e) => {
                    t(e);
                  },
                  onSearch: g,
                }),
                S.length
                  ? (0, r.jsx)('div', {
                      className:
                        'section-padding py-10 blogs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12',
                      children: S.map((e) =>
                        (0, r.jsx)(i.Z, { blogDetails: e }, e.id),
                      ),
                    })
                  : (0, r.jsx)('div', {
                      className:
                        'min-h-[55vh] md:min-h-[50vh] flex justify-center items-center',
                      children: (0, r.jsx)(m.Z, {
                        header: 'Welcome to Our Blog!',
                        message: '',
                        wideTextWidth: !0,
                      }),
                    }),
                (0, r.jsxs)('div', {
                  className:
                    'section-margin flex justify-between items-center my-4',
                  children: [
                    (0, r.jsx)(d.Z, {
                      buttonText: 'Previous',
                      width: 'fit',
                      outline: !0,
                      attributes: {
                        onClick: () => C(b - 1),
                        disabled: 1 === b,
                      },
                    }),
                    (0, r.jsxs)('span', {
                      className: 'mx-2 text-xs font-medium text-[#475467]',
                      children: [b, ' of ', w],
                    }),
                    (0, r.jsx)(d.Z, {
                      buttonText: 'Next',
                      width: 'fit',
                      outline: !0,
                      attributes: {
                        onClick: () => C(b + 1),
                        disabled: b === w,
                      },
                    }),
                  ],
                }),
              ],
            }),
            j &&
              (0, r.jsx)('div', {
                className:
                  'fixed inset-0 bg-primaryBackground/30 flex justify-center items-center w-screen h-screen  z-[999] ',
                children: (0, r.jsx)(h.Z, { color: '#60a6e7' }),
              }),
            (0, r.jsx)(n.Z, {}),
          ],
        });
      };
    },
    1128: function (e, t, a) {
      'use strict';
      var r = a(7437),
        n = a(703),
        s = a(8792),
        o = a(1218),
        l = a(9735),
        i = a(2265);
      t.Z = (e) => {
        let {
          buttonText: t,
          buttonType: a,
          link: c,
          width: d,
          attributes: u,
          loading: p = !1,
          play: h,
          outline: m = !1,
          book: f = !1,
          dottedBorder: x = !0,
        } = e;
        return (
          (0, i.useEffect)(() => {
            !(async function () {
              f &&
                (await (0, l.o)())('ui', {
                  styles: { branding: { brandColor: '#1f3449' } },
                  hideEventTypeDetails: !1,
                  layout: 'month_view',
                });
            })();
          }, []),
          (0, r.jsxs)('div', {
            className: 'relative w-fit group',
            children: [
              c
                ? (0, r.jsx)(s.default, {
                    href: c || '',
                    children: (0, r.jsxs)('span', {
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          m
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: [
                        t,
                        h &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(n.default, {
                                className: 'group-hover:hidden',
                                src: '/images/play.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                              (0, r.jsx)(n.default, {
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
                : f
                  ? (0, r.jsxs)('button', {
                      'data-cal-namespace': '',
                      'data-cal-link': 'forcythe/discovery',
                      'data-cal-config': '{"layout":"month_view"}',
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          m
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: [
                        t,
                        h &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(n.default, {
                                className: 'group-hover:hidden',
                                src: '/images/play.svg',
                                width: 10,
                                height: 10,
                                alt: 'play',
                              }),
                              (0, r.jsx)(n.default, {
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
                  : (0, r.jsx)('button', {
                      ...u,
                      type: a || 'button',
                      className: 'action-button custom-animate '
                        .concat(
                          d ? 'w-'.concat(d) : 'w-full',
                          ' py-[12px] px-5 flex gap-2 items-center justify-center rounded-full \n                     ',
                        )
                        .concat(
                          m
                            ? 'bg-[#030516] border-white border-[1px]'
                            : 'bg-white text-black',
                          ' text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md \n                     ',
                        ),
                      children: p
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(o.Z, { size: 14, color: 'white' }),
                              ' ',
                              (0, r.jsx)('span', {
                                className: 'ml-2',
                                children: t,
                              }),
                            ],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              t,
                              h &&
                                (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)(n.default, {
                                      className: 'group-hover:hidden',
                                      src: '/images/play.svg',
                                      width: 10,
                                      height: 10,
                                      alt: 'play',
                                    }),
                                    (0, r.jsx)(n.default, {
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
              x &&
                (0, r.jsx)('div', {
                  className:
                    'w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]',
                }),
            ],
          })
        );
      };
    },
    8867: function (e, t, a) {
      'use strict';
      var r = a(7437),
        n = a(703);
      a(2265);
      var s = a(4465),
        o = a(8792);
      t.Z = (e) => {
        var t, a, l, i, c, d, u;
        let { blogDetails: p } = e,
          h =
            null == p
              ? void 0
              : null === (t = p.attributes) || void 0 === t
                ? void 0
                : t.publishedAt,
          m = (h ? new Date(h) : new Date())
            .toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
            .replace(/(\d+)/, (e, t) => {
              let a = parseInt(t);
              return a + ['th', 'st', 'nd', 'rd'][a <= 3 && a >= 0 ? a : 0];
            });
        return (0, r.jsxs)(o.default, {
          href: '/blog/'.concat(
            null == p
              ? void 0
              : null === (a = p.attributes) || void 0 === a
                ? void 0
                : a.slug,
          ),
          className:
            'w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500',
          children: [
            (0, r.jsxs)('div', {
              className: 'h-60 sm:h-56 relative mb-6',
              children: [
                (0, r.jsx)('div', {
                  className:
                    'bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse',
                }),
                (0, r.jsx)(n.default, {
                  className:
                    'w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105',
                  src:
                    null == p
                      ? void 0
                      : null === (l = p.attributes) || void 0 === l
                        ? void 0
                        : l.blogCover.data[0].attributes.url,
                  layout: 'fill',
                  objectFit: 'cover',
                  alt:
                    null == p
                      ? void 0
                      : null === (i = p.attributes) || void 0 === i
                        ? void 0
                        : i.blogTitle,
                }),
              ],
            }),
            (0, r.jsxs)('div', {
              className:
                'pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate',
              children: [
                (0, r.jsx)('p', {
                  className: 'text-lg font-semibold mb-1',
                  children:
                    null == p
                      ? void 0
                      : null === (c = p.attributes) || void 0 === c
                        ? void 0
                        : c.blogCategories,
                }),
                (0, r.jsxs)('div', {
                  className: 'text-base text-darkGrey flex items-center mb-6',
                  children: [
                    (0, r.jsx)('span', {
                      children:
                        null == p
                          ? void 0
                          : null === (d = p.attributes) || void 0 === d
                            ? void 0
                            : d.blogAuthor,
                    }),
                    (0, r.jsx)(s.Z, {}),
                    (0, r.jsx)('span', { children: m }),
                  ],
                }),
                (0, r.jsx)('h6', {
                  className: 'text-xl md:text-2xl font-semibold line-clamp-2',
                  children:
                    null == p
                      ? void 0
                      : null === (u = p.attributes) || void 0 === u
                        ? void 0
                        : u.blogTitle,
                }),
              ],
            }),
          ],
        });
      };
    },
    4465: function (e, t, a) {
      'use strict';
      var r = a(7437);
      t.Z = (e) => {
        let { m1: t } = e;
        return (0, r.jsx)('div', {
          className: 'h-2 w-2 rounded-full bg-white '.concat(
            t ? 'mx-1' : 'mx-[6px]',
            ' ',
          ),
        });
      };
    },
    8721: function (e, t, a) {
      'use strict';
      var r = a(7437);
      t.Z = (e) => {
        let {
          header: t,
          message: a,
          wideTextWidth: n,
          containerClassName: s,
          objectClassName: o,
          notFullHeight: l,
        } = e;
        return (0, r.jsx)('div', {
          className: 'w-full '
            .concat(!l && 'grow', ' flex items-center justify-center ')
            .concat(s),
          children: (0, r.jsxs)('div', {
            className: ''.concat(o || (n ? 'w-[380px]' : 'w-[180px]')),
            children: [
              (0, r.jsx)('h6', {
                className: 'font-semibold text-center mt-1 mb-2',
                children: t,
              }),
              (0, r.jsx)('p', {
                className: 'text-center text-[15px] max-sm:text-sm',
                children: a,
              }),
            ],
          }),
        });
      };
    },
    2442: function (e, t, a) {
      'use strict';
      var r = a(6093),
        n = a(7437),
        s = a(703),
        o = a(2265),
        l = a(6696),
        i = a(1715),
        c = a(3430);
      function d() {
        let e = (0, r._)([
          '\n      radial-gradient(\n        ',
          ' circle at ',
          'px ',
          'px,\n        var(--blue-500),\n        transparent 80%\n      )\n    ',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = (0, r._)([
          '\n      radial-gradient(\n        ',
          ' circle at ',
          'px ',
          'px,\n        var(--blue-500),\n        transparent 80%\n      )\n    ',
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      t.Z = (e) => {
        let {
            label: t,
            labelFor: a,
            attributes: r,
            disabled: p,
            searchIcon: h,
            extraNodeElement: m,
            error: f,
            file: x,
          } = e,
          g = (0, o.useRef)(null),
          [b, v] = (0, o.useState)(''),
          [w, y] = o.useState(!1),
          j = (0, l.c)(0),
          N = (0, l.c)(0);
        function S(e) {
          let { currentTarget: t, clientX: a, clientY: r } = e,
            { left: n, top: s } = t.getBoundingClientRect();
          j.set(a - n), N.set(r - s);
        }
        return (0, n.jsxs)('div', {
          className: 'w-full '.concat(p && 'opacity-80'),
          children: [
            t &&
              (0, n.jsx)('label', {
                htmlFor: a,
                className: 'text-sm text-white font-normal capitalize',
                children: t,
              }),
            x
              ? (0, n.jsxs)(i.E.div, {
                  style: {
                    background: (0, c.Y)(d(), w ? '100px' : '0px', j, N),
                    borderRadius: '9999px',
                  },
                  onMouseMove: S,
                  onMouseEnter: () => y(!0),
                  onMouseLeave: () => y(!1),
                  className:
                    'relative w-full mt-2 overflow-hidden rounded-full',
                  children: [
                    (0, n.jsx)('input', {
                      ref: g,
                      className: 'hidden',
                      name: a,
                      id: a,
                      type: 'file',
                      onChange: (e) => {
                        e.target.files && e.target.files.length > 0
                          ? v(e.target.files[0].name)
                          : v('');
                      },
                      ...r,
                    }),
                    (0, n.jsx)('div', {
                      onClick: () => {
                        g.current && g.current.click();
                      },
                      className:
                        'w-full cursor-pointer py-3 md:py-3.5 px-5 rounded-full border border-white bg-transparent text-base font-normal placeholder:text-base text-[#79767D] outline-none overflow-hidden',
                      children: (0, n.jsx)('span', {
                        className:
                          'max-w-[90%] overflow-hidden whitespace-nowrap text-nowrap text-ellipsis',
                        children: b || 'Choose File',
                      }),
                    }),
                  ],
                })
              : (0, n.jsxs)(i.E.div, {
                  style: {
                    background: (0, c.Y)(u(), w ? '100px' : '0px', j, N),
                    borderRadius: '9999px',
                  },
                  onMouseMove: S,
                  onMouseEnter: () => y(!0),
                  onMouseLeave: () => y(!1),
                  className:
                    'relative w-full mt-2 overflow-hidden rounded-full',
                  children: [
                    (0, n.jsx)('input', {
                      ...r,
                      className:
                        'w-full py-3 md:py-3.5 px-5 rounded-full border border-white bg-transparent\n                        text-base font-normal placeholder:text-base placeholder:text-[#79767D] outline-none shadow-input file:border-0 file:bg-transparent \n          file:text-sm file:font-medium dark:placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400\n           disabled:cursor-not-allowed disabled:opacity-50\n           group-hover/input:shadow-none transition duration-500 '.concat(
                          h && 'pr-14',
                          '\n                    ',
                        ),
                      disabled: p,
                    }),
                    h &&
                      (0, n.jsx)('div', {
                        className:
                          'bg-white p-3.5 absolute right-0 top-0 rounded-e-full h-full flex justify-center items-center',
                        children: (0, n.jsx)(s.default, {
                          width: 20,
                          height: 20,
                          src: '/images/search.svg',
                          alt: 'search',
                        }),
                      }),
                  ],
                }),
            f
              ? (0, n.jsx)('p', {
                  className: 'text-[11px] text-[#F50449] pl-4 mt-[2px]',
                  children: f,
                })
              : (0, n.jsx)('div', { className: 'pl-4 mt-[2px]', children: m }),
          ],
        });
      };
    },
    4529: function (e, t, a) {
      'use strict';
      var r = a(7437),
        n = a(1128);
      a(2265),
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
                  children: (0, r.jsx)(n.Z, {
                    buttonText: 'Book a Call',
                    width: 'w-fit',
                    book: !0,
                  }),
                }),
              ],
            }),
          }));
    },
    5201: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          AppWrapper: function () {
            return l;
          },
          useAppContext: function () {
            return i;
          },
        });
      var r = a(7437),
        n = a(7908),
        s = a(2265);
      let o = (0, s.createContext)(null);
      function l(e) {
        let { children: t } = e,
          [a, l] = (0, s.useState)(!1),
          [i, c] = (0, s.useState)(!1),
          [d, u] = (0, s.useState)(!0),
          [p, h] = (0, s.useState)([]),
          [m, f] = (0, s.useState)([]),
          [x, g] = (0, s.useState)([]),
          [b, v] = (0, s.useState)([]),
          [w, y] = (0, s.useState)([]),
          [j, N] = (0, s.useState)([]),
          [S, k] = (0, s.useState)([]),
          C = async () => {
            try {
              let e = await n.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/faqs'),
              );
              h(e.data.data);
            } catch (e) {
              console.error(e);
            }
          },
          E = async () => {
            try {
              let e = await n.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/foundation-faqs'),
              );
              f(e.data.data);
            } catch (e) {
              console.error(e);
            }
          },
          Z = async () => {
            try {
              let e = (
                await n.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/our-ventures?populate=*&sort=publishedAt:desc',
                  ),
                )
              ).data.data;
              y(e);
            } catch (e) {
              console.error(e);
            }
          },
          O = async () => {
            try {
              let e = (
                await n.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/blogs?populate=*&sort=publishedAt:desc&pagination[pageSize]=1000',
                  ),
                )
              ).data.data;
              g(e);
            } catch (e) {
              console.error(e);
            }
          },
          z = async () => {
            try {
              let e = (
                await n.Z.get(
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
          F = async () => {
            try {
              let e = (
                await n.Z.get(
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
          M = async () => {
            try {
              let e = (
                await n.Z.get(
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
          (0, s.useEffect)(() => {
            O(), C(), E(), z(), Z(), F(), M();
          }, []),
          (0, r.jsx)(o.Provider, {
            value: {
              allBlogs: x,
              setAllBlogs: g,
              getInvolvedForm: a,
              setGetInvolvedForm: l,
              loading: d,
              setLoading: u,
              faqs: p,
              setFaqs: h,
              foundationFaqs: m,
              setFoundationFaqs: f,
              latestBlogs: b,
              setLatestBlogs: v,
              ourVentures: w,
              setOurVentures: y,
              ourPortfolios: j,
              setOurPortfolios: N,
              showSuccessMessage: i,
              setShowSuccessMessage: c,
              departments: S,
              setDepartments: k,
            },
            children: t,
          })
        );
      }
      function i() {
        return (0, s.useContext)(o);
      }
    },
    6093: function (e, t, a) {
      'use strict';
      function r(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          )
        );
      }
      a.d(t, {
        _: function () {
          return r;
        },
      });
    },
    3430: function (e, t, a) {
      'use strict';
      a.d(t, {
        Y: function () {
          return l;
        },
      });
      var r = a(6696),
        n = a(5526),
        s = a(4205),
        o = a(2702);
      function l(e, ...t) {
        let a = e.length;
        return (function (e, t) {
          let a = (0, r.c)(t()),
            o = () => a.set(t());
          return (
            o(),
            (0, n.L)(() => {
              let t = () => s.Wi.preRender(o, !1, !0),
                a = e.map((e) => e.on('change', t));
              return () => {
                a.forEach((e) => e()), (0, s.Pn)(o);
              };
            }),
            a
          );
        })(t.filter(o.i), function () {
          let r = '';
          for (let n = 0; n < a; n++) {
            r += e[n];
            let a = t[n];
            a && (r += (0, o.i)(a) ? a.get() : a);
          }
          return r;
        });
      }
    },
    6696: function (e, t, a) {
      'use strict';
      a.d(t, {
        c: function () {
          return l;
        },
      });
      var r = a(2265),
        n = a(3299),
        s = a(3449),
        o = a(2435);
      function l(e) {
        let t = (0, o.h)(() => (0, n.BX)(e)),
          { isStatic: a } = (0, r.useContext)(s._);
        if (a) {
          let [, a] = (0, r.useState)(e);
          (0, r.useEffect)(() => t.on('change', a), []);
        }
        return t;
      }
    },
  },
  function (e) {
    e.O(0, [406, 908, 971, 69, 744], function () {
      return e((e.s = 7810));
    }),
      (_N_E = e.O());
  },
]);
