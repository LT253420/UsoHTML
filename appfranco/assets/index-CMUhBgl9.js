function Oh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
            o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function Lh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ud = {
    exports: {}
}
    , Fo = {}
    , cd = {
        exports: {}
    }
    , M = {};
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oi = Symbol.for("react.element")
    , Ah = Symbol.for("react.portal")
    , Mh = Symbol.for("react.fragment")
    , Dh = Symbol.for("react.strict_mode")
    , bh = Symbol.for("react.profiler")
    , jh = Symbol.for("react.provider")
    , Uh = Symbol.for("react.context")
    , zh = Symbol.for("react.forward_ref")
    , Fh = Symbol.for("react.suspense")
    , Bh = Symbol.for("react.memo")
    , $h = Symbol.for("react.lazy")
    , mu = Symbol.iterator;
function Vh(e) {
    return e === null || typeof e != "object" ? null : (e = mu && e[mu] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var dd = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , fd = Object.assign
    , pd = {};
function tr(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = pd,
        this.updater = n || dd
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
tr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function hd() { }
hd.prototype = tr.prototype;
function Xa(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = pd,
        this.updater = n || dd
}
var Za = Xa.prototype = new hd;
Za.constructor = Xa;
fd(Za, tr.prototype);
Za.isPureReactComponent = !0;
var gu = Array.isArray
    , md = Object.prototype.hasOwnProperty
    , el = {
        current: null
    }
    , gd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function vd(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
            t.key !== void 0 && (o = "" + t.key),
            t)
            md.call(t, r) && !gd.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
            a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: oi,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: el.current
    }
}
function Wh(e, t) {
    return {
        $$typeof: oi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function tl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === oi
}
function Hh(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var vu = /\/+/g;
function fs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Hh("" + e.key) : t.toString(36)
}
function zi(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case oi:
                    case Ah:
                        s = !0
                }
        }
    if (s)
        return s = e,
            i = i(s),
            e = r === "" ? "." + fs(s, 0) : r,
            gu(i) ? (n = "",
                e != null && (n = e.replace(vu, "$&/") + "/"),
                zi(i, t, n, "", function (u) {
                    return u
                })) : i != null && (tl(i) && (i = Wh(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(vu, "$&/") + "/") + e)),
                    t.push(i)),
            1;
    if (s = 0,
        r = r === "" ? "." : r + ":",
        gu(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + fs(o, a);
            s += zi(o, t, n, l, i)
        }
    else if (l = Vh(e),
        typeof l == "function")
        for (e = l.call(e),
            a = 0; !(o = e.next()).done;)
            o = o.value,
                l = r + fs(o, a++),
                s += zi(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function _i(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , i = 0;
    return zi(e, r, "", "", function (o) {
        return t.call(n, o, i++)
    }),
        r
}
function Kh(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var pe = {
    current: null
}
    , Fi = {
        transition: null
    }
    , qh = {
        ReactCurrentDispatcher: pe,
        ReactCurrentBatchConfig: Fi,
        ReactCurrentOwner: el
    };
M.Children = {
    map: _i,
    forEach: function (e, t, n) {
        _i(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return _i(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return _i(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!tl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
M.Component = tr;
M.Fragment = Mh;
M.Profiler = bh;
M.PureComponent = Xa;
M.StrictMode = Dh;
M.Suspense = Fh;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qh;
M.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = fd({}, e.props)
        , i = e.key
        , o = e.ref
        , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
            s = el.current),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            md.call(t, l) && !gd.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: oi,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
    ;
M.createContext = function (e) {
    return e = {
        $$typeof: Uh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: jh,
            _context: e
        },
        e.Consumer = e
}
    ;
M.createElement = vd;
M.createFactory = function (e) {
    var t = vd.bind(null, e);
    return t.type = e,
        t
}
    ;
M.createRef = function () {
    return {
        current: null
    }
}
    ;
M.forwardRef = function (e) {
    return {
        $$typeof: zh,
        render: e
    }
}
    ;
M.isValidElement = tl;
M.lazy = function (e) {
    return {
        $$typeof: $h,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Kh
    }
}
    ;
M.memo = function (e, t) {
    return {
        $$typeof: Bh,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
M.startTransition = function (e) {
    var t = Fi.transition;
    Fi.transition = {};
    try {
        e()
    } finally {
        Fi.transition = t
    }
}
    ;
M.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
}
    ;
M.useCallback = function (e, t) {
    return pe.current.useCallback(e, t)
}
    ;
M.useContext = function (e) {
    return pe.current.useContext(e)
}
    ;
M.useDebugValue = function () { }
    ;
M.useDeferredValue = function (e) {
    return pe.current.useDeferredValue(e)
}
    ;
M.useEffect = function (e, t) {
    return pe.current.useEffect(e, t)
}
    ;
M.useId = function () {
    return pe.current.useId()
}
    ;
M.useImperativeHandle = function (e, t, n) {
    return pe.current.useImperativeHandle(e, t, n)
}
    ;
M.useInsertionEffect = function (e, t) {
    return pe.current.useInsertionEffect(e, t)
}
    ;
M.useLayoutEffect = function (e, t) {
    return pe.current.useLayoutEffect(e, t)
}
    ;
M.useMemo = function (e, t) {
    return pe.current.useMemo(e, t)
}
    ;
M.useReducer = function (e, t, n) {
    return pe.current.useReducer(e, t, n)
}
    ;
M.useRef = function (e) {
    return pe.current.useRef(e)
}
    ;
M.useState = function (e) {
    return pe.current.useState(e)
}
    ;
M.useSyncExternalStore = function (e, t, n) {
    return pe.current.useSyncExternalStore(e, t, n)
}
    ;
M.useTransition = function () {
    return pe.current.useTransition()
}
    ;
M.version = "18.2.0";
cd.exports = M;
var y = cd.exports;
const nl = Lh(y)
    , Gh = Oh({
        __proto__: null,
        default: nl
    }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qh = y
    , Yh = Symbol.for("react.element")
    , Jh = Symbol.for("react.fragment")
    , Xh = Object.prototype.hasOwnProperty
    , Zh = Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , em = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function yd(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Xh.call(t, r) && !em.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Yh,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Zh.current
    }
}
Fo.Fragment = Jh;
Fo.jsx = yd;
Fo.jsxs = yd;
ud.exports = Fo;
var g = ud.exports
    , yu = {};
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wd = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r);
        i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192,
            t[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023),
                t[n++] = i >> 18 | 240,
                t[n++] = i >> 12 & 63 | 128,
                t[n++] = i >> 6 & 63 | 128,
                t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224,
                    t[n++] = i >> 6 & 63 | 128,
                    t[n++] = i & 63 | 128)
    }
    return t
}
    , tm = function (e) {
        const t = [];
        let n = 0
            , r = 0;
        for (; n < e.length;) {
            const i = e[n++];
            if (i < 128)
                t[r++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
                const o = e[n++];
                t[r++] = String.fromCharCode((i & 31) << 6 | o & 63)
            } else if (i > 239 && i < 365) {
                const o = e[n++]
                    , s = e[n++]
                    , a = e[n++]
                    , l = ((i & 7) << 18 | (o & 63) << 12 | (s & 63) << 6 | a & 63) - 65536;
                t[r++] = String.fromCharCode(55296 + (l >> 10)),
                    t[r++] = String.fromCharCode(56320 + (l & 1023))
            } else {
                const o = e[n++]
                    , s = e[n++];
                t[r++] = String.fromCharCode((i & 15) << 12 | (o & 63) << 6 | s & 63)
            }
        }
        return t.join("")
    }
    , _d = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(e, t) {
            if (!Array.isArray(e))
                throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
                , r = [];
            for (let i = 0; i < e.length; i += 3) {
                const o = e[i]
                    , s = i + 1 < e.length
                    , a = s ? e[i + 1] : 0
                    , l = i + 2 < e.length
                    , u = l ? e[i + 2] : 0
                    , c = o >> 2
                    , d = (o & 3) << 4 | a >> 4;
                let h = (a & 15) << 2 | u >> 6
                    , v = u & 63;
                l || (v = 64,
                    s || (h = 64)),
                    r.push(n[c], n[d], n[h], n[v])
            }
            return r.join("")
        },
        encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(wd(e), t)
        },
        decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : tm(this.decodeStringToByteArray(e, t))
        },
        decodeStringToByteArray(e, t) {
            this.init_();
            const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_
                , r = [];
            for (let i = 0; i < e.length;) {
                const o = n[e.charAt(i++)]
                    , a = i < e.length ? n[e.charAt(i)] : 0;
                ++i;
                const u = i < e.length ? n[e.charAt(i)] : 64;
                ++i;
                const d = i < e.length ? n[e.charAt(i)] : 64;
                if (++i,
                    o == null || a == null || u == null || d == null)
                    throw new nm;
                const h = o << 2 | a >> 4;
                if (r.push(h),
                    u !== 64) {
                    const v = a << 4 & 240 | u >> 2;
                    if (r.push(v),
                        d !== 64) {
                        const _ = u << 6 & 192 | d;
                        r.push(_)
                    }
                }
            }
            return r
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {},
                    this.charToByteMap_ = {},
                    this.byteToCharMapWebSafe_ = {},
                    this.charToByteMapWebSafe_ = {};
                for (let e = 0; e < this.ENCODED_VALS.length; e++)
                    this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                        this.charToByteMap_[this.byteToCharMap_[e]] = e,
                        this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                        e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
            }
        }
    };
class nm extends Error {
    constructor() {
        super(...arguments),
            this.name = "DecodeBase64StringError"
    }
}
const rm = function (e) {
    const t = wd(e);
    return _d.encodeByteArray(t, !0)
}
    , Sd = function (e) {
        return rm(e).replace(/\./g, "")
    }
    , Ed = function (e) {
        try {
            return _d.decodeString(e, !0)
        } catch (t) {
            console.error("base64Decode failed: ", t)
        }
        return null
    };
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function im() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const om = () => im().__FIREBASE_DEFAULTS__
    , sm = () => {
        if (typeof process > "u" || typeof yu > "u")
            return;
        const e = yu.__FIREBASE_DEFAULTS__;
        if (e)
            return JSON.parse(e)
    }
    , am = () => {
        if (typeof document > "u")
            return;
        let e;
        try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        const t = e && Ed(e[1]);
        return t && JSON.parse(t)
    }
    , rl = () => {
        try {
            return om() || sm() || am()
        } catch (e) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return
        }
    }
    , lm = e => {
        var t, n;
        return (n = (t = rl()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || n === void 0 ? void 0 : n[e]
    }
    , Id = () => {
        var e;
        return (e = rl()) === null || e === void 0 ? void 0 : e.config
    }
    , Cd = e => {
        var t;
        return (t = rl()) === null || t === void 0 ? void 0 : t[`_${e}`]
    }
    ;
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class um {
    constructor() {
        this.reject = () => { }
            ,
            this.resolve = () => { }
            ,
            this.promise = new Promise((t, n) => {
                this.resolve = t,
                    this.reject = n
            }
            )
    }
    wrapCallback(t) {
        return (n, r) => {
            n ? this.reject(n) : this.resolve(r),
                typeof t == "function" && (this.promise.catch(() => { }
                ),
                    t.length === 1 ? t(n) : t(n, r))
        }
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}
function cm() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())
}
function dm() {
    const e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof e == "object" && e.id !== void 0
}
function fm() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}
function pm() {
    const e = ue();
    return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
}
function hm() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}
function mm() {
    return new Promise((e, t) => {
        try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module"
                , i = self.indexedDB.open(r);
            i.onsuccess = () => {
                i.result.close(),
                    n || self.indexedDB.deleteDatabase(r),
                    e(!0)
            }
                ,
                i.onupgradeneeded = () => {
                    n = !1
                }
                ,
                i.onerror = () => {
                    var o;
                    t(((o = i.error) === null || o === void 0 ? void 0 : o.message) || "")
                }
        } catch (n) {
            t(n)
        }
    }
    )
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gm = "FirebaseError";
class Wt extends Error {
    constructor(t, n, r) {
        super(n),
            this.code = t,
            this.customData = r,
            this.name = gm,
            Object.setPrototypeOf(this, Wt.prototype),
            Error.captureStackTrace && Error.captureStackTrace(this, si.prototype.create)
    }
}
class si {
    constructor(t, n, r) {
        this.service = t,
            this.serviceName = n,
            this.errors = r
    }
    create(t, ...n) {
        const r = n[0] || {}
            , i = `${this.service}/${t}`
            , o = this.errors[t]
            , s = o ? vm(o, r) : "Error"
            , a = `${this.serviceName}: ${s} (${i}).`;
        return new Wt(i, a, r)
    }
}
function vm(e, t) {
    return e.replace(ym, (n, r) => {
        const i = t[r];
        return i != null ? String(i) : `<${r}?>`
    }
    )
}
const ym = /\{\$([^}]+)}/g;
function wm(e) {
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t))
            return !1;
    return !0
}
function io(e, t) {
    if (e === t)
        return !0;
    const n = Object.keys(e)
        , r = Object.keys(t);
    for (const i of n) {
        if (!r.includes(i))
            return !1;
        const o = e[i]
            , s = t[i];
        if (wu(o) && wu(s)) {
            if (!io(o, s))
                return !1
        } else if (o !== s)
            return !1
    }
    for (const i of r)
        if (!n.includes(i))
            return !1;
    return !0
}
function wu(e) {
    return e !== null && typeof e == "object"
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ai(e) {
    const t = [];
    for (const [n, r] of Object.entries(e))
        Array.isArray(r) ? r.forEach(i => {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i))
        }
        ) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    return t.length ? "&" + t.join("&") : ""
}
function wr(e) {
    const t = {};
    return e.replace(/^\?/, "").split("&").forEach(r => {
        if (r) {
            const [i, o] = r.split("=");
            t[decodeURIComponent(i)] = decodeURIComponent(o)
        }
    }
    ),
        t
}
function _r(e) {
    const t = e.indexOf("?");
    if (!t)
        return "";
    const n = e.indexOf("#", t);
    return e.substring(t, n > 0 ? n : void 0)
}
function _m(e, t) {
    const n = new Sm(e, t);
    return n.subscribe.bind(n)
}
class Sm {
    constructor(t, n) {
        this.observers = [],
            this.unsubscribes = [],
            this.observerCount = 0,
            this.task = Promise.resolve(),
            this.finalized = !1,
            this.onNoObservers = n,
            this.task.then(() => {
                t(this)
            }
            ).catch(r => {
                this.error(r)
            }
            )
    }
    next(t) {
        this.forEachObserver(n => {
            n.next(t)
        }
        )
    }
    error(t) {
        this.forEachObserver(n => {
            n.error(t)
        }
        ),
            this.close(t)
    }
    complete() {
        this.forEachObserver(t => {
            t.complete()
        }
        ),
            this.close()
    }
    subscribe(t, n, r) {
        let i;
        if (t === void 0 && n === void 0 && r === void 0)
            throw new Error("Missing Observer.");
        Em(t, ["next", "error", "complete"]) ? i = t : i = {
            next: t,
            error: n,
            complete: r
        },
            i.next === void 0 && (i.next = ps),
            i.error === void 0 && (i.error = ps),
            i.complete === void 0 && (i.complete = ps);
        const o = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(() => {
            try {
                this.finalError ? i.error(this.finalError) : i.complete()
            } catch { }
        }
        ),
            this.observers.push(i),
            o
    }
    unsubscribeOne(t) {
        this.observers === void 0 || this.observers[t] === void 0 || (delete this.observers[t],
            this.observerCount -= 1,
            this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(t) {
        if (!this.finalized)
            for (let n = 0; n < this.observers.length; n++)
                this.sendOne(n, t)
    }
    sendOne(t, n) {
        this.task.then(() => {
            if (this.observers !== void 0 && this.observers[t] !== void 0)
                try {
                    n(this.observers[t])
                } catch (r) {
                    typeof console < "u" && console.error && console.error(r)
                }
        }
        )
    }
    close(t) {
        this.finalized || (this.finalized = !0,
            t !== void 0 && (this.finalError = t),
            this.task.then(() => {
                this.observers = void 0,
                    this.onNoObservers = void 0
            }
            ))
    }
}
function Em(e, t) {
    if (typeof e != "object" || e === null)
        return !1;
    for (const n of t)
        if (n in e && typeof e[n] == "function")
            return !0;
    return !1
}
function ps() { }
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(e) {
    return e && e._delegate ? e._delegate : e
}
class Kn {
    constructor(t, n, r) {
        this.name = t,
            this.instanceFactory = n,
            this.type = r,
            this.multipleInstances = !1,
            this.serviceProps = {},
            this.instantiationMode = "LAZY",
            this.onInstanceCreated = null
    }
    setInstantiationMode(t) {
        return this.instantiationMode = t,
            this
    }
    setMultipleInstances(t) {
        return this.multipleInstances = t,
            this
    }
    setServiceProps(t) {
        return this.serviceProps = t,
            this
    }
    setInstanceCreatedCallback(t) {
        return this.onInstanceCreated = t,
            this
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en = "[DEFAULT]";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class Im {
    constructor(t, n) {
        this.name = t,
            this.container = n,
            this.component = null,
            this.instances = new Map,
            this.instancesDeferred = new Map,
            this.instancesOptions = new Map,
            this.onInitCallbacks = new Map
    }
    get(t) {
        const n = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(n)) {
            const r = new um;
            if (this.instancesDeferred.set(n, r),
                this.isInitialized(n) || this.shouldAutoInitialize())
                try {
                    const i = this.getOrInitializeService({
                        instanceIdentifier: n
                    });
                    i && r.resolve(i)
                } catch { }
        }
        return this.instancesDeferred.get(n).promise
    }
    getImmediate(t) {
        var n;
        const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier)
            , i = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
        if (this.isInitialized(r) || this.shouldAutoInitialize())
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: r
                })
            } catch (o) {
                if (i)
                    return null;
                throw o
            }
        else {
            if (i)
                return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(t) {
        if (t.name !== this.name)
            throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
        if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = t,
            !!this.shouldAutoInitialize()) {
            if (km(t))
                try {
                    this.getOrInitializeService({
                        instanceIdentifier: en
                    })
                } catch { }
            for (const [n, r] of this.instancesDeferred.entries()) {
                const i = this.normalizeInstanceIdentifier(n);
                try {
                    const o = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    r.resolve(o)
                } catch { }
            }
        }
    }
    clearInstance(t = en) {
        this.instancesDeferred.delete(t),
            this.instancesOptions.delete(t),
            this.instances.delete(t)
    }
    async delete() {
        const t = Array.from(this.instances.values());
        await Promise.all([...t.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...t.filter(n => "_delete" in n).map(n => n._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(t = en) {
        return this.instances.has(t)
    }
    getOptions(t = en) {
        return this.instancesOptions.get(t) || {}
    }
    initialize(t = {}) {
        const { options: n = {} } = t
            , r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
        if (this.isInitialized(r))
            throw Error(`${this.name}(${r}) has already been initialized`);
        if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
        const i = this.getOrInitializeService({
            instanceIdentifier: r,
            options: n
        });
        for (const [o, s] of this.instancesDeferred.entries()) {
            const a = this.normalizeInstanceIdentifier(o);
            r === a && s.resolve(i)
        }
        return i
    }
    onInit(t, n) {
        var r;
        const i = this.normalizeInstanceIdentifier(n)
            , o = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set;
        o.add(t),
            this.onInitCallbacks.set(i, o);
        const s = this.instances.get(i);
        return s && t(s, i),
            () => {
                o.delete(t)
            }
    }
    invokeOnInitCallbacks(t, n) {
        const r = this.onInitCallbacks.get(n);
        if (r)
            for (const i of r)
                try {
                    i(t, n)
                } catch { }
    }
    getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
        let r = this.instances.get(t);
        if (!r && this.component && (r = this.component.instanceFactory(this.container, {
            instanceIdentifier: Cm(t),
            options: n
        }),
            this.instances.set(t, r),
            this.instancesOptions.set(t, n),
            this.invokeOnInitCallbacks(r, t),
            this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, t, r)
            } catch { }
        return r || null
    }
    normalizeInstanceIdentifier(t = en) {
        return this.component ? this.component.multipleInstances ? t : en : t
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}
function Cm(e) {
    return e === en ? void 0 : e
}
function km(e) {
    return e.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class xm {
    constructor(t) {
        this.name = t,
            this.providers = new Map
    }
    addComponent(t) {
        const n = this.getProvider(t.name);
        if (n.isComponentSet())
            throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
        n.setComponent(t)
    }
    addOrOverwriteComponent(t) {
        this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
            this.addComponent(t)
    }
    getProvider(t) {
        if (this.providers.has(t))
            return this.providers.get(t);
        const n = new Im(t, this);
        return this.providers.set(t, n),
            n
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var j;
(function (e) {
    e[e.DEBUG = 0] = "DEBUG",
        e[e.VERBOSE = 1] = "VERBOSE",
        e[e.INFO = 2] = "INFO",
        e[e.WARN = 3] = "WARN",
        e[e.ERROR = 4] = "ERROR",
        e[e.SILENT = 5] = "SILENT"
}
)(j || (j = {}));
const Pm = {
    debug: j.DEBUG,
    verbose: j.VERBOSE,
    info: j.INFO,
    warn: j.WARN,
    error: j.ERROR,
    silent: j.SILENT
}
    , Tm = j.INFO
    , Nm = {
        [j.DEBUG]: "log",
        [j.VERBOSE]: "log",
        [j.INFO]: "info",
        [j.WARN]: "warn",
        [j.ERROR]: "error"
    }
    , Rm = (e, t, ...n) => {
        if (t < e.logLevel)
            return;
        const r = new Date().toISOString()
            , i = Nm[t];
        if (i)
            console[i](`[${r}]  ${e.name}:`, ...n);
        else
            throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
    }
    ;
class kd {
    constructor(t) {
        this.name = t,
            this._logLevel = Tm,
            this._logHandler = Rm,
            this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(t) {
        if (!(t in j))
            throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this._logLevel = t
    }
    setLogLevel(t) {
        this._logLevel = typeof t == "string" ? Pm[t] : t
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(t) {
        if (typeof t != "function")
            throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = t
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(t) {
        this._userLogHandler = t
    }
    debug(...t) {
        this._userLogHandler && this._userLogHandler(this, j.DEBUG, ...t),
            this._logHandler(this, j.DEBUG, ...t)
    }
    log(...t) {
        this._userLogHandler && this._userLogHandler(this, j.VERBOSE, ...t),
            this._logHandler(this, j.VERBOSE, ...t)
    }
    info(...t) {
        this._userLogHandler && this._userLogHandler(this, j.INFO, ...t),
            this._logHandler(this, j.INFO, ...t)
    }
    warn(...t) {
        this._userLogHandler && this._userLogHandler(this, j.WARN, ...t),
            this._logHandler(this, j.WARN, ...t)
    }
    error(...t) {
        this._userLogHandler && this._userLogHandler(this, j.ERROR, ...t),
            this._logHandler(this, j.ERROR, ...t)
    }
}
const Om = (e, t) => t.some(n => e instanceof n);
let _u, Su;
function Lm() {
    return _u || (_u = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}
function Am() {
    return Su || (Su = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const xd = new WeakMap
    , Ks = new WeakMap
    , Pd = new WeakMap
    , hs = new WeakMap
    , il = new WeakMap;
function Mm(e) {
    const t = new Promise((n, r) => {
        const i = () => {
            e.removeEventListener("success", o),
                e.removeEventListener("error", s)
        }
            , o = () => {
                n(Rt(e.result)),
                    i()
            }
            , s = () => {
                r(e.error),
                    i()
            }
            ;
        e.addEventListener("success", o),
            e.addEventListener("error", s)
    }
    );
    return t.then(n => {
        n instanceof IDBCursor && xd.set(n, e)
    }
    ).catch(() => { }
    ),
        il.set(t, e),
        t
}
function Dm(e) {
    if (Ks.has(e))
        return;
    const t = new Promise((n, r) => {
        const i = () => {
            e.removeEventListener("complete", o),
                e.removeEventListener("error", s),
                e.removeEventListener("abort", s)
        }
            , o = () => {
                n(),
                    i()
            }
            , s = () => {
                r(e.error || new DOMException("AbortError", "AbortError")),
                    i()
            }
            ;
        e.addEventListener("complete", o),
            e.addEventListener("error", s),
            e.addEventListener("abort", s)
    }
    );
    Ks.set(e, t)
}
let qs = {
    get(e, t, n) {
        if (e instanceof IDBTransaction) {
            if (t === "done")
                return Ks.get(e);
            if (t === "objectStoreNames")
                return e.objectStoreNames || Pd.get(e);
            if (t === "store")
                return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return Rt(e[t])
    },
    set(e, t, n) {
        return e[t] = n,
            !0
    },
    has(e, t) {
        return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
    }
};
function bm(e) {
    qs = e(qs)
}
function jm(e) {
    return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function (t, ...n) {
        const r = e.call(ms(this), t, ...n);
        return Pd.set(r, t.sort ? t.sort() : [t]),
            Rt(r)
    }
        : Am().includes(e) ? function (...t) {
            return e.apply(ms(this), t),
                Rt(xd.get(this))
        }
            : function (...t) {
                return Rt(e.apply(ms(this), t))
            }
}
function Um(e) {
    return typeof e == "function" ? jm(e) : (e instanceof IDBTransaction && Dm(e),
        Om(e, Lm()) ? new Proxy(e, qs) : e)
}
function Rt(e) {
    if (e instanceof IDBRequest)
        return Mm(e);
    if (hs.has(e))
        return hs.get(e);
    const t = Um(e);
    return t !== e && (hs.set(e, t),
        il.set(t, e)),
        t
}
const ms = e => il.get(e);
function zm(e, t, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
    const s = indexedDB.open(e, t)
        , a = Rt(s);
    return r && s.addEventListener("upgradeneeded", l => {
        r(Rt(s.result), l.oldVersion, l.newVersion, Rt(s.transaction), l)
    }
    ),
        n && s.addEventListener("blocked", l => n(l.oldVersion, l.newVersion, l)),
        a.then(l => {
            o && l.addEventListener("close", () => o()),
                i && l.addEventListener("versionchange", u => i(u.oldVersion, u.newVersion, u))
        }
        ).catch(() => { }
        ),
        a
}
const Fm = ["get", "getKey", "getAll", "getAllKeys", "count"]
    , Bm = ["put", "add", "delete", "clear"]
    , gs = new Map;
function Eu(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
        return;
    if (gs.get(t))
        return gs.get(t);
    const n = t.replace(/FromIndex$/, "")
        , r = t !== n
        , i = Bm.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Fm.includes(n)))
        return;
    const o = async function (s, ...a) {
        const l = this.transaction(s, i ? "readwrite" : "readonly");
        let u = l.store;
        return r && (u = u.index(a.shift())),
            (await Promise.all([u[n](...a), i && l.done]))[0]
    };
    return gs.set(t, o),
        o
}
bm(e => ({
    ...e,
    get: (t, n, r) => Eu(t, n) || e.get(t, n, r),
    has: (t, n) => !!Eu(t, n) || e.has(t, n)
}));
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $m {
    constructor(t) {
        this.container = t
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(n => {
            if (Vm(n)) {
                const r = n.getImmediate();
                return `${r.library}/${r.version}`
            } else
                return null
        }
        ).filter(n => n).join(" ")
    }
}
function Vm(e) {
    const t = e.getComponent();
    return (t == null ? void 0 : t.type) === "VERSION"
}
const Gs = "@firebase/app"
    , Iu = "0.9.27";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fn = new kd("@firebase/app")
    , Wm = "@firebase/app-compat"
    , Hm = "@firebase/analytics-compat"
    , Km = "@firebase/analytics"
    , qm = "@firebase/app-check-compat"
    , Gm = "@firebase/app-check"
    , Qm = "@firebase/auth"
    , Ym = "@firebase/auth-compat"
    , Jm = "@firebase/database"
    , Xm = "@firebase/database-compat"
    , Zm = "@firebase/functions"
    , eg = "@firebase/functions-compat"
    , tg = "@firebase/installations"
    , ng = "@firebase/installations-compat"
    , rg = "@firebase/messaging"
    , ig = "@firebase/messaging-compat"
    , og = "@firebase/performance"
    , sg = "@firebase/performance-compat"
    , ag = "@firebase/remote-config"
    , lg = "@firebase/remote-config-compat"
    , ug = "@firebase/storage"
    , cg = "@firebase/storage-compat"
    , dg = "@firebase/firestore"
    , fg = "@firebase/firestore-compat"
    , pg = "firebase"
    , hg = "10.8.0";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qs = "[DEFAULT]"
    , mg = {
        [Gs]: "fire-core",
        [Wm]: "fire-core-compat",
        [Km]: "fire-analytics",
        [Hm]: "fire-analytics-compat",
        [Gm]: "fire-app-check",
        [qm]: "fire-app-check-compat",
        [Qm]: "fire-auth",
        [Ym]: "fire-auth-compat",
        [Jm]: "fire-rtdb",
        [Xm]: "fire-rtdb-compat",
        [Zm]: "fire-fn",
        [eg]: "fire-fn-compat",
        [tg]: "fire-iid",
        [ng]: "fire-iid-compat",
        [rg]: "fire-fcm",
        [ig]: "fire-fcm-compat",
        [og]: "fire-perf",
        [sg]: "fire-perf-compat",
        [ag]: "fire-rc",
        [lg]: "fire-rc-compat",
        [ug]: "fire-gcs",
        [cg]: "fire-gcs-compat",
        [dg]: "fire-fst",
        [fg]: "fire-fst-compat",
        "fire-js": "fire-js",
        [pg]: "fire-js-all"
    };
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oo = new Map
    , Ys = new Map;
function gg(e, t) {
    try {
        e.container.addComponent(t)
    } catch (n) {
        fn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
    }
}
function Dr(e) {
    const t = e.name;
    if (Ys.has(t))
        return fn.debug(`There were multiple attempts to register component ${t}.`),
            !1;
    Ys.set(t, e);
    for (const n of oo.values())
        gg(n, e);
    return !0
}
function Td(e, t) {
    const n = e.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return n && n.triggerHeartbeat(),
        e.container.getProvider(t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vg = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}
    , Ot = new si("app", "Firebase", vg);
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yg {
    constructor(t, n, r) {
        this._isDeleted = !1,
            this._options = Object.assign({}, t),
            this._config = Object.assign({}, n),
            this._name = n.name,
            this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled,
            this._container = r,
            this.container.addComponent(new Kn("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
            this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(t) {
        this.checkDestroyed(),
            this._automaticDataCollectionEnabled = t
    }
    get name() {
        return this.checkDestroyed(),
            this._name
    }
    get options() {
        return this.checkDestroyed(),
            this._options
    }
    get config() {
        return this.checkDestroyed(),
            this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(t) {
        this._isDeleted = t
    }
    checkDestroyed() {
        if (this.isDeleted)
            throw Ot.create("app-deleted", {
                appName: this._name
            })
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const li = hg;
function Nd(e, t = {}) {
    let n = e;
    typeof t != "object" && (t = {
        name: t
    });
    const r = Object.assign({
        name: Qs,
        automaticDataCollectionEnabled: !1
    }, t)
        , i = r.name;
    if (typeof i != "string" || !i)
        throw Ot.create("bad-app-name", {
            appName: String(i)
        });
    if (n || (n = Id()),
        !n)
        throw Ot.create("no-options");
    const o = oo.get(i);
    if (o) {
        if (io(n, o.options) && io(r, o.config))
            return o;
        throw Ot.create("duplicate-app", {
            appName: i
        })
    }
    const s = new xm(i);
    for (const l of Ys.values())
        s.addComponent(l);
    const a = new yg(n, r, s);
    return oo.set(i, a),
        a
}
function wg(e = Qs) {
    const t = oo.get(e);
    if (!t && e === Qs && Id())
        return Nd();
    if (!t)
        throw Ot.create("no-app", {
            appName: e
        });
    return t
}
function jn(e, t, n) {
    var r;
    let i = (r = mg[e]) !== null && r !== void 0 ? r : e;
    n && (i += `-${n}`);
    const o = i.match(/\s|\//)
        , s = t.match(/\s|\//);
    if (o || s) {
        const a = [`Unable to register library "${i}" with version "${t}":`];
        o && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
            o && s && a.push("and"),
            s && a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
            fn.warn(a.join(" "));
        return
    }
    Dr(new Kn(`${i}-version`, () => ({
        library: i,
        version: t
    }), "VERSION"))
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _g = "firebase-heartbeat-database"
    , Sg = 1
    , br = "firebase-heartbeat-store";
let vs = null;
function Rd() {
    return vs || (vs = zm(_g, Sg, {
        upgrade: (e, t) => {
            switch (t) {
                case 0:
                    try {
                        e.createObjectStore(br)
                    } catch (n) {
                        console.warn(n)
                    }
            }
        }
    }).catch(e => {
        throw Ot.create("idb-open", {
            originalErrorMessage: e.message
        })
    }
    )),
        vs
}
async function Eg(e) {
    try {
        const n = (await Rd()).transaction(br)
            , r = await n.objectStore(br).get(Od(e));
        return await n.done,
            r
    } catch (t) {
        if (t instanceof Wt)
            fn.warn(t.message);
        else {
            const n = Ot.create("idb-get", {
                originalErrorMessage: t == null ? void 0 : t.message
            });
            fn.warn(n.message)
        }
    }
}
async function Cu(e, t) {
    try {
        const r = (await Rd()).transaction(br, "readwrite");
        await r.objectStore(br).put(t, Od(e)),
            await r.done
    } catch (n) {
        if (n instanceof Wt)
            fn.warn(n.message);
        else {
            const r = Ot.create("idb-set", {
                originalErrorMessage: n == null ? void 0 : n.message
            });
            fn.warn(r.message)
        }
    }
}
function Od(e) {
    return `${e.name}!${e.options.appId}`
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ig = 1024
    , Cg = 30 * 24 * 60 * 60 * 1e3;
class kg {
    constructor(t) {
        this.container = t,
            this._heartbeatsCache = null;
        const n = this.container.getProvider("app").getImmediate();
        this._storage = new Pg(n),
            this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r,
                r))
    }
    async triggerHeartbeat() {
        var t, n;
        const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString()
            , o = ku();
        if (!(((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise,
            ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null)) && !(this._heartbeatsCache.lastSentHeartbeatDate === o || this._heartbeatsCache.heartbeats.some(s => s.date === o)))
            return this._heartbeatsCache.heartbeats.push({
                date: o,
                agent: i
            }),
                this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(s => {
                    const a = new Date(s.date).valueOf();
                    return Date.now() - a <= Cg
                }
                ),
                this._storage.overwrite(this._heartbeatsCache)
    }
    async getHeartbeatsHeader() {
        var t;
        if (this._heartbeatsCache === null && await this._heartbeatsCachePromise,
            ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
            return "";
        const n = ku()
            , { heartbeatsToSend: r, unsentEntries: i } = xg(this._heartbeatsCache.heartbeats)
            , o = Sd(JSON.stringify({
                version: 2,
                heartbeats: r
            }));
        return this._heartbeatsCache.lastSentHeartbeatDate = n,
            i.length > 0 ? (this._heartbeatsCache.heartbeats = i,
                await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
                    this._storage.overwrite(this._heartbeatsCache)),
            o
    }
}
function ku() {
    return new Date().toISOString().substring(0, 10)
}
function xg(e, t = Ig) {
    const n = [];
    let r = e.slice();
    for (const i of e) {
        const o = n.find(s => s.agent === i.agent);
        if (o) {
            if (o.dates.push(i.date),
                xu(n) > t) {
                o.dates.pop();
                break
            }
        } else if (n.push({
            agent: i.agent,
            dates: [i.date]
        }),
            xu(n) > t) {
            n.pop();
            break
        }
        r = r.slice(1)
    }
    return {
        heartbeatsToSend: n,
        unsentEntries: r
    }
}
class Pg {
    constructor(t) {
        this.app = t,
            this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return hm() ? mm().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const n = await Eg(this.app);
            return n != null && n.heartbeats ? n : {
                heartbeats: []
            }
        } else
            return {
                heartbeats: []
            }
    }
    async overwrite(t) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return Cu(this.app, {
                lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
                heartbeats: t.heartbeats
            })
        } else
            return
    }
    async add(t) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return Cu(this.app, {
                lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
                heartbeats: [...i.heartbeats, ...t.heartbeats]
            })
        } else
            return
    }
}
function xu(e) {
    return Sd(JSON.stringify({
        version: 2,
        heartbeats: e
    })).length
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function Tg(e) {
    Dr(new Kn("platform-logger", t => new $m(t), "PRIVATE")),
        Dr(new Kn("heartbeat", t => new kg(t), "PRIVATE")),
        jn(Gs, Iu, e),
        jn(Gs, Iu, "esm2017"),
        jn("fire-js", "")
}
Tg("");
function ol(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
function Ld() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const Ng = Ld
    , Ad = new si("auth", "Firebase", Ld());
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const so = new kd("@firebase/auth");
function Rg(e, ...t) {
    so.logLevel <= j.WARN && so.warn(`Auth (${li}): ${e}`, ...t)
}
function Bi(e, ...t) {
    so.logLevel <= j.ERROR && so.error(`Auth (${li}): ${e}`, ...t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e, ...t) {
    throw sl(e, ...t)
}
function qe(e, ...t) {
    return sl(e, ...t)
}
function Md(e, t, n) {
    const r = Object.assign(Object.assign({}, Ng()), {
        [t]: n
    });
    return new si("auth", "Firebase", r).create(t, {
        appName: e.name
    })
}
function Og(e, t, n) {
    const r = n;
    if (!(t instanceof r))
        throw r.name !== t.constructor.name && Le(e, "argument-error"),
        Md(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
}
function sl(e, ...t) {
    if (typeof e != "string") {
        const n = t[0]
            , r = [...t.slice(1)];
        return r[0] && (r[0].appName = e.name),
            e._errorFactory.create(n, ...r)
    }
    return Ad.create(e, ...t)
}
function R(e, t, ...n) {
    if (!e)
        throw sl(t, ...n)
}
function rt(e) {
    const t = "INTERNAL ASSERTION FAILED: " + e;
    throw Bi(t),
    new Error(t)
}
function lt(e, t) {
    e || rt(t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Js() {
    var e;
    return typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.href) || ""
}
function Lg() {
    return Pu() === "http:" || Pu() === "https:"
}
function Pu() {
    var e;
    return typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.protocol) || null
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ag() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (Lg() || dm() || "connection" in navigator) ? navigator.onLine : !0
}
function Mg() {
    if (typeof navigator > "u")
        return null;
    const e = navigator;
    return e.languages && e.languages[0] || e.language || null
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui {
    constructor(t, n) {
        this.shortDelay = t,
            this.longDelay = n,
            lt(n > t, "Short delay should be less than long delay!"),
            this.isMobile = cm() || fm()
    }
    get() {
        return Ag() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function al(e, t) {
    lt(e.emulator, "Emulator should always be set here");
    const { url: n } = e.emulator;
    return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dd {
    static initialize(t, n, r) {
        this.fetchImpl = t,
            n && (this.headersImpl = n),
            r && (this.responseImpl = r)
    }
    static fetch() {
        if (this.fetchImpl)
            return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self)
            return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch)
            return globalThis.fetch;
        if (typeof fetch < "u")
            return fetch;
        rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl)
            return this.headersImpl;
        if (typeof self < "u" && "Headers" in self)
            return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers)
            return globalThis.Headers;
        if (typeof Headers < "u")
            return Headers;
        rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl)
            return this.responseImpl;
        if (typeof self < "u" && "Response" in self)
            return self.Response;
        if (typeof globalThis < "u" && globalThis.Response)
            return globalThis.Response;
        if (typeof Response < "u")
            return Response;
        rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dg = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bg = new ui(3e4, 6e4);
function Je(e, t) {
    return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
        tenantId: e.tenantId
    }) : t
}
async function Xe(e, t, n, r, i = {}) {
    return bd(e, i, async () => {
        let o = {}
            , s = {};
        r && (t === "GET" ? s = r : o = {
            body: JSON.stringify(r)
        });
        const a = ai(Object.assign({
            key: e.config.apiKey
        }, s)).slice(1)
            , l = await e._getAdditionalHeaders();
        return l["Content-Type"] = "application/json",
            e.languageCode && (l["X-Firebase-Locale"] = e.languageCode),
            Dd.fetch()(jd(e, e.config.apiHost, n, a), Object.assign({
                method: t,
                headers: l,
                referrerPolicy: "no-referrer"
            }, o))
    }
    )
}
async function bd(e, t, n) {
    e._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, Dg), t);
    try {
        const i = new Ug(e)
            , o = await Promise.race([n(), i.promise]);
        i.clearNetworkTimeout();
        const s = await o.json();
        if ("needConfirmation" in s)
            throw Si(e, "account-exists-with-different-credential", s);
        if (o.ok && !("errorMessage" in s))
            return s;
        {
            const a = o.ok ? s.errorMessage : s.error.message
                , [l, u] = a.split(" : ");
            if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
                throw Si(e, "credential-already-in-use", s);
            if (l === "EMAIL_EXISTS")
                throw Si(e, "email-already-in-use", s);
            if (l === "USER_DISABLED")
                throw Si(e, "user-disabled", s);
            const c = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
            if (u)
                throw Md(e, c, u);
            Le(e, c)
        }
    } catch (i) {
        if (i instanceof Wt)
            throw i;
        Le(e, "network-request-failed", {
            message: String(i)
        })
    }
}
async function ci(e, t, n, r, i = {}) {
    const o = await Xe(e, t, n, r, i);
    return "mfaPendingCredential" in o && Le(e, "multi-factor-auth-required", {
        _serverResponse: o
    }),
        o
}
function jd(e, t, n, r) {
    const i = `${t}${n}?${r}`;
    return e.config.emulator ? al(e.config, i) : `${e.config.apiScheme}://${i}`
}
function jg(e) {
    switch (e) {
        case "ENFORCE":
            return "ENFORCE";
        case "AUDIT":
            return "AUDIT";
        case "OFF":
            return "OFF";
        default:
            return "ENFORCEMENT_STATE_UNSPECIFIED"
    }
}
class Ug {
    constructor(t) {
        this.auth = t,
            this.timer = null,
            this.promise = new Promise((n, r) => {
                this.timer = setTimeout(() => r(qe(this.auth, "network-request-failed")), bg.get())
            }
            )
    }
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
}
function Si(e, t, n) {
    const r = {
        appName: e.name
    };
    n.email && (r.email = n.email),
        n.phoneNumber && (r.phoneNumber = n.phoneNumber);
    const i = qe(e, t, r);
    return i.customData._tokenResponse = n,
        i
}
function Tu(e) {
    return e !== void 0 && e.enterprise !== void 0
}
class zg {
    constructor(t) {
        if (this.siteKey = "",
            this.recaptchaEnforcementState = [],
            t.recaptchaKey === void 0)
            throw new Error("recaptchaKey undefined");
        this.siteKey = t.recaptchaKey.split("/")[3],
            this.recaptchaEnforcementState = t.recaptchaEnforcementState
    }
    getProviderEnforcementState(t) {
        if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
            return null;
        for (const n of this.recaptchaEnforcementState)
            if (n.provider && n.provider === t)
                return jg(n.enforcementState);
        return null
    }
    isProviderEnabled(t) {
        return this.getProviderEnforcementState(t) === "ENFORCE" || this.getProviderEnforcementState(t) === "AUDIT"
    }
}
async function Fg(e, t) {
    return Xe(e, "GET", "/v2/recaptchaConfig", Je(e, t))
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bg(e, t) {
    return Xe(e, "POST", "/v1/accounts:delete", t)
}
async function $g(e, t) {
    return Xe(e, "POST", "/v1/accounts:lookup", t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kr(e) {
    if (e)
        try {
            const t = new Date(Number(e));
            if (!isNaN(t.getTime()))
                return t.toUTCString()
        } catch { }
}
async function Vg(e, t = !1) {
    const n = Ve(e)
        , r = await n.getIdToken(t)
        , i = ll(r);
    R(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
    const o = typeof i.firebase == "object" ? i.firebase : void 0
        , s = o == null ? void 0 : o.sign_in_provider;
    return {
        claims: i,
        token: r,
        authTime: kr(ys(i.auth_time)),
        issuedAtTime: kr(ys(i.iat)),
        expirationTime: kr(ys(i.exp)),
        signInProvider: s || null,
        signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null
    }
}
function ys(e) {
    return Number(e) * 1e3
}
function ll(e) {
    const [t, n, r] = e.split(".");
    if (t === void 0 || n === void 0 || r === void 0)
        return Bi("JWT malformed, contained fewer than 3 sections"),
            null;
    try {
        const i = Ed(n);
        return i ? JSON.parse(i) : (Bi("Failed to decode base64 JWT payload"),
            null)
    } catch (i) {
        return Bi("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()),
            null
    }
}
function Wg(e) {
    const t = ll(e);
    return R(t, "internal-error"),
        R(typeof t.exp < "u", "internal-error"),
        R(typeof t.iat < "u", "internal-error"),
        Number(t.exp) - Number(t.iat)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jr(e, t, n = !1) {
    if (n)
        return t;
    try {
        return await t
    } catch (r) {
        throw r instanceof Wt && Hg(r) && e.auth.currentUser === e && await e.auth.signOut(),
        r
    }
}
function Hg({ code: e }) {
    return e === "auth/user-disabled" || e === "auth/user-token-expired"
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kg {
    constructor(t) {
        this.user = t,
            this.isRunning = !1,
            this.timerId = null,
            this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0,
            this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1,
            this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(t) {
        var n;
        if (t) {
            const r = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4),
                r
        } else {
            this.errorBackoff = 3e4;
            const i = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
            return Math.max(0, i)
        }
    }
    schedule(t = !1) {
        if (!this.isRunning)
            return;
        const n = this.getInterval(t);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }
            , n)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (t) {
            (t == null ? void 0 : t.code) === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud {
    constructor(t, n) {
        this.createdAt = t,
            this.lastLoginAt = n,
            this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = kr(this.lastLoginAt),
            this.creationTime = kr(this.createdAt)
    }
    _copy(t) {
        this.createdAt = t.createdAt,
            this.lastLoginAt = t.lastLoginAt,
            this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ao(e) {
    var t;
    const n = e.auth
        , r = await e.getIdToken()
        , i = await jr(e, $g(n, {
            idToken: r
        }));
    R(i == null ? void 0 : i.users.length, n, "internal-error");
    const o = i.users[0];
    e._notifyReloadListener(o);
    const s = !((t = o.providerUserInfo) === null || t === void 0) && t.length ? Qg(o.providerUserInfo) : []
        , a = Gg(e.providerData, s)
        , l = e.isAnonymous
        , u = !(e.email && o.passwordHash) && !(a != null && a.length)
        , c = l ? u : !1
        , d = {
            uid: o.localId,
            displayName: o.displayName || null,
            photoURL: o.photoUrl || null,
            email: o.email || null,
            emailVerified: o.emailVerified || !1,
            phoneNumber: o.phoneNumber || null,
            tenantId: o.tenantId || null,
            providerData: a,
            metadata: new Ud(o.createdAt, o.lastLoginAt),
            isAnonymous: c
        };
    Object.assign(e, d)
}
async function qg(e) {
    const t = Ve(e);
    await ao(t),
        await t.auth._persistUserIfCurrent(t),
        t.auth._notifyListenersIfCurrent(t)
}
function Gg(e, t) {
    return [...e.filter(r => !t.some(i => i.providerId === r.providerId)), ...t]
}
function Qg(e) {
    return e.map(t => {
        var { providerId: n } = t
            , r = ol(t, ["providerId"]);
        return {
            providerId: n,
            uid: r.rawId || "",
            displayName: r.displayName || null,
            email: r.email || null,
            phoneNumber: r.phoneNumber || null,
            photoURL: r.photoUrl || null
        }
    }
    )
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yg(e, t) {
    const n = await bd(e, {}, async () => {
        const r = ai({
            grant_type: "refresh_token",
            refresh_token: t
        }).slice(1)
            , { tokenApiHost: i, apiKey: o } = e.config
            , s = jd(e, i, "/v1/token", `key=${o}`)
            , a = await e._getAdditionalHeaders();
        return a["Content-Type"] = "application/x-www-form-urlencoded",
            Dd.fetch()(s, {
                method: "POST",
                headers: a,
                body: r
            })
    }
    );
    return {
        accessToken: n.access_token,
        expiresIn: n.expires_in,
        refreshToken: n.refresh_token
    }
}
async function Jg(e, t) {
    return Xe(e, "POST", "/v2/accounts:revokeToken", Je(e, t))
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur {
    constructor() {
        this.refreshToken = null,
            this.accessToken = null,
            this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(t) {
        R(t.idToken, "internal-error"),
            R(typeof t.idToken < "u", "internal-error"),
            R(typeof t.refreshToken < "u", "internal-error");
        const n = "expiresIn" in t && typeof t.expiresIn < "u" ? Number(t.expiresIn) : Wg(t.idToken);
        this.updateTokensAndExpiration(t.idToken, t.refreshToken, n)
    }
    async getToken(t, n = !1) {
        return R(!this.accessToken || this.refreshToken, t, "user-token-expired"),
            !n && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(t, this.refreshToken),
                this.accessToken) : null
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(t, n) {
        const { accessToken: r, refreshToken: i, expiresIn: o } = await Yg(t, n);
        this.updateTokensAndExpiration(r, i, Number(o))
    }
    updateTokensAndExpiration(t, n, r) {
        this.refreshToken = n || null,
            this.accessToken = t || null,
            this.expirationTime = Date.now() + r * 1e3
    }
    static fromJSON(t, n) {
        const { refreshToken: r, accessToken: i, expirationTime: o } = n
            , s = new Ur;
        return r && (R(typeof r == "string", "internal-error", {
            appName: t
        }),
            s.refreshToken = r),
            i && (R(typeof i == "string", "internal-error", {
                appName: t
            }),
                s.accessToken = i),
            o && (R(typeof o == "number", "internal-error", {
                appName: t
            }),
                s.expirationTime = o),
            s
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(t) {
        this.accessToken = t.accessToken,
            this.refreshToken = t.refreshToken,
            this.expirationTime = t.expirationTime
    }
    _clone() {
        return Object.assign(new Ur, this.toJSON())
    }
    _performRefresh() {
        return rt("not implemented")
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(e, t) {
    R(typeof e == "string" || typeof e > "u", "internal-error", {
        appName: t
    })
}
class un {
    constructor(t) {
        var { uid: n, auth: r, stsTokenManager: i } = t
            , o = ol(t, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase",
            this.proactiveRefresh = new Kg(this),
            this.reloadUserInfo = null,
            this.reloadListener = null,
            this.uid = n,
            this.auth = r,
            this.stsTokenManager = i,
            this.accessToken = i.accessToken,
            this.displayName = o.displayName || null,
            this.email = o.email || null,
            this.emailVerified = o.emailVerified || !1,
            this.phoneNumber = o.phoneNumber || null,
            this.photoURL = o.photoURL || null,
            this.isAnonymous = o.isAnonymous || !1,
            this.tenantId = o.tenantId || null,
            this.providerData = o.providerData ? [...o.providerData] : [],
            this.metadata = new Ud(o.createdAt || void 0, o.lastLoginAt || void 0)
    }
    async getIdToken(t) {
        const n = await jr(this, this.stsTokenManager.getToken(this.auth, t));
        return R(n, this.auth, "internal-error"),
            this.accessToken !== n && (this.accessToken = n,
                await this.auth._persistUserIfCurrent(this),
                this.auth._notifyListenersIfCurrent(this)),
            n
    }
    getIdTokenResult(t) {
        return Vg(this, t)
    }
    reload() {
        return qg(this)
    }
    _assign(t) {
        this !== t && (R(this.uid === t.uid, this.auth, "internal-error"),
            this.displayName = t.displayName,
            this.photoURL = t.photoURL,
            this.email = t.email,
            this.emailVerified = t.emailVerified,
            this.phoneNumber = t.phoneNumber,
            this.isAnonymous = t.isAnonymous,
            this.tenantId = t.tenantId,
            this.providerData = t.providerData.map(n => Object.assign({}, n)),
            this.metadata._copy(t.metadata),
            this.stsTokenManager._assign(t.stsTokenManager))
    }
    _clone(t) {
        const n = new un(Object.assign(Object.assign({}, this), {
            auth: t,
            stsTokenManager: this.stsTokenManager._clone()
        }));
        return n.metadata._copy(this.metadata),
            n
    }
    _onReload(t) {
        R(!this.reloadListener, this.auth, "internal-error"),
            this.reloadListener = t,
            this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
                this.reloadUserInfo = null)
    }
    _notifyReloadListener(t) {
        this.reloadListener ? this.reloadListener(t) : this.reloadUserInfo = t
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(t, n = !1) {
        let r = !1;
        t.idToken && t.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(t),
            r = !0),
            n && await ao(this),
            await this.auth._persistUserIfCurrent(this),
            r && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        const t = await this.getIdToken();
        return await jr(this, Bg(this.auth, {
            idToken: t
        })),
            this.stsTokenManager.clearRefreshToken(),
            this.auth.signOut()
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(t => Object.assign({}, t)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        })
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(t, n) {
        var r, i, o, s, a, l, u, c;
        const d = (r = n.displayName) !== null && r !== void 0 ? r : void 0
            , h = (i = n.email) !== null && i !== void 0 ? i : void 0
            , v = (o = n.phoneNumber) !== null && o !== void 0 ? o : void 0
            , _ = (s = n.photoURL) !== null && s !== void 0 ? s : void 0
            , S = (a = n.tenantId) !== null && a !== void 0 ? a : void 0
            , C = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0
            , p = (u = n.createdAt) !== null && u !== void 0 ? u : void 0
            , f = (c = n.lastLoginAt) !== null && c !== void 0 ? c : void 0
            , { uid: m, emailVerified: w, isAnonymous: I, providerData: P, stsTokenManager: T } = n;
        R(m && T, t, "internal-error");
        const N = Ur.fromJSON(this.name, T);
        R(typeof m == "string", t, "internal-error"),
            vt(d, t.name),
            vt(h, t.name),
            R(typeof w == "boolean", t, "internal-error"),
            R(typeof I == "boolean", t, "internal-error"),
            vt(v, t.name),
            vt(_, t.name),
            vt(S, t.name),
            vt(C, t.name),
            vt(p, t.name),
            vt(f, t.name);
        const z = new un({
            uid: m,
            auth: t,
            email: h,
            emailVerified: w,
            displayName: d,
            isAnonymous: I,
            photoURL: _,
            phoneNumber: v,
            tenantId: S,
            stsTokenManager: N,
            createdAt: p,
            lastLoginAt: f
        });
        return P && Array.isArray(P) && (z.providerData = P.map(A => Object.assign({}, A))),
            C && (z._redirectEventId = C),
            z
    }
    static async _fromIdTokenResponse(t, n, r = !1) {
        const i = new Ur;
        i.updateFromServerResponse(n);
        const o = new un({
            uid: n.localId,
            auth: t,
            stsTokenManager: i,
            isAnonymous: r
        });
        return await ao(o),
            o
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nu = new Map;
function it(e) {
    lt(e instanceof Function, "Expected a class definition");
    let t = Nu.get(e);
    return t ? (lt(t instanceof e, "Instance stored in cache mismatched with class"),
        t) : (t = new e,
            Nu.set(e, t),
            t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
class zd {
    constructor() {
        this.type = "NONE",
            this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(t, n) {
        this.storage[t] = n
    }
    async _get(t) {
        const n = this.storage[t];
        return n === void 0 ? null : n
    }
    async _remove(t) {
        delete this.storage[t]
    }
    _addListener(t, n) { }
    _removeListener(t, n) { }
}
zd.type = "NONE";
const Ru = zd;
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function $i(e, t, n) {
    return `firebase:${e}:${t}:${n}`
}
class Un {
    constructor(t, n, r) {
        this.persistence = t,
            this.auth = n,
            this.userKey = r;
        const { config: i, name: o } = this.auth;
        this.fullUserKey = $i(this.userKey, i.apiKey, o),
            this.fullPersistenceKey = $i("persistence", i.apiKey, o),
            this.boundEventHandler = n._onStorageEvent.bind(n),
            this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(t) {
        return this.persistence._set(this.fullUserKey, t.toJSON())
    }
    async getCurrentUser() {
        const t = await this.persistence._get(this.fullUserKey);
        return t ? un._fromJSON(this.auth, t) : null
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(t) {
        if (this.persistence === t)
            return;
        const n = await this.getCurrentUser();
        if (await this.removeCurrentUser(),
            this.persistence = t,
            n)
            return this.setCurrentUser(n)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(t, n, r = "authUser") {
        if (!n.length)
            return new Un(it(Ru), t, r);
        const i = (await Promise.all(n.map(async u => {
            if (await u._isAvailable())
                return u
        }
        ))).filter(u => u);
        let o = i[0] || it(Ru);
        const s = $i(r, t.config.apiKey, t.name);
        let a = null;
        for (const u of n)
            try {
                const c = await u._get(s);
                if (c) {
                    const d = un._fromJSON(t, c);
                    u !== o && (a = d),
                        o = u;
                    break
                }
            } catch { }
        const l = i.filter(u => u._shouldAllowMigration);
        return !o._shouldAllowMigration || !l.length ? new Un(o, t, r) : (o = l[0],
            a && await o._set(s, a.toJSON()),
            await Promise.all(n.map(async u => {
                if (u !== o)
                    try {
                        await u._remove(s)
                    } catch { }
            }
            )),
            new Un(o, t, r))
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ou(e) {
    const t = e.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
        return "Opera";
    if ($d(t))
        return "IEMobile";
    if (t.includes("msie") || t.includes("trident/"))
        return "IE";
    if (t.includes("edge/"))
        return "Edge";
    if (Fd(t))
        return "Firefox";
    if (t.includes("silk/"))
        return "Silk";
    if (Wd(t))
        return "Blackberry";
    if (Hd(t))
        return "Webos";
    if (ul(t))
        return "Safari";
    if ((t.includes("chrome/") || Bd(t)) && !t.includes("edge/"))
        return "Chrome";
    if (Vd(t))
        return "Android";
    {
        const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
            , r = e.match(n);
        if ((r == null ? void 0 : r.length) === 2)
            return r[1]
    }
    return "Other"
}
function Fd(e = ue()) {
    return /firefox\//i.test(e)
}
function ul(e = ue()) {
    const t = e.toLowerCase();
    return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
}
function Bd(e = ue()) {
    return /crios\//i.test(e)
}
function $d(e = ue()) {
    return /iemobile/i.test(e)
}
function Vd(e = ue()) {
    return /android/i.test(e)
}
function Wd(e = ue()) {
    return /blackberry/i.test(e)
}
function Hd(e = ue()) {
    return /webos/i.test(e)
}
function Bo(e = ue()) {
    return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
}
function Xg(e = ue()) {
    var t;
    return Bo(e) && !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
}
function Zg() {
    return pm() && document.documentMode === 10
}
function Kd(e = ue()) {
    return Bo(e) || Vd(e) || Hd(e) || Wd(e) || /windows phone/i.test(e) || $d(e)
}
function ev() {
    try {
        return !!(window && window !== window.top)
    } catch {
        return !1
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qd(e, t = []) {
    let n;
    switch (e) {
        case "Browser":
            n = Ou(ue());
            break;
        case "Worker":
            n = `${Ou(ue())}-${e}`;
            break;
        default:
            n = e
    }
    const r = t.length ? t.join(",") : "FirebaseCore-web";
    return `${n}/JsCore/${li}/${r}`
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tv {
    constructor(t) {
        this.auth = t,
            this.queue = []
    }
    pushCallback(t, n) {
        const r = o => new Promise((s, a) => {
            try {
                const l = t(o);
                s(l)
            } catch (l) {
                a(l)
            }
        }
        );
        r.onAbort = n,
            this.queue.push(r);
        const i = this.queue.length - 1;
        return () => {
            this.queue[i] = () => Promise.resolve()
        }
    }
    async runMiddleware(t) {
        if (this.auth.currentUser === t)
            return;
        const n = [];
        try {
            for (const r of this.queue)
                await r(t),
                    r.onAbort && n.push(r.onAbort)
        } catch (r) {
            n.reverse();
            for (const i of n)
                try {
                    i()
                } catch { }
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: r == null ? void 0 : r.message
            })
        }
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nv(e, t = {}) {
    return Xe(e, "GET", "/v2/passwordPolicy", Je(e, t))
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rv = 6;
class iv {
    constructor(t) {
        var n, r, i, o;
        const s = t.customStrengthOptions;
        this.customStrengthOptions = {},
            this.customStrengthOptions.minPasswordLength = (n = s.minPasswordLength) !== null && n !== void 0 ? n : rv,
            s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength),
            s.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter),
            s.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter),
            s.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter),
            s.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter),
            this.enforcementState = t.enforcementState,
            this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
            this.allowedNonAlphanumericCharacters = (i = (r = t.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && i !== void 0 ? i : "",
            this.forceUpgradeOnSignin = (o = t.forceUpgradeOnSignin) !== null && o !== void 0 ? o : !1,
            this.schemaVersion = t.schemaVersion
    }
    validatePassword(t) {
        var n, r, i, o, s, a;
        const l = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(t, l),
            this.validatePasswordCharacterOptions(t, l),
            l.isValid && (l.isValid = (n = l.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
            l.isValid && (l.isValid = (r = l.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
            l.isValid && (l.isValid = (i = l.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
            l.isValid && (l.isValid = (o = l.containsUppercaseLetter) !== null && o !== void 0 ? o : !0),
            l.isValid && (l.isValid = (s = l.containsNumericCharacter) !== null && s !== void 0 ? s : !0),
            l.isValid && (l.isValid = (a = l.containsNonAlphanumericCharacter) !== null && a !== void 0 ? a : !0),
            l
    }
    validatePasswordLengthOptions(t, n) {
        const r = this.customStrengthOptions.minPasswordLength
            , i = this.customStrengthOptions.maxPasswordLength;
        r && (n.meetsMinPasswordLength = t.length >= r),
            i && (n.meetsMaxPasswordLength = t.length <= i)
    }
    validatePasswordCharacterOptions(t, n) {
        this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
        let r;
        for (let i = 0; i < t.length; i++)
            r = t.charAt(i),
                this.updatePasswordCharacterOptionsStatuses(n, r >= "a" && r <= "z", r >= "A" && r <= "Z", r >= "0" && r <= "9", this.allowedNonAlphanumericCharacters.includes(r))
    }
    updatePasswordCharacterOptionsStatuses(t, n, r, i, o) {
        this.customStrengthOptions.containsLowercaseLetter && (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
            this.customStrengthOptions.containsUppercaseLetter && (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
            this.customStrengthOptions.containsNumericCharacter && (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
            this.customStrengthOptions.containsNonAlphanumericCharacter && (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = o))
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ov {
    constructor(t, n, r, i) {
        this.app = t,
            this.heartbeatServiceProvider = n,
            this.appCheckServiceProvider = r,
            this.config = i,
            this.currentUser = null,
            this.emulatorConfig = null,
            this.operations = Promise.resolve(),
            this.authStateSubscription = new Lu(this),
            this.idTokenSubscription = new Lu(this),
            this.beforeStateQueue = new tv(this),
            this.redirectUser = null,
            this.isProactiveRefreshEnabled = !1,
            this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1,
            this._canInitEmulator = !0,
            this._isInitialized = !1,
            this._deleted = !1,
            this._initializationPromise = null,
            this._popupRedirectResolver = null,
            this._errorFactory = Ad,
            this._agentRecaptchaConfig = null,
            this._tenantRecaptchaConfigs = {},
            this._projectPasswordPolicy = null,
            this._tenantPasswordPolicies = {},
            this.lastNotifiedUid = void 0,
            this.languageCode = null,
            this.tenantId = null,
            this.settings = {
                appVerificationDisabledForTesting: !1
            },
            this.frameworks = [],
            this.name = t.name,
            this.clientVersion = i.sdkClientVersion
    }
    _initializeWithPersistence(t, n) {
        return n && (this._popupRedirectResolver = it(n)),
            this._initializationPromise = this.queue(async () => {
                var r, i;
                if (!this._deleted && (this.persistenceManager = await Un.create(this, t),
                    !this._deleted)) {
                    if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
                        try {
                            await this._popupRedirectResolver._initialize(this)
                        } catch { }
                    await this.initializeCurrentUser(n),
                        this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null,
                        !this._deleted && (this._isInitialized = !0)
                }
            }
            ),
            this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted)
            return;
        const t = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !t)) {
            if (this.currentUser && t && this.currentUser.uid === t.uid) {
                this._currentUser._assign(t),
                    await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(t, !0)
        }
    }
    async initializeCurrentUser(t) {
        var n;
        const r = await this.assertedPersistence.getCurrentUser();
        let i = r
            , o = !1;
        if (t && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const s = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId
                , a = i == null ? void 0 : i._redirectEventId
                , l = await this.tryRedirectSignIn(t);
            (!s || s === a) && (l != null && l.user) && (i = l.user,
                o = !0)
        }
        if (!i)
            return this.directlySetCurrentUser(null);
        if (!i._redirectEventId) {
            if (o)
                try {
                    await this.beforeStateQueue.runMiddleware(i)
                } catch (s) {
                    i = r,
                        this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s))
                }
            return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
        }
        return R(this._popupRedirectResolver, this, "argument-error"),
            await this.getOrInitRedirectPersistenceManager(),
            this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
    }
    async tryRedirectSignIn(t) {
        let n = null;
        try {
            n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return n
    }
    async reloadAndSetCurrentUserOrClear(t) {
        try {
            await ao(t)
        } catch (n) {
            if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
                return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(t)
    }
    useDeviceLanguage() {
        this.languageCode = Mg()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(t) {
        const n = t ? Ve(t) : null;
        return n && R(n.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
            this._updateCurrentUser(n && n._clone(this))
    }
    async _updateCurrentUser(t, n = !1) {
        if (!this._deleted)
            return t && R(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
                n || await this.beforeStateQueue.runMiddleware(t),
                this.queue(async () => {
                    await this.directlySetCurrentUser(t),
                        this.notifyAuthListeners()
                }
                )
    }
    async signOut() {
        return await this.beforeStateQueue.runMiddleware(null),
            (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
            this._updateCurrentUser(null, !0)
    }
    setPersistence(t) {
        return this.queue(async () => {
            await this.assertedPersistence.setPersistence(it(t))
        }
        )
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(t) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        const n = this._getPasswordPolicyInternal();
        return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : n.validatePassword(t)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        const t = await nv(this)
            , n = new iv(t);
        this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type
    }
    _updateErrorMap(t) {
        this._errorFactory = new si("auth", "Firebase", t())
    }
    onAuthStateChanged(t, n, r) {
        return this.registerStateListener(this.authStateSubscription, t, n, r)
    }
    beforeAuthStateChanged(t, n) {
        return this.beforeStateQueue.pushCallback(t, n)
    }
    onIdTokenChanged(t, n, r) {
        return this.registerStateListener(this.idTokenSubscription, t, n, r)
    }
    authStateReady() {
        return new Promise((t, n) => {
            if (this.currentUser)
                t();
            else {
                const r = this.onAuthStateChanged(() => {
                    r(),
                        t()
                }
                    , n)
            }
        }
        )
    }
    async revokeAccessToken(t) {
        if (this.currentUser) {
            const n = await this.currentUser.getIdToken()
                , r = {
                    providerId: "apple.com",
                    tokenType: "ACCESS_TOKEN",
                    token: t,
                    idToken: n
                };
            this.tenantId != null && (r.tenantId = this.tenantId),
                await Jg(this, r)
        }
    }
    toJSON() {
        var t;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON()
        }
    }
    async _setRedirectUser(t, n) {
        const r = await this.getOrInitRedirectPersistenceManager(n);
        return t === null ? r.removeCurrentUser() : r.setCurrentUser(t)
    }
    async getOrInitRedirectPersistenceManager(t) {
        if (!this.redirectPersistenceManager) {
            const n = t && it(t) || this._popupRedirectResolver;
            R(n, this, "argument-error"),
                this.redirectPersistenceManager = await Un.create(this, [it(n._redirectPersistence)], "redirectUser"),
                this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(t) {
        var n, r;
        return this._isInitialized && await this.queue(async () => { }
        ),
            ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === t ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === t ? this.redirectUser : null
    }
    async _persistUserIfCurrent(t) {
        if (t === this.currentUser)
            return this.queue(async () => this.directlySetCurrentUser(t))
    }
    _notifyListenersIfCurrent(t) {
        t === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
            this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
            this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        var t, n;
        if (!this._isInitialized)
            return;
        this.idTokenSubscription.next(this.currentUser);
        const r = (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !== null && n !== void 0 ? n : null;
        this.lastNotifiedUid !== r && (this.lastNotifiedUid = r,
            this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(t, n, r, i) {
        if (this._deleted)
            return () => { }
                ;
        const o = typeof n == "function" ? n : n.next.bind(n);
        let s = !1;
        const a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (R(a, this, "internal-error"),
            a.then(() => {
                s || o(this.currentUser)
            }
            ),
            typeof n == "function") {
            const l = t.addObserver(n, r, i);
            return () => {
                s = !0,
                    l()
            }
        } else {
            const l = t.addObserver(n);
            return () => {
                s = !0,
                    l()
            }
        }
    }
    async directlySetCurrentUser(t) {
        this.currentUser && this.currentUser !== t && this._currentUser._stopProactiveRefresh(),
            t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
            this.currentUser = t,
            t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(t) {
        return this.operations = this.operations.then(t, t),
            this.operations
    }
    get assertedPersistence() {
        return R(this.persistenceManager, this, "internal-error"),
            this.persistenceManager
    }
    _logFramework(t) {
        !t || this.frameworks.includes(t) || (this.frameworks.push(t),
            this.frameworks.sort(),
            this.clientVersion = qd(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        var t;
        const n = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
        const r = await ((t = this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })) === null || t === void 0 ? void 0 : t.getHeartbeatsHeader());
        r && (n["X-Firebase-Client"] = r);
        const i = await this._getAppCheckToken();
        return i && (n["X-Firebase-AppCheck"] = i),
            n
    }
    async _getAppCheckToken() {
        var t;
        const n = await ((t = this.appCheckServiceProvider.getImmediate({
            optional: !0
        })) === null || t === void 0 ? void 0 : t.getToken());
        return n != null && n.error && Rg(`Error while retrieving App Check token: ${n.error}`),
            n == null ? void 0 : n.token
    }
}
function ht(e) {
    return Ve(e)
}
class Lu {
    constructor(t) {
        this.auth = t,
            this.observer = null,
            this.addObserver = _m(n => this.observer = n)
    }
    get next() {
        return R(this.observer, this.auth, "internal-error"),
            this.observer.next.bind(this.observer)
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $o = {
    async loadJS() {
        throw new Error("Unable to load external scripts")
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
};
function sv(e) {
    $o = e
}
function Gd(e) {
    return $o.loadJS(e)
}
function av() {
    return $o.recaptchaEnterpriseScript
}
function lv() {
    return $o.gapiScript
}
function uv(e) {
    return `__${e}${Math.floor(Math.random() * 1e6)}`
}
const cv = "recaptcha-enterprise"
    , dv = "NO_RECAPTCHA";
class fv {
    constructor(t) {
        this.type = cv,
            this.auth = ht(t)
    }
    async verify(t = "verify", n = !1) {
        async function r(o) {
            if (!n) {
                if (o.tenantId == null && o._agentRecaptchaConfig != null)
                    return o._agentRecaptchaConfig.siteKey;
                if (o.tenantId != null && o._tenantRecaptchaConfigs[o.tenantId] !== void 0)
                    return o._tenantRecaptchaConfigs[o.tenantId].siteKey
            }
            return new Promise(async (s, a) => {
                Fg(o, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                }).then(l => {
                    if (l.recaptchaKey === void 0)
                        a(new Error("recaptcha Enterprise site key undefined"));
                    else {
                        const u = new zg(l);
                        return o.tenantId == null ? o._agentRecaptchaConfig = u : o._tenantRecaptchaConfigs[o.tenantId] = u,
                            s(u.siteKey)
                    }
                }
                ).catch(l => {
                    a(l)
                }
                )
            }
            )
        }
        function i(o, s, a) {
            const l = window.grecaptcha;
            Tu(l) ? l.enterprise.ready(() => {
                l.enterprise.execute(o, {
                    action: t
                }).then(u => {
                    s(u)
                }
                ).catch(() => {
                    s(dv)
                }
                )
            }
            ) : a(Error("No reCAPTCHA enterprise script loaded."))
        }
        return new Promise((o, s) => {
            r(this.auth).then(a => {
                if (!n && Tu(window.grecaptcha))
                    i(a, o, s);
                else {
                    if (typeof window > "u") {
                        s(new Error("RecaptchaVerifier is only supported in browser"));
                        return
                    }
                    let l = av();
                    l.length !== 0 && (l += a),
                        Gd(l).then(() => {
                            i(a, o, s)
                        }
                        ).catch(u => {
                            s(u)
                        }
                        )
                }
            }
            ).catch(a => {
                s(a)
            }
            )
        }
        )
    }
}
async function Au(e, t, n, r = !1) {
    const i = new fv(e);
    let o;
    try {
        o = await i.verify(n)
    } catch {
        o = await i.verify(n, !0)
    }
    const s = Object.assign({}, t);
    return r ? Object.assign(s, {
        captchaResp: o
    }) : Object.assign(s, {
        captchaResponse: o
    }),
        Object.assign(s, {
            clientType: "CLIENT_TYPE_WEB"
        }),
        Object.assign(s, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
        }),
        s
}
async function lo(e, t, n, r) {
    var i;
    if (!((i = e._getRecaptchaConfig()) === null || i === void 0) && i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
        const o = await Au(e, t, n, n === "getOobCode");
        return r(e, o)
    } else
        return r(e, t).catch(async o => {
            if (o.code === "auth/missing-recaptcha-token") {
                console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
                const s = await Au(e, t, n, n === "getOobCode");
                return r(e, s)
            } else
                return Promise.reject(o)
        }
        )
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pv(e, t) {
    const n = Td(e, "auth");
    if (n.isInitialized()) {
        const i = n.getImmediate()
            , o = n.getOptions();
        if (io(o, t ?? {}))
            return i;
        Le(i, "already-initialized")
    }
    return n.initialize({
        options: t
    })
}
function hv(e, t) {
    const n = (t == null ? void 0 : t.persistence) || []
        , r = (Array.isArray(n) ? n : [n]).map(it);
    t != null && t.errorMap && e._updateErrorMap(t.errorMap),
        e._initializeWithPersistence(r, t == null ? void 0 : t.popupRedirectResolver)
}
function mv(e, t, n) {
    const r = ht(e);
    R(r._canInitEmulator, r, "emulator-config-failed"),
        R(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
    const i = !!(n != null && n.disableWarnings)
        , o = Qd(t)
        , { host: s, port: a } = gv(t)
        , l = a === null ? "" : `:${a}`;
    r.config.emulator = {
        url: `${o}//${s}${l}/`
    },
        r.settings.appVerificationDisabledForTesting = !0,
        r.emulatorConfig = Object.freeze({
            host: s,
            port: a,
            protocol: o.replace(":", ""),
            options: Object.freeze({
                disableWarnings: i
            })
        }),
        i || vv()
}
function Qd(e) {
    const t = e.indexOf(":");
    return t < 0 ? "" : e.substr(0, t + 1)
}
function gv(e) {
    const t = Qd(e)
        , n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
    if (!n)
        return {
            host: "",
            port: null
        };
    const r = n[2].split("@").pop() || ""
        , i = /^(\[[^\]]+\])(:|$)/.exec(r);
    if (i) {
        const o = i[1];
        return {
            host: o,
            port: Mu(r.substr(o.length + 1))
        }
    } else {
        const [o, s] = r.split(":");
        return {
            host: o,
            port: Mu(s)
        }
    }
}
function Mu(e) {
    if (!e)
        return null;
    const t = Number(e);
    return isNaN(t) ? null : t
}
function vv() {
    function e() {
        const t = document.createElement("p")
            , n = t.style;
        t.innerText = "Running in emulator mode. Do not use with production credentials.",
            n.position = "fixed",
            n.width = "100%",
            n.backgroundColor = "#ffffff",
            n.border = ".1em solid #000000",
            n.color = "#b50000",
            n.bottom = "0px",
            n.left = "0px",
            n.margin = "0px",
            n.zIndex = "10000",
            n.textAlign = "center",
            t.classList.add("firebase-emulator-warning"),
            document.body.appendChild(t)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
        typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e) : e())
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl {
    constructor(t, n) {
        this.providerId = t,
            this.signInMethod = n
    }
    toJSON() {
        return rt("not implemented")
    }
    _getIdTokenResponse(t) {
        return rt("not implemented")
    }
    _linkToIdToken(t, n) {
        return rt("not implemented")
    }
    _getReauthenticationResolver(t) {
        return rt("not implemented")
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yv(e, t) {
    return Xe(e, "POST", "/v1/accounts:resetPassword", Je(e, t))
}
async function wv(e, t) {
    return Xe(e, "POST", "/v1/accounts:signUp", t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _v(e, t) {
    return ci(e, "POST", "/v1/accounts:signInWithPassword", Je(e, t))
}
async function Sv(e, t) {
    return Xe(e, "POST", "/v1/accounts:sendOobCode", Je(e, t))
}
async function Ev(e, t) {
    return Sv(e, t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Iv(e, t) {
    return ci(e, "POST", "/v1/accounts:signInWithEmailLink", Je(e, t))
}
async function Cv(e, t) {
    return ci(e, "POST", "/v1/accounts:signInWithEmailLink", Je(e, t))
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr extends cl {
    constructor(t, n, r, i = null) {
        super("password", r),
            this._email = t,
            this._password = n,
            this._tenantId = i
    }
    static _fromEmailAndPassword(t, n) {
        return new zr(t, n, "password")
    }
    static _fromEmailAndCode(t, n, r = null) {
        return new zr(t, n, "emailLink", r)
    }
    toJSON() {
        return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
        }
    }
    static fromJSON(t) {
        const n = typeof t == "string" ? JSON.parse(t) : t;
        if (n != null && n.email && (n != null && n.password)) {
            if (n.signInMethod === "password")
                return this._fromEmailAndPassword(n.email, n.password);
            if (n.signInMethod === "emailLink")
                return this._fromEmailAndCode(n.email, n.password, n.tenantId)
        }
        return null
    }
    async _getIdTokenResponse(t) {
        switch (this.signInMethod) {
            case "password":
                const n = {
                    returnSecureToken: !0,
                    email: this._email,
                    password: this._password,
                    clientType: "CLIENT_TYPE_WEB"
                };
                return lo(t, n, "signInWithPassword", _v);
            case "emailLink":
                return Iv(t, {
                    email: this._email,
                    oobCode: this._password
                });
            default:
                Le(t, "internal-error")
        }
    }
    async _linkToIdToken(t, n) {
        switch (this.signInMethod) {
            case "password":
                const r = {
                    idToken: n,
                    returnSecureToken: !0,
                    email: this._email,
                    password: this._password,
                    clientType: "CLIENT_TYPE_WEB"
                };
                return lo(t, r, "signUpPassword", wv);
            case "emailLink":
                return Cv(t, {
                    idToken: n,
                    email: this._email,
                    oobCode: this._password
                });
            default:
                Le(t, "internal-error")
        }
    }
    _getReauthenticationResolver(t) {
        return this._getIdTokenResponse(t)
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zn(e, t) {
    return ci(e, "POST", "/v1/accounts:signInWithIdp", Je(e, t))
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kv = "http://localhost";
class pn extends cl {
    constructor() {
        super(...arguments),
            this.pendingToken = null
    }
    static _fromParams(t) {
        const n = new pn(t.providerId, t.signInMethod);
        return t.idToken || t.accessToken ? (t.idToken && (n.idToken = t.idToken),
            t.accessToken && (n.accessToken = t.accessToken),
            t.nonce && !t.pendingToken && (n.nonce = t.nonce),
            t.pendingToken && (n.pendingToken = t.pendingToken)) : t.oauthToken && t.oauthTokenSecret ? (n.accessToken = t.oauthToken,
                n.secret = t.oauthTokenSecret) : Le("argument-error"),
            n
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(t) {
        const n = typeof t == "string" ? JSON.parse(t) : t
            , { providerId: r, signInMethod: i } = n
            , o = ol(n, ["providerId", "signInMethod"]);
        if (!r || !i)
            return null;
        const s = new pn(r, i);
        return s.idToken = o.idToken || void 0,
            s.accessToken = o.accessToken || void 0,
            s.secret = o.secret,
            s.nonce = o.nonce,
            s.pendingToken = o.pendingToken || null,
            s
    }
    _getIdTokenResponse(t) {
        const n = this.buildRequest();
        return zn(t, n)
    }
    _linkToIdToken(t, n) {
        const r = this.buildRequest();
        return r.idToken = n,
            zn(t, r)
    }
    _getReauthenticationResolver(t) {
        const n = this.buildRequest();
        return n.autoCreate = !1,
            zn(t, n)
    }
    buildRequest() {
        const t = {
            requestUri: kv,
            returnSecureToken: !0
        };
        if (this.pendingToken)
            t.pendingToken = this.pendingToken;
        else {
            const n = {};
            this.idToken && (n.id_token = this.idToken),
                this.accessToken && (n.access_token = this.accessToken),
                this.secret && (n.oauth_token_secret = this.secret),
                n.providerId = this.providerId,
                this.nonce && !this.pendingToken && (n.nonce = this.nonce),
                t.postBody = ai(n)
        }
        return t
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xv(e) {
    switch (e) {
        case "recoverEmail":
            return "RECOVER_EMAIL";
        case "resetPassword":
            return "PASSWORD_RESET";
        case "signIn":
            return "EMAIL_SIGNIN";
        case "verifyEmail":
            return "VERIFY_EMAIL";
        case "verifyAndChangeEmail":
            return "VERIFY_AND_CHANGE_EMAIL";
        case "revertSecondFactorAddition":
            return "REVERT_SECOND_FACTOR_ADDITION";
        default:
            return null
    }
}
function Pv(e) {
    const t = wr(_r(e)).link
        , n = t ? wr(_r(t)).deep_link_id : null
        , r = wr(_r(e)).deep_link_id;
    return (r ? wr(_r(r)).link : null) || r || n || t || e
}
class dl {
    constructor(t) {
        var n, r, i, o, s, a;
        const l = wr(_r(t))
            , u = (n = l.apiKey) !== null && n !== void 0 ? n : null
            , c = (r = l.oobCode) !== null && r !== void 0 ? r : null
            , d = xv((i = l.mode) !== null && i !== void 0 ? i : null);
        R(u && c && d, "argument-error"),
            this.apiKey = u,
            this.operation = d,
            this.code = c,
            this.continueUrl = (o = l.continueUrl) !== null && o !== void 0 ? o : null,
            this.languageCode = (s = l.languageCode) !== null && s !== void 0 ? s : null,
            this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null
    }
    static parseLink(t) {
        const n = Pv(t);
        try {
            return new dl(n)
        } catch {
            return null
        }
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr {
    constructor() {
        this.providerId = nr.PROVIDER_ID
    }
    static credential(t, n) {
        return zr._fromEmailAndPassword(t, n)
    }
    static credentialWithLink(t, n) {
        const r = dl.parseLink(n);
        return R(r, "argument-error"),
            zr._fromEmailAndCode(t, r.code, r.tenantId)
    }
}
nr.PROVIDER_ID = "password";
nr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
nr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fl {
    constructor(t) {
        this.providerId = t,
            this.defaultLanguageCode = null,
            this.customParameters = {}
    }
    setDefaultLanguage(t) {
        this.defaultLanguageCode = t
    }
    setCustomParameters(t) {
        return this.customParameters = t,
            this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
class di extends fl {
    constructor() {
        super(...arguments),
            this.scopes = []
    }
    addScope(t) {
        return this.scopes.includes(t) || this.scopes.push(t),
            this
    }
    getScopes() {
        return [...this.scopes]
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends di {
    constructor() {
        super("facebook.com")
    }
    static credential(t) {
        return pn._fromParams({
            providerId: St.PROVIDER_ID,
            signInMethod: St.FACEBOOK_SIGN_IN_METHOD,
            accessToken: t
        })
    }
    static credentialFromResult(t) {
        return St.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return St.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
            return null;
        try {
            return St.credential(t.oauthAccessToken)
        } catch {
            return null
        }
    }
}
St.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
St.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends di {
    constructor() {
        super("google.com"),
            this.addScope("profile")
    }
    static credential(t, n) {
        return pn._fromParams({
            providerId: nt.PROVIDER_ID,
            signInMethod: nt.GOOGLE_SIGN_IN_METHOD,
            idToken: t,
            accessToken: n
        })
    }
    static credentialFromResult(t) {
        return nt.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return nt.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t)
            return null;
        const { oauthIdToken: n, oauthAccessToken: r } = t;
        if (!n && !r)
            return null;
        try {
            return nt.credential(n, r)
        } catch {
            return null
        }
    }
}
nt.GOOGLE_SIGN_IN_METHOD = "google.com";
nt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends di {
    constructor() {
        super("github.com")
    }
    static credential(t) {
        return pn._fromParams({
            providerId: Et.PROVIDER_ID,
            signInMethod: Et.GITHUB_SIGN_IN_METHOD,
            accessToken: t
        })
    }
    static credentialFromResult(t) {
        return Et.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return Et.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
            return null;
        try {
            return Et.credential(t.oauthAccessToken)
        } catch {
            return null
        }
    }
}
Et.GITHUB_SIGN_IN_METHOD = "github.com";
Et.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends di {
    constructor() {
        super("twitter.com")
    }
    static credential(t, n) {
        return pn._fromParams({
            providerId: It.PROVIDER_ID,
            signInMethod: It.TWITTER_SIGN_IN_METHOD,
            oauthToken: t,
            oauthTokenSecret: n
        })
    }
    static credentialFromResult(t) {
        return It.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return It.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t)
            return null;
        const { oauthAccessToken: n, oauthTokenSecret: r } = t;
        if (!n || !r)
            return null;
        try {
            return It.credential(n, r)
        } catch {
            return null
        }
    }
}
It.TWITTER_SIGN_IN_METHOD = "twitter.com";
It.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tv(e, t) {
    return ci(e, "POST", "/v1/accounts:signUp", Je(e, t))
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn {
    constructor(t) {
        this.user = t.user,
            this.providerId = t.providerId,
            this._tokenResponse = t._tokenResponse,
            this.operationType = t.operationType
    }
    static async _fromIdTokenResponse(t, n, r, i = !1) {
        const o = await un._fromIdTokenResponse(t, r, i)
            , s = Du(r);
        return new hn({
            user: o,
            providerId: s,
            _tokenResponse: r,
            operationType: n
        })
    }
    static async _forOperation(t, n, r) {
        await t._updateTokensIfNecessary(r, !0);
        const i = Du(r);
        return new hn({
            user: t,
            providerId: i,
            _tokenResponse: r,
            operationType: n
        })
    }
}
function Du(e) {
    return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo extends Wt {
    constructor(t, n, r, i) {
        var o;
        super(n.code, n.message),
            this.operationType = r,
            this.user = i,
            Object.setPrototypeOf(this, uo.prototype),
            this.customData = {
                appName: t.name,
                tenantId: (o = t.tenantId) !== null && o !== void 0 ? o : void 0,
                _serverResponse: n.customData._serverResponse,
                operationType: r
            }
    }
    static _fromErrorAndOperation(t, n, r, i) {
        return new uo(t, n, r, i)
    }
}
function Yd(e, t, n, r) {
    return (t === "reauthenticate" ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch(o => {
        throw o.code === "auth/multi-factor-auth-required" ? uo._fromErrorAndOperation(e, o, t, r) : o
    }
    )
}
async function Nv(e, t, n = !1) {
    const r = await jr(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
    return hn._forOperation(e, "link", r)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
async function Rv(e, t, n = !1) {
    const { auth: r } = e
        , i = "reauthenticate";
    try {
        const o = await jr(e, Yd(r, i, t, e), n);
        R(o.idToken, r, "internal-error");
        const s = ll(o.idToken);
        R(s, r, "internal-error");
        const { sub: a } = s;
        return R(e.uid === a, r, "user-mismatch"),
            hn._forOperation(e, i, o)
    } catch (o) {
        throw (o == null ? void 0 : o.code) === "auth/user-not-found" && Le(r, "user-mismatch"),
        o
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jd(e, t, n = !1) {
    const r = "signIn"
        , i = await Yd(e, r, t)
        , o = await hn._fromIdTokenResponse(e, r, i);
    return n || await e._updateCurrentUser(o.user),
        o
}
async function Ov(e, t) {
    return Jd(ht(e), t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lv(e, t, n) {
    var r;
    R(((r = n.url) === null || r === void 0 ? void 0 : r.length) > 0, e, "invalid-continue-uri"),
        R(typeof n.dynamicLinkDomain > "u" || n.dynamicLinkDomain.length > 0, e, "invalid-dynamic-link-domain"),
        t.continueUrl = n.url,
        t.dynamicLinkDomain = n.dynamicLinkDomain,
        t.canHandleCodeInApp = n.handleCodeInApp,
        n.iOS && (R(n.iOS.bundleId.length > 0, e, "missing-ios-bundle-id"),
            t.iOSBundleId = n.iOS.bundleId),
        n.android && (R(n.android.packageName.length > 0, e, "missing-android-pkg-name"),
            t.androidInstallApp = n.android.installApp,
            t.androidMinimumVersionCode = n.android.minimumVersion,
            t.androidPackageName = n.android.packageName)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pl(e) {
    const t = ht(e);
    t._getPasswordPolicyInternal() && await t._updatePasswordPolicy()
}
async function Av(e, t, n) {
    const r = ht(e)
        , i = {
            requestType: "PASSWORD_RESET",
            email: t,
            clientType: "CLIENT_TYPE_WEB"
        };
    n && Lv(r, i, n),
        await lo(r, i, "getOobCode", Ev)
}
async function Mv(e, t, n) {
    await yv(Ve(e), {
        oobCode: t,
        newPassword: n
    }).catch(async r => {
        throw r.code === "auth/password-does-not-meet-requirements" && pl(e),
        r
    }
    )
}
async function Dv(e, t, n) {
    const r = ht(e)
        , s = await lo(r, {
            returnSecureToken: !0,
            email: t,
            password: n,
            clientType: "CLIENT_TYPE_WEB"
        }, "signUpPassword", Tv).catch(l => {
            throw l.code === "auth/password-does-not-meet-requirements" && pl(e),
            l
        }
        )
        , a = await hn._fromIdTokenResponse(r, "signIn", s);
    return await r._updateCurrentUser(a.user),
        a
}
function bv(e, t, n) {
    return Ov(Ve(e), nr.credential(t, n)).catch(async r => {
        throw r.code === "auth/password-does-not-meet-requirements" && pl(e),
        r
    }
    )
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jv(e, t) {
    return Ve(e).setPersistence(t)
}
function Uv(e, t, n, r) {
    return Ve(e).onIdTokenChanged(t, n, r)
}
function zv(e, t, n) {
    return Ve(e).beforeAuthStateChanged(t, n)
}
function Fv(e, t, n, r) {
    return Ve(e).onAuthStateChanged(t, n, r)
}
function Bv(e) {
    return Ve(e).signOut()
}
const co = "__sak";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xd {
    constructor(t, n) {
        this.storageRetriever = t,
            this.type = n
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(co, "1"),
                this.storage.removeItem(co),
                Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(t, n) {
        return this.storage.setItem(t, JSON.stringify(n)),
            Promise.resolve()
    }
    _get(t) {
        const n = this.storage.getItem(t);
        return Promise.resolve(n ? JSON.parse(n) : null)
    }
    _remove(t) {
        return this.storage.removeItem(t),
            Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $v() {
    const e = ue();
    return ul(e) || Bo(e)
}
const Vv = 1e3
    , Wv = 10;
class Zd extends Xd {
    constructor() {
        super(() => window.localStorage, "LOCAL"),
            this.boundEventHandler = (t, n) => this.onStorageEvent(t, n),
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.safariLocalStorageNotSynced = $v() && ev(),
            this.fallbackToPolling = Kd(),
            this._shouldAllowMigration = !0
    }
    forAllChangedKeys(t) {
        for (const n of Object.keys(this.listeners)) {
            const r = this.storage.getItem(n)
                , i = this.localCache[n];
            r !== i && t(n, i, r)
        }
    }
    onStorageEvent(t, n = !1) {
        if (!t.key) {
            this.forAllChangedKeys((s, a, l) => {
                this.notifyListeners(s, l)
            }
            );
            return
        }
        const r = t.key;
        if (n ? this.detachListener() : this.stopPolling(),
            this.safariLocalStorageNotSynced) {
            const s = this.storage.getItem(r);
            if (t.newValue !== s)
                t.newValue !== null ? this.storage.setItem(r, t.newValue) : this.storage.removeItem(r);
            else if (this.localCache[r] === t.newValue && !n)
                return
        }
        const i = () => {
            const s = this.storage.getItem(r);
            !n && this.localCache[r] === s || this.notifyListeners(r, s)
        }
            , o = this.storage.getItem(r);
        Zg() && o !== t.newValue && t.newValue !== t.oldValue ? setTimeout(i, Wv) : i()
    }
    notifyListeners(t, n) {
        this.localCache[t] = n;
        const r = this.listeners[t];
        if (r)
            for (const i of Array.from(r))
                i(n && JSON.parse(n))
    }
    startPolling() {
        this.stopPolling(),
            this.pollTimer = setInterval(() => {
                this.forAllChangedKeys((t, n, r) => {
                    this.onStorageEvent(new StorageEvent("storage", {
                        key: t,
                        oldValue: n,
                        newValue: r
                    }), !0)
                }
                )
            }
                , Vv)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(t, n) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
            this.listeners[t] || (this.listeners[t] = new Set,
                this.localCache[t] = this.storage.getItem(t)),
            this.listeners[t].add(n)
    }
    _removeListener(t, n) {
        this.listeners[t] && (this.listeners[t].delete(n),
            this.listeners[t].size === 0 && delete this.listeners[t]),
            Object.keys(this.listeners).length === 0 && (this.detachListener(),
                this.stopPolling())
    }
    async _set(t, n) {
        await super._set(t, n),
            this.localCache[t] = JSON.stringify(n)
    }
    async _get(t) {
        const n = await super._get(t);
        return this.localCache[t] = JSON.stringify(n),
            n
    }
    async _remove(t) {
        await super._remove(t),
            delete this.localCache[t]
    }
}
Zd.type = "LOCAL";
const ef = Zd;
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tf extends Xd {
    constructor() {
        super(() => window.sessionStorage, "SESSION")
    }
    _addListener(t, n) { }
    _removeListener(t, n) { }
}
tf.type = "SESSION";
const nf = tf;
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function Hv(e) {
    return Promise.all(e.map(async t => {
        try {
            return {
                fulfilled: !0,
                value: await t
            }
        } catch (n) {
            return {
                fulfilled: !1,
                reason: n
            }
        }
    }
    ))
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo {
    constructor(t) {
        this.eventTarget = t,
            this.handlersMap = {},
            this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(t) {
        const n = this.receivers.find(i => i.isListeningto(t));
        if (n)
            return n;
        const r = new Vo(t);
        return this.receivers.push(r),
            r
    }
    isListeningto(t) {
        return this.eventTarget === t
    }
    async handleEvent(t) {
        const n = t
            , { eventId: r, eventType: i, data: o } = n.data
            , s = this.handlersMap[i];
        if (!(s != null && s.size))
            return;
        n.ports[0].postMessage({
            status: "ack",
            eventId: r,
            eventType: i
        });
        const a = Array.from(s).map(async u => u(n.origin, o))
            , l = await Hv(a);
        n.ports[0].postMessage({
            status: "done",
            eventId: r,
            eventType: i,
            response: l
        })
    }
    _subscribe(t, n) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
            this.handlersMap[t] || (this.handlersMap[t] = new Set),
            this.handlersMap[t].add(n)
    }
    _unsubscribe(t, n) {
        this.handlersMap[t] && n && this.handlersMap[t].delete(n),
            (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
            Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
Vo.receivers = [];
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hl(e = "", t = 10) {
    let n = "";
    for (let r = 0; r < t; r++)
        n += Math.floor(Math.random() * 10);
    return e + n
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kv {
    constructor(t) {
        this.target = t,
            this.handlers = new Set
    }
    removeMessageHandler(t) {
        t.messageChannel && (t.messageChannel.port1.removeEventListener("message", t.onMessage),
            t.messageChannel.port1.close()),
            this.handlers.delete(t)
    }
    async _send(t, n, r = 50) {
        const i = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!i)
            throw new Error("connection_unavailable");
        let o, s;
        return new Promise((a, l) => {
            const u = hl("", 20);
            i.port1.start();
            const c = setTimeout(() => {
                l(new Error("unsupported_event"))
            }
                , r);
            s = {
                messageChannel: i,
                onMessage(d) {
                    const h = d;
                    if (h.data.eventId === u)
                        switch (h.data.status) {
                            case "ack":
                                clearTimeout(c),
                                    o = setTimeout(() => {
                                        l(new Error("timeout"))
                                    }
                                        , 3e3);
                                break;
                            case "done":
                                clearTimeout(o),
                                    a(h.data.response);
                                break;
                            default:
                                clearTimeout(c),
                                    clearTimeout(o),
                                    l(new Error("invalid_response"));
                                break
                        }
                }
            },
                this.handlers.add(s),
                i.port1.addEventListener("message", s.onMessage),
                this.target.postMessage({
                    eventType: t,
                    eventId: u,
                    data: n
                }, [i.port2])
        }
        ).finally(() => {
            s && this.removeMessageHandler(s)
        }
        )
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge() {
    return window
}
function qv(e) {
    Ge().location.href = e
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rf() {
    return typeof Ge().WorkerGlobalScope < "u" && typeof Ge().importScripts == "function"
}
async function Gv() {
    if (!(navigator != null && navigator.serviceWorker))
        return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}
function Qv() {
    var e;
    return ((e = navigator == null ? void 0 : navigator.serviceWorker) === null || e === void 0 ? void 0 : e.controller) || null
}
function Yv() {
    return rf() ? self : null
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const of = "firebaseLocalStorageDb"
    , Jv = 1
    , fo = "firebaseLocalStorage"
    , sf = "fbase_key";
class fi {
    constructor(t) {
        this.request = t
    }
    toPromise() {
        return new Promise((t, n) => {
            this.request.addEventListener("success", () => {
                t(this.request.result)
            }
            ),
                this.request.addEventListener("error", () => {
                    n(this.request.error)
                }
                )
        }
        )
    }
}
function Wo(e, t) {
    return e.transaction([fo], t ? "readwrite" : "readonly").objectStore(fo)
}
function Xv() {
    const e = indexedDB.deleteDatabase(of);
    return new fi(e).toPromise()
}
function Xs() {
    const e = indexedDB.open(of, Jv);
    return new Promise((t, n) => {
        e.addEventListener("error", () => {
            n(e.error)
        }
        ),
            e.addEventListener("upgradeneeded", () => {
                const r = e.result;
                try {
                    r.createObjectStore(fo, {
                        keyPath: sf
                    })
                } catch (i) {
                    n(i)
                }
            }
            ),
            e.addEventListener("success", async () => {
                const r = e.result;
                r.objectStoreNames.contains(fo) ? t(r) : (r.close(),
                    await Xv(),
                    t(await Xs()))
            }
            )
    }
    )
}
async function bu(e, t, n) {
    const r = Wo(e, !0).put({
        [sf]: t,
        value: n
    });
    return new fi(r).toPromise()
}
async function Zv(e, t) {
    const n = Wo(e, !1).get(t)
        , r = await new fi(n).toPromise();
    return r === void 0 ? null : r.value
}
function ju(e, t) {
    const n = Wo(e, !0).delete(t);
    return new fi(n).toPromise()
}
const ey = 800
    , ty = 3;
class af {
    constructor() {
        this.type = "LOCAL",
            this._shouldAllowMigration = !0,
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.pendingWrites = 0,
            this.receiver = null,
            this.sender = null,
            this.serviceWorkerReceiverAvailable = !1,
            this.activeServiceWorker = null,
            this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => { }
                , () => { }
            )
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await Xs(),
            this.db)
    }
    async _withRetries(t) {
        let n = 0;
        for (; ;)
            try {
                const r = await this._openDb();
                return await t(r)
            } catch (r) {
                if (n++ > ty)
                    throw r;
                this.db && (this.db.close(),
                    this.db = void 0)
            }
    }
    async initializeServiceWorkerMessaging() {
        return rf() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = Vo._getInstance(Yv()),
            this.receiver._subscribe("keyChanged", async (t, n) => ({
                keyProcessed: (await this._poll()).includes(n.key)
            })),
            this.receiver._subscribe("ping", async (t, n) => ["keyChanged"])
    }
    async initializeSender() {
        var t, n;
        if (this.activeServiceWorker = await Gv(),
            !this.activeServiceWorker)
            return;
        this.sender = new Kv(this.activeServiceWorker);
        const r = await this.sender._send("ping", {}, 800);
        r && !((t = r[0]) === null || t === void 0) && t.fulfilled && !((n = r[0]) === null || n === void 0) && n.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(t) {
        if (!(!this.sender || !this.activeServiceWorker || Qv() !== this.activeServiceWorker))
            try {
                await this.sender._send("keyChanged", {
                    key: t
                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch { }
    }
    async _isAvailable() {
        try {
            if (!indexedDB)
                return !1;
            const t = await Xs();
            return await bu(t, co, "1"),
                await ju(t, co),
                !0
        } catch { }
        return !1
    }
    async _withPendingWrite(t) {
        this.pendingWrites++;
        try {
            await t()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(t, n) {
        return this._withPendingWrite(async () => (await this._withRetries(r => bu(r, t, n)),
            this.localCache[t] = n,
            this.notifyServiceWorker(t)))
    }
    async _get(t) {
        const n = await this._withRetries(r => Zv(r, t));
        return this.localCache[t] = n,
            n
    }
    async _remove(t) {
        return this._withPendingWrite(async () => (await this._withRetries(n => ju(n, t)),
            delete this.localCache[t],
            this.notifyServiceWorker(t)))
    }
    async _poll() {
        const t = await this._withRetries(i => {
            const o = Wo(i, !1).getAll();
            return new fi(o).toPromise()
        }
        );
        if (!t)
            return [];
        if (this.pendingWrites !== 0)
            return [];
        const n = []
            , r = new Set;
        if (t.length !== 0)
            for (const { fbase_key: i, value: o } of t)
                r.add(i),
                    JSON.stringify(this.localCache[i]) !== JSON.stringify(o) && (this.notifyListeners(i, o),
                        n.push(i));
        for (const i of Object.keys(this.localCache))
            this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null),
                n.push(i));
        return n
    }
    notifyListeners(t, n) {
        this.localCache[t] = n;
        const r = this.listeners[t];
        if (r)
            for (const i of Array.from(r))
                i(n)
    }
    startPolling() {
        this.stopPolling(),
            this.pollTimer = setInterval(async () => this._poll(), ey)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
    }
    _addListener(t, n) {
        Object.keys(this.listeners).length === 0 && this.startPolling(),
            this.listeners[t] || (this.listeners[t] = new Set,
                this._get(t)),
            this.listeners[t].add(n)
    }
    _removeListener(t, n) {
        this.listeners[t] && (this.listeners[t].delete(n),
            this.listeners[t].size === 0 && delete this.listeners[t]),
            Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
af.type = "LOCAL";
const ny = af;
new ui(3e4, 6e4);
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lf(e, t) {
    return t ? it(t) : (R(e._popupRedirectResolver, e, "argument-error"),
        e._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ml extends cl {
    constructor(t) {
        super("custom", "custom"),
            this.params = t
    }
    _getIdTokenResponse(t) {
        return zn(t, this._buildIdpRequest())
    }
    _linkToIdToken(t, n) {
        return zn(t, this._buildIdpRequest(n))
    }
    _getReauthenticationResolver(t) {
        return zn(t, this._buildIdpRequest())
    }
    _buildIdpRequest(t) {
        const n = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return t && (n.idToken = t),
            n
    }
}
function ry(e) {
    return Jd(e.auth, new ml(e), e.bypassAuthState)
}
function iy(e) {
    const { auth: t, user: n } = e;
    return R(n, t, "internal-error"),
        Rv(n, new ml(e), e.bypassAuthState)
}
async function oy(e) {
    const { auth: t, user: n } = e;
    return R(n, t, "internal-error"),
        Nv(n, new ml(e), e.bypassAuthState)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uf {
    constructor(t, n, r, i, o = !1) {
        this.auth = t,
            this.resolver = r,
            this.user = i,
            this.bypassAuthState = o,
            this.pendingPromise = null,
            this.eventManager = null,
            this.filter = Array.isArray(n) ? n : [n]
    }
    execute() {
        return new Promise(async (t, n) => {
            this.pendingPromise = {
                resolve: t,
                reject: n
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth),
                    await this.onExecution(),
                    this.eventManager.registerConsumer(this)
            } catch (r) {
                this.reject(r)
            }
        }
        )
    }
    async onAuthEvent(t) {
        const { urlResponse: n, sessionId: r, postBody: i, tenantId: o, error: s, type: a } = t;
        if (s) {
            this.reject(s);
            return
        }
        const l = {
            auth: this.auth,
            requestUri: n,
            sessionId: r,
            tenantId: o || void 0,
            postBody: i || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(a)(l))
        } catch (u) {
            this.reject(u)
        }
    }
    onError(t) {
        this.reject(t)
    }
    getIdpTask(t) {
        switch (t) {
            case "signInViaPopup":
            case "signInViaRedirect":
                return ry;
            case "linkViaPopup":
            case "linkViaRedirect":
                return oy;
            case "reauthViaPopup":
            case "reauthViaRedirect":
                return iy;
            default:
                Le(this.auth, "internal-error")
        }
    }
    resolve(t) {
        lt(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.resolve(t),
            this.unregisterAndCleanUp()
    }
    reject(t) {
        lt(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.reject(t),
            this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
            this.pendingPromise = null,
            this.cleanUp()
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sy = new ui(2e3, 1e4);
async function ay(e, t, n) {
    const r = ht(e);
    Og(e, t, fl);
    const i = lf(r, n);
    return new on(r, "signInViaPopup", t, i).executeNotNull()
}
class on extends uf {
    constructor(t, n, r, i, o) {
        super(t, n, i, o),
            this.provider = r,
            this.authWindow = null,
            this.pollId = null,
            on.currentPopupAction && on.currentPopupAction.cancel(),
            on.currentPopupAction = this
    }
    async executeNotNull() {
        const t = await this.execute();
        return R(t, this.auth, "internal-error"),
            t
    }
    async onExecution() {
        lt(this.filter.length === 1, "Popup operations only handle one event");
        const t = hl();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], t),
            this.authWindow.associatedEvent = t,
            this.resolver._originValidation(this.auth).catch(n => {
                this.reject(n)
            }
            ),
            this.resolver._isIframeWebStorageSupported(this.auth, n => {
                n || this.reject(qe(this.auth, "web-storage-unsupported"))
            }
            ),
            this.pollUserCancellation()
    }
    get eventId() {
        var t;
        return ((t = this.authWindow) === null || t === void 0 ? void 0 : t.associatedEvent) || null
    }
    cancel() {
        this.reject(qe(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(),
            this.pollId && window.clearTimeout(this.pollId),
            this.authWindow = null,
            this.pollId = null,
            on.currentPopupAction = null
    }
    pollUserCancellation() {
        const t = () => {
            var n, r;
            if (!((r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null || r === void 0) && r.closed) {
                this.pollId = window.setTimeout(() => {
                    this.pollId = null,
                        this.reject(qe(this.auth, "popup-closed-by-user"))
                }
                    , 8e3);
                return
            }
            this.pollId = window.setTimeout(t, sy.get())
        }
            ;
        t()
    }
}
on.currentPopupAction = null;
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ly = "pendingRedirect"
    , Vi = new Map;
class uy extends uf {
    constructor(t, n, r = !1) {
        super(t, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], n, void 0, r),
            this.eventId = null
    }
    async execute() {
        let t = Vi.get(this.auth._key());
        if (!t) {
            try {
                const r = await cy(this.resolver, this.auth) ? await super.execute() : null;
                t = () => Promise.resolve(r)
            } catch (n) {
                t = () => Promise.reject(n)
            }
            Vi.set(this.auth._key(), t)
        }
        return this.bypassAuthState || Vi.set(this.auth._key(), () => Promise.resolve(null)),
            t()
    }
    async onAuthEvent(t) {
        if (t.type === "signInViaRedirect")
            return super.onAuthEvent(t);
        if (t.type === "unknown") {
            this.resolve(null);
            return
        }
        if (t.eventId) {
            const n = await this.auth._redirectUserForId(t.eventId);
            if (n)
                return this.user = n,
                    super.onAuthEvent(t);
            this.resolve(null)
        }
    }
    async onExecution() { }
    cleanUp() { }
}
async function cy(e, t) {
    const n = py(t)
        , r = fy(e);
    if (!await r._isAvailable())
        return !1;
    const i = await r._get(n) === "true";
    return await r._remove(n),
        i
}
function dy(e, t) {
    Vi.set(e._key(), t)
}
function fy(e) {
    return it(e._redirectPersistence)
}
function py(e) {
    return $i(ly, e.config.apiKey, e.name)
}
async function hy(e, t, n = !1) {
    const r = ht(e)
        , i = lf(r, t)
        , s = await new uy(r, i, n).execute();
    return s && !n && (delete s.user._redirectEventId,
        await r._persistUserIfCurrent(s.user),
        await r._setRedirectUser(null, t)),
        s
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const my = 10 * 60 * 1e3;
class gy {
    constructor(t) {
        this.auth = t,
            this.cachedEventUids = new Set,
            this.consumers = new Set,
            this.queuedRedirectEvent = null,
            this.hasHandledPotentialRedirect = !1,
            this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(t) {
        this.consumers.add(t),
            this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, t) && (this.sendToConsumer(this.queuedRedirectEvent, t),
                this.saveEventToCache(this.queuedRedirectEvent),
                this.queuedRedirectEvent = null)
    }
    unregisterConsumer(t) {
        this.consumers.delete(t)
    }
    onEvent(t) {
        if (this.hasEventBeenHandled(t))
            return !1;
        let n = !1;
        return this.consumers.forEach(r => {
            this.isEventForConsumer(t, r) && (n = !0,
                this.sendToConsumer(t, r),
                this.saveEventToCache(t))
        }
        ),
            this.hasHandledPotentialRedirect || !vy(t) || (this.hasHandledPotentialRedirect = !0,
                n || (this.queuedRedirectEvent = t,
                    n = !0)),
            n
    }
    sendToConsumer(t, n) {
        var r;
        if (t.error && !cf(t)) {
            const i = ((r = t.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
            n.onError(qe(this.auth, i))
        } else
            n.onAuthEvent(t)
    }
    isEventForConsumer(t, n) {
        const r = n.eventId === null || !!t.eventId && t.eventId === n.eventId;
        return n.filter.includes(t.type) && r
    }
    hasEventBeenHandled(t) {
        return Date.now() - this.lastProcessedEventTime >= my && this.cachedEventUids.clear(),
            this.cachedEventUids.has(Uu(t))
    }
    saveEventToCache(t) {
        this.cachedEventUids.add(Uu(t)),
            this.lastProcessedEventTime = Date.now()
    }
}
function Uu(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter(t => t).join("-")
}
function cf({ type: e, error: t }) {
    return e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
}
function vy(e) {
    switch (e.type) {
        case "signInViaRedirect":
        case "linkViaRedirect":
        case "reauthViaRedirect":
            return !0;
        case "unknown":
            return cf(e);
        default:
            return !1
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yy(e, t = {}) {
    return Xe(e, "GET", "/v1/projects", t)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wy = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    , _y = /^https?/;
async function Sy(e) {
    if (e.config.emulator)
        return;
    const { authorizedDomains: t } = await yy(e);
    for (const n of t)
        try {
            if (Ey(n))
                return
        } catch { }
    Le(e, "unauthorized-domain")
}
function Ey(e) {
    const t = Js()
        , { protocol: n, hostname: r } = new URL(t);
    if (e.startsWith("chrome-extension://")) {
        const s = new URL(e);
        return s.hostname === "" && r === "" ? n === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : n === "chrome-extension:" && s.hostname === r
    }
    if (!_y.test(n))
        return !1;
    if (wy.test(e))
        return r === e;
    const i = e.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Iy = new ui(3e4, 6e4);
function zu() {
    const e = Ge().___jsl;
    if (e != null && e.H) {
        for (const t of Object.keys(e.H))
            if (e.H[t].r = e.H[t].r || [],
                e.H[t].L = e.H[t].L || [],
                e.H[t].r = [...e.H[t].L],
                e.CP)
                for (let n = 0; n < e.CP.length; n++)
                    e.CP[n] = null
    }
}
function Cy(e) {
    return new Promise((t, n) => {
        var r, i, o;
        function s() {
            zu(),
                gapi.load("gapi.iframes", {
                    callback: () => {
                        t(gapi.iframes.getContext())
                    }
                    ,
                    ontimeout: () => {
                        zu(),
                            n(qe(e, "network-request-failed"))
                    }
                    ,
                    timeout: Iy.get()
                })
        }
        if (!((i = (r = Ge().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
            t(gapi.iframes.getContext());
        else if (!((o = Ge().gapi) === null || o === void 0) && o.load)
            s();
        else {
            const a = uv("iframefcb");
            return Ge()[a] = () => {
                gapi.load ? s() : n(qe(e, "network-request-failed"))
            }
                ,
                Gd(`${lv()}?onload=${a}`).catch(l => n(l))
        }
    }
    ).catch(t => {
        throw Wi = null,
        t
    }
    )
}
let Wi = null;
function ky(e) {
    return Wi = Wi || Cy(e),
        Wi
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xy = new ui(5e3, 15e3)
    , Py = "__/auth/iframe"
    , Ty = "emulator/auth/iframe"
    , Ny = {
        style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
    }
    , Ry = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function Oy(e) {
    const t = e.config;
    R(t.authDomain, e, "auth-domain-config-required");
    const n = t.emulator ? al(t, Ty) : `https://${e.config.authDomain}/${Py}`
        , r = {
            apiKey: t.apiKey,
            appName: e.name,
            v: li
        }
        , i = Ry.get(e.config.apiHost);
    i && (r.eid = i);
    const o = e._getFrameworks();
    return o.length && (r.fw = o.join(",")),
        `${n}?${ai(r).slice(1)}`
}
async function Ly(e) {
    const t = await ky(e)
        , n = Ge().gapi;
    return R(n, e, "internal-error"),
        t.open({
            where: document.body,
            url: Oy(e),
            messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            attributes: Ny,
            dontclear: !0
        }, r => new Promise(async (i, o) => {
            await r.restyle({
                setHideOnLeave: !1
            });
            const s = qe(e, "network-request-failed")
                , a = Ge().setTimeout(() => {
                    o(s)
                }
                    , xy.get());
            function l() {
                Ge().clearTimeout(a),
                    i(r)
            }
            r.ping(l).then(l, () => {
                o(s)
            }
            )
        }
        ))
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ay = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
}
    , My = 500
    , Dy = 600
    , by = "_blank"
    , jy = "http://localhost";
class Fu {
    constructor(t) {
        this.window = t,
            this.associatedEvent = null
    }
    close() {
        if (this.window)
            try {
                this.window.close()
            } catch { }
    }
}
function Uy(e, t, n, r = My, i = Dy) {
    const o = Math.max((window.screen.availHeight - i) / 2, 0).toString()
        , s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let a = "";
    const l = Object.assign(Object.assign({}, Ay), {
        width: r.toString(),
        height: i.toString(),
        top: o,
        left: s
    })
        , u = ue().toLowerCase();
    n && (a = Bd(u) ? by : n),
        Fd(u) && (t = t || jy,
            l.scrollbars = "yes");
    const c = Object.entries(l).reduce((h, [v, _]) => `${h}${v}=${_},`, "");
    if (Xg(u) && a !== "_self")
        return zy(t || "", a),
            new Fu(null);
    const d = window.open(t || "", a, c);
    R(d, e, "popup-blocked");
    try {
        d.focus()
    } catch { }
    return new Fu(d)
}
function zy(e, t) {
    const n = document.createElement("a");
    n.href = e,
        n.target = t;
    const r = document.createEvent("MouseEvent");
    r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
        n.dispatchEvent(r)
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fy = "__/auth/handler"
    , By = "emulator/auth/handler"
    , $y = encodeURIComponent("fac");
async function Bu(e, t, n, r, i, o) {
    R(e.config.authDomain, e, "auth-domain-config-required"),
        R(e.config.apiKey, e, "invalid-api-key");
    const s = {
        apiKey: e.config.apiKey,
        appName: e.name,
        authType: n,
        redirectUrl: r,
        v: li,
        eventId: i
    };
    if (t instanceof fl) {
        t.setDefaultLanguage(e.languageCode),
            s.providerId = t.providerId || "",
            wm(t.getCustomParameters()) || (s.customParameters = JSON.stringify(t.getCustomParameters()));
        for (const [c, d] of Object.entries(o || {}))
            s[c] = d
    }
    if (t instanceof di) {
        const c = t.getScopes().filter(d => d !== "");
        c.length > 0 && (s.scopes = c.join(","))
    }
    e.tenantId && (s.tid = e.tenantId);
    const a = s;
    for (const c of Object.keys(a))
        a[c] === void 0 && delete a[c];
    const l = await e._getAppCheckToken()
        , u = l ? `#${$y}=${encodeURIComponent(l)}` : "";
    return `${Vy(e)}?${ai(a).slice(1)}${u}`
}
function Vy({ config: e }) {
    return e.emulator ? al(e, By) : `https://${e.authDomain}/${Fy}`
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ws = "webStorageSupport";
class Wy {
    constructor() {
        this.eventManagers = {},
            this.iframes = {},
            this.originValidationPromises = {},
            this._redirectPersistence = nf,
            this._completeRedirectFn = hy,
            this._overrideRedirectResult = dy
    }
    async _openPopup(t, n, r, i) {
        var o;
        lt((o = this.eventManagers[t._key()]) === null || o === void 0 ? void 0 : o.manager, "_initialize() not called before _openPopup()");
        const s = await Bu(t, n, r, Js(), i);
        return Uy(t, s, hl())
    }
    async _openRedirect(t, n, r, i) {
        await this._originValidation(t);
        const o = await Bu(t, n, r, Js(), i);
        return qv(o),
            new Promise(() => { }
            )
    }
    _initialize(t) {
        const n = t._key();
        if (this.eventManagers[n]) {
            const { manager: i, promise: o } = this.eventManagers[n];
            return i ? Promise.resolve(i) : (lt(o, "If manager is not set, promise should be"),
                o)
        }
        const r = this.initAndGetManager(t);
        return this.eventManagers[n] = {
            promise: r
        },
            r.catch(() => {
                delete this.eventManagers[n]
            }
            ),
            r
    }
    async initAndGetManager(t) {
        const n = await Ly(t)
            , r = new gy(t);
        return n.register("authEvent", i => (R(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
        {
            status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
            this.eventManagers[t._key()] = {
                manager: r
            },
            this.iframes[t._key()] = n,
            r
    }
    _isIframeWebStorageSupported(t, n) {
        this.iframes[t._key()].send(ws, {
            type: ws
        }, i => {
            var o;
            const s = (o = i == null ? void 0 : i[0]) === null || o === void 0 ? void 0 : o[ws];
            s !== void 0 && n(!!s),
                Le(t, "internal-error")
        }
            , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(t) {
        const n = t._key();
        return this.originValidationPromises[n] || (this.originValidationPromises[n] = Sy(t)),
            this.originValidationPromises[n]
    }
    get _shouldInitProactively() {
        return Kd() || ul() || Bo()
    }
}
const Hy = Wy;
var $u = "@firebase/auth"
    , Vu = "1.6.0";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ky {
    constructor(t) {
        this.auth = t,
            this.internalListeners = new Map
    }
    getUid() {
        var t;
        return this.assertAuthConfigured(),
            ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) || null
    }
    async getToken(t) {
        return this.assertAuthConfigured(),
            await this.auth._initializationPromise,
            this.auth.currentUser ? {
                accessToken: await this.auth.currentUser.getIdToken(t)
            } : null
    }
    addAuthTokenListener(t) {
        if (this.assertAuthConfigured(),
            this.internalListeners.has(t))
            return;
        const n = this.auth.onIdTokenChanged(r => {
            t((r == null ? void 0 : r.stsTokenManager.accessToken) || null)
        }
        );
        this.internalListeners.set(t, n),
            this.updateProactiveRefresh()
    }
    removeAuthTokenListener(t) {
        this.assertAuthConfigured();
        const n = this.internalListeners.get(t);
        n && (this.internalListeners.delete(t),
            n(),
            this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        R(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qy(e) {
    switch (e) {
        case "Node":
            return "node";
        case "ReactNative":
            return "rn";
        case "Worker":
            return "webworker";
        case "Cordova":
            return "cordova";
        case "WebExtension":
            return "web-extension";
        default:
            return
    }
}
function Gy(e) {
    Dr(new Kn("auth", (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate()
            , i = t.getProvider("heartbeat")
            , o = t.getProvider("app-check-internal")
            , { apiKey: s, authDomain: a } = r.options;
        R(s && !s.includes(":"), "invalid-api-key", {
            appName: r.name
        });
        const l = {
            apiKey: s,
            authDomain: a,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: qd(e)
        }
            , u = new ov(r, i, o, l);
        return hv(u, n),
            u
    }
        , "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t, n, r) => {
            t.getProvider("auth-internal").initialize()
        }
        )),
        Dr(new Kn("auth-internal", t => {
            const n = ht(t.getProvider("auth").getImmediate());
            return (r => new Ky(r))(n)
        }
            , "PRIVATE").setInstantiationMode("EXPLICIT")),
        jn($u, Vu, qy(e)),
        jn($u, Vu, "esm2017")
}
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qy = 5 * 60
    , Yy = Cd("authIdTokenMaxAge") || Qy;
let Wu = null;
const Jy = e => async t => {
    const n = t && await t.getIdTokenResult()
        , r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
    if (r && r > Yy)
        return;
    const i = n == null ? void 0 : n.token;
    Wu !== i && (Wu = i,
        await fetch(e, {
            method: i ? "POST" : "DELETE",
            headers: i ? {
                Authorization: `Bearer ${i}`
            } : {}
        }))
}
    ;
function Xy(e = wg()) {
    const t = Td(e, "auth");
    if (t.isInitialized())
        return t.getImmediate();
    const n = pv(e, {
        popupRedirectResolver: Hy,
        persistence: [ny, ef, nf]
    })
        , r = Cd("authTokenSyncURL");
    if (r) {
        const o = Jy(r);
        zv(n, o, () => o(n.currentUser)),
            Uv(n, s => o(s))
    }
    const i = lm("auth");
    return i && mv(n, `http://${i}`),
        n
}
function Zy() {
    var e, t;
    return (t = (e = document.getElementsByTagName("head")) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : document
}
sv({
    loadJS(e) {
        return new Promise((t, n) => {
            const r = document.createElement("script");
            r.setAttribute("src", e),
                r.onload = t,
                r.onerror = i => {
                    const o = qe("internal-error");
                    o.customData = i,
                        n(o)
                }
                ,
                r.type = "text/javascript",
                r.charset = "UTF-8",
                Zy().appendChild(r)
        }
        )
    },
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
Gy("Browser");
var e0 = "firebase"
    , t0 = "10.8.0";
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
jn(e0, t0, "app");
const n0 = Nd({
    apiKey: "AIzaSyBAPn3lBm5P8btiahsEhP8pf_wmnsBM_MI",
    authDomain: "fallasenplaca.firebaseapp.com",
    projectId: "fallasenplaca",
    storageBucket: "fallasenplaca.firebasestorage.app",
    appId: "580763455141",
    messagingSenderId: "1:580763455141:web:0a685d38783a5acfdf874c"
})
    , mt = Xy(n0);
jv(mt, ef);
const r0 = async ({ email: e, password: t }) => await bv(mt, e, t)
    , i0 = async ({ email: e, password: t }) => await Dv(mt, e, t)
    , o0 = async () => {
        await Bv(mt)
    }
    , s0 = async ({ email: e }) => {
        await Av(mt, e)
    }
    , a0 = async (e, t) => {
        if (!(!e && !t))
            return await Mv(mt, e, t)
    }
    ;
var df = {
    exports: {}
}
    , xe = {}
    , ff = {
        exports: {}
    }
    , pf = {};
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function (e) {
    function t(x, O) {
        var L = x.length;
        x.push(O);
        e: for (; 0 < L;) {
            var q = L - 1 >>> 1
                , Z = x[q];
            if (0 < i(Z, O))
                x[q] = O,
                    x[L] = Z,
                    L = q;
            else
                break e
        }
    }
    function n(x) {
        return x.length === 0 ? null : x[0]
    }
    function r(x) {
        if (x.length === 0)
            return null;
        var O = x[0]
            , L = x.pop();
        if (L !== O) {
            x[0] = L;
            e: for (var q = 0, Z = x.length, yi = Z >>> 1; q < yi;) {
                var Xt = 2 * (q + 1) - 1
                    , ds = x[Xt]
                    , Zt = Xt + 1
                    , wi = x[Zt];
                if (0 > i(ds, L))
                    Zt < Z && 0 > i(wi, ds) ? (x[q] = wi,
                        x[Zt] = L,
                        q = Zt) : (x[q] = ds,
                            x[Xt] = L,
                            q = Xt);
                else if (Zt < Z && 0 > i(wi, L))
                    x[q] = wi,
                        x[Zt] = L,
                        q = Zt;
                else
                    break e
            }
        }
        return O
    }
    function i(x, O) {
        var L = x.sortIndex - O.sortIndex;
        return L !== 0 ? L : x.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var s = Date
            , a = s.now();
        e.unstable_now = function () {
            return s.now() - a
        }
    }
    var l = []
        , u = []
        , c = 1
        , d = null
        , h = 3
        , v = !1
        , _ = !1
        , S = !1
        , C = typeof setTimeout == "function" ? setTimeout : null
        , p = typeof clearTimeout == "function" ? clearTimeout : null
        , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(x) {
        for (var O = n(u); O !== null;) {
            if (O.callback === null)
                r(u);
            else if (O.startTime <= x)
                r(u),
                    O.sortIndex = O.expirationTime,
                    t(l, O);
            else
                break;
            O = n(u)
        }
    }
    function w(x) {
        if (S = !1,
            m(x),
            !_)
            if (n(l) !== null)
                _ = !0,
                    us(I);
            else {
                var O = n(u);
                O !== null && cs(w, O.startTime - x)
            }
    }
    function I(x, O) {
        _ = !1,
            S && (S = !1,
                p(N),
                N = -1),
            v = !0;
        var L = h;
        try {
            for (m(O),
                d = n(l); d !== null && (!(d.expirationTime > O) || x && !De());) {
                var q = d.callback;
                if (typeof q == "function") {
                    d.callback = null,
                        h = d.priorityLevel;
                    var Z = q(d.expirationTime <= O);
                    O = e.unstable_now(),
                        typeof Z == "function" ? d.callback = Z : d === n(l) && r(l),
                        m(O)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var yi = !0;
            else {
                var Xt = n(u);
                Xt !== null && cs(w, Xt.startTime - O),
                    yi = !1
            }
            return yi
        } finally {
            d = null,
                h = L,
                v = !1
        }
    }
    var P = !1
        , T = null
        , N = -1
        , z = 5
        , A = -1;
    function De() {
        return !(e.unstable_now() - A < z)
    }
    function ur() {
        if (T !== null) {
            var x = e.unstable_now();
            A = x;
            var O = !0;
            try {
                O = T(!0, x)
            } finally {
                O ? cr() : (P = !1,
                    T = null)
            }
        } else
            P = !1
    }
    var cr;
    if (typeof f == "function")
        cr = function () {
            f(ur)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var hu = new MessageChannel
            , Rh = hu.port2;
        hu.port1.onmessage = ur,
            cr = function () {
                Rh.postMessage(null)
            }
    } else
        cr = function () {
            C(ur, 0)
        }
            ;
    function us(x) {
        T = x,
            P || (P = !0,
                cr())
    }
    function cs(x, O) {
        N = C(function () {
            x(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (x) {
            x.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            _ || v || (_ = !0,
                us(I))
        }
        ,
        e.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < x ? Math.floor(1e3 / x) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return h
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(l)
        }
        ,
        e.unstable_next = function (x) {
            switch (h) {
                case 1:
                case 2:
                case 3:
                    var O = 3;
                    break;
                default:
                    O = h
            }
            var L = h;
            h = O;
            try {
                return x()
            } finally {
                h = L
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (x, O) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    x = 3
            }
            var L = h;
            h = x;
            try {
                return O()
            } finally {
                h = L
            }
        }
        ,
        e.unstable_scheduleCallback = function (x, O, L) {
            var q = e.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay,
                L = typeof L == "number" && 0 < L ? q + L : q) : L = q,
            x) {
                case 1:
                    var Z = -1;
                    break;
                case 2:
                    Z = 250;
                    break;
                case 5:
                    Z = 1073741823;
                    break;
                case 4:
                    Z = 1e4;
                    break;
                default:
                    Z = 5e3
            }
            return Z = L + Z,
                x = {
                    id: c++,
                    callback: O,
                    priorityLevel: x,
                    startTime: L,
                    expirationTime: Z,
                    sortIndex: -1
                },
                L > q ? (x.sortIndex = L,
                    t(u, x),
                    n(l) === null && x === n(u) && (S ? (p(N),
                        N = -1) : S = !0,
                        cs(w, L - q))) : (x.sortIndex = Z,
                            t(l, x),
                            _ || v || (_ = !0,
                                us(I))),
                x
        }
        ,
        e.unstable_shouldYield = De,
        e.unstable_wrapCallback = function (x) {
            var O = h;
            return function () {
                var L = h;
                h = O;
                try {
                    return x.apply(this, arguments)
                } finally {
                    h = L
                }
            }
        }
}
)(pf);
ff.exports = pf;
var l0 = ff.exports;
/**
 * @license
 * Copyright 2025 Novacell Repairs by Lucas Tuillier
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hf = y
    , ke = l0;
function E(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var mf = new Set
    , Fr = {};
function _n(e, t) {
    qn(e, t),
        qn(e + "Capture", t)
}
function qn(e, t) {
    for (Fr[e] = t,
        e = 0; e < t.length; e++)
        mf.add(t[e])
}
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , Zs = Object.prototype.hasOwnProperty
    , u0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , Hu = {}
    , Ku = {};
function c0(e) {
    return Zs.call(Ku, e) ? !0 : Zs.call(Hu, e) ? !1 : u0.test(e) ? Ku[e] = !0 : (Hu[e] = !0,
        !1)
}
function d0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function f0(e, t, n, r) {
    if (t === null || typeof t > "u" || d0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function he(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = o,
        this.removeEmptyString = s
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    oe[e] = new he(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    oe[t] = new he(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    oe[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    oe[e] = new he(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    oe[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    oe[e] = new he(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    oe[e] = new he(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    oe[e] = new he(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    oe[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var gl = /[\-:]([a-z])/g;
function vl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(gl, vl);
    oe[t] = new he(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(gl, vl);
    oe[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(gl, vl);
    oe[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    oe[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
oe.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    oe[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function yl(e, t, n, r) {
    var i = oe.hasOwnProperty(t) ? oe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (f0(t, n, i, r) && (n = null),
        r || i === null ? c0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
            r = i.attributeNamespace,
            n === null ? e.removeAttribute(t) : (i = i.type,
                n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var gt = hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Ei = Symbol.for("react.element")
    , kn = Symbol.for("react.portal")
    , xn = Symbol.for("react.fragment")
    , wl = Symbol.for("react.strict_mode")
    , ea = Symbol.for("react.profiler")
    , gf = Symbol.for("react.provider")
    , vf = Symbol.for("react.context")
    , _l = Symbol.for("react.forward_ref")
    , ta = Symbol.for("react.suspense")
    , na = Symbol.for("react.suspense_list")
    , Sl = Symbol.for("react.memo")
    , wt = Symbol.for("react.lazy")
    , yf = Symbol.for("react.offscreen")
    , qu = Symbol.iterator;
function dr(e) {
    return e === null || typeof e != "object" ? null : (e = qu && e[qu] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var H = Object.assign, _s;
function Sr(e) {
    if (_s === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            _s = t && t[1] || ""
        }
    return `
` + _s + e
}
var Ss = !1;
function Es(e, t) {
    if (!e || Ss)
        return "";
    Ss = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];)
                a--;
            for (; 1 <= s && 0 <= a; s--,
                a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                                a--,
                                0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                    l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Ss = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Sr(e) : ""
}
function p0(e) {
    switch (e.tag) {
        case 5:
            return Sr(e.type);
        case 16:
            return Sr("Lazy");
        case 13:
            return Sr("Suspense");
        case 19:
            return Sr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Es(e.type, !1),
                e;
        case 11:
            return e = Es(e.type.render, !1),
                e;
        case 1:
            return e = Es(e.type, !0),
                e;
        default:
            return ""
    }
}
function ra(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case xn:
            return "Fragment";
        case kn:
            return "Portal";
        case ea:
            return "Profiler";
        case wl:
            return "StrictMode";
        case ta:
            return "Suspense";
        case na:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case vf:
                return (e.displayName || "Context") + ".Consumer";
            case gf:
                return (e._context.displayName || "Context") + ".Provider";
            case _l:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case Sl:
                return t = e.displayName || null,
                    t !== null ? t : ra(e.type) || "Memo";
            case wt:
                t = e._payload,
                    e = e._init;
                try {
                    return ra(e(t))
                } catch { }
        }
    return null
}
function h0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ra(t);
        case 8:
            return t === wl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function Bt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function wf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function m0(e) {
    var t = wf(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
            , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (s) {
                r = "" + s,
                    o.call(this, s)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (s) {
                r = "" + s
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function Ii(e) {
    e._valueTracker || (e._valueTracker = m0(e))
}
function _f(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = wf(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function po(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ia(e, t) {
    var n = t.checked;
    return H({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Gu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Bt(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function Sf(e, t) {
    t = t.checked,
        t != null && yl(e, "checked", t, !1)
}
function oa(e, t) {
    Sf(e, t);
    var n = Bt(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? sa(e, t.type, n) : t.hasOwnProperty("defaultValue") && sa(e, t.type, Bt(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Qu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function sa(e, t, n) {
    (t !== "number" || po(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Er = Array.isArray;
function Fn(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Bt(n),
            t = null,
            i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                    r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function aa(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(E(91));
    return H({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Yu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(E(92));
            if (Er(n)) {
                if (1 < n.length)
                    throw Error(E(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: Bt(n)
    }
}
function Ef(e, t) {
    var n = Bt(t.value)
        , r = Bt(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Ju(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function If(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function la(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? If(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ci, Cf = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (Ci = Ci || document.createElement("div"),
            Ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ci.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function Br(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , g0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
    g0.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            xr[t] = xr[e]
    })
});
function kf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px"
}
function xf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , i = kf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : e[n] = i
        }
}
var v0 = H({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ua(e, t) {
    if (t) {
        if (v0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(E(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(E(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(E(62))
    }
}
function ca(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var da = null;
function El(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var fa = null
    , Bn = null
    , $n = null;
function Xu(e) {
    if (e = mi(e)) {
        if (typeof fa != "function")
            throw Error(E(280));
        var t = e.stateNode;
        t && (t = Qo(t),
            fa(e.stateNode, e.type, t))
    }
}
function Pf(e) {
    Bn ? $n ? $n.push(e) : $n = [e] : Bn = e
}
function Tf() {
    if (Bn) {
        var e = Bn
            , t = $n;
        if ($n = Bn = null,
            Xu(e),
            t)
            for (e = 0; e < t.length; e++)
                Xu(t[e])
    }
}
function Nf(e, t) {
    return e(t)
}
function Rf() { }
var Is = !1;
function Of(e, t, n) {
    if (Is)
        return e(t, n);
    Is = !0;
    try {
        return Nf(e, t, n)
    } finally {
        Is = !1,
            (Bn !== null || $n !== null) && (Rf(),
                Tf())
    }
}
function $r(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Qo(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(E(231, t, typeof n));
    return n
}
var pa = !1;
if (ut)
    try {
        var fr = {};
        Object.defineProperty(fr, "passive", {
            get: function () {
                pa = !0
            }
        }),
            window.addEventListener("test", fr, fr),
            window.removeEventListener("test", fr, fr)
    } catch {
        pa = !1
    }
function y0(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Pr = !1
    , ho = null
    , mo = !1
    , ha = null
    , w0 = {
        onError: function (e) {
            Pr = !0,
                ho = e
        }
    };
function _0(e, t, n, r, i, o, s, a, l) {
    Pr = !1,
        ho = null,
        y0.apply(w0, arguments)
}
function S0(e, t, n, r, i, o, s, a, l) {
    if (_0.apply(this, arguments),
        Pr) {
        if (Pr) {
            var u = ho;
            Pr = !1,
                ho = null
        } else
            throw Error(E(198));
        mo || (mo = !0,
            ha = u)
    }
}
function Sn(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Lf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function Zu(e) {
    if (Sn(e) !== e)
        throw Error(E(188))
}
function E0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Sn(e),
            t === null)
            throw Error(E(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n)
                    return Zu(i),
                        e;
                if (o === r)
                    return Zu(i),
                        t;
                o = o.sibling
            }
            throw Error(E(188))
        }
        if (n.return !== r.return)
            n = i,
                r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0,
                        n = i,
                        r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                        r = i,
                        n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0,
                            n = o,
                            r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                            r = o,
                            n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(E(189))
            }
        }
        if (n.alternate !== r)
            throw Error(E(190))
    }
    if (n.tag !== 3)
        throw Error(E(188));
    return n.stateNode.current === n ? e : t
}
function Af(e) {
    return e = E0(e),
        e !== null ? Mf(e) : null
}
function Mf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = Mf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Df = ke.unstable_scheduleCallback
    , ec = ke.unstable_cancelCallback
    , I0 = ke.unstable_shouldYield
    , C0 = ke.unstable_requestPaint
    , G = ke.unstable_now
    , k0 = ke.unstable_getCurrentPriorityLevel
    , Il = ke.unstable_ImmediatePriority
    , bf = ke.unstable_UserBlockingPriority
    , go = ke.unstable_NormalPriority
    , x0 = ke.unstable_LowPriority
    , jf = ke.unstable_IdlePriority
    , Ho = null
    , Qe = null;
function P0(e) {
    if (Qe && typeof Qe.onCommitFiberRoot == "function")
        try {
            Qe.onCommitFiberRoot(Ho, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var Fe = Math.clz32 ? Math.clz32 : R0
    , T0 = Math.log
    , N0 = Math.LN2;
function R0(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (T0(e) / N0 | 0) | 0
}
var ki = 64
    , xi = 4194304;
function Ir(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function vo(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , i = e.suspendedLanes
        , o = e.pingedLanes
        , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Ir(a) : (o &= s,
            o !== 0 && (r = Ir(o)))
    } else
        s = n & ~i,
            s !== 0 ? r = Ir(s) : o !== 0 && (r = Ir(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
        o = t & -t,
        i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - Fe(t),
                i = 1 << n,
                r |= e[n],
                t &= ~i;
    return r
}
function O0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}
function L0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - Fe(o)
            , a = 1 << s
            , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = O0(a, t)) : l <= t && (e.expiredLanes |= a),
            o &= ~a
    }
}
function ma(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Uf() {
    var e = ki;
    return ki <<= 1,
        !(ki & 4194240) && (ki = 64),
        e
}
function Cs(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function pi(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Fe(t),
        e[t] = n
}
function A0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Fe(n)
            , o = 1 << i;
        t[i] = 0,
            r[i] = -1,
            e[i] = -1,
            n &= ~o
    }
}
function Cl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Fe(n)
            , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
            n &= ~i
    }
}
var b = 0;
function zf(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ff, kl, Bf, $f, Vf, ga = !1, Pi = [], Lt = null, At = null, Mt = null, Vr = new Map, Wr = new Map, Ct = [], M0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function tc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Lt = null;
            break;
        case "dragenter":
        case "dragleave":
            At = null;
            break;
        case "mouseover":
        case "mouseout":
            Mt = null;
            break;
        case "pointerover":
        case "pointerout":
            Vr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Wr.delete(t.pointerId)
    }
}
function pr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
        t !== null && (t = mi(t),
            t !== null && kl(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            i !== null && t.indexOf(i) === -1 && t.push(i),
            e)
}
function D0(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Lt = pr(Lt, e, t, n, r, i),
                !0;
        case "dragenter":
            return At = pr(At, e, t, n, r, i),
                !0;
        case "mouseover":
            return Mt = pr(Mt, e, t, n, r, i),
                !0;
        case "pointerover":
            var o = i.pointerId;
            return Vr.set(o, pr(Vr.get(o) || null, e, t, n, r, i)),
                !0;
        case "gotpointercapture":
            return o = i.pointerId,
                Wr.set(o, pr(Wr.get(o) || null, e, t, n, r, i)),
                !0
    }
    return !1
}
function Wf(e) {
    var t = sn(e.target);
    if (t !== null) {
        var n = Sn(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = Lf(n),
                    t !== null) {
                    e.blockedOn = t,
                        Vf(e.priority, function () {
                            Bf(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Hi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            da = r,
                n.target.dispatchEvent(r),
                da = null
        } else
            return t = mi(n),
                t !== null && kl(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function nc(e, t, n) {
    Hi(e) && n.delete(t)
}
function b0() {
    ga = !1,
        Lt !== null && Hi(Lt) && (Lt = null),
        At !== null && Hi(At) && (At = null),
        Mt !== null && Hi(Mt) && (Mt = null),
        Vr.forEach(nc),
        Wr.forEach(nc)
}
function hr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        ga || (ga = !0,
            ke.unstable_scheduleCallback(ke.unstable_NormalPriority, b0)))
}
function Hr(e) {
    function t(i) {
        return hr(i, e)
    }
    if (0 < Pi.length) {
        hr(Pi[0], e);
        for (var n = 1; n < Pi.length; n++) {
            var r = Pi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Lt !== null && hr(Lt, e),
        At !== null && hr(At, e),
        Mt !== null && hr(Mt, e),
        Vr.forEach(t),
        Wr.forEach(t),
        n = 0; n < Ct.length; n++)
        r = Ct[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ct.length && (n = Ct[0],
        n.blockedOn === null);)
        Wf(n),
            n.blockedOn === null && Ct.shift()
}
var Vn = gt.ReactCurrentBatchConfig
    , yo = !0;
function j0(e, t, n, r) {
    var i = b
        , o = Vn.transition;
    Vn.transition = null;
    try {
        b = 1,
            xl(e, t, n, r)
    } finally {
        b = i,
            Vn.transition = o
    }
}
function U0(e, t, n, r) {
    var i = b
        , o = Vn.transition;
    Vn.transition = null;
    try {
        b = 4,
            xl(e, t, n, r)
    } finally {
        b = i,
            Vn.transition = o
    }
}
function xl(e, t, n, r) {
    if (yo) {
        var i = va(e, t, n, r);
        if (i === null)
            Ms(e, t, r, wo, n),
                tc(e, r);
        else if (D0(i, e, t, n, r))
            r.stopPropagation();
        else if (tc(e, r),
            t & 4 && -1 < M0.indexOf(e)) {
            for (; i !== null;) {
                var o = mi(i);
                if (o !== null && Ff(o),
                    o = va(e, t, n, r),
                    o === null && Ms(e, t, r, wo, n),
                    o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Ms(e, t, r, null, n)
    }
}
var wo = null;
function va(e, t, n, r) {
    if (wo = null,
        e = El(r),
        e = sn(e),
        e !== null)
        if (t = Sn(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = Lf(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return wo = e,
        null
}
function Hf(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (k0()) {
                case Il:
                    return 1;
                case bf:
                    return 4;
                case go:
                case x0:
                    return 16;
                case jf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Pt = null
    , Pl = null
    , Ki = null;
function Kf() {
    if (Ki)
        return Ki;
    var e, t = Pl, n = t.length, r, i = "value" in Pt ? Pt.value : Pt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Ki = i.slice(e, 1 < r ? 1 - r : void 0)
}
function qi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function Ti() {
    return !0
}
function rc() {
    return !1
}
function Pe(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
            this._targetInst = i,
            this.type = r,
            this.nativeEvent = o,
            this.target = s,
            this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ti : rc,
            this.isPropagationStopped = rc,
            this
    }
    return H(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Ti)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Ti)
        },
        persist: function () { },
        isPersistent: Ti
    }),
        t
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Tl = Pe(rr), hi = H({}, rr, {
    view: 0,
    detail: 0
}), z0 = Pe(hi), ks, xs, mr, Ko = H({}, hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (ks = e.screenX - mr.screenX,
            xs = e.screenY - mr.screenY) : xs = ks = 0,
            mr = e),
            ks)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : xs
    }
}), ic = Pe(Ko), F0 = H({}, Ko, {
    dataTransfer: 0
}), B0 = Pe(F0), $0 = H({}, hi, {
    relatedTarget: 0
}), Ps = Pe($0), V0 = H({}, rr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), W0 = Pe(V0), H0 = H({}, rr, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), K0 = Pe(H0), q0 = H({}, rr, {
    data: 0
}), oc = Pe(q0), G0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Q0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Y0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function J0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Y0[e]) ? !!t[e] : !1
}
function Nl() {
    return J0
}
var X0 = H({}, hi, {
    key: function (e) {
        if (e.key) {
            var t = G0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = qi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Q0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nl,
    charCode: function (e) {
        return e.type === "keypress" ? qi(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , Z0 = Pe(X0)
    , e1 = H({}, Ko, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
    , sc = Pe(e1)
    , t1 = H({}, hi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Nl
    })
    , n1 = Pe(t1)
    , r1 = H({}, rr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , i1 = Pe(r1)
    , o1 = H({}, Ko, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , s1 = Pe(o1)
    , a1 = [9, 13, 27, 32]
    , Rl = ut && "CompositionEvent" in window
    , Tr = null;
ut && "documentMode" in document && (Tr = document.documentMode);
var l1 = ut && "TextEvent" in window && !Tr
    , qf = ut && (!Rl || Tr && 8 < Tr && 11 >= Tr)
    , ac = " "
    , lc = !1;
function Gf(e, t) {
    switch (e) {
        case "keyup":
            return a1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Qf(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var Pn = !1;
function u1(e, t) {
    switch (e) {
        case "compositionend":
            return Qf(t);
        case "keypress":
            return t.which !== 32 ? null : (lc = !0,
                ac);
        case "textInput":
            return e = t.data,
                e === ac && lc ? null : e;
        default:
            return null
    }
}
function c1(e, t) {
    if (Pn)
        return e === "compositionend" || !Rl && Gf(e, t) ? (e = Kf(),
            Ki = Pl = Pt = null,
            Pn = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return qf && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var d1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!d1[e.type] : t === "textarea"
}
function Yf(e, t, n, r) {
    Pf(r),
        t = _o(t, "onChange"),
        0 < t.length && (n = new Tl("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var Nr = null
    , Kr = null;
function f1(e) {
    ap(e, 0)
}
function qo(e) {
    var t = Rn(e);
    if (_f(t))
        return e
}
function p1(e, t) {
    if (e === "change")
        return t
}
var Jf = !1;
if (ut) {
    var Ts;
    if (ut) {
        var Ns = "oninput" in document;
        if (!Ns) {
            var cc = document.createElement("div");
            cc.setAttribute("oninput", "return;"),
                Ns = typeof cc.oninput == "function"
        }
        Ts = Ns
    } else
        Ts = !1;
    Jf = Ts && (!document.documentMode || 9 < document.documentMode)
}
function dc() {
    Nr && (Nr.detachEvent("onpropertychange", Xf),
        Kr = Nr = null)
}
function Xf(e) {
    if (e.propertyName === "value" && qo(Kr)) {
        var t = [];
        Yf(t, Kr, e, El(e)),
            Of(f1, t)
    }
}
function h1(e, t, n) {
    e === "focusin" ? (dc(),
        Nr = t,
        Kr = n,
        Nr.attachEvent("onpropertychange", Xf)) : e === "focusout" && dc()
}
function m1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return qo(Kr)
}
function g1(e, t) {
    if (e === "click")
        return qo(t)
}
function v1(e, t) {
    if (e === "input" || e === "change")
        return qo(t)
}
function y1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var $e = typeof Object.is == "function" ? Object.is : y1;
function qr(e, t) {
    if ($e(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Zs.call(t, i) || !$e(e[i], t[i]))
            return !1
    }
    return !0
}
function fc(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function pc(e, t) {
    var n = fc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = fc(n)
    }
}
function Zf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function ep() {
    for (var e = window, t = po(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = po(e.document)
    }
    return t
}
function Ol(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function w1(e) {
    var t = ep()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zf(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ol(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                    , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                    !e.extend && o > r && (i = r,
                        r = o,
                        o = i),
                    i = pc(n, o);
                var s = pc(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r ? (e.addRange(t),
                        e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var _1 = ut && "documentMode" in document && 11 >= document.documentMode
    , Tn = null
    , ya = null
    , Rr = null
    , wa = !1;
function hc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wa || Tn == null || Tn !== po(r) || (r = Tn,
        "selectionStart" in r && Ol(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        Rr && qr(Rr, r) || (Rr = r,
            r = _o(ya, "onSelect"),
            0 < r.length && (t = new Tl("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = Tn)))
}
function Ni(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var Nn = {
    animationend: Ni("Animation", "AnimationEnd"),
    animationiteration: Ni("Animation", "AnimationIteration"),
    animationstart: Ni("Animation", "AnimationStart"),
    transitionend: Ni("Transition", "TransitionEnd")
}
    , Rs = {}
    , tp = {};
ut && (tp = document.createElement("div").style,
    "AnimationEvent" in window || (delete Nn.animationend.animation,
        delete Nn.animationiteration.animation,
        delete Nn.animationstart.animation),
    "TransitionEvent" in window || delete Nn.transitionend.transition);
function Go(e) {
    if (Rs[e])
        return Rs[e];
    if (!Nn[e])
        return e;
    var t = Nn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in tp)
            return Rs[e] = t[n];
    return e
}
var np = Go("animationend")
    , rp = Go("animationiteration")
    , ip = Go("animationstart")
    , op = Go("transitionend")
    , sp = new Map
    , mc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ht(e, t) {
    sp.set(e, t),
        _n(t, [e])
}
for (var Os = 0; Os < mc.length; Os++) {
    var Ls = mc[Os]
        , S1 = Ls.toLowerCase()
        , E1 = Ls[0].toUpperCase() + Ls.slice(1);
    Ht(S1, "on" + E1)
}
Ht(np, "onAnimationEnd");
Ht(rp, "onAnimationIteration");
Ht(ip, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(op, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
_n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , I1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function gc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        S0(r, t, void 0, e),
        e.currentTarget = null
}
function ap(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                        , l = a.instance
                        , u = a.currentTarget;
                    if (a = a.listener,
                        l !== o && i.isPropagationStopped())
                        break e;
                    gc(i, a, u),
                        o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                        l = a.instance,
                        u = a.currentTarget,
                        a = a.listener,
                        l !== o && i.isPropagationStopped())
                        break e;
                    gc(i, a, u),
                        o = l
                }
        }
    }
    if (mo)
        throw e = ha,
        mo = !1,
        ha = null,
        e
}
function F(e, t) {
    var n = t[Ca];
    n === void 0 && (n = t[Ca] = new Set);
    var r = e + "__bubble";
    n.has(r) || (lp(t, e, 2, !1),
        n.add(r))
}
function As(e, t, n) {
    var r = 0;
    t && (r |= 4),
        lp(n, e, r, t)
}
var Ri = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
    if (!e[Ri]) {
        e[Ri] = !0,
            mf.forEach(function (n) {
                n !== "selectionchange" && (I1.has(n) || As(n, !1, e),
                    As(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ri] || (t[Ri] = !0,
            As("selectionchange", !1, t))
    }
}
function lp(e, t, n, r) {
    switch (Hf(t)) {
        case 1:
            var i = j0;
            break;
        case 4:
            i = U0;
            break;
        default:
            i = xl
    }
    n = i.bind(null, t, n, e),
        i = void 0,
        !pa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
        r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
}
function Ms(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null;) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                            l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null;) {
                    if (s = sn(a),
                        s === null)
                        return;
                    if (l = s.tag,
                        l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Of(function () {
        var u = o
            , c = El(n)
            , d = [];
        e: {
            var h = sp.get(e);
            if (h !== void 0) {
                var v = Tl
                    , _ = e;
                switch (e) {
                    case "keypress":
                        if (qi(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        v = Z0;
                        break;
                    case "focusin":
                        _ = "focus",
                            v = Ps;
                        break;
                    case "focusout":
                        _ = "blur",
                            v = Ps;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = Ps;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = ic;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = B0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = n1;
                        break;
                    case np:
                    case rp:
                    case ip:
                        v = W0;
                        break;
                    case op:
                        v = i1;
                        break;
                    case "scroll":
                        v = z0;
                        break;
                    case "wheel":
                        v = s1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = K0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = sc
                }
                var S = (t & 4) !== 0
                    , C = !S && e === "scroll"
                    , p = S ? h !== null ? h + "Capture" : null : h;
                S = [];
                for (var f = u, m; f !== null;) {
                    m = f;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w,
                        p !== null && (w = $r(f, p),
                            w != null && S.push(Qr(f, w, m)))),
                        C)
                        break;
                    f = f.return
                }
                0 < S.length && (h = new v(h, _, null, n, c),
                    d.push({
                        event: h,
                        listeners: S
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                    v = e === "mouseout" || e === "pointerout",
                    h && n !== da && (_ = n.relatedTarget || n.fromElement) && (sn(_) || _[ct]))
                    break e;
                if ((v || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window,
                    v ? (_ = n.relatedTarget || n.toElement,
                        v = u,
                        _ = _ ? sn(_) : null,
                        _ !== null && (C = Sn(_),
                            _ !== C || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (v = null,
                                _ = u),
                    v !== _)) {
                    if (S = ic,
                        w = "onMouseLeave",
                        p = "onMouseEnter",
                        f = "mouse",
                        (e === "pointerout" || e === "pointerover") && (S = sc,
                            w = "onPointerLeave",
                            p = "onPointerEnter",
                            f = "pointer"),
                        C = v == null ? h : Rn(v),
                        m = _ == null ? h : Rn(_),
                        h = new S(w, f + "leave", v, n, c),
                        h.target = C,
                        h.relatedTarget = m,
                        w = null,
                        sn(c) === u && (S = new S(p, f + "enter", _, n, c),
                            S.target = m,
                            S.relatedTarget = C,
                            w = S),
                        C = w,
                        v && _)
                        t: {
                            for (S = v,
                                p = _,
                                f = 0,
                                m = S; m; m = Cn(m))
                                f++;
                            for (m = 0,
                                w = p; w; w = Cn(w))
                                m++;
                            for (; 0 < f - m;)
                                S = Cn(S),
                                    f--;
                            for (; 0 < m - f;)
                                p = Cn(p),
                                    m--;
                            for (; f--;) {
                                if (S === p || p !== null && S === p.alternate)
                                    break t;
                                S = Cn(S),
                                    p = Cn(p)
                            }
                            S = null
                        }
                    else
                        S = null;
                    v !== null && vc(d, h, v, S, !1),
                        _ !== null && C !== null && vc(d, C, _, S, !0)
                }
            }
            e: {
                if (h = u ? Rn(u) : window,
                    v = h.nodeName && h.nodeName.toLowerCase(),
                    v === "select" || v === "input" && h.type === "file")
                    var I = p1;
                else if (uc(h))
                    if (Jf)
                        I = v1;
                    else {
                        I = m1;
                        var P = h1
                    }
                else
                    (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (I = g1);
                if (I && (I = I(e, u))) {
                    Yf(d, I, n, c);
                    break e
                }
                P && P(e, h, u),
                    e === "focusout" && (P = h._wrapperState) && P.controlled && h.type === "number" && sa(h, "number", h.value)
            }
            switch (P = u ? Rn(u) : window,
            e) {
                case "focusin":
                    (uc(P) || P.contentEditable === "true") && (Tn = P,
                        ya = u,
                        Rr = null);
                    break;
                case "focusout":
                    Rr = ya = Tn = null;
                    break;
                case "mousedown":
                    wa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    wa = !1,
                        hc(d, n, c);
                    break;
                case "selectionchange":
                    if (_1)
                        break;
                case "keydown":
                case "keyup":
                    hc(d, n, c)
            }
            var T;
            if (Rl)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e
                    }
                    N = void 0
                }
            else
                Pn ? Gf(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (qf && n.locale !== "ko" && (Pn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Pn && (T = Kf()) : (Pt = c,
                Pl = "value" in Pt ? Pt.value : Pt.textContent,
                Pn = !0)),
                P = _o(u, N),
                0 < P.length && (N = new oc(N, e, null, n, c),
                    d.push({
                        event: N,
                        listeners: P
                    }),
                    T ? N.data = T : (T = Qf(n),
                        T !== null && (N.data = T)))),
                (T = l1 ? u1(e, n) : c1(e, n)) && (u = _o(u, "onBeforeInput"),
                    0 < u.length && (c = new oc("onBeforeInput", "beforeinput", null, n, c),
                        d.push({
                            event: c,
                            listeners: u
                        }),
                        c.data = T))
        }
        ap(d, t)
    })
}
function Qr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function _o(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e
            , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
            o = $r(e, n),
            o != null && r.unshift(Qr(e, o, i)),
            o = $r(e, t),
            o != null && r.push(Qr(e, o, i))),
            e = e.return
    }
    return r
}
function Cn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function vc(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n
            , l = a.alternate
            , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
            i ? (l = $r(n, o),
                l != null && s.unshift(Qr(n, l, a))) : i || (l = $r(n, o),
                    l != null && s.push(Qr(n, l, a)))),
            n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var C1 = /\r\n?/g
    , k1 = /\u0000|\uFFFD/g;
function yc(e) {
    return (typeof e == "string" ? e : "" + e).replace(C1, `
`).replace(k1, "")
}
function Oi(e, t, n) {
    if (t = yc(t),
        yc(e) !== t && n)
        throw Error(E(425))
}
function So() { }
var _a = null
    , Sa = null;
function Ea(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ia = typeof setTimeout == "function" ? setTimeout : void 0
    , x1 = typeof clearTimeout == "function" ? clearTimeout : void 0
    , wc = typeof Promise == "function" ? Promise : void 0
    , P1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof wc < "u" ? function (e) {
        return wc.resolve(null).then(e).catch(T1)
    }
        : Ia;
function T1(e) {
    setTimeout(function () {
        throw e
    })
}
function Ds(e, t) {
    var n = t
        , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
            i && i.nodeType === 8)
            if (n = i.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                        Hr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Hr(t)
}
function Dt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function _c(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ir = Math.random().toString(36).slice(2)
    , Ke = "__reactFiber$" + ir
    , Yr = "__reactProps$" + ir
    , ct = "__reactContainer$" + ir
    , Ca = "__reactEvents$" + ir
    , N1 = "__reactListeners$" + ir
    , R1 = "__reactHandles$" + ir;
function sn(e) {
    var t = e[Ke];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[ct] || n[Ke]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = _c(e); e !== null;) {
                    if (n = e[Ke])
                        return n;
                    e = _c(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function mi(e) {
    return e = e[Ke] || e[ct],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Rn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(E(33))
}
function Qo(e) {
    return e[Yr] || null
}
var ka = []
    , On = -1;
function Kt(e) {
    return {
        current: e
    }
}
function B(e) {
    0 > On || (e.current = ka[On],
        ka[On] = null,
        On--)
}
function U(e, t) {
    On++,
        ka[On] = e.current,
        e.current = t
}
var $t = {}
    , ce = Kt($t)
    , ye = Kt(!1)
    , mn = $t;
function Gn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return $t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = i),
        i
}
function we(e) {
    return e = e.childContextTypes,
        e != null
}
function Eo() {
    B(ye),
        B(ce)
}
function Sc(e, t, n) {
    if (ce.current !== $t)
        throw Error(E(168));
    U(ce, t),
        U(ye, n)
}
function up(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(E(108, h0(e) || "Unknown", i));
    return H({}, n, r)
}
function Io(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t,
        mn = ce.current,
        U(ce, e),
        U(ye, ye.current),
        !0
}
function Ec(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(E(169));
    n ? (e = up(e, t, mn),
        r.__reactInternalMemoizedMergedChildContext = e,
        B(ye),
        B(ce),
        U(ce, e)) : B(ye),
        U(ye, n)
}
var tt = null
    , Yo = !1
    , bs = !1;
function cp(e) {
    tt === null ? tt = [e] : tt.push(e)
}
function O1(e) {
    Yo = !0,
        cp(e)
}
function qt() {
    if (!bs && tt !== null) {
        bs = !0;
        var e = 0
            , t = b;
        try {
            var n = tt;
            for (b = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            tt = null,
                Yo = !1
        } catch (i) {
            throw tt !== null && (tt = tt.slice(e + 1)),
            Df(Il, qt),
            i
        } finally {
            b = t,
                bs = !1
        }
    }
    return null
}
var Ln = []
    , An = 0
    , Co = null
    , ko = 0
    , Te = []
    , Ne = 0
    , gn = null
    , ot = 1
    , st = "";
function tn(e, t) {
    Ln[An++] = ko,
        Ln[An++] = Co,
        Co = e,
        ko = t
}
function dp(e, t, n) {
    Te[Ne++] = ot,
        Te[Ne++] = st,
        Te[Ne++] = gn,
        gn = e;
    var r = ot;
    e = st;
    var i = 32 - Fe(r) - 1;
    r &= ~(1 << i),
        n += 1;
    var o = 32 - Fe(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
            r >>= s,
            i -= s,
            ot = 1 << 32 - Fe(t) + i | n << i | r,
            st = o + e
    } else
        ot = 1 << o | n << i | r,
            st = e
}
function Ll(e) {
    e.return !== null && (tn(e, 1),
        dp(e, 1, 0))
}
function Al(e) {
    for (; e === Co;)
        Co = Ln[--An],
            Ln[An] = null,
            ko = Ln[--An],
            Ln[An] = null;
    for (; e === gn;)
        gn = Te[--Ne],
            Te[Ne] = null,
            st = Te[--Ne],
            Te[Ne] = null,
            ot = Te[--Ne],
            Te[Ne] = null
}
var Ce = null
    , Ee = null
    , $ = !1
    , ze = null;
function fp(e, t) {
    var n = Re(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function Ic(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    Ce = e,
                    Ee = Dt(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    Ce = e,
                    Ee = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = gn !== null ? {
                    id: ot,
                    overflow: st
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = Re(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    Ce = e,
                    Ee = null,
                    !0) : !1;
        default:
            return !1
    }
}
function xa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Pa(e) {
    if ($) {
        var t = Ee;
        if (t) {
            var n = t;
            if (!Ic(e, t)) {
                if (xa(e))
                    throw Error(E(418));
                t = Dt(n.nextSibling);
                var r = Ce;
                t && Ic(e, t) ? fp(r, n) : (e.flags = e.flags & -4097 | 2,
                    $ = !1,
                    Ce = e)
            }
        } else {
            if (xa(e))
                throw Error(E(418));
            e.flags = e.flags & -4097 | 2,
                $ = !1,
                Ce = e
        }
    }
}
function Cc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    Ce = e
}
function Li(e) {
    if (e !== Ce)
        return !1;
    if (!$)
        return Cc(e),
            $ = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Ea(e.type, e.memoizedProps)),
        t && (t = Ee)) {
        if (xa(e))
            throw pp(),
            Error(E(418));
        for (; t;)
            fp(e, t),
                t = Dt(t.nextSibling)
    }
    if (Cc(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(E(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ee = Dt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ee = null
        }
    } else
        Ee = Ce ? Dt(e.stateNode.nextSibling) : null;
    return !0
}
function pp() {
    for (var e = Ee; e;)
        e = Dt(e.nextSibling)
}
function Qn() {
    Ee = Ce = null,
        $ = !1
}
function Ml(e) {
    ze === null ? ze = [e] : ze.push(e)
}
var L1 = gt.ReactCurrentBatchConfig;
function je(e, t) {
    if (e && e.defaultProps) {
        t = H({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var xo = Kt(null)
    , Po = null
    , Mn = null
    , Dl = null;
function bl() {
    Dl = Mn = Po = null
}
function jl(e) {
    var t = xo.current;
    B(xo),
        e._currentValue = t
}
function Ta(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function Wn(e, t) {
    Po = e,
        Dl = Mn = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (ge = !0),
            e.firstContext = null)
}
function Ae(e) {
    var t = e._currentValue;
    if (Dl !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            Mn === null) {
            if (Po === null)
                throw Error(E(308));
            Mn = e,
                Po.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            Mn = Mn.next = e;
    return t
}
var an = null;
function Ul(e) {
    an === null ? an = [e] : an.push(e)
}
function hp(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
        Ul(t)) : (n.next = i.next,
            i.next = n),
        t.interleaved = n,
        dt(e, r)
}
function dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var _t = !1;
function zl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function mp(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function at(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        D & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            r.pending = t,
            dt(e, n)
    }
    return i = r.interleaved,
        i === null ? (t.next = t,
            Ul(r)) : (t.next = i.next,
                i.next = t),
        r.interleaved = t,
        dt(e, n)
}
function Gi(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Cl(e, n)
    }
}
function kc(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var i = null
            , o = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                    n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function To(e, t, n, r) {
    var i = e.updateQueue;
    _t = !1;
    var o = i.firstBaseUpdate
        , s = i.lastBaseUpdate
        , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
            , u = l.next;
        l.next = null,
            s === null ? o = u : s.next = u,
            s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
            a = c.lastBaseUpdate,
            a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
                c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0,
            c = u = l = null,
            a = o;
        do {
            var h = a.lane
                , v = a.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var _ = e
                        , S = a;
                    switch (h = t,
                    v = n,
                    S.tag) {
                        case 1:
                            if (_ = S.payload,
                                typeof _ == "function") {
                                d = _.call(v, d, h);
                                break e
                            }
                            d = _;
                            break e;
                        case 3:
                            _.flags = _.flags & -65537 | 128;
                        case 0:
                            if (_ = S.payload,
                                h = typeof _ == "function" ? _.call(v, d, h) : _,
                                h == null)
                                break e;
                            d = H({}, d, h);
                            break e;
                        case 2:
                            _t = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    h = i.effects,
                    h === null ? i.effects = [a] : h.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    c === null ? (u = c = v,
                        l = d) : c = c.next = v,
                    s |= h;
            if (a = a.next,
                a === null) {
                if (a = i.shared.pending,
                    a === null)
                    break;
                h = a,
                    a = h.next,
                    h.next = null,
                    i.lastBaseUpdate = h,
                    i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
            i.baseState = l,
            i.firstBaseUpdate = u,
            i.lastBaseUpdate = c,
            t = i.shared.interleaved,
            t !== null) {
            i = t;
            do
                s |= i.lane,
                    i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        yn |= s,
            e.lanes = s,
            e.memoizedState = d
    }
}
function xc(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                    r = n,
                    typeof i != "function")
                    throw Error(E(191, i));
                i.call(r)
            }
        }
}
var gp = new hf.Component().refs;
function Na(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : H({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Jo = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Sn(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = fe()
            , i = Ut(e)
            , o = at(r, i);
        o.payload = t,
            n != null && (o.callback = n),
            t = bt(e, o, i),
            t !== null && (Be(t, e, i, r),
                Gi(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = fe()
            , i = Ut(e)
            , o = at(r, i);
        o.tag = 1,
            o.payload = t,
            n != null && (o.callback = n),
            t = bt(e, o, i),
            t !== null && (Be(t, e, i, r),
                Gi(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = fe()
            , r = Ut(e)
            , i = at(n, r);
        i.tag = 2,
            t != null && (i.callback = t),
            t = bt(e, i, r),
            t !== null && (Be(t, e, r, n),
                Gi(t, e, r))
    }
};
function Pc(e, t, n, r, i, o, s) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !qr(n, r) || !qr(i, o) : !0
}
function vp(e, t, n) {
    var r = !1
        , i = $t
        , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ae(o) : (i = we(t) ? mn : ce.current,
        r = t.contextTypes,
        o = (r = r != null) ? Gn(e, i) : $t),
        t = new t(n, o),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = Jo,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = i,
            e.__reactInternalMemoizedMaskedChildContext = o),
        t
}
function Tc(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Jo.enqueueReplaceState(t, t.state, null)
}
function Ra(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
        i.state = e.memoizedState,
        i.refs = gp,
        zl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Ae(o) : (o = we(t) ? mn : ce.current,
        i.context = Gn(e, o)),
        i.state = e.memoizedState,
        o = t.getDerivedStateFromProps,
        typeof o == "function" && (Na(e, t, o, n),
            i.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && Jo.enqueueReplaceState(i, i.state, null),
            To(e, n, i, r),
            i.state = e.memoizedState),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function gr(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(E(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(E(147, e));
            var i = r
                , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) {
                var a = i.refs;
                a === gp && (a = i.refs = {}),
                    s === null ? delete a[o] : a[o] = s
            }
                ,
                t._stringRef = o,
                t)
        }
        if (typeof e != "string")
            throw Error(E(284));
        if (!n._owner)
            throw Error(E(290, e))
    }
    return e
}
function Ai(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Nc(e) {
    var t = e._init;
    return t(e._payload)
}
function yp(e) {
    function t(p, f) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [f],
                p.flags |= 16) : m.push(f)
        }
    }
    function n(p, f) {
        if (!e)
            return null;
        for (; f !== null;)
            t(p, f),
                f = f.sibling;
        return null
    }
    function r(p, f) {
        for (p = new Map; f !== null;)
            f.key !== null ? p.set(f.key, f) : p.set(f.index, f),
                f = f.sibling;
        return p
    }
    function i(p, f) {
        return p = zt(p, f),
            p.index = 0,
            p.sibling = null,
            p
    }
    function o(p, f, m) {
        return p.index = m,
            e ? (m = p.alternate,
                m !== null ? (m = m.index,
                    m < f ? (p.flags |= 2,
                        f) : m) : (p.flags |= 2,
                            f)) : (p.flags |= 1048576,
                                f)
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2),
            p
    }
    function a(p, f, m, w) {
        return f === null || f.tag !== 6 ? (f = Vs(m, p.mode, w),
            f.return = p,
            f) : (f = i(f, m),
                f.return = p,
                f)
    }
    function l(p, f, m, w) {
        var I = m.type;
        return I === xn ? c(p, f, m.props.children, w, m.key) : f !== null && (f.elementType === I || typeof I == "object" && I !== null && I.$$typeof === wt && Nc(I) === f.type) ? (w = i(f, m.props),
            w.ref = gr(p, f, m),
            w.return = p,
            w) : (w = eo(m.type, m.key, m.props, null, p.mode, w),
                w.ref = gr(p, f, m),
                w.return = p,
                w)
    }
    function u(p, f, m, w) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = Ws(m, p.mode, w),
            f.return = p,
            f) : (f = i(f, m.children || []),
                f.return = p,
                f)
    }
    function c(p, f, m, w, I) {
        return f === null || f.tag !== 7 ? (f = dn(m, p.mode, w, I),
            f.return = p,
            f) : (f = i(f, m),
                f.return = p,
                f)
    }
    function d(p, f, m) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Vs("" + f, p.mode, m),
                f.return = p,
                f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case Ei:
                    return m = eo(f.type, f.key, f.props, null, p.mode, m),
                        m.ref = gr(p, null, f),
                        m.return = p,
                        m;
                case kn:
                    return f = Ws(f, p.mode, m),
                        f.return = p,
                        f;
                case wt:
                    var w = f._init;
                    return d(p, w(f._payload), m)
            }
            if (Er(f) || dr(f))
                return f = dn(f, p.mode, m, null),
                    f.return = p,
                    f;
            Ai(p, f)
        }
        return null
    }
    function h(p, f, m, w) {
        var I = f !== null ? f.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return I !== null ? null : a(p, f, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ei:
                    return m.key === I ? l(p, f, m, w) : null;
                case kn:
                    return m.key === I ? u(p, f, m, w) : null;
                case wt:
                    return I = m._init,
                        h(p, f, I(m._payload), w)
            }
            if (Er(m) || dr(m))
                return I !== null ? null : c(p, f, m, w, null);
            Ai(p, m)
        }
        return null
    }
    function v(p, f, m, w, I) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return p = p.get(m) || null,
                a(f, p, "" + w, I);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Ei:
                    return p = p.get(w.key === null ? m : w.key) || null,
                        l(f, p, w, I);
                case kn:
                    return p = p.get(w.key === null ? m : w.key) || null,
                        u(f, p, w, I);
                case wt:
                    var P = w._init;
                    return v(p, f, m, P(w._payload), I)
            }
            if (Er(w) || dr(w))
                return p = p.get(m) || null,
                    c(f, p, w, I, null);
            Ai(f, w)
        }
        return null
    }
    function _(p, f, m, w) {
        for (var I = null, P = null, T = f, N = f = 0, z = null; T !== null && N < m.length; N++) {
            T.index > N ? (z = T,
                T = null) : z = T.sibling;
            var A = h(p, T, m[N], w);
            if (A === null) {
                T === null && (T = z);
                break
            }
            e && T && A.alternate === null && t(p, T),
                f = o(A, f, N),
                P === null ? I = A : P.sibling = A,
                P = A,
                T = z
        }
        if (N === m.length)
            return n(p, T),
                $ && tn(p, N),
                I;
        if (T === null) {
            for (; N < m.length; N++)
                T = d(p, m[N], w),
                    T !== null && (f = o(T, f, N),
                        P === null ? I = T : P.sibling = T,
                        P = T);
            return $ && tn(p, N),
                I
        }
        for (T = r(p, T); N < m.length; N++)
            z = v(T, p, N, m[N], w),
                z !== null && (e && z.alternate !== null && T.delete(z.key === null ? N : z.key),
                    f = o(z, f, N),
                    P === null ? I = z : P.sibling = z,
                    P = z);
        return e && T.forEach(function (De) {
            return t(p, De)
        }),
            $ && tn(p, N),
            I
    }
    function S(p, f, m, w) {
        var I = dr(m);
        if (typeof I != "function")
            throw Error(E(150));
        if (m = I.call(m),
            m == null)
            throw Error(E(151));
        for (var P = I = null, T = f, N = f = 0, z = null, A = m.next(); T !== null && !A.done; N++,
            A = m.next()) {
            T.index > N ? (z = T,
                T = null) : z = T.sibling;
            var De = h(p, T, A.value, w);
            if (De === null) {
                T === null && (T = z);
                break
            }
            e && T && De.alternate === null && t(p, T),
                f = o(De, f, N),
                P === null ? I = De : P.sibling = De,
                P = De,
                T = z
        }
        if (A.done)
            return n(p, T),
                $ && tn(p, N),
                I;
        if (T === null) {
            for (; !A.done; N++,
                A = m.next())
                A = d(p, A.value, w),
                    A !== null && (f = o(A, f, N),
                        P === null ? I = A : P.sibling = A,
                        P = A);
            return $ && tn(p, N),
                I
        }
        for (T = r(p, T); !A.done; N++,
            A = m.next())
            A = v(T, p, N, A.value, w),
                A !== null && (e && A.alternate !== null && T.delete(A.key === null ? N : A.key),
                    f = o(A, f, N),
                    P === null ? I = A : P.sibling = A,
                    P = A);
        return e && T.forEach(function (ur) {
            return t(p, ur)
        }),
            $ && tn(p, N),
            I
    }
    function C(p, f, m, w) {
        if (typeof m == "object" && m !== null && m.type === xn && m.key === null && (m = m.props.children),
            typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ei:
                    e: {
                        for (var I = m.key, P = f; P !== null;) {
                            if (P.key === I) {
                                if (I = m.type,
                                    I === xn) {
                                    if (P.tag === 7) {
                                        n(p, P.sibling),
                                            f = i(P, m.props.children),
                                            f.return = p,
                                            p = f;
                                        break e
                                    }
                                } else if (P.elementType === I || typeof I == "object" && I !== null && I.$$typeof === wt && Nc(I) === P.type) {
                                    n(p, P.sibling),
                                        f = i(P, m.props),
                                        f.ref = gr(p, P, m),
                                        f.return = p,
                                        p = f;
                                    break e
                                }
                                n(p, P);
                                break
                            } else
                                t(p, P);
                            P = P.sibling
                        }
                        m.type === xn ? (f = dn(m.props.children, p.mode, w, m.key),
                            f.return = p,
                            p = f) : (w = eo(m.type, m.key, m.props, null, p.mode, w),
                                w.ref = gr(p, f, m),
                                w.return = p,
                                p = w)
                    }
                    return s(p);
                case kn:
                    e: {
                        for (P = m.key; f !== null;) {
                            if (f.key === P)
                                if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                                    n(p, f.sibling),
                                        f = i(f, m.children || []),
                                        f.return = p,
                                        p = f;
                                    break e
                                } else {
                                    n(p, f);
                                    break
                                }
                            else
                                t(p, f);
                            f = f.sibling
                        }
                        f = Ws(m, p.mode, w),
                            f.return = p,
                            p = f
                    }
                    return s(p);
                case wt:
                    return P = m._init,
                        C(p, f, P(m._payload), w)
            }
            if (Er(m))
                return _(p, f, m, w);
            if (dr(m))
                return S(p, f, m, w);
            Ai(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
            f !== null && f.tag === 6 ? (n(p, f.sibling),
                f = i(f, m),
                f.return = p,
                p = f) : (n(p, f),
                    f = Vs(m, p.mode, w),
                    f.return = p,
                    p = f),
            s(p)) : n(p, f)
    }
    return C
}
var Yn = yp(!0)
    , wp = yp(!1)
    , gi = {}
    , Ye = Kt(gi)
    , Jr = Kt(gi)
    , Xr = Kt(gi);
function ln(e) {
    if (e === gi)
        throw Error(E(174));
    return e
}
function Fl(e, t) {
    switch (U(Xr, t),
    U(Jr, e),
    U(Ye, gi),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : la(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = la(t, e)
    }
    B(Ye),
        U(Ye, t)
}
function Jn() {
    B(Ye),
        B(Jr),
        B(Xr)
}
function _p(e) {
    ln(Xr.current);
    var t = ln(Ye.current)
        , n = la(t, e.type);
    t !== n && (U(Jr, e),
        U(Ye, n))
}
function Bl(e) {
    Jr.current === e && (B(Ye),
        B(Jr))
}
var V = Kt(0);
function No(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var js = [];
function $l() {
    for (var e = 0; e < js.length; e++)
        js[e]._workInProgressVersionPrimary = null;
    js.length = 0
}
var Qi = gt.ReactCurrentDispatcher
    , Us = gt.ReactCurrentBatchConfig
    , vn = 0
    , W = null
    , J = null
    , ee = null
    , Ro = !1
    , Or = !1
    , Zr = 0
    , A1 = 0;
function se() {
    throw Error(E(321))
}
function Vl(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!$e(e[n], t[n]))
            return !1;
    return !0
}
function Wl(e, t, n, r, i, o) {
    if (vn = o,
        W = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        Qi.current = e === null || e.memoizedState === null ? j1 : U1,
        e = n(r, i),
        Or) {
        o = 0;
        do {
            if (Or = !1,
                Zr = 0,
                25 <= o)
                throw Error(E(301));
            o += 1,
                ee = J = null,
                t.updateQueue = null,
                Qi.current = z1,
                e = n(r, i)
        } while (Or)
    }
    if (Qi.current = Oo,
        t = J !== null && J.next !== null,
        vn = 0,
        ee = J = W = null,
        Ro = !1,
        t)
        throw Error(E(300));
    return e
}
function Hl() {
    var e = Zr !== 0;
    return Zr = 0,
        e
}
function He() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ee === null ? W.memoizedState = ee = e : ee = ee.next = e,
        ee
}
function Me() {
    if (J === null) {
        var e = W.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = J.next;
    var t = ee === null ? W.memoizedState : ee.next;
    if (t !== null)
        ee = t,
            J = e;
    else {
        if (e === null)
            throw Error(E(310));
        J = e,
            e = {
                memoizedState: J.memoizedState,
                baseState: J.baseState,
                baseQueue: J.baseQueue,
                queue: J.queue,
                next: null
            },
            ee === null ? W.memoizedState = ee = e : ee = ee.next = e
    }
    return ee
}
function ei(e, t) {
    return typeof t == "function" ? t(e) : t
}
function zs(e) {
    var t = Me()
        , n = t.queue;
    if (n === null)
        throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = J
        , i = r.baseQueue
        , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
                o.next = s
        }
        r.baseQueue = i = o,
            n.pending = null
    }
    if (i !== null) {
        o = i.next,
            r = r.baseState;
        var a = s = null
            , l = null
            , u = o;
        do {
            var c = u.lane;
            if ((vn & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                    s = r) : l = l.next = d,
                    W.lanes |= c,
                    yn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a,
            $e(r, t.memoizedState) || (ge = !0),
            t.memoizedState = r,
            t.baseState = s,
            t.baseQueue = l,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        i = e;
        do
            o = i.lane,
                W.lanes |= o,
                yn |= o,
                i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Fs(e) {
    var t = Me()
        , n = t.queue;
    if (n === null)
        throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , i = n.pending
        , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
                s = s.next;
        while (s !== i);
        $e(o, t.memoizedState) || (ge = !0),
            t.memoizedState = o,
            t.baseQueue === null && (t.baseState = o),
            n.lastRenderedState = o
    }
    return [o, r]
}
function Sp() { }
function Ep(e, t) {
    var n = W
        , r = Me()
        , i = t()
        , o = !$e(r.memoizedState, i);
    if (o && (r.memoizedState = i,
        ge = !0),
        r = r.queue,
        Kl(kp.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || ee !== null && ee.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            ti(9, Cp.bind(null, n, r, i, t), void 0, null),
            ne === null)
            throw Error(E(349));
        vn & 30 || Ip(n, t, i)
    }
    return i
}
function Ip(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = W.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            W.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function Cp(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        xp(t) && Pp(e)
}
function kp(e, t, n) {
    return n(function () {
        xp(t) && Pp(e)
    })
}
function xp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !$e(e, n)
    } catch {
        return !0
    }
}
function Pp(e) {
    var t = dt(e, 1);
    t !== null && Be(t, e, 1, -1)
}
function Rc(e) {
    var t = He();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ei,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = b1.bind(null, W, e),
        [t.memoizedState, e]
}
function ti(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = W.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            W.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function Tp() {
    return Me().memoizedState
}
function Yi(e, t, n, r) {
    var i = He();
    W.flags |= e,
        i.memoizedState = ti(1 | t, n, void 0, r === void 0 ? null : r)
}
function Xo(e, t, n, r) {
    var i = Me();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (J !== null) {
        var s = J.memoizedState;
        if (o = s.destroy,
            r !== null && Vl(r, s.deps)) {
            i.memoizedState = ti(t, n, o, r);
            return
        }
    }
    W.flags |= e,
        i.memoizedState = ti(1 | t, n, o, r)
}
function Oc(e, t) {
    return Yi(8390656, 8, e, t)
}
function Kl(e, t) {
    return Xo(2048, 8, e, t)
}
function Np(e, t) {
    return Xo(4, 2, e, t)
}
function Rp(e, t) {
    return Xo(4, 4, e, t)
}
function Op(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function Lp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        Xo(4, 4, Op.bind(null, t, e), n)
}
function ql() { }
function Ap(e, t) {
    var n = Me();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vl(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function Mp(e, t) {
    var n = Me();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vl(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function Dp(e, t, n) {
    return vn & 21 ? ($e(n, t) || (n = Uf(),
        W.lanes |= n,
        yn |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            ge = !0),
            e.memoizedState = n)
}
function M1(e, t) {
    var n = b;
    b = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = Us.transition;
    Us.transition = {};
    try {
        e(!1),
            t()
    } finally {
        b = n,
            Us.transition = r
    }
}
function bp() {
    return Me().memoizedState
}
function D1(e, t, n) {
    var r = Ut(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        jp(e))
        Up(t, n);
    else if (n = hp(e, t, n, r),
        n !== null) {
        var i = fe();
        Be(n, e, r, i),
            zp(n, t, r)
    }
}
function b1(e, t, n) {
    var r = Ut(e)
        , i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (jp(e))
        Up(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
            o !== null))
            try {
                var s = t.lastRenderedState
                    , a = o(s, n);
                if (i.hasEagerState = !0,
                    i.eagerState = a,
                    $e(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                        Ul(t)) : (i.next = l.next,
                            l.next = i),
                        t.interleaved = i;
                    return
                }
            } catch { } finally { }
        n = hp(e, t, i, r),
            n !== null && (i = fe(),
                Be(n, e, r, i),
                zp(n, t, r))
    }
}
function jp(e) {
    var t = e.alternate;
    return e === W || t !== null && t === W
}
function Up(e, t) {
    Or = Ro = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function zp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Cl(e, n)
    }
}
var Oo = {
    readContext: Ae,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1
}
    , j1 = {
        readContext: Ae,
        useCallback: function (e, t) {
            return He().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: Ae,
        useEffect: Oc,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                Yi(4194308, 4, Op.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Yi(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return Yi(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = He();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = He();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = D1.bind(null, W, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = He();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: Rc,
        useDebugValue: ql,
        useDeferredValue: function (e) {
            return He().memoizedState = e
        },
        useTransition: function () {
            var e = Rc(!1)
                , t = e[0];
            return e = M1.bind(null, e[1]),
                He().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = W
                , i = He();
            if ($) {
                if (n === void 0)
                    throw Error(E(407));
                n = n()
            } else {
                if (n = t(),
                    ne === null)
                    throw Error(E(349));
                vn & 30 || Ip(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o,
                Oc(kp.bind(null, r, o, e), [e]),
                r.flags |= 2048,
                ti(9, Cp.bind(null, r, o, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = He()
                , t = ne.identifierPrefix;
            if ($) {
                var n = st
                    , r = ot;
                n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = Zr++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = A1++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , U1 = {
        readContext: Ae,
        useCallback: Ap,
        useContext: Ae,
        useEffect: Kl,
        useImperativeHandle: Lp,
        useInsertionEffect: Np,
        useLayoutEffect: Rp,
        useMemo: Mp,
        useReducer: zs,
        useRef: Tp,
        useState: function () {
            return zs(ei)
        },
        useDebugValue: ql,
        useDeferredValue: function (e) {
            var t = Me();
            return Dp(t, J.memoizedState, e)
        },
        useTransition: function () {
            var e = zs(ei)[0]
                , t = Me().memoizedState;
            return [e, t]
        },
        useMutableSource: Sp,
        useSyncExternalStore: Ep,
        useId: bp,
        unstable_isNewReconciler: !1
    }
    , z1 = {
        readContext: Ae,
        useCallback: Ap,
        useContext: Ae,
        useEffect: Kl,
        useImperativeHandle: Lp,
        useInsertionEffect: Np,
        useLayoutEffect: Rp,
        useMemo: Mp,
        useReducer: Fs,
        useRef: Tp,
        useState: function () {
            return Fs(ei)
        },
        useDebugValue: ql,
        useDeferredValue: function (e) {
            var t = Me();
            return J === null ? t.memoizedState = e : Dp(t, J.memoizedState, e)
        },
        useTransition: function () {
            var e = Fs(ei)[0]
                , t = Me().memoizedState;
            return [e, t]
        },
        useMutableSource: Sp,
        useSyncExternalStore: Ep,
        useId: bp,
        unstable_isNewReconciler: !1
    };
function Xn(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += p0(r),
                r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Bs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Oa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var F1 = typeof WeakMap == "function" ? WeakMap : Map;
function Fp(e, t, n) {
    n = at(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        Ao || (Ao = !0,
            Ba = r),
            Oa(e, t)
    }
        ,
        n
}
function Bp(e, t, n) {
    n = at(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }
            ,
            n.callback = function () {
                Oa(e, t)
            }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        Oa(e, t),
            typeof r != "function" && (jt === null ? jt = new Set([this]) : jt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
        n
}
function Lc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new F1;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
            i === void 0 && (i = new Set,
                r.set(t, i));
    i.has(n) || (i.add(n),
        e = ew.bind(null, e, t, n),
        t.then(e, e))
}
function Ac(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Mc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = i,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1),
                t.tag = 2,
                bt(n, t, 1))),
            n.lanes |= 1),
            e)
}
var B1 = gt.ReactCurrentOwner
    , ge = !1;
function de(e, t, n, r) {
    t.child = e === null ? wp(t, null, n, r) : Yn(t, e.child, n, r)
}
function Dc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Wn(t, i),
        r = Wl(e, t, n, r, o, i),
        n = Hl(),
        e !== null && !ge ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            ft(e, t, i)) : ($ && n && Ll(t),
                t.flags |= 1,
                de(e, t, r, i),
                t.child)
}
function bc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !tu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = o,
            $p(e, t, o, r, i)) : (e = eo(n.type, null, r, t, t.mode, i),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (o = e.child,
        !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : qr,
            n(s, r) && e.ref === t.ref)
            return ft(e, t, i)
    }
    return t.flags |= 1,
        e = zt(o, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function $p(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (qr(o, r) && e.ref === t.ref)
            if (ge = !1,
                t.pendingProps = r = o,
                (e.lanes & i) !== 0)
                e.flags & 131072 && (ge = !0);
            else
                return t.lanes = e.lanes,
                    ft(e, t, i)
    }
    return La(e, t, n, r, i)
}
function Vp(e, t, n) {
    var r = t.pendingProps
        , i = r.children
        , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                U(bn, Se),
                Se |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    U(bn, Se),
                    Se |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = o !== null ? o.baseLanes : n,
                U(bn, Se),
                Se |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
            t.memoizedState = null) : r = n,
            U(bn, Se),
            Se |= r;
    return de(e, t, i, n),
        t.child
}
function Wp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function La(e, t, n, r, i) {
    var o = we(n) ? mn : ce.current;
    return o = Gn(t, o),
        Wn(t, i),
        n = Wl(e, t, n, r, o, i),
        r = Hl(),
        e !== null && !ge ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            ft(e, t, i)) : ($ && r && Ll(t),
                t.flags |= 1,
                de(e, t, n, i),
                t.child)
}
function jc(e, t, n, r, i) {
    if (we(n)) {
        var o = !0;
        Io(t)
    } else
        o = !1;
    if (Wn(t, i),
        t.stateNode === null)
        Ji(e, t),
            vp(t, n, r),
            Ra(t, n, r, i),
            r = !0;
    else if (e === null) {
        var s = t.stateNode
            , a = t.memoizedProps;
        s.props = a;
        var l = s.context
            , u = n.contextType;
        typeof u == "object" && u !== null ? u = Ae(u) : (u = we(n) ? mn : ce.current,
            u = Gn(t, u));
        var c = n.getDerivedStateFromProps
            , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Tc(t, s, r, u),
            _t = !1;
        var h = t.memoizedState;
        s.state = h,
            To(t, r, s, i),
            l = t.memoizedState,
            a !== r || h !== l || ye.current || _t ? (typeof c == "function" && (Na(t, n, c, r),
                l = t.memoizedState),
                (a = _t || Pc(t, n, a, r, h, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
                    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                    typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = l),
                s.props = r,
                s.state = l,
                s.context = u,
                r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        s = t.stateNode,
            mp(e, t),
            a = t.memoizedProps,
            u = t.type === t.elementType ? a : je(t.type, a),
            s.props = u,
            d = t.pendingProps,
            h = s.context,
            l = n.contextType,
            typeof l == "object" && l !== null ? l = Ae(l) : (l = we(n) ? mn : ce.current,
                l = Gn(t, l));
        var v = n.getDerivedStateFromProps;
        (c = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || h !== l) && Tc(t, s, r, l),
            _t = !1,
            h = t.memoizedState,
            s.state = h,
            To(t, r, s, i);
        var _ = t.memoizedState;
        a !== d || h !== _ || ye.current || _t ? (typeof v == "function" && (Na(t, n, v, r),
            _ = t.memoizedState),
            (u = _t || Pc(t, n, u, r, h, _, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, _, l),
                typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, _, l)),
                typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = _),
            s.props = r,
            s.state = _,
            s.context = l,
            r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return Aa(e, t, n, r, o, i)
}
function Aa(e, t, n, r, i, o) {
    Wp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && Ec(t, n, !1),
            ft(e, t, o);
    r = t.stateNode,
        B1.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && s ? (t.child = Yn(t, e.child, null, o),
            t.child = Yn(t, null, a, o)) : de(e, t, a, o),
        t.memoizedState = r.state,
        i && Ec(t, n, !0),
        t.child
}
function Hp(e) {
    var t = e.stateNode;
    t.pendingContext ? Sc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sc(e, t.context, !1),
        Fl(e, t.containerInfo)
}
function Uc(e, t, n, r, i) {
    return Qn(),
        Ml(i),
        t.flags |= 256,
        de(e, t, n, r),
        t.child
}
var Ma = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Da(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Kp(e, t, n) {
    var r = t.pendingProps, i = V.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        a ? (o = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
        U(V, i & 1),
        e === null)
        return Pa(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (s = r.children,
                        e = r.fallback,
                        o ? (r = t.mode,
                            o = t.child,
                            s = {
                                mode: "hidden",
                                children: s
                            },
                            !(r & 1) && o !== null ? (o.childLanes = 0,
                                o.pendingProps = s) : o = ts(s, r, 0, null),
                            e = dn(e, r, n, null),
                            o.return = t,
                            e.return = t,
                            o.sibling = e,
                            t.child = o,
                            t.child.memoizedState = Da(n),
                            t.memoizedState = Ma,
                            e) : Gl(t, s));
    if (i = e.memoizedState,
        i !== null && (a = i.dehydrated,
            a !== null))
        return $1(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
            s = t.mode,
            i = e.child,
            a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = l,
            t.deletions = null) : (r = zt(i, l),
                r.subtreeFlags = i.subtreeFlags & 14680064),
            a !== null ? o = zt(a, o) : (o = dn(o, s, n, null),
                o.flags |= 2),
            o.return = t,
            r.return = t,
            r.sibling = o,
            t.child = r,
            r = o,
            o = t.child,
            s = e.child.memoizedState,
            s = s === null ? Da(n) : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions
            },
            o.memoizedState = s,
            o.childLanes = e.childLanes & ~n,
            t.memoizedState = Ma,
            r
    }
    return o = e.child,
        e = o.sibling,
        r = zt(o, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function Gl(e, t) {
    return t = ts({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function Mi(e, t, n, r) {
    return r !== null && Ml(r),
        Yn(t, e.child, null, n),
        e = Gl(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function $1(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = Bs(Error(E(422))),
            Mi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (o = r.fallback,
                    i = t.mode,
                    r = ts({
                        mode: "visible",
                        children: r.children
                    }, i, 0, null),
                    o = dn(o, i, s, null),
                    o.flags |= 2,
                    r.return = t,
                    o.return = t,
                    r.sibling = o,
                    t.child = r,
                    t.mode & 1 && Yn(t, e.child, null, s),
                    t.child.memoizedState = Da(s),
                    t.memoizedState = Ma,
                    o);
    if (!(t.mode & 1))
        return Mi(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            o = Error(E(419)),
            r = Bs(o, r, void 0),
            Mi(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
        ge || a) {
        if (r = ne,
            r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
                i !== 0 && i !== o.retryLane && (o.retryLane = i,
                    dt(e, i),
                    Be(r, e, i, -1))
        }
        return eu(),
            r = Bs(Error(E(421))),
            Mi(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = tw.bind(null, e),
        i._reactRetry = t,
        null) : (e = o.treeContext,
            Ee = Dt(i.nextSibling),
            Ce = t,
            $ = !0,
            ze = null,
            e !== null && (Te[Ne++] = ot,
                Te[Ne++] = st,
                Te[Ne++] = gn,
                ot = e.id,
                st = e.overflow,
                gn = t),
            t = Gl(t, r.children),
            t.flags |= 4096,
            t)
}
function zc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        Ta(e.return, t, n)
}
function $s(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = r,
        o.tail = n,
        o.tailMode = i)
}
function qp(e, t, n) {
    var r = t.pendingProps
        , i = r.revealOrder
        , o = r.tail;
    if (de(e, t, r.children, n),
        r = V.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && zc(e, n, t);
                else if (e.tag === 19)
                    zc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (U(V, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child,
                    i = null; n !== null;)
                    e = n.alternate,
                        e !== null && No(e) === null && (i = n),
                        n = n.sibling;
                n = i,
                    n === null ? (i = t.child,
                        t.child = null) : (i = n.sibling,
                            n.sibling = null),
                    $s(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null,
                    i = t.child,
                    t.child = null; i !== null;) {
                    if (e = i.alternate,
                        e !== null && No(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                        i.sibling = n,
                        n = i,
                        i = e
                }
                $s(t, !0, n, null, o);
                break;
            case "together":
                $s(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function Ji(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function ft(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        yn |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(E(153));
    if (t.child !== null) {
        for (e = t.child,
            n = zt(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = zt(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function V1(e, t, n) {
    switch (t.tag) {
        case 3:
            Hp(t),
                Qn();
            break;
        case 5:
            _p(t);
            break;
        case 1:
            we(t.type) && Io(t);
            break;
        case 4:
            Fl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , i = t.memoizedProps.value;
            U(xo, r._currentValue),
                r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (U(V, V.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? Kp(e, t, n) : (U(V, V.current & 1),
                        e = ft(e, t, n),
                        e !== null ? e.sibling : null);
            U(V, V.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return qp(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
                i !== null && (i.rendering = null,
                    i.tail = null,
                    i.lastEffect = null),
                U(V, V.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                Vp(e, t, n)
    }
    return ft(e, t, n)
}
var Gp, ba, Qp, Yp;
Gp = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
ba = function () { }
    ;
Qp = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
            ln(Ye.current);
        var o = null;
        switch (n) {
            case "input":
                i = ia(e, i),
                    r = ia(e, r),
                    o = [];
                break;
            case "select":
                i = H({}, i, {
                    value: void 0
                }),
                    r = H({}, r, {
                        value: void 0
                    }),
                    o = [];
                break;
            case "textarea":
                i = aa(e, i),
                    r = aa(e, r),
                    o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = So)
        }
        ua(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                            n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Fr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                                n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                                n[s] = l[s])
                    } else
                        n || (o || (o = []),
                            o.push(u, n)),
                            n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                        a = a ? a.__html : void 0,
                        l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Fr.hasOwnProperty(u) ? (l != null && u === "onScroll" && F("scroll", e),
                            o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
    ;
Yp = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function vr(e, t) {
    if (!$)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 14680064,
                r |= i.flags & 14680064,
                i.return = e,
                i = i.sibling;
    else
        for (i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = e,
                i = i.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function W1(e, t, n) {
    var r = t.pendingProps;
    switch (Al(t),
    t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ae(t),
                null;
        case 1:
            return we(t.type) && Eo(),
                ae(t),
                null;
        case 3:
            return r = t.stateNode,
                Jn(),
                B(ye),
                B(ce),
                $l(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (Li(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    ze !== null && (Wa(ze),
                        ze = null))),
                ba(e, t),
                ae(t),
                null;
        case 5:
            Bl(t);
            var i = ln(Xr.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                Qp(e, t, n, r, i),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(E(166));
                    return ae(t),
                        null
                }
                if (e = ln(Ye.current),
                    Li(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ke] = t,
                    r[Yr] = o,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            F("cancel", r),
                                F("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            F("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Cr.length; i++)
                                F(Cr[i], r);
                            break;
                        case "source":
                            F("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            F("error", r),
                                F("load", r);
                            break;
                        case "details":
                            F("toggle", r);
                            break;
                        case "input":
                            Gu(r, o),
                                F("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            },
                                F("invalid", r);
                            break;
                        case "textarea":
                            Yu(r, o),
                                F("invalid", r)
                    }
                    ua(n, o),
                        i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Oi(r.textContent, a, e),
                                i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Oi(r.textContent, a, e),
                                    i = ["children", "" + a]) : Fr.hasOwnProperty(s) && a != null && s === "onScroll" && F("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Ii(r),
                                Qu(r, o, !0);
                            break;
                        case "textarea":
                            Ii(r),
                                Ju(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = So)
                    }
                    r = i,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = If(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                                n === "select" && (s = e,
                                    r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                        e[Ke] = t,
                        e[Yr] = r,
                        Gp(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (s = ca(n, r),
                        n) {
                            case "dialog":
                                F("cancel", e),
                                    F("close", e),
                                    i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                F("load", e),
                                    i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Cr.length; i++)
                                    F(Cr[i], e);
                                i = r;
                                break;
                            case "source":
                                F("error", e),
                                    i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                F("error", e),
                                    F("load", e),
                                    i = r;
                                break;
                            case "details":
                                F("toggle", e),
                                    i = r;
                                break;
                            case "input":
                                Gu(e, r),
                                    i = ia(e, r),
                                    F("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    i = H({}, r, {
                                        value: void 0
                                    }),
                                    F("invalid", e);
                                break;
                            case "textarea":
                                Yu(e, r),
                                    i = aa(e, r),
                                    F("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        ua(n, i),
                            a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style" ? xf(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                                    l != null && Cf(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Br(e, l) : typeof l == "number" && Br(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Fr.hasOwnProperty(o) ? l != null && o === "onScroll" && F("scroll", e) : l != null && yl(e, o, l, s))
                            }
                        switch (n) {
                            case "input":
                                Ii(e),
                                    Qu(e, r, !1);
                                break;
                            case "textarea":
                                Ii(e),
                                    Ju(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    o = r.value,
                                    o != null ? Fn(e, !!r.multiple, o, !1) : r.defaultValue != null && Fn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = So)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return ae(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                Yp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(E(166));
                if (n = ln(Xr.current),
                    ln(Ye.current),
                    Li(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[Ke] = t,
                        (o = r.nodeValue !== n) && (e = Ce,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                Oi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Oi(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    o && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[Ke] = t,
                        t.stateNode = r
            }
            return ae(t),
                null;
        case 13:
            if (B(V),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if ($ && Ee !== null && t.mode & 1 && !(t.flags & 128))
                    pp(),
                        Qn(),
                        t.flags |= 98560,
                        o = !1;
                else if (o = Li(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(E(318));
                        if (o = t.memoizedState,
                            o = o !== null ? o.dehydrated : null,
                            !o)
                            throw Error(E(317));
                        o[Ke] = t
                    } else
                        Qn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    ae(t),
                        o = !1
                } else
                    ze !== null && (Wa(ze),
                        ze = null),
                        o = !0;
                if (!o)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || V.current & 1 ? X === 0 && (X = 3) : eu())),
                    t.updateQueue !== null && (t.flags |= 4),
                    ae(t),
                    null);
        case 4:
            return Jn(),
                ba(e, t),
                e === null && Gr(t.stateNode.containerInfo),
                ae(t),
                null;
        case 10:
            return jl(t.type._context),
                ae(t),
                null;
        case 17:
            return we(t.type) && Eo(),
                ae(t),
                null;
        case 19:
            if (B(V),
                o = t.memoizedState,
                o === null)
                return ae(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                s = o.rendering,
                s === null)
                if (r)
                    vr(o, !1);
                else {
                    if (X !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = No(e),
                                s !== null) {
                                for (t.flags |= 128,
                                    vr(o, !1),
                                    r = s.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    o = n,
                                        e = r,
                                        o.flags &= 14680066,
                                        s = o.alternate,
                                        s === null ? (o.childLanes = 0,
                                            o.lanes = e,
                                            o.child = null,
                                            o.subtreeFlags = 0,
                                            o.memoizedProps = null,
                                            o.memoizedState = null,
                                            o.updateQueue = null,
                                            o.dependencies = null,
                                            o.stateNode = null) : (o.childLanes = s.childLanes,
                                                o.lanes = s.lanes,
                                                o.child = s.child,
                                                o.subtreeFlags = 0,
                                                o.deletions = null,
                                                o.memoizedProps = s.memoizedProps,
                                                o.memoizedState = s.memoizedState,
                                                o.updateQueue = s.updateQueue,
                                                o.type = s.type,
                                                e = s.dependencies,
                                                o.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return U(V, V.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && G() > Zn && (t.flags |= 128,
                        r = !0,
                        vr(o, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = No(s),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            vr(o, !0),
                            o.tail === null && o.tailMode === "hidden" && !s.alternate && !$)
                            return ae(t),
                                null
                    } else
                        2 * G() - o.renderingStartTime > Zn && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            vr(o, !1),
                            t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child,
                    t.child = s) : (n = o.last,
                        n !== null ? n.sibling = s : t.child = s,
                        o.last = s)
            }
            return o.tail !== null ? (t = o.tail,
                o.rendering = t,
                o.tail = t.sibling,
                o.renderingStartTime = G(),
                t.sibling = null,
                n = V.current,
                U(V, r ? n & 1 | 2 : n & 1),
                t) : (ae(t),
                    null);
        case 22:
        case 23:
            return Zl(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Se & 1073741824 && (ae(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(E(156, t.tag))
}
function H1(e, t) {
    switch (Al(t),
    t.tag) {
        case 1:
            return we(t.type) && Eo(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return Jn(),
                B(ye),
                B(ce),
                $l(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return Bl(t),
                null;
        case 13:
            if (B(V),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(E(340));
                Qn()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return B(V),
                null;
        case 4:
            return Jn(),
                null;
        case 10:
            return jl(t.type._context),
                null;
        case 22:
        case 23:
            return Zl(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var Di = !1
    , le = !1
    , K1 = typeof WeakSet == "function" ? WeakSet : Set
    , k = null;
function Dn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                K(e, t, r)
            }
        else
            n.current = null
}
function ja(e, t, n) {
    try {
        n()
    } catch (r) {
        K(e, t, r)
    }
}
var Fc = !1;
function q1(e, t) {
    if (_a = yo,
        e = ep(),
        Ol(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                        , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                        , a = -1
                        , l = -1
                        , u = 0
                        , c = 0
                        , d = e
                        , h = null;
                    t: for (; ;) {
                        for (var v; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i),
                            d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r),
                            d.nodeType === 3 && (s += d.nodeValue.length),
                            (v = d.firstChild) !== null;)
                            h = d,
                                d = v;
                        for (; ;) {
                            if (d === e)
                                break t;
                            if (h === n && ++u === i && (a = s),
                                h === o && ++c === r && (l = s),
                                (v = d.nextSibling) !== null)
                                break;
                            d = h,
                                h = d.parentNode
                        }
                        d = v
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Sa = {
        focusedElem: e,
        selectionRange: n
    },
        yo = !1,
        k = t; k !== null;)
        if (t = k,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                k = e;
        else
            for (; k !== null;) {
                t = k;
                try {
                    var _ = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (_ !== null) {
                                    var S = _.memoizedProps
                                        , C = _.memoizedState
                                        , p = t.stateNode
                                        , f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? S : je(t.type, S), C);
                                    p.__reactInternalSnapshotBeforeUpdate = f
                                }
                                break;
                            case 3:
                                var m = t.stateNode.containerInfo;
                                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(E(163))
                        }
                } catch (w) {
                    K(t, t.return, w)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        k = e;
                    break
                }
                k = t.return
            }
    return _ = Fc,
        Fc = !1,
        _
}
function Lr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                    o !== void 0 && ja(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Zo(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ua(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Jp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        Jp(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[Ke],
                delete t[Yr],
                delete t[Ca],
                delete t[N1],
                delete t[R1])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function Xp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Bc(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Xp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function za(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = So));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (za(e, t, n),
            e = e.sibling; e !== null;)
            za(e, t, n),
                e = e.sibling
}
function Fa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Fa(e, t, n),
            e = e.sibling; e !== null;)
            Fa(e, t, n),
                e = e.sibling
}
var re = null
    , Ue = !1;
function yt(e, t, n) {
    for (n = n.child; n !== null;)
        Zp(e, t, n),
            n = n.sibling
}
function Zp(e, t, n) {
    if (Qe && typeof Qe.onCommitFiberUnmount == "function")
        try {
            Qe.onCommitFiberUnmount(Ho, n)
        } catch { }
    switch (n.tag) {
        case 5:
            le || Dn(n, t);
        case 6:
            var r = re
                , i = Ue;
            re = null,
                yt(e, t, n),
                re = r,
                Ue = i,
                re !== null && (Ue ? (e = re,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : re.removeChild(n.stateNode));
            break;
        case 18:
            re !== null && (Ue ? (e = re,
                n = n.stateNode,
                e.nodeType === 8 ? Ds(e.parentNode, n) : e.nodeType === 1 && Ds(e, n),
                Hr(e)) : Ds(re, n.stateNode));
            break;
        case 4:
            r = re,
                i = Ue,
                re = n.stateNode.containerInfo,
                Ue = !0,
                yt(e, t, n),
                re = r,
                Ue = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!le && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                i = r = r.next;
                do {
                    var o = i
                        , s = o.destroy;
                    o = o.tag,
                        s !== void 0 && (o & 2 || o & 4) && ja(n, t, s),
                        i = i.next
                } while (i !== r)
            }
            yt(e, t, n);
            break;
        case 1:
            if (!le && (Dn(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    K(n, t, a)
                }
            yt(e, t, n);
            break;
        case 21:
            yt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
                yt(e, t, n),
                le = r) : yt(e, t, n);
            break;
        default:
            yt(e, t, n)
    }
}
function $c(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new K1),
            t.forEach(function (r) {
                var i = nw.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(i, i))
            })
    }
}
function be(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                    , s = t
                    , a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            re = a.stateNode,
                                Ue = !1;
                            break e;
                        case 3:
                            re = a.stateNode.containerInfo,
                                Ue = !0;
                            break e;
                        case 4:
                            re = a.stateNode.containerInfo,
                                Ue = !0;
                            break e
                    }
                    a = a.return
                }
                if (re === null)
                    throw Error(E(160));
                Zp(o, s, i),
                    re = null,
                    Ue = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                    i.return = null
            } catch (u) {
                K(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            eh(t, e),
                t = t.sibling
}
function eh(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (be(t, e),
                We(e),
                r & 4) {
                try {
                    Lr(3, e, e.return),
                        Zo(3, e)
                } catch (S) {
                    K(e, e.return, S)
                }
                try {
                    Lr(5, e, e.return)
                } catch (S) {
                    K(e, e.return, S)
                }
            }
            break;
        case 1:
            be(t, e),
                We(e),
                r & 512 && n !== null && Dn(n, n.return);
            break;
        case 5:
            if (be(t, e),
                We(e),
                r & 512 && n !== null && Dn(n, n.return),
                e.flags & 32) {
                var i = e.stateNode;
                try {
                    Br(i, "")
                } catch (S) {
                    K(e, e.return, S)
                }
            }
            if (r & 4 && (i = e.stateNode,
                i != null)) {
                var o = e.memoizedProps
                    , s = n !== null ? n.memoizedProps : o
                    , a = e.type
                    , l = e.updateQueue;
                if (e.updateQueue = null,
                    l !== null)
                    try {
                        a === "input" && o.type === "radio" && o.name != null && Sf(i, o),
                            ca(a, s);
                        var u = ca(a, o);
                        for (s = 0; s < l.length; s += 2) {
                            var c = l[s]
                                , d = l[s + 1];
                            c === "style" ? xf(i, d) : c === "dangerouslySetInnerHTML" ? Cf(i, d) : c === "children" ? Br(i, d) : yl(i, c, d, u)
                        }
                        switch (a) {
                            case "input":
                                oa(i, o);
                                break;
                            case "textarea":
                                Ef(i, o);
                                break;
                            case "select":
                                var h = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var v = o.value;
                                v != null ? Fn(i, !!o.multiple, v, !1) : h !== !!o.multiple && (o.defaultValue != null ? Fn(i, !!o.multiple, o.defaultValue, !0) : Fn(i, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        i[Yr] = o
                    } catch (S) {
                        K(e, e.return, S)
                    }
            }
            break;
        case 6:
            if (be(t, e),
                We(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(E(162));
                i = e.stateNode,
                    o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (S) {
                    K(e, e.return, S)
                }
            }
            break;
        case 3:
            if (be(t, e),
                We(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Hr(t.containerInfo)
                } catch (S) {
                    K(e, e.return, S)
                }
            break;
        case 4:
            be(t, e),
                We(e);
            break;
        case 13:
            be(t, e),
                We(e),
                i = e.child,
                i.flags & 8192 && (o = i.memoizedState !== null,
                    i.stateNode.isHidden = o,
                    !o || i.alternate !== null && i.alternate.memoizedState !== null || (Jl = G())),
                r & 4 && $c(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (le = (u = le) || c,
                    be(t, e),
                    le = u) : be(t, e),
                We(e),
                r & 8192) {
                if (u = e.memoizedState !== null,
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (k = e,
                        c = e.child; c !== null;) {
                        for (d = k = c; k !== null;) {
                            switch (h = k,
                            v = h.child,
                            h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Lr(4, h, h.return);
                                    break;
                                case 1:
                                    Dn(h, h.return);
                                    var _ = h.stateNode;
                                    if (typeof _.componentWillUnmount == "function") {
                                        r = h,
                                            n = h.return;
                                        try {
                                            t = r,
                                                _.props = t.memoizedProps,
                                                _.state = t.memoizedState,
                                                _.componentWillUnmount()
                                        } catch (S) {
                                            K(r, n, S)
                                        }
                                    }
                                    break;
                                case 5:
                                    Dn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Wc(d);
                                        continue
                                    }
                            }
                            v !== null ? (v.return = h,
                                k = v) : Wc(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null,
                    d = e; ;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode,
                                    u ? (o = i.style,
                                        typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode,
                                            l = d.memoizedProps.style,
                                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                                            a.style.display = kf("display", s))
                            } catch (S) {
                                K(e, e.return, S)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps
                            } catch (S) {
                                K(e, e.return, S)
                            }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d,
                            d = d.child;
                        continue
                    }
                    if (d === e)
                        break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e)
                            break e;
                        c === d && (c = null),
                            d = d.return
                    }
                    c === d && (c = null),
                        d.sibling.return = d.return,
                        d = d.sibling
                }
            }
            break;
        case 19:
            be(t, e),
                We(e),
                r & 4 && $c(e);
            break;
        case 21:
            break;
        default:
            be(t, e),
                We(e)
    }
}
function We(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Xp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(E(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Br(i, ""),
                        r.flags &= -33);
                    var o = Bc(e);
                    Fa(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo
                        , a = Bc(e);
                    za(e, a, s);
                    break;
                default:
                    throw Error(E(161))
            }
        } catch (l) {
            K(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function G1(e, t, n) {
    k = e,
        th(e)
}
function th(e, t, n) {
    for (var r = (e.mode & 1) !== 0; k !== null;) {
        var i = k
            , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Di;
            if (!s) {
                var a = i.alternate
                    , l = a !== null && a.memoizedState !== null || le;
                a = Di;
                var u = le;
                if (Di = s,
                    (le = l) && !u)
                    for (k = i; k !== null;)
                        s = k,
                            l = s.child,
                            s.tag === 22 && s.memoizedState !== null ? Hc(i) : l !== null ? (l.return = s,
                                k = l) : Hc(i);
                for (; o !== null;)
                    k = o,
                        th(o),
                        o = o.sibling;
                k = i,
                    Di = a,
                    le = u
            }
            Vc(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
                k = o) : Vc(e)
    }
}
function Vc(e) {
    for (; k !== null;) {
        var t = k;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            le || Zo(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !le)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : je(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var o = t.updateQueue;
                            o !== null && xc(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                xc(t, s, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && Hr(d)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(E(163))
                    }
                le || t.flags & 512 && Ua(t)
            } catch (h) {
                K(t, t.return, h)
            }
        }
        if (t === e) {
            k = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                k = n;
            break
        }
        k = t.return
    }
}
function Wc(e) {
    for (; k !== null;) {
        var t = k;
        if (t === e) {
            k = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                k = n;
            break
        }
        k = t.return
    }
}
function Hc(e) {
    for (; k !== null;) {
        var t = k;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Zo(4, t)
                    } catch (l) {
                        K(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            K(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        Ua(t)
                    } catch (l) {
                        K(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Ua(t)
                    } catch (l) {
                        K(t, s, l)
                    }
            }
        } catch (l) {
            K(t, t.return, l)
        }
        if (t === e) {
            k = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
                k = a;
            break
        }
        k = t.return
    }
}
var Q1 = Math.ceil
    , Lo = gt.ReactCurrentDispatcher
    , Ql = gt.ReactCurrentOwner
    , Oe = gt.ReactCurrentBatchConfig
    , D = 0
    , ne = null
    , Y = null
    , ie = 0
    , Se = 0
    , bn = Kt(0)
    , X = 0
    , ni = null
    , yn = 0
    , es = 0
    , Yl = 0
    , Ar = null
    , me = null
    , Jl = 0
    , Zn = 1 / 0
    , et = null
    , Ao = !1
    , Ba = null
    , jt = null
    , bi = !1
    , Tt = null
    , Mo = 0
    , Mr = 0
    , $a = null
    , Xi = -1
    , Zi = 0;
function fe() {
    return D & 6 ? G() : Xi !== -1 ? Xi : Xi = G()
}
function Ut(e) {
    return e.mode & 1 ? D & 2 && ie !== 0 ? ie & -ie : L1.transition !== null ? (Zi === 0 && (Zi = Uf()),
        Zi) : (e = b,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Hf(e.type)),
            e) : 1
}
function Be(e, t, n, r) {
    if (50 < Mr)
        throw Mr = 0,
        $a = null,
        Error(E(185));
    pi(e, n, r),
        (!(D & 2) || e !== ne) && (e === ne && (!(D & 2) && (es |= n),
            X === 4 && kt(e, ie)),
            _e(e, r),
            n === 1 && D === 0 && !(t.mode & 1) && (Zn = G() + 500,
                Yo && qt()))
}
function _e(e, t) {
    var n = e.callbackNode;
    L0(e, t);
    var r = vo(e, e === ne ? ie : 0);
    if (r === 0)
        n !== null && ec(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && ec(n),
            t === 1)
            e.tag === 0 ? O1(Kc.bind(null, e)) : cp(Kc.bind(null, e)),
                P1(function () {
                    !(D & 6) && qt()
                }),
                n = null;
        else {
            switch (zf(r)) {
                case 1:
                    n = Il;
                    break;
                case 4:
                    n = bf;
                    break;
                case 16:
                    n = go;
                    break;
                case 536870912:
                    n = jf;
                    break;
                default:
                    n = go
            }
            n = uh(n, nh.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function nh(e, t) {
    if (Xi = -1,
        Zi = 0,
        D & 6)
        throw Error(E(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n)
        return null;
    var r = vo(e, e === ne ? ie : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Do(e, r);
    else {
        t = r;
        var i = D;
        D |= 2;
        var o = ih();
        (ne !== e || ie !== t) && (et = null,
            Zn = G() + 500,
            cn(e, t));
        do
            try {
                X1();
                break
            } catch (a) {
                rh(e, a)
            }
        while (!0);
        bl(),
            Lo.current = o,
            D = i,
            Y !== null ? t = 0 : (ne = null,
                ie = 0,
                t = X)
    }
    if (t !== 0) {
        if (t === 2 && (i = ma(e),
            i !== 0 && (r = i,
                t = Va(e, i))),
            t === 1)
            throw n = ni,
            cn(e, 0),
            kt(e, r),
            _e(e, G()),
            n;
        if (t === 6)
            kt(e, r);
        else {
            if (i = e.current.alternate,
                !(r & 30) && !Y1(i) && (t = Do(e, r),
                    t === 2 && (o = ma(e),
                        o !== 0 && (r = o,
                            t = Va(e, o))),
                    t === 1))
                throw n = ni,
                cn(e, 0),
                kt(e, r),
                _e(e, G()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    nn(e, me, et);
                    break;
                case 3:
                    if (kt(e, r),
                        (r & 130023424) === r && (t = Jl + 500 - G(),
                            10 < t)) {
                        if (vo(e, 0) !== 0)
                            break;
                        if (i = e.suspendedLanes,
                            (i & r) !== r) {
                            fe(),
                                e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Ia(nn.bind(null, e, me, et), t);
                        break
                    }
                    nn(e, me, et);
                    break;
                case 4:
                    if (kt(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        i = -1; 0 < r;) {
                        var s = 31 - Fe(r);
                        o = 1 << s,
                            s = t[s],
                            s > i && (i = s),
                            r &= ~o
                    }
                    if (r = i,
                        r = G() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Q1(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = Ia(nn.bind(null, e, me, et), r);
                        break
                    }
                    nn(e, me, et);
                    break;
                case 5:
                    nn(e, me, et);
                    break;
                default:
                    throw Error(E(329))
            }
        }
    }
    return _e(e, G()),
        e.callbackNode === n ? nh.bind(null, e) : null
}
function Va(e, t) {
    var n = Ar;
    return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
        e = Do(e, t),
        e !== 2 && (t = me,
            me = n,
            t !== null && Wa(t)),
        e
}
function Wa(e) {
    me === null ? me = e : me.push.apply(me, e)
}
function Y1(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                        , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!$e(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function kt(e, t) {
    for (t &= ~Yl,
        t &= ~es,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - Fe(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function Kc(e) {
    if (D & 6)
        throw Error(E(327));
    Hn();
    var t = vo(e, 0);
    if (!(t & 1))
        return _e(e, G()),
            null;
    var n = Do(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ma(e);
        r !== 0 && (t = r,
            n = Va(e, r))
    }
    if (n === 1)
        throw n = ni,
        cn(e, 0),
        kt(e, t),
        _e(e, G()),
        n;
    if (n === 6)
        throw Error(E(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        nn(e, me, et),
        _e(e, G()),
        null
}
function Xl(e, t) {
    var n = D;
    D |= 1;
    try {
        return e(t)
    } finally {
        D = n,
            D === 0 && (Zn = G() + 500,
                Yo && qt())
    }
}
function wn(e) {
    Tt !== null && Tt.tag === 0 && !(D & 6) && Hn();
    var t = D;
    D |= 1;
    var n = Oe.transition
        , r = b;
    try {
        if (Oe.transition = null,
            b = 1,
            e)
            return e()
    } finally {
        b = r,
            Oe.transition = n,
            D = t,
            !(D & 6) && qt()
    }
}
function Zl() {
    Se = bn.current,
        B(bn)
}
function cn(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        x1(n)),
        Y !== null)
        for (n = Y.return; n !== null;) {
            var r = n;
            switch (Al(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && Eo();
                    break;
                case 3:
                    Jn(),
                        B(ye),
                        B(ce),
                        $l();
                    break;
                case 5:
                    Bl(r);
                    break;
                case 4:
                    Jn();
                    break;
                case 13:
                    B(V);
                    break;
                case 19:
                    B(V);
                    break;
                case 10:
                    jl(r.type._context);
                    break;
                case 22:
                case 23:
                    Zl()
            }
            n = n.return
        }
    if (ne = e,
        Y = e = zt(e.current, null),
        ie = Se = t,
        X = 0,
        ni = null,
        Yl = es = yn = 0,
        me = Ar = null,
        an !== null) {
        for (t = 0; t < an.length; t++)
            if (n = an[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var i = r.next
                    , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                        r.next = s
                }
                n.pending = r
            }
        an = null
    }
    return e
}
function rh(e, t) {
    do {
        var n = Y;
        try {
            if (bl(),
                Qi.current = Oo,
                Ro) {
                for (var r = W.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                        r = r.next
                }
                Ro = !1
            }
            if (vn = 0,
                ee = J = W = null,
                Or = !1,
                Zr = 0,
                Ql.current = null,
                n === null || n.return === null) {
                X = 1,
                    ni = t,
                    Y = null;
                break
            }
            e: {
                var o = e
                    , s = n.return
                    , a = n
                    , l = t;
                if (t = ie,
                    a.flags |= 32768,
                    l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                        , c = a
                        , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue,
                            c.memoizedState = h.memoizedState,
                            c.lanes = h.lanes) : (c.updateQueue = null,
                                c.memoizedState = null)
                    }
                    var v = Ac(s);
                    if (v !== null) {
                        v.flags &= -257,
                            Mc(v, s, a, o, t),
                            v.mode & 1 && Lc(o, u, t),
                            t = v,
                            l = u;
                        var _ = t.updateQueue;
                        if (_ === null) {
                            var S = new Set;
                            S.add(l),
                                t.updateQueue = S
                        } else
                            _.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Lc(o, u, t),
                                eu();
                            break e
                        }
                        l = Error(E(426))
                    }
                } else if ($ && a.mode & 1) {
                    var C = Ac(s);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256),
                            Mc(C, s, a, o, t),
                            Ml(Xn(l, a));
                        break e
                    }
                }
                o = l = Xn(l, a),
                    X !== 4 && (X = 2),
                    Ar === null ? Ar = [o] : Ar.push(o),
                    o = s;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536,
                                t &= -t,
                                o.lanes |= t;
                            var p = Fp(o, l, t);
                            kc(o, p);
                            break e;
                        case 1:
                            a = l;
                            var f = o.type
                                , m = o.stateNode;
                            if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (jt === null || !jt.has(m)))) {
                                o.flags |= 65536,
                                    t &= -t,
                                    o.lanes |= t;
                                var w = Bp(o, a, t);
                                kc(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            sh(n)
        } catch (I) {
            t = I,
                Y === n && n !== null && (Y = n = n.return);
            continue
        }
        break
    } while (!0)
}
function ih() {
    var e = Lo.current;
    return Lo.current = Oo,
        e === null ? Oo : e
}
function eu() {
    (X === 0 || X === 3 || X === 2) && (X = 4),
        ne === null || !(yn & 268435455) && !(es & 268435455) || kt(ne, ie)
}
function Do(e, t) {
    var n = D;
    D |= 2;
    var r = ih();
    (ne !== e || ie !== t) && (et = null,
        cn(e, t));
    do
        try {
            J1();
            break
        } catch (i) {
            rh(e, i)
        }
    while (!0);
    if (bl(),
        D = n,
        Lo.current = r,
        Y !== null)
        throw Error(E(261));
    return ne = null,
        ie = 0,
        X
}
function J1() {
    for (; Y !== null;)
        oh(Y)
}
function X1() {
    for (; Y !== null && !I0();)
        oh(Y)
}
function oh(e) {
    var t = lh(e.alternate, e, Se);
    e.memoizedProps = e.pendingProps,
        t === null ? sh(e) : Y = t,
        Ql.current = null
}
function sh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = H1(n, t),
                n !== null) {
                n.flags &= 32767,
                    Y = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                X = 6,
                    Y = null;
                return
            }
        } else if (n = W1(n, t, Se),
            n !== null) {
            Y = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            Y = t;
            return
        }
        Y = t = e
    } while (t !== null);
    X === 0 && (X = 5)
}
function nn(e, t, n) {
    var r = b
        , i = Oe.transition;
    try {
        Oe.transition = null,
            b = 1,
            Z1(e, t, n, r)
    } finally {
        Oe.transition = i,
            b = r
    }
    return null
}
function Z1(e, t, n, r) {
    do
        Hn();
    while (Tt !== null);
    if (D & 6)
        throw Error(E(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(E(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (A0(e, o),
        e === ne && (Y = ne = null,
            ie = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || bi || (bi = !0,
            uh(go, function () {
                return Hn(),
                    null
            })),
        o = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || o) {
        o = Oe.transition,
            Oe.transition = null;
        var s = b;
        b = 1;
        var a = D;
        D |= 4,
            Ql.current = null,
            q1(e, n),
            eh(n, e),
            w1(Sa),
            yo = !!_a,
            Sa = _a = null,
            e.current = n,
            G1(n),
            C0(),
            D = a,
            b = s,
            Oe.transition = o
    } else
        e.current = n;
    if (bi && (bi = !1,
        Tt = e,
        Mo = i),
        o = e.pendingLanes,
        o === 0 && (jt = null),
        P0(n.stateNode),
        _e(e, G()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            i = t[n],
                r(i.value, {
                    componentStack: i.stack,
                    digest: i.digest
                });
    if (Ao)
        throw Ao = !1,
        e = Ba,
        Ba = null,
        e;
    return Mo & 1 && e.tag !== 0 && Hn(),
        o = e.pendingLanes,
        o & 1 ? e === $a ? Mr++ : (Mr = 0,
            $a = e) : Mr = 0,
        qt(),
        null
}
function Hn() {
    if (Tt !== null) {
        var e = zf(Mo)
            , t = Oe.transition
            , n = b;
        try {
            if (Oe.transition = null,
                b = 16 > e ? 16 : e,
                Tt === null)
                var r = !1;
            else {
                if (e = Tt,
                    Tt = null,
                    Mo = 0,
                    D & 6)
                    throw Error(E(331));
                var i = D;
                for (D |= 4,
                    k = e.current; k !== null;) {
                    var o = k
                        , s = o.child;
                    if (k.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (k = u; k !== null;) {
                                    var c = k;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Lr(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                            k = d;
                                    else
                                        for (; k !== null;) {
                                            c = k;
                                            var h = c.sibling
                                                , v = c.return;
                                            if (Jp(c),
                                                c === u) {
                                                k = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v,
                                                    k = h;
                                                break
                                            }
                                            k = v
                                        }
                                }
                            }
                            var _ = o.alternate;
                            if (_ !== null) {
                                var S = _.child;
                                if (S !== null) {
                                    _.child = null;
                                    do {
                                        var C = S.sibling;
                                        S.sibling = null,
                                            S = C
                                    } while (S !== null)
                                }
                            }
                            k = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                            k = s;
                    else
                        e: for (; k !== null;) {
                            if (o = k,
                                o.flags & 2048)
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Lr(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                    k = p;
                                break e
                            }
                            k = o.return
                        }
                }
                var f = e.current;
                for (k = f; k !== null;) {
                    s = k;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                            k = m;
                    else
                        e: for (s = f; k !== null;) {
                            if (a = k,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zo(9, a)
                                    }
                                } catch (I) {
                                    K(a, a.return, I)
                                }
                            if (a === s) {
                                k = null;
                                break e
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                w.return = a.return,
                                    k = w;
                                break e
                            }
                            k = a.return
                        }
                }
                if (D = i,
                    qt(),
                    Qe && typeof Qe.onPostCommitFiberRoot == "function")
                    try {
                        Qe.onPostCommitFiberRoot(Ho, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            b = n,
                Oe.transition = t
        }
    }
    return !1
}
function qc(e, t, n) {
    t = Xn(n, t),
        t = Fp(e, t, 1),
        e = bt(e, t, 1),
        t = fe(),
        e !== null && (pi(e, 1, t),
            _e(e, t))
}
function K(e, t, n) {
    if (e.tag === 3)
        qc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                qc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
                    e = Xn(n, e),
                        e = Bp(t, e, 1),
                        t = bt(t, e, 1),
                        e = fe(),
                        t !== null && (pi(t, 1, e),
                            _e(t, e));
                    break
                }
            }
            t = t.return
        }
}
function ew(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = fe(),
        e.pingedLanes |= e.suspendedLanes & n,
        ne === e && (ie & n) === n && (X === 4 || X === 3 && (ie & 130023424) === ie && 500 > G() - Jl ? cn(e, 0) : Yl |= n),
        _e(e, t)
}
function ah(e, t) {
    t === 0 && (e.mode & 1 ? (t = xi,
        xi <<= 1,
        !(xi & 130023424) && (xi = 4194304)) : t = 1);
    var n = fe();
    e = dt(e, t),
        e !== null && (pi(e, t, n),
            _e(e, n))
}
function tw(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        ah(e, n)
}
function nw(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(E(314))
    }
    r !== null && r.delete(t),
        ah(e, n)
}
var lh;
lh = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ye.current)
            ge = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ge = !1,
                    V1(e, t, n);
            ge = !!(e.flags & 131072)
        }
    else
        ge = !1,
            $ && t.flags & 1048576 && dp(t, ko, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            Ji(e, t),
                e = t.pendingProps;
            var i = Gn(t, ce.current);
            Wn(t, n),
                i = Wl(null, t, r, e, i, n);
            var o = Hl();
            return t.flags |= 1,
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    we(r) ? (o = !0,
                        Io(t)) : o = !1,
                    t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
                    zl(t),
                    i.updater = Jo,
                    t.stateNode = i,
                    i._reactInternals = t,
                    Ra(t, r, e, n),
                    t = Aa(null, t, r, !0, o, n)) : (t.tag = 0,
                        $ && o && Ll(t),
                        de(null, t, i, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ji(e, t),
                e = t.pendingProps,
                i = r._init,
                r = i(r._payload),
                t.type = r,
                i = t.tag = iw(r),
                e = je(r, e),
                i) {
                    case 0:
                        t = La(null, t, r, e, n);
                        break e;
                    case 1:
                        t = jc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Dc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = bc(null, t, r, je(r.type, e), n);
                        break e
                }
                throw Error(E(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : je(r, i),
                La(e, t, r, i, n);
        case 1:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : je(r, i),
                jc(e, t, r, i, n);
        case 3:
            e: {
                if (Hp(t),
                    e === null)
                    throw Error(E(387));
                r = t.pendingProps,
                    o = t.memoizedState,
                    i = o.element,
                    mp(e, t),
                    To(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element,
                    o.isDehydrated)
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                        transitions: s.transitions
                    },
                        t.updateQueue.baseState = o,
                        t.memoizedState = o,
                        t.flags & 256) {
                        i = Xn(Error(E(423)), t),
                            t = Uc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = Xn(Error(E(424)), t),
                            t = Uc(e, t, r, n, i);
                        break e
                    } else
                        for (Ee = Dt(t.stateNode.containerInfo.firstChild),
                            Ce = t,
                            $ = !0,
                            ze = null,
                            n = wp(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (Qn(),
                        r === i) {
                        t = ft(e, t, n);
                        break e
                    }
                    de(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return _p(t),
                e === null && Pa(t),
                r = t.type,
                i = t.pendingProps,
                o = e !== null ? e.memoizedProps : null,
                s = i.children,
                Ea(r, i) ? s = null : o !== null && Ea(r, o) && (t.flags |= 32),
                Wp(e, t),
                de(e, t, s, n),
                t.child;
        case 6:
            return e === null && Pa(t),
                null;
        case 13:
            return Kp(e, t, n);
        case 4:
            return Fl(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = Yn(t, null, r, n) : de(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : je(r, i),
                Dc(e, t, r, i, n);
        case 7:
            return de(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return de(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return de(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    i = t.pendingProps,
                    o = t.memoizedProps,
                    s = i.value,
                    U(xo, r._currentValue),
                    r._currentValue = s,
                    o !== null)
                    if ($e(o.value, s)) {
                        if (o.children === i.children && !ye.current) {
                            t = ft(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child,
                            o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            l = at(-1, n & -n),
                                                l.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next,
                                                    c.next = l),
                                                    u.pending = l
                                            }
                                        }
                                        o.lanes |= n,
                                            l = o.alternate,
                                            l !== null && (l.lanes |= n),
                                            Ta(o.return, n, t),
                                            a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (o.tag === 10)
                                s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return,
                                    s === null)
                                    throw Error(E(341));
                                s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    Ta(s, n, t),
                                    s = o.sibling
                            } else
                                s = o.child;
                            if (s !== null)
                                s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling,
                                        o !== null) {
                                        o.return = s.return,
                                            s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                de(e, t, i.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return i = t.type,
                r = t.pendingProps.children,
                Wn(t, n),
                i = Ae(i),
                r = r(i),
                t.flags |= 1,
                de(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                i = je(r, t.pendingProps),
                i = je(r.type, i),
                bc(e, t, r, i, n);
        case 15:
            return $p(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : je(r, i),
                Ji(e, t),
                t.tag = 1,
                we(r) ? (e = !0,
                    Io(t)) : e = !1,
                Wn(t, n),
                vp(t, r, i),
                Ra(t, r, i, n),
                Aa(null, t, r, !0, e, n);
        case 19:
            return qp(e, t, n);
        case 22:
            return Vp(e, t, n)
    }
    throw Error(E(156, t.tag))
}
    ;
function uh(e, t) {
    return Df(e, t)
}
function rw(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function Re(e, t, n, r) {
    return new rw(e, t, n, r)
}
function tu(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function iw(e) {
    if (typeof e == "function")
        return tu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === _l)
            return 11;
        if (e === Sl)
            return 14
    }
    return 2
}
function zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Re(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function eo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
        typeof e == "function")
        tu(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
            case xn:
                return dn(n.children, i, o, t);
            case wl:
                s = 8,
                    i |= 8;
                break;
            case ea:
                return e = Re(12, n, t, i | 2),
                    e.elementType = ea,
                    e.lanes = o,
                    e;
            case ta:
                return e = Re(13, n, t, i),
                    e.elementType = ta,
                    e.lanes = o,
                    e;
            case na:
                return e = Re(19, n, t, i),
                    e.elementType = na,
                    e.lanes = o,
                    e;
            case yf:
                return ts(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case gf:
                            s = 10;
                            break e;
                        case vf:
                            s = 9;
                            break e;
                        case _l:
                            s = 11;
                            break e;
                        case Sl:
                            s = 14;
                            break e;
                        case wt:
                            s = 16,
                                r = null;
                            break e
                    }
                throw Error(E(130, e == null ? e : typeof e, ""))
        }
    return t = Re(s, n, t, i),
        t.elementType = e,
        t.type = r,
        t.lanes = o,
        t
}
function dn(e, t, n, r) {
    return e = Re(7, e, r, t),
        e.lanes = n,
        e
}
function ts(e, t, n, r) {
    return e = Re(22, e, r, t),
        e.elementType = yf,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function Vs(e, t, n) {
    return e = Re(6, e, null, t),
        e.lanes = n,
        e
}
function Ws(e, t, n) {
    return t = Re(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function ow(e, t, n, r, i) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Cs(0),
        this.expirationTimes = Cs(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Cs(0),
        this.identifierPrefix = r,
        this.onRecoverableError = i,
        this.mutableSourceEagerHydrationData = null
}
function nu(e, t, n, r, i, o, s, a, l) {
    return e = new ow(e, t, n, a, l),
        t === 1 ? (t = 1,
            o === !0 && (t |= 8)) : t = 0,
        o = Re(3, null, null, t),
        e.current = o,
        o.stateNode = e,
        o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        zl(o),
        e
}
function sw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: kn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function ch(e) {
    if (!e)
        return $t;
    e = e._reactInternals;
    e: {
        if (Sn(e) !== e || e.tag !== 1)
            throw Error(E(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (we(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(E(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (we(n))
            return up(e, n, t)
    }
    return t
}
function dh(e, t, n, r, i, o, s, a, l) {
    return e = nu(n, r, !0, e, i, o, s, a, l),
        e.context = ch(null),
        n = e.current,
        r = fe(),
        i = Ut(n),
        o = at(r, i),
        o.callback = t ?? null,
        bt(n, o, i),
        e.current.lanes = i,
        pi(e, i, r),
        _e(e, r),
        e
}
function ns(e, t, n, r) {
    var i = t.current
        , o = fe()
        , s = Ut(i);
    return n = ch(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = at(o, s),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = bt(i, t, s),
        e !== null && (Be(e, i, s, o),
            Gi(e, i, s)),
        s
}
function bo(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function Gc(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ru(e, t) {
    Gc(e, t),
        (e = e.alternate) && Gc(e, t)
}
function aw() {
    return null
}
var fh = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function iu(e) {
    this._internalRoot = e
}
rs.prototype.render = iu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(E(409));
    ns(e, t, null, null)
}
    ;
rs.prototype.unmount = iu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wn(function () {
            ns(null, e, null, null)
        }),
            t[ct] = null
    }
}
    ;
function rs(e) {
    this._internalRoot = e
}
rs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = $f();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++)
            ;
        Ct.splice(n, 0, e),
            n === 0 && Wf(e)
    }
}
    ;
function ou(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function is(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Qc() { }
function lw(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = bo(s);
                o.call(u)
            }
        }
        var s = dh(t, r, e, 0, null, !1, !1, "", Qc);
        return e._reactRootContainer = s,
            e[ct] = s.current,
            Gr(e.nodeType === 8 ? e.parentNode : e),
            wn(),
            s
    }
    for (; i = e.lastChild;)
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = bo(l);
            a.call(u)
        }
    }
    var l = nu(e, 0, !1, null, null, !1, !1, "", Qc);
    return e._reactRootContainer = l,
        e[ct] = l.current,
        Gr(e.nodeType === 8 ? e.parentNode : e),
        wn(function () {
            ns(t, l, n, r)
        }),
        l
}
function os(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = bo(s);
                a.call(l)
            }
        }
        ns(t, s, e, i)
    } else
        s = lw(n, t, e, i, r);
    return bo(s)
}
Ff = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ir(t.pendingLanes);
                n !== 0 && (Cl(t, n | 1),
                    _e(t, G()),
                    !(D & 6) && (Zn = G() + 500,
                        qt()))
            }
            break;
        case 13:
            wn(function () {
                var r = dt(e, 1);
                if (r !== null) {
                    var i = fe();
                    Be(r, e, 1, i)
                }
            }),
                ru(e, 1)
    }
}
    ;
kl = function (e) {
    if (e.tag === 13) {
        var t = dt(e, 134217728);
        if (t !== null) {
            var n = fe();
            Be(t, e, 134217728, n)
        }
        ru(e, 134217728)
    }
}
    ;
Bf = function (e) {
    if (e.tag === 13) {
        var t = Ut(e)
            , n = dt(e, t);
        if (n !== null) {
            var r = fe();
            Be(n, e, t, r)
        }
        ru(e, t)
    }
}
    ;
$f = function () {
    return b
}
    ;
Vf = function (e, t) {
    var n = b;
    try {
        return b = e,
            t()
    } finally {
        b = n
    }
}
    ;
fa = function (e, t, n) {
    switch (t) {
        case "input":
            if (oa(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Qo(r);
                        if (!i)
                            throw Error(E(90));
                        _f(r),
                            oa(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Ef(e, n);
            break;
        case "select":
            t = n.value,
                t != null && Fn(e, !!n.multiple, t, !1)
    }
}
    ;
Nf = Xl;
Rf = wn;
var uw = {
    usingClientEntryPoint: !1,
    Events: [mi, Rn, Qo, Pf, Tf, Xl]
}
    , yr = {
        findFiberByHostInstance: sn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    }
    , cw = {
        bundleType: yr.bundleType,
        version: yr.version,
        rendererPackageName: yr.rendererPackageName,
        rendererConfig: yr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: gt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Af(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: yr.findFiberByHostInstance || aw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ji.isDisabled && ji.supportsFiber)
        try {
            Ho = ji.inject(cw),
                Qe = ji
        } catch { }
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uw;
xe.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ou(t))
        throw Error(E(200));
    return sw(e, t, null, n)
}
    ;
xe.createRoot = function (e, t) {
    if (!ou(e))
        throw Error(E(299));
    var n = !1
        , r = ""
        , i = fh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = nu(e, 1, !1, null, null, n, !1, r, i),
        e[ct] = t.current,
        Gr(e.nodeType === 8 ? e.parentNode : e),
        new iu(t)
}
    ;
xe.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","),
            Error(E(268, e)));
    return e = Af(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
xe.flushSync = function (e) {
    return wn(e)
}
    ;
xe.hydrate = function (e, t, n) {
    if (!is(t))
        throw Error(E(200));
    return os(null, e, t, !0, n)
}
    ;
xe.hydrateRoot = function (e, t, n) {
    if (!ou(e))
        throw Error(E(405));
    var r = n != null && n.hydratedSources || null
        , i = !1
        , o = ""
        , s = fh;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        t = dh(t, null, e, 1, n ?? null, i, !1, o, s),
        e[ct] = t.current,
        Gr(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                i = n._getVersion,
                i = i(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new rs(t)
}
    ;
xe.render = function (e, t, n) {
    if (!is(t))
        throw Error(E(200));
    return os(null, e, t, !1, n)
}
    ;
xe.unmountComponentAtNode = function (e) {
    if (!is(e))
        throw Error(E(40));
    return e._reactRootContainer ? (wn(function () {
        os(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[ct] = null
        })
    }),
        !0) : !1
}
    ;
xe.unstable_batchedUpdates = Xl;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!is(n))
        throw Error(E(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(E(38));
    return os(e, t, n, !1, r)
}
    ;
xe.version = "18.2.0-next-9e3b772b8-20220608";
function ph() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ph)
        } catch (e) {
            console.error(e)
        }
}
ph(),
    df.exports = xe;
var dw = df.exports;
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ri() {
    return ri = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        ri.apply(this, arguments)
}
var Nt;
(function (e) {
    e.Pop = "POP",
        e.Push = "PUSH",
        e.Replace = "REPLACE"
}
)(Nt || (Nt = {}));
const Yc = "popstate";
function fw(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let { pathname: o, search: s, hash: a } = r.location;
        return Ha("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : jo(i)
    }
    return hw(t, n, null, e)
}
function Q(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function su(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}
function pw() {
    return Math.random().toString(36).substr(2, 8)
}
function Jc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ha(e, t, n, r) {
    return n === void 0 && (n = null),
        ri({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? or(t) : t, {
            state: n,
            key: t && t.key || r || pw()
        })
}
function jo(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
}
function or(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
            e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
            e = e.substr(0, r)),
            e && (t.pathname = e)
    }
    return t
}
function hw(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: o = !1 } = r
        , s = i.history
        , a = Nt.Pop
        , l = null
        , u = c();
    u == null && (u = 0,
        s.replaceState(ri({}, s.state, {
            idx: u
        }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Nt.Pop;
        let C = c()
            , p = C == null ? null : C - u;
        u = C,
            l && l({
                action: a,
                location: S.location,
                delta: p
            })
    }
    function h(C, p) {
        a = Nt.Push;
        let f = Ha(S.location, C, p);
        n && n(f, C),
            u = c() + 1;
        let m = Jc(f, u)
            , w = S.createHref(f);
        try {
            s.pushState(m, "", w)
        } catch (I) {
            if (I instanceof DOMException && I.name === "DataCloneError")
                throw I;
            i.location.assign(w)
        }
        o && l && l({
            action: a,
            location: S.location,
            delta: 1
        })
    }
    function v(C, p) {
        a = Nt.Replace;
        let f = Ha(S.location, C, p);
        n && n(f, C),
            u = c();
        let m = Jc(f, u)
            , w = S.createHref(f);
        s.replaceState(m, "", w),
            o && l && l({
                action: a,
                location: S.location,
                delta: 0
            })
    }
    function _(C) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href
            , f = typeof C == "string" ? C : jo(C);
        return Q(p, "No window.location.(origin|href) available to create URL for href: " + f),
            new URL(f, p)
    }
    let S = {
        get action() {
            return a
        },
        get location() {
            return e(i, s)
        },
        listen(C) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Yc, d),
                l = C,
                () => {
                    i.removeEventListener(Yc, d),
                        l = null
                }
        },
        createHref(C) {
            return t(i, C)
        },
        createURL: _,
        encodeLocation(C) {
            let p = _(C);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: h,
        replace: v,
        go(C) {
            return s.go(C)
        }
    };
    return S
}
var Xc;
(function (e) {
    e.data = "data",
        e.deferred = "deferred",
        e.redirect = "redirect",
        e.error = "error"
}
)(Xc || (Xc = {}));
function mw(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? or(t) : t
        , i = au(r.pathname || "/", n);
    if (i == null)
        return null;
    let o = hh(e);
    gw(o);
    let s = null;
    for (let a = 0; s == null && a < o.length; ++a)
        s = kw(o[a], Tw(i));
    return s
}
function hh(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (Q(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
            l.relativePath = l.relativePath.slice(r.length));
        let u = Ft([r, l.relativePath])
            , c = n.concat(l);
        o.children && o.children.length > 0 && (Q(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
            hh(o.children, t, c, u)),
            !(o.path == null && !o.index) && t.push({
                path: u,
                score: Iw(u, o.index),
                routesMeta: c
            })
    }
        ;
    return e.forEach((o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            i(o, s);
        else
            for (let l of mh(o.path))
                i(o, s, l)
    }
    ),
        t
}
function mh(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let [n, ...r] = t
        , i = n.endsWith("?")
        , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let s = mh(r.join("/"))
        , a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))),
        i && a.push(...s),
        a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function gw(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Cw(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const vw = /^:[\w-]+$/
    , yw = 3
    , ww = 2
    , _w = 1
    , Sw = 10
    , Ew = -2
    , Zc = e => e === "*";
function Iw(e, t) {
    let n = e.split("/")
        , r = n.length;
    return n.some(Zc) && (r += Ew),
        t && (r += ww),
        n.filter(i => !Zc(i)).reduce((i, o) => i + (vw.test(o) ? yw : o === "" ? _w : Sw), r)
}
function Cw(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function kw(e, t) {
    let { routesMeta: n } = e
        , r = {}
        , i = "/"
        , o = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s]
            , l = s === n.length - 1
            , u = i === "/" ? t : t.slice(i.length) || "/"
            , c = xw({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: l
            }, u);
        if (!c)
            return null;
        Object.assign(r, c.params);
        let d = a.route;
        o.push({
            params: r,
            pathname: Ft([i, c.pathname]),
            pathnameBase: Aw(Ft([i, c.pathnameBase])),
            route: d
        }),
            c.pathnameBase !== "/" && (i = Ft([i, c.pathnameBase]))
    }
    return o
}
function xw(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Pw(e.path, e.caseSensitive, e.end)
        , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
        , s = o.replace(/(.)\/+$/, "$1")
        , a = i.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let { paramName: h, isOptional: v } = c;
            if (h === "*") {
                let S = a[d] || "";
                s = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1")
            }
            const _ = a[d];
            return v && !_ ? u[h] = void 0 : u[h] = Nw(_ || "", h),
                u
        }
            , {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}
function Pw(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        su(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
        , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
        i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
        [new RegExp(i, t ? void 0 : "i"), r]
}
function Tw(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return su(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
            e
    }
}
function Nw(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return su(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
            e
    }
}
function au(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
        , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Rw(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? or(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Ow(n, t) : t,
        search: Mw(r),
        hash: Dw(i)
    }
}
function Ow(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
        n.length > 1 ? n.join("/") : "/"
}
function Hs(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Lw(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function lu(e, t) {
    let n = Lw(e);
    return t ? n.map((r, i) => i === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function uu(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = or(e) : (i = ri({}, e),
        Q(!i.pathname || !i.pathname.includes("?"), Hs("?", "pathname", "search", i)),
        Q(!i.pathname || !i.pathname.includes("#"), Hs("#", "pathname", "hash", i)),
        Q(!i.search || !i.search.includes("#"), Hs("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
    if (s == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && s.startsWith("..")) {
            let h = s.split("/");
            for (; h[0] === "..";)
                h.shift(),
                    d -= 1;
            i.pathname = h.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = Rw(i, a)
        , u = s && s !== "/" && s.endsWith("/")
        , c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
        l
}
const Ft = e => e.join("/").replace(/\/\/+/g, "/")
    , Aw = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
    , Mw = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
    , Dw = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function bw(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const gh = ["post", "put", "patch", "delete"];
new Set(gh);
const jw = ["get", ...gh];
new Set(jw);
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ii() {
    return ii = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        ii.apply(this, arguments)
}
const cu = y.createContext(null)
    , Uw = y.createContext(null)
    , Gt = y.createContext(null)
    , ss = y.createContext(null)
    , Qt = y.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    })
    , vh = y.createContext(null);
function zw(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    sr() || Q(!1);
    let { basename: r, navigator: i } = y.useContext(Gt)
        , { hash: o, pathname: s, search: a } = wh(e, {
            relative: n
        })
        , l = s;
    return r !== "/" && (l = s === "/" ? r : Ft([r, s])),
        i.createHref({
            pathname: l,
            search: a,
            hash: o
        })
}
function sr() {
    return y.useContext(ss) != null
}
function ar() {
    return sr() || Q(!1),
        y.useContext(ss).location
}
function yh(e) {
    y.useContext(Gt).static || y.useLayoutEffect(e)
}
function Yt() {
    let { isDataRoute: e } = y.useContext(Qt);
    return e ? Xw() : Fw()
}
function Fw() {
    sr() || Q(!1);
    let e = y.useContext(cu)
        , { basename: t, future: n, navigator: r } = y.useContext(Gt)
        , { matches: i } = y.useContext(Qt)
        , { pathname: o } = ar()
        , s = JSON.stringify(lu(i, n.v7_relativeSplatPath))
        , a = y.useRef(!1);
    return yh(() => {
        a.current = !0
    }
    ),
        y.useCallback(function (u, c) {
            if (c === void 0 && (c = {}),
                !a.current)
                return;
            if (typeof u == "number") {
                r.go(u);
                return
            }
            let d = uu(u, JSON.parse(s), o, c.relative === "path");
            e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Ft([t, d.pathname])),
                (c.replace ? r.replace : r.push)(d, c.state, c)
        }, [t, r, s, o, e])
}
function wh(e, t) {
    let { relative: n } = t === void 0 ? {} : t
        , { future: r } = y.useContext(Gt)
        , { matches: i } = y.useContext(Qt)
        , { pathname: o } = ar()
        , s = JSON.stringify(lu(i, r.v7_relativeSplatPath));
    return y.useMemo(() => uu(e, JSON.parse(s), o, n === "path"), [e, s, o, n])
}
function Bw(e, t) {
    return $w(e, t)
}
function $w(e, t, n, r) {
    sr() || Q(!1);
    let { navigator: i } = y.useContext(Gt)
        , { matches: o } = y.useContext(Qt)
        , s = o[o.length - 1]
        , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = ar(), c;
    if (t) {
        var d;
        let C = typeof t == "string" ? or(t) : t;
        l === "/" || (d = C.pathname) != null && d.startsWith(l) || Q(!1),
            c = C
    } else
        c = u;
    let h = c.pathname || "/"
        , v = l === "/" ? h : h.slice(l.length) || "/"
        , _ = mw(e, {
            pathname: v
        })
        , S = qw(_ && _.map(C => Object.assign({}, C, {
            params: Object.assign({}, a, C.params),
            pathname: Ft([l, i.encodeLocation ? i.encodeLocation(C.pathname).pathname : C.pathname]),
            pathnameBase: C.pathnameBase === "/" ? l : Ft([l, i.encodeLocation ? i.encodeLocation(C.pathnameBase).pathname : C.pathnameBase])
        })), o, n, r);
    return t && S ? y.createElement(ss.Provider, {
        value: {
            location: ii({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Nt.Pop
        }
    }, S) : S
}
function Vw() {
    let e = Jw()
        , t = bw(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
        , n = e instanceof Error ? e.stack : null
        , i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? y.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Ww = y.createElement(Vw, null);
class Hw extends y.Component {
    constructor(t) {
        super(t),
            this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? y.createElement(Qt.Provider, {
            value: this.props.routeContext
        }, y.createElement(vh.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Kw(e) {
    let { routeContext: t, match: n, children: r } = e
        , i = y.useContext(cu);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
        y.createElement(Qt.Provider, {
            value: t
        }, r)
}
function qw(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null) {
        var o;
        if ((o = n) != null && o.errors)
            e = n.matches;
        else
            return null
    }
    let s = e
        , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]));
        c >= 0 || Q(!1),
            s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1
        , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
                d.route.id) {
                let { loaderData: h, errors: v } = n
                    , _ = d.route.loader && h[d.route.id] === void 0 && (!v || v[d.route.id] === void 0);
                if (d.route.lazy || _) {
                    l = !0,
                        u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, d, h) => {
        let v, _ = !1, S = null, C = null;
        n && (v = a && d.route.id ? a[d.route.id] : void 0,
            S = d.route.errorElement || Ww,
            l && (u < 0 && h === 0 ? (Zw("route-fallback", !1),
                _ = !0,
                C = null) : u === h && (_ = !0,
                    C = d.route.hydrateFallbackElement || null)));
        let p = t.concat(s.slice(0, h + 1))
            , f = () => {
                let m;
                return v ? m = S : _ ? m = C : d.route.Component ? m = y.createElement(d.route.Component, null) : d.route.element ? m = d.route.element : m = c,
                    y.createElement(Kw, {
                        match: d,
                        routeContext: {
                            outlet: c,
                            matches: p,
                            isDataRoute: n != null
                        },
                        children: m
                    })
            }
            ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? y.createElement(Hw, {
            location: n.location,
            revalidation: n.revalidation,
            component: S,
            error: v,
            children: f(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : f()
    }
        , null)
}
var _h = function (e) {
    return e.UseBlocker = "useBlocker",
        e.UseRevalidator = "useRevalidator",
        e.UseNavigateStable = "useNavigate",
        e
}(_h || {})
    , Uo = function (e) {
        return e.UseBlocker = "useBlocker",
            e.UseLoaderData = "useLoaderData",
            e.UseActionData = "useActionData",
            e.UseRouteError = "useRouteError",
            e.UseNavigation = "useNavigation",
            e.UseRouteLoaderData = "useRouteLoaderData",
            e.UseMatches = "useMatches",
            e.UseRevalidator = "useRevalidator",
            e.UseNavigateStable = "useNavigate",
            e.UseRouteId = "useRouteId",
            e
    }(Uo || {});
function Gw(e) {
    let t = y.useContext(cu);
    return t || Q(!1),
        t
}
function Qw(e) {
    let t = y.useContext(Uw);
    return t || Q(!1),
        t
}
function Yw(e) {
    let t = y.useContext(Qt);
    return t || Q(!1),
        t
}
function Sh(e) {
    let t = Yw()
        , n = t.matches[t.matches.length - 1];
    return n.route.id || Q(!1),
        n.route.id
}
function Jw() {
    var e;
    let t = y.useContext(vh)
        , n = Qw(Uo.UseRouteError)
        , r = Sh(Uo.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Xw() {
    let { router: e } = Gw(_h.UseNavigateStable)
        , t = Sh(Uo.UseNavigateStable)
        , n = y.useRef(!1);
    return yh(() => {
        n.current = !0
    }
    ),
        y.useCallback(function (i, o) {
            o === void 0 && (o = {}),
                n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ii({
                    fromRouteId: t
                }, o)))
        }, [e, t])
}
const ed = {};
function Zw(e, t, n) {
    !t && !ed[e] && (ed[e] = !0)
}
function e_(e) {
    let { to: t, replace: n, state: r, relative: i } = e;
    sr() || Q(!1);
    let { future: o, static: s } = y.useContext(Gt)
        , { matches: a } = y.useContext(Qt)
        , { pathname: l } = ar()
        , u = Yt()
        , c = uu(t, lu(a, o.v7_relativeSplatPath), l, i === "path")
        , d = JSON.stringify(c);
    return y.useEffect(() => u(JSON.parse(d), {
        replace: n,
        state: r,
        relative: i
    }), [u, d, i, n, r]),
        null
}
function rn(e) {
    Q(!1)
}
function t_(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: i = Nt.Pop, navigator: o, static: s = !1, future: a } = e;
    sr() && Q(!1);
    let l = t.replace(/^\/*/, "/")
        , u = y.useMemo(() => ({
            basename: l,
            navigator: o,
            static: s,
            future: ii({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, o, s]);
    typeof r == "string" && (r = or(r));
    let { pathname: c = "/", search: d = "", hash: h = "", state: v = null, key: _ = "default" } = r
        , S = y.useMemo(() => {
            let C = au(c, l);
            return C == null ? null : {
                location: {
                    pathname: C,
                    search: d,
                    hash: h,
                    state: v,
                    key: _
                },
                navigationType: i
            }
        }
            , [l, c, d, h, v, _, i]);
    return S == null ? null : y.createElement(Gt.Provider, {
        value: u
    }, y.createElement(ss.Provider, {
        children: n,
        value: S
    }))
}
function n_(e) {
    let { children: t, location: n } = e;
    return Bw(Ka(t), n)
}
new Promise(() => { }
);
function Ka(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return y.Children.forEach(e, (r, i) => {
        if (!y.isValidElement(r))
            return;
        let o = [...t, i];
        if (r.type === y.Fragment) {
            n.push.apply(n, Ka(r.props.children, o));
            return
        }
        r.type !== rn && Q(!1),
            !r.props.index || !r.props.children || Q(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Ka(r.props.children, o)),
            n.push(s)
    }
    ),
        n
}
/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qa() {
    return qa = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        qa.apply(this, arguments)
}
function r_(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
            !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function i_(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function o_(e, t) {
    return e.button === 0 && (!t || t === "_self") && !i_(e)
}
function Ga(e) {
    return e === void 0 && (e = ""),
        new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map(i => [n, i]) : [[n, r]])
        }
            , []))
}
function s_(e, t) {
    let n = Ga(e);
    return t && t.forEach((r, i) => {
        n.has(i) || t.getAll(i).forEach(o => {
            n.append(i, o)
        }
        )
    }
    ),
        n
}
const a_ = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
    , l_ = "6";
try {
    window.__reactRouterVersion = l_
} catch { }
const u_ = "startTransition"
    , td = Gh[u_];
function c_(e) {
    let { basename: t, children: n, future: r, window: i } = e
        , o = y.useRef();
    o.current == null && (o.current = fw({
        window: i,
        v5Compat: !0
    }));
    let s = o.current
        , [a, l] = y.useState({
            action: s.action,
            location: s.location
        })
        , { v7_startTransition: u } = r || {}
        , c = y.useCallback(d => {
            u && td ? td(() => l(d)) : l(d)
        }
            , [l, u]);
    return y.useLayoutEffect(() => s.listen(c), [s, c]),
        y.createElement(t_, {
            basename: t,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: s,
            future: r
        })
}
const d_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
    , f_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
    , lr = y.forwardRef(function (t, n) {
        let { onClick: r, relative: i, reloadDocument: o, replace: s, state: a, target: l, to: u, preventScrollReset: c, unstable_viewTransition: d } = t, h = r_(t, a_), { basename: v } = y.useContext(Gt), _, S = !1;
        if (typeof u == "string" && f_.test(u) && (_ = u,
            d_))
            try {
                let m = new URL(window.location.href)
                    , w = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u)
                    , I = au(w.pathname, v);
                w.origin === m.origin && I != null ? u = I + w.search + w.hash : S = !0
            } catch { }
        let C = zw(u, {
            relative: i
        })
            , p = p_(u, {
                replace: s,
                state: a,
                target: l,
                preventScrollReset: c,
                relative: i,
                unstable_viewTransition: d
            });
        function f(m) {
            r && r(m),
                m.defaultPrevented || p(m)
        }
        return y.createElement("a", qa({}, h, {
            href: _ || C,
            onClick: S || o ? r : f,
            ref: n,
            target: l
        }))
    });
var nd;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration",
        e.UseSubmit = "useSubmit",
        e.UseSubmitFetcher = "useSubmitFetcher",
        e.UseFetcher = "useFetcher",
        e.useViewTransitionState = "useViewTransitionState"
}
)(nd || (nd = {}));
var rd;
(function (e) {
    e.UseFetcher = "useFetcher",
        e.UseFetchers = "useFetchers",
        e.UseScrollRestoration = "useScrollRestoration"
}
)(rd || (rd = {}));
function p_(e, t) {
    let { target: n, replace: r, state: i, preventScrollReset: o, relative: s, unstable_viewTransition: a } = t === void 0 ? {} : t
        , l = Yt()
        , u = ar()
        , c = wh(e, {
            relative: s
        });
    return y.useCallback(d => {
        if (o_(d, n)) {
            d.preventDefault();
            let h = r !== void 0 ? r : jo(u) === jo(c);
            l(e, {
                replace: h,
                state: i,
                preventScrollReset: o,
                relative: s,
                unstable_viewTransition: a
            })
        }
    }
        , [u, l, c, r, i, n, e, o, s, a])
}
function h_(e) {
    let t = y.useRef(Ga(e))
        , n = y.useRef(!1)
        , r = ar()
        , i = y.useMemo(() => s_(r.search, n.current ? null : t.current), [r.search])
        , o = Yt()
        , s = y.useCallback((a, l) => {
            const u = Ga(typeof a == "function" ? a(i) : a);
            n.current = !0,
                o("?" + u, l)
        }
            , [o, i]);
    return [i, s]
}
const id = {
    primary: "bg-blue-1 hover:bg-blue-800",
    secondary: "bg-white hover:bg-white-1 text-black border border-gray-300"
}
    , od = "inline-flex items-center justify-center h-10 px-4 text-center text-white text-sm lg:text-base rounded-lg whitespace-nowrap cursor-pointer";
function Vt({ variant: e, type: t, href: n, className: r, onClick: i, children: o, disabled: s, buttonType: a, target: l }) {
    return t === "link" ? g.jsx(lr, {
        className: `${id[e]} ${od} ${r}`,
        to: n,
        target: l,
        children: o
    }) : g.jsx("button", {
        className: `${id[e]} ${od} ${r}`,
        onClick: i,
        disabled: s,
        type: a,
        children: o
    })
}
const En = y.createContext({
    user: mt.currentUser,
    isLoading: !1,
    setIsLoading: () => { }
    ,
    setCurrentUser: () => { }
    ,
    firebaseLoading: !0
})
    , m_ = ({ children: e }) => {
        const [t, n] = y.useState(null)
            , [r, i] = y.useState(!1)
            , [o, s] = y.useState(!0)
            , a = {
                user: t,
                isLoading: r,
                setIsLoading: i,
                setCurrentUser: n,
                firebaseLoading: o
            };
        return y.useEffect(() => {
            const l = Fv(mt, u => {
                n(u),
                    s(!1)
            }
            );
            return () => {
                l()
            }
        }
            , []),
            g.jsx(En.Provider, {
                value: a,
                children: e
            })
    }
    ;
let g_ = {
    data: ""
}
    , v_ = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : e || g_
    , y_ = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
    , w_ = /\/\*[^]*?\*\/|  +/g
    , sd = /\n+/g
    , xt = (e, t) => {
        let n = ""
            , r = ""
            , i = "";
        for (let o in e) {
            let s = e[o];
            o[0] == "@" ? o[1] == "i" ? n = o + " " + s + ";" : r += o[1] == "f" ? xt(s, o) : o + "{" + xt(s, o[1] == "k" ? "" : t) + "}" : typeof s == "object" ? r += xt(s, t ? t.replace(/([^,])+/g, a => o.replace(/(^:.*)|([^,])+/g, l => /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l)) : o) : s != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(),
                i += xt.p ? xt.p(o, s) : o + ":" + s + ";")
        }
        return n + (t && i ? t + "{" + i + "}" : i) + r
    }
    , Ze = {}
    , Eh = e => {
        if (typeof e == "object") {
            let t = "";
            for (let n in e)
                t += n + Eh(e[n]);
            return t
        }
        return e
    }
    , __ = (e, t, n, r, i) => {
        let o = Eh(e)
            , s = Ze[o] || (Ze[o] = (l => {
                let u = 0
                    , c = 11;
                for (; u < l.length;)
                    c = 101 * c + l.charCodeAt(u++) >>> 0;
                return "go" + c
            }
            )(o));
        if (!Ze[s]) {
            let l = o !== e ? e : (u => {
                let c, d, h = [{}];
                for (; c = y_.exec(u.replace(w_, ""));)
                    c[4] ? h.shift() : c[3] ? (d = c[3].replace(sd, " ").trim(),
                        h.unshift(h[0][d] = h[0][d] || {})) : h[0][c[1]] = c[2].replace(sd, " ").trim();
                return h[0]
            }
            )(e);
            Ze[s] = xt(i ? {
                ["@keyframes " + s]: l
            } : l, n ? "" : "." + s)
        }
        let a = n && Ze.g ? Ze.g : null;
        return n && (Ze.g = Ze[s]),
            ((l, u, c, d) => {
                d ? u.data = u.data.replace(d, l) : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l)
            }
            )(Ze[s], t, r, a),
            s
    }
    , S_ = (e, t, n) => e.reduce((r, i, o) => {
        let s = t[o];
        if (s && s.call) {
            let a = s(n)
                , l = a && a.props && a.props.className || /^go/.test(a) && a;
            s = l ? "." + l : a && typeof a == "object" ? a.props ? "" : xt(a, "") : a === !1 ? "" : a
        }
        return r + i + (s ?? "")
    }
        , "");
function as(e) {
    let t = this || {}
        , n = e.call ? e(t.p) : e;
    return __(n.unshift ? n.raw ? S_(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {}) : n, v_(t.target), t.g, t.o, t.k)
}
let Ih, Qa, Ya;
as.bind({
    g: 1
});
let pt = as.bind({
    k: 1
});
function E_(e, t, n, r) {
    xt.p = t,
        Ih = e,
        Qa = n,
        Ya = r
}
function Jt(e, t) {
    let n = this || {};
    return function () {
        let r = arguments;
        function i(o, s) {
            let a = Object.assign({}, o)
                , l = a.className || i.className;
            n.p = Object.assign({
                theme: Qa && Qa()
            }, a),
                n.o = / *go\d+/.test(l),
                a.className = as.apply(n, r) + (l ? " " + l : ""),
                t && (a.ref = s);
            let u = e;
            return e[0] && (u = a.as || e,
                delete a.as),
                Ya && u[0] && Ya(a),
                Ih(u, a)
        }
        return t ? t(i) : i
    }
}
var I_ = e => typeof e == "function"
    , zo = (e, t) => I_(e) ? e(t) : e
    , C_ = (() => {
        let e = 0;
        return () => (++e).toString()
    }
    )()
    , Ch = (() => {
        let e;
        return () => {
            if (e === void 0 && typeof window < "u") {
                let t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches
            }
            return e
        }
    }
    )()
    , k_ = 20
    , to = new Map
    , x_ = 1e3
    , ad = e => {
        if (to.has(e))
            return;
        let t = setTimeout(() => {
            to.delete(e),
                In({
                    type: 4,
                    toastId: e
                })
        }
            , x_);
        to.set(e, t)
    }
    , P_ = e => {
        let t = to.get(e);
        t && clearTimeout(t)
    }
    , Ja = (e, t) => {
        switch (t.type) {
            case 0:
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, k_)
                };
            case 1:
                return t.toast.id && P_(t.toast.id),
                {
                    ...e,
                    toasts: e.toasts.map(o => o.id === t.toast.id ? {
                        ...o,
                        ...t.toast
                    } : o)
                };
            case 2:
                let { toast: n } = t;
                return e.toasts.find(o => o.id === n.id) ? Ja(e, {
                    type: 1,
                    toast: n
                }) : Ja(e, {
                    type: 0,
                    toast: n
                });
            case 3:
                let { toastId: r } = t;
                return r ? ad(r) : e.toasts.forEach(o => {
                    ad(o.id)
                }
                ),
                {
                    ...e,
                    toasts: e.toasts.map(o => o.id === r || r === void 0 ? {
                        ...o,
                        visible: !1
                    } : o)
                };
            case 4:
                return t.toastId === void 0 ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(o => o.id !== t.toastId)
                };
            case 5:
                return {
                    ...e,
                    pausedAt: t.time
                };
            case 6:
                let i = t.time - (e.pausedAt || 0);
                return {
                    ...e,
                    pausedAt: void 0,
                    toasts: e.toasts.map(o => ({
                        ...o,
                        pauseDuration: o.pauseDuration + i
                    }))
                }
        }
    }
    , no = []
    , ro = {
        toasts: [],
        pausedAt: void 0
    }
    , In = e => {
        ro = Ja(ro, e),
            no.forEach(t => {
                t(ro)
            }
            )
    }
    , T_ = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    }
    , N_ = (e = {}) => {
        let [t, n] = y.useState(ro);
        y.useEffect(() => (no.push(n),
            () => {
                let i = no.indexOf(n);
                i > -1 && no.splice(i, 1)
            }
        ), [t]);
        let r = t.toasts.map(i => {
            var o, s;
            return {
                ...e,
                ...e[i.type],
                ...i,
                duration: i.duration || ((o = e[i.type]) == null ? void 0 : o.duration) || (e == null ? void 0 : e.duration) || T_[i.type],
                style: {
                    ...e.style,
                    ...(s = e[i.type]) == null ? void 0 : s.style,
                    ...i.style
                }
            }
        }
        );
        return {
            ...t,
            toasts: r
        }
    }
    , R_ = (e, t = "blank", n) => ({
        createdAt: Date.now(),
        visible: !0,
        type: t,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0,
        ...n,
        id: (n == null ? void 0 : n.id) || C_()
    })
    , vi = e => (t, n) => {
        let r = R_(t, e, n);
        return In({
            type: 2,
            toast: r
        }),
            r.id
    }
    , Ie = (e, t) => vi("blank")(e, t);
Ie.error = vi("error");
Ie.success = vi("success");
Ie.loading = vi("loading");
Ie.custom = vi("custom");
Ie.dismiss = e => {
    In({
        type: 3,
        toastId: e
    })
}
    ;
Ie.remove = e => In({
    type: 4,
    toastId: e
});
Ie.promise = (e, t, n) => {
    let r = Ie.loading(t.loading, {
        ...n,
        ...n == null ? void 0 : n.loading
    });
    return e.then(i => (Ie.success(zo(t.success, i), {
        id: r,
        ...n,
        ...n == null ? void 0 : n.success
    }),
        i)).catch(i => {
            Ie.error(zo(t.error, i), {
                id: r,
                ...n,
                ...n == null ? void 0 : n.error
            })
        }
        ),
        e
}
    ;
var O_ = (e, t) => {
    In({
        type: 1,
        toast: {
            id: e,
            height: t
        }
    })
}
    , L_ = () => {
        In({
            type: 5,
            time: Date.now()
        })
    }
    , A_ = e => {
        let { toasts: t, pausedAt: n } = N_(e);
        y.useEffect(() => {
            if (n)
                return;
            let o = Date.now()
                , s = t.map(a => {
                    if (a.duration === 1 / 0)
                        return;
                    let l = (a.duration || 0) + a.pauseDuration - (o - a.createdAt);
                    if (l < 0) {
                        a.visible && Ie.dismiss(a.id);
                        return
                    }
                    return setTimeout(() => Ie.dismiss(a.id), l)
                }
                );
            return () => {
                s.forEach(a => a && clearTimeout(a))
            }
        }
            , [t, n]);
        let r = y.useCallback(() => {
            n && In({
                type: 6,
                time: Date.now()
            })
        }
            , [n])
            , i = y.useCallback((o, s) => {
                let { reverseOrder: a = !1, gutter: l = 8, defaultPosition: u } = s || {}
                    , c = t.filter(v => (v.position || u) === (o.position || u) && v.height)
                    , d = c.findIndex(v => v.id === o.id)
                    , h = c.filter((v, _) => _ < d && v.visible).length;
                return c.filter(v => v.visible).slice(...a ? [h + 1] : [0, h]).reduce((v, _) => v + (_.height || 0) + l, 0)
            }
                , [t]);
        return {
            toasts: t,
            handlers: {
                updateHeight: O_,
                startPause: L_,
                endPause: r,
                calculateOffset: i
            }
        }
    }
    , M_ = pt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`
    , D_ = pt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`
    , b_ = pt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`
    , j_ = Jt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D_} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${b_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`
    , U_ = pt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
    , z_ = Jt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${U_} 1s linear infinite;
`
    , F_ = pt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`
    , B_ = pt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`
    , $_ = Jt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B_} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`
    , V_ = Jt("div")`
  position: absolute;
`
    , W_ = Jt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`
    , H_ = pt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`
    , K_ = Jt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H_} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`
    , q_ = ({ toast: e }) => {
        let { icon: t, type: n, iconTheme: r } = e;
        return t !== void 0 ? typeof t == "string" ? y.createElement(K_, null, t) : t : n === "blank" ? null : y.createElement(W_, null, y.createElement(z_, {
            ...r
        }), n !== "loading" && y.createElement(V_, null, n === "error" ? y.createElement(j_, {
            ...r
        }) : y.createElement($_, {
            ...r
        })))
    }
    , G_ = e => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`
    , Q_ = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`
    , Y_ = "0%{opacity:0;} 100%{opacity:1;}"
    , J_ = "0%{opacity:1;} 100%{opacity:0;}"
    , X_ = Jt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`
    , Z_ = Jt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`
    , eS = (e, t) => {
        let n = e.includes("top") ? 1 : -1
            , [r, i] = Ch() ? [Y_, J_] : [G_(n), Q_(n)];
        return {
            animation: t ? `${pt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${pt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
        }
    }
    , tS = y.memo(({ toast: e, position: t, style: n, children: r }) => {
        let i = e.height ? eS(e.position || t || "top-center", e.visible) : {
            opacity: 0
        }
            , o = y.createElement(q_, {
                toast: e
            })
            , s = y.createElement(Z_, {
                ...e.ariaProps
            }, zo(e.message, e));
        return y.createElement(X_, {
            className: e.className,
            style: {
                ...i,
                ...n,
                ...e.style
            }
        }, typeof r == "function" ? r({
            icon: o,
            message: s
        }) : y.createElement(y.Fragment, null, o, s))
    }
    );
E_(y.createElement);
var nS = ({ id: e, className: t, style: n, onHeightUpdate: r, children: i }) => {
    let o = y.useCallback(s => {
        if (s) {
            let a = () => {
                let l = s.getBoundingClientRect().height;
                r(e, l)
            }
                ;
            a(),
                new MutationObserver(a).observe(s, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                })
        }
    }
        , [e, r]);
    return y.createElement("div", {
        ref: o,
        className: t,
        style: n
    }, i)
}
    , rS = (e, t) => {
        let n = e.includes("top")
            , r = n ? {
                top: 0
            } : {
                bottom: 0
            }
            , i = e.includes("center") ? {
                justifyContent: "center"
            } : e.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
        return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: Ch() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t * (n ? 1 : -1)}px)`,
            ...r,
            ...i
        }
    }
    , iS = as`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`
    , Ui = 16
    , oS = ({ reverseOrder: e, position: t = "top-center", toastOptions: n, gutter: r, children: i, containerStyle: o, containerClassName: s }) => {
        let { toasts: a, handlers: l } = A_(n);
        return y.createElement("div", {
            style: {
                position: "fixed",
                zIndex: 9999,
                top: Ui,
                left: Ui,
                right: Ui,
                bottom: Ui,
                pointerEvents: "none",
                ...o
            },
            className: s,
            onMouseEnter: l.startPause,
            onMouseLeave: l.endPause
        }, a.map(u => {
            let c = u.position || t
                , d = l.calculateOffset(u, {
                    reverseOrder: e,
                    gutter: r,
                    defaultPosition: t
                })
                , h = rS(c, d);
            return y.createElement(nS, {
                id: u.id,
                key: u.id,
                onHeightUpdate: l.updateHeight,
                className: u.visible ? iS : "",
                style: h
            }, u.type === "custom" ? zo(u.message, u) : i ? i(u) : y.createElement(tS, {
                toast: u,
                position: c
            }))
        }
        ))
    }
    , ve = Ie;
function sS() {
    const { user: e, setCurrentUser: t } = y.useContext(En)
        , n = Yt()
        , r = async () => {
            try {
                await o0(),
                    t(null),
                    n("/ingresar")
            } catch {
                ve.error("Error al cerrar sesión")
            }
        }
        ;
    return g.jsxs("div", {
        className: "w-full flex justify-end items-center gap-5 pt-5",
        children: [g.jsx("span", {
            className: "text-sm",
            children: e == null ? void 0 : e.email
        }), g.jsx(Vt, {
            type: "button",
            variant: "primary",
            className: "h-10",
            onClick: r,
            children: "Cerrar sesión"
        })]
    })
}
const aS = [{
    name: "La cámara no funciona",
    step: "Medir señales de referencia",
    options: [{
        name: "Correcta medición de señales de referencia",
        step: "Medir alimentación: 1.8v, 1.2v, 2.8v",
        color: "green",
        options: [{
            name: "Correcta medición de alimentación",
            step: "Medir control",
            color: "green",
            options: [{
                solution: "Estas líneas de comunicación: SDA, SCL, RST, CLK, etc, se miden con osciloscopio, pero si aún no tenemos osciloscopio podemos medirle  su voltaje con él multímetro."
            }]
        }, {
            name: "Incorrecta Medición de alimentación",
            step: "Verificar fuente de alimentación: 'PMIC - LDO'",
            color: "red",
            options: [{
                solution: 'Recuerda medir el control "enable" del LDO. puede tener un LDO, un PMIC dedicado a camaras o tranquilamente puede ser el PMIC principal el encargado de alimentar las cámaras.'
            }]
        }]
    }, {
        name: "Incorrecta medición de señales de referencia",
        color: "red",
        options: [{
            solution: "Si el valor está OL es decir, abierto o muy alto, generalmente el problema será resistor, filtro EMI, bobina o IC; Y si, por el contrario, el valor está en 0 es decir, en corto o muy bajo, el responsable generalmente será un condensador o IC."
        }]
    }]
}, {
    name: "El táctil no funciona",
    step: "Medir señales de referencia",
    options: [{
        name: "Correcta medición de señales de referencia",
        step: "Medir alimentación: 1.8v, 2.8v, 3.3v",
        color: "green",
        options: [{
            name: "Correcta medición de alimentación",
            step: "Medir comunicación",
            color: "green",
            options: [{
                solution: "Si todo parece estar en orden hasta este punto, es probable que el problema resida en la CPU. Sin embargo, también podría estar relacionado con algún circuito integrado (IC) o periférico que comparta las mismas líneas de comunicación. Si aún no dispones de un osciloscopio, puedes utilizar un multímetro para medir. Recuerda que las líneas de comunicación suelen operar con un voltaje de 1.8V. Aunque la presencia de 1.8V no garantiza al 100% su correcto funcionamiento, es un indicativo relevante."
            }]
        }, {
            name: "Incorrecta medición de alimentación",
            step: "Reemplazar fuente de alimentación 'LDO - PMIC'",
            color: "red",
            options: [{
                solution: "Si el responsable de alimentar el táctil es un LDO, no olvides medir la línea de activación 'enable' que llega al LDO, y también que el propio LDO esté siendo alimentado."
            }]
        }]
    }, {
        name: "Incorrecta medición de señales de referencia",
        color: "red",
        options: [{
            solution: "Si la alteración está en una de las líneas de comunicación debemos revisar los resistores que generalmente van en esas líneas, si el valor está en OL puede ser la CPU que está desoldada, si la alteración está en una de las líneas de alimentación debemos revisar los condensadores que están en la línea alterada."
        }]
    }]
}, {
    name: "La pantalla no funciona",
    step: "Medir señales de referencia",
    options: [{
        name: "Correcta medición de señales de referencia",
        step: `Medir alimentación 
 (PMIC - LDO = 1.8V, 3V)
Buck Boost Inverter
PMI 'IF PM'
(5.5V, -5.5V)
(AMOLED = 4.6V, -4.4V, 7V)`,
        color: "green",
        options: [{
            name: "Correcta medición de alimentación",
            color: "green",
            options: [{
                solution: "Si todo parece estar en orden hasta este punto, es probable que el problema resida en la CPU. Sin embargo, también podría estar relacionado con algún circuito integrado (IC) o periférico que comparta las mismas líneas de comunicación. Si aún no dispones de un osciloscopio, puedes utilizar un multímetro para medir. Recuerda que las líneas de comunicación suelen operar con un voltaje de 1.8V. Aunque la presencia de 1.8V no garantiza al 100% su correcto funcionamiento, es un indicativo relevante."
            }]
        }, {
            name: "Incorrecta medición de alimentación",
            step: "Medir control de Buck Boost Inverter LDO",
            color: "red",
            options: [{
                name: "Correcta medición del control de Buck Boost Inverter LDO",
                step: "Reemplazar Boost Inverter LDO o PMI",
                color: "green",
                options: [{
                    solution: "Recuerda que la señal de control 'ENABLE, EL_ON' se origina en la CPU. Si esta señal se ha perdido, es posible encontrar otra línea de activación que opere al mismo tiempo. Por ejemplo, podrías utilizar la línea del táctil o la del retroiluminado como alternativa. Si, a pesar de reemplazar el chestnut 'PMIC de LCD', los voltajes aún no están presentes, es necesario examinar las líneas de comunicación I2C."
                }]
            }, {
                name: "Incorrecta medición del control de Buck Boost Inverter LDO",
                step: "Seguimiento a lineas de control 'CPU, LCD'",
                color: "red",
                options: [{
                    solution: "En determinadas situaciones, el responsable de suministrar los voltajes de 1.8V y 3.0V, especialmente en pantallas Amoled, es un LDO. Asegúrate de medir la línea de activación 'enable' que llega al LDO y verifica que el propio LDO esté recibiendo alimentación. Por lo general, esta línea 'enable' proviene de la CPU. Pero ten en cuenta que en dispositivos Samsung y Apple, es la propia pantalla LCD la que activa el Chestnut 'Buck Inverter'. "
                }]
            }]
        }]
    }, {
        name: "Incorrecta medición de señales de referencia",
        color: "red",
        options: [{
            solution: "Si la alteración está en una de las líneas de MIPI debemos revisar los Filtros EMI que generalmente van en esas lineas, si el valor está en OL puede ser la CPU que está desoldada, si la alteración está en una de las líneas de alimentación debemos revisar los Condensadores que están en una línea altereada."
        }]
    }]
}, {
    name: "El Backlight no funciona",
    step: "Medir señales de referencia: Anodo catodos",
    options: [{
        name: "Correcta medición de señales de referencia: Anodo Catodos",
        step: "Medir alimentación Anodo = Voltaje de bateria 4v",
        color: "green",
        options: [{
            name: "Correcta medición de alimentación Anodo = 4v",
            step: "Revisar driver backlight 'BOOST O PMI'",
            color: "green",
            options: [{
                solution: "Si hasta acá está todo bien, generalmente el daño está en el driver de backlight. El driver de backlight, en algunos equipos viene embebido dentro del IF_PMIC, lo podemos reconocer porque cerva va a estar la bobina de SW y el diodo schottky."
            }]
        }, {
            name: "Incorrecta medición de alimentación Anodo = 4v",
            step: "Revisar diodo schottky, bobina",
            color: "red",
            options: [{
                solution: "Para medir este voltaje, basta con que el equipo esté alimentado, es decir no es necesario que este encendido, pues este voltaje viene desde la línea Main 'VPH_PWR, VBAT, B_PLUS, VDD_MAIN' bueno como guste llamarla... Es muy común que antes del conector del lcd 'FPC_LCD' esta línea de Anodo Ileve un filtro, es decir, una pequeña bobina, que también debes revisar."
            }]
        }]
    }, {
        name: "Incorrecta medición de señales de referencia: Anodo Catodos",
        color: "red",
        options: [{
            solution: "Generalmente el Anodo mide un valor menor que los Catodos, Anodo cerca de 500mV, Catodos cerca de 600mV, tener en cuenta el detalle de los ic de luz de configuracion antigua. Si la alteración es hacia arriba y está en la línea del Anodo, revisar filtro 'bobina'. Diodo Schottky y Bobina de SW, si, por el contrario, está alterado el valor hacia abajo, revisar condensadores y/o driver de backlight."
        }]
    }]
}, {
    name: "No enciende",
    step: "Conectar a fuente de poder 4V - 3A",
    options: [{
        name: "Consumo total de 3A",
        step: "Medir señal de referencia en VBATT 'Contacto positivo de batería'",
        options: [{
            name: "Hay corto al medir sañal de referencia en VBATT",
            step: "Verificar que componente se sobrecalienta y reemplazarlo",
            options: [{
                solution: "Siempre va a calentar un componente, si no calienta, tal vez necesites poner más corriente 'amperaje' o estás usando un cable muy delgado para inyectar corriente."
            }]
        }, {
            name: "No hay corto al medir sañal de referencia en VBATT",
            step: `Buscar corto en: VCC MAIN, VDD MAIN, VPH POWER, B PLUS, VBAT, VSYS, BL_ANODE, PP VDD BOOST
Inyectar voltaje en la línea en corto '4V-1A'`,
            options: [{
                solution: "Verificar que componente se sobrecalienta, si el corto está en un condensador, al retirarlo debería encender el equipo, pero recuerda instalar nuevamente un condensador."
            }]
        }]
    }, {
        name: "Consumo inicial sin pulsar tecla de encendido",
        step: "Inspección visual. Buscar rastros de humedad 'sulfato'",
        options: [{
            name: "Hay rastro de humedad 'sulfato'",
            options: [{
                solution: "Retirar los IC y cambiar la soldadura 'REBALLING'."
            }]
        }, {
            name: "No hay rastro de humedad 'sulfato'",
            step: "Buscar corto o fugas alrededor de SUBPMIC o PMIC",
            options: [{
                name: "Hay corto alrededor de SUBPMIC O PMIC.",
                step: "Inyectar voltaje a la linea en corto y hacer diagnostico térmico",
                options: [{
                    solution: "Algún componente deberia calentar y con rosin podemos ver cuál es el que está en corto, si no se logra ver hay que poner mas corriente en la fuente."
                }]
            }, {
                name: "Hay fugas alrededor de SUBPMIC O PMIC.",
                options: [{
                    solution: "Diagnostico termico inyectar voltaje. 'La misma tensión que maneje la línea'."
                }]
            }]
        }]
    }, {
        name: "No hay consumo al pulsar tecla de encendido",
        step: `Verificar si enciende
Con un estado alto = 1 lógico
Con un estado bajo = 0 lógico`,
        options: [{
            name: "Enciende en estado alto (1 LOGICO)",
            step: "Medir el voltaje 4V en PWR KEY 'Tecla de encendido'",
            options: [{
                name: "Correcta medición del voltaje '4v' en PWR_KEY 'Tecla de encendido'",
                step: "Medir señal de referencia 'PWR ON' en tecla de encendido",
                color: "green",
                options: [{
                    name: "Correcta medición de señal de referencia 'PWR_ON' en tecla de encendido",
                    color: "green",
                    options: [{
                        solution: "Resoldar o cambiar PMIC o SUBPMIC."
                    }]
                }, {
                    name: "Incorrecta medición de señal de referencia 'PWR_ON' en tecla de encendido",
                    step: "Seguir la linea PWR_ON a traves del resistor. Resoldar o cambiar el componente",
                    color: "red",
                    options: [{
                        solution: "Esta linea generalmente lleva un resistor en serie de 1K y puede alterarse su valor o incluso abrirse."
                    }]
                }]
            }, {
                name: "Incorrecta medición del voltaje '4v' en PWR_KEY 'Tecla de encendido'.",
                step: "Medir señal de referencia en pin PWR_KEY, seguir la linea de alimentación de PWR_KEY",
                color: "red",
                options: [{
                    solution: "Si el valor de referencia no está presente, probablemente la línea está abierta, una solución rápida es poner un resistor de 1K conectado entre la tecla y la linea de voltaje principal 'VPH_PWR'."
                }]
            }]
        }, {
            name: "Enciende en estado bajo (0 LOGICO)",
            step: "Medir voltaje 1.8V y GND en PWR_KEY",
            options: [{
                name: "Correcto voltaje '1.8v' y GND en PWR_KEY",
                step: "Resoldar o cambiar PMIC o SUBPMIC",
                color: "green",
                options: [{
                    solution: "Lo mejor es cambiar de una vez el PMIC, sobre todo para ahorrar tiempo, pero si no tenemos otro PMIC, recomendamos reballing."
                }]
            }, {
                name: "Incorrecto voltaje '1.8v' y GND en PWR_KEY",
                step: "Medir señal de referencia en pin PWR_KEY, seguir la linea PWR_ON a través del resistor",
                color: "red",
                options: [{
                    solution: "Este valor de referencia, en ocasiones es tan alto, que midiendo como siempre lo hacemos en funcion de diodo, nos dará 'OL', si este es el caso mide en función de OHM, en la escala alta o en auto si tu multímetro es autorrango. Resoldar o cambiar PMIC o SUBPMIC. Si la línea de PWR_ON está perdida, la solución es hacer un jumper desde el pad debajo del PMIC hasta el resistor de PWR_ON."
                }]
            }]
        }]
    }, {
        name: "Hay consumo al pulsar tecla de encendido",
        options: [{
            name: "Hay consumo (0.200A) mayor a 200mA",
            step: "Hacer diagnostico térmico. Si el consumo es mayor a 0.300A generalmente es corto o fuga en lineas secundarias",
            options: [{
                solution: "Al medir las lineas secundarias, hay algunas de estas lineas, principalmente las BUCK que miden muy bajo y no necesariamente tienen fuga, lo mejor es comparar con otra tarjeta que esté encendiendo."
            }]
        }, {
            name: "No hay consumo (0.200A) menor a 200mA",
            step: "Buscar corto o fugas alrededor de SUBPMIC o PMIC",
            options: [{
                name: "Hay cortos o fugas alrededor de PMIC o SUBPMIC",
                options: [{
                    solution: "Diagnostico térmico y/o método Kelvin, inyectar la misma tensión 'voltaje' que maneja la línea."
                }]
            }, {
                name: "No hay cortos o fugas alrededor de PMIC o SUBPMIC",
                step: "Medir cristal oscilador de PMIC",
                options: [{
                    name: "Correcta medición del cristal de oscilador de PMIC",
                    step: "Medir voltajes BUCK, LDO, PMIC, IF-PMIC Y SUBPMIC",
                    color: "green",
                    options: [{
                        name: "Correcta medición de voltajes BUCK, LDO, PMIC, IF-PMIC Y SUBPMIC",
                        color: "green",
                        options: [{
                            solution: "Memoria o CPU. Recuerda que en este paso puedes descartar la CPU, midiendo la linea CLK de la CPU hacia la memoria, normalmente hay un testpoint cerca de la memoria, si está bien la sincronización, es problema de la memoria."
                        }]
                    }, {
                        name: "Incorrecta medición de voltajes BUCK, LDO, PMIC, IF-PMIC Y SUBPMIC",
                        step: "Medir referencia en la línea ausente",
                        options: [{
                            name: "Hay corto o fuga al medir referencia en la linea ausente.",
                            step: "Diagnostico térmico y/o método Kelvin",
                            options: [{
                                solution: "Inyectar la misma tensión 'voltaje' que maneja la línea donde esta el corto o la fuga."
                            }]
                        }, {
                            name: "No hay corto o fuga al medir referencia en la linea ausente.",
                            options: [{
                                solution: "Resoldar o reemplazar PMIC o SUBPMIC."
                            }]
                        }]
                    }]
                }, {
                    name: "Incorrecta medición del cristal de oscilador de PMIC",
                    step: "Reemplazar cristal de oscilador",
                    color: "red",
                    options: [{
                        solution: "Tener en cuenta que algunos cristales oscilan sin necesidad de dar PWR, es decir, solo con alimentar el equipo ya están trabajando, pero hay otros que si debemos dar PWR."
                    }]
                }]
            }]
        }]
    }, {
        name: "Consumo fijo al pulsar el botón de encendido",
        step: "Buscar corto o fugas en líneas secundarias en PMIC, IF PMIC, SUBPMIC",
        options: [{
            name: "Hay corto o fuga en lineas secundarias en PMIC, IF-PMIC y SUBPMIC.",
            step: "Diagnóstico térmico 'inyectar la tensión que maneja la línea'",
            options: [{
                solution: "La forma más correcta de confirmar si realmente hay fuga es comparando el valor con otra tarjeta de las mismas."
            }]
        }, {
            name: "No hay corto o fuga en lineas secundarias en PMIC, IF-PMIC y SUBPMIC.",
            step: "Generalmente es problema de la memoria",
            options: [{
                solution: "Podemos medir con el osciloscopio la linea de CLK de la memoria, si esta bien es problema de la memoria, o incluso poner esta linea a tierra y ver si el PC reconoce el equipo 'si genera un puerto' de ser asi es problema de memoria."
            }]
        }]
    }]
}, {
    name: "No carga la bateria",
    step: "Medir señales de referencia: VBUS, DM, DP, CCI, CC2, ID y GND",
    options: [{
        name: "Correcta medición de señales de referencia: VBUS, DM, DP, CCI, CC2, ID y GND",
        step: "Hacer seguimiento al voltaje por la linea VBUS, OVP, PMI y PM",
        color: "green",
        options: [{
            solution: "Este voltaje debemos medirlo con el equipo conectado al cargador, pero sin bateria, empezando desde el conector de carga 'VBUS'. Reemplazar componentes defectuosos. Si el voltaje llega a un IC, pero no sale de el significa que ese IC está defectuoso, del OVP debe salir el mismo voltaje que llega '5v'."
        }]
    }, {
        name: "Incorrecta medición de señales de referencia: VBUS, DM, DP, CCI, CC2, ID y GND",
        color: "red",
        options: [{
            solution: "Alterada hacia arriba 'serie' o alterada hacia abajo 'paralelo'. Si encontramos acá la falla, por ejemplo un valor muy bajo, generalmente es un diodo o un condensador o el mismo OVP."
        }]
    }]
}, {
    name: "Hay carga falsa de bateria",
    step: "Verificar consumo en VBATT 'Batería'",
    options: [{
        name: "Hay consumo en VBATT 'Bateria'",
        step: "Buscar componentes en corto y/o en fuga: PMIC, SUBPMIC, IC Carga",
        options: [{
            solution: "Podemos inyectar corriente a la linea con una tensión de 4V y hacer un diagnóstico térmico."
        }]
    }, {
        name: "No hay consumo en VBATT 'Bateria'",
        step: "Verificar consumo en VBUS TESTER USB",
        options: [{
            name: "Sobre consumo o consumo normal en VBUS Tester USB",
            step: "Buscar componentes en corto y/o fuga en VBUS (Método térmico, método Kélvin)",
            options: [{
                solution: "Para verificar cuál es el componente defectuoso, debemos inyectar corriente con una tensión de 5V, utilizando la fuente de poder."
            }]
        }, {
            name: "Bajo consumo (debajo de los 500mA) o no consumo en VBUS Tester USB",
            step: "Revisar sensores de temperatura y humedad",
            options: [{
                solution: "Revisar 'Termistor' y también el sensor de humedad 'generalmente es el codec de audio, el encargado de censar la humedad'. También debemos revisar el condensador BOOT, este es responsable de producir la carga falsa, recuerda que lo identificas porque va conectado a la bobina de carga y no lleva GND."
            }]
        }]
    }]
}, {
    name: "No hay carga rápida de bateria",
    step: "Revisar linea de datos DM, DP, CC1, CC2",
    options: [{
        name: "Correcta revisión de linea de datos DM, DP, CC1, CC2",
        step: "Revisar sensores de temperatura y humedad",
        color: "green",
        options: [{
            name: "Correcta revisión de sensores (temperatura y humedad)",
            color: "green",
            options: [{
                solution: "Reemplazar administrador de carga."
            }]
        }, {
            name: "Incorrecta revisión de sensores (temperatura y humedad)",
            step: "Reemplazar sensores",
            color: "red",
            options: [{
                solution: "El sensor de temperatura no está conformado solo por el termistor, tambien hay un resistor conectado al termistor, y su valor es generalmente el mismo del termistor, tambien el voltaje de 1.8V que debe llegar al resistor."
            }]
        }]
    }, {
        name: "Incorrecta revisión de linea de datos DM, DP, CC1, CC2",
        color: "red",
        options: [{
            solution: "Alterada hacia arriba 'serie' o alterada hacia abajo 'paralelo'. En estas lineas encontramos unos resistores en serie, su valor generalmente es de 2.2 OHM , es decir dan continuidad, si el valor está alterado hacia abajo revisar los diodos TVS."
        }]
    }]
}, {
    name: "No funciona el altavoz",
    step: "Medir valores de referencia",
    options: [{
        name: "Correcta medición de valores de referencia (SPK_OUT_P y SPK_OUT_N)",
        step: "Revisar amplificador de audio",
        color: "green",
        options: [{
            name: "Correcta revisión de amplificador de audio",
            step: "Revisar codec de audio - PMIC",
            color: "green",
            options: [{
                solution: "El codec también, muchas veces, viene embebido en el PMIC, en ese caso debemos reemplazar el PMIC."
            }]
        }, {
            name: "Incorrecta revisión de amplificador de audio",
            step: "Reemplazar amplificador de audio",
            color: "red",
            options: [{
                solution: "Medir alrededor del IC los valores de referencia 'caidas de tensión' para comprobar que no haya algún corto o fuga en un componente que tenga relación con el amplificador."
            }]
        }]
    }, {
        name: "Incorrecta medición de valores de referencia (SPK_OUT_P y SPK_OUT_N)",
        color: "red",
        options: [{
            solution: "Alterada hacia arriba 'serie' o alterada hacia abajo 'paralelo'. Lo más frecuente es que se alteren hacia arriba 'valor muy alto o sin medida' si este es el caso revisar los filtros de altavoz 'bobinas', si están alteradas hacia abajo o corto, revisar el amplificador de audio."
        }]
    }]
}, {
    name: "No funciona el audio en llamadas",
    step: "Medir señales de referencia",
    options: [{
        name: "Correcta medición de señales de referencia (RCV_P y RCV_N)",
        step: "Revisar codec de audio",
        color: "green",
        options: [{
            name: "Correcta revisión de codec de audio",
            step: "Revisar comunicación",
            color: "green",
            options: [{
                solution: "Si aún no tienes osciloscopio, mide con el multímetro, recuerda que generalmente las líneas de comunicación manejan un voltaje de 1.8V."
            }]
        }, {
            name: "Incorrecta revisión de codec de audio",
            step: "Reemplazar codec de audio",
            color: "red",
            options: [{
                solution: "Cuando falla el codec, generalmente tenemos problemas en más de una de las funciones de audio 'Altavoz, Micrófonos, Auricular, etc.'"
            }]
        }]
    }, {
        name: "Incorrecta medición de señales de referencia (RCV_P y RCV_N)",
        color: "red",
        options: [{
            solution: "Alterada hacia arriba 'serie' o alterada hacia abajo 'paralelo'. Lo más común es que haya puesto defectuoso uno de los filtros 'bobinas' de audio, de ser así el valor estaría más alto de lo normal o incluso abierta OL, si está alterada hacia abajo, normalmente en un diodo TVS."
        }]
    }]
}, {
    name: "El micrófono no funciona",
    step: "Medir valores de referencia (MAIN_MIC_P, MAIN_MIC_N y MAIN_MICBIAS_1P8)",
    options: [{
        name: "Correcta medición de valores de referencia (MAIN_MIC_P, MAIN_MIC_N y MAIN_MICBIAS_1P8)",
        step: "Revisar alimentación 1.8V - 2.8V",
        color: "green",
        options: [{
            name: "Correcta revisión de alimentación",
            color: "green",
            options: [{
                solution: "Revisar codec de audio."
            }]
        }, {
            name: "Incorrecta revisión de alimentación",
            step: "Revisar administrador de voltaje 'Codec'",
            color: "red",
            options: [{
                solution: "Quien envía este voltaje el micrófono es el codec, pero recuerda que algunos equipos traen el codec dentro del PMIC."
            }]
        }]
    }, {
        name: "Incorrecta medición de valores de referencia (MAIN_MIC_P, MAIN_MIC_N y MAIN_MICBIAS_1P8)",
        color: "red",
        options: [{
            solution: "Alterada hacia arriba 'serie' o alterada hacia abajo 'paralelo'. En algunos equipos en la línea MAIN_MIC_P, va un condensador en serie, por lo tanto, la medida será OL, debemos verificar que haya continuidad desde el pad del micrófono hasta el condensador y en el otro pin del condensador debe medir la caída de tensión normal."
        }]
    }]
}, {
    name: "SIMCARD no funciona",
    step: "Medir señales de referencia (VCC, RST, CLK, I/O y GND)",
    options: [{
        name: "Correcta medición de señales de referencia (VCC, RST, CLK, I/O y GND)",
        step: "Medir señal detect",
        color: "green",
        options: [{
            name: "Correcta medición de señal detect",
            step: "Medir alimentación: 1.8V 3.0V",
            color: "green",
            options: [{
                name: "Correcta medición de alimentación 1.8V 3.0V",
                color: "green",
                options: [{
                    solution: "Medir comunicación RST, I/O y CLK"
                }]
            }, {
                name: "Incorrecta medición de alimentación 1.8V 3.0V",
                step: "Reemplazar fuente de alimentación 'PMIC, NFC'",
                color: "red",
                options: [{
                    solution: "La fuente de alimentación de la SIM, puede ser el PMIC_RF, el NFC o el PMIC principal, también puede enviar este voltaje."
                }]
            }]
        }, {
            name: "Incorrecta medición de señal detect",
            step: "Seguir la linea detect hasta su origen 'procesador'",
            color: "red",
            options: [{
                solution: "Esta linea viene desde el procesador de llamadas 'Baseband' que en la mayoria de equipos Android, el BB viene integrado dentro de la CPU."
            }]
        }]
    }, {
        name: "Incorrecta medición de señales de referencia (VCC, RST, CLK, I/O y GND)",
        color: "red",
        options: [{
            solution: "Alterada hacia arriba 'serie' o alterada hacia abajo 'paralelo'"
        }]
    }]
}, {
    name: "Wifi no funciona",
    step: "Verifiar corto y/o fuga en entradas y salidas del IC de WIFI",
    options: [{
        name: "Hay corto y/o fuga en entradas y salidas del IC de WIFI",
        step: "Aplicar método térmico y/o Kélvin",
        options: [{
            solution: "Para usar el método térmico, debemos inyectar corriente en la misma tensión 'voltaje' que usa la línea donde vamos a hacer el diagnóstico térmico."
        }]
    }, {
        name: "No hay corto y/o fuga en entradas y salidas del IC de Wifi",
        step: "Revisar alimentación 1.3V, 1.8V, 3.3V",
        options: [{
            name: "Hay voltaje en alimentación 1.3V, 1.8V, 3.3V",
            step: "Verificar control y comunicación",
            options: [{
                name: "Correcta verificación de líneas control y comunicación",
                color: "green",
                options: [{
                    solution: "Reemplazar IC de Wifi."
                }]
            }, {
                name: "Incorrecta verificación de líneas control y comunicación",
                step: "Seguir las lineas defectuosas hasta su origen 'CPU'",
                color: "red",
                options: [{
                    solution: "Si hasta acá está todo bien, generalmente el daño está en la CPU... aunque también puede ser algún IC o periférico que comparta las mismas líneas de comunicación."
                }]
            }]
        }, {
            name: "No hay voltaje en alimentación 1.3V, 1.8V, 3.3V",
            step: "Reemplazar el administrador de voltaje",
            options: [{
                solution: "Normalmente, el administrador de voltaje es el PMIC principal."
            }]
        }]
    }]
}, {
    name: "La radiofrecuencia no funciona",
    step: "Usar método modo avión fantasma",
    options: [{
        name: "Funciona método modo avión fantasma",
        step: "Revisar Transceiver",
        options: [{
            name: "Correcta revisión del Transceiver",
            step: "Medir alimentación 1.0V, 1.2V, 1.8V",
            color: "green",
            options: [{
                name: "Correcta medición de alimentación 1.0V, 1.2V, 1.8V",
                color: "green",
                options: [{
                    solution: "Medir comunicación."
                }]
            }, {
                name: "Incorrecta medición de alimentación 1.0V, 1.2V, 1.8V",
                step: "Reemplazar fuente de alimentación 'PMIC_RF, PMIC'",
                color: "red",
                options: [{
                    solution: "En la mayoria de equipos Android, quien alimenta el Transceiver es el PMIC principal 'MAIN PMIC'."
                }]
            }]
        }, {
            name: "Incorrecta revisión del Transceiver",
            step: "Reemplazar el Transceiver",
            color: "red",
            options: [{
                solution: "El Transceiver lo podemos identificar, con las letras que trae WTR, SDR y también por la configuración típica de sus balls 'diagonalmente'."
            }]
        }]
    }, {
        name: "No funciona método modo avión fantasma",
        step: "Reemplazar IC y/o NFC",
        options: [{
            solution: "El NFC también lo podemos descartar, activándose e intentando compartir un archivo, de esta manera podemos estar seguros si está fallando."
        }]
    }]
}]
    , kh = aS
    , xh = y.createContext({
        selectedOptions: [{
            name: "",
            options: kh,
            step: ""
        }],
        setSelectedOptions: () => { }
    })
    , lS = ({ children: e }) => {
        const [t, n] = y.useState([{
            name: "",
            options: kh,
            step: ""
        }]);
        return g.jsx(xh.Provider, {
            value: {
                selectedOptions: t,
                setSelectedOptions: n
            },
            children: e
        })
    }
    , du = () => y.useContext(xh);
function uS() {
    const { selectedOptions: e, setSelectedOptions: t } = du()
        , n = () => {
            if ((e == null ? void 0 : e.length) === 1)
                return g.jsx("span", {
                    children: "Seleccionar primera opción"
                });
            if ((e == null ? void 0 : e.length) === 2)
                return g.jsx("span", {
                    children: "Seleccionar segunda opción"
                })
        }
        , r = i => () => {
            const o = e.slice(0, i + 1);
            t(o)
        }
        ;
    return g.jsxs("div", {
        className: "text-blue-2 font-semibold text-sm md:text-base text-center",
        children: [(e == null ? void 0 : e.length) >= 2 && (e == null ? void 0 : e.map((i, o) => {
            var s;
            return ((s = i == null ? void 0 : i.name) == null ? void 0 : s.length) >= 1 && g.jsxs(nl.Fragment, {
                children: [g.jsx("span", {
                    className: "text-blue-1 cursor-pointer hover:text-blue-2",
                    onClick: r(o),
                    children: i == null ? void 0 : i.name
                }, o), g.jsx("span", {
                    className: "last:hidden",
                    children: " > "
                })]
            }, o)
        }
        )), n()]
    })
}
function cS() {
    var n;
    const { selectedOptions: e } = du()
        , t = (n = e == null ? void 0 : e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : n.step;
    return (t == null ? void 0 : t.length) >= 2 && g.jsxs("p", {
        className: "text-sm md:text-base text-blue-2 font-normal whitespace-pre-line w-full text-center",
        children: ["Paso a seguir: ", g.jsx("span", {
            className: "font-bold",
            children: t
        })]
    })
}
function dS({ children: e }) {
    return g.jsx("div", {
        className: "w-full flex justify-center",
        children: g.jsxs("div", {
            className: "flex flex-col gap-10 items-center w-full max-w-xl my-16 md:my-20",
            children: [g.jsx("h1", {
                className: "text-blue-3 text-xl md:text-2xl font-bold",
                children: "Diagnóstico de fallas"
            }), g.jsxs("div", {
                className: "flex flex-col gap-8 items-center w-full",
                children: [g.jsx(uS, {}), g.jsx(cS, {}), e]
            })]
        })
    })
}
function fS({ className: e, style: t }) {
    return g.jsx("svg", {
        className: `-rotate-90 ${e}`,
        width: "22",
        height: "22",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: t,
        children: g.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
        })
    })
}
function pS({ color: e, name: t }) {
    const n = e === "green"
        , r = e === "red";
    return g.jsxs("button", {
        className: `bg-white-2 hover:bg-blue-1 hover:text-white group w-full p-4 flex justify-center items-center font-semibold gap-3 rounded-xl text-sm md:text-base text-blue-2 
        ${n && "green"}
        ${r && "red"}
      `,
        children: [t, g.jsx(fS, {
            className: `w-5 h-5 md:w-6 md:h-6 fill-blue-1 group-hover:!fill-white ${n && `group-hover:!fill-[${n}]`} `,
            style: {
                fill: e || "#2563EB"
            }
        })]
    })
}
function hS() {
    var o, s, a, l, u;
    const { selectedOptions: e, setSelectedOptions: t } = du()
        , n = c => () => {
            t(d => [...d, {
                name: c.name || "",
                options: c.options || [],
                step: c.step || " "
            }])
        }
        , r = () => () => {
            const c = e.slice(0, -1);
            t(c)
        }
        , i = () => () => {
            var c, d, h;
            t([{
                name: (c = e == null ? void 0 : e[0]) == null ? void 0 : c.name,
                options: (d = e == null ? void 0 : e[0]) == null ? void 0 : d.options,
                step: (h = e == null ? void 0 : e[0]) == null ? void 0 : h.step
            }])
        }
        ;
    return g.jsxs("div", {
        className: "flex flex-col gap-5 w-full items-start",
        children: [g.jsx("ul", {
            className: "flex flex-col gap-4 items-center w-full",
            children: (s = (o = e == null ? void 0 : e[e.length - 1]) == null ? void 0 : o.options) == null ? void 0 : s.map((c, d) => c != null && c.solution ? g.jsxs("li", {
                className: "w-full bg-white-2 rounded-[20px] p-4 font-semibold text-blue-2 flex flex-col items-center gap-3",
                children: [g.jsx("span", {
                    className: "font-bold text-sm md:text-base",
                    children: "Solución"
                }), g.jsx("p", {
                    className: "text-sm md:text-base w-full",
                    children: c == null ? void 0 : c.solution
                })]
            }, d) : g.jsx("li", {
                className: "w-full",
                onClick: n(c),
                children: g.jsx(pS, {
                    color: c.color,
                    name: c.name || ""
                })
            }, c.name))
        }), g.jsxs("div", {
            className: "flex justify-between w-full text-sm md:text-base",
            children: [(e == null ? void 0 : e.length) >= 2 && g.jsx("button", {
                className: "hover:text-blue-1 text-blue-2",
                onClick: r(),
                children: "Volver atrás"
            }) 
            ]
          })]
        })
    }

function mS() {
    return g.jsxs("main", {
        className: "bg-white-1 flex-col flex w-full min-h-screen h-full px-4",
        children: [g.jsx(sS, {}), g.jsx(dS, {
            children: g.jsx(hS, {})
        })]
    })
}
var Ph, ld = dw;
Ph = ld.createRoot,
    ld.hydrateRoot;
const gS = ({ message: e }) => g.jsx("div", {
    className: "text-sm text-red-500",
    children: e
})
    , te = ({ children: e, onSubmit: t }) => g.jsx("form", {
        onSubmit: t,
        className: "flex flex-col gap-8 w-full",
        children: e
    })
    , vS = ({ name: e, label: t, type: n = "text", placeholder: r, required: i, children: o, defaultValue: s, onChange: a, icon: l, autocomplete: u, className: c, containerClassName: d, min: h, max: v }) => g.jsxs("div", {
        className: `flex flex-col gap-2 relative w-full ${d}`,
        children: [t && g.jsx("label", {
            htmlFor: e,
            className: "text-sm",
            children: t
        }), g.jsxs("div", {
            className: "relative w-full",
            children: [g.jsx("input", {
                type: n,
                placeholder: r,
                id: e,
                name: e,
                required: i,
                defaultValue: s,
                className: `w-full text-sm rounded-lg outline-none h-10 bg-white border border-[#DDDDDD] text-slate-600 pl-2 lg:pl-4 outline focus:outline-none focus:border-blue-1 ${c}`,
                onChange: a,
                autoComplete: u,
                max: h,
                min: v
            }), g.jsx("div", {
                className: "absolute right-2 bottom-2",
                children: l
            })]
        }), o]
    });
te.TextInput = vS;
te.WrongInput = gS;
const ls = ({ validationList: e, onSubmit: t, onSubmitParams: n }) => {
    const [r, i] = y.useState({})
        , o = l => {
            const u = structuredClone(l);
            return Object.keys(l).forEach((c, d) => {
                var h;
                e[d] === "not-required" ? u[c] = !1 : u[c] = !((h = e[d]) != null && h.test(l[c]))
            }
            ),
                i(u),
                Object.values(u).every(c => c === !1)
        }
        , s = async l => {
            for (const u in l)
                if (typeof l[u] == "string") {
                    const c = parseFloat(l[u]);
                    if (l[u].length > JSON.stringify(c).length)
                        continue;
                    isNaN(c) || (l[u] = c)
                }
            return l
        }
        ;
    return {
        handleSubmit: async l => {
            l.preventDefault();
            const u = new FormData(l.target)
                , c = Object.fromEntries(u.entries())
                , d = await s(c);
            if (!o(d))
                return;
            const h = {
                ...n,
                ...d
            };
            t({
                data: h
            })
        }
        ,
        wrongInputs: r
    }
}
    , fu = /^(?=.*[a-zA-Z0-9]).{6,50}$/
    , pu = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function er({ className: e, style: t }) {
    return g.jsxs("svg", {
        className: `${e}`,
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: t,
        children: [g.jsx("circle", {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
        }), g.jsx("path", {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        })]
    })
}
function Th({ className: e, style: t }) {
    return g.jsxs("svg", {
        className: `${e}`,
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: t,
        children: [g.jsx("path", {
            d: "M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z",
            fill: "#EA4335"
        }), g.jsx("path", {
            d: "M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z",
            fill: "#4285F4"
        }), g.jsx("path", {
            d: "M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z",
            fill: "#FBBC05"
        }), g.jsx("path", {
            d: "M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z",
            fill: "#34A853"
        })]
    })
}
const yS = new nt
    , Nh = ({ setCurrentUser: e, navigate: t }) => {
        ay(mt, yS).then(n => {
            const r = n.user;
            e(r),
                ve.success("Has ingresado correctamente"),
                r && t("/", {
                    replace: !0
                })
        }
        ).catch(n => {
            console.log(n),
                ve.error(n.message)
        }
        )
    }
    , wS = () => {
        const { isLoading: e, setIsLoading: t, setCurrentUser: n } = y.useContext(En)
            , r = Yt()
            , i = ({ data: a }) => {
                t(!0),
                    i0(a).then(async l => {
                        const { user: u } = l;
                        u && (n(u),
                            ve.success("Usuario registrado correctamente"),
                            r("/ingresar", {
                                replace: !0
                            }))
                    }
                    ).catch(l => {
                        l.code === "auth/email-already-in-use" ? ve.error("El correo electrónico ya está en uso") : l.code === "auth/too-many-requests" && ve.error("Demasiados intentos. Intente de nuevo más tarde")
                    }
                    ).finally(() => {
                        t(!1)
                    }
                    )
            }
            , { handleSubmit: o, wrongInputs: s } = ls({
                validationList: [pu, fu],
                onSubmit: i
            });
        return g.jsxs(te, {
            onSubmit: o,
            children: [g.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [g.jsx(te.TextInput, {
                    name: "email",
                    type: "email",
                    required: !0,
                    placeholder: "",
                    autocomplete: "email",
                    label: "Correo electrónico",
                    children: (s == null ? void 0 : s.email) && g.jsx(te.WrongInput, {
                        message: "El email debe tener al menos 2 caracteres y un @"
                    })
                }), g.jsx(te.TextInput, {
                    type: "password",
                    name: "password",
                    required: !0,
                    placeholder: "",
                    autocomplete: "new-password",
                    label: "Contraseña",
                    children: (s == null ? void 0 : s.password) && g.jsx(te.WrongInput, {
                        message: "La contraseña debe contener entre 6 a 50 caracteres"
                    })
                })]
            }), g.jsx("div", {
                className: "flex flex-col mt-1 gap-5",
                children: g.jsx(Vt, {
                    type: "button",
                    buttonType: "submit",
                    variant: "primary",
                    className: "h-12",
                    disabled: e,
                    children: e ? g.jsx(er, {
                        className: "animate-spin"
                    }) : "Registrarme"
                })
            }), g.jsxs("div", {
                className: "relative flex justify-center items-center h-max",
                children: [g.jsx("div", {
                    className: "w-full absolute inset-0 top-1/2 bg-gray-300 h-[1px] z-10"
                }), g.jsx("span", {
                    className: "bg-white z-20 relative px-8",
                    children: "O continuar con"
                })]
            }), g.jsx(Vt, {
                type: "button",
                buttonType: "button",
                variant: "secondary",
                className: "h-12",
                disabled: e,
                onClick: () => Nh({
                    setCurrentUser: n,
                    navigate: r
                }),
                children: e ? g.jsx(er, {
                    className: "animate-spin"
                }) : g.jsxs("div", {
                    className: "flex gap-3 items-center text-black",
                    children: [g.jsx(Th, {}), "Registrarme con Google"]
                })
            })]
        })
    }
    ;
function _S() {
    return g.jsx("main", {
        className: "h-full min-h-screen flex justify-center items-center bg-white-1 px-3",
        children: g.jsxs("div", {
            className: "w-full max-w-lg flex min-h-full flex-1 flex-col justify-center",
            children: [g.jsx("div", {
                className: "w-full flex flex-col gap-5",
                children: g.jsx("div", {
                    className: "sm:mx-auto sm:w-full sm:max-w-sm",
                    children: g.jsx("h1", {
                        className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                        children: "Registrar una cuenta"
                    })
                })
            }), g.jsx("div", {
                className: "mt-10 sm:mx-auto sm:w-full bg-white rounded-lg shadow-md px-6 py-12 lg:px-8",
                children: g.jsx(wS, {})
            }), g.jsxs("p", {
                className: "mt-10 text-center text-sm text-gray-500",
                children: ["¿Ya tienes una cuenta?", " ", g.jsx(lr, {
                    to: "/ingresar",
                    className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500",
                    children: "Iniciar sesión"
                })]
            })]
        })
    })
}
const SS = () => {
    const { isLoading: e, setIsLoading: t, setCurrentUser: n } = y.useContext(En)
        , r = Yt()
        , i = ({ data: a }) => {
            t(!0),
                r0(a).then(l => {
                    const { user: u } = l;
                    u && (n(u),
                        r("/", {
                            replace: !0
                        }))
                }
                ).catch(l => {
                    l.code === "auth/invalid-credential" && ve.error("La cuenta no se encuentra registrada"),
                        l.code === "auth/wrong-password" && ve.error("Contraseña incorrecta"),
                        l.code === "auth/too-many-requests" && ve.error("Demasiados intentos. Intente de nuevo más tarde")
                }
                ).finally(() => {
                    t(!1)
                }
                )
        }
        , { handleSubmit: o, wrongInputs: s } = ls({
            validationList: [pu, fu],
            onSubmit: i
        });
    return g.jsxs(te, {
        onSubmit: o,
        children: [g.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [g.jsx(te.TextInput, {
                name: "email",
                type: "email",
                required: !0,
                placeholder: "",
                autocomplete: "email",
                label: "Correo electrónico",
                children: (s == null ? void 0 : s.email) && g.jsx(te.WrongInput, {
                    message: "El email debe tener al menos 2 caracteres y un @"
                })
            }), g.jsxs(te.TextInput, {
                type: "password",
                name: "password",
                required: !0,
                placeholder: "",
                autocomplete: "current-password",
                label: "Contraseña",
                children: [g.jsx(lr, {
                    to: "/recuperar-contraseña",
                    className: "absolute right-0 top-0 text-sm text-blue-1 hover:text-blue-800",
                    children: "Olvidé mi contraseña"
                }), (s == null ? void 0 : s.password) && g.jsx(te.WrongInput, {
                    message: "La contraseña debe contener entre 6 a 50 caracteres"
                })]
            })]
        }), g.jsx("div", {
            className: "flex flex-col mt-1 gap-5",
            children: g.jsx(Vt, {
                type: "button",
                buttonType: "submit",
                variant: "primary",
                className: "h-12",
                disabled: e,
                children: e ? g.jsx(er, {
                    className: "animate-spin"
                }) : "Ingresar"
            })
        }), g.jsxs("div", {
            className: "relative flex justify-center items-center h-max",
            children: [g.jsx("div", {
                className: "w-full absolute inset-0 top-1/2 bg-gray-300 h-[1px] z-10"
            }), g.jsx("span", {
                className: "bg-white z-20 relative px-8",
                children: "O continuar con"
            })]
        }), g.jsx(Vt, {
            type: "button",
            buttonType: "button",
            variant: "secondary",
            className: "h-12",
            disabled: e,
            onClick: () => Nh({
                setCurrentUser: n,
                navigate: r
            }),
            children: e ? g.jsx(er, {
                className: "animate-spin"
            }) : g.jsxs("div", {
                className: "flex gap-3 items-center text-black",
                children: [g.jsx(Th, {}), "Ingresar con Google"]
            })
        })]
    })
}
    ;
function ES() {
    return g.jsx("main", {
        className: "h-full min-h-screen flex justify-center items-center bg-white-1 px-3",
        children: g.jsxs("div", {
            className: "w-full max-w-lg flex min-h-full flex-1 flex-col justify-center",
            children: [g.jsx("div", {
                className: "w-full flex flex-col gap-5",
                children: g.jsx("div", {
                    className: "sm:mx-auto sm:w-full sm:max-w-sm",
                    children: g.jsx("h1", {
                        className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                        children: "Ingresar"
                    })
                })
            }), g.jsx("div", {
                className: "mt-10 sm:mx-auto sm:w-full bg-white rounded-lg shadow-md px-6 py-12 lg:px-8",
                children: g.jsx(SS, {})
            }), g.jsxs("p", {
                className: "mt-10 text-center text-sm text-gray-500",
                children: ["¿No tienes una cuenta?", " ", g.jsx(lr, {
                    to: "/registro",
                    className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500",
                    children: "Registrarme"
                })]
            })]
        })
    })
}
const IS = ({ Component: e }) => {
    const { user: t, firebaseLoading: n } = y.useContext(En);
    return n ? g.jsx("span", {
        className: "loading loading-dots loading-lg"
    }) : t ? g.jsx(e, {}) : g.jsx(e_, {
        to: "/ingresar"
    })
}
    ;
function CS() {
    return g.jsx("main", {
        className: "w-full flex justify-center items-center h-full min-h-screen",
        children: g.jsxs("div", {
            className: "w-full max-w-xl flex justify-center items-center flex-col gap-10",
            children: [g.jsxs("div", {
                className: "flex gap-5 flex-col justify-center items-center",
                children: [g.jsx("h1", {
                    className: "text-4xl font-bold text-blue-1",
                    children: "404"
                }), g.jsx("h2", {
                    className: "text-2xl font-bold text-blue-3",
                    children: "Página no encontrada"
                })]
            })
       ]     })
        })
    }

const kS = ({ oobCode: e }) => {
    const { isLoading: t, setIsLoading: n } = y.useContext(En)
        , r = Yt()
        , i = ({ data: a }) => {
            const l = a == null ? void 0 : a.password;
            n(!0),
                a0(e, l).then(() => {
                    ve.success("Contraseña reestablecida correctamente."),
                        r("/ingresar", {
                            replace: !0
                        })
                }
                ).catch(u => {
                    u.code === "expired-action-code" && ve.error("El enlace ha expirado."),
                        u.code === "invalid-action-code" && ve.error("El enlace no es válido."),
                        u.code === "user-not-found" && ve.error("Usuario no encontrado.")
                }
                ).finally(() => {
                    n(!1)
                }
                )
        }
        , { handleSubmit: o, wrongInputs: s } = ls({
            validationList: [fu],
            onSubmit: i
        });
    return g.jsxs(te, {
        onSubmit: o,
        children: [g.jsx("div", {
            className: "flex flex-col gap-4",
            children: g.jsx(te.TextInput, {
                type: "password",
                name: "password",
                required: !0,
                placeholder: "",
                autocomplete: "new-password",
                label: "Contraseña nueva",
                children: (s == null ? void 0 : s.password) && g.jsx(te.WrongInput, {
                    message: "La contraseña debe contener entre 6 a 50 caracteres"
                })
            })
        }), g.jsx("div", {
            className: "flex flex-col mt-1 gap-5",
            children: g.jsx(Vt, {
                type: "button",
                buttonType: "submit",
                variant: "primary",
                className: "h-12",
                disabled: t,
                children: t ? g.jsx(er, {
                    className: "animate-spin"
                }) : "Reestablecer contraseña"
            })
        })]
    })
}
    ;
function xS() {
    const [e] = h_()
        , t = e.get("oobCode")
        , n = Yt();
    return y.useEffect(() => {
        t || n("/ingresar")
    }
        , []),
        g.jsx("main", {
            className: "h-full min-h-screen flex justify-center items-center bg-white-1 px-3",
            children: g.jsxs("div", {
                className: "w-full max-w-lg flex min-h-full flex-1 flex-col justify-center",
                children: [g.jsx("div", {
                    className: "w-full flex flex-col gap-5",
                    children: g.jsx("div", {
                        className: "sm:mx-auto sm:w-full sm:max-w-sm",
                        children: g.jsx("h1", {
                            className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                            children: "Ingresar nueva contraseña"
                        })
                    })
                }), g.jsx("div", {
                    className: "mt-10 sm:mx-auto sm:w-full bg-white rounded-lg shadow-md px-6 py-12 lg:px-8",
                    children: g.jsx(kS, {
                        oobCode: t
                    })
                })
                 ]   })
                })
            }
    
const PS = () => {
    const { isLoading: e, setIsLoading: t } = y.useContext(En)
        , n = ({ data: o }) => {
            t(!0),
                s0(o).then(() => {
                    ve.success("Se ha enviado un correo de recuperación a tu email")
                }
                ).catch(s => {
                    console.log(s)
                }
                ).finally(() => {
                    t(!1)
                }
                )
        }
        , { handleSubmit: r, wrongInputs: i } = ls({
            validationList: [pu],
            onSubmit: n
        });
    return g.jsxs(te, {
        onSubmit: r,
        children: [g.jsx("div", {
            className: "flex flex-col gap-4",
            children: g.jsx(te.TextInput, {
                name: "email",
                type: "email",
                required: !0,
                placeholder: "",
                autocomplete: "email",
                label: "Correo electrónico",
                children: (i == null ? void 0 : i.email) && g.jsx(te.WrongInput, {
                    message: "El email debe tener al menos 2 caracteres y un @"
                })
            })
        }), g.jsx("div", {
            className: "flex flex-col mt-1 gap-5",
            children: g.jsx(Vt, {
                type: "button",
                buttonType: "submit",
                variant: "primary",
                className: "h-12",
                disabled: e,
                children: e ? g.jsx(er, {
                    className: "animate-spin"
                }) : "Enviar correo de recuperación"
            })
        })]
    })
}
    ;
function TS() {
    return g.jsx("main", {
        className: "h-full min-h-screen flex justify-center items-center bg-white-1 px-3",
        children: g.jsxs("div", {
            className: "w-full max-w-lg flex min-h-full flex-1 flex-col justify-center",
            children: [g.jsx("div", {
                className: "w-full flex flex-col gap-5",
                children: g.jsxs("div", {
                    className: "sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-3 text-center",
                    children: [g.jsx("h1", {
                        className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                        children: "Recuperar contraseña"
                    }), g.jsx("h2", {
                        children: "Ingrese su correo electrónico para enviar un email de recuperación"
                    })]
                })
            }), g.jsx("div", {
                className: "mt-10 sm:mx-auto sm:w-full bg-white rounded-lg shadow-md px-6 py-12 lg:px-8",
                children: g.jsx(PS, {})
            })
              ]  })
            })
        }
    

Ph(document.getElementById("root")).render(g.jsx(nl.StrictMode, {
    children: g.jsx(c_, {
        children: g.jsx(lS, {
            children: g.jsxs(m_, {
                children: [g.jsx(oS, {}), g.jsxs(n_, {
                    children: [g.jsx(rn, {
                        path: "/",
                        element: g.jsx(IS, {
                            Component: mS
                        })
                    }), g.jsx(rn, {
                        path: "/registro",
                        element: g.jsx(_S, {})
                    }), g.jsx(rn, {
                        path: "/ingresar",
                        element: g.jsx(ES, {})
                    }), g.jsx(rn, {
                        path: "/recuperar-contraseña",
                        element: g.jsx(TS, {})
                    }), g.jsx(rn, {
                        path: "/reestablecer-contraseña",
                        element: g.jsx(xS, {})
                    }), g.jsx(rn, {
                        path: "*",
                        element: g.jsx(CS, {})
                    })]
                })]
            })
        })
    })
}));

window.goToHome = () => { window.volverA("main"); document.getElementById("mainMenu").style.display = "flex"; };
