(this.webpackJsonptest = this.webpackJsonptest || []).push([
  [0],
  {
    112: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        c = n(26),
        r = n.n(c),
        i = (n(85), n(147)),
        s = n(146),
        o = n(149),
        u = n(72),
        d = Object(o.a)(Object(u.a)()),
        l = n(30),
        j = n(10),
        b = n(145),
        p = 'TVSHOW_GET',
        O = 'TVSHOW_SET',
        h = n(65),
        x = n.n(h),
        f = n(33),
        v = n(148),
        m = n(151),
        g = n(115),
        w = n(150),
        y = n(141),
        S = n(140),
        k = n(137),
        T = Object(k.a)(function (e) {
          return {
            link: { textDecoration: 'none' },
            root: {
              width: '90%',
              display: 'flex',
              margin: ''.concat(e.spacing(2), 'px auto'),
              '&:hover': { backgroundColor: '#f0f0f0' },
            },
            details: { display: 'flex', flex: 2, flexDirection: 'column' },
            content: { padding: '0 8px' },
            cover: {
              flex: 1,
              width: 150,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            },
            title: { width: 200 },
            ellipsisMulti: {
              minHeight: e.spacing(4),
              '& > *': {
                overflow: 'hidden',
                'text-overflow': 'ellipsis',
                display: '-webkit-box',
                '-webkit-line-clamp': 2,
                '-webkit-box-orient': 'vertical',
              },
            },
          };
        }),
        E = n(138),
        H = n(3),
        N = Object(v.a)()(function (e) {
          var t,
            n,
            a,
            c,
            r,
            i = T();
          return Object(H.jsx)(E.a, {
            className: i.link,
            to: '/eposide/'.concat(e.data.id),
            children: Object(H.jsxs)(w.a, {
              className: i.root,
              children: [
                Object(H.jsx)(S.a, {
                  className: i.cover,
                  image: Object(v.b)('sm', e.width)
                    ? null === (t = e.data) ||
                      void 0 === t ||
                      null === (n = t.image) ||
                      void 0 === n
                      ? void 0
                      : n.original
                    : null === (a = e.data) ||
                      void 0 === a ||
                      null === (c = a.image) ||
                      void 0 === c
                    ? void 0
                    : c.medium,
                }),
                Object(H.jsx)('div', {
                  className: i.details,
                  children: Object(H.jsxs)(y.a, {
                    className: i.content,
                    children: [
                      Object(H.jsx)(g.a, {
                        component: 'h5',
                        variant: 'h5',
                        className: i.title,
                        noWrap: !0,
                        children: e.data.name,
                      }),
                      Object(H.jsx)(g.a, {
                        variant: 'subtitle1',
                        color: 'textSecondary',
                        children: Object(H.jsx)('div', {
                          className: i.ellipsisMulti,
                          dangerouslySetInnerHTML: {
                            __html:
                              null === (r = e.data) || void 0 === r
                                ? void 0
                                : r.summary,
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }),
        P = Object(v.a)()(function (e) {
          return Object(H.jsx)(m.a, {
            children: e.episodes.map(function (e) {
              return Object(H.jsx)(N, { data: e }, e.id);
            }),
          });
        }),
        V = n(142),
        _ = n(143),
        I = n(44),
        q = Object(k.a)(function (e) {
          return {
            root: Object(I.a)({ width: '100%' }, e.breakpoints.up('sm'), {
              position: 'sticky',
              top: 0,
            }),
            media: { backgroundSize: 'contain', height: '50vh' },
          };
        }),
        F = Object(v.a)()(function (e) {
          var t,
            n,
            a,
            c,
            r,
            i,
            s = q();
          return Object(H.jsx)(w.a, {
            className: s.root,
            children: Object(H.jsxs)(V.a, {
              children: [
                Object(H.jsx)(S.a, {
                  className: s.media,
                  image: Object(v.b)('sm', e.width)
                    ? null === (t = e.data) ||
                      void 0 === t ||
                      null === (n = t.image) ||
                      void 0 === n
                      ? void 0
                      : n.original
                    : null === (a = e.data) ||
                      void 0 === a ||
                      null === (c = a.image) ||
                      void 0 === c
                    ? void 0
                    : c.medium,
                }),
                Object(H.jsxs)(y.a, {
                  children: [
                    Object(H.jsx)(g.a, {
                      gutterBottom: !0,
                      variant: 'h5',
                      component: 'h2',
                      children:
                        null === (r = e.data) || void 0 === r ? void 0 : r.name,
                    }),
                    Object(H.jsx)(g.a, {
                      variant: 'body2',
                      color: 'textSecondary',
                      component: 'div',
                      children: Object(H.jsx)('div', {
                        dangerouslySetInnerHTML: {
                          __html:
                            null === (i = e.data) || void 0 === i
                              ? void 0
                              : i.summary,
                        },
                      }),
                    }),
                  ],
                }),
                e.actions ? Object(H.jsx)(_.a, { children: e.actions }) : null,
              ],
            }),
          });
        }),
        z = n(144),
        M = n(67),
        D = n.n(M),
        C = n(66),
        L = n.n(C),
        W = Object(f.b)(
          function (e) {
            return { TVShow: e.TVShow };
          },
          function (e) {
            return {
              getTVShow: function (t) {
                return e({ type: p, id: t });
              },
            };
          },
        )(function (e) {
          var t = Object(j.h)().id,
            n = Object(j.g)(),
            c = Object(a.useMemo)(
              function () {
                return Object(H.jsxs)(H.Fragment, {
                  children: [
                    Object(H.jsx)(z.a, {
                      onClick: function () {
                        return n.push('/'.concat(parseInt(t) - 1));
                      },
                      disabled: 1 === parseInt(t),
                      children: Object(H.jsx)(L.a, { fontSize: 'large' }),
                    }),
                    Object(H.jsx)(z.a, {
                      onClick: function () {
                        return n.push('/'.concat(parseInt(t) + 1));
                      },
                      children: Object(H.jsx)(D.a, { fontSize: 'large' }),
                    }),
                  ],
                });
              },
              [t],
            );
          return (
            Object(a.useEffect)(
              function () {
                e.getTVShow(t);
              },
              [t],
            ),
            Object(H.jsxs)(b.a, {
              container: !0,
              children: [
                Object(H.jsx)(b.a, {
                  item: !0,
                  sm: 6,
                  children: Object(H.jsx)(F, {
                    data: e.TVShow.data || {},
                    actions: c,
                  }),
                }),
                Object(H.jsx)(b.a, {
                  item: !0,
                  sm: 6,
                  xs: 12,
                  children: Object(H.jsx)(P, {
                    episodes: x.a.get(e.TVShow, 'data._embedded.episodes', []),
                  }),
                }),
              ],
            })
          );
        });
      function B() {
        return Object(H.jsx)(j.d, {
          children: Object(H.jsx)(j.b, {
            exact: !0,
            path: '/:id',
            children: Object(H.jsx)(W, {}),
          }),
        });
      }
      var G = 'EPISODE_GET',
        J = 'EPISODE_SET',
        R = Object(f.b)(
          function (e) {
            return { Episode: e.Episode };
          },
          function (e) {
            return {
              getEpisode: function (t) {
                return e({ type: G, id: t });
              },
            };
          },
        )(function (e) {
          var t = Object(j.h)().id;
          return (
            Object(a.useEffect)(function () {
              e.getEpisode(t);
            }, []),
            Object(H.jsx)(b.a, {
              container: !0,
              children: Object(H.jsx)(b.a, {
                item: !0,
                sm: 6,
                children: Object(H.jsx)(F, { data: e.Episode.data || {} }),
              }),
            })
          );
        });
      function U() {
        return Object(H.jsx)(j.d, {
          children: Object(H.jsx)(j.b, {
            exact: !0,
            path: '/eposide/:id',
            children: Object(H.jsx)(R, {}),
          }),
        });
      }
      function A() {
        return Object(H.jsxs)(l.a, {
          children: [
            Object(H.jsx)(j.a, { from: '/', to: '/1' }),
            Object(H.jsx)(B, {}),
            Object(H.jsx)(U, {}),
          ],
        });
      }
      var K = n(29),
        Q = n(73),
        X = n(16),
        Y = n(13),
        Z = n.n(Y),
        $ = n(68),
        ee = n(69),
        te = n(70),
        ne = n(71),
        ae = n.n(ne),
        ce = new ((function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (
              Object(ee.a)(this, e),
              (this.HTTPService = ae.a.create({
                baseURL: 'http://api.tvmaze.com/',
                timeout: 1e4,
              })),
              this.HTTPService.interceptors.request.use(
                t.requestSuccess || this.requestSuccess,
                t.requestFail || this.requestFail,
              ),
              this.HTTPService.interceptors.response.use(
                t.responseSuccess || this.responseSuccess,
                t.responseFail || this.responseFail,
              ),
              this.HTTPService
            );
          }
          return (
            Object(te.a)(e, [
              {
                key: 'requestSuccess',
                value: (function () {
                  var e = Object($.a)(
                    Z.a.mark(function e(t) {
                      return Z.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt('return', t);
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'requestFail',
                value: function (e) {
                  return Promise.reject(e);
                },
              },
              {
                key: 'responseSuccess',
                value: function (e) {
                  return e;
                },
              },
              {
                key: 'responseFail',
                value: function (e) {
                  return Promise.reject(e);
                },
              },
            ]),
            e
          );
        })())(),
        re = function () {
          return { status: 'none', isloading: !1, error: '' };
        },
        ie = function () {
          return { status: 'fetching', isloading: !0, error: '' };
        },
        se = function () {
          return { status: 'success', isloading: !1, error: '' };
        },
        oe = function (e) {
          return { status: 'failure', isloading: !1, error: e };
        },
        ue = ce,
        de = Object(X.a)({ data: {} }, re),
        le = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : de,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            a = t.payload;
          switch (n) {
            case O:
              return Object(X.a)(Object(X.a)({}, e), a);
            default:
              return e;
          }
        },
        je = Object(X.a)({ data: {} }, re),
        be = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : je,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            a = t.payload;
          switch (n) {
            case J:
              return Object(X.a)(Object(X.a)({}, e), a);
            default:
              return e;
          }
        },
        pe = Object(K.b)({ TVShow: le, Episode: be }),
        Oe = n(17),
        he = function (e) {
          return ue.get('shows/'.concat(e), { params: { embed: 'episodes' } });
        },
        xe = Z.a.mark(ve),
        fe = Z.a.mark(me);
      function ve(e) {
        var t, n;
        return Z.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (t = e.id),
                    (a.prev = 1),
                    (a.next = 4),
                    Object(Oe.c)({ type: O, payload: ie() })
                  );
                case 4:
                  return (a.next = 6), Object(Oe.b)(he, t);
                case 6:
                  return (
                    (n = a.sent),
                    (a.next = 9),
                    Object(Oe.c)({
                      type: O,
                      payload: Object(X.a)(
                        Object(X.a)({}, se()),
                        {},
                        { data: n.data },
                      ),
                    })
                  );
                case 9:
                  a.next = 15;
                  break;
                case 11:
                  return (
                    (a.prev = 11),
                    (a.t0 = a.catch(1)),
                    (a.next = 15),
                    Object(Oe.c)({ type: O, payload: oe(a.t0.message) })
                  );
                case 15:
                case 'end':
                  return a.stop();
              }
          },
          xe,
          null,
          [[1, 11]],
        );
      }
      function me() {
        return Z.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Oe.d)(p, ve);
              case 2:
              case 'end':
                return e.stop();
            }
        }, fe);
      }
      var ge = function (e) {
          return ue.get('episodes/'.concat(e));
        },
        we = Z.a.mark(Se),
        ye = Z.a.mark(ke);
      function Se(e) {
        var t, n;
        return Z.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (t = e.id),
                    (a.prev = 1),
                    (a.next = 4),
                    Object(Oe.c)({ type: J, payload: ie() })
                  );
                case 4:
                  return (a.next = 6), Object(Oe.b)(ge, t);
                case 6:
                  return (
                    (n = a.sent),
                    (a.next = 9),
                    Object(Oe.c)({
                      type: J,
                      payload: Object(X.a)(
                        Object(X.a)({}, se()),
                        {},
                        { data: n.data },
                      ),
                    })
                  );
                case 9:
                  a.next = 15;
                  break;
                case 11:
                  return (
                    (a.prev = 11),
                    (a.t0 = a.catch(1)),
                    (a.next = 15),
                    Object(Oe.c)({ type: J, payload: oe(a.t0.message) })
                  );
                case 15:
                case 'end':
                  return a.stop();
              }
          },
          we,
          null,
          [[1, 11]],
        );
      }
      function ke() {
        return Z.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Oe.d)(G, Se);
              case 2:
              case 'end':
                return e.stop();
            }
        }, ye);
      }
      var Te = Z.a.mark(Ee);
      function Ee() {
        return Z.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Oe.a)([me(), ke()]);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Te);
      }
      var He = Object(Q.a)(),
        Ne = [He],
        Pe = Object(K.d)(pe, K.a.apply(void 0, Ne));
      He.run(Ee);
      var Ve = Pe;
      r.a.render(
        Object(H.jsx)(f.a, {
          store: Ve,
          children: Object(H.jsxs)(s.a, {
            theme: d,
            children: [Object(H.jsx)(i.a, {}), Object(H.jsx)(A, {})],
          }),
        }),
        document.getElementById('root'),
      );
    },
    85: function (e, t, n) {},
  },
  [[112, 1, 2]],
]);
//# sourceMappingURL=main.efa9d81c.chunk.js.map
