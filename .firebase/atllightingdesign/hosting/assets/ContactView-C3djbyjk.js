import {
  _ as r,
  r as n,
  o as a,
  c as i,
  a as e,
  F as c,
  b as o,
  e as d,
  t as m
} from './index-BF3hYO0G.js'
const g = '/assets/careers-CstLZ5e_.svg',
  h = { class: 'bg-black text-white font-sans min-h-screen' },
  u = { class: 'mx-auto py-8' },
  f = { class: 'w-[90%] justify-center mx-auto' },
  v = { class: 'grid grid-cols-1 md:grid-cols-3 gap-12' },
  x = ['src', 'alt'],
  _ = { class: 'text-2xl font-bold mb-2' },
  b = ['innerHTML'],
  p = ['href'],
  w = ['href'],
  C = {
    __name: 'ContactView',
    setup(L) {
      const l = n([
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
      return (y, s) => (
        a(),
        i('div', h, [
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
            e('div', f, [
              e('div', v, [
                (a(!0),
                i(
                  c,
                  null,
                  o(
                    l.value,
                    (t) => (
                      a(),
                      i('div', { key: t.title, class: 'flex flex-col' }, [
                        e(
                          'img',
                          { src: t.image, alt: t.title, class: 'w-full h-64 object-cover mb-4' },
                          null,
                          8,
                          x
                        ),
                        e('h2', _, m(t.title), 1),
                        e('p', { class: 'mb-4', innerHTML: t.address }, null, 8, b),
                        e('p', null, [
                          e(
                            'a',
                            { href: t.email, class: 'underline mr-4 text-white' },
                            'Email',
                            8,
                            p
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
                (s[0] = d(
                  '<div class="flex flex-col md:flex-row mt-16 items-center mb-10" data-v-143c91e0><img src="' +
                    g +
                    '" alt="Careers" class="w-full h-[250px] md:w-2/3 object-cover mb-8 md:mb-0" data-v-143c91e0><div class="flex w-1/3 items-center justify-center mx-auto" data-v-143c91e0><div data-v-143c91e0><h2 class="text-4xl mb-4" data-v-143c91e0>Careers</h2><p data-v-143c91e0><a href="mailto:hr@atl-design.com" class="underline mr-4" data-v-143c91e0>Email</a><a href="+8602152137649" class="underline" data-v-143c91e0>Telephone</a></p></div></div></div>',
                  1
                ))
            ])
          ])
        ])
      )
    }
  },
  S = r(C, [['__scopeId', 'data-v-143c91e0']])
export { S as default }
