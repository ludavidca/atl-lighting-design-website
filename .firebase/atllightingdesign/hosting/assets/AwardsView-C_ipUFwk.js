import { d, r as u, o as e, c as s, a as t, F as l, b as n, t as a } from './index-BF3hYO0G.js'
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
          image: '/CarouselImages/3.svg',
          awards: [
            '1st Prize of Outdoor Lighting Design – CIES 2022',
            '1st Prize of Outdoor Lighting Design – CIES 2022',
            '1st Prize of Outdoor Lighting Design – CIES 2022'
          ]
        },
        {
          title: 'Guanyin Altar',
          image: '/CarouselImages/3.svg',
          awards: ['1st Prize of Outdoor Lighting Design – CIES 2022']
        }
      ])
      return (b, i) => (
        e(),
        s('div', f, [
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
              (e(!0),
              s(
                l,
                null,
                n(
                  c.value,
                  (r) => (
                    e(),
                    s('div', { key: r.title, class: 'flex flex-row w-full h-[30vh] mb-4 mt-10' }, [
                      t('div', m, [
                        t(
                          'img',
                          { src: r.image, class: 'w-full h-full object-cover object-center' },
                          null,
                          8,
                          x
                        )
                      ]),
                      t('div', _, [
                        t('div', w, a(r.title), 1),
                        t('div', v, [
                          (e(!0),
                          s(
                            l,
                            null,
                            n(
                              r.awards,
                              (o) => (e(), s('div', { key: o, class: 'text-white' }, a(o), 1))
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
