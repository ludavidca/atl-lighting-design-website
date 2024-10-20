const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/ContactView-CR_Kc8Wh.js', 'assets/ContactView-B_SY1GJM.css'])
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
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Is(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const se = {},
  Dt = [],
  Je = () => {},
  Ro = () => !1,
  Nn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ls = (e) => e.startsWith('onUpdate:'),
  de = Object.assign,
  Ms = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Ao = Object.prototype.hasOwnProperty,
  Q = (e, t) => Ao.call(e, t),
  j = Array.isArray,
  jt = (e) => Fn(e) === '[object Map]',
  Yr = (e) => Fn(e) === '[object Set]',
  B = (e) => typeof e == 'function',
  ue = (e) => typeof e == 'string',
  rt = (e) => typeof e == 'symbol',
  le = (e) => e !== null && typeof e == 'object',
  Xr = (e) => (le(e) || B(e)) && B(e.then) && B(e.catch),
  Zr = Object.prototype.toString,
  Fn = (e) => Zr.call(e),
  Po = (e) => Fn(e).slice(8, -1),
  ei = (e) => Fn(e) === '[object Object]',
  $s = (e) => ue(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Zt = Is(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Dn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  To = /-(\w)/g,
  vt = Dn((e) => e.replace(To, (t, n) => (n ? n.toUpperCase() : ''))),
  Oo = /\B([A-Z])/g,
  Ot = Dn((e) => e.replace(Oo, '-$1').toLowerCase()),
  ti = Dn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Jn = Dn((e) => (e ? `on${ti(e)}` : '')),
  mt = (e, t) => !Object.is(e, t),
  Qn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  ni = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  Io = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Lo = (e) => {
    const t = ue(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let tr
const jn = () =>
  tr ||
  (tr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Ns(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ue(s) ? Fo(s) : Ns(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (ue(e) || le(e)) return e
}
const Mo = /;(?![^(]*\))/g,
  $o = /:([^]+)/,
  No = /\/\*[^]*?\*\//g
function Fo(e) {
  const t = {}
  return (
    e
      .replace(No, '')
      .split(Mo)
      .forEach((n) => {
        if (n) {
          const s = n.split($o)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function gt(e) {
  let t = ''
  if (ue(e)) t = e
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const s = gt(e[n])
      s && (t += s + ' ')
    }
  else if (le(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Do = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  jo = Is(Do)
function si(e) {
  return !!e || e === ''
}
const ri = (e) => !!(e && e.__v_isRef === !0),
  us = (e) =>
    ue(e)
      ? e
      : e == null
        ? ''
        : j(e) || (le(e) && (e.toString === Zr || !B(e.toString)))
          ? ri(e)
            ? us(e.value)
            : JSON.stringify(e, ii, 2)
          : String(e),
  ii = (e, t) =>
    ri(t)
      ? ii(e, t.value)
      : jt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Yn(s, i) + ' =>'] = r), n),
              {}
            )
          }
        : Yr(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Yn(n)) }
          : rt(t)
            ? Yn(t)
            : le(t) && !j(t) && !ei(t)
              ? String(t)
              : t,
  Yn = (e, t = '') => {
    var n
    return rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ie
class Ho {
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
function ko() {
  return Ie
}
let oe
const Xn = new WeakSet()
class oi {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ie && Ie.active && Ie.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Xn.has(this) && (Xn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ci(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), nr(this), ai(this)
    const t = oe,
      n = Be
    ;(oe = this), (Be = !0)
    try {
      return this.fn()
    } finally {
      fi(this), (oe = t), (Be = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) js(t)
      ;(this.deps = this.depsTail = void 0),
        nr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64 ? Xn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    ds(this) && this.run()
  }
  get dirty() {
    return ds(this)
  }
}
let li = 0,
  en,
  tn
function ci(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = tn), (tn = e)
    return
  }
  ;(e.next = en), (en = e)
}
function Fs() {
  li++
}
function Ds() {
  if (--li > 0) return
  if (tn) {
    let t = tn
    for (tn = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; en; ) {
    let t = en
    for (en = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
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
function ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t)
}
function fi(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), js(s), Bo(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function ds(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (ui(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function ui(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === ln)) return
  e.globalVersion = ln
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !ds(e))) {
    e.flags &= -3
    return
  }
  const n = oe,
    s = Be
  ;(oe = e), (Be = !0)
  try {
    ai(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || mt(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(oe = n), (Be = s), fi(e), (e.flags &= -3)
  }
}
function js(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) js(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Bo(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Be = !0
const di = []
function yt() {
  di.push(Be), (Be = !1)
}
function bt() {
  const e = di.pop()
  Be = e === void 0 ? !0 : e
}
function nr(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = oe
    oe = void 0
    try {
      t()
    } finally {
      oe = n
    }
  }
}
let ln = 0
class Vo {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0)
  }
}
class Hs {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!oe || !Be || oe === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== oe)
      (n = this.activeLink = new Vo(oe, this)),
        oe.deps
          ? ((n.prevDep = oe.depsTail), (oe.depsTail.nextDep = n), (oe.depsTail = n))
          : (oe.deps = oe.depsTail = n),
        hi(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = oe.depsTail),
        (n.nextDep = void 0),
        (oe.depsTail.nextDep = n),
        (oe.depsTail = n),
        oe.deps === n && (oe.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, ln++, this.notify(t)
  }
  notify(t) {
    Fs()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      Ds()
    }
  }
}
function hi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) hi(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const hs = new WeakMap(),
  Pt = Symbol(''),
  ps = Symbol(''),
  cn = Symbol('')
function _e(e, t, n) {
  if (Be && oe) {
    let s = hs.get(e)
    s || hs.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new Hs())), (r.map = s), (r.key = n)), r.track()
  }
}
function tt(e, t, n, s, r, i) {
  const o = hs.get(e)
  if (!o) {
    ln++
    return
  }
  const c = (l) => {
    l && l.trigger()
  }
  if ((Fs(), t === 'clear')) o.forEach(c)
  else {
    const l = j(e),
      h = l && $s(n)
    if (l && n === 'length') {
      const f = Number(s)
      o.forEach((d, p) => {
        ;(p === 'length' || p === cn || (!rt(p) && p >= f)) && c(d)
      })
    } else
      switch (((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(cn)), t)) {
        case 'add':
          l ? h && c(o.get('length')) : (c(o.get(Pt)), jt(e) && c(o.get(ps)))
          break
        case 'delete':
          l || (c(o.get(Pt)), jt(e) && c(o.get(ps)))
          break
        case 'set':
          jt(e) && c(o.get(Pt))
          break
      }
  }
  Ds()
}
function Mt(e) {
  const t = q(e)
  return t === e ? t : (_e(t, 'iterate', cn), De(e) ? t : t.map(ye))
}
function Hn(e) {
  return _e((e = q(e)), 'iterate', cn), e
}
const Uo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zn(this, Symbol.iterator, ye)
  },
  concat(...e) {
    return Mt(this).concat(...e.map((t) => (j(t) ? Mt(t) : t)))
  },
  entries() {
    return Zn(this, 'entries', (e) => ((e[1] = ye(e[1])), e))
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
    return es(this, 'includes', e)
  },
  indexOf(...e) {
    return es(this, 'indexOf', e)
  },
  join(e) {
    return Mt(this).join(e)
  },
  lastIndexOf(...e) {
    return es(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Xe(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return qt(this, 'pop')
  },
  push(...e) {
    return qt(this, 'push', e)
  },
  reduce(e, ...t) {
    return sr(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return sr(this, 'reduceRight', e, t)
  },
  shift() {
    return qt(this, 'shift')
  },
  some(e, t) {
    return Xe(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return qt(this, 'splice', e)
  },
  toReversed() {
    return Mt(this).toReversed()
  },
  toSorted(e) {
    return Mt(this).toSorted(e)
  },
  toSpliced(...e) {
    return Mt(this).toSpliced(...e)
  },
  unshift(...e) {
    return qt(this, 'unshift', e)
  },
  values() {
    return Zn(this, 'values', ye)
  }
}
function Zn(e, t, n) {
  const s = Hn(e),
    r = s[t]()
  return (
    s !== e &&
      !De(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return i.value && (i.value = n(i.value)), i
      })),
    r
  )
}
const Ko = Array.prototype
function Xe(e, t, n, s, r, i) {
  const o = Hn(e),
    c = o !== e && !De(e),
    l = o[t]
  if (l !== Ko[t]) {
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
  const f = l.call(o, h, s)
  return c && r ? r(f) : f
}
function sr(e, t, n, s) {
  const r = Hn(e)
  let i = n
  return (
    r !== e &&
      (De(e)
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
function es(e, t, n) {
  const s = q(e)
  _e(s, 'iterate', cn)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Vs(n[0]) ? ((n[0] = q(n[0])), s[t](...n)) : r
}
function qt(e, t, n = []) {
  yt(), Fs()
  const s = q(e)[t].apply(e, n)
  return Ds(), bt(), s
}
const Wo = Is('__proto__,__v_isRef,__isVue'),
  pi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(rt)
  )
function qo(e) {
  rt(e) || (e = String(e))
  const t = q(this)
  return _e(t, 'has', e), t.hasOwnProperty(e)
}
class gi {
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
      return s === (r ? (i ? nl : yi) : i ? _i : vi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = j(t)
    if (!r) {
      let l
      if (o && (l = Uo[n])) return l
      if (n === 'hasOwnProperty') return qo
    }
    const c = Reflect.get(t, n, xe(t) ? t : s)
    return (rt(n) ? pi.has(n) : Wo(n)) || (r || _e(t, 'get', n), i)
      ? c
      : xe(c)
        ? o && $s(n)
          ? c
          : c.value
        : le(c)
          ? r
            ? xi(c)
            : kn(c)
          : c
  }
}
class mi extends gi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const l = Tt(i)
      if ((!De(s) && !Tt(s) && ((i = q(i)), (s = q(s))), !j(t) && xe(i) && !xe(s)))
        return l ? !1 : ((i.value = s), !0)
    }
    const o = j(t) && $s(n) ? Number(n) < t.length : Q(t, n),
      c = Reflect.set(t, n, s, xe(t) ? t : r)
    return t === q(r) && (o ? mt(s, i) && tt(t, 'set', n, s) : tt(t, 'add', n, s)), c
  }
  deleteProperty(t, n) {
    const s = Q(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && tt(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!rt(n) || !pi.has(n)) && _e(t, 'has', n), s
  }
  ownKeys(t) {
    return _e(t, 'iterate', j(t) ? 'length' : Pt), Reflect.ownKeys(t)
  }
}
class zo extends gi {
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
const Go = new mi(),
  Jo = new zo(),
  Qo = new mi(!0)
const gs = (e) => e,
  bn = (e) => Reflect.getPrototypeOf(e)
function Yo(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = q(r),
      o = jt(i),
      c = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      h = r[e](...s),
      f = n ? gs : t ? ms : ye
    return (
      !t && _e(i, 'iterate', l ? ps : Pt),
      {
        next() {
          const { value: d, done: p } = h.next()
          return p ? { value: d, done: p } : { value: c ? [f(d[0]), f(d[1])] : f(d), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function xn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Xo(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = q(i),
        c = q(r)
      e || (mt(r, c) && _e(o, 'get', r), _e(o, 'get', c))
      const { has: l } = bn(o),
        h = t ? gs : e ? ms : ye
      if (l.call(o, r)) return h(i.get(r))
      if (l.call(o, c)) return h(i.get(c))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !e && _e(q(r), 'iterate', Pt), Reflect.get(r, 'size', r)
    },
    has(r) {
      const i = this.__v_raw,
        o = q(i),
        c = q(r)
      return (
        e || (mt(r, c) && _e(o, 'has', r), _e(o, 'has', c)),
        r === c ? i.has(r) : i.has(r) || i.has(c)
      )
    },
    forEach(r, i) {
      const o = this,
        c = o.__v_raw,
        l = q(c),
        h = t ? gs : e ? ms : ye
      return !e && _e(l, 'iterate', Pt), c.forEach((f, d) => r.call(i, h(f), h(d), o))
    }
  }
  return (
    de(
      n,
      e
        ? { add: xn('add'), set: xn('set'), delete: xn('delete'), clear: xn('clear') }
        : {
            add(r) {
              !t && !De(r) && !Tt(r) && (r = q(r))
              const i = q(this)
              return bn(i).has.call(i, r) || (i.add(r), tt(i, 'add', r, r)), this
            },
            set(r, i) {
              !t && !De(i) && !Tt(i) && (i = q(i))
              const o = q(this),
                { has: c, get: l } = bn(o)
              let h = c.call(o, r)
              h || ((r = q(r)), (h = c.call(o, r)))
              const f = l.call(o, r)
              return o.set(r, i), h ? mt(i, f) && tt(o, 'set', r, i) : tt(o, 'add', r, i), this
            },
            delete(r) {
              const i = q(this),
                { has: o, get: c } = bn(i)
              let l = o.call(i, r)
              l || ((r = q(r)), (l = o.call(i, r))), c && c.call(i, r)
              const h = i.delete(r)
              return l && tt(i, 'delete', r, void 0), h
            },
            clear() {
              const r = q(this),
                i = r.size !== 0,
                o = r.clear()
              return i && tt(r, 'clear', void 0, void 0), o
            }
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = Yo(r, e, t)
    }),
    n
  )
}
function ks(e, t) {
  const n = Xo(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(Q(n, r) && r in s ? n : s, r, i)
}
const Zo = { get: ks(!1, !1) },
  el = { get: ks(!1, !0) },
  tl = { get: ks(!0, !1) }
const vi = new WeakMap(),
  _i = new WeakMap(),
  yi = new WeakMap(),
  nl = new WeakMap()
function sl(e) {
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
function rl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : sl(Po(e))
}
function kn(e) {
  return Tt(e) ? e : Bs(e, !1, Go, Zo, vi)
}
function bi(e) {
  return Bs(e, !1, Qo, el, _i)
}
function xi(e) {
  return Bs(e, !0, Jo, tl, yi)
}
function Bs(e, t, n, s, r) {
  if (!le(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = rl(e)
  if (o === 0) return e
  const c = new Proxy(e, o === 2 ? s : n)
  return r.set(e, c), c
}
function Ht(e) {
  return Tt(e) ? Ht(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Tt(e) {
  return !!(e && e.__v_isReadonly)
}
function De(e) {
  return !!(e && e.__v_isShallow)
}
function Vs(e) {
  return e ? !!e.__v_raw : !1
}
function q(e) {
  const t = e && e.__v_raw
  return t ? q(t) : e
}
function il(e) {
  return !Q(e, '__v_skip') && Object.isExtensible(e) && ni(e, '__v_skip', !0), e
}
const ye = (e) => (le(e) ? kn(e) : e),
  ms = (e) => (le(e) ? xi(e) : e)
function xe(e) {
  return e ? e.__v_isRef === !0 : !1
}
function ft(e) {
  return wi(e, !1)
}
function ol(e) {
  return wi(e, !0)
}
function wi(e, t) {
  return xe(e) ? e : new ll(e, t)
}
class ll {
  constructor(t, n) {
    ;(this.dep = new Hs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : q(t)),
      (this._value = n ? t : ye(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || De(t) || Tt(t)
    ;(t = s ? t : q(t)),
      mt(t, n) && ((this._rawValue = t), (this._value = s ? t : ye(t)), this.dep.trigger())
  }
}
function Ne(e) {
  return xe(e) ? e.value : e
}
const cl = {
  get: (e, t, n) => (t === '__v_raw' ? e : Ne(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return xe(r) && !xe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function Ei(e) {
  return Ht(e) ? e : new Proxy(e, cl)
}
class al {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Hs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ln - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && oe !== this)) return ci(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return ui(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function fl(e, t, n = !1) {
  let s, r
  return B(e) ? (s = e) : ((s = e.get), (r = e.set)), new al(s, r, n)
}
const wn = {},
  Tn = new WeakMap()
let Ct
function ul(e, t = !1, n = Ct) {
  if (n) {
    let s = Tn.get(n)
    s || Tn.set(n, (s = [])), s.push(e)
  }
}
function dl(e, t, n = se) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: c, call: l } = n,
    h = (O) => (r ? O : De(O) || r === !1 || r === 0 ? nt(O, 1) : nt(O))
  let f,
    d,
    p,
    g,
    S = !1,
    P = !1
  if (
    (xe(e)
      ? ((d = () => e.value), (S = De(e)))
      : Ht(e)
        ? ((d = () => h(e)), (S = !0))
        : j(e)
          ? ((P = !0),
            (S = e.some((O) => Ht(O) || De(O))),
            (d = () =>
              e.map((O) => {
                if (xe(O)) return O.value
                if (Ht(O)) return h(O)
                if (B(O)) return l ? l(O, 2) : O()
              })))
          : B(e)
            ? t
              ? (d = l ? () => l(e, 2) : e)
              : (d = () => {
                  if (p) {
                    yt()
                    try {
                      p()
                    } finally {
                      bt()
                    }
                  }
                  const O = Ct
                  Ct = f
                  try {
                    return l ? l(e, 3, [g]) : e(g)
                  } finally {
                    Ct = O
                  }
                })
            : (d = Je),
    t && r)
  ) {
    const O = d,
      U = r === !0 ? 1 / 0 : r
    d = () => nt(O(), U)
  }
  const H = ko(),
    $ = () => {
      f.stop(), H && Ms(H.effects, f)
    }
  if (i && t) {
    const O = t
    t = (...U) => {
      O(...U), $()
    }
  }
  let I = P ? new Array(e.length).fill(wn) : wn
  const N = (O) => {
    if (!(!(f.flags & 1) || (!f.dirty && !O)))
      if (t) {
        const U = f.run()
        if (r || S || (P ? U.some((ne, ee) => mt(ne, I[ee])) : mt(U, I))) {
          p && p()
          const ne = Ct
          Ct = f
          try {
            const ee = [U, I === wn ? void 0 : P && I[0] === wn ? [] : I, g]
            l ? l(t, 3, ee) : t(...ee), (I = U)
          } finally {
            Ct = ne
          }
        }
      } else f.run()
  }
  return (
    c && c(N),
    (f = new oi(d)),
    (f.scheduler = o ? () => o(N, !1) : N),
    (g = (O) => ul(O, !1, f)),
    (p = f.onStop =
      () => {
        const O = Tn.get(f)
        if (O) {
          if (l) l(O, 4)
          else for (const U of O) U()
          Tn.delete(f)
        }
      }),
    t ? (s ? N(!0) : (I = f.run())) : o ? o(N.bind(null, !0), !0) : f.run(),
    ($.pause = f.pause.bind(f)),
    ($.resume = f.resume.bind(f)),
    ($.stop = $),
    $
  )
}
function nt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, xe(e))) nt(e.value, t, n)
  else if (j(e)) for (let s = 0; s < e.length; s++) nt(e[s], t, n)
  else if (Yr(e) || jt(e))
    e.forEach((s) => {
      nt(s, t, n)
    })
  else if (ei(e)) {
    for (const s in e) nt(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && nt(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function vn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Bn(r, t, n)
  }
}
function Ve(e, t, n, s) {
  if (B(e)) {
    const r = vn(e, t, n, s)
    return (
      r &&
        Xr(r) &&
        r.catch((i) => {
          Bn(i, t, n)
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
function Bn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } = (t && t.appContext.config) || se
  if (t) {
    let c = t.parent
    const l = t.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; c; ) {
      const f = c.ec
      if (f) {
        for (let d = 0; d < f.length; d++) if (f[d](e, l, h) === !1) return
      }
      c = c.parent
    }
    if (i) {
      yt(), vn(i, null, 10, [e, l, h]), bt()
      return
    }
  }
  hl(e, n, r, s, o)
}
function hl(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const Ee = []
let ze = -1
const kt = []
let ut = null,
  $t = 0
const Si = Promise.resolve()
let On = null
function Ci(e) {
  const t = On || Si
  return e ? t.then(this ? e.bind(this) : e) : t
}
function pl(e) {
  let t = ze + 1,
    n = Ee.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ee[s],
      i = an(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Us(e) {
  if (!(e.flags & 1)) {
    const t = an(e),
      n = Ee[Ee.length - 1]
    !n || (!(e.flags & 2) && t >= an(n)) ? Ee.push(e) : Ee.splice(pl(t), 0, e), (e.flags |= 1), Ri()
  }
}
function Ri() {
  On || (On = Si.then(Pi))
}
function gl(e) {
  j(e)
    ? kt.push(...e)
    : ut && e.id === -1
      ? ut.splice($t + 1, 0, e)
      : e.flags & 1 || (kt.push(e), (e.flags |= 1)),
    Ri()
}
function rr(e, t, n = ze + 1) {
  for (; n < Ee.length; n++) {
    const s = Ee[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      Ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2)
    }
  }
}
function Ai(e) {
  if (kt.length) {
    const t = [...new Set(kt)].sort((n, s) => an(n) - an(s))
    if (((kt.length = 0), ut)) {
      ut.push(...t)
      return
    }
    for (ut = t, $t = 0; $t < ut.length; $t++) {
      const n = ut[$t]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(ut = null), ($t = 0)
  }
}
const an = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Pi(e) {
  try {
    for (ze = 0; ze < Ee.length; ze++) {
      const t = Ee[ze]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), vn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; ze < Ee.length; ze++) {
      const t = Ee[ze]
      t && (t.flags &= -2)
    }
    ;(ze = -1), (Ee.length = 0), Ai(), (On = null), (Ee.length || kt.length) && Pi()
  }
}
let ge = null,
  Ti = null
function In(e) {
  const t = ge
  return (ge = e), (Ti = (e && e.type.__scopeId) || null), t
}
function st(e, t = ge, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && hr(-1)
    const i = In(t)
    let o
    try {
      o = e(...r)
    } finally {
      In(i), s._d && hr(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function ml(e, t) {
  if (ge === null) return e
  const n = zn(ge),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, c, l = se] = t[r]
    i &&
      (B(i) && (i = { mounted: i, updated: i }),
      i.deep && nt(o),
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
    l && (yt(), Ve(l, n, 8, [e.el, c, e, t]), bt())
  }
}
const vl = Symbol('_vte'),
  Oi = (e) => e.__isTeleport,
  dt = Symbol('_leaveCb'),
  En = Symbol('_enterCb')
function _l() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Ks(() => {
      e.isMounted = !0
    }),
    ji(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const $e = [Function, Array],
  Ii = {
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
  Li = (e) => {
    const t = e.subTree
    return t.component ? Li(t.component) : t
  },
  yl = {
    name: 'BaseTransition',
    props: Ii,
    setup(e, { slots: t }) {
      const n = hc(),
        s = _l()
      return () => {
        const r = t.default && Ni(t.default(), !0)
        if (!r || !r.length) return
        const i = Mi(r),
          o = q(e),
          { mode: c } = o
        if (s.isLeaving) return ts(i)
        const l = ir(i)
        if (!l) return ts(i)
        let h = vs(l, o, s, n, (p) => (h = p))
        l.type !== Se && fn(l, h)
        const f = n.subTree,
          d = f && ir(f)
        if (d && d.type !== Se && !Rt(l, d) && Li(n).type !== Se) {
          const p = vs(d, o, s, n)
          if ((fn(d, p), c === 'out-in' && l.type !== Se))
            return (
              (s.isLeaving = !0),
              (p.afterLeave = () => {
                ;(s.isLeaving = !1), n.job.flags & 8 || n.update(), delete p.afterLeave
              }),
              ts(i)
            )
          c === 'in-out' &&
            l.type !== Se &&
            (p.delayLeave = (g, S, P) => {
              const H = $i(s, d)
              ;(H[String(d.key)] = d),
                (g[dt] = () => {
                  S(), (g[dt] = void 0), delete h.delayedLeave
                }),
                (h.delayedLeave = P)
            })
        }
        return i
      }
    }
  }
function Mi(e) {
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
const bl = yl
function $i(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function vs(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: c = !1,
      onBeforeEnter: l,
      onEnter: h,
      onAfterEnter: f,
      onEnterCancelled: d,
      onBeforeLeave: p,
      onLeave: g,
      onAfterLeave: S,
      onLeaveCancelled: P,
      onBeforeAppear: H,
      onAppear: $,
      onAfterAppear: I,
      onAppearCancelled: N
    } = t,
    O = String(e.key),
    U = $i(n, e),
    ne = (V, W) => {
      V && Ve(V, s, 9, W)
    },
    ee = (V, W) => {
      const re = W[1]
      ne(V, W), j(V) ? V.every((L) => L.length <= 1) && re() : V.length <= 1 && re()
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
        const re = U[O]
        re && Rt(e, re) && re.el[dt] && re.el[dt](), ne(W, [V])
      },
      enter(V) {
        let W = h,
          re = f,
          L = d
        if (!n.isMounted)
          if (i) (W = $ || h), (re = I || f), (L = N || d)
          else return
        let G = !1
        const he = (V[En] = (je) => {
          G ||
            ((G = !0),
            je ? ne(L, [V]) : ne(re, [V]),
            me.delayedLeave && me.delayedLeave(),
            (V[En] = void 0))
        })
        W ? ee(W, [V, he]) : he()
      },
      leave(V, W) {
        const re = String(e.key)
        if ((V[En] && V[En](!0), n.isUnmounting)) return W()
        ne(p, [V])
        let L = !1
        const G = (V[dt] = (he) => {
          L ||
            ((L = !0),
            W(),
            he ? ne(P, [V]) : ne(S, [V]),
            (V[dt] = void 0),
            U[re] === e && delete U[re])
        })
        ;(U[re] = e), g ? ee(g, [V, G]) : G()
      },
      clone(V) {
        const W = vs(V, t, n, s, r)
        return r && r(W), W
      }
    }
  return me
}
function ts(e) {
  if (Un(e)) return (e = _t(e)), (e.children = null), e
}
function ir(e) {
  if (!Un(e)) return Oi(e.type) && e.children ? Mi(e.children) : e
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
function Ni(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === pe
      ? (o.patchFlag & 128 && r++, (s = s.concat(Ni(o.children, t, c))))
      : (t || o.type !== Se) && s.push(c != null ? _t(o, { key: c }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Vn(e, t) {
  return B(e) ? de({ name: e.name }, t, { setup: e }) : e
}
function Fi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function _s(e, t, n, s, r = !1) {
  if (j(e)) {
    e.forEach((S, P) => _s(S, t && (j(t) ? t[P] : t), n, s, r))
    return
  }
  if (Bt(s) && !r) return
  const i = s.shapeFlag & 4 ? zn(s.component) : s.el,
    o = r ? null : i,
    { i: c, r: l } = e,
    h = t && t.r,
    f = c.refs === se ? (c.refs = {}) : c.refs,
    d = c.setupState,
    p = q(d),
    g = d === se ? () => !1 : (S) => Q(p, S)
  if (
    (h != null &&
      h !== l &&
      (ue(h) ? ((f[h] = null), g(h) && (d[h] = null)) : xe(h) && (h.value = null)),
    B(l))
  )
    vn(l, c, 12, [o, f])
  else {
    const S = ue(l),
      P = xe(l)
    if (S || P) {
      const H = () => {
        if (e.f) {
          const $ = S ? (g(l) ? d[l] : f[l]) : l.value
          r
            ? j($) && Ms($, i)
            : j($)
              ? $.includes(i) || $.push(i)
              : S
                ? ((f[l] = [i]), g(l) && (d[l] = f[l]))
                : ((l.value = [i]), e.k && (f[e.k] = l.value))
        } else S ? ((f[l] = o), g(l) && (d[l] = o)) : P && ((l.value = o), e.k && (f[e.k] = o))
      }
      o ? ((H.id = -1), Oe(H, n)) : H()
    }
  }
}
jn().requestIdleCallback
jn().cancelIdleCallback
const Bt = (e) => !!e.type.__asyncLoader,
  Un = (e) => e.type.__isKeepAlive
function xl(e, t) {
  Di(e, 'a', t)
}
function wl(e, t) {
  Di(e, 'da', t)
}
function Di(e, t, n = be) {
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
  if ((Kn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Un(r.parent.vnode) && El(s, t, n, r), (r = r.parent)
  }
}
function El(e, t, n, s) {
  const r = Kn(t, e, s, !0)
  Hi(() => {
    Ms(s[t], r)
  }, n)
}
function Kn(e, t, n = be, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          yt()
          const c = _n(n),
            l = Ve(t, n, e, o)
          return c(), bt(), l
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const it =
    (e) =>
    (t, n = be) => {
      ;(!hn || e === 'sp') && Kn(e, (...s) => t(...s), n)
    },
  Sl = it('bm'),
  Ks = it('m'),
  Cl = it('bu'),
  Rl = it('u'),
  ji = it('bum'),
  Hi = it('um'),
  Al = it('sp'),
  Pl = it('rtg'),
  Tl = it('rtc')
function Ol(e, t = be) {
  Kn('ec', e, t)
}
const Il = Symbol.for('v-ndc')
function ys(e, t, n, s) {
  let r
  const i = n,
    o = j(e)
  if (o || ue(e)) {
    const c = o && Ht(e)
    let l = !1
    c && ((l = !De(e)), (e = Hn(e))), (r = new Array(e.length))
    for (let h = 0, f = e.length; h < f; h++) r[h] = t(l ? ye(e[h]) : e[h], h, void 0, i)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let c = 0; c < e; c++) r[c] = t(c + 1, c, void 0, i)
  } else if (le(e))
    if (e[Symbol.iterator]) r = Array.from(e, (c, l) => t(c, l, void 0, i))
    else {
      const c = Object.keys(e)
      r = new Array(c.length)
      for (let l = 0, h = c.length; l < h; l++) {
        const f = c[l]
        r[l] = t(e[f], f, l, i)
      }
    }
  else r = []
  return r
}
function ki(e, t, n = {}, s, r) {
  if (ge.ce || (ge.parent && Bt(ge.parent) && ge.parent.ce))
    return Re(), Ss(pe, null, [ce('slot', n, s)], 64)
  let i = e[t]
  i && i._c && (i._d = !1), Re()
  const o = i && Bi(i(n)),
    c = n.key || (o && o.key),
    l = Ss(
      pe,
      { key: (c && !rt(c) ? c : `_${t}`) + (!o && s ? '_fb' : '') },
      o || [],
      o && e._ === 1 ? 64 : -2
    )
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), i && i._c && (i._d = !0), l
}
function Bi(e) {
  return e.some((t) => (dn(t) ? !(t.type === Se || (t.type === pe && !Bi(t.children))) : !0))
    ? e
    : null
}
const bs = (e) => (e ? (lo(e) ? zn(e) : bs(e.parent)) : null),
  nn = de(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => bs(e.parent),
    $root: (e) => bs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ws(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Us(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Ci.bind(e.proxy)),
    $watch: (e) => Xl.bind(e)
  }),
  ns = (e, t) => e !== se && !e.__isScriptSetup && Q(e, t),
  Ll = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: c, appContext: l } = e
      let h
      if (t[0] !== '$') {
        const g = o[t]
        if (g !== void 0)
          switch (g) {
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
          if (ns(s, t)) return (o[t] = 1), s[t]
          if (r !== se && Q(r, t)) return (o[t] = 2), r[t]
          if ((h = e.propsOptions[0]) && Q(h, t)) return (o[t] = 3), i[t]
          if (n !== se && Q(n, t)) return (o[t] = 4), n[t]
          xs && (o[t] = 0)
        }
      }
      const f = nn[t]
      let d, p
      if (f) return t === '$attrs' && _e(e.attrs, 'get', ''), f(e)
      if ((d = c.__cssModules) && (d = d[t])) return d
      if (n !== se && Q(n, t)) return (o[t] = 4), n[t]
      if (((p = l.config.globalProperties), Q(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return ns(r, t)
        ? ((r[t] = n), !0)
        : s !== se && Q(s, t)
          ? ((s[t] = n), !0)
          : Q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
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
        (e !== se && Q(e, o)) ||
        ns(t, o) ||
        ((c = i[0]) && Q(c, o)) ||
        Q(s, o) ||
        Q(nn, o) ||
        Q(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function or(e) {
  return j(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let xs = !0
function Ml(e) {
  const t = Ws(e),
    n = e.proxy,
    s = e.ctx
  ;(xs = !1), t.beforeCreate && lr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: c,
    provide: l,
    inject: h,
    created: f,
    beforeMount: d,
    mounted: p,
    beforeUpdate: g,
    updated: S,
    activated: P,
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
    inheritAttrs: re,
    components: L,
    directives: G,
    filters: he
  } = t
  if ((h && $l(h, s, null), o))
    for (const te in o) {
      const J = o[te]
      B(J) && (s[te] = J.bind(n))
    }
  if (r) {
    const te = r.call(n, n)
    le(te) && (e.data = kn(te))
  }
  if (((xs = !0), i))
    for (const te in i) {
      const J = i[te],
        Ye = B(J) ? J.bind(n, n) : B(J.get) ? J.get.bind(n, n) : Je,
        ot = !B(J) && B(J.set) ? J.set.bind(n) : Je,
        Ke = Fe({ get: Ye, set: ot })
      Object.defineProperty(s, te, {
        enumerable: !0,
        configurable: !0,
        get: () => Ke.value,
        set: (Ce) => (Ke.value = Ce)
      })
    }
  if (c) for (const te in c) Vi(c[te], s, n, te)
  if (l) {
    const te = B(l) ? l.call(n) : l
    Reflect.ownKeys(te).forEach((J) => {
      Sn(J, te[J])
    })
  }
  f && lr(f, e, 'c')
  function fe(te, J) {
    j(J) ? J.forEach((Ye) => te(Ye.bind(n))) : J && te(J.bind(n))
  }
  if (
    (fe(Sl, d),
    fe(Ks, p),
    fe(Cl, g),
    fe(Rl, S),
    fe(xl, P),
    fe(wl, H),
    fe(Ol, me),
    fe(Tl, ne),
    fe(Pl, ee),
    fe(ji, I),
    fe(Hi, O),
    fe(Al, V),
    j(W))
  )
    if (W.length) {
      const te = e.exposed || (e.exposed = {})
      W.forEach((J) => {
        Object.defineProperty(te, J, { get: () => n[J], set: (Ye) => (n[J] = Ye) })
      })
    } else e.exposed || (e.exposed = {})
  U && e.render === Je && (e.render = U),
    re != null && (e.inheritAttrs = re),
    L && (e.components = L),
    G && (e.directives = G),
    V && Fi(e)
}
function $l(e, t, n = Je) {
  j(e) && (e = ws(e))
  for (const s in e) {
    const r = e[s]
    let i
    le(r)
      ? 'default' in r
        ? (i = Qe(r.from || s, r.default, !0))
        : (i = Qe(r.from || s))
      : (i = Qe(r)),
      xe(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o)
          })
        : (t[s] = i)
  }
}
function lr(e, t, n) {
  Ve(j(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Vi(e, t, n, s) {
  let r = s.includes('.') ? no(n, s) : () => n[s]
  if (ue(e)) {
    const i = t[e]
    B(i) && Cn(r, i)
  } else if (B(e)) Cn(r, e.bind(n))
  else if (le(e))
    if (j(e)) e.forEach((i) => Vi(i, t, n, s))
    else {
      const i = B(e.handler) ? e.handler.bind(n) : t[e.handler]
      B(i) && Cn(r, i, e)
    }
}
function Ws(e) {
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
        : ((l = {}), r.length && r.forEach((h) => Ln(l, h, o, !0)), Ln(l, t, o)),
    le(t) && i.set(t, l),
    l
  )
}
function Ln(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && Ln(e, i, n, !0), r && r.forEach((o) => Ln(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const c = Nl[o] || (n && n[o])
      e[o] = c ? c(e[o], t[o]) : t[o]
    }
  return e
}
const Nl = {
  data: cr,
  props: ar,
  emits: ar,
  methods: Yt,
  computed: Yt,
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
  components: Yt,
  directives: Yt,
  watch: Dl,
  provide: cr,
  inject: Fl
}
function cr(e, t) {
  return t
    ? e
      ? function () {
          return de(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Fl(e, t) {
  return Yt(ws(e), ws(t))
}
function ws(e) {
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
function Yt(e, t) {
  return e ? de(Object.create(null), e, t) : t
}
function ar(e, t) {
  return e
    ? j(e) && j(t)
      ? [...new Set([...e, ...t])]
      : de(Object.create(null), or(e), or(t ?? {}))
    : t
}
function Dl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = de(Object.create(null), e)
  for (const s in t) n[s] = we(e[s], t[s])
  return n
}
function Ui() {
  return {
    app: null,
    config: {
      isNativeTag: Ro,
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
let jl = 0
function Hl(e, t) {
  return function (s, r = null) {
    B(s) || (s = de({}, s)), r != null && !le(r) && (r = null)
    const i = Ui(),
      o = new WeakSet(),
      c = []
    let l = !1
    const h = (i.app = {
      _uid: jl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: yc,
      get config() {
        return i.config
      },
      set config(f) {},
      use(f, ...d) {
        return (
          o.has(f) ||
            (f && B(f.install) ? (o.add(f), f.install(h, ...d)) : B(f) && (o.add(f), f(h, ...d))),
          h
        )
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), h
      },
      component(f, d) {
        return d ? ((i.components[f] = d), h) : i.components[f]
      },
      directive(f, d) {
        return d ? ((i.directives[f] = d), h) : i.directives[f]
      },
      mount(f, d, p) {
        if (!l) {
          const g = h._ceVNode || ce(s, r)
          return (
            (g.appContext = i),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            d && t ? t(g, f) : e(g, f, p),
            (l = !0),
            (h._container = f),
            (f.__vue_app__ = h),
            zn(g.component)
          )
        }
      },
      onUnmount(f) {
        c.push(f)
      },
      unmount() {
        l && (Ve(c, h._instance, 16), e(null, h._container), delete h._container.__vue_app__)
      },
      provide(f, d) {
        return (i.provides[f] = d), h
      },
      runWithContext(f) {
        const d = Vt
        Vt = h
        try {
          return f()
        } finally {
          Vt = d
        }
      }
    })
    return h
  }
}
let Vt = null
function Sn(e, t) {
  if (be) {
    let n = be.provides
    const s = be.parent && be.parent.provides
    s === n && (n = be.provides = Object.create(s)), (n[e] = t)
  }
}
function Qe(e, t, n = !1) {
  const s = be || ge
  if (s || Vt) {
    const r = Vt
      ? Vt._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && B(t) ? t.call(s && s.proxy) : t
  }
}
const Ki = {},
  Wi = () => Object.create(Ki),
  qi = (e) => Object.getPrototypeOf(e) === Ki
function kl(e, t, n, s = !1) {
  const r = {},
    i = Wi()
  ;(e.propsDefaults = Object.create(null)), zi(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : bi(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i)
}
function Bl(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o }
    } = e,
    c = q(r),
    [l] = e.propsOptions
  let h = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps
      for (let d = 0; d < f.length; d++) {
        let p = f[d]
        if (Wn(e.emitsOptions, p)) continue
        const g = t[p]
        if (l)
          if (Q(i, p)) g !== i[p] && ((i[p] = g), (h = !0))
          else {
            const S = vt(p)
            r[S] = Es(l, c, S, g, e, !1)
          }
        else g !== i[p] && ((i[p] = g), (h = !0))
      }
    }
  } else {
    zi(e, t, r, i) && (h = !0)
    let f
    for (const d in c)
      (!t || (!Q(t, d) && ((f = Ot(d)) === d || !Q(t, f)))) &&
        (l
          ? n && (n[d] !== void 0 || n[f] !== void 0) && (r[d] = Es(l, c, d, void 0, e, !0))
          : delete r[d])
    if (i !== c) for (const d in i) (!t || !Q(t, d)) && (delete i[d], (h = !0))
  }
  h && tt(e.attrs, 'set', '')
}
function zi(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    c
  if (t)
    for (let l in t) {
      if (Zt(l)) continue
      const h = t[l]
      let f
      r && Q(r, (f = vt(l)))
        ? !i || !i.includes(f)
          ? (n[f] = h)
          : ((c || (c = {}))[f] = h)
        : Wn(e.emitsOptions, l) || ((!(l in s) || h !== s[l]) && ((s[l] = h), (o = !0)))
    }
  if (i) {
    const l = q(n),
      h = c || se
    for (let f = 0; f < i.length; f++) {
      const d = i[f]
      n[d] = Es(r, l, d, h[d], e, !Q(h, d))
    }
  }
  return o
}
function Es(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const c = Q(o, 'default')
    if (c && s === void 0) {
      const l = o.default
      if (o.type !== Function && !o.skipFactory && B(l)) {
        const { propsDefaults: h } = r
        if (n in h) s = h[n]
        else {
          const f = _n(r)
          ;(s = h[n] = l.call(null, t)), f()
        }
      } else s = l
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !c ? (s = !1) : o[1] && (s === '' || s === Ot(n)) && (s = !0))
  }
  return s
}
const Vl = new WeakMap()
function Gi(e, t, n = !1) {
  const s = n ? Vl : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    c = []
  let l = !1
  if (!B(e)) {
    const f = (d) => {
      l = !0
      const [p, g] = Gi(d, t, !0)
      de(o, p), g && c.push(...g)
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  if (!i && !l) return le(e) && s.set(e, Dt), Dt
  if (j(i))
    for (let f = 0; f < i.length; f++) {
      const d = vt(i[f])
      fr(d) && (o[d] = se)
    }
  else if (i)
    for (const f in i) {
      const d = vt(f)
      if (fr(d)) {
        const p = i[f],
          g = (o[d] = j(p) || B(p) ? { type: p } : de({}, p)),
          S = g.type
        let P = !1,
          H = !0
        if (j(S))
          for (let $ = 0; $ < S.length; ++$) {
            const I = S[$],
              N = B(I) && I.name
            if (N === 'Boolean') {
              P = !0
              break
            } else N === 'String' && (H = !1)
          }
        else P = B(S) && S.name === 'Boolean'
        ;(g[0] = P), (g[1] = H), (P || Q(g, 'default')) && c.push(d)
      }
    }
  const h = [o, c]
  return le(e) && s.set(e, h), h
}
function fr(e) {
  return e[0] !== '$' && !Zt(e)
}
const Ji = (e) => e[0] === '_' || e === '$stable',
  qs = (e) => (j(e) ? e.map(Ge) : [Ge(e)]),
  Ul = (e, t, n) => {
    if (t._n) return t
    const s = st((...r) => qs(t(...r)), n)
    return (s._c = !1), s
  },
  Qi = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Ji(r)) continue
      const i = e[r]
      if (B(i)) t[r] = Ul(r, i, s)
      else if (i != null) {
        const o = qs(i)
        t[r] = () => o
      }
    }
  },
  Yi = (e, t) => {
    const n = qs(t)
    e.slots.default = () => n
  },
  Xi = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  Kl = (e, t, n) => {
    const s = (e.slots = Wi())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Xi(s, t, n), n && ni(s, '_', r, !0)) : Qi(t, s)
    } else t && Yi(e, t)
  },
  Wl = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = se
    if (s.shapeFlag & 32) {
      const c = t._
      c ? (n && c === 1 ? (i = !1) : Xi(r, t, n)) : ((i = !t.$stable), Qi(t, r)), (o = t)
    } else t && (Yi(e, t), (o = { default: 1 }))
    if (i) for (const c in r) !Ji(c) && o[c] == null && delete r[c]
  },
  Oe = ic
function ql(e) {
  return zl(e)
}
function zl(e, t) {
  const n = jn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: c,
      createComment: l,
      setText: h,
      setElementText: f,
      parentNode: d,
      nextSibling: p,
      setScopeId: g = Je,
      insertStaticContent: S
    } = e,
    P = (a, u, m, y = null, v = null, b = null, C = void 0, E = null, w = !!u.dynamicChildren) => {
      if (a === u) return
      a && !Rt(a, u) && ((y = _(a)), Ce(a, v, b, !0), (a = null)),
        u.patchFlag === -2 && ((w = !1), (u.dynamicChildren = null))
      const { type: x, ref: D, shapeFlag: A } = u
      switch (x) {
        case qn:
          H(a, u, m, y)
          break
        case Se:
          $(a, u, m, y)
          break
        case Rn:
          a == null && I(u, m, y, C)
          break
        case pe:
          L(a, u, m, y, v, b, C, E, w)
          break
        default:
          A & 1
            ? U(a, u, m, y, v, b, C, E, w)
            : A & 6
              ? G(a, u, m, y, v, b, C, E, w)
              : (A & 64 || A & 128) && x.process(a, u, m, y, v, b, C, E, w, M)
      }
      D != null && v && _s(D, a && a.ref, b, u || a, !u)
    },
    H = (a, u, m, y) => {
      if (a == null) s((u.el = c(u.children)), m, y)
      else {
        const v = (u.el = a.el)
        u.children !== a.children && h(v, u.children)
      }
    },
    $ = (a, u, m, y) => {
      a == null ? s((u.el = l(u.children || '')), m, y) : (u.el = a.el)
    },
    I = (a, u, m, y) => {
      ;[a.el, a.anchor] = S(a.children, u, m, y, a.el, a.anchor)
    },
    N = ({ el: a, anchor: u }, m, y) => {
      let v
      for (; a && a !== u; ) (v = p(a)), s(a, m, y), (a = v)
      s(u, m, y)
    },
    O = ({ el: a, anchor: u }) => {
      let m
      for (; a && a !== u; ) (m = p(a)), r(a), (a = m)
      r(u)
    },
    U = (a, u, m, y, v, b, C, E, w) => {
      u.type === 'svg' ? (C = 'svg') : u.type === 'math' && (C = 'mathml'),
        a == null ? ne(u, m, y, v, b, C, E, w) : V(a, u, v, b, C, E, w)
    },
    ne = (a, u, m, y, v, b, C, E) => {
      let w, x
      const { props: D, shapeFlag: A, transition: F, dirs: k } = a
      if (
        ((w = a.el = o(a.type, b, D && D.is, D)),
        A & 8 ? f(w, a.children) : A & 16 && me(a.children, w, null, y, v, ss(a, b), C, E),
        k && xt(a, null, y, 'created'),
        ee(w, a, a.scopeId, C, y),
        D)
      ) {
        for (const ie in D) ie !== 'value' && !Zt(ie) && i(w, ie, null, D[ie], b, y)
        'value' in D && i(w, 'value', null, D.value, b), (x = D.onVnodeBeforeMount) && qe(x, y, a)
      }
      k && xt(a, null, y, 'beforeMount')
      const K = Gl(v, F)
      K && F.beforeEnter(w),
        s(w, u, m),
        ((x = D && D.onVnodeMounted) || K || k) &&
          Oe(() => {
            x && qe(x, y, a), K && F.enter(w), k && xt(a, null, y, 'mounted')
          }, v)
    },
    ee = (a, u, m, y, v) => {
      if ((m && g(a, m), y)) for (let b = 0; b < y.length; b++) g(a, y[b])
      if (v) {
        let b = v.subTree
        if (u === b || (ro(b.type) && (b.ssContent === u || b.ssFallback === u))) {
          const C = v.vnode
          ee(a, C, C.scopeId, C.slotScopeIds, v.parent)
        }
      }
    },
    me = (a, u, m, y, v, b, C, E, w = 0) => {
      for (let x = w; x < a.length; x++) {
        const D = (a[x] = E ? ht(a[x]) : Ge(a[x]))
        P(null, D, u, m, y, v, b, C, E)
      }
    },
    V = (a, u, m, y, v, b, C) => {
      const E = (u.el = a.el)
      let { patchFlag: w, dynamicChildren: x, dirs: D } = u
      w |= a.patchFlag & 16
      const A = a.props || se,
        F = u.props || se
      let k
      if (
        (m && wt(m, !1),
        (k = F.onVnodeBeforeUpdate) && qe(k, m, u, a),
        D && xt(u, a, m, 'beforeUpdate'),
        m && wt(m, !0),
        ((A.innerHTML && F.innerHTML == null) || (A.textContent && F.textContent == null)) &&
          f(E, ''),
        x
          ? W(a.dynamicChildren, x, E, m, y, ss(u, v), b)
          : C || J(a, u, E, null, m, y, ss(u, v), b, !1),
        w > 0)
      ) {
        if (w & 16) re(E, A, F, m, v)
        else if (
          (w & 2 && A.class !== F.class && i(E, 'class', null, F.class, v),
          w & 4 && i(E, 'style', A.style, F.style, v),
          w & 8)
        ) {
          const K = u.dynamicProps
          for (let ie = 0; ie < K.length; ie++) {
            const X = K[ie],
              Ae = A[X],
              ve = F[X]
            ;(ve !== Ae || X === 'value') && i(E, X, Ae, ve, v, m)
          }
        }
        w & 1 && a.children !== u.children && f(E, u.children)
      } else !C && x == null && re(E, A, F, m, v)
      ;((k = F.onVnodeUpdated) || D) &&
        Oe(() => {
          k && qe(k, m, u, a), D && xt(u, a, m, 'updated')
        }, y)
    },
    W = (a, u, m, y, v, b, C) => {
      for (let E = 0; E < u.length; E++) {
        const w = a[E],
          x = u[E],
          D = w.el && (w.type === pe || !Rt(w, x) || w.shapeFlag & 70) ? d(w.el) : m
        P(w, x, D, null, y, v, b, C, !0)
      }
    },
    re = (a, u, m, y, v) => {
      if (u !== m) {
        if (u !== se) for (const b in u) !Zt(b) && !(b in m) && i(a, b, u[b], null, v, y)
        for (const b in m) {
          if (Zt(b)) continue
          const C = m[b],
            E = u[b]
          C !== E && b !== 'value' && i(a, b, E, C, v, y)
        }
        'value' in m && i(a, 'value', u.value, m.value, v)
      }
    },
    L = (a, u, m, y, v, b, C, E, w) => {
      const x = (u.el = a ? a.el : c('')),
        D = (u.anchor = a ? a.anchor : c(''))
      let { patchFlag: A, dynamicChildren: F, slotScopeIds: k } = u
      k && (E = E ? E.concat(k) : k),
        a == null
          ? (s(x, m, y), s(D, m, y), me(u.children || [], m, D, v, b, C, E, w))
          : A > 0 && A & 64 && F && a.dynamicChildren
            ? (W(a.dynamicChildren, F, m, v, b, C, E),
              (u.key != null || (v && u === v.subTree)) && Zi(a, u, !0))
            : J(a, u, m, D, v, b, C, E, w)
    },
    G = (a, u, m, y, v, b, C, E, w) => {
      ;(u.slotScopeIds = E),
        a == null
          ? u.shapeFlag & 512
            ? v.ctx.activate(u, m, y, C, w)
            : he(u, m, y, v, b, C, w)
          : je(a, u, w)
    },
    he = (a, u, m, y, v, b, C) => {
      const E = (a.component = dc(a, y, v))
      if ((Un(a) && (E.ctx.renderer = M), pc(E, !1, C), E.asyncDep)) {
        if ((v && v.registerDep(E, fe, C), !a.el)) {
          const w = (E.subTree = ce(Se))
          $(null, w, u, m)
        }
      } else fe(E, a, u, m, v, b, C)
    },
    je = (a, u, m) => {
      const y = (u.component = a.component)
      if (sc(a, u, m))
        if (y.asyncDep && !y.asyncResolved) {
          te(y, u, m)
          return
        } else (y.next = u), y.update()
      else (u.el = a.el), (y.vnode = u)
    },
    fe = (a, u, m, y, v, b, C) => {
      const E = () => {
        if (a.isMounted) {
          let { next: A, bu: F, u: k, parent: K, vnode: ie } = a
          {
            const Pe = eo(a)
            if (Pe) {
              A && ((A.el = ie.el), te(a, A, C)),
                Pe.asyncDep.then(() => {
                  a.isUnmounted || E()
                })
              return
            }
          }
          let X = A,
            Ae
          wt(a, !1),
            A ? ((A.el = ie.el), te(a, A, C)) : (A = ie),
            F && Qn(F),
            (Ae = A.props && A.props.onVnodeBeforeUpdate) && qe(Ae, K, A, ie),
            wt(a, !0)
          const ve = rs(a),
            He = a.subTree
          ;(a.subTree = ve),
            P(He, ve, d(He.el), _(He), a, v, b),
            (A.el = ve.el),
            X === null && rc(a, ve.el),
            k && Oe(k, v),
            (Ae = A.props && A.props.onVnodeUpdated) && Oe(() => qe(Ae, K, A, ie), v)
        } else {
          let A
          const { el: F, props: k } = u,
            { bm: K, m: ie, parent: X, root: Ae, type: ve } = a,
            He = Bt(u)
          if (
            (wt(a, !1),
            K && Qn(K),
            !He && (A = k && k.onVnodeBeforeMount) && qe(A, X, u),
            wt(a, !0),
            F && ae)
          ) {
            const Pe = () => {
              ;(a.subTree = rs(a)), ae(F, a.subTree, a, v, null)
            }
            He && ve.__asyncHydrate ? ve.__asyncHydrate(F, a, Pe) : Pe()
          } else {
            Ae.ce && Ae.ce._injectChildStyle(ve)
            const Pe = (a.subTree = rs(a))
            P(null, Pe, m, y, a, v, b), (u.el = Pe.el)
          }
          if ((ie && Oe(ie, v), !He && (A = k && k.onVnodeMounted))) {
            const Pe = u
            Oe(() => qe(A, X, Pe), v)
          }
          ;(u.shapeFlag & 256 || (X && Bt(X.vnode) && X.vnode.shapeFlag & 256)) &&
            a.a &&
            Oe(a.a, v),
            (a.isMounted = !0),
            (u = m = y = null)
        }
      }
      a.scope.on()
      const w = (a.effect = new oi(E))
      a.scope.off()
      const x = (a.update = w.run.bind(w)),
        D = (a.job = w.runIfDirty.bind(w))
      ;(D.i = a), (D.id = a.uid), (w.scheduler = () => Us(D)), wt(a, !0), x()
    },
    te = (a, u, m) => {
      u.component = a
      const y = a.vnode.props
      ;(a.vnode = u), (a.next = null), Bl(a, u.props, y, m), Wl(a, u.children, m), yt(), rr(a), bt()
    },
    J = (a, u, m, y, v, b, C, E, w = !1) => {
      const x = a && a.children,
        D = a ? a.shapeFlag : 0,
        A = u.children,
        { patchFlag: F, shapeFlag: k } = u
      if (F > 0) {
        if (F & 128) {
          ot(x, A, m, y, v, b, C, E, w)
          return
        } else if (F & 256) {
          Ye(x, A, m, y, v, b, C, E, w)
          return
        }
      }
      k & 8
        ? (D & 16 && Me(x, v, b), A !== x && f(m, A))
        : D & 16
          ? k & 16
            ? ot(x, A, m, y, v, b, C, E, w)
            : Me(x, v, b, !0)
          : (D & 8 && f(m, ''), k & 16 && me(A, m, y, v, b, C, E, w))
    },
    Ye = (a, u, m, y, v, b, C, E, w) => {
      ;(a = a || Dt), (u = u || Dt)
      const x = a.length,
        D = u.length,
        A = Math.min(x, D)
      let F
      for (F = 0; F < A; F++) {
        const k = (u[F] = w ? ht(u[F]) : Ge(u[F]))
        P(a[F], k, m, null, v, b, C, E, w)
      }
      x > D ? Me(a, v, b, !0, !1, A) : me(u, m, y, v, b, C, E, w, A)
    },
    ot = (a, u, m, y, v, b, C, E, w) => {
      let x = 0
      const D = u.length
      let A = a.length - 1,
        F = D - 1
      for (; x <= A && x <= F; ) {
        const k = a[x],
          K = (u[x] = w ? ht(u[x]) : Ge(u[x]))
        if (Rt(k, K)) P(k, K, m, null, v, b, C, E, w)
        else break
        x++
      }
      for (; x <= A && x <= F; ) {
        const k = a[A],
          K = (u[F] = w ? ht(u[F]) : Ge(u[F]))
        if (Rt(k, K)) P(k, K, m, null, v, b, C, E, w)
        else break
        A--, F--
      }
      if (x > A) {
        if (x <= F) {
          const k = F + 1,
            K = k < D ? u[k].el : y
          for (; x <= F; ) P(null, (u[x] = w ? ht(u[x]) : Ge(u[x])), m, K, v, b, C, E, w), x++
        }
      } else if (x > F) for (; x <= A; ) Ce(a[x], v, b, !0), x++
      else {
        const k = x,
          K = x,
          ie = new Map()
        for (x = K; x <= F; x++) {
          const Te = (u[x] = w ? ht(u[x]) : Ge(u[x]))
          Te.key != null && ie.set(Te.key, x)
        }
        let X,
          Ae = 0
        const ve = F - K + 1
        let He = !1,
          Pe = 0
        const Wt = new Array(ve)
        for (x = 0; x < ve; x++) Wt[x] = 0
        for (x = k; x <= A; x++) {
          const Te = a[x]
          if (Ae >= ve) {
            Ce(Te, v, b, !0)
            continue
          }
          let We
          if (Te.key != null) We = ie.get(Te.key)
          else
            for (X = K; X <= F; X++)
              if (Wt[X - K] === 0 && Rt(Te, u[X])) {
                We = X
                break
              }
          We === void 0
            ? Ce(Te, v, b, !0)
            : ((Wt[We - K] = x + 1),
              We >= Pe ? (Pe = We) : (He = !0),
              P(Te, u[We], m, null, v, b, C, E, w),
              Ae++)
        }
        const Zs = He ? Jl(Wt) : Dt
        for (X = Zs.length - 1, x = ve - 1; x >= 0; x--) {
          const Te = K + x,
            We = u[Te],
            er = Te + 1 < D ? u[Te + 1].el : y
          Wt[x] === 0
            ? P(null, We, m, er, v, b, C, E, w)
            : He && (X < 0 || x !== Zs[X] ? Ke(We, m, er, 2) : X--)
        }
      }
    },
    Ke = (a, u, m, y, v = null) => {
      const { el: b, type: C, transition: E, children: w, shapeFlag: x } = a
      if (x & 6) {
        Ke(a.component.subTree, u, m, y)
        return
      }
      if (x & 128) {
        a.suspense.move(u, m, y)
        return
      }
      if (x & 64) {
        C.move(a, u, m, M)
        return
      }
      if (C === pe) {
        s(b, u, m)
        for (let A = 0; A < w.length; A++) Ke(w[A], u, m, y)
        s(a.anchor, u, m)
        return
      }
      if (C === Rn) {
        N(a, u, m)
        return
      }
      if (y !== 2 && x & 1 && E)
        if (y === 0) E.beforeEnter(b), s(b, u, m), Oe(() => E.enter(b), v)
        else {
          const { leave: A, delayLeave: F, afterLeave: k } = E,
            K = () => s(b, u, m),
            ie = () => {
              A(b, () => {
                K(), k && k()
              })
            }
          F ? F(b, K, ie) : ie()
        }
      else s(b, u, m)
    },
    Ce = (a, u, m, y = !1, v = !1) => {
      const {
        type: b,
        props: C,
        ref: E,
        children: w,
        dynamicChildren: x,
        shapeFlag: D,
        patchFlag: A,
        dirs: F,
        cacheIndex: k
      } = a
      if (
        (A === -2 && (v = !1),
        E != null && _s(E, null, m, a, !0),
        k != null && (u.renderCache[k] = void 0),
        D & 256)
      ) {
        u.ctx.deactivate(a)
        return
      }
      const K = D & 1 && F,
        ie = !Bt(a)
      let X
      if ((ie && (X = C && C.onVnodeBeforeUnmount) && qe(X, u, a), D & 6)) yn(a.component, m, y)
      else {
        if (D & 128) {
          a.suspense.unmount(m, y)
          return
        }
        K && xt(a, null, u, 'beforeUnmount'),
          D & 64
            ? a.type.remove(a, u, m, M, y)
            : x && !x.hasOnce && (b !== pe || (A > 0 && A & 64))
              ? Me(x, u, m, !1, !0)
              : ((b === pe && A & 384) || (!v && D & 16)) && Me(w, u, m),
          y && It(a)
      }
      ;((ie && (X = C && C.onVnodeUnmounted)) || K) &&
        Oe(() => {
          X && qe(X, u, a), K && xt(a, null, u, 'unmounted')
        }, m)
    },
    It = (a) => {
      const { type: u, el: m, anchor: y, transition: v } = a
      if (u === pe) {
        Lt(m, y)
        return
      }
      if (u === Rn) {
        O(a)
        return
      }
      const b = () => {
        r(m), v && !v.persisted && v.afterLeave && v.afterLeave()
      }
      if (a.shapeFlag & 1 && v && !v.persisted) {
        const { leave: C, delayLeave: E } = v,
          w = () => C(m, b)
        E ? E(a.el, b, w) : w()
      } else b()
    },
    Lt = (a, u) => {
      let m
      for (; a !== u; ) (m = p(a)), r(a), (a = m)
      r(u)
    },
    yn = (a, u, m) => {
      const { bum: y, scope: v, job: b, subTree: C, um: E, m: w, a: x } = a
      ur(w),
        ur(x),
        y && Qn(y),
        v.stop(),
        b && ((b.flags |= 8), Ce(C, a, u, m)),
        E && Oe(E, u),
        Oe(() => {
          a.isUnmounted = !0
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve())
    },
    Me = (a, u, m, y = !1, v = !1, b = 0) => {
      for (let C = b; C < a.length; C++) Ce(a[C], u, m, y, v)
    },
    _ = (a) => {
      if (a.shapeFlag & 6) return _(a.component.subTree)
      if (a.shapeFlag & 128) return a.suspense.next()
      const u = p(a.anchor || a.el),
        m = u && u[vl]
      return m ? p(m) : u
    }
  let T = !1
  const R = (a, u, m) => {
      a == null
        ? u._vnode && Ce(u._vnode, null, null, !0)
        : P(u._vnode || null, a, u, null, null, null, m),
        (u._vnode = a),
        T || ((T = !0), rr(), Ai(), (T = !1))
    },
    M = { p: P, um: Ce, m: Ke, r: It, mt: he, mc: me, pc: J, pbc: W, n: _, o: e }
  let Y, ae
  return { render: R, hydrate: Y, createApp: Hl(R, Y) }
}
function ss({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function wt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Gl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Zi(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (j(s) && j(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let c = r[i]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = r[i] = ht(r[i])), (c.el = o.el)),
        !n && c.patchFlag !== -2 && Zi(o, c)),
        c.type === qn && (c.el = o.el)
    }
}
function Jl(e) {
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
function eo(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : eo(t)
}
function ur(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Ql = Symbol.for('v-scx'),
  Yl = () => Qe(Ql)
function Cn(e, t, n) {
  return to(e, t, n)
}
function to(e, t, n = se) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    c = de({}, n),
    l = (t && s) || (!t && i !== 'post')
  let h
  if (hn) {
    if (i === 'sync') {
      const g = Yl()
      h = g.__watcherHandles || (g.__watcherHandles = [])
    } else if (!l) {
      const g = () => {}
      return (g.stop = Je), (g.resume = Je), (g.pause = Je), g
    }
  }
  const f = be
  c.call = (g, S, P) => Ve(g, f, S, P)
  let d = !1
  i === 'post'
    ? (c.scheduler = (g) => {
        Oe(g, f && f.suspense)
      })
    : i !== 'sync' &&
      ((d = !0),
      (c.scheduler = (g, S) => {
        S ? g() : Us(g)
      })),
    (c.augmentJob = (g) => {
      t && (g.flags |= 4), d && ((g.flags |= 2), f && ((g.id = f.uid), (g.i = f)))
    })
  const p = dl(e, t, c)
  return hn && (h ? h.push(p) : l && p()), p
}
function Xl(e, t, n) {
  const s = this.proxy,
    r = ue(e) ? (e.includes('.') ? no(s, e) : () => s[e]) : e.bind(s, s)
  let i
  B(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = _n(this),
    c = to(r, i.bind(s), n)
  return o(), c
}
function no(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const Zl = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${Ot(t)}Modifiers`]
function ec(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || se
  let r = n
  const i = t.startsWith('update:'),
    o = i && Zl(s, t.slice(7))
  o && (o.trim && (r = n.map((f) => (ue(f) ? f.trim() : f))), o.number && (r = n.map(Io)))
  let c,
    l = s[(c = Jn(t))] || s[(c = Jn(vt(t)))]
  !l && i && (l = s[(c = Jn(Ot(t)))]), l && Ve(l, e, 6, r)
  const h = s[c + 'Once']
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
    ;(e.emitted[c] = !0), Ve(h, e, 6, r)
  }
}
function so(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    c = !1
  if (!B(e)) {
    const l = (h) => {
      const f = so(h, t, !0)
      f && ((c = !0), de(o, f))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !i && !c
    ? (le(e) && s.set(e, null), null)
    : (j(i) ? i.forEach((l) => (o[l] = null)) : de(o, i), le(e) && s.set(e, o), o)
}
function Wn(e, t) {
  return !e || !Nn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, Ot(t)) || Q(e, t))
}
function rs(e) {
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
      renderCache: f,
      props: d,
      data: p,
      setupState: g,
      ctx: S,
      inheritAttrs: P
    } = e,
    H = In(e)
  let $, I
  try {
    if (n.shapeFlag & 4) {
      const O = r || s,
        U = O
      ;($ = Ge(h.call(U, O, f, d, g, p, S))), (I = c)
    } else {
      const O = t
      ;($ = Ge(O.length > 1 ? O(d, { attrs: c, slots: o, emit: l }) : O(d, null))),
        (I = t.props ? c : tc(c))
    }
  } catch (O) {
    ;(sn.length = 0), Bn(O, e, 1), ($ = ce(Se))
  }
  let N = $
  if (I && P !== !1) {
    const O = Object.keys(I),
      { shapeFlag: U } = N
    O.length && U & 7 && (i && O.some(Ls) && (I = nc(I, i)), (N = _t(N, I, !1, !0)))
  }
  return (
    n.dirs && ((N = _t(N, null, !1, !0)), (N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs)),
    n.transition && fn(N, n.transition),
    ($ = N),
    In(H),
    $
  )
}
const tc = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Nn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  nc = (e, t) => {
    const n = {}
    for (const s in e) (!Ls(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function sc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: c, patchFlag: l } = t,
    h = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? dr(s, o, h) : !!o
    if (l & 8) {
      const f = t.dynamicProps
      for (let d = 0; d < f.length; d++) {
        const p = f[d]
        if (o[p] !== s[p] && !Wn(h, p)) return !0
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === o ? !1 : s ? (o ? dr(s, o, h) : !0) : !!o
  return !1
}
function dr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Wn(n, i)) return !0
  }
  return !1
}
function rc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const ro = (e) => e.__isSuspense
function ic(e, t) {
  t && t.pendingBranch ? (j(e) ? t.effects.push(...e) : t.effects.push(e)) : gl(e)
}
const pe = Symbol.for('v-fgt'),
  qn = Symbol.for('v-txt'),
  Se = Symbol.for('v-cmt'),
  Rn = Symbol.for('v-stc'),
  sn = []
let Le = null
function Re(e = !1) {
  sn.push((Le = e ? null : []))
}
function oc() {
  sn.pop(), (Le = sn[sn.length - 1] || null)
}
let un = 1
function hr(e) {
  ;(un += e), e < 0 && Le && (Le.hasOnce = !0)
}
function io(e) {
  return (e.dynamicChildren = un > 0 ? Le || Dt : null), oc(), un > 0 && Le && Le.push(e), e
}
function ke(e, t, n, s, r, i) {
  return io(z(e, t, n, s, r, i, !0))
}
function Ss(e, t, n, s, r) {
  return io(ce(e, t, n, s, r, !0))
}
function dn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Rt(e, t) {
  return e.type === t.type && e.key === t.key
}
const oo = ({ key: e }) => e ?? null,
  An = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (ue(e) || xe(e) || B(e) ? { i: ge, r: e, k: t, f: !!n } : e) : null
  )
function z(e, t = null, n = null, s = 0, r = null, i = e === pe ? 0 : 1, o = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && oo(t),
    ref: t && An(t),
    scopeId: Ti,
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
    c ? (zs(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ue(n) ? 8 : 16),
    un > 0 && !o && Le && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Le.push(l),
    l
  )
}
const ce = lc
function lc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Il) && (e = Se), dn(e))) {
    const c = _t(e, t, !0)
    return (
      n && zs(c, n),
      un > 0 && !i && Le && (c.shapeFlag & 6 ? (Le[Le.indexOf(e)] = c) : Le.push(c)),
      (c.patchFlag = -2),
      c
    )
  }
  if ((_c(e) && (e = e.__vccOpts), t)) {
    t = cc(t)
    let { class: c, style: l } = t
    c && !ue(c) && (t.class = gt(c)),
      le(l) && (Vs(l) && !j(l) && (l = de({}, l)), (t.style = Ns(l)))
  }
  const o = ue(e) ? 1 : ro(e) ? 128 : Oi(e) ? 64 : le(e) ? 4 : B(e) ? 2 : 0
  return z(e, t, n, s, r, o, i, !0)
}
function cc(e) {
  return e ? (Vs(e) || qi(e) ? de({}, e) : e) : null
}
function _t(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: c, transition: l } = e,
    h = t ? ac(r || {}, t) : r,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: h,
      key: h && oo(h),
      ref: t && t.ref ? (n && i ? (j(i) ? i.concat(An(t)) : [i, An(t)]) : An(t)) : i,
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
      ssContent: e.ssContent && _t(e.ssContent),
      ssFallback: e.ssFallback && _t(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }
  return l && s && fn(f, l.clone(f)), f
}
function Xt(e = ' ', t = 0) {
  return ce(qn, null, e, t)
}
function Cs(e, t) {
  const n = ce(Rn, null, e)
  return (n.staticCount = t), n
}
function At(e = '', t = !1) {
  return t ? (Re(), Ss(Se, null, e)) : ce(Se, null, e)
}
function Ge(e) {
  return e == null || typeof e == 'boolean'
    ? ce(Se)
    : j(e)
      ? ce(pe, null, e.slice())
      : dn(e)
        ? ht(e)
        : ce(qn, null, String(e))
}
function ht(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : _t(e)
}
function zs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (j(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), zs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !qi(t)
        ? (t._ctx = ge)
        : r === 3 && ge && (ge.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    B(t)
      ? ((t = { default: t, _ctx: ge }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Xt(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function ac(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = gt([t.class, s.class]))
      else if (r === 'style') t.style = Ns([t.style, s.style])
      else if (Nn(r)) {
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
const fc = Ui()
let uc = 0
function dc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || fc,
    i = {
      uid: uc++,
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
      scope: new Ho(!0),
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
      propsOptions: Gi(s, r),
      emitsOptions: so(s, r),
      emit: null,
      emitted: null,
      propsDefaults: se,
      inheritAttrs: s.inheritAttrs,
      ctx: se,
      data: se,
      props: se,
      attrs: se,
      slots: se,
      refs: se,
      setupState: se,
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
    (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = ec.bind(null, i)), e.ce && e.ce(i), i
  )
}
let be = null
const hc = () => be || ge
let Mn, Rs
{
  const e = jn(),
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
  ;(Mn = t('__VUE_INSTANCE_SETTERS__', (n) => (be = n))),
    (Rs = t('__VUE_SSR_SETTERS__', (n) => (hn = n)))
}
const _n = (e) => {
    const t = be
    return (
      Mn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Mn(t)
      }
    )
  },
  pr = () => {
    be && be.scope.off(), Mn(null)
  }
function lo(e) {
  return e.vnode.shapeFlag & 4
}
let hn = !1
function pc(e, t = !1, n = !1) {
  t && Rs(t)
  const { props: s, children: r } = e.vnode,
    i = lo(e)
  kl(e, s, i, t), Kl(e, r, n)
  const o = i ? gc(e, t) : void 0
  return t && Rs(!1), o
}
function gc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Ll))
  const { setup: s } = n
  if (s) {
    yt()
    const r = (e.setupContext = s.length > 1 ? vc(e) : null),
      i = _n(e),
      o = vn(s, e, 0, [e.props, r]),
      c = Xr(o)
    if ((bt(), i(), (c || e.sp) && !Bt(e) && Fi(e), c)) {
      if ((o.then(pr, pr), t))
        return o
          .then((l) => {
            gr(e, l, t)
          })
          .catch((l) => {
            Bn(l, e, 0)
          })
      e.asyncDep = o
    } else gr(e, o, t)
  } else co(e, t)
}
function gr(e, t, n) {
  B(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : le(t) && (e.setupState = Ei(t)),
    co(e, n)
}
let mr
function co(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && mr && !s.render) {
      const r = s.template || Ws(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = s,
          h = de(de({ isCustomElement: i, delimiters: c }, o), l)
        s.render = mr(r, h)
      }
    }
    e.render = s.render || Je
  }
  {
    const r = _n(e)
    yt()
    try {
      Ml(e)
    } finally {
      bt(), r()
    }
  }
}
const mc = {
  get(e, t) {
    return _e(e, 'get', ''), e[t]
  }
}
function vc(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, mc), slots: e.slots, emit: e.emit, expose: t }
}
function zn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ei(il(e.exposed)), {
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
function _c(e) {
  return B(e) && '__vccOpts' in e
}
const Fe = (e, t) => fl(e, t, hn)
function Gs(e, t, n) {
  const s = arguments.length
  return s === 2
    ? le(t) && !j(t)
      ? dn(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && dn(n) && (n = [n]),
      ce(e, t, n))
}
const yc = '3.5.12'
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let As
const vr = typeof window < 'u' && window.trustedTypes
if (vr)
  try {
    As = vr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const ao = As ? (e) => As.createHTML(e) : (e) => e,
  bc = 'http://www.w3.org/2000/svg',
  xc = 'http://www.w3.org/1998/Math/MathML',
  et = typeof document < 'u' ? document : null,
  _r = et && et.createElement('template'),
  wc = {
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
          ? et.createElementNS(bc, e)
          : t === 'mathml'
            ? et.createElementNS(xc, e)
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
        _r.innerHTML = ao(
          s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        )
        const c = _r.content
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
  zt = 'animation',
  pn = Symbol('_vtc'),
  fo = {
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
  Ec = de({}, Ii, fo),
  Sc = (e) => ((e.displayName = 'Transition'), (e.props = Ec), e),
  Cc = Sc((e, { slots: t }) => Gs(bl, Rc(e), t)),
  Et = (e, t = []) => {
    j(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  yr = (e) => (e ? (j(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Rc(e) {
  const t = {}
  for (const L in e) L in fo || (t[L] = e[L])
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
      appearToClass: f = c,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`
    } = e,
    S = Ac(r),
    P = S && S[0],
    H = S && S[1],
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
      St(L, G ? f : c), St(L, G ? h : o), he && he()
    },
    W = (L, G) => {
      ;(L._isLeaving = !1), St(L, d), St(L, g), St(L, p), G && G()
    },
    re = (L) => (G, he) => {
      const je = L ? ee : I,
        fe = () => V(G, L, he)
      Et(je, [G, fe]),
        br(() => {
          St(G, L ? l : i), ct(G, L ? f : c), yr(je) || xr(G, s, P, fe)
        })
    }
  return de(t, {
    onBeforeEnter(L) {
      Et($, [L]), ct(L, i), ct(L, o)
    },
    onBeforeAppear(L) {
      Et(ne, [L]), ct(L, l), ct(L, h)
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(L, G) {
      L._isLeaving = !0
      const he = () => W(L, G)
      ct(L, d),
        ct(L, p),
        Oc(),
        br(() => {
          L._isLeaving && (St(L, d), ct(L, g), yr(O) || xr(L, s, H, he))
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
function Ac(e) {
  if (e == null) return null
  if (le(e)) return [is(e.enter), is(e.leave)]
  {
    const t = is(e)
    return [t, t]
  }
}
function is(e) {
  return Lo(e)
}
function ct(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[pn] || (e[pn] = new Set())).add(t)
}
function St(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[pn]
  n && (n.delete(t), n.size || (e[pn] = void 0))
}
function br(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Pc = 0
function xr(e, t, n, s) {
  const r = (e._endId = ++Pc),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: c, propCount: l } = Tc(e, t)
  if (!o) return s()
  const h = o + 'end'
  let f = 0
  const d = () => {
      e.removeEventListener(h, p), i()
    },
    p = (g) => {
      g.target === e && ++f >= l && d()
    }
  setTimeout(() => {
    f < l && d()
  }, c + 1),
    e.addEventListener(h, p)
}
function Tc(e, t) {
  const n = window.getComputedStyle(e),
    s = (S) => (n[S] || '').split(', '),
    r = s(`${lt}Delay`),
    i = s(`${lt}Duration`),
    o = wr(r, i),
    c = s(`${zt}Delay`),
    l = s(`${zt}Duration`),
    h = wr(c, l)
  let f = null,
    d = 0,
    p = 0
  t === lt
    ? o > 0 && ((f = lt), (d = o), (p = i.length))
    : t === zt
      ? h > 0 && ((f = zt), (d = h), (p = l.length))
      : ((d = Math.max(o, h)),
        (f = d > 0 ? (o > h ? lt : zt) : null),
        (p = f ? (f === lt ? i.length : l.length) : 0))
  const g = f === lt && /\b(transform|all)(,|$)/.test(s(`${lt}Property`).toString())
  return { type: f, timeout: d, propCount: p, hasTransform: g }
}
function wr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Er(n) + Er(e[s])))
}
function Er(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Oc() {
  return document.body.offsetHeight
}
function Ic(e, t, n) {
  const s = e[pn]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const $n = Symbol('_vod'),
  uo = Symbol('_vsh'),
  Lc = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[$n] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Gt(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Gt(e, !0), s.enter(e))
            : s.leave(e, () => {
                Gt(e, !1)
              })
          : Gt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Gt(e, t)
    }
  }
function Gt(e, t) {
  ;(e.style.display = t ? e[$n] : 'none'), (e[uo] = !t)
}
const Mc = Symbol(''),
  $c = /(^|;)\s*display\s*:/
function Nc(e, t, n) {
  const s = e.style,
    r = ue(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (ue(t))
        for (const o of t.split(';')) {
          const c = o.slice(0, o.indexOf(':')).trim()
          n[c] == null && Pn(s, c, '')
        }
      else for (const o in t) n[o] == null && Pn(s, o, '')
    for (const o in n) o === 'display' && (i = !0), Pn(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[Mc]
      o && (n += ';' + o), (s.cssText = n), (i = $c.test(n))
    }
  } else t && e.removeAttribute('style')
  $n in e && ((e[$n] = i ? s.display : ''), e[uo] && (s.display = 'none'))
}
const Sr = /\s*!important$/
function Pn(e, t, n) {
  if (j(n)) n.forEach((s) => Pn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Fc(e, t)
    Sr.test(n) ? e.setProperty(Ot(s), n.replace(Sr, ''), 'important') : (e[s] = n)
  }
}
const Cr = ['Webkit', 'Moz', 'ms'],
  os = {}
function Fc(e, t) {
  const n = os[t]
  if (n) return n
  let s = vt(t)
  if (s !== 'filter' && s in e) return (os[t] = s)
  s = ti(s)
  for (let r = 0; r < Cr.length; r++) {
    const i = Cr[r] + s
    if (i in e) return (os[t] = i)
  }
  return t
}
const Rr = 'http://www.w3.org/1999/xlink'
function Ar(e, t, n, s, r, i = jo(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Rr, t.slice(6, t.length))
      : e.setAttributeNS(Rr, t, n)
    : n == null || (i && !si(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : rt(n) ? String(n) : n)
}
function Pr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? ao(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const c = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(c !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const c = typeof e[t]
    c === 'boolean'
      ? (n = si(n))
      : n == null && c === 'string'
        ? ((n = ''), (o = !0))
        : c === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function Dc(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function jc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Tr = Symbol('_vei')
function Hc(e, t, n, s, r = null) {
  const i = e[Tr] || (e[Tr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [c, l] = kc(t)
    if (s) {
      const h = (i[t] = Uc(s, r))
      Dc(e, c, h, l)
    } else o && (jc(e, c, o, l), (i[t] = void 0))
  }
}
const Or = /(?:Once|Passive|Capture)$/
function kc(e) {
  let t
  if (Or.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Or)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Ot(e.slice(2)), t]
}
let ls = 0
const Bc = Promise.resolve(),
  Vc = () => ls || (Bc.then(() => (ls = 0)), (ls = Date.now()))
function Uc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ve(Kc(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Vc()), n
}
function Kc(e, t) {
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
const Ir = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Wc = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? Ic(e, s, o)
      : t === 'style'
        ? Nc(e, n, s)
        : Nn(t)
          ? Ls(t) || Hc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : qc(e, t, s, o)
              )
            ? (Pr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Ar(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !ue(s))
              ? Pr(e, vt(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Ar(e, t, s, o))
  }
function qc(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Ir(t) && B(n)))
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
  return Ir(t) && ue(n) ? !1 : t in e
}
const zc = de({ patchProp: Wc }, wc)
let Lr
function Gc() {
  return Lr || (Lr = ql(zc))
}
const Jc = (...e) => {
  const t = Gc().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Yc(s)
      if (!r) return
      const i = t._component
      !B(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = '')
      const o = n(r, !1, Qc(r))
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), o
      )
    }),
    t
  )
}
function Qc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Yc(e) {
  return ue(e) ? document.querySelector(e) : e
}
const Xc = '/assets/logo-Cfff3W3x.svg'
/*!
 * vue-router v4.4.3
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Nt = typeof document < 'u'
function Zc(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const Z = Object.assign
function cs(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Ue(r) ? r.map(e) : e(r)
  }
  return n
}
const rn = () => {},
  Ue = Array.isArray,
  ho = /#/g,
  ea = /&/g,
  ta = /\//g,
  na = /=/g,
  sa = /\?/g,
  po = /\+/g,
  ra = /%5B/g,
  ia = /%5D/g,
  go = /%5E/g,
  oa = /%60/g,
  mo = /%7B/g,
  la = /%7C/g,
  vo = /%7D/g,
  ca = /%20/g
function Js(e) {
  return encodeURI('' + e)
    .replace(la, '|')
    .replace(ra, '[')
    .replace(ia, ']')
}
function aa(e) {
  return Js(e).replace(mo, '{').replace(vo, '}').replace(go, '^')
}
function Ps(e) {
  return Js(e)
    .replace(po, '%2B')
    .replace(ca, '+')
    .replace(ho, '%23')
    .replace(ea, '%26')
    .replace(oa, '`')
    .replace(mo, '{')
    .replace(vo, '}')
    .replace(go, '^')
}
function fa(e) {
  return Ps(e).replace(na, '%3D')
}
function ua(e) {
  return Js(e).replace(ho, '%23').replace(sa, '%3F')
}
function da(e) {
  return e == null ? '' : ua(e).replace(ta, '%2F')
}
function gn(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const ha = /\/$/,
  pa = (e) => e.replace(ha, '')
function as(e, t, n = '/') {
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
    (s = _a(s ?? t, n)),
    { fullPath: s + (i && '?') + i + o, path: s, query: r, hash: gn(o) }
  )
}
function ga(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Mr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function ma(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Ut(t.matched[s], n.matched[r]) &&
    _o(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Ut(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function _o(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!va(e[n], t[n])) return !1
  return !0
}
function va(e, t) {
  return Ue(e) ? $r(e, t) : Ue(t) ? $r(t, e) : e === t
}
function $r(e, t) {
  return Ue(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function _a(e, t) {
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
var mn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(mn || (mn = {}))
var on
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(on || (on = {}))
function ya(e) {
  if (!e)
    if (Nt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), pa(e)
}
const ba = /^[^#]+#/
function xa(e, t) {
  return e.replace(ba, '#') + t
}
function wa(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const Gn = () => ({ left: window.scrollX, top: window.scrollY })
function Ea(e) {
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
    t = wa(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Nr(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Ts = new Map()
function Sa(e, t) {
  Ts.set(e, t)
}
function Ca(e) {
  const t = Ts.get(e)
  return Ts.delete(e), t
}
let Ra = () => location.protocol + '//' + location.host
function yo(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let c = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = r.slice(c)
    return l[0] !== '/' && (l = '/' + l), Mr(l, '')
  }
  return Mr(n, e) + s + r
}
function Aa(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const c = ({ state: p }) => {
    const g = yo(e, location),
      S = n.value,
      P = t.value
    let H = 0
    if (p) {
      if (((n.value = g), (t.value = p), o && o === S)) {
        o = null
        return
      }
      H = P ? p.position - P.position : 0
    } else s(g)
    r.forEach(($) => {
      $(n.value, S, {
        delta: H,
        type: mn.pop,
        direction: H ? (H > 0 ? on.forward : on.back) : on.unknown
      })
    })
  }
  function l() {
    o = n.value
  }
  function h(p) {
    r.push(p)
    const g = () => {
      const S = r.indexOf(p)
      S > -1 && r.splice(S, 1)
    }
    return i.push(g), g
  }
  function f() {
    const { history: p } = window
    p.state && p.replaceState(Z({}, p.state, { scroll: Gn() }), '')
  }
  function d() {
    for (const p of i) p()
    ;(i = []),
      window.removeEventListener('popstate', c),
      window.removeEventListener('beforeunload', f)
  }
  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', f, { passive: !0 }),
    { pauseListeners: l, listen: h, destroy: d }
  )
}
function Fr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Gn() : null
  }
}
function Pa(e) {
  const { history: t, location: n } = window,
    s = { value: yo(e, n) },
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
  function i(l, h, f) {
    const d = e.indexOf('#'),
      p = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + l : Ra() + e + l
    try {
      t[f ? 'replaceState' : 'pushState'](h, '', p), (r.value = h)
    } catch (g) {
      console.error(g), n[f ? 'replace' : 'assign'](p)
    }
  }
  function o(l, h) {
    const f = Z({}, t.state, Fr(r.value.back, l, r.value.forward, !0), h, {
      position: r.value.position
    })
    i(l, f, !0), (s.value = l)
  }
  function c(l, h) {
    const f = Z({}, r.value, t.state, { forward: l, scroll: Gn() })
    i(f.current, f, !0)
    const d = Z({}, Fr(s.value, l, null), { position: f.position + 1 }, h)
    i(l, d, !1), (s.value = l)
  }
  return { location: s, state: r, push: c, replace: o }
}
function Ta(e) {
  e = ya(e)
  const t = Pa(e),
    n = Aa(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const r = Z({ location: '', base: e, go: s, createHref: xa.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
function Oa(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function bo(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const xo = Symbol('')
var Dr
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Dr || (Dr = {}))
function Kt(e, t) {
  return Z(new Error(), { type: e, [xo]: !0 }, t)
}
function Ze(e, t) {
  return e instanceof Error && xo in e && (t == null || !!(e.type & t))
}
const jr = '[^/]+?',
  Ia = { sensitive: !1, strict: !1, start: !0, end: !0 },
  La = /[.+*?^${}()[\]/\\]/g
function Ma(e, t) {
  const n = Z({}, Ia, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const h of e) {
    const f = h.length ? [] : [90]
    n.strict && !h.length && (r += '/')
    for (let d = 0; d < h.length; d++) {
      const p = h[d]
      let g = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0) d || (r += '/'), (r += p.value.replace(La, '\\$&')), (g += 40)
      else if (p.type === 1) {
        const { value: S, repeatable: P, optional: H, regexp: $ } = p
        i.push({ name: S, repeatable: P, optional: H })
        const I = $ || jr
        if (I !== jr) {
          g += 10
          try {
            new RegExp(`(${I})`)
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${S}" (${I}): ` + O.message)
          }
        }
        let N = P ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`
        d || (N = H && h.length < 2 ? `(?:/${N})` : '/' + N),
          H && (N += '?'),
          (r += N),
          (g += 20),
          H && (g += -8),
          P && (g += -20),
          I === '.*' && (g += -50)
      }
      f.push(g)
    }
    s.push(f)
  }
  if (n.strict && n.end) {
    const h = s.length - 1
    s[h][s[h].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function c(h) {
    const f = h.match(o),
      d = {}
    if (!f) return null
    for (let p = 1; p < f.length; p++) {
      const g = f[p] || '',
        S = i[p - 1]
      d[S.name] = g && S.repeatable ? g.split('/') : g
    }
    return d
  }
  function l(h) {
    let f = '',
      d = !1
    for (const p of e) {
      ;(!d || !f.endsWith('/')) && (f += '/'), (d = !1)
      for (const g of p)
        if (g.type === 0) f += g.value
        else if (g.type === 1) {
          const { value: S, repeatable: P, optional: H } = g,
            $ = S in h ? h[S] : ''
          if (Ue($) && !P)
            throw new Error(
              `Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`
            )
          const I = Ue($) ? $.join('/') : $
          if (!I)
            if (H) p.length < 2 && (f.endsWith('/') ? (f = f.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${S}"`)
          f += I
        }
    }
    return f || '/'
  }
  return { re: o, score: s, keys: i, parse: c, stringify: l }
}
function $a(e, t) {
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
function wo(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = $a(s[n], r[n])
    if (i) return i
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Hr(s)) return 1
    if (Hr(r)) return -1
  }
  return r.length - s.length
}
function Hr(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Na = { type: 0, value: '' },
  Fa = /[a-zA-Z0-9_]/
function Da(e) {
  if (!e) return [[]]
  if (e === '/') return [[Na]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(g) {
    throw new Error(`ERR (${n})/"${h}": ${g}`)
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
    f = ''
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
              regexp: f,
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
          : Fa.test(l)
            ? p()
            : (d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')' ? (f[f.length - 1] == '\\' ? (f = f.slice(0, -1) + l) : (n = 3)) : (f += l)
        break
      case 3:
        d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--, (f = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), d(), o(), r
}
function ja(e, t, n) {
  const s = Ma(Da(e.path), n),
    r = Z(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Ha(e, t) {
  const n = [],
    s = new Map()
  t = Vr({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(d) {
    return s.get(d)
  }
  function i(d, p, g) {
    const S = !g,
      P = ka(d)
    P.aliasOf = g && g.record
    const H = Vr(t, d),
      $ = [P]
    if ('alias' in d) {
      const O = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const U of O)
        $.push(
          Z({}, P, {
            components: g ? g.record.components : P.components,
            path: U,
            aliasOf: g ? g.record : P
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
        ((I = ja(O, p, H)),
        g
          ? g.alias.push(I)
          : ((N = N || I), N !== I && N.alias.push(I), S && d.name && !Br(I) && o(d.name)),
        Eo(I) && l(I),
        P.children)
      ) {
        const ne = P.children
        for (let ee = 0; ee < ne.length; ee++) i(ne[ee], I, g && g.children[ee])
      }
      g = g || I
    }
    return N
      ? () => {
          o(N)
        }
      : rn
  }
  function o(d) {
    if (bo(d)) {
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
    const p = Ua(d, n)
    n.splice(p, 0, d), d.record.name && !Br(d) && s.set(d.record.name, d)
  }
  function h(d, p) {
    let g,
      S = {},
      P,
      H
    if ('name' in d && d.name) {
      if (((g = s.get(d.name)), !g)) throw Kt(1, { location: d })
      ;(H = g.record.name),
        (S = Z(
          kr(
            p.params,
            g.keys
              .filter((N) => !N.optional)
              .concat(g.parent ? g.parent.keys.filter((N) => N.optional) : [])
              .map((N) => N.name)
          ),
          d.params &&
            kr(
              d.params,
              g.keys.map((N) => N.name)
            )
        )),
        (P = g.stringify(S))
    } else if (d.path != null)
      (P = d.path), (g = n.find((N) => N.re.test(P))), g && ((S = g.parse(P)), (H = g.record.name))
    else {
      if (((g = p.name ? s.get(p.name) : n.find((N) => N.re.test(p.path))), !g))
        throw Kt(1, { location: d, currentLocation: p })
      ;(H = g.record.name), (S = Z({}, p.params, d.params)), (P = g.stringify(S))
    }
    const $ = []
    let I = g
    for (; I; ) $.unshift(I.record), (I = I.parent)
    return { name: H, path: P, params: S, matched: $, meta: Va($) }
  }
  e.forEach((d) => i(d))
  function f() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: i,
    resolve: h,
    removeRoute: o,
    clearRoutes: f,
    getRoutes: c,
    getRecordMatcher: r
  }
}
function kr(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function ka(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Ba(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function Ba(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Br(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Va(e) {
  return e.reduce((t, n) => Z(t, n.meta), {})
}
function Vr(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Ua(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    wo(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const r = Ka(e)
  return r && (s = t.lastIndexOf(r, s - 1)), s
}
function Ka(e) {
  let t = e
  for (; (t = t.parent); ) if (Eo(t) && wo(e, t) === 0) return t
}
function Eo({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function Wa(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(po, ' '),
      o = i.indexOf('='),
      c = gn(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : gn(i.slice(o + 1))
    if (c in t) {
      let h = t[c]
      Ue(h) || (h = t[c] = [h]), h.push(l)
    } else t[c] = l
  }
  return t
}
function Ur(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = fa(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Ue(s) ? s.map((i) => i && Ps(i)) : [s && Ps(s)]).forEach((i) => {
      i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
    })
  }
  return t
}
function qa(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Ue(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const za = Symbol(''),
  Kr = Symbol(''),
  Qs = Symbol(''),
  Ys = Symbol(''),
  Os = Symbol('')
function Jt() {
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
            ? l(Kt(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : Oa(p)
                ? l(Kt(2, { from: t, to: p }))
                : (o && s.enterCallbacks[r] === o && typeof p == 'function' && o.push(p), c())
        },
        f = i(() => e.call(s && s.instances[r], t, n, h))
      let d = Promise.resolve(f)
      e.length < 3 && (d = d.then(h)), d.catch((p) => l(p))
    })
}
function fs(e, t, n, s, r = (i) => i()) {
  const i = []
  for (const o of e)
    for (const c in o.components) {
      let l = o.components[c]
      if (!(t !== 'beforeRouteEnter' && !o.instances[c]))
        if (Ga(l)) {
          const f = (l.__vccOpts || l)[t]
          f && i.push(pt(f, n, s, o, c, r))
        } else {
          let h = l()
          i.push(() =>
            h.then((f) => {
              if (!f)
                return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`))
              const d = Zc(f) ? f.default : f
              o.components[c] = d
              const g = (d.__vccOpts || d)[t]
              return g && pt(g, n, s, o, c, r)()
            })
          )
        }
    }
  return i
}
function Ga(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function Wr(e) {
  const t = Qe(Qs),
    n = Qe(Ys),
    s = Fe(() => {
      const l = Ne(e.to)
      return t.resolve(l)
    }),
    r = Fe(() => {
      const { matched: l } = s.value,
        { length: h } = l,
        f = l[h - 1],
        d = n.matched
      if (!f || !d.length) return -1
      const p = d.findIndex(Ut.bind(null, f))
      if (p > -1) return p
      const g = qr(l[h - 2])
      return h > 1 && qr(f) === g && d[d.length - 1].path !== g
        ? d.findIndex(Ut.bind(null, l[h - 2]))
        : p
    }),
    i = Fe(() => r.value > -1 && Ya(n.params, s.value.params)),
    o = Fe(() => r.value > -1 && r.value === n.matched.length - 1 && _o(n.params, s.value.params))
  function c(l = {}) {
    return Qa(l) ? t[Ne(e.replace) ? 'replace' : 'push'](Ne(e.to)).catch(rn) : Promise.resolve()
  }
  return { route: s, href: Fe(() => s.value.href), isActive: i, isExactActive: o, navigate: c }
}
const Ja = Vn({
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
    useLink: Wr,
    setup(e, { slots: t }) {
      const n = kn(Wr(e)),
        { options: s } = Qe(Qs),
        r = Fe(() => ({
          [zr(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [zr(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : Gs(
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
  Ft = Ja
function Qa(e) {
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
function Ya(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Ue(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1
  }
  return !0
}
function qr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const zr = (e, t, n) => e ?? t ?? n,
  Xa = Vn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Qe(Os),
        r = Fe(() => e.route || s.value),
        i = Qe(Kr, 0),
        o = Fe(() => {
          let h = Ne(i)
          const { matched: f } = r.value
          let d
          for (; (d = f[h]) && !d.components; ) h++
          return h
        }),
        c = Fe(() => r.value.matched[o.value])
      Sn(
        Kr,
        Fe(() => o.value + 1)
      ),
        Sn(za, c),
        Sn(Os, r)
      const l = ft()
      return (
        Cn(
          () => [l.value, c.value, e.name],
          ([h, f, d], [p, g, S]) => {
            f &&
              ((f.instances[d] = h),
              g &&
                g !== f &&
                h &&
                h === p &&
                (f.leaveGuards.size || (f.leaveGuards = g.leaveGuards),
                f.updateGuards.size || (f.updateGuards = g.updateGuards))),
              h && f && (!g || !Ut(f, g) || !p) && (f.enterCallbacks[d] || []).forEach((P) => P(h))
          },
          { flush: 'post' }
        ),
        () => {
          const h = r.value,
            f = e.name,
            d = c.value,
            p = d && d.components[f]
          if (!p) return Gr(n.default, { Component: p, route: h })
          const g = d.props[f],
            S = g ? (g === !0 ? h.params : typeof g == 'function' ? g(h) : g) : null,
            H = Gs(
              p,
              Z({}, S, t, {
                onVnodeUnmounted: ($) => {
                  $.component.isUnmounted && (d.instances[f] = null)
                },
                ref: l
              })
            )
          return Gr(n.default, { Component: H, route: h }) || H
        }
      )
    }
  })
function Gr(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const So = Xa
function Za(e) {
  const t = Ha(e.routes, e),
    n = e.parseQuery || Wa,
    s = e.stringifyQuery || Ur,
    r = e.history,
    i = Jt(),
    o = Jt(),
    c = Jt(),
    l = ol(at)
  let h = at
  Nt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const f = cs.bind(null, (_) => '' + _),
    d = cs.bind(null, da),
    p = cs.bind(null, gn)
  function g(_, T) {
    let R, M
    return bo(_) ? ((R = t.getRecordMatcher(_)), (M = T)) : (M = _), t.addRoute(M, R)
  }
  function S(_) {
    const T = t.getRecordMatcher(_)
    T && t.removeRoute(T)
  }
  function P() {
    return t.getRoutes().map((_) => _.record)
  }
  function H(_) {
    return !!t.getRecordMatcher(_)
  }
  function $(_, T) {
    if (((T = Z({}, T || l.value)), typeof _ == 'string')) {
      const u = as(n, _, T.path),
        m = t.resolve({ path: u.path }, T),
        y = r.createHref(u.fullPath)
      return Z(u, m, { params: p(m.params), hash: gn(u.hash), redirectedFrom: void 0, href: y })
    }
    let R
    if (_.path != null) R = Z({}, _, { path: as(n, _.path, T.path).path })
    else {
      const u = Z({}, _.params)
      for (const m in u) u[m] == null && delete u[m]
      ;(R = Z({}, _, { params: d(u) })), (T.params = d(T.params))
    }
    const M = t.resolve(R, T),
      Y = _.hash || ''
    M.params = f(p(M.params))
    const ae = ga(s, Z({}, _, { hash: aa(Y), path: M.path })),
      a = r.createHref(ae)
    return Z({ fullPath: ae, hash: Y, query: s === Ur ? qa(_.query) : _.query || {} }, M, {
      redirectedFrom: void 0,
      href: a
    })
  }
  function I(_) {
    return typeof _ == 'string' ? as(n, _, l.value.path) : Z({}, _)
  }
  function N(_, T) {
    if (h !== _) return Kt(8, { from: T, to: _ })
  }
  function O(_) {
    return ee(_)
  }
  function U(_) {
    return O(Z(I(_), { replace: !0 }))
  }
  function ne(_) {
    const T = _.matched[_.matched.length - 1]
    if (T && T.redirect) {
      const { redirect: R } = T
      let M = typeof R == 'function' ? R(_) : R
      return (
        typeof M == 'string' &&
          ((M = M.includes('?') || M.includes('#') ? (M = I(M)) : { path: M }), (M.params = {})),
        Z({ query: _.query, hash: _.hash, params: M.path != null ? {} : _.params }, M)
      )
    }
  }
  function ee(_, T) {
    const R = (h = $(_)),
      M = l.value,
      Y = _.state,
      ae = _.force,
      a = _.replace === !0,
      u = ne(R)
    if (u)
      return ee(
        Z(I(u), { state: typeof u == 'object' ? Z({}, Y, u.state) : Y, force: ae, replace: a }),
        T || R
      )
    const m = R
    m.redirectedFrom = T
    let y
    return (
      !ae && ma(s, M, R) && ((y = Kt(16, { to: m, from: M })), Ke(M, M, !0, !1)),
      (y ? Promise.resolve(y) : W(m, M))
        .catch((v) => (Ze(v) ? (Ze(v, 2) ? v : ot(v)) : J(v, m, M)))
        .then((v) => {
          if (v) {
            if (Ze(v, 2))
              return ee(
                Z({ replace: a }, I(v.to), {
                  state: typeof v.to == 'object' ? Z({}, Y, v.to.state) : Y,
                  force: ae
                }),
                T || m
              )
          } else v = L(m, M, !0, a, Y)
          return re(m, M, v), v
        })
    )
  }
  function me(_, T) {
    const R = N(_, T)
    return R ? Promise.reject(R) : Promise.resolve()
  }
  function V(_) {
    const T = Lt.values().next().value
    return T && typeof T.runWithContext == 'function' ? T.runWithContext(_) : _()
  }
  function W(_, T) {
    let R
    const [M, Y, ae] = ef(_, T)
    R = fs(M.reverse(), 'beforeRouteLeave', _, T)
    for (const u of M)
      u.leaveGuards.forEach((m) => {
        R.push(pt(m, _, T))
      })
    const a = me.bind(null, _, T)
    return (
      R.push(a),
      Me(R)
        .then(() => {
          R = []
          for (const u of i.list()) R.push(pt(u, _, T))
          return R.push(a), Me(R)
        })
        .then(() => {
          R = fs(Y, 'beforeRouteUpdate', _, T)
          for (const u of Y)
            u.updateGuards.forEach((m) => {
              R.push(pt(m, _, T))
            })
          return R.push(a), Me(R)
        })
        .then(() => {
          R = []
          for (const u of ae)
            if (u.beforeEnter)
              if (Ue(u.beforeEnter)) for (const m of u.beforeEnter) R.push(pt(m, _, T))
              else R.push(pt(u.beforeEnter, _, T))
          return R.push(a), Me(R)
        })
        .then(
          () => (
            _.matched.forEach((u) => (u.enterCallbacks = {})),
            (R = fs(ae, 'beforeRouteEnter', _, T, V)),
            R.push(a),
            Me(R)
          )
        )
        .then(() => {
          R = []
          for (const u of o.list()) R.push(pt(u, _, T))
          return R.push(a), Me(R)
        })
        .catch((u) => (Ze(u, 8) ? u : Promise.reject(u)))
    )
  }
  function re(_, T, R) {
    c.list().forEach((M) => V(() => M(_, T, R)))
  }
  function L(_, T, R, M, Y) {
    const ae = N(_, T)
    if (ae) return ae
    const a = T === at,
      u = Nt ? history.state : {}
    R &&
      (M || a
        ? r.replace(_.fullPath, Z({ scroll: a && u && u.scroll }, Y))
        : r.push(_.fullPath, Y)),
      (l.value = _),
      Ke(_, T, R, a),
      ot()
  }
  let G
  function he() {
    G ||
      (G = r.listen((_, T, R) => {
        if (!yn.listening) return
        const M = $(_),
          Y = ne(M)
        if (Y) {
          ee(Z(Y, { replace: !0 }), M).catch(rn)
          return
        }
        h = M
        const ae = l.value
        Nt && Sa(Nr(ae.fullPath, R.delta), Gn()),
          W(M, ae)
            .catch((a) =>
              Ze(a, 12)
                ? a
                : Ze(a, 2)
                  ? (ee(a.to, M)
                      .then((u) => {
                        Ze(u, 20) && !R.delta && R.type === mn.pop && r.go(-1, !1)
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
                    : R.type === mn.pop && Ze(a, 20) && r.go(-1, !1)),
                re(M, ae, a)
            })
            .catch(rn)
      }))
  }
  let je = Jt(),
    fe = Jt(),
    te
  function J(_, T, R) {
    ot(_)
    const M = fe.list()
    return M.length ? M.forEach((Y) => Y(_, T, R)) : console.error(_), Promise.reject(_)
  }
  function Ye() {
    return te && l.value !== at
      ? Promise.resolve()
      : new Promise((_, T) => {
          je.add([_, T])
        })
  }
  function ot(_) {
    return te || ((te = !_), he(), je.list().forEach(([T, R]) => (_ ? R(_) : T())), je.reset()), _
  }
  function Ke(_, T, R, M) {
    const { scrollBehavior: Y } = e
    if (!Nt || !Y) return Promise.resolve()
    const ae =
      (!R && Ca(Nr(_.fullPath, 0))) || ((M || !R) && history.state && history.state.scroll) || null
    return Ci()
      .then(() => Y(_, T, ae))
      .then((a) => a && Ea(a))
      .catch((a) => J(a, _, T))
  }
  const Ce = (_) => r.go(_)
  let It
  const Lt = new Set(),
    yn = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: S,
      clearRoutes: t.clearRoutes,
      hasRoute: H,
      getRoutes: P,
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
      onError: fe.add,
      isReady: Ye,
      install(_) {
        const T = this
        _.component('RouterLink', Ft),
          _.component('RouterView', So),
          (_.config.globalProperties.$router = T),
          Object.defineProperty(_.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Ne(l)
          }),
          Nt && !It && l.value === at && ((It = !0), O(r.location).catch((Y) => {}))
        const R = {}
        for (const Y in at) Object.defineProperty(R, Y, { get: () => l.value[Y], enumerable: !0 })
        _.provide(Qs, T), _.provide(Ys, bi(R)), _.provide(Os, l)
        const M = _.unmount
        Lt.add(_),
          (_.unmount = function () {
            Lt.delete(_),
              Lt.size < 1 && ((h = at), G && G(), (G = null), (l.value = at), (It = !1), (te = !1)),
              M()
          })
      }
    }
  function Me(_) {
    return _.reduce((T, R) => T.then(() => V(R)), Promise.resolve())
  }
  return yn
}
function ef(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const c = t.matched[o]
    c && (e.matched.find((h) => Ut(h, c)) ? s.push(c) : n.push(c))
    const l = e.matched[o]
    l && (t.matched.find((h) => Ut(h, l)) || r.push(l))
  }
  return [n, s, r]
}
function tf(e) {
  return Qe(Ys)
}
const nf = { class: 'flex flex-col min-h-screen' },
  sf = { class: 'flex flex-col' },
  rf = { class: 'no-scrollbar' },
  of = {
    class:
      'flex flex-row w-full absolute z-20 bg-gradient-to-b from-black/50 via-[rgba(28,28,28,0.20)] to-[rgba(37,37,37,0.00)]'
  },
  lf = { class: 'w-1/2 pl-20 py-5' },
  cf = { class: 'w-1/2 flex items-center gap-x-20 justify-end pr-20' },
  af = { class: 'flex-grow' },
  ff = Vn({
    __name: 'App',
    setup(e) {
      const t = tf(),
        n = (s) => Fe(() => t.path === s)
      return (s, r) => (
        Re(),
        ke('div', nf, [
          z('div', sf, [
            z('header', rf, [
              z('nav', of, [
                z('div', lf, [
                  ce(
                    Ne(Ft),
                    { to: '/' },
                    {
                      default: st(
                        () => r[0] || (r[0] = [z('img', { alt: 'Vue logo', src: Xc }, null, -1)])
                      ),
                      _: 1
                    }
                  )
                ]),
                z('div', cf, [
                  ce(
                    Ne(Ft),
                    { to: '/projects', class: gt(['nav-link', { active: n('/projects').value }]) },
                    { default: st(() => r[1] || (r[1] = [Xt('Projects')])), _: 1 },
                    8,
                    ['class']
                  ),
                  ce(
                    Ne(Ft),
                    { to: '/news', class: gt(['nav-link', { active: n('/news').value }]) },
                    { default: st(() => r[2] || (r[2] = [Xt('News')])), _: 1 },
                    8,
                    ['class']
                  ),
                  ce(
                    Ne(Ft),
                    { to: '/awards', class: gt(['nav-link', { active: n('/awards').value }]) },
                    { default: st(() => r[3] || (r[3] = [Xt('Awards')])), _: 1 },
                    8,
                    ['class']
                  ),
                  ce(
                    Ne(Ft),
                    { to: '/contact', class: gt(['nav-link', { active: n('/contact').value }]) },
                    { default: st(() => r[4] || (r[4] = [Xt('Contact')])), _: 1 },
                    8,
                    ['class']
                  )
                ])
              ])
            ])
          ]),
          z('main', af, [ce(Ne(So))]),
          r[5] ||
            (r[5] = Cs(
              '<footer class="flex flex-col bg-black py-8 mt-auto" data-v-32a956a3><div class="mx-[5%]" data-v-32a956a3><div class="flex flex-wrap items-start gap-8 relative" data-v-32a956a3><div class="w-full h-[2px] bg-white" data-v-32a956a3></div><div class="flex-1 text-white ml-5" data-v-32a956a3><p class="font-medium text-white" data-v-32a956a3>Shanghai, China</p><p class="font-medium text-white" data-v-32a956a3>Xi&#39;an, China</p><p class="font-medium text-white" data-v-32a956a3>Calgary, Canada</p></div><div class="flex flex-col items-start gap-2 mr-5" data-v-32a956a3><div data-v-32a956a3><p class="font-medium text-white mb-1" data-v-32a956a3>Connect with us:</p><p class="text-white" data-v-32a956a3>atl@188.com</p></div><p class="text-white text-sm" data-v-32a956a3>© 2024 ATL Lighting Design</p></div></div></div></footer>',
              1
            ))
        ])
      )
    }
  }),
  Xs = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  uf = Xs(ff, [['__scopeId', 'data-v-32a956a3']]),
  df = 'modulepreload',
  hf = function (e) {
    return '/' + e
  },
  Jr = {},
  Qt = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        o = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      r = Promise.all(
        n.map((c) => {
          if (((c = hf(c)), c in Jr)) return
          Jr[c] = !0
          const l = c.endsWith('.css'),
            h = l ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${c}"]${h}`)) return
          const f = document.createElement('link')
          if (
            ((f.rel = l ? 'stylesheet' : df),
            l || (f.as = 'script'),
            (f.crossOrigin = ''),
            (f.href = c),
            o && f.setAttribute('nonce', o),
            document.head.appendChild(f),
            l)
          )
            return new Promise((d, p) => {
              f.addEventListener('load', d),
                f.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${c}`)))
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
  Qr = '/assets/3-mLBZBynV.svg',
  pf = '/assets/designers-CTAS0JT_.svg',
  gf = {
    props: {
      startAutoPlay: { type: Boolean, default: !0 },
      timeout: { type: Number, default: 5e3 },
      navigation: { type: Boolean, default: !0 },
      pagination: { type: Boolean, default: !0 }
    },
    setup(e) {
      const t = ft(1),
        n = ft(0),
        s = ft(e.startAutoPlay),
        r = ft(e.timeout),
        i = ft(e.pagination),
        o = ft(e.navigation),
        c = () => {
          t.value = t.value === n.value ? 1 : t.value + 1
        },
        l = () => {
          t.value = t.value === 1 ? 1 : t.value - 1
        },
        h = (d) => {
          t.value = d + 1
        },
        f = () => {
          setInterval(c, r.value)
        }
      return (
        Ks(() => {
          ;(n.value = document.querySelectorAll('.slide').length), s.value && f()
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
  mf = { class: 'relative w-full h-full' },
  vf = {
    key: 0,
    class: 'absolute inset-0 flex items-center justify-between px-[10%] pointer-events-none'
  },
  _f = { key: 1, class: 'absolute bottom-[24%] left-0 right-0 pointer-events-none' },
  yf = { class: 'flex items-center justify-center gap-2' },
  bf = ['onClick']
function xf(e, t, n, s, r, i) {
  return (
    Re(),
    ke(
      pe,
      null,
      [
        z('div', mf, [ki(e.$slots, 'default', { currentSlide: s.currentSlide })]),
        At(' Navigation '),
        s.navEnabled
          ? (Re(),
            ke('div', vf, [
              z(
                'button',
                {
                  onClick: t[0] || (t[0] = (...o) => s.prevSlide && s.prevSlide(...o)),
                  class:
                    'p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none pointer-events-auto'
                },
                t[2] ||
                  (t[2] = [
                    z(
                      'svg',
                      {
                        width: '28',
                        height: '48',
                        viewBox: '0 0 28 48',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg'
                      },
                      [
                        z('path', {
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
              z(
                'button',
                {
                  onClick: t[1] || (t[1] = (...o) => s.nextSlide && s.nextSlide(...o)),
                  class:
                    'p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none pointer-events-auto'
                },
                t[3] ||
                  (t[3] = [
                    z(
                      'div',
                      { class: 'rotate-180' },
                      [
                        z(
                          'svg',
                          {
                            width: '28',
                            height: '48',
                            viewBox: '0 0 28 48',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg'
                          },
                          [
                            z('path', {
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
          : At('v-if', !0),
        At(' Pagination '),
        s.paginationEnabled
          ? (Re(),
            ke('div', _f, [
              z('div', yf, [
                (Re(!0),
                ke(
                  pe,
                  null,
                  ys(
                    s.slideCount,
                    (o, c) => (
                      Re(),
                      ke(
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
                        bf
                      )
                    )
                  ),
                  128
                ))
              ])
            ]))
          : At('v-if', !0)
      ],
      64
    )
  )
}
const wf = Xs(gf, [['render', xf]]),
  Ef = {},
  Sf = { class: 'slide absolute inset-0 w-full h-full' }
function Cf(e, t, n, s, r, i) {
  return (
    Re(),
    ke('div', Sf, [
      ce(
        Cc,
        { name: 'slide' },
        { default: st(() => [ki(e.$slots, 'default', {}, void 0, !0)]), _: 3 }
      )
    ])
  )
}
const Rf = Xs(Ef, [
    ['render', Cf],
    ['__scopeId', 'data-v-4d4b60fa']
  ]),
  Af = '/assets/1-CoU01fGB.svg',
  Pf = '/assets/2-CtT5LFXg.svg',
  Tf = { class: 'bg-black overflow-x-hidden' },
  Of = { class: 'w-screen h-screen' },
  If = { class: 'w-full' },
  Lf = ['src'],
  Mf = { class: 'px-[5%] pt-20 overflow-y-hidden w-[100%]' },
  $f = { class: 'pt-10 pb-10' },
  Nf = { class: 'grid grid-cols-3 gap-12 w-full pt-10' },
  Ff = { class: 'border-white border-2 p-6 flex-col' },
  Df = { class: 'text-3xl text-white' },
  jf = { class: 'text-white text-lg pb-6' },
  Hf = ['src'],
  kf = Vn({
    __name: 'HomeView',
    setup(e) {
      const t = [Af, Pf, Qr],
        n = ft([
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
        ke('main', Tf, [
          z('div', Of, [
            ce(
              wf,
              { navigation: !1, pagination: !1, startAutoPlay: !0, timeout: 5e3 },
              {
                default: st(({ currentSlide: i }) => [
                  (Re(),
                  ke(
                    pe,
                    null,
                    ys(t, (o, c) =>
                      ce(
                        Rf,
                        { key: c },
                        {
                          default: st(() => [
                            ml(
                              z(
                                'div',
                                If,
                                [
                                  z(
                                    'img',
                                    {
                                      src: o,
                                      alt: 'Background Images',
                                      class: 'w-full h-screen object-cover'
                                    },
                                    null,
                                    8,
                                    Lf
                                  )
                                ],
                                512
                              ),
                              [[Lc, i === c + 1]]
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
          z('div', Mf, [
            At(' This is the Our Company Intro '),
            r[2] ||
              (r[2] = Cs(
                '<div class="flex flex-row w-fit items-center justify-center relative translate-x-[-9%]"><div class="z-10 w-1/2 translate-x-[10%] p-[4%] bg-black"><h1 class="text-5xl text-white pb-4"> Our Company </h1><hr class="border-t-2 border-white mt-2 pb-2"><p class="text-md text-white"> Founded in 2006, ATL is a leading architectural lighting design firm specializing in China&#39;s cultural and tourism sectors. Our expert team has completed over 300 projects, blending artistic vision with cutting-edge lighting technology. ATL&#39;s commitment to excellence has earned us numerous top awards nationally and internationally, establishing our reputation as pioneers in cultural and tourism lighting design. </p></div><div><img src="' +
                  Qr +
                  '" class="w-full object-cover object-center overflow-y-hidden"></div></div>',
                1
              )),
            At(' This is the Our Values '),
            z('div', $f, [
              z('div', null, [
                r[1] || (r[1] = z('h1', { class: 'text-5xl text-white' }, ' Our Values ', -1)),
                z('div', Nf, [
                  (Re(!0),
                  ke(
                    pe,
                    null,
                    ys(
                      n.value,
                      (i) => (
                        Re(),
                        ke('div', { key: i.title }, [
                          z('div', Ff, [
                            z('h1', Df, us(i.title), 1),
                            r[0] ||
                              (r[0] = z(
                                'div',
                                { class: 'w-full h-[2px] bg-white my-3' },
                                null,
                                -1
                              )),
                            z('p', jf, us(i.text), 1)
                          ]),
                          z('img', { src: i.imagelink, class: 'w-full pt-20' }, null, 8, Hf)
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ])
            ]),
            At(' This is the Our Values '),
            r[3] ||
              (r[3] = Cs(
                '<div class="pt-10 pb-10"><div><h1 class="text-5xl text-white pb-10"> Our Principal Designers </h1><div class="flex flex-row items-center justify-center"><div class="w-[70%]"><img src="' +
                  pf +
                  '"></div><div class="ml-[5%] w-1/4 flex flex-col items-start justify-center"><div class="font-normal text-transparent text-5xl tracking-[0] leading-normal space-y-4"><div><span class="text-[#d91214]">20+</span><span class="text-white"> People <br></span></div><div><span class="text-[#d91214]">50+</span><span class="text-white"> Awards </span></div><div><span class="text-[#d91214]">300+</span><span class="text-white"> Projects</span></div></div></div></div></div></div>',
                1
              ))
          ])
        ])
      )
    }
  }),
  Bf = Za({
    history: Ta('/'),
    routes: [
      { path: '/', name: 'home', component: kf },
      {
        path: '/news',
        name: 'News',
        component: () => Qt(() => import('./NewsView-B9K5IFIn.js'), [])
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => Qt(() => import('./ProjectsView-DfQrQ7CC.js'), [])
      },
      {
        path: '/projectpage',
        name: 'Project Page',
        component: () => Qt(() => import('./ProjectPageView-nuFZKXqb.js'), [])
      },
      {
        path: '/awards',
        name: 'Awardss',
        component: () => Qt(() => import('./AwardsView-BigopIfB.js'), [])
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => Qt(() => import('./ContactView-CR_Kc8Wh.js'), __vite__mapDeps([0, 1]))
      }
    ]
  }),
  Co = Jc(uf)
Co.use(Bf)
Co.mount('#app')
export {
  pe as F,
  wf as I,
  Rf as S,
  Xs as _,
  z as a,
  ys as b,
  ke as c,
  Vn as d,
  Cs as e,
  ce as f,
  Xt as g,
  ml as h,
  Af as i,
  Pf as j,
  Qr as k,
  Re as o,
  ft as r,
  us as t,
  Lc as v,
  st as w
}
