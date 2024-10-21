import { d, r as u, c as e, a as t, F as r, b as n, o as s, t as a } from './index-BBy3U1eA.js'
const f = { class: 'bg-black text-white font-sans min-h-screen' },
  g = { class: 'py-8' },
  h = { class: 'w-[90%] justify-center mx-auto' },
  m = { class: 'w-3/5 h-full overflow-hidden' },
  x = ['src'],
  _ = { class: 'flex flex-col w-2/5 pl-4 justify-center ml-[5%]' },
  w = { class: 'text-2xl text-white mb-2' },
  v = { class: 'text-white' },
  C = d({
    __name: 'AwardsView',
    setup(p) {
      const c = u([
        {
          title: 'Guanyin Altar',
          image:
            'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media',
          awards: [
            '1st Prize of Outdoor Lighting Design – CIES 2022',
            '1st Prize of Outdoor Lighting Design – CIES 2022',
            '1st Prize of Outdoor Lighting Design – CIES 2022'
          ]
        },
        {
          title: 'Guanyin Altar',
          image:
            'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media',
          awards: ['1st Prize of Outdoor Lighting Design – CIES 2022']
        }
      ])
      return (b, i) => (
        s(),
        e('div', f, [
          t('div', g, [
            i[0] ||
              (i[0] = t(
                'div',
                { class: 'flex flex-row items-center justify-center pt-[5%] gap-x-4' },
                [t('h1', { class: 'text-5xl text-center' }, 'Awards')],
                -1
              )),
            i[1] || (i[1] = t('hr', { class: 'border-t-2 border-white mt-6 mx-[5%]' }, null, -1)),
            t('div', h, [
              (s(!0),
              e(
                r,
                null,
                n(
                  c.value,
                  (o) => (
                    s(),
                    e('div', { key: o.title, class: 'flex flex-row w-full h-[30vh] mb-4 mt-10' }, [
                      t('div', m, [
                        t(
                          'img',
                          { src: o.image, class: 'w-full h-full object-cover object-center' },
                          null,
                          8,
                          x
                        )
                      ]),
                      t('div', _, [
                        t('div', w, a(o.title), 1),
                        t('div', v, [
                          (s(!0),
                          e(
                            r,
                            null,
                            n(
                              o.awards,
                              (l) => (s(), e('div', { key: l, class: 'text-white' }, a(l), 1))
                            ),
                            128
                          ))
                        ])
                      ])
                    ])
                  )
                ),
                128
              ))
            ])
          ])
        ])
      )
    }
  })
export { C as default }