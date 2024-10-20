const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/ContactView-C3djbyjk.js', 'assets/ContactView-B_SY1GJM.css'])
) => i.map((i) => d[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const i = {}
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const i = n(r)
    fetch(r.href, i)
  }
})()
/**
 * @vue/shared v3.5.3
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ms(e, t) {
  const n = new Set(e.split(','))
  return (s) => n.has(s)
}
const re = {},
  jt = [],
  Je = () => {},
  $o = () => !1,
  Dn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  $s = (e) => e.startsWith('onUpdate:'),
  de = Object.assign,
  Ns = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  No = Object.prototype.hasOwnProperty,
  Z = (e, t) => No.call(e, t),
  j = Array.isArray,
  Ht = (e) => jn(e) === '[object Map]',
  ii = (e) => jn(e) === '[object Set]',
  B = (e) => typeof e == 'function',
  fe = (e) => typeof e == 'string',
  yt = (e) => typeof e == 'symbol',
  le = (e) => e !== null && typeof e == 'object',
  oi = (e) => (le(e) || B(e)) && B(e.then) && B(e.catch),
  li = Object.prototype.toString,
  jn = (e) => li.call(e),
  Fo = (e) => jn(e).slice(8, -1),
  ci = (e) => jn(e) === '[object Object]',
  Fs = (e) => fe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  en = Ms(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Hn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Do = /-(\w)/g,
  Tt = Hn((e) => e.replace(Do, (t, n) => (n ? n.toUpperCase() : ''))),
  jo = /\B([A-Z])/g,
  It = Hn((e) => e.replace(jo, '-$1').toLowerCase()),
  ai = Hn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Xn = Hn((e) => (e ? `on${ai(e)}` : '')),
  mt = (e, t) => !Object.is(e, t),
  Zn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  ui = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  Ho = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  ko = (e) => {
    const t = fe(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let or
const fi = () =>
  or ||
  (or =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Ds(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = fe(s) ? Ko(s) : Ds(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (fe(e) || le(e)) return e
}
const Bo = /;(?![^(]*\))/g,
  Vo = /:([^]+)/,
  Uo = /\/\*[^]*?\*\//g
function Ko(e) {
  const t = {}
  return (
    e
      .replace(Uo, '')
      .split(Bo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Vo)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function gt(e) {
  let t = ''
  if (fe(e)) t = e
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const s = gt(e[n])
      s && (t += s + ' ')
    }
  else if (le(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Wo = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  qo = Ms(Wo)
function di(e) {
  return !!e || e === ''
}
const hi = (e) => !!(e && e.__v_isRef === !0),
  ps = (e) =>
    fe(e)
      ? e
      : e == null
        ? ''
        : j(e) || (le(e) && (e.toString === li || !B(e.toString)))
          ? hi(e)
            ? ps(e.value)
            : JSON.stringify(e, pi, 2)
          : String(e),
  pi = (e, t) =>
    hi(t)
      ? pi(e, t.value)
      : Ht(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[es(s, i) + ' =>'] = r), n),
              {}
            )
          }
        : ii(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => es(n)) }
          : yt(t)
            ? es(t)
            : le(t) && !j(t) && !ci(t)
              ? String(t)
              : t,
  es = (e, t = '') => {
    var n
    return yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.3
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ie
class zo {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ie),
      !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Ie
      try {
        return (Ie = this), t()
      } finally {
        Ie = n
      }
    }
  }
  on() {
    Ie = this
  }
  off() {
    Ie = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Go() {
  return Ie
}
let se
const ts = new WeakSet()
class gi {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.nextEffect = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ie && Ie.active && Ie.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), ts.has(this) && (ts.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) ||
      this.flags & 8 ||
      ((this.flags |= 8), (this.nextEffect = tn), (tn = this))
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), lr(this), vi(this)
    const t = se,
      n = ke
    ;(se = this), (ke = !0)
    try {
      return this.fn()
    } finally {
      yi(this), (se = t), (ke = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ks(t)
      ;(this.deps = this.depsTail = void 0),
        lr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64 ? ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    gs(this) && this.run()
  }
  get dirty() {
    return gs(this)
  }
}
let mi = 0,
  tn
function js() {
  mi++
}
function Hs() {
  if (--mi > 0) return
  let e
  for (; tn; ) {
    let t = tn
    for (tn = void 0; t; ) {
      const n = t.nextEffect
      if (((t.nextEffect = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t)
}
function yi(e) {
  let t,
    n = e.depsTail
  for (let s = n; s; s = s.prevDep)
    s.version === -1 ? (s === n && (n = s.prevDep), ks(s), Jo(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0)
  ;(e.deps = t), (e.depsTail = n)
}
function gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && _i(t.dep.computed) === !1) ||
      t.dep.version !== t.version
    )
      return !0
  return !!e._dirty
}
function _i(e) {
  if (e.flags & 2) return !1
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === ln)) return
  e.globalVersion = ln
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && !gs(e))) {
    e.flags &= -3
    return
  }
  const n = se,
    s = ke
  ;(se = e), (ke = !0)
  try {
    vi(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || mt(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(se = n), (ke = s), yi(e), (e.flags &= -3)
  }
}
function ks(e) {
  const { dep: t, prevSub: n, nextSub: s } = e
  if (
    (n && ((n.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = n), (e.nextSub = void 0)),
    t.subs === e && (t.subs = n),
    !t.subs && t.computed)
  ) {
    t.computed.flags &= -5
    for (let r = t.computed.deps; r; r = r.nextDep) ks(r)
  }
}
function Jo(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0))
}
let ke = !0
const bi = []
function _t() {
  bi.push(ke), (ke = !1)
}
function bt() {
  const e = bi.pop()
  ke = e === void 0 ? !0 : e
}
function lr(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = se
    se = void 0
    try {
      t()
    } finally {
      se = n
    }
  }
}
let ln = 0
class Bs {
  constructor(t) {
    ;(this.computed = t), (this.version = 0), (this.activeLink = void 0), (this.subs = void 0)
  }
  track(t) {
    if (!se || !ke || se === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== se)
      (n = this.activeLink =
        {
          dep: this,
          sub: se,
          version: this.version,
          nextDep: void 0,
          prevDep: void 0,
          nextSub: void 0,
          prevSub: void 0,
          prevActiveLink: void 0
        }),
        se.deps
          ? ((n.prevDep = se.depsTail), (se.depsTail.nextDep = n), (se.depsTail = n))
          : (se.deps = se.depsTail = n),
        se.flags & 4 && xi(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = se.depsTail),
        (n.nextDep = void 0),
        (se.depsTail.nextDep = n),
        (se.depsTail = n),
        se.deps === n && (se.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, ln++, this.notify(t)
  }
  notify(t) {
    js()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify()
    } finally {
      Hs()
    }
  }
}
function xi(e) {
  const t = e.dep.computed
  if (t && !e.dep.subs) {
    t.flags |= 20
    for (let s = t.deps; s; s = s.nextDep) xi(s)
  }
  const n = e.dep.subs
  n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
}
const ms = new WeakMap(),
  At = Symbol(''),
  vs = Symbol(''),
  cn = Symbol('')
function xe(e, t, n) {
  if (ke && se) {
    let s = ms.get(e)
    s || ms.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = new Bs())), r.track()
  }
}
function st(e, t, n, s, r, i) {
  const o = ms.get(e)
  if (!o) {
    ln++
    return
  }
  let c = []
  if (t === 'clear') c = [...o.values()]
  else {
    const l = j(e),
      h = l && Fs(n)
    if (l && n === 'length') {
      const u = Number(s)
      o.forEach((d, p) => {
        ;(p === 'length' || p === cn || (!yt(p) && p >= u)) && c.push(d)
      })
    } else {
      const u = (d) => d && c.push(d)
      switch ((n !== void 0 && u(o.get(n)), h && u(o.get(cn)), t)) {
        case 'add':
          l ? h && u(o.get('length')) : (u(o.get(At)), Ht(e) && u(o.get(vs)))
          break
        case 'delete':
          l || (u(o.get(At)), Ht(e) && u(o.get(vs)))
          break
        case 'set':
          Ht(e) && u(o.get(At))
          break
      }
    }
  }
  js()
  for (const l of c) l.trigger()
  Hs()
}
function $t(e) {
  const t = z(e)
  return t === e ? t : (xe(t, 'iterate', cn), Be(e) ? t : t.map(ye))
}
function kn(e) {
  return xe((e = z(e)), 'iterate', cn), e
}
const Qo = {
  __proto__: null,
  [Symbol.iterator]() {
    return ns(this, Symbol.iterator, ye)
  },
  concat(...e) {
    return $t(this).concat(...e.map((t) => (j(t) ? $t(t) : t)))
  },
  entries() {
    return ns(this, 'entries', (e) => ((e[1] = ye(e[1])), e))
  },
  every(e, t) {
    return Xe(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Xe(this, 'filter', e, t, (n) => n.map(ye), arguments)
  },
  find(e, t) {
    return Xe(this, 'find', e, t, ye, arguments)
  },
  findIndex(e, t) {
    return Xe(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Xe(this, 'findLast', e, t, ye, arguments)
  },
  findLastIndex(e, t) {
    return Xe(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Xe(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return ss(this, 'includes', e)
  },
  indexOf(...e) {
    return ss(this, 'indexOf', e)
  },
  join(e) {
    return $t(this).join(e)
  },
  lastIndexOf(...e) {
    return ss(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Xe(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return zt(this, 'pop')
  },
  push(...e) {
    return zt(this, 'push', e)
  },
  reduce(e, ...t) {
    return cr(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return cr(this, 'reduceRight', e, t)
  },
  shift() {
    return zt(this, 'shift')
  },
  some(e, t) {
    return Xe(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return zt(this, 'splice', e)
  },
  toReversed() {
    return $t(this).toReversed()
  },
  toSorted(e) {
    return $t(this).toSorted(e)
  },
  toSpliced(...e) {
    return $t(this).toSpliced(...e)
  },
  unshift(...e) {
    return zt(this, 'unshift', e)
  },
  values() {
    return ns(this, 'values', ye)
  }
}
function ns(e, t, n) {
  const s = kn(e),
    r = s[t]()
  return (
    s !== e &&
      !Be(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return i.value && (i.value = n(i.value)), i
      })),
    r
  )
}
const Yo = Array.prototype
function Xe(e, t, n, s, r, i) {
  const o = kn(e),
    c = o !== e && !Be(e),
    l = o[t]
  if (l !== Yo[t]) {
    const d = l.apply(e, i)
    return c ? ye(d) : d
  }
  let h = n
  o !== e &&
    (c
      ? (h = function (d, p) {
          return n.call(this, ye(d), p, e)
        })
      : n.length > 2 &&
        (h = function (d, p) {
          return n.call(this, d, p, e)
        }))
  const u = l.call(o, h, s)
  return c && r ? r(u) : u
}
function cr(e, t, n, s) {
  const r = kn(e)
  let i = n
  return (
    r !== e &&
      (Be(e)
        ? n.length > 3 &&
          (i = function (o, c, l) {
            return n.call(this, o, c, l, e)
          })
        : (i = function (o, c, l) {
            return n.call(this, o, ye(c), l, e)
          })),
    r[t](i, ...s)
  )
}
function ss(e, t, n) {
  const s = z(e)
  xe(s, 'iterate', cn)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Ws(n[0]) ? ((n[0] = z(n[0])), s[t](...n)) : r
}
function zt(e, t, n = []) {
  _t(), js()
  const s = z(e)[t].apply(e, n)
  return Hs(), bt(), s
}
const Xo = Ms('__proto__,__v_isRef,__isVue'),
  wi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(yt)
  )
function Zo(e) {
  yt(e) || (e = String(e))
  const t = z(this)
  return xe(t, 'has', e), t.hasOwnProperty(e)
}
class Ei {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? dl : Pi) : i ? Ri : Ci).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = j(t)
    if (!r) {
      let l
      if (o && (l = Qo[n])) return l
      if (n === 'hasOwnProperty') return Zo
    }
    const c = Reflect.get(t, n, be(t) ? t : s)
    return (yt(n) ? wi.has(n) : Xo(n)) || (r || xe(t, 'get', n), i)
      ? c
      : be(c)
        ? o && Fs(n)
          ? c
          : c.value
        : le(c)
          ? r
            ? Ti(c)
            : Vn(c)
          : c
  }
}
class Si extends Ei {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const l = Ot(i)
      if ((!Be(s) && !Ot(s) && ((i = z(i)), (s = z(s))), !j(t) && be(i) && !be(s)))
        return l ? !1 : ((i.value = s), !0)
    }
    const o = j(t) && Fs(n) ? Number(n) < t.length : Z(t, n),
      c = Reflect.set(t, n, s, be(t) ? t : r)
    return t === z(r) && (o ? mt(s, i) && st(t, 'set', n, s) : st(t, 'add', n, s)), c
  }
  deleteProperty(t, n) {
    const s = Z(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && st(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!yt(n) || !wi.has(n)) && xe(t, 'has', n), s
  }
  ownKeys(t) {
    return xe(t, 'iterate', j(t) ? 'length' : At), Reflect.ownKeys(t)
  }
}
class el extends Ei {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const tl = new Si(),
  nl = new el(),
  sl = new Si(!0)
const Vs = (e) => e,
  Bn = (e) => Reflect.getPrototypeOf(e)
function _n(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = z(e),
    i = z(t)
  n || (mt(t, i) && xe(r, 'get', t), xe(r, 'get', i))
  const { has: o } = Bn(r),
    c = s ? Vs : n ? qs : ye
  if (o.call(r, t)) return c(e.get(t))
  if (o.call(r, i)) return c(e.get(i))
  e !== r && e.get(t)
}
function bn(e, t = !1) {
  const n = this.__v_raw,
    s = z(n),
    r = z(e)
  return (
    t || (mt(e, r) && xe(s, 'has', e), xe(s, 'has', r)), e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function xn(e, t = !1) {
  return (e = e.__v_raw), !t && xe(z(e), 'iterate', At), Reflect.get(e, 'size', e)
}
function ar(e, t = !1) {
  !t && !Be(e) && !Ot(e) && (e = z(e))
  const n = z(this)
  return Bn(n).has.call(n, e) || (n.add(e), st(n, 'add', e, e)), this
}
function ur(e, t, n = !1) {
  !n && !Be(t) && !Ot(t) && (t = z(t))
  const s = z(this),
    { has: r, get: i } = Bn(s)
  let o = r.call(s, e)
  o || ((e = z(e)), (o = r.call(s, e)))
  const c = i.call(s, e)
  return s.set(e, t), o ? mt(t, c) && st(s, 'set', e, t) : st(s, 'add', e, t), this
}
function fr(e) {
  const t = z(this),
    { has: n, get: s } = Bn(t)
  let r = n.call(t, e)
  r || ((e = z(e)), (r = n.call(t, e))), s && s.call(t, e)
  const i = t.delete(e)
  return r && st(t, 'delete', e, void 0), i
}
function dr() {
  const e = z(this),
    t = e.size !== 0,
    n = e.clear()
  return t && st(e, 'clear', void 0, void 0), n
}
function wn(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      c = z(o),
      l = t ? Vs : e ? qs : ye
    return !e && xe(c, 'iterate', At), o.forEach((h, u) => s.call(r, l(h), l(u), i))
  }
}
function En(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = z(r),
      o = Ht(i),
      c = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      h = r[e](...s),
      u = n ? Vs : t ? qs : ye
    return (
      !t && xe(i, 'iterate', l ? vs : At),
      {
        next() {
          const { value: d, done: p } = h.next()
          return p ? { value: d, done: p } : { value: c ? [u(d[0]), u(d[1])] : u(d), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function ot(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function rl() {
  const e = {
      get(i) {
        return _n(this, i)
      },
      get size() {
        return xn(this)
      },
      has: bn,
      add: ar,
      set: ur,
      delete: fr,
      clear: dr,
      forEach: wn(!1, !1)
    },
    t = {
      get(i) {
        return _n(this, i, !1, !0)
      },
      get size() {
        return xn(this)
      },
      has: bn,
      add(i) {
        return ar.call(this, i, !0)
      },
      set(i, o) {
        return ur.call(this, i, o, !0)
      },
      delete: fr,
      clear: dr,
      forEach: wn(!1, !0)
    },
    n = {
      get(i) {
        return _n(this, i, !0)
      },
      get size() {
        return xn(this, !0)
      },
      has(i) {
        return bn.call(this, i, !0)
      },
      add: ot('add'),
      set: ot('set'),
      delete: ot('delete'),
      clear: ot('clear'),
      forEach: wn(!0, !1)
    },
    s = {
      get(i) {
        return _n(this, i, !0, !0)
      },
      get size() {
        return xn(this, !0)
      },
      has(i) {
        return bn.call(this, i, !0)
      },
      add: ot('add'),
      set: ot('set'),
      delete: ot('delete'),
      clear: ot('clear'),
      forEach: wn(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = En(i, !1, !1)),
        (n[i] = En(i, !0, !1)),
        (t[i] = En(i, !1, !0)),
        (s[i] = En(i, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [il, ol, ll, cl] = rl()
function Us(e, t) {
  const n = t ? (e ? cl : ll) : e ? ol : il
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(Z(n, r) && r in s ? n : s, r, i)
}
const al = { get: Us(!1, !1) },
  ul = { get: Us(!1, !0) },
  fl = { get: Us(!0, !1) }
const Ci = new WeakMap(),
  Ri = new WeakMap(),
  Pi = new WeakMap(),
  dl = new WeakMap()
function hl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function pl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : hl(Fo(e))
}
function Vn(e) {
  return Ot(e) ? e : Ks(e, !1, tl, al, Ci)
}
function Ai(e) {
  return Ks(e, !1, sl, ul, Ri)
}
function Ti(e) {
  return Ks(e, !0, nl, fl, Pi)
}
function Ks(e, t, n, s, r) {
  if (!le(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = pl(e)
  if (o === 0) return e
  const c = new Proxy(e, o === 2 ? s : n)
  return r.set(e, c), c
}
function kt(e) {
  return Ot(e) ? kt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Ot(e) {
  return !!(e && e.__v_isReadonly)
}
function Be(e) {
  return !!(e && e.__v_isShallow)
}
function Ws(e) {
  return e ? !!e.__v_raw : !1
}
function z(e) {
  const t = e && e.__v_raw
  return t ? z(t) : e
}
function gl(e) {
  return Object.isExtensible(e) && ui(e, '__v_skip', !0), e
}
const ye = (e) => (le(e) ? Vn(e) : e),
  qs = (e) => (le(e) ? Ti(e) : e)
function be(e) {
  return e ? e.__v_isRef === !0 : !1
}
function ut(e) {
  return Oi(e, !1)
}
function ml(e) {
  return Oi(e, !0)
}
function Oi(e, t) {
  return be(e) ? e : new vl(e, t)
}
class vl {
  constructor(t, n) {
    ;(this.dep = new Bs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : z(t)),
      (this._value = n ? t : ye(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Be(t) || Ot(t)
    ;(t = s ? t : z(t)),
      mt(t, n) && ((this._rawValue = t), (this._value = s ? t : ye(t)), this.dep.trigger())
  }
}
function Ne(e) {
  return be(e) ? e.value : e
}
const yl = {
  get: (e, t, n) => (t === '__v_raw' ? e : Ne(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return be(r) && !be(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function Ii(e) {
  return kt(e) ? e : new Proxy(e, yl)
}
class _l {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Bs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ln - 1),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    se !== this && ((this.flags |= 16), this.dep.notify())
  }
  get value() {
    const t = this.dep.track()
    return _i(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function bl(e, t, n = !1) {
  let s, r
  return B(e) ? (s = e) : ((s = e.get), (r = e.set)), new _l(s, r, n)
}
const Sn = {},
  In = new WeakMap()
let Ct
function xl(e, t = !1, n = Ct) {
  if (n) {
    let s = In.get(n)
    s || In.set(n, (s = [])), s.push(e)
  }
}
function wl(e, t, n = re) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: c, call: l } = n,
    h = (O) => (r ? O : Be(O) || r === !1 || r === 0 ? tt(O, 1) : tt(O))
  let u,
    d,
    p,
    m,
    C = !1,
    A = !1
  if (
    (be(e)
      ? ((d = () => e.value), (C = Be(e)))
      : kt(e)
        ? ((d = () => h(e)), (C = !0))
        : j(e)
          ? ((A = !0),
            (C = e.some((O) => kt(O) || Be(O))),
            (d = () =>
              e.map((O) => {
                if (be(O)) return O.value
                if (kt(O)) return h(O)
                if (B(O)) return l ? l(O, 2) : O()
              })))
          : B(e)
            ? t
              ? (d = l ? () => l(e, 2) : e)
              : (d = () => {
                  if (p) {
                    _t()
                    try {
                      p()
                    } finally {
                      bt()
                    }
                  }
                  const O = Ct
                  Ct = u
                  try {
                    return l ? l(e, 3, [m]) : e(m)
                  } finally {
                    Ct = O
                  }
                })
            : (d = Je),
    t && r)
  ) {
    const O = d,
      U = r === !0 ? 1 / 0 : r
    d = () => tt(O(), U)
  }
  const H = Go(),
    $ = () => {
      u.stop(), H && Ns(H.effects, u)
    }
  if (i)
    if (t) {
      const O = t
      t = (...U) => {
        O(...U), $()
      }
    } else {
      const O = d
      d = () => {
        O(), $()
      }
    }
  let I = A ? new Array(e.length).fill(Sn) : Sn
  const N = (O) => {
    if (!(!(u.flags & 1) || (!u.dirty && !O)))
      if (t) {
        const U = u.run()
        if (r || C || (A ? U.some((ne, ee) => mt(ne, I[ee])) : mt(U, I))) {
          p && p()
          const ne = Ct
          Ct = u
          try {
            const ee = [U, I === Sn ? void 0 : A && I[0] === Sn ? [] : I, m]
            l ? l(t, 3, ee) : t(...ee), (I = U)
          } finally {
            Ct = ne
          }
        }
      } else u.run()
  }
  return (
    c && c(N),
    (u = new gi(d)),
    (u.scheduler = o ? () => o(N, !1) : N),
    (m = (O) => xl(O, !1, u)),
    (p = u.onStop =
      () => {
        const O = In.get(u)
        if (O) {
          if (l) l(O, 4)
          else for (const U of O) U()
          In.delete(u)
        }
      }),
    t ? (s ? N(!0) : (I = u.run())) : o ? o(N.bind(null, !0), !0) : u.run(),
    ($.pause = u.pause.bind(u)),
    ($.resume = u.resume.bind(u)),
    ($.stop = $),
    $
  )
}
function tt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, be(e))) tt(e.value, t, n)
  else if (j(e)) for (let s = 0; s < e.length; s++) tt(e[s], t, n)
  else if (ii(e) || Ht(e))
    e.forEach((s) => {
      tt(s, t, n)
    })
  else if (ci(e)) {
    for (const s in e) tt(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && tt(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.3
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function mn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Un(r, t, n)
  }
}
function Ve(e, t, n, s) {
  if (B(e)) {
    const r = mn(e, t, n, s)
    return (
      r &&
        oi(r) &&
        r.catch((i) => {
          Un(i, t, n)
        }),
      r
    )
  }
  if (j(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(Ve(e[i], t, n, s))
    return r
  }
}
function Un(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } = (t && t.appContext.config) || re
  if (t) {
    let c = t.parent
    const l = t.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; c; ) {
      const u = c.ec
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, l, h) === !1) return
      }
      c = c.parent
    }
    if (i) {
      _t(), mn(i, null, 10, [e, l, h]), bt()
      return
    }
  }
  El(e, n, r, s, o)
}
function El(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
let an = !1,
  ys = !1
const Ee = []
let ze = 0
const Bt = []
let ft = null,
  Nt = 0
const Li = Promise.resolve()
let zs = null
function Mi(e) {
  const t = zs || Li
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Sl(e) {
  let t = an ? ze + 1 : 0,
    n = Ee.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ee[s],
      i = un(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Gs(e) {
  if (!(e.flags & 1)) {
    const t = un(e),
      n = Ee[Ee.length - 1]
    !n || (!(e.flags & 2) && t >= un(n)) ? Ee.push(e) : Ee.splice(Sl(t), 0, e), (e.flags |= 1), $i()
  }
}
function $i() {
  !an && !ys && ((ys = !0), (zs = Li.then(Fi)))
}
function Cl(e) {
  j(e)
    ? Bt.push(...e)
    : ft && e.id === -1
      ? ft.splice(Nt + 1, 0, e)
      : e.flags & 1 || (Bt.push(e), (e.flags |= 1)),
    $i()
}
function hr(e, t, n = an ? ze + 1 : 0) {
  for (; n < Ee.length; n++) {
    const s = Ee[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      Ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), (s.flags &= -2)
    }
  }
}
function Ni(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)].sort((n, s) => un(n) - un(s))
    if (((Bt.length = 0), ft)) {
      ft.push(...t)
      return
    }
    for (ft = t, Nt = 0; Nt < ft.length; Nt++) {
      const n = ft[Nt]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(ft = null), (Nt = 0)
  }
}
const un = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Fi(e) {
  ;(ys = !1), (an = !0)
  try {
    for (ze = 0; ze < Ee.length; ze++) {
      const t = Ee[ze]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), mn(t, t.i, t.i ? 15 : 14), (t.flags &= -2))
    }
  } finally {
    for (; ze < Ee.length; ze++) {
      const t = Ee[ze]
      t && (t.flags &= -2)
    }
    ;(ze = 0), (Ee.length = 0), Ni(), (an = !1), (zs = null), (Ee.length || Bt.length) && Fi()
  }
}
let ge = null,
  Di = null
function Ln(e) {
  const t = ge
  return (ge = e), (Di = (e && e.type.__scopeId) || null), t
}
function nt(e, t = ge, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && wr(-1)
    const i = Ln(t)
    let o
    try {
      o = e(...r)
    } finally {
      Ln(i), s._d && wr(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Rl(e, t) {
  if (ge === null) return e
  const n = Qn(ge),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, c, l = re] = t[r]
    i &&
      (B(i) && (i = { mounted: i, updated: i }),
      i.deep && tt(o),
      s.push({ dir: i, instance: n, value: o, oldValue: void 0, arg: c, modifiers: l }))
  }
  return e
}
function xt(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const c = r[o]
    i && (c.oldValue = i[o].value)
    let l = c.dir[s]
    l && (_t(), Ve(l, n, 8, [e.el, c, e, t]), bt())
  }
}
const Pl = Symbol('_vte'),
  ji = (e) => e.__isTeleport,
  dt = Symbol('_leaveCb'),
  Cn = Symbol('_enterCb')
function Al() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Js(() => {
      e.isMounted = !0
    }),
    qi(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const $e = [Function, Array],
  Hi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: $e,
    onEnter: $e,
    onAfterEnter: $e,
    onEnterCancelled: $e,
    onBeforeLeave: $e,
    onLeave: $e,
    onAfterLeave: $e,
    onLeaveCancelled: $e,
    onBeforeAppear: $e,
    onAppear: $e,
    onAfterAppear: $e,
    onAppearCancelled: $e
  },
  ki = (e) => {
    const t = e.subTree
    return t.component ? ki(t.component) : t
  },
  Tl = {
    name: 'BaseTransition',
    props: Hi,
    setup(e, { slots: t }) {
      const n = Ec(),
        s = Al()
      return () => {
        const r = t.default && Ui(t.default(), !0)
        if (!r || !r.length) return
        const i = Bi(r),
          o = z(e),
          { mode: c } = o
        if (s.isLeaving) return rs(i)
        const l = pr(i)
        if (!l) return rs(i)
        let h = _s(l, o, s, n, (p) => (h = p))
        l.type !== Se && fn(l, h)
        const u = n.subTree,
          d = u && pr(u)
        if (d && d.type !== Se && !Rt(l, d) && ki(n).type !== Se) {
          const p = _s(d, o, s, n)
          if ((fn(d, p), c === 'out-in' && l.type !== Se))
            return (
              (s.isLeaving = !0),
              (p.afterLeave = () => {
                ;(s.isLeaving = !1), n.job.flags & 8 || n.update(), delete p.afterLeave
              }),
              rs(i)
            )
          c === 'in-out' &&
            l.type !== Se &&
            (p.delayLeave = (m, C, A) => {
              const H = Vi(s, d)
              ;(H[String(d.key)] = d),
                (m[dt] = () => {
                  C(), (m[dt] = void 0), delete h.delayedLeave
                }),
                (h.delayedLeave = A)
            })
        }
        return i
      }
    }
  }
function Bi(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Se) {
        t = n
        break
      }
  }
  return t
}
const Ol = Tl
function Vi(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function _s(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: c = !1,
      onBeforeEnter: l,
      onEnter: h,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: p,
      onLeave: m,
      onAfterLeave: C,
      onLeaveCancelled: A,
      onBeforeAppear: H,
      onAppear: $,
      onAfterAppear: I,
      onAppearCancelled: N
    } = t,
    O = String(e.key),
    U = Vi(n, e),
    ne = (V, W) => {
      V && Ve(V, s, 9, W)
    },
    ee = (V, W) => {
      const ie = W[1]
      ne(V, W), j(V) ? V.every((L) => L.length <= 1) && ie() : V.length <= 1 && ie()
    },
    me = {
      mode: o,
      persisted: c,
      beforeEnter(V) {
        let W = l
        if (!n.isMounted)
          if (i) W = H || l
          else return
        V[dt] && V[dt](!0)
        const ie = U[O]
        ie && Rt(e, ie) && ie.el[dt] && ie.el[dt](), ne(W, [V])
      },
      enter(V) {
        let W = h,
          ie = u,
          L = d
        if (!n.isMounted)
          if (i) (W = $ || h), (ie = I || u), (L = N || d)
          else return
        let G = !1
        const he = (V[Cn] = (De) => {
          G ||
            ((G = !0),
            De ? ne(L, [V]) : ne(ie, [V]),
            me.delayedLeave && me.delayedLeave(),
            (V[Cn] = void 0))
        })
        W ? ee(W, [V, he]) : he()
      },
      leave(V, W) {
        const ie = String(e.key)
        if ((V[Cn] && V[Cn](!0), n.isUnmounting)) return W()
        ne(p, [V])
        let L = !1
        const G = (V[dt] = (he) => {
          L ||
            ((L = !0),
            W(),
            he ? ne(A, [V]) : ne(C, [V]),
            (V[dt] = void 0),
            U[ie] === e && delete U[ie])
        })
        ;(U[ie] = e), m ? ee(m, [V, G]) : G()
      },
      clone(V) {
        const W = _s(V, t, n, s, r)
        return r && r(W), W
      }
    }
  return me
}
function rs(e) {
  if (Wn(e)) return (e = vt(e)), (e.children = null), e
}
function pr(e) {
  if (!Wn(e)) return ji(e.type) && e.children ? Bi(e.children) : e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && B(n.default)) return n.default()
  }
}
function fn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), fn(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Ui(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === pe
      ? (o.patchFlag & 128 && r++, (s = s.concat(Ui(o.children, t, c))))
      : (t || o.type !== Se) && s.push(c != null ? vt(o, { key: c }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Kn(e, t) {
  return B(e) ? de({ name: e.name }, t, { setup: e }) : e
}
function Ki(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function bs(e, t, n, s, r = !1) {
  if (j(e)) {
    e.forEach((C, A) => bs(C, t && (j(t) ? t[A] : t), n, s, r))
    return
  }
  if (Vt(s) && !r) return
  const i = s.shapeFlag & 4 ? Qn(s.component) : s.el,
    o = r ? null : i,
    { i: c, r: l } = e,
    h = t && t.r,
    u = c.refs === re ? (c.refs = {}) : c.refs,
    d = c.setupState,
    p = z(d),
    m = d === re ? () => !1 : (C) => Z(p, C)
  if (
    (h != null &&
      h !== l &&
      (fe(h) ? ((u[h] = null), m(h) && (d[h] = null)) : be(h) && (h.value = null)),
    B(l))
  )
    mn(l, c, 12, [o, u])
  else {
    const C = fe(l),
      A = be(l)
    if (C || A) {
      const H = () => {
        if (e.f) {
          const $ = C ? (m(l) ? d[l] : u[l]) : l.value
          r
            ? j($) && Ns($, i)
            : j($)
              ? $.includes(i) || $.push(i)
              : C
                ? ((u[l] = [i]), m(l) && (d[l] = u[l]))
                : ((l.value = [i]), e.k && (u[e.k] = l.value))
        } else C ? ((u[l] = o), m(l) && (d[l] = o)) : A && ((l.value = o), e.k && (u[e.k] = o))
      }
      o ? ((H.id = -1), Oe(H, n)) : H()
    }
  }
}
const Vt = (e) => !!e.type.__asyncLoader,
  Wn = (e) => e.type.__isKeepAlive
function Il(e, t) {
  Wi(e, 'a', t)
}
function Ll(e, t) {
  Wi(e, 'da', t)
}
function Wi(e, t, n = _e) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((qn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Wn(r.parent.vnode) && Ml(s, t, n, r), (r = r.parent)
  }
}
function Ml(e, t, n, s) {
  const r = qn(t, e, s, !0)
  zi(() => {
    Ns(s[t], r)
  }, n)
}
function qn(e, t, n = _e, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          _t()
          const c = vn(n),
            l = Ve(t, n, e, o)
          return c(), bt(), l
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const rt =
    (e) =>
    (t, n = _e) => {
      ;(!Jn || e === 'sp') && qn(e, (...s) => t(...s), n)
    },
  $l = rt('bm'),
  Js = rt('m'),
  Nl = rt('bu'),
  Fl = rt('u'),
  qi = rt('bum'),
  zi = rt('um'),
  Dl = rt('sp'),
  jl = rt('rtg'),
  Hl = rt('rtc')
function kl(e, t = _e) {
  qn('ec', e, t)
}
const Bl = Symbol.for('v-ndc')
function xs(e, t, n, s) {
  let r
  const i = n,
    o = j(e)
  if (o || fe(e)) {
    const c = o && kt(e)
    c && (e = kn(e)), (r = new Array(e.length))
    for (let l = 0, h = e.length; l < h; l++) r[l] = t(c ? ye(e[l]) : e[l], l, void 0, i)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let c = 0; c < e; c++) r[c] = t(c + 1, c, void 0, i)
  } else if (le(e))
    if (e[Symbol.iterator]) r = Array.from(e, (c, l) => t(c, l, void 0, i))
    else {
      const c = Object.keys(e)
      r = new Array(c.length)
      for (let l = 0, h = c.length; l < h; l++) {
        const u = c[l]
        r[l] = t(e[u], u, l, i)
      }
    }
  else r = []
  return r
}
function Gi(e, t, n = {}, s, r) {
  if (ge.ce || (ge.parent && Vt(ge.parent) && ge.parent.ce))
    return Re(), Rs(pe, null, [ce('slot', n, s)], 64)
  let i = e[t]
  i && i._c && (i._d = !1), Re()
  const o = i && Ji(i(n)),
    c = Rs(
      pe,
      { key: (n.key || (o && o.key) || `_${t}`) + (!o && s ? '_fb' : '') },
      o || [],
      o && e._ === 1 ? 64 : -2
    )
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']), i && i._c && (i._d = !0), c
}
function Ji(e) {
  return e.some((t) => ($n(t) ? !(t.type === Se || (t.type === pe && !Ji(t.children))) : !0))
    ? e
    : null
}
const ws = (e) => (e ? (mo(e) ? Qn(e) : ws(e.parent)) : null),
  nn = de(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Qs(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Gs(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Mi.bind(e.proxy)),
    $watch: (e) => cc.bind(e)
  }),
  is = (e, t) => e !== re && !e.__isScriptSetup && Z(e, t),
  Vl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: c, appContext: l } = e
      let h
      if (t[0] !== '$') {
        const m = o[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (is(s, t)) return (o[t] = 1), s[t]
          if (r !== re && Z(r, t)) return (o[t] = 2), r[t]
          if ((h = e.propsOptions[0]) && Z(h, t)) return (o[t] = 3), i[t]
          if (n !== re && Z(n, t)) return (o[t] = 4), n[t]
          Es && (o[t] = 0)
        }
      }
      const u = nn[t]
      let d, p
      if (u) return t === '$attrs' && xe(e.attrs, 'get', ''), u(e)
      if ((d = c.__cssModules) && (d = d[t])) return d
      if (n !== re && Z(n, t)) return (o[t] = 4), n[t]
      if (((p = l.config.globalProperties), Z(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return is(r, t)
        ? ((r[t] = n), !0)
        : s !== re && Z(s, t)
          ? ((s[t] = n), !0)
          : Z(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } },
      o
    ) {
      let c
      return (
        !!n[o] ||
        (e !== re && Z(e, o)) ||
        is(t, o) ||
        ((c = i[0]) && Z(c, o)) ||
        Z(s, o) ||
        Z(nn, o) ||
        Z(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Z(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function gr(e) {
  return j(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Es = !0
function Ul(e) {
  const t = Qs(e),
    n = e.proxy,
    s = e.ctx
  ;(Es = !1), t.beforeCreate && mr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: c,
    provide: l,
    inject: h,
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: m,
    updated: C,
    activated: A,
    deactivated: H,
    beforeDestroy: $,
    beforeUnmount: I,
    destroyed: N,
    unmounted: O,
    render: U,
    renderTracked: ne,
    renderTriggered: ee,
    errorCaptured: me,
    serverPrefetch: V,
    expose: W,
    inheritAttrs: ie,
    components: L,
    directives: G,
    filters: he
  } = t
  if ((h && Kl(h, s, null), o))
    for (const te in o) {
      const J = o[te]
      B(J) && (s[te] = J.bind(n))
    }
  if (r) {
    const te = r.call(n, n)
    le(te) && (e.data = Vn(te))
  }
  if (((Es = !0), i))
    for (const te in i) {
      const J = i[te],
        Ye = B(J) ? J.bind(n, n) : B(J.get) ? J.get.bind(n, n) : Je,
        it = !B(J) && B(J.set) ? J.set.bind(n) : Je,
        Ke = Fe({ get: Ye, set: it })
      Object.defineProperty(s, te, {
        enumerable: !0,
        configurable: !0,
        get: () => Ke.value,
        set: (Ce) => (Ke.value = Ce)
      })
    }
  if (c) for (const te in c) Qi(c[te], s, n, te)
  if (l) {
    const te = B(l) ? l.call(n) : l
    Reflect.ownKeys(te).forEach((J) => {
      Rn(J, te[J])
    })
  }
  u && mr(u, e, 'c')
  function ue(te, J) {
    j(J) ? J.forEach((Ye) => te(Ye.bind(n))) : J && te(J.bind(n))
  }
  if (
    (ue($l, d),
    ue(Js, p),
    ue(Nl, m),
    ue(Fl, C),
    ue(Il, A),
    ue(Ll, H),
    ue(kl, me),
    ue(Hl, ne),
    ue(jl, ee),
    ue(qi, I),
    ue(zi, O),
    ue(Dl, V),
    j(W))
  )
    if (W.length) {
      const te = e.exposed || (e.exposed = {})
      W.forEach((J) => {
        Object.defineProperty(te, J, { get: () => n[J], set: (Ye) => (n[J] = Ye) })
      })
    } else e.exposed || (e.exposed = {})
  U && e.render === Je && (e.render = U),
    ie != null && (e.inheritAttrs = ie),
    L && (e.components = L),
    G && (e.directives = G),
    V && Ki(e)
}
function Kl(e, t, n = Je) {
  j(e) && (e = Ss(e))
  for (const s in e) {
    const r = e[s]
    let i
    le(r)
      ? 'default' in r
        ? (i = Qe(r.from || s, r.default, !0))
        : (i = Qe(r.from || s))
      : (i = Qe(r)),
      be(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o)
          })
        : (t[s] = i)
  }
}
function mr(e, t, n) {
  Ve(j(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Qi(e, t, n, s) {
  let r = s.includes('.') ? uo(n, s) : () => n[s]
  if (fe(e)) {
    const i = t[e]
    B(i) && Pn(r, i)
  } else if (B(e)) Pn(r, e.bind(n))
  else if (le(e))
    if (j(e)) e.forEach((i) => Qi(i, t, n, s))
    else {
      const i = B(e.handler) ? e.handler.bind(n) : t[e.handler]
      B(i) && Pn(r, i, e)
    }
}
function Qs(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o }
    } = e.appContext,
    c = i.get(t)
  let l
  return (
    c
      ? (l = c)
      : !r.length && !n && !s
        ? (l = t)
        : ((l = {}), r.length && r.forEach((h) => Mn(l, h, o, !0)), Mn(l, t, o)),
    le(t) && i.set(t, l),
    l
  )
}
function Mn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && Mn(e, i, n, !0), r && r.forEach((o) => Mn(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const c = Wl[o] || (n && n[o])
      e[o] = c ? c(e[o], t[o]) : t[o]
    }
  return e
}
const Wl = {
  data: vr,
  props: yr,
  emits: yr,
  methods: Xt,
  computed: Xt,
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  components: Xt,
  directives: Xt,
  watch: zl,
  provide: vr,
  inject: ql
}
function vr(e, t) {
  return t
    ? e
      ? function () {
          return de(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function ql(e, t) {
  return Xt(Ss(e), Ss(t))
}
function Ss(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Xt(e, t) {
  return e ? de(Object.create(null), e, t) : t
}
function yr(e, t) {
  return e
    ? j(e) && j(t)
      ? [...new Set([...e, ...t])]
      : de(Object.create(null), gr(e), gr(t ?? {}))
    : t
}
function zl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = de(Object.create(null), e)
  for (const s in t) n[s] = we(e[s], t[s])
  return n
}
function Yi() {
  return {
    app: null,
    config: {
      isNativeTag: $o,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Gl = 0
function Jl(e, t) {
  return function (s, r = null) {
    B(s) || (s = de({}, s)), r != null && !le(r) && (r = null)
    const i = Yi(),
      o = new WeakSet(),
      c = []
    let l = !1
    const h = (i.app = {
      _uid: Gl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Tc,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...d) {
        return (
          o.has(u) ||
            (u && B(u.install) ? (o.add(u), u.install(h, ...d)) : B(u) && (o.add(u), u(h, ...d))),
          h
        )
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), h
      },
      component(u, d) {
        return d ? ((i.components[u] = d), h) : i.components[u]
      },
      directive(u, d) {
        return d ? ((i.directives[u] = d), h) : i.directives[u]
      },
      mount(u, d, p) {
        if (!l) {
          const m = h._ceVNode || ce(s, r)
          return (
            (m.appContext = i),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            d && t ? t(m, u) : e(m, u, p),
            (l = !0),
            (h._container = u),
            (u.__vue_app__ = h),
            Qn(m.component)
          )
        }
      },
      onUnmount(u) {
        c.push(u)
      },
      unmount() {
        l && (Ve(c, h._instance, 16), e(null, h._container), delete h._container.__vue_app__)
      },
      provide(u, d) {
        return (i.provides[u] = d), h
      },
      runWithContext(u) {
        const d = Ut
        Ut = h
        try {
          return u()
        } finally {
          Ut = d
        }
      }
    })
    return h
  }
}
let Ut = null
function Rn(e, t) {
  if (_e) {
    let n = _e.provides
    const s = _e.parent && _e.parent.provides
    s === n && (n = _e.provides = Object.create(s)), (n[e] = t)
  }
}
function Qe(e, t, n = !1) {
  const s = _e || ge
  if (s || Ut) {
    const r = Ut
      ? Ut._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && B(t) ? t.call(s && s.proxy) : t
  }
}
const Xi = {},
  Zi = () => Object.create(Xi),
  eo = (e) => Object.getPrototypeOf(e) === Xi
function Ql(e, t, n, s = !1) {
  const r = {},
    i = Zi()
  ;(e.propsDefaults = Object.create(null)), to(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : Ai(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i)
}
function Yl(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o }
    } = e,
    c = z(r),
    [l] = e.propsOptions
  let h = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps
      for (let d = 0; d < u.length; d++) {
        let p = u[d]
        if (zn(e.emitsOptions, p)) continue
        const m = t[p]
        if (l)
          if (Z(i, p)) m !== i[p] && ((i[p] = m), (h = !0))
          else {
            const C = Tt(p)
            r[C] = Cs(l, c, C, m, e, !1)
          }
        else m !== i[p] && ((i[p] = m), (h = !0))
      }
    }
  } else {
    to(e, t, r, i) && (h = !0)
    let u
    for (const d in c)
      (!t || (!Z(t, d) && ((u = It(d)) === d || !Z(t, u)))) &&
        (l
          ? n && (n[d] !== void 0 || n[u] !== void 0) && (r[d] = Cs(l, c, d, void 0, e, !0))
          : delete r[d])
    if (i !== c) for (const d in i) (!t || !Z(t, d)) && (delete i[d], (h = !0))
  }
  h && st(e.attrs, 'set', '')
}
function to(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    c
  if (t)
    for (let l in t) {
      if (en(l)) continue
      const h = t[l]
      let u
      r && Z(r, (u = Tt(l)))
        ? !i || !i.includes(u)
          ? (n[u] = h)
          : ((c || (c = {}))[u] = h)
        : zn(e.emitsOptions, l) || ((!(l in s) || h !== s[l]) && ((s[l] = h), (o = !0)))
    }
  if (i) {
    const l = z(n),
      h = c || re
    for (let u = 0; u < i.length; u++) {
      const d = i[u]
      n[d] = Cs(r, l, d, h[d], e, !Z(h, d))
    }
  }
  return o
}
function Cs(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const c = Z(o, 'default')
    if (c && s === void 0) {
      const l = o.default
      if (o.type !== Function && !o.skipFactory && B(l)) {
        const { propsDefaults: h } = r
        if (n in h) s = h[n]
        else {
          const u = vn(r)
          ;(s = h[n] = l.call(null, t)), u()
        }
      } else s = l
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !c ? (s = !1) : o[1] && (s === '' || s === It(n)) && (s = !0))
  }
  return s
}
const Xl = new WeakMap()
function no(e, t, n = !1) {
  const s = n ? Xl : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    c = []
  let l = !1
  if (!B(e)) {
    const u = (d) => {
      l = !0
      const [p, m] = no(d, t, !0)
      de(o, p), m && c.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!i && !l) return le(e) && s.set(e, jt), jt
  if (j(i))
    for (let u = 0; u < i.length; u++) {
      const d = Tt(i[u])
      _r(d) && (o[d] = re)
    }
  else if (i)
    for (const u in i) {
      const d = Tt(u)
      if (_r(d)) {
        const p = i[u],
          m = (o[d] = j(p) || B(p) ? { type: p } : de({}, p)),
          C = m.type
        let A = !1,
          H = !0
        if (j(C))
          for (let $ = 0; $ < C.length; ++$) {
            const I = C[$],
              N = B(I) && I.name
            if (N === 'Boolean') {
              A = !0
              break
            } else N === 'String' && (H = !1)
          }
        else A = B(C) && C.name === 'Boolean'
        ;(m[0] = A), (m[1] = H), (A || Z(m, 'default')) && c.push(d)
      }
    }
  const h = [o, c]
  return le(e) && s.set(e, h), h
}
function _r(e) {
  return e[0] !== '$' && !en(e)
}
const so = (e) => e[0] === '_' || e === '$stable',
  Ys = (e) => (j(e) ? e.map(Ge) : [Ge(e)]),
  Zl = (e, t, n) => {
    if (t._n) return t
    const s = nt((...r) => Ys(t(...r)), n)
    return (s._c = !1), s
  },
  ro = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (so(r)) continue
      const i = e[r]
      if (B(i)) t[r] = Zl(r, i, s)
      else if (i != null) {
        const o = Ys(i)
        t[r] = () => o
      }
    }
  },
  io = (e, t) => {
    const n = Ys(t)
    e.slots.default = () => n
  },
  oo = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  ec = (e, t, n) => {
    const s = (e.slots = Zi())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (oo(s, t, n), n && ui(s, '_', r, !0)) : ro(t, s)
    } else t && io(e, t)
  },
  tc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = re
    if (s.shapeFlag & 32) {
      const c = t._
      c ? (n && c === 1 ? (i = !1) : oo(r, t, n)) : ((i = !t.$stable), ro(t, r)), (o = t)
    } else t && (io(e, t), (o = { default: 1 }))
    if (i) for (const c in r) !so(c) && o[c] == null && delete r[c]
  },
  Oe = gc
function nc(e) {
  return sc(e)
}
function sc(e, t) {
  const n = fi()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: c,
      createComment: l,
      setText: h,
      setElementText: u,
      parentNode: d,
      nextSibling: p,
      setScopeId: m = Je,
      insertStaticContent: C
    } = e,
    A = (a, f, g, _ = null, v = null, b = null, S = void 0, E = null, w = !!f.dynamicChildren) => {
      if (a === f) return
      a && !Rt(a, f) && ((_ = y(a)), Ce(a, v, b, !0), (a = null)),
        f.patchFlag === -2 && ((w = !1), (f.dynamicChildren = null))
      const { type: x, ref: D, shapeFlag: P } = f
      switch (x) {
        case Gn:
          H(a, f, g, _)
          break
        case Se:
          $(a, f, g, _)
          break
        case An:
          a == null && I(f, g, _, S)
          break
        case pe:
          L(a, f, g, _, v, b, S, E, w)
          break
        default:
          P & 1
            ? U(a, f, g, _, v, b, S, E, w)
            : P & 6
              ? G(a, f, g, _, v, b, S, E, w)
              : (P & 64 || P & 128) && x.process(a, f, g, _, v, b, S, E, w, M)
      }
      D != null && v && bs(D, a && a.ref, b, f || a, !f)
    },
    H = (a, f, g, _) => {
      if (a == null) s((f.el = c(f.children)), g, _)
      else {
        const v = (f.el = a.el)
        f.children !== a.children && h(v, f.children)
      }
    },
    $ = (a, f, g, _) => {
      a == null ? s((f.el = l(f.children || '')), g, _) : (f.el = a.el)
    },
    I = (a, f, g, _) => {
      ;[a.el, a.anchor] = C(a.children, f, g, _, a.el, a.anchor)
    },
    N = ({ el: a, anchor: f }, g, _) => {
      let v
      for (; a && a !== f; ) (v = p(a)), s(a, g, _), (a = v)
      s(f, g, _)
    },
    O = ({ el: a, anchor: f }) => {
      let g
      for (; a && a !== f; ) (g = p(a)), r(a), (a = g)
      r(f)
    },
    U = (a, f, g, _, v, b, S, E, w) => {
      f.type === 'svg' ? (S = 'svg') : f.type === 'math' && (S = 'mathml'),
        a == null ? ne(f, g, _, v, b, S, E, w) : V(a, f, v, b, S, E, w)
    },
    ne = (a, f, g, _, v, b, S, E) => {
      let w, x
      const { props: D, shapeFlag: P, transition: F, dirs: k } = a
      if (
        ((w = a.el = o(a.type, b, D && D.is, D)),
        P & 8 ? u(w, a.children) : P & 16 && me(a.children, w, null, _, v, os(a, b), S, E),
        k && xt(a, null, _, 'created'),
        ee(w, a, a.scopeId, S, _),
        D)
      ) {
        for (const oe in D) oe !== 'value' && !en(oe) && i(w, oe, null, D[oe], b, _)
        'value' in D && i(w, 'value', null, D.value, b), (x = D.onVnodeBeforeMount) && qe(x, _, a)
      }
      k && xt(a, null, _, 'beforeMount')
      const K = rc(v, F)
      K && F.beforeEnter(w),
        s(w, f, g),
        ((x = D && D.onVnodeMounted) || K || k) &&
          Oe(() => {
            x && qe(x, _, a), K && F.enter(w), k && xt(a, null, _, 'mounted')
          }, v)
    },
    ee = (a, f, g, _, v) => {
      if ((g && m(a, g), _)) for (let b = 0; b < _.length; b++) m(a, _[b])
      if (v) {
        let b = v.subTree
        if (f === b || (ho(b.type) && (b.ssContent === f || b.ssFallback === f))) {
          const S = v.vnode
          ee(a, S, S.scopeId, S.slotScopeIds, v.parent)
        }
      }
    },
    me = (a, f, g, _, v, b, S, E, w = 0) => {
      for (let x = w; x < a.length; x++) {
        const D = (a[x] = E ? ht(a[x]) : Ge(a[x]))
        A(null, D, f, g, _, v, b, S, E)
      }
    },
    V = (a, f, g, _, v, b, S) => {
      const E = (f.el = a.el)
      let { patchFlag: w, dynamicChildren: x, dirs: D } = f
      w |= a.patchFlag & 16
      const P = a.props || re,
        F = f.props || re
      let k
      if (
        (g && wt(g, !1),
        (k = F.onVnodeBeforeUpdate) && qe(k, g, f, a),
        D && xt(f, a, g, 'beforeUpdate'),
        g && wt(g, !0),
        ((P.innerHTML && F.innerHTML == null) || (P.textContent && F.textContent == null)) &&
          u(E, ''),
        x
          ? W(a.dynamicChildren, x, E, g, _, os(f, v), b)
          : S || J(a, f, E, null, g, _, os(f, v), b, !1),
        w > 0)
      ) {
        if (w & 16) ie(E, P, F, g, v)
        else if (
          (w & 2 && P.class !== F.class && i(E, 'class', null, F.class, v),
          w & 4 && i(E, 'style', P.style, F.style, v),
          w & 8)
        ) {
          const K = f.dynamicProps
          for (let oe = 0; oe < K.length; oe++) {
            const Y = K[oe],
              Pe = P[Y],
              ve = F[Y]
            ;(ve !== Pe || Y === 'value') && i(E, Y, Pe, ve, v, g)
          }
        }
        w & 1 && a.children !== f.children && u(E, f.children)
      } else !S && x == null && ie(E, P, F, g, v)
      ;((k = F.onVnodeUpdated) || D) &&
        Oe(() => {
          k && qe(k, g, f, a), D && xt(f, a, g, 'updated')
        }, _)
    },
    W = (a, f, g, _, v, b, S) => {
      for (let E = 0; E < f.length; E++) {
        const w = a[E],
          x = f[E],
          D = w.el && (w.type === pe || !Rt(w, x) || w.shapeFlag & 70) ? d(w.el) : g
        A(w, x, D, null, _, v, b, S, !0)
      }
    },
    ie = (a, f, g, _, v) => {
      if (f !== g) {
        if (f !== re) for (const b in f) !en(b) && !(b in g) && i(a, b, f[b], null, v, _)
        for (const b in g) {
          if (en(b)) continue
          const S = g[b],
            E = f[b]
          S !== E && b !== 'value' && i(a, b, E, S, v, _)
        }
        'value' in g && i(a, 'value', f.value, g.value, v)
      }
    },
    L = (a, f, g, _, v, b, S, E, w) => {
      const x = (f.el = a ? a.el : c('')),
        D = (f.anchor = a ? a.anchor : c(''))
      let { patchFlag: P, dynamicChildren: F, slotScopeIds: k } = f
      k && (E = E ? E.concat(k) : k),
        a == null
          ? (s(x, g, _), s(D, g, _), me(f.children || [], g, D, v, b, S, E, w))
          : P > 0 && P & 64 && F && a.dynamicChildren
            ? (W(a.dynamicChildren, F, g, v, b, S, E),
              (f.key != null || (v && f === v.subTree)) && lo(a, f, !0))
            : J(a, f, g, D, v, b, S, E, w)
    },
    G = (a, f, g, _, v, b, S, E, w) => {
      ;(f.slotScopeIds = E),
        a == null
          ? f.shapeFlag & 512
            ? v.ctx.activate(f, g, _, S, w)
            : he(f, g, _, v, b, S, w)
          : De(a, f, w)
    },
    he = (a, f, g, _, v, b, S) => {
      const E = (a.component = wc(a, _, v))
      if ((Wn(a) && (E.ctx.renderer = M), Sc(E, !1, S), E.asyncDep)) {
        if ((v && v.registerDep(E, ue, S), !a.el)) {
          const w = (E.subTree = ce(Se))
          $(null, w, f, g)
        }
      } else ue(E, a, f, g, v, b, S)
    },
    De = (a, f, g) => {
      const _ = (f.component = a.component)
      if (hc(a, f, g))
        if (_.asyncDep && !_.asyncResolved) {
          te(_, f, g)
          return
        } else (_.next = f), _.update()
      else (f.el = a.el), (_.vnode = f)
    },
    ue = (a, f, g, _, v, b, S) => {
      const E = () => {
        if (a.isMounted) {
          let { next: P, bu: F, u: k, parent: K, vnode: oe } = a
          {
            const Ae = co(a)
            if (Ae) {
              P && ((P.el = oe.el), te(a, P, S)),
                Ae.asyncDep.then(() => {
                  a.isUnmounted || E()
                })
              return
            }
          }
          let Y = P,
            Pe
          wt(a, !1),
            P ? ((P.el = oe.el), te(a, P, S)) : (P = oe),
            F && Zn(F),
            (Pe = P.props && P.props.onVnodeBeforeUpdate) && qe(Pe, K, P, oe),
            wt(a, !0)
          const ve = ls(a),
            je = a.subTree
          ;(a.subTree = ve),
            A(je, ve, d(je.el), y(je), a, v, b),
            (P.el = ve.el),
            Y === null && pc(a, ve.el),
            k && Oe(k, v),
            (Pe = P.props && P.props.onVnodeUpdated) && Oe(() => qe(Pe, K, P, oe), v)
        } else {
          let P
          const { el: F, props: k } = f,
            { bm: K, m: oe, parent: Y, root: Pe, type: ve } = a,
            je = Vt(f)
          if (
            (wt(a, !1),
            K && Zn(K),
            !je && (P = k && k.onVnodeBeforeMount) && qe(P, Y, f),
            wt(a, !0),
            F && ae)
          ) {
            const Ae = () => {
              ;(a.subTree = ls(a)), ae(F, a.subTree, a, v, null)
            }
            je && ve.__asyncHydrate ? ve.__asyncHydrate(F, a, Ae) : Ae()
          } else {
            Pe.ce && Pe.ce._injectChildStyle(ve)
            const Ae = (a.subTree = ls(a))
            A(null, Ae, g, _, a, v, b), (f.el = Ae.el)
          }
          if ((oe && Oe(oe, v), !je && (P = k && k.onVnodeMounted))) {
            const Ae = f
            Oe(() => qe(P, Y, Ae), v)
          }
          ;(f.shapeFlag & 256 || (Y && Vt(Y.vnode) && Y.vnode.shapeFlag & 256)) &&
            a.a &&
            Oe(a.a, v),
            (a.isMounted = !0),
            (f = g = _ = null)
        }
      }
      a.scope.on()
      const w = (a.effect = new gi(E))
      a.scope.off()
      const x = (a.update = w.run.bind(w)),
        D = (a.job = w.runIfDirty.bind(w))
      ;(D.i = a), (D.id = a.uid), (w.scheduler = () => Gs(D)), wt(a, !0), x()
    },
    te = (a, f, g) => {
      f.component = a
      const _ = a.vnode.props
      ;(a.vnode = f), (a.next = null), Yl(a, f.props, _, g), tc(a, f.children, g), _t(), hr(a), bt()
    },
    J = (a, f, g, _, v, b, S, E, w = !1) => {
      const x = a && a.children,
        D = a ? a.shapeFlag : 0,
        P = f.children,
        { patchFlag: F, shapeFlag: k } = f
      if (F > 0) {
        if (F & 128) {
          it(x, P, g, _, v, b, S, E, w)
          return
        } else if (F & 256) {
          Ye(x, P, g, _, v, b, S, E, w)
          return
        }
      }
      k & 8
        ? (D & 16 && Me(x, v, b), P !== x && u(g, P))
        : D & 16
          ? k & 16
            ? it(x, P, g, _, v, b, S, E, w)
            : Me(x, v, b, !0)
          : (D & 8 && u(g, ''), k & 16 && me(P, g, _, v, b, S, E, w))
    },
    Ye = (a, f, g, _, v, b, S, E, w) => {
      ;(a = a || jt), (f = f || jt)
      const x = a.length,
        D = f.length,
        P = Math.min(x, D)
      let F
      for (F = 0; F < P; F++) {
        const k = (f[F] = w ? ht(f[F]) : Ge(f[F]))
        A(a[F], k, g, null, v, b, S, E, w)
      }
      x > D ? Me(a, v, b, !0, !1, P) : me(f, g, _, v, b, S, E, w, P)
    },
    it = (a, f, g, _, v, b, S, E, w) => {
      let x = 0
      const D = f.length
      let P = a.length - 1,
        F = D - 1
      for (; x <= P && x <= F; ) {
        const k = a[x],
          K = (f[x] = w ? ht(f[x]) : Ge(f[x]))
        if (Rt(k, K)) A(k, K, g, null, v, b, S, E, w)
        else break
        x++
      }
      for (; x <= P && x <= F; ) {
        const k = a[P],
          K = (f[F] = w ? ht(f[F]) : Ge(f[F]))
        if (Rt(k, K)) A(k, K, g, null, v, b, S, E, w)
        else break
        P--, F--
      }
      if (x > P) {
        if (x <= F) {
          const k = F + 1,
            K = k < D ? f[k].el : _
          for (; x <= F; ) A(null, (f[x] = w ? ht(f[x]) : Ge(f[x])), g, K, v, b, S, E, w), x++
        }
      } else if (x > F) for (; x <= P; ) Ce(a[x], v, b, !0), x++
      else {
        const k = x,
          K = x,
          oe = new Map()
        for (x = K; x <= F; x++) {
          const Te = (f[x] = w ? ht(f[x]) : Ge(f[x]))
          Te.key != null && oe.set(Te.key, x)
        }
        let Y,
          Pe = 0
        const ve = F - K + 1
        let je = !1,
          Ae = 0
        const qt = new Array(ve)
        for (x = 0; x < ve; x++) qt[x] = 0
        for (x = k; x <= P; x++) {
          const Te = a[x]
          if (Pe >= ve) {
            Ce(Te, v, b, !0)
            continue
          }
          let We
          if (Te.key != null) We = oe.get(Te.key)
          else
            for (Y = K; Y <= F; Y++)
              if (qt[Y - K] === 0 && Rt(Te, f[Y])) {
                We = Y
                break
              }
          We === void 0
            ? Ce(Te, v, b, !0)
            : ((qt[We - K] = x + 1),
              We >= Ae ? (Ae = We) : (je = !0),
              A(Te, f[We], g, null, v, b, S, E, w),
              Pe++)
        }
        const rr = je ? ic(qt) : jt
        for (Y = rr.length - 1, x = ve - 1; x >= 0; x--) {
          const Te = K + x,
            We = f[Te],
            ir = Te + 1 < D ? f[Te + 1].el : _
          qt[x] === 0
            ? A(null, We, g, ir, v, b, S, E, w)
            : je && (Y < 0 || x !== rr[Y] ? Ke(We, g, ir, 2) : Y--)
        }
      }
    },
    Ke = (a, f, g, _, v = null) => {
      const { el: b, type: S, transition: E, children: w, shapeFlag: x } = a
      if (x & 6) {
        Ke(a.component.subTree, f, g, _)
        return
      }
      if (x & 128) {
        a.suspense.move(f, g, _)
        return
      }
      if (x & 64) {
        S.move(a, f, g, M)
        return
      }
      if (S === pe) {
        s(b, f, g)
        for (let P = 0; P < w.length; P++) Ke(w[P], f, g, _)
        s(a.anchor, f, g)
        return
      }
      if (S === An) {
        N(a, f, g)
        return
      }
      if (_ !== 2 && x & 1 && E)
        if (_ === 0) E.beforeEnter(b), s(b, f, g), Oe(() => E.enter(b), v)
        else {
          const { leave: P, delayLeave: F, afterLeave: k } = E,
            K = () => s(b, f, g),
            oe = () => {
              P(b, () => {
                K(), k && k()
              })
            }
          F ? F(b, K, oe) : oe()
        }
      else s(b, f, g)
    },
    Ce = (a, f, g, _ = !1, v = !1) => {
      const {
        type: b,
        props: S,
        ref: E,
        children: w,
        dynamicChildren: x,
        shapeFlag: D,
        patchFlag: P,
        dirs: F,
        cacheIndex: k
      } = a
      if (
        (P === -2 && (v = !1),
        E != null && bs(E, null, g, a, !0),
        k != null && (f.renderCache[k] = void 0),
        D & 256)
      ) {
        f.ctx.deactivate(a)
        return
      }
      const K = D & 1 && F,
        oe = !Vt(a)
      let Y
      if ((oe && (Y = S && S.onVnodeBeforeUnmount) && qe(Y, f, a), D & 6)) yn(a.component, g, _)
      else {
        if (D & 128) {
          a.suspense.unmount(g, _)
          return
        }
        K && xt(a, null, f, 'beforeUnmount'),
          D & 64
            ? a.type.remove(a, f, g, M, _)
            : x && !x.hasOnce && (b !== pe || (P > 0 && P & 64))
              ? Me(x, f, g, !1, !0)
              : ((b === pe && P & 384) || (!v && D & 16)) && Me(w, f, g),
          _ && Lt(a)
      }
      ;((oe && (Y = S && S.onVnodeUnmounted)) || K) &&
        Oe(() => {
          Y && qe(Y, f, a), K && xt(a, null, f, 'unmounted')
        }, g)
    },
    Lt = (a) => {
      const { type: f, el: g, anchor: _, transition: v } = a
      if (f === pe) {
        Mt(g, _)
        return
      }
      if (f === An) {
        O(a)
        return
      }
      const b = () => {
        r(g), v && !v.persisted && v.afterLeave && v.afterLeave()
      }
      if (a.shapeFlag & 1 && v && !v.persisted) {
        const { leave: S, delayLeave: E } = v,
          w = () => S(g, b)
        E ? E(a.el, b, w) : w()
      } else b()
    },
    Mt = (a, f) => {
      let g
      for (; a !== f; ) (g = p(a)), r(a), (a = g)
      r(f)
    },
    yn = (a, f, g) => {
      const { bum: _, scope: v, job: b, subTree: S, um: E, m: w, a: x } = a
      br(w),
        br(x),
        _ && Zn(_),
        v.stop(),
        b && ((b.flags |= 8), Ce(S, a, f, g)),
        E && Oe(E, f),
        Oe(() => {
          a.isUnmounted = !0
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve())
    },
    Me = (a, f, g, _ = !1, v = !1, b = 0) => {
      for (let S = b; S < a.length; S++) Ce(a[S], f, g, _, v)
    },
    y = (a) => {
      if (a.shapeFlag & 6) return y(a.component.subTree)
      if (a.shapeFlag & 128) return a.suspense.next()
      const f = p(a.anchor || a.el),
        g = f && f[Pl]
      return g ? p(g) : f
    }
  let T = !1
  const R = (a, f, g) => {
      a == null
        ? f._vnode && Ce(f._vnode, null, null, !0)
        : A(f._vnode || null, a, f, null, null, null, g),
        (f._vnode = a),
        T || ((T = !0), hr(), Ni(), (T = !1))
    },
    M = { p: A, um: Ce, m: Ke, r: Lt, mt: he, mc: me, pc: J, pbc: W, n: y, o: e }
  let Q, ae
  return { render: R, hydrate: Q, createApp: Jl(R, Q) }
}
function os({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function wt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function rc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function lo(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (j(s) && j(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let c = r[i]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = r[i] = ht(r[i])), (c.el = o.el)),
        !n && c.patchFlag !== -2 && lo(o, c)),
        c.type === Gn && (c.el = o.el)
    }
}
function ic(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, c
  const l = e.length
  for (s = 0; s < l; s++) {
    const h = e[s]
    if (h !== 0) {
      if (((r = n[n.length - 1]), e[r] < h)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; ) (c = (i + o) >> 1), e[n[c]] < h ? (i = c + 1) : (o = c)
      h < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function co(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : co(t)
}
function br(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const oc = Symbol.for('v-scx'),
  lc = () => Qe(oc)
function Pn(e, t, n) {
  return ao(e, t, n)
}
function ao(e, t, n = re) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    c = de({}, n)
  let l
  if (Jn)
    if (i === 'sync') {
      const p = lc()
      l = p.__watcherHandles || (p.__watcherHandles = [])
    } else if (!t || s) c.once = !0
    else return { stop: Je, resume: Je, pause: Je }
  const h = _e
  c.call = (p, m, C) => Ve(p, h, m, C)
  let u = !1
  i === 'post'
    ? (c.scheduler = (p) => {
        Oe(p, h && h.suspense)
      })
    : i !== 'sync' &&
      ((u = !0),
      (c.scheduler = (p, m) => {
        m ? p() : Gs(p)
      })),
    (c.augmentJob = (p) => {
      t && (p.flags |= 4), u && ((p.flags |= 2), h && ((p.id = h.uid), (p.i = h)))
    })
  const d = wl(e, t, c)
  return l && l.push(d), d
}
function cc(e, t, n) {
  const s = this.proxy,
    r = fe(e) ? (e.includes('.') ? uo(s, e) : () => s[e]) : e.bind(s, s)
  let i
  B(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = vn(this),
    c = ao(r, i.bind(s), n)
  return o(), c
}
function uo(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const ac = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Tt(t)}Modifiers`] || e[`${It(t)}Modifiers`]
function uc(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || re
  let r = n
  const i = t.startsWith('update:'),
    o = i && ac(s, t.slice(7))
  o && (o.trim && (r = n.map((u) => (fe(u) ? u.trim() : u))), o.number && (r = n.map(Ho)))
  let c,
    l = s[(c = Xn(t))] || s[(c = Xn(Tt(t)))]
  !l && i && (l = s[(c = Xn(It(t)))]), l && Ve(l, e, 6, r)
  const h = s[c + 'Once']
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
    ;(e.emitted[c] = !0), Ve(h, e, 6, r)
  }
}
function fo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    c = !1
  if (!B(e)) {
    const l = (h) => {
      const u = fo(h, t, !0)
      u && ((c = !0), de(o, u))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !i && !c
    ? (le(e) && s.set(e, null), null)
    : (j(i) ? i.forEach((l) => (o[l] = null)) : de(o, i), le(e) && s.set(e, o), o)
}
function zn(e, t) {
  return !e || !Dn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, It(t)) || Z(e, t))
}
function ls(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: c,
      emit: l,
      render: h,
      renderCache: u,
      props: d,
      data: p,
      setupState: m,
      ctx: C,
      inheritAttrs: A
    } = e,
    H = Ln(e)
  let $, I
  try {
    if (n.shapeFlag & 4) {
      const O = r || s,
        U = O
      ;($ = Ge(h.call(U, O, u, d, m, p, C))), (I = c)
    } else {
      const O = t
      ;($ = Ge(O.length > 1 ? O(d, { attrs: c, slots: o, emit: l }) : O(d, null))),
        (I = t.props ? c : fc(c))
    }
  } catch (O) {
    ;(sn.length = 0), Un(O, e, 1), ($ = ce(Se))
  }
  let N = $
  if (I && A !== !1) {
    const O = Object.keys(I),
      { shapeFlag: U } = N
    O.length && U & 7 && (i && O.some($s) && (I = dc(I, i)), (N = vt(N, I, !1, !0)))
  }
  return (
    n.dirs && ((N = vt(N, null, !1, !0)), (N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs)),
    n.transition && fn(N, n.transition),
    ($ = N),
    Ln(H),
    $
  )
}
const fc = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Dn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  dc = (e, t) => {
    const n = {}
    for (const s in e) (!$s(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function hc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: c, patchFlag: l } = t,
    h = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? xr(s, o, h) : !!o
    if (l & 8) {
      const u = t.dynamicProps
      for (let d = 0; d < u.length; d++) {
        const p = u[d]
        if (o[p] !== s[p] && !zn(h, p)) return !0
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === o ? !1 : s ? (o ? xr(s, o, h) : !0) : !!o
  return !1
}
function xr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !zn(n, i)) return !0
  }
  return !1
}
function pc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const ho = (e) => e.__isSuspense
function gc(e, t) {
  t && t.pendingBranch ? (j(e) ? t.effects.push(...e) : t.effects.push(e)) : Cl(e)
}
const pe = Symbol.for('v-fgt'),
  Gn = Symbol.for('v-txt'),
  Se = Symbol.for('v-cmt'),
  An = Symbol.for('v-stc'),
  sn = []
let Le = null
function Re(e = !1) {
  sn.push((Le = e ? null : []))
}
function mc() {
  sn.pop(), (Le = sn[sn.length - 1] || null)
}
let dn = 1
function wr(e) {
  ;(dn += e), e < 0 && Le && (Le.hasOnce = !0)
}
function po(e) {
  return (e.dynamicChildren = dn > 0 ? Le || jt : null), mc(), dn > 0 && Le && Le.push(e), e
}
function He(e, t, n, s, r, i) {
  return po(q(e, t, n, s, r, i, !0))
}
function Rs(e, t, n, s, r) {
  return po(ce(e, t, n, s, r, !0))
}
function $n(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Rt(e, t) {
  return e.type === t.type && e.key === t.key
}
const go = ({ key: e }) => e ?? null,
  Tn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (fe(e) || be(e) || B(e) ? { i: ge, r: e, k: t, f: !!n } : e) : null
  )
function q(e, t = null, n = null, s = 0, r = null, i = e === pe ? 0 : 1, o = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && go(t),
    ref: t && Tn(t),
    scopeId: Di,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  }
  return (
    c ? (Xs(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= fe(n) ? 8 : 16),
    dn > 0 && !o && Le && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Le.push(l),
    l
  )
}
const ce = vc
function vc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Bl) && (e = Se), $n(e))) {
    const c = vt(e, t, !0)
    return (
      n && Xs(c, n),
      dn > 0 && !i && Le && (c.shapeFlag & 6 ? (Le[Le.indexOf(e)] = c) : Le.push(c)),
      (c.patchFlag = -2),
      c
    )
  }
  if ((Ac(e) && (e = e.__vccOpts), t)) {
    t = yc(t)
    let { class: c, style: l } = t
    c && !fe(c) && (t.class = gt(c)),
      le(l) && (Ws(l) && !j(l) && (l = de({}, l)), (t.style = Ds(l)))
  }
  const o = fe(e) ? 1 : ho(e) ? 128 : ji(e) ? 64 : le(e) ? 4 : B(e) ? 2 : 0
  return q(e, t, n, s, r, o, i, !0)
}
function yc(e) {
  return e ? (Ws(e) || eo(e) ? de({}, e) : e) : null
}
function vt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: c, transition: l } = e,
    h = t ? _c(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: h,
      key: h && go(h),
      ref: t && t.ref ? (n && i ? (j(i) ? i.concat(Tn(t)) : [i, Tn(t)]) : Tn(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: c,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== pe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && vt(e.ssContent),
      ssFallback: e.ssFallback && vt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }
  return l && s && fn(u, l.clone(u)), u
}
function Zt(e = ' ', t = 0) {
  return ce(Gn, null, e, t)
}
function Ps(e, t) {
  const n = ce(An, null, e)
  return (n.staticCount = t), n
}
function Pt(e = '', t = !1) {
  return t ? (Re(), Rs(Se, null, e)) : ce(Se, null, e)
}
function Ge(e) {
  return e == null || typeof e == 'boolean'
    ? ce(Se)
    : j(e)
      ? ce(pe, null, e.slice())
      : typeof e == 'object'
        ? ht(e)
        : ce(Gn, null, String(e))
}
function ht(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : vt(e)
}
function Xs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (j(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Xs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !eo(t)
        ? (t._ctx = ge)
        : r === 3 && ge && (ge.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    B(t)
      ? ((t = { default: t, _ctx: ge }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Zt(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function _c(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = gt([t.class, s.class]))
      else if (r === 'style') t.style = Ds([t.style, s.style])
      else if (Dn(r)) {
        const i = t[r],
          o = s[r]
        o && i !== o && !(j(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function qe(e, t, n, s = null) {
  Ve(e, t, 7, [n, s])
}
const bc = Yi()
let xc = 0
function wc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || bc,
    i = {
      uid: xc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new zo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: no(s, r),
      emitsOptions: fo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: re,
      inheritAttrs: s.inheritAttrs,
      ctx: re,
      data: re,
      props: re,
      attrs: re,
      slots: re,
      refs: re,
      setupState: re,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = uc.bind(null, i)), e.ce && e.ce(i), i
  )
}
let _e = null
const Ec = () => _e || ge
let Nn, As
{
  const e = fi(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;(Nn = t('__VUE_INSTANCE_SETTERS__', (n) => (_e = n))),
    (As = t('__VUE_SSR_SETTERS__', (n) => (Jn = n)))
}
const vn = (e) => {
    const t = _e
    return (
      Nn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Nn(t)
      }
    )
  },
  Er = () => {
    _e && _e.scope.off(), Nn(null)
  }
function mo(e) {
  return e.vnode.shapeFlag & 4
}
let Jn = !1
function Sc(e, t = !1, n = !1) {
  t && As(t)
  const { props: s, children: r } = e.vnode,
    i = mo(e)
  Ql(e, s, i, t), ec(e, r, n)
  const o = i ? Cc(e, t) : void 0
  return t && As(!1), o
}
function Cc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Vl))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Pc(e) : null),
      i = vn(e)
    _t()
    const o = mn(s, e, 0, [e.props, r])
    if ((bt(), i(), oi(o))) {
      if ((Vt(e) || Ki(e), o.then(Er, Er), t))
        return o
          .then((c) => {
            Sr(e, c, t)
          })
          .catch((c) => {
            Un(c, e, 0)
          })
      e.asyncDep = o
    } else Sr(e, o, t)
  } else vo(e, t)
}
function Sr(e, t, n) {
  B(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : le(t) && (e.setupState = Ii(t)),
    vo(e, n)
}
let Cr
function vo(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && Cr && !s.render) {
      const r = s.template || Qs(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = s,
          h = de(de({ isCustomElement: i, delimiters: c }, o), l)
        s.render = Cr(r, h)
      }
    }
    e.render = s.render || Je
  }
  {
    const r = vn(e)
    _t()
    try {
      Ul(e)
    } finally {
      bt(), r()
    }
  }
}
const Rc = {
  get(e, t) {
    return xe(e, 'get', ''), e[t]
  }
}
function Pc(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Rc), slots: e.slots, emit: e.emit, expose: t }
}
function Qn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ii(gl(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in nn) return nn[n](e)
          },
          has(t, n) {
            return n in t || n in nn
          }
        }))
    : e.proxy
}
function Ac(e) {
  return B(e) && '__vccOpts' in e
}
const Fe = (e, t) => bl(e, t, Jn)
function Zs(e, t, n) {
  const s = arguments.length
  return s === 2
    ? le(t) && !j(t)
      ? $n(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && $n(n) && (n = [n]),
      ce(e, t, n))
}
const Tc = '3.5.3'
/**
 * @vue/runtime-dom v3.5.3
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ts
const Rr = typeof window < 'u' && window.trustedTypes
if (Rr)
  try {
    Ts = Rr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const yo = Ts ? (e) => Ts.createHTML(e) : (e) => e,
  Oc = 'http://www.w3.org/2000/svg',
  Ic = 'http://www.w3.org/1998/Math/MathML',
  et = typeof document < 'u' ? document : null,
  Pr = et && et.createElement('template'),
  Lc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? et.createElementNS(Oc, e)
          : t === 'mathml'
            ? et.createElementNS(Ic, e)
            : n
              ? et.createElement(e, { is: n })
              : et.createElement(e)
      return e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r
    },
    createText: (e) => et.createTextNode(e),
    createComment: (e) => et.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => et.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
      else {
        Pr.innerHTML = yo(
          s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        )
        const c = Pr.content
        if (s === 'svg' || s === 'mathml') {
          const l = c.firstChild
          for (; l.firstChild; ) c.appendChild(l.firstChild)
          c.removeChild(l)
        }
        t.insertBefore(c, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  lt = 'transition',
  Gt = 'animation',
  hn = Symbol('_vtc'),
  _o = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Mc = de({}, Hi, _o),
  $c = (e) => ((e.displayName = 'Transition'), (e.props = Mc), e),
  Nc = $c((e, { slots: t }) => Zs(Ol, Fc(e), t)),
  Et = (e, t = []) => {
    j(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Ar = (e) => (e ? (j(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Fc(e) {
  const t = {}
  for (const L in e) L in _o || (t[L] = e[L])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: c = `${n}-enter-to`,
      appearFromClass: l = i,
      appearActiveClass: h = o,
      appearToClass: u = c,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`
    } = e,
    C = Dc(r),
    A = C && C[0],
    H = C && C[1],
    {
      onBeforeEnter: $,
      onEnter: I,
      onEnterCancelled: N,
      onLeave: O,
      onLeaveCancelled: U,
      onBeforeAppear: ne = $,
      onAppear: ee = I,
      onAppearCancelled: me = N
    } = t,
    V = (L, G, he) => {
      St(L, G ? u : c), St(L, G ? h : o), he && he()
    },
    W = (L, G) => {
      ;(L._isLeaving = !1), St(L, d), St(L, m), St(L, p), G && G()
    },
    ie = (L) => (G, he) => {
      const De = L ? ee : I,
        ue = () => V(G, L, he)
      Et(De, [G, ue]),
        Tr(() => {
          St(G, L ? l : i), ct(G, L ? u : c), Ar(De) || Or(G, s, A, ue)
        })
    }
  return de(t, {
    onBeforeEnter(L) {
      Et($, [L]), ct(L, i), ct(L, o)
    },
    onBeforeAppear(L) {
      Et(ne, [L]), ct(L, l), ct(L, h)
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(L, G) {
      L._isLeaving = !0
      const he = () => W(L, G)
      ct(L, d),
        ct(L, p),
        kc(),
        Tr(() => {
          L._isLeaving && (St(L, d), ct(L, m), Ar(O) || Or(L, s, H, he))
        }),
        Et(O, [L, he])
    },
    onEnterCancelled(L) {
      V(L, !1), Et(N, [L])
    },
    onAppearCancelled(L) {
      V(L, !0), Et(me, [L])
    },
    onLeaveCancelled(L) {
      W(L), Et(U, [L])
    }
  })
}
function Dc(e) {
  if (e == null) return null
  if (le(e)) return [cs(e.enter), cs(e.leave)]
  {
    const t = cs(e)
    return [t, t]
  }
}
function cs(e) {
  return ko(e)
}
function ct(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[hn] || (e[hn] = new Set())).add(t)
}
function St(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[hn]
  n && (n.delete(t), n.size || (e[hn] = void 0))
}
function Tr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let jc = 0
function Or(e, t, n, s) {
  const r = (e._endId = ++jc),
    i = () => {
      r === e._endId && s()
    }
  if (n) return setTimeout(i, n)
  const { type: o, timeout: c, propCount: l } = Hc(e, t)
  if (!o) return s()
  const h = o + 'end'
  let u = 0
  const d = () => {
      e.removeEventListener(h, p), i()
    },
    p = (m) => {
      m.target === e && ++u >= l && d()
    }
  setTimeout(() => {
    u < l && d()
  }, c + 1),
    e.addEventListener(h, p)
}
function Hc(e, t) {
  const n = window.getComputedStyle(e),
    s = (C) => (n[C] || '').split(', '),
    r = s(`${lt}Delay`),
    i = s(`${lt}Duration`),
    o = Ir(r, i),
    c = s(`${Gt}Delay`),
    l = s(`${Gt}Duration`),
    h = Ir(c, l)
  let u = null,
    d = 0,
    p = 0
  t === lt
    ? o > 0 && ((u = lt), (d = o), (p = i.length))
    : t === Gt
      ? h > 0 && ((u = Gt), (d = h), (p = l.length))
      : ((d = Math.max(o, h)),
        (u = d > 0 ? (o > h ? lt : Gt) : null),
        (p = u ? (u === lt ? i.length : l.length) : 0))
  const m = u === lt && /\b(transform|all)(,|$)/.test(s(`${lt}Property`).toString())
  return { type: u, timeout: d, propCount: p, hasTransform: m }
}
function Ir(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Lr(n) + Lr(e[s])))
}
function Lr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function kc() {
  return document.body.offsetHeight
}
function Bc(e, t, n) {
  const s = e[hn]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const Fn = Symbol('_vod'),
  bo = Symbol('_vsh'),
  Vc = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[Fn] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Jt(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Jt(e, !0), s.enter(e))
            : s.leave(e, () => {
                Jt(e, !1)
              })
          : Jt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Jt(e, t)
    }
  }
function Jt(e, t) {
  ;(e.style.display = t ? e[Fn] : 'none'), (e[bo] = !t)
}
const Uc = Symbol(''),
  Kc = /(^|;)\s*display\s*:/
function Wc(e, t, n) {
  const s = e.style,
    r = fe(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (fe(t))
        for (const o of t.split(';')) {
          const c = o.slice(0, o.indexOf(':')).trim()
          n[c] == null && On(s, c, '')
        }
      else for (const o in t) n[o] == null && On(s, o, '')
    for (const o in n) o === 'display' && (i = !0), On(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[Uc]
      o && (n += ';' + o), (s.cssText = n), (i = Kc.test(n))
    }
  } else t && e.removeAttribute('style')
  Fn in e && ((e[Fn] = i ? s.display : ''), e[bo] && (s.display = 'none'))
}
const Mr = /\s*!important$/
function On(e, t, n) {
  if (j(n)) n.forEach((s) => On(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = qc(e, t)
    Mr.test(n) ? e.setProperty(It(s), n.replace(Mr, ''), 'important') : (e[s] = n)
  }
}
const $r = ['Webkit', 'Moz', 'ms'],
  as = {}
function qc(e, t) {
  const n = as[t]
  if (n) return n
  let s = Tt(t)
  if (s !== 'filter' && s in e) return (as[t] = s)
  s = ai(s)
  for (let r = 0; r < $r.length; r++) {
    const i = $r[r] + s
    if (i in e) return (as[t] = i)
  }
  return t
}
const Nr = 'http://www.w3.org/1999/xlink'
function Fr(e, t, n, s, r, i = qo(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Nr, t.slice(6, t.length))
      : e.setAttributeNS(Nr, t, n)
    : n == null || (i && !di(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : yt(n) ? String(n) : n)
}
function zc(e, t, n, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? yo(n) : n)
    return
  }
  const r = e.tagName
  if (t === 'value' && r !== 'PROGRESS' && !r.includes('-')) {
    const o = r === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(o !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let i = !1
  if (n === '' || n == null) {
    const o = typeof e[t]
    o === 'boolean'
      ? (n = di(n))
      : n == null && o === 'string'
        ? ((n = ''), (i = !0))
        : o === 'number' && ((n = 0), (i = !0))
  }
  try {
    e[t] = n
  } catch {}
  i && e.removeAttribute(t)
}
function Gc(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Jc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Dr = Symbol('_vei')
function Qc(e, t, n, s, r = null) {
  const i = e[Dr] || (e[Dr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [c, l] = Yc(t)
    if (s) {
      const h = (i[t] = ea(s, r))
      Gc(e, c, h, l)
    } else o && (Jc(e, c, o, l), (i[t] = void 0))
  }
}
const jr = /(?:Once|Passive|Capture)$/
function Yc(e) {
  let t
  if (jr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(jr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : It(e.slice(2)), t]
}
let us = 0
const Xc = Promise.resolve(),
  Zc = () => us || (Xc.then(() => (us = 0)), (us = Date.now()))
function ea(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ve(ta(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Zc()), n
}
function ta(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Hr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  na = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? Bc(e, s, o)
      : t === 'style'
        ? Wc(e, n, s)
        : Dn(t)
          ? $s(t) || Qc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : sa(e, t, s, o)
              )
            ? (zc(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Fr(e, t, s, o, i, t !== 'value'))
            : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s),
              Fr(e, t, s, o))
  }
function sa(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Hr(t) && B(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return Hr(t) && fe(n) ? !1 : !!(t in e || (e._isVueCE && (/[A-Z]/.test(t) || !fe(n))))
}
const ra = de({ patchProp: na }, Lc)
let kr
function ia() {
  return kr || (kr = nc(ra))
}
const oa = (...e) => {
  const t = ia().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = ca(s)
      if (!r) return
      const i = t._component
      !B(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = '')
      const o = n(r, !1, la(r))
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), o
      )
    }),
    t
  )
}
function la(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function ca(e) {
  return fe(e) ? document.querySelector(e) : e
}
const aa = '/assets/logo-Cfff3W3x.svg'
/*!
 * vue-router v4.4.3
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Ft = typeof document < 'u'
function ua(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const X = Object.assign
function fs(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Ue(r) ? r.map(e) : e(r)
  }
  return n
}
const rn = () => {},
  Ue = Array.isArray,
  xo = /#/g,
  fa = /&/g,
  da = /\//g,
  ha = /=/g,
  pa = /\?/g,
  wo = /\+/g,
  ga = /%5B/g,
  ma = /%5D/g,
  Eo = /%5E/g,
  va = /%60/g,
  So = /%7B/g,
  ya = /%7C/g,
  Co = /%7D/g,
  _a = /%20/g
function er(e) {
  return encodeURI('' + e)
    .replace(ya, '|')
    .replace(ga, '[')
    .replace(ma, ']')
}
function ba(e) {
  return er(e).replace(So, '{').replace(Co, '}').replace(Eo, '^')
}
function Os(e) {
  return er(e)
    .replace(wo, '%2B')
    .replace(_a, '+')
    .replace(xo, '%23')
    .replace(fa, '%26')
    .replace(va, '`')
    .replace(So, '{')
    .replace(Co, '}')
    .replace(Eo, '^')
}
function xa(e) {
  return Os(e).replace(ha, '%3D')
}
function wa(e) {
  return er(e).replace(xo, '%23').replace(pa, '%3F')
}
function Ea(e) {
  return e == null ? '' : wa(e).replace(da, '%2F')
}
function pn(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Sa = /\/$/,
  Ca = (e) => e.replace(Sa, '')
function ds(e, t, n = '/') {
  let s,
    r = {},
    i = '',
    o = ''
  const c = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 && ((s = t.slice(0, l)), (i = t.slice(l + 1, c > -1 ? c : t.length)), (r = e(i))),
    c > -1 && ((s = s || t.slice(0, c)), (o = t.slice(c, t.length))),
    (s = Ta(s ?? t, n)),
    { fullPath: s + (i && '?') + i + o, path: s, query: r, hash: pn(o) }
  )
}
function Ra(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Br(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Pa(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Kt(t.matched[s], n.matched[r]) &&
    Ro(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Kt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ro(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Aa(e[n], t[n])) return !1
  return !0
}
function Aa(e, t) {
  return Ue(e) ? Vr(e, t) : Ue(t) ? Vr(t, e) : e === t
}
function Vr(e, t) {
  return Ue(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Ta(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let i = n.length - 1,
    o,
    c
  for (o = 0; o < s.length; o++)
    if (((c = s[o]), c !== '.'))
      if (c === '..') i > 1 && i--
      else break
  return n.slice(0, i).join('/') + '/' + s.slice(o).join('/')
}
const at = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0
}
var gn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(gn || (gn = {}))
var on
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(on || (on = {}))
function Oa(e) {
  if (!e)
    if (Ft) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Ca(e)
}
const Ia = /^[^#]+#/
function La(e, t) {
  return e.replace(Ia, '#') + t
}
function Ma(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const Yn = () => ({ left: window.scrollX, top: window.scrollY })
function $a(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = Ma(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Ur(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Is = new Map()
function Na(e, t) {
  Is.set(e, t)
}
function Fa(e) {
  const t = Is.get(e)
  return Is.delete(e), t
}
let Da = () => location.protocol + '//' + location.host
function Po(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let c = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = r.slice(c)
    return l[0] !== '/' && (l = '/' + l), Br(l, '')
  }
  return Br(n, e) + s + r
}
function ja(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const c = ({ state: p }) => {
    const m = Po(e, location),
      C = n.value,
      A = t.value
    let H = 0
    if (p) {
      if (((n.value = m), (t.value = p), o && o === C)) {
        o = null
        return
      }
      H = A ? p.position - A.position : 0
    } else s(m)
    r.forEach(($) => {
      $(n.value, C, {
        delta: H,
        type: gn.pop,
        direction: H ? (H > 0 ? on.forward : on.back) : on.unknown
      })
    })
  }
  function l() {
    o = n.value
  }
  function h(p) {
    r.push(p)
    const m = () => {
      const C = r.indexOf(p)
      C > -1 && r.splice(C, 1)
    }
    return i.push(m), m
  }
  function u() {
    const { history: p } = window
    p.state && p.replaceState(X({}, p.state, { scroll: Yn() }), '')
  }
  function d() {
    for (const p of i) p()
    ;(i = []),
      window.removeEventListener('popstate', c),
      window.removeEventListener('beforeunload', u)
  }
  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: l, listen: h, destroy: d }
  )
}
function Kr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Yn() : null
  }
}
function Ha(e) {
  const { history: t, location: n } = window,
    s = { value: Po(e, n) },
    r = { value: t.state }
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function i(l, h, u) {
    const d = e.indexOf('#'),
      p = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + l : Da() + e + l
    try {
      t[u ? 'replaceState' : 'pushState'](h, '', p), (r.value = h)
    } catch (m) {
      console.error(m), n[u ? 'replace' : 'assign'](p)
    }
  }
  function o(l, h) {
    const u = X({}, t.state, Kr(r.value.back, l, r.value.forward, !0), h, {
      position: r.value.position
    })
    i(l, u, !0), (s.value = l)
  }
  function c(l, h) {
    const u = X({}, r.value, t.state, { forward: l, scroll: Yn() })
    i(u.current, u, !0)
    const d = X({}, Kr(s.value, l, null), { position: u.position + 1 }, h)
    i(l, d, !1), (s.value = l)
  }
  return { location: s, state: r, push: c, replace: o }
}
function ka(e) {
  e = Oa(e)
  const t = Ha(e),
    n = ja(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const r = X({ location: '', base: e, go: s, createHref: La.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
function Ba(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Ao(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const To = Symbol('')
var Wr
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Wr || (Wr = {}))
function Wt(e, t) {
  return X(new Error(), { type: e, [To]: !0 }, t)
}
function Ze(e, t) {
  return e instanceof Error && To in e && (t == null || !!(e.type & t))
}
const qr = '[^/]+?',
  Va = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ua = /[.+*?^${}()[\]/\\]/g
function Ka(e, t) {
  const n = X({}, Va, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const h of e) {
    const u = h.length ? [] : [90]
    n.strict && !h.length && (r += '/')
    for (let d = 0; d < h.length; d++) {
      const p = h[d]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0) d || (r += '/'), (r += p.value.replace(Ua, '\\$&')), (m += 40)
      else if (p.type === 1) {
        const { value: C, repeatable: A, optional: H, regexp: $ } = p
        i.push({ name: C, repeatable: A, optional: H })
        const I = $ || qr
        if (I !== qr) {
          m += 10
          try {
            new RegExp(`(${I})`)
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${C}" (${I}): ` + O.message)
          }
        }
        let N = A ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`
        d || (N = H && h.length < 2 ? `(?:/${N})` : '/' + N),
          H && (N += '?'),
          (r += N),
          (m += 20),
          H && (m += -8),
          A && (m += -20),
          I === '.*' && (m += -50)
      }
      u.push(m)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const h = s.length - 1
    s[h][s[h].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function c(h) {
    const u = h.match(o),
      d = {}
    if (!u) return null
    for (let p = 1; p < u.length; p++) {
      const m = u[p] || '',
        C = i[p - 1]
      d[C.name] = m && C.repeatable ? m.split('/') : m
    }
    return d
  }
  function l(h) {
    let u = '',
      d = !1
    for (const p of e) {
      ;(!d || !u.endsWith('/')) && (u += '/'), (d = !1)
      for (const m of p)
        if (m.type === 0) u += m.value
        else if (m.type === 1) {
          const { value: C, repeatable: A, optional: H } = m,
            $ = C in h ? h[C] : ''
          if (Ue($) && !A)
            throw new Error(
              `Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`
            )
          const I = Ue($) ? $.join('/') : $
          if (!I)
            if (H) p.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${C}"`)
          u += I
        }
    }
    return u || '/'
  }
  return { re: o, score: s, keys: i, parse: c, stringify: l }
}
function Wa(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function Oo(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = Wa(s[n], r[n])
    if (i) return i
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (zr(s)) return 1
    if (zr(r)) return -1
  }
  return r.length - s.length
}
function zr(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const qa = { type: 0, value: '' },
  za = /[a-zA-Z0-9_]/
function Ga(e) {
  if (!e) return [[]]
  if (e === '/') return [[qa]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${h}": ${m}`)
  }
  let n = 0,
    s = n
  const r = []
  let i
  function o() {
    i && r.push(i), (i = [])
  }
  let c = 0,
    l,
    h = '',
    u = ''
  function d() {
    h &&
      (n === 0
        ? i.push({ type: 0, value: h })
        : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
              type: 1,
              value: h,
              regexp: u,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?'
            }))
          : t('Invalid state to consume buffer'),
      (h = ''))
  }
  function p() {
    h += l
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (h && d(), o()) : l === ':' ? (d(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        l === '('
          ? (n = 2)
          : za.test(l)
            ? p()
            : (d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l)
        break
      case 3:
        d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--, (u = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), d(), o(), r
}
function Ja(e, t, n) {
  const s = Ka(Ga(e.path), n),
    r = X(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Qa(e, t) {
  const n = [],
    s = new Map()
  t = Qr({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(d) {
    return s.get(d)
  }
  function i(d, p, m) {
    const C = !m,
      A = Ya(d)
    A.aliasOf = m && m.record
    const H = Qr(t, d),
      $ = [A]
    if ('alias' in d) {
      const O = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const U of O)
        $.push(
          X({}, A, {
            components: m ? m.record.components : A.components,
            path: U,
            aliasOf: m ? m.record : A
          })
        )
    }
    let I, N
    for (const O of $) {
      const { path: U } = O
      if (p && U[0] !== '/') {
        const ne = p.record.path,
          ee = ne[ne.length - 1] === '/' ? '' : '/'
        O.path = p.record.path + (U && ee + U)
      }
      if (
        ((I = Ja(O, p, H)),
        m
          ? m.alias.push(I)
          : ((N = N || I), N !== I && N.alias.push(I), C && d.name && !Jr(I) && o(d.name)),
        Io(I) && l(I),
        A.children)
      ) {
        const ne = A.children
        for (let ee = 0; ee < ne.length; ee++) i(ne[ee], I, m && m.children[ee])
      }
      m = m || I
    }
    return N
      ? () => {
          o(N)
        }
      : rn
  }
  function o(d) {
    if (Ao(d)) {
      const p = s.get(d)
      p && (s.delete(d), n.splice(n.indexOf(p), 1), p.children.forEach(o), p.alias.forEach(o))
    } else {
      const p = n.indexOf(d)
      p > -1 &&
        (n.splice(p, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(o),
        d.alias.forEach(o))
    }
  }
  function c() {
    return n
  }
  function l(d) {
    const p = eu(d, n)
    n.splice(p, 0, d), d.record.name && !Jr(d) && s.set(d.record.name, d)
  }
  function h(d, p) {
    let m,
      C = {},
      A,
      H
    if ('name' in d && d.name) {
      if (((m = s.get(d.name)), !m)) throw Wt(1, { location: d })
      ;(H = m.record.name),
        (C = X(
          Gr(
            p.params,
            m.keys
              .filter((N) => !N.optional)
              .concat(m.parent ? m.parent.keys.filter((N) => N.optional) : [])
              .map((N) => N.name)
          ),
          d.params &&
            Gr(
              d.params,
              m.keys.map((N) => N.name)
            )
        )),
        (A = m.stringify(C))
    } else if (d.path != null)
      (A = d.path), (m = n.find((N) => N.re.test(A))), m && ((C = m.parse(A)), (H = m.record.name))
    else {
      if (((m = p.name ? s.get(p.name) : n.find((N) => N.re.test(p.path))), !m))
        throw Wt(1, { location: d, currentLocation: p })
      ;(H = m.record.name), (C = X({}, p.params, d.params)), (A = m.stringify(C))
    }
    const $ = []
    let I = m
    for (; I; ) $.unshift(I.record), (I = I.parent)
    return { name: H, path: A, params: C, matched: $, meta: Za($) }
  }
  e.forEach((d) => i(d))
  function u() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: i,
    resolve: h,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: c,
    getRecordMatcher: r
  }
}
function Gr(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function Ya(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Xa(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function Xa(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Jr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Za(e) {
  return e.reduce((t, n) => X(t, n.meta), {})
}
function Qr(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function eu(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    Oo(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const r = tu(e)
  return r && (s = t.lastIndexOf(r, s - 1)), s
}
function tu(e) {
  let t = e
  for (; (t = t.parent); ) if (Io(t) && Oo(e, t) === 0) return t
}
function Io({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function nu(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(wo, ' '),
      o = i.indexOf('='),
      c = pn(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : pn(i.slice(o + 1))
    if (c in t) {
      let h = t[c]
      Ue(h) || (h = t[c] = [h]), h.push(l)
    } else t[c] = l
  }
  return t
}
function Yr(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = xa(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Ue(s) ? s.map((i) => i && Os(i)) : [s && Os(s)]).forEach((i) => {
      i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
    })
  }
  return t
}
function su(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Ue(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const ru = Symbol(''),
  Xr = Symbol(''),
  tr = Symbol(''),
  nr = Symbol(''),
  Ls = Symbol('')
function Qt() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function pt(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((c, l) => {
      const h = (p) => {
          p === !1
            ? l(Wt(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : Ba(p)
                ? l(Wt(2, { from: t, to: p }))
                : (o && s.enterCallbacks[r] === o && typeof p == 'function' && o.push(p), c())
        },
        u = i(() => e.call(s && s.instances[r], t, n, h))
      let d = Promise.resolve(u)
      e.length < 3 && (d = d.then(h)), d.catch((p) => l(p))
    })
}
function hs(e, t, n, s, r = (i) => i()) {
  const i = []
  for (const o of e)
    for (const c in o.components) {
      let l = o.components[c]
      if (!(t !== 'beforeRouteEnter' && !o.instances[c]))
        if (iu(l)) {
          const u = (l.__vccOpts || l)[t]
          u && i.push(pt(u, n, s, o, c, r))
        } else {
          let h = l()
          i.push(() =>
            h.then((u) => {
              if (!u)
                return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`))
              const d = ua(u) ? u.default : u
              o.components[c] = d
              const m = (d.__vccOpts || d)[t]
              return m && pt(m, n, s, o, c, r)()
            })
          )
        }
    }
  return i
}
function iu(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function Zr(e) {
  const t = Qe(tr),
    n = Qe(nr),
    s = Fe(() => {
      const l = Ne(e.to)
      return t.resolve(l)
    }),
    r = Fe(() => {
      const { matched: l } = s.value,
        { length: h } = l,
        u = l[h - 1],
        d = n.matched
      if (!u || !d.length) return -1
      const p = d.findIndex(Kt.bind(null, u))
      if (p > -1) return p
      const m = ei(l[h - 2])
      return h > 1 && ei(u) === m && d[d.length - 1].path !== m
        ? d.findIndex(Kt.bind(null, l[h - 2]))
        : p
    }),
    i = Fe(() => r.value > -1 && cu(n.params, s.value.params)),
    o = Fe(() => r.value > -1 && r.value === n.matched.length - 1 && Ro(n.params, s.value.params))
  function c(l = {}) {
    return lu(l) ? t[Ne(e.replace) ? 'replace' : 'push'](Ne(e.to)).catch(rn) : Promise.resolve()
  }
  return { route: s, href: Fe(() => s.value.href), isActive: i, isExactActive: o, navigate: c }
}
const ou = Kn({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: Zr,
    setup(e, { slots: t }) {
      const n = Vn(Zr(e)),
        { options: s } = Qe(tr),
        r = Fe(() => ({
          [ti(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [ti(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : Zs(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
              },
              i
            )
      }
    }
  }),
  Dt = ou
function lu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function cu(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Ue(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1
  }
  return !0
}
function ei(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const ti = (e, t, n) => e ?? t ?? n,
  au = Kn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Qe(Ls),
        r = Fe(() => e.route || s.value),
        i = Qe(Xr, 0),
        o = Fe(() => {
          let h = Ne(i)
          const { matched: u } = r.value
          let d
          for (; (d = u[h]) && !d.components; ) h++
          return h
        }),
        c = Fe(() => r.value.matched[o.value])
      Rn(
        Xr,
        Fe(() => o.value + 1)
      ),
        Rn(ru, c),
        Rn(Ls, r)
      const l = ut()
      return (
        Pn(
          () => [l.value, c.value, e.name],
          ([h, u, d], [p, m, C]) => {
            u &&
              ((u.instances[d] = h),
              m &&
                m !== u &&
                h &&
                h === p &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              h && u && (!m || !Kt(u, m) || !p) && (u.enterCallbacks[d] || []).forEach((A) => A(h))
          },
          { flush: 'post' }
        ),
        () => {
          const h = r.value,
            u = e.name,
            d = c.value,
            p = d && d.components[u]
          if (!p) return ni(n.default, { Component: p, route: h })
          const m = d.props[u],
            C = m ? (m === !0 ? h.params : typeof m == 'function' ? m(h) : m) : null,
            H = Zs(
              p,
              X({}, C, t, {
                onVnodeUnmounted: ($) => {
                  $.component.isUnmounted && (d.instances[u] = null)
                },
                ref: l
              })
            )
          return ni(n.default, { Component: H, route: h }) || H
        }
      )
    }
  })
function ni(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Lo = au
function uu(e) {
  const t = Qa(e.routes, e),
    n = e.parseQuery || nu,
    s = e.stringifyQuery || Yr,
    r = e.history,
    i = Qt(),
    o = Qt(),
    c = Qt(),
    l = ml(at)
  let h = at
  Ft && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const u = fs.bind(null, (y) => '' + y),
    d = fs.bind(null, Ea),
    p = fs.bind(null, pn)
  function m(y, T) {
    let R, M
    return Ao(y) ? ((R = t.getRecordMatcher(y)), (M = T)) : (M = y), t.addRoute(M, R)
  }
  function C(y) {
    const T = t.getRecordMatcher(y)
    T && t.removeRoute(T)
  }
  function A() {
    return t.getRoutes().map((y) => y.record)
  }
  function H(y) {
    return !!t.getRecordMatcher(y)
  }
  function $(y, T) {
    if (((T = X({}, T || l.value)), typeof y == 'string')) {
      const f = ds(n, y, T.path),
        g = t.resolve({ path: f.path }, T),
        _ = r.createHref(f.fullPath)
      return X(f, g, { params: p(g.params), hash: pn(f.hash), redirectedFrom: void 0, href: _ })
    }
    let R
    if (y.path != null) R = X({}, y, { path: ds(n, y.path, T.path).path })
    else {
      const f = X({}, y.params)
      for (const g in f) f[g] == null && delete f[g]
      ;(R = X({}, y, { params: d(f) })), (T.params = d(T.params))
    }
    const M = t.resolve(R, T),
      Q = y.hash || ''
    M.params = u(p(M.params))
    const ae = Ra(s, X({}, y, { hash: ba(Q), path: M.path })),
      a = r.createHref(ae)
    return X({ fullPath: ae, hash: Q, query: s === Yr ? su(y.query) : y.query || {} }, M, {
      redirectedFrom: void 0,
      href: a
    })
  }
  function I(y) {
    return typeof y == 'string' ? ds(n, y, l.value.path) : X({}, y)
  }
  function N(y, T) {
    if (h !== y) return Wt(8, { from: T, to: y })
  }
  function O(y) {
    return ee(y)
  }
  function U(y) {
    return O(X(I(y), { replace: !0 }))
  }
  function ne(y) {
    const T = y.matched[y.matched.length - 1]
    if (T && T.redirect) {
      const { redirect: R } = T
      let M = typeof R == 'function' ? R(y) : R
      return (
        typeof M == 'string' &&
          ((M = M.includes('?') || M.includes('#') ? (M = I(M)) : { path: M }), (M.params = {})),
        X({ query: y.query, hash: y.hash, params: M.path != null ? {} : y.params }, M)
      )
    }
  }
  function ee(y, T) {
    const R = (h = $(y)),
      M = l.value,
      Q = y.state,
      ae = y.force,
      a = y.replace === !0,
      f = ne(R)
    if (f)
      return ee(
        X(I(f), { state: typeof f == 'object' ? X({}, Q, f.state) : Q, force: ae, replace: a }),
        T || R
      )
    const g = R
    g.redirectedFrom = T
    let _
    return (
      !ae && Pa(s, M, R) && ((_ = Wt(16, { to: g, from: M })), Ke(M, M, !0, !1)),
      (_ ? Promise.resolve(_) : W(g, M))
        .catch((v) => (Ze(v) ? (Ze(v, 2) ? v : it(v)) : J(v, g, M)))
        .then((v) => {
          if (v) {
            if (Ze(v, 2))
              return ee(
                X({ replace: a }, I(v.to), {
                  state: typeof v.to == 'object' ? X({}, Q, v.to.state) : Q,
                  force: ae
                }),
                T || g
              )
          } else v = L(g, M, !0, a, Q)
          return ie(g, M, v), v
        })
    )
  }
  function me(y, T) {
    const R = N(y, T)
    return R ? Promise.reject(R) : Promise.resolve()
  }
  function V(y) {
    const T = Mt.values().next().value
    return T && typeof T.runWithContext == 'function' ? T.runWithContext(y) : y()
  }
  function W(y, T) {
    let R
    const [M, Q, ae] = fu(y, T)
    R = hs(M.reverse(), 'beforeRouteLeave', y, T)
    for (const f of M)
      f.leaveGuards.forEach((g) => {
        R.push(pt(g, y, T))
      })
    const a = me.bind(null, y, T)
    return (
      R.push(a),
      Me(R)
        .then(() => {
          R = []
          for (const f of i.list()) R.push(pt(f, y, T))
          return R.push(a), Me(R)
        })
        .then(() => {
          R = hs(Q, 'beforeRouteUpdate', y, T)
          for (const f of Q)
            f.updateGuards.forEach((g) => {
              R.push(pt(g, y, T))
            })
          return R.push(a), Me(R)
        })
        .then(() => {
          R = []
          for (const f of ae)
            if (f.beforeEnter)
              if (Ue(f.beforeEnter)) for (const g of f.beforeEnter) R.push(pt(g, y, T))
              else R.push(pt(f.beforeEnter, y, T))
          return R.push(a), Me(R)
        })
        .then(
          () => (
            y.matched.forEach((f) => (f.enterCallbacks = {})),
            (R = hs(ae, 'beforeRouteEnter', y, T, V)),
            R.push(a),
            Me(R)
          )
        )
        .then(() => {
          R = []
          for (const f of o.list()) R.push(pt(f, y, T))
          return R.push(a), Me(R)
        })
        .catch((f) => (Ze(f, 8) ? f : Promise.reject(f)))
    )
  }
  function ie(y, T, R) {
    c.list().forEach((M) => V(() => M(y, T, R)))
  }
  function L(y, T, R, M, Q) {
    const ae = N(y, T)
    if (ae) return ae
    const a = T === at,
      f = Ft ? history.state : {}
    R &&
      (M || a
        ? r.replace(y.fullPath, X({ scroll: a && f && f.scroll }, Q))
        : r.push(y.fullPath, Q)),
      (l.value = y),
      Ke(y, T, R, a),
      it()
  }
  let G
  function he() {
    G ||
      (G = r.listen((y, T, R) => {
        if (!yn.listening) return
        const M = $(y),
          Q = ne(M)
        if (Q) {
          ee(X(Q, { replace: !0 }), M).catch(rn)
          return
        }
        h = M
        const ae = l.value
        Ft && Na(Ur(ae.fullPath, R.delta), Yn()),
          W(M, ae)
            .catch((a) =>
              Ze(a, 12)
                ? a
                : Ze(a, 2)
                  ? (ee(a.to, M)
                      .then((f) => {
                        Ze(f, 20) && !R.delta && R.type === gn.pop && r.go(-1, !1)
                      })
                      .catch(rn),
                    Promise.reject())
                  : (R.delta && r.go(-R.delta, !1), J(a, M, ae))
            )
            .then((a) => {
              ;(a = a || L(M, ae, !1)),
                a &&
                  (R.delta && !Ze(a, 8)
                    ? r.go(-R.delta, !1)
                    : R.type === gn.pop && Ze(a, 20) && r.go(-1, !1)),
                ie(M, ae, a)
            })
            .catch(rn)
      }))
  }
  let De = Qt(),
    ue = Qt(),
    te
  function J(y, T, R) {
    it(y)
    const M = ue.list()
    return M.length ? M.forEach((Q) => Q(y, T, R)) : console.error(y), Promise.reject(y)
  }
  function Ye() {
    return te && l.value !== at
      ? Promise.resolve()
      : new Promise((y, T) => {
          De.add([y, T])
        })
  }
  function it(y) {
    return te || ((te = !y), he(), De.list().forEach(([T, R]) => (y ? R(y) : T())), De.reset()), y
  }
  function Ke(y, T, R, M) {
    const { scrollBehavior: Q } = e
    if (!Ft || !Q) return Promise.resolve()
    const ae =
      (!R && Fa(Ur(y.fullPath, 0))) || ((M || !R) && history.state && history.state.scroll) || null
    return Mi()
      .then(() => Q(y, T, ae))
      .then((a) => a && $a(a))
      .catch((a) => J(a, y, T))
  }
  const Ce = (y) => r.go(y)
  let Lt
  const Mt = new Set(),
    yn = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: C,
      clearRoutes: t.clearRoutes,
      hasRoute: H,
      getRoutes: A,
      resolve: $,
      options: e,
      push: O,
      replace: U,
      go: Ce,
      back: () => Ce(-1),
      forward: () => Ce(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: c.add,
      onError: ue.add,
      isReady: Ye,
      install(y) {
        const T = this
        y.component('RouterLink', Dt),
          y.component('RouterView', Lo),
          (y.config.globalProperties.$router = T),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Ne(l)
          }),
          Ft && !Lt && l.value === at && ((Lt = !0), O(r.location).catch((Q) => {}))
        const R = {}
        for (const Q in at) Object.defineProperty(R, Q, { get: () => l.value[Q], enumerable: !0 })
        y.provide(tr, T), y.provide(nr, Ai(R)), y.provide(Ls, l)
        const M = y.unmount
        Mt.add(y),
          (y.unmount = function () {
            Mt.delete(y),
              Mt.size < 1 && ((h = at), G && G(), (G = null), (l.value = at), (Lt = !1), (te = !1)),
              M()
          })
      }
    }
  function Me(y) {
    return y.reduce((T, R) => T.then(() => V(R)), Promise.resolve())
  }
  return yn
}
function fu(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const c = t.matched[o]
    c && (e.matched.find((h) => Kt(h, c)) ? s.push(c) : n.push(c))
    const l = e.matched[o]
    l && (t.matched.find((h) => Kt(h, l)) || r.push(l))
  }
  return [n, s, r]
}
function du(e) {
  return Qe(nr)
}
const hu = { class: 'flex flex-col min-h-screen' },
  pu = { class: 'flex flex-col' },
  gu = { class: 'no-scrollbar' },
  mu = {
    class:
      'flex flex-row w-full absolute z-20 bg-gradient-to-b from-black/50 via-[rgba(28,28,28,0.20)] to-[rgba(37,37,37,0.00)]'
  },
  vu = { class: 'w-1/2 pl-20 py-5' },
  yu = { class: 'w-1/2 flex items-center gap-x-20 justify-end pr-20' },
  _u = { class: 'flex-grow' },
  bu = Kn({
    __name: 'App',
    setup(e) {
      const t = du(),
        n = (s) => Fe(() => t.path === s)
      return (s, r) => (
        Re(),
        He('div', hu, [
          q('div', pu, [
            q('header', gu, [
              q('nav', mu, [
                q('div', vu, [
                  ce(
                    Ne(Dt),
                    { to: '/' },
                    {
                      default: nt(
                        () => r[0] || (r[0] = [q('img', { alt: 'Vue logo', src: aa }, null, -1)])
                      ),
                      _: 1
                    }
                  )
                ]),
                q('div', yu, [
                  ce(
                    Ne(Dt),
                    { to: '/projects', class: gt(['nav-link', { active: n('/projects').value }]) },
                    { default: nt(() => r[1] || (r[1] = [Zt('Projects')])), _: 1 },
                    8,
                    ['class']
                  ),
                  ce(
                    Ne(Dt),
                    { to: '/news', class: gt(['nav-link', { active: n('/news').value }]) },
                    { default: nt(() => r[2] || (r[2] = [Zt('News')])), _: 1 },
                    8,
                    ['class']
                  ),
                  ce(
                    Ne(Dt),
                    { to: '/awards', class: gt(['nav-link', { active: n('/awards').value }]) },
                    { default: nt(() => r[3] || (r[3] = [Zt('Awards')])), _: 1 },
                    8,
                    ['class']
                  ),
                  ce(
                    Ne(Dt),
                    { to: '/contact', class: gt(['nav-link', { active: n('/contact').value }]) },
                    { default: nt(() => r[4] || (r[4] = [Zt('Contact')])), _: 1 },
                    8,
                    ['class']
                  )
                ])
              ])
            ])
          ]),
          q('main', _u, [ce(Ne(Lo))]),
          r[5] ||
            (r[5] = Ps(
              '<footer class="flex flex-col bg-black py-8 mt-auto" data-v-32a956a3><div class="mx-[5%]" data-v-32a956a3><div class="flex flex-wrap items-start gap-8 relative" data-v-32a956a3><div class="w-full h-[2px] bg-white" data-v-32a956a3></div><div class="flex-1 text-white ml-5" data-v-32a956a3><p class="font-medium text-white" data-v-32a956a3>Shanghai, China</p><p class="font-medium text-white" data-v-32a956a3>Xi&#39;an, China</p><p class="font-medium text-white" data-v-32a956a3>Calgary, Canada</p></div><div class="flex flex-col items-start gap-2 mr-5" data-v-32a956a3><div data-v-32a956a3><p class="font-medium text-white mb-1" data-v-32a956a3>Connect with us:</p><p class="text-white" data-v-32a956a3>atl@188.com</p></div><p class="text-white text-sm" data-v-32a956a3>© 2024 ATL Lighting Design</p></div></div></div></footer>',
              1
            ))
        ])
      )
    }
  }),
  sr = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  xu = sr(bu, [['__scopeId', 'data-v-32a956a3']]),
  wu = 'modulepreload',
  Eu = function (e) {
    return '/' + e
  },
  si = {},
  Yt = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        o = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      r = Promise.all(
        n.map((c) => {
          if (((c = Eu(c)), c in si)) return
          si[c] = !0
          const l = c.endsWith('.css'),
            h = l ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${c}"]${h}`)) return
          const u = document.createElement('link')
          if (
            ((u.rel = l ? 'stylesheet' : wu),
            l || (u.as = 'script'),
            (u.crossOrigin = ''),
            (u.href = c),
            o && u.setAttribute('nonce', o),
            document.head.appendChild(u),
            l)
          )
            return new Promise((d, p) => {
              u.addEventListener('load', d),
                u.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${c}`)))
            })
        })
      )
    }
    return r
      .then(() => t())
      .catch((i) => {
        const o = new Event('vite:preloadError', { cancelable: !0 })
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented)) throw i
      })
  },
  ri = '/assets/3-mLBZBynV.svg',
  Su = '/assets/designers-CTAS0JT_.svg',
  Cu = {
    props: {
      startAutoPlay: { type: Boolean, default: !0 },
      timeout: { type: Number, default: 5e3 },
      navigation: { type: Boolean, default: !0 },
      pagination: { type: Boolean, default: !0 }
    },
    setup(e) {
      const t = ut(1),
        n = ut(0),
        s = ut(e.startAutoPlay),
        r = ut(e.timeout),
        i = ut(e.pagination),
        o = ut(e.navigation),
        c = () => {
          t.value = t.value === n.value ? 1 : t.value + 1
        },
        l = () => {
          t.value = t.value === 1 ? 1 : t.value - 1
        },
        h = (d) => {
          t.value = d + 1
        },
        u = () => {
          setInterval(c, r.value)
        }
      return (
        Js(() => {
          ;(n.value = document.querySelectorAll('.slide').length), s.value && u()
        }),
        {
          currentSlide: t,
          nextSlide: c,
          prevSlide: l,
          slideCount: n,
          goToSlide: h,
          paginationEnabled: i,
          navEnabled: o
        }
      )
    }
  },
  Ru = { class: 'relative w-full h-full' },
  Pu = {
    key: 0,
    class: 'absolute inset-0 flex items-center justify-between px-[10%] pointer-events-none'
  },
  Au = { key: 1, class: 'absolute bottom-[24%] left-0 right-0 pointer-events-none' },
  Tu = { class: 'flex items-center justify-center gap-2' },
  Ou = ['onClick']
function Iu(e, t, n, s, r, i) {
  return (
    Re(),
    He(
      pe,
      null,
      [
        q('div', Ru, [Gi(e.$slots, 'default', { currentSlide: s.currentSlide })]),
        Pt(' Navigation '),
        s.navEnabled
          ? (Re(),
            He('div', Pu, [
              q(
                'button',
                {
                  onClick: t[0] || (t[0] = (...o) => s.prevSlide && s.prevSlide(...o)),
                  class:
                    'p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none pointer-events-auto'
                },
                t[2] ||
                  (t[2] = [
                    q(
                      'svg',
                      {
                        width: '28',
                        height: '48',
                        viewBox: '0 0 28 48',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg'
                      },
                      [
                        q('path', {
                          d: 'M24 44L4 24L24 4',
                          stroke: 'currentColor',
                          'stroke-width': '7',
                          'stroke-linecap': 'round',
                          'stroke-linejoin': 'round'
                        })
                      ],
                      -1
                    )
                  ])
              ),
              q(
                'button',
                {
                  onClick: t[1] || (t[1] = (...o) => s.nextSlide && s.nextSlide(...o)),
                  class:
                    'p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none pointer-events-auto'
                },
                t[3] ||
                  (t[3] = [
                    q(
                      'div',
                      { class: 'rotate-180' },
                      [
                        q(
                          'svg',
                          {
                            width: '28',
                            height: '48',
                            viewBox: '0 0 28 48',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg'
                          },
                          [
                            q('path', {
                              d: 'M24 44L4 24L24 4',
                              stroke: 'currentColor',
                              'stroke-width': '7',
                              'stroke-linecap': 'round',
                              'stroke-linejoin': 'round'
                            })
                          ]
                        )
                      ],
                      -1
                    )
                  ])
              )
            ]))
          : Pt('v-if', !0),
        Pt(' Pagination '),
        s.paginationEnabled
          ? (Re(),
            He('div', Au, [
              q('div', Tu, [
                (Re(!0),
                He(
                  pe,
                  null,
                  xs(
                    s.slideCount,
                    (o, c) => (
                      Re(),
                      He(
                        'button',
                        {
                          key: c,
                          onClick: (l) => s.goToSlide(c),
                          class: gt([
                            'w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 pointer-events-auto',
                            c + 1 === s.currentSlide ? 'bg-slate-400' : 'bg-white'
                          ])
                        },
                        null,
                        10,
                        Ou
                      )
                    )
                  ),
                  128
                ))
              ])
            ]))
          : Pt('v-if', !0)
      ],
      64
    )
  )
}
const Lu = sr(Cu, [['render', Iu]]),
  Mu = {},
  $u = { class: 'slide absolute inset-0 w-full h-full' }
function Nu(e, t, n, s, r, i) {
  return (
    Re(),
    He('div', $u, [
      ce(
        Nc,
        { name: 'slide' },
        { default: nt(() => [Gi(e.$slots, 'default', {}, void 0, !0)]), _: 3 }
      )
    ])
  )
}
const Fu = sr(Mu, [
    ['render', Nu],
    ['__scopeId', 'data-v-4d4b60fa']
  ]),
  Du = '/assets/1-CoU01fGB.svg',
  ju = '/assets/2-CtT5LFXg.svg',
  Hu = { class: 'bg-black overflow-x-hidden' },
  ku = { class: 'w-screen h-screen' },
  Bu = { class: 'w-full' },
  Vu = ['src'],
  Uu = { class: 'px-[5%] pt-20 overflow-y-hidden w-[100%]' },
  Ku = { class: 'pt-10 pb-10' },
  Wu = { class: 'grid grid-cols-3 gap-12 w-full pt-10' },
  qu = { class: 'border-white border-2 p-6 flex-col' },
  zu = { class: 'text-3xl text-white' },
  Gu = { class: 'text-white text-lg pb-6' },
  Ju = ['src'],
  Qu = Kn({
    __name: 'HomeView',
    setup(e) {
      const t = [Du, ju, ri],
        n = ut([
          {
            title: 'People-Centric',
            text: 'People are the central element of ATL. We rigorously pursue end user experience and optimize owner benefits.',
            imagelink: '/HomePage/peopleCentric.svg'
          },
          {
            title: 'Purpose-Driven',
            text: 'The design focuses on the purpose of the architecture, and highlights each architectural characteristic.',
            imagelink: '/HomePage/purposeDriven.svg'
          },
          {
            title: 'Sustainability',
            text: 'ATL contributes to a sustainable world by continuously adopting cutting-edge and energy efficient technology',
            imagelink: '/HomePage/sustainability.svg'
          }
        ])
      return (s, r) => (
        Re(),
        He('main', Hu, [
          q('div', ku, [
            ce(
              Lu,
              { navigation: !1, pagination: !1, startAutoPlay: !0, timeout: 5e3 },
              {
                default: nt(({ currentSlide: i }) => [
                  (Re(),
                  He(
                    pe,
                    null,
                    xs(t, (o, c) =>
                      ce(
                        Fu,
                        { key: c },
                        {
                          default: nt(() => [
                            Rl(
                              q(
                                'div',
                                Bu,
                                [
                                  q(
                                    'img',
                                    {
                                      src: o,
                                      alt: 'Background Images',
                                      class: 'w-full h-screen object-cover'
                                    },
                                    null,
                                    8,
                                    Vu
                                  )
                                ],
                                512
                              ),
                              [[Vc, i === c + 1]]
                            )
                          ]),
                          _: 2
                        },
                        1024
                      )
                    ),
                    64
                  ))
                ]),
                _: 1
              }
            )
          ]),
          q('div', Uu, [
            Pt(' This is the Our Company Intro '),
            r[2] ||
              (r[2] = Ps(
                '<div class="flex flex-row w-fit items-center justify-center relative translate-x-[-9%]"><div class="z-10 w-1/2 translate-x-[10%] p-[4%] bg-black"><h1 class="text-5xl text-white pb-4"> Our Company </h1><hr class="border-t-2 border-white mt-2 pb-2"><p class="text-md text-white"> Founded in 2006, ATL is a leading architectural lighting design firm specializing in China&#39;s cultural and tourism sectors. Our expert team has completed over 300 projects, blending artistic vision with cutting-edge lighting technology. ATL&#39;s commitment to excellence has earned us numerous top awards nationally and internationally, establishing our reputation as pioneers in cultural and tourism lighting design. </p></div><div><img src="' +
                  ri +
                  '" class="w-full object-cover object-center overflow-y-hidden"></div></div>',
                1
              )),
            Pt(' This is the Our Values '),
            q('div', Ku, [
              q('div', null, [
                r[1] || (r[1] = q('h1', { class: 'text-5xl text-white' }, ' Our Values ', -1)),
                q('div', Wu, [
                  (Re(!0),
                  He(
                    pe,
                    null,
                    xs(
                      n.value,
                      (i) => (
                        Re(),
                        He('div', { key: i.title }, [
                          q('div', qu, [
                            q('h1', zu, ps(i.title), 1),
                            r[0] ||
                              (r[0] = q(
                                'div',
                                { class: 'w-full h-[2px] bg-white my-3' },
                                null,
                                -1
                              )),
                            q('p', Gu, ps(i.text), 1)
                          ]),
                          q('img', { src: i.imagelink, class: 'w-full pt-20' }, null, 8, Ju)
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ])
            ]),
            Pt(' This is the Our Values '),
            r[3] ||
              (r[3] = Ps(
                '<div class="pt-10 pb-10"><div><h1 class="text-5xl text-white pb-10"> Our Principal Designers </h1><div class="flex flex-row items-center justify-center"><div class="w-[70%]"><img src="' +
                  Su +
                  '"></div><div class="ml-[5%] w-1/4 flex flex-col items-start justify-center"><div class="font-normal text-transparent text-5xl tracking-[0] leading-normal space-y-4"><div><span class="text-[#d91214]">20+</span><span class="text-white"> People <br></span></div><div><span class="text-[#d91214]">50+</span><span class="text-white"> Awards </span></div><div><span class="text-[#d91214]">300+</span><span class="text-white"> Projects</span></div></div></div></div></div></div>',
                1
              ))
          ])
        ])
      )
    }
  }),
  Yu = uu({
    history: ka('/'),
    routes: [
      { path: '/', name: 'home', component: Qu },
      {
        path: '/news',
        name: 'News',
        component: () => Yt(() => import('./NewsView-Bqwihii5.js'), [])
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => Yt(() => import('./ProjectsView-D-mX-9_h.js'), [])
      },
      {
        path: '/projectpage',
        name: 'Project Page',
        component: () => Yt(() => import('./ProjectPageView-CcpmirGq.js'), [])
      },
      {
        path: '/awards',
        name: 'Awardss',
        component: () => Yt(() => import('./AwardsView-C_ipUFwk.js'), [])
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => Yt(() => import('./ContactView-C3djbyjk.js'), __vite__mapDeps([0, 1]))
      }
    ]
  }),
  Mo = oa(xu)
Mo.use(Yu)
Mo.mount('#app')
export {
  pe as F,
  Lu as I,
  Fu as S,
  sr as _,
  q as a,
  xs as b,
  He as c,
  Kn as d,
  Ps as e,
  ce as f,
  Zt as g,
  Rl as h,
  Du as i,
  ju as j,
  ri as k,
  Re as o,
  ut as r,
  ps as t,
  Vc as v,
  nt as w
}
