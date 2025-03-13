/*! For license information please see test-background.bundle.js.LICENSE.txt */
var e = {
		815: function (e, t) {
			var r, n;
			'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self,
				(r = function (e) {
					if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
						throw new Error('This script should only be loaded in a browser extension.');
					if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
						e.exports = globalThis.browser;
					else {
						const t = 'The message port closed before a response was received.',
							r = (e) => {
								const r = {
									alarms: {
										clear: {minArgs: 0, maxArgs: 1},
										clearAll: {minArgs: 0, maxArgs: 0},
										get: {minArgs: 0, maxArgs: 1},
										getAll: {minArgs: 0, maxArgs: 0}
									},
									bookmarks: {
										create: {minArgs: 1, maxArgs: 1},
										get: {minArgs: 1, maxArgs: 1},
										getChildren: {minArgs: 1, maxArgs: 1},
										getRecent: {minArgs: 1, maxArgs: 1},
										getSubTree: {minArgs: 1, maxArgs: 1},
										getTree: {minArgs: 0, maxArgs: 0},
										move: {minArgs: 2, maxArgs: 2},
										remove: {minArgs: 1, maxArgs: 1},
										removeTree: {minArgs: 1, maxArgs: 1},
										search: {minArgs: 1, maxArgs: 1},
										update: {minArgs: 2, maxArgs: 2}
									},
									browserAction: {
										disable: {minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0},
										enable: {minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0},
										getBadgeBackgroundColor: {minArgs: 1, maxArgs: 1},
										getBadgeText: {minArgs: 1, maxArgs: 1},
										getPopup: {minArgs: 1, maxArgs: 1},
										getTitle: {minArgs: 1, maxArgs: 1},
										openPopup: {minArgs: 0, maxArgs: 0},
										setBadgeBackgroundColor: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
										setBadgeText: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
										setIcon: {minArgs: 1, maxArgs: 1},
										setPopup: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
										setTitle: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0}
									},
									browsingData: {
										remove: {minArgs: 2, maxArgs: 2},
										removeCache: {minArgs: 1, maxArgs: 1},
										removeCookies: {minArgs: 1, maxArgs: 1},
										removeDownloads: {minArgs: 1, maxArgs: 1},
										removeFormData: {minArgs: 1, maxArgs: 1},
										removeHistory: {minArgs: 1, maxArgs: 1},
										removeLocalStorage: {minArgs: 1, maxArgs: 1},
										removePasswords: {minArgs: 1, maxArgs: 1},
										removePluginData: {minArgs: 1, maxArgs: 1},
										settings: {minArgs: 0, maxArgs: 0}
									},
									commands: {getAll: {minArgs: 0, maxArgs: 0}},
									contextMenus: {
										remove: {minArgs: 1, maxArgs: 1},
										removeAll: {minArgs: 0, maxArgs: 0},
										update: {minArgs: 2, maxArgs: 2}
									},
									cookies: {
										get: {minArgs: 1, maxArgs: 1},
										getAll: {minArgs: 1, maxArgs: 1},
										getAllCookieStores: {minArgs: 0, maxArgs: 0},
										remove: {minArgs: 1, maxArgs: 1},
										set: {minArgs: 1, maxArgs: 1}
									},
									devtools: {
										inspectedWindow: {eval: {minArgs: 1, maxArgs: 2, singleCallbackArg: !1}},
										panels: {
											create: {minArgs: 3, maxArgs: 3, singleCallbackArg: !0},
											elements: {createSidebarPane: {minArgs: 1, maxArgs: 1}}
										}
									},
									downloads: {
										cancel: {minArgs: 1, maxArgs: 1},
										download: {minArgs: 1, maxArgs: 1},
										erase: {minArgs: 1, maxArgs: 1},
										getFileIcon: {minArgs: 1, maxArgs: 2},
										open: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
										pause: {minArgs: 1, maxArgs: 1},
										removeFile: {minArgs: 1, maxArgs: 1},
										resume: {minArgs: 1, maxArgs: 1},
										search: {minArgs: 1, maxArgs: 1},
										show: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0}
									},
									extension: {
										isAllowedFileSchemeAccess: {minArgs: 0, maxArgs: 0},
										isAllowedIncognitoAccess: {minArgs: 0, maxArgs: 0}
									},
									history: {
										addUrl: {minArgs: 1, maxArgs: 1},
										deleteAll: {minArgs: 0, maxArgs: 0},
										deleteRange: {minArgs: 1, maxArgs: 1},
										deleteUrl: {minArgs: 1, maxArgs: 1},
										getVisits: {minArgs: 1, maxArgs: 1},
										search: {minArgs: 1, maxArgs: 1}
									},
									i18n: {detectLanguage: {minArgs: 1, maxArgs: 1}, getAcceptLanguages: {minArgs: 0, maxArgs: 0}},
									identity: {launchWebAuthFlow: {minArgs: 1, maxArgs: 1}},
									idle: {queryState: {minArgs: 1, maxArgs: 1}},
									management: {
										get: {minArgs: 1, maxArgs: 1},
										getAll: {minArgs: 0, maxArgs: 0},
										getSelf: {minArgs: 0, maxArgs: 0},
										setEnabled: {minArgs: 2, maxArgs: 2},
										uninstallSelf: {minArgs: 0, maxArgs: 1}
									},
									notifications: {
										clear: {minArgs: 1, maxArgs: 1},
										create: {minArgs: 1, maxArgs: 2},
										getAll: {minArgs: 0, maxArgs: 0},
										getPermissionLevel: {minArgs: 0, maxArgs: 0},
										update: {minArgs: 2, maxArgs: 2}
									},
									pageAction: {
										getPopup: {minArgs: 1, maxArgs: 1},
										getTitle: {minArgs: 1, maxArgs: 1},
										hide: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
										setIcon: {minArgs: 1, maxArgs: 1},
										setPopup: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
										setTitle: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
										show: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0}
									},
									permissions: {
										contains: {minArgs: 1, maxArgs: 1},
										getAll: {minArgs: 0, maxArgs: 0},
										remove: {minArgs: 1, maxArgs: 1},
										request: {minArgs: 1, maxArgs: 1}
									},
									runtime: {
										getBackgroundPage: {minArgs: 0, maxArgs: 0},
										getPlatformInfo: {minArgs: 0, maxArgs: 0},
										openOptionsPage: {minArgs: 0, maxArgs: 0},
										requestUpdateCheck: {minArgs: 0, maxArgs: 0},
										sendMessage: {minArgs: 1, maxArgs: 3},
										sendNativeMessage: {minArgs: 2, maxArgs: 2},
										setUninstallURL: {minArgs: 1, maxArgs: 1}
									},
									sessions: {
										getDevices: {minArgs: 0, maxArgs: 1},
										getRecentlyClosed: {minArgs: 0, maxArgs: 1},
										restore: {minArgs: 0, maxArgs: 1}
									},
									storage: {
										local: {
											clear: {minArgs: 0, maxArgs: 0},
											get: {minArgs: 0, maxArgs: 1},
											getBytesInUse: {minArgs: 0, maxArgs: 1},
											remove: {minArgs: 1, maxArgs: 1},
											set: {minArgs: 1, maxArgs: 1}
										},
										managed: {get: {minArgs: 0, maxArgs: 1}, getBytesInUse: {minArgs: 0, maxArgs: 1}},
										sync: {
											clear: {minArgs: 0, maxArgs: 0},
											get: {minArgs: 0, maxArgs: 1},
											getBytesInUse: {minArgs: 0, maxArgs: 1},
											remove: {minArgs: 1, maxArgs: 1},
											set: {minArgs: 1, maxArgs: 1}
										}
									},
									tabs: {
										captureVisibleTab: {minArgs: 0, maxArgs: 2},
										create: {minArgs: 1, maxArgs: 1},
										detectLanguage: {minArgs: 0, maxArgs: 1},
										discard: {minArgs: 0, maxArgs: 1},
										duplicate: {minArgs: 1, maxArgs: 1},
										executeScript: {minArgs: 1, maxArgs: 2},
										get: {minArgs: 1, maxArgs: 1},
										getCurrent: {minArgs: 0, maxArgs: 0},
										getZoom: {minArgs: 0, maxArgs: 1},
										getZoomSettings: {minArgs: 0, maxArgs: 1},
										goBack: {minArgs: 0, maxArgs: 1},
										goForward: {minArgs: 0, maxArgs: 1},
										highlight: {minArgs: 1, maxArgs: 1},
										insertCSS: {minArgs: 1, maxArgs: 2},
										move: {minArgs: 2, maxArgs: 2},
										query: {minArgs: 1, maxArgs: 1},
										reload: {minArgs: 0, maxArgs: 2},
										remove: {minArgs: 1, maxArgs: 1},
										removeCSS: {minArgs: 1, maxArgs: 2},
										sendMessage: {minArgs: 2, maxArgs: 3},
										setZoom: {minArgs: 1, maxArgs: 2},
										setZoomSettings: {minArgs: 1, maxArgs: 2},
										update: {minArgs: 1, maxArgs: 2}
									},
									topSites: {get: {minArgs: 0, maxArgs: 0}},
									webNavigation: {getAllFrames: {minArgs: 1, maxArgs: 1}, getFrame: {minArgs: 1, maxArgs: 1}},
									webRequest: {handlerBehaviorChanged: {minArgs: 0, maxArgs: 0}},
									windows: {
										create: {minArgs: 0, maxArgs: 1},
										get: {minArgs: 1, maxArgs: 2},
										getAll: {minArgs: 0, maxArgs: 1},
										getCurrent: {minArgs: 0, maxArgs: 1},
										getLastFocused: {minArgs: 0, maxArgs: 1},
										remove: {minArgs: 1, maxArgs: 1},
										update: {minArgs: 2, maxArgs: 2}
									}
								};
								if (0 === Object.keys(r).length)
									throw new Error('api-metadata.json has not been included in browser-polyfill');
								class n extends WeakMap {
									constructor(e, t = void 0) {
										super(t), (this.createItem = e);
									}
									get(e) {
										return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
									}
								}
								const o =
										(t, r) =>
										(...n) => {
											e.runtime.lastError
												? t.reject(new Error(e.runtime.lastError.message))
												: r.singleCallbackArg || (n.length <= 1 && !1 !== r.singleCallbackArg)
													? t.resolve(n[0])
													: t.resolve(n);
										},
									s = (e) => (1 == e ? 'argument' : 'arguments'),
									i = (e, t, r) => new Proxy(t, {apply: (t, n, o) => r.call(n, e, ...o)});
								let a = Function.call.bind(Object.prototype.hasOwnProperty);
								const c = (e, t = {}, r = {}) => {
										let n = Object.create(null),
											l = {
												has: (t, r) => r in e || r in n,
												get(l, f, u) {
													if (f in n) return n[f];
													if (!(f in e)) return;
													let g = e[f];
													if ('function' == typeof g)
														if ('function' == typeof t[f]) g = i(e, e[f], t[f]);
														else if (a(r, f)) {
															let t = ((e, t) =>
																function (r, ...n) {
																	if (n.length < t.minArgs)
																		throw new Error(
																			`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${n.length}`
																		);
																	if (n.length > t.maxArgs)
																		throw new Error(
																			`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${n.length}`
																		);
																	return new Promise((s, i) => {
																		if (t.fallbackToNoCallback)
																			try {
																				r[e](...n, o({resolve: s, reject: i}, t));
																			} catch (o) {
																				console.warn(
																					`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
																					o
																				),
																					r[e](...n),
																					(t.fallbackToNoCallback = !1),
																					(t.noCallback = !0),
																					s();
																			}
																		else t.noCallback ? (r[e](...n), s()) : r[e](...n, o({resolve: s, reject: i}, t));
																	});
																})(f, r[f]);
															g = i(e, e[f], t);
														} else g = g.bind(e);
													else if ('object' == typeof g && null !== g && (a(t, f) || a(r, f))) g = c(g, t[f], r[f]);
													else {
														if (!a(r, '*'))
															return (
																Object.defineProperty(n, f, {
																	configurable: !0,
																	enumerable: !0,
																	get: () => e[f],
																	set(t) {
																		e[f] = t;
																	}
																}),
																g
															);
														g = c(g, t[f], r['*']);
													}
													return (n[f] = g), g;
												},
												set: (t, r, o, s) => (r in n ? (n[r] = o) : (e[r] = o), !0),
												defineProperty: (e, t, r) => Reflect.defineProperty(n, t, r),
												deleteProperty: (e, t) => Reflect.deleteProperty(n, t)
											},
											f = Object.create(e);
										return new Proxy(f, l);
									},
									l = (e) => ({
										addListener(t, r, ...n) {
											t.addListener(e.get(r), ...n);
										},
										hasListener: (t, r) => t.hasListener(e.get(r)),
										removeListener(t, r) {
											t.removeListener(e.get(r));
										}
									}),
									f = new n((e) =>
										'function' != typeof e
											? e
											: function (t) {
													const r = c(t, {}, {getContent: {minArgs: 0, maxArgs: 0}});
													e(r);
												}
									),
									u = new n((e) =>
										'function' != typeof e
											? e
											: function (t, r, n) {
													let o,
														s,
														i = !1,
														a = new Promise((e) => {
															o = function (t) {
																(i = !0), e(t);
															};
														});
													try {
														s = e(t, r, o);
													} catch (e) {
														s = Promise.reject(e);
													}
													const c = !0 !== s && (l = s) && 'object' == typeof l && 'function' == typeof l.then;
													var l;
													if (!0 !== s && !c && !i) return !1;
													return (
														(c ? s : a)
															.then(
																(e) => {
																	n(e);
																},
																(e) => {
																	let t;
																	(t =
																		e && (e instanceof Error || 'string' == typeof e.message)
																			? e.message
																			: 'An unexpected error occurred'),
																		n({__mozWebExtensionPolyfillReject__: !0, message: t});
																}
															)
															.catch((e) => {
																console.error('Failed to send onMessage rejected reply', e);
															}),
														!0
													);
												}
									),
									g = ({reject: r, resolve: n}, o) => {
										e.runtime.lastError
											? e.runtime.lastError.message === t
												? n()
												: r(new Error(e.runtime.lastError.message))
											: o && o.__mozWebExtensionPolyfillReject__
												? r(new Error(o.message))
												: n(o);
									},
									h = (e, t, r, ...n) => {
										if (n.length < t.minArgs)
											throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${n.length}`);
										if (n.length > t.maxArgs)
											throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${n.length}`);
										return new Promise((e, t) => {
											const o = g.bind(null, {resolve: e, reject: t});
											n.push(o), r.sendMessage(...n);
										});
									},
									d = {
										devtools: {network: {onRequestFinished: l(f)}},
										runtime: {
											onMessage: l(u),
											onMessageExternal: l(u),
											sendMessage: h.bind(null, 'sendMessage', {minArgs: 1, maxArgs: 3})
										},
										tabs: {sendMessage: h.bind(null, 'sendMessage', {minArgs: 2, maxArgs: 3})}
									},
									p = {clear: {minArgs: 1, maxArgs: 1}, get: {minArgs: 1, maxArgs: 1}, set: {minArgs: 1, maxArgs: 1}};
								return (r.privacy = {network: {'*': p}, services: {'*': p}, websites: {'*': p}}), c(e, d, r);
							};
						e.exports = r(chrome);
					}
				}),
				void 0 === (n = r.apply(t, [e])) || (e.exports = n);
		}
	},
	t = {};
function r(n) {
	var o = t[n];
	if (void 0 !== o) return o.exports;
	var s = (t[n] = {exports: {}});
	return e[n].call(s.exports, s, s.exports, r), s.exports;
}
(r.n = (e) => {
	var t = e && e.__esModule ? () => e.default : () => e;
	return r.d(t, {a: t}), t;
}),
	(r.d = (e, t) => {
		for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]});
	}),
	(r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
	(r.r = (e) => {
		'undefined' != typeof Symbol &&
			Symbol.toStringTag &&
			Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
			Object.defineProperty(e, '__esModule', {value: !0});
	});
var n = {};
r.r(n),
	r.d(n, {
		OG: () => be,
		My: () => ue,
		Ph: () => de,
		lX: () => pe,
		Id: () => Ae,
		fg: () => ve,
		qj: () => ye,
		aT: () => he,
		lq: () => me,
		z: () => we,
		Q5: () => ke
	});
var o = r(815),
	s = r.n(o);
const i = {replaceURL: !0};
function a(e, t) {
	return !e?.kinds || t.kind in e.kinds;
}
async function c(e, t, r, n) {
	let {notifications: o} = await s().storage.local.get('notifications');
	if (o) {
		let o = t ? 'allowed' : 'denied';
		s().notifications.create(void 0, {
			type: 'basic',
			title: `${r} ${o} for ${e}`,
			message: JSON.stringify(
				n?.event ? {kind: n.event.kind, content: n.event.content, tags: n.event.tags} : n,
				null,
				2
			),
			iconUrl: 'icons/48x48.png'
		});
	}
}
Object.fromEntries([
	['getPublicKey', 'read your public key'],
	['signEvent', 'sign events using your private key'],
	['nip04.encrypt', 'encrypt messages to peers'],
	['nip04.decrypt', 'decrypt messages from peers'],
	['nip44.encrypt', 'encrypt messages to peers'],
	['nip44.decrypt', 'decrypt messages from peers']
]);
const l = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0,
	f = (e) => e instanceof Uint8Array,
	u = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
	g = (e, t) => (e << (32 - t)) | (e >>> t);
if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
	throw new Error('Non little-endian hardware is not supported');
const h = Array.from({length: 256}, (e, t) => t.toString(16).padStart(2, '0'));
function d(e) {
	if (!f(e)) throw new Error('Uint8Array expected');
	let t = '';
	for (let r = 0; r < e.length; r++) t += h[e[r]];
	return t;
}
function p(e) {
	if (
		('string' == typeof e &&
			(e = (function (e) {
				if ('string' != typeof e) throw new Error('utf8ToBytes expected string, got ' + typeof e);
				return new Uint8Array(new TextEncoder().encode(e));
			})(e)),
		!f(e))
	)
		throw new Error('expected Uint8Array, got ' + typeof e);
	return e;
}
class m {
	clone() {
		return this._cloneInto();
	}
}
function w(e) {
	const t = (t) => e().update(p(t)).digest(),
		r = e();
	return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function y(e) {
	if (!Number.isSafeInteger(e)) throw new Error(`Wrong integer: ${e}`);
}
function A(...e) {
	const t = (e, t) => (r) => e(t(r)),
		r = Array.from(e)
			.reverse()
			.reduce((e, r) => (e ? t(e, r.encode) : r.encode), void 0),
		n = e.reduce((e, r) => (e ? t(e, r.decode) : r.decode), void 0);
	return {encode: r, decode: n};
}
function b(e) {
	return {
		encode: (t) => {
			if (!Array.isArray(t) || (t.length && 'number' != typeof t[0]))
				throw new Error('alphabet.encode input should be an array of numbers');
			return t.map((t) => {
				if ((y(t), t < 0 || t >= e.length))
					throw new Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
				return e[t];
			});
		},
		decode: (t) => {
			if (!Array.isArray(t) || (t.length && 'string' != typeof t[0]))
				throw new Error('alphabet.decode input should be array of strings');
			return t.map((t) => {
				if ('string' != typeof t) throw new Error(`alphabet.decode: not string element=${t}`);
				const r = e.indexOf(t);
				if (-1 === r) throw new Error(`Unknown letter: "${t}". Allowed: ${e}`);
				return r;
			});
		}
	};
}
function x(e = '') {
	if ('string' != typeof e) throw new Error('join separator should be string');
	return {
		encode: (t) => {
			if (!Array.isArray(t) || (t.length && 'string' != typeof t[0]))
				throw new Error('join.encode input should be array of strings');
			for (let e of t) if ('string' != typeof e) throw new Error(`join.encode: non-string input=${e}`);
			return t.join(e);
		},
		decode: (t) => {
			if ('string' != typeof t) throw new Error('join.decode input should be string');
			return t.split(e);
		}
	};
}
function E(e, t = '=') {
	if ((y(e), 'string' != typeof t)) throw new Error('padding chr should be string');
	return {
		encode(r) {
			if (!Array.isArray(r) || (r.length && 'string' != typeof r[0]))
				throw new Error('padding.encode input should be array of strings');
			for (let e of r) if ('string' != typeof e) throw new Error(`padding.encode: non-string input=${e}`);
			for (; (r.length * e) % 8; ) r.push(t);
			return r;
		},
		decode(r) {
			if (!Array.isArray(r) || (r.length && 'string' != typeof r[0]))
				throw new Error('padding.encode input should be array of strings');
			for (let e of r) if ('string' != typeof e) throw new Error(`padding.decode: non-string input=${e}`);
			let n = r.length;
			if ((n * e) % 8) throw new Error('Invalid padding: string should have whole number of bytes');
			for (; n > 0 && r[n - 1] === t; n--)
				if (!(((n - 1) * e) % 8)) throw new Error('Invalid padding: string has too much padding');
			return r.slice(0, n);
		}
	};
}
function v(e) {
	if ('function' != typeof e) throw new Error('normalize fn should be function');
	return {encode: (e) => e, decode: (t) => e(t)};
}
function B(e, t, r) {
	if (t < 2) throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
	if (r < 2) throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
	if (!Array.isArray(e)) throw new Error('convertRadix: data should be array');
	if (!e.length) return [];
	let n = 0;
	const o = [],
		s = Array.from(e);
	for (
		s.forEach((e) => {
			if ((y(e), e < 0 || e >= t)) throw new Error(`Wrong integer: ${e}`);
		});
		;

	) {
		let e = 0,
			i = !0;
		for (let o = n; o < s.length; o++) {
			const a = s[o],
				c = t * e + a;
			if (!Number.isSafeInteger(c) || (t * e) / t !== e || c - a != t * e)
				throw new Error('convertRadix: carry overflow');
			if (((e = c % r), (s[o] = Math.floor(c / r)), !Number.isSafeInteger(s[o]) || s[o] * r + e !== c))
				throw new Error('convertRadix: carry overflow');
			i && (s[o] ? (i = !1) : (n = o));
		}
		if ((o.push(e), i)) break;
	}
	for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) o.push(0);
	return o.reverse();
}
const k = (e, t) => (t ? k(t, e % t) : e),
	U = (e, t) => e + (t - k(e, t));
function I(e, t, r, n) {
	if (!Array.isArray(e)) throw new Error('convertRadix2: data should be array');
	if (t <= 0 || t > 32) throw new Error(`convertRadix2: wrong from=${t}`);
	if (r <= 0 || r > 32) throw new Error(`convertRadix2: wrong to=${r}`);
	if (U(t, r) > 32) throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${U(t, r)}`);
	let o = 0,
		s = 0;
	const i = 2 ** r - 1,
		a = [];
	for (const n of e) {
		if ((y(n), n >= 2 ** t)) throw new Error(`convertRadix2: invalid data word=${n} from=${t}`);
		if (((o = (o << t) | n), s + t > 32)) throw new Error(`convertRadix2: carry overflow pos=${s} from=${t}`);
		for (s += t; s >= r; s -= r) a.push(((o >> (s - r)) & i) >>> 0);
		o &= 2 ** s - 1;
	}
	if (((o = (o << (r - s)) & i), !n && s >= t)) throw new Error('Excess padding');
	if (!n && o) throw new Error(`Non-zero padding: ${o}`);
	return n && s > 0 && a.push(o >>> 0), a;
}
function S(e, t = !1) {
	if ((y(e), e <= 0 || e > 32)) throw new Error('radix2: bits should be in (0..32]');
	if (U(8, e) > 32 || U(e, 8) > 32) throw new Error('radix2: carry overflow');
	return {
		encode: (r) => {
			if (!(r instanceof Uint8Array)) throw new Error('radix2.encode input should be Uint8Array');
			return I(Array.from(r), 8, e, !t);
		},
		decode: (r) => {
			if (!Array.isArray(r) || (r.length && 'number' != typeof r[0]))
				throw new Error('radix2.decode input should be array of strings');
			return Uint8Array.from(I(r, e, 8, t));
		}
	};
}
function L(e) {
	if ('function' != typeof e) throw new Error('unsafeWrapper fn should be function');
	return function (...t) {
		try {
			return e.apply(null, t);
		} catch (e) {}
	};
}
A(S(4), b('0123456789ABCDEF'), x('')), A(S(5), b('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), E(5), x(''));
const $ =
		(A(S(5), b('0123456789ABCDEFGHIJKLMNOPQRSTUV'), E(5), x('')),
		A(
			S(5),
			b('0123456789ABCDEFGHJKMNPQRSTVWXYZ'),
			x(''),
			v((e) => e.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1'))
		),
		A(S(6), b('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), E(6), x(''))),
	T =
		(A(S(6), b('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), E(6), x('')),
		(e) => {
			return A(
				(y((t = 58)),
				{
					encode: (e) => {
						if (!(e instanceof Uint8Array)) throw new Error('radix.encode input should be Uint8Array');
						return B(Array.from(e), 256, t);
					},
					decode: (e) => {
						if (!Array.isArray(e) || (e.length && 'number' != typeof e[0]))
							throw new Error('radix.decode input should be array of strings');
						return Uint8Array.from(B(e, t, 256));
					}
				}),
				b(e),
				x('')
			);
			var t;
		}),
	_ =
		(T('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'),
		T('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'),
		T('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz'),
		A(b('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), x(''))),
	O = [996825010, 642813549, 513874426, 1027748829, 705979059];
function R(e) {
	const t = e >> 25;
	let r = (33554431 & e) << 5;
	for (let e = 0; e < O.length; e++) 1 == ((t >> e) & 1) && (r ^= O[e]);
	return r;
}
function P(e, t, r = 1) {
	const n = e.length;
	let o = 1;
	for (let t = 0; t < n; t++) {
		const r = e.charCodeAt(t);
		if (r < 33 || r > 126) throw new Error(`Invalid prefix (${e})`);
		o = R(o) ^ (r >> 5);
	}
	o = R(o);
	for (let t = 0; t < n; t++) o = R(o) ^ (31 & e.charCodeAt(t));
	for (let e of t) o = R(o) ^ e;
	for (let e = 0; e < 6; e++) o = R(o);
	return (o ^= r), _.encode(I([o % 2 ** 30], 30, 5, !1));
}
function N(e) {
	const t = 'bech32' === e ? 1 : 734539939,
		r = S(5),
		n = r.decode,
		o = r.encode,
		s = L(n);
	function i(e, r = 90) {
		if ('string' != typeof e) throw new Error('bech32.decode input should be string, not ' + typeof e);
		if (e.length < 8 || (!1 !== r && e.length > r))
			throw new TypeError(`Wrong string length: ${e.length} (${e}). Expected (8..${r})`);
		const n = e.toLowerCase();
		if (e !== n && e !== e.toUpperCase()) throw new Error('String must be lowercase or uppercase');
		const o = (e = n).lastIndexOf('1');
		if (0 === o || -1 === o) throw new Error('Letter "1" must be present between prefix and data only');
		const s = e.slice(0, o),
			i = e.slice(o + 1);
		if (i.length < 6) throw new Error('Data must be at least 6 characters long');
		const a = _.decode(i).slice(0, -6),
			c = P(s, a, t);
		if (!i.endsWith(c)) throw new Error(`Invalid checksum in ${e}: expected "${c}"`);
		return {prefix: s, words: a};
	}
	return {
		encode: function (e, r, n = 90) {
			if ('string' != typeof e) throw new Error('bech32.encode prefix should be string, not ' + typeof e);
			if (!Array.isArray(r) || (r.length && 'number' != typeof r[0]))
				throw new Error('bech32.encode words should be array of numbers, not ' + typeof r);
			const o = e.length + 7 + r.length;
			if (!1 !== n && o > n) throw new TypeError(`Length ${o} exceeds limit ${n}`);
			return `${(e = e.toLowerCase())}1${_.encode(r)}${P(e, r, t)}`;
		},
		decode: i,
		decodeToBytes: function (e) {
			const {prefix: t, words: r} = i(e, !1);
			return {prefix: t, words: r, bytes: n(r)};
		},
		decodeUnsafe: L(i),
		fromWords: n,
		fromWordsUnsafe: s,
		toWords: o
	};
}
const C = N('bech32');
N('bech32m');
A(
	S(4),
	b('0123456789abcdef'),
	x(''),
	v((e) => {
		if ('string' != typeof e || e.length % 2)
			throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
		return e.toLowerCase();
	})
);
var q = new TextDecoder('utf-8');
function H(e) {
	let t = {},
		r = e;
	for (; r.length > 0; ) {
		let e = r[0],
			n = r[1],
			o = r.slice(2, 2 + n);
		if (((r = r.slice(2 + n)), o.length < n)) throw new Error(`not enough data to read on TLV ${e}`);
		(t[e] = t[e] || []), t[e].push(o);
	}
	return t;
}
new TextEncoder(), new Error('timeout while waiting for mutex to become available'), new Error('mutex already locked');
const F = new Error('request for lock canceled');
class j {
	constructor(e, t = F) {
		(this._value = e), (this._cancelError = t), (this._queue = []), (this._weightedWaiters = []);
	}
	acquire(e = 1, t = 0) {
		if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
		return new Promise((r, n) => {
			const o = {resolve: r, reject: n, weight: e, priority: t},
				s = z(this._queue, (e) => t <= e.priority);
			-1 === s && e <= this._value ? this._dispatchItem(o) : this._queue.splice(s + 1, 0, o);
		});
	}
	runExclusive(e) {
		return (
			(t = this),
			(r = arguments),
			(o = function* (e, t = 1, r = 0) {
				const [n, o] = yield this.acquire(t, r);
				try {
					return yield e(n);
				} finally {
					o();
				}
			}),
			new ((n = void 0) || (n = Promise))(function (e, s) {
				function i(e) {
					try {
						c(o.next(e));
					} catch (e) {
						s(e);
					}
				}
				function a(e) {
					try {
						c(o.throw(e));
					} catch (e) {
						s(e);
					}
				}
				function c(t) {
					var r;
					t.done
						? e(t.value)
						: ((r = t.value),
							r instanceof n
								? r
								: new n(function (e) {
										e(r);
									})).then(i, a);
				}
				c((o = o.apply(t, r || [])).next());
			})
		);
		var t, r, n, o;
	}
	waitForUnlock(e = 1, t = 0) {
		if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
		return this._couldLockImmediately(e, t)
			? Promise.resolve()
			: new Promise((r) => {
					this._weightedWaiters[e - 1] || (this._weightedWaiters[e - 1] = []),
						(function (e, t) {
							const r = z(e, (e) => t.priority <= e.priority);
							e.splice(r + 1, 0, t);
						})(this._weightedWaiters[e - 1], {resolve: r, priority: t});
				});
	}
	isLocked() {
		return this._value <= 0;
	}
	getValue() {
		return this._value;
	}
	setValue(e) {
		(this._value = e), this._dispatchQueue();
	}
	release(e = 1) {
		if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
		(this._value += e), this._dispatchQueue();
	}
	cancel() {
		this._queue.forEach((e) => e.reject(this._cancelError)), (this._queue = []);
	}
	_dispatchQueue() {
		for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value; )
			this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters();
	}
	_dispatchItem(e) {
		const t = this._value;
		(this._value -= e.weight), e.resolve([t, this._newReleaser(e.weight)]);
	}
	_newReleaser(e) {
		let t = !1;
		return () => {
			t || ((t = !0), this.release(e));
		};
	}
	_drainUnlockWaiters() {
		if (0 === this._queue.length)
			for (let e = this._value; e > 0; e--) {
				const t = this._weightedWaiters[e - 1];
				t && (t.forEach((e) => e.resolve()), (this._weightedWaiters[e - 1] = []));
			}
		else {
			const e = this._queue[0].priority;
			for (let t = this._value; t > 0; t--) {
				const r = this._weightedWaiters[t - 1];
				if (!r) continue;
				const n = r.findIndex((t) => t.priority <= e);
				(-1 === n ? r : r.splice(0, n)).forEach((e) => e.resolve());
			}
		}
	}
	_couldLockImmediately(e, t) {
		return (0 === this._queue.length || this._queue[0].priority < t) && e <= this._value;
	}
}
function z(e, t) {
	for (let r = e.length - 1; r >= 0; r--) if (t(e[r])) return r;
	return -1;
}
function V(e) {
	if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function M(e, ...t) {
	if (!(e instanceof Uint8Array)) throw new Error('Expected Uint8Array');
	if (t.length > 0 && !t.includes(e.length))
		throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function D(e, t = !0) {
	if (e.destroyed) throw new Error('Hash instance has been destroyed');
	if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
const K = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0,
	W = (e) => e instanceof Uint8Array,
	Z = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
	G = (e, t) => (e << (32 - t)) | (e >>> t);
if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
	throw new Error('Non little-endian hardware is not supported');
function Y(e) {
	if (
		('string' == typeof e &&
			(e = (function (e) {
				if ('string' != typeof e) throw new Error('utf8ToBytes expected string, got ' + typeof e);
				return new Uint8Array(new TextEncoder().encode(e));
			})(e)),
		!W(e))
	)
		throw new Error('expected Uint8Array, got ' + typeof e);
	return e;
}
class J {
	clone() {
		return this._cloneInto();
	}
}
function Q(e) {
	const t = (t) => e().update(Y(t)).digest(),
		r = e();
	return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function X(e = 32) {
	if (K && 'function' == typeof K.getRandomValues) return K.getRandomValues(new Uint8Array(e));
	throw new Error('crypto.getRandomValues must be defined');
}
class ee extends J {
	constructor(e, t, r, n) {
		super(),
			(this.blockLen = e),
			(this.outputLen = t),
			(this.padOffset = r),
			(this.isLE = n),
			(this.finished = !1),
			(this.length = 0),
			(this.pos = 0),
			(this.destroyed = !1),
			(this.buffer = new Uint8Array(e)),
			(this.view = Z(this.buffer));
	}
	update(e) {
		D(this);
		const {view: t, buffer: r, blockLen: n} = this,
			o = (e = Y(e)).length;
		for (let s = 0; s < o; ) {
			const i = Math.min(n - this.pos, o - s);
			if (i !== n)
				r.set(e.subarray(s, s + i), this.pos),
					(this.pos += i),
					(s += i),
					this.pos === n && (this.process(t, 0), (this.pos = 0));
			else {
				const t = Z(e);
				for (; n <= o - s; s += n) this.process(t, s);
			}
		}
		return (this.length += e.length), this.roundClean(), this;
	}
	digestInto(e) {
		D(this),
			(function (e, t) {
				M(e);
				const r = t.outputLen;
				if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
			})(e, this),
			(this.finished = !0);
		const {buffer: t, view: r, blockLen: n, isLE: o} = this;
		let {pos: s} = this;
		(t[s++] = 128), this.buffer.subarray(s).fill(0), this.padOffset > n - s && (this.process(r, 0), (s = 0));
		for (let e = s; e < n; e++) t[e] = 0;
		!(function (e, t, r, n) {
			if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
			const o = BigInt(32),
				s = BigInt(4294967295),
				i = Number((r >> o) & s),
				a = Number(r & s),
				c = n ? 4 : 0,
				l = n ? 0 : 4;
			e.setUint32(t + c, i, n), e.setUint32(t + l, a, n);
		})(r, n - 8, BigInt(8 * this.length), o),
			this.process(r, 0);
		const i = Z(e),
			a = this.outputLen;
		if (a % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
		const c = a / 4,
			l = this.get();
		if (c > l.length) throw new Error('_sha2: outputLen bigger than state');
		for (let e = 0; e < c; e++) i.setUint32(4 * e, l[e], o);
	}
	digest() {
		const {buffer: e, outputLen: t} = this;
		this.digestInto(e);
		const r = e.slice(0, t);
		return this.destroy(), r;
	}
	_cloneInto(e) {
		e || (e = new this.constructor()), e.set(...this.get());
		const {blockLen: t, buffer: r, length: n, finished: o, destroyed: s, pos: i} = this;
		return (e.length = n), (e.pos = i), (e.finished = o), (e.destroyed = s), n % t && e.buffer.set(r), e;
	}
}
const te = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
	re = new Uint32Array([
		1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
		310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078,
		604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
		3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
		2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
		275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222,
		2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
	]),
	ne = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
	oe = new Uint32Array(64);
class se extends ee {
	constructor() {
		super(64, 32, 8, !1),
			(this.A = 0 | ne[0]),
			(this.B = 0 | ne[1]),
			(this.C = 0 | ne[2]),
			(this.D = 0 | ne[3]),
			(this.E = 0 | ne[4]),
			(this.F = 0 | ne[5]),
			(this.G = 0 | ne[6]),
			(this.H = 0 | ne[7]);
	}
	get() {
		const {A: e, B: t, C: r, D: n, E: o, F: s, G: i, H: a} = this;
		return [e, t, r, n, o, s, i, a];
	}
	set(e, t, r, n, o, s, i, a) {
		(this.A = 0 | e),
			(this.B = 0 | t),
			(this.C = 0 | r),
			(this.D = 0 | n),
			(this.E = 0 | o),
			(this.F = 0 | s),
			(this.G = 0 | i),
			(this.H = 0 | a);
	}
	process(e, t) {
		for (let r = 0; r < 16; r++, t += 4) oe[r] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			const t = oe[e - 15],
				r = oe[e - 2],
				n = G(t, 7) ^ G(t, 18) ^ (t >>> 3),
				o = G(r, 17) ^ G(r, 19) ^ (r >>> 10);
			oe[e] = (o + oe[e - 7] + n + oe[e - 16]) | 0;
		}
		let {A: r, B: n, C: o, D: s, E: i, F: a, G: c, H: l} = this;
		for (let e = 0; e < 64; e++) {
			const t = (l + (G(i, 6) ^ G(i, 11) ^ G(i, 25)) + (((f = i) & a) ^ (~f & c)) + re[e] + oe[e]) | 0,
				u = ((G(r, 2) ^ G(r, 13) ^ G(r, 22)) + te(r, n, o)) | 0;
			(l = c), (c = a), (a = i), (i = (s + t) | 0), (s = o), (o = n), (n = r), (r = (t + u) | 0);
		}
		var f;
		(r = (r + this.A) | 0),
			(n = (n + this.B) | 0),
			(o = (o + this.C) | 0),
			(s = (s + this.D) | 0),
			(i = (i + this.E) | 0),
			(a = (a + this.F) | 0),
			(c = (c + this.G) | 0),
			(l = (l + this.H) | 0),
			this.set(r, n, o, s, i, a, c, l);
	}
	roundClean() {
		oe.fill(0);
	}
	destroy() {
		this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
	}
}
const ie = Q(() => new se()),
	ae = (BigInt(0), BigInt(1)),
	ce = BigInt(2),
	le = (e) => e instanceof Uint8Array,
	fe = Array.from({length: 256}, (e, t) => t.toString(16).padStart(2, '0'));
function ue(e) {
	if (!le(e)) throw new Error('Uint8Array expected');
	let t = '';
	for (let r = 0; r < e.length; r++) t += fe[e[r]];
	return t;
}
function ge(e) {
	if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
	return BigInt('' === e ? '0' : `0x${e}`);
}
function he(e) {
	if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
	const t = e.length;
	if (t % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + t);
	const r = new Uint8Array(t / 2);
	for (let t = 0; t < r.length; t++) {
		const n = 2 * t,
			o = e.slice(n, n + 2),
			s = Number.parseInt(o, 16);
		if (Number.isNaN(s) || s < 0) throw new Error('Invalid byte sequence');
		r[t] = s;
	}
	return r;
}
function de(e) {
	return ge(ue(e));
}
function pe(e) {
	if (!le(e)) throw new Error('Uint8Array expected');
	return ge(ue(Uint8Array.from(e).reverse()));
}
function me(e, t) {
	return he(e.toString(16).padStart(2 * t, '0'));
}
function we(e, t) {
	return me(e, t).reverse();
}
function ye(e, t, r) {
	let n;
	if ('string' == typeof t)
		try {
			n = he(t);
		} catch (r) {
			throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`);
		}
	else {
		if (!le(t)) throw new Error(`${e} must be hex string or Uint8Array`);
		n = Uint8Array.from(t);
	}
	const o = n.length;
	if ('number' == typeof r && o !== r) throw new Error(`${e} expected ${r} bytes, got ${o}`);
	return n;
}
function Ae(...e) {
	const t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
	let r = 0;
	return (
		e.forEach((e) => {
			if (!le(e)) throw new Error('Uint8Array expected');
			t.set(e, r), (r += e.length);
		}),
		t
	);
}
const be = (e) => (ce << BigInt(e - 1)) - ae,
	xe = (e) => new Uint8Array(e),
	Ee = (e) => Uint8Array.from(e);
function ve(e, t, r) {
	if ('number' != typeof e || e < 2) throw new Error('hashLen must be a number');
	if ('number' != typeof t || t < 2) throw new Error('qByteLen must be a number');
	if ('function' != typeof r) throw new Error('hmacFn must be a function');
	let n = xe(e),
		o = xe(e),
		s = 0;
	const i = () => {
			n.fill(1), o.fill(0), (s = 0);
		},
		a = (...e) => r(o, n, ...e),
		c = (e = xe()) => {
			(o = a(Ee([0]), e)), (n = a()), 0 !== e.length && ((o = a(Ee([1]), e)), (n = a()));
		},
		l = () => {
			if (s++ >= 1e3) throw new Error('drbg: tried 1000 values');
			let e = 0;
			const r = [];
			for (; e < t; ) {
				n = a();
				const t = n.slice();
				r.push(t), (e += n.length);
			}
			return Ae(...r);
		};
	return (e, t) => {
		let r;
		for (i(), c(e); !(r = t(l())); ) c();
		return i(), r;
	};
}
const Be = {
	bigint: (e) => 'bigint' == typeof e,
	function: (e) => 'function' == typeof e,
	boolean: (e) => 'boolean' == typeof e,
	string: (e) => 'string' == typeof e,
	stringOrUint8Array: (e) => 'string' == typeof e || e instanceof Uint8Array,
	isSafeInteger: (e) => Number.isSafeInteger(e),
	array: (e) => Array.isArray(e),
	field: (e, t) => t.Fp.isValid(e),
	hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen)
};
function ke(e, t, r = {}) {
	const n = (t, r, n) => {
		const o = Be[r];
		if ('function' != typeof o) throw new Error(`Invalid validator "${r}", expected function`);
		const s = e[t];
		if (!((n && void 0 === s) || o(s, e)))
			throw new Error(`Invalid param ${String(t)}=${s} (${typeof s}), expected ${r}`);
	};
	for (const [e, r] of Object.entries(t)) n(e, r, !1);
	for (const [e, t] of Object.entries(r)) n(e, t, !0);
	return e;
}
const Ue = BigInt(0),
	Ie = BigInt(1),
	Se = BigInt(2),
	Le = BigInt(3),
	$e = BigInt(4),
	Te = BigInt(5),
	_e = BigInt(8);
function Oe(e, t) {
	const r = e % t;
	return r >= Ue ? r : t + r;
}
function Re(e, t, r) {
	if (r <= Ue || t < Ue) throw new Error('Expected power/modulo > 0');
	if (r === Ie) return Ue;
	let n = Ie;
	for (; t > Ue; ) t & Ie && (n = (n * e) % r), (e = (e * e) % r), (t >>= Ie);
	return n;
}
function Pe(e, t, r) {
	let n = e;
	for (; t-- > Ue; ) (n *= n), (n %= r);
	return n;
}
function Ne(e, t) {
	if (e === Ue || t <= Ue) throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
	let r = Oe(e, t),
		n = t,
		o = Ue,
		s = Ie,
		i = Ie,
		a = Ue;
	for (; r !== Ue; ) {
		const e = n / r,
			t = n % r,
			c = o - i * e,
			l = s - a * e;
		(n = r), (r = t), (o = i), (s = a), (i = c), (a = l);
	}
	if (n !== Ie) throw new Error('invert: does not exist');
	return Oe(o, t);
}
BigInt(9), BigInt(16);
const Ce = [
	'create',
	'isValid',
	'is0',
	'neg',
	'inv',
	'sqrt',
	'sqr',
	'eql',
	'add',
	'sub',
	'mul',
	'pow',
	'div',
	'addN',
	'subN',
	'mulN',
	'sqrN'
];
function qe(e, t) {
	const r = void 0 !== t ? t : e.toString(2).length;
	return {nBitLength: r, nByteLength: Math.ceil(r / 8)};
}
function He(e) {
	if ('bigint' != typeof e) throw new Error('field order must be bigint');
	const t = e.toString(2).length;
	return Math.ceil(t / 8);
}
function Fe(e) {
	const t = He(e);
	return t + Math.ceil(t / 2);
}
class je extends J {
	constructor(e, t) {
		super(),
			(this.finished = !1),
			(this.destroyed = !1),
			(function (e) {
				if ('function' != typeof e || 'function' != typeof e.create)
					throw new Error('Hash should be wrapped by utils.wrapConstructor');
				V(e.outputLen), V(e.blockLen);
			})(e);
		const r = Y(t);
		if (((this.iHash = e.create()), 'function' != typeof this.iHash.update))
			throw new Error('Expected instance of class which extends utils.Hash');
		(this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
		const n = this.blockLen,
			o = new Uint8Array(n);
		o.set(r.length > n ? e.create().update(r).digest() : r);
		for (let e = 0; e < o.length; e++) o[e] ^= 54;
		this.iHash.update(o), (this.oHash = e.create());
		for (let e = 0; e < o.length; e++) o[e] ^= 106;
		this.oHash.update(o), o.fill(0);
	}
	update(e) {
		return D(this), this.iHash.update(e), this;
	}
	digestInto(e) {
		D(this),
			M(e, this.outputLen),
			(this.finished = !0),
			this.iHash.digestInto(e),
			this.oHash.update(e),
			this.oHash.digestInto(e),
			this.destroy();
	}
	digest() {
		const e = new Uint8Array(this.oHash.outputLen);
		return this.digestInto(e), e;
	}
	_cloneInto(e) {
		e || (e = Object.create(Object.getPrototypeOf(this), {}));
		const {oHash: t, iHash: r, finished: n, destroyed: o, blockLen: s, outputLen: i} = this;
		return (
			(e.finished = n),
			(e.destroyed = o),
			(e.blockLen = s),
			(e.outputLen = i),
			(e.oHash = t._cloneInto(e.oHash)),
			(e.iHash = r._cloneInto(e.iHash)),
			e
		);
	}
	destroy() {
		(this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
	}
}
const ze = (e, t, r) => new je(e, t).update(r).digest();
ze.create = (e, t) => new je(e, t);
const Ve = BigInt(0),
	Me = BigInt(1);
function De(e) {
	return (
		ke(
			e.Fp,
			Ce.reduce((e, t) => ((e[t] = 'function'), e), {
				ORDER: 'bigint',
				MASK: 'bigint',
				BYTES: 'isSafeInteger',
				BITS: 'isSafeInteger'
			})
		),
		ke(
			e,
			{n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field'},
			{nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger'}
		),
		Object.freeze({...qe(e.n, e.nBitLength), ...e, p: e.Fp.ORDER})
	);
}
const {Ph: Ke, aT: We} = n,
	Ze = {
		Err: class extends Error {
			constructor(e = '') {
				super(e);
			}
		},
		_parseInt(e) {
			const {Err: t} = Ze;
			if (e.length < 2 || 2 !== e[0]) throw new t('Invalid signature integer tag');
			const r = e[1],
				n = e.subarray(2, r + 2);
			if (!r || n.length !== r) throw new t('Invalid signature integer: wrong length');
			if (128 & n[0]) throw new t('Invalid signature integer: negative');
			if (0 === n[0] && !(128 & n[1])) throw new t('Invalid signature integer: unnecessary leading zero');
			return {d: Ke(n), l: e.subarray(r + 2)};
		},
		toSig(e) {
			const {Err: t} = Ze,
				r = 'string' == typeof e ? We(e) : e;
			if (!(r instanceof Uint8Array)) throw new Error('ui8a expected');
			let n = r.length;
			if (n < 2 || 48 != r[0]) throw new t('Invalid signature tag');
			if (r[1] !== n - 2) throw new t('Invalid signature: incorrect length');
			const {d: o, l: s} = Ze._parseInt(r.subarray(2)),
				{d: i, l: a} = Ze._parseInt(s);
			if (a.length) throw new t('Invalid signature: left bytes after parsing');
			return {r: o, s: i};
		},
		hexFromSig(e) {
			const t = (e) => (8 & Number.parseInt(e[0], 16) ? '00' + e : e),
				r = (e) => {
					const t = e.toString(16);
					return 1 & t.length ? `0${t}` : t;
				},
				n = t(r(e.s)),
				o = t(r(e.r)),
				s = n.length / 2,
				i = o.length / 2,
				a = r(s),
				c = r(i);
			return `30${r(i + s + 4)}02${c}${o}02${a}${n}`;
		}
	},
	Ge = BigInt(0),
	Ye = BigInt(1),
	Je = (BigInt(2), BigInt(3));
function Qe(e) {
	const t = (function (e) {
			const t = De(e);
			return (
				ke(
					t,
					{hash: 'hash', hmac: 'function', randomBytes: 'function'},
					{bits2int: 'function', bits2int_modN: 'function', lowS: 'boolean'}
				),
				Object.freeze({lowS: !0, ...t})
			);
		})(e),
		{Fp: r, n} = t,
		o = r.BYTES + 1,
		s = 2 * r.BYTES + 1;
	function i(e) {
		return Oe(e, n);
	}
	function a(e) {
		return Ne(e, n);
	}
	const {
			ProjectivePoint: c,
			normPrivateKeyToScalar: l,
			weierstrassEquation: f,
			isWithinCurveOrder: u
		} = (function (e) {
			const t = (function (e) {
					const t = De(e);
					ke(
						t,
						{a: 'field', b: 'field'},
						{
							allowedPrivateKeyLengths: 'array',
							wrapPrivateKey: 'boolean',
							isTorsionFree: 'function',
							clearCofactor: 'function',
							allowInfinityPoint: 'boolean',
							fromBytes: 'function',
							toBytes: 'function'
						}
					);
					const {endo: r, Fp: n, a: o} = t;
					if (r) {
						if (!n.eql(o, n.ZERO)) throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
						if ('object' != typeof r || 'bigint' != typeof r.beta || 'function' != typeof r.splitScalar)
							throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
					}
					return Object.freeze({...t});
				})(e),
				{Fp: r} = t,
				n =
					t.toBytes ||
					((e, t, n) => {
						const o = t.toAffine();
						return Ae(Uint8Array.from([4]), r.toBytes(o.x), r.toBytes(o.y));
					}),
				o =
					t.fromBytes ||
					((e) => {
						const t = e.subarray(1);
						return {x: r.fromBytes(t.subarray(0, r.BYTES)), y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES))};
					});
			function s(e) {
				const {a: n, b: o} = t,
					s = r.sqr(e),
					i = r.mul(s, e);
				return r.add(r.add(i, r.mul(e, n)), o);
			}
			if (!r.eql(r.sqr(t.Gy), s(t.Gx))) throw new Error('bad generator point: equation left != right');
			function i(e) {
				return 'bigint' == typeof e && Ge < e && e < t.n;
			}
			function a(e) {
				if (!i(e)) throw new Error('Expected valid bigint: 0 < bigint < curve.n');
			}
			function c(e) {
				const {allowedPrivateKeyLengths: r, nByteLength: n, wrapPrivateKey: o, n: s} = t;
				if (r && 'bigint' != typeof e) {
					if ((e instanceof Uint8Array && (e = ue(e)), 'string' != typeof e || !r.includes(e.length)))
						throw new Error('Invalid key');
					e = e.padStart(2 * n, '0');
				}
				let i;
				try {
					i = 'bigint' == typeof e ? e : de(ye('private key', e, n));
				} catch (t) {
					throw new Error(`private key must be ${n} bytes, hex or bigint, not ${typeof e}`);
				}
				return o && (i = Oe(i, s)), a(i), i;
			}
			const l = new Map();
			function f(e) {
				if (!(e instanceof u)) throw new Error('ProjectivePoint expected');
			}
			class u {
				constructor(e, t, n) {
					if (((this.px = e), (this.py = t), (this.pz = n), null == e || !r.isValid(e))) throw new Error('x required');
					if (null == t || !r.isValid(t)) throw new Error('y required');
					if (null == n || !r.isValid(n)) throw new Error('z required');
				}
				static fromAffine(e) {
					const {x: t, y: n} = e || {};
					if (!e || !r.isValid(t) || !r.isValid(n)) throw new Error('invalid affine point');
					if (e instanceof u) throw new Error('projective point not allowed');
					const o = (e) => r.eql(e, r.ZERO);
					return o(t) && o(n) ? u.ZERO : new u(t, n, r.ONE);
				}
				get x() {
					return this.toAffine().x;
				}
				get y() {
					return this.toAffine().y;
				}
				static normalizeZ(e) {
					const t = r.invertBatch(e.map((e) => e.pz));
					return e.map((e, r) => e.toAffine(t[r])).map(u.fromAffine);
				}
				static fromHex(e) {
					const t = u.fromAffine(o(ye('pointHex', e)));
					return t.assertValidity(), t;
				}
				static fromPrivateKey(e) {
					return u.BASE.multiply(c(e));
				}
				_setWindowSize(e) {
					(this._WINDOW_SIZE = e), l.delete(this);
				}
				assertValidity() {
					if (this.is0()) {
						if (t.allowInfinityPoint && !r.is0(this.py)) return;
						throw new Error('bad point: ZERO');
					}
					const {x: e, y: n} = this.toAffine();
					if (!r.isValid(e) || !r.isValid(n)) throw new Error('bad point: x or y not FE');
					const o = r.sqr(n),
						i = s(e);
					if (!r.eql(o, i)) throw new Error('bad point: equation left != right');
					if (!this.isTorsionFree()) throw new Error('bad point: not in prime-order subgroup');
				}
				hasEvenY() {
					const {y: e} = this.toAffine();
					if (r.isOdd) return !r.isOdd(e);
					throw new Error("Field doesn't support isOdd");
				}
				equals(e) {
					f(e);
					const {px: t, py: n, pz: o} = this,
						{px: s, py: i, pz: a} = e,
						c = r.eql(r.mul(t, a), r.mul(s, o)),
						l = r.eql(r.mul(n, a), r.mul(i, o));
					return c && l;
				}
				negate() {
					return new u(this.px, r.neg(this.py), this.pz);
				}
				double() {
					const {a: e, b: n} = t,
						o = r.mul(n, Je),
						{px: s, py: i, pz: a} = this;
					let c = r.ZERO,
						l = r.ZERO,
						f = r.ZERO,
						g = r.mul(s, s),
						h = r.mul(i, i),
						d = r.mul(a, a),
						p = r.mul(s, i);
					return (
						(p = r.add(p, p)),
						(f = r.mul(s, a)),
						(f = r.add(f, f)),
						(c = r.mul(e, f)),
						(l = r.mul(o, d)),
						(l = r.add(c, l)),
						(c = r.sub(h, l)),
						(l = r.add(h, l)),
						(l = r.mul(c, l)),
						(c = r.mul(p, c)),
						(f = r.mul(o, f)),
						(d = r.mul(e, d)),
						(p = r.sub(g, d)),
						(p = r.mul(e, p)),
						(p = r.add(p, f)),
						(f = r.add(g, g)),
						(g = r.add(f, g)),
						(g = r.add(g, d)),
						(g = r.mul(g, p)),
						(l = r.add(l, g)),
						(d = r.mul(i, a)),
						(d = r.add(d, d)),
						(g = r.mul(d, p)),
						(c = r.sub(c, g)),
						(f = r.mul(d, h)),
						(f = r.add(f, f)),
						(f = r.add(f, f)),
						new u(c, l, f)
					);
				}
				add(e) {
					f(e);
					const {px: n, py: o, pz: s} = this,
						{px: i, py: a, pz: c} = e;
					let l = r.ZERO,
						g = r.ZERO,
						h = r.ZERO;
					const d = t.a,
						p = r.mul(t.b, Je);
					let m = r.mul(n, i),
						w = r.mul(o, a),
						y = r.mul(s, c),
						A = r.add(n, o),
						b = r.add(i, a);
					(A = r.mul(A, b)), (b = r.add(m, w)), (A = r.sub(A, b)), (b = r.add(n, s));
					let x = r.add(i, c);
					return (
						(b = r.mul(b, x)),
						(x = r.add(m, y)),
						(b = r.sub(b, x)),
						(x = r.add(o, s)),
						(l = r.add(a, c)),
						(x = r.mul(x, l)),
						(l = r.add(w, y)),
						(x = r.sub(x, l)),
						(h = r.mul(d, b)),
						(l = r.mul(p, y)),
						(h = r.add(l, h)),
						(l = r.sub(w, h)),
						(h = r.add(w, h)),
						(g = r.mul(l, h)),
						(w = r.add(m, m)),
						(w = r.add(w, m)),
						(y = r.mul(d, y)),
						(b = r.mul(p, b)),
						(w = r.add(w, y)),
						(y = r.sub(m, y)),
						(y = r.mul(d, y)),
						(b = r.add(b, y)),
						(m = r.mul(w, b)),
						(g = r.add(g, m)),
						(m = r.mul(x, b)),
						(l = r.mul(A, l)),
						(l = r.sub(l, m)),
						(m = r.mul(A, w)),
						(h = r.mul(x, h)),
						(h = r.add(h, m)),
						new u(l, g, h)
					);
				}
				subtract(e) {
					return this.add(e.negate());
				}
				is0() {
					return this.equals(u.ZERO);
				}
				wNAF(e) {
					return h.wNAFCached(this, l, e, (e) => {
						const t = r.invertBatch(e.map((e) => e.pz));
						return e.map((e, r) => e.toAffine(t[r])).map(u.fromAffine);
					});
				}
				multiplyUnsafe(e) {
					const n = u.ZERO;
					if (e === Ge) return n;
					if ((a(e), e === Ye)) return this;
					const {endo: o} = t;
					if (!o) return h.unsafeLadder(this, e);
					let {k1neg: s, k1: i, k2neg: c, k2: l} = o.splitScalar(e),
						f = n,
						g = n,
						d = this;
					for (; i > Ge || l > Ge; )
						i & Ye && (f = f.add(d)), l & Ye && (g = g.add(d)), (d = d.double()), (i >>= Ye), (l >>= Ye);
					return s && (f = f.negate()), c && (g = g.negate()), (g = new u(r.mul(g.px, o.beta), g.py, g.pz)), f.add(g);
				}
				multiply(e) {
					a(e);
					let n,
						o,
						s = e;
					const {endo: i} = t;
					if (i) {
						const {k1neg: e, k1: t, k2neg: a, k2: c} = i.splitScalar(s);
						let {p: l, f} = this.wNAF(t),
							{p: g, f: d} = this.wNAF(c);
						(l = h.constTimeNegate(e, l)),
							(g = h.constTimeNegate(a, g)),
							(g = new u(r.mul(g.px, i.beta), g.py, g.pz)),
							(n = l.add(g)),
							(o = f.add(d));
					} else {
						const {p: e, f: t} = this.wNAF(s);
						(n = e), (o = t);
					}
					return u.normalizeZ([n, o])[0];
				}
				multiplyAndAddUnsafe(e, t, r) {
					const n = u.BASE,
						o = (e, t) => (t !== Ge && t !== Ye && e.equals(n) ? e.multiply(t) : e.multiplyUnsafe(t)),
						s = o(this, t).add(o(e, r));
					return s.is0() ? void 0 : s;
				}
				toAffine(e) {
					const {px: t, py: n, pz: o} = this,
						s = this.is0();
					null == e && (e = s ? r.ONE : r.inv(o));
					const i = r.mul(t, e),
						a = r.mul(n, e),
						c = r.mul(o, e);
					if (s) return {x: r.ZERO, y: r.ZERO};
					if (!r.eql(c, r.ONE)) throw new Error('invZ was invalid');
					return {x: i, y: a};
				}
				isTorsionFree() {
					const {h: e, isTorsionFree: r} = t;
					if (e === Ye) return !0;
					if (r) return r(u, this);
					throw new Error('isTorsionFree() has not been declared for the elliptic curve');
				}
				clearCofactor() {
					const {h: e, clearCofactor: r} = t;
					return e === Ye ? this : r ? r(u, this) : this.multiplyUnsafe(t.h);
				}
				toRawBytes(e = !0) {
					return this.assertValidity(), n(u, this, e);
				}
				toHex(e = !0) {
					return ue(this.toRawBytes(e));
				}
			}
			(u.BASE = new u(t.Gx, t.Gy, r.ONE)), (u.ZERO = new u(r.ZERO, r.ONE, r.ZERO));
			const g = t.nBitLength,
				h = (function (e, t) {
					const r = (e, t) => {
							const r = t.negate();
							return e ? r : t;
						},
						n = (e) => ({windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1)});
					return {
						constTimeNegate: r,
						unsafeLadder(t, r) {
							let n = e.ZERO,
								o = t;
							for (; r > Ve; ) r & Me && (n = n.add(o)), (o = o.double()), (r >>= Me);
							return n;
						},
						precomputeWindow(e, t) {
							const {windows: r, windowSize: o} = n(t),
								s = [];
							let i = e,
								a = i;
							for (let e = 0; e < r; e++) {
								(a = i), s.push(a);
								for (let e = 1; e < o; e++) (a = a.add(i)), s.push(a);
								i = a.double();
							}
							return s;
						},
						wNAF(t, o, s) {
							const {windows: i, windowSize: a} = n(t);
							let c = e.ZERO,
								l = e.BASE;
							const f = BigInt(2 ** t - 1),
								u = 2 ** t,
								g = BigInt(t);
							for (let e = 0; e < i; e++) {
								const t = e * a;
								let n = Number(s & f);
								(s >>= g), n > a && ((n -= u), (s += Me));
								const i = t,
									h = t + Math.abs(n) - 1,
									d = e % 2 != 0,
									p = n < 0;
								0 === n ? (l = l.add(r(d, o[i]))) : (c = c.add(r(p, o[h])));
							}
							return {p: c, f: l};
						},
						wNAFCached(e, t, r, n) {
							const o = e._WINDOW_SIZE || 1;
							let s = t.get(e);
							return s || ((s = this.precomputeWindow(e, o)), 1 !== o && t.set(e, n(s))), this.wNAF(o, s, r);
						}
					};
				})(u, t.endo ? Math.ceil(g / 2) : g);
			return {CURVE: t, ProjectivePoint: u, normPrivateKeyToScalar: c, weierstrassEquation: s, isWithinCurveOrder: i};
		})({
			...t,
			toBytes(e, t, n) {
				const o = t.toAffine(),
					s = r.toBytes(o.x),
					i = Ae;
				return n ? i(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s) : i(Uint8Array.from([4]), s, r.toBytes(o.y));
			},
			fromBytes(e) {
				const t = e.length,
					n = e[0],
					i = e.subarray(1);
				if (t !== o || (2 !== n && 3 !== n)) {
					if (t === s && 4 === n)
						return {x: r.fromBytes(i.subarray(0, r.BYTES)), y: r.fromBytes(i.subarray(r.BYTES, 2 * r.BYTES))};
					throw new Error(
						`Point of length ${t} was invalid. Expected ${o} compressed bytes or ${s} uncompressed bytes`
					);
				}
				{
					const e = de(i);
					if (!(Ge < (a = e) && a < r.ORDER)) throw new Error('Point is not on curve');
					const t = f(e);
					let o = r.sqrt(t);
					return !(1 & ~n) != ((o & Ye) === Ye) && (o = r.neg(o)), {x: e, y: o};
				}
				var a;
			}
		}),
		g = (e) => ue(me(e, t.nByteLength));
	function h(e) {
		return e > n >> Ye;
	}
	const d = (e, t, r) => de(e.slice(t, r));
	class p {
		constructor(e, t, r) {
			(this.r = e), (this.s = t), (this.recovery = r), this.assertValidity();
		}
		static fromCompact(e) {
			const r = t.nByteLength;
			return (e = ye('compactSignature', e, 2 * r)), new p(d(e, 0, r), d(e, r, 2 * r));
		}
		static fromDER(e) {
			const {r: t, s: r} = Ze.toSig(ye('DER', e));
			return new p(t, r);
		}
		assertValidity() {
			if (!u(this.r)) throw new Error('r must be 0 < r < CURVE.n');
			if (!u(this.s)) throw new Error('s must be 0 < s < CURVE.n');
		}
		addRecoveryBit(e) {
			return new p(this.r, this.s, e);
		}
		recoverPublicKey(e) {
			const {r: n, s: o, recovery: s} = this,
				l = A(ye('msgHash', e));
			if (null == s || ![0, 1, 2, 3].includes(s)) throw new Error('recovery id invalid');
			const f = 2 === s || 3 === s ? n + t.n : n;
			if (f >= r.ORDER) throw new Error('recovery id 2 or 3 invalid');
			const u = 1 & s ? '03' : '02',
				h = c.fromHex(u + g(f)),
				d = a(f),
				p = i(-l * d),
				m = i(o * d),
				w = c.BASE.multiplyAndAddUnsafe(h, p, m);
			if (!w) throw new Error('point at infinify');
			return w.assertValidity(), w;
		}
		hasHighS() {
			return h(this.s);
		}
		normalizeS() {
			return this.hasHighS() ? new p(this.r, i(-this.s), this.recovery) : this;
		}
		toDERRawBytes() {
			return he(this.toDERHex());
		}
		toDERHex() {
			return Ze.hexFromSig({r: this.r, s: this.s});
		}
		toCompactRawBytes() {
			return he(this.toCompactHex());
		}
		toCompactHex() {
			return g(this.r) + g(this.s);
		}
	}
	const m = {
		isValidPrivateKey(e) {
			try {
				return l(e), !0;
			} catch (e) {
				return !1;
			}
		},
		normPrivateKeyToScalar: l,
		randomPrivateKey: () => {
			const e = Fe(t.n);
			return (function (e, t, r = !1) {
				const n = e.length,
					o = He(t),
					s = Fe(t);
				if (n < 16 || n < s || n > 1024) throw new Error(`expected ${s}-1024 bytes of input, got ${n}`);
				const i = Oe(r ? de(e) : pe(e), t - Ie) + Ie;
				return r ? we(i, o) : me(i, o);
			})(t.randomBytes(e), t.n);
		},
		precompute: (e = 8, t = c.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t)
	};
	function w(e) {
		const t = e instanceof Uint8Array,
			r = 'string' == typeof e,
			n = (t || r) && e.length;
		return t ? n === o || n === s : r ? n === 2 * o || n === 2 * s : e instanceof c;
	}
	const y =
			t.bits2int ||
			function (e) {
				const r = de(e),
					n = 8 * e.length - t.nBitLength;
				return n > 0 ? r >> BigInt(n) : r;
			},
		A =
			t.bits2int_modN ||
			function (e) {
				return i(y(e));
			},
		b = be(t.nBitLength);
	function x(e) {
		if ('bigint' != typeof e) throw new Error('bigint expected');
		if (!(Ge <= e && e < b)) throw new Error(`bigint expected < 2^${t.nBitLength}`);
		return me(e, t.nByteLength);
	}
	const E = {lowS: t.lowS, prehash: !1},
		v = {lowS: t.lowS, prehash: !1};
	return (
		c.BASE._setWindowSize(8),
		{
			CURVE: t,
			getPublicKey: function (e, t = !0) {
				return c.fromPrivateKey(e).toRawBytes(t);
			},
			getSharedSecret: function (e, t, r = !0) {
				if (w(e)) throw new Error('first arg must be private key');
				if (!w(t)) throw new Error('second arg must be public key');
				return c.fromHex(t).multiply(l(e)).toRawBytes(r);
			},
			sign: function (e, n, o = E) {
				const {seed: s, k2sig: f} = (function (e, n, o = E) {
						if (['recovered', 'canonical'].some((e) => e in o)) throw new Error('sign() legacy options not supported');
						const {hash: s, randomBytes: f} = t;
						let {lowS: g, prehash: d, extraEntropy: m} = o;
						null == g && (g = !0), (e = ye('msgHash', e)), d && (e = ye('prehashed msgHash', s(e)));
						const w = A(e),
							b = l(n),
							v = [x(b), x(w)];
						if (null != m) {
							const e = !0 === m ? f(r.BYTES) : m;
							v.push(ye('extraEntropy', e));
						}
						const B = Ae(...v),
							k = w;
						return {
							seed: B,
							k2sig: function (e) {
								const t = y(e);
								if (!u(t)) return;
								const r = a(t),
									n = c.BASE.multiply(t).toAffine(),
									o = i(n.x);
								if (o === Ge) return;
								const s = i(r * i(k + o * b));
								if (s === Ge) return;
								let l = (n.x === o ? 0 : 2) | Number(n.y & Ye),
									f = s;
								return (
									g &&
										h(s) &&
										((f = (function (e) {
											return h(e) ? i(-e) : e;
										})(s)),
										(l ^= 1)),
									new p(o, f, l)
								);
							}
						};
					})(e, n, o),
					g = t;
				return ve(g.hash.outputLen, g.nByteLength, g.hmac)(s, f);
			},
			verify: function (e, r, n, o = v) {
				const s = e;
				if (((r = ye('msgHash', r)), (n = ye('publicKey', n)), 'strict' in o))
					throw new Error('options.strict was renamed to lowS');
				const {lowS: l, prehash: f} = o;
				let u, g;
				try {
					if ('string' == typeof s || s instanceof Uint8Array)
						try {
							u = p.fromDER(s);
						} catch (e) {
							if (!(e instanceof Ze.Err)) throw e;
							u = p.fromCompact(s);
						}
					else {
						if ('object' != typeof s || 'bigint' != typeof s.r || 'bigint' != typeof s.s) throw new Error('PARSE');
						{
							const {r: e, s: t} = s;
							u = new p(e, t);
						}
					}
					g = c.fromHex(n);
				} catch (e) {
					if ('PARSE' === e.message) throw new Error('signature must be Signature instance, Uint8Array or hex string');
					return !1;
				}
				if (l && u.hasHighS()) return !1;
				f && (r = t.hash(r));
				const {r: h, s: d} = u,
					m = A(r),
					w = a(d),
					y = i(m * w),
					b = i(h * w),
					x = c.BASE.multiplyAndAddUnsafe(g, y, b)?.toAffine();
				return !!x && i(x.x) === h;
			},
			ProjectivePoint: c,
			Signature: p,
			utils: m
		}
	);
}
function Xe(e) {
	return {
		hash: e,
		hmac: (t, ...r) =>
			ze(
				e,
				t,
				(function (...e) {
					const t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
					let r = 0;
					return (
						e.forEach((e) => {
							if (!W(e)) throw new Error('Uint8Array expected');
							t.set(e, r), (r += e.length);
						}),
						t
					);
				})(...r)
			),
		randomBytes: X
	};
}
BigInt(4);
const et = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'),
	tt = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
	rt = BigInt(1),
	nt = BigInt(2),
	ot = (e, t) => (e + t / nt) / t;
function st(e) {
	const t = et,
		r = BigInt(3),
		n = BigInt(6),
		o = BigInt(11),
		s = BigInt(22),
		i = BigInt(23),
		a = BigInt(44),
		c = BigInt(88),
		l = (e * e * e) % t,
		f = (l * l * e) % t,
		u = (Pe(f, r, t) * f) % t,
		g = (Pe(u, r, t) * f) % t,
		h = (Pe(g, nt, t) * l) % t,
		d = (Pe(h, o, t) * h) % t,
		p = (Pe(d, s, t) * d) % t,
		m = (Pe(p, a, t) * p) % t,
		w = (Pe(m, c, t) * m) % t,
		y = (Pe(w, a, t) * p) % t,
		A = (Pe(y, r, t) * f) % t,
		b = (Pe(A, i, t) * d) % t,
		x = (Pe(b, n, t) * l) % t,
		E = Pe(x, nt, t);
	if (!it.eql(it.sqr(E), e)) throw new Error('Cannot find square root');
	return E;
}
const it = (function (e, t, r = !1, n = {}) {
		if (e <= Ue) throw new Error(`Expected Field ORDER > 0, got ${e}`);
		const {nBitLength: o, nByteLength: s} = qe(e, t);
		if (s > 2048) throw new Error('Field lengths over 2048 bytes are not supported');
		const i = (function (e) {
				if (e % $e === Le) {
					const t = (e + Ie) / $e;
					return function (e, r) {
						const n = e.pow(r, t);
						if (!e.eql(e.sqr(n), r)) throw new Error('Cannot find square root');
						return n;
					};
				}
				if (e % _e === Te) {
					const t = (e - Te) / _e;
					return function (e, r) {
						const n = e.mul(r, Se),
							o = e.pow(n, t),
							s = e.mul(r, o),
							i = e.mul(e.mul(s, Se), o),
							a = e.mul(s, e.sub(i, e.ONE));
						if (!e.eql(e.sqr(a), r)) throw new Error('Cannot find square root');
						return a;
					};
				}
				return (function (e) {
					const t = (e - Ie) / Se;
					let r, n, o;
					for (r = e - Ie, n = 0; r % Se === Ue; r /= Se, n++);
					for (o = Se; o < e && Re(o, t, e) !== e - Ie; o++);
					if (1 === n) {
						const t = (e + Ie) / $e;
						return function (e, r) {
							const n = e.pow(r, t);
							if (!e.eql(e.sqr(n), r)) throw new Error('Cannot find square root');
							return n;
						};
					}
					const s = (r + Ie) / Se;
					return function (e, i) {
						if (e.pow(i, t) === e.neg(e.ONE)) throw new Error('Cannot find square root');
						let a = n,
							c = e.pow(e.mul(e.ONE, o), r),
							l = e.pow(i, s),
							f = e.pow(i, r);
						for (; !e.eql(f, e.ONE); ) {
							if (e.eql(f, e.ZERO)) return e.ZERO;
							let t = 1;
							for (let r = e.sqr(f); t < a && !e.eql(r, e.ONE); t++) r = e.sqr(r);
							const r = e.pow(c, Ie << BigInt(a - t - 1));
							(c = e.sqr(r)), (l = e.mul(l, r)), (f = e.mul(f, c)), (a = t);
						}
						return l;
					};
				})(e);
			})(e),
			a = Object.freeze({
				ORDER: e,
				BITS: o,
				BYTES: s,
				MASK: be(o),
				ZERO: Ue,
				ONE: Ie,
				create: (t) => Oe(t, e),
				isValid: (t) => {
					if ('bigint' != typeof t) throw new Error('Invalid field element: expected bigint, got ' + typeof t);
					return Ue <= t && t < e;
				},
				is0: (e) => e === Ue,
				isOdd: (e) => (e & Ie) === Ie,
				neg: (t) => Oe(-t, e),
				eql: (e, t) => e === t,
				sqr: (t) => Oe(t * t, e),
				add: (t, r) => Oe(t + r, e),
				sub: (t, r) => Oe(t - r, e),
				mul: (t, r) => Oe(t * r, e),
				pow: (e, t) =>
					(function (e, t, r) {
						if (r < Ue) throw new Error('Expected power > 0');
						if (r === Ue) return e.ONE;
						if (r === Ie) return t;
						let n = e.ONE,
							o = t;
						for (; r > Ue; ) r & Ie && (n = e.mul(n, o)), (o = e.sqr(o)), (r >>= Ie);
						return n;
					})(a, e, t),
				div: (t, r) => Oe(t * Ne(r, e), e),
				sqrN: (e) => e * e,
				addN: (e, t) => e + t,
				subN: (e, t) => e - t,
				mulN: (e, t) => e * t,
				inv: (t) => Ne(t, e),
				sqrt: n.sqrt || ((e) => i(a, e)),
				invertBatch: (e) =>
					(function (e, t) {
						const r = new Array(t.length),
							n = t.reduce((t, n, o) => (e.is0(n) ? t : ((r[o] = t), e.mul(t, n))), e.ONE),
							o = e.inv(n);
						return t.reduceRight((t, n, o) => (e.is0(n) ? t : ((r[o] = e.mul(t, r[o])), e.mul(t, n))), o), r;
					})(a, e),
				cmov: (e, t, r) => (r ? t : e),
				toBytes: (e) => (r ? we(e, s) : me(e, s)),
				fromBytes: (e) => {
					if (e.length !== s) throw new Error(`Fp.fromBytes: expected ${s}, got ${e.length}`);
					return r ? pe(e) : de(e);
				}
			});
		return Object.freeze(a);
	})(et, void 0, void 0, {sqrt: st}),
	at = (function (e, t) {
		const r = (t) => Qe({...e, ...Xe(t)});
		return Object.freeze({...r(t), create: r});
	})(
		{
			a: BigInt(0),
			b: BigInt(7),
			Fp: it,
			n: tt,
			Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
			Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
			h: BigInt(1),
			lowS: !0,
			endo: {
				beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
				splitScalar: (e) => {
					const t = tt,
						r = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
						n = -rt * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
						o = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
						s = r,
						i = BigInt('0x100000000000000000000000000000000'),
						a = ot(s * e, t),
						c = ot(-n * e, t);
					let l = Oe(e - a * r - c * o, t),
						f = Oe(-a * n - c * s, t);
					const u = l > i,
						g = f > i;
					if ((u && (l = t - l), g && (f = t - f), l > i || f > i))
						throw new Error('splitScalar: Endomorphism failed, k=' + e);
					return {k1neg: u, k1: l, k2neg: g, k2: f};
				}
			}
		},
		ie
	),
	ct = BigInt(0),
	lt = (e) => 'bigint' == typeof e && ct < e && e < et,
	ft = {};
function ut(e, ...t) {
	let r = ft[e];
	if (void 0 === r) {
		const t = ie(Uint8Array.from(e, (e) => e.charCodeAt(0)));
		(r = Ae(t, t)), (ft[e] = r);
	}
	return ie(Ae(r, ...t));
}
const gt = (e) => e.toRawBytes(!0).slice(1),
	ht = (e) => me(e, 32),
	dt = (e) => Oe(e, et),
	pt = (e) => Oe(e, tt),
	mt = at.ProjectivePoint;
function wt(e) {
	let t = at.utils.normPrivateKeyToScalar(e),
		r = mt.fromPrivateKey(t);
	return {scalar: r.hasEvenY() ? t : pt(-t), bytes: gt(r)};
}
function yt(e) {
	if (!lt(e)) throw new Error('bad x: need 0 < x < p');
	const t = dt(e * e);
	let r = st(dt(t * e + BigInt(7)));
	r % nt !== ct && (r = dt(-r));
	const n = new mt(e, r, rt);
	return n.assertValidity(), n;
}
function At(...e) {
	return pt(de(ut('BIP0340/challenge', ...e)));
}
function bt(e) {
	return wt(e).bytes;
}
function xt(e, t, r = X(32)) {
	const n = ye('message', e),
		{bytes: o, scalar: s} = wt(t),
		i = ye('auxRand', r, 32),
		a = ht(s ^ de(ut('BIP0340/aux', i))),
		c = ut('BIP0340/nonce', a, o, n),
		l = pt(de(c));
	if (l === ct) throw new Error('sign failed: k is zero');
	const {bytes: f, scalar: u} = wt(l),
		g = At(f, o, n),
		h = new Uint8Array(64);
	if ((h.set(f, 0), h.set(ht(pt(u + g * s)), 32), !Et(h, n, o))) throw new Error('sign: Invalid signature produced');
	return h;
}
function Et(e, t, r) {
	const n = ye('signature', e, 64),
		o = ye('message', t),
		s = ye('publicKey', r, 32);
	try {
		const e = yt(de(s)),
			t = de(n.subarray(0, 32));
		if (!lt(t)) return !1;
		const r = de(n.subarray(32, 64));
		if (!('bigint' == typeof (l = r) && ct < l && l < tt)) return !1;
		const f = At(ht(t), gt(e), o),
			u = ((i = e), (a = r), (c = pt(-f)), mt.BASE.multiplyAndAddUnsafe(i, a, c));
		return !(!u || !u.hasEvenY() || u.toAffine().x !== t);
	} catch (e) {
		return !1;
	}
	var i, a, c, l;
}
const vt = (() => ({
	getPublicKey: bt,
	sign: xt,
	verify: Et,
	utils: {
		randomPrivateKey: at.utils.randomPrivateKey,
		lift_x: yt,
		pointToBytes: gt,
		numberToBytesBE: me,
		bytesToNumberBE: de,
		taggedHash: ut,
		mod: Oe
	}
}))();
function Bt(e) {
	if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function kt(e, ...t) {
	if (!(e instanceof Uint8Array)) throw new Error('Expected Uint8Array');
	if (t.length > 0 && !t.includes(e.length))
		throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
const Ut = {
	number: Bt,
	bool: function (e) {
		if ('boolean' != typeof e) throw new Error(`Expected boolean, not ${e}`);
	},
	bytes: kt,
	hash: function (e) {
		if ('function' != typeof e || 'function' != typeof e.create)
			throw new Error('Hash should be wrapped by utils.wrapConstructor');
		Bt(e.outputLen), Bt(e.blockLen);
	},
	exists: function (e, t = !0) {
		if (e.destroyed) throw new Error('Hash instance has been destroyed');
		if (t && e.finished) throw new Error('Hash#digest() has already been called');
	},
	output: function (e, t) {
		kt(e);
		const r = t.outputLen;
		if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
	}
};
class It extends m {
	constructor(e, t, r, n) {
		super(),
			(this.blockLen = e),
			(this.outputLen = t),
			(this.padOffset = r),
			(this.isLE = n),
			(this.finished = !1),
			(this.length = 0),
			(this.pos = 0),
			(this.destroyed = !1),
			(this.buffer = new Uint8Array(e)),
			(this.view = u(this.buffer));
	}
	update(e) {
		Ut.exists(this);
		const {view: t, buffer: r, blockLen: n} = this,
			o = (e = p(e)).length;
		for (let s = 0; s < o; ) {
			const i = Math.min(n - this.pos, o - s);
			if (i !== n)
				r.set(e.subarray(s, s + i), this.pos),
					(this.pos += i),
					(s += i),
					this.pos === n && (this.process(t, 0), (this.pos = 0));
			else {
				const t = u(e);
				for (; n <= o - s; s += n) this.process(t, s);
			}
		}
		return (this.length += e.length), this.roundClean(), this;
	}
	digestInto(e) {
		Ut.exists(this), Ut.output(e, this), (this.finished = !0);
		const {buffer: t, view: r, blockLen: n, isLE: o} = this;
		let {pos: s} = this;
		(t[s++] = 128), this.buffer.subarray(s).fill(0), this.padOffset > n - s && (this.process(r, 0), (s = 0));
		for (let e = s; e < n; e++) t[e] = 0;
		!(function (e, t, r, n) {
			if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
			const o = BigInt(32),
				s = BigInt(4294967295),
				i = Number((r >> o) & s),
				a = Number(r & s),
				c = n ? 4 : 0,
				l = n ? 0 : 4;
			e.setUint32(t + c, i, n), e.setUint32(t + l, a, n);
		})(r, n - 8, BigInt(8 * this.length), o),
			this.process(r, 0);
		const i = u(e),
			a = this.outputLen;
		if (a % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
		const c = a / 4,
			l = this.get();
		if (c > l.length) throw new Error('_sha2: outputLen bigger than state');
		for (let e = 0; e < c; e++) i.setUint32(4 * e, l[e], o);
	}
	digest() {
		const {buffer: e, outputLen: t} = this;
		this.digestInto(e);
		const r = e.slice(0, t);
		return this.destroy(), r;
	}
	_cloneInto(e) {
		e || (e = new this.constructor()), e.set(...this.get());
		const {blockLen: t, buffer: r, length: n, finished: o, destroyed: s, pos: i} = this;
		return (e.length = n), (e.pos = i), (e.finished = o), (e.destroyed = s), n % t && e.buffer.set(r), e;
	}
}
const St = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
	Lt = new Uint32Array([
		1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
		310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078,
		604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
		3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
		2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
		275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222,
		2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
	]),
	$t = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
	Tt = new Uint32Array(64);
class _t extends It {
	constructor() {
		super(64, 32, 8, !1),
			(this.A = 0 | $t[0]),
			(this.B = 0 | $t[1]),
			(this.C = 0 | $t[2]),
			(this.D = 0 | $t[3]),
			(this.E = 0 | $t[4]),
			(this.F = 0 | $t[5]),
			(this.G = 0 | $t[6]),
			(this.H = 0 | $t[7]);
	}
	get() {
		const {A: e, B: t, C: r, D: n, E: o, F: s, G: i, H: a} = this;
		return [e, t, r, n, o, s, i, a];
	}
	set(e, t, r, n, o, s, i, a) {
		(this.A = 0 | e),
			(this.B = 0 | t),
			(this.C = 0 | r),
			(this.D = 0 | n),
			(this.E = 0 | o),
			(this.F = 0 | s),
			(this.G = 0 | i),
			(this.H = 0 | a);
	}
	process(e, t) {
		for (let r = 0; r < 16; r++, t += 4) Tt[r] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			const t = Tt[e - 15],
				r = Tt[e - 2],
				n = g(t, 7) ^ g(t, 18) ^ (t >>> 3),
				o = g(r, 17) ^ g(r, 19) ^ (r >>> 10);
			Tt[e] = (o + Tt[e - 7] + n + Tt[e - 16]) | 0;
		}
		let {A: r, B: n, C: o, D: s, E: i, F: a, G: c, H: l} = this;
		for (let e = 0; e < 64; e++) {
			const t = (l + (g(i, 6) ^ g(i, 11) ^ g(i, 25)) + (((f = i) & a) ^ (~f & c)) + Lt[e] + Tt[e]) | 0,
				u = ((g(r, 2) ^ g(r, 13) ^ g(r, 22)) + St(r, n, o)) | 0;
			(l = c), (c = a), (a = i), (i = (s + t) | 0), (s = o), (o = n), (n = r), (r = (t + u) | 0);
		}
		var f;
		(r = (r + this.A) | 0),
			(n = (n + this.B) | 0),
			(o = (o + this.C) | 0),
			(s = (s + this.D) | 0),
			(i = (i + this.E) | 0),
			(a = (a + this.F) | 0),
			(c = (c + this.G) | 0),
			(l = (l + this.H) | 0),
			this.set(r, n, o, s, i, a, c, l);
	}
	roundClean() {
		Tt.fill(0);
	}
	destroy() {
		this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
	}
}
class Ot extends _t {
	constructor() {
		super(),
			(this.A = -1056596264),
			(this.B = 914150663),
			(this.C = 812702999),
			(this.D = -150054599),
			(this.E = -4191439),
			(this.F = 1750603025),
			(this.G = 1694076839),
			(this.H = -1090891868),
			(this.outputLen = 28);
	}
}
const Rt = w(() => new _t());
w(() => new Ot());
var Pt = Symbol('verified');
function Nt(e) {
	if (!(e instanceof Object)) return !1;
	if ('number' != typeof e.kind) return !1;
	if ('string' != typeof e.content) return !1;
	if ('number' != typeof e.created_at) return !1;
	if ('string' != typeof e.pubkey) return !1;
	if (!e.pubkey.match(/^[a-f0-9]{64}$/)) return !1;
	if (!Array.isArray(e.tags)) return !1;
	for (let t = 0; t < e.tags.length; t++) {
		let r = e.tags[t];
		if (!Array.isArray(r)) return !1;
		for (let e = 0; e < r.length; e++) if ('object' == typeof r[e]) return !1;
	}
	return !0;
}
new TextDecoder('utf-8');
var Ct = new TextEncoder();
function qt(e) {
	return d(
		Rt(
			Ct.encode(
				(function (e) {
					if (!Nt(e)) throw new Error("can't serialize event with wrong or missing properties");
					return JSON.stringify([0, e.pubkey, e.created_at, e.kind, e.tags, e.content]);
				})(e)
			)
		)
	);
}
var Ht = new (class {
		generateSecretKey() {
			return vt.utils.randomPrivateKey();
		}
		getPublicKey(e) {
			return d(vt.getPublicKey(e));
		}
		finalizeEvent(e, t) {
			const r = e;
			return (r.pubkey = d(vt.getPublicKey(t))), (r.id = qt(r)), (r.sig = d(vt.sign(qt(r), t))), (r[Pt] = !0), r;
		}
		verifyEvent(e) {
			if ('boolean' == typeof e[Pt]) return e[Pt];
			const t = qt(e);
			if (t !== e.id) return (e[Pt] = !1), !1;
			try {
				const r = vt.verify(e.sig, t, e.pubkey);
				return (e[Pt] = r), r;
			} catch (t) {
				return (e[Pt] = !1), !1;
			}
		}
	})(),
	Ft = (Ht.generateSecretKey, Ht.getPublicKey),
	jt = Ht.finalizeEvent;
function zt(e) {
	return e instanceof Uint8Array || (null != e && 'object' == typeof e && 'Uint8Array' === e.constructor.name);
}
function Vt(e, ...t) {
	if (!zt(e)) throw new Error('Uint8Array expected');
	if (t.length > 0 && !t.includes(e.length))
		throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function Mt(e, t = !0) {
	if (e.destroyed) throw new Error('Hash instance has been destroyed');
	if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function Dt(e, t) {
	Vt(e);
	const r = t.outputLen;
	if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
Ht.verifyEvent;
const Kt = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
	Wt = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
	Zt = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
	throw new Error('Non little-endian hardware is not supported');
function Gt(e) {
	if ('string' == typeof e)
		e = (function (e) {
			if ('string' != typeof e) throw new Error('string expected, got ' + typeof e);
			return new Uint8Array(new TextEncoder().encode(e));
		})(e);
	else {
		if (!zt(e)) throw new Error('Uint8Array expected, got ' + typeof e);
		e = e.slice();
	}
	return e;
}
function Yt(e, t) {
	if (e.length !== t.length) return !1;
	let r = 0;
	for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
	return 0 === r;
}
const Jt = (e, t) => (Object.assign(t, e), t);
function Qt(e, t, r, n) {
	if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
	const o = BigInt(32),
		s = BigInt(4294967295),
		i = Number((r >> o) & s),
		a = Number(r & s),
		c = n ? 4 : 0,
		l = n ? 0 : 4;
	e.setUint32(t + c, i, n), e.setUint32(t + l, a, n);
}
const Xt = 16,
	er = new Uint8Array(16),
	tr = Wt(er),
	rr = (e) => (((e >>> 0) & 255) << 24) | (((e >>> 8) & 255) << 16) | (((e >>> 16) & 255) << 8) | ((e >>> 24) & 255);
class nr {
	constructor(e, t) {
		(this.blockLen = Xt),
			(this.outputLen = Xt),
			(this.s0 = 0),
			(this.s1 = 0),
			(this.s2 = 0),
			(this.s3 = 0),
			(this.finished = !1),
			Vt((e = Gt(e)), 16);
		const r = Zt(e);
		let n = r.getUint32(0, !1),
			o = r.getUint32(4, !1),
			s = r.getUint32(8, !1),
			i = r.getUint32(12, !1);
		const a = [];
		for (let e = 0; e < 128; e++)
			a.push({s0: rr(n), s1: rr(o), s2: rr(s), s3: rr(i)}),
				({
					s0: n,
					s1: o,
					s2: s,
					s3: i
				} = {
					s3: ((f = s) << 31) | ((u = i) >>> 1),
					s2: ((l = o) << 31) | (f >>> 1),
					s1: ((c = n) << 31) | (l >>> 1),
					s0: (c >>> 1) ^ ((225 << 24) & -(1 & u))
				});
		var c, l, f, u;
		const g = (h = t || 1024) > 65536 ? 8 : h > 1024 ? 4 : 2;
		var h;
		if (![1, 2, 4, 8].includes(g)) throw new Error(`ghash: wrong window size=${g}, should be 2, 4 or 8`);
		this.W = g;
		const d = 128 / g,
			p = (this.windowSize = 2 ** g),
			m = [];
		for (let e = 0; e < d; e++)
			for (let t = 0; t < p; t++) {
				let r = 0,
					n = 0,
					o = 0,
					s = 0;
				for (let i = 0; i < g; i++) {
					if (!((t >>> (g - i - 1)) & 1)) continue;
					const {s0: c, s1: l, s2: f, s3: u} = a[g * e + i];
					(r ^= c), (n ^= l), (o ^= f), (s ^= u);
				}
				m.push({s0: r, s1: n, s2: o, s3: s});
			}
		this.t = m;
	}
	_updateBlock(e, t, r, n) {
		(e ^= this.s0), (t ^= this.s1), (r ^= this.s2), (n ^= this.s3);
		const {W: o, t: s, windowSize: i} = this;
		let a = 0,
			c = 0,
			l = 0,
			f = 0;
		const u = (1 << o) - 1;
		let g = 0;
		for (const h of [e, t, r, n])
			for (let e = 0; e < 4; e++) {
				const t = (h >>> (8 * e)) & 255;
				for (let e = 8 / o - 1; e >= 0; e--) {
					const r = (t >>> (o * e)) & u,
						{s0: n, s1: h, s2: d, s3: p} = s[g * i + r];
					(a ^= n), (c ^= h), (l ^= d), (f ^= p), (g += 1);
				}
			}
		(this.s0 = a), (this.s1 = c), (this.s2 = l), (this.s3 = f);
	}
	update(e) {
		(e = Gt(e)), Mt(this);
		const t = Wt(e),
			r = Math.floor(e.length / Xt),
			n = e.length % Xt;
		for (let e = 0; e < r; e++) this._updateBlock(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2], t[4 * e + 3]);
		return n && (er.set(e.subarray(r * Xt)), this._updateBlock(tr[0], tr[1], tr[2], tr[3]), tr.fill(0)), this;
	}
	destroy() {
		const {t: e} = this;
		for (const t of e) (t.s0 = 0), (t.s1 = 0), (t.s2 = 0), (t.s3 = 0);
	}
	digestInto(e) {
		Mt(this), Dt(e, this), (this.finished = !0);
		const {s0: t, s1: r, s2: n, s3: o} = this,
			s = Wt(e);
		return (s[0] = t), (s[1] = r), (s[2] = n), (s[3] = o), e;
	}
	digest() {
		const e = new Uint8Array(Xt);
		return this.digestInto(e), this.destroy(), e;
	}
}
class or extends nr {
	constructor(e, t) {
		const r = (function (e) {
			e.reverse();
			const t = 1 & e[15];
			let r = 0;
			for (let t = 0; t < e.length; t++) {
				const n = e[t];
				(e[t] = (n >>> 1) | r), (r = (1 & n) << 7);
			}
			return (e[0] ^= 225 & -t), e;
		})((e = Gt(e)).slice());
		super(r, t), r.fill(0);
	}
	update(e) {
		(e = Gt(e)), Mt(this);
		const t = Wt(e),
			r = e.length % Xt,
			n = Math.floor(e.length / Xt);
		for (let e = 0; e < n; e++)
			this._updateBlock(rr(t[4 * e + 3]), rr(t[4 * e + 2]), rr(t[4 * e + 1]), rr(t[4 * e + 0]));
		return (
			r && (er.set(e.subarray(n * Xt)), this._updateBlock(rr(tr[3]), rr(tr[2]), rr(tr[1]), rr(tr[0])), tr.fill(0)), this
		);
	}
	digestInto(e) {
		Mt(this), Dt(e, this), (this.finished = !0);
		const {s0: t, s1: r, s2: n, s3: o} = this,
			s = Wt(e);
		return (s[0] = t), (s[1] = r), (s[2] = n), (s[3] = o), e.reverse();
	}
}
function sr(e) {
	const t = (t, r) => e(r, t.length).update(Gt(t)).digest(),
		r = e(new Uint8Array(16), 0);
	return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t, r) => e(t, r)), t;
}
const ir = sr((e, t) => new nr(e, t)),
	ar = sr((e, t) => new or(e, t)),
	cr = 16,
	lr = new Uint8Array(cr);
function fr(e) {
	return (e << 1) ^ (283 & -(e >> 7));
}
function ur(e, t) {
	let r = 0;
	for (; t > 0; t >>= 1) (r ^= e & -(1 & t)), (e = fr(e));
	return r;
}
const gr = (() => {
		let e = new Uint8Array(256);
		for (let t = 0, r = 1; t < 256; t++, r ^= fr(r)) e[t] = r;
		const t = new Uint8Array(256);
		t[0] = 99;
		for (let r = 0; r < 255; r++) {
			let n = e[255 - r];
			(n |= n << 8), (t[e[r]] = 255 & (n ^ (n >> 4) ^ (n >> 5) ^ (n >> 6) ^ (n >> 7) ^ 99));
		}
		return t;
	})(),
	hr = gr.map((e, t) => gr.indexOf(t)),
	dr = (e) => (e << 8) | (e >>> 24);
function pr(e, t) {
	if (256 !== e.length) throw new Error('Wrong sbox length');
	const r = new Uint32Array(256).map((r, n) => t(e[n])),
		n = r.map(dr),
		o = n.map(dr),
		s = o.map(dr),
		i = new Uint32Array(65536),
		a = new Uint32Array(65536),
		c = new Uint16Array(65536);
	for (let t = 0; t < 256; t++)
		for (let l = 0; l < 256; l++) {
			const f = 256 * t + l;
			(i[f] = r[t] ^ n[l]), (a[f] = o[t] ^ s[l]), (c[f] = (e[t] << 8) | e[l]);
		}
	return {sbox: e, sbox2: c, T0: r, T1: n, T2: o, T3: s, T01: i, T23: a};
}
const mr = pr(gr, (e) => (ur(e, 3) << 24) | (e << 16) | (e << 8) | ur(e, 2)),
	wr = pr(hr, (e) => (ur(e, 11) << 24) | (ur(e, 13) << 16) | (ur(e, 9) << 8) | ur(e, 14)),
	yr = (() => {
		const e = new Uint8Array(16);
		for (let t = 0, r = 1; t < 16; t++, r = fr(r)) e[t] = r;
		return e;
	})();
function Ar(e) {
	Vt(e);
	const t = e.length;
	if (![16, 24, 32].includes(t)) throw new Error(`aes: wrong key size: should be 16, 24 or 32, got: ${t}`);
	const {sbox2: r} = mr,
		n = Wt(e),
		o = n.length,
		s = (e) => Er(r, e, e, e, e),
		i = new Uint32Array(t + 28);
	i.set(n);
	for (let e = o; e < i.length; e++) {
		let t = i[e - 1];
		e % o == 0 ? (t = s(((a = t) << 24) | (a >>> 8)) ^ yr[e / o - 1]) : o > 6 && e % o == 4 && (t = s(t)),
			(i[e] = i[e - o] ^ t);
	}
	var a;
	return i;
}
function br(e) {
	const t = Ar(e),
		r = t.slice(),
		n = t.length,
		{sbox2: o} = mr,
		{T0: s, T1: i, T2: a, T3: c} = wr;
	for (let e = 0; e < n; e += 4) for (let o = 0; o < 4; o++) r[e + o] = t[n - e - 4 + o];
	t.fill(0);
	for (let e = 4; e < n - 4; e++) {
		const t = r[e],
			n = Er(o, t, t, t, t);
		r[e] = s[255 & n] ^ i[(n >>> 8) & 255] ^ a[(n >>> 16) & 255] ^ c[n >>> 24];
	}
	return r;
}
function xr(e, t, r, n, o, s) {
	return e[((r << 8) & 65280) | ((n >>> 8) & 255)] ^ t[((o >>> 8) & 65280) | ((s >>> 24) & 255)];
}
function Er(e, t, r, n, o) {
	return e[(255 & t) | (65280 & r)] | (e[((n >>> 16) & 255) | ((o >>> 16) & 65280)] << 16);
}
function vr(e, t, r, n, o) {
	const {sbox2: s, T01: i, T23: a} = mr;
	let c = 0;
	(t ^= e[c++]), (r ^= e[c++]), (n ^= e[c++]), (o ^= e[c++]);
	const l = e.length / 4 - 2;
	for (let s = 0; s < l; s++) {
		const s = e[c++] ^ xr(i, a, t, r, n, o),
			l = e[c++] ^ xr(i, a, r, n, o, t),
			f = e[c++] ^ xr(i, a, n, o, t, r),
			u = e[c++] ^ xr(i, a, o, t, r, n);
		(t = s), (r = l), (n = f), (o = u);
	}
	return {
		s0: e[c++] ^ Er(s, t, r, n, o),
		s1: e[c++] ^ Er(s, r, n, o, t),
		s2: e[c++] ^ Er(s, n, o, t, r),
		s3: e[c++] ^ Er(s, o, t, r, n)
	};
}
function Br(e, t, r, n, o) {
	const {sbox2: s, T01: i, T23: a} = wr;
	let c = 0;
	(t ^= e[c++]), (r ^= e[c++]), (n ^= e[c++]), (o ^= e[c++]);
	const l = e.length / 4 - 2;
	for (let s = 0; s < l; s++) {
		const s = e[c++] ^ xr(i, a, t, o, n, r),
			l = e[c++] ^ xr(i, a, r, t, o, n),
			f = e[c++] ^ xr(i, a, n, r, t, o),
			u = e[c++] ^ xr(i, a, o, n, r, t);
		(t = s), (r = l), (n = f), (o = u);
	}
	return {
		s0: e[c++] ^ Er(s, t, o, n, r),
		s1: e[c++] ^ Er(s, r, t, o, n),
		s2: e[c++] ^ Er(s, n, r, t, o),
		s3: e[c++] ^ Er(s, o, n, r, t)
	};
}
function kr(e, t) {
	if (!t) return new Uint8Array(e);
	if ((Vt(t), t.length < e)) throw new Error(`aes: wrong destination length, expected at least ${e}, got: ${t.length}`);
	return t;
}
function Ur(e, t, r, n, o) {
	Vt(r, cr), Vt(n), (o = kr(n.length, o));
	const s = r,
		i = Wt(s),
		a = Zt(s),
		c = Wt(n),
		l = Wt(o),
		f = t ? 0 : 12,
		u = n.length;
	let g = a.getUint32(f, t),
		{s0: h, s1: d, s2: p, s3: m} = vr(e, i[0], i[1], i[2], i[3]);
	for (let r = 0; r + 4 <= c.length; r += 4)
		(l[r + 0] = c[r + 0] ^ h),
			(l[r + 1] = c[r + 1] ^ d),
			(l[r + 2] = c[r + 2] ^ p),
			(l[r + 3] = c[r + 3] ^ m),
			(g = (g + 1) >>> 0),
			a.setUint32(f, g, t),
			({s0: h, s1: d, s2: p, s3: m} = vr(e, i[0], i[1], i[2], i[3]));
	const w = cr * Math.floor(c.length / 4);
	if (w < u) {
		const e = new Uint32Array([h, d, p, m]),
			t = Kt(e);
		for (let e = w, r = 0; e < u; e++, r++) o[e] = n[e] ^ t[r];
	}
	return o;
}
function Ir(e) {
	if ((Vt(e), e.length % cr != 0))
		throw new Error('aes/(cbc-ecb).decrypt ciphertext should consist of blocks with size 16');
}
function Sr(e, t, r) {
	let n = e.length;
	const o = n % cr;
	if (!t && 0 !== o) throw new Error('aec/(cbc-ecb): unpadded plaintext with disabled padding');
	const s = Wt(e);
	if (t) {
		let e = cr - o;
		e || (e = cr), (n += e);
	}
	const i = kr(n, r);
	return {b: s, o: Wt(i), out: i};
}
function Lr(e, t) {
	if (!t) return e;
	const r = e.length;
	if (!r) throw new Error('aes/pcks5: empty ciphertext not allowed');
	const n = e[r - 1];
	if (n <= 0 || n > 16) throw new Error(`aes/pcks5: wrong padding byte: ${n}`);
	const o = e.subarray(0, -n);
	for (let t = 0; t < n; t++) if (e[r - t - 1] !== n) throw new Error('aes/pcks5: wrong padding');
	return o;
}
function $r(e) {
	const t = new Uint8Array(16),
		r = Wt(t);
	t.set(e);
	const n = cr - e.length;
	for (let e = cr - n; e < cr; e++) t[e] = n;
	return r;
}
Jt({blockSize: 16, nonceLength: 16}, function (e, t) {
	function r(r, n) {
		const o = Ar(e),
			s = t.slice(),
			i = (function (e, t, r, n) {
				Vt(t, cr), Vt(r);
				const o = r.length;
				n = kr(o, n);
				const s = t,
					i = Wt(s);
				let {s0: a, s1: c, s2: l, s3: f} = vr(e, i[0], i[1], i[2], i[3]);
				const u = Wt(r),
					g = Wt(n);
				for (let t = 0; t + 4 <= u.length; t += 4) {
					(g[t + 0] = u[t + 0] ^ a), (g[t + 1] = u[t + 1] ^ c), (g[t + 2] = u[t + 2] ^ l), (g[t + 3] = u[t + 3] ^ f);
					let r = 1;
					for (let e = s.length - 1; e >= 0; e--) (r = (r + (255 & s[e])) | 0), (s[e] = 255 & r), (r >>>= 8);
					({s0: a, s1: c, s2: l, s3: f} = vr(e, i[0], i[1], i[2], i[3]));
				}
				const h = cr * Math.floor(u.length / 4);
				if (h < o) {
					const e = new Uint32Array([a, c, l, f]),
						t = Kt(e);
					for (let e = h, s = 0; e < o; e++, s++) n[e] = r[e] ^ t[s];
				}
				return n;
			})(o, s, r, n);
		return o.fill(0), s.fill(0), i;
	}
	return Vt(e), Vt(t, cr), {encrypt: (e, t) => r(e, t), decrypt: (e, t) => r(e, t)};
}),
	Jt({blockSize: 16}, function (e, t = {}) {
		Vt(e);
		const r = !t.disablePadding;
		return {
			encrypt: (t, n) => {
				Vt(t);
				const {b: o, o: s, out: i} = Sr(t, r, n),
					a = Ar(e);
				let c = 0;
				for (; c + 4 <= o.length; ) {
					const {s0: e, s1: t, s2: r, s3: n} = vr(a, o[c + 0], o[c + 1], o[c + 2], o[c + 3]);
					(s[c++] = e), (s[c++] = t), (s[c++] = r), (s[c++] = n);
				}
				if (r) {
					const e = $r(t.subarray(4 * c)),
						{s0: r, s1: n, s2: o, s3: i} = vr(a, e[0], e[1], e[2], e[3]);
					(s[c++] = r), (s[c++] = n), (s[c++] = o), (s[c++] = i);
				}
				return a.fill(0), i;
			},
			decrypt: (t, n) => {
				Ir(t);
				const o = br(e),
					s = kr(t.length, n),
					i = Wt(t),
					a = Wt(s);
				for (let e = 0; e + 4 <= i.length; ) {
					const {s0: t, s1: r, s2: n, s3: s} = Br(o, i[e + 0], i[e + 1], i[e + 2], i[e + 3]);
					(a[e++] = t), (a[e++] = r), (a[e++] = n), (a[e++] = s);
				}
				return o.fill(0), Lr(s, r);
			}
		};
	});
const Tr = Jt({blockSize: 16, nonceLength: 16}, function (e, t, r = {}) {
	Vt(e), Vt(t, 16);
	const n = !r.disablePadding;
	return {
		encrypt: (r, o) => {
			const s = Ar(e),
				{b: i, o: a, out: c} = Sr(r, n, o),
				l = Wt(t);
			let f = l[0],
				u = l[1],
				g = l[2],
				h = l[3],
				d = 0;
			for (; d + 4 <= i.length; )
				(f ^= i[d + 0]),
					(u ^= i[d + 1]),
					(g ^= i[d + 2]),
					(h ^= i[d + 3]),
					({s0: f, s1: u, s2: g, s3: h} = vr(s, f, u, g, h)),
					(a[d++] = f),
					(a[d++] = u),
					(a[d++] = g),
					(a[d++] = h);
			if (n) {
				const e = $r(r.subarray(4 * d));
				(f ^= e[0]),
					(u ^= e[1]),
					(g ^= e[2]),
					(h ^= e[3]),
					({s0: f, s1: u, s2: g, s3: h} = vr(s, f, u, g, h)),
					(a[d++] = f),
					(a[d++] = u),
					(a[d++] = g),
					(a[d++] = h);
			}
			return s.fill(0), c;
		},
		decrypt: (r, o) => {
			Ir(r);
			const s = br(e),
				i = Wt(t),
				a = kr(r.length, o),
				c = Wt(r),
				l = Wt(a);
			let f = i[0],
				u = i[1],
				g = i[2],
				h = i[3];
			for (let e = 0; e + 4 <= c.length; ) {
				const t = f,
					r = u,
					n = g,
					o = h;
				(f = c[e + 0]), (u = c[e + 1]), (g = c[e + 2]), (h = c[e + 3]);
				const {s0: i, s1: a, s2: d, s3: p} = Br(s, f, u, g, h);
				(l[e++] = i ^ t), (l[e++] = a ^ r), (l[e++] = d ^ n), (l[e++] = p ^ o);
			}
			return s.fill(0), Lr(a, n);
		}
	};
});
function _r(e, t, r, n, o) {
	const s = e.create(r, n.length + (o?.length || 0));
	o && s.update(o), s.update(n);
	const i = new Uint8Array(16),
		a = Zt(i);
	return o && Qt(a, 0, BigInt(8 * o.length), t), Qt(a, 8, BigInt(8 * n.length), t), s.update(i), s.digest();
}
Jt({blockSize: 16, nonceLength: 16}, function (e, t) {
	function r(r, n, o) {
		const s = Ar(e),
			i = r.length;
		o = kr(i, o);
		const a = Wt(r),
			c = Wt(o),
			l = n ? c : a,
			f = Wt(t);
		let u = f[0],
			g = f[1],
			h = f[2],
			d = f[3];
		for (let e = 0; e + 4 <= a.length; ) {
			const {s0: t, s1: r, s2: n, s3: o} = vr(s, u, g, h, d);
			(c[e + 0] = a[e + 0] ^ t),
				(c[e + 1] = a[e + 1] ^ r),
				(c[e + 2] = a[e + 2] ^ n),
				(c[e + 3] = a[e + 3] ^ o),
				(u = l[e++]),
				(g = l[e++]),
				(h = l[e++]),
				(d = l[e++]);
		}
		const p = cr * Math.floor(a.length / 4);
		if (p < i) {
			({s0: u, s1: g, s2: h, s3: d} = vr(s, u, g, h, d));
			const e = Kt(new Uint32Array([u, g, h, d]));
			for (let t = p, n = 0; t < i; t++, n++) o[t] = r[t] ^ e[n];
			e.fill(0);
		}
		return s.fill(0), o;
	}
	return Vt(e), Vt(t, 16), {encrypt: (e, t) => r(e, !0, t), decrypt: (e, t) => r(e, !1, t)};
}),
	Jt({blockSize: 16, nonceLength: 12, tagLength: 16}, function (e, t, r) {
		if ((Vt(t), 0 === t.length)) throw new Error('aes/gcm: empty nonce');
		function n(e, t, n) {
			const o = _r(ir, !1, e, n, r);
			for (let e = 0; e < t.length; e++) o[e] ^= t[e];
			return o;
		}
		function o() {
			const r = Ar(e),
				n = lr.slice(),
				o = lr.slice();
			if ((Ur(r, !1, o, o, n), 12 === t.length)) o.set(t);
			else {
				const e = lr.slice();
				Qt(Zt(e), 8, BigInt(8 * t.length), !1), ir.create(n).update(t).update(e).digestInto(o);
			}
			return {xk: r, authKey: n, counter: o, tagMask: Ur(r, !1, o, lr)};
		}
		return {
			encrypt: (e) => {
				Vt(e);
				const {xk: t, authKey: r, counter: s, tagMask: i} = o(),
					a = new Uint8Array(e.length + 16);
				Ur(t, !1, s, e, a);
				const c = n(r, i, a.subarray(0, a.length - 16));
				return a.set(c, e.length), t.fill(0), a;
			},
			decrypt: (e) => {
				if ((Vt(e), e.length < 16)) throw new Error('aes/gcm: ciphertext less than tagLen (16)');
				const {xk: t, authKey: r, counter: s, tagMask: i} = o(),
					a = e.subarray(0, -16),
					c = e.subarray(-16);
				if (!Yt(n(r, i, a), c)) throw new Error('aes/gcm: invalid ghash tag');
				const l = Ur(t, !1, s, a);
				return r.fill(0), i.fill(0), t.fill(0), l;
			}
		};
	});
const Or = (e, t, r) => (n) => {
	if (!Number.isSafeInteger(n) || t > n || n > r) throw new Error(`${e}: invalid value=${n}, must be [${t}..${r}]`);
};
Jt({blockSize: 16, nonceLength: 12, tagLength: 16}, function (e, t, r) {
	const n = Or('AAD', 0, 2 ** 36),
		o = Or('plaintext', 0, 2 ** 36),
		s = Or('nonce', 12, 12),
		i = Or('ciphertext', 16, 2 ** 36 + 16);
	function a() {
		const r = e.length;
		if (16 !== r && 24 !== r && 32 !== r) throw new Error(`key length must be 16, 24 or 32 bytes, got: ${r} bytes`);
		const n = Ar(e),
			o = new Uint8Array(r),
			s = new Uint8Array(16),
			i = Wt(t);
		let a = 0,
			c = i[0],
			l = i[1],
			f = i[2],
			u = 0;
		for (const e of [s, o].map(Wt)) {
			const t = Wt(e);
			for (let e = 0; e < t.length; e += 2) {
				const {s0: r, s1: o} = vr(n, a, c, l, f);
				(t[e + 0] = r), (t[e + 1] = o), (a = ++u);
			}
		}
		return n.fill(0), {authKey: s, encKey: Ar(o)};
	}
	function c(e, n, o) {
		const s = _r(ar, !0, n, o, r);
		for (let e = 0; e < 12; e++) s[e] ^= t[e];
		s[15] &= 127;
		const i = Wt(s);
		let a = i[0],
			c = i[1],
			l = i[2],
			f = i[3];
		return ({s0: a, s1: c, s2: l, s3: f} = vr(e, a, c, l, f)), (i[0] = a), (i[1] = c), (i[2] = l), (i[3] = f), s;
	}
	function l(e, t, r) {
		let n = t.slice();
		return (n[15] |= 128), Ur(e, !0, n, r);
	}
	return (
		Vt(t),
		s(t.length),
		r && (Vt(r), n(r.length)),
		{
			encrypt: (e) => {
				Vt(e), o(e.length);
				const {encKey: t, authKey: r} = a(),
					n = c(t, r, e),
					s = new Uint8Array(e.length + 16);
				return s.set(n, e.length), s.set(l(t, n, e)), t.fill(0), r.fill(0), s;
			},
			decrypt: (e) => {
				Vt(e), i(e.length);
				const t = e.subarray(-16),
					{encKey: r, authKey: n} = a(),
					o = l(r, t, e.subarray(0, -16)),
					s = c(r, n, o);
				if ((r.fill(0), n.fill(0), !Yt(t, s))) throw new Error('invalid polyval tag');
				return o;
			}
		}
	);
});
var Rr = new TextDecoder('utf-8'),
	Pr = new TextEncoder();
function Nr(e) {
	return e.slice(1, 33);
}
s().runtime.onInstalled.addListener(() => {
	console.log('Service Worker Loaded (TypeScript)!!!!'), console.log('Hello from TypeScript utils!');
});
let Cr,
	qr = () => {};
s().runtime.onMessage.addListener(async (e, t) => {
	if ((console.log(`Received ${e}`), e.openSignUp))
		console.log(`Received4 ${e}`),
			await (async function () {
				const {top: e, left: t} = await (async function () {
					let e = 0,
						t = 0;
					try {
						const r = await s().windows.getLastFocused();
						r && void 0 !== r.top && void 0 !== r.left && void 0 !== r.width && void 0 !== r.height
							? ((t = Math.round(r.top + (r.height - 420) / 2)), (e = Math.round(r.left + (r.width - 440) / 2)))
							: console.error('Last focused window properties are undefined.');
					} catch (e) {
						console.error('Error getting window position:', e);
					}
					return {top: t, left: e};
				})();
				s().windows.create({
					url: `${s().runtime.getURL('signup.html')}`,
					type: 'popup',
					width: 440,
					height: 420,
					top: e,
					left: t
				});
			})(),
			s().windows.remove(t.tab.windowId);
	else {
		let {prompt: r} = e;
		if (!r)
			return (
				console.log(`Received2 ${e}`),
				(async function ({type: e, params: t, host: r}) {
					if (!i[e]) {
						console.log('HHHHssssH' + e + ':' + t),
							(qr = await Hr.acquire()),
							console.log('HHHHssssssssssH' + e + ':' + t);
						const n = await (async function (e, t) {
							console.log(`Performing ${e}: ${JSON.stringify(t, null, 2)}`);
							let r = await s().storage.local.get('private_key');
							if ((console.log('sk:' + JSON.stringify(r)), !r || !r.private_key))
								return {error: {message: 'no private key found'}};
							let n = r.private_key;
							try {
								switch (e) {
									case 'getPublicKey':
										return Ft(n);
									case 'signEvent': {
										const e = jt(t.event, n);
										return Nt(e) ? e : {error: {message: 'invalid event'}};
									}
									case 'nip04.encrypt': {
										let {peer: e, plaintext: r} = t;
										return (async function (e, t, r) {
											const n = e instanceof Uint8Array ? d(e) : e,
												o = Nr(at.getSharedSecret(n, '02' + t));
											let s = Uint8Array.from(
													(function (e = 32) {
														if (l && 'function' == typeof l.getRandomValues)
															return l.getRandomValues(new Uint8Array(e));
														throw new Error('crypto.getRandomValues must be defined');
													})(16)
												),
												i = Pr.encode(r),
												a = Tr(o, s).encrypt(i);
											return `${$.encode(new Uint8Array(a))}?iv=${$.encode(new Uint8Array(s.buffer))}`;
										})(n, e, r);
									}
									case 'nip04.decrypt': {
										let {peer: e, ciphertext: r} = t;
										return (async function (e, t, r) {
											const n = e instanceof Uint8Array ? d(e) : e;
											let [o, s] = r.split('?iv='),
												i = Nr(at.getSharedSecret(n, '02' + t)),
												a = $.decode(s),
												c = $.decode(o),
												l = Tr(i, a).decrypt(c);
											return Rr.decode(l);
										})(n, e, r);
									}
								}
							} catch (e) {
								return {error: {message: e.message, stack: e.stack}};
							}
						})(e, t);
						let o = await (async function (e, t, r) {
							let {policies: n} = await s().storage.local.get('policies'),
								o = [!0, !1];
							for (let s = 0; s < o.length; s++) {
								let i = o[s],
									{conditions: c} = n?.[e]?.[i]?.[t] || {};
								if (c) {
									if ('signEvent' === t) {
										if (a(c, r)) return i;
										continue;
									}
									return i;
								}
							}
						})(r, e, 'signEvent' === e ? t.event : void 0);
						if (!0 === o) qr(), c(r, o, e, t).then();
						else {
							if (!1 === o) return qr(), c(r, o, e, t).then(), {error: {message: 'denied'}};
							try {
								let o = Math.random().toString().slice(4),
									s = new URLSearchParams({host: r, id: o, params: JSON.stringify(t), type: e});
								'string' == typeof n && s.set('result', n);
								let i = await (async function () {
									return !0;
								})(s.toString());
								if ((qr(), !i)) return {error: {message: 'denied'}};
							} catch (e) {
								return qr(), {error: {message: e.message, stack: e.stack}};
							}
						}
						return n;
					}
					if ((console.log('HHHHH' + e + ':' + t), 'replaceURL' === e)) {
						let {protocol_handler: e} = await s().storage.local.get(['protocol_handler']);
						if (!e) return !1;
						let {url: r} = t,
							n = r.split('nostr:')[1],
							{type: o, data: i} = (function (e) {
								let {prefix: t, words: r} = C.decode(e, 5e3),
									n = new Uint8Array(C.fromWords(r));
								switch (t) {
									case 'nprofile': {
										let e = H(n);
										if (!e[0]?.[0]) throw new Error('missing TLV 0 for nprofile');
										if (32 !== e[0][0].length) throw new Error('TLV 0 should be 32 bytes');
										return {
											type: 'nprofile',
											data: {pubkey: d(e[0][0]), relays: e[1] ? e[1].map((e) => q.decode(e)) : []}
										};
									}
									case 'nevent': {
										let e = H(n);
										if (!e[0]?.[0]) throw new Error('missing TLV 0 for nevent');
										if (32 !== e[0][0].length) throw new Error('TLV 0 should be 32 bytes');
										if (e[2] && 32 !== e[2][0].length) throw new Error('TLV 2 should be 32 bytes');
										if (e[3] && 4 !== e[3][0].length) throw new Error('TLV 3 should be 4 bytes');
										return {
											type: 'nevent',
											data: {
												id: d(e[0][0]),
												relays: e[1] ? e[1].map((e) => q.decode(e)) : [],
												author: e[2]?.[0] ? d(e[2][0]) : void 0,
												kind: e[3]?.[0] ? parseInt(d(e[3][0]), 16) : void 0
											}
										};
									}
									case 'naddr': {
										let e = H(n);
										if (!e[0]?.[0]) throw new Error('missing TLV 0 for naddr');
										if (!e[2]?.[0]) throw new Error('missing TLV 2 for naddr');
										if (32 !== e[2][0].length) throw new Error('TLV 2 should be 32 bytes');
										if (!e[3]?.[0]) throw new Error('missing TLV 3 for naddr');
										if (4 !== e[3][0].length) throw new Error('TLV 3 should be 4 bytes');
										return {
											type: 'naddr',
											data: {
												identifier: q.decode(e[0][0]),
												pubkey: d(e[2][0]),
												kind: parseInt(d(e[3][0]), 16),
												relays: e[1] ? e[1].map((e) => q.decode(e)) : []
											}
										};
									}
									case 'nsec':
										return {type: t, data: n};
									case 'npub':
									case 'note':
										return {type: t, data: d(n)};
									default:
										throw new Error(`unknown prefix ${t}`);
								}
							})(n);
						const a = 'nprofile' === o ? i : void 0;
						let c = {
								raw: n,
								hrp: o,
								hex: 'npub' === o || 'note' === o ? i : 'nprofile' === o ? i.pubkey : 'nevent' === o ? i.id : null,
								p_or_e: {npub: 'p', note: 'e', nprofile: 'p', nevent: 'e', naddr: 'p', nsec: 'p'}[o],
								u_or_n: {npub: 'u', note: 'n', nprofile: 'u', nevent: 'n', naddr: 'n', nsec: 'n'}[o],
								relay0: 'nprofile' === o ? a?.relays?.at(0) : null,
								relay1: 'nprofile' === o ? a?.relays?.at(1) : null,
								relay2: 'nprofile' === o ? a?.relays?.at(2) : null
							},
							l = e;
						return (
							Object.entries(c).forEach(([e, t]) => {
								l = l.replace(new RegExp(`{ *${e} *}`, 'g'), t);
							}),
							l
						);
					}
				})(e)
			);
		console.log(`Received3 ${e}`),
			await (async function ({host: e, type: t, accept: r, conditions: n}, o) {
				Cr?.resolve?.(r),
					n &&
						(await (async function (e, t, r, n) {
							let {policies: o = {}} = await s().storage.local.get('policies');
							if (0 === Object.keys(n).length) n = {};
							else {
								let s = o[e]?.[r]?.[t]?.conditions;
								s &&
									s.kinds &&
									n.kinds &&
									Object.keys(s.kinds).forEach((e) => {
										n.kinds[e] = !0;
									});
							}
							let i = !r,
								a = o?.[e]?.[i]?.[t];
							a && JSON.stringify(a.conditions) === JSON.stringify(n) && delete o[e][i][t],
								(o[e] = o[e] || {}),
								(o[e][r] = o[e][r] || {}),
								(o[e][r][t] = {conditions: n, created_at: Math.round(Date.now() / 1e3)}),
								s().storage.local.set({policies: o});
						})(e, t, r, n)),
					(Cr = null),
					qr(),
					o && s().windows.remove(o.tab.windowId);
			})(e, t);
	}
});
let Hr = new (class {
	constructor(e) {
		this._semaphore = new j(1, e);
	}
	acquire() {
		return (
			(e = this),
			(t = arguments),
			(n = function* (e = 0) {
				const [, t] = yield this._semaphore.acquire(1, e);
				return t;
			}),
			new ((r = void 0) || (r = Promise))(function (o, s) {
				function i(e) {
					try {
						c(n.next(e));
					} catch (e) {
						s(e);
					}
				}
				function a(e) {
					try {
						c(n.throw(e));
					} catch (e) {
						s(e);
					}
				}
				function c(e) {
					var t;
					e.done
						? o(e.value)
						: ((t = e.value),
							t instanceof r
								? t
								: new r(function (e) {
										e(t);
									})).then(i, a);
				}
				c((n = n.apply(e, t || [])).next());
			})
		);
		var e, t, r, n;
	}
	runExclusive(e, t = 0) {
		return this._semaphore.runExclusive(() => e(), 1, t);
	}
	isLocked() {
		return this._semaphore.isLocked();
	}
	waitForUnlock(e = 0) {
		return this._semaphore.waitForUnlock(1, e);
	}
	release() {
		this._semaphore.isLocked() && this._semaphore.release();
	}
	cancel() {
		return this._semaphore.cancel();
	}
})();
