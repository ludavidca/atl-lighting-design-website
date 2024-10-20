import {
  d as n,
  r,
  c as a,
  a as e,
  F as d,
  b as o,
  e as c,
  o as i,
  t as m,
  _ as g
} from './index-c7gDU-h8.js'
const h = '/assets/careers-CstLZ5e_.svg',
  f = { class: 'bg-black text-white font-sans min-h-screen' },
  u = { class: 'mx-auto py-8' },
  b = { class: 'w-[90%] justify-center mx-auto' },
  v = { class: 'grid grid-cols-1 md:grid-cols-3 gap-12' },
  x = ['src', 'alt'],
  _ = { class: 'text-2xl font-bold mb-2' },
  p = ['innerHTML'],
  C = ['href'],
  w = ['href'],
  L = n({
    __name: 'ContactView',
    setup(y) {
      const l = r([
        {
          title: 'Shanghai ATL Lighting Design Company',
          address: 'Building 18, 333 Baotun Road<br>Huangpu District<br>Shanghai, China 200011',
          image: '/Contact/shanghai.svg',
          email: 'mailto:atl@188.com',
          tel: 'tel+862152137649'
        },
        {
          title: "Shanghai ATL Lighting Design Xi'an Branch",
          address:
            "2203, Unit 1, Building 7<br>Shuangwei Yingbin Square, Wei Yang Road<br>Xi'an, China 710018",
          image: '/Contact/xian.svg',
          email: 'mailto:atllightxa@163.com',
          tel: 'tel:+8613585700424'
        },
        {
          title: 'ATL International Lighting Design Inc.',
          address: 'Suite 340, 600 Crowfoot Crescent NW<br>Calgary, AB, Canada T3G 0B4<br><br>',
          image: '/Contact/calgary.svg',
          email: 'mailto:zlu@live.ca',
          tel: 'tel:+15879664293'
        }
      ])
      return (B, s) => (
        i(),
        a('div', f, [
          e('div', u, [
            s[1] ||
              (s[1] = e(
                'div',
                { class: 'flex flex-row items-center justify-center pt-[5%] gap-x-4' },
                [e('h1', { class: 'text-5xl text-center' }, 'Our Offices')],
                -1
              )),
            s[2] ||
              (s[2] = e('hr', { class: 'border-t-2 border-white mt-6 mx-[5%] mb-10' }, null, -1)),
            e('div', b, [
              e('div', v, [
                (i(!0),
                a(
                  d,
                  null,
                  o(
                    l.value,
                    (t) => (
                      i(),
                      a('div', { key: t.title, class: 'flex flex-col' }, [
                        e(
                          'img',
                          { src: t.image, alt: t.title, class: 'w-full h-64 object-cover mb-4' },
                          null,
                          8,
                          x
                        ),
                        e('h2', _, m(t.title), 1),
                        e('p', { class: 'mb-4', innerHTML: t.address }, null, 8, p),
                        e('p', null, [
                          e(
                            'a',
                            { href: t.email, class: 'underline mr-4 text-white' },
                            'Email',
                            8,
                            C
                          ),
                          e('a', { href: t.tel, class: 'underline text-white' }, 'Telephone', 8, w)
                        ])
                      ])
                    )
                  ),
                  128
                ))
              ]),
              s[0] ||
                (s[0] = c(
                  '<div class="flex flex-col md:flex-row mt-16 items-center mb-10" data-v-b5973fd5><img src="' +
                    h +
                    '" alt="Careers" class="w-full h-[250px] md:w-2/3 object-cover mb-8 md:mb-0" data-v-b5973fd5><div class="flex w-1/3 items-center justify-center mx-auto" data-v-b5973fd5><div data-v-b5973fd5><h2 class="text-4xl mb-4" data-v-b5973fd5>Careers</h2><p data-v-b5973fd5><a href="mailto:hr@atl-design.com" class="underline mr-4" data-v-b5973fd5>Email</a><a href="+8602152137649" class="underline" data-v-b5973fd5>Telephone</a></p></div></div></div>',
                  1
                ))
            ])
          ])
        ])
      )
    }
  }),
  T = g(L, [['__scopeId', 'data-v-b5973fd5']])
export { T as default }
