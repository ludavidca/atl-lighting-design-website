import { d as o, r, o as a, c as i, a as s, F as c, b as u, t as l } from './index-BF3hYO0G.js'
const h = '/assets/dropdown-YEUwIQQR.svg',
  g = { class: 'bg-black text-white font-sans' },
  m = { class: 'py-8' },
  d = { class: 'w-[90%] justify-center mx-auto' },
  y = { class: 'grid grid-cols-1 md:grid-cols-3 gap-12' },
  _ = ['src', 'alt'],
  x = { class: 'flex flex-row justify-between gap-x-fit' },
  C = { class: 'text-2xl text-white mb-2' },
  f = { class: 'text-white text-2xl' },
  v = ['innerHTML'],
  A = o({
    __name: 'ProjectsView',
    setup(p) {
      const n = r([
        {
          title: 'Guanyin Altar',
          year: 2024,
          location: 'ZhouShan City, China',
          image: '/CarouselImages/1.svg'
        },
        {
          title: 'Guanyin Altar',
          year: 2024,
          location: 'ZhouShan City, China',
          image: '/CarouselImages/2.svg'
        },
        {
          title: 'Guanyin Altar',
          year: 2024,
          location: 'ZhouShan City, China',
          image: '/CarouselImages/3.svg'
        },
        {
          title: 'Guanyin Altar',
          year: 2024,
          location: 'ZhouShan City, China',
          image: '/CarouselImages/1.svg'
        },
        {
          title: 'Guanyin Altar',
          year: 2024,
          location: 'ZhouShan City, China',
          image: '/CarouselImages/2.svg'
        },
        {
          title: 'Guanyin Altar',
          year: 2024,
          location: 'ZhouShan City, China',
          image: '/CarouselImages/3.svg'
        }
      ])
      return (b, e) => (
        a(),
        i('div', g, [
          s('div', m, [
            e[0] ||
              (e[0] = s(
                'div',
                { class: 'flex flex-row items-center justify-center pt-[5%] gap-x-4' },
                [
                  s('h1', { class: 'text-5xl text-center' }, 'Arts & Culture'),
                  s('img', {
                    src: h,
                    class: 'object-contain',
                    style: { height: '40%', marginTop: '10px' }
                  })
                ],
                -1
              )),
            e[1] ||
              (e[1] = s('hr', { class: 'border-t-2 border-white mt-6 mx-[5%] mb-10' }, null, -1)),
            s('div', d, [
              s('div', y, [
                (a(!0),
                i(
                  c,
                  null,
                  u(
                    n.value,
                    (t) => (
                      a(),
                      i('div', { key: t.title, class: 'flex flex-col' }, [
                        s(
                          'img',
                          { src: t.image, alt: t.title, class: 'w-full h-64 object-cover mb-4' },
                          null,
                          8,
                          _
                        ),
                        s('div', x, [s('h2', C, l(t.title), 1), s('p', f, l(t.year), 1)]),
                        s('p', { class: 'mb-4', innerHTML: t.location }, null, 8, v)
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
export { A as default }
