import { d as l, r as h, o as n, c as s, a as e, F as c, b as d, t as a } from './index-BF3hYO0G.js'
const r = { class: 'bg-black text-white font-sans min-h-screen' },
  g = { class: 'py-8' },
  u = { class: 'w-[90%] justify-center mx-auto gap-y-10' },
  m = { class: 'w-2/5 h-full overflow-hidden' },
  f = ['src'],
  x = { class: 'w-3/5 flex flex-col items-start mx-[5%] my-auto' },
  w = { class: 'text-white text-3xl mb-2' },
  p = { class: 'text-white mb-6' },
  v = { class: 'text-white line-clamp-2' },
  A = l({
    __name: 'NewsView',
    setup(b) {
      const o = h([
        {
          title: 'ATL Shanghai New Office',
          image: '/Contact/shanghai.svg',
          date: 'Jun 28th, 2020',
          text: 'ATL Shanghai moved into an iconic building located in the Urban Best Practice Area on June 28, 2020. As a green building showcase, the new office building is the Alsace Pavilion during Expo Shanghai 2010. Equipped with a water curtained solar panel on the south facade, the building effectively utilizes green energy upon the changes of outdoor temperature and sunlight intensity. Inside the building, a Human Centric Lighting system demonstrates the cutting-edge lighting technology to maximize energy saving and achieve the highest standard of Well Building V2.'
        },
        {
          title: 'ATL Shanghai New Office',
          image: '/Contact/shanghai.svg',
          date: 'Jun 28th, 2020',
          text: 'ATL Shanghai moved into an iconic building located in the Urban Best Practice Area on June 28, 2020. As a green building showcase, the new office building is the Alsace Pavilion during Expo Shanghai 2010. Equipped with a water curtained solar panel on the south facade, the building effectively utilizes green energy upon the changes of outdoor temperature and sunlight intensity. Inside the building, a Human Centric Lighting system demonstrates the cutting-edge lighting technology to maximize energy saving and achieve the highest standard of Well Building V2.'
        }
      ])
      return (_, i) => (
        n(),
        s('div', r, [
          e('div', g, [
            i[0] ||
              (i[0] = e(
                'div',
                { class: 'flex flex-row items-center justify-center pt-[5%] gap-x-4' },
                [e('h1', { class: 'text-5xl text-center' }, 'News')],
                -1
              )),
            i[1] || (i[1] = e('hr', { class: 'border-t-2 border-white mt-6 mx-[5%]' }, null, -1)),
            e('div', u, [
              (n(!0),
              s(
                c,
                null,
                d(
                  o.value,
                  (t) => (
                    n(),
                    s(
                      'div',
                      {
                        key: t.title,
                        class: 'flex flex-row h-[30vh] p-2 border-white border-2 mt-10'
                      },
                      [
                        e('div', m, [
                          e(
                            'img',
                            { src: t.image, class: 'w-full h-full object-cover object-center' },
                            null,
                            8,
                            f
                          )
                        ]),
                        e('div', x, [
                          e('div', w, a(t.title), 1),
                          e('div', p, a(t.date), 1),
                          e('div', v, a(t.text), 1)
                        ])
                      ]
                    )
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
export { A as default }
