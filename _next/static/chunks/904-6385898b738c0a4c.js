'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [904],
  {
    125: function (e, t, a) {
      var n = a(7437),
        l = a(1128),
        r = a(2442),
        s = a(9880),
        o = a(5),
        i = a(9491),
        c = a(5201),
        d = a(7907),
        u = a(2265),
        p = a(784),
        m = a(557),
        h = a(7908);
      t.Z = () => {
        let { setGetInvolvedForm: e, setShowSuccessMessage: t } = (0,
          c.useAppContext)(),
          a = (0, d.usePathname)(),
          [x, f] = (0, u.useState)({
            dateSubmitted: '',
            name: '',
            email: '',
            phone: '',
            company: '',
            role: '',
            enquiry: '',
            message: '',
          }),
          [b, g] = (0, u.useState)(!1),
          v = (e) => {
            let { name: t, value: a } = e.target;
            f({ ...x, [t]: a });
          },
          y = () => {
            e(!1);
          },
          w = async (e) => {
            e.preventDefault(), g(!0);
            let n = new Date().toISOString().split('T')[0],
              l = {
                ...x,
                from_name: x.name,
                to_name: 'Forcythe',
                dateSubmitted: n,
              };
            try {
              await m.ZP.send(
                'service_5dy2chq',
                '/studio' === a
                  ? 'template_4aap3ek'
                  : '/foundation' === a
                    ? 'template_4aap3ek'
                    : 'defaultTemplateId',
                l,
                'HjBQ0aZo0GRHQfisd',
              ),
                console.log('Email sent successfully.'),
                await h.Z.post(
                  '/studio' === a
                    ? 'https://sheetdb.io/api/v1/vz2j00urfcl67'
                    : 'https://sheetdb.io/api/v1/474qbjb1lkh5e',
                  { data: l },
                ),
                console.log('Data sent to SheetDB successfully.'),
                g(!1),
                y(),
                t(!0);
            } catch (e) {
              console.error('Submission Error: ', e),
                g(!1),
                alert('An error occurred, please try again.');
            }
          };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(i.Z, {
            content: (0, n.jsxs)('div', {
              style: {
                backgroundColor: 'rgba(1, 12, 24, 1)',
                background:
                  'linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgba(7, 22, 38, 1) 85%)',
              },
              className:
                'relative rounded-3xl p-5 md:p-8 lg:p-10 w-[95vw] md:w-[85vw] lg:w-[70vw]',
              children: [
                (0, n.jsx)('button', {
                  onClick: () => e(!1),
                  className: 'absolute top-5 right-5 md:top-8 md:right-8',
                  children: (0, n.jsx)(p.FU5, { className: 'text-3xl' }),
                }),
                (0, n.jsxs)('form', {
                  onSubmit: w,
                  children: [
                    (0, n.jsxs)('div', {
                      className:
                        'grid grid-cols-1 md:grid-cols-2 pt-3 gap-x-5 lg:gap-x-8 gap-y-5 mb-5',
                      children: [
                        (0, n.jsx)(r.Z, {
                          label: 'Your Name',
                          labelFor: 'name',
                          attributes: {
                            required: !0,
                            placeholder: 'Ex. Fred Van Vleet',
                            type: 'text',
                            name: 'name',
                            value: x.name,
                            onChange: v,
                          },
                        }),
                        (0, n.jsx)(r.Z, {
                          label: 'Email',
                          labelFor: 'email',
                          attributes: {
                            required: !0,
                            placeholder: 'Ex. fred@example.com',
                            type: 'email',
                            name: 'email',
                            value: x.email,
                            onChange: v,
                          },
                        }),
                        (0, n.jsx)(r.Z, {
                          label: 'Phone',
                          labelFor: 'phone',
                          attributes: {
                            required: !0,
                            placeholder: '+234 0 1234 567 891',
                            type: 'tel',
                            name: 'phone',
                            value: x.phone,
                            onChange: v,
                          },
                        }),
                        (0, n.jsx)(r.Z, {
                          label: 'Company/Organization (Optional)',
                          labelFor: 'company',
                          attributes: {
                            required: !0,
                            placeholder: 'Ex. Forcythe Inc.',
                            type: 'text',
                            name: 'company',
                            value: x.company,
                            onChange: v,
                          },
                        }),
                        (0, n.jsx)(r.Z, {
                          label: 'Role/Position (Optional)',
                          labelFor: 'role',
                          attributes: {
                            required: !0,
                            placeholder: 'Ex. Head of Innovation',
                            type: 'text',
                            name: 'role',
                            value: x.role,
                            onChange: v,
                          },
                        }),
                        '/studio' === a
                          ? (0, n.jsx)(s.Z, {
                              label: 'Type of Inquiry',
                              labelFor: 'enquiry',
                              placeholder: 'Options',
                              options: [
                                'General enquiry',
                                'Investment',
                                'Partnership',
                                'Funding',
                              ],
                              attributes: {
                                name: 'enquiry',
                                value: x.enquiry,
                                onChange: v,
                              },
                            })
                          : '/foundation' === a
                            ? (0, n.jsx)(s.Z, {
                                label: 'Type of Inquiry',
                                labelFor: 'enquiry',
                                placeholder: 'Options',
                                options: [
                                  'General enquiry',
                                  'Sponsorship',
                                  'Collaboration',
                                ],
                                attributes: {
                                  name: 'enquiry',
                                  value: x.enquiry,
                                  onChange: v,
                                },
                              })
                            : null,
                        (0, n.jsx)('div', {
                          className: 'md:col-span-2',
                          children: (0, n.jsx)(o.Z, {
                            label: 'Message/Inquiry',
                            labelFor: 'message',
                            attributes: {
                              placeholder:
                                'I’d like to discuss a new project...',
                              name: 'message',
                              value: x.message,
                              onChange: v,
                            },
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'flex justify-end mt-5',
                      children: (0, n.jsx)(l.Z, {
                        buttonText: b ? 'Please wait...' : 'Submit',
                        play: !0,
                        buttonType: 'submit',
                        attributes: { disabled: b },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    1672: function (e, t, a) {
      var n = a(7437),
        l = a(9491),
        r = a(5201),
        s = a(2265);
      t.Z = () => {
        let { showSuccessMessage: e, setShowSuccessMessage: t } = (0,
        r.useAppContext)();
        return ((0, s.useEffect)(() => {
          if (e) {
            let e = setTimeout(() => {
              t(!1);
            }, 3e3);
            return () => clearTimeout(e);
          }
        }, [e, t]),
        e)
          ? (0, n.jsx)(l.Z, {
              content: (0, n.jsx)('div', {
                style: {
                  backgroundColor: 'rgba(3, 5, 22, 1)',
                  background:
                    'linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgba(7, 22, 38, 1) 85%)',
                },
                className: 'py-28 px-10 w-[400px] max-sm:w-[75vw]',
                children: (0, n.jsxs)('div', {
                  className: 'text-center',
                  children: [
                    (0, n.jsx)('h2', {
                      className: 'text-4xl text-accent mb-3',
                      children: 'Thank You!',
                    }),
                    (0, n.jsx)('p', {
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
    4550: function (e, t, a) {
      var n = a(7437),
        l = a(703);
      a(2265);
      var r = a(44);
      t.Z = (e) => {
        let {
          background: t,
          svgBackground: a,
          title: s,
          text: o,
          svg: i = !0,
          bigTitle: c,
        } = e;
        return (0, n.jsxs)('div', {
          style: {
            backgroundColor: 'rgb(3,5,22)',
            background: 'linear-gradient(0deg, rgba(3,5,22,1) 21%, '.concat(
              t,
              ' 70%)',
            ),
          },
          className:
            'w-full bg-[#030516] rounded-[1.8rem] p-5 md:p-8 mx-auto hover:shadow-sm hover:shadow-white transition-all duration-500',
          children: [
            i &&
              (0, n.jsx)('div', {
                className: 'w-fit p-2 rounded-md mb-5 '.concat(a),
                children: (0, n.jsx)(l.default, {
                  src: '/images/layers-three.svg',
                  alt: 'layers_three',
                  width: 30,
                  height: 30,
                }),
              }),
            (0, n.jsx)(r.F, {
              words: s,
              innerClassName: ''.concat(
                c ? 'text-3xl' : 'text-2xl',
                ' font-medium mb-5 text-white',
              ),
            }),
            (0, n.jsx)(r.F, {
              words: o,
              innerClassName: 'text-darkGrey text-lg leading-7 font-[300]',
            }),
          ],
        });
      };
    },
    2442: function (e, t, a) {
      var n = a(6093),
        l = a(7437),
        r = a(703),
        s = a(2265),
        o = a(6696),
        i = a(1715),
        c = a(3430);
      function d() {
        let e = (0, n._)([
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
        let e = (0, n._)([
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
            attributes: n,
            disabled: p,
            searchIcon: m,
            extraNodeElement: h,
            error: x,
            file: f,
          } = e,
          b = (0, s.useRef)(null),
          [g, v] = (0, s.useState)(''),
          [y, w] = s.useState(!1),
          j = (0, o.c)(0),
          N = (0, o.c)(0);
        function k(e) {
          let { currentTarget: t, clientX: a, clientY: n } = e,
            { left: l, top: r } = t.getBoundingClientRect();
          j.set(a - l), N.set(n - r);
        }
        return (0, l.jsxs)('div', {
          className: 'w-full '.concat(p && 'opacity-80'),
          children: [
            t &&
              (0, l.jsx)('label', {
                htmlFor: a,
                className: 'text-sm text-white font-normal capitalize',
                children: t,
              }),
            f
              ? (0, l.jsxs)(i.E.div, {
                  style: {
                    background: (0, c.Y)(d(), y ? '100px' : '0px', j, N),
                    borderRadius: '9999px',
                  },
                  onMouseMove: k,
                  onMouseEnter: () => w(!0),
                  onMouseLeave: () => w(!1),
                  className:
                    'relative w-full mt-2 overflow-hidden rounded-full',
                  children: [
                    (0, l.jsx)('input', {
                      ref: b,
                      className: 'hidden',
                      name: a,
                      id: a,
                      type: 'file',
                      onChange: (e) => {
                        e.target.files && e.target.files.length > 0
                          ? v(e.target.files[0].name)
                          : v('');
                      },
                      ...n,
                    }),
                    (0, l.jsx)('div', {
                      onClick: () => {
                        b.current && b.current.click();
                      },
                      className:
                        'w-full cursor-pointer py-3 md:py-3.5 px-5 rounded-full border border-white bg-transparent text-base font-normal placeholder:text-base text-[#79767D] outline-none overflow-hidden',
                      children: (0, l.jsx)('span', {
                        className:
                          'max-w-[90%] overflow-hidden whitespace-nowrap text-nowrap text-ellipsis',
                        children: g || 'Choose File',
                      }),
                    }),
                  ],
                })
              : (0, l.jsxs)(i.E.div, {
                  style: {
                    background: (0, c.Y)(u(), y ? '100px' : '0px', j, N),
                    borderRadius: '9999px',
                  },
                  onMouseMove: k,
                  onMouseEnter: () => w(!0),
                  onMouseLeave: () => w(!1),
                  className:
                    'relative w-full mt-2 overflow-hidden rounded-full',
                  children: [
                    (0, l.jsx)('input', {
                      ...n,
                      className:
                        'w-full py-3 md:py-3.5 px-5 rounded-full border border-white bg-transparent\n                        text-base font-normal placeholder:text-base placeholder:text-[#79767D] outline-none shadow-input file:border-0 file:bg-transparent \n          file:text-sm file:font-medium dark:placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400\n           disabled:cursor-not-allowed disabled:opacity-50\n           group-hover/input:shadow-none transition duration-500 '.concat(
                          m && 'pr-14',
                          '\n                    ',
                        ),
                      disabled: p,
                    }),
                    m &&
                      (0, l.jsx)('div', {
                        className:
                          'bg-white p-3.5 absolute right-0 top-0 rounded-e-full h-full flex justify-center items-center',
                        children: (0, l.jsx)(r.default, {
                          width: 20,
                          height: 20,
                          src: '/images/search.svg',
                          alt: 'search',
                        }),
                      }),
                  ],
                }),
            x
              ? (0, l.jsx)('p', {
                  className: 'text-[11px] text-[#F50449] pl-4 mt-[2px]',
                  children: x,
                })
              : (0, l.jsx)('div', { className: 'pl-4 mt-[2px]', children: h }),
          ],
        });
      };
    },
    9880: function (e, t, a) {
      var n = a(7437),
        l = a(703);
      t.Z = (e) => {
        let {
          label: t,
          labelFor: a,
          placeholder: r,
          attributes: s,
          options: o,
          disabled: i,
          error: c,
        } = e;
        return (0, n.jsxs)('div', {
          className: 'Select w-full '.concat(i && 'opacity-80'),
          children: [
            (0, n.jsx)('label', {
              htmlFor: a,
              className: 'text-sm text-white font-normal capitalize',
              children: t,
            }),
            (0, n.jsxs)('div', {
              className: 'relative w-full mt-2',
              children: [
                (0, n.jsxs)('select', {
                  ...s,
                  className:
                    'w-full relative z-10 py-3 md:py-3.5 px-5 pr-14 flex items-center justify-between capitalize\n                    focus:outline-none rounded-full bg-transparent border border-white text-base '.concat(
                      !i && 'cursor-pointer',
                      ' \n                ',
                    ),
                  disabled: i,
                  children: [
                    (0, n.jsx)('option', { value: '', children: r }),
                    o &&
                      o.map((e, t) =>
                        (0, n.jsx)('option', { value: e, children: e }, t),
                      ),
                  ],
                }),
                (0, n.jsx)('div', {
                  className:
                    'bg-white p-3.5 w-fit h-full absolute right-0 top-0 rounded-e-full flex items-center z-0',
                  children: (0, n.jsx)(l.default, {
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
              (0, n.jsx)('div', {
                className: 'text-[11px] text-[#F50449] pl-4 mt-[2px]',
                children: c,
              }),
          ],
        });
      };
    },
    5: function (e, t, a) {
      var n = a(6093),
        l = a(7437),
        r = a(6696),
        s = a(1715),
        o = a(3430),
        i = a(2265);
      function c() {
        let e = (0, n._)([
          '\n      radial-gradient(\n        ',
          ' circle at ',
          'px ',
          'px,\n        var(--blue-500),\n        transparent 80%\n      )\n    ',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      t.Z = (e) => {
        let { label: t, labelFor: a, attributes: n, error: d, disabled: u } = e,
          [p, m] = i.useState(!1),
          h = (0, r.c)(0),
          x = (0, r.c)(0);
        return (0, l.jsxs)('div', {
          className: 'w-full h-full '.concat(u && 'opacity-80', ' '),
          children: [
            (0, l.jsxs)('div', {
              className: 'flex h-full flex-col justify-between',
              children: [
                t &&
                  (0, l.jsx)('label', {
                    htmlFor: a,
                    className: 'text-sm text-white font-normal',
                    children: t,
                  }),
                (0, l.jsx)(s.E.div, {
                  style: {
                    background: (0, o.Y)(c(), p ? '100px' : '0px', h, x),
                    borderRadius: '15px',
                  },
                  onMouseMove: function (e) {
                    let { currentTarget: t, clientX: a, clientY: n } = e,
                      { left: l, top: r } = t.getBoundingClientRect();
                    h.set(a - l), x.set(n - r);
                  },
                  onMouseEnter: () => m(!0),
                  onMouseLeave: () => m(!1),
                  className:
                    'relative w-full mt-2 overflow-hidden rounded-[15px] h-fit',
                  children: (0, l.jsx)('textarea', {
                    ...n,
                    disabled: u,
                    className: 'w-full h-full min-h-[150px] '.concat(
                      !u && 'max-h-[200px]',
                      ' resize-none py-3.5 px-5 border-white bg-transparent\n                border rounded-[15px] text-base font-normal placeholder:text-base placeholder:text-[#79767D] outline-none shadow-input file:border-0 file:bg-transparent \n          file:text-sm file:font-medium dark:placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400\n           disabled:cursor-not-allowed disabled:opacity-50\n           group-hover/input:shadow-none transition duration-500',
                    ),
                  }),
                }),
              ],
            }),
            d &&
              (0, l.jsx)('div', {
                className:
                  'text-[11px] text-[#F50449] pl-4 relative bottom-[2px]',
                children: d,
              }),
          ],
        });
      };
    },
    44: function (e, t, a) {
      a.d(t, {
        F: function () {
          return d;
        },
      });
      var n = a(7437),
        l = a(2265),
        r = a(3577),
        s = a(9159),
        o = a(6990),
        i = a(1715),
        c = a(6135);
      let d = (e) => {
        let {
            words: t,
            className: a,
            innerClassName: d,
            delay: u = 0,
            wordStyles: p = [],
          } = e,
          [m, h] = (0, r.H)(),
          [x, f] = (0, l.useState)(!1),
          b = (0, l.useRef)(null),
          g = (0, s.Y)(b);
        (0, l.useEffect)(() => {
          g &&
            !x &&
            'function' == typeof h &&
            (u > 0
              ? setTimeout(() => {
                  v();
                }, 1e3 * u)
              : v());
        }, [g, x, h, u]);
        let v = () => {
            h('span', { opacity: 1 }, { duration: 2, delay: (0, o.E)(0.2) }),
              f(!0);
          },
          y = t.split(' ');
        return (0, n.jsx)('div', {
          className: (0, c.cn)('', a),
          ref: b,
          children: (0, n.jsx)('div', {
            className: '',
            children: (0, n.jsx)('p', {
              className:
                d || 'text-darkGrey text-base md:text-lg mb-8 leading-7',
              children: (0, n.jsx)(i.E.div, {
                ref: m,
                children: y.map((e, t) => {
                  let a = p.find((t) => t.word === e),
                    l = a ? a.classes : '';
                  return (0, n.jsxs)(
                    i.E.span,
                    { className: 'opacity-0 '.concat(l), children: [e, ' '] },
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
      var n = a(7437),
        l = a(1128);
      a(2265),
        (t.Z = () =>
          (0, n.jsx)('div', {
            style: {
              backgroundColor: 'rgb(7,22,38)',
              background:
                'linear-gradient(0deg, rgba(7,22,38,1) 20%, rgba(3,5,22,1) 69%)',
            },
            className:
              'section-padding py-10 text-center bg-[071626] bg-opacity-0',
            children: (0, n.jsxs)('div', {
              className: 'max-w-[45rem] mx-auto',
              children: [
                (0, n.jsxs)('h2', {
                  className:
                    'text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6',
                  children: [
                    (0, n.jsx)('span', {
                      className: 'text-accent',
                      children: 'Ready to Scale?',
                    }),
                    (0, n.jsx)('br', {}),
                    ' Join successful brands that chose us as their',
                    (0, n.jsx)('span', {
                      className: 'text-accent',
                      children: ' growth accelerator',
                    }),
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'w-fit mx-auto mb-5',
                  children: (0, n.jsx)(l.Z, {
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
      var n = a(7437),
        l = a(2265);
      t.Z = (e) => {
        let { popupRef: t, content: a } = e;
        return (
          (0, l.useEffect)(
            () => (
              (document.body.style.overflow = 'hidden'),
              () => {
                document.body.style.overflow = 'auto';
              }
            ),
            [],
          ),
          (0, n.jsx)('div', {
            ref: t,
            className:
              'fixed inset-0 z-[999] w-screen full-screen bg-[#030516] bg-opacity-70  grid place-content-center max-sm:flex items-center justify-center overflow-hidden py-10',
            children: (0, n.jsx)('div', {
              className:
                'hide-scrollbar overflow-x-scroll max-h-[85vh] h-fit bg-primaryBackground rounded-3xl border-2 border-[#071626] shadow-sm shadow-[#B3D0F24D]',
              children: a,
            }),
          })
        );
      };
    },
    5201: function (e, t, a) {
      a.r(t),
        a.d(t, {
          AppWrapper: function () {
            return o;
          },
          useAppContext: function () {
            return i;
          },
        });
      var n = a(7437),
        l = a(7908),
        r = a(2265);
      let s = (0, r.createContext)(null);
      function o(e) {
        let { children: t } = e,
          [a, o] = (0, r.useState)(!1),
          [i, c] = (0, r.useState)(!1),
          [d, u] = (0, r.useState)(!0),
          [p, m] = (0, r.useState)([]),
          [h, x] = (0, r.useState)([]),
          [f, b] = (0, r.useState)([]),
          [g, v] = (0, r.useState)([]),
          [y, w] = (0, r.useState)([]),
          [j, N] = (0, r.useState)([]),
          [k, C] = (0, r.useState)([]),
          Z = async () => {
            try {
              let e = await l.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/faqs'),
              );
              m(e.data.data);
            } catch (e) {
              console.error(e);
            }
          },
          S = async () => {
            try {
              let e = await l.Z.get(
                ''.concat('https://cms.forcythe.com/api', '/foundation-faqs'),
              );
              x(e.data.data);
            } catch (e) {
              console.error(e);
            }
          },
          F = async () => {
            try {
              let e = (
                await l.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/our-ventures?populate=*&sort=publishedAt:desc',
                  ),
                )
              ).data.data;
              w(e);
            } catch (e) {
              console.error(e);
            }
          },
          E = async () => {
            try {
              let e = (
                await l.Z.get(
                  ''.concat(
                    'https://cms.forcythe.com/api',
                    '/blogs?populate=*&sort=publishedAt:desc&pagination[pageSize]=1000',
                  ),
                )
              ).data.data;
              b(e);
            } catch (e) {
              console.error(e);
            }
          },
          q = async () => {
            try {
              let e = (
                await l.Z.get(
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
          M = async () => {
            try {
              let e = (
                await l.Z.get(
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
            E(), Z(), S(), q(), F(), M(), _();
          }, []),
          (0, n.jsx)(s.Provider, {
            value: {
              allBlogs: f,
              setAllBlogs: b,
              getInvolvedForm: a,
              setGetInvolvedForm: o,
              loading: d,
              setLoading: u,
              faqs: p,
              setFaqs: m,
              foundationFaqs: h,
              setFoundationFaqs: x,
              latestBlogs: g,
              setLatestBlogs: v,
              ourVentures: y,
              setOurVentures: w,
              ourPortfolios: j,
              setOurPortfolios: N,
              showSuccessMessage: i,
              setShowSuccessMessage: c,
              departments: k,
              setDepartments: C,
            },
            children: t,
          })
        );
      }
      function i() {
        return (0, r.useContext)(s);
      }
    },
  },
]);
