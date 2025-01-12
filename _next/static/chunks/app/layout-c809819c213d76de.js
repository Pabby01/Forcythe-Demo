(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2104: function (t, e, a) {
      Promise.resolve().then(a.t.bind(a, 3385, 23)),
        Promise.resolve().then(a.t.bind(a, 1147, 23)),
        Promise.resolve().then(a.bind(a, 2397)),
        Promise.resolve().then(a.bind(a, 5201));
    },
    7907: function (t, e, a) {
      'use strict';
      var o = a(5313);
      a.o(o, 'useParams') &&
        a.d(e, {
          useParams: function () {
            return o.useParams;
          },
        }),
        a.o(o, 'usePathname') &&
          a.d(e, {
            usePathname: function () {
              return o.usePathname;
            },
          }),
        a.o(o, 'useRouter') &&
          a.d(e, {
            useRouter: function () {
              return o.useRouter;
            },
          });
    },
    2397: function (t, e, a) {
      'use strict';
      a.r(e);
      var o = a(7437),
        n = a(7907);
      e.default = () =>
        [
          '/blog/2',
          '/blog/3',
          '/blog/4',
          '/blog/6',
          '/blog?category=Walfare',
          '/blog?category=Blog',
          '/blog?category=News',
          '/cgi-bin',
        ].includes((0, n.usePathname)())
          ? (0, o.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' })
          : null;
    },
    5201: function (t, e, a) {
      'use strict';
      a.r(e),
        a.d(e, {
          AppWrapper: function () {
            return r;
          },
          useAppContext: function () {
            return u;
          },
        });
      var o = a(7437),
        n = a(7908),
        s = a(2265);
      let c = (0, s.createContext)(null);
      function r(t) {
        let { children: e } = t,
          [a, r] = (0, s.useState)(!1),
          [u, i] = (0, s.useState)(!1),
          [l, p] = (0, s.useState)(!0),
          [d, h] = (0, s.useState)([]),
          [f, m] = (0, s.useState)([]),
          [g, y] = (0, s.useState)([]),
          [b, _] = (0, s.useState)([]),
          [S, P] = (0, s.useState)([]),
          [w, v] = (0, s.useState)([]),
          [x, Z] = (0, s.useState)([]),
          A = async () => {
            try {
              let t = await n.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/faqs'),
              );
              h(t.data.data);
            } catch (t) {
              console.error(t);
            }
          },
          N = async () => {
            try {
              let t = await n.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/foundation-faqs'),
              );
              m(t.data.data);
            } catch (t) {
              console.error(t);
            }
          },
          k = async () => {
            try {
              let t = (
                await n.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/our-ventures?populate=*&sort=publishedAt:desc',
                  ),
                )
              ).data.data;
              P(t);
            } catch (t) {
              console.error(t);
            }
          },
          C = async () => {
            try {
              let t = (
                await n.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/blogs?populate=*&sort=publishedAt:desc&pagination[pageSize]=1000',
                  ),
                )
              ).data.data;
              y(t);
            } catch (t) {
              console.error(t);
            }
          },
          E = async () => {
            try {
              let t = (
                await n.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/blogs?populate=*&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3',
                  ),
                )
              ).data.data;
              _(t);
            } catch (t) {
              console.error(t);
            }
          },
          R = async () => {
            try {
              let t = (
                await n.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/portfolios?populate=*&sort=publishedAt:desc',
                  ),
                )
              ).data.data;
              v(t);
            } catch (t) {
              console.error(t);
            }
          },
          j = async () => {
            try {
              let t = (
                await n.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/departments?populate=*',
                  ),
                )
              ).data.data;
              Z(t);
            } catch (t) {
              console.error(t);
            }
          };
        return (
          (0, s.useEffect)(() => {
            C(), A(), N(), E(), k(), R(), j();
          }, []),
          (0, o.jsx)(c.Provider, {
            value: {
              allBlogs: g,
              setAllBlogs: y,
              getInvolvedForm: a,
              setGetInvolvedForm: r,
              loading: l,
              setLoading: p,
              faqs: d,
              setFaqs: h,
              foundationFaqs: f,
              setFoundationFaqs: m,
              latestBlogs: b,
              setLatestBlogs: _,
              ourVentures: S,
              setOurVentures: P,
              ourPortfolios: w,
              setOurPortfolios: v,
              showSuccessMessage: u,
              setShowSuccessMessage: i,
              departments: x,
              setDepartments: Z,
            },
            children: e,
          })
        );
      }
      function u() {
        return (0, s.useContext)(c);
      }
    },
    3385: function () {},
    1147: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Lexend_86777a', '__Lexend_Fallback_86777a'",
          fontStyle: 'normal',
        },
        className: '__className_86777a',
      };
    },
  },
  function (t) {
    t.O(0, [908, 971, 69, 744], function () {
      return t((t.s = 2104));
    }),
      (_N_E = t.O());
  },
]);
