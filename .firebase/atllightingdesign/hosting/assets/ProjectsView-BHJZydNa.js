import {
  d as _,
  r as n,
  c as s,
  a as t,
  e as C,
  t as i,
  n as u,
  f,
  w as p,
  T as x,
  F as d,
  b as g,
  o,
  g as w
} from './index-BBy3U1eA.js'
const b = '/ui/dropdown.svg',
  k = { class: 'bg-black text-white font-sans' },
  A = { class: 'py-8' },
  S = { class: 'flex flex-row items-center justify-center pt-[5%] gap-x-4 relative' },
  G = { class: 'relative group' },
  I = {
    key: 0,
    class: 'absolute left-0 w-full bg-gray-900 rounded-md shadow-lg z-10 overflow-hidden'
  },
  T = { class: 'py-2' },
  Z = ['onClick'],
  V = { class: 'w-[90%] justify-center mx-auto' },
  L = { class: 'grid grid-cols-1 md:grid-cols-3 gap-12' },
  N = ['src', 'alt'],
  B = { class: 'flex flex-row justify-between gap-x-fit' },
  D = { class: 'text-2xl text-white mb-2' },
  H = { class: 'text-white text-2xl' },
  j = ['innerHTML'],
  E = _({
    __name: 'ProjectsView',
    setup(z) {
      const h = n([
          {
            title: 'Guanyin Altar',
            year: 2024,
            location: 'ZhouShan City, China',
            image:
              'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F1.jpg?alt=media'
          },
          {
            title: 'Guanyin Altar',
            year: 2024,
            location: 'ZhouShan City, China',
            image:
              'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F2.jpg?alt=media'
          },
          {
            title: 'Guanyin Altar',
            year: 2024,
            location: 'ZhouShan City, China',
            image:
              'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media'
          },
          {
            title: 'Guanyin Altar',
            year: 2024,
            location: 'ZhouShan City, China',
            image:
              'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F1.jpg?alt=media'
          },
          {
            title: 'Guanyin Altar',
            year: 2024,
            location: 'ZhouShan City, China',
            image:
              'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F2.jpg?alt=media'
          },
          {
            title: 'Guanyin Altar',
            year: 2024,
            location: 'ZhouShan City, China',
            image:
              'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media'
          }
        ]),
        a = n(!1),
        l = n('Arts & Culture'),
        m = ['Arts & Culture', 'City & Landscape', 'Commercial', 'Hospitality'],
        y = () => {
          a.value = !a.value
        },
        v = (r) => {
          ;(l.value = r), (a.value = !1)
        }
      return (r, c) => (
        o(),
        s('div', k, [
          t('div', A, [
            t('div', S, [
              t('div', G, [
                t(
                  'button',
                  {
                    onClick: y,
                    class:
                      'flex items-center text-5xl hover:text-gray-300 transition-colors duration-200'
                  },
                  [
                    C(i(l.value) + ' ', 1),
                    t(
                      'img',
                      {
                        src: b,
                        class: u([
                          'object-contain ml-4 transition-transform duration-200',
                          { 'transform rotate-180': a.value }
                        ]),
                        style: { height: '20px', marginTop: '10px' }
                      },
                      null,
                      2
                    )
                  ]
                ),
                f(
                  x,
                  {
                    'enter-active-class': 'transition ease-out duration-200',
                    'enter-from-class': 'opacity-0 translate-y-1',
                    'enter-to-class': 'opacity-100 translate-y-0',
                    'leave-active-class': 'transition ease-in duration-150',
                    'leave-from-class': 'opacity-100 translate-y-0',
                    'leave-to-class': 'opacity-0 translate-y-1'
                  },
                  {
                    default: p(() => [
                      a.value
                        ? (o(),
                          s('div', I, [
                            t('ul', T, [
                              (o(),
                              s(
                                d,
                                null,
                                g(m, (e) =>
                                  t(
                                    'li',
                                    {
                                      key: e,
                                      onClick: (F) => v(e),
                                      class: u([
                                        'px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-200 text-lg',
                                        { 'bg-gray-800': e === l.value }
                                      ])
                                    },
                                    i(e),
                                    11,
                                    Z
                                  )
                                ),
                                64
                              ))
                            ])
                          ]))
                        : w('v-if', !0)
                    ]),
                    _: 1
                  }
                )
              ])
            ]),
            c[0] ||
              (c[0] = t('hr', { class: 'border-t-2 border-white mt-6 mx-[5%] mb-10' }, null, -1)),
            t('div', V, [
              t('div', L, [
                (o(!0),
                s(
                  d,
                  null,
                  g(
                    h.value,
                    (e) => (
                      o(),
                      s('div', { key: e.title, class: 'flex flex-col' }, [
                        t(
                          'img',
                          { src: e.image, alt: e.title, class: 'w-full h-64 object-cover mb-4' },
                          null,
                          8,
                          N
                        ),
                        t('div', B, [t('h2', D, i(e.title), 1), t('p', H, i(e.year), 1)]),
                        t('p', { class: 'mb-4', innerHTML: e.location }, null, 8, j)
                      ])
                    )
                  ),
                  128
                ))
              ])
            ])
          ])
        ])
      )
    }
  })
export { E as default }
