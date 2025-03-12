(() => {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __markAsModule = (target) => __defProp(target, '__esModule', {value: true});
	var __commonJS = (cb, mod2) =>
		function __require() {
			return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = {exports: {}}).exports, mod2), mod2.exports;
		};
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {get: all[name], enumerable: true});
	};
	var __reExport = (target, module, copyDefault, desc) => {
		if ((module && typeof module === 'object') || typeof module === 'function') {
			for (let key of __getOwnPropNames(module))
				if (!__hasOwnProp.call(target, key) && (copyDefault || key !== 'default'))
					__defProp(target, key, {
						get: () => module[key],
						enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
					});
		}
		return target;
	};
	var __toESM = (module, isNodeMode) => {
		return __reExport(
			__markAsModule(
				__defProp(
					module != null ? __create(__getProtoOf(module)) : {},
					'default',
					!isNodeMode && module && module.__esModule
						? {get: () => module.default, enumerable: true}
						: {value: module, enumerable: true}
				)
			),
			module
		);
	};

	// node_modules/webextension-polyfill/dist/browser-polyfill.js
	var require_browser_polyfill = __commonJS({
		'node_modules/webextension-polyfill/dist/browser-polyfill.js'(exports, module) {
			(function (global, factory) {
				if (typeof define === 'function' && define.amd) {
					define('webextension-polyfill', ['module'], factory);
				} else if (typeof exports !== 'undefined') {
					factory(module);
				} else {
					var mod2 = {
						exports: {}
					};
					factory(mod2);
					global.browser = mod2.exports;
				}
			})(
				typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : exports,
				function (module2) {
					'use strict';
					if (typeof browser === 'undefined' || Object.getPrototypeOf(browser) !== Object.prototype) {
						const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE =
							'The message port closed before a response was received.';
						const SEND_RESPONSE_DEPRECATION_WARNING =
							'Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)';
						const wrapAPIs = (extensionAPIs) => {
							const apiMetadata = {
								alarms: {
									clear: {
										minArgs: 0,
										maxArgs: 1
									},
									clearAll: {
										minArgs: 0,
										maxArgs: 0
									},
									get: {
										minArgs: 0,
										maxArgs: 1
									},
									getAll: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								bookmarks: {
									create: {
										minArgs: 1,
										maxArgs: 1
									},
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									getChildren: {
										minArgs: 1,
										maxArgs: 1
									},
									getRecent: {
										minArgs: 1,
										maxArgs: 1
									},
									getSubTree: {
										minArgs: 1,
										maxArgs: 1
									},
									getTree: {
										minArgs: 0,
										maxArgs: 0
									},
									move: {
										minArgs: 2,
										maxArgs: 2
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									removeTree: {
										minArgs: 1,
										maxArgs: 1
									},
									search: {
										minArgs: 1,
										maxArgs: 1
									},
									update: {
										minArgs: 2,
										maxArgs: 2
									}
								},
								browserAction: {
									disable: {
										minArgs: 0,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									enable: {
										minArgs: 0,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									getBadgeBackgroundColor: {
										minArgs: 1,
										maxArgs: 1
									},
									getBadgeText: {
										minArgs: 1,
										maxArgs: 1
									},
									getPopup: {
										minArgs: 1,
										maxArgs: 1
									},
									getTitle: {
										minArgs: 1,
										maxArgs: 1
									},
									openPopup: {
										minArgs: 0,
										maxArgs: 0
									},
									setBadgeBackgroundColor: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									setBadgeText: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									setIcon: {
										minArgs: 1,
										maxArgs: 1
									},
									setPopup: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									setTitle: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									}
								},
								browsingData: {
									remove: {
										minArgs: 2,
										maxArgs: 2
									},
									removeCache: {
										minArgs: 1,
										maxArgs: 1
									},
									removeCookies: {
										minArgs: 1,
										maxArgs: 1
									},
									removeDownloads: {
										minArgs: 1,
										maxArgs: 1
									},
									removeFormData: {
										minArgs: 1,
										maxArgs: 1
									},
									removeHistory: {
										minArgs: 1,
										maxArgs: 1
									},
									removeLocalStorage: {
										minArgs: 1,
										maxArgs: 1
									},
									removePasswords: {
										minArgs: 1,
										maxArgs: 1
									},
									removePluginData: {
										minArgs: 1,
										maxArgs: 1
									},
									settings: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								commands: {
									getAll: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								contextMenus: {
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									removeAll: {
										minArgs: 0,
										maxArgs: 0
									},
									update: {
										minArgs: 2,
										maxArgs: 2
									}
								},
								cookies: {
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									getAll: {
										minArgs: 1,
										maxArgs: 1
									},
									getAllCookieStores: {
										minArgs: 0,
										maxArgs: 0
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									set: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								devtools: {
									inspectedWindow: {
										eval: {
											minArgs: 1,
											maxArgs: 2,
											singleCallbackArg: false
										}
									},
									panels: {
										create: {
											minArgs: 3,
											maxArgs: 3,
											singleCallbackArg: true
										},
										elements: {
											createSidebarPane: {
												minArgs: 1,
												maxArgs: 1
											}
										}
									}
								},
								downloads: {
									cancel: {
										minArgs: 1,
										maxArgs: 1
									},
									download: {
										minArgs: 1,
										maxArgs: 1
									},
									erase: {
										minArgs: 1,
										maxArgs: 1
									},
									getFileIcon: {
										minArgs: 1,
										maxArgs: 2
									},
									open: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									pause: {
										minArgs: 1,
										maxArgs: 1
									},
									removeFile: {
										minArgs: 1,
										maxArgs: 1
									},
									resume: {
										minArgs: 1,
										maxArgs: 1
									},
									search: {
										minArgs: 1,
										maxArgs: 1
									},
									show: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									}
								},
								extension: {
									isAllowedFileSchemeAccess: {
										minArgs: 0,
										maxArgs: 0
									},
									isAllowedIncognitoAccess: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								history: {
									addUrl: {
										minArgs: 1,
										maxArgs: 1
									},
									deleteAll: {
										minArgs: 0,
										maxArgs: 0
									},
									deleteRange: {
										minArgs: 1,
										maxArgs: 1
									},
									deleteUrl: {
										minArgs: 1,
										maxArgs: 1
									},
									getVisits: {
										minArgs: 1,
										maxArgs: 1
									},
									search: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								i18n: {
									detectLanguage: {
										minArgs: 1,
										maxArgs: 1
									},
									getAcceptLanguages: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								identity: {
									launchWebAuthFlow: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								idle: {
									queryState: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								management: {
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									getAll: {
										minArgs: 0,
										maxArgs: 0
									},
									getSelf: {
										minArgs: 0,
										maxArgs: 0
									},
									setEnabled: {
										minArgs: 2,
										maxArgs: 2
									},
									uninstallSelf: {
										minArgs: 0,
										maxArgs: 1
									}
								},
								notifications: {
									clear: {
										minArgs: 1,
										maxArgs: 1
									},
									create: {
										minArgs: 1,
										maxArgs: 2
									},
									getAll: {
										minArgs: 0,
										maxArgs: 0
									},
									getPermissionLevel: {
										minArgs: 0,
										maxArgs: 0
									},
									update: {
										minArgs: 2,
										maxArgs: 2
									}
								},
								pageAction: {
									getPopup: {
										minArgs: 1,
										maxArgs: 1
									},
									getTitle: {
										minArgs: 1,
										maxArgs: 1
									},
									hide: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									setIcon: {
										minArgs: 1,
										maxArgs: 1
									},
									setPopup: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									setTitle: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									},
									show: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: true
									}
								},
								permissions: {
									contains: {
										minArgs: 1,
										maxArgs: 1
									},
									getAll: {
										minArgs: 0,
										maxArgs: 0
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									request: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								runtime: {
									getBackgroundPage: {
										minArgs: 0,
										maxArgs: 0
									},
									getPlatformInfo: {
										minArgs: 0,
										maxArgs: 0
									},
									openOptionsPage: {
										minArgs: 0,
										maxArgs: 0
									},
									requestUpdateCheck: {
										minArgs: 0,
										maxArgs: 0
									},
									sendMessage: {
										minArgs: 1,
										maxArgs: 3
									},
									sendNativeMessage: {
										minArgs: 2,
										maxArgs: 2
									},
									setUninstallURL: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								sessions: {
									getDevices: {
										minArgs: 0,
										maxArgs: 1
									},
									getRecentlyClosed: {
										minArgs: 0,
										maxArgs: 1
									},
									restore: {
										minArgs: 0,
										maxArgs: 1
									}
								},
								storage: {
									local: {
										clear: {
											minArgs: 0,
											maxArgs: 0
										},
										get: {
											minArgs: 0,
											maxArgs: 1
										},
										getBytesInUse: {
											minArgs: 0,
											maxArgs: 1
										},
										remove: {
											minArgs: 1,
											maxArgs: 1
										},
										set: {
											minArgs: 1,
											maxArgs: 1
										}
									},
									managed: {
										get: {
											minArgs: 0,
											maxArgs: 1
										},
										getBytesInUse: {
											minArgs: 0,
											maxArgs: 1
										}
									},
									sync: {
										clear: {
											minArgs: 0,
											maxArgs: 0
										},
										get: {
											minArgs: 0,
											maxArgs: 1
										},
										getBytesInUse: {
											minArgs: 0,
											maxArgs: 1
										},
										remove: {
											minArgs: 1,
											maxArgs: 1
										},
										set: {
											minArgs: 1,
											maxArgs: 1
										}
									}
								},
								tabs: {
									captureVisibleTab: {
										minArgs: 0,
										maxArgs: 2
									},
									create: {
										minArgs: 1,
										maxArgs: 1
									},
									detectLanguage: {
										minArgs: 0,
										maxArgs: 1
									},
									discard: {
										minArgs: 0,
										maxArgs: 1
									},
									duplicate: {
										minArgs: 1,
										maxArgs: 1
									},
									executeScript: {
										minArgs: 1,
										maxArgs: 2
									},
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									getCurrent: {
										minArgs: 0,
										maxArgs: 0
									},
									getZoom: {
										minArgs: 0,
										maxArgs: 1
									},
									getZoomSettings: {
										minArgs: 0,
										maxArgs: 1
									},
									goBack: {
										minArgs: 0,
										maxArgs: 1
									},
									goForward: {
										minArgs: 0,
										maxArgs: 1
									},
									highlight: {
										minArgs: 1,
										maxArgs: 1
									},
									insertCSS: {
										minArgs: 1,
										maxArgs: 2
									},
									move: {
										minArgs: 2,
										maxArgs: 2
									},
									query: {
										minArgs: 1,
										maxArgs: 1
									},
									reload: {
										minArgs: 0,
										maxArgs: 2
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									removeCSS: {
										minArgs: 1,
										maxArgs: 2
									},
									sendMessage: {
										minArgs: 2,
										maxArgs: 3
									},
									setZoom: {
										minArgs: 1,
										maxArgs: 2
									},
									setZoomSettings: {
										minArgs: 1,
										maxArgs: 2
									},
									update: {
										minArgs: 1,
										maxArgs: 2
									}
								},
								topSites: {
									get: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								webNavigation: {
									getAllFrames: {
										minArgs: 1,
										maxArgs: 1
									},
									getFrame: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								webRequest: {
									handlerBehaviorChanged: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								windows: {
									create: {
										minArgs: 0,
										maxArgs: 1
									},
									get: {
										minArgs: 1,
										maxArgs: 2
									},
									getAll: {
										minArgs: 0,
										maxArgs: 1
									},
									getCurrent: {
										minArgs: 0,
										maxArgs: 1
									},
									getLastFocused: {
										minArgs: 0,
										maxArgs: 1
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									update: {
										minArgs: 2,
										maxArgs: 2
									}
								}
							};
							if (Object.keys(apiMetadata).length === 0) {
								throw new Error('api-metadata.json has not been included in browser-polyfill');
							}
							class DefaultWeakMap extends WeakMap {
								constructor(createItem, items = void 0) {
									super(items);
									this.createItem = createItem;
								}
								get(key) {
									if (!this.has(key)) {
										this.set(key, this.createItem(key));
									}
									return super.get(key);
								}
							}
							const isThenable = (value) => {
								return value && typeof value === 'object' && typeof value.then === 'function';
							};
							const makeCallback = (promise, metadata) => {
								return (...callbackArgs) => {
									if (extensionAPIs.runtime.lastError) {
										promise.reject(new Error(extensionAPIs.runtime.lastError.message));
									} else if (
										metadata.singleCallbackArg ||
										(callbackArgs.length <= 1 && metadata.singleCallbackArg !== false)
									) {
										promise.resolve(callbackArgs[0]);
									} else {
										promise.resolve(callbackArgs);
									}
								};
							};
							const pluralizeArguments = (numArgs) => (numArgs == 1 ? 'argument' : 'arguments');
							const wrapAsyncFunction = (name, metadata) => {
								return function asyncFunctionWrapper(target, ...args) {
									if (args.length < metadata.minArgs) {
										throw new Error(
											`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`
										);
									}
									if (args.length > metadata.maxArgs) {
										throw new Error(
											`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`
										);
									}
									return new Promise((resolve, reject) => {
										if (metadata.fallbackToNoCallback) {
											try {
												target[name](
													...args,
													makeCallback(
														{
															resolve,
															reject
														},
														metadata
													)
												);
											} catch (cbError) {
												console.warn(
													`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
													cbError
												);
												target[name](...args);
												metadata.fallbackToNoCallback = false;
												metadata.noCallback = true;
												resolve();
											}
										} else if (metadata.noCallback) {
											target[name](...args);
											resolve();
										} else {
											target[name](
												...args,
												makeCallback(
													{
														resolve,
														reject
													},
													metadata
												)
											);
										}
									});
								};
							};
							const wrapMethod = (target, method, wrapper) => {
								return new Proxy(method, {
									apply(targetMethod, thisObj, args) {
										return wrapper.call(thisObj, target, ...args);
									}
								});
							};
							let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
							const wrapObject = (target, wrappers = {}, metadata = {}) => {
								let cache = /* @__PURE__ */ Object.create(null);
								let handlers = {
									has(proxyTarget2, prop) {
										return prop in target || prop in cache;
									},
									get(proxyTarget2, prop, receiver) {
										if (prop in cache) {
											return cache[prop];
										}
										if (!(prop in target)) {
											return void 0;
										}
										let value = target[prop];
										if (typeof value === 'function') {
											if (typeof wrappers[prop] === 'function') {
												value = wrapMethod(target, target[prop], wrappers[prop]);
											} else if (hasOwnProperty(metadata, prop)) {
												let wrapper = wrapAsyncFunction(prop, metadata[prop]);
												value = wrapMethod(target, target[prop], wrapper);
											} else {
												value = value.bind(target);
											}
										} else if (
											typeof value === 'object' &&
											value !== null &&
											(hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))
										) {
											value = wrapObject(value, wrappers[prop], metadata[prop]);
										} else if (hasOwnProperty(metadata, '*')) {
											value = wrapObject(value, wrappers[prop], metadata['*']);
										} else {
											Object.defineProperty(cache, prop, {
												configurable: true,
												enumerable: true,
												get() {
													return target[prop];
												},
												set(value2) {
													target[prop] = value2;
												}
											});
											return value;
										}
										cache[prop] = value;
										return value;
									},
									set(proxyTarget2, prop, value, receiver) {
										if (prop in cache) {
											cache[prop] = value;
										} else {
											target[prop] = value;
										}
										return true;
									},
									defineProperty(proxyTarget2, prop, desc) {
										return Reflect.defineProperty(cache, prop, desc);
									},
									deleteProperty(proxyTarget2, prop) {
										return Reflect.deleteProperty(cache, prop);
									}
								};
								let proxyTarget = Object.create(target);
								return new Proxy(proxyTarget, handlers);
							};
							const wrapEvent = (wrapperMap) => ({
								addListener(target, listener, ...args) {
									target.addListener(wrapperMap.get(listener), ...args);
								},
								hasListener(target, listener) {
									return target.hasListener(wrapperMap.get(listener));
								},
								removeListener(target, listener) {
									target.removeListener(wrapperMap.get(listener));
								}
							});
							const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
								if (typeof listener !== 'function') {
									return listener;
								}
								return function onRequestFinished(req) {
									const wrappedReq = wrapObject(
										req,
										{},
										{
											getContent: {
												minArgs: 0,
												maxArgs: 0
											}
										}
									);
									listener(wrappedReq);
								};
							});
							let loggedSendResponseDeprecationWarning = false;
							const onMessageWrappers = new DefaultWeakMap((listener) => {
								if (typeof listener !== 'function') {
									return listener;
								}
								return function onMessage(message, sender, sendResponse) {
									let didCallSendResponse = false;
									let wrappedSendResponse;
									let sendResponsePromise = new Promise((resolve) => {
										wrappedSendResponse = function (response) {
											if (!loggedSendResponseDeprecationWarning) {
												console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
												loggedSendResponseDeprecationWarning = true;
											}
											didCallSendResponse = true;
											resolve(response);
										};
									});
									let result;
									try {
										result = listener(message, sender, wrappedSendResponse);
									} catch (err) {
										result = Promise.reject(err);
									}
									const isResultThenable = result !== true && isThenable(result);
									if (result !== true && !isResultThenable && !didCallSendResponse) {
										return false;
									}
									const sendPromisedResult = (promise) => {
										promise
											.then(
												(msg) => {
													sendResponse(msg);
												},
												(error) => {
													let message2;
													if (error && (error instanceof Error || typeof error.message === 'string')) {
														message2 = error.message;
													} else {
														message2 = 'An unexpected error occurred';
													}
													sendResponse({
														__mozWebExtensionPolyfillReject__: true,
														message: message2
													});
												}
											)
											.catch((err) => {
												console.error('Failed to send onMessage rejected reply', err);
											});
									};
									if (isResultThenable) {
										sendPromisedResult(result);
									} else {
										sendPromisedResult(sendResponsePromise);
									}
									return true;
								};
							});
							const wrappedSendMessageCallback = ({reject, resolve}, reply) => {
								if (extensionAPIs.runtime.lastError) {
									if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
										resolve();
									} else {
										reject(new Error(extensionAPIs.runtime.lastError.message));
									}
								} else if (reply && reply.__mozWebExtensionPolyfillReject__) {
									reject(new Error(reply.message));
								} else {
									resolve(reply);
								}
							};
							const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
								if (args.length < metadata.minArgs) {
									throw new Error(
										`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`
									);
								}
								if (args.length > metadata.maxArgs) {
									throw new Error(
										`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`
									);
								}
								return new Promise((resolve, reject) => {
									const wrappedCb = wrappedSendMessageCallback.bind(null, {
										resolve,
										reject
									});
									args.push(wrappedCb);
									apiNamespaceObj.sendMessage(...args);
								});
							};
							const staticWrappers = {
								devtools: {
									network: {
										onRequestFinished: wrapEvent(onRequestFinishedWrappers)
									}
								},
								runtime: {
									onMessage: wrapEvent(onMessageWrappers),
									onMessageExternal: wrapEvent(onMessageWrappers),
									sendMessage: wrappedSendMessage.bind(null, 'sendMessage', {
										minArgs: 1,
										maxArgs: 3
									})
								},
								tabs: {
									sendMessage: wrappedSendMessage.bind(null, 'sendMessage', {
										minArgs: 2,
										maxArgs: 3
									})
								}
							};
							const settingMetadata = {
								clear: {
									minArgs: 1,
									maxArgs: 1
								},
								get: {
									minArgs: 1,
									maxArgs: 1
								},
								set: {
									minArgs: 1,
									maxArgs: 1
								}
							};
							apiMetadata.privacy = {
								network: {
									'*': settingMetadata
								},
								services: {
									'*': settingMetadata
								},
								websites: {
									'*': settingMetadata
								}
							};
							return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
						};
						if (typeof chrome != 'object' || !chrome || !chrome.runtime || !chrome.runtime.id) {
							throw new Error('This script should only be loaded in a browser extension.');
						}
						module2.exports = wrapAPIs(chrome);
					} else {
						module2.exports = browser;
					}
				}
			);
		}
	});

	// node_modules/object-assign/index.js
	var require_object_assign = __commonJS({
		'node_modules/object-assign/index.js'(exports, module) {
			'use strict';
			var getOwnPropertySymbols = Object.getOwnPropertySymbols;
			var hasOwnProperty = Object.prototype.hasOwnProperty;
			var propIsEnumerable = Object.prototype.propertyIsEnumerable;
			function toObject(val) {
				if (val === null || val === void 0) {
					throw new TypeError('Object.assign cannot be called with null or undefined');
				}
				return Object(val);
			}
			function shouldUseNative() {
				try {
					if (!Object.assign) {
						return false;
					}
					var test1 = new String('abc');
					test1[5] = 'de';
					if (Object.getOwnPropertyNames(test1)[0] === '5') {
						return false;
					}
					var test2 = {};
					for (var i2 = 0; i2 < 10; i2++) {
						test2['_' + String.fromCharCode(i2)] = i2;
					}
					var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
						return test2[n];
					});
					if (order2.join('') !== '0123456789') {
						return false;
					}
					var test3 = {};
					'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
						test3[letter] = letter;
					});
					if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
						return false;
					}
					return true;
				} catch (err) {
					return false;
				}
			}
			module.exports = shouldUseNative()
				? Object.assign
				: function (target, source) {
						var from;
						var to = toObject(target);
						var symbols;
						for (var s = 1; s < arguments.length; s++) {
							from = Object(arguments[s]);
							for (var key in from) {
								if (hasOwnProperty.call(from, key)) {
									to[key] = from[key];
								}
							}
							if (getOwnPropertySymbols) {
								symbols = getOwnPropertySymbols(from);
								for (var i2 = 0; i2 < symbols.length; i2++) {
									if (propIsEnumerable.call(from, symbols[i2])) {
										to[symbols[i2]] = from[symbols[i2]];
									}
								}
							}
						}
						return to;
					};
		}
	});

	// node_modules/react/cjs/react.development.js
	var require_react_development = __commonJS({
		'node_modules/react/cjs/react.development.js'(exports) {
			'use strict';
			if (true) {
				(function () {
					'use strict';
					var _assign = require_object_assign();
					var ReactVersion = '17.0.2';
					var REACT_ELEMENT_TYPE = 60103;
					var REACT_PORTAL_TYPE = 60106;
					exports.Fragment = 60107;
					exports.StrictMode = 60108;
					exports.Profiler = 60114;
					var REACT_PROVIDER_TYPE = 60109;
					var REACT_CONTEXT_TYPE = 60110;
					var REACT_FORWARD_REF_TYPE = 60112;
					exports.Suspense = 60113;
					var REACT_SUSPENSE_LIST_TYPE = 60120;
					var REACT_MEMO_TYPE = 60115;
					var REACT_LAZY_TYPE = 60116;
					var REACT_BLOCK_TYPE = 60121;
					var REACT_SERVER_BLOCK_TYPE = 60122;
					var REACT_FUNDAMENTAL_TYPE = 60117;
					var REACT_SCOPE_TYPE = 60119;
					var REACT_OPAQUE_ID_TYPE = 60128;
					var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
					var REACT_OFFSCREEN_TYPE = 60130;
					var REACT_LEGACY_HIDDEN_TYPE = 60131;
					if (typeof Symbol === 'function' && Symbol.for) {
						var symbolFor = Symbol.for;
						REACT_ELEMENT_TYPE = symbolFor('react.element');
						REACT_PORTAL_TYPE = symbolFor('react.portal');
						exports.Fragment = symbolFor('react.fragment');
						exports.StrictMode = symbolFor('react.strict_mode');
						exports.Profiler = symbolFor('react.profiler');
						REACT_PROVIDER_TYPE = symbolFor('react.provider');
						REACT_CONTEXT_TYPE = symbolFor('react.context');
						REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
						exports.Suspense = symbolFor('react.suspense');
						REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
						REACT_MEMO_TYPE = symbolFor('react.memo');
						REACT_LAZY_TYPE = symbolFor('react.lazy');
						REACT_BLOCK_TYPE = symbolFor('react.block');
						REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
						REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
						REACT_SCOPE_TYPE = symbolFor('react.scope');
						REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
						REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
						REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
						REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
					}
					var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
					var FAUX_ITERATOR_SYMBOL = '@@iterator';
					function getIteratorFn(maybeIterable) {
						if (maybeIterable === null || typeof maybeIterable !== 'object') {
							return null;
						}
						var maybeIterator =
							(MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];
						if (typeof maybeIterator === 'function') {
							return maybeIterator;
						}
						return null;
					}
					var ReactCurrentDispatcher = {
						current: null
					};
					var ReactCurrentBatchConfig = {
						transition: 0
					};
					var ReactCurrentOwner = {
						current: null
					};
					var ReactDebugCurrentFrame = {};
					var currentExtraStackFrame = null;
					function setExtraStackFrame(stack) {
						{
							currentExtraStackFrame = stack;
						}
					}
					{
						ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
							{
								currentExtraStackFrame = stack;
							}
						};
						ReactDebugCurrentFrame.getCurrentStack = null;
						ReactDebugCurrentFrame.getStackAddendum = function () {
							var stack = '';
							if (currentExtraStackFrame) {
								stack += currentExtraStackFrame;
							}
							var impl = ReactDebugCurrentFrame.getCurrentStack;
							if (impl) {
								stack += impl() || '';
							}
							return stack;
						};
					}
					var IsSomeRendererActing = {
						current: false
					};
					var ReactSharedInternals = {
						ReactCurrentDispatcher,
						ReactCurrentBatchConfig,
						ReactCurrentOwner,
						IsSomeRendererActing,
						assign: _assign
					};
					{
						ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
					}
					function warn(format) {
						{
							for (
								var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
								_key < _len;
								_key++
							) {
								args[_key - 1] = arguments[_key];
							}
							printWarning('warn', format, args);
						}
					}
					function error(format) {
						{
							for (
								var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
								_key2 < _len2;
								_key2++
							) {
								args[_key2 - 1] = arguments[_key2];
							}
							printWarning('error', format, args);
						}
					}
					function printWarning(level, format, args) {
						{
							var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
							var stack = ReactDebugCurrentFrame2.getStackAddendum();
							if (stack !== '') {
								format += '%s';
								args = args.concat([stack]);
							}
							var argsWithFormat = args.map(function (item) {
								return '' + item;
							});
							argsWithFormat.unshift('Warning: ' + format);
							Function.prototype.apply.call(console[level], console, argsWithFormat);
						}
					}
					var didWarnStateUpdateForUnmountedComponent = {};
					function warnNoop(publicInstance, callerName) {
						{
							var _constructor = publicInstance.constructor;
							var componentName = (_constructor && (_constructor.displayName || _constructor.name)) || 'ReactClass';
							var warningKey = componentName + '.' + callerName;
							if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
								return;
							}
							error(
								"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
								callerName,
								componentName
							);
							didWarnStateUpdateForUnmountedComponent[warningKey] = true;
						}
					}
					var ReactNoopUpdateQueue = {
						isMounted: function (publicInstance) {
							return false;
						},
						enqueueForceUpdate: function (publicInstance, callback, callerName) {
							warnNoop(publicInstance, 'forceUpdate');
						},
						enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
							warnNoop(publicInstance, 'replaceState');
						},
						enqueueSetState: function (publicInstance, partialState, callback, callerName) {
							warnNoop(publicInstance, 'setState');
						}
					};
					var emptyObject = {};
					{
						Object.freeze(emptyObject);
					}
					function Component(props, context, updater) {
						this.props = props;
						this.context = context;
						this.refs = emptyObject;
						this.updater = updater || ReactNoopUpdateQueue;
					}
					Component.prototype.isReactComponent = {};
					Component.prototype.setState = function (partialState, callback) {
						if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
							{
								throw Error(
									'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
								);
							}
						}
						this.updater.enqueueSetState(this, partialState, callback, 'setState');
					};
					Component.prototype.forceUpdate = function (callback) {
						this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
					};
					{
						var deprecatedAPIs = {
							isMounted: [
								'isMounted',
								'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.'
							],
							replaceState: [
								'replaceState',
								'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).'
							]
						};
						var defineDeprecationWarning = function (methodName, info) {
							Object.defineProperty(Component.prototype, methodName, {
								get: function () {
									warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
									return void 0;
								}
							});
						};
						for (var fnName in deprecatedAPIs) {
							if (deprecatedAPIs.hasOwnProperty(fnName)) {
								defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
							}
						}
					}
					function ComponentDummy() {}
					ComponentDummy.prototype = Component.prototype;
					function PureComponent(props, context, updater) {
						this.props = props;
						this.context = context;
						this.refs = emptyObject;
						this.updater = updater || ReactNoopUpdateQueue;
					}
					var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
					pureComponentPrototype.constructor = PureComponent;
					_assign(pureComponentPrototype, Component.prototype);
					pureComponentPrototype.isPureReactComponent = true;
					function createRef() {
						var refObject = {
							current: null
						};
						{
							Object.seal(refObject);
						}
						return refObject;
					}
					function getWrappedName(outerType, innerType, wrapperName) {
						var functionName = innerType.displayName || innerType.name || '';
						return (
							outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName)
						);
					}
					function getContextName(type) {
						return type.displayName || 'Context';
					}
					function getComponentName(type) {
						if (type == null) {
							return null;
						}
						{
							if (typeof type.tag === 'number') {
								error(
									'Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.'
								);
							}
						}
						if (typeof type === 'function') {
							return type.displayName || type.name || null;
						}
						if (typeof type === 'string') {
							return type;
						}
						switch (type) {
							case exports.Fragment:
								return 'Fragment';
							case REACT_PORTAL_TYPE:
								return 'Portal';
							case exports.Profiler:
								return 'Profiler';
							case exports.StrictMode:
								return 'StrictMode';
							case exports.Suspense:
								return 'Suspense';
							case REACT_SUSPENSE_LIST_TYPE:
								return 'SuspenseList';
						}
						if (typeof type === 'object') {
							switch (type.$$typeof) {
								case REACT_CONTEXT_TYPE:
									var context = type;
									return getContextName(context) + '.Consumer';
								case REACT_PROVIDER_TYPE:
									var provider = type;
									return getContextName(provider._context) + '.Provider';
								case REACT_FORWARD_REF_TYPE:
									return getWrappedName(type, type.render, 'ForwardRef');
								case REACT_MEMO_TYPE:
									return getComponentName(type.type);
								case REACT_BLOCK_TYPE:
									return getComponentName(type._render);
								case REACT_LAZY_TYPE: {
									var lazyComponent = type;
									var payload = lazyComponent._payload;
									var init = lazyComponent._init;
									try {
										return getComponentName(init(payload));
									} catch (x) {
										return null;
									}
								}
							}
						}
						return null;
					}
					var hasOwnProperty = Object.prototype.hasOwnProperty;
					var RESERVED_PROPS = {
						key: true,
						ref: true,
						__self: true,
						__source: true
					};
					var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
					{
						didWarnAboutStringRefs = {};
					}
					function hasValidRef(config) {
						{
							if (hasOwnProperty.call(config, 'ref')) {
								var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
								if (getter && getter.isReactWarning) {
									return false;
								}
							}
						}
						return config.ref !== void 0;
					}
					function hasValidKey(config) {
						{
							if (hasOwnProperty.call(config, 'key')) {
								var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
								if (getter && getter.isReactWarning) {
									return false;
								}
							}
						}
						return config.key !== void 0;
					}
					function defineKeyPropWarningGetter(props, displayName) {
						var warnAboutAccessingKey = function () {
							{
								if (!specialPropKeyWarningShown) {
									specialPropKeyWarningShown = true;
									error(
										'%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
										displayName
									);
								}
							}
						};
						warnAboutAccessingKey.isReactWarning = true;
						Object.defineProperty(props, 'key', {
							get: warnAboutAccessingKey,
							configurable: true
						});
					}
					function defineRefPropWarningGetter(props, displayName) {
						var warnAboutAccessingRef = function () {
							{
								if (!specialPropRefWarningShown) {
									specialPropRefWarningShown = true;
									error(
										'%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
										displayName
									);
								}
							}
						};
						warnAboutAccessingRef.isReactWarning = true;
						Object.defineProperty(props, 'ref', {
							get: warnAboutAccessingRef,
							configurable: true
						});
					}
					function warnIfStringRefCannotBeAutoConverted(config) {
						{
							if (
								typeof config.ref === 'string' &&
								ReactCurrentOwner.current &&
								config.__self &&
								ReactCurrentOwner.current.stateNode !== config.__self
							) {
								var componentName = getComponentName(ReactCurrentOwner.current.type);
								if (!didWarnAboutStringRefs[componentName]) {
									error(
										'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
										componentName,
										config.ref
									);
									didWarnAboutStringRefs[componentName] = true;
								}
							}
						}
					}
					var ReactElement = function (type, key, ref, self2, source, owner, props) {
						var element = {
							$$typeof: REACT_ELEMENT_TYPE,
							type,
							key,
							ref,
							props,
							_owner: owner
						};
						{
							element._store = {};
							Object.defineProperty(element._store, 'validated', {
								configurable: false,
								enumerable: false,
								writable: true,
								value: false
							});
							Object.defineProperty(element, '_self', {
								configurable: false,
								enumerable: false,
								writable: false,
								value: self2
							});
							Object.defineProperty(element, '_source', {
								configurable: false,
								enumerable: false,
								writable: false,
								value: source
							});
							if (Object.freeze) {
								Object.freeze(element.props);
								Object.freeze(element);
							}
						}
						return element;
					};
					function createElement(type, config, children) {
						var propName;
						var props = {};
						var key = null;
						var ref = null;
						var self2 = null;
						var source = null;
						if (config != null) {
							if (hasValidRef(config)) {
								ref = config.ref;
								{
									warnIfStringRefCannotBeAutoConverted(config);
								}
							}
							if (hasValidKey(config)) {
								key = '' + config.key;
							}
							self2 = config.__self === void 0 ? null : config.__self;
							source = config.__source === void 0 ? null : config.__source;
							for (propName in config) {
								if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
									props[propName] = config[propName];
								}
							}
						}
						var childrenLength = arguments.length - 2;
						if (childrenLength === 1) {
							props.children = children;
						} else if (childrenLength > 1) {
							var childArray = Array(childrenLength);
							for (var i2 = 0; i2 < childrenLength; i2++) {
								childArray[i2] = arguments[i2 + 2];
							}
							{
								if (Object.freeze) {
									Object.freeze(childArray);
								}
							}
							props.children = childArray;
						}
						if (type && type.defaultProps) {
							var defaultProps = type.defaultProps;
							for (propName in defaultProps) {
								if (props[propName] === void 0) {
									props[propName] = defaultProps[propName];
								}
							}
						}
						{
							if (key || ref) {
								var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
								if (key) {
									defineKeyPropWarningGetter(props, displayName);
								}
								if (ref) {
									defineRefPropWarningGetter(props, displayName);
								}
							}
						}
						return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
					}
					function cloneAndReplaceKey(oldElement, newKey) {
						var newElement = ReactElement(
							oldElement.type,
							newKey,
							oldElement.ref,
							oldElement._self,
							oldElement._source,
							oldElement._owner,
							oldElement.props
						);
						return newElement;
					}
					function cloneElement(element, config, children) {
						if (!!(element === null || element === void 0)) {
							{
								throw Error(
									'React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.'
								);
							}
						}
						var propName;
						var props = _assign({}, element.props);
						var key = element.key;
						var ref = element.ref;
						var self2 = element._self;
						var source = element._source;
						var owner = element._owner;
						if (config != null) {
							if (hasValidRef(config)) {
								ref = config.ref;
								owner = ReactCurrentOwner.current;
							}
							if (hasValidKey(config)) {
								key = '' + config.key;
							}
							var defaultProps;
							if (element.type && element.type.defaultProps) {
								defaultProps = element.type.defaultProps;
							}
							for (propName in config) {
								if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
									if (config[propName] === void 0 && defaultProps !== void 0) {
										props[propName] = defaultProps[propName];
									} else {
										props[propName] = config[propName];
									}
								}
							}
						}
						var childrenLength = arguments.length - 2;
						if (childrenLength === 1) {
							props.children = children;
						} else if (childrenLength > 1) {
							var childArray = Array(childrenLength);
							for (var i2 = 0; i2 < childrenLength; i2++) {
								childArray[i2] = arguments[i2 + 2];
							}
							props.children = childArray;
						}
						return ReactElement(element.type, key, ref, self2, source, owner, props);
					}
					function isValidElement(object) {
						return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
					}
					var SEPARATOR = '.';
					var SUBSEPARATOR = ':';
					function escape(key) {
						var escapeRegex = /[=:]/g;
						var escaperLookup = {
							'=': '=0',
							':': '=2'
						};
						var escapedString = key.replace(escapeRegex, function (match) {
							return escaperLookup[match];
						});
						return '$' + escapedString;
					}
					var didWarnAboutMaps = false;
					var userProvidedKeyEscapeRegex = /\/+/g;
					function escapeUserProvidedKey(text) {
						return text.replace(userProvidedKeyEscapeRegex, '$&/');
					}
					function getElementKey(element, index) {
						if (typeof element === 'object' && element !== null && element.key != null) {
							return escape('' + element.key);
						}
						return index.toString(36);
					}
					function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
						var type = typeof children;
						if (type === 'undefined' || type === 'boolean') {
							children = null;
						}
						var invokeCallback = false;
						if (children === null) {
							invokeCallback = true;
						} else {
							switch (type) {
								case 'string':
								case 'number':
									invokeCallback = true;
									break;
								case 'object':
									switch (children.$$typeof) {
										case REACT_ELEMENT_TYPE:
										case REACT_PORTAL_TYPE:
											invokeCallback = true;
									}
							}
						}
						if (invokeCallback) {
							var _child = children;
							var mappedChild = callback(_child);
							var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
							if (Array.isArray(mappedChild)) {
								var escapedChildKey = '';
								if (childKey != null) {
									escapedChildKey = escapeUserProvidedKey(childKey) + '/';
								}
								mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
									return c;
								});
							} else if (mappedChild != null) {
								if (isValidElement(mappedChild)) {
									mappedChild = cloneAndReplaceKey(
										mappedChild,
										escapedPrefix +
											(mappedChild.key && (!_child || _child.key !== mappedChild.key)
												? escapeUserProvidedKey('' + mappedChild.key) + '/'
												: '') +
											childKey
									);
								}
								array.push(mappedChild);
							}
							return 1;
						}
						var child;
						var nextName;
						var subtreeCount = 0;
						var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
						if (Array.isArray(children)) {
							for (var i2 = 0; i2 < children.length; i2++) {
								child = children[i2];
								nextName = nextNamePrefix + getElementKey(child, i2);
								subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
							}
						} else {
							var iteratorFn = getIteratorFn(children);
							if (typeof iteratorFn === 'function') {
								var iterableChildren = children;
								{
									if (iteratorFn === iterableChildren.entries) {
										if (!didWarnAboutMaps) {
											warn('Using Maps as children is not supported. Use an array of keyed ReactElements instead.');
										}
										didWarnAboutMaps = true;
									}
								}
								var iterator = iteratorFn.call(iterableChildren);
								var step;
								var ii = 0;
								while (!(step = iterator.next()).done) {
									child = step.value;
									nextName = nextNamePrefix + getElementKey(child, ii++);
									subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
								}
							} else if (type === 'object') {
								var childrenString = '' + children;
								{
									{
										throw Error(
											'Objects are not valid as a React child (found: ' +
												(childrenString === '[object Object]'
													? 'object with keys {' + Object.keys(children).join(', ') + '}'
													: childrenString) +
												'). If you meant to render a collection of children, use an array instead.'
										);
									}
								}
							}
						}
						return subtreeCount;
					}
					function mapChildren(children, func, context) {
						if (children == null) {
							return children;
						}
						var result = [];
						var count = 0;
						mapIntoArray(children, result, '', '', function (child) {
							return func.call(context, child, count++);
						});
						return result;
					}
					function countChildren(children) {
						var n = 0;
						mapChildren(children, function () {
							n++;
						});
						return n;
					}
					function forEachChildren(children, forEachFunc, forEachContext) {
						mapChildren(
							children,
							function () {
								forEachFunc.apply(this, arguments);
							},
							forEachContext
						);
					}
					function toArray(children) {
						return (
							mapChildren(children, function (child) {
								return child;
							}) || []
						);
					}
					function onlyChild(children) {
						if (!isValidElement(children)) {
							{
								throw Error('React.Children.only expected to receive a single React element child.');
							}
						}
						return children;
					}
					function createContext(defaultValue, calculateChangedBits) {
						if (calculateChangedBits === void 0) {
							calculateChangedBits = null;
						} else {
							{
								if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
									error(
										'createContext: Expected the optional second argument to be a function. Instead received: %s',
										calculateChangedBits
									);
								}
							}
						}
						var context = {
							$$typeof: REACT_CONTEXT_TYPE,
							_calculateChangedBits: calculateChangedBits,
							_currentValue: defaultValue,
							_currentValue2: defaultValue,
							_threadCount: 0,
							Provider: null,
							Consumer: null
						};
						context.Provider = {
							$$typeof: REACT_PROVIDER_TYPE,
							_context: context
						};
						var hasWarnedAboutUsingNestedContextConsumers = false;
						var hasWarnedAboutUsingConsumerProvider = false;
						var hasWarnedAboutDisplayNameOnConsumer = false;
						{
							var Consumer = {
								$$typeof: REACT_CONTEXT_TYPE,
								_context: context,
								_calculateChangedBits: context._calculateChangedBits
							};
							Object.defineProperties(Consumer, {
								Provider: {
									get: function () {
										if (!hasWarnedAboutUsingConsumerProvider) {
											hasWarnedAboutUsingConsumerProvider = true;
											error(
												'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
											);
										}
										return context.Provider;
									},
									set: function (_Provider) {
										context.Provider = _Provider;
									}
								},
								_currentValue: {
									get: function () {
										return context._currentValue;
									},
									set: function (_currentValue) {
										context._currentValue = _currentValue;
									}
								},
								_currentValue2: {
									get: function () {
										return context._currentValue2;
									},
									set: function (_currentValue2) {
										context._currentValue2 = _currentValue2;
									}
								},
								_threadCount: {
									get: function () {
										return context._threadCount;
									},
									set: function (_threadCount) {
										context._threadCount = _threadCount;
									}
								},
								Consumer: {
									get: function () {
										if (!hasWarnedAboutUsingNestedContextConsumers) {
											hasWarnedAboutUsingNestedContextConsumers = true;
											error(
												'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
											);
										}
										return context.Consumer;
									}
								},
								displayName: {
									get: function () {
										return context.displayName;
									},
									set: function (displayName) {
										if (!hasWarnedAboutDisplayNameOnConsumer) {
											warn(
												"Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
												displayName
											);
											hasWarnedAboutDisplayNameOnConsumer = true;
										}
									}
								}
							});
							context.Consumer = Consumer;
						}
						{
							context._currentRenderer = null;
							context._currentRenderer2 = null;
						}
						return context;
					}
					var Uninitialized = -1;
					var Pending = 0;
					var Resolved = 1;
					var Rejected = 2;
					function lazyInitializer(payload) {
						if (payload._status === Uninitialized) {
							var ctor = payload._result;
							var thenable = ctor();
							var pending = payload;
							pending._status = Pending;
							pending._result = thenable;
							thenable.then(
								function (moduleObject) {
									if (payload._status === Pending) {
										var defaultExport = moduleObject.default;
										{
											if (defaultExport === void 0) {
												error(
													"lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
													moduleObject
												);
											}
										}
										var resolved = payload;
										resolved._status = Resolved;
										resolved._result = defaultExport;
									}
								},
								function (error2) {
									if (payload._status === Pending) {
										var rejected = payload;
										rejected._status = Rejected;
										rejected._result = error2;
									}
								}
							);
						}
						if (payload._status === Resolved) {
							return payload._result;
						} else {
							throw payload._result;
						}
					}
					function lazy(ctor) {
						var payload = {
							_status: -1,
							_result: ctor
						};
						var lazyType = {
							$$typeof: REACT_LAZY_TYPE,
							_payload: payload,
							_init: lazyInitializer
						};
						{
							var defaultProps;
							var propTypes;
							Object.defineProperties(lazyType, {
								defaultProps: {
									configurable: true,
									get: function () {
										return defaultProps;
									},
									set: function (newDefaultProps) {
										error(
											'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
										);
										defaultProps = newDefaultProps;
										Object.defineProperty(lazyType, 'defaultProps', {
											enumerable: true
										});
									}
								},
								propTypes: {
									configurable: true,
									get: function () {
										return propTypes;
									},
									set: function (newPropTypes) {
										error(
											'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
										);
										propTypes = newPropTypes;
										Object.defineProperty(lazyType, 'propTypes', {
											enumerable: true
										});
									}
								}
							});
						}
						return lazyType;
					}
					function forwardRef(render2) {
						{
							if (render2 != null && render2.$$typeof === REACT_MEMO_TYPE) {
								error(
									'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
								);
							} else if (typeof render2 !== 'function') {
								error(
									'forwardRef requires a render function but was given %s.',
									render2 === null ? 'null' : typeof render2
								);
							} else {
								if (render2.length !== 0 && render2.length !== 2) {
									error(
										'forwardRef render functions accept exactly two parameters: props and ref. %s',
										render2.length === 1
											? 'Did you forget to use the ref parameter?'
											: 'Any additional parameter will be undefined.'
									);
								}
							}
							if (render2 != null) {
								if (render2.defaultProps != null || render2.propTypes != null) {
									error(
										'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
									);
								}
							}
						}
						var elementType = {
							$$typeof: REACT_FORWARD_REF_TYPE,
							render: render2
						};
						{
							var ownName;
							Object.defineProperty(elementType, 'displayName', {
								enumerable: false,
								configurable: true,
								get: function () {
									return ownName;
								},
								set: function (name) {
									ownName = name;
									if (render2.displayName == null) {
										render2.displayName = name;
									}
								}
							});
						}
						return elementType;
					}
					var enableScopeAPI = false;
					function isValidElementType(type) {
						if (typeof type === 'string' || typeof type === 'function') {
							return true;
						}
						if (
							type === exports.Fragment ||
							type === exports.Profiler ||
							type === REACT_DEBUG_TRACING_MODE_TYPE ||
							type === exports.StrictMode ||
							type === exports.Suspense ||
							type === REACT_SUSPENSE_LIST_TYPE ||
							type === REACT_LEGACY_HIDDEN_TYPE ||
							enableScopeAPI
						) {
							return true;
						}
						if (typeof type === 'object' && type !== null) {
							if (
								type.$$typeof === REACT_LAZY_TYPE ||
								type.$$typeof === REACT_MEMO_TYPE ||
								type.$$typeof === REACT_PROVIDER_TYPE ||
								type.$$typeof === REACT_CONTEXT_TYPE ||
								type.$$typeof === REACT_FORWARD_REF_TYPE ||
								type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
								type.$$typeof === REACT_BLOCK_TYPE ||
								type[0] === REACT_SERVER_BLOCK_TYPE
							) {
								return true;
							}
						}
						return false;
					}
					function memo(type, compare) {
						{
							if (!isValidElementType(type)) {
								error(
									'memo: The first argument must be a component. Instead received: %s',
									type === null ? 'null' : typeof type
								);
							}
						}
						var elementType = {
							$$typeof: REACT_MEMO_TYPE,
							type,
							compare: compare === void 0 ? null : compare
						};
						{
							var ownName;
							Object.defineProperty(elementType, 'displayName', {
								enumerable: false,
								configurable: true,
								get: function () {
									return ownName;
								},
								set: function (name) {
									ownName = name;
									if (type.displayName == null) {
										type.displayName = name;
									}
								}
							});
						}
						return elementType;
					}
					function resolveDispatcher() {
						var dispatcher = ReactCurrentDispatcher.current;
						if (!(dispatcher !== null)) {
							{
								throw Error(
									'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
								);
							}
						}
						return dispatcher;
					}
					function useContext(Context, unstable_observedBits) {
						var dispatcher = resolveDispatcher();
						{
							if (unstable_observedBits !== void 0) {
								error(
									'useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s',
									unstable_observedBits,
									typeof unstable_observedBits === 'number' && Array.isArray(arguments[2])
										? '\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks'
										: ''
								);
							}
							if (Context._context !== void 0) {
								var realContext = Context._context;
								if (realContext.Consumer === Context) {
									error(
										'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
									);
								} else if (realContext.Provider === Context) {
									error(
										'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
									);
								}
							}
						}
						return dispatcher.useContext(Context, unstable_observedBits);
					}
					function useState2(initialState) {
						var dispatcher = resolveDispatcher();
						return dispatcher.useState(initialState);
					}
					function useReducer(reducer, initialArg, init) {
						var dispatcher = resolveDispatcher();
						return dispatcher.useReducer(reducer, initialArg, init);
					}
					function useRef2(initialValue) {
						var dispatcher = resolveDispatcher();
						return dispatcher.useRef(initialValue);
					}
					function useEffect2(create, deps) {
						var dispatcher = resolveDispatcher();
						return dispatcher.useEffect(create, deps);
					}
					function useLayoutEffect(create, deps) {
						var dispatcher = resolveDispatcher();
						return dispatcher.useLayoutEffect(create, deps);
					}
					function useCallback(callback, deps) {
						var dispatcher = resolveDispatcher();
						return dispatcher.useCallback(callback, deps);
					}
					function useMemo(create, deps) {
						var dispatcher = resolveDispatcher();
						return dispatcher.useMemo(create, deps);
					}
					function useImperativeHandle(ref, create, deps) {
						var dispatcher = resolveDispatcher();
						return dispatcher.useImperativeHandle(ref, create, deps);
					}
					function useDebugValue(value, formatterFn) {
						{
							var dispatcher = resolveDispatcher();
							return dispatcher.useDebugValue(value, formatterFn);
						}
					}
					var disabledDepth = 0;
					var prevLog;
					var prevInfo;
					var prevWarn;
					var prevError;
					var prevGroup;
					var prevGroupCollapsed;
					var prevGroupEnd;
					function disabledLog() {}
					disabledLog.__reactDisabledLog = true;
					function disableLogs() {
						{
							if (disabledDepth === 0) {
								prevLog = console.log;
								prevInfo = console.info;
								prevWarn = console.warn;
								prevError = console.error;
								prevGroup = console.group;
								prevGroupCollapsed = console.groupCollapsed;
								prevGroupEnd = console.groupEnd;
								var props = {
									configurable: true,
									enumerable: true,
									value: disabledLog,
									writable: true
								};
								Object.defineProperties(console, {
									info: props,
									log: props,
									warn: props,
									error: props,
									group: props,
									groupCollapsed: props,
									groupEnd: props
								});
							}
							disabledDepth++;
						}
					}
					function reenableLogs() {
						{
							disabledDepth--;
							if (disabledDepth === 0) {
								var props = {
									configurable: true,
									enumerable: true,
									writable: true
								};
								Object.defineProperties(console, {
									log: _assign({}, props, {
										value: prevLog
									}),
									info: _assign({}, props, {
										value: prevInfo
									}),
									warn: _assign({}, props, {
										value: prevWarn
									}),
									error: _assign({}, props, {
										value: prevError
									}),
									group: _assign({}, props, {
										value: prevGroup
									}),
									groupCollapsed: _assign({}, props, {
										value: prevGroupCollapsed
									}),
									groupEnd: _assign({}, props, {
										value: prevGroupEnd
									})
								});
							}
							if (disabledDepth < 0) {
								error('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
							}
						}
					}
					var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
					var prefix;
					function describeBuiltInComponentFrame(name, source, ownerFn) {
						{
							if (prefix === void 0) {
								try {
									throw Error();
								} catch (x) {
									var match = x.stack.trim().match(/\n( *(at )?)/);
									prefix = (match && match[1]) || '';
								}
							}
							return '\n' + prefix + name;
						}
					}
					var reentry = false;
					var componentFrameCache;
					{
						var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
						componentFrameCache = new PossiblyWeakMap();
					}
					function describeNativeComponentFrame(fn, construct) {
						if (!fn || reentry) {
							return '';
						}
						{
							var frame = componentFrameCache.get(fn);
							if (frame !== void 0) {
								return frame;
							}
						}
						var control;
						reentry = true;
						var previousPrepareStackTrace = Error.prepareStackTrace;
						Error.prepareStackTrace = void 0;
						var previousDispatcher;
						{
							previousDispatcher = ReactCurrentDispatcher$1.current;
							ReactCurrentDispatcher$1.current = null;
							disableLogs();
						}
						try {
							if (construct) {
								var Fake = function () {
									throw Error();
								};
								Object.defineProperty(Fake.prototype, 'props', {
									set: function () {
										throw Error();
									}
								});
								if (typeof Reflect === 'object' && Reflect.construct) {
									try {
										Reflect.construct(Fake, []);
									} catch (x) {
										control = x;
									}
									Reflect.construct(fn, [], Fake);
								} else {
									try {
										Fake.call();
									} catch (x) {
										control = x;
									}
									fn.call(Fake.prototype);
								}
							} else {
								try {
									throw Error();
								} catch (x) {
									control = x;
								}
								fn();
							}
						} catch (sample) {
							if (sample && control && typeof sample.stack === 'string') {
								var sampleLines = sample.stack.split('\n');
								var controlLines = control.stack.split('\n');
								var s = sampleLines.length - 1;
								var c = controlLines.length - 1;
								while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
									c--;
								}
								for (; s >= 1 && c >= 0; s--, c--) {
									if (sampleLines[s] !== controlLines[c]) {
										if (s !== 1 || c !== 1) {
											do {
												s--;
												c--;
												if (c < 0 || sampleLines[s] !== controlLines[c]) {
													var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
													{
														if (typeof fn === 'function') {
															componentFrameCache.set(fn, _frame);
														}
													}
													return _frame;
												}
											} while (s >= 1 && c >= 0);
										}
										break;
									}
								}
							}
						} finally {
							reentry = false;
							{
								ReactCurrentDispatcher$1.current = previousDispatcher;
								reenableLogs();
							}
							Error.prepareStackTrace = previousPrepareStackTrace;
						}
						var name = fn ? fn.displayName || fn.name : '';
						var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
						{
							if (typeof fn === 'function') {
								componentFrameCache.set(fn, syntheticFrame);
							}
						}
						return syntheticFrame;
					}
					function describeFunctionComponentFrame(fn, source, ownerFn) {
						{
							return describeNativeComponentFrame(fn, false);
						}
					}
					function shouldConstruct(Component2) {
						var prototype = Component2.prototype;
						return !!(prototype && prototype.isReactComponent);
					}
					function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
						if (type == null) {
							return '';
						}
						if (typeof type === 'function') {
							{
								return describeNativeComponentFrame(type, shouldConstruct(type));
							}
						}
						if (typeof type === 'string') {
							return describeBuiltInComponentFrame(type);
						}
						switch (type) {
							case exports.Suspense:
								return describeBuiltInComponentFrame('Suspense');
							case REACT_SUSPENSE_LIST_TYPE:
								return describeBuiltInComponentFrame('SuspenseList');
						}
						if (typeof type === 'object') {
							switch (type.$$typeof) {
								case REACT_FORWARD_REF_TYPE:
									return describeFunctionComponentFrame(type.render);
								case REACT_MEMO_TYPE:
									return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
								case REACT_BLOCK_TYPE:
									return describeFunctionComponentFrame(type._render);
								case REACT_LAZY_TYPE: {
									var lazyComponent = type;
									var payload = lazyComponent._payload;
									var init = lazyComponent._init;
									try {
										return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
									} catch (x) {}
								}
							}
						}
						return '';
					}
					var loggedTypeFailures = {};
					var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
					function setCurrentlyValidatingElement(element) {
						{
							if (element) {
								var owner = element._owner;
								var stack = describeUnknownElementTypeFrameInDEV(
									element.type,
									element._source,
									owner ? owner.type : null
								);
								ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
							} else {
								ReactDebugCurrentFrame$1.setExtraStackFrame(null);
							}
						}
					}
					function checkPropTypes(typeSpecs, values, location, componentName, element) {
						{
							var has = Function.call.bind(Object.prototype.hasOwnProperty);
							for (var typeSpecName in typeSpecs) {
								if (has(typeSpecs, typeSpecName)) {
									var error$1 = void 0;
									try {
										if (typeof typeSpecs[typeSpecName] !== 'function') {
											var err = Error(
												(componentName || 'React class') +
													': ' +
													location +
													' type `' +
													typeSpecName +
													'` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
													typeof typeSpecs[typeSpecName] +
													'`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
											);
											err.name = 'Invariant Violation';
											throw err;
										}
										error$1 = typeSpecs[typeSpecName](
											values,
											typeSpecName,
											componentName,
											location,
											null,
											'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
										);
									} catch (ex) {
										error$1 = ex;
									}
									if (error$1 && !(error$1 instanceof Error)) {
										setCurrentlyValidatingElement(element);
										error(
											'%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
											componentName || 'React class',
											location,
											typeSpecName,
											typeof error$1
										);
										setCurrentlyValidatingElement(null);
									}
									if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
										loggedTypeFailures[error$1.message] = true;
										setCurrentlyValidatingElement(element);
										error('Failed %s type: %s', location, error$1.message);
										setCurrentlyValidatingElement(null);
									}
								}
							}
						}
					}
					function setCurrentlyValidatingElement$1(element) {
						{
							if (element) {
								var owner = element._owner;
								var stack = describeUnknownElementTypeFrameInDEV(
									element.type,
									element._source,
									owner ? owner.type : null
								);
								setExtraStackFrame(stack);
							} else {
								setExtraStackFrame(null);
							}
						}
					}
					var propTypesMisspellWarningShown;
					{
						propTypesMisspellWarningShown = false;
					}
					function getDeclarationErrorAddendum() {
						if (ReactCurrentOwner.current) {
							var name = getComponentName(ReactCurrentOwner.current.type);
							if (name) {
								return '\n\nCheck the render method of `' + name + '`.';
							}
						}
						return '';
					}
					function getSourceInfoErrorAddendum(source) {
						if (source !== void 0) {
							var fileName = source.fileName.replace(/^.*[\\\/]/, '');
							var lineNumber = source.lineNumber;
							return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
						}
						return '';
					}
					function getSourceInfoErrorAddendumForProps(elementProps) {
						if (elementProps !== null && elementProps !== void 0) {
							return getSourceInfoErrorAddendum(elementProps.__source);
						}
						return '';
					}
					var ownerHasKeyUseWarning = {};
					function getCurrentComponentErrorInfo(parentType) {
						var info = getDeclarationErrorAddendum();
						if (!info) {
							var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
							if (parentName) {
								info = '\n\nCheck the top-level render call using <' + parentName + '>.';
							}
						}
						return info;
					}
					function validateExplicitKey(element, parentType) {
						if (!element._store || element._store.validated || element.key != null) {
							return;
						}
						element._store.validated = true;
						var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
						if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
							return;
						}
						ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
						var childOwner = '';
						if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
							childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
						}
						{
							setCurrentlyValidatingElement$1(element);
							error(
								'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
								currentComponentErrorInfo,
								childOwner
							);
							setCurrentlyValidatingElement$1(null);
						}
					}
					function validateChildKeys(node, parentType) {
						if (typeof node !== 'object') {
							return;
						}
						if (Array.isArray(node)) {
							for (var i2 = 0; i2 < node.length; i2++) {
								var child = node[i2];
								if (isValidElement(child)) {
									validateExplicitKey(child, parentType);
								}
							}
						} else if (isValidElement(node)) {
							if (node._store) {
								node._store.validated = true;
							}
						} else if (node) {
							var iteratorFn = getIteratorFn(node);
							if (typeof iteratorFn === 'function') {
								if (iteratorFn !== node.entries) {
									var iterator = iteratorFn.call(node);
									var step;
									while (!(step = iterator.next()).done) {
										if (isValidElement(step.value)) {
											validateExplicitKey(step.value, parentType);
										}
									}
								}
							}
						}
					}
					function validatePropTypes(element) {
						{
							var type = element.type;
							if (type === null || type === void 0 || typeof type === 'string') {
								return;
							}
							var propTypes;
							if (typeof type === 'function') {
								propTypes = type.propTypes;
							} else if (
								typeof type === 'object' &&
								(type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)
							) {
								propTypes = type.propTypes;
							} else {
								return;
							}
							if (propTypes) {
								var name = getComponentName(type);
								checkPropTypes(propTypes, element.props, 'prop', name, element);
							} else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
								propTypesMisspellWarningShown = true;
								var _name = getComponentName(type);
								error(
									'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
									_name || 'Unknown'
								);
							}
							if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
								error(
									'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
								);
							}
						}
					}
					function validateFragmentProps(fragment) {
						{
							var keys = Object.keys(fragment.props);
							for (var i2 = 0; i2 < keys.length; i2++) {
								var key = keys[i2];
								if (key !== 'children' && key !== 'key') {
									setCurrentlyValidatingElement$1(fragment);
									error(
										'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
										key
									);
									setCurrentlyValidatingElement$1(null);
									break;
								}
							}
							if (fragment.ref !== null) {
								setCurrentlyValidatingElement$1(fragment);
								error('Invalid attribute `ref` supplied to `React.Fragment`.');
								setCurrentlyValidatingElement$1(null);
							}
						}
					}
					function createElementWithValidation(type, props, children) {
						var validType = isValidElementType(type);
						if (!validType) {
							var info = '';
							if (type === void 0 || (typeof type === 'object' && type !== null && Object.keys(type).length === 0)) {
								info +=
									" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
							}
							var sourceInfo = getSourceInfoErrorAddendumForProps(props);
							if (sourceInfo) {
								info += sourceInfo;
							} else {
								info += getDeclarationErrorAddendum();
							}
							var typeString;
							if (type === null) {
								typeString = 'null';
							} else if (Array.isArray(type)) {
								typeString = 'array';
							} else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
								typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
								info = ' Did you accidentally export a JSX literal instead of a component?';
							} else {
								typeString = typeof type;
							}
							{
								error(
									'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
									typeString,
									info
								);
							}
						}
						var element = createElement.apply(this, arguments);
						if (element == null) {
							return element;
						}
						if (validType) {
							for (var i2 = 2; i2 < arguments.length; i2++) {
								validateChildKeys(arguments[i2], type);
							}
						}
						if (type === exports.Fragment) {
							validateFragmentProps(element);
						} else {
							validatePropTypes(element);
						}
						return element;
					}
					var didWarnAboutDeprecatedCreateFactory = false;
					function createFactoryWithValidation(type) {
						var validatedFactory = createElementWithValidation.bind(null, type);
						validatedFactory.type = type;
						{
							if (!didWarnAboutDeprecatedCreateFactory) {
								didWarnAboutDeprecatedCreateFactory = true;
								warn(
									'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
								);
							}
							Object.defineProperty(validatedFactory, 'type', {
								enumerable: false,
								get: function () {
									warn('Factory.type is deprecated. Access the class directly before passing it to createFactory.');
									Object.defineProperty(this, 'type', {
										value: type
									});
									return type;
								}
							});
						}
						return validatedFactory;
					}
					function cloneElementWithValidation(element, props, children) {
						var newElement = cloneElement.apply(this, arguments);
						for (var i2 = 2; i2 < arguments.length; i2++) {
							validateChildKeys(arguments[i2], newElement.type);
						}
						validatePropTypes(newElement);
						return newElement;
					}
					{
						try {
							var frozenObject = Object.freeze({});
							/* @__PURE__ */ new Map([[frozenObject, null]]);
							/* @__PURE__ */ new Set([frozenObject]);
						} catch (e) {}
					}
					var createElement$1 = createElementWithValidation;
					var cloneElement$1 = cloneElementWithValidation;
					var createFactory = createFactoryWithValidation;
					var Children = {
						map: mapChildren,
						forEach: forEachChildren,
						count: countChildren,
						toArray,
						only: onlyChild
					};
					exports.Children = Children;
					exports.Component = Component;
					exports.PureComponent = PureComponent;
					exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
					exports.cloneElement = cloneElement$1;
					exports.createContext = createContext;
					exports.createElement = createElement$1;
					exports.createFactory = createFactory;
					exports.createRef = createRef;
					exports.forwardRef = forwardRef;
					exports.isValidElement = isValidElement;
					exports.lazy = lazy;
					exports.memo = memo;
					exports.useCallback = useCallback;
					exports.useContext = useContext;
					exports.useDebugValue = useDebugValue;
					exports.useEffect = useEffect2;
					exports.useImperativeHandle = useImperativeHandle;
					exports.useLayoutEffect = useLayoutEffect;
					exports.useMemo = useMemo;
					exports.useReducer = useReducer;
					exports.useRef = useRef2;
					exports.useState = useState2;
					exports.version = ReactVersion;
				})();
			}
		}
	});

	// node_modules/react/index.js
	var require_react = __commonJS({
		'node_modules/react/index.js'(exports, module) {
			'use strict';
			if (false) {
				module.exports = null;
			} else {
				module.exports = require_react_development();
			}
		}
	});

	// node_modules/scheduler/cjs/scheduler.development.js
	var require_scheduler_development = __commonJS({
		'node_modules/scheduler/cjs/scheduler.development.js'(exports) {
			'use strict';
			if (true) {
				(function () {
					'use strict';
					var enableSchedulerDebugging = false;
					var enableProfiling = false;
					var requestHostCallback;
					var requestHostTimeout;
					var cancelHostTimeout;
					var requestPaint;
					var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
					if (hasPerformanceNow) {
						var localPerformance = performance;
						exports.unstable_now = function () {
							return localPerformance.now();
						};
					} else {
						var localDate = Date;
						var initialTime = localDate.now();
						exports.unstable_now = function () {
							return localDate.now() - initialTime;
						};
					}
					if (typeof self === 'undefined' || typeof MessageChannel !== 'function') {
						var _callback = null;
						var _timeoutID = null;
						var _flushCallback = function () {
							if (_callback !== null) {
								try {
									var currentTime = exports.unstable_now();
									var hasRemainingTime = true;
									_callback(hasRemainingTime, currentTime);
									_callback = null;
								} catch (e) {
									setTimeout(_flushCallback, 0);
									throw e;
								}
							}
						};
						requestHostCallback = function (cb) {
							if (_callback !== null) {
								setTimeout(requestHostCallback, 0, cb);
							} else {
								_callback = cb;
								setTimeout(_flushCallback, 0);
							}
						};
						requestHostTimeout = function (cb, ms) {
							_timeoutID = setTimeout(cb, ms);
						};
						cancelHostTimeout = function () {
							clearTimeout(_timeoutID);
						};
						exports.unstable_shouldYield = function () {
							return false;
						};
						requestPaint = exports.unstable_forceFrameRate = function () {};
					} else {
						var _setTimeout = self.setTimeout;
						var _clearTimeout = self.clearTimeout;
						if (typeof console !== 'undefined') {
							var requestAnimationFrame = self.requestAnimationFrame;
							var cancelAnimationFrame = self.cancelAnimationFrame;
							if (typeof requestAnimationFrame !== 'function') {
								console['error'](
									"This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
								);
							}
							if (typeof cancelAnimationFrame !== 'function') {
								console['error'](
									"This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
								);
							}
						}
						var isMessageLoopRunning = false;
						var scheduledHostCallback = null;
						var taskTimeoutID = -1;
						var yieldInterval = 5;
						var deadline = 0;
						{
							exports.unstable_shouldYield = function () {
								return exports.unstable_now() >= deadline;
							};
							requestPaint = function () {};
						}
						exports.unstable_forceFrameRate = function (fps) {
							if (fps < 0 || fps > 125) {
								console['error'](
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
								);
								return;
							}
							if (fps > 0) {
								yieldInterval = Math.floor(1e3 / fps);
							} else {
								yieldInterval = 5;
							}
						};
						var performWorkUntilDeadline = function () {
							if (scheduledHostCallback !== null) {
								var currentTime = exports.unstable_now();
								deadline = currentTime + yieldInterval;
								var hasTimeRemaining = true;
								try {
									var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
									if (!hasMoreWork) {
										isMessageLoopRunning = false;
										scheduledHostCallback = null;
									} else {
										port.postMessage(null);
									}
								} catch (error) {
									port.postMessage(null);
									throw error;
								}
							} else {
								isMessageLoopRunning = false;
							}
						};
						var channel = new MessageChannel();
						var port = channel.port2;
						channel.port1.onmessage = performWorkUntilDeadline;
						requestHostCallback = function (callback) {
							scheduledHostCallback = callback;
							if (!isMessageLoopRunning) {
								isMessageLoopRunning = true;
								port.postMessage(null);
							}
						};
						requestHostTimeout = function (callback, ms) {
							taskTimeoutID = _setTimeout(function () {
								callback(exports.unstable_now());
							}, ms);
						};
						cancelHostTimeout = function () {
							_clearTimeout(taskTimeoutID);
							taskTimeoutID = -1;
						};
					}
					function push(heap, node) {
						var index = heap.length;
						heap.push(node);
						siftUp(heap, node, index);
					}
					function peek(heap) {
						var first = heap[0];
						return first === void 0 ? null : first;
					}
					function pop(heap) {
						var first = heap[0];
						if (first !== void 0) {
							var last = heap.pop();
							if (last !== first) {
								heap[0] = last;
								siftDown(heap, last, 0);
							}
							return first;
						} else {
							return null;
						}
					}
					function siftUp(heap, node, i2) {
						var index = i2;
						while (true) {
							var parentIndex = (index - 1) >>> 1;
							var parent = heap[parentIndex];
							if (parent !== void 0 && compare(parent, node) > 0) {
								heap[parentIndex] = node;
								heap[index] = parent;
								index = parentIndex;
							} else {
								return;
							}
						}
					}
					function siftDown(heap, node, i2) {
						var index = i2;
						var length = heap.length;
						while (index < length) {
							var leftIndex = (index + 1) * 2 - 1;
							var left = heap[leftIndex];
							var rightIndex = leftIndex + 1;
							var right = heap[rightIndex];
							if (left !== void 0 && compare(left, node) < 0) {
								if (right !== void 0 && compare(right, left) < 0) {
									heap[index] = right;
									heap[rightIndex] = node;
									index = rightIndex;
								} else {
									heap[index] = left;
									heap[leftIndex] = node;
									index = leftIndex;
								}
							} else if (right !== void 0 && compare(right, node) < 0) {
								heap[index] = right;
								heap[rightIndex] = node;
								index = rightIndex;
							} else {
								return;
							}
						}
					}
					function compare(a, b) {
						var diff = a.sortIndex - b.sortIndex;
						return diff !== 0 ? diff : a.id - b.id;
					}
					var ImmediatePriority = 1;
					var UserBlockingPriority = 2;
					var NormalPriority = 3;
					var LowPriority = 4;
					var IdlePriority = 5;
					function markTaskErrored(task, ms) {}
					var maxSigned31BitInt = 1073741823;
					var IMMEDIATE_PRIORITY_TIMEOUT = -1;
					var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
					var NORMAL_PRIORITY_TIMEOUT = 5e3;
					var LOW_PRIORITY_TIMEOUT = 1e4;
					var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
					var taskQueue = [];
					var timerQueue = [];
					var taskIdCounter = 1;
					var currentTask = null;
					var currentPriorityLevel = NormalPriority;
					var isPerformingWork = false;
					var isHostCallbackScheduled = false;
					var isHostTimeoutScheduled = false;
					function advanceTimers(currentTime) {
						var timer = peek(timerQueue);
						while (timer !== null) {
							if (timer.callback === null) {
								pop(timerQueue);
							} else if (timer.startTime <= currentTime) {
								pop(timerQueue);
								timer.sortIndex = timer.expirationTime;
								push(taskQueue, timer);
							} else {
								return;
							}
							timer = peek(timerQueue);
						}
					}
					function handleTimeout(currentTime) {
						isHostTimeoutScheduled = false;
						advanceTimers(currentTime);
						if (!isHostCallbackScheduled) {
							if (peek(taskQueue) !== null) {
								isHostCallbackScheduled = true;
								requestHostCallback(flushWork);
							} else {
								var firstTimer = peek(timerQueue);
								if (firstTimer !== null) {
									requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
								}
							}
						}
					}
					function flushWork(hasTimeRemaining, initialTime2) {
						isHostCallbackScheduled = false;
						if (isHostTimeoutScheduled) {
							isHostTimeoutScheduled = false;
							cancelHostTimeout();
						}
						isPerformingWork = true;
						var previousPriorityLevel = currentPriorityLevel;
						try {
							if (enableProfiling) {
								try {
									return workLoop(hasTimeRemaining, initialTime2);
								} catch (error) {
									if (currentTask !== null) {
										var currentTime = exports.unstable_now();
										markTaskErrored(currentTask, currentTime);
										currentTask.isQueued = false;
									}
									throw error;
								}
							} else {
								return workLoop(hasTimeRemaining, initialTime2);
							}
						} finally {
							currentTask = null;
							currentPriorityLevel = previousPriorityLevel;
							isPerformingWork = false;
						}
					}
					function workLoop(hasTimeRemaining, initialTime2) {
						var currentTime = initialTime2;
						advanceTimers(currentTime);
						currentTask = peek(taskQueue);
						while (currentTask !== null && !enableSchedulerDebugging) {
							if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
								break;
							}
							var callback = currentTask.callback;
							if (typeof callback === 'function') {
								currentTask.callback = null;
								currentPriorityLevel = currentTask.priorityLevel;
								var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
								var continuationCallback = callback(didUserCallbackTimeout);
								currentTime = exports.unstable_now();
								if (typeof continuationCallback === 'function') {
									currentTask.callback = continuationCallback;
								} else {
									if (currentTask === peek(taskQueue)) {
										pop(taskQueue);
									}
								}
								advanceTimers(currentTime);
							} else {
								pop(taskQueue);
							}
							currentTask = peek(taskQueue);
						}
						if (currentTask !== null) {
							return true;
						} else {
							var firstTimer = peek(timerQueue);
							if (firstTimer !== null) {
								requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
							}
							return false;
						}
					}
					function unstable_runWithPriority(priorityLevel, eventHandler) {
						switch (priorityLevel) {
							case ImmediatePriority:
							case UserBlockingPriority:
							case NormalPriority:
							case LowPriority:
							case IdlePriority:
								break;
							default:
								priorityLevel = NormalPriority;
						}
						var previousPriorityLevel = currentPriorityLevel;
						currentPriorityLevel = priorityLevel;
						try {
							return eventHandler();
						} finally {
							currentPriorityLevel = previousPriorityLevel;
						}
					}
					function unstable_next(eventHandler) {
						var priorityLevel;
						switch (currentPriorityLevel) {
							case ImmediatePriority:
							case UserBlockingPriority:
							case NormalPriority:
								priorityLevel = NormalPriority;
								break;
							default:
								priorityLevel = currentPriorityLevel;
								break;
						}
						var previousPriorityLevel = currentPriorityLevel;
						currentPriorityLevel = priorityLevel;
						try {
							return eventHandler();
						} finally {
							currentPriorityLevel = previousPriorityLevel;
						}
					}
					function unstable_wrapCallback(callback) {
						var parentPriorityLevel = currentPriorityLevel;
						return function () {
							var previousPriorityLevel = currentPriorityLevel;
							currentPriorityLevel = parentPriorityLevel;
							try {
								return callback.apply(this, arguments);
							} finally {
								currentPriorityLevel = previousPriorityLevel;
							}
						};
					}
					function unstable_scheduleCallback(priorityLevel, callback, options) {
						var currentTime = exports.unstable_now();
						var startTime;
						if (typeof options === 'object' && options !== null) {
							var delay = options.delay;
							if (typeof delay === 'number' && delay > 0) {
								startTime = currentTime + delay;
							} else {
								startTime = currentTime;
							}
						} else {
							startTime = currentTime;
						}
						var timeout;
						switch (priorityLevel) {
							case ImmediatePriority:
								timeout = IMMEDIATE_PRIORITY_TIMEOUT;
								break;
							case UserBlockingPriority:
								timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
								break;
							case IdlePriority:
								timeout = IDLE_PRIORITY_TIMEOUT;
								break;
							case LowPriority:
								timeout = LOW_PRIORITY_TIMEOUT;
								break;
							case NormalPriority:
							default:
								timeout = NORMAL_PRIORITY_TIMEOUT;
								break;
						}
						var expirationTime = startTime + timeout;
						var newTask = {
							id: taskIdCounter++,
							callback,
							priorityLevel,
							startTime,
							expirationTime,
							sortIndex: -1
						};
						if (startTime > currentTime) {
							newTask.sortIndex = startTime;
							push(timerQueue, newTask);
							if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
								if (isHostTimeoutScheduled) {
									cancelHostTimeout();
								} else {
									isHostTimeoutScheduled = true;
								}
								requestHostTimeout(handleTimeout, startTime - currentTime);
							}
						} else {
							newTask.sortIndex = expirationTime;
							push(taskQueue, newTask);
							if (!isHostCallbackScheduled && !isPerformingWork) {
								isHostCallbackScheduled = true;
								requestHostCallback(flushWork);
							}
						}
						return newTask;
					}
					function unstable_pauseExecution() {}
					function unstable_continueExecution() {
						if (!isHostCallbackScheduled && !isPerformingWork) {
							isHostCallbackScheduled = true;
							requestHostCallback(flushWork);
						}
					}
					function unstable_getFirstCallbackNode() {
						return peek(taskQueue);
					}
					function unstable_cancelCallback(task) {
						task.callback = null;
					}
					function unstable_getCurrentPriorityLevel() {
						return currentPriorityLevel;
					}
					var unstable_requestPaint = requestPaint;
					var unstable_Profiling = null;
					exports.unstable_IdlePriority = IdlePriority;
					exports.unstable_ImmediatePriority = ImmediatePriority;
					exports.unstable_LowPriority = LowPriority;
					exports.unstable_NormalPriority = NormalPriority;
					exports.unstable_Profiling = unstable_Profiling;
					exports.unstable_UserBlockingPriority = UserBlockingPriority;
					exports.unstable_cancelCallback = unstable_cancelCallback;
					exports.unstable_continueExecution = unstable_continueExecution;
					exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
					exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
					exports.unstable_next = unstable_next;
					exports.unstable_pauseExecution = unstable_pauseExecution;
					exports.unstable_requestPaint = unstable_requestPaint;
					exports.unstable_runWithPriority = unstable_runWithPriority;
					exports.unstable_scheduleCallback = unstable_scheduleCallback;
					exports.unstable_wrapCallback = unstable_wrapCallback;
				})();
			}
		}
	});

	// node_modules/scheduler/index.js
	var require_scheduler = __commonJS({
		'node_modules/scheduler/index.js'(exports, module) {
			'use strict';
			if (false) {
				module.exports = null;
			} else {
				module.exports = require_scheduler_development();
			}
		}
	});

	// node_modules/scheduler/cjs/scheduler-tracing.development.js
	var require_scheduler_tracing_development = __commonJS({
		'node_modules/scheduler/cjs/scheduler-tracing.development.js'(exports) {
			'use strict';
			if (true) {
				(function () {
					'use strict';
					var DEFAULT_THREAD_ID = 0;
					var interactionIDCounter = 0;
					var threadIDCounter = 0;
					exports.__interactionsRef = null;
					exports.__subscriberRef = null;
					{
						exports.__interactionsRef = {
							current: /* @__PURE__ */ new Set()
						};
						exports.__subscriberRef = {
							current: null
						};
					}
					function unstable_clear(callback) {
						var prevInteractions = exports.__interactionsRef.current;
						exports.__interactionsRef.current = /* @__PURE__ */ new Set();
						try {
							return callback();
						} finally {
							exports.__interactionsRef.current = prevInteractions;
						}
					}
					function unstable_getCurrent() {
						{
							return exports.__interactionsRef.current;
						}
					}
					function unstable_getThreadID() {
						return ++threadIDCounter;
					}
					function unstable_trace(name, timestamp, callback) {
						var threadID = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : DEFAULT_THREAD_ID;
						var interaction = {
							__count: 1,
							id: interactionIDCounter++,
							name,
							timestamp
						};
						var prevInteractions = exports.__interactionsRef.current;
						var interactions = new Set(prevInteractions);
						interactions.add(interaction);
						exports.__interactionsRef.current = interactions;
						var subscriber = exports.__subscriberRef.current;
						var returnValue;
						try {
							if (subscriber !== null) {
								subscriber.onInteractionTraced(interaction);
							}
						} finally {
							try {
								if (subscriber !== null) {
									subscriber.onWorkStarted(interactions, threadID);
								}
							} finally {
								try {
									returnValue = callback();
								} finally {
									exports.__interactionsRef.current = prevInteractions;
									try {
										if (subscriber !== null) {
											subscriber.onWorkStopped(interactions, threadID);
										}
									} finally {
										interaction.__count--;
										if (subscriber !== null && interaction.__count === 0) {
											subscriber.onInteractionScheduledWorkCompleted(interaction);
										}
									}
								}
							}
						}
						return returnValue;
					}
					function unstable_wrap(callback) {
						var threadID = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_THREAD_ID;
						var wrappedInteractions = exports.__interactionsRef.current;
						var subscriber = exports.__subscriberRef.current;
						if (subscriber !== null) {
							subscriber.onWorkScheduled(wrappedInteractions, threadID);
						}
						wrappedInteractions.forEach(function (interaction) {
							interaction.__count++;
						});
						var hasRun = false;
						function wrapped() {
							var prevInteractions = exports.__interactionsRef.current;
							exports.__interactionsRef.current = wrappedInteractions;
							subscriber = exports.__subscriberRef.current;
							try {
								var returnValue;
								try {
									if (subscriber !== null) {
										subscriber.onWorkStarted(wrappedInteractions, threadID);
									}
								} finally {
									try {
										returnValue = callback.apply(void 0, arguments);
									} finally {
										exports.__interactionsRef.current = prevInteractions;
										if (subscriber !== null) {
											subscriber.onWorkStopped(wrappedInteractions, threadID);
										}
									}
								}
								return returnValue;
							} finally {
								if (!hasRun) {
									hasRun = true;
									wrappedInteractions.forEach(function (interaction) {
										interaction.__count--;
										if (subscriber !== null && interaction.__count === 0) {
											subscriber.onInteractionScheduledWorkCompleted(interaction);
										}
									});
								}
							}
						}
						wrapped.cancel = function cancel() {
							subscriber = exports.__subscriberRef.current;
							try {
								if (subscriber !== null) {
									subscriber.onWorkCanceled(wrappedInteractions, threadID);
								}
							} finally {
								wrappedInteractions.forEach(function (interaction) {
									interaction.__count--;
									if (subscriber && interaction.__count === 0) {
										subscriber.onInteractionScheduledWorkCompleted(interaction);
									}
								});
							}
						};
						return wrapped;
					}
					var subscribers = null;
					{
						subscribers = /* @__PURE__ */ new Set();
					}
					function unstable_subscribe(subscriber) {
						{
							subscribers.add(subscriber);
							if (subscribers.size === 1) {
								exports.__subscriberRef.current = {
									onInteractionScheduledWorkCompleted,
									onInteractionTraced,
									onWorkCanceled,
									onWorkScheduled,
									onWorkStarted,
									onWorkStopped
								};
							}
						}
					}
					function unstable_unsubscribe(subscriber) {
						{
							subscribers.delete(subscriber);
							if (subscribers.size === 0) {
								exports.__subscriberRef.current = null;
							}
						}
					}
					function onInteractionTraced(interaction) {
						var didCatchError = false;
						var caughtError = null;
						subscribers.forEach(function (subscriber) {
							try {
								subscriber.onInteractionTraced(interaction);
							} catch (error) {
								if (!didCatchError) {
									didCatchError = true;
									caughtError = error;
								}
							}
						});
						if (didCatchError) {
							throw caughtError;
						}
					}
					function onInteractionScheduledWorkCompleted(interaction) {
						var didCatchError = false;
						var caughtError = null;
						subscribers.forEach(function (subscriber) {
							try {
								subscriber.onInteractionScheduledWorkCompleted(interaction);
							} catch (error) {
								if (!didCatchError) {
									didCatchError = true;
									caughtError = error;
								}
							}
						});
						if (didCatchError) {
							throw caughtError;
						}
					}
					function onWorkScheduled(interactions, threadID) {
						var didCatchError = false;
						var caughtError = null;
						subscribers.forEach(function (subscriber) {
							try {
								subscriber.onWorkScheduled(interactions, threadID);
							} catch (error) {
								if (!didCatchError) {
									didCatchError = true;
									caughtError = error;
								}
							}
						});
						if (didCatchError) {
							throw caughtError;
						}
					}
					function onWorkStarted(interactions, threadID) {
						var didCatchError = false;
						var caughtError = null;
						subscribers.forEach(function (subscriber) {
							try {
								subscriber.onWorkStarted(interactions, threadID);
							} catch (error) {
								if (!didCatchError) {
									didCatchError = true;
									caughtError = error;
								}
							}
						});
						if (didCatchError) {
							throw caughtError;
						}
					}
					function onWorkStopped(interactions, threadID) {
						var didCatchError = false;
						var caughtError = null;
						subscribers.forEach(function (subscriber) {
							try {
								subscriber.onWorkStopped(interactions, threadID);
							} catch (error) {
								if (!didCatchError) {
									didCatchError = true;
									caughtError = error;
								}
							}
						});
						if (didCatchError) {
							throw caughtError;
						}
					}
					function onWorkCanceled(interactions, threadID) {
						var didCatchError = false;
						var caughtError = null;
						subscribers.forEach(function (subscriber) {
							try {
								subscriber.onWorkCanceled(interactions, threadID);
							} catch (error) {
								if (!didCatchError) {
									didCatchError = true;
									caughtError = error;
								}
							}
						});
						if (didCatchError) {
							throw caughtError;
						}
					}
					exports.unstable_clear = unstable_clear;
					exports.unstable_getCurrent = unstable_getCurrent;
					exports.unstable_getThreadID = unstable_getThreadID;
					exports.unstable_subscribe = unstable_subscribe;
					exports.unstable_trace = unstable_trace;
					exports.unstable_unsubscribe = unstable_unsubscribe;
					exports.unstable_wrap = unstable_wrap;
				})();
			}
		}
	});

	// node_modules/scheduler/tracing.js
	var require_tracing = __commonJS({
		'node_modules/scheduler/tracing.js'(exports, module) {
			'use strict';
			if (false) {
				module.exports = null;
			} else {
				module.exports = require_scheduler_tracing_development();
			}
		}
	});

	// node_modules/react-dom/cjs/react-dom.development.js
	var require_react_dom_development = __commonJS({
		'node_modules/react-dom/cjs/react-dom.development.js'(exports) {
			'use strict';
			if (true) {
				(function () {
					'use strict';
					var React2 = require_react();
					var _assign = require_object_assign();
					var Scheduler = require_scheduler();
					var tracing = require_tracing();
					var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
					function warn(format) {
						{
							for (
								var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
								_key < _len;
								_key++
							) {
								args[_key - 1] = arguments[_key];
							}
							printWarning('warn', format, args);
						}
					}
					function error(format) {
						{
							for (
								var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
								_key2 < _len2;
								_key2++
							) {
								args[_key2 - 1] = arguments[_key2];
							}
							printWarning('error', format, args);
						}
					}
					function printWarning(level, format, args) {
						{
							var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
							var stack = ReactDebugCurrentFrame2.getStackAddendum();
							if (stack !== '') {
								format += '%s';
								args = args.concat([stack]);
							}
							var argsWithFormat = args.map(function (item) {
								return '' + item;
							});
							argsWithFormat.unshift('Warning: ' + format);
							Function.prototype.apply.call(console[level], console, argsWithFormat);
						}
					}
					if (!React2) {
						{
							throw Error(
								'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.'
							);
						}
					}
					var FunctionComponent = 0;
					var ClassComponent = 1;
					var IndeterminateComponent = 2;
					var HostRoot = 3;
					var HostPortal = 4;
					var HostComponent = 5;
					var HostText = 6;
					var Fragment = 7;
					var Mode = 8;
					var ContextConsumer = 9;
					var ContextProvider = 10;
					var ForwardRef = 11;
					var Profiler = 12;
					var SuspenseComponent = 13;
					var MemoComponent = 14;
					var SimpleMemoComponent = 15;
					var LazyComponent = 16;
					var IncompleteClassComponent = 17;
					var DehydratedFragment = 18;
					var SuspenseListComponent = 19;
					var FundamentalComponent = 20;
					var ScopeComponent = 21;
					var Block = 22;
					var OffscreenComponent = 23;
					var LegacyHiddenComponent = 24;
					var enableProfilerTimer = true;
					var enableFundamentalAPI = false;
					var enableNewReconciler = false;
					var warnAboutStringRefs = false;
					var allNativeEvents = /* @__PURE__ */ new Set();
					var registrationNameDependencies = {};
					var possibleRegistrationNames = {};
					function registerTwoPhaseEvent(registrationName, dependencies) {
						registerDirectEvent(registrationName, dependencies);
						registerDirectEvent(registrationName + 'Capture', dependencies);
					}
					function registerDirectEvent(registrationName, dependencies) {
						{
							if (registrationNameDependencies[registrationName]) {
								error(
									'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
									registrationName
								);
							}
						}
						registrationNameDependencies[registrationName] = dependencies;
						{
							var lowerCasedName = registrationName.toLowerCase();
							possibleRegistrationNames[lowerCasedName] = registrationName;
							if (registrationName === 'onDoubleClick') {
								possibleRegistrationNames.ondblclick = registrationName;
							}
						}
						for (var i2 = 0; i2 < dependencies.length; i2++) {
							allNativeEvents.add(dependencies[i2]);
						}
					}
					var canUseDOM = !!(
						typeof self !== 'undefined' &&
						typeof self.document !== 'undefined' &&
						typeof self.document.createElement !== 'undefined'
					);
					var RESERVED = 0;
					var STRING = 1;
					var BOOLEANISH_STRING = 2;
					var BOOLEAN = 3;
					var OVERLOADED_BOOLEAN = 4;
					var NUMERIC = 5;
					var POSITIVE_NUMERIC = 6;
					var ATTRIBUTE_NAME_START_CHAR =
						':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
					var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
					var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
					var VALID_ATTRIBUTE_NAME_REGEX = new RegExp(
						'^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$'
					);
					var hasOwnProperty = Object.prototype.hasOwnProperty;
					var illegalAttributeNameCache = {};
					var validatedAttributeNameCache = {};
					function isAttributeNameSafe(attributeName) {
						if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
							return true;
						}
						if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
							return false;
						}
						if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
							validatedAttributeNameCache[attributeName] = true;
							return true;
						}
						illegalAttributeNameCache[attributeName] = true;
						{
							error('Invalid attribute name: `%s`', attributeName);
						}
						return false;
					}
					function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
						if (propertyInfo !== null) {
							return propertyInfo.type === RESERVED;
						}
						if (isCustomComponentTag) {
							return false;
						}
						if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
							return true;
						}
						return false;
					}
					function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
						if (propertyInfo !== null && propertyInfo.type === RESERVED) {
							return false;
						}
						switch (typeof value) {
							case 'function':
							case 'symbol':
								return true;
							case 'boolean': {
								if (isCustomComponentTag) {
									return false;
								}
								if (propertyInfo !== null) {
									return !propertyInfo.acceptsBooleans;
								} else {
									var prefix2 = name.toLowerCase().slice(0, 5);
									return prefix2 !== 'data-' && prefix2 !== 'aria-';
								}
							}
							default:
								return false;
						}
					}
					function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
						if (value === null || typeof value === 'undefined') {
							return true;
						}
						if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
							return true;
						}
						if (isCustomComponentTag) {
							return false;
						}
						if (propertyInfo !== null) {
							switch (propertyInfo.type) {
								case BOOLEAN:
									return !value;
								case OVERLOADED_BOOLEAN:
									return value === false;
								case NUMERIC:
									return isNaN(value);
								case POSITIVE_NUMERIC:
									return isNaN(value) || value < 1;
							}
						}
						return false;
					}
					function getPropertyInfo(name) {
						return properties.hasOwnProperty(name) ? properties[name] : null;
					}
					function PropertyInfoRecord(
						name,
						type,
						mustUseProperty,
						attributeName,
						attributeNamespace,
						sanitizeURL2,
						removeEmptyString
					) {
						this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
						this.attributeName = attributeName;
						this.attributeNamespace = attributeNamespace;
						this.mustUseProperty = mustUseProperty;
						this.propertyName = name;
						this.type = type;
						this.sanitizeURL = sanitizeURL2;
						this.removeEmptyString = removeEmptyString;
					}
					var properties = {};
					var reservedProps = [
						'children',
						'dangerouslySetInnerHTML',
						'defaultValue',
						'defaultChecked',
						'innerHTML',
						'suppressContentEditableWarning',
						'suppressHydrationWarning',
						'style'
					];
					reservedProps.forEach(function (name) {
						properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
					});
					[
						['acceptCharset', 'accept-charset'],
						['className', 'class'],
						['htmlFor', 'for'],
						['httpEquiv', 'http-equiv']
					].forEach(function (_ref) {
						var name = _ref[0],
							attributeName = _ref[1];
						properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
					});
					['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
						properties[name] = new PropertyInfoRecord(
							name,
							BOOLEANISH_STRING,
							false,
							name.toLowerCase(),
							null,
							false,
							false
						);
					});
					['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
						properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
					});
					[
						'allowFullScreen',
						'async',
						'autoFocus',
						'autoPlay',
						'controls',
						'default',
						'defer',
						'disabled',
						'disablePictureInPicture',
						'disableRemotePlayback',
						'formNoValidate',
						'hidden',
						'loop',
						'noModule',
						'noValidate',
						'open',
						'playsInline',
						'readOnly',
						'required',
						'reversed',
						'scoped',
						'seamless',
						'itemScope'
					].forEach(function (name) {
						properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
					});
					['checked', 'multiple', 'muted', 'selected'].forEach(function (name) {
						properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
					});
					['capture', 'download'].forEach(function (name) {
						properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
					});
					['cols', 'rows', 'size', 'span'].forEach(function (name) {
						properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
					});
					['rowSpan', 'start'].forEach(function (name) {
						properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
					});
					var CAMELIZE = /[\-\:]([a-z])/g;
					var capitalize = function (token) {
						return token[1].toUpperCase();
					};
					[
						'accent-height',
						'alignment-baseline',
						'arabic-form',
						'baseline-shift',
						'cap-height',
						'clip-path',
						'clip-rule',
						'color-interpolation',
						'color-interpolation-filters',
						'color-profile',
						'color-rendering',
						'dominant-baseline',
						'enable-background',
						'fill-opacity',
						'fill-rule',
						'flood-color',
						'flood-opacity',
						'font-family',
						'font-size',
						'font-size-adjust',
						'font-stretch',
						'font-style',
						'font-variant',
						'font-weight',
						'glyph-name',
						'glyph-orientation-horizontal',
						'glyph-orientation-vertical',
						'horiz-adv-x',
						'horiz-origin-x',
						'image-rendering',
						'letter-spacing',
						'lighting-color',
						'marker-end',
						'marker-mid',
						'marker-start',
						'overline-position',
						'overline-thickness',
						'paint-order',
						'panose-1',
						'pointer-events',
						'rendering-intent',
						'shape-rendering',
						'stop-color',
						'stop-opacity',
						'strikethrough-position',
						'strikethrough-thickness',
						'stroke-dasharray',
						'stroke-dashoffset',
						'stroke-linecap',
						'stroke-linejoin',
						'stroke-miterlimit',
						'stroke-opacity',
						'stroke-width',
						'text-anchor',
						'text-decoration',
						'text-rendering',
						'underline-position',
						'underline-thickness',
						'unicode-bidi',
						'unicode-range',
						'units-per-em',
						'v-alphabetic',
						'v-hanging',
						'v-ideographic',
						'v-mathematical',
						'vector-effect',
						'vert-adv-y',
						'vert-origin-x',
						'vert-origin-y',
						'word-spacing',
						'writing-mode',
						'xmlns:xlink',
						'x-height'
					].forEach(function (attributeName) {
						var name = attributeName.replace(CAMELIZE, capitalize);
						properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
					});
					['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(
						function (attributeName) {
							var name = attributeName.replace(CAMELIZE, capitalize);
							properties[name] = new PropertyInfoRecord(
								name,
								STRING,
								false,
								attributeName,
								'http://www.w3.org/1999/xlink',
								false,
								false
							);
						}
					);
					['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
						var name = attributeName.replace(CAMELIZE, capitalize);
						properties[name] = new PropertyInfoRecord(
							name,
							STRING,
							false,
							attributeName,
							'http://www.w3.org/XML/1998/namespace',
							false,
							false
						);
					});
					['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
						properties[attributeName] = new PropertyInfoRecord(
							attributeName,
							STRING,
							false,
							attributeName.toLowerCase(),
							null,
							false,
							false
						);
					});
					var xlinkHref = 'xlinkHref';
					properties[xlinkHref] = new PropertyInfoRecord(
						'xlinkHref',
						STRING,
						false,
						'xlink:href',
						'http://www.w3.org/1999/xlink',
						true,
						false
					);
					['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
						properties[attributeName] = new PropertyInfoRecord(
							attributeName,
							STRING,
							false,
							attributeName.toLowerCase(),
							null,
							true,
							true
						);
					});
					var isJavaScriptProtocol =
						/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
					var didWarn = false;
					function sanitizeURL(url) {
						{
							if (!didWarn && isJavaScriptProtocol.test(url)) {
								didWarn = true;
								error(
									'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
									JSON.stringify(url)
								);
							}
						}
					}
					function getValueForProperty(node, name, expected, propertyInfo) {
						{
							if (propertyInfo.mustUseProperty) {
								var propertyName = propertyInfo.propertyName;
								return node[propertyName];
							} else {
								if (propertyInfo.sanitizeURL) {
									sanitizeURL('' + expected);
								}
								var attributeName = propertyInfo.attributeName;
								var stringValue = null;
								if (propertyInfo.type === OVERLOADED_BOOLEAN) {
									if (node.hasAttribute(attributeName)) {
										var value = node.getAttribute(attributeName);
										if (value === '') {
											return true;
										}
										if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
											return value;
										}
										if (value === '' + expected) {
											return expected;
										}
										return value;
									}
								} else if (node.hasAttribute(attributeName)) {
									if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
										return node.getAttribute(attributeName);
									}
									if (propertyInfo.type === BOOLEAN) {
										return expected;
									}
									stringValue = node.getAttribute(attributeName);
								}
								if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
									return stringValue === null ? expected : stringValue;
								} else if (stringValue === '' + expected) {
									return expected;
								} else {
									return stringValue;
								}
							}
						}
					}
					function getValueForAttribute(node, name, expected) {
						{
							if (!isAttributeNameSafe(name)) {
								return;
							}
							if (isOpaqueHydratingObject(expected)) {
								return expected;
							}
							if (!node.hasAttribute(name)) {
								return expected === void 0 ? void 0 : null;
							}
							var value = node.getAttribute(name);
							if (value === '' + expected) {
								return expected;
							}
							return value;
						}
					}
					function setValueForProperty(node, name, value, isCustomComponentTag) {
						var propertyInfo = getPropertyInfo(name);
						if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
							return;
						}
						if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) {
							value = null;
						}
						if (isCustomComponentTag || propertyInfo === null) {
							if (isAttributeNameSafe(name)) {
								var _attributeName = name;
								if (value === null) {
									node.removeAttribute(_attributeName);
								} else {
									node.setAttribute(_attributeName, '' + value);
								}
							}
							return;
						}
						var mustUseProperty = propertyInfo.mustUseProperty;
						if (mustUseProperty) {
							var propertyName = propertyInfo.propertyName;
							if (value === null) {
								var type = propertyInfo.type;
								node[propertyName] = type === BOOLEAN ? false : '';
							} else {
								node[propertyName] = value;
							}
							return;
						}
						var attributeName = propertyInfo.attributeName,
							attributeNamespace = propertyInfo.attributeNamespace;
						if (value === null) {
							node.removeAttribute(attributeName);
						} else {
							var _type = propertyInfo.type;
							var attributeValue;
							if (_type === BOOLEAN || (_type === OVERLOADED_BOOLEAN && value === true)) {
								attributeValue = '';
							} else {
								{
									attributeValue = '' + value;
								}
								if (propertyInfo.sanitizeURL) {
									sanitizeURL(attributeValue.toString());
								}
							}
							if (attributeNamespace) {
								node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
							} else {
								node.setAttribute(attributeName, attributeValue);
							}
						}
					}
					var REACT_ELEMENT_TYPE = 60103;
					var REACT_PORTAL_TYPE = 60106;
					var REACT_FRAGMENT_TYPE = 60107;
					var REACT_STRICT_MODE_TYPE = 60108;
					var REACT_PROFILER_TYPE = 60114;
					var REACT_PROVIDER_TYPE = 60109;
					var REACT_CONTEXT_TYPE = 60110;
					var REACT_FORWARD_REF_TYPE = 60112;
					var REACT_SUSPENSE_TYPE = 60113;
					var REACT_SUSPENSE_LIST_TYPE = 60120;
					var REACT_MEMO_TYPE = 60115;
					var REACT_LAZY_TYPE = 60116;
					var REACT_BLOCK_TYPE = 60121;
					var REACT_SERVER_BLOCK_TYPE = 60122;
					var REACT_FUNDAMENTAL_TYPE = 60117;
					var REACT_SCOPE_TYPE = 60119;
					var REACT_OPAQUE_ID_TYPE = 60128;
					var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
					var REACT_OFFSCREEN_TYPE = 60130;
					var REACT_LEGACY_HIDDEN_TYPE = 60131;
					if (typeof Symbol === 'function' && Symbol.for) {
						var symbolFor = Symbol.for;
						REACT_ELEMENT_TYPE = symbolFor('react.element');
						REACT_PORTAL_TYPE = symbolFor('react.portal');
						REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
						REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
						REACT_PROFILER_TYPE = symbolFor('react.profiler');
						REACT_PROVIDER_TYPE = symbolFor('react.provider');
						REACT_CONTEXT_TYPE = symbolFor('react.context');
						REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
						REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
						REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
						REACT_MEMO_TYPE = symbolFor('react.memo');
						REACT_LAZY_TYPE = symbolFor('react.lazy');
						REACT_BLOCK_TYPE = symbolFor('react.block');
						REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
						REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
						REACT_SCOPE_TYPE = symbolFor('react.scope');
						REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
						REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
						REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
						REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
					}
					var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
					var FAUX_ITERATOR_SYMBOL = '@@iterator';
					function getIteratorFn(maybeIterable) {
						if (maybeIterable === null || typeof maybeIterable !== 'object') {
							return null;
						}
						var maybeIterator =
							(MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];
						if (typeof maybeIterator === 'function') {
							return maybeIterator;
						}
						return null;
					}
					var disabledDepth = 0;
					var prevLog;
					var prevInfo;
					var prevWarn;
					var prevError;
					var prevGroup;
					var prevGroupCollapsed;
					var prevGroupEnd;
					function disabledLog() {}
					disabledLog.__reactDisabledLog = true;
					function disableLogs() {
						{
							if (disabledDepth === 0) {
								prevLog = console.log;
								prevInfo = console.info;
								prevWarn = console.warn;
								prevError = console.error;
								prevGroup = console.group;
								prevGroupCollapsed = console.groupCollapsed;
								prevGroupEnd = console.groupEnd;
								var props = {
									configurable: true,
									enumerable: true,
									value: disabledLog,
									writable: true
								};
								Object.defineProperties(console, {
									info: props,
									log: props,
									warn: props,
									error: props,
									group: props,
									groupCollapsed: props,
									groupEnd: props
								});
							}
							disabledDepth++;
						}
					}
					function reenableLogs() {
						{
							disabledDepth--;
							if (disabledDepth === 0) {
								var props = {
									configurable: true,
									enumerable: true,
									writable: true
								};
								Object.defineProperties(console, {
									log: _assign({}, props, {
										value: prevLog
									}),
									info: _assign({}, props, {
										value: prevInfo
									}),
									warn: _assign({}, props, {
										value: prevWarn
									}),
									error: _assign({}, props, {
										value: prevError
									}),
									group: _assign({}, props, {
										value: prevGroup
									}),
									groupCollapsed: _assign({}, props, {
										value: prevGroupCollapsed
									}),
									groupEnd: _assign({}, props, {
										value: prevGroupEnd
									})
								});
							}
							if (disabledDepth < 0) {
								error('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
							}
						}
					}
					var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
					var prefix;
					function describeBuiltInComponentFrame(name, source, ownerFn) {
						{
							if (prefix === void 0) {
								try {
									throw Error();
								} catch (x) {
									var match = x.stack.trim().match(/\n( *(at )?)/);
									prefix = (match && match[1]) || '';
								}
							}
							return '\n' + prefix + name;
						}
					}
					var reentry = false;
					var componentFrameCache;
					{
						var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
						componentFrameCache = new PossiblyWeakMap();
					}
					function describeNativeComponentFrame(fn, construct) {
						if (!fn || reentry) {
							return '';
						}
						{
							var frame = componentFrameCache.get(fn);
							if (frame !== void 0) {
								return frame;
							}
						}
						var control;
						reentry = true;
						var previousPrepareStackTrace = Error.prepareStackTrace;
						Error.prepareStackTrace = void 0;
						var previousDispatcher;
						{
							previousDispatcher = ReactCurrentDispatcher.current;
							ReactCurrentDispatcher.current = null;
							disableLogs();
						}
						try {
							if (construct) {
								var Fake = function () {
									throw Error();
								};
								Object.defineProperty(Fake.prototype, 'props', {
									set: function () {
										throw Error();
									}
								});
								if (typeof Reflect === 'object' && Reflect.construct) {
									try {
										Reflect.construct(Fake, []);
									} catch (x) {
										control = x;
									}
									Reflect.construct(fn, [], Fake);
								} else {
									try {
										Fake.call();
									} catch (x) {
										control = x;
									}
									fn.call(Fake.prototype);
								}
							} else {
								try {
									throw Error();
								} catch (x) {
									control = x;
								}
								fn();
							}
						} catch (sample) {
							if (sample && control && typeof sample.stack === 'string') {
								var sampleLines = sample.stack.split('\n');
								var controlLines = control.stack.split('\n');
								var s = sampleLines.length - 1;
								var c = controlLines.length - 1;
								while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
									c--;
								}
								for (; s >= 1 && c >= 0; s--, c--) {
									if (sampleLines[s] !== controlLines[c]) {
										if (s !== 1 || c !== 1) {
											do {
												s--;
												c--;
												if (c < 0 || sampleLines[s] !== controlLines[c]) {
													var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
													{
														if (typeof fn === 'function') {
															componentFrameCache.set(fn, _frame);
														}
													}
													return _frame;
												}
											} while (s >= 1 && c >= 0);
										}
										break;
									}
								}
							}
						} finally {
							reentry = false;
							{
								ReactCurrentDispatcher.current = previousDispatcher;
								reenableLogs();
							}
							Error.prepareStackTrace = previousPrepareStackTrace;
						}
						var name = fn ? fn.displayName || fn.name : '';
						var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
						{
							if (typeof fn === 'function') {
								componentFrameCache.set(fn, syntheticFrame);
							}
						}
						return syntheticFrame;
					}
					function describeClassComponentFrame(ctor, source, ownerFn) {
						{
							return describeNativeComponentFrame(ctor, true);
						}
					}
					function describeFunctionComponentFrame(fn, source, ownerFn) {
						{
							return describeNativeComponentFrame(fn, false);
						}
					}
					function shouldConstruct(Component) {
						var prototype = Component.prototype;
						return !!(prototype && prototype.isReactComponent);
					}
					function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
						if (type == null) {
							return '';
						}
						if (typeof type === 'function') {
							{
								return describeNativeComponentFrame(type, shouldConstruct(type));
							}
						}
						if (typeof type === 'string') {
							return describeBuiltInComponentFrame(type);
						}
						switch (type) {
							case REACT_SUSPENSE_TYPE:
								return describeBuiltInComponentFrame('Suspense');
							case REACT_SUSPENSE_LIST_TYPE:
								return describeBuiltInComponentFrame('SuspenseList');
						}
						if (typeof type === 'object') {
							switch (type.$$typeof) {
								case REACT_FORWARD_REF_TYPE:
									return describeFunctionComponentFrame(type.render);
								case REACT_MEMO_TYPE:
									return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
								case REACT_BLOCK_TYPE:
									return describeFunctionComponentFrame(type._render);
								case REACT_LAZY_TYPE: {
									var lazyComponent = type;
									var payload = lazyComponent._payload;
									var init = lazyComponent._init;
									try {
										return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
									} catch (x) {}
								}
							}
						}
						return '';
					}
					function describeFiber(fiber) {
						var owner = fiber._debugOwner ? fiber._debugOwner.type : null;
						var source = fiber._debugSource;
						switch (fiber.tag) {
							case HostComponent:
								return describeBuiltInComponentFrame(fiber.type);
							case LazyComponent:
								return describeBuiltInComponentFrame('Lazy');
							case SuspenseComponent:
								return describeBuiltInComponentFrame('Suspense');
							case SuspenseListComponent:
								return describeBuiltInComponentFrame('SuspenseList');
							case FunctionComponent:
							case IndeterminateComponent:
							case SimpleMemoComponent:
								return describeFunctionComponentFrame(fiber.type);
							case ForwardRef:
								return describeFunctionComponentFrame(fiber.type.render);
							case Block:
								return describeFunctionComponentFrame(fiber.type._render);
							case ClassComponent:
								return describeClassComponentFrame(fiber.type);
							default:
								return '';
						}
					}
					function getStackByFiberInDevAndProd(workInProgress2) {
						try {
							var info = '';
							var node = workInProgress2;
							do {
								info += describeFiber(node);
								node = node.return;
							} while (node);
							return info;
						} catch (x) {
							return '\nError generating stack: ' + x.message + '\n' + x.stack;
						}
					}
					function getWrappedName(outerType, innerType, wrapperName) {
						var functionName = innerType.displayName || innerType.name || '';
						return (
							outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName)
						);
					}
					function getContextName(type) {
						return type.displayName || 'Context';
					}
					function getComponentName(type) {
						if (type == null) {
							return null;
						}
						{
							if (typeof type.tag === 'number') {
								error(
									'Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.'
								);
							}
						}
						if (typeof type === 'function') {
							return type.displayName || type.name || null;
						}
						if (typeof type === 'string') {
							return type;
						}
						switch (type) {
							case REACT_FRAGMENT_TYPE:
								return 'Fragment';
							case REACT_PORTAL_TYPE:
								return 'Portal';
							case REACT_PROFILER_TYPE:
								return 'Profiler';
							case REACT_STRICT_MODE_TYPE:
								return 'StrictMode';
							case REACT_SUSPENSE_TYPE:
								return 'Suspense';
							case REACT_SUSPENSE_LIST_TYPE:
								return 'SuspenseList';
						}
						if (typeof type === 'object') {
							switch (type.$$typeof) {
								case REACT_CONTEXT_TYPE:
									var context = type;
									return getContextName(context) + '.Consumer';
								case REACT_PROVIDER_TYPE:
									var provider = type;
									return getContextName(provider._context) + '.Provider';
								case REACT_FORWARD_REF_TYPE:
									return getWrappedName(type, type.render, 'ForwardRef');
								case REACT_MEMO_TYPE:
									return getComponentName(type.type);
								case REACT_BLOCK_TYPE:
									return getComponentName(type._render);
								case REACT_LAZY_TYPE: {
									var lazyComponent = type;
									var payload = lazyComponent._payload;
									var init = lazyComponent._init;
									try {
										return getComponentName(init(payload));
									} catch (x) {
										return null;
									}
								}
							}
						}
						return null;
					}
					var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
					var current = null;
					var isRendering = false;
					function getCurrentFiberOwnerNameInDevOrNull() {
						{
							if (current === null) {
								return null;
							}
							var owner = current._debugOwner;
							if (owner !== null && typeof owner !== 'undefined') {
								return getComponentName(owner.type);
							}
						}
						return null;
					}
					function getCurrentFiberStackInDev() {
						{
							if (current === null) {
								return '';
							}
							return getStackByFiberInDevAndProd(current);
						}
					}
					function resetCurrentFiber() {
						{
							ReactDebugCurrentFrame.getCurrentStack = null;
							current = null;
							isRendering = false;
						}
					}
					function setCurrentFiber(fiber) {
						{
							ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackInDev;
							current = fiber;
							isRendering = false;
						}
					}
					function setIsRendering(rendering) {
						{
							isRendering = rendering;
						}
					}
					function getIsRendering() {
						{
							return isRendering;
						}
					}
					function toString(value) {
						return '' + value;
					}
					function getToStringValue(value) {
						switch (typeof value) {
							case 'boolean':
							case 'number':
							case 'object':
							case 'string':
							case 'undefined':
								return value;
							default:
								return '';
						}
					}
					var hasReadOnlyValue = {
						button: true,
						checkbox: true,
						image: true,
						hidden: true,
						radio: true,
						reset: true,
						submit: true
					};
					function checkControlledValueProps(tagName, props) {
						{
							if (
								!(
									hasReadOnlyValue[props.type] ||
									props.onChange ||
									props.onInput ||
									props.readOnly ||
									props.disabled ||
									props.value == null
								)
							) {
								error(
									'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
								);
							}
							if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
								error(
									'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
								);
							}
						}
					}
					function isCheckable(elem) {
						var type = elem.type;
						var nodeName = elem.nodeName;
						return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
					}
					function getTracker(node) {
						return node._valueTracker;
					}
					function detachTracker(node) {
						node._valueTracker = null;
					}
					function getValueFromNode(node) {
						var value = '';
						if (!node) {
							return value;
						}
						if (isCheckable(node)) {
							value = node.checked ? 'true' : 'false';
						} else {
							value = node.value;
						}
						return value;
					}
					function trackValueOnNode(node) {
						var valueField = isCheckable(node) ? 'checked' : 'value';
						var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
						var currentValue = '' + node[valueField];
						if (
							node.hasOwnProperty(valueField) ||
							typeof descriptor === 'undefined' ||
							typeof descriptor.get !== 'function' ||
							typeof descriptor.set !== 'function'
						) {
							return;
						}
						var get2 = descriptor.get,
							set2 = descriptor.set;
						Object.defineProperty(node, valueField, {
							configurable: true,
							get: function () {
								return get2.call(this);
							},
							set: function (value) {
								currentValue = '' + value;
								set2.call(this, value);
							}
						});
						Object.defineProperty(node, valueField, {
							enumerable: descriptor.enumerable
						});
						var tracker = {
							getValue: function () {
								return currentValue;
							},
							setValue: function (value) {
								currentValue = '' + value;
							},
							stopTracking: function () {
								detachTracker(node);
								delete node[valueField];
							}
						};
						return tracker;
					}
					function track(node) {
						if (getTracker(node)) {
							return;
						}
						node._valueTracker = trackValueOnNode(node);
					}
					function updateValueIfChanged(node) {
						if (!node) {
							return false;
						}
						var tracker = getTracker(node);
						if (!tracker) {
							return true;
						}
						var lastValue = tracker.getValue();
						var nextValue = getValueFromNode(node);
						if (nextValue !== lastValue) {
							tracker.setValue(nextValue);
							return true;
						}
						return false;
					}
					function getActiveElement(doc) {
						doc = doc || (typeof document !== 'undefined' ? document : void 0);
						if (typeof doc === 'undefined') {
							return null;
						}
						try {
							return doc.activeElement || doc.body;
						} catch (e) {
							return doc.body;
						}
					}
					var didWarnValueDefaultValue = false;
					var didWarnCheckedDefaultChecked = false;
					var didWarnControlledToUncontrolled = false;
					var didWarnUncontrolledToControlled = false;
					function isControlled(props) {
						var usesChecked = props.type === 'checkbox' || props.type === 'radio';
						return usesChecked ? props.checked != null : props.value != null;
					}
					function getHostProps(element, props) {
						var node = element;
						var checked = props.checked;
						var hostProps = _assign({}, props, {
							defaultChecked: void 0,
							defaultValue: void 0,
							value: void 0,
							checked: checked != null ? checked : node._wrapperState.initialChecked
						});
						return hostProps;
					}
					function initWrapperState(element, props) {
						{
							checkControlledValueProps('input', props);
							if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnCheckedDefaultChecked) {
								error(
									'%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
									getCurrentFiberOwnerNameInDevOrNull() || 'A component',
									props.type
								);
								didWarnCheckedDefaultChecked = true;
							}
							if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValueDefaultValue) {
								error(
									'%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
									getCurrentFiberOwnerNameInDevOrNull() || 'A component',
									props.type
								);
								didWarnValueDefaultValue = true;
							}
						}
						var node = element;
						var defaultValue = props.defaultValue == null ? '' : props.defaultValue;
						node._wrapperState = {
							initialChecked: props.checked != null ? props.checked : props.defaultChecked,
							initialValue: getToStringValue(props.value != null ? props.value : defaultValue),
							controlled: isControlled(props)
						};
					}
					function updateChecked(element, props) {
						var node = element;
						var checked = props.checked;
						if (checked != null) {
							setValueForProperty(node, 'checked', checked, false);
						}
					}
					function updateWrapper(element, props) {
						var node = element;
						{
							var controlled = isControlled(props);
							if (!node._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
								error(
									'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
								);
								didWarnUncontrolledToControlled = true;
							}
							if (node._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
								error(
									'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
								);
								didWarnControlledToUncontrolled = true;
							}
						}
						updateChecked(element, props);
						var value = getToStringValue(props.value);
						var type = props.type;
						if (value != null) {
							if (type === 'number') {
								if ((value === 0 && node.value === '') || node.value != value) {
									node.value = toString(value);
								}
							} else if (node.value !== toString(value)) {
								node.value = toString(value);
							}
						} else if (type === 'submit' || type === 'reset') {
							node.removeAttribute('value');
							return;
						}
						{
							if (props.hasOwnProperty('value')) {
								setDefaultValue(node, props.type, value);
							} else if (props.hasOwnProperty('defaultValue')) {
								setDefaultValue(node, props.type, getToStringValue(props.defaultValue));
							}
						}
						{
							if (props.checked == null && props.defaultChecked != null) {
								node.defaultChecked = !!props.defaultChecked;
							}
						}
					}
					function postMountWrapper(element, props, isHydrating2) {
						var node = element;
						if (props.hasOwnProperty('value') || props.hasOwnProperty('defaultValue')) {
							var type = props.type;
							var isButton = type === 'submit' || type === 'reset';
							if (isButton && (props.value === void 0 || props.value === null)) {
								return;
							}
							var initialValue = toString(node._wrapperState.initialValue);
							if (!isHydrating2) {
								{
									if (initialValue !== node.value) {
										node.value = initialValue;
									}
								}
							}
							{
								node.defaultValue = initialValue;
							}
						}
						var name = node.name;
						if (name !== '') {
							node.name = '';
						}
						{
							node.defaultChecked = !node.defaultChecked;
							node.defaultChecked = !!node._wrapperState.initialChecked;
						}
						if (name !== '') {
							node.name = name;
						}
					}
					function restoreControlledState(element, props) {
						var node = element;
						updateWrapper(node, props);
						updateNamedCousins(node, props);
					}
					function updateNamedCousins(rootNode, props) {
						var name = props.name;
						if (props.type === 'radio' && name != null) {
							var queryRoot = rootNode;
							while (queryRoot.parentNode) {
								queryRoot = queryRoot.parentNode;
							}
							var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
							for (var i2 = 0; i2 < group.length; i2++) {
								var otherNode = group[i2];
								if (otherNode === rootNode || otherNode.form !== rootNode.form) {
									continue;
								}
								var otherProps = getFiberCurrentPropsFromNode(otherNode);
								if (!otherProps) {
									{
										throw Error(
											'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'
										);
									}
								}
								updateValueIfChanged(otherNode);
								updateWrapper(otherNode, otherProps);
							}
						}
					}
					function setDefaultValue(node, type, value) {
						if (type !== 'number' || getActiveElement(node.ownerDocument) !== node) {
							if (value == null) {
								node.defaultValue = toString(node._wrapperState.initialValue);
							} else if (node.defaultValue !== toString(value)) {
								node.defaultValue = toString(value);
							}
						}
					}
					var didWarnSelectedSetOnOption = false;
					var didWarnInvalidChild = false;
					function flattenChildren(children) {
						var content = '';
						React2.Children.forEach(children, function (child) {
							if (child == null) {
								return;
							}
							content += child;
						});
						return content;
					}
					function validateProps(element, props) {
						{
							if (typeof props.children === 'object' && props.children !== null) {
								React2.Children.forEach(props.children, function (child) {
									if (child == null) {
										return;
									}
									if (typeof child === 'string' || typeof child === 'number') {
										return;
									}
									if (typeof child.type !== 'string') {
										return;
									}
									if (!didWarnInvalidChild) {
										didWarnInvalidChild = true;
										error('Only strings and numbers are supported as <option> children.');
									}
								});
							}
							if (props.selected != null && !didWarnSelectedSetOnOption) {
								error('Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.');
								didWarnSelectedSetOnOption = true;
							}
						}
					}
					function postMountWrapper$1(element, props) {
						if (props.value != null) {
							element.setAttribute('value', toString(getToStringValue(props.value)));
						}
					}
					function getHostProps$1(element, props) {
						var hostProps = _assign(
							{
								children: void 0
							},
							props
						);
						var content = flattenChildren(props.children);
						if (content) {
							hostProps.children = content;
						}
						return hostProps;
					}
					var didWarnValueDefaultValue$1;
					{
						didWarnValueDefaultValue$1 = false;
					}
					function getDeclarationErrorAddendum() {
						var ownerName = getCurrentFiberOwnerNameInDevOrNull();
						if (ownerName) {
							return '\n\nCheck the render method of `' + ownerName + '`.';
						}
						return '';
					}
					var valuePropNames = ['value', 'defaultValue'];
					function checkSelectPropTypes(props) {
						{
							checkControlledValueProps('select', props);
							for (var i2 = 0; i2 < valuePropNames.length; i2++) {
								var propName = valuePropNames[i2];
								if (props[propName] == null) {
									continue;
								}
								var isArray2 = Array.isArray(props[propName]);
								if (props.multiple && !isArray2) {
									error(
										'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
										propName,
										getDeclarationErrorAddendum()
									);
								} else if (!props.multiple && isArray2) {
									error(
										'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
										propName,
										getDeclarationErrorAddendum()
									);
								}
							}
						}
					}
					function updateOptions(node, multiple, propValue, setDefaultSelected) {
						var options2 = node.options;
						if (multiple) {
							var selectedValues = propValue;
							var selectedValue = {};
							for (var i2 = 0; i2 < selectedValues.length; i2++) {
								selectedValue['$' + selectedValues[i2]] = true;
							}
							for (var _i = 0; _i < options2.length; _i++) {
								var selected = selectedValue.hasOwnProperty('$' + options2[_i].value);
								if (options2[_i].selected !== selected) {
									options2[_i].selected = selected;
								}
								if (selected && setDefaultSelected) {
									options2[_i].defaultSelected = true;
								}
							}
						} else {
							var _selectedValue = toString(getToStringValue(propValue));
							var defaultSelected = null;
							for (var _i2 = 0; _i2 < options2.length; _i2++) {
								if (options2[_i2].value === _selectedValue) {
									options2[_i2].selected = true;
									if (setDefaultSelected) {
										options2[_i2].defaultSelected = true;
									}
									return;
								}
								if (defaultSelected === null && !options2[_i2].disabled) {
									defaultSelected = options2[_i2];
								}
							}
							if (defaultSelected !== null) {
								defaultSelected.selected = true;
							}
						}
					}
					function getHostProps$2(element, props) {
						return _assign({}, props, {
							value: void 0
						});
					}
					function initWrapperState$1(element, props) {
						var node = element;
						{
							checkSelectPropTypes(props);
						}
						node._wrapperState = {
							wasMultiple: !!props.multiple
						};
						{
							if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValueDefaultValue$1) {
								error(
									'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
								);
								didWarnValueDefaultValue$1 = true;
							}
						}
					}
					function postMountWrapper$2(element, props) {
						var node = element;
						node.multiple = !!props.multiple;
						var value = props.value;
						if (value != null) {
							updateOptions(node, !!props.multiple, value, false);
						} else if (props.defaultValue != null) {
							updateOptions(node, !!props.multiple, props.defaultValue, true);
						}
					}
					function postUpdateWrapper(element, props) {
						var node = element;
						var wasMultiple = node._wrapperState.wasMultiple;
						node._wrapperState.wasMultiple = !!props.multiple;
						var value = props.value;
						if (value != null) {
							updateOptions(node, !!props.multiple, value, false);
						} else if (wasMultiple !== !!props.multiple) {
							if (props.defaultValue != null) {
								updateOptions(node, !!props.multiple, props.defaultValue, true);
							} else {
								updateOptions(node, !!props.multiple, props.multiple ? [] : '', false);
							}
						}
					}
					function restoreControlledState$1(element, props) {
						var node = element;
						var value = props.value;
						if (value != null) {
							updateOptions(node, !!props.multiple, value, false);
						}
					}
					var didWarnValDefaultVal = false;
					function getHostProps$3(element, props) {
						var node = element;
						if (!(props.dangerouslySetInnerHTML == null)) {
							{
								throw Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
							}
						}
						var hostProps = _assign({}, props, {
							value: void 0,
							defaultValue: void 0,
							children: toString(node._wrapperState.initialValue)
						});
						return hostProps;
					}
					function initWrapperState$2(element, props) {
						var node = element;
						{
							checkControlledValueProps('textarea', props);
							if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValDefaultVal) {
								error(
									'%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
									getCurrentFiberOwnerNameInDevOrNull() || 'A component'
								);
								didWarnValDefaultVal = true;
							}
						}
						var initialValue = props.value;
						if (initialValue == null) {
							var children = props.children,
								defaultValue = props.defaultValue;
							if (children != null) {
								{
									error('Use the `defaultValue` or `value` props instead of setting children on <textarea>.');
								}
								{
									if (!(defaultValue == null)) {
										{
											throw Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
										}
									}
									if (Array.isArray(children)) {
										if (!(children.length <= 1)) {
											{
												throw Error('<textarea> can only have at most one child.');
											}
										}
										children = children[0];
									}
									defaultValue = children;
								}
							}
							if (defaultValue == null) {
								defaultValue = '';
							}
							initialValue = defaultValue;
						}
						node._wrapperState = {
							initialValue: getToStringValue(initialValue)
						};
					}
					function updateWrapper$1(element, props) {
						var node = element;
						var value = getToStringValue(props.value);
						var defaultValue = getToStringValue(props.defaultValue);
						if (value != null) {
							var newValue = toString(value);
							if (newValue !== node.value) {
								node.value = newValue;
							}
							if (props.defaultValue == null && node.defaultValue !== newValue) {
								node.defaultValue = newValue;
							}
						}
						if (defaultValue != null) {
							node.defaultValue = toString(defaultValue);
						}
					}
					function postMountWrapper$3(element, props) {
						var node = element;
						var textContent = node.textContent;
						if (textContent === node._wrapperState.initialValue) {
							if (textContent !== '' && textContent !== null) {
								node.value = textContent;
							}
						}
					}
					function restoreControlledState$2(element, props) {
						updateWrapper$1(element, props);
					}
					var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
					var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
					var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
					var Namespaces = {
						html: HTML_NAMESPACE,
						mathml: MATH_NAMESPACE,
						svg: SVG_NAMESPACE
					};
					function getIntrinsicNamespace(type) {
						switch (type) {
							case 'svg':
								return SVG_NAMESPACE;
							case 'math':
								return MATH_NAMESPACE;
							default:
								return HTML_NAMESPACE;
						}
					}
					function getChildNamespace(parentNamespace, type) {
						if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
							return getIntrinsicNamespace(type);
						}
						if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
							return HTML_NAMESPACE;
						}
						return parentNamespace;
					}
					var createMicrosoftUnsafeLocalFunction = function (func) {
						if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
							return function (arg0, arg1, arg2, arg3) {
								MSApp.execUnsafeLocalFunction(function () {
									return func(arg0, arg1, arg2, arg3);
								});
							};
						} else {
							return func;
						}
					};
					var reusableSVGContainer;
					var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
						if (node.namespaceURI === Namespaces.svg) {
							if (!('innerHTML' in node)) {
								reusableSVGContainer = reusableSVGContainer || document.createElement('div');
								reusableSVGContainer.innerHTML = '<svg>' + html.valueOf().toString() + '</svg>';
								var svgNode = reusableSVGContainer.firstChild;
								while (node.firstChild) {
									node.removeChild(node.firstChild);
								}
								while (svgNode.firstChild) {
									node.appendChild(svgNode.firstChild);
								}
								return;
							}
						}
						node.innerHTML = html;
					});
					var ELEMENT_NODE = 1;
					var TEXT_NODE = 3;
					var COMMENT_NODE = 8;
					var DOCUMENT_NODE = 9;
					var DOCUMENT_FRAGMENT_NODE = 11;
					var setTextContent = function (node, text) {
						if (text) {
							var firstChild = node.firstChild;
							if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
								firstChild.nodeValue = text;
								return;
							}
						}
						node.textContent = text;
					};
					var shorthandToLonghand = {
						animation: [
							'animationDelay',
							'animationDirection',
							'animationDuration',
							'animationFillMode',
							'animationIterationCount',
							'animationName',
							'animationPlayState',
							'animationTimingFunction'
						],
						background: [
							'backgroundAttachment',
							'backgroundClip',
							'backgroundColor',
							'backgroundImage',
							'backgroundOrigin',
							'backgroundPositionX',
							'backgroundPositionY',
							'backgroundRepeat',
							'backgroundSize'
						],
						backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
						border: [
							'borderBottomColor',
							'borderBottomStyle',
							'borderBottomWidth',
							'borderImageOutset',
							'borderImageRepeat',
							'borderImageSlice',
							'borderImageSource',
							'borderImageWidth',
							'borderLeftColor',
							'borderLeftStyle',
							'borderLeftWidth',
							'borderRightColor',
							'borderRightStyle',
							'borderRightWidth',
							'borderTopColor',
							'borderTopStyle',
							'borderTopWidth'
						],
						borderBlockEnd: ['borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth'],
						borderBlockStart: ['borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth'],
						borderBottom: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth'],
						borderColor: ['borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor'],
						borderImage: [
							'borderImageOutset',
							'borderImageRepeat',
							'borderImageSlice',
							'borderImageSource',
							'borderImageWidth'
						],
						borderInlineEnd: ['borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth'],
						borderInlineStart: ['borderInlineStartColor', 'borderInlineStartStyle', 'borderInlineStartWidth'],
						borderLeft: ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth'],
						borderRadius: [
							'borderBottomLeftRadius',
							'borderBottomRightRadius',
							'borderTopLeftRadius',
							'borderTopRightRadius'
						],
						borderRight: ['borderRightColor', 'borderRightStyle', 'borderRightWidth'],
						borderStyle: ['borderBottomStyle', 'borderLeftStyle', 'borderRightStyle', 'borderTopStyle'],
						borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
						borderWidth: ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth'],
						columnRule: ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth'],
						columns: ['columnCount', 'columnWidth'],
						flex: ['flexBasis', 'flexGrow', 'flexShrink'],
						flexFlow: ['flexDirection', 'flexWrap'],
						font: [
							'fontFamily',
							'fontFeatureSettings',
							'fontKerning',
							'fontLanguageOverride',
							'fontSize',
							'fontSizeAdjust',
							'fontStretch',
							'fontStyle',
							'fontVariant',
							'fontVariantAlternates',
							'fontVariantCaps',
							'fontVariantEastAsian',
							'fontVariantLigatures',
							'fontVariantNumeric',
							'fontVariantPosition',
							'fontWeight',
							'lineHeight'
						],
						fontVariant: [
							'fontVariantAlternates',
							'fontVariantCaps',
							'fontVariantEastAsian',
							'fontVariantLigatures',
							'fontVariantNumeric',
							'fontVariantPosition'
						],
						gap: ['columnGap', 'rowGap'],
						grid: [
							'gridAutoColumns',
							'gridAutoFlow',
							'gridAutoRows',
							'gridTemplateAreas',
							'gridTemplateColumns',
							'gridTemplateRows'
						],
						gridArea: ['gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart'],
						gridColumn: ['gridColumnEnd', 'gridColumnStart'],
						gridColumnGap: ['columnGap'],
						gridGap: ['columnGap', 'rowGap'],
						gridRow: ['gridRowEnd', 'gridRowStart'],
						gridRowGap: ['rowGap'],
						gridTemplate: ['gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows'],
						listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
						margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
						marker: ['markerEnd', 'markerMid', 'markerStart'],
						mask: [
							'maskClip',
							'maskComposite',
							'maskImage',
							'maskMode',
							'maskOrigin',
							'maskPositionX',
							'maskPositionY',
							'maskRepeat',
							'maskSize'
						],
						maskPosition: ['maskPositionX', 'maskPositionY'],
						outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
						overflow: ['overflowX', 'overflowY'],
						padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
						placeContent: ['alignContent', 'justifyContent'],
						placeItems: ['alignItems', 'justifyItems'],
						placeSelf: ['alignSelf', 'justifySelf'],
						textDecoration: ['textDecorationColor', 'textDecorationLine', 'textDecorationStyle'],
						textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
						transition: ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction'],
						wordWrap: ['overflowWrap']
					};
					var isUnitlessNumber = {
						animationIterationCount: true,
						borderImageOutset: true,
						borderImageSlice: true,
						borderImageWidth: true,
						boxFlex: true,
						boxFlexGroup: true,
						boxOrdinalGroup: true,
						columnCount: true,
						columns: true,
						flex: true,
						flexGrow: true,
						flexPositive: true,
						flexShrink: true,
						flexNegative: true,
						flexOrder: true,
						gridArea: true,
						gridRow: true,
						gridRowEnd: true,
						gridRowSpan: true,
						gridRowStart: true,
						gridColumn: true,
						gridColumnEnd: true,
						gridColumnSpan: true,
						gridColumnStart: true,
						fontWeight: true,
						lineClamp: true,
						lineHeight: true,
						opacity: true,
						order: true,
						orphans: true,
						tabSize: true,
						widows: true,
						zIndex: true,
						zoom: true,
						fillOpacity: true,
						floodOpacity: true,
						stopOpacity: true,
						strokeDasharray: true,
						strokeDashoffset: true,
						strokeMiterlimit: true,
						strokeOpacity: true,
						strokeWidth: true
					};
					function prefixKey(prefix2, key) {
						return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
					}
					var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
					Object.keys(isUnitlessNumber).forEach(function (prop) {
						prefixes.forEach(function (prefix2) {
							isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
						});
					});
					function dangerousStyleValue(name, value, isCustomProperty) {
						var isEmpty = value == null || typeof value === 'boolean' || value === '';
						if (isEmpty) {
							return '';
						}
						if (
							!isCustomProperty &&
							typeof value === 'number' &&
							value !== 0 &&
							!(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
						) {
							return value + 'px';
						}
						return ('' + value).trim();
					}
					var uppercasePattern = /([A-Z])/g;
					var msPattern = /^ms-/;
					function hyphenateStyleName(name) {
						return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
					}
					var warnValidStyle = function () {};
					{
						var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
						var msPattern$1 = /^-ms-/;
						var hyphenPattern = /-(.)/g;
						var badStyleValueWithSemicolonPattern = /;\s*$/;
						var warnedStyleNames = {};
						var warnedStyleValues = {};
						var warnedForNaNValue = false;
						var warnedForInfinityValue = false;
						var camelize = function (string) {
							return string.replace(hyphenPattern, function (_, character) {
								return character.toUpperCase();
							});
						};
						var warnHyphenatedStyleName = function (name) {
							if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
								return;
							}
							warnedStyleNames[name] = true;
							error(
								'Unsupported style property %s. Did you mean %s?',
								name,
								camelize(name.replace(msPattern$1, 'ms-'))
							);
						};
						var warnBadVendoredStyleName = function (name) {
							if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
								return;
							}
							warnedStyleNames[name] = true;
							error(
								'Unsupported vendor-prefixed style property %s. Did you mean %s?',
								name,
								name.charAt(0).toUpperCase() + name.slice(1)
							);
						};
						var warnStyleValueWithSemicolon = function (name, value) {
							if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
								return;
							}
							warnedStyleValues[value] = true;
							error(
								`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
								name,
								value.replace(badStyleValueWithSemicolonPattern, '')
							);
						};
						var warnStyleValueIsNaN = function (name, value) {
							if (warnedForNaNValue) {
								return;
							}
							warnedForNaNValue = true;
							error('`NaN` is an invalid value for the `%s` css style property.', name);
						};
						var warnStyleValueIsInfinity = function (name, value) {
							if (warnedForInfinityValue) {
								return;
							}
							warnedForInfinityValue = true;
							error('`Infinity` is an invalid value for the `%s` css style property.', name);
						};
						warnValidStyle = function (name, value) {
							if (name.indexOf('-') > -1) {
								warnHyphenatedStyleName(name);
							} else if (badVendoredStyleNamePattern.test(name)) {
								warnBadVendoredStyleName(name);
							} else if (badStyleValueWithSemicolonPattern.test(value)) {
								warnStyleValueWithSemicolon(name, value);
							}
							if (typeof value === 'number') {
								if (isNaN(value)) {
									warnStyleValueIsNaN(name, value);
								} else if (!isFinite(value)) {
									warnStyleValueIsInfinity(name, value);
								}
							}
						};
					}
					var warnValidStyle$1 = warnValidStyle;
					function createDangerousStringForStyles(styles) {
						{
							var serialized = '';
							var delimiter = '';
							for (var styleName in styles) {
								if (!styles.hasOwnProperty(styleName)) {
									continue;
								}
								var styleValue = styles[styleName];
								if (styleValue != null) {
									var isCustomProperty = styleName.indexOf('--') === 0;
									serialized += delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)) + ':';
									serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
									delimiter = ';';
								}
							}
							return serialized || null;
						}
					}
					function setValueForStyles(node, styles) {
						var style2 = node.style;
						for (var styleName in styles) {
							if (!styles.hasOwnProperty(styleName)) {
								continue;
							}
							var isCustomProperty = styleName.indexOf('--') === 0;
							{
								if (!isCustomProperty) {
									warnValidStyle$1(styleName, styles[styleName]);
								}
							}
							var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
							if (styleName === 'float') {
								styleName = 'cssFloat';
							}
							if (isCustomProperty) {
								style2.setProperty(styleName, styleValue);
							} else {
								style2[styleName] = styleValue;
							}
						}
					}
					function isValueEmpty(value) {
						return value == null || typeof value === 'boolean' || value === '';
					}
					function expandShorthandMap(styles) {
						var expanded = {};
						for (var key in styles) {
							var longhands = shorthandToLonghand[key] || [key];
							for (var i2 = 0; i2 < longhands.length; i2++) {
								expanded[longhands[i2]] = key;
							}
						}
						return expanded;
					}
					function validateShorthandPropertyCollisionInDev(styleUpdates, nextStyles) {
						{
							if (!nextStyles) {
								return;
							}
							var expandedUpdates = expandShorthandMap(styleUpdates);
							var expandedStyles = expandShorthandMap(nextStyles);
							var warnedAbout = {};
							for (var key in expandedUpdates) {
								var originalKey = expandedUpdates[key];
								var correctOriginalKey = expandedStyles[key];
								if (correctOriginalKey && originalKey !== correctOriginalKey) {
									var warningKey = originalKey + ',' + correctOriginalKey;
									if (warnedAbout[warningKey]) {
										continue;
									}
									warnedAbout[warningKey] = true;
									error(
										"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
										isValueEmpty(styleUpdates[originalKey]) ? 'Removing' : 'Updating',
										originalKey,
										correctOriginalKey
									);
								}
							}
						}
					}
					var omittedCloseTags = {
						area: true,
						base: true,
						br: true,
						col: true,
						embed: true,
						hr: true,
						img: true,
						input: true,
						keygen: true,
						link: true,
						meta: true,
						param: true,
						source: true,
						track: true,
						wbr: true
					};
					var voidElementTags = _assign(
						{
							menuitem: true
						},
						omittedCloseTags
					);
					var HTML = '__html';
					function assertValidProps(tag, props) {
						if (!props) {
							return;
						}
						if (voidElementTags[tag]) {
							if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
								{
									throw Error(
										tag + ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.'
									);
								}
							}
						}
						if (props.dangerouslySetInnerHTML != null) {
							if (!(props.children == null)) {
								{
									throw Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
								}
							}
							if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
								{
									throw Error(
										'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
									);
								}
							}
						}
						{
							if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
								error(
									'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.'
								);
							}
						}
						if (!(props.style == null || typeof props.style === 'object')) {
							{
								throw Error(
									"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
								);
							}
						}
					}
					function isCustomComponent(tagName, props) {
						if (tagName.indexOf('-') === -1) {
							return typeof props.is === 'string';
						}
						switch (tagName) {
							case 'annotation-xml':
							case 'color-profile':
							case 'font-face':
							case 'font-face-src':
							case 'font-face-uri':
							case 'font-face-format':
							case 'font-face-name':
							case 'missing-glyph':
								return false;
							default:
								return true;
						}
					}
					var possibleStandardNames = {
						accept: 'accept',
						acceptcharset: 'acceptCharset',
						'accept-charset': 'acceptCharset',
						accesskey: 'accessKey',
						action: 'action',
						allowfullscreen: 'allowFullScreen',
						alt: 'alt',
						as: 'as',
						async: 'async',
						autocapitalize: 'autoCapitalize',
						autocomplete: 'autoComplete',
						autocorrect: 'autoCorrect',
						autofocus: 'autoFocus',
						autoplay: 'autoPlay',
						autosave: 'autoSave',
						capture: 'capture',
						cellpadding: 'cellPadding',
						cellspacing: 'cellSpacing',
						challenge: 'challenge',
						charset: 'charSet',
						checked: 'checked',
						children: 'children',
						cite: 'cite',
						class: 'className',
						classid: 'classID',
						classname: 'className',
						cols: 'cols',
						colspan: 'colSpan',
						content: 'content',
						contenteditable: 'contentEditable',
						contextmenu: 'contextMenu',
						controls: 'controls',
						controlslist: 'controlsList',
						coords: 'coords',
						crossorigin: 'crossOrigin',
						dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
						data: 'data',
						datetime: 'dateTime',
						default: 'default',
						defaultchecked: 'defaultChecked',
						defaultvalue: 'defaultValue',
						defer: 'defer',
						dir: 'dir',
						disabled: 'disabled',
						disablepictureinpicture: 'disablePictureInPicture',
						disableremoteplayback: 'disableRemotePlayback',
						download: 'download',
						draggable: 'draggable',
						enctype: 'encType',
						enterkeyhint: 'enterKeyHint',
						for: 'htmlFor',
						form: 'form',
						formmethod: 'formMethod',
						formaction: 'formAction',
						formenctype: 'formEncType',
						formnovalidate: 'formNoValidate',
						formtarget: 'formTarget',
						frameborder: 'frameBorder',
						headers: 'headers',
						height: 'height',
						hidden: 'hidden',
						high: 'high',
						href: 'href',
						hreflang: 'hrefLang',
						htmlfor: 'htmlFor',
						httpequiv: 'httpEquiv',
						'http-equiv': 'httpEquiv',
						icon: 'icon',
						id: 'id',
						innerhtml: 'innerHTML',
						inputmode: 'inputMode',
						integrity: 'integrity',
						is: 'is',
						itemid: 'itemID',
						itemprop: 'itemProp',
						itemref: 'itemRef',
						itemscope: 'itemScope',
						itemtype: 'itemType',
						keyparams: 'keyParams',
						keytype: 'keyType',
						kind: 'kind',
						label: 'label',
						lang: 'lang',
						list: 'list',
						loop: 'loop',
						low: 'low',
						manifest: 'manifest',
						marginwidth: 'marginWidth',
						marginheight: 'marginHeight',
						max: 'max',
						maxlength: 'maxLength',
						media: 'media',
						mediagroup: 'mediaGroup',
						method: 'method',
						min: 'min',
						minlength: 'minLength',
						multiple: 'multiple',
						muted: 'muted',
						name: 'name',
						nomodule: 'noModule',
						nonce: 'nonce',
						novalidate: 'noValidate',
						open: 'open',
						optimum: 'optimum',
						pattern: 'pattern',
						placeholder: 'placeholder',
						playsinline: 'playsInline',
						poster: 'poster',
						preload: 'preload',
						profile: 'profile',
						radiogroup: 'radioGroup',
						readonly: 'readOnly',
						referrerpolicy: 'referrerPolicy',
						rel: 'rel',
						required: 'required',
						reversed: 'reversed',
						role: 'role',
						rows: 'rows',
						rowspan: 'rowSpan',
						sandbox: 'sandbox',
						scope: 'scope',
						scoped: 'scoped',
						scrolling: 'scrolling',
						seamless: 'seamless',
						selected: 'selected',
						shape: 'shape',
						size: 'size',
						sizes: 'sizes',
						span: 'span',
						spellcheck: 'spellCheck',
						src: 'src',
						srcdoc: 'srcDoc',
						srclang: 'srcLang',
						srcset: 'srcSet',
						start: 'start',
						step: 'step',
						style: 'style',
						summary: 'summary',
						tabindex: 'tabIndex',
						target: 'target',
						title: 'title',
						type: 'type',
						usemap: 'useMap',
						value: 'value',
						width: 'width',
						wmode: 'wmode',
						wrap: 'wrap',
						about: 'about',
						accentheight: 'accentHeight',
						'accent-height': 'accentHeight',
						accumulate: 'accumulate',
						additive: 'additive',
						alignmentbaseline: 'alignmentBaseline',
						'alignment-baseline': 'alignmentBaseline',
						allowreorder: 'allowReorder',
						alphabetic: 'alphabetic',
						amplitude: 'amplitude',
						arabicform: 'arabicForm',
						'arabic-form': 'arabicForm',
						ascent: 'ascent',
						attributename: 'attributeName',
						attributetype: 'attributeType',
						autoreverse: 'autoReverse',
						azimuth: 'azimuth',
						basefrequency: 'baseFrequency',
						baselineshift: 'baselineShift',
						'baseline-shift': 'baselineShift',
						baseprofile: 'baseProfile',
						bbox: 'bbox',
						begin: 'begin',
						bias: 'bias',
						by: 'by',
						calcmode: 'calcMode',
						capheight: 'capHeight',
						'cap-height': 'capHeight',
						clip: 'clip',
						clippath: 'clipPath',
						'clip-path': 'clipPath',
						clippathunits: 'clipPathUnits',
						cliprule: 'clipRule',
						'clip-rule': 'clipRule',
						color: 'color',
						colorinterpolation: 'colorInterpolation',
						'color-interpolation': 'colorInterpolation',
						colorinterpolationfilters: 'colorInterpolationFilters',
						'color-interpolation-filters': 'colorInterpolationFilters',
						colorprofile: 'colorProfile',
						'color-profile': 'colorProfile',
						colorrendering: 'colorRendering',
						'color-rendering': 'colorRendering',
						contentscripttype: 'contentScriptType',
						contentstyletype: 'contentStyleType',
						cursor: 'cursor',
						cx: 'cx',
						cy: 'cy',
						d: 'd',
						datatype: 'datatype',
						decelerate: 'decelerate',
						descent: 'descent',
						diffuseconstant: 'diffuseConstant',
						direction: 'direction',
						display: 'display',
						divisor: 'divisor',
						dominantbaseline: 'dominantBaseline',
						'dominant-baseline': 'dominantBaseline',
						dur: 'dur',
						dx: 'dx',
						dy: 'dy',
						edgemode: 'edgeMode',
						elevation: 'elevation',
						enablebackground: 'enableBackground',
						'enable-background': 'enableBackground',
						end: 'end',
						exponent: 'exponent',
						externalresourcesrequired: 'externalResourcesRequired',
						fill: 'fill',
						fillopacity: 'fillOpacity',
						'fill-opacity': 'fillOpacity',
						fillrule: 'fillRule',
						'fill-rule': 'fillRule',
						filter: 'filter',
						filterres: 'filterRes',
						filterunits: 'filterUnits',
						floodopacity: 'floodOpacity',
						'flood-opacity': 'floodOpacity',
						floodcolor: 'floodColor',
						'flood-color': 'floodColor',
						focusable: 'focusable',
						fontfamily: 'fontFamily',
						'font-family': 'fontFamily',
						fontsize: 'fontSize',
						'font-size': 'fontSize',
						fontsizeadjust: 'fontSizeAdjust',
						'font-size-adjust': 'fontSizeAdjust',
						fontstretch: 'fontStretch',
						'font-stretch': 'fontStretch',
						fontstyle: 'fontStyle',
						'font-style': 'fontStyle',
						fontvariant: 'fontVariant',
						'font-variant': 'fontVariant',
						fontweight: 'fontWeight',
						'font-weight': 'fontWeight',
						format: 'format',
						from: 'from',
						fx: 'fx',
						fy: 'fy',
						g1: 'g1',
						g2: 'g2',
						glyphname: 'glyphName',
						'glyph-name': 'glyphName',
						glyphorientationhorizontal: 'glyphOrientationHorizontal',
						'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
						glyphorientationvertical: 'glyphOrientationVertical',
						'glyph-orientation-vertical': 'glyphOrientationVertical',
						glyphref: 'glyphRef',
						gradienttransform: 'gradientTransform',
						gradientunits: 'gradientUnits',
						hanging: 'hanging',
						horizadvx: 'horizAdvX',
						'horiz-adv-x': 'horizAdvX',
						horizoriginx: 'horizOriginX',
						'horiz-origin-x': 'horizOriginX',
						ideographic: 'ideographic',
						imagerendering: 'imageRendering',
						'image-rendering': 'imageRendering',
						in2: 'in2',
						in: 'in',
						inlist: 'inlist',
						intercept: 'intercept',
						k1: 'k1',
						k2: 'k2',
						k3: 'k3',
						k4: 'k4',
						k: 'k',
						kernelmatrix: 'kernelMatrix',
						kernelunitlength: 'kernelUnitLength',
						kerning: 'kerning',
						keypoints: 'keyPoints',
						keysplines: 'keySplines',
						keytimes: 'keyTimes',
						lengthadjust: 'lengthAdjust',
						letterspacing: 'letterSpacing',
						'letter-spacing': 'letterSpacing',
						lightingcolor: 'lightingColor',
						'lighting-color': 'lightingColor',
						limitingconeangle: 'limitingConeAngle',
						local: 'local',
						markerend: 'markerEnd',
						'marker-end': 'markerEnd',
						markerheight: 'markerHeight',
						markermid: 'markerMid',
						'marker-mid': 'markerMid',
						markerstart: 'markerStart',
						'marker-start': 'markerStart',
						markerunits: 'markerUnits',
						markerwidth: 'markerWidth',
						mask: 'mask',
						maskcontentunits: 'maskContentUnits',
						maskunits: 'maskUnits',
						mathematical: 'mathematical',
						mode: 'mode',
						numoctaves: 'numOctaves',
						offset: 'offset',
						opacity: 'opacity',
						operator: 'operator',
						order: 'order',
						orient: 'orient',
						orientation: 'orientation',
						origin: 'origin',
						overflow: 'overflow',
						overlineposition: 'overlinePosition',
						'overline-position': 'overlinePosition',
						overlinethickness: 'overlineThickness',
						'overline-thickness': 'overlineThickness',
						paintorder: 'paintOrder',
						'paint-order': 'paintOrder',
						panose1: 'panose1',
						'panose-1': 'panose1',
						pathlength: 'pathLength',
						patterncontentunits: 'patternContentUnits',
						patterntransform: 'patternTransform',
						patternunits: 'patternUnits',
						pointerevents: 'pointerEvents',
						'pointer-events': 'pointerEvents',
						points: 'points',
						pointsatx: 'pointsAtX',
						pointsaty: 'pointsAtY',
						pointsatz: 'pointsAtZ',
						prefix: 'prefix',
						preservealpha: 'preserveAlpha',
						preserveaspectratio: 'preserveAspectRatio',
						primitiveunits: 'primitiveUnits',
						property: 'property',
						r: 'r',
						radius: 'radius',
						refx: 'refX',
						refy: 'refY',
						renderingintent: 'renderingIntent',
						'rendering-intent': 'renderingIntent',
						repeatcount: 'repeatCount',
						repeatdur: 'repeatDur',
						requiredextensions: 'requiredExtensions',
						requiredfeatures: 'requiredFeatures',
						resource: 'resource',
						restart: 'restart',
						result: 'result',
						results: 'results',
						rotate: 'rotate',
						rx: 'rx',
						ry: 'ry',
						scale: 'scale',
						security: 'security',
						seed: 'seed',
						shaperendering: 'shapeRendering',
						'shape-rendering': 'shapeRendering',
						slope: 'slope',
						spacing: 'spacing',
						specularconstant: 'specularConstant',
						specularexponent: 'specularExponent',
						speed: 'speed',
						spreadmethod: 'spreadMethod',
						startoffset: 'startOffset',
						stddeviation: 'stdDeviation',
						stemh: 'stemh',
						stemv: 'stemv',
						stitchtiles: 'stitchTiles',
						stopcolor: 'stopColor',
						'stop-color': 'stopColor',
						stopopacity: 'stopOpacity',
						'stop-opacity': 'stopOpacity',
						strikethroughposition: 'strikethroughPosition',
						'strikethrough-position': 'strikethroughPosition',
						strikethroughthickness: 'strikethroughThickness',
						'strikethrough-thickness': 'strikethroughThickness',
						string: 'string',
						stroke: 'stroke',
						strokedasharray: 'strokeDasharray',
						'stroke-dasharray': 'strokeDasharray',
						strokedashoffset: 'strokeDashoffset',
						'stroke-dashoffset': 'strokeDashoffset',
						strokelinecap: 'strokeLinecap',
						'stroke-linecap': 'strokeLinecap',
						strokelinejoin: 'strokeLinejoin',
						'stroke-linejoin': 'strokeLinejoin',
						strokemiterlimit: 'strokeMiterlimit',
						'stroke-miterlimit': 'strokeMiterlimit',
						strokewidth: 'strokeWidth',
						'stroke-width': 'strokeWidth',
						strokeopacity: 'strokeOpacity',
						'stroke-opacity': 'strokeOpacity',
						suppresscontenteditablewarning: 'suppressContentEditableWarning',
						suppresshydrationwarning: 'suppressHydrationWarning',
						surfacescale: 'surfaceScale',
						systemlanguage: 'systemLanguage',
						tablevalues: 'tableValues',
						targetx: 'targetX',
						targety: 'targetY',
						textanchor: 'textAnchor',
						'text-anchor': 'textAnchor',
						textdecoration: 'textDecoration',
						'text-decoration': 'textDecoration',
						textlength: 'textLength',
						textrendering: 'textRendering',
						'text-rendering': 'textRendering',
						to: 'to',
						transform: 'transform',
						typeof: 'typeof',
						u1: 'u1',
						u2: 'u2',
						underlineposition: 'underlinePosition',
						'underline-position': 'underlinePosition',
						underlinethickness: 'underlineThickness',
						'underline-thickness': 'underlineThickness',
						unicode: 'unicode',
						unicodebidi: 'unicodeBidi',
						'unicode-bidi': 'unicodeBidi',
						unicoderange: 'unicodeRange',
						'unicode-range': 'unicodeRange',
						unitsperem: 'unitsPerEm',
						'units-per-em': 'unitsPerEm',
						unselectable: 'unselectable',
						valphabetic: 'vAlphabetic',
						'v-alphabetic': 'vAlphabetic',
						values: 'values',
						vectoreffect: 'vectorEffect',
						'vector-effect': 'vectorEffect',
						version: 'version',
						vertadvy: 'vertAdvY',
						'vert-adv-y': 'vertAdvY',
						vertoriginx: 'vertOriginX',
						'vert-origin-x': 'vertOriginX',
						vertoriginy: 'vertOriginY',
						'vert-origin-y': 'vertOriginY',
						vhanging: 'vHanging',
						'v-hanging': 'vHanging',
						videographic: 'vIdeographic',
						'v-ideographic': 'vIdeographic',
						viewbox: 'viewBox',
						viewtarget: 'viewTarget',
						visibility: 'visibility',
						vmathematical: 'vMathematical',
						'v-mathematical': 'vMathematical',
						vocab: 'vocab',
						widths: 'widths',
						wordspacing: 'wordSpacing',
						'word-spacing': 'wordSpacing',
						writingmode: 'writingMode',
						'writing-mode': 'writingMode',
						x1: 'x1',
						x2: 'x2',
						x: 'x',
						xchannelselector: 'xChannelSelector',
						xheight: 'xHeight',
						'x-height': 'xHeight',
						xlinkactuate: 'xlinkActuate',
						'xlink:actuate': 'xlinkActuate',
						xlinkarcrole: 'xlinkArcrole',
						'xlink:arcrole': 'xlinkArcrole',
						xlinkhref: 'xlinkHref',
						'xlink:href': 'xlinkHref',
						xlinkrole: 'xlinkRole',
						'xlink:role': 'xlinkRole',
						xlinkshow: 'xlinkShow',
						'xlink:show': 'xlinkShow',
						xlinktitle: 'xlinkTitle',
						'xlink:title': 'xlinkTitle',
						xlinktype: 'xlinkType',
						'xlink:type': 'xlinkType',
						xmlbase: 'xmlBase',
						'xml:base': 'xmlBase',
						xmllang: 'xmlLang',
						'xml:lang': 'xmlLang',
						xmlns: 'xmlns',
						'xml:space': 'xmlSpace',
						xmlnsxlink: 'xmlnsXlink',
						'xmlns:xlink': 'xmlnsXlink',
						xmlspace: 'xmlSpace',
						y1: 'y1',
						y2: 'y2',
						y: 'y',
						ychannelselector: 'yChannelSelector',
						z: 'z',
						zoomandpan: 'zoomAndPan'
					};
					var ariaProperties = {
						'aria-current': 0,
						'aria-details': 0,
						'aria-disabled': 0,
						'aria-hidden': 0,
						'aria-invalid': 0,
						'aria-keyshortcuts': 0,
						'aria-label': 0,
						'aria-roledescription': 0,
						'aria-autocomplete': 0,
						'aria-checked': 0,
						'aria-expanded': 0,
						'aria-haspopup': 0,
						'aria-level': 0,
						'aria-modal': 0,
						'aria-multiline': 0,
						'aria-multiselectable': 0,
						'aria-orientation': 0,
						'aria-placeholder': 0,
						'aria-pressed': 0,
						'aria-readonly': 0,
						'aria-required': 0,
						'aria-selected': 0,
						'aria-sort': 0,
						'aria-valuemax': 0,
						'aria-valuemin': 0,
						'aria-valuenow': 0,
						'aria-valuetext': 0,
						'aria-atomic': 0,
						'aria-busy': 0,
						'aria-live': 0,
						'aria-relevant': 0,
						'aria-dropeffect': 0,
						'aria-grabbed': 0,
						'aria-activedescendant': 0,
						'aria-colcount': 0,
						'aria-colindex': 0,
						'aria-colspan': 0,
						'aria-controls': 0,
						'aria-describedby': 0,
						'aria-errormessage': 0,
						'aria-flowto': 0,
						'aria-labelledby': 0,
						'aria-owns': 0,
						'aria-posinset': 0,
						'aria-rowcount': 0,
						'aria-rowindex': 0,
						'aria-rowspan': 0,
						'aria-setsize': 0
					};
					var warnedProperties = {};
					var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
					var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
					var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
					function validateProperty(tagName, name) {
						{
							if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
								return true;
							}
							if (rARIACamel.test(name)) {
								var ariaName = 'aria-' + name.slice(4).toLowerCase();
								var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
								if (correctName == null) {
									error(
										'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
										name
									);
									warnedProperties[name] = true;
									return true;
								}
								if (name !== correctName) {
									error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
									warnedProperties[name] = true;
									return true;
								}
							}
							if (rARIA.test(name)) {
								var lowerCasedName = name.toLowerCase();
								var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
								if (standardName == null) {
									warnedProperties[name] = true;
									return false;
								}
								if (name !== standardName) {
									error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
									warnedProperties[name] = true;
									return true;
								}
							}
						}
						return true;
					}
					function warnInvalidARIAProps(type, props) {
						{
							var invalidProps = [];
							for (var key in props) {
								var isValid = validateProperty(type, key);
								if (!isValid) {
									invalidProps.push(key);
								}
							}
							var unknownPropString = invalidProps
								.map(function (prop) {
									return '`' + prop + '`';
								})
								.join(', ');
							if (invalidProps.length === 1) {
								error(
									'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
									unknownPropString,
									type
								);
							} else if (invalidProps.length > 1) {
								error(
									'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
									unknownPropString,
									type
								);
							}
						}
					}
					function validateProperties(type, props) {
						if (isCustomComponent(type, props)) {
							return;
						}
						warnInvalidARIAProps(type, props);
					}
					var didWarnValueNull = false;
					function validateProperties$1(type, props) {
						{
							if (type !== 'input' && type !== 'textarea' && type !== 'select') {
								return;
							}
							if (props != null && props.value === null && !didWarnValueNull) {
								didWarnValueNull = true;
								if (type === 'select' && props.multiple) {
									error(
										'`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
										type
									);
								} else {
									error(
										'`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
										type
									);
								}
							}
						}
					}
					var validateProperty$1 = function () {};
					{
						var warnedProperties$1 = {};
						var _hasOwnProperty = Object.prototype.hasOwnProperty;
						var EVENT_NAME_REGEX = /^on./;
						var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
						var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
						var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
						validateProperty$1 = function (tagName, name, value, eventRegistry) {
							if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
								return true;
							}
							var lowerCasedName = name.toLowerCase();
							if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
								error(
									'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
								);
								warnedProperties$1[name] = true;
								return true;
							}
							if (eventRegistry != null) {
								var registrationNameDependencies2 = eventRegistry.registrationNameDependencies,
									possibleRegistrationNames2 = eventRegistry.possibleRegistrationNames;
								if (registrationNameDependencies2.hasOwnProperty(name)) {
									return true;
								}
								var registrationName = possibleRegistrationNames2.hasOwnProperty(lowerCasedName)
									? possibleRegistrationNames2[lowerCasedName]
									: null;
								if (registrationName != null) {
									error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
									warnedProperties$1[name] = true;
									return true;
								}
								if (EVENT_NAME_REGEX.test(name)) {
									error('Unknown event handler property `%s`. It will be ignored.', name);
									warnedProperties$1[name] = true;
									return true;
								}
							} else if (EVENT_NAME_REGEX.test(name)) {
								if (INVALID_EVENT_NAME_REGEX.test(name)) {
									error(
										'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
										name
									);
								}
								warnedProperties$1[name] = true;
								return true;
							}
							if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
								return true;
							}
							if (lowerCasedName === 'innerhtml') {
								error(
									'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
								);
								warnedProperties$1[name] = true;
								return true;
							}
							if (lowerCasedName === 'aria') {
								error(
									'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
								);
								warnedProperties$1[name] = true;
								return true;
							}
							if (lowerCasedName === 'is' && value !== null && value !== void 0 && typeof value !== 'string') {
								error(
									'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
									typeof value
								);
								warnedProperties$1[name] = true;
								return true;
							}
							if (typeof value === 'number' && isNaN(value)) {
								error('Received NaN for the `%s` attribute. If this is expected, cast the value to a string.', name);
								warnedProperties$1[name] = true;
								return true;
							}
							var propertyInfo = getPropertyInfo(name);
							var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
							if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
								var standardName = possibleStandardNames[lowerCasedName];
								if (standardName !== name) {
									error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
									warnedProperties$1[name] = true;
									return true;
								}
							} else if (!isReserved && name !== lowerCasedName) {
								error(
									'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
									name,
									lowerCasedName
								);
								warnedProperties$1[name] = true;
								return true;
							}
							if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
								if (value) {
									error(
										'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
										value,
										name,
										name,
										value,
										name
									);
								} else {
									error(
										'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
										value,
										name,
										name,
										value,
										name,
										name,
										name
									);
								}
								warnedProperties$1[name] = true;
								return true;
							}
							if (isReserved) {
								return true;
							}
							if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
								warnedProperties$1[name] = true;
								return false;
							}
							if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
								error(
									'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
									value,
									name,
									value === 'false'
										? 'The browser will interpret it as a truthy value.'
										: 'Although this works, it will not work as expected if you pass the string "false".',
									name,
									value
								);
								warnedProperties$1[name] = true;
								return true;
							}
							return true;
						};
					}
					var warnUnknownProperties = function (type, props, eventRegistry) {
						{
							var unknownProps = [];
							for (var key in props) {
								var isValid = validateProperty$1(type, key, props[key], eventRegistry);
								if (!isValid) {
									unknownProps.push(key);
								}
							}
							var unknownPropString = unknownProps
								.map(function (prop) {
									return '`' + prop + '`';
								})
								.join(', ');
							if (unknownProps.length === 1) {
								error(
									'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
									unknownPropString,
									type
								);
							} else if (unknownProps.length > 1) {
								error(
									'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
									unknownPropString,
									type
								);
							}
						}
					};
					function validateProperties$2(type, props, eventRegistry) {
						if (isCustomComponent(type, props)) {
							return;
						}
						warnUnknownProperties(type, props, eventRegistry);
					}
					var IS_EVENT_HANDLE_NON_MANAGED_NODE = 1;
					var IS_NON_DELEGATED = 1 << 1;
					var IS_CAPTURE_PHASE = 1 << 2;
					var IS_REPLAYED = 1 << 4;
					var SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS =
						IS_EVENT_HANDLE_NON_MANAGED_NODE | IS_NON_DELEGATED | IS_CAPTURE_PHASE;
					function getEventTarget(nativeEvent) {
						var target = nativeEvent.target || nativeEvent.srcElement || self;
						if (target.correspondingUseElement) {
							target = target.correspondingUseElement;
						}
						return target.nodeType === TEXT_NODE ? target.parentNode : target;
					}
					var restoreImpl = null;
					var restoreTarget = null;
					var restoreQueue = null;
					function restoreStateOfTarget(target) {
						var internalInstance = getInstanceFromNode(target);
						if (!internalInstance) {
							return;
						}
						if (!(typeof restoreImpl === 'function')) {
							{
								throw Error(
									'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
						var stateNode = internalInstance.stateNode;
						if (stateNode) {
							var _props = getFiberCurrentPropsFromNode(stateNode);
							restoreImpl(internalInstance.stateNode, internalInstance.type, _props);
						}
					}
					function setRestoreImplementation(impl) {
						restoreImpl = impl;
					}
					function enqueueStateRestore(target) {
						if (restoreTarget) {
							if (restoreQueue) {
								restoreQueue.push(target);
							} else {
								restoreQueue = [target];
							}
						} else {
							restoreTarget = target;
						}
					}
					function needsStateRestore() {
						return restoreTarget !== null || restoreQueue !== null;
					}
					function restoreStateIfNeeded() {
						if (!restoreTarget) {
							return;
						}
						var target = restoreTarget;
						var queuedTargets = restoreQueue;
						restoreTarget = null;
						restoreQueue = null;
						restoreStateOfTarget(target);
						if (queuedTargets) {
							for (var i2 = 0; i2 < queuedTargets.length; i2++) {
								restoreStateOfTarget(queuedTargets[i2]);
							}
						}
					}
					var batchedUpdatesImpl = function (fn, bookkeeping) {
						return fn(bookkeeping);
					};
					var discreteUpdatesImpl = function (fn, a, b, c, d) {
						return fn(a, b, c, d);
					};
					var flushDiscreteUpdatesImpl = function () {};
					var batchedEventUpdatesImpl = batchedUpdatesImpl;
					var isInsideEventHandler = false;
					var isBatchingEventUpdates = false;
					function finishEventHandler() {
						var controlledComponentsHavePendingUpdates = needsStateRestore();
						if (controlledComponentsHavePendingUpdates) {
							flushDiscreteUpdatesImpl();
							restoreStateIfNeeded();
						}
					}
					function batchedUpdates(fn, bookkeeping) {
						if (isInsideEventHandler) {
							return fn(bookkeeping);
						}
						isInsideEventHandler = true;
						try {
							return batchedUpdatesImpl(fn, bookkeeping);
						} finally {
							isInsideEventHandler = false;
							finishEventHandler();
						}
					}
					function batchedEventUpdates(fn, a, b) {
						if (isBatchingEventUpdates) {
							return fn(a, b);
						}
						isBatchingEventUpdates = true;
						try {
							return batchedEventUpdatesImpl(fn, a, b);
						} finally {
							isBatchingEventUpdates = false;
							finishEventHandler();
						}
					}
					function discreteUpdates(fn, a, b, c, d) {
						var prevIsInsideEventHandler = isInsideEventHandler;
						isInsideEventHandler = true;
						try {
							return discreteUpdatesImpl(fn, a, b, c, d);
						} finally {
							isInsideEventHandler = prevIsInsideEventHandler;
							if (!isInsideEventHandler) {
								finishEventHandler();
							}
						}
					}
					function flushDiscreteUpdatesIfNeeded(timeStamp) {
						{
							if (!isInsideEventHandler) {
								flushDiscreteUpdatesImpl();
							}
						}
					}
					function setBatchingImplementation(
						_batchedUpdatesImpl,
						_discreteUpdatesImpl,
						_flushDiscreteUpdatesImpl,
						_batchedEventUpdatesImpl
					) {
						batchedUpdatesImpl = _batchedUpdatesImpl;
						discreteUpdatesImpl = _discreteUpdatesImpl;
						flushDiscreteUpdatesImpl = _flushDiscreteUpdatesImpl;
						batchedEventUpdatesImpl = _batchedEventUpdatesImpl;
					}
					function isInteractive(tag) {
						return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
					}
					function shouldPreventMouseEvent(name, type, props) {
						switch (name) {
							case 'onClick':
							case 'onClickCapture':
							case 'onDoubleClick':
							case 'onDoubleClickCapture':
							case 'onMouseDown':
							case 'onMouseDownCapture':
							case 'onMouseMove':
							case 'onMouseMoveCapture':
							case 'onMouseUp':
							case 'onMouseUpCapture':
							case 'onMouseEnter':
								return !!(props.disabled && isInteractive(type));
							default:
								return false;
						}
					}
					function getListener(inst, registrationName) {
						var stateNode = inst.stateNode;
						if (stateNode === null) {
							return null;
						}
						var props = getFiberCurrentPropsFromNode(stateNode);
						if (props === null) {
							return null;
						}
						var listener = props[registrationName];
						if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
							return null;
						}
						if (!(!listener || typeof listener === 'function')) {
							{
								throw Error(
									'Expected `' +
										registrationName +
										'` listener to be a function, instead got a value of `' +
										typeof listener +
										'` type.'
								);
							}
						}
						return listener;
					}
					var passiveBrowserEventsSupported = false;
					if (canUseDOM) {
						try {
							var options = {};
							Object.defineProperty(options, 'passive', {
								get: function () {
									passiveBrowserEventsSupported = true;
								}
							});
							self.addEventListener('test', options, options);
							self.removeEventListener('test', options, options);
						} catch (e) {
							passiveBrowserEventsSupported = false;
						}
					}
					function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
						var funcArgs = Array.prototype.slice.call(arguments, 3);
						try {
							func.apply(context, funcArgs);
						} catch (error2) {
							this.onError(error2);
						}
					}
					var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;
					{
						if (
							typeof self !== 'undefined' &&
							typeof self.dispatchEvent === 'function' &&
							typeof document !== 'undefined' &&
							typeof document.createEvent === 'function'
						) {
							var fakeNode = document.createElement('react');
							invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
								if (!(typeof document !== 'undefined')) {
									{
										throw Error(
											'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
										);
									}
								}
								var evt = document.createEvent('Event');
								var didCall = false;
								var didError = true;
								var windowEvent = self.event;
								var windowEventDescriptor = Object.getOwnPropertyDescriptor(self, 'event');
								function restoreAfterDispatch() {
									fakeNode.removeEventListener(evtType, callCallback2, false);
									if (typeof self.event !== 'undefined' && self.hasOwnProperty('event')) {
										self.event = windowEvent;
									}
								}
								var funcArgs = Array.prototype.slice.call(arguments, 3);
								function callCallback2() {
									didCall = true;
									restoreAfterDispatch();
									func.apply(context, funcArgs);
									didError = false;
								}
								var error2;
								var didSetError = false;
								var isCrossOriginError = false;
								function handleWindowError(event) {
									error2 = event.error;
									didSetError = true;
									if (error2 === null && event.colno === 0 && event.lineno === 0) {
										isCrossOriginError = true;
									}
									if (event.defaultPrevented) {
										if (error2 != null && typeof error2 === 'object') {
											try {
												error2._suppressLogging = true;
											} catch (inner) {}
										}
									}
								}
								var evtType = 'react-' + (name ? name : 'invokeguardedcallback');
								self.addEventListener('error', handleWindowError);
								fakeNode.addEventListener(evtType, callCallback2, false);
								evt.initEvent(evtType, false, false);
								fakeNode.dispatchEvent(evt);
								if (windowEventDescriptor) {
									Object.defineProperty(self, 'event', windowEventDescriptor);
								}
								if (didCall && didError) {
									if (!didSetError) {
										error2 = new Error(
											`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
										);
									} else if (isCrossOriginError) {
										error2 = new Error(
											"A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
										);
									}
									this.onError(error2);
								}
								self.removeEventListener('error', handleWindowError);
								if (!didCall) {
									restoreAfterDispatch();
									return invokeGuardedCallbackProd.apply(this, arguments);
								}
							};
						}
					}
					var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
					var hasError = false;
					var caughtError = null;
					var hasRethrowError = false;
					var rethrowError = null;
					var reporter = {
						onError: function (error2) {
							hasError = true;
							caughtError = error2;
						}
					};
					function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
						hasError = false;
						caughtError = null;
						invokeGuardedCallbackImpl$1.apply(reporter, arguments);
					}
					function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
						invokeGuardedCallback.apply(this, arguments);
						if (hasError) {
							var error2 = clearCaughtError();
							if (!hasRethrowError) {
								hasRethrowError = true;
								rethrowError = error2;
							}
						}
					}
					function rethrowCaughtError() {
						if (hasRethrowError) {
							var error2 = rethrowError;
							hasRethrowError = false;
							rethrowError = null;
							throw error2;
						}
					}
					function hasCaughtError() {
						return hasError;
					}
					function clearCaughtError() {
						if (hasError) {
							var error2 = caughtError;
							hasError = false;
							caughtError = null;
							return error2;
						} else {
							{
								{
									throw Error(
										'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
						}
					}
					function get(key) {
						return key._reactInternals;
					}
					function has(key) {
						return key._reactInternals !== void 0;
					}
					function set(key, value) {
						key._reactInternals = value;
					}
					var NoFlags = 0;
					var PerformedWork = 1;
					var Placement = 2;
					var Update = 4;
					var PlacementAndUpdate = 6;
					var Deletion = 8;
					var ContentReset = 16;
					var Callback = 32;
					var DidCapture = 64;
					var Ref = 128;
					var Snapshot = 256;
					var Passive = 512;
					var PassiveUnmountPendingDev = 8192;
					var Hydrating = 1024;
					var HydratingAndUpdate = 1028;
					var LifecycleEffectMask = 932;
					var HostEffectMask = 2047;
					var Incomplete = 2048;
					var ShouldCapture = 4096;
					var ForceUpdateForLegacySuspense = 16384;
					var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
					function getNearestMountedFiber(fiber) {
						var node = fiber;
						var nearestMounted = fiber;
						if (!fiber.alternate) {
							var nextNode = node;
							do {
								node = nextNode;
								if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
									nearestMounted = node.return;
								}
								nextNode = node.return;
							} while (nextNode);
						} else {
							while (node.return) {
								node = node.return;
							}
						}
						if (node.tag === HostRoot) {
							return nearestMounted;
						}
						return null;
					}
					function getSuspenseInstanceFromFiber(fiber) {
						if (fiber.tag === SuspenseComponent) {
							var suspenseState = fiber.memoizedState;
							if (suspenseState === null) {
								var current2 = fiber.alternate;
								if (current2 !== null) {
									suspenseState = current2.memoizedState;
								}
							}
							if (suspenseState !== null) {
								return suspenseState.dehydrated;
							}
						}
						return null;
					}
					function getContainerFromFiber(fiber) {
						return fiber.tag === HostRoot ? fiber.stateNode.containerInfo : null;
					}
					function isFiberMounted(fiber) {
						return getNearestMountedFiber(fiber) === fiber;
					}
					function isMounted(component) {
						{
							var owner = ReactCurrentOwner.current;
							if (owner !== null && owner.tag === ClassComponent) {
								var ownerFiber = owner;
								var instance = ownerFiber.stateNode;
								if (!instance._warnedAboutRefsInRender) {
									error(
										'%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
										getComponentName(ownerFiber.type) || 'A component'
									);
								}
								instance._warnedAboutRefsInRender = true;
							}
						}
						var fiber = get(component);
						if (!fiber) {
							return false;
						}
						return getNearestMountedFiber(fiber) === fiber;
					}
					function assertIsMounted(fiber) {
						if (!(getNearestMountedFiber(fiber) === fiber)) {
							{
								throw Error('Unable to find node on an unmounted component.');
							}
						}
					}
					function findCurrentFiberUsingSlowPath(fiber) {
						var alternate = fiber.alternate;
						if (!alternate) {
							var nearestMounted = getNearestMountedFiber(fiber);
							if (!(nearestMounted !== null)) {
								{
									throw Error('Unable to find node on an unmounted component.');
								}
							}
							if (nearestMounted !== fiber) {
								return null;
							}
							return fiber;
						}
						var a = fiber;
						var b = alternate;
						while (true) {
							var parentA = a.return;
							if (parentA === null) {
								break;
							}
							var parentB = parentA.alternate;
							if (parentB === null) {
								var nextParent = parentA.return;
								if (nextParent !== null) {
									a = b = nextParent;
									continue;
								}
								break;
							}
							if (parentA.child === parentB.child) {
								var child = parentA.child;
								while (child) {
									if (child === a) {
										assertIsMounted(parentA);
										return fiber;
									}
									if (child === b) {
										assertIsMounted(parentA);
										return alternate;
									}
									child = child.sibling;
								}
								{
									{
										throw Error('Unable to find node on an unmounted component.');
									}
								}
							}
							if (a.return !== b.return) {
								a = parentA;
								b = parentB;
							} else {
								var didFindChild = false;
								var _child = parentA.child;
								while (_child) {
									if (_child === a) {
										didFindChild = true;
										a = parentA;
										b = parentB;
										break;
									}
									if (_child === b) {
										didFindChild = true;
										b = parentA;
										a = parentB;
										break;
									}
									_child = _child.sibling;
								}
								if (!didFindChild) {
									_child = parentB.child;
									while (_child) {
										if (_child === a) {
											didFindChild = true;
											a = parentB;
											b = parentA;
											break;
										}
										if (_child === b) {
											didFindChild = true;
											b = parentB;
											a = parentA;
											break;
										}
										_child = _child.sibling;
									}
									if (!didFindChild) {
										{
											throw Error(
												'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'
											);
										}
									}
								}
							}
							if (!(a.alternate === b)) {
								{
									throw Error(
										"Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
									);
								}
							}
						}
						if (!(a.tag === HostRoot)) {
							{
								throw Error('Unable to find node on an unmounted component.');
							}
						}
						if (a.stateNode.current === a) {
							return fiber;
						}
						return alternate;
					}
					function findCurrentHostFiber(parent) {
						var currentParent = findCurrentFiberUsingSlowPath(parent);
						if (!currentParent) {
							return null;
						}
						var node = currentParent;
						while (true) {
							if (node.tag === HostComponent || node.tag === HostText) {
								return node;
							} else if (node.child) {
								node.child.return = node;
								node = node.child;
								continue;
							}
							if (node === currentParent) {
								return null;
							}
							while (!node.sibling) {
								if (!node.return || node.return === currentParent) {
									return null;
								}
								node = node.return;
							}
							node.sibling.return = node.return;
							node = node.sibling;
						}
						return null;
					}
					function findCurrentHostFiberWithNoPortals(parent) {
						var currentParent = findCurrentFiberUsingSlowPath(parent);
						if (!currentParent) {
							return null;
						}
						var node = currentParent;
						while (true) {
							if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI) {
								return node;
							} else if (node.child && node.tag !== HostPortal) {
								node.child.return = node;
								node = node.child;
								continue;
							}
							if (node === currentParent) {
								return null;
							}
							while (!node.sibling) {
								if (!node.return || node.return === currentParent) {
									return null;
								}
								node = node.return;
							}
							node.sibling.return = node.return;
							node = node.sibling;
						}
						return null;
					}
					function doesFiberContain(parentFiber, childFiber) {
						var node = childFiber;
						var parentFiberAlternate = parentFiber.alternate;
						while (node !== null) {
							if (node === parentFiber || node === parentFiberAlternate) {
								return true;
							}
							node = node.return;
						}
						return false;
					}
					var attemptUserBlockingHydration;
					function setAttemptUserBlockingHydration(fn) {
						attemptUserBlockingHydration = fn;
					}
					var attemptContinuousHydration;
					function setAttemptContinuousHydration(fn) {
						attemptContinuousHydration = fn;
					}
					var attemptHydrationAtCurrentPriority;
					function setAttemptHydrationAtCurrentPriority(fn) {
						attemptHydrationAtCurrentPriority = fn;
					}
					var attemptHydrationAtPriority;
					function setAttemptHydrationAtPriority(fn) {
						attemptHydrationAtPriority = fn;
					}
					var hasScheduledReplayAttempt = false;
					var queuedDiscreteEvents = [];
					var queuedFocus = null;
					var queuedDrag = null;
					var queuedMouse = null;
					var queuedPointers = /* @__PURE__ */ new Map();
					var queuedPointerCaptures = /* @__PURE__ */ new Map();
					var queuedExplicitHydrationTargets = [];
					function hasQueuedDiscreteEvents() {
						return queuedDiscreteEvents.length > 0;
					}
					var discreteReplayableEvents = [
						'mousedown',
						'mouseup',
						'touchcancel',
						'touchend',
						'touchstart',
						'auxclick',
						'dblclick',
						'pointercancel',
						'pointerdown',
						'pointerup',
						'dragend',
						'dragstart',
						'drop',
						'compositionend',
						'compositionstart',
						'keydown',
						'keypress',
						'keyup',
						'input',
						'textInput',
						'copy',
						'cut',
						'paste',
						'click',
						'change',
						'contextmenu',
						'reset',
						'submit'
					];
					function isReplayableDiscreteEvent(eventType) {
						return discreteReplayableEvents.indexOf(eventType) > -1;
					}
					function createQueuedReplayableEvent(
						blockedOn,
						domEventName,
						eventSystemFlags,
						targetContainer,
						nativeEvent
					) {
						return {
							blockedOn,
							domEventName,
							eventSystemFlags: eventSystemFlags | IS_REPLAYED,
							nativeEvent,
							targetContainers: [targetContainer]
						};
					}
					function queueDiscreteEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
						var queuedEvent = createQueuedReplayableEvent(
							blockedOn,
							domEventName,
							eventSystemFlags,
							targetContainer,
							nativeEvent
						);
						queuedDiscreteEvents.push(queuedEvent);
					}
					function clearIfContinuousEvent(domEventName, nativeEvent) {
						switch (domEventName) {
							case 'focusin':
							case 'focusout':
								queuedFocus = null;
								break;
							case 'dragenter':
							case 'dragleave':
								queuedDrag = null;
								break;
							case 'mouseover':
							case 'mouseout':
								queuedMouse = null;
								break;
							case 'pointerover':
							case 'pointerout': {
								var pointerId = nativeEvent.pointerId;
								queuedPointers.delete(pointerId);
								break;
							}
							case 'gotpointercapture':
							case 'lostpointercapture': {
								var _pointerId = nativeEvent.pointerId;
								queuedPointerCaptures.delete(_pointerId);
								break;
							}
						}
					}
					function accumulateOrCreateContinuousQueuedReplayableEvent(
						existingQueuedEvent,
						blockedOn,
						domEventName,
						eventSystemFlags,
						targetContainer,
						nativeEvent
					) {
						if (existingQueuedEvent === null || existingQueuedEvent.nativeEvent !== nativeEvent) {
							var queuedEvent = createQueuedReplayableEvent(
								blockedOn,
								domEventName,
								eventSystemFlags,
								targetContainer,
								nativeEvent
							);
							if (blockedOn !== null) {
								var _fiber2 = getInstanceFromNode(blockedOn);
								if (_fiber2 !== null) {
									attemptContinuousHydration(_fiber2);
								}
							}
							return queuedEvent;
						}
						existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
						var targetContainers = existingQueuedEvent.targetContainers;
						if (targetContainer !== null && targetContainers.indexOf(targetContainer) === -1) {
							targetContainers.push(targetContainer);
						}
						return existingQueuedEvent;
					}
					function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
						switch (domEventName) {
							case 'focusin': {
								var focusEvent = nativeEvent;
								queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
									queuedFocus,
									blockedOn,
									domEventName,
									eventSystemFlags,
									targetContainer,
									focusEvent
								);
								return true;
							}
							case 'dragenter': {
								var dragEvent = nativeEvent;
								queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
									queuedDrag,
									blockedOn,
									domEventName,
									eventSystemFlags,
									targetContainer,
									dragEvent
								);
								return true;
							}
							case 'mouseover': {
								var mouseEvent = nativeEvent;
								queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
									queuedMouse,
									blockedOn,
									domEventName,
									eventSystemFlags,
									targetContainer,
									mouseEvent
								);
								return true;
							}
							case 'pointerover': {
								var pointerEvent = nativeEvent;
								var pointerId = pointerEvent.pointerId;
								queuedPointers.set(
									pointerId,
									accumulateOrCreateContinuousQueuedReplayableEvent(
										queuedPointers.get(pointerId) || null,
										blockedOn,
										domEventName,
										eventSystemFlags,
										targetContainer,
										pointerEvent
									)
								);
								return true;
							}
							case 'gotpointercapture': {
								var _pointerEvent = nativeEvent;
								var _pointerId2 = _pointerEvent.pointerId;
								queuedPointerCaptures.set(
									_pointerId2,
									accumulateOrCreateContinuousQueuedReplayableEvent(
										queuedPointerCaptures.get(_pointerId2) || null,
										blockedOn,
										domEventName,
										eventSystemFlags,
										targetContainer,
										_pointerEvent
									)
								);
								return true;
							}
						}
						return false;
					}
					function attemptExplicitHydrationTarget(queuedTarget) {
						var targetInst = getClosestInstanceFromNode(queuedTarget.target);
						if (targetInst !== null) {
							var nearestMounted = getNearestMountedFiber(targetInst);
							if (nearestMounted !== null) {
								var tag = nearestMounted.tag;
								if (tag === SuspenseComponent) {
									var instance = getSuspenseInstanceFromFiber(nearestMounted);
									if (instance !== null) {
										queuedTarget.blockedOn = instance;
										attemptHydrationAtPriority(queuedTarget.lanePriority, function () {
											Scheduler.unstable_runWithPriority(queuedTarget.priority, function () {
												attemptHydrationAtCurrentPriority(nearestMounted);
											});
										});
										return;
									}
								} else if (tag === HostRoot) {
									var root2 = nearestMounted.stateNode;
									if (root2.hydrate) {
										queuedTarget.blockedOn = getContainerFromFiber(nearestMounted);
										return;
									}
								}
							}
						}
						queuedTarget.blockedOn = null;
					}
					function attemptReplayContinuousQueuedEvent(queuedEvent) {
						if (queuedEvent.blockedOn !== null) {
							return false;
						}
						var targetContainers = queuedEvent.targetContainers;
						while (targetContainers.length > 0) {
							var targetContainer = targetContainers[0];
							var nextBlockedOn = attemptToDispatchEvent(
								queuedEvent.domEventName,
								queuedEvent.eventSystemFlags,
								targetContainer,
								queuedEvent.nativeEvent
							);
							if (nextBlockedOn !== null) {
								var _fiber3 = getInstanceFromNode(nextBlockedOn);
								if (_fiber3 !== null) {
									attemptContinuousHydration(_fiber3);
								}
								queuedEvent.blockedOn = nextBlockedOn;
								return false;
							}
							targetContainers.shift();
						}
						return true;
					}
					function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
						if (attemptReplayContinuousQueuedEvent(queuedEvent)) {
							map.delete(key);
						}
					}
					function replayUnblockedEvents() {
						hasScheduledReplayAttempt = false;
						while (queuedDiscreteEvents.length > 0) {
							var nextDiscreteEvent = queuedDiscreteEvents[0];
							if (nextDiscreteEvent.blockedOn !== null) {
								var _fiber4 = getInstanceFromNode(nextDiscreteEvent.blockedOn);
								if (_fiber4 !== null) {
									attemptUserBlockingHydration(_fiber4);
								}
								break;
							}
							var targetContainers = nextDiscreteEvent.targetContainers;
							while (targetContainers.length > 0) {
								var targetContainer = targetContainers[0];
								var nextBlockedOn = attemptToDispatchEvent(
									nextDiscreteEvent.domEventName,
									nextDiscreteEvent.eventSystemFlags,
									targetContainer,
									nextDiscreteEvent.nativeEvent
								);
								if (nextBlockedOn !== null) {
									nextDiscreteEvent.blockedOn = nextBlockedOn;
									break;
								}
								targetContainers.shift();
							}
							if (nextDiscreteEvent.blockedOn === null) {
								queuedDiscreteEvents.shift();
							}
						}
						if (queuedFocus !== null && attemptReplayContinuousQueuedEvent(queuedFocus)) {
							queuedFocus = null;
						}
						if (queuedDrag !== null && attemptReplayContinuousQueuedEvent(queuedDrag)) {
							queuedDrag = null;
						}
						if (queuedMouse !== null && attemptReplayContinuousQueuedEvent(queuedMouse)) {
							queuedMouse = null;
						}
						queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
						queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
					}
					function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
						if (queuedEvent.blockedOn === unblocked) {
							queuedEvent.blockedOn = null;
							if (!hasScheduledReplayAttempt) {
								hasScheduledReplayAttempt = true;
								Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents);
							}
						}
					}
					function retryIfBlockedOn(unblocked) {
						if (queuedDiscreteEvents.length > 0) {
							scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked);
							for (var i2 = 1; i2 < queuedDiscreteEvents.length; i2++) {
								var queuedEvent = queuedDiscreteEvents[i2];
								if (queuedEvent.blockedOn === unblocked) {
									queuedEvent.blockedOn = null;
								}
							}
						}
						if (queuedFocus !== null) {
							scheduleCallbackIfUnblocked(queuedFocus, unblocked);
						}
						if (queuedDrag !== null) {
							scheduleCallbackIfUnblocked(queuedDrag, unblocked);
						}
						if (queuedMouse !== null) {
							scheduleCallbackIfUnblocked(queuedMouse, unblocked);
						}
						var unblock = function (queuedEvent2) {
							return scheduleCallbackIfUnblocked(queuedEvent2, unblocked);
						};
						queuedPointers.forEach(unblock);
						queuedPointerCaptures.forEach(unblock);
						for (var _i = 0; _i < queuedExplicitHydrationTargets.length; _i++) {
							var queuedTarget = queuedExplicitHydrationTargets[_i];
							if (queuedTarget.blockedOn === unblocked) {
								queuedTarget.blockedOn = null;
							}
						}
						while (queuedExplicitHydrationTargets.length > 0) {
							var nextExplicitTarget = queuedExplicitHydrationTargets[0];
							if (nextExplicitTarget.blockedOn !== null) {
								break;
							} else {
								attemptExplicitHydrationTarget(nextExplicitTarget);
								if (nextExplicitTarget.blockedOn === null) {
									queuedExplicitHydrationTargets.shift();
								}
							}
						}
					}
					var DiscreteEvent = 0;
					var UserBlockingEvent = 1;
					var ContinuousEvent = 2;
					function makePrefixMap(styleProp, eventName) {
						var prefixes2 = {};
						prefixes2[styleProp.toLowerCase()] = eventName.toLowerCase();
						prefixes2['Webkit' + styleProp] = 'webkit' + eventName;
						prefixes2['Moz' + styleProp] = 'moz' + eventName;
						return prefixes2;
					}
					var vendorPrefixes = {
						animationend: makePrefixMap('Animation', 'AnimationEnd'),
						animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
						animationstart: makePrefixMap('Animation', 'AnimationStart'),
						transitionend: makePrefixMap('Transition', 'TransitionEnd')
					};
					var prefixedEventNames = {};
					var style = {};
					if (canUseDOM) {
						style = document.createElement('div').style;
						if (!('AnimationEvent' in self)) {
							delete vendorPrefixes.animationend.animation;
							delete vendorPrefixes.animationiteration.animation;
							delete vendorPrefixes.animationstart.animation;
						}
						if (!('TransitionEvent' in self)) {
							delete vendorPrefixes.transitionend.transition;
						}
					}
					function getVendorPrefixedEventName(eventName) {
						if (prefixedEventNames[eventName]) {
							return prefixedEventNames[eventName];
						} else if (!vendorPrefixes[eventName]) {
							return eventName;
						}
						var prefixMap = vendorPrefixes[eventName];
						for (var styleProp in prefixMap) {
							if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
								return (prefixedEventNames[eventName] = prefixMap[styleProp]);
							}
						}
						return eventName;
					}
					var ANIMATION_END = getVendorPrefixedEventName('animationend');
					var ANIMATION_ITERATION = getVendorPrefixedEventName('animationiteration');
					var ANIMATION_START = getVendorPrefixedEventName('animationstart');
					var TRANSITION_END = getVendorPrefixedEventName('transitionend');
					var topLevelEventsToReactNames = /* @__PURE__ */ new Map();
					var eventPriorities = /* @__PURE__ */ new Map();
					var discreteEventPairsForSimpleEventPlugin = [
						'cancel',
						'cancel',
						'click',
						'click',
						'close',
						'close',
						'contextmenu',
						'contextMenu',
						'copy',
						'copy',
						'cut',
						'cut',
						'auxclick',
						'auxClick',
						'dblclick',
						'doubleClick',
						'dragend',
						'dragEnd',
						'dragstart',
						'dragStart',
						'drop',
						'drop',
						'focusin',
						'focus',
						'focusout',
						'blur',
						'input',
						'input',
						'invalid',
						'invalid',
						'keydown',
						'keyDown',
						'keypress',
						'keyPress',
						'keyup',
						'keyUp',
						'mousedown',
						'mouseDown',
						'mouseup',
						'mouseUp',
						'paste',
						'paste',
						'pause',
						'pause',
						'play',
						'play',
						'pointercancel',
						'pointerCancel',
						'pointerdown',
						'pointerDown',
						'pointerup',
						'pointerUp',
						'ratechange',
						'rateChange',
						'reset',
						'reset',
						'seeked',
						'seeked',
						'submit',
						'submit',
						'touchcancel',
						'touchCancel',
						'touchend',
						'touchEnd',
						'touchstart',
						'touchStart',
						'volumechange',
						'volumeChange'
					];
					var otherDiscreteEvents = [
						'change',
						'selectionchange',
						'textInput',
						'compositionstart',
						'compositionend',
						'compositionupdate'
					];
					var userBlockingPairsForSimpleEventPlugin = [
						'drag',
						'drag',
						'dragenter',
						'dragEnter',
						'dragexit',
						'dragExit',
						'dragleave',
						'dragLeave',
						'dragover',
						'dragOver',
						'mousemove',
						'mouseMove',
						'mouseout',
						'mouseOut',
						'mouseover',
						'mouseOver',
						'pointermove',
						'pointerMove',
						'pointerout',
						'pointerOut',
						'pointerover',
						'pointerOver',
						'scroll',
						'scroll',
						'toggle',
						'toggle',
						'touchmove',
						'touchMove',
						'wheel',
						'wheel'
					];
					var continuousPairsForSimpleEventPlugin = [
						'abort',
						'abort',
						ANIMATION_END,
						'animationEnd',
						ANIMATION_ITERATION,
						'animationIteration',
						ANIMATION_START,
						'animationStart',
						'canplay',
						'canPlay',
						'canplaythrough',
						'canPlayThrough',
						'durationchange',
						'durationChange',
						'emptied',
						'emptied',
						'encrypted',
						'encrypted',
						'ended',
						'ended',
						'error',
						'error',
						'gotpointercapture',
						'gotPointerCapture',
						'load',
						'load',
						'loadeddata',
						'loadedData',
						'loadedmetadata',
						'loadedMetadata',
						'loadstart',
						'loadStart',
						'lostpointercapture',
						'lostPointerCapture',
						'playing',
						'playing',
						'progress',
						'progress',
						'seeking',
						'seeking',
						'stalled',
						'stalled',
						'suspend',
						'suspend',
						'timeupdate',
						'timeUpdate',
						TRANSITION_END,
						'transitionEnd',
						'waiting',
						'waiting'
					];
					function registerSimplePluginEventsAndSetTheirPriorities(eventTypes, priority) {
						for (var i2 = 0; i2 < eventTypes.length; i2 += 2) {
							var topEvent = eventTypes[i2];
							var event = eventTypes[i2 + 1];
							var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
							var reactName = 'on' + capitalizedEvent;
							eventPriorities.set(topEvent, priority);
							topLevelEventsToReactNames.set(topEvent, reactName);
							registerTwoPhaseEvent(reactName, [topEvent]);
						}
					}
					function setEventPriorities(eventTypes, priority) {
						for (var i2 = 0; i2 < eventTypes.length; i2++) {
							eventPriorities.set(eventTypes[i2], priority);
						}
					}
					function getEventPriorityForPluginSystem(domEventName) {
						var priority = eventPriorities.get(domEventName);
						return priority === void 0 ? ContinuousEvent : priority;
					}
					function registerSimpleEvents() {
						registerSimplePluginEventsAndSetTheirPriorities(discreteEventPairsForSimpleEventPlugin, DiscreteEvent);
						registerSimplePluginEventsAndSetTheirPriorities(userBlockingPairsForSimpleEventPlugin, UserBlockingEvent);
						registerSimplePluginEventsAndSetTheirPriorities(continuousPairsForSimpleEventPlugin, ContinuousEvent);
						setEventPriorities(otherDiscreteEvents, DiscreteEvent);
					}
					var Scheduler_now = Scheduler.unstable_now;
					{
						if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
							{
								throw Error(
									'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling'
								);
							}
						}
					}
					var ImmediatePriority = 99;
					var UserBlockingPriority = 98;
					var NormalPriority = 97;
					var LowPriority = 96;
					var IdlePriority = 95;
					var NoPriority = 90;
					var initialTimeMs = Scheduler_now();
					var SyncLanePriority = 15;
					var SyncBatchedLanePriority = 14;
					var InputDiscreteHydrationLanePriority = 13;
					var InputDiscreteLanePriority = 12;
					var InputContinuousHydrationLanePriority = 11;
					var InputContinuousLanePriority = 10;
					var DefaultHydrationLanePriority = 9;
					var DefaultLanePriority = 8;
					var TransitionHydrationPriority = 7;
					var TransitionPriority = 6;
					var RetryLanePriority = 5;
					var SelectiveHydrationLanePriority = 4;
					var IdleHydrationLanePriority = 3;
					var IdleLanePriority = 2;
					var OffscreenLanePriority = 1;
					var NoLanePriority = 0;
					var TotalLanes = 31;
					var NoLanes = 0;
					var NoLane = 0;
					var SyncLane = 1;
					var SyncBatchedLane = 2;
					var InputDiscreteHydrationLane = 4;
					var InputDiscreteLanes = 24;
					var InputContinuousHydrationLane = 32;
					var InputContinuousLanes = 192;
					var DefaultHydrationLane = 256;
					var DefaultLanes = 3584;
					var TransitionHydrationLane = 4096;
					var TransitionLanes = 4186112;
					var RetryLanes = 62914560;
					var SomeRetryLane = 33554432;
					var SelectiveHydrationLane = 67108864;
					var NonIdleLanes = 134217727;
					var IdleHydrationLane = 134217728;
					var IdleLanes = 805306368;
					var OffscreenLane = 1073741824;
					var NoTimestamp = -1;
					function setCurrentUpdateLanePriority(newLanePriority) {}
					var return_highestLanePriority = DefaultLanePriority;
					function getHighestPriorityLanes(lanes) {
						if ((SyncLane & lanes) !== NoLanes) {
							return_highestLanePriority = SyncLanePriority;
							return SyncLane;
						}
						if ((SyncBatchedLane & lanes) !== NoLanes) {
							return_highestLanePriority = SyncBatchedLanePriority;
							return SyncBatchedLane;
						}
						if ((InputDiscreteHydrationLane & lanes) !== NoLanes) {
							return_highestLanePriority = InputDiscreteHydrationLanePriority;
							return InputDiscreteHydrationLane;
						}
						var inputDiscreteLanes = InputDiscreteLanes & lanes;
						if (inputDiscreteLanes !== NoLanes) {
							return_highestLanePriority = InputDiscreteLanePriority;
							return inputDiscreteLanes;
						}
						if ((lanes & InputContinuousHydrationLane) !== NoLanes) {
							return_highestLanePriority = InputContinuousHydrationLanePriority;
							return InputContinuousHydrationLane;
						}
						var inputContinuousLanes = InputContinuousLanes & lanes;
						if (inputContinuousLanes !== NoLanes) {
							return_highestLanePriority = InputContinuousLanePriority;
							return inputContinuousLanes;
						}
						if ((lanes & DefaultHydrationLane) !== NoLanes) {
							return_highestLanePriority = DefaultHydrationLanePriority;
							return DefaultHydrationLane;
						}
						var defaultLanes = DefaultLanes & lanes;
						if (defaultLanes !== NoLanes) {
							return_highestLanePriority = DefaultLanePriority;
							return defaultLanes;
						}
						if ((lanes & TransitionHydrationLane) !== NoLanes) {
							return_highestLanePriority = TransitionHydrationPriority;
							return TransitionHydrationLane;
						}
						var transitionLanes = TransitionLanes & lanes;
						if (transitionLanes !== NoLanes) {
							return_highestLanePriority = TransitionPriority;
							return transitionLanes;
						}
						var retryLanes = RetryLanes & lanes;
						if (retryLanes !== NoLanes) {
							return_highestLanePriority = RetryLanePriority;
							return retryLanes;
						}
						if (lanes & SelectiveHydrationLane) {
							return_highestLanePriority = SelectiveHydrationLanePriority;
							return SelectiveHydrationLane;
						}
						if ((lanes & IdleHydrationLane) !== NoLanes) {
							return_highestLanePriority = IdleHydrationLanePriority;
							return IdleHydrationLane;
						}
						var idleLanes = IdleLanes & lanes;
						if (idleLanes !== NoLanes) {
							return_highestLanePriority = IdleLanePriority;
							return idleLanes;
						}
						if ((OffscreenLane & lanes) !== NoLanes) {
							return_highestLanePriority = OffscreenLanePriority;
							return OffscreenLane;
						}
						{
							error('Should have found matching lanes. This is a bug in React.');
						}
						return_highestLanePriority = DefaultLanePriority;
						return lanes;
					}
					function schedulerPriorityToLanePriority(schedulerPriorityLevel) {
						switch (schedulerPriorityLevel) {
							case ImmediatePriority:
								return SyncLanePriority;
							case UserBlockingPriority:
								return InputContinuousLanePriority;
							case NormalPriority:
							case LowPriority:
								return DefaultLanePriority;
							case IdlePriority:
								return IdleLanePriority;
							default:
								return NoLanePriority;
						}
					}
					function lanePriorityToSchedulerPriority(lanePriority) {
						switch (lanePriority) {
							case SyncLanePriority:
							case SyncBatchedLanePriority:
								return ImmediatePriority;
							case InputDiscreteHydrationLanePriority:
							case InputDiscreteLanePriority:
							case InputContinuousHydrationLanePriority:
							case InputContinuousLanePriority:
								return UserBlockingPriority;
							case DefaultHydrationLanePriority:
							case DefaultLanePriority:
							case TransitionHydrationPriority:
							case TransitionPriority:
							case SelectiveHydrationLanePriority:
							case RetryLanePriority:
								return NormalPriority;
							case IdleHydrationLanePriority:
							case IdleLanePriority:
							case OffscreenLanePriority:
								return IdlePriority;
							case NoLanePriority:
								return NoPriority;
							default: {
								{
									throw Error('Invalid update priority: ' + lanePriority + '. This is a bug in React.');
								}
							}
						}
					}
					function getNextLanes(root2, wipLanes) {
						var pendingLanes = root2.pendingLanes;
						if (pendingLanes === NoLanes) {
							return_highestLanePriority = NoLanePriority;
							return NoLanes;
						}
						var nextLanes = NoLanes;
						var nextLanePriority = NoLanePriority;
						var expiredLanes = root2.expiredLanes;
						var suspendedLanes = root2.suspendedLanes;
						var pingedLanes = root2.pingedLanes;
						if (expiredLanes !== NoLanes) {
							nextLanes = expiredLanes;
							nextLanePriority = return_highestLanePriority = SyncLanePriority;
						} else {
							var nonIdlePendingLanes = pendingLanes & NonIdleLanes;
							if (nonIdlePendingLanes !== NoLanes) {
								var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;
								if (nonIdleUnblockedLanes !== NoLanes) {
									nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes);
									nextLanePriority = return_highestLanePriority;
								} else {
									var nonIdlePingedLanes = nonIdlePendingLanes & pingedLanes;
									if (nonIdlePingedLanes !== NoLanes) {
										nextLanes = getHighestPriorityLanes(nonIdlePingedLanes);
										nextLanePriority = return_highestLanePriority;
									}
								}
							} else {
								var unblockedLanes = pendingLanes & ~suspendedLanes;
								if (unblockedLanes !== NoLanes) {
									nextLanes = getHighestPriorityLanes(unblockedLanes);
									nextLanePriority = return_highestLanePriority;
								} else {
									if (pingedLanes !== NoLanes) {
										nextLanes = getHighestPriorityLanes(pingedLanes);
										nextLanePriority = return_highestLanePriority;
									}
								}
							}
						}
						if (nextLanes === NoLanes) {
							return NoLanes;
						}
						nextLanes = pendingLanes & getEqualOrHigherPriorityLanes(nextLanes);
						if (wipLanes !== NoLanes && wipLanes !== nextLanes && (wipLanes & suspendedLanes) === NoLanes) {
							getHighestPriorityLanes(wipLanes);
							var wipLanePriority = return_highestLanePriority;
							if (nextLanePriority <= wipLanePriority) {
								return wipLanes;
							} else {
								return_highestLanePriority = nextLanePriority;
							}
						}
						var entangledLanes = root2.entangledLanes;
						if (entangledLanes !== NoLanes) {
							var entanglements = root2.entanglements;
							var lanes = nextLanes & entangledLanes;
							while (lanes > 0) {
								var index2 = pickArbitraryLaneIndex(lanes);
								var lane = 1 << index2;
								nextLanes |= entanglements[index2];
								lanes &= ~lane;
							}
						}
						return nextLanes;
					}
					function getMostRecentEventTime(root2, lanes) {
						var eventTimes = root2.eventTimes;
						var mostRecentEventTime = NoTimestamp;
						while (lanes > 0) {
							var index2 = pickArbitraryLaneIndex(lanes);
							var lane = 1 << index2;
							var eventTime = eventTimes[index2];
							if (eventTime > mostRecentEventTime) {
								mostRecentEventTime = eventTime;
							}
							lanes &= ~lane;
						}
						return mostRecentEventTime;
					}
					function computeExpirationTime(lane, currentTime) {
						getHighestPriorityLanes(lane);
						var priority = return_highestLanePriority;
						if (priority >= InputContinuousLanePriority) {
							return currentTime + 250;
						} else if (priority >= TransitionPriority) {
							return currentTime + 5e3;
						} else {
							return NoTimestamp;
						}
					}
					function markStarvedLanesAsExpired(root2, currentTime) {
						var pendingLanes = root2.pendingLanes;
						var suspendedLanes = root2.suspendedLanes;
						var pingedLanes = root2.pingedLanes;
						var expirationTimes = root2.expirationTimes;
						var lanes = pendingLanes;
						while (lanes > 0) {
							var index2 = pickArbitraryLaneIndex(lanes);
							var lane = 1 << index2;
							var expirationTime = expirationTimes[index2];
							if (expirationTime === NoTimestamp) {
								if ((lane & suspendedLanes) === NoLanes || (lane & pingedLanes) !== NoLanes) {
									expirationTimes[index2] = computeExpirationTime(lane, currentTime);
								}
							} else if (expirationTime <= currentTime) {
								root2.expiredLanes |= lane;
							}
							lanes &= ~lane;
						}
					}
					function getLanesToRetrySynchronouslyOnError(root2) {
						var everythingButOffscreen = root2.pendingLanes & ~OffscreenLane;
						if (everythingButOffscreen !== NoLanes) {
							return everythingButOffscreen;
						}
						if (everythingButOffscreen & OffscreenLane) {
							return OffscreenLane;
						}
						return NoLanes;
					}
					function returnNextLanesPriority() {
						return return_highestLanePriority;
					}
					function includesNonIdleWork(lanes) {
						return (lanes & NonIdleLanes) !== NoLanes;
					}
					function includesOnlyRetries(lanes) {
						return (lanes & RetryLanes) === lanes;
					}
					function includesOnlyTransitions(lanes) {
						return (lanes & TransitionLanes) === lanes;
					}
					function findUpdateLane(lanePriority, wipLanes) {
						switch (lanePriority) {
							case NoLanePriority:
								break;
							case SyncLanePriority:
								return SyncLane;
							case SyncBatchedLanePriority:
								return SyncBatchedLane;
							case InputDiscreteLanePriority: {
								var _lane = pickArbitraryLane(InputDiscreteLanes & ~wipLanes);
								if (_lane === NoLane) {
									return findUpdateLane(InputContinuousLanePriority, wipLanes);
								}
								return _lane;
							}
							case InputContinuousLanePriority: {
								var _lane2 = pickArbitraryLane(InputContinuousLanes & ~wipLanes);
								if (_lane2 === NoLane) {
									return findUpdateLane(DefaultLanePriority, wipLanes);
								}
								return _lane2;
							}
							case DefaultLanePriority: {
								var _lane3 = pickArbitraryLane(DefaultLanes & ~wipLanes);
								if (_lane3 === NoLane) {
									_lane3 = pickArbitraryLane(TransitionLanes & ~wipLanes);
									if (_lane3 === NoLane) {
										_lane3 = pickArbitraryLane(DefaultLanes);
									}
								}
								return _lane3;
							}
							case TransitionPriority:
							case RetryLanePriority:
								break;
							case IdleLanePriority:
								var lane = pickArbitraryLane(IdleLanes & ~wipLanes);
								if (lane === NoLane) {
									lane = pickArbitraryLane(IdleLanes);
								}
								return lane;
						}
						{
							{
								throw Error('Invalid update priority: ' + lanePriority + '. This is a bug in React.');
							}
						}
					}
					function findTransitionLane(wipLanes, pendingLanes) {
						var lane = pickArbitraryLane(TransitionLanes & ~pendingLanes);
						if (lane === NoLane) {
							lane = pickArbitraryLane(TransitionLanes & ~wipLanes);
							if (lane === NoLane) {
								lane = pickArbitraryLane(TransitionLanes);
							}
						}
						return lane;
					}
					function findRetryLane(wipLanes) {
						var lane = pickArbitraryLane(RetryLanes & ~wipLanes);
						if (lane === NoLane) {
							lane = pickArbitraryLane(RetryLanes);
						}
						return lane;
					}
					function getHighestPriorityLane(lanes) {
						return lanes & -lanes;
					}
					function getLowestPriorityLane(lanes) {
						var index2 = 31 - clz32(lanes);
						return index2 < 0 ? NoLanes : 1 << index2;
					}
					function getEqualOrHigherPriorityLanes(lanes) {
						return (getLowestPriorityLane(lanes) << 1) - 1;
					}
					function pickArbitraryLane(lanes) {
						return getHighestPriorityLane(lanes);
					}
					function pickArbitraryLaneIndex(lanes) {
						return 31 - clz32(lanes);
					}
					function laneToIndex(lane) {
						return pickArbitraryLaneIndex(lane);
					}
					function includesSomeLane(a, b) {
						return (a & b) !== NoLanes;
					}
					function isSubsetOfLanes(set2, subset) {
						return (set2 & subset) === subset;
					}
					function mergeLanes(a, b) {
						return a | b;
					}
					function removeLanes(set2, subset) {
						return set2 & ~subset;
					}
					function laneToLanes(lane) {
						return lane;
					}
					function higherPriorityLane(a, b) {
						return a !== NoLane && a < b ? a : b;
					}
					function createLaneMap(initial) {
						var laneMap = [];
						for (var i2 = 0; i2 < TotalLanes; i2++) {
							laneMap.push(initial);
						}
						return laneMap;
					}
					function markRootUpdated(root2, updateLane, eventTime) {
						root2.pendingLanes |= updateLane;
						var higherPriorityLanes = updateLane - 1;
						root2.suspendedLanes &= higherPriorityLanes;
						root2.pingedLanes &= higherPriorityLanes;
						var eventTimes = root2.eventTimes;
						var index2 = laneToIndex(updateLane);
						eventTimes[index2] = eventTime;
					}
					function markRootSuspended(root2, suspendedLanes) {
						root2.suspendedLanes |= suspendedLanes;
						root2.pingedLanes &= ~suspendedLanes;
						var expirationTimes = root2.expirationTimes;
						var lanes = suspendedLanes;
						while (lanes > 0) {
							var index2 = pickArbitraryLaneIndex(lanes);
							var lane = 1 << index2;
							expirationTimes[index2] = NoTimestamp;
							lanes &= ~lane;
						}
					}
					function markRootPinged(root2, pingedLanes, eventTime) {
						root2.pingedLanes |= root2.suspendedLanes & pingedLanes;
					}
					function markDiscreteUpdatesExpired(root2) {
						root2.expiredLanes |= InputDiscreteLanes & root2.pendingLanes;
					}
					function hasDiscreteLanes(lanes) {
						return (lanes & InputDiscreteLanes) !== NoLanes;
					}
					function markRootMutableRead(root2, updateLane) {
						root2.mutableReadLanes |= updateLane & root2.pendingLanes;
					}
					function markRootFinished(root2, remainingLanes) {
						var noLongerPendingLanes = root2.pendingLanes & ~remainingLanes;
						root2.pendingLanes = remainingLanes;
						root2.suspendedLanes = 0;
						root2.pingedLanes = 0;
						root2.expiredLanes &= remainingLanes;
						root2.mutableReadLanes &= remainingLanes;
						root2.entangledLanes &= remainingLanes;
						var entanglements = root2.entanglements;
						var eventTimes = root2.eventTimes;
						var expirationTimes = root2.expirationTimes;
						var lanes = noLongerPendingLanes;
						while (lanes > 0) {
							var index2 = pickArbitraryLaneIndex(lanes);
							var lane = 1 << index2;
							entanglements[index2] = NoLanes;
							eventTimes[index2] = NoTimestamp;
							expirationTimes[index2] = NoTimestamp;
							lanes &= ~lane;
						}
					}
					function markRootEntangled(root2, entangledLanes) {
						root2.entangledLanes |= entangledLanes;
						var entanglements = root2.entanglements;
						var lanes = entangledLanes;
						while (lanes > 0) {
							var index2 = pickArbitraryLaneIndex(lanes);
							var lane = 1 << index2;
							entanglements[index2] |= entangledLanes;
							lanes &= ~lane;
						}
					}
					var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
					var log = Math.log;
					var LN2 = Math.LN2;
					function clz32Fallback(lanes) {
						if (lanes === 0) {
							return 32;
						}
						return (31 - ((log(lanes) / LN2) | 0)) | 0;
					}
					var UserBlockingPriority$1 = Scheduler.unstable_UserBlockingPriority,
						runWithPriority = Scheduler.unstable_runWithPriority;
					var _enabled = true;
					function setEnabled(enabled) {
						_enabled = !!enabled;
					}
					function isEnabled() {
						return _enabled;
					}
					function createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags) {
						var eventPriority = getEventPriorityForPluginSystem(domEventName);
						var listenerWrapper;
						switch (eventPriority) {
							case DiscreteEvent:
								listenerWrapper = dispatchDiscreteEvent;
								break;
							case UserBlockingEvent:
								listenerWrapper = dispatchUserBlockingUpdate;
								break;
							case ContinuousEvent:
							default:
								listenerWrapper = dispatchEvent;
								break;
						}
						return listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
					}
					function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
						{
							flushDiscreteUpdatesIfNeeded(nativeEvent.timeStamp);
						}
						discreteUpdates(dispatchEvent, domEventName, eventSystemFlags, container, nativeEvent);
					}
					function dispatchUserBlockingUpdate(domEventName, eventSystemFlags, container, nativeEvent) {
						{
							runWithPriority(
								UserBlockingPriority$1,
								dispatchEvent.bind(null, domEventName, eventSystemFlags, container, nativeEvent)
							);
						}
					}
					function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
						if (!_enabled) {
							return;
						}
						var allowReplay = true;
						{
							allowReplay = (eventSystemFlags & IS_CAPTURE_PHASE) === 0;
						}
						if (allowReplay && hasQueuedDiscreteEvents() && isReplayableDiscreteEvent(domEventName)) {
							queueDiscreteEvent(null, domEventName, eventSystemFlags, targetContainer, nativeEvent);
							return;
						}
						var blockedOn = attemptToDispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent);
						if (blockedOn === null) {
							if (allowReplay) {
								clearIfContinuousEvent(domEventName, nativeEvent);
							}
							return;
						}
						if (allowReplay) {
							if (isReplayableDiscreteEvent(domEventName)) {
								queueDiscreteEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
								return;
							}
							if (queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)) {
								return;
							}
							clearIfContinuousEvent(domEventName, nativeEvent);
						}
						dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, null, targetContainer);
					}
					function attemptToDispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
						var nativeEventTarget = getEventTarget(nativeEvent);
						var targetInst = getClosestInstanceFromNode(nativeEventTarget);
						if (targetInst !== null) {
							var nearestMounted = getNearestMountedFiber(targetInst);
							if (nearestMounted === null) {
								targetInst = null;
							} else {
								var tag = nearestMounted.tag;
								if (tag === SuspenseComponent) {
									var instance = getSuspenseInstanceFromFiber(nearestMounted);
									if (instance !== null) {
										return instance;
									}
									targetInst = null;
								} else if (tag === HostRoot) {
									var root2 = nearestMounted.stateNode;
									if (root2.hydrate) {
										return getContainerFromFiber(nearestMounted);
									}
									targetInst = null;
								} else if (nearestMounted !== targetInst) {
									targetInst = null;
								}
							}
						}
						dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer);
						return null;
					}
					function addEventBubbleListener(target, eventType, listener) {
						target.addEventListener(eventType, listener, false);
						return listener;
					}
					function addEventCaptureListener(target, eventType, listener) {
						target.addEventListener(eventType, listener, true);
						return listener;
					}
					function addEventCaptureListenerWithPassiveFlag(target, eventType, listener, passive) {
						target.addEventListener(eventType, listener, {
							capture: true,
							passive
						});
						return listener;
					}
					function addEventBubbleListenerWithPassiveFlag(target, eventType, listener, passive) {
						target.addEventListener(eventType, listener, {
							passive
						});
						return listener;
					}
					var root = null;
					var startText = null;
					var fallbackText = null;
					function initialize(nativeEventTarget) {
						root = nativeEventTarget;
						startText = getText();
						return true;
					}
					function reset() {
						root = null;
						startText = null;
						fallbackText = null;
					}
					function getData() {
						if (fallbackText) {
							return fallbackText;
						}
						var start;
						var startValue = startText;
						var startLength = startValue.length;
						var end;
						var endValue = getText();
						var endLength = endValue.length;
						for (start = 0; start < startLength; start++) {
							if (startValue[start] !== endValue[start]) {
								break;
							}
						}
						var minEnd = startLength - start;
						for (end = 1; end <= minEnd; end++) {
							if (startValue[startLength - end] !== endValue[endLength - end]) {
								break;
							}
						}
						var sliceTail = end > 1 ? 1 - end : void 0;
						fallbackText = endValue.slice(start, sliceTail);
						return fallbackText;
					}
					function getText() {
						if ('value' in root) {
							return root.value;
						}
						return root.textContent;
					}
					function getEventCharCode(nativeEvent) {
						var charCode;
						var keyCode = nativeEvent.keyCode;
						if ('charCode' in nativeEvent) {
							charCode = nativeEvent.charCode;
							if (charCode === 0 && keyCode === 13) {
								charCode = 13;
							}
						} else {
							charCode = keyCode;
						}
						if (charCode === 10) {
							charCode = 13;
						}
						if (charCode >= 32 || charCode === 13) {
							return charCode;
						}
						return 0;
					}
					function functionThatReturnsTrue() {
						return true;
					}
					function functionThatReturnsFalse() {
						return false;
					}
					function createSyntheticEvent(Interface) {
						function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
							this._reactName = reactName;
							this._targetInst = targetInst;
							this.type = reactEventType;
							this.nativeEvent = nativeEvent;
							this.target = nativeEventTarget;
							this.currentTarget = null;
							for (var _propName in Interface) {
								if (!Interface.hasOwnProperty(_propName)) {
									continue;
								}
								var normalize2 = Interface[_propName];
								if (normalize2) {
									this[_propName] = normalize2(nativeEvent);
								} else {
									this[_propName] = nativeEvent[_propName];
								}
							}
							var defaultPrevented =
								nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
							if (defaultPrevented) {
								this.isDefaultPrevented = functionThatReturnsTrue;
							} else {
								this.isDefaultPrevented = functionThatReturnsFalse;
							}
							this.isPropagationStopped = functionThatReturnsFalse;
							return this;
						}
						_assign(SyntheticBaseEvent.prototype, {
							preventDefault: function () {
								this.defaultPrevented = true;
								var event = this.nativeEvent;
								if (!event) {
									return;
								}
								if (event.preventDefault) {
									event.preventDefault();
								} else if (typeof event.returnValue !== 'unknown') {
									event.returnValue = false;
								}
								this.isDefaultPrevented = functionThatReturnsTrue;
							},
							stopPropagation: function () {
								var event = this.nativeEvent;
								if (!event) {
									return;
								}
								if (event.stopPropagation) {
									event.stopPropagation();
								} else if (typeof event.cancelBubble !== 'unknown') {
									event.cancelBubble = true;
								}
								this.isPropagationStopped = functionThatReturnsTrue;
							},
							persist: function () {},
							isPersistent: functionThatReturnsTrue
						});
						return SyntheticBaseEvent;
					}
					var EventInterface = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (event) {
							return event.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0
					};
					var SyntheticEvent = createSyntheticEvent(EventInterface);
					var UIEventInterface = _assign({}, EventInterface, {
						view: 0,
						detail: 0
					});
					var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
					var lastMovementX;
					var lastMovementY;
					var lastMouseEvent;
					function updateMouseMovementPolyfillState(event) {
						if (event !== lastMouseEvent) {
							if (lastMouseEvent && event.type === 'mousemove') {
								lastMovementX = event.screenX - lastMouseEvent.screenX;
								lastMovementY = event.screenY - lastMouseEvent.screenY;
							} else {
								lastMovementX = 0;
								lastMovementY = 0;
							}
							lastMouseEvent = event;
						}
					}
					var MouseEventInterface = _assign({}, UIEventInterface, {
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
						getModifierState: getEventModifierState,
						button: 0,
						buttons: 0,
						relatedTarget: function (event) {
							if (event.relatedTarget === void 0)
								return event.fromElement === event.srcElement ? event.toElement : event.fromElement;
							return event.relatedTarget;
						},
						movementX: function (event) {
							if ('movementX' in event) {
								return event.movementX;
							}
							updateMouseMovementPolyfillState(event);
							return lastMovementX;
						},
						movementY: function (event) {
							if ('movementY' in event) {
								return event.movementY;
							}
							return lastMovementY;
						}
					});
					var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
					var DragEventInterface = _assign({}, MouseEventInterface, {
						dataTransfer: 0
					});
					var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
					var FocusEventInterface = _assign({}, UIEventInterface, {
						relatedTarget: 0
					});
					var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
					var AnimationEventInterface = _assign({}, EventInterface, {
						animationName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					});
					var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
					var ClipboardEventInterface = _assign({}, EventInterface, {
						clipboardData: function (event) {
							return 'clipboardData' in event ? event.clipboardData : self.clipboardData;
						}
					});
					var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
					var CompositionEventInterface = _assign({}, EventInterface, {
						data: 0
					});
					var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
					var SyntheticInputEvent = SyntheticCompositionEvent;
					var normalizeKey = {
						Esc: 'Escape',
						Spacebar: ' ',
						Left: 'ArrowLeft',
						Up: 'ArrowUp',
						Right: 'ArrowRight',
						Down: 'ArrowDown',
						Del: 'Delete',
						Win: 'OS',
						Menu: 'ContextMenu',
						Apps: 'ContextMenu',
						Scroll: 'ScrollLock',
						MozPrintableKey: 'Unidentified'
					};
					var translateToKey = {
						8: 'Backspace',
						9: 'Tab',
						12: 'Clear',
						13: 'Enter',
						16: 'Shift',
						17: 'Control',
						18: 'Alt',
						19: 'Pause',
						20: 'CapsLock',
						27: 'Escape',
						32: ' ',
						33: 'PageUp',
						34: 'PageDown',
						35: 'End',
						36: 'Home',
						37: 'ArrowLeft',
						38: 'ArrowUp',
						39: 'ArrowRight',
						40: 'ArrowDown',
						45: 'Insert',
						46: 'Delete',
						112: 'F1',
						113: 'F2',
						114: 'F3',
						115: 'F4',
						116: 'F5',
						117: 'F6',
						118: 'F7',
						119: 'F8',
						120: 'F9',
						121: 'F10',
						122: 'F11',
						123: 'F12',
						144: 'NumLock',
						145: 'ScrollLock',
						224: 'Meta'
					};
					function getEventKey(nativeEvent) {
						if (nativeEvent.key) {
							var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
							if (key !== 'Unidentified') {
								return key;
							}
						}
						if (nativeEvent.type === 'keypress') {
							var charCode = getEventCharCode(nativeEvent);
							return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
						}
						if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
							return translateToKey[nativeEvent.keyCode] || 'Unidentified';
						}
						return '';
					}
					var modifierKeyToProp = {
						Alt: 'altKey',
						Control: 'ctrlKey',
						Meta: 'metaKey',
						Shift: 'shiftKey'
					};
					function modifierStateGetter(keyArg) {
						var syntheticEvent = this;
						var nativeEvent = syntheticEvent.nativeEvent;
						if (nativeEvent.getModifierState) {
							return nativeEvent.getModifierState(keyArg);
						}
						var keyProp = modifierKeyToProp[keyArg];
						return keyProp ? !!nativeEvent[keyProp] : false;
					}
					function getEventModifierState(nativeEvent) {
						return modifierStateGetter;
					}
					var KeyboardEventInterface = _assign({}, UIEventInterface, {
						key: getEventKey,
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: getEventModifierState,
						charCode: function (event) {
							if (event.type === 'keypress') {
								return getEventCharCode(event);
							}
							return 0;
						},
						keyCode: function (event) {
							if (event.type === 'keydown' || event.type === 'keyup') {
								return event.keyCode;
							}
							return 0;
						},
						which: function (event) {
							if (event.type === 'keypress') {
								return getEventCharCode(event);
							}
							if (event.type === 'keydown' || event.type === 'keyup') {
								return event.keyCode;
							}
							return 0;
						}
					});
					var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
					var PointerEventInterface = _assign({}, MouseEventInterface, {
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
					});
					var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
					var TouchEventInterface = _assign({}, UIEventInterface, {
						touches: 0,
						targetTouches: 0,
						changedTouches: 0,
						altKey: 0,
						metaKey: 0,
						ctrlKey: 0,
						shiftKey: 0,
						getModifierState: getEventModifierState
					});
					var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
					var TransitionEventInterface = _assign({}, EventInterface, {
						propertyName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					});
					var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
					var WheelEventInterface = _assign({}, MouseEventInterface, {
						deltaX: function (event) {
							return 'deltaX' in event ? event.deltaX : 'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
						},
						deltaY: function (event) {
							return 'deltaY' in event
								? event.deltaY
								: 'wheelDeltaY' in event
									? -event.wheelDeltaY
									: 'wheelDelta' in event
										? -event.wheelDelta
										: 0;
						},
						deltaZ: 0,
						deltaMode: 0
					});
					var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
					var END_KEYCODES = [9, 13, 27, 32];
					var START_KEYCODE = 229;
					var canUseCompositionEvent = canUseDOM && 'CompositionEvent' in self;
					var documentMode = null;
					if (canUseDOM && 'documentMode' in document) {
						documentMode = document.documentMode;
					}
					var canUseTextInputEvent = canUseDOM && 'TextEvent' in self && !documentMode;
					var useFallbackCompositionData =
						canUseDOM && (!canUseCompositionEvent || (documentMode && documentMode > 8 && documentMode <= 11));
					var SPACEBAR_CODE = 32;
					var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
					function registerEvents() {
						registerTwoPhaseEvent('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
						registerTwoPhaseEvent('onCompositionEnd', [
							'compositionend',
							'focusout',
							'keydown',
							'keypress',
							'keyup',
							'mousedown'
						]);
						registerTwoPhaseEvent('onCompositionStart', [
							'compositionstart',
							'focusout',
							'keydown',
							'keypress',
							'keyup',
							'mousedown'
						]);
						registerTwoPhaseEvent('onCompositionUpdate', [
							'compositionupdate',
							'focusout',
							'keydown',
							'keypress',
							'keyup',
							'mousedown'
						]);
					}
					var hasSpaceKeypress = false;
					function isKeypressCommand(nativeEvent) {
						return (
							(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
							!(nativeEvent.ctrlKey && nativeEvent.altKey)
						);
					}
					function getCompositionEventType(domEventName) {
						switch (domEventName) {
							case 'compositionstart':
								return 'onCompositionStart';
							case 'compositionend':
								return 'onCompositionEnd';
							case 'compositionupdate':
								return 'onCompositionUpdate';
						}
					}
					function isFallbackCompositionStart(domEventName, nativeEvent) {
						return domEventName === 'keydown' && nativeEvent.keyCode === START_KEYCODE;
					}
					function isFallbackCompositionEnd(domEventName, nativeEvent) {
						switch (domEventName) {
							case 'keyup':
								return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
							case 'keydown':
								return nativeEvent.keyCode !== START_KEYCODE;
							case 'keypress':
							case 'mousedown':
							case 'focusout':
								return true;
							default:
								return false;
						}
					}
					function getDataFromCustomEvent(nativeEvent) {
						var detail = nativeEvent.detail;
						if (typeof detail === 'object' && 'data' in detail) {
							return detail.data;
						}
						return null;
					}
					function isUsingKoreanIME(nativeEvent) {
						return nativeEvent.locale === 'ko';
					}
					var isComposing = false;
					function extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
						var eventType;
						var fallbackData;
						if (canUseCompositionEvent) {
							eventType = getCompositionEventType(domEventName);
						} else if (!isComposing) {
							if (isFallbackCompositionStart(domEventName, nativeEvent)) {
								eventType = 'onCompositionStart';
							}
						} else if (isFallbackCompositionEnd(domEventName, nativeEvent)) {
							eventType = 'onCompositionEnd';
						}
						if (!eventType) {
							return null;
						}
						if (useFallbackCompositionData && !isUsingKoreanIME(nativeEvent)) {
							if (!isComposing && eventType === 'onCompositionStart') {
								isComposing = initialize(nativeEventTarget);
							} else if (eventType === 'onCompositionEnd') {
								if (isComposing) {
									fallbackData = getData();
								}
							}
						}
						var listeners = accumulateTwoPhaseListeners(targetInst, eventType);
						if (listeners.length > 0) {
							var event = new SyntheticCompositionEvent(eventType, domEventName, null, nativeEvent, nativeEventTarget);
							dispatchQueue.push({
								event,
								listeners
							});
							if (fallbackData) {
								event.data = fallbackData;
							} else {
								var customData = getDataFromCustomEvent(nativeEvent);
								if (customData !== null) {
									event.data = customData;
								}
							}
						}
					}
					function getNativeBeforeInputChars(domEventName, nativeEvent) {
						switch (domEventName) {
							case 'compositionend':
								return getDataFromCustomEvent(nativeEvent);
							case 'keypress':
								var which = nativeEvent.which;
								if (which !== SPACEBAR_CODE) {
									return null;
								}
								hasSpaceKeypress = true;
								return SPACEBAR_CHAR;
							case 'textInput':
								var chars = nativeEvent.data;
								if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
									return null;
								}
								return chars;
							default:
								return null;
						}
					}
					function getFallbackBeforeInputChars(domEventName, nativeEvent) {
						if (isComposing) {
							if (
								domEventName === 'compositionend' ||
								(!canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent))
							) {
								var chars = getData();
								reset();
								isComposing = false;
								return chars;
							}
							return null;
						}
						switch (domEventName) {
							case 'paste':
								return null;
							case 'keypress':
								if (!isKeypressCommand(nativeEvent)) {
									if (nativeEvent.char && nativeEvent.char.length > 1) {
										return nativeEvent.char;
									} else if (nativeEvent.which) {
										return String.fromCharCode(nativeEvent.which);
									}
								}
								return null;
							case 'compositionend':
								return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent) ? null : nativeEvent.data;
							default:
								return null;
						}
					}
					function extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
						var chars;
						if (canUseTextInputEvent) {
							chars = getNativeBeforeInputChars(domEventName, nativeEvent);
						} else {
							chars = getFallbackBeforeInputChars(domEventName, nativeEvent);
						}
						if (!chars) {
							return null;
						}
						var listeners = accumulateTwoPhaseListeners(targetInst, 'onBeforeInput');
						if (listeners.length > 0) {
							var event = new SyntheticInputEvent('onBeforeInput', 'beforeinput', null, nativeEvent, nativeEventTarget);
							dispatchQueue.push({
								event,
								listeners
							});
							event.data = chars;
						}
					}
					function extractEvents(
						dispatchQueue,
						domEventName,
						targetInst,
						nativeEvent,
						nativeEventTarget,
						eventSystemFlags,
						targetContainer
					) {
						extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
						extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
					}
					var supportedInputTypes = {
						color: true,
						date: true,
						datetime: true,
						'datetime-local': true,
						email: true,
						month: true,
						number: true,
						password: true,
						range: true,
						search: true,
						tel: true,
						text: true,
						time: true,
						url: true,
						week: true
					};
					function isTextInputElement(elem) {
						var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
						if (nodeName === 'input') {
							return !!supportedInputTypes[elem.type];
						}
						if (nodeName === 'textarea') {
							return true;
						}
						return false;
					}
					function isEventSupported(eventNameSuffix) {
						if (!canUseDOM) {
							return false;
						}
						var eventName = 'on' + eventNameSuffix;
						var isSupported = eventName in document;
						if (!isSupported) {
							var element = document.createElement('div');
							element.setAttribute(eventName, 'return;');
							isSupported = typeof element[eventName] === 'function';
						}
						return isSupported;
					}
					function registerEvents$1() {
						registerTwoPhaseEvent('onChange', [
							'change',
							'click',
							'focusin',
							'focusout',
							'input',
							'keydown',
							'keyup',
							'selectionchange'
						]);
					}
					function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
						enqueueStateRestore(target);
						var listeners = accumulateTwoPhaseListeners(inst, 'onChange');
						if (listeners.length > 0) {
							var event = new SyntheticEvent('onChange', 'change', null, nativeEvent, target);
							dispatchQueue.push({
								event,
								listeners
							});
						}
					}
					var activeElement = null;
					var activeElementInst = null;
					function shouldUseChangeEvent(elem) {
						var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
						return nodeName === 'select' || (nodeName === 'input' && elem.type === 'file');
					}
					function manualDispatchChangeEvent(nativeEvent) {
						var dispatchQueue = [];
						createAndAccumulateChangeEvent(dispatchQueue, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
						batchedUpdates(runEventInBatch, dispatchQueue);
					}
					function runEventInBatch(dispatchQueue) {
						processDispatchQueue(dispatchQueue, 0);
					}
					function getInstIfValueChanged(targetInst) {
						var targetNode = getNodeFromInstance(targetInst);
						if (updateValueIfChanged(targetNode)) {
							return targetInst;
						}
					}
					function getTargetInstForChangeEvent(domEventName, targetInst) {
						if (domEventName === 'change') {
							return targetInst;
						}
					}
					var isInputEventSupported = false;
					if (canUseDOM) {
						isInputEventSupported = isEventSupported('input') && (!document.documentMode || document.documentMode > 9);
					}
					function startWatchingForValueChange(target, targetInst) {
						activeElement = target;
						activeElementInst = targetInst;
						activeElement.attachEvent('onpropertychange', handlePropertyChange);
					}
					function stopWatchingForValueChange() {
						if (!activeElement) {
							return;
						}
						activeElement.detachEvent('onpropertychange', handlePropertyChange);
						activeElement = null;
						activeElementInst = null;
					}
					function handlePropertyChange(nativeEvent) {
						if (nativeEvent.propertyName !== 'value') {
							return;
						}
						if (getInstIfValueChanged(activeElementInst)) {
							manualDispatchChangeEvent(nativeEvent);
						}
					}
					function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
						if (domEventName === 'focusin') {
							stopWatchingForValueChange();
							startWatchingForValueChange(target, targetInst);
						} else if (domEventName === 'focusout') {
							stopWatchingForValueChange();
						}
					}
					function getTargetInstForInputEventPolyfill(domEventName, targetInst) {
						if (domEventName === 'selectionchange' || domEventName === 'keyup' || domEventName === 'keydown') {
							return getInstIfValueChanged(activeElementInst);
						}
					}
					function shouldUseClickEvent(elem) {
						var nodeName = elem.nodeName;
						return (
							nodeName && nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio')
						);
					}
					function getTargetInstForClickEvent(domEventName, targetInst) {
						if (domEventName === 'click') {
							return getInstIfValueChanged(targetInst);
						}
					}
					function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
						if (domEventName === 'input' || domEventName === 'change') {
							return getInstIfValueChanged(targetInst);
						}
					}
					function handleControlledInputBlur(node) {
						var state = node._wrapperState;
						if (!state || !state.controlled || node.type !== 'number') {
							return;
						}
						{
							setDefaultValue(node, 'number', node.value);
						}
					}
					function extractEvents$1(
						dispatchQueue,
						domEventName,
						targetInst,
						nativeEvent,
						nativeEventTarget,
						eventSystemFlags,
						targetContainer
					) {
						var targetNode = targetInst ? getNodeFromInstance(targetInst) : self;
						var getTargetInstFunc, handleEventFunc;
						if (shouldUseChangeEvent(targetNode)) {
							getTargetInstFunc = getTargetInstForChangeEvent;
						} else if (isTextInputElement(targetNode)) {
							if (isInputEventSupported) {
								getTargetInstFunc = getTargetInstForInputOrChangeEvent;
							} else {
								getTargetInstFunc = getTargetInstForInputEventPolyfill;
								handleEventFunc = handleEventsForInputEventPolyfill;
							}
						} else if (shouldUseClickEvent(targetNode)) {
							getTargetInstFunc = getTargetInstForClickEvent;
						}
						if (getTargetInstFunc) {
							var inst = getTargetInstFunc(domEventName, targetInst);
							if (inst) {
								createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, nativeEventTarget);
								return;
							}
						}
						if (handleEventFunc) {
							handleEventFunc(domEventName, targetNode, targetInst);
						}
						if (domEventName === 'focusout') {
							handleControlledInputBlur(targetNode);
						}
					}
					function registerEvents$2() {
						registerDirectEvent('onMouseEnter', ['mouseout', 'mouseover']);
						registerDirectEvent('onMouseLeave', ['mouseout', 'mouseover']);
						registerDirectEvent('onPointerEnter', ['pointerout', 'pointerover']);
						registerDirectEvent('onPointerLeave', ['pointerout', 'pointerover']);
					}
					function extractEvents$2(
						dispatchQueue,
						domEventName,
						targetInst,
						nativeEvent,
						nativeEventTarget,
						eventSystemFlags,
						targetContainer
					) {
						var isOverEvent = domEventName === 'mouseover' || domEventName === 'pointerover';
						var isOutEvent = domEventName === 'mouseout' || domEventName === 'pointerout';
						if (isOverEvent && (eventSystemFlags & IS_REPLAYED) === 0) {
							var related = nativeEvent.relatedTarget || nativeEvent.fromElement;
							if (related) {
								if (getClosestInstanceFromNode(related) || isContainerMarkedAsRoot(related)) {
									return;
								}
							}
						}
						if (!isOutEvent && !isOverEvent) {
							return;
						}
						var win;
						if (nativeEventTarget.window === nativeEventTarget) {
							win = nativeEventTarget;
						} else {
							var doc = nativeEventTarget.ownerDocument;
							if (doc) {
								win = doc.defaultView || doc.parentWindow;
							} else {
								win = self;
							}
						}
						var from;
						var to;
						if (isOutEvent) {
							var _related = nativeEvent.relatedTarget || nativeEvent.toElement;
							from = targetInst;
							to = _related ? getClosestInstanceFromNode(_related) : null;
							if (to !== null) {
								var nearestMounted = getNearestMountedFiber(to);
								if (to !== nearestMounted || (to.tag !== HostComponent && to.tag !== HostText)) {
									to = null;
								}
							}
						} else {
							from = null;
							to = targetInst;
						}
						if (from === to) {
							return;
						}
						var SyntheticEventCtor = SyntheticMouseEvent;
						var leaveEventType = 'onMouseLeave';
						var enterEventType = 'onMouseEnter';
						var eventTypePrefix = 'mouse';
						if (domEventName === 'pointerout' || domEventName === 'pointerover') {
							SyntheticEventCtor = SyntheticPointerEvent;
							leaveEventType = 'onPointerLeave';
							enterEventType = 'onPointerEnter';
							eventTypePrefix = 'pointer';
						}
						var fromNode = from == null ? win : getNodeFromInstance(from);
						var toNode = to == null ? win : getNodeFromInstance(to);
						var leave = new SyntheticEventCtor(
							leaveEventType,
							eventTypePrefix + 'leave',
							from,
							nativeEvent,
							nativeEventTarget
						);
						leave.target = fromNode;
						leave.relatedTarget = toNode;
						var enter = null;
						var nativeTargetInst = getClosestInstanceFromNode(nativeEventTarget);
						if (nativeTargetInst === targetInst) {
							var enterEvent = new SyntheticEventCtor(
								enterEventType,
								eventTypePrefix + 'enter',
								to,
								nativeEvent,
								nativeEventTarget
							);
							enterEvent.target = toNode;
							enterEvent.relatedTarget = fromNode;
							enter = enterEvent;
						}
						accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leave, enter, from, to);
					}
					function is(x, y) {
						return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
					}
					var objectIs = typeof Object.is === 'function' ? Object.is : is;
					var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
					function shallowEqual(objA, objB) {
						if (objectIs(objA, objB)) {
							return true;
						}
						if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
							return false;
						}
						var keysA = Object.keys(objA);
						var keysB = Object.keys(objB);
						if (keysA.length !== keysB.length) {
							return false;
						}
						for (var i2 = 0; i2 < keysA.length; i2++) {
							if (!hasOwnProperty$2.call(objB, keysA[i2]) || !objectIs(objA[keysA[i2]], objB[keysA[i2]])) {
								return false;
							}
						}
						return true;
					}
					function getLeafNode(node) {
						while (node && node.firstChild) {
							node = node.firstChild;
						}
						return node;
					}
					function getSiblingNode(node) {
						while (node) {
							if (node.nextSibling) {
								return node.nextSibling;
							}
							node = node.parentNode;
						}
					}
					function getNodeForCharacterOffset(root2, offset) {
						var node = getLeafNode(root2);
						var nodeStart = 0;
						var nodeEnd = 0;
						while (node) {
							if (node.nodeType === TEXT_NODE) {
								nodeEnd = nodeStart + node.textContent.length;
								if (nodeStart <= offset && nodeEnd >= offset) {
									return {
										node,
										offset: offset - nodeStart
									};
								}
								nodeStart = nodeEnd;
							}
							node = getLeafNode(getSiblingNode(node));
						}
					}
					function getOffsets(outerNode) {
						var ownerDocument = outerNode.ownerDocument;
						var win = (ownerDocument && ownerDocument.defaultView) || self;
						var selection = win.getSelection && win.getSelection();
						if (!selection || selection.rangeCount === 0) {
							return null;
						}
						var anchorNode = selection.anchorNode,
							anchorOffset = selection.anchorOffset,
							focusNode = selection.focusNode,
							focusOffset = selection.focusOffset;
						try {
							anchorNode.nodeType;
							focusNode.nodeType;
						} catch (e) {
							return null;
						}
						return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
					}
					function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
						var length = 0;
						var start = -1;
						var end = -1;
						var indexWithinAnchor = 0;
						var indexWithinFocus = 0;
						var node = outerNode;
						var parentNode = null;
						outer: while (true) {
							var next = null;
							while (true) {
								if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) {
									start = length + anchorOffset;
								}
								if (node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE)) {
									end = length + focusOffset;
								}
								if (node.nodeType === TEXT_NODE) {
									length += node.nodeValue.length;
								}
								if ((next = node.firstChild) === null) {
									break;
								}
								parentNode = node;
								node = next;
							}
							while (true) {
								if (node === outerNode) {
									break outer;
								}
								if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) {
									start = length;
								}
								if (parentNode === focusNode && ++indexWithinFocus === focusOffset) {
									end = length;
								}
								if ((next = node.nextSibling) !== null) {
									break;
								}
								node = parentNode;
								parentNode = node.parentNode;
							}
							node = next;
						}
						if (start === -1 || end === -1) {
							return null;
						}
						return {
							start,
							end
						};
					}
					function setOffsets(node, offsets) {
						var doc = node.ownerDocument || document;
						var win = (doc && doc.defaultView) || self;
						if (!win.getSelection) {
							return;
						}
						var selection = win.getSelection();
						var length = node.textContent.length;
						var start = Math.min(offsets.start, length);
						var end = offsets.end === void 0 ? start : Math.min(offsets.end, length);
						if (!selection.extend && start > end) {
							var temp = end;
							end = start;
							start = temp;
						}
						var startMarker = getNodeForCharacterOffset(node, start);
						var endMarker = getNodeForCharacterOffset(node, end);
						if (startMarker && endMarker) {
							if (
								selection.rangeCount === 1 &&
								selection.anchorNode === startMarker.node &&
								selection.anchorOffset === startMarker.offset &&
								selection.focusNode === endMarker.node &&
								selection.focusOffset === endMarker.offset
							) {
								return;
							}
							var range = doc.createRange();
							range.setStart(startMarker.node, startMarker.offset);
							selection.removeAllRanges();
							if (start > end) {
								selection.addRange(range);
								selection.extend(endMarker.node, endMarker.offset);
							} else {
								range.setEnd(endMarker.node, endMarker.offset);
								selection.addRange(range);
							}
						}
					}
					function isTextNode(node) {
						return node && node.nodeType === TEXT_NODE;
					}
					function containsNode(outerNode, innerNode) {
						if (!outerNode || !innerNode) {
							return false;
						} else if (outerNode === innerNode) {
							return true;
						} else if (isTextNode(outerNode)) {
							return false;
						} else if (isTextNode(innerNode)) {
							return containsNode(outerNode, innerNode.parentNode);
						} else if ('contains' in outerNode) {
							return outerNode.contains(innerNode);
						} else if (outerNode.compareDocumentPosition) {
							return !!(outerNode.compareDocumentPosition(innerNode) & 16);
						} else {
							return false;
						}
					}
					function isInDocument(node) {
						return node && node.ownerDocument && containsNode(node.ownerDocument.documentElement, node);
					}
					function isSameOriginFrame(iframe) {
						try {
							return typeof iframe.contentWindow.location.href === 'string';
						} catch (err) {
							return false;
						}
					}
					function getActiveElementDeep() {
						var win = self;
						var element = getActiveElement();
						while (element instanceof win.HTMLIFrameElement) {
							if (isSameOriginFrame(element)) {
								win = element.contentWindow;
							} else {
								return element;
							}
							element = getActiveElement(win.document);
						}
						return element;
					}
					function hasSelectionCapabilities(elem) {
						var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
						return (
							nodeName &&
							((nodeName === 'input' &&
								(elem.type === 'text' ||
									elem.type === 'search' ||
									elem.type === 'tel' ||
									elem.type === 'url' ||
									elem.type === 'password')) ||
								nodeName === 'textarea' ||
								elem.contentEditable === 'true')
						);
					}
					function getSelectionInformation() {
						var focusedElem = getActiveElementDeep();
						return {
							focusedElem,
							selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection(focusedElem) : null
						};
					}
					function restoreSelection(priorSelectionInformation) {
						var curFocusedElem = getActiveElementDeep();
						var priorFocusedElem = priorSelectionInformation.focusedElem;
						var priorSelectionRange = priorSelectionInformation.selectionRange;
						if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
							if (priorSelectionRange !== null && hasSelectionCapabilities(priorFocusedElem)) {
								setSelection(priorFocusedElem, priorSelectionRange);
							}
							var ancestors = [];
							var ancestor = priorFocusedElem;
							while ((ancestor = ancestor.parentNode)) {
								if (ancestor.nodeType === ELEMENT_NODE) {
									ancestors.push({
										element: ancestor,
										left: ancestor.scrollLeft,
										top: ancestor.scrollTop
									});
								}
							}
							if (typeof priorFocusedElem.focus === 'function') {
								priorFocusedElem.focus();
							}
							for (var i2 = 0; i2 < ancestors.length; i2++) {
								var info = ancestors[i2];
								info.element.scrollLeft = info.left;
								info.element.scrollTop = info.top;
							}
						}
					}
					function getSelection(input) {
						var selection;
						if ('selectionStart' in input) {
							selection = {
								start: input.selectionStart,
								end: input.selectionEnd
							};
						} else {
							selection = getOffsets(input);
						}
						return (
							selection || {
								start: 0,
								end: 0
							}
						);
					}
					function setSelection(input, offsets) {
						var start = offsets.start;
						var end = offsets.end;
						if (end === void 0) {
							end = start;
						}
						if ('selectionStart' in input) {
							input.selectionStart = start;
							input.selectionEnd = Math.min(end, input.value.length);
						} else {
							setOffsets(input, offsets);
						}
					}
					var skipSelectionChangeEvent = canUseDOM && 'documentMode' in document && document.documentMode <= 11;
					function registerEvents$3() {
						registerTwoPhaseEvent('onSelect', [
							'focusout',
							'contextmenu',
							'dragend',
							'focusin',
							'keydown',
							'keyup',
							'mousedown',
							'mouseup',
							'selectionchange'
						]);
					}
					var activeElement$1 = null;
					var activeElementInst$1 = null;
					var lastSelection = null;
					var mouseDown = false;
					function getSelection$1(node) {
						if ('selectionStart' in node && hasSelectionCapabilities(node)) {
							return {
								start: node.selectionStart,
								end: node.selectionEnd
							};
						} else {
							var win = (node.ownerDocument && node.ownerDocument.defaultView) || self;
							var selection = win.getSelection();
							return {
								anchorNode: selection.anchorNode,
								anchorOffset: selection.anchorOffset,
								focusNode: selection.focusNode,
								focusOffset: selection.focusOffset
							};
						}
					}
					function getEventTargetDocument(eventTarget) {
						return eventTarget.window === eventTarget
							? eventTarget.document
							: eventTarget.nodeType === DOCUMENT_NODE
								? eventTarget
								: eventTarget.ownerDocument;
					}
					function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
						var doc = getEventTargetDocument(nativeEventTarget);
						if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement(doc)) {
							return;
						}
						var currentSelection = getSelection$1(activeElement$1);
						if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
							lastSelection = currentSelection;
							var listeners = accumulateTwoPhaseListeners(activeElementInst$1, 'onSelect');
							if (listeners.length > 0) {
								var event = new SyntheticEvent('onSelect', 'select', null, nativeEvent, nativeEventTarget);
								dispatchQueue.push({
									event,
									listeners
								});
								event.target = activeElement$1;
							}
						}
					}
					function extractEvents$3(
						dispatchQueue,
						domEventName,
						targetInst,
						nativeEvent,
						nativeEventTarget,
						eventSystemFlags,
						targetContainer
					) {
						var targetNode = targetInst ? getNodeFromInstance(targetInst) : self;
						switch (domEventName) {
							case 'focusin':
								if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
									activeElement$1 = targetNode;
									activeElementInst$1 = targetInst;
									lastSelection = null;
								}
								break;
							case 'focusout':
								activeElement$1 = null;
								activeElementInst$1 = null;
								lastSelection = null;
								break;
							case 'mousedown':
								mouseDown = true;
								break;
							case 'contextmenu':
							case 'mouseup':
							case 'dragend':
								mouseDown = false;
								constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
								break;
							case 'selectionchange':
								if (skipSelectionChangeEvent) {
									break;
								}
							case 'keydown':
							case 'keyup':
								constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
						}
					}
					function extractEvents$4(
						dispatchQueue,
						domEventName,
						targetInst,
						nativeEvent,
						nativeEventTarget,
						eventSystemFlags,
						targetContainer
					) {
						var reactName = topLevelEventsToReactNames.get(domEventName);
						if (reactName === void 0) {
							return;
						}
						var SyntheticEventCtor = SyntheticEvent;
						var reactEventType = domEventName;
						switch (domEventName) {
							case 'keypress':
								if (getEventCharCode(nativeEvent) === 0) {
									return;
								}
							case 'keydown':
							case 'keyup':
								SyntheticEventCtor = SyntheticKeyboardEvent;
								break;
							case 'focusin':
								reactEventType = 'focus';
								SyntheticEventCtor = SyntheticFocusEvent;
								break;
							case 'focusout':
								reactEventType = 'blur';
								SyntheticEventCtor = SyntheticFocusEvent;
								break;
							case 'beforeblur':
							case 'afterblur':
								SyntheticEventCtor = SyntheticFocusEvent;
								break;
							case 'click':
								if (nativeEvent.button === 2) {
									return;
								}
							case 'auxclick':
							case 'dblclick':
							case 'mousedown':
							case 'mousemove':
							case 'mouseup':
							case 'mouseout':
							case 'mouseover':
							case 'contextmenu':
								SyntheticEventCtor = SyntheticMouseEvent;
								break;
							case 'drag':
							case 'dragend':
							case 'dragenter':
							case 'dragexit':
							case 'dragleave':
							case 'dragover':
							case 'dragstart':
							case 'drop':
								SyntheticEventCtor = SyntheticDragEvent;
								break;
							case 'touchcancel':
							case 'touchend':
							case 'touchmove':
							case 'touchstart':
								SyntheticEventCtor = SyntheticTouchEvent;
								break;
							case ANIMATION_END:
							case ANIMATION_ITERATION:
							case ANIMATION_START:
								SyntheticEventCtor = SyntheticAnimationEvent;
								break;
							case TRANSITION_END:
								SyntheticEventCtor = SyntheticTransitionEvent;
								break;
							case 'scroll':
								SyntheticEventCtor = SyntheticUIEvent;
								break;
							case 'wheel':
								SyntheticEventCtor = SyntheticWheelEvent;
								break;
							case 'copy':
							case 'cut':
							case 'paste':
								SyntheticEventCtor = SyntheticClipboardEvent;
								break;
							case 'gotpointercapture':
							case 'lostpointercapture':
							case 'pointercancel':
							case 'pointerdown':
							case 'pointermove':
							case 'pointerout':
							case 'pointerover':
							case 'pointerup':
								SyntheticEventCtor = SyntheticPointerEvent;
								break;
						}
						var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;
						{
							var accumulateTargetOnly = !inCapturePhase && domEventName === 'scroll';
							var _listeners = accumulateSinglePhaseListeners(
								targetInst,
								reactName,
								nativeEvent.type,
								inCapturePhase,
								accumulateTargetOnly
							);
							if (_listeners.length > 0) {
								var _event = new SyntheticEventCtor(reactName, reactEventType, null, nativeEvent, nativeEventTarget);
								dispatchQueue.push({
									event: _event,
									listeners: _listeners
								});
							}
						}
					}
					registerSimpleEvents();
					registerEvents$2();
					registerEvents$1();
					registerEvents$3();
					registerEvents();
					function extractEvents$5(
						dispatchQueue,
						domEventName,
						targetInst,
						nativeEvent,
						nativeEventTarget,
						eventSystemFlags,
						targetContainer
					) {
						extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
						var shouldProcessPolyfillPlugins = (eventSystemFlags & SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS) === 0;
						if (shouldProcessPolyfillPlugins) {
							extractEvents$2(
								dispatchQueue,
								domEventName,
								targetInst,
								nativeEvent,
								nativeEventTarget,
								eventSystemFlags
							);
							extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
							extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
							extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
						}
					}
					var mediaEventTypes = [
						'abort',
						'canplay',
						'canplaythrough',
						'durationchange',
						'emptied',
						'encrypted',
						'ended',
						'error',
						'loadeddata',
						'loadedmetadata',
						'loadstart',
						'pause',
						'play',
						'playing',
						'progress',
						'ratechange',
						'seeked',
						'seeking',
						'stalled',
						'suspend',
						'timeupdate',
						'volumechange',
						'waiting'
					];
					var nonDelegatedEvents = new Set(
						['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(mediaEventTypes)
					);
					function executeDispatch(event, listener, currentTarget) {
						var type = event.type || 'unknown-event';
						event.currentTarget = currentTarget;
						invokeGuardedCallbackAndCatchFirstError(type, listener, void 0, event);
						event.currentTarget = null;
					}
					function processDispatchQueueItemsInOrder(event, dispatchListeners, inCapturePhase) {
						var previousInstance;
						if (inCapturePhase) {
							for (var i2 = dispatchListeners.length - 1; i2 >= 0; i2--) {
								var _dispatchListeners$i = dispatchListeners[i2],
									instance = _dispatchListeners$i.instance,
									currentTarget = _dispatchListeners$i.currentTarget,
									listener = _dispatchListeners$i.listener;
								if (instance !== previousInstance && event.isPropagationStopped()) {
									return;
								}
								executeDispatch(event, listener, currentTarget);
								previousInstance = instance;
							}
						} else {
							for (var _i = 0; _i < dispatchListeners.length; _i++) {
								var _dispatchListeners$_i = dispatchListeners[_i],
									_instance = _dispatchListeners$_i.instance,
									_currentTarget = _dispatchListeners$_i.currentTarget,
									_listener = _dispatchListeners$_i.listener;
								if (_instance !== previousInstance && event.isPropagationStopped()) {
									return;
								}
								executeDispatch(event, _listener, _currentTarget);
								previousInstance = _instance;
							}
						}
					}
					function processDispatchQueue(dispatchQueue, eventSystemFlags) {
						var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;
						for (var i2 = 0; i2 < dispatchQueue.length; i2++) {
							var _dispatchQueue$i = dispatchQueue[i2],
								event = _dispatchQueue$i.event,
								listeners = _dispatchQueue$i.listeners;
							processDispatchQueueItemsInOrder(event, listeners, inCapturePhase);
						}
						rethrowCaughtError();
					}
					function dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
						var nativeEventTarget = getEventTarget(nativeEvent);
						var dispatchQueue = [];
						extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
						processDispatchQueue(dispatchQueue, eventSystemFlags);
					}
					function listenToNonDelegatedEvent(domEventName, targetElement) {
						var isCapturePhaseListener = false;
						var listenerSet = getEventListenerSet(targetElement);
						var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);
						if (!listenerSet.has(listenerSetKey)) {
							addTrappedEventListener(targetElement, domEventName, IS_NON_DELEGATED, isCapturePhaseListener);
							listenerSet.add(listenerSetKey);
						}
					}
					var listeningMarker = '_reactListening' + Math.random().toString(36).slice(2);
					function listenToAllSupportedEvents(rootContainerElement) {
						{
							if (rootContainerElement[listeningMarker]) {
								return;
							}
							rootContainerElement[listeningMarker] = true;
							allNativeEvents.forEach(function (domEventName) {
								if (!nonDelegatedEvents.has(domEventName)) {
									listenToNativeEvent(domEventName, false, rootContainerElement, null);
								}
								listenToNativeEvent(domEventName, true, rootContainerElement, null);
							});
						}
					}
					function listenToNativeEvent(domEventName, isCapturePhaseListener, rootContainerElement, targetElement) {
						var eventSystemFlags = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
						var target = rootContainerElement;
						if (domEventName === 'selectionchange' && rootContainerElement.nodeType !== DOCUMENT_NODE) {
							target = rootContainerElement.ownerDocument;
						}
						if (targetElement !== null && !isCapturePhaseListener && nonDelegatedEvents.has(domEventName)) {
							if (domEventName !== 'scroll') {
								return;
							}
							eventSystemFlags |= IS_NON_DELEGATED;
							target = targetElement;
						}
						var listenerSet = getEventListenerSet(target);
						var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);
						if (!listenerSet.has(listenerSetKey)) {
							if (isCapturePhaseListener) {
								eventSystemFlags |= IS_CAPTURE_PHASE;
							}
							addTrappedEventListener(target, domEventName, eventSystemFlags, isCapturePhaseListener);
							listenerSet.add(listenerSetKey);
						}
					}
					function addTrappedEventListener(
						targetContainer,
						domEventName,
						eventSystemFlags,
						isCapturePhaseListener,
						isDeferredListenerForLegacyFBSupport
					) {
						var listener = createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags);
						var isPassiveListener = void 0;
						if (passiveBrowserEventsSupported) {
							if (domEventName === 'touchstart' || domEventName === 'touchmove' || domEventName === 'wheel') {
								isPassiveListener = true;
							}
						}
						targetContainer = targetContainer;
						var unsubscribeListener;
						if (isCapturePhaseListener) {
							if (isPassiveListener !== void 0) {
								unsubscribeListener = addEventCaptureListenerWithPassiveFlag(
									targetContainer,
									domEventName,
									listener,
									isPassiveListener
								);
							} else {
								unsubscribeListener = addEventCaptureListener(targetContainer, domEventName, listener);
							}
						} else {
							if (isPassiveListener !== void 0) {
								unsubscribeListener = addEventBubbleListenerWithPassiveFlag(
									targetContainer,
									domEventName,
									listener,
									isPassiveListener
								);
							} else {
								unsubscribeListener = addEventBubbleListener(targetContainer, domEventName, listener);
							}
						}
					}
					function isMatchingRootContainer(grandContainer, targetContainer) {
						return (
							grandContainer === targetContainer ||
							(grandContainer.nodeType === COMMENT_NODE && grandContainer.parentNode === targetContainer)
						);
					}
					function dispatchEventForPluginEventSystem(
						domEventName,
						eventSystemFlags,
						nativeEvent,
						targetInst,
						targetContainer
					) {
						var ancestorInst = targetInst;
						if (
							(eventSystemFlags & IS_EVENT_HANDLE_NON_MANAGED_NODE) === 0 &&
							(eventSystemFlags & IS_NON_DELEGATED) === 0
						) {
							var targetContainerNode = targetContainer;
							if (targetInst !== null) {
								var node = targetInst;
								mainLoop: while (true) {
									if (node === null) {
										return;
									}
									var nodeTag = node.tag;
									if (nodeTag === HostRoot || nodeTag === HostPortal) {
										var container = node.stateNode.containerInfo;
										if (isMatchingRootContainer(container, targetContainerNode)) {
											break;
										}
										if (nodeTag === HostPortal) {
											var grandNode = node.return;
											while (grandNode !== null) {
												var grandTag = grandNode.tag;
												if (grandTag === HostRoot || grandTag === HostPortal) {
													var grandContainer = grandNode.stateNode.containerInfo;
													if (isMatchingRootContainer(grandContainer, targetContainerNode)) {
														return;
													}
												}
												grandNode = grandNode.return;
											}
										}
										while (container !== null) {
											var parentNode = getClosestInstanceFromNode(container);
											if (parentNode === null) {
												return;
											}
											var parentTag = parentNode.tag;
											if (parentTag === HostComponent || parentTag === HostText) {
												node = ancestorInst = parentNode;
												continue mainLoop;
											}
											container = container.parentNode;
										}
									}
									node = node.return;
								}
							}
						}
						batchedEventUpdates(function () {
							return dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, ancestorInst);
						});
					}
					function createDispatchListener(instance, listener, currentTarget) {
						return {
							instance,
							listener,
							currentTarget
						};
					}
					function accumulateSinglePhaseListeners(
						targetFiber,
						reactName,
						nativeEventType,
						inCapturePhase,
						accumulateTargetOnly
					) {
						var captureName = reactName !== null ? reactName + 'Capture' : null;
						var reactEventName = inCapturePhase ? captureName : reactName;
						var listeners = [];
						var instance = targetFiber;
						var lastHostComponent = null;
						while (instance !== null) {
							var _instance2 = instance,
								stateNode = _instance2.stateNode,
								tag = _instance2.tag;
							if (tag === HostComponent && stateNode !== null) {
								lastHostComponent = stateNode;
								if (reactEventName !== null) {
									var listener = getListener(instance, reactEventName);
									if (listener != null) {
										listeners.push(createDispatchListener(instance, listener, lastHostComponent));
									}
								}
							}
							if (accumulateTargetOnly) {
								break;
							}
							instance = instance.return;
						}
						return listeners;
					}
					function accumulateTwoPhaseListeners(targetFiber, reactName) {
						var captureName = reactName + 'Capture';
						var listeners = [];
						var instance = targetFiber;
						while (instance !== null) {
							var _instance3 = instance,
								stateNode = _instance3.stateNode,
								tag = _instance3.tag;
							if (tag === HostComponent && stateNode !== null) {
								var currentTarget = stateNode;
								var captureListener = getListener(instance, captureName);
								if (captureListener != null) {
									listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
								}
								var bubbleListener = getListener(instance, reactName);
								if (bubbleListener != null) {
									listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
								}
							}
							instance = instance.return;
						}
						return listeners;
					}
					function getParent(inst) {
						if (inst === null) {
							return null;
						}
						do {
							inst = inst.return;
						} while (inst && inst.tag !== HostComponent);
						if (inst) {
							return inst;
						}
						return null;
					}
					function getLowestCommonAncestor(instA, instB) {
						var nodeA = instA;
						var nodeB = instB;
						var depthA = 0;
						for (var tempA = nodeA; tempA; tempA = getParent(tempA)) {
							depthA++;
						}
						var depthB = 0;
						for (var tempB = nodeB; tempB; tempB = getParent(tempB)) {
							depthB++;
						}
						while (depthA - depthB > 0) {
							nodeA = getParent(nodeA);
							depthA--;
						}
						while (depthB - depthA > 0) {
							nodeB = getParent(nodeB);
							depthB--;
						}
						var depth = depthA;
						while (depth--) {
							if (nodeA === nodeB || (nodeB !== null && nodeA === nodeB.alternate)) {
								return nodeA;
							}
							nodeA = getParent(nodeA);
							nodeB = getParent(nodeB);
						}
						return null;
					}
					function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
						var registrationName = event._reactName;
						var listeners = [];
						var instance = target;
						while (instance !== null) {
							if (instance === common) {
								break;
							}
							var _instance4 = instance,
								alternate = _instance4.alternate,
								stateNode = _instance4.stateNode,
								tag = _instance4.tag;
							if (alternate !== null && alternate === common) {
								break;
							}
							if (tag === HostComponent && stateNode !== null) {
								var currentTarget = stateNode;
								if (inCapturePhase) {
									var captureListener = getListener(instance, registrationName);
									if (captureListener != null) {
										listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
									}
								} else if (!inCapturePhase) {
									var bubbleListener = getListener(instance, registrationName);
									if (bubbleListener != null) {
										listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
									}
								}
							}
							instance = instance.return;
						}
						if (listeners.length !== 0) {
							dispatchQueue.push({
								event,
								listeners
							});
						}
					}
					function accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leaveEvent, enterEvent, from, to) {
						var common = from && to ? getLowestCommonAncestor(from, to) : null;
						if (from !== null) {
							accumulateEnterLeaveListenersForEvent(dispatchQueue, leaveEvent, from, common, false);
						}
						if (to !== null && enterEvent !== null) {
							accumulateEnterLeaveListenersForEvent(dispatchQueue, enterEvent, to, common, true);
						}
					}
					function getListenerSetKey(domEventName, capture) {
						return domEventName + '__' + (capture ? 'capture' : 'bubble');
					}
					var didWarnInvalidHydration = false;
					var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
					var SUPPRESS_CONTENT_EDITABLE_WARNING = 'suppressContentEditableWarning';
					var SUPPRESS_HYDRATION_WARNING = 'suppressHydrationWarning';
					var AUTOFOCUS = 'autoFocus';
					var CHILDREN = 'children';
					var STYLE = 'style';
					var HTML$1 = '__html';
					var HTML_NAMESPACE$1 = Namespaces.html;
					var warnedUnknownTags;
					var suppressHydrationWarning;
					var validatePropertiesInDevelopment;
					var warnForTextDifference;
					var warnForPropDifference;
					var warnForExtraAttributes;
					var warnForInvalidEventListener;
					var canDiffStyleForHydrationWarning;
					var normalizeMarkupForTextOrAttribute;
					var normalizeHTML;
					{
						warnedUnknownTags = {
							dialog: true,
							webview: true
						};
						validatePropertiesInDevelopment = function (type, props) {
							validateProperties(type, props);
							validateProperties$1(type, props);
							validateProperties$2(type, props, {
								registrationNameDependencies,
								possibleRegistrationNames
							});
						};
						canDiffStyleForHydrationWarning = canUseDOM && !document.documentMode;
						var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
						var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
						normalizeMarkupForTextOrAttribute = function (markup) {
							var markupString = typeof markup === 'string' ? markup : '' + markup;
							return markupString
								.replace(NORMALIZE_NEWLINES_REGEX, '\n')
								.replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, '');
						};
						warnForTextDifference = function (serverText, clientText) {
							if (didWarnInvalidHydration) {
								return;
							}
							var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
							var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
							if (normalizedServerText === normalizedClientText) {
								return;
							}
							didWarnInvalidHydration = true;
							error(
								'Text content did not match. Server: "%s" Client: "%s"',
								normalizedServerText,
								normalizedClientText
							);
						};
						warnForPropDifference = function (propName, serverValue, clientValue) {
							if (didWarnInvalidHydration) {
								return;
							}
							var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
							var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
							if (normalizedServerValue === normalizedClientValue) {
								return;
							}
							didWarnInvalidHydration = true;
							error(
								'Prop `%s` did not match. Server: %s Client: %s',
								propName,
								JSON.stringify(normalizedServerValue),
								JSON.stringify(normalizedClientValue)
							);
						};
						warnForExtraAttributes = function (attributeNames) {
							if (didWarnInvalidHydration) {
								return;
							}
							didWarnInvalidHydration = true;
							var names = [];
							attributeNames.forEach(function (name) {
								names.push(name);
							});
							error('Extra attributes from the server: %s', names);
						};
						warnForInvalidEventListener = function (registrationName, listener) {
							if (listener === false) {
								error(
									'Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
									registrationName,
									registrationName,
									registrationName
								);
							} else {
								error(
									'Expected `%s` listener to be a function, instead got a value of `%s` type.',
									registrationName,
									typeof listener
								);
							}
						};
						normalizeHTML = function (parent, html) {
							var testElement =
								parent.namespaceURI === HTML_NAMESPACE$1
									? parent.ownerDocument.createElement(parent.tagName)
									: parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
							testElement.innerHTML = html;
							return testElement.innerHTML;
						};
					}
					function getOwnerDocumentFromRootContainer(rootContainerElement) {
						return rootContainerElement.nodeType === DOCUMENT_NODE
							? rootContainerElement
							: rootContainerElement.ownerDocument;
					}
					function noop() {}
					function trapClickOnNonInteractiveElement(node) {
						node.onclick = noop;
					}
					function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
						for (var propKey in nextProps) {
							if (!nextProps.hasOwnProperty(propKey)) {
								continue;
							}
							var nextProp = nextProps[propKey];
							if (propKey === STYLE) {
								{
									if (nextProp) {
										Object.freeze(nextProp);
									}
								}
								setValueForStyles(domElement, nextProp);
							} else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
								var nextHtml = nextProp ? nextProp[HTML$1] : void 0;
								if (nextHtml != null) {
									setInnerHTML(domElement, nextHtml);
								}
							} else if (propKey === CHILDREN) {
								if (typeof nextProp === 'string') {
									var canSetTextContent = tag !== 'textarea' || nextProp !== '';
									if (canSetTextContent) {
										setTextContent(domElement, nextProp);
									}
								} else if (typeof nextProp === 'number') {
									setTextContent(domElement, '' + nextProp);
								}
							} else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING);
							else if (propKey === AUTOFOCUS);
							else if (registrationNameDependencies.hasOwnProperty(propKey)) {
								if (nextProp != null) {
									if (typeof nextProp !== 'function') {
										warnForInvalidEventListener(propKey, nextProp);
									}
									if (propKey === 'onScroll') {
										listenToNonDelegatedEvent('scroll', domElement);
									}
								}
							} else if (nextProp != null) {
								setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag);
							}
						}
					}
					function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
						for (var i2 = 0; i2 < updatePayload.length; i2 += 2) {
							var propKey = updatePayload[i2];
							var propValue = updatePayload[i2 + 1];
							if (propKey === STYLE) {
								setValueForStyles(domElement, propValue);
							} else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
								setInnerHTML(domElement, propValue);
							} else if (propKey === CHILDREN) {
								setTextContent(domElement, propValue);
							} else {
								setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
							}
						}
					}
					function createElement(type, props, rootContainerElement, parentNamespace) {
						var isCustomComponentTag;
						var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
						var domElement;
						var namespaceURI = parentNamespace;
						if (namespaceURI === HTML_NAMESPACE$1) {
							namespaceURI = getIntrinsicNamespace(type);
						}
						if (namespaceURI === HTML_NAMESPACE$1) {
							{
								isCustomComponentTag = isCustomComponent(type, props);
								if (!isCustomComponentTag && type !== type.toLowerCase()) {
									error(
										'<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
										type
									);
								}
							}
							if (type === 'script') {
								var div = ownerDocument.createElement('div');
								div.innerHTML = '<script><\/script>';
								var firstChild = div.firstChild;
								domElement = div.removeChild(firstChild);
							} else if (typeof props.is === 'string') {
								domElement = ownerDocument.createElement(type, {
									is: props.is
								});
							} else {
								domElement = ownerDocument.createElement(type);
								if (type === 'select') {
									var node = domElement;
									if (props.multiple) {
										node.multiple = true;
									} else if (props.size) {
										node.size = props.size;
									}
								}
							}
						} else {
							domElement = ownerDocument.createElementNS(namespaceURI, type);
						}
						{
							if (namespaceURI === HTML_NAMESPACE$1) {
								if (
									!isCustomComponentTag &&
									Object.prototype.toString.call(domElement) === '[object HTMLUnknownElement]' &&
									!Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)
								) {
									warnedUnknownTags[type] = true;
									error(
										'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
										type
									);
								}
							}
						}
						return domElement;
					}
					function createTextNode(text, rootContainerElement) {
						return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
					}
					function setInitialProperties(domElement, tag, rawProps, rootContainerElement) {
						var isCustomComponentTag = isCustomComponent(tag, rawProps);
						{
							validatePropertiesInDevelopment(tag, rawProps);
						}
						var props;
						switch (tag) {
							case 'dialog':
								listenToNonDelegatedEvent('cancel', domElement);
								listenToNonDelegatedEvent('close', domElement);
								props = rawProps;
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								listenToNonDelegatedEvent('load', domElement);
								props = rawProps;
								break;
							case 'video':
							case 'audio':
								for (var i2 = 0; i2 < mediaEventTypes.length; i2++) {
									listenToNonDelegatedEvent(mediaEventTypes[i2], domElement);
								}
								props = rawProps;
								break;
							case 'source':
								listenToNonDelegatedEvent('error', domElement);
								props = rawProps;
								break;
							case 'img':
							case 'image':
							case 'link':
								listenToNonDelegatedEvent('error', domElement);
								listenToNonDelegatedEvent('load', domElement);
								props = rawProps;
								break;
							case 'details':
								listenToNonDelegatedEvent('toggle', domElement);
								props = rawProps;
								break;
							case 'input':
								initWrapperState(domElement, rawProps);
								props = getHostProps(domElement, rawProps);
								listenToNonDelegatedEvent('invalid', domElement);
								break;
							case 'option':
								validateProps(domElement, rawProps);
								props = getHostProps$1(domElement, rawProps);
								break;
							case 'select':
								initWrapperState$1(domElement, rawProps);
								props = getHostProps$2(domElement, rawProps);
								listenToNonDelegatedEvent('invalid', domElement);
								break;
							case 'textarea':
								initWrapperState$2(domElement, rawProps);
								props = getHostProps$3(domElement, rawProps);
								listenToNonDelegatedEvent('invalid', domElement);
								break;
							default:
								props = rawProps;
						}
						assertValidProps(tag, props);
						setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);
						switch (tag) {
							case 'input':
								track(domElement);
								postMountWrapper(domElement, rawProps, false);
								break;
							case 'textarea':
								track(domElement);
								postMountWrapper$3(domElement);
								break;
							case 'option':
								postMountWrapper$1(domElement, rawProps);
								break;
							case 'select':
								postMountWrapper$2(domElement, rawProps);
								break;
							default:
								if (typeof props.onClick === 'function') {
									trapClickOnNonInteractiveElement(domElement);
								}
								break;
						}
					}
					function diffProperties(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
						{
							validatePropertiesInDevelopment(tag, nextRawProps);
						}
						var updatePayload = null;
						var lastProps;
						var nextProps;
						switch (tag) {
							case 'input':
								lastProps = getHostProps(domElement, lastRawProps);
								nextProps = getHostProps(domElement, nextRawProps);
								updatePayload = [];
								break;
							case 'option':
								lastProps = getHostProps$1(domElement, lastRawProps);
								nextProps = getHostProps$1(domElement, nextRawProps);
								updatePayload = [];
								break;
							case 'select':
								lastProps = getHostProps$2(domElement, lastRawProps);
								nextProps = getHostProps$2(domElement, nextRawProps);
								updatePayload = [];
								break;
							case 'textarea':
								lastProps = getHostProps$3(domElement, lastRawProps);
								nextProps = getHostProps$3(domElement, nextRawProps);
								updatePayload = [];
								break;
							default:
								lastProps = lastRawProps;
								nextProps = nextRawProps;
								if (typeof lastProps.onClick !== 'function' && typeof nextProps.onClick === 'function') {
									trapClickOnNonInteractiveElement(domElement);
								}
								break;
						}
						assertValidProps(tag, nextProps);
						var propKey;
						var styleName;
						var styleUpdates = null;
						for (propKey in lastProps) {
							if (
								nextProps.hasOwnProperty(propKey) ||
								!lastProps.hasOwnProperty(propKey) ||
								lastProps[propKey] == null
							) {
								continue;
							}
							if (propKey === STYLE) {
								var lastStyle = lastProps[propKey];
								for (styleName in lastStyle) {
									if (lastStyle.hasOwnProperty(styleName)) {
										if (!styleUpdates) {
											styleUpdates = {};
										}
										styleUpdates[styleName] = '';
									}
								}
							} else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN);
							else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING);
							else if (propKey === AUTOFOCUS);
							else if (registrationNameDependencies.hasOwnProperty(propKey)) {
								if (!updatePayload) {
									updatePayload = [];
								}
							} else {
								(updatePayload = updatePayload || []).push(propKey, null);
							}
						}
						for (propKey in nextProps) {
							var nextProp = nextProps[propKey];
							var lastProp = lastProps != null ? lastProps[propKey] : void 0;
							if (
								!nextProps.hasOwnProperty(propKey) ||
								nextProp === lastProp ||
								(nextProp == null && lastProp == null)
							) {
								continue;
							}
							if (propKey === STYLE) {
								{
									if (nextProp) {
										Object.freeze(nextProp);
									}
								}
								if (lastProp) {
									for (styleName in lastProp) {
										if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
											if (!styleUpdates) {
												styleUpdates = {};
											}
											styleUpdates[styleName] = '';
										}
									}
									for (styleName in nextProp) {
										if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
											if (!styleUpdates) {
												styleUpdates = {};
											}
											styleUpdates[styleName] = nextProp[styleName];
										}
									}
								} else {
									if (!styleUpdates) {
										if (!updatePayload) {
											updatePayload = [];
										}
										updatePayload.push(propKey, styleUpdates);
									}
									styleUpdates = nextProp;
								}
							} else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
								var nextHtml = nextProp ? nextProp[HTML$1] : void 0;
								var lastHtml = lastProp ? lastProp[HTML$1] : void 0;
								if (nextHtml != null) {
									if (lastHtml !== nextHtml) {
										(updatePayload = updatePayload || []).push(propKey, nextHtml);
									}
								}
							} else if (propKey === CHILDREN) {
								if (typeof nextProp === 'string' || typeof nextProp === 'number') {
									(updatePayload = updatePayload || []).push(propKey, '' + nextProp);
								}
							} else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING);
							else if (registrationNameDependencies.hasOwnProperty(propKey)) {
								if (nextProp != null) {
									if (typeof nextProp !== 'function') {
										warnForInvalidEventListener(propKey, nextProp);
									}
									if (propKey === 'onScroll') {
										listenToNonDelegatedEvent('scroll', domElement);
									}
								}
								if (!updatePayload && lastProp !== nextProp) {
									updatePayload = [];
								}
							} else if (
								typeof nextProp === 'object' &&
								nextProp !== null &&
								nextProp.$$typeof === REACT_OPAQUE_ID_TYPE
							) {
								nextProp.toString();
							} else {
								(updatePayload = updatePayload || []).push(propKey, nextProp);
							}
						}
						if (styleUpdates) {
							{
								validateShorthandPropertyCollisionInDev(styleUpdates, nextProps[STYLE]);
							}
							(updatePayload = updatePayload || []).push(STYLE, styleUpdates);
						}
						return updatePayload;
					}
					function updateProperties(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
						if (tag === 'input' && nextRawProps.type === 'radio' && nextRawProps.name != null) {
							updateChecked(domElement, nextRawProps);
						}
						var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
						var isCustomComponentTag = isCustomComponent(tag, nextRawProps);
						updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);
						switch (tag) {
							case 'input':
								updateWrapper(domElement, nextRawProps);
								break;
							case 'textarea':
								updateWrapper$1(domElement, nextRawProps);
								break;
							case 'select':
								postUpdateWrapper(domElement, nextRawProps);
								break;
						}
					}
					function getPossibleStandardName(propName) {
						{
							var lowerCasedName = propName.toLowerCase();
							if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) {
								return null;
							}
							return possibleStandardNames[lowerCasedName] || null;
						}
					}
					function diffHydratedProperties(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
						var isCustomComponentTag;
						var extraAttributeNames;
						{
							suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING] === true;
							isCustomComponentTag = isCustomComponent(tag, rawProps);
							validatePropertiesInDevelopment(tag, rawProps);
						}
						switch (tag) {
							case 'dialog':
								listenToNonDelegatedEvent('cancel', domElement);
								listenToNonDelegatedEvent('close', domElement);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								listenToNonDelegatedEvent('load', domElement);
								break;
							case 'video':
							case 'audio':
								for (var i2 = 0; i2 < mediaEventTypes.length; i2++) {
									listenToNonDelegatedEvent(mediaEventTypes[i2], domElement);
								}
								break;
							case 'source':
								listenToNonDelegatedEvent('error', domElement);
								break;
							case 'img':
							case 'image':
							case 'link':
								listenToNonDelegatedEvent('error', domElement);
								listenToNonDelegatedEvent('load', domElement);
								break;
							case 'details':
								listenToNonDelegatedEvent('toggle', domElement);
								break;
							case 'input':
								initWrapperState(domElement, rawProps);
								listenToNonDelegatedEvent('invalid', domElement);
								break;
							case 'option':
								validateProps(domElement, rawProps);
								break;
							case 'select':
								initWrapperState$1(domElement, rawProps);
								listenToNonDelegatedEvent('invalid', domElement);
								break;
							case 'textarea':
								initWrapperState$2(domElement, rawProps);
								listenToNonDelegatedEvent('invalid', domElement);
								break;
						}
						assertValidProps(tag, rawProps);
						{
							extraAttributeNames = /* @__PURE__ */ new Set();
							var attributes = domElement.attributes;
							for (var _i = 0; _i < attributes.length; _i++) {
								var name = attributes[_i].name.toLowerCase();
								switch (name) {
									case 'data-reactroot':
										break;
									case 'value':
										break;
									case 'checked':
										break;
									case 'selected':
										break;
									default:
										extraAttributeNames.add(attributes[_i].name);
								}
							}
						}
						var updatePayload = null;
						for (var propKey in rawProps) {
							if (!rawProps.hasOwnProperty(propKey)) {
								continue;
							}
							var nextProp = rawProps[propKey];
							if (propKey === CHILDREN) {
								if (typeof nextProp === 'string') {
									if (domElement.textContent !== nextProp) {
										if (!suppressHydrationWarning) {
											warnForTextDifference(domElement.textContent, nextProp);
										}
										updatePayload = [CHILDREN, nextProp];
									}
								} else if (typeof nextProp === 'number') {
									if (domElement.textContent !== '' + nextProp) {
										if (!suppressHydrationWarning) {
											warnForTextDifference(domElement.textContent, nextProp);
										}
										updatePayload = [CHILDREN, '' + nextProp];
									}
								}
							} else if (registrationNameDependencies.hasOwnProperty(propKey)) {
								if (nextProp != null) {
									if (typeof nextProp !== 'function') {
										warnForInvalidEventListener(propKey, nextProp);
									}
									if (propKey === 'onScroll') {
										listenToNonDelegatedEvent('scroll', domElement);
									}
								}
							} else if (typeof isCustomComponentTag === 'boolean') {
								var serverValue = void 0;
								var propertyInfo = getPropertyInfo(propKey);
								if (suppressHydrationWarning);
								else if (
									propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
									propKey === SUPPRESS_HYDRATION_WARNING ||
									propKey === 'value' ||
									propKey === 'checked' ||
									propKey === 'selected'
								);
								else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
									var serverHTML = domElement.innerHTML;
									var nextHtml = nextProp ? nextProp[HTML$1] : void 0;
									if (nextHtml != null) {
										var expectedHTML = normalizeHTML(domElement, nextHtml);
										if (expectedHTML !== serverHTML) {
											warnForPropDifference(propKey, serverHTML, expectedHTML);
										}
									}
								} else if (propKey === STYLE) {
									extraAttributeNames.delete(propKey);
									if (canDiffStyleForHydrationWarning) {
										var expectedStyle = createDangerousStringForStyles(nextProp);
										serverValue = domElement.getAttribute('style');
										if (expectedStyle !== serverValue) {
											warnForPropDifference(propKey, serverValue, expectedStyle);
										}
									}
								} else if (isCustomComponentTag) {
									extraAttributeNames.delete(propKey.toLowerCase());
									serverValue = getValueForAttribute(domElement, propKey, nextProp);
									if (nextProp !== serverValue) {
										warnForPropDifference(propKey, serverValue, nextProp);
									}
								} else if (
									!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) &&
									!shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)
								) {
									var isMismatchDueToBadCasing = false;
									if (propertyInfo !== null) {
										extraAttributeNames.delete(propertyInfo.attributeName);
										serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
									} else {
										var ownNamespace = parentNamespace;
										if (ownNamespace === HTML_NAMESPACE$1) {
											ownNamespace = getIntrinsicNamespace(tag);
										}
										if (ownNamespace === HTML_NAMESPACE$1) {
											extraAttributeNames.delete(propKey.toLowerCase());
										} else {
											var standardName = getPossibleStandardName(propKey);
											if (standardName !== null && standardName !== propKey) {
												isMismatchDueToBadCasing = true;
												extraAttributeNames.delete(standardName);
											}
											extraAttributeNames.delete(propKey);
										}
										serverValue = getValueForAttribute(domElement, propKey, nextProp);
									}
									if (nextProp !== serverValue && !isMismatchDueToBadCasing) {
										warnForPropDifference(propKey, serverValue, nextProp);
									}
								}
							}
						}
						{
							if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
								warnForExtraAttributes(extraAttributeNames);
							}
						}
						switch (tag) {
							case 'input':
								track(domElement);
								postMountWrapper(domElement, rawProps, true);
								break;
							case 'textarea':
								track(domElement);
								postMountWrapper$3(domElement);
								break;
							case 'select':
							case 'option':
								break;
							default:
								if (typeof rawProps.onClick === 'function') {
									trapClickOnNonInteractiveElement(domElement);
								}
								break;
						}
						return updatePayload;
					}
					function diffHydratedText(textNode, text) {
						var isDifferent = textNode.nodeValue !== text;
						return isDifferent;
					}
					function warnForUnmatchedText(textNode, text) {
						{
							warnForTextDifference(textNode.nodeValue, text);
						}
					}
					function warnForDeletedHydratableElement(parentNode, child) {
						{
							if (didWarnInvalidHydration) {
								return;
							}
							didWarnInvalidHydration = true;
							error(
								'Did not expect server HTML to contain a <%s> in <%s>.',
								child.nodeName.toLowerCase(),
								parentNode.nodeName.toLowerCase()
							);
						}
					}
					function warnForDeletedHydratableText(parentNode, child) {
						{
							if (didWarnInvalidHydration) {
								return;
							}
							didWarnInvalidHydration = true;
							error(
								'Did not expect server HTML to contain the text node "%s" in <%s>.',
								child.nodeValue,
								parentNode.nodeName.toLowerCase()
							);
						}
					}
					function warnForInsertedHydratedElement(parentNode, tag, props) {
						{
							if (didWarnInvalidHydration) {
								return;
							}
							didWarnInvalidHydration = true;
							error('Expected server HTML to contain a matching <%s> in <%s>.', tag, parentNode.nodeName.toLowerCase());
						}
					}
					function warnForInsertedHydratedText(parentNode, text) {
						{
							if (text === '') {
								return;
							}
							if (didWarnInvalidHydration) {
								return;
							}
							didWarnInvalidHydration = true;
							error(
								'Expected server HTML to contain a matching text node for "%s" in <%s>.',
								text,
								parentNode.nodeName.toLowerCase()
							);
						}
					}
					function restoreControlledState$3(domElement, tag, props) {
						switch (tag) {
							case 'input':
								restoreControlledState(domElement, props);
								return;
							case 'textarea':
								restoreControlledState$2(domElement, props);
								return;
							case 'select':
								restoreControlledState$1(domElement, props);
								return;
						}
					}
					var validateDOMNesting = function () {};
					var updatedAncestorInfo = function () {};
					{
						var specialTags = [
							'address',
							'applet',
							'area',
							'article',
							'aside',
							'base',
							'basefont',
							'bgsound',
							'blockquote',
							'body',
							'br',
							'button',
							'caption',
							'center',
							'col',
							'colgroup',
							'dd',
							'details',
							'dir',
							'div',
							'dl',
							'dt',
							'embed',
							'fieldset',
							'figcaption',
							'figure',
							'footer',
							'form',
							'frame',
							'frameset',
							'h1',
							'h2',
							'h3',
							'h4',
							'h5',
							'h6',
							'head',
							'header',
							'hgroup',
							'hr',
							'html',
							'iframe',
							'img',
							'input',
							'isindex',
							'li',
							'link',
							'listing',
							'main',
							'marquee',
							'menu',
							'menuitem',
							'meta',
							'nav',
							'noembed',
							'noframes',
							'noscript',
							'object',
							'ol',
							'p',
							'param',
							'plaintext',
							'pre',
							'script',
							'section',
							'select',
							'source',
							'style',
							'summary',
							'table',
							'tbody',
							'td',
							'template',
							'textarea',
							'tfoot',
							'th',
							'thead',
							'title',
							'tr',
							'track',
							'ul',
							'wbr',
							'xmp'
						];
						var inScopeTags = [
							'applet',
							'caption',
							'html',
							'table',
							'td',
							'th',
							'marquee',
							'object',
							'template',
							'foreignObject',
							'desc',
							'title'
						];
						var buttonScopeTags = inScopeTags.concat(['button']);
						var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
						var emptyAncestorInfo = {
							current: null,
							formTag: null,
							aTagInScope: null,
							buttonTagInScope: null,
							nobrTagInScope: null,
							pTagInButtonScope: null,
							listItemTagAutoclosing: null,
							dlItemTagAutoclosing: null
						};
						updatedAncestorInfo = function (oldInfo, tag) {
							var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
							var info = {
								tag
							};
							if (inScopeTags.indexOf(tag) !== -1) {
								ancestorInfo.aTagInScope = null;
								ancestorInfo.buttonTagInScope = null;
								ancestorInfo.nobrTagInScope = null;
							}
							if (buttonScopeTags.indexOf(tag) !== -1) {
								ancestorInfo.pTagInButtonScope = null;
							}
							if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
								ancestorInfo.listItemTagAutoclosing = null;
								ancestorInfo.dlItemTagAutoclosing = null;
							}
							ancestorInfo.current = info;
							if (tag === 'form') {
								ancestorInfo.formTag = info;
							}
							if (tag === 'a') {
								ancestorInfo.aTagInScope = info;
							}
							if (tag === 'button') {
								ancestorInfo.buttonTagInScope = info;
							}
							if (tag === 'nobr') {
								ancestorInfo.nobrTagInScope = info;
							}
							if (tag === 'p') {
								ancestorInfo.pTagInButtonScope = info;
							}
							if (tag === 'li') {
								ancestorInfo.listItemTagAutoclosing = info;
							}
							if (tag === 'dd' || tag === 'dt') {
								ancestorInfo.dlItemTagAutoclosing = info;
							}
							return ancestorInfo;
						};
						var isTagValidWithParent = function (tag, parentTag) {
							switch (parentTag) {
								case 'select':
									return tag === 'option' || tag === 'optgroup' || tag === '#text';
								case 'optgroup':
									return tag === 'option' || tag === '#text';
								case 'option':
									return tag === '#text';
								case 'tr':
									return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
								case 'tbody':
								case 'thead':
								case 'tfoot':
									return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
								case 'colgroup':
									return tag === 'col' || tag === 'template';
								case 'table':
									return (
										tag === 'caption' ||
										tag === 'colgroup' ||
										tag === 'tbody' ||
										tag === 'tfoot' ||
										tag === 'thead' ||
										tag === 'style' ||
										tag === 'script' ||
										tag === 'template'
									);
								case 'head':
									return (
										tag === 'base' ||
										tag === 'basefont' ||
										tag === 'bgsound' ||
										tag === 'link' ||
										tag === 'meta' ||
										tag === 'title' ||
										tag === 'noscript' ||
										tag === 'noframes' ||
										tag === 'style' ||
										tag === 'script' ||
										tag === 'template'
									);
								case 'html':
									return tag === 'head' || tag === 'body' || tag === 'frameset';
								case 'frameset':
									return tag === 'frame';
								case '#document':
									return tag === 'html';
							}
							switch (tag) {
								case 'h1':
								case 'h2':
								case 'h3':
								case 'h4':
								case 'h5':
								case 'h6':
									return (
										parentTag !== 'h1' &&
										parentTag !== 'h2' &&
										parentTag !== 'h3' &&
										parentTag !== 'h4' &&
										parentTag !== 'h5' &&
										parentTag !== 'h6'
									);
								case 'rp':
								case 'rt':
									return impliedEndTags.indexOf(parentTag) === -1;
								case 'body':
								case 'caption':
								case 'col':
								case 'colgroup':
								case 'frameset':
								case 'frame':
								case 'head':
								case 'html':
								case 'tbody':
								case 'td':
								case 'tfoot':
								case 'th':
								case 'thead':
								case 'tr':
									return parentTag == null;
							}
							return true;
						};
						var findInvalidAncestorForTag = function (tag, ancestorInfo) {
							switch (tag) {
								case 'address':
								case 'article':
								case 'aside':
								case 'blockquote':
								case 'center':
								case 'details':
								case 'dialog':
								case 'dir':
								case 'div':
								case 'dl':
								case 'fieldset':
								case 'figcaption':
								case 'figure':
								case 'footer':
								case 'header':
								case 'hgroup':
								case 'main':
								case 'menu':
								case 'nav':
								case 'ol':
								case 'p':
								case 'section':
								case 'summary':
								case 'ul':
								case 'pre':
								case 'listing':
								case 'table':
								case 'hr':
								case 'xmp':
								case 'h1':
								case 'h2':
								case 'h3':
								case 'h4':
								case 'h5':
								case 'h6':
									return ancestorInfo.pTagInButtonScope;
								case 'form':
									return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
								case 'li':
									return ancestorInfo.listItemTagAutoclosing;
								case 'dd':
								case 'dt':
									return ancestorInfo.dlItemTagAutoclosing;
								case 'button':
									return ancestorInfo.buttonTagInScope;
								case 'a':
									return ancestorInfo.aTagInScope;
								case 'nobr':
									return ancestorInfo.nobrTagInScope;
							}
							return null;
						};
						var didWarn$1 = {};
						validateDOMNesting = function (childTag, childText, ancestorInfo) {
							ancestorInfo = ancestorInfo || emptyAncestorInfo;
							var parentInfo = ancestorInfo.current;
							var parentTag = parentInfo && parentInfo.tag;
							if (childText != null) {
								if (childTag != null) {
									error('validateDOMNesting: when childText is passed, childTag should be null');
								}
								childTag = '#text';
							}
							var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
							var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
							var invalidParentOrAncestor = invalidParent || invalidAncestor;
							if (!invalidParentOrAncestor) {
								return;
							}
							var ancestorTag = invalidParentOrAncestor.tag;
							var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag;
							if (didWarn$1[warnKey]) {
								return;
							}
							didWarn$1[warnKey] = true;
							var tagDisplayName = childTag;
							var whitespaceInfo = '';
							if (childTag === '#text') {
								if (/\S/.test(childText)) {
									tagDisplayName = 'Text nodes';
								} else {
									tagDisplayName = 'Whitespace text nodes';
									whitespaceInfo =
										" Make sure you don't have any extra whitespace between tags on each line of your source code.";
								}
							} else {
								tagDisplayName = '<' + childTag + '>';
							}
							if (invalidParent) {
								var info = '';
								if (ancestorTag === 'table' && childTag === 'tr') {
									info +=
										' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.';
								}
								error(
									'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
									tagDisplayName,
									ancestorTag,
									whitespaceInfo,
									info
								);
							} else {
								error(
									'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
									tagDisplayName,
									ancestorTag
								);
							}
						};
					}
					var SUPPRESS_HYDRATION_WARNING$1;
					{
						SUPPRESS_HYDRATION_WARNING$1 = 'suppressHydrationWarning';
					}
					var SUSPENSE_START_DATA = '$';
					var SUSPENSE_END_DATA = '/$';
					var SUSPENSE_PENDING_START_DATA = '$?';
					var SUSPENSE_FALLBACK_START_DATA = '$!';
					var STYLE$1 = 'style';
					var eventsEnabled = null;
					var selectionInformation = null;
					function shouldAutoFocusHostComponent(type, props) {
						switch (type) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								return !!props.autoFocus;
						}
						return false;
					}
					function getRootHostContext(rootContainerInstance) {
						var type;
						var namespace;
						var nodeType = rootContainerInstance.nodeType;
						switch (nodeType) {
							case DOCUMENT_NODE:
							case DOCUMENT_FRAGMENT_NODE: {
								type = nodeType === DOCUMENT_NODE ? '#document' : '#fragment';
								var root2 = rootContainerInstance.documentElement;
								namespace = root2 ? root2.namespaceURI : getChildNamespace(null, '');
								break;
							}
							default: {
								var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
								var ownNamespace = container.namespaceURI || null;
								type = container.tagName;
								namespace = getChildNamespace(ownNamespace, type);
								break;
							}
						}
						{
							var validatedTag = type.toLowerCase();
							var ancestorInfo = updatedAncestorInfo(null, validatedTag);
							return {
								namespace,
								ancestorInfo
							};
						}
					}
					function getChildHostContext(parentHostContext, type, rootContainerInstance) {
						{
							var parentHostContextDev = parentHostContext;
							var namespace = getChildNamespace(parentHostContextDev.namespace, type);
							var ancestorInfo = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type);
							return {
								namespace,
								ancestorInfo
							};
						}
					}
					function getPublicInstance(instance) {
						return instance;
					}
					function prepareForCommit(containerInfo) {
						eventsEnabled = isEnabled();
						selectionInformation = getSelectionInformation();
						var activeInstance = null;
						setEnabled(false);
						return activeInstance;
					}
					function resetAfterCommit(containerInfo) {
						restoreSelection(selectionInformation);
						setEnabled(eventsEnabled);
						eventsEnabled = null;
						selectionInformation = null;
					}
					function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
						var parentNamespace;
						{
							var hostContextDev = hostContext;
							validateDOMNesting(type, null, hostContextDev.ancestorInfo);
							if (typeof props.children === 'string' || typeof props.children === 'number') {
								var string = '' + props.children;
								var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
								validateDOMNesting(null, string, ownAncestorInfo);
							}
							parentNamespace = hostContextDev.namespace;
						}
						var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
						precacheFiberNode(internalInstanceHandle, domElement);
						updateFiberProps(domElement, props);
						return domElement;
					}
					function appendInitialChild(parentInstance, child) {
						parentInstance.appendChild(child);
					}
					function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
						setInitialProperties(domElement, type, props, rootContainerInstance);
						return shouldAutoFocusHostComponent(type, props);
					}
					function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
						{
							var hostContextDev = hostContext;
							if (
								typeof newProps.children !== typeof oldProps.children &&
								(typeof newProps.children === 'string' || typeof newProps.children === 'number')
							) {
								var string = '' + newProps.children;
								var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
								validateDOMNesting(null, string, ownAncestorInfo);
							}
						}
						return diffProperties(domElement, type, oldProps, newProps);
					}
					function shouldSetTextContent(type, props) {
						return (
							type === 'textarea' ||
							type === 'option' ||
							type === 'noscript' ||
							typeof props.children === 'string' ||
							typeof props.children === 'number' ||
							(typeof props.dangerouslySetInnerHTML === 'object' &&
								props.dangerouslySetInnerHTML !== null &&
								props.dangerouslySetInnerHTML.__html != null)
						);
					}
					function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
						{
							var hostContextDev = hostContext;
							validateDOMNesting(null, text, hostContextDev.ancestorInfo);
						}
						var textNode = createTextNode(text, rootContainerInstance);
						precacheFiberNode(internalInstanceHandle, textNode);
						return textNode;
					}
					var scheduleTimeout = typeof setTimeout === 'function' ? setTimeout : void 0;
					var cancelTimeout = typeof clearTimeout === 'function' ? clearTimeout : void 0;
					var noTimeout = -1;
					function commitMount(domElement, type, newProps, internalInstanceHandle) {
						if (shouldAutoFocusHostComponent(type, newProps)) {
							domElement.focus();
						}
					}
					function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
						updateFiberProps(domElement, newProps);
						updateProperties(domElement, updatePayload, type, oldProps, newProps);
					}
					function resetTextContent(domElement) {
						setTextContent(domElement, '');
					}
					function commitTextUpdate(textInstance, oldText, newText) {
						textInstance.nodeValue = newText;
					}
					function appendChild(parentInstance, child) {
						parentInstance.appendChild(child);
					}
					function appendChildToContainer(container, child) {
						var parentNode;
						if (container.nodeType === COMMENT_NODE) {
							parentNode = container.parentNode;
							parentNode.insertBefore(child, container);
						} else {
							parentNode = container;
							parentNode.appendChild(child);
						}
						var reactRootContainer = container._reactRootContainer;
						if ((reactRootContainer === null || reactRootContainer === void 0) && parentNode.onclick === null) {
							trapClickOnNonInteractiveElement(parentNode);
						}
					}
					function insertBefore(parentInstance, child, beforeChild) {
						parentInstance.insertBefore(child, beforeChild);
					}
					function insertInContainerBefore(container, child, beforeChild) {
						if (container.nodeType === COMMENT_NODE) {
							container.parentNode.insertBefore(child, beforeChild);
						} else {
							container.insertBefore(child, beforeChild);
						}
					}
					function removeChild(parentInstance, child) {
						parentInstance.removeChild(child);
					}
					function removeChildFromContainer(container, child) {
						if (container.nodeType === COMMENT_NODE) {
							container.parentNode.removeChild(child);
						} else {
							container.removeChild(child);
						}
					}
					function hideInstance(instance) {
						instance = instance;
						var style2 = instance.style;
						if (typeof style2.setProperty === 'function') {
							style2.setProperty('display', 'none', 'important');
						} else {
							style2.display = 'none';
						}
					}
					function hideTextInstance(textInstance) {
						textInstance.nodeValue = '';
					}
					function unhideInstance(instance, props) {
						instance = instance;
						var styleProp = props[STYLE$1];
						var display =
							styleProp !== void 0 && styleProp !== null && styleProp.hasOwnProperty('display')
								? styleProp.display
								: null;
						instance.style.display = dangerousStyleValue('display', display);
					}
					function unhideTextInstance(textInstance, text) {
						textInstance.nodeValue = text;
					}
					function clearContainer(container) {
						if (container.nodeType === ELEMENT_NODE) {
							container.textContent = '';
						} else if (container.nodeType === DOCUMENT_NODE) {
							var body = container.body;
							if (body != null) {
								body.textContent = '';
							}
						}
					}
					function canHydrateInstance(instance, type, props) {
						if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
							return null;
						}
						return instance;
					}
					function canHydrateTextInstance(instance, text) {
						if (text === '' || instance.nodeType !== TEXT_NODE) {
							return null;
						}
						return instance;
					}
					function isSuspenseInstancePending(instance) {
						return instance.data === SUSPENSE_PENDING_START_DATA;
					}
					function isSuspenseInstanceFallback(instance) {
						return instance.data === SUSPENSE_FALLBACK_START_DATA;
					}
					function getNextHydratable(node) {
						for (; node != null; node = node.nextSibling) {
							var nodeType = node.nodeType;
							if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) {
								break;
							}
						}
						return node;
					}
					function getNextHydratableSibling(instance) {
						return getNextHydratable(instance.nextSibling);
					}
					function getFirstHydratableChild(parentInstance) {
						return getNextHydratable(parentInstance.firstChild);
					}
					function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
						precacheFiberNode(internalInstanceHandle, instance);
						updateFiberProps(instance, props);
						var parentNamespace;
						{
							var hostContextDev = hostContext;
							parentNamespace = hostContextDev.namespace;
						}
						return diffHydratedProperties(instance, type, props, parentNamespace);
					}
					function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
						precacheFiberNode(internalInstanceHandle, textInstance);
						return diffHydratedText(textInstance, text);
					}
					function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance) {
						var node = suspenseInstance.nextSibling;
						var depth = 0;
						while (node) {
							if (node.nodeType === COMMENT_NODE) {
								var data = node.data;
								if (data === SUSPENSE_END_DATA) {
									if (depth === 0) {
										return getNextHydratableSibling(node);
									} else {
										depth--;
									}
								} else if (
									data === SUSPENSE_START_DATA ||
									data === SUSPENSE_FALLBACK_START_DATA ||
									data === SUSPENSE_PENDING_START_DATA
								) {
									depth++;
								}
							}
							node = node.nextSibling;
						}
						return null;
					}
					function getParentSuspenseInstance(targetInstance) {
						var node = targetInstance.previousSibling;
						var depth = 0;
						while (node) {
							if (node.nodeType === COMMENT_NODE) {
								var data = node.data;
								if (
									data === SUSPENSE_START_DATA ||
									data === SUSPENSE_FALLBACK_START_DATA ||
									data === SUSPENSE_PENDING_START_DATA
								) {
									if (depth === 0) {
										return node;
									} else {
										depth--;
									}
								} else if (data === SUSPENSE_END_DATA) {
									depth++;
								}
							}
							node = node.previousSibling;
						}
						return null;
					}
					function commitHydratedContainer(container) {
						retryIfBlockedOn(container);
					}
					function commitHydratedSuspenseInstance(suspenseInstance) {
						retryIfBlockedOn(suspenseInstance);
					}
					function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
						{
							warnForUnmatchedText(textInstance, text);
						}
					}
					function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
						if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
							warnForUnmatchedText(textInstance, text);
						}
					}
					function didNotHydrateContainerInstance(parentContainer, instance) {
						{
							if (instance.nodeType === ELEMENT_NODE) {
								warnForDeletedHydratableElement(parentContainer, instance);
							} else if (instance.nodeType === COMMENT_NODE);
							else {
								warnForDeletedHydratableText(parentContainer, instance);
							}
						}
					}
					function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
						if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
							if (instance.nodeType === ELEMENT_NODE) {
								warnForDeletedHydratableElement(parentInstance, instance);
							} else if (instance.nodeType === COMMENT_NODE);
							else {
								warnForDeletedHydratableText(parentInstance, instance);
							}
						}
					}
					function didNotFindHydratableContainerInstance(parentContainer, type, props) {
						{
							warnForInsertedHydratedElement(parentContainer, type);
						}
					}
					function didNotFindHydratableContainerTextInstance(parentContainer, text) {
						{
							warnForInsertedHydratedText(parentContainer, text);
						}
					}
					function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
						if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
							warnForInsertedHydratedElement(parentInstance, type);
						}
					}
					function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
						if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
							warnForInsertedHydratedText(parentInstance, text);
						}
					}
					function didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance) {
						if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true);
					}
					var clientId = 0;
					function makeClientIdInDEV(warnOnAccessInDEV) {
						var id = 'r:' + (clientId++).toString(36);
						return {
							toString: function () {
								warnOnAccessInDEV();
								return id;
							},
							valueOf: function () {
								warnOnAccessInDEV();
								return id;
							}
						};
					}
					function isOpaqueHydratingObject(value) {
						return value !== null && typeof value === 'object' && value.$$typeof === REACT_OPAQUE_ID_TYPE;
					}
					function makeOpaqueHydratingObject(attemptToReadValue) {
						return {
							$$typeof: REACT_OPAQUE_ID_TYPE,
							toString: attemptToReadValue,
							valueOf: attemptToReadValue
						};
					}
					function preparePortalMount(portalInstance) {
						{
							listenToAllSupportedEvents(portalInstance);
						}
					}
					var randomKey = Math.random().toString(36).slice(2);
					var internalInstanceKey = '__reactFiber$' + randomKey;
					var internalPropsKey = '__reactProps$' + randomKey;
					var internalContainerInstanceKey = '__reactContainer$' + randomKey;
					var internalEventHandlersKey = '__reactEvents$' + randomKey;
					function precacheFiberNode(hostInst, node) {
						node[internalInstanceKey] = hostInst;
					}
					function markContainerAsRoot(hostRoot, node) {
						node[internalContainerInstanceKey] = hostRoot;
					}
					function unmarkContainerAsRoot(node) {
						node[internalContainerInstanceKey] = null;
					}
					function isContainerMarkedAsRoot(node) {
						return !!node[internalContainerInstanceKey];
					}
					function getClosestInstanceFromNode(targetNode) {
						var targetInst = targetNode[internalInstanceKey];
						if (targetInst) {
							return targetInst;
						}
						var parentNode = targetNode.parentNode;
						while (parentNode) {
							targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey];
							if (targetInst) {
								var alternate = targetInst.alternate;
								if (targetInst.child !== null || (alternate !== null && alternate.child !== null)) {
									var suspenseInstance = getParentSuspenseInstance(targetNode);
									while (suspenseInstance !== null) {
										var targetSuspenseInst = suspenseInstance[internalInstanceKey];
										if (targetSuspenseInst) {
											return targetSuspenseInst;
										}
										suspenseInstance = getParentSuspenseInstance(suspenseInstance);
									}
								}
								return targetInst;
							}
							targetNode = parentNode;
							parentNode = targetNode.parentNode;
						}
						return null;
					}
					function getInstanceFromNode(node) {
						var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
						if (inst) {
							if (
								inst.tag === HostComponent ||
								inst.tag === HostText ||
								inst.tag === SuspenseComponent ||
								inst.tag === HostRoot
							) {
								return inst;
							} else {
								return null;
							}
						}
						return null;
					}
					function getNodeFromInstance(inst) {
						if (inst.tag === HostComponent || inst.tag === HostText) {
							return inst.stateNode;
						}
						{
							{
								throw Error('getNodeFromInstance: Invalid argument.');
							}
						}
					}
					function getFiberCurrentPropsFromNode(node) {
						return node[internalPropsKey] || null;
					}
					function updateFiberProps(node, props) {
						node[internalPropsKey] = props;
					}
					function getEventListenerSet(node) {
						var elementListenerSet = node[internalEventHandlersKey];
						if (elementListenerSet === void 0) {
							elementListenerSet = node[internalEventHandlersKey] = /* @__PURE__ */ new Set();
						}
						return elementListenerSet;
					}
					var loggedTypeFailures = {};
					var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
					function setCurrentlyValidatingElement(element) {
						{
							if (element) {
								var owner = element._owner;
								var stack = describeUnknownElementTypeFrameInDEV(
									element.type,
									element._source,
									owner ? owner.type : null
								);
								ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
							} else {
								ReactDebugCurrentFrame$1.setExtraStackFrame(null);
							}
						}
					}
					function checkPropTypes(typeSpecs, values, location, componentName, element) {
						{
							var has2 = Function.call.bind(Object.prototype.hasOwnProperty);
							for (var typeSpecName in typeSpecs) {
								if (has2(typeSpecs, typeSpecName)) {
									var error$1 = void 0;
									try {
										if (typeof typeSpecs[typeSpecName] !== 'function') {
											var err = Error(
												(componentName || 'React class') +
													': ' +
													location +
													' type `' +
													typeSpecName +
													'` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
													typeof typeSpecs[typeSpecName] +
													'`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
											);
											err.name = 'Invariant Violation';
											throw err;
										}
										error$1 = typeSpecs[typeSpecName](
											values,
											typeSpecName,
											componentName,
											location,
											null,
											'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
										);
									} catch (ex) {
										error$1 = ex;
									}
									if (error$1 && !(error$1 instanceof Error)) {
										setCurrentlyValidatingElement(element);
										error(
											'%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
											componentName || 'React class',
											location,
											typeSpecName,
											typeof error$1
										);
										setCurrentlyValidatingElement(null);
									}
									if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
										loggedTypeFailures[error$1.message] = true;
										setCurrentlyValidatingElement(element);
										error('Failed %s type: %s', location, error$1.message);
										setCurrentlyValidatingElement(null);
									}
								}
							}
						}
					}
					var valueStack = [];
					var fiberStack;
					{
						fiberStack = [];
					}
					var index = -1;
					function createCursor(defaultValue) {
						return {
							current: defaultValue
						};
					}
					function pop(cursor, fiber) {
						if (index < 0) {
							{
								error('Unexpected pop.');
							}
							return;
						}
						{
							if (fiber !== fiberStack[index]) {
								error('Unexpected Fiber popped.');
							}
						}
						cursor.current = valueStack[index];
						valueStack[index] = null;
						{
							fiberStack[index] = null;
						}
						index--;
					}
					function push(cursor, value, fiber) {
						index++;
						valueStack[index] = cursor.current;
						{
							fiberStack[index] = fiber;
						}
						cursor.current = value;
					}
					var warnedAboutMissingGetChildContext;
					{
						warnedAboutMissingGetChildContext = {};
					}
					var emptyContextObject = {};
					{
						Object.freeze(emptyContextObject);
					}
					var contextStackCursor = createCursor(emptyContextObject);
					var didPerformWorkStackCursor = createCursor(false);
					var previousContext = emptyContextObject;
					function getUnmaskedContext(workInProgress2, Component, didPushOwnContextIfProvider) {
						{
							if (didPushOwnContextIfProvider && isContextProvider(Component)) {
								return previousContext;
							}
							return contextStackCursor.current;
						}
					}
					function cacheContext(workInProgress2, unmaskedContext, maskedContext) {
						{
							var instance = workInProgress2.stateNode;
							instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
							instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
						}
					}
					function getMaskedContext(workInProgress2, unmaskedContext) {
						{
							var type = workInProgress2.type;
							var contextTypes = type.contextTypes;
							if (!contextTypes) {
								return emptyContextObject;
							}
							var instance = workInProgress2.stateNode;
							if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
								return instance.__reactInternalMemoizedMaskedChildContext;
							}
							var context = {};
							for (var key in contextTypes) {
								context[key] = unmaskedContext[key];
							}
							{
								var name = getComponentName(type) || 'Unknown';
								checkPropTypes(contextTypes, context, 'context', name);
							}
							if (instance) {
								cacheContext(workInProgress2, unmaskedContext, context);
							}
							return context;
						}
					}
					function hasContextChanged() {
						{
							return didPerformWorkStackCursor.current;
						}
					}
					function isContextProvider(type) {
						{
							var childContextTypes = type.childContextTypes;
							return childContextTypes !== null && childContextTypes !== void 0;
						}
					}
					function popContext(fiber) {
						{
							pop(didPerformWorkStackCursor, fiber);
							pop(contextStackCursor, fiber);
						}
					}
					function popTopLevelContextObject(fiber) {
						{
							pop(didPerformWorkStackCursor, fiber);
							pop(contextStackCursor, fiber);
						}
					}
					function pushTopLevelContextObject(fiber, context, didChange) {
						{
							if (!(contextStackCursor.current === emptyContextObject)) {
								{
									throw Error(
										'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
							push(contextStackCursor, context, fiber);
							push(didPerformWorkStackCursor, didChange, fiber);
						}
					}
					function processChildContext(fiber, type, parentContext) {
						{
							var instance = fiber.stateNode;
							var childContextTypes = type.childContextTypes;
							if (typeof instance.getChildContext !== 'function') {
								{
									var componentName = getComponentName(type) || 'Unknown';
									if (!warnedAboutMissingGetChildContext[componentName]) {
										warnedAboutMissingGetChildContext[componentName] = true;
										error(
											'%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
											componentName,
											componentName
										);
									}
								}
								return parentContext;
							}
							var childContext = instance.getChildContext();
							for (var contextKey in childContext) {
								if (!(contextKey in childContextTypes)) {
									{
										throw Error(
											(getComponentName(type) || 'Unknown') +
												'.getChildContext(): key "' +
												contextKey +
												'" is not defined in childContextTypes.'
										);
									}
								}
							}
							{
								var name = getComponentName(type) || 'Unknown';
								checkPropTypes(childContextTypes, childContext, 'child context', name);
							}
							return _assign({}, parentContext, childContext);
						}
					}
					function pushContextProvider(workInProgress2) {
						{
							var instance = workInProgress2.stateNode;
							var memoizedMergedChildContext =
								(instance && instance.__reactInternalMemoizedMergedChildContext) || emptyContextObject;
							previousContext = contextStackCursor.current;
							push(contextStackCursor, memoizedMergedChildContext, workInProgress2);
							push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress2);
							return true;
						}
					}
					function invalidateContextProvider(workInProgress2, type, didChange) {
						{
							var instance = workInProgress2.stateNode;
							if (!instance) {
								{
									throw Error(
										'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
							if (didChange) {
								var mergedContext = processChildContext(workInProgress2, type, previousContext);
								instance.__reactInternalMemoizedMergedChildContext = mergedContext;
								pop(didPerformWorkStackCursor, workInProgress2);
								pop(contextStackCursor, workInProgress2);
								push(contextStackCursor, mergedContext, workInProgress2);
								push(didPerformWorkStackCursor, didChange, workInProgress2);
							} else {
								pop(didPerformWorkStackCursor, workInProgress2);
								push(didPerformWorkStackCursor, didChange, workInProgress2);
							}
						}
					}
					function findCurrentUnmaskedContext(fiber) {
						{
							if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
								{
									throw Error(
										'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
							var node = fiber;
							do {
								switch (node.tag) {
									case HostRoot:
										return node.stateNode.context;
									case ClassComponent: {
										var Component = node.type;
										if (isContextProvider(Component)) {
											return node.stateNode.__reactInternalMemoizedMergedChildContext;
										}
										break;
									}
								}
								node = node.return;
							} while (node !== null);
							{
								{
									throw Error(
										'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
						}
					}
					var LegacyRoot = 0;
					var BlockingRoot = 1;
					var ConcurrentRoot = 2;
					var rendererID = null;
					var injectedHook = null;
					var hasLoggedError = false;
					var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined';
					function injectInternals(internals) {
						if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
							return false;
						}
						var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
						if (hook.isDisabled) {
							return true;
						}
						if (!hook.supportsFiber) {
							{
								error(
									'The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools'
								);
							}
							return true;
						}
						try {
							rendererID = hook.inject(internals);
							injectedHook = hook;
						} catch (err) {
							{
								error('React instrumentation encountered an error: %s.', err);
							}
						}
						return true;
					}
					function onScheduleRoot(root2, children) {
						{
							if (injectedHook && typeof injectedHook.onScheduleFiberRoot === 'function') {
								try {
									injectedHook.onScheduleFiberRoot(rendererID, root2, children);
								} catch (err) {
									if (!hasLoggedError) {
										hasLoggedError = true;
										error('React instrumentation encountered an error: %s', err);
									}
								}
							}
						}
					}
					function onCommitRoot(root2, priorityLevel) {
						if (injectedHook && typeof injectedHook.onCommitFiberRoot === 'function') {
							try {
								var didError = (root2.current.flags & DidCapture) === DidCapture;
								if (enableProfilerTimer) {
									injectedHook.onCommitFiberRoot(rendererID, root2, priorityLevel, didError);
								} else {
									injectedHook.onCommitFiberRoot(rendererID, root2, void 0, didError);
								}
							} catch (err) {
								{
									if (!hasLoggedError) {
										hasLoggedError = true;
										error('React instrumentation encountered an error: %s', err);
									}
								}
							}
						}
					}
					function onCommitUnmount(fiber) {
						if (injectedHook && typeof injectedHook.onCommitFiberUnmount === 'function') {
							try {
								injectedHook.onCommitFiberUnmount(rendererID, fiber);
							} catch (err) {
								{
									if (!hasLoggedError) {
										hasLoggedError = true;
										error('React instrumentation encountered an error: %s', err);
									}
								}
							}
						}
					}
					var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority,
						Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback,
						Scheduler_cancelCallback = Scheduler.unstable_cancelCallback,
						Scheduler_shouldYield = Scheduler.unstable_shouldYield,
						Scheduler_requestPaint = Scheduler.unstable_requestPaint,
						Scheduler_now$1 = Scheduler.unstable_now,
						Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
						Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority,
						Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
						Scheduler_NormalPriority = Scheduler.unstable_NormalPriority,
						Scheduler_LowPriority = Scheduler.unstable_LowPriority,
						Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;
					{
						if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
							{
								throw Error(
									'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling'
								);
							}
						}
					}
					var fakeCallbackNode = {};
					var ImmediatePriority$1 = 99;
					var UserBlockingPriority$2 = 98;
					var NormalPriority$1 = 97;
					var LowPriority$1 = 96;
					var IdlePriority$1 = 95;
					var NoPriority$1 = 90;
					var shouldYield = Scheduler_shouldYield;
					var requestPaint = Scheduler_requestPaint !== void 0 ? Scheduler_requestPaint : function () {};
					var syncQueue = null;
					var immediateQueueCallbackNode = null;
					var isFlushingSyncQueue = false;
					var initialTimeMs$1 = Scheduler_now$1();
					var now =
						initialTimeMs$1 < 1e4
							? Scheduler_now$1
							: function () {
									return Scheduler_now$1() - initialTimeMs$1;
								};
					function getCurrentPriorityLevel() {
						switch (Scheduler_getCurrentPriorityLevel()) {
							case Scheduler_ImmediatePriority:
								return ImmediatePriority$1;
							case Scheduler_UserBlockingPriority:
								return UserBlockingPriority$2;
							case Scheduler_NormalPriority:
								return NormalPriority$1;
							case Scheduler_LowPriority:
								return LowPriority$1;
							case Scheduler_IdlePriority:
								return IdlePriority$1;
							default: {
								{
									throw Error('Unknown priority level.');
								}
							}
						}
					}
					function reactPriorityToSchedulerPriority(reactPriorityLevel) {
						switch (reactPriorityLevel) {
							case ImmediatePriority$1:
								return Scheduler_ImmediatePriority;
							case UserBlockingPriority$2:
								return Scheduler_UserBlockingPriority;
							case NormalPriority$1:
								return Scheduler_NormalPriority;
							case LowPriority$1:
								return Scheduler_LowPriority;
							case IdlePriority$1:
								return Scheduler_IdlePriority;
							default: {
								{
									throw Error('Unknown priority level.');
								}
							}
						}
					}
					function runWithPriority$1(reactPriorityLevel, fn) {
						var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
						return Scheduler_runWithPriority(priorityLevel, fn);
					}
					function scheduleCallback(reactPriorityLevel, callback, options2) {
						var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
						return Scheduler_scheduleCallback(priorityLevel, callback, options2);
					}
					function scheduleSyncCallback(callback) {
						if (syncQueue === null) {
							syncQueue = [callback];
							immediateQueueCallbackNode = Scheduler_scheduleCallback(
								Scheduler_ImmediatePriority,
								flushSyncCallbackQueueImpl
							);
						} else {
							syncQueue.push(callback);
						}
						return fakeCallbackNode;
					}
					function cancelCallback(callbackNode) {
						if (callbackNode !== fakeCallbackNode) {
							Scheduler_cancelCallback(callbackNode);
						}
					}
					function flushSyncCallbackQueue() {
						if (immediateQueueCallbackNode !== null) {
							var node = immediateQueueCallbackNode;
							immediateQueueCallbackNode = null;
							Scheduler_cancelCallback(node);
						}
						flushSyncCallbackQueueImpl();
					}
					function flushSyncCallbackQueueImpl() {
						if (!isFlushingSyncQueue && syncQueue !== null) {
							isFlushingSyncQueue = true;
							var i2 = 0;
							{
								try {
									var _isSync2 = true;
									var _queue = syncQueue;
									runWithPriority$1(ImmediatePriority$1, function () {
										for (; i2 < _queue.length; i2++) {
											var callback = _queue[i2];
											do {
												callback = callback(_isSync2);
											} while (callback !== null);
										}
									});
									syncQueue = null;
								} catch (error2) {
									if (syncQueue !== null) {
										syncQueue = syncQueue.slice(i2 + 1);
									}
									Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
									throw error2;
								} finally {
									isFlushingSyncQueue = false;
								}
							}
						}
					}
					var ReactVersion = '17.0.2';
					var NoMode = 0;
					var StrictMode = 1;
					var BlockingMode = 2;
					var ConcurrentMode = 4;
					var ProfileMode = 8;
					var DebugTracingMode = 16;
					var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
					var NoTransition = 0;
					function requestCurrentTransition() {
						return ReactCurrentBatchConfig.transition;
					}
					var ReactStrictModeWarnings = {
						recordUnsafeLifecycleWarnings: function (fiber, instance) {},
						flushPendingUnsafeLifecycleWarnings: function () {},
						recordLegacyContextWarning: function (fiber, instance) {},
						flushLegacyContextWarning: function () {},
						discardPendingWarnings: function () {}
					};
					{
						var findStrictRoot = function (fiber) {
							var maybeStrictRoot = null;
							var node = fiber;
							while (node !== null) {
								if (node.mode & StrictMode) {
									maybeStrictRoot = node;
								}
								node = node.return;
							}
							return maybeStrictRoot;
						};
						var setToSortedString = function (set2) {
							var array = [];
							set2.forEach(function (value) {
								array.push(value);
							});
							return array.sort().join(', ');
						};
						var pendingComponentWillMountWarnings = [];
						var pendingUNSAFE_ComponentWillMountWarnings = [];
						var pendingComponentWillReceivePropsWarnings = [];
						var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
						var pendingComponentWillUpdateWarnings = [];
						var pendingUNSAFE_ComponentWillUpdateWarnings = [];
						var didWarnAboutUnsafeLifecycles = /* @__PURE__ */ new Set();
						ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
							if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
								return;
							}
							if (
								typeof instance.componentWillMount === 'function' &&
								instance.componentWillMount.__suppressDeprecationWarning !== true
							) {
								pendingComponentWillMountWarnings.push(fiber);
							}
							if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillMount === 'function') {
								pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
							}
							if (
								typeof instance.componentWillReceiveProps === 'function' &&
								instance.componentWillReceiveProps.__suppressDeprecationWarning !== true
							) {
								pendingComponentWillReceivePropsWarnings.push(fiber);
							}
							if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
								pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
							}
							if (
								typeof instance.componentWillUpdate === 'function' &&
								instance.componentWillUpdate.__suppressDeprecationWarning !== true
							) {
								pendingComponentWillUpdateWarnings.push(fiber);
							}
							if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillUpdate === 'function') {
								pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
							}
						};
						ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
							var componentWillMountUniqueNames = /* @__PURE__ */ new Set();
							if (pendingComponentWillMountWarnings.length > 0) {
								pendingComponentWillMountWarnings.forEach(function (fiber) {
									componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
									didWarnAboutUnsafeLifecycles.add(fiber.type);
								});
								pendingComponentWillMountWarnings = [];
							}
							var UNSAFE_componentWillMountUniqueNames = /* @__PURE__ */ new Set();
							if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
								pendingUNSAFE_ComponentWillMountWarnings.forEach(function (fiber) {
									UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
									didWarnAboutUnsafeLifecycles.add(fiber.type);
								});
								pendingUNSAFE_ComponentWillMountWarnings = [];
							}
							var componentWillReceivePropsUniqueNames = /* @__PURE__ */ new Set();
							if (pendingComponentWillReceivePropsWarnings.length > 0) {
								pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
									componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
									didWarnAboutUnsafeLifecycles.add(fiber.type);
								});
								pendingComponentWillReceivePropsWarnings = [];
							}
							var UNSAFE_componentWillReceivePropsUniqueNames = /* @__PURE__ */ new Set();
							if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
								pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function (fiber) {
									UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
									didWarnAboutUnsafeLifecycles.add(fiber.type);
								});
								pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
							}
							var componentWillUpdateUniqueNames = /* @__PURE__ */ new Set();
							if (pendingComponentWillUpdateWarnings.length > 0) {
								pendingComponentWillUpdateWarnings.forEach(function (fiber) {
									componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
									didWarnAboutUnsafeLifecycles.add(fiber.type);
								});
								pendingComponentWillUpdateWarnings = [];
							}
							var UNSAFE_componentWillUpdateUniqueNames = /* @__PURE__ */ new Set();
							if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
								pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function (fiber) {
									UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
									didWarnAboutUnsafeLifecycles.add(fiber.type);
								});
								pendingUNSAFE_ComponentWillUpdateWarnings = [];
							}
							if (UNSAFE_componentWillMountUniqueNames.size > 0) {
								var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
								error(
									'Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s',
									sortedNames
								);
							}
							if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
								var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);
								error(
									"Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s",
									_sortedNames
								);
							}
							if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
								var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);
								error(
									'Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s',
									_sortedNames2
								);
							}
							if (componentWillMountUniqueNames.size > 0) {
								var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);
								warn(
									'componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s',
									_sortedNames3
								);
							}
							if (componentWillReceivePropsUniqueNames.size > 0) {
								var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);
								warn(
									"componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
									_sortedNames4
								);
							}
							if (componentWillUpdateUniqueNames.size > 0) {
								var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);
								warn(
									'componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s',
									_sortedNames5
								);
							}
						};
						var pendingLegacyContextWarning = /* @__PURE__ */ new Map();
						var didWarnAboutLegacyContext = /* @__PURE__ */ new Set();
						ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
							var strictRoot = findStrictRoot(fiber);
							if (strictRoot === null) {
								error(
									'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
								);
								return;
							}
							if (didWarnAboutLegacyContext.has(fiber.type)) {
								return;
							}
							var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
							if (
								fiber.type.contextTypes != null ||
								fiber.type.childContextTypes != null ||
								(instance !== null && typeof instance.getChildContext === 'function')
							) {
								if (warningsForRoot === void 0) {
									warningsForRoot = [];
									pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
								}
								warningsForRoot.push(fiber);
							}
						};
						ReactStrictModeWarnings.flushLegacyContextWarning = function () {
							pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
								if (fiberArray.length === 0) {
									return;
								}
								var firstFiber = fiberArray[0];
								var uniqueNames = /* @__PURE__ */ new Set();
								fiberArray.forEach(function (fiber) {
									uniqueNames.add(getComponentName(fiber.type) || 'Component');
									didWarnAboutLegacyContext.add(fiber.type);
								});
								var sortedNames = setToSortedString(uniqueNames);
								try {
									setCurrentFiber(firstFiber);
									error(
										'Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context',
										sortedNames
									);
								} finally {
									resetCurrentFiber();
								}
							});
						};
						ReactStrictModeWarnings.discardPendingWarnings = function () {
							pendingComponentWillMountWarnings = [];
							pendingUNSAFE_ComponentWillMountWarnings = [];
							pendingComponentWillReceivePropsWarnings = [];
							pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
							pendingComponentWillUpdateWarnings = [];
							pendingUNSAFE_ComponentWillUpdateWarnings = [];
							pendingLegacyContextWarning = /* @__PURE__ */ new Map();
						};
					}
					function resolveDefaultProps(Component, baseProps) {
						if (Component && Component.defaultProps) {
							var props = _assign({}, baseProps);
							var defaultProps = Component.defaultProps;
							for (var propName in defaultProps) {
								if (props[propName] === void 0) {
									props[propName] = defaultProps[propName];
								}
							}
							return props;
						}
						return baseProps;
					}
					var MAX_SIGNED_31_BIT_INT = 1073741823;
					var valueCursor = createCursor(null);
					var rendererSigil;
					{
						rendererSigil = {};
					}
					var currentlyRenderingFiber = null;
					var lastContextDependency = null;
					var lastContextWithAllBitsObserved = null;
					var isDisallowedContextReadInDEV = false;
					function resetContextDependencies() {
						currentlyRenderingFiber = null;
						lastContextDependency = null;
						lastContextWithAllBitsObserved = null;
						{
							isDisallowedContextReadInDEV = false;
						}
					}
					function enterDisallowedContextReadInDEV() {
						{
							isDisallowedContextReadInDEV = true;
						}
					}
					function exitDisallowedContextReadInDEV() {
						{
							isDisallowedContextReadInDEV = false;
						}
					}
					function pushProvider(providerFiber, nextValue) {
						var context = providerFiber.type._context;
						{
							push(valueCursor, context._currentValue, providerFiber);
							context._currentValue = nextValue;
							{
								if (
									context._currentRenderer !== void 0 &&
									context._currentRenderer !== null &&
									context._currentRenderer !== rendererSigil
								) {
									error(
										'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
									);
								}
								context._currentRenderer = rendererSigil;
							}
						}
					}
					function popProvider(providerFiber) {
						var currentValue = valueCursor.current;
						pop(valueCursor, providerFiber);
						var context = providerFiber.type._context;
						{
							context._currentValue = currentValue;
						}
					}
					function calculateChangedBits(context, newValue, oldValue) {
						if (objectIs(oldValue, newValue)) {
							return 0;
						} else {
							var changedBits =
								typeof context._calculateChangedBits === 'function'
									? context._calculateChangedBits(oldValue, newValue)
									: MAX_SIGNED_31_BIT_INT;
							{
								if ((changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits) {
									error(
										'calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s',
										changedBits
									);
								}
							}
							return changedBits | 0;
						}
					}
					function scheduleWorkOnParentPath(parent, renderLanes2) {
						var node = parent;
						while (node !== null) {
							var alternate = node.alternate;
							if (!isSubsetOfLanes(node.childLanes, renderLanes2)) {
								node.childLanes = mergeLanes(node.childLanes, renderLanes2);
								if (alternate !== null) {
									alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes2);
								}
							} else if (alternate !== null && !isSubsetOfLanes(alternate.childLanes, renderLanes2)) {
								alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes2);
							} else {
								break;
							}
							node = node.return;
						}
					}
					function propagateContextChange(workInProgress2, context, changedBits, renderLanes2) {
						var fiber = workInProgress2.child;
						if (fiber !== null) {
							fiber.return = workInProgress2;
						}
						while (fiber !== null) {
							var nextFiber = void 0;
							var list = fiber.dependencies;
							if (list !== null) {
								nextFiber = fiber.child;
								var dependency = list.firstContext;
								while (dependency !== null) {
									if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
										if (fiber.tag === ClassComponent) {
											var update = createUpdate(NoTimestamp, pickArbitraryLane(renderLanes2));
											update.tag = ForceUpdate;
											enqueueUpdate(fiber, update);
										}
										fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
										var alternate = fiber.alternate;
										if (alternate !== null) {
											alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
										}
										scheduleWorkOnParentPath(fiber.return, renderLanes2);
										list.lanes = mergeLanes(list.lanes, renderLanes2);
										break;
									}
									dependency = dependency.next;
								}
							} else if (fiber.tag === ContextProvider) {
								nextFiber = fiber.type === workInProgress2.type ? null : fiber.child;
							} else {
								nextFiber = fiber.child;
							}
							if (nextFiber !== null) {
								nextFiber.return = fiber;
							} else {
								nextFiber = fiber;
								while (nextFiber !== null) {
									if (nextFiber === workInProgress2) {
										nextFiber = null;
										break;
									}
									var sibling = nextFiber.sibling;
									if (sibling !== null) {
										sibling.return = nextFiber.return;
										nextFiber = sibling;
										break;
									}
									nextFiber = nextFiber.return;
								}
							}
							fiber = nextFiber;
						}
					}
					function prepareToReadContext(workInProgress2, renderLanes2) {
						currentlyRenderingFiber = workInProgress2;
						lastContextDependency = null;
						lastContextWithAllBitsObserved = null;
						var dependencies = workInProgress2.dependencies;
						if (dependencies !== null) {
							var firstContext = dependencies.firstContext;
							if (firstContext !== null) {
								if (includesSomeLane(dependencies.lanes, renderLanes2)) {
									markWorkInProgressReceivedUpdate();
								}
								dependencies.firstContext = null;
							}
						}
					}
					function readContext(context, observedBits) {
						{
							if (isDisallowedContextReadInDEV) {
								error(
									'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
								);
							}
						}
						if (lastContextWithAllBitsObserved === context);
						else if (observedBits === false || observedBits === 0);
						else {
							var resolvedObservedBits;
							if (typeof observedBits !== 'number' || observedBits === MAX_SIGNED_31_BIT_INT) {
								lastContextWithAllBitsObserved = context;
								resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
							} else {
								resolvedObservedBits = observedBits;
							}
							var contextItem = {
								context,
								observedBits: resolvedObservedBits,
								next: null
							};
							if (lastContextDependency === null) {
								if (!(currentlyRenderingFiber !== null)) {
									{
										throw Error(
											'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
										);
									}
								}
								lastContextDependency = contextItem;
								currentlyRenderingFiber.dependencies = {
									lanes: NoLanes,
									firstContext: contextItem,
									responders: null
								};
							} else {
								lastContextDependency = lastContextDependency.next = contextItem;
							}
						}
						return context._currentValue;
					}
					var UpdateState = 0;
					var ReplaceState = 1;
					var ForceUpdate = 2;
					var CaptureUpdate = 3;
					var hasForceUpdate = false;
					var didWarnUpdateInsideUpdate;
					var currentlyProcessingQueue;
					{
						didWarnUpdateInsideUpdate = false;
						currentlyProcessingQueue = null;
					}
					function initializeUpdateQueue(fiber) {
						var queue = {
							baseState: fiber.memoizedState,
							firstBaseUpdate: null,
							lastBaseUpdate: null,
							shared: {
								pending: null
							},
							effects: null
						};
						fiber.updateQueue = queue;
					}
					function cloneUpdateQueue(current2, workInProgress2) {
						var queue = workInProgress2.updateQueue;
						var currentQueue = current2.updateQueue;
						if (queue === currentQueue) {
							var clone = {
								baseState: currentQueue.baseState,
								firstBaseUpdate: currentQueue.firstBaseUpdate,
								lastBaseUpdate: currentQueue.lastBaseUpdate,
								shared: currentQueue.shared,
								effects: currentQueue.effects
							};
							workInProgress2.updateQueue = clone;
						}
					}
					function createUpdate(eventTime, lane) {
						var update = {
							eventTime,
							lane,
							tag: UpdateState,
							payload: null,
							callback: null,
							next: null
						};
						return update;
					}
					function enqueueUpdate(fiber, update) {
						var updateQueue = fiber.updateQueue;
						if (updateQueue === null) {
							return;
						}
						var sharedQueue = updateQueue.shared;
						var pending = sharedQueue.pending;
						if (pending === null) {
							update.next = update;
						} else {
							update.next = pending.next;
							pending.next = update;
						}
						sharedQueue.pending = update;
						{
							if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
								error(
									'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
								);
								didWarnUpdateInsideUpdate = true;
							}
						}
					}
					function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
						var queue = workInProgress2.updateQueue;
						var current2 = workInProgress2.alternate;
						if (current2 !== null) {
							var currentQueue = current2.updateQueue;
							if (queue === currentQueue) {
								var newFirst = null;
								var newLast = null;
								var firstBaseUpdate = queue.firstBaseUpdate;
								if (firstBaseUpdate !== null) {
									var update = firstBaseUpdate;
									do {
										var clone = {
											eventTime: update.eventTime,
											lane: update.lane,
											tag: update.tag,
											payload: update.payload,
											callback: update.callback,
											next: null
										};
										if (newLast === null) {
											newFirst = newLast = clone;
										} else {
											newLast.next = clone;
											newLast = clone;
										}
										update = update.next;
									} while (update !== null);
									if (newLast === null) {
										newFirst = newLast = capturedUpdate;
									} else {
										newLast.next = capturedUpdate;
										newLast = capturedUpdate;
									}
								} else {
									newFirst = newLast = capturedUpdate;
								}
								queue = {
									baseState: currentQueue.baseState,
									firstBaseUpdate: newFirst,
									lastBaseUpdate: newLast,
									shared: currentQueue.shared,
									effects: currentQueue.effects
								};
								workInProgress2.updateQueue = queue;
								return;
							}
						}
						var lastBaseUpdate = queue.lastBaseUpdate;
						if (lastBaseUpdate === null) {
							queue.firstBaseUpdate = capturedUpdate;
						} else {
							lastBaseUpdate.next = capturedUpdate;
						}
						queue.lastBaseUpdate = capturedUpdate;
					}
					function getStateFromUpdate(workInProgress2, queue, update, prevState, nextProps, instance) {
						switch (update.tag) {
							case ReplaceState: {
								var payload = update.payload;
								if (typeof payload === 'function') {
									{
										enterDisallowedContextReadInDEV();
									}
									var nextState = payload.call(instance, prevState, nextProps);
									{
										if (workInProgress2.mode & StrictMode) {
											disableLogs();
											try {
												payload.call(instance, prevState, nextProps);
											} finally {
												reenableLogs();
											}
										}
										exitDisallowedContextReadInDEV();
									}
									return nextState;
								}
								return payload;
							}
							case CaptureUpdate: {
								workInProgress2.flags = (workInProgress2.flags & ~ShouldCapture) | DidCapture;
							}
							case UpdateState: {
								var _payload = update.payload;
								var partialState;
								if (typeof _payload === 'function') {
									{
										enterDisallowedContextReadInDEV();
									}
									partialState = _payload.call(instance, prevState, nextProps);
									{
										if (workInProgress2.mode & StrictMode) {
											disableLogs();
											try {
												_payload.call(instance, prevState, nextProps);
											} finally {
												reenableLogs();
											}
										}
										exitDisallowedContextReadInDEV();
									}
								} else {
									partialState = _payload;
								}
								if (partialState === null || partialState === void 0) {
									return prevState;
								}
								return _assign({}, prevState, partialState);
							}
							case ForceUpdate: {
								hasForceUpdate = true;
								return prevState;
							}
						}
						return prevState;
					}
					function processUpdateQueue(workInProgress2, props, instance, renderLanes2) {
						var queue = workInProgress2.updateQueue;
						hasForceUpdate = false;
						{
							currentlyProcessingQueue = queue.shared;
						}
						var firstBaseUpdate = queue.firstBaseUpdate;
						var lastBaseUpdate = queue.lastBaseUpdate;
						var pendingQueue = queue.shared.pending;
						if (pendingQueue !== null) {
							queue.shared.pending = null;
							var lastPendingUpdate = pendingQueue;
							var firstPendingUpdate = lastPendingUpdate.next;
							lastPendingUpdate.next = null;
							if (lastBaseUpdate === null) {
								firstBaseUpdate = firstPendingUpdate;
							} else {
								lastBaseUpdate.next = firstPendingUpdate;
							}
							lastBaseUpdate = lastPendingUpdate;
							var current2 = workInProgress2.alternate;
							if (current2 !== null) {
								var currentQueue = current2.updateQueue;
								var currentLastBaseUpdate = currentQueue.lastBaseUpdate;
								if (currentLastBaseUpdate !== lastBaseUpdate) {
									if (currentLastBaseUpdate === null) {
										currentQueue.firstBaseUpdate = firstPendingUpdate;
									} else {
										currentLastBaseUpdate.next = firstPendingUpdate;
									}
									currentQueue.lastBaseUpdate = lastPendingUpdate;
								}
							}
						}
						if (firstBaseUpdate !== null) {
							var newState = queue.baseState;
							var newLanes = NoLanes;
							var newBaseState = null;
							var newFirstBaseUpdate = null;
							var newLastBaseUpdate = null;
							var update = firstBaseUpdate;
							do {
								var updateLane = update.lane;
								var updateEventTime = update.eventTime;
								if (!isSubsetOfLanes(renderLanes2, updateLane)) {
									var clone = {
										eventTime: updateEventTime,
										lane: updateLane,
										tag: update.tag,
										payload: update.payload,
										callback: update.callback,
										next: null
									};
									if (newLastBaseUpdate === null) {
										newFirstBaseUpdate = newLastBaseUpdate = clone;
										newBaseState = newState;
									} else {
										newLastBaseUpdate = newLastBaseUpdate.next = clone;
									}
									newLanes = mergeLanes(newLanes, updateLane);
								} else {
									if (newLastBaseUpdate !== null) {
										var _clone = {
											eventTime: updateEventTime,
											lane: NoLane,
											tag: update.tag,
											payload: update.payload,
											callback: update.callback,
											next: null
										};
										newLastBaseUpdate = newLastBaseUpdate.next = _clone;
									}
									newState = getStateFromUpdate(workInProgress2, queue, update, newState, props, instance);
									var callback = update.callback;
									if (callback !== null) {
										workInProgress2.flags |= Callback;
										var effects = queue.effects;
										if (effects === null) {
											queue.effects = [update];
										} else {
											effects.push(update);
										}
									}
								}
								update = update.next;
								if (update === null) {
									pendingQueue = queue.shared.pending;
									if (pendingQueue === null) {
										break;
									} else {
										var _lastPendingUpdate = pendingQueue;
										var _firstPendingUpdate = _lastPendingUpdate.next;
										_lastPendingUpdate.next = null;
										update = _firstPendingUpdate;
										queue.lastBaseUpdate = _lastPendingUpdate;
										queue.shared.pending = null;
									}
								}
							} while (true);
							if (newLastBaseUpdate === null) {
								newBaseState = newState;
							}
							queue.baseState = newBaseState;
							queue.firstBaseUpdate = newFirstBaseUpdate;
							queue.lastBaseUpdate = newLastBaseUpdate;
							markSkippedUpdateLanes(newLanes);
							workInProgress2.lanes = newLanes;
							workInProgress2.memoizedState = newState;
						}
						{
							currentlyProcessingQueue = null;
						}
					}
					function callCallback(callback, context) {
						if (!(typeof callback === 'function')) {
							{
								throw Error('Invalid argument passed as callback. Expected a function. Instead received: ' + callback);
							}
						}
						callback.call(context);
					}
					function resetHasForceUpdateBeforeProcessing() {
						hasForceUpdate = false;
					}
					function checkHasForceUpdateAfterProcessing() {
						return hasForceUpdate;
					}
					function commitUpdateQueue(finishedWork, finishedQueue, instance) {
						var effects = finishedQueue.effects;
						finishedQueue.effects = null;
						if (effects !== null) {
							for (var i2 = 0; i2 < effects.length; i2++) {
								var effect = effects[i2];
								var callback = effect.callback;
								if (callback !== null) {
									effect.callback = null;
									callCallback(callback, instance);
								}
							}
						}
					}
					var fakeInternalInstance = {};
					var isArray = Array.isArray;
					var emptyRefsObject = new React2.Component().refs;
					var didWarnAboutStateAssignmentForComponent;
					var didWarnAboutUninitializedState;
					var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
					var didWarnAboutLegacyLifecyclesAndDerivedState;
					var didWarnAboutUndefinedDerivedState;
					var warnOnUndefinedDerivedState;
					var warnOnInvalidCallback;
					var didWarnAboutDirectlyAssigningPropsToState;
					var didWarnAboutContextTypeAndContextTypes;
					var didWarnAboutInvalidateContextType;
					{
						didWarnAboutStateAssignmentForComponent = /* @__PURE__ */ new Set();
						didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
						didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
						didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
						didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
						didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
						didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
						didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
						var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
						warnOnInvalidCallback = function (callback, callerName) {
							if (callback === null || typeof callback === 'function') {
								return;
							}
							var key = callerName + '_' + callback;
							if (!didWarnOnInvalidCallback.has(key)) {
								didWarnOnInvalidCallback.add(key);
								error(
									'%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
									callerName,
									callback
								);
							}
						};
						warnOnUndefinedDerivedState = function (type, partialState) {
							if (partialState === void 0) {
								var componentName = getComponentName(type) || 'Component';
								if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
									didWarnAboutUndefinedDerivedState.add(componentName);
									error(
										'%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
										componentName
									);
								}
							}
						};
						Object.defineProperty(fakeInternalInstance, '_processChildContext', {
							enumerable: false,
							value: function () {
								{
									{
										throw Error(
											"_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
										);
									}
								}
							}
						});
						Object.freeze(fakeInternalInstance);
					}
					function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
						var prevState = workInProgress2.memoizedState;
						{
							if (workInProgress2.mode & StrictMode) {
								disableLogs();
								try {
									getDerivedStateFromProps(nextProps, prevState);
								} finally {
									reenableLogs();
								}
							}
						}
						var partialState = getDerivedStateFromProps(nextProps, prevState);
						{
							warnOnUndefinedDerivedState(ctor, partialState);
						}
						var memoizedState =
							partialState === null || partialState === void 0 ? prevState : _assign({}, prevState, partialState);
						workInProgress2.memoizedState = memoizedState;
						if (workInProgress2.lanes === NoLanes) {
							var updateQueue = workInProgress2.updateQueue;
							updateQueue.baseState = memoizedState;
						}
					}
					var classComponentUpdater = {
						isMounted,
						enqueueSetState: function (inst, payload, callback) {
							var fiber = get(inst);
							var eventTime = requestEventTime();
							var lane = requestUpdateLane(fiber);
							var update = createUpdate(eventTime, lane);
							update.payload = payload;
							if (callback !== void 0 && callback !== null) {
								{
									warnOnInvalidCallback(callback, 'setState');
								}
								update.callback = callback;
							}
							enqueueUpdate(fiber, update);
							scheduleUpdateOnFiber(fiber, lane, eventTime);
						},
						enqueueReplaceState: function (inst, payload, callback) {
							var fiber = get(inst);
							var eventTime = requestEventTime();
							var lane = requestUpdateLane(fiber);
							var update = createUpdate(eventTime, lane);
							update.tag = ReplaceState;
							update.payload = payload;
							if (callback !== void 0 && callback !== null) {
								{
									warnOnInvalidCallback(callback, 'replaceState');
								}
								update.callback = callback;
							}
							enqueueUpdate(fiber, update);
							scheduleUpdateOnFiber(fiber, lane, eventTime);
						},
						enqueueForceUpdate: function (inst, callback) {
							var fiber = get(inst);
							var eventTime = requestEventTime();
							var lane = requestUpdateLane(fiber);
							var update = createUpdate(eventTime, lane);
							update.tag = ForceUpdate;
							if (callback !== void 0 && callback !== null) {
								{
									warnOnInvalidCallback(callback, 'forceUpdate');
								}
								update.callback = callback;
							}
							enqueueUpdate(fiber, update);
							scheduleUpdateOnFiber(fiber, lane, eventTime);
						}
					};
					function checkShouldComponentUpdate(
						workInProgress2,
						ctor,
						oldProps,
						newProps,
						oldState,
						newState,
						nextContext
					) {
						var instance = workInProgress2.stateNode;
						if (typeof instance.shouldComponentUpdate === 'function') {
							{
								if (workInProgress2.mode & StrictMode) {
									disableLogs();
									try {
										instance.shouldComponentUpdate(newProps, newState, nextContext);
									} finally {
										reenableLogs();
									}
								}
							}
							var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
							{
								if (shouldUpdate === void 0) {
									error(
										'%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
										getComponentName(ctor) || 'Component'
									);
								}
							}
							return shouldUpdate;
						}
						if (ctor.prototype && ctor.prototype.isPureReactComponent) {
							return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
						}
						return true;
					}
					function checkClassInstance(workInProgress2, ctor, newProps) {
						var instance = workInProgress2.stateNode;
						{
							var name = getComponentName(ctor) || 'Component';
							var renderPresent = instance.render;
							if (!renderPresent) {
								if (ctor.prototype && typeof ctor.prototype.render === 'function') {
									error(
										'%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
										name
									);
								} else {
									error(
										'%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
										name
									);
								}
							}
							if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
								error(
									'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
									name
								);
							}
							if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
								error(
									'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
									name
								);
							}
							if (instance.propTypes) {
								error(
									'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
									name
								);
							}
							if (instance.contextType) {
								error(
									'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
									name
								);
							}
							{
								if (instance.contextTypes) {
									error(
										'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
										name
									);
								}
								if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
									didWarnAboutContextTypeAndContextTypes.add(ctor);
									error(
										'%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
										name
									);
								}
							}
							if (typeof instance.componentShouldUpdate === 'function') {
								error(
									'%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
									name
								);
							}
							if (
								ctor.prototype &&
								ctor.prototype.isPureReactComponent &&
								typeof instance.shouldComponentUpdate !== 'undefined'
							) {
								error(
									'%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
									getComponentName(ctor) || 'A pure component'
								);
							}
							if (typeof instance.componentDidUnmount === 'function') {
								error(
									'%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
									name
								);
							}
							if (typeof instance.componentDidReceiveProps === 'function') {
								error(
									'%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
									name
								);
							}
							if (typeof instance.componentWillRecieveProps === 'function') {
								error(
									'%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
									name
								);
							}
							if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
								error(
									'%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
									name
								);
							}
							var hasMutatedProps = instance.props !== newProps;
							if (instance.props !== void 0 && hasMutatedProps) {
								error(
									"%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
									name,
									name
								);
							}
							if (instance.defaultProps) {
								error(
									'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
									name,
									name
								);
							}
							if (
								typeof instance.getSnapshotBeforeUpdate === 'function' &&
								typeof instance.componentDidUpdate !== 'function' &&
								!didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)
							) {
								didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
								error(
									'%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
									getComponentName(ctor)
								);
							}
							if (typeof instance.getDerivedStateFromProps === 'function') {
								error(
									'%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
									name
								);
							}
							if (typeof instance.getDerivedStateFromError === 'function') {
								error(
									'%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
									name
								);
							}
							if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
								error(
									'%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
									name
								);
							}
							var _state = instance.state;
							if (_state && (typeof _state !== 'object' || isArray(_state))) {
								error('%s.state: must be set to an object or null', name);
							}
							if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
								error(
									'%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
									name
								);
							}
						}
					}
					function adoptClassInstance(workInProgress2, instance) {
						instance.updater = classComponentUpdater;
						workInProgress2.stateNode = instance;
						set(instance, workInProgress2);
						{
							instance._reactInternalInstance = fakeInternalInstance;
						}
					}
					function constructClassInstance(workInProgress2, ctor, props) {
						var isLegacyContextConsumer = false;
						var unmaskedContext = emptyContextObject;
						var context = emptyContextObject;
						var contextType = ctor.contextType;
						{
							if ('contextType' in ctor) {
								var isValid =
									contextType === null ||
									(contextType !== void 0 &&
										contextType.$$typeof === REACT_CONTEXT_TYPE &&
										contextType._context === void 0);
								if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
									didWarnAboutInvalidateContextType.add(ctor);
									var addendum = '';
									if (contextType === void 0) {
										addendum =
											' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.';
									} else if (typeof contextType !== 'object') {
										addendum = ' However, it is set to a ' + typeof contextType + '.';
									} else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
										addendum = ' Did you accidentally pass the Context.Provider instead?';
									} else if (contextType._context !== void 0) {
										addendum = ' Did you accidentally pass the Context.Consumer instead?';
									} else {
										addendum =
											' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
									}
									error(
										'%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
										getComponentName(ctor) || 'Component',
										addendum
									);
								}
							}
						}
						if (typeof contextType === 'object' && contextType !== null) {
							context = readContext(contextType);
						} else {
							unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
							var contextTypes = ctor.contextTypes;
							isLegacyContextConsumer = contextTypes !== null && contextTypes !== void 0;
							context = isLegacyContextConsumer
								? getMaskedContext(workInProgress2, unmaskedContext)
								: emptyContextObject;
						}
						{
							if (workInProgress2.mode & StrictMode) {
								disableLogs();
								try {
									new ctor(props, context);
								} finally {
									reenableLogs();
								}
							}
						}
						var instance = new ctor(props, context);
						var state = (workInProgress2.memoizedState =
							instance.state !== null && instance.state !== void 0 ? instance.state : null);
						adoptClassInstance(workInProgress2, instance);
						{
							if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
								var componentName = getComponentName(ctor) || 'Component';
								if (!didWarnAboutUninitializedState.has(componentName)) {
									didWarnAboutUninitializedState.add(componentName);
									error(
										'`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
										componentName,
										instance.state === null ? 'null' : 'undefined',
										componentName
									);
								}
							}
							if (
								typeof ctor.getDerivedStateFromProps === 'function' ||
								typeof instance.getSnapshotBeforeUpdate === 'function'
							) {
								var foundWillMountName = null;
								var foundWillReceivePropsName = null;
								var foundWillUpdateName = null;
								if (
									typeof instance.componentWillMount === 'function' &&
									instance.componentWillMount.__suppressDeprecationWarning !== true
								) {
									foundWillMountName = 'componentWillMount';
								} else if (typeof instance.UNSAFE_componentWillMount === 'function') {
									foundWillMountName = 'UNSAFE_componentWillMount';
								}
								if (
									typeof instance.componentWillReceiveProps === 'function' &&
									instance.componentWillReceiveProps.__suppressDeprecationWarning !== true
								) {
									foundWillReceivePropsName = 'componentWillReceiveProps';
								} else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
									foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
								}
								if (
									typeof instance.componentWillUpdate === 'function' &&
									instance.componentWillUpdate.__suppressDeprecationWarning !== true
								) {
									foundWillUpdateName = 'componentWillUpdate';
								} else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
									foundWillUpdateName = 'UNSAFE_componentWillUpdate';
								}
								if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
									var _componentName = getComponentName(ctor) || 'Component';
									var newApiName =
										typeof ctor.getDerivedStateFromProps === 'function'
											? 'getDerivedStateFromProps()'
											: 'getSnapshotBeforeUpdate()';
									if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
										didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
										error(
											'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles',
											_componentName,
											newApiName,
											foundWillMountName !== null ? '\n  ' + foundWillMountName : '',
											foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '',
											foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : ''
										);
									}
								}
							}
						}
						if (isLegacyContextConsumer) {
							cacheContext(workInProgress2, unmaskedContext, context);
						}
						return instance;
					}
					function callComponentWillMount(workInProgress2, instance) {
						var oldState = instance.state;
						if (typeof instance.componentWillMount === 'function') {
							instance.componentWillMount();
						}
						if (typeof instance.UNSAFE_componentWillMount === 'function') {
							instance.UNSAFE_componentWillMount();
						}
						if (oldState !== instance.state) {
							{
								error(
									"%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
									getComponentName(workInProgress2.type) || 'Component'
								);
							}
							classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
						}
					}
					function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
						var oldState = instance.state;
						if (typeof instance.componentWillReceiveProps === 'function') {
							instance.componentWillReceiveProps(newProps, nextContext);
						}
						if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
							instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
						}
						if (instance.state !== oldState) {
							{
								var componentName = getComponentName(workInProgress2.type) || 'Component';
								if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
									didWarnAboutStateAssignmentForComponent.add(componentName);
									error(
										"%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
										componentName
									);
								}
							}
							classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
						}
					}
					function mountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
						{
							checkClassInstance(workInProgress2, ctor, newProps);
						}
						var instance = workInProgress2.stateNode;
						instance.props = newProps;
						instance.state = workInProgress2.memoizedState;
						instance.refs = emptyRefsObject;
						initializeUpdateQueue(workInProgress2);
						var contextType = ctor.contextType;
						if (typeof contextType === 'object' && contextType !== null) {
							instance.context = readContext(contextType);
						} else {
							var unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
							instance.context = getMaskedContext(workInProgress2, unmaskedContext);
						}
						{
							if (instance.state === newProps) {
								var componentName = getComponentName(ctor) || 'Component';
								if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
									didWarnAboutDirectlyAssigningPropsToState.add(componentName);
									error(
										"%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
										componentName
									);
								}
							}
							if (workInProgress2.mode & StrictMode) {
								ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, instance);
							}
							{
								ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress2, instance);
							}
						}
						processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
						instance.state = workInProgress2.memoizedState;
						var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
						if (typeof getDerivedStateFromProps === 'function') {
							applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
							instance.state = workInProgress2.memoizedState;
						}
						if (
							typeof ctor.getDerivedStateFromProps !== 'function' &&
							typeof instance.getSnapshotBeforeUpdate !== 'function' &&
							(typeof instance.UNSAFE_componentWillMount === 'function' ||
								typeof instance.componentWillMount === 'function')
						) {
							callComponentWillMount(workInProgress2, instance);
							processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
							instance.state = workInProgress2.memoizedState;
						}
						if (typeof instance.componentDidMount === 'function') {
							workInProgress2.flags |= Update;
						}
					}
					function resumeMountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
						var instance = workInProgress2.stateNode;
						var oldProps = workInProgress2.memoizedProps;
						instance.props = oldProps;
						var oldContext = instance.context;
						var contextType = ctor.contextType;
						var nextContext = emptyContextObject;
						if (typeof contextType === 'object' && contextType !== null) {
							nextContext = readContext(contextType);
						} else {
							var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
							nextContext = getMaskedContext(workInProgress2, nextLegacyUnmaskedContext);
						}
						var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
						var hasNewLifecycles =
							typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';
						if (
							!hasNewLifecycles &&
							(typeof instance.UNSAFE_componentWillReceiveProps === 'function' ||
								typeof instance.componentWillReceiveProps === 'function')
						) {
							if (oldProps !== newProps || oldContext !== nextContext) {
								callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
							}
						}
						resetHasForceUpdateBeforeProcessing();
						var oldState = workInProgress2.memoizedState;
						var newState = (instance.state = oldState);
						processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
						newState = workInProgress2.memoizedState;
						if (
							oldProps === newProps &&
							oldState === newState &&
							!hasContextChanged() &&
							!checkHasForceUpdateAfterProcessing()
						) {
							if (typeof instance.componentDidMount === 'function') {
								workInProgress2.flags |= Update;
							}
							return false;
						}
						if (typeof getDerivedStateFromProps === 'function') {
							applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
							newState = workInProgress2.memoizedState;
						}
						var shouldUpdate =
							checkHasForceUpdateAfterProcessing() ||
							checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
						if (shouldUpdate) {
							if (
								!hasNewLifecycles &&
								(typeof instance.UNSAFE_componentWillMount === 'function' ||
									typeof instance.componentWillMount === 'function')
							) {
								if (typeof instance.componentWillMount === 'function') {
									instance.componentWillMount();
								}
								if (typeof instance.UNSAFE_componentWillMount === 'function') {
									instance.UNSAFE_componentWillMount();
								}
							}
							if (typeof instance.componentDidMount === 'function') {
								workInProgress2.flags |= Update;
							}
						} else {
							if (typeof instance.componentDidMount === 'function') {
								workInProgress2.flags |= Update;
							}
							workInProgress2.memoizedProps = newProps;
							workInProgress2.memoizedState = newState;
						}
						instance.props = newProps;
						instance.state = newState;
						instance.context = nextContext;
						return shouldUpdate;
					}
					function updateClassInstance(current2, workInProgress2, ctor, newProps, renderLanes2) {
						var instance = workInProgress2.stateNode;
						cloneUpdateQueue(current2, workInProgress2);
						var unresolvedOldProps = workInProgress2.memoizedProps;
						var oldProps =
							workInProgress2.type === workInProgress2.elementType
								? unresolvedOldProps
								: resolveDefaultProps(workInProgress2.type, unresolvedOldProps);
						instance.props = oldProps;
						var unresolvedNewProps = workInProgress2.pendingProps;
						var oldContext = instance.context;
						var contextType = ctor.contextType;
						var nextContext = emptyContextObject;
						if (typeof contextType === 'object' && contextType !== null) {
							nextContext = readContext(contextType);
						} else {
							var nextUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
							nextContext = getMaskedContext(workInProgress2, nextUnmaskedContext);
						}
						var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
						var hasNewLifecycles =
							typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';
						if (
							!hasNewLifecycles &&
							(typeof instance.UNSAFE_componentWillReceiveProps === 'function' ||
								typeof instance.componentWillReceiveProps === 'function')
						) {
							if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
								callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
							}
						}
						resetHasForceUpdateBeforeProcessing();
						var oldState = workInProgress2.memoizedState;
						var newState = (instance.state = oldState);
						processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
						newState = workInProgress2.memoizedState;
						if (
							unresolvedOldProps === unresolvedNewProps &&
							oldState === newState &&
							!hasContextChanged() &&
							!checkHasForceUpdateAfterProcessing()
						) {
							if (typeof instance.componentDidUpdate === 'function') {
								if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
									workInProgress2.flags |= Update;
								}
							}
							if (typeof instance.getSnapshotBeforeUpdate === 'function') {
								if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
									workInProgress2.flags |= Snapshot;
								}
							}
							return false;
						}
						if (typeof getDerivedStateFromProps === 'function') {
							applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
							newState = workInProgress2.memoizedState;
						}
						var shouldUpdate =
							checkHasForceUpdateAfterProcessing() ||
							checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
						if (shouldUpdate) {
							if (
								!hasNewLifecycles &&
								(typeof instance.UNSAFE_componentWillUpdate === 'function' ||
									typeof instance.componentWillUpdate === 'function')
							) {
								if (typeof instance.componentWillUpdate === 'function') {
									instance.componentWillUpdate(newProps, newState, nextContext);
								}
								if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
									instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
								}
							}
							if (typeof instance.componentDidUpdate === 'function') {
								workInProgress2.flags |= Update;
							}
							if (typeof instance.getSnapshotBeforeUpdate === 'function') {
								workInProgress2.flags |= Snapshot;
							}
						} else {
							if (typeof instance.componentDidUpdate === 'function') {
								if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
									workInProgress2.flags |= Update;
								}
							}
							if (typeof instance.getSnapshotBeforeUpdate === 'function') {
								if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
									workInProgress2.flags |= Snapshot;
								}
							}
							workInProgress2.memoizedProps = newProps;
							workInProgress2.memoizedState = newState;
						}
						instance.props = newProps;
						instance.state = newState;
						instance.context = nextContext;
						return shouldUpdate;
					}
					var didWarnAboutMaps;
					var didWarnAboutGenerators;
					var didWarnAboutStringRefs;
					var ownerHasKeyUseWarning;
					var ownerHasFunctionTypeWarning;
					var warnForMissingKey = function (child, returnFiber) {};
					{
						didWarnAboutMaps = false;
						didWarnAboutGenerators = false;
						didWarnAboutStringRefs = {};
						ownerHasKeyUseWarning = {};
						ownerHasFunctionTypeWarning = {};
						warnForMissingKey = function (child, returnFiber) {
							if (child === null || typeof child !== 'object') {
								return;
							}
							if (!child._store || child._store.validated || child.key != null) {
								return;
							}
							if (!(typeof child._store === 'object')) {
								{
									throw Error(
										'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
							child._store.validated = true;
							var componentName = getComponentName(returnFiber.type) || 'Component';
							if (ownerHasKeyUseWarning[componentName]) {
								return;
							}
							ownerHasKeyUseWarning[componentName] = true;
							error(
								'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
							);
						};
					}
					var isArray$1 = Array.isArray;
					function coerceRef(returnFiber, current2, element) {
						var mixedRef = element.ref;
						if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
							{
								if (
									(returnFiber.mode & StrictMode || warnAboutStringRefs) &&
									!(element._owner && element._self && element._owner.stateNode !== element._self)
								) {
									var componentName = getComponentName(returnFiber.type) || 'Component';
									if (!didWarnAboutStringRefs[componentName]) {
										{
											error(
												'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
												mixedRef
											);
										}
										didWarnAboutStringRefs[componentName] = true;
									}
								}
							}
							if (element._owner) {
								var owner = element._owner;
								var inst;
								if (owner) {
									var ownerFiber = owner;
									if (!(ownerFiber.tag === ClassComponent)) {
										{
											throw Error(
												'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref'
											);
										}
									}
									inst = ownerFiber.stateNode;
								}
								if (!inst) {
									{
										throw Error(
											'Missing owner for string ref ' +
												mixedRef +
												'. This error is likely caused by a bug in React. Please file an issue.'
										);
									}
								}
								var stringRef = '' + mixedRef;
								if (
									current2 !== null &&
									current2.ref !== null &&
									typeof current2.ref === 'function' &&
									current2.ref._stringRef === stringRef
								) {
									return current2.ref;
								}
								var ref = function (value) {
									var refs = inst.refs;
									if (refs === emptyRefsObject) {
										refs = inst.refs = {};
									}
									if (value === null) {
										delete refs[stringRef];
									} else {
										refs[stringRef] = value;
									}
								};
								ref._stringRef = stringRef;
								return ref;
							} else {
								if (!(typeof mixedRef === 'string')) {
									{
										throw Error(
											'Expected ref to be a function, a string, an object returned by React.createRef(), or null.'
										);
									}
								}
								if (!element._owner) {
									{
										throw Error(
											'Element ref was specified as a string (' +
												mixedRef +
												") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information."
										);
									}
								}
							}
						}
						return mixedRef;
					}
					function throwOnInvalidObjectType(returnFiber, newChild) {
						if (returnFiber.type !== 'textarea') {
							{
								{
									throw Error(
										'Objects are not valid as a React child (found: ' +
											(Object.prototype.toString.call(newChild) === '[object Object]'
												? 'object with keys {' + Object.keys(newChild).join(', ') + '}'
												: newChild) +
											'). If you meant to render a collection of children, use an array instead.'
									);
								}
							}
						}
					}
					function warnOnFunctionType(returnFiber) {
						{
							var componentName = getComponentName(returnFiber.type) || 'Component';
							if (ownerHasFunctionTypeWarning[componentName]) {
								return;
							}
							ownerHasFunctionTypeWarning[componentName] = true;
							error(
								'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
							);
						}
					}
					function ChildReconciler(shouldTrackSideEffects) {
						function deleteChild(returnFiber, childToDelete) {
							if (!shouldTrackSideEffects) {
								return;
							}
							var last = returnFiber.lastEffect;
							if (last !== null) {
								last.nextEffect = childToDelete;
								returnFiber.lastEffect = childToDelete;
							} else {
								returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
							}
							childToDelete.nextEffect = null;
							childToDelete.flags = Deletion;
						}
						function deleteRemainingChildren(returnFiber, currentFirstChild) {
							if (!shouldTrackSideEffects) {
								return null;
							}
							var childToDelete = currentFirstChild;
							while (childToDelete !== null) {
								deleteChild(returnFiber, childToDelete);
								childToDelete = childToDelete.sibling;
							}
							return null;
						}
						function mapRemainingChildren(returnFiber, currentFirstChild) {
							var existingChildren = /* @__PURE__ */ new Map();
							var existingChild = currentFirstChild;
							while (existingChild !== null) {
								if (existingChild.key !== null) {
									existingChildren.set(existingChild.key, existingChild);
								} else {
									existingChildren.set(existingChild.index, existingChild);
								}
								existingChild = existingChild.sibling;
							}
							return existingChildren;
						}
						function useFiber(fiber, pendingProps) {
							var clone = createWorkInProgress(fiber, pendingProps);
							clone.index = 0;
							clone.sibling = null;
							return clone;
						}
						function placeChild(newFiber, lastPlacedIndex, newIndex) {
							newFiber.index = newIndex;
							if (!shouldTrackSideEffects) {
								return lastPlacedIndex;
							}
							var current2 = newFiber.alternate;
							if (current2 !== null) {
								var oldIndex = current2.index;
								if (oldIndex < lastPlacedIndex) {
									newFiber.flags = Placement;
									return lastPlacedIndex;
								} else {
									return oldIndex;
								}
							} else {
								newFiber.flags = Placement;
								return lastPlacedIndex;
							}
						}
						function placeSingleChild(newFiber) {
							if (shouldTrackSideEffects && newFiber.alternate === null) {
								newFiber.flags = Placement;
							}
							return newFiber;
						}
						function updateTextNode(returnFiber, current2, textContent, lanes) {
							if (current2 === null || current2.tag !== HostText) {
								var created = createFiberFromText(textContent, returnFiber.mode, lanes);
								created.return = returnFiber;
								return created;
							} else {
								var existing = useFiber(current2, textContent);
								existing.return = returnFiber;
								return existing;
							}
						}
						function updateElement(returnFiber, current2, element, lanes) {
							if (current2 !== null) {
								if (current2.elementType === element.type || isCompatibleFamilyForHotReloading(current2, element)) {
									var existing = useFiber(current2, element.props);
									existing.ref = coerceRef(returnFiber, current2, element);
									existing.return = returnFiber;
									{
										existing._debugSource = element._source;
										existing._debugOwner = element._owner;
									}
									return existing;
								}
							}
							var created = createFiberFromElement(element, returnFiber.mode, lanes);
							created.ref = coerceRef(returnFiber, current2, element);
							created.return = returnFiber;
							return created;
						}
						function updatePortal(returnFiber, current2, portal, lanes) {
							if (
								current2 === null ||
								current2.tag !== HostPortal ||
								current2.stateNode.containerInfo !== portal.containerInfo ||
								current2.stateNode.implementation !== portal.implementation
							) {
								var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
								created.return = returnFiber;
								return created;
							} else {
								var existing = useFiber(current2, portal.children || []);
								existing.return = returnFiber;
								return existing;
							}
						}
						function updateFragment2(returnFiber, current2, fragment, lanes, key) {
							if (current2 === null || current2.tag !== Fragment) {
								var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
								created.return = returnFiber;
								return created;
							} else {
								var existing = useFiber(current2, fragment);
								existing.return = returnFiber;
								return existing;
							}
						}
						function createChild(returnFiber, newChild, lanes) {
							if (typeof newChild === 'string' || typeof newChild === 'number') {
								var created = createFiberFromText('' + newChild, returnFiber.mode, lanes);
								created.return = returnFiber;
								return created;
							}
							if (typeof newChild === 'object' && newChild !== null) {
								switch (newChild.$$typeof) {
									case REACT_ELEMENT_TYPE: {
										var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);
										_created.ref = coerceRef(returnFiber, null, newChild);
										_created.return = returnFiber;
										return _created;
									}
									case REACT_PORTAL_TYPE: {
										var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);
										_created2.return = returnFiber;
										return _created2;
									}
								}
								if (isArray$1(newChild) || getIteratorFn(newChild)) {
									var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);
									_created3.return = returnFiber;
									return _created3;
								}
								throwOnInvalidObjectType(returnFiber, newChild);
							}
							{
								if (typeof newChild === 'function') {
									warnOnFunctionType(returnFiber);
								}
							}
							return null;
						}
						function updateSlot(returnFiber, oldFiber, newChild, lanes) {
							var key = oldFiber !== null ? oldFiber.key : null;
							if (typeof newChild === 'string' || typeof newChild === 'number') {
								if (key !== null) {
									return null;
								}
								return updateTextNode(returnFiber, oldFiber, '' + newChild, lanes);
							}
							if (typeof newChild === 'object' && newChild !== null) {
								switch (newChild.$$typeof) {
									case REACT_ELEMENT_TYPE: {
										if (newChild.key === key) {
											if (newChild.type === REACT_FRAGMENT_TYPE) {
												return updateFragment2(returnFiber, oldFiber, newChild.props.children, lanes, key);
											}
											return updateElement(returnFiber, oldFiber, newChild, lanes);
										} else {
											return null;
										}
									}
									case REACT_PORTAL_TYPE: {
										if (newChild.key === key) {
											return updatePortal(returnFiber, oldFiber, newChild, lanes);
										} else {
											return null;
										}
									}
								}
								if (isArray$1(newChild) || getIteratorFn(newChild)) {
									if (key !== null) {
										return null;
									}
									return updateFragment2(returnFiber, oldFiber, newChild, lanes, null);
								}
								throwOnInvalidObjectType(returnFiber, newChild);
							}
							{
								if (typeof newChild === 'function') {
									warnOnFunctionType(returnFiber);
								}
							}
							return null;
						}
						function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
							if (typeof newChild === 'string' || typeof newChild === 'number') {
								var matchedFiber = existingChildren.get(newIdx) || null;
								return updateTextNode(returnFiber, matchedFiber, '' + newChild, lanes);
							}
							if (typeof newChild === 'object' && newChild !== null) {
								switch (newChild.$$typeof) {
									case REACT_ELEMENT_TYPE: {
										var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
										if (newChild.type === REACT_FRAGMENT_TYPE) {
											return updateFragment2(returnFiber, _matchedFiber, newChild.props.children, lanes, newChild.key);
										}
										return updateElement(returnFiber, _matchedFiber, newChild, lanes);
									}
									case REACT_PORTAL_TYPE: {
										var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
										return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
									}
								}
								if (isArray$1(newChild) || getIteratorFn(newChild)) {
									var _matchedFiber3 = existingChildren.get(newIdx) || null;
									return updateFragment2(returnFiber, _matchedFiber3, newChild, lanes, null);
								}
								throwOnInvalidObjectType(returnFiber, newChild);
							}
							{
								if (typeof newChild === 'function') {
									warnOnFunctionType(returnFiber);
								}
							}
							return null;
						}
						function warnOnInvalidKey(child, knownKeys, returnFiber) {
							{
								if (typeof child !== 'object' || child === null) {
									return knownKeys;
								}
								switch (child.$$typeof) {
									case REACT_ELEMENT_TYPE:
									case REACT_PORTAL_TYPE:
										warnForMissingKey(child, returnFiber);
										var key = child.key;
										if (typeof key !== 'string') {
											break;
										}
										if (knownKeys === null) {
											knownKeys = /* @__PURE__ */ new Set();
											knownKeys.add(key);
											break;
										}
										if (!knownKeys.has(key)) {
											knownKeys.add(key);
											break;
										}
										error(
											'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.',
											key
										);
										break;
								}
							}
							return knownKeys;
						}
						function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
							{
								var knownKeys = null;
								for (var i2 = 0; i2 < newChildren.length; i2++) {
									var child = newChildren[i2];
									knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
								}
							}
							var resultingFirstChild = null;
							var previousNewFiber = null;
							var oldFiber = currentFirstChild;
							var lastPlacedIndex = 0;
							var newIdx = 0;
							var nextOldFiber = null;
							for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
								if (oldFiber.index > newIdx) {
									nextOldFiber = oldFiber;
									oldFiber = null;
								} else {
									nextOldFiber = oldFiber.sibling;
								}
								var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
								if (newFiber === null) {
									if (oldFiber === null) {
										oldFiber = nextOldFiber;
									}
									break;
								}
								if (shouldTrackSideEffects) {
									if (oldFiber && newFiber.alternate === null) {
										deleteChild(returnFiber, oldFiber);
									}
								}
								lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
								if (previousNewFiber === null) {
									resultingFirstChild = newFiber;
								} else {
									previousNewFiber.sibling = newFiber;
								}
								previousNewFiber = newFiber;
								oldFiber = nextOldFiber;
							}
							if (newIdx === newChildren.length) {
								deleteRemainingChildren(returnFiber, oldFiber);
								return resultingFirstChild;
							}
							if (oldFiber === null) {
								for (; newIdx < newChildren.length; newIdx++) {
									var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);
									if (_newFiber === null) {
										continue;
									}
									lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
									if (previousNewFiber === null) {
										resultingFirstChild = _newFiber;
									} else {
										previousNewFiber.sibling = _newFiber;
									}
									previousNewFiber = _newFiber;
								}
								return resultingFirstChild;
							}
							var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
							for (; newIdx < newChildren.length; newIdx++) {
								var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);
								if (_newFiber2 !== null) {
									if (shouldTrackSideEffects) {
										if (_newFiber2.alternate !== null) {
											existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
										}
									}
									lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
									if (previousNewFiber === null) {
										resultingFirstChild = _newFiber2;
									} else {
										previousNewFiber.sibling = _newFiber2;
									}
									previousNewFiber = _newFiber2;
								}
							}
							if (shouldTrackSideEffects) {
								existingChildren.forEach(function (child2) {
									return deleteChild(returnFiber, child2);
								});
							}
							return resultingFirstChild;
						}
						function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
							var iteratorFn = getIteratorFn(newChildrenIterable);
							if (!(typeof iteratorFn === 'function')) {
								{
									throw Error(
										'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
							{
								if (typeof Symbol === 'function' && newChildrenIterable[Symbol.toStringTag] === 'Generator') {
									if (!didWarnAboutGenerators) {
										error(
											'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
										);
									}
									didWarnAboutGenerators = true;
								}
								if (newChildrenIterable.entries === iteratorFn) {
									if (!didWarnAboutMaps) {
										error('Using Maps as children is not supported. Use an array of keyed ReactElements instead.');
									}
									didWarnAboutMaps = true;
								}
								var _newChildren = iteratorFn.call(newChildrenIterable);
								if (_newChildren) {
									var knownKeys = null;
									var _step = _newChildren.next();
									for (; !_step.done; _step = _newChildren.next()) {
										var child = _step.value;
										knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
									}
								}
							}
							var newChildren = iteratorFn.call(newChildrenIterable);
							if (!(newChildren != null)) {
								{
									throw Error('An iterable object provided no iterator.');
								}
							}
							var resultingFirstChild = null;
							var previousNewFiber = null;
							var oldFiber = currentFirstChild;
							var lastPlacedIndex = 0;
							var newIdx = 0;
							var nextOldFiber = null;
							var step = newChildren.next();
							for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
								if (oldFiber.index > newIdx) {
									nextOldFiber = oldFiber;
									oldFiber = null;
								} else {
									nextOldFiber = oldFiber.sibling;
								}
								var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
								if (newFiber === null) {
									if (oldFiber === null) {
										oldFiber = nextOldFiber;
									}
									break;
								}
								if (shouldTrackSideEffects) {
									if (oldFiber && newFiber.alternate === null) {
										deleteChild(returnFiber, oldFiber);
									}
								}
								lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
								if (previousNewFiber === null) {
									resultingFirstChild = newFiber;
								} else {
									previousNewFiber.sibling = newFiber;
								}
								previousNewFiber = newFiber;
								oldFiber = nextOldFiber;
							}
							if (step.done) {
								deleteRemainingChildren(returnFiber, oldFiber);
								return resultingFirstChild;
							}
							if (oldFiber === null) {
								for (; !step.done; newIdx++, step = newChildren.next()) {
									var _newFiber3 = createChild(returnFiber, step.value, lanes);
									if (_newFiber3 === null) {
										continue;
									}
									lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
									if (previousNewFiber === null) {
										resultingFirstChild = _newFiber3;
									} else {
										previousNewFiber.sibling = _newFiber3;
									}
									previousNewFiber = _newFiber3;
								}
								return resultingFirstChild;
							}
							var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
							for (; !step.done; newIdx++, step = newChildren.next()) {
								var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);
								if (_newFiber4 !== null) {
									if (shouldTrackSideEffects) {
										if (_newFiber4.alternate !== null) {
											existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
										}
									}
									lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
									if (previousNewFiber === null) {
										resultingFirstChild = _newFiber4;
									} else {
										previousNewFiber.sibling = _newFiber4;
									}
									previousNewFiber = _newFiber4;
								}
							}
							if (shouldTrackSideEffects) {
								existingChildren.forEach(function (child2) {
									return deleteChild(returnFiber, child2);
								});
							}
							return resultingFirstChild;
						}
						function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
							if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
								deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
								var existing = useFiber(currentFirstChild, textContent);
								existing.return = returnFiber;
								return existing;
							}
							deleteRemainingChildren(returnFiber, currentFirstChild);
							var created = createFiberFromText(textContent, returnFiber.mode, lanes);
							created.return = returnFiber;
							return created;
						}
						function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
							var key = element.key;
							var child = currentFirstChild;
							while (child !== null) {
								if (child.key === key) {
									switch (child.tag) {
										case Fragment: {
											if (element.type === REACT_FRAGMENT_TYPE) {
												deleteRemainingChildren(returnFiber, child.sibling);
												var existing = useFiber(child, element.props.children);
												existing.return = returnFiber;
												{
													existing._debugSource = element._source;
													existing._debugOwner = element._owner;
												}
												return existing;
											}
											break;
										}
										case Block:
										default: {
											if (child.elementType === element.type || isCompatibleFamilyForHotReloading(child, element)) {
												deleteRemainingChildren(returnFiber, child.sibling);
												var _existing3 = useFiber(child, element.props);
												_existing3.ref = coerceRef(returnFiber, child, element);
												_existing3.return = returnFiber;
												{
													_existing3._debugSource = element._source;
													_existing3._debugOwner = element._owner;
												}
												return _existing3;
											}
											break;
										}
									}
									deleteRemainingChildren(returnFiber, child);
									break;
								} else {
									deleteChild(returnFiber, child);
								}
								child = child.sibling;
							}
							if (element.type === REACT_FRAGMENT_TYPE) {
								var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
								created.return = returnFiber;
								return created;
							} else {
								var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);
								_created4.ref = coerceRef(returnFiber, currentFirstChild, element);
								_created4.return = returnFiber;
								return _created4;
							}
						}
						function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
							var key = portal.key;
							var child = currentFirstChild;
							while (child !== null) {
								if (child.key === key) {
									if (
										child.tag === HostPortal &&
										child.stateNode.containerInfo === portal.containerInfo &&
										child.stateNode.implementation === portal.implementation
									) {
										deleteRemainingChildren(returnFiber, child.sibling);
										var existing = useFiber(child, portal.children || []);
										existing.return = returnFiber;
										return existing;
									} else {
										deleteRemainingChildren(returnFiber, child);
										break;
									}
								} else {
									deleteChild(returnFiber, child);
								}
								child = child.sibling;
							}
							var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
							created.return = returnFiber;
							return created;
						}
						function reconcileChildFibers2(returnFiber, currentFirstChild, newChild, lanes) {
							var isUnkeyedTopLevelFragment =
								typeof newChild === 'object' &&
								newChild !== null &&
								newChild.type === REACT_FRAGMENT_TYPE &&
								newChild.key === null;
							if (isUnkeyedTopLevelFragment) {
								newChild = newChild.props.children;
							}
							var isObject = typeof newChild === 'object' && newChild !== null;
							if (isObject) {
								switch (newChild.$$typeof) {
									case REACT_ELEMENT_TYPE:
										return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
									case REACT_PORTAL_TYPE:
										return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));
								}
							}
							if (typeof newChild === 'string' || typeof newChild === 'number') {
								return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, lanes));
							}
							if (isArray$1(newChild)) {
								return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
							}
							if (getIteratorFn(newChild)) {
								return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
							}
							if (isObject) {
								throwOnInvalidObjectType(returnFiber, newChild);
							}
							{
								if (typeof newChild === 'function') {
									warnOnFunctionType(returnFiber);
								}
							}
							if (typeof newChild === 'undefined' && !isUnkeyedTopLevelFragment) {
								switch (returnFiber.tag) {
									case ClassComponent: {
										{
											var instance = returnFiber.stateNode;
											if (instance.render._isMockFunction) {
												break;
											}
										}
									}
									case Block:
									case FunctionComponent:
									case ForwardRef:
									case SimpleMemoComponent: {
										{
											{
												throw Error(
													(getComponentName(returnFiber.type) || 'Component') +
														'(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.'
												);
											}
										}
									}
								}
							}
							return deleteRemainingChildren(returnFiber, currentFirstChild);
						}
						return reconcileChildFibers2;
					}
					var reconcileChildFibers = ChildReconciler(true);
					var mountChildFibers = ChildReconciler(false);
					function cloneChildFibers(current2, workInProgress2) {
						if (!(current2 === null || workInProgress2.child === current2.child)) {
							{
								throw Error('Resuming work not yet implemented.');
							}
						}
						if (workInProgress2.child === null) {
							return;
						}
						var currentChild = workInProgress2.child;
						var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
						workInProgress2.child = newChild;
						newChild.return = workInProgress2;
						while (currentChild.sibling !== null) {
							currentChild = currentChild.sibling;
							newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
							newChild.return = workInProgress2;
						}
						newChild.sibling = null;
					}
					function resetChildFibers(workInProgress2, lanes) {
						var child = workInProgress2.child;
						while (child !== null) {
							resetWorkInProgress(child, lanes);
							child = child.sibling;
						}
					}
					var NO_CONTEXT = {};
					var contextStackCursor$1 = createCursor(NO_CONTEXT);
					var contextFiberStackCursor = createCursor(NO_CONTEXT);
					var rootInstanceStackCursor = createCursor(NO_CONTEXT);
					function requiredContext(c) {
						if (!(c !== NO_CONTEXT)) {
							{
								throw Error(
									'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
						return c;
					}
					function getRootHostContainer() {
						var rootInstance = requiredContext(rootInstanceStackCursor.current);
						return rootInstance;
					}
					function pushHostContainer(fiber, nextRootInstance) {
						push(rootInstanceStackCursor, nextRootInstance, fiber);
						push(contextFiberStackCursor, fiber, fiber);
						push(contextStackCursor$1, NO_CONTEXT, fiber);
						var nextRootContext = getRootHostContext(nextRootInstance);
						pop(contextStackCursor$1, fiber);
						push(contextStackCursor$1, nextRootContext, fiber);
					}
					function popHostContainer(fiber) {
						pop(contextStackCursor$1, fiber);
						pop(contextFiberStackCursor, fiber);
						pop(rootInstanceStackCursor, fiber);
					}
					function getHostContext() {
						var context = requiredContext(contextStackCursor$1.current);
						return context;
					}
					function pushHostContext(fiber) {
						var rootInstance = requiredContext(rootInstanceStackCursor.current);
						var context = requiredContext(contextStackCursor$1.current);
						var nextContext = getChildHostContext(context, fiber.type);
						if (context === nextContext) {
							return;
						}
						push(contextFiberStackCursor, fiber, fiber);
						push(contextStackCursor$1, nextContext, fiber);
					}
					function popHostContext(fiber) {
						if (contextFiberStackCursor.current !== fiber) {
							return;
						}
						pop(contextStackCursor$1, fiber);
						pop(contextFiberStackCursor, fiber);
					}
					var DefaultSuspenseContext = 0;
					var SubtreeSuspenseContextMask = 1;
					var InvisibleParentSuspenseContext = 1;
					var ForceSuspenseFallback = 2;
					var suspenseStackCursor = createCursor(DefaultSuspenseContext);
					function hasSuspenseContext(parentContext, flag) {
						return (parentContext & flag) !== 0;
					}
					function setDefaultShallowSuspenseContext(parentContext) {
						return parentContext & SubtreeSuspenseContextMask;
					}
					function setShallowSuspenseContext(parentContext, shallowContext) {
						return (parentContext & SubtreeSuspenseContextMask) | shallowContext;
					}
					function addSubtreeSuspenseContext(parentContext, subtreeContext) {
						return parentContext | subtreeContext;
					}
					function pushSuspenseContext(fiber, newContext) {
						push(suspenseStackCursor, newContext, fiber);
					}
					function popSuspenseContext(fiber) {
						pop(suspenseStackCursor, fiber);
					}
					function shouldCaptureSuspense(workInProgress2, hasInvisibleParent) {
						var nextState = workInProgress2.memoizedState;
						if (nextState !== null) {
							if (nextState.dehydrated !== null) {
								return true;
							}
							return false;
						}
						var props = workInProgress2.memoizedProps;
						if (props.fallback === void 0) {
							return false;
						}
						if (props.unstable_avoidThisFallback !== true) {
							return true;
						}
						if (hasInvisibleParent) {
							return false;
						}
						return true;
					}
					function findFirstSuspended(row) {
						var node = row;
						while (node !== null) {
							if (node.tag === SuspenseComponent) {
								var state = node.memoizedState;
								if (state !== null) {
									var dehydrated = state.dehydrated;
									if (
										dehydrated === null ||
										isSuspenseInstancePending(dehydrated) ||
										isSuspenseInstanceFallback(dehydrated)
									) {
										return node;
									}
								}
							} else if (node.tag === SuspenseListComponent && node.memoizedProps.revealOrder !== void 0) {
								var didSuspend = (node.flags & DidCapture) !== NoFlags;
								if (didSuspend) {
									return node;
								}
							} else if (node.child !== null) {
								node.child.return = node;
								node = node.child;
								continue;
							}
							if (node === row) {
								return null;
							}
							while (node.sibling === null) {
								if (node.return === null || node.return === row) {
									return null;
								}
								node = node.return;
							}
							node.sibling.return = node.return;
							node = node.sibling;
						}
						return null;
					}
					var NoFlags$1 = 0;
					var HasEffect = 1;
					var Layout = 2;
					var Passive$1 = 4;
					var hydrationParentFiber = null;
					var nextHydratableInstance = null;
					var isHydrating = false;
					function enterHydrationState(fiber) {
						var parentInstance = fiber.stateNode.containerInfo;
						nextHydratableInstance = getFirstHydratableChild(parentInstance);
						hydrationParentFiber = fiber;
						isHydrating = true;
						return true;
					}
					function deleteHydratableInstance(returnFiber, instance) {
						{
							switch (returnFiber.tag) {
								case HostRoot:
									didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
									break;
								case HostComponent:
									didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
									break;
							}
						}
						var childToDelete = createFiberFromHostInstanceForDeletion();
						childToDelete.stateNode = instance;
						childToDelete.return = returnFiber;
						childToDelete.flags = Deletion;
						if (returnFiber.lastEffect !== null) {
							returnFiber.lastEffect.nextEffect = childToDelete;
							returnFiber.lastEffect = childToDelete;
						} else {
							returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
						}
					}
					function insertNonHydratedInstance(returnFiber, fiber) {
						fiber.flags = (fiber.flags & ~Hydrating) | Placement;
						{
							switch (returnFiber.tag) {
								case HostRoot: {
									var parentContainer = returnFiber.stateNode.containerInfo;
									switch (fiber.tag) {
										case HostComponent:
											var type = fiber.type;
											var props = fiber.pendingProps;
											didNotFindHydratableContainerInstance(parentContainer, type);
											break;
										case HostText:
											var text = fiber.pendingProps;
											didNotFindHydratableContainerTextInstance(parentContainer, text);
											break;
									}
									break;
								}
								case HostComponent: {
									var parentType = returnFiber.type;
									var parentProps = returnFiber.memoizedProps;
									var parentInstance = returnFiber.stateNode;
									switch (fiber.tag) {
										case HostComponent:
											var _type = fiber.type;
											var _props = fiber.pendingProps;
											didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type);
											break;
										case HostText:
											var _text = fiber.pendingProps;
											didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
											break;
										case SuspenseComponent:
											didNotFindHydratableSuspenseInstance(parentType, parentProps);
											break;
									}
									break;
								}
								default:
									return;
							}
						}
					}
					function tryHydrate(fiber, nextInstance) {
						switch (fiber.tag) {
							case HostComponent: {
								var type = fiber.type;
								var props = fiber.pendingProps;
								var instance = canHydrateInstance(nextInstance, type);
								if (instance !== null) {
									fiber.stateNode = instance;
									return true;
								}
								return false;
							}
							case HostText: {
								var text = fiber.pendingProps;
								var textInstance = canHydrateTextInstance(nextInstance, text);
								if (textInstance !== null) {
									fiber.stateNode = textInstance;
									return true;
								}
								return false;
							}
							case SuspenseComponent: {
								return false;
							}
							default:
								return false;
						}
					}
					function tryToClaimNextHydratableInstance(fiber) {
						if (!isHydrating) {
							return;
						}
						var nextInstance = nextHydratableInstance;
						if (!nextInstance) {
							insertNonHydratedInstance(hydrationParentFiber, fiber);
							isHydrating = false;
							hydrationParentFiber = fiber;
							return;
						}
						var firstAttemptedInstance = nextInstance;
						if (!tryHydrate(fiber, nextInstance)) {
							nextInstance = getNextHydratableSibling(firstAttemptedInstance);
							if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
								insertNonHydratedInstance(hydrationParentFiber, fiber);
								isHydrating = false;
								hydrationParentFiber = fiber;
								return;
							}
							deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
						}
						hydrationParentFiber = fiber;
						nextHydratableInstance = getFirstHydratableChild(nextInstance);
					}
					function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
						var instance = fiber.stateNode;
						var updatePayload = hydrateInstance(
							instance,
							fiber.type,
							fiber.memoizedProps,
							rootContainerInstance,
							hostContext,
							fiber
						);
						fiber.updateQueue = updatePayload;
						if (updatePayload !== null) {
							return true;
						}
						return false;
					}
					function prepareToHydrateHostTextInstance(fiber) {
						var textInstance = fiber.stateNode;
						var textContent = fiber.memoizedProps;
						var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
						{
							if (shouldUpdate) {
								var returnFiber = hydrationParentFiber;
								if (returnFiber !== null) {
									switch (returnFiber.tag) {
										case HostRoot: {
											var parentContainer = returnFiber.stateNode.containerInfo;
											didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
											break;
										}
										case HostComponent: {
											var parentType = returnFiber.type;
											var parentProps = returnFiber.memoizedProps;
											var parentInstance = returnFiber.stateNode;
											didNotMatchHydratedTextInstance(
												parentType,
												parentProps,
												parentInstance,
												textInstance,
												textContent
											);
											break;
										}
									}
								}
							}
						}
						return shouldUpdate;
					}
					function skipPastDehydratedSuspenseInstance(fiber) {
						var suspenseState = fiber.memoizedState;
						var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
						if (!suspenseInstance) {
							{
								throw Error(
									'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
						return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
					}
					function popToNextHostParent(fiber) {
						var parent = fiber.return;
						while (
							parent !== null &&
							parent.tag !== HostComponent &&
							parent.tag !== HostRoot &&
							parent.tag !== SuspenseComponent
						) {
							parent = parent.return;
						}
						hydrationParentFiber = parent;
					}
					function popHydrationState(fiber) {
						if (fiber !== hydrationParentFiber) {
							return false;
						}
						if (!isHydrating) {
							popToNextHostParent(fiber);
							isHydrating = true;
							return false;
						}
						var type = fiber.type;
						if (
							fiber.tag !== HostComponent ||
							(type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps))
						) {
							var nextInstance = nextHydratableInstance;
							while (nextInstance) {
								deleteHydratableInstance(fiber, nextInstance);
								nextInstance = getNextHydratableSibling(nextInstance);
							}
						}
						popToNextHostParent(fiber);
						if (fiber.tag === SuspenseComponent) {
							nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
						} else {
							nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
						}
						return true;
					}
					function resetHydrationState() {
						hydrationParentFiber = null;
						nextHydratableInstance = null;
						isHydrating = false;
					}
					function getIsHydrating() {
						return isHydrating;
					}
					var workInProgressSources = [];
					var rendererSigil$1;
					{
						rendererSigil$1 = {};
					}
					function markSourceAsDirty(mutableSource) {
						workInProgressSources.push(mutableSource);
					}
					function resetWorkInProgressVersions() {
						for (var i2 = 0; i2 < workInProgressSources.length; i2++) {
							var mutableSource = workInProgressSources[i2];
							{
								mutableSource._workInProgressVersionPrimary = null;
							}
						}
						workInProgressSources.length = 0;
					}
					function getWorkInProgressVersion(mutableSource) {
						{
							return mutableSource._workInProgressVersionPrimary;
						}
					}
					function setWorkInProgressVersion(mutableSource, version) {
						{
							mutableSource._workInProgressVersionPrimary = version;
						}
						workInProgressSources.push(mutableSource);
					}
					function warnAboutMultipleRenderersDEV(mutableSource) {
						{
							{
								if (mutableSource._currentPrimaryRenderer == null) {
									mutableSource._currentPrimaryRenderer = rendererSigil$1;
								} else if (mutableSource._currentPrimaryRenderer !== rendererSigil$1) {
									error(
										'Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.'
									);
								}
							}
						}
					}
					var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
						ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
					var didWarnAboutMismatchedHooksForComponent;
					var didWarnAboutUseOpaqueIdentifier;
					{
						didWarnAboutUseOpaqueIdentifier = {};
						didWarnAboutMismatchedHooksForComponent = /* @__PURE__ */ new Set();
					}
					var renderLanes = NoLanes;
					var currentlyRenderingFiber$1 = null;
					var currentHook = null;
					var workInProgressHook = null;
					var didScheduleRenderPhaseUpdate = false;
					var didScheduleRenderPhaseUpdateDuringThisPass = false;
					var RE_RENDER_LIMIT = 25;
					var currentHookNameInDev = null;
					var hookTypesDev = null;
					var hookTypesUpdateIndexDev = -1;
					var ignorePreviousDependencies = false;
					function mountHookTypesDev() {
						{
							var hookName = currentHookNameInDev;
							if (hookTypesDev === null) {
								hookTypesDev = [hookName];
							} else {
								hookTypesDev.push(hookName);
							}
						}
					}
					function updateHookTypesDev() {
						{
							var hookName = currentHookNameInDev;
							if (hookTypesDev !== null) {
								hookTypesUpdateIndexDev++;
								if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
									warnOnHookMismatchInDev(hookName);
								}
							}
						}
					}
					function checkDepsAreArrayDev(deps) {
						{
							if (deps !== void 0 && deps !== null && !Array.isArray(deps)) {
								error(
									'%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
									currentHookNameInDev,
									typeof deps
								);
							}
						}
					}
					function warnOnHookMismatchInDev(currentHookName) {
						{
							var componentName = getComponentName(currentlyRenderingFiber$1.type);
							if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
								didWarnAboutMismatchedHooksForComponent.add(componentName);
								if (hookTypesDev !== null) {
									var table = '';
									var secondColumnStart = 30;
									for (var i2 = 0; i2 <= hookTypesUpdateIndexDev; i2++) {
										var oldHookName = hookTypesDev[i2];
										var newHookName = i2 === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
										var row = i2 + 1 + '. ' + oldHookName;
										while (row.length < secondColumnStart) {
											row += ' ';
										}
										row += newHookName + '\n';
										table += row;
									}
									error(
										'React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n',
										componentName,
										table
									);
								}
							}
						}
					}
					function throwInvalidHookError() {
						{
							{
								throw Error(
									'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
								);
							}
						}
					}
					function areHookInputsEqual(nextDeps, prevDeps) {
						{
							if (ignorePreviousDependencies) {
								return false;
							}
						}
						if (prevDeps === null) {
							{
								error(
									'%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
									currentHookNameInDev
								);
							}
							return false;
						}
						{
							if (nextDeps.length !== prevDeps.length) {
								error(
									'The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s',
									currentHookNameInDev,
									'[' + prevDeps.join(', ') + ']',
									'[' + nextDeps.join(', ') + ']'
								);
							}
						}
						for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
							if (objectIs(nextDeps[i2], prevDeps[i2])) {
								continue;
							}
							return false;
						}
						return true;
					}
					function renderWithHooks(current2, workInProgress2, Component, props, secondArg, nextRenderLanes) {
						renderLanes = nextRenderLanes;
						currentlyRenderingFiber$1 = workInProgress2;
						{
							hookTypesDev = current2 !== null ? current2._debugHookTypes : null;
							hookTypesUpdateIndexDev = -1;
							ignorePreviousDependencies = current2 !== null && current2.type !== workInProgress2.type;
						}
						workInProgress2.memoizedState = null;
						workInProgress2.updateQueue = null;
						workInProgress2.lanes = NoLanes;
						{
							if (current2 !== null && current2.memoizedState !== null) {
								ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
							} else if (hookTypesDev !== null) {
								ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
							} else {
								ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
							}
						}
						var children = Component(props, secondArg);
						if (didScheduleRenderPhaseUpdateDuringThisPass) {
							var numberOfReRenders = 0;
							do {
								didScheduleRenderPhaseUpdateDuringThisPass = false;
								if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
									{
										throw Error('Too many re-renders. React limits the number of renders to prevent an infinite loop.');
									}
								}
								numberOfReRenders += 1;
								{
									ignorePreviousDependencies = false;
								}
								currentHook = null;
								workInProgressHook = null;
								workInProgress2.updateQueue = null;
								{
									hookTypesUpdateIndexDev = -1;
								}
								ReactCurrentDispatcher$1.current = HooksDispatcherOnRerenderInDEV;
								children = Component(props, secondArg);
							} while (didScheduleRenderPhaseUpdateDuringThisPass);
						}
						ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
						{
							workInProgress2._debugHookTypes = hookTypesDev;
						}
						var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
						renderLanes = NoLanes;
						currentlyRenderingFiber$1 = null;
						currentHook = null;
						workInProgressHook = null;
						{
							currentHookNameInDev = null;
							hookTypesDev = null;
							hookTypesUpdateIndexDev = -1;
						}
						didScheduleRenderPhaseUpdate = false;
						if (!!didRenderTooFewHooks) {
							{
								throw Error(
									'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
								);
							}
						}
						return children;
					}
					function bailoutHooks(current2, workInProgress2, lanes) {
						workInProgress2.updateQueue = current2.updateQueue;
						workInProgress2.flags &= ~(Passive | Update);
						current2.lanes = removeLanes(current2.lanes, lanes);
					}
					function resetHooksAfterThrow() {
						ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
						if (didScheduleRenderPhaseUpdate) {
							var hook = currentlyRenderingFiber$1.memoizedState;
							while (hook !== null) {
								var queue = hook.queue;
								if (queue !== null) {
									queue.pending = null;
								}
								hook = hook.next;
							}
							didScheduleRenderPhaseUpdate = false;
						}
						renderLanes = NoLanes;
						currentlyRenderingFiber$1 = null;
						currentHook = null;
						workInProgressHook = null;
						{
							hookTypesDev = null;
							hookTypesUpdateIndexDev = -1;
							currentHookNameInDev = null;
							isUpdatingOpaqueValueInRenderPhase = false;
						}
						didScheduleRenderPhaseUpdateDuringThisPass = false;
					}
					function mountWorkInProgressHook() {
						var hook = {
							memoizedState: null,
							baseState: null,
							baseQueue: null,
							queue: null,
							next: null
						};
						if (workInProgressHook === null) {
							currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
						} else {
							workInProgressHook = workInProgressHook.next = hook;
						}
						return workInProgressHook;
					}
					function updateWorkInProgressHook() {
						var nextCurrentHook;
						if (currentHook === null) {
							var current2 = currentlyRenderingFiber$1.alternate;
							if (current2 !== null) {
								nextCurrentHook = current2.memoizedState;
							} else {
								nextCurrentHook = null;
							}
						} else {
							nextCurrentHook = currentHook.next;
						}
						var nextWorkInProgressHook;
						if (workInProgressHook === null) {
							nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
						} else {
							nextWorkInProgressHook = workInProgressHook.next;
						}
						if (nextWorkInProgressHook !== null) {
							workInProgressHook = nextWorkInProgressHook;
							nextWorkInProgressHook = workInProgressHook.next;
							currentHook = nextCurrentHook;
						} else {
							if (!(nextCurrentHook !== null)) {
								{
									throw Error('Rendered more hooks than during the previous render.');
								}
							}
							currentHook = nextCurrentHook;
							var newHook = {
								memoizedState: currentHook.memoizedState,
								baseState: currentHook.baseState,
								baseQueue: currentHook.baseQueue,
								queue: currentHook.queue,
								next: null
							};
							if (workInProgressHook === null) {
								currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
							} else {
								workInProgressHook = workInProgressHook.next = newHook;
							}
						}
						return workInProgressHook;
					}
					function createFunctionComponentUpdateQueue() {
						return {
							lastEffect: null
						};
					}
					function basicStateReducer(state, action) {
						return typeof action === 'function' ? action(state) : action;
					}
					function mountReducer(reducer, initialArg, init) {
						var hook = mountWorkInProgressHook();
						var initialState;
						if (init !== void 0) {
							initialState = init(initialArg);
						} else {
							initialState = initialArg;
						}
						hook.memoizedState = hook.baseState = initialState;
						var queue = (hook.queue = {
							pending: null,
							dispatch: null,
							lastRenderedReducer: reducer,
							lastRenderedState: initialState
						});
						var dispatch = (queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue));
						return [hook.memoizedState, dispatch];
					}
					function updateReducer(reducer, initialArg, init) {
						var hook = updateWorkInProgressHook();
						var queue = hook.queue;
						if (!(queue !== null)) {
							{
								throw Error('Should have a queue. This is likely a bug in React. Please file an issue.');
							}
						}
						queue.lastRenderedReducer = reducer;
						var current2 = currentHook;
						var baseQueue = current2.baseQueue;
						var pendingQueue = queue.pending;
						if (pendingQueue !== null) {
							if (baseQueue !== null) {
								var baseFirst = baseQueue.next;
								var pendingFirst = pendingQueue.next;
								baseQueue.next = pendingFirst;
								pendingQueue.next = baseFirst;
							}
							{
								if (current2.baseQueue !== baseQueue) {
									error('Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.');
								}
							}
							current2.baseQueue = baseQueue = pendingQueue;
							queue.pending = null;
						}
						if (baseQueue !== null) {
							var first = baseQueue.next;
							var newState = current2.baseState;
							var newBaseState = null;
							var newBaseQueueFirst = null;
							var newBaseQueueLast = null;
							var update = first;
							do {
								var updateLane = update.lane;
								if (!isSubsetOfLanes(renderLanes, updateLane)) {
									var clone = {
										lane: updateLane,
										action: update.action,
										eagerReducer: update.eagerReducer,
										eagerState: update.eagerState,
										next: null
									};
									if (newBaseQueueLast === null) {
										newBaseQueueFirst = newBaseQueueLast = clone;
										newBaseState = newState;
									} else {
										newBaseQueueLast = newBaseQueueLast.next = clone;
									}
									currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);
									markSkippedUpdateLanes(updateLane);
								} else {
									if (newBaseQueueLast !== null) {
										var _clone = {
											lane: NoLane,
											action: update.action,
											eagerReducer: update.eagerReducer,
											eagerState: update.eagerState,
											next: null
										};
										newBaseQueueLast = newBaseQueueLast.next = _clone;
									}
									if (update.eagerReducer === reducer) {
										newState = update.eagerState;
									} else {
										var action = update.action;
										newState = reducer(newState, action);
									}
								}
								update = update.next;
							} while (update !== null && update !== first);
							if (newBaseQueueLast === null) {
								newBaseState = newState;
							} else {
								newBaseQueueLast.next = newBaseQueueFirst;
							}
							if (!objectIs(newState, hook.memoizedState)) {
								markWorkInProgressReceivedUpdate();
							}
							hook.memoizedState = newState;
							hook.baseState = newBaseState;
							hook.baseQueue = newBaseQueueLast;
							queue.lastRenderedState = newState;
						}
						var dispatch = queue.dispatch;
						return [hook.memoizedState, dispatch];
					}
					function rerenderReducer(reducer, initialArg, init) {
						var hook = updateWorkInProgressHook();
						var queue = hook.queue;
						if (!(queue !== null)) {
							{
								throw Error('Should have a queue. This is likely a bug in React. Please file an issue.');
							}
						}
						queue.lastRenderedReducer = reducer;
						var dispatch = queue.dispatch;
						var lastRenderPhaseUpdate = queue.pending;
						var newState = hook.memoizedState;
						if (lastRenderPhaseUpdate !== null) {
							queue.pending = null;
							var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
							var update = firstRenderPhaseUpdate;
							do {
								var action = update.action;
								newState = reducer(newState, action);
								update = update.next;
							} while (update !== firstRenderPhaseUpdate);
							if (!objectIs(newState, hook.memoizedState)) {
								markWorkInProgressReceivedUpdate();
							}
							hook.memoizedState = newState;
							if (hook.baseQueue === null) {
								hook.baseState = newState;
							}
							queue.lastRenderedState = newState;
						}
						return [newState, dispatch];
					}
					function readFromUnsubcribedMutableSource(root2, source, getSnapshot) {
						{
							warnAboutMultipleRenderersDEV(source);
						}
						var getVersion = source._getVersion;
						var version = getVersion(source._source);
						var isSafeToReadFromSource = false;
						var currentRenderVersion = getWorkInProgressVersion(source);
						if (currentRenderVersion !== null) {
							isSafeToReadFromSource = currentRenderVersion === version;
						} else {
							isSafeToReadFromSource = isSubsetOfLanes(renderLanes, root2.mutableReadLanes);
							if (isSafeToReadFromSource) {
								setWorkInProgressVersion(source, version);
							}
						}
						if (isSafeToReadFromSource) {
							var snapshot = getSnapshot(source._source);
							{
								if (typeof snapshot === 'function') {
									error(
										'Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing.'
									);
								}
							}
							return snapshot;
						} else {
							markSourceAsDirty(source);
							{
								{
									throw Error(
										'Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.'
									);
								}
							}
						}
					}
					function useMutableSource(hook, source, getSnapshot, subscribe) {
						var root2 = getWorkInProgressRoot();
						if (!(root2 !== null)) {
							{
								throw Error('Expected a work-in-progress root. This is a bug in React. Please file an issue.');
							}
						}
						var getVersion = source._getVersion;
						var version = getVersion(source._source);
						var dispatcher = ReactCurrentDispatcher$1.current;
						var _dispatcher$useState = dispatcher.useState(function () {
								return readFromUnsubcribedMutableSource(root2, source, getSnapshot);
							}),
							currentSnapshot = _dispatcher$useState[0],
							setSnapshot = _dispatcher$useState[1];
						var snapshot = currentSnapshot;
						var stateHook = workInProgressHook;
						var memoizedState = hook.memoizedState;
						var refs = memoizedState.refs;
						var prevGetSnapshot = refs.getSnapshot;
						var prevSource = memoizedState.source;
						var prevSubscribe = memoizedState.subscribe;
						var fiber = currentlyRenderingFiber$1;
						hook.memoizedState = {
							refs,
							source,
							subscribe
						};
						dispatcher.useEffect(
							function () {
								refs.getSnapshot = getSnapshot;
								refs.setSnapshot = setSnapshot;
								var maybeNewVersion = getVersion(source._source);
								if (!objectIs(version, maybeNewVersion)) {
									var maybeNewSnapshot = getSnapshot(source._source);
									{
										if (typeof maybeNewSnapshot === 'function') {
											error(
												'Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing.'
											);
										}
									}
									if (!objectIs(snapshot, maybeNewSnapshot)) {
										setSnapshot(maybeNewSnapshot);
										var lane = requestUpdateLane(fiber);
										markRootMutableRead(root2, lane);
									}
									markRootEntangled(root2, root2.mutableReadLanes);
								}
							},
							[getSnapshot, source, subscribe]
						);
						dispatcher.useEffect(
							function () {
								var handleChange = function () {
									var latestGetSnapshot = refs.getSnapshot;
									var latestSetSnapshot = refs.setSnapshot;
									try {
										latestSetSnapshot(latestGetSnapshot(source._source));
										var lane = requestUpdateLane(fiber);
										markRootMutableRead(root2, lane);
									} catch (error2) {
										latestSetSnapshot(function () {
											throw error2;
										});
									}
								};
								var unsubscribe = subscribe(source._source, handleChange);
								{
									if (typeof unsubscribe !== 'function') {
										error('Mutable source subscribe function must return an unsubscribe function.');
									}
								}
								return unsubscribe;
							},
							[source, subscribe]
						);
						if (
							!objectIs(prevGetSnapshot, getSnapshot) ||
							!objectIs(prevSource, source) ||
							!objectIs(prevSubscribe, subscribe)
						) {
							var newQueue = {
								pending: null,
								dispatch: null,
								lastRenderedReducer: basicStateReducer,
								lastRenderedState: snapshot
							};
							newQueue.dispatch = setSnapshot = dispatchAction.bind(null, currentlyRenderingFiber$1, newQueue);
							stateHook.queue = newQueue;
							stateHook.baseQueue = null;
							snapshot = readFromUnsubcribedMutableSource(root2, source, getSnapshot);
							stateHook.memoizedState = stateHook.baseState = snapshot;
						}
						return snapshot;
					}
					function mountMutableSource(source, getSnapshot, subscribe) {
						var hook = mountWorkInProgressHook();
						hook.memoizedState = {
							refs: {
								getSnapshot,
								setSnapshot: null
							},
							source,
							subscribe
						};
						return useMutableSource(hook, source, getSnapshot, subscribe);
					}
					function updateMutableSource(source, getSnapshot, subscribe) {
						var hook = updateWorkInProgressHook();
						return useMutableSource(hook, source, getSnapshot, subscribe);
					}
					function mountState(initialState) {
						var hook = mountWorkInProgressHook();
						if (typeof initialState === 'function') {
							initialState = initialState();
						}
						hook.memoizedState = hook.baseState = initialState;
						var queue = (hook.queue = {
							pending: null,
							dispatch: null,
							lastRenderedReducer: basicStateReducer,
							lastRenderedState: initialState
						});
						var dispatch = (queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue));
						return [hook.memoizedState, dispatch];
					}
					function updateState(initialState) {
						return updateReducer(basicStateReducer);
					}
					function rerenderState(initialState) {
						return rerenderReducer(basicStateReducer);
					}
					function pushEffect(tag, create, destroy, deps) {
						var effect = {
							tag,
							create,
							destroy,
							deps,
							next: null
						};
						var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
						if (componentUpdateQueue === null) {
							componentUpdateQueue = createFunctionComponentUpdateQueue();
							currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
							componentUpdateQueue.lastEffect = effect.next = effect;
						} else {
							var lastEffect = componentUpdateQueue.lastEffect;
							if (lastEffect === null) {
								componentUpdateQueue.lastEffect = effect.next = effect;
							} else {
								var firstEffect = lastEffect.next;
								lastEffect.next = effect;
								effect.next = firstEffect;
								componentUpdateQueue.lastEffect = effect;
							}
						}
						return effect;
					}
					function mountRef(initialValue) {
						var hook = mountWorkInProgressHook();
						var ref = {
							current: initialValue
						};
						{
							Object.seal(ref);
						}
						hook.memoizedState = ref;
						return ref;
					}
					function updateRef(initialValue) {
						var hook = updateWorkInProgressHook();
						return hook.memoizedState;
					}
					function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
						var hook = mountWorkInProgressHook();
						var nextDeps = deps === void 0 ? null : deps;
						currentlyRenderingFiber$1.flags |= fiberFlags;
						hook.memoizedState = pushEffect(HasEffect | hookFlags, create, void 0, nextDeps);
					}
					function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
						var hook = updateWorkInProgressHook();
						var nextDeps = deps === void 0 ? null : deps;
						var destroy = void 0;
						if (currentHook !== null) {
							var prevEffect = currentHook.memoizedState;
							destroy = prevEffect.destroy;
							if (nextDeps !== null) {
								var prevDeps = prevEffect.deps;
								if (areHookInputsEqual(nextDeps, prevDeps)) {
									pushEffect(hookFlags, create, destroy, nextDeps);
									return;
								}
							}
						}
						currentlyRenderingFiber$1.flags |= fiberFlags;
						hook.memoizedState = pushEffect(HasEffect | hookFlags, create, destroy, nextDeps);
					}
					function mountEffect(create, deps) {
						{
							if (typeof jest !== 'undefined') {
								warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
							}
						}
						return mountEffectImpl(Update | Passive, Passive$1, create, deps);
					}
					function updateEffect(create, deps) {
						{
							if (typeof jest !== 'undefined') {
								warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
							}
						}
						return updateEffectImpl(Update | Passive, Passive$1, create, deps);
					}
					function mountLayoutEffect(create, deps) {
						return mountEffectImpl(Update, Layout, create, deps);
					}
					function updateLayoutEffect(create, deps) {
						return updateEffectImpl(Update, Layout, create, deps);
					}
					function imperativeHandleEffect(create, ref) {
						if (typeof ref === 'function') {
							var refCallback = ref;
							var _inst = create();
							refCallback(_inst);
							return function () {
								refCallback(null);
							};
						} else if (ref !== null && ref !== void 0) {
							var refObject = ref;
							{
								if (!refObject.hasOwnProperty('current')) {
									error(
										'Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.',
										'an object with keys {' + Object.keys(refObject).join(', ') + '}'
									);
								}
							}
							var _inst2 = create();
							refObject.current = _inst2;
							return function () {
								refObject.current = null;
							};
						}
					}
					function mountImperativeHandle(ref, create, deps) {
						{
							if (typeof create !== 'function') {
								error(
									'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
									create !== null ? typeof create : 'null'
								);
							}
						}
						var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
						return mountEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
					}
					function updateImperativeHandle(ref, create, deps) {
						{
							if (typeof create !== 'function') {
								error(
									'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
									create !== null ? typeof create : 'null'
								);
							}
						}
						var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
						return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
					}
					function mountDebugValue(value, formatterFn) {}
					var updateDebugValue = mountDebugValue;
					function mountCallback(callback, deps) {
						var hook = mountWorkInProgressHook();
						var nextDeps = deps === void 0 ? null : deps;
						hook.memoizedState = [callback, nextDeps];
						return callback;
					}
					function updateCallback(callback, deps) {
						var hook = updateWorkInProgressHook();
						var nextDeps = deps === void 0 ? null : deps;
						var prevState = hook.memoizedState;
						if (prevState !== null) {
							if (nextDeps !== null) {
								var prevDeps = prevState[1];
								if (areHookInputsEqual(nextDeps, prevDeps)) {
									return prevState[0];
								}
							}
						}
						hook.memoizedState = [callback, nextDeps];
						return callback;
					}
					function mountMemo(nextCreate, deps) {
						var hook = mountWorkInProgressHook();
						var nextDeps = deps === void 0 ? null : deps;
						var nextValue = nextCreate();
						hook.memoizedState = [nextValue, nextDeps];
						return nextValue;
					}
					function updateMemo(nextCreate, deps) {
						var hook = updateWorkInProgressHook();
						var nextDeps = deps === void 0 ? null : deps;
						var prevState = hook.memoizedState;
						if (prevState !== null) {
							if (nextDeps !== null) {
								var prevDeps = prevState[1];
								if (areHookInputsEqual(nextDeps, prevDeps)) {
									return prevState[0];
								}
							}
						}
						var nextValue = nextCreate();
						hook.memoizedState = [nextValue, nextDeps];
						return nextValue;
					}
					function mountDeferredValue(value) {
						var _mountState = mountState(value),
							prevValue = _mountState[0],
							setValue = _mountState[1];
						mountEffect(
							function () {
								var prevTransition = ReactCurrentBatchConfig$1.transition;
								ReactCurrentBatchConfig$1.transition = 1;
								try {
									setValue(value);
								} finally {
									ReactCurrentBatchConfig$1.transition = prevTransition;
								}
							},
							[value]
						);
						return prevValue;
					}
					function updateDeferredValue(value) {
						var _updateState = updateState(),
							prevValue = _updateState[0],
							setValue = _updateState[1];
						updateEffect(
							function () {
								var prevTransition = ReactCurrentBatchConfig$1.transition;
								ReactCurrentBatchConfig$1.transition = 1;
								try {
									setValue(value);
								} finally {
									ReactCurrentBatchConfig$1.transition = prevTransition;
								}
							},
							[value]
						);
						return prevValue;
					}
					function rerenderDeferredValue(value) {
						var _rerenderState = rerenderState(),
							prevValue = _rerenderState[0],
							setValue = _rerenderState[1];
						updateEffect(
							function () {
								var prevTransition = ReactCurrentBatchConfig$1.transition;
								ReactCurrentBatchConfig$1.transition = 1;
								try {
									setValue(value);
								} finally {
									ReactCurrentBatchConfig$1.transition = prevTransition;
								}
							},
							[value]
						);
						return prevValue;
					}
					function startTransition(setPending, callback) {
						var priorityLevel = getCurrentPriorityLevel();
						{
							runWithPriority$1(
								priorityLevel < UserBlockingPriority$2 ? UserBlockingPriority$2 : priorityLevel,
								function () {
									setPending(true);
								}
							);
							runWithPriority$1(priorityLevel > NormalPriority$1 ? NormalPriority$1 : priorityLevel, function () {
								var prevTransition = ReactCurrentBatchConfig$1.transition;
								ReactCurrentBatchConfig$1.transition = 1;
								try {
									setPending(false);
									callback();
								} finally {
									ReactCurrentBatchConfig$1.transition = prevTransition;
								}
							});
						}
					}
					function mountTransition() {
						var _mountState2 = mountState(false),
							isPending = _mountState2[0],
							setPending = _mountState2[1];
						var start = startTransition.bind(null, setPending);
						mountRef(start);
						return [start, isPending];
					}
					function updateTransition() {
						var _updateState2 = updateState(),
							isPending = _updateState2[0];
						var startRef = updateRef();
						var start = startRef.current;
						return [start, isPending];
					}
					function rerenderTransition() {
						var _rerenderState2 = rerenderState(),
							isPending = _rerenderState2[0];
						var startRef = updateRef();
						var start = startRef.current;
						return [start, isPending];
					}
					var isUpdatingOpaqueValueInRenderPhase = false;
					function getIsUpdatingOpaqueValueInRenderPhaseInDEV() {
						{
							return isUpdatingOpaqueValueInRenderPhase;
						}
					}
					function warnOnOpaqueIdentifierAccessInDEV(fiber) {
						{
							var name = getComponentName(fiber.type) || 'Unknown';
							if (getIsRendering() && !didWarnAboutUseOpaqueIdentifier[name]) {
								error(
									'The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.'
								);
								didWarnAboutUseOpaqueIdentifier[name] = true;
							}
						}
					}
					function mountOpaqueIdentifier() {
						var makeId = makeClientIdInDEV.bind(
							null,
							warnOnOpaqueIdentifierAccessInDEV.bind(null, currentlyRenderingFiber$1)
						);
						if (getIsHydrating()) {
							var didUpgrade = false;
							var fiber = currentlyRenderingFiber$1;
							var readValue = function () {
								if (!didUpgrade) {
									didUpgrade = true;
									{
										isUpdatingOpaqueValueInRenderPhase = true;
										setId(makeId());
										isUpdatingOpaqueValueInRenderPhase = false;
										warnOnOpaqueIdentifierAccessInDEV(fiber);
									}
								}
								{
									{
										throw Error(
											'The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.'
										);
									}
								}
							};
							var id = makeOpaqueHydratingObject(readValue);
							var setId = mountState(id)[1];
							if ((currentlyRenderingFiber$1.mode & BlockingMode) === NoMode) {
								currentlyRenderingFiber$1.flags |= Update | Passive;
								pushEffect(
									HasEffect | Passive$1,
									function () {
										setId(makeId());
									},
									void 0,
									null
								);
							}
							return id;
						} else {
							var _id = makeId();
							mountState(_id);
							return _id;
						}
					}
					function updateOpaqueIdentifier() {
						var id = updateState()[0];
						return id;
					}
					function rerenderOpaqueIdentifier() {
						var id = rerenderState()[0];
						return id;
					}
					function dispatchAction(fiber, queue, action) {
						{
							if (typeof arguments[3] === 'function') {
								error(
									"State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
								);
							}
						}
						var eventTime = requestEventTime();
						var lane = requestUpdateLane(fiber);
						var update = {
							lane,
							action,
							eagerReducer: null,
							eagerState: null,
							next: null
						};
						var pending = queue.pending;
						if (pending === null) {
							update.next = update;
						} else {
							update.next = pending.next;
							pending.next = update;
						}
						queue.pending = update;
						var alternate = fiber.alternate;
						if (
							fiber === currentlyRenderingFiber$1 ||
							(alternate !== null && alternate === currentlyRenderingFiber$1)
						) {
							didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
						} else {
							if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
								var lastRenderedReducer = queue.lastRenderedReducer;
								if (lastRenderedReducer !== null) {
									var prevDispatcher;
									{
										prevDispatcher = ReactCurrentDispatcher$1.current;
										ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
									}
									try {
										var currentState = queue.lastRenderedState;
										var eagerState = lastRenderedReducer(currentState, action);
										update.eagerReducer = lastRenderedReducer;
										update.eagerState = eagerState;
										if (objectIs(eagerState, currentState)) {
											return;
										}
									} catch (error2) {
									} finally {
										{
											ReactCurrentDispatcher$1.current = prevDispatcher;
										}
									}
								}
							}
							{
								if (typeof jest !== 'undefined') {
									warnIfNotScopedWithMatchingAct(fiber);
									warnIfNotCurrentlyActingUpdatesInDev(fiber);
								}
							}
							scheduleUpdateOnFiber(fiber, lane, eventTime);
						}
					}
					var ContextOnlyDispatcher = {
						readContext,
						useCallback: throwInvalidHookError,
						useContext: throwInvalidHookError,
						useEffect: throwInvalidHookError,
						useImperativeHandle: throwInvalidHookError,
						useLayoutEffect: throwInvalidHookError,
						useMemo: throwInvalidHookError,
						useReducer: throwInvalidHookError,
						useRef: throwInvalidHookError,
						useState: throwInvalidHookError,
						useDebugValue: throwInvalidHookError,
						useDeferredValue: throwInvalidHookError,
						useTransition: throwInvalidHookError,
						useMutableSource: throwInvalidHookError,
						useOpaqueIdentifier: throwInvalidHookError,
						unstable_isNewReconciler: enableNewReconciler
					};
					var HooksDispatcherOnMountInDEV = null;
					var HooksDispatcherOnMountWithHookTypesInDEV = null;
					var HooksDispatcherOnUpdateInDEV = null;
					var HooksDispatcherOnRerenderInDEV = null;
					var InvalidNestedHooksDispatcherOnMountInDEV = null;
					var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
					var InvalidNestedHooksDispatcherOnRerenderInDEV = null;
					{
						var warnInvalidContextAccess = function () {
							error(
								'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
							);
						};
						var warnInvalidHookAccess = function () {
							error(
								'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
							);
						};
						HooksDispatcherOnMountInDEV = {
							readContext: function (context, observedBits) {
								return readContext(context, observedBits);
							},
							useCallback: function (callback, deps) {
								currentHookNameInDev = 'useCallback';
								mountHookTypesDev();
								checkDepsAreArrayDev(deps);
								return mountCallback(callback, deps);
							},
							useContext: function (context, observedBits) {
								currentHookNameInDev = 'useContext';
								mountHookTypesDev();
								return readContext(context, observedBits);
							},
							useEffect: function (create, deps) {
								currentHookNameInDev = 'useEffect';
								mountHookTypesDev();
								checkDepsAreArrayDev(deps);
								return mountEffect(create, deps);
							},
							useImperativeHandle: function (ref, create, deps) {
								currentHookNameInDev = 'useImperativeHandle';
								mountHookTypesDev();
								checkDepsAreArrayDev(deps);
								return mountImperativeHandle(ref, create, deps);
							},
							useLayoutEffect: function (create, deps) {
								currentHookNameInDev = 'useLayoutEffect';
								mountHookTypesDev();
								checkDepsAreArrayDev(deps);
								return mountLayoutEffect(create, deps);
							},
							useMemo: function (create, deps) {
								currentHookNameInDev = 'useMemo';
								mountHookTypesDev();
								checkDepsAreArrayDev(deps);
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountMemo(create, deps);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useReducer: function (reducer, initialArg, init) {
								currentHookNameInDev = 'useReducer';
								mountHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountReducer(reducer, initialArg, init);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useRef: function (initialValue) {
								currentHookNameInDev = 'useRef';
								mountHookTypesDev();
								return mountRef(initialValue);
							},
							useState: function (initialState) {
								currentHookNameInDev = 'useState';
								mountHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountState(initialState);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useDebugValue: function (value, formatterFn) {
								currentHookNameInDev = 'useDebugValue';
								mountHookTypesDev();
								return mountDebugValue();
							},
							useDeferredValue: function (value) {
								currentHookNameInDev = 'useDeferredValue';
								mountHookTypesDev();
								return mountDeferredValue(value);
							},
							useTransition: function () {
								currentHookNameInDev = 'useTransition';
								mountHookTypesDev();
								return mountTransition();
							},
							useMutableSource: function (source, getSnapshot, subscribe) {
								currentHookNameInDev = 'useMutableSource';
								mountHookTypesDev();
								return mountMutableSource(source, getSnapshot, subscribe);
							},
							useOpaqueIdentifier: function () {
								currentHookNameInDev = 'useOpaqueIdentifier';
								mountHookTypesDev();
								return mountOpaqueIdentifier();
							},
							unstable_isNewReconciler: enableNewReconciler
						};
						HooksDispatcherOnMountWithHookTypesInDEV = {
							readContext: function (context, observedBits) {
								return readContext(context, observedBits);
							},
							useCallback: function (callback, deps) {
								currentHookNameInDev = 'useCallback';
								updateHookTypesDev();
								return mountCallback(callback, deps);
							},
							useContext: function (context, observedBits) {
								currentHookNameInDev = 'useContext';
								updateHookTypesDev();
								return readContext(context, observedBits);
							},
							useEffect: function (create, deps) {
								currentHookNameInDev = 'useEffect';
								updateHookTypesDev();
								return mountEffect(create, deps);
							},
							useImperativeHandle: function (ref, create, deps) {
								currentHookNameInDev = 'useImperativeHandle';
								updateHookTypesDev();
								return mountImperativeHandle(ref, create, deps);
							},
							useLayoutEffect: function (create, deps) {
								currentHookNameInDev = 'useLayoutEffect';
								updateHookTypesDev();
								return mountLayoutEffect(create, deps);
							},
							useMemo: function (create, deps) {
								currentHookNameInDev = 'useMemo';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountMemo(create, deps);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useReducer: function (reducer, initialArg, init) {
								currentHookNameInDev = 'useReducer';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountReducer(reducer, initialArg, init);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useRef: function (initialValue) {
								currentHookNameInDev = 'useRef';
								updateHookTypesDev();
								return mountRef(initialValue);
							},
							useState: function (initialState) {
								currentHookNameInDev = 'useState';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountState(initialState);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useDebugValue: function (value, formatterFn) {
								currentHookNameInDev = 'useDebugValue';
								updateHookTypesDev();
								return mountDebugValue();
							},
							useDeferredValue: function (value) {
								currentHookNameInDev = 'useDeferredValue';
								updateHookTypesDev();
								return mountDeferredValue(value);
							},
							useTransition: function () {
								currentHookNameInDev = 'useTransition';
								updateHookTypesDev();
								return mountTransition();
							},
							useMutableSource: function (source, getSnapshot, subscribe) {
								currentHookNameInDev = 'useMutableSource';
								updateHookTypesDev();
								return mountMutableSource(source, getSnapshot, subscribe);
							},
							useOpaqueIdentifier: function () {
								currentHookNameInDev = 'useOpaqueIdentifier';
								updateHookTypesDev();
								return mountOpaqueIdentifier();
							},
							unstable_isNewReconciler: enableNewReconciler
						};
						HooksDispatcherOnUpdateInDEV = {
							readContext: function (context, observedBits) {
								return readContext(context, observedBits);
							},
							useCallback: function (callback, deps) {
								currentHookNameInDev = 'useCallback';
								updateHookTypesDev();
								return updateCallback(callback, deps);
							},
							useContext: function (context, observedBits) {
								currentHookNameInDev = 'useContext';
								updateHookTypesDev();
								return readContext(context, observedBits);
							},
							useEffect: function (create, deps) {
								currentHookNameInDev = 'useEffect';
								updateHookTypesDev();
								return updateEffect(create, deps);
							},
							useImperativeHandle: function (ref, create, deps) {
								currentHookNameInDev = 'useImperativeHandle';
								updateHookTypesDev();
								return updateImperativeHandle(ref, create, deps);
							},
							useLayoutEffect: function (create, deps) {
								currentHookNameInDev = 'useLayoutEffect';
								updateHookTypesDev();
								return updateLayoutEffect(create, deps);
							},
							useMemo: function (create, deps) {
								currentHookNameInDev = 'useMemo';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return updateMemo(create, deps);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useReducer: function (reducer, initialArg, init) {
								currentHookNameInDev = 'useReducer';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return updateReducer(reducer, initialArg, init);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useRef: function (initialValue) {
								currentHookNameInDev = 'useRef';
								updateHookTypesDev();
								return updateRef();
							},
							useState: function (initialState) {
								currentHookNameInDev = 'useState';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return updateState(initialState);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useDebugValue: function (value, formatterFn) {
								currentHookNameInDev = 'useDebugValue';
								updateHookTypesDev();
								return updateDebugValue();
							},
							useDeferredValue: function (value) {
								currentHookNameInDev = 'useDeferredValue';
								updateHookTypesDev();
								return updateDeferredValue(value);
							},
							useTransition: function () {
								currentHookNameInDev = 'useTransition';
								updateHookTypesDev();
								return updateTransition();
							},
							useMutableSource: function (source, getSnapshot, subscribe) {
								currentHookNameInDev = 'useMutableSource';
								updateHookTypesDev();
								return updateMutableSource(source, getSnapshot, subscribe);
							},
							useOpaqueIdentifier: function () {
								currentHookNameInDev = 'useOpaqueIdentifier';
								updateHookTypesDev();
								return updateOpaqueIdentifier();
							},
							unstable_isNewReconciler: enableNewReconciler
						};
						HooksDispatcherOnRerenderInDEV = {
							readContext: function (context, observedBits) {
								return readContext(context, observedBits);
							},
							useCallback: function (callback, deps) {
								currentHookNameInDev = 'useCallback';
								updateHookTypesDev();
								return updateCallback(callback, deps);
							},
							useContext: function (context, observedBits) {
								currentHookNameInDev = 'useContext';
								updateHookTypesDev();
								return readContext(context, observedBits);
							},
							useEffect: function (create, deps) {
								currentHookNameInDev = 'useEffect';
								updateHookTypesDev();
								return updateEffect(create, deps);
							},
							useImperativeHandle: function (ref, create, deps) {
								currentHookNameInDev = 'useImperativeHandle';
								updateHookTypesDev();
								return updateImperativeHandle(ref, create, deps);
							},
							useLayoutEffect: function (create, deps) {
								currentHookNameInDev = 'useLayoutEffect';
								updateHookTypesDev();
								return updateLayoutEffect(create, deps);
							},
							useMemo: function (create, deps) {
								currentHookNameInDev = 'useMemo';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
								try {
									return updateMemo(create, deps);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useReducer: function (reducer, initialArg, init) {
								currentHookNameInDev = 'useReducer';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
								try {
									return rerenderReducer(reducer, initialArg, init);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useRef: function (initialValue) {
								currentHookNameInDev = 'useRef';
								updateHookTypesDev();
								return updateRef();
							},
							useState: function (initialState) {
								currentHookNameInDev = 'useState';
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
								try {
									return rerenderState(initialState);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useDebugValue: function (value, formatterFn) {
								currentHookNameInDev = 'useDebugValue';
								updateHookTypesDev();
								return updateDebugValue();
							},
							useDeferredValue: function (value) {
								currentHookNameInDev = 'useDeferredValue';
								updateHookTypesDev();
								return rerenderDeferredValue(value);
							},
							useTransition: function () {
								currentHookNameInDev = 'useTransition';
								updateHookTypesDev();
								return rerenderTransition();
							},
							useMutableSource: function (source, getSnapshot, subscribe) {
								currentHookNameInDev = 'useMutableSource';
								updateHookTypesDev();
								return updateMutableSource(source, getSnapshot, subscribe);
							},
							useOpaqueIdentifier: function () {
								currentHookNameInDev = 'useOpaqueIdentifier';
								updateHookTypesDev();
								return rerenderOpaqueIdentifier();
							},
							unstable_isNewReconciler: enableNewReconciler
						};
						InvalidNestedHooksDispatcherOnMountInDEV = {
							readContext: function (context, observedBits) {
								warnInvalidContextAccess();
								return readContext(context, observedBits);
							},
							useCallback: function (callback, deps) {
								currentHookNameInDev = 'useCallback';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountCallback(callback, deps);
							},
							useContext: function (context, observedBits) {
								currentHookNameInDev = 'useContext';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return readContext(context, observedBits);
							},
							useEffect: function (create, deps) {
								currentHookNameInDev = 'useEffect';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountEffect(create, deps);
							},
							useImperativeHandle: function (ref, create, deps) {
								currentHookNameInDev = 'useImperativeHandle';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountImperativeHandle(ref, create, deps);
							},
							useLayoutEffect: function (create, deps) {
								currentHookNameInDev = 'useLayoutEffect';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountLayoutEffect(create, deps);
							},
							useMemo: function (create, deps) {
								currentHookNameInDev = 'useMemo';
								warnInvalidHookAccess();
								mountHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountMemo(create, deps);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useReducer: function (reducer, initialArg, init) {
								currentHookNameInDev = 'useReducer';
								warnInvalidHookAccess();
								mountHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountReducer(reducer, initialArg, init);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useRef: function (initialValue) {
								currentHookNameInDev = 'useRef';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountRef(initialValue);
							},
							useState: function (initialState) {
								currentHookNameInDev = 'useState';
								warnInvalidHookAccess();
								mountHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
								try {
									return mountState(initialState);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useDebugValue: function (value, formatterFn) {
								currentHookNameInDev = 'useDebugValue';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountDebugValue();
							},
							useDeferredValue: function (value) {
								currentHookNameInDev = 'useDeferredValue';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountDeferredValue(value);
							},
							useTransition: function () {
								currentHookNameInDev = 'useTransition';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountTransition();
							},
							useMutableSource: function (source, getSnapshot, subscribe) {
								currentHookNameInDev = 'useMutableSource';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountMutableSource(source, getSnapshot, subscribe);
							},
							useOpaqueIdentifier: function () {
								currentHookNameInDev = 'useOpaqueIdentifier';
								warnInvalidHookAccess();
								mountHookTypesDev();
								return mountOpaqueIdentifier();
							},
							unstable_isNewReconciler: enableNewReconciler
						};
						InvalidNestedHooksDispatcherOnUpdateInDEV = {
							readContext: function (context, observedBits) {
								warnInvalidContextAccess();
								return readContext(context, observedBits);
							},
							useCallback: function (callback, deps) {
								currentHookNameInDev = 'useCallback';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateCallback(callback, deps);
							},
							useContext: function (context, observedBits) {
								currentHookNameInDev = 'useContext';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return readContext(context, observedBits);
							},
							useEffect: function (create, deps) {
								currentHookNameInDev = 'useEffect';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateEffect(create, deps);
							},
							useImperativeHandle: function (ref, create, deps) {
								currentHookNameInDev = 'useImperativeHandle';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateImperativeHandle(ref, create, deps);
							},
							useLayoutEffect: function (create, deps) {
								currentHookNameInDev = 'useLayoutEffect';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateLayoutEffect(create, deps);
							},
							useMemo: function (create, deps) {
								currentHookNameInDev = 'useMemo';
								warnInvalidHookAccess();
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return updateMemo(create, deps);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useReducer: function (reducer, initialArg, init) {
								currentHookNameInDev = 'useReducer';
								warnInvalidHookAccess();
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return updateReducer(reducer, initialArg, init);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useRef: function (initialValue) {
								currentHookNameInDev = 'useRef';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateRef();
							},
							useState: function (initialState) {
								currentHookNameInDev = 'useState';
								warnInvalidHookAccess();
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return updateState(initialState);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useDebugValue: function (value, formatterFn) {
								currentHookNameInDev = 'useDebugValue';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateDebugValue();
							},
							useDeferredValue: function (value) {
								currentHookNameInDev = 'useDeferredValue';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateDeferredValue(value);
							},
							useTransition: function () {
								currentHookNameInDev = 'useTransition';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateTransition();
							},
							useMutableSource: function (source, getSnapshot, subscribe) {
								currentHookNameInDev = 'useMutableSource';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateMutableSource(source, getSnapshot, subscribe);
							},
							useOpaqueIdentifier: function () {
								currentHookNameInDev = 'useOpaqueIdentifier';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateOpaqueIdentifier();
							},
							unstable_isNewReconciler: enableNewReconciler
						};
						InvalidNestedHooksDispatcherOnRerenderInDEV = {
							readContext: function (context, observedBits) {
								warnInvalidContextAccess();
								return readContext(context, observedBits);
							},
							useCallback: function (callback, deps) {
								currentHookNameInDev = 'useCallback';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateCallback(callback, deps);
							},
							useContext: function (context, observedBits) {
								currentHookNameInDev = 'useContext';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return readContext(context, observedBits);
							},
							useEffect: function (create, deps) {
								currentHookNameInDev = 'useEffect';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateEffect(create, deps);
							},
							useImperativeHandle: function (ref, create, deps) {
								currentHookNameInDev = 'useImperativeHandle';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateImperativeHandle(ref, create, deps);
							},
							useLayoutEffect: function (create, deps) {
								currentHookNameInDev = 'useLayoutEffect';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateLayoutEffect(create, deps);
							},
							useMemo: function (create, deps) {
								currentHookNameInDev = 'useMemo';
								warnInvalidHookAccess();
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return updateMemo(create, deps);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useReducer: function (reducer, initialArg, init) {
								currentHookNameInDev = 'useReducer';
								warnInvalidHookAccess();
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return rerenderReducer(reducer, initialArg, init);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useRef: function (initialValue) {
								currentHookNameInDev = 'useRef';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateRef();
							},
							useState: function (initialState) {
								currentHookNameInDev = 'useState';
								warnInvalidHookAccess();
								updateHookTypesDev();
								var prevDispatcher = ReactCurrentDispatcher$1.current;
								ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
								try {
									return rerenderState(initialState);
								} finally {
									ReactCurrentDispatcher$1.current = prevDispatcher;
								}
							},
							useDebugValue: function (value, formatterFn) {
								currentHookNameInDev = 'useDebugValue';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateDebugValue();
							},
							useDeferredValue: function (value) {
								currentHookNameInDev = 'useDeferredValue';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return rerenderDeferredValue(value);
							},
							useTransition: function () {
								currentHookNameInDev = 'useTransition';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return rerenderTransition();
							},
							useMutableSource: function (source, getSnapshot, subscribe) {
								currentHookNameInDev = 'useMutableSource';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return updateMutableSource(source, getSnapshot, subscribe);
							},
							useOpaqueIdentifier: function () {
								currentHookNameInDev = 'useOpaqueIdentifier';
								warnInvalidHookAccess();
								updateHookTypesDev();
								return rerenderOpaqueIdentifier();
							},
							unstable_isNewReconciler: enableNewReconciler
						};
					}
					var now$1 = Scheduler.unstable_now;
					var commitTime = 0;
					var profilerStartTime = -1;
					function getCommitTime() {
						return commitTime;
					}
					function recordCommitTime() {
						commitTime = now$1();
					}
					function startProfilerTimer(fiber) {
						profilerStartTime = now$1();
						if (fiber.actualStartTime < 0) {
							fiber.actualStartTime = now$1();
						}
					}
					function stopProfilerTimerIfRunning(fiber) {
						profilerStartTime = -1;
					}
					function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
						if (profilerStartTime >= 0) {
							var elapsedTime = now$1() - profilerStartTime;
							fiber.actualDuration += elapsedTime;
							if (overrideBaseTime) {
								fiber.selfBaseDuration = elapsedTime;
							}
							profilerStartTime = -1;
						}
					}
					function transferActualDuration(fiber) {
						var child = fiber.child;
						while (child) {
							fiber.actualDuration += child.actualDuration;
							child = child.sibling;
						}
					}
					var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
					var didReceiveUpdate = false;
					var didWarnAboutBadClass;
					var didWarnAboutModulePatternComponent;
					var didWarnAboutContextTypeOnFunctionComponent;
					var didWarnAboutGetDerivedStateOnFunctionComponent;
					var didWarnAboutFunctionRefs;
					var didWarnAboutReassigningProps;
					var didWarnAboutRevealOrder;
					var didWarnAboutTailOptions;
					{
						didWarnAboutBadClass = {};
						didWarnAboutModulePatternComponent = {};
						didWarnAboutContextTypeOnFunctionComponent = {};
						didWarnAboutGetDerivedStateOnFunctionComponent = {};
						didWarnAboutFunctionRefs = {};
						didWarnAboutReassigningProps = false;
						didWarnAboutRevealOrder = {};
						didWarnAboutTailOptions = {};
					}
					function reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2) {
						if (current2 === null) {
							workInProgress2.child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
						} else {
							workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, nextChildren, renderLanes2);
						}
					}
					function forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2) {
						workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
						workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
					}
					function updateForwardRef(current2, workInProgress2, Component, nextProps, renderLanes2) {
						{
							if (workInProgress2.type !== workInProgress2.elementType) {
								var innerPropTypes = Component.propTypes;
								if (innerPropTypes) {
									checkPropTypes(innerPropTypes, nextProps, 'prop', getComponentName(Component));
								}
							}
						}
						var render3 = Component.render;
						var ref = workInProgress2.ref;
						var nextChildren;
						prepareToReadContext(workInProgress2, renderLanes2);
						{
							ReactCurrentOwner$1.current = workInProgress2;
							setIsRendering(true);
							nextChildren = renderWithHooks(current2, workInProgress2, render3, nextProps, ref, renderLanes2);
							if (workInProgress2.mode & StrictMode) {
								disableLogs();
								try {
									nextChildren = renderWithHooks(current2, workInProgress2, render3, nextProps, ref, renderLanes2);
								} finally {
									reenableLogs();
								}
							}
							setIsRendering(false);
						}
						if (current2 !== null && !didReceiveUpdate) {
							bailoutHooks(current2, workInProgress2, renderLanes2);
							return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
						}
						workInProgress2.flags |= PerformedWork;
						reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						return workInProgress2.child;
					}
					function updateMemoComponent(current2, workInProgress2, Component, nextProps, updateLanes, renderLanes2) {
						if (current2 === null) {
							var type = Component.type;
							if (isSimpleFunctionComponent(type) && Component.compare === null && Component.defaultProps === void 0) {
								var resolvedType = type;
								{
									resolvedType = resolveFunctionForHotReloading(type);
								}
								workInProgress2.tag = SimpleMemoComponent;
								workInProgress2.type = resolvedType;
								{
									validateFunctionComponentInDev(workInProgress2, type);
								}
								return updateSimpleMemoComponent(
									current2,
									workInProgress2,
									resolvedType,
									nextProps,
									updateLanes,
									renderLanes2
								);
							}
							{
								var innerPropTypes = type.propTypes;
								if (innerPropTypes) {
									checkPropTypes(innerPropTypes, nextProps, 'prop', getComponentName(type));
								}
							}
							var child = createFiberFromTypeAndProps(
								Component.type,
								null,
								nextProps,
								workInProgress2,
								workInProgress2.mode,
								renderLanes2
							);
							child.ref = workInProgress2.ref;
							child.return = workInProgress2;
							workInProgress2.child = child;
							return child;
						}
						{
							var _type = Component.type;
							var _innerPropTypes = _type.propTypes;
							if (_innerPropTypes) {
								checkPropTypes(_innerPropTypes, nextProps, 'prop', getComponentName(_type));
							}
						}
						var currentChild = current2.child;
						if (!includesSomeLane(updateLanes, renderLanes2)) {
							var prevProps = currentChild.memoizedProps;
							var compare = Component.compare;
							compare = compare !== null ? compare : shallowEqual;
							if (compare(prevProps, nextProps) && current2.ref === workInProgress2.ref) {
								return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
							}
						}
						workInProgress2.flags |= PerformedWork;
						var newChild = createWorkInProgress(currentChild, nextProps);
						newChild.ref = workInProgress2.ref;
						newChild.return = workInProgress2;
						workInProgress2.child = newChild;
						return newChild;
					}
					function updateSimpleMemoComponent(
						current2,
						workInProgress2,
						Component,
						nextProps,
						updateLanes,
						renderLanes2
					) {
						{
							if (workInProgress2.type !== workInProgress2.elementType) {
								var outerMemoType = workInProgress2.elementType;
								if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
									var lazyComponent = outerMemoType;
									var payload = lazyComponent._payload;
									var init = lazyComponent._init;
									try {
										outerMemoType = init(payload);
									} catch (x) {
										outerMemoType = null;
									}
									var outerPropTypes = outerMemoType && outerMemoType.propTypes;
									if (outerPropTypes) {
										checkPropTypes(outerPropTypes, nextProps, 'prop', getComponentName(outerMemoType));
									}
								}
							}
						}
						if (current2 !== null) {
							var prevProps = current2.memoizedProps;
							if (
								shallowEqual(prevProps, nextProps) &&
								current2.ref === workInProgress2.ref &&
								workInProgress2.type === current2.type
							) {
								didReceiveUpdate = false;
								if (!includesSomeLane(renderLanes2, updateLanes)) {
									workInProgress2.lanes = current2.lanes;
									return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
								} else if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
									didReceiveUpdate = true;
								}
							}
						}
						return updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderLanes2);
					}
					function updateOffscreenComponent(current2, workInProgress2, renderLanes2) {
						var nextProps = workInProgress2.pendingProps;
						var nextChildren = nextProps.children;
						var prevState = current2 !== null ? current2.memoizedState : null;
						if (nextProps.mode === 'hidden' || nextProps.mode === 'unstable-defer-without-hiding') {
							if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
								var nextState = {
									baseLanes: NoLanes
								};
								workInProgress2.memoizedState = nextState;
								pushRenderLanes(workInProgress2, renderLanes2);
							} else if (!includesSomeLane(renderLanes2, OffscreenLane)) {
								var nextBaseLanes;
								if (prevState !== null) {
									var prevBaseLanes = prevState.baseLanes;
									nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes2);
								} else {
									nextBaseLanes = renderLanes2;
								}
								{
									markSpawnedWork(OffscreenLane);
								}
								workInProgress2.lanes = workInProgress2.childLanes = laneToLanes(OffscreenLane);
								var _nextState = {
									baseLanes: nextBaseLanes
								};
								workInProgress2.memoizedState = _nextState;
								pushRenderLanes(workInProgress2, nextBaseLanes);
								return null;
							} else {
								var _nextState2 = {
									baseLanes: NoLanes
								};
								workInProgress2.memoizedState = _nextState2;
								var subtreeRenderLanes2 = prevState !== null ? prevState.baseLanes : renderLanes2;
								pushRenderLanes(workInProgress2, subtreeRenderLanes2);
							}
						} else {
							var _subtreeRenderLanes;
							if (prevState !== null) {
								_subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes2);
								workInProgress2.memoizedState = null;
							} else {
								_subtreeRenderLanes = renderLanes2;
							}
							pushRenderLanes(workInProgress2, _subtreeRenderLanes);
						}
						reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						return workInProgress2.child;
					}
					var updateLegacyHiddenComponent = updateOffscreenComponent;
					function updateFragment(current2, workInProgress2, renderLanes2) {
						var nextChildren = workInProgress2.pendingProps;
						reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						return workInProgress2.child;
					}
					function updateMode(current2, workInProgress2, renderLanes2) {
						var nextChildren = workInProgress2.pendingProps.children;
						reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						return workInProgress2.child;
					}
					function updateProfiler(current2, workInProgress2, renderLanes2) {
						{
							workInProgress2.flags |= Update;
							var stateNode = workInProgress2.stateNode;
							stateNode.effectDuration = 0;
							stateNode.passiveEffectDuration = 0;
						}
						var nextProps = workInProgress2.pendingProps;
						var nextChildren = nextProps.children;
						reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						return workInProgress2.child;
					}
					function markRef(current2, workInProgress2) {
						var ref = workInProgress2.ref;
						if ((current2 === null && ref !== null) || (current2 !== null && current2.ref !== ref)) {
							workInProgress2.flags |= Ref;
						}
					}
					function updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
						{
							if (workInProgress2.type !== workInProgress2.elementType) {
								var innerPropTypes = Component.propTypes;
								if (innerPropTypes) {
									checkPropTypes(innerPropTypes, nextProps, 'prop', getComponentName(Component));
								}
							}
						}
						var context;
						{
							var unmaskedContext = getUnmaskedContext(workInProgress2, Component, true);
							context = getMaskedContext(workInProgress2, unmaskedContext);
						}
						var nextChildren;
						prepareToReadContext(workInProgress2, renderLanes2);
						{
							ReactCurrentOwner$1.current = workInProgress2;
							setIsRendering(true);
							nextChildren = renderWithHooks(current2, workInProgress2, Component, nextProps, context, renderLanes2);
							if (workInProgress2.mode & StrictMode) {
								disableLogs();
								try {
									nextChildren = renderWithHooks(
										current2,
										workInProgress2,
										Component,
										nextProps,
										context,
										renderLanes2
									);
								} finally {
									reenableLogs();
								}
							}
							setIsRendering(false);
						}
						if (current2 !== null && !didReceiveUpdate) {
							bailoutHooks(current2, workInProgress2, renderLanes2);
							return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
						}
						workInProgress2.flags |= PerformedWork;
						reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						return workInProgress2.child;
					}
					function updateClassComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
						{
							if (workInProgress2.type !== workInProgress2.elementType) {
								var innerPropTypes = Component.propTypes;
								if (innerPropTypes) {
									checkPropTypes(innerPropTypes, nextProps, 'prop', getComponentName(Component));
								}
							}
						}
						var hasContext;
						if (isContextProvider(Component)) {
							hasContext = true;
							pushContextProvider(workInProgress2);
						} else {
							hasContext = false;
						}
						prepareToReadContext(workInProgress2, renderLanes2);
						var instance = workInProgress2.stateNode;
						var shouldUpdate;
						if (instance === null) {
							if (current2 !== null) {
								current2.alternate = null;
								workInProgress2.alternate = null;
								workInProgress2.flags |= Placement;
							}
							constructClassInstance(workInProgress2, Component, nextProps);
							mountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
							shouldUpdate = true;
						} else if (current2 === null) {
							shouldUpdate = resumeMountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
						} else {
							shouldUpdate = updateClassInstance(current2, workInProgress2, Component, nextProps, renderLanes2);
						}
						var nextUnitOfWork = finishClassComponent(
							current2,
							workInProgress2,
							Component,
							shouldUpdate,
							hasContext,
							renderLanes2
						);
						{
							var inst = workInProgress2.stateNode;
							if (shouldUpdate && inst.props !== nextProps) {
								if (!didWarnAboutReassigningProps) {
									error(
										'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
										getComponentName(workInProgress2.type) || 'a component'
									);
								}
								didWarnAboutReassigningProps = true;
							}
						}
						return nextUnitOfWork;
					}
					function finishClassComponent(current2, workInProgress2, Component, shouldUpdate, hasContext, renderLanes2) {
						markRef(current2, workInProgress2);
						var didCaptureError = (workInProgress2.flags & DidCapture) !== NoFlags;
						if (!shouldUpdate && !didCaptureError) {
							if (hasContext) {
								invalidateContextProvider(workInProgress2, Component, false);
							}
							return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
						}
						var instance = workInProgress2.stateNode;
						ReactCurrentOwner$1.current = workInProgress2;
						var nextChildren;
						if (didCaptureError && typeof Component.getDerivedStateFromError !== 'function') {
							nextChildren = null;
							{
								stopProfilerTimerIfRunning();
							}
						} else {
							{
								setIsRendering(true);
								nextChildren = instance.render();
								if (workInProgress2.mode & StrictMode) {
									disableLogs();
									try {
										instance.render();
									} finally {
										reenableLogs();
									}
								}
								setIsRendering(false);
							}
						}
						workInProgress2.flags |= PerformedWork;
						if (current2 !== null && didCaptureError) {
							forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2);
						} else {
							reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						}
						workInProgress2.memoizedState = instance.state;
						if (hasContext) {
							invalidateContextProvider(workInProgress2, Component, true);
						}
						return workInProgress2.child;
					}
					function pushHostRootContext(workInProgress2) {
						var root2 = workInProgress2.stateNode;
						if (root2.pendingContext) {
							pushTopLevelContextObject(workInProgress2, root2.pendingContext, root2.pendingContext !== root2.context);
						} else if (root2.context) {
							pushTopLevelContextObject(workInProgress2, root2.context, false);
						}
						pushHostContainer(workInProgress2, root2.containerInfo);
					}
					function updateHostRoot(current2, workInProgress2, renderLanes2) {
						pushHostRootContext(workInProgress2);
						var updateQueue = workInProgress2.updateQueue;
						if (!(current2 !== null && updateQueue !== null)) {
							{
								throw Error(
									'If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
						var nextProps = workInProgress2.pendingProps;
						var prevState = workInProgress2.memoizedState;
						var prevChildren = prevState !== null ? prevState.element : null;
						cloneUpdateQueue(current2, workInProgress2);
						processUpdateQueue(workInProgress2, nextProps, null, renderLanes2);
						var nextState = workInProgress2.memoizedState;
						var nextChildren = nextState.element;
						if (nextChildren === prevChildren) {
							resetHydrationState();
							return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
						}
						var root2 = workInProgress2.stateNode;
						if (root2.hydrate && enterHydrationState(workInProgress2)) {
							{
								var mutableSourceEagerHydrationData = root2.mutableSourceEagerHydrationData;
								if (mutableSourceEagerHydrationData != null) {
									for (var i2 = 0; i2 < mutableSourceEagerHydrationData.length; i2 += 2) {
										var mutableSource = mutableSourceEagerHydrationData[i2];
										var version = mutableSourceEagerHydrationData[i2 + 1];
										setWorkInProgressVersion(mutableSource, version);
									}
								}
							}
							var child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
							workInProgress2.child = child;
							var node = child;
							while (node) {
								node.flags = (node.flags & ~Placement) | Hydrating;
								node = node.sibling;
							}
						} else {
							reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
							resetHydrationState();
						}
						return workInProgress2.child;
					}
					function updateHostComponent(current2, workInProgress2, renderLanes2) {
						pushHostContext(workInProgress2);
						if (current2 === null) {
							tryToClaimNextHydratableInstance(workInProgress2);
						}
						var type = workInProgress2.type;
						var nextProps = workInProgress2.pendingProps;
						var prevProps = current2 !== null ? current2.memoizedProps : null;
						var nextChildren = nextProps.children;
						var isDirectTextChild = shouldSetTextContent(type, nextProps);
						if (isDirectTextChild) {
							nextChildren = null;
						} else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
							workInProgress2.flags |= ContentReset;
						}
						markRef(current2, workInProgress2);
						reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						return workInProgress2.child;
					}
					function updateHostText(current2, workInProgress2) {
						if (current2 === null) {
							tryToClaimNextHydratableInstance(workInProgress2);
						}
						return null;
					}
					function mountLazyComponent(_current, workInProgress2, elementType, updateLanes, renderLanes2) {
						if (_current !== null) {
							_current.alternate = null;
							workInProgress2.alternate = null;
							workInProgress2.flags |= Placement;
						}
						var props = workInProgress2.pendingProps;
						var lazyComponent = elementType;
						var payload = lazyComponent._payload;
						var init = lazyComponent._init;
						var Component = init(payload);
						workInProgress2.type = Component;
						var resolvedTag = (workInProgress2.tag = resolveLazyComponentTag(Component));
						var resolvedProps = resolveDefaultProps(Component, props);
						var child;
						switch (resolvedTag) {
							case FunctionComponent: {
								{
									validateFunctionComponentInDev(workInProgress2, Component);
									workInProgress2.type = Component = resolveFunctionForHotReloading(Component);
								}
								child = updateFunctionComponent(null, workInProgress2, Component, resolvedProps, renderLanes2);
								return child;
							}
							case ClassComponent: {
								{
									workInProgress2.type = Component = resolveClassForHotReloading(Component);
								}
								child = updateClassComponent(null, workInProgress2, Component, resolvedProps, renderLanes2);
								return child;
							}
							case ForwardRef: {
								{
									workInProgress2.type = Component = resolveForwardRefForHotReloading(Component);
								}
								child = updateForwardRef(null, workInProgress2, Component, resolvedProps, renderLanes2);
								return child;
							}
							case MemoComponent: {
								{
									if (workInProgress2.type !== workInProgress2.elementType) {
										var outerPropTypes = Component.propTypes;
										if (outerPropTypes) {
											checkPropTypes(outerPropTypes, resolvedProps, 'prop', getComponentName(Component));
										}
									}
								}
								child = updateMemoComponent(
									null,
									workInProgress2,
									Component,
									resolveDefaultProps(Component.type, resolvedProps),
									updateLanes,
									renderLanes2
								);
								return child;
							}
						}
						var hint = '';
						{
							if (Component !== null && typeof Component === 'object' && Component.$$typeof === REACT_LAZY_TYPE) {
								hint = ' Did you wrap a component in React.lazy() more than once?';
							}
						}
						{
							{
								throw Error(
									'Element type is invalid. Received a promise that resolves to: ' +
										Component +
										'. Lazy element type must resolve to a class or function.' +
										hint
								);
							}
						}
					}
					function mountIncompleteClassComponent(_current, workInProgress2, Component, nextProps, renderLanes2) {
						if (_current !== null) {
							_current.alternate = null;
							workInProgress2.alternate = null;
							workInProgress2.flags |= Placement;
						}
						workInProgress2.tag = ClassComponent;
						var hasContext;
						if (isContextProvider(Component)) {
							hasContext = true;
							pushContextProvider(workInProgress2);
						} else {
							hasContext = false;
						}
						prepareToReadContext(workInProgress2, renderLanes2);
						constructClassInstance(workInProgress2, Component, nextProps);
						mountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
						return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderLanes2);
					}
					function mountIndeterminateComponent(_current, workInProgress2, Component, renderLanes2) {
						if (_current !== null) {
							_current.alternate = null;
							workInProgress2.alternate = null;
							workInProgress2.flags |= Placement;
						}
						var props = workInProgress2.pendingProps;
						var context;
						{
							var unmaskedContext = getUnmaskedContext(workInProgress2, Component, false);
							context = getMaskedContext(workInProgress2, unmaskedContext);
						}
						prepareToReadContext(workInProgress2, renderLanes2);
						var value;
						{
							if (Component.prototype && typeof Component.prototype.render === 'function') {
								var componentName = getComponentName(Component) || 'Unknown';
								if (!didWarnAboutBadClass[componentName]) {
									error(
										"The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
										componentName,
										componentName
									);
									didWarnAboutBadClass[componentName] = true;
								}
							}
							if (workInProgress2.mode & StrictMode) {
								ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, null);
							}
							setIsRendering(true);
							ReactCurrentOwner$1.current = workInProgress2;
							value = renderWithHooks(null, workInProgress2, Component, props, context, renderLanes2);
							setIsRendering(false);
						}
						workInProgress2.flags |= PerformedWork;
						{
							if (
								typeof value === 'object' &&
								value !== null &&
								typeof value.render === 'function' &&
								value.$$typeof === void 0
							) {
								var _componentName = getComponentName(Component) || 'Unknown';
								if (!didWarnAboutModulePatternComponent[_componentName]) {
									error(
										"The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
										_componentName,
										_componentName,
										_componentName
									);
									didWarnAboutModulePatternComponent[_componentName] = true;
								}
							}
						}
						if (
							typeof value === 'object' &&
							value !== null &&
							typeof value.render === 'function' &&
							value.$$typeof === void 0
						) {
							{
								var _componentName2 = getComponentName(Component) || 'Unknown';
								if (!didWarnAboutModulePatternComponent[_componentName2]) {
									error(
										"The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
										_componentName2,
										_componentName2,
										_componentName2
									);
									didWarnAboutModulePatternComponent[_componentName2] = true;
								}
							}
							workInProgress2.tag = ClassComponent;
							workInProgress2.memoizedState = null;
							workInProgress2.updateQueue = null;
							var hasContext = false;
							if (isContextProvider(Component)) {
								hasContext = true;
								pushContextProvider(workInProgress2);
							} else {
								hasContext = false;
							}
							workInProgress2.memoizedState = value.state !== null && value.state !== void 0 ? value.state : null;
							initializeUpdateQueue(workInProgress2);
							var getDerivedStateFromProps = Component.getDerivedStateFromProps;
							if (typeof getDerivedStateFromProps === 'function') {
								applyDerivedStateFromProps(workInProgress2, Component, getDerivedStateFromProps, props);
							}
							adoptClassInstance(workInProgress2, value);
							mountClassInstance(workInProgress2, Component, props, renderLanes2);
							return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderLanes2);
						} else {
							workInProgress2.tag = FunctionComponent;
							{
								if (workInProgress2.mode & StrictMode) {
									disableLogs();
									try {
										value = renderWithHooks(null, workInProgress2, Component, props, context, renderLanes2);
									} finally {
										reenableLogs();
									}
								}
							}
							reconcileChildren(null, workInProgress2, value, renderLanes2);
							{
								validateFunctionComponentInDev(workInProgress2, Component);
							}
							return workInProgress2.child;
						}
					}
					function validateFunctionComponentInDev(workInProgress2, Component) {
						{
							if (Component) {
								if (Component.childContextTypes) {
									error(
										'%s(...): childContextTypes cannot be defined on a function component.',
										Component.displayName || Component.name || 'Component'
									);
								}
							}
							if (workInProgress2.ref !== null) {
								var info = '';
								var ownerName = getCurrentFiberOwnerNameInDevOrNull();
								if (ownerName) {
									info += '\n\nCheck the render method of `' + ownerName + '`.';
								}
								var warningKey = ownerName || workInProgress2._debugID || '';
								var debugSource = workInProgress2._debugSource;
								if (debugSource) {
									warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
								}
								if (!didWarnAboutFunctionRefs[warningKey]) {
									didWarnAboutFunctionRefs[warningKey] = true;
									error(
										'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
										info
									);
								}
							}
							if (typeof Component.getDerivedStateFromProps === 'function') {
								var _componentName3 = getComponentName(Component) || 'Unknown';
								if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
									error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);
									didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
								}
							}
							if (typeof Component.contextType === 'object' && Component.contextType !== null) {
								var _componentName4 = getComponentName(Component) || 'Unknown';
								if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
									error('%s: Function components do not support contextType.', _componentName4);
									didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
								}
							}
						}
					}
					var SUSPENDED_MARKER = {
						dehydrated: null,
						retryLane: NoLane
					};
					function mountSuspenseOffscreenState(renderLanes2) {
						return {
							baseLanes: renderLanes2
						};
					}
					function updateSuspenseOffscreenState(prevOffscreenState, renderLanes2) {
						return {
							baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes2)
						};
					}
					function shouldRemainOnFallback(suspenseContext, current2, workInProgress2, renderLanes2) {
						if (current2 !== null) {
							var suspenseState = current2.memoizedState;
							if (suspenseState === null) {
								return false;
							}
						}
						return hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
					}
					function getRemainingWorkInPrimaryTree(current2, renderLanes2) {
						return removeLanes(current2.childLanes, renderLanes2);
					}
					function updateSuspenseComponent(current2, workInProgress2, renderLanes2) {
						var nextProps = workInProgress2.pendingProps;
						{
							if (shouldSuspend(workInProgress2)) {
								workInProgress2.flags |= DidCapture;
							}
						}
						var suspenseContext = suspenseStackCursor.current;
						var showFallback = false;
						var didSuspend = (workInProgress2.flags & DidCapture) !== NoFlags;
						if (didSuspend || shouldRemainOnFallback(suspenseContext, current2)) {
							showFallback = true;
							workInProgress2.flags &= ~DidCapture;
						} else {
							if (current2 === null || current2.memoizedState !== null) {
								if (nextProps.fallback !== void 0 && nextProps.unstable_avoidThisFallback !== true) {
									suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
								}
							}
						}
						suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
						pushSuspenseContext(workInProgress2, suspenseContext);
						if (current2 === null) {
							if (nextProps.fallback !== void 0) {
								tryToClaimNextHydratableInstance(workInProgress2);
							}
							var nextPrimaryChildren = nextProps.children;
							var nextFallbackChildren = nextProps.fallback;
							if (showFallback) {
								var fallbackFragment = mountSuspenseFallbackChildren(
									workInProgress2,
									nextPrimaryChildren,
									nextFallbackChildren,
									renderLanes2
								);
								var primaryChildFragment = workInProgress2.child;
								primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes2);
								workInProgress2.memoizedState = SUSPENDED_MARKER;
								return fallbackFragment;
							} else if (typeof nextProps.unstable_expectedLoadTime === 'number') {
								var _fallbackFragment = mountSuspenseFallbackChildren(
									workInProgress2,
									nextPrimaryChildren,
									nextFallbackChildren,
									renderLanes2
								);
								var _primaryChildFragment = workInProgress2.child;
								_primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes2);
								workInProgress2.memoizedState = SUSPENDED_MARKER;
								workInProgress2.lanes = SomeRetryLane;
								{
									markSpawnedWork(SomeRetryLane);
								}
								return _fallbackFragment;
							} else {
								return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren, renderLanes2);
							}
						} else {
							var prevState = current2.memoizedState;
							if (prevState !== null) {
								if (showFallback) {
									var _nextFallbackChildren2 = nextProps.fallback;
									var _nextPrimaryChildren2 = nextProps.children;
									var _fallbackChildFragment = updateSuspenseFallbackChildren(
										current2,
										workInProgress2,
										_nextPrimaryChildren2,
										_nextFallbackChildren2,
										renderLanes2
									);
									var _primaryChildFragment3 = workInProgress2.child;
									var prevOffscreenState = current2.child.memoizedState;
									_primaryChildFragment3.memoizedState =
										prevOffscreenState === null
											? mountSuspenseOffscreenState(renderLanes2)
											: updateSuspenseOffscreenState(prevOffscreenState, renderLanes2);
									_primaryChildFragment3.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
									workInProgress2.memoizedState = SUSPENDED_MARKER;
									return _fallbackChildFragment;
								} else {
									var _nextPrimaryChildren3 = nextProps.children;
									var _primaryChildFragment4 = updateSuspensePrimaryChildren(
										current2,
										workInProgress2,
										_nextPrimaryChildren3,
										renderLanes2
									);
									workInProgress2.memoizedState = null;
									return _primaryChildFragment4;
								}
							} else {
								if (showFallback) {
									var _nextFallbackChildren3 = nextProps.fallback;
									var _nextPrimaryChildren4 = nextProps.children;
									var _fallbackChildFragment2 = updateSuspenseFallbackChildren(
										current2,
										workInProgress2,
										_nextPrimaryChildren4,
										_nextFallbackChildren3,
										renderLanes2
									);
									var _primaryChildFragment5 = workInProgress2.child;
									var _prevOffscreenState = current2.child.memoizedState;
									_primaryChildFragment5.memoizedState =
										_prevOffscreenState === null
											? mountSuspenseOffscreenState(renderLanes2)
											: updateSuspenseOffscreenState(_prevOffscreenState, renderLanes2);
									_primaryChildFragment5.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
									workInProgress2.memoizedState = SUSPENDED_MARKER;
									return _fallbackChildFragment2;
								} else {
									var _nextPrimaryChildren5 = nextProps.children;
									var _primaryChildFragment6 = updateSuspensePrimaryChildren(
										current2,
										workInProgress2,
										_nextPrimaryChildren5,
										renderLanes2
									);
									workInProgress2.memoizedState = null;
									return _primaryChildFragment6;
								}
							}
						}
					}
					function mountSuspensePrimaryChildren(workInProgress2, primaryChildren, renderLanes2) {
						var mode = workInProgress2.mode;
						var primaryChildProps = {
							mode: 'visible',
							children: primaryChildren
						};
						var primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, renderLanes2, null);
						primaryChildFragment.return = workInProgress2;
						workInProgress2.child = primaryChildFragment;
						return primaryChildFragment;
					}
					function mountSuspenseFallbackChildren(workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
						var mode = workInProgress2.mode;
						var progressedPrimaryFragment = workInProgress2.child;
						var primaryChildProps = {
							mode: 'hidden',
							children: primaryChildren
						};
						var primaryChildFragment;
						var fallbackChildFragment;
						if ((mode & BlockingMode) === NoMode && progressedPrimaryFragment !== null) {
							primaryChildFragment = progressedPrimaryFragment;
							primaryChildFragment.childLanes = NoLanes;
							primaryChildFragment.pendingProps = primaryChildProps;
							if (workInProgress2.mode & ProfileMode) {
								primaryChildFragment.actualDuration = 0;
								primaryChildFragment.actualStartTime = -1;
								primaryChildFragment.selfBaseDuration = 0;
								primaryChildFragment.treeBaseDuration = 0;
							}
							fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
						} else {
							primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, NoLanes, null);
							fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
						}
						primaryChildFragment.return = workInProgress2;
						fallbackChildFragment.return = workInProgress2;
						primaryChildFragment.sibling = fallbackChildFragment;
						workInProgress2.child = primaryChildFragment;
						return fallbackChildFragment;
					}
					function createWorkInProgressOffscreenFiber(current2, offscreenProps) {
						return createWorkInProgress(current2, offscreenProps);
					}
					function updateSuspensePrimaryChildren(current2, workInProgress2, primaryChildren, renderLanes2) {
						var currentPrimaryChildFragment = current2.child;
						var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
						var primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, {
							mode: 'visible',
							children: primaryChildren
						});
						if ((workInProgress2.mode & BlockingMode) === NoMode) {
							primaryChildFragment.lanes = renderLanes2;
						}
						primaryChildFragment.return = workInProgress2;
						primaryChildFragment.sibling = null;
						if (currentFallbackChildFragment !== null) {
							currentFallbackChildFragment.nextEffect = null;
							currentFallbackChildFragment.flags = Deletion;
							workInProgress2.firstEffect = workInProgress2.lastEffect = currentFallbackChildFragment;
						}
						workInProgress2.child = primaryChildFragment;
						return primaryChildFragment;
					}
					function updateSuspenseFallbackChildren(
						current2,
						workInProgress2,
						primaryChildren,
						fallbackChildren,
						renderLanes2
					) {
						var mode = workInProgress2.mode;
						var currentPrimaryChildFragment = current2.child;
						var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
						var primaryChildProps = {
							mode: 'hidden',
							children: primaryChildren
						};
						var primaryChildFragment;
						if ((mode & BlockingMode) === NoMode && workInProgress2.child !== currentPrimaryChildFragment) {
							var progressedPrimaryFragment = workInProgress2.child;
							primaryChildFragment = progressedPrimaryFragment;
							primaryChildFragment.childLanes = NoLanes;
							primaryChildFragment.pendingProps = primaryChildProps;
							if (workInProgress2.mode & ProfileMode) {
								primaryChildFragment.actualDuration = 0;
								primaryChildFragment.actualStartTime = -1;
								primaryChildFragment.selfBaseDuration = currentPrimaryChildFragment.selfBaseDuration;
								primaryChildFragment.treeBaseDuration = currentPrimaryChildFragment.treeBaseDuration;
							}
							var progressedLastEffect = primaryChildFragment.lastEffect;
							if (progressedLastEffect !== null) {
								workInProgress2.firstEffect = primaryChildFragment.firstEffect;
								workInProgress2.lastEffect = progressedLastEffect;
								progressedLastEffect.nextEffect = null;
							} else {
								workInProgress2.firstEffect = workInProgress2.lastEffect = null;
							}
						} else {
							primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, primaryChildProps);
						}
						var fallbackChildFragment;
						if (currentFallbackChildFragment !== null) {
							fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, fallbackChildren);
						} else {
							fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
							fallbackChildFragment.flags |= Placement;
						}
						fallbackChildFragment.return = workInProgress2;
						primaryChildFragment.return = workInProgress2;
						primaryChildFragment.sibling = fallbackChildFragment;
						workInProgress2.child = primaryChildFragment;
						return fallbackChildFragment;
					}
					function scheduleWorkOnFiber(fiber, renderLanes2) {
						fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
						var alternate = fiber.alternate;
						if (alternate !== null) {
							alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
						}
						scheduleWorkOnParentPath(fiber.return, renderLanes2);
					}
					function propagateSuspenseContextChange(workInProgress2, firstChild, renderLanes2) {
						var node = firstChild;
						while (node !== null) {
							if (node.tag === SuspenseComponent) {
								var state = node.memoizedState;
								if (state !== null) {
									scheduleWorkOnFiber(node, renderLanes2);
								}
							} else if (node.tag === SuspenseListComponent) {
								scheduleWorkOnFiber(node, renderLanes2);
							} else if (node.child !== null) {
								node.child.return = node;
								node = node.child;
								continue;
							}
							if (node === workInProgress2) {
								return;
							}
							while (node.sibling === null) {
								if (node.return === null || node.return === workInProgress2) {
									return;
								}
								node = node.return;
							}
							node.sibling.return = node.return;
							node = node.sibling;
						}
					}
					function findLastContentRow(firstChild) {
						var row = firstChild;
						var lastContentRow = null;
						while (row !== null) {
							var currentRow = row.alternate;
							if (currentRow !== null && findFirstSuspended(currentRow) === null) {
								lastContentRow = row;
							}
							row = row.sibling;
						}
						return lastContentRow;
					}
					function validateRevealOrder(revealOrder) {
						{
							if (
								revealOrder !== void 0 &&
								revealOrder !== 'forwards' &&
								revealOrder !== 'backwards' &&
								revealOrder !== 'together' &&
								!didWarnAboutRevealOrder[revealOrder]
							) {
								didWarnAboutRevealOrder[revealOrder] = true;
								if (typeof revealOrder === 'string') {
									switch (revealOrder.toLowerCase()) {
										case 'together':
										case 'forwards':
										case 'backwards': {
											error(
												'"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
												revealOrder,
												revealOrder.toLowerCase()
											);
											break;
										}
										case 'forward':
										case 'backward': {
											error(
												'"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
												revealOrder,
												revealOrder.toLowerCase()
											);
											break;
										}
										default:
											error(
												'"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
												revealOrder
											);
											break;
									}
								} else {
									error(
										'%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
										revealOrder
									);
								}
							}
						}
					}
					function validateTailOptions(tailMode, revealOrder) {
						{
							if (tailMode !== void 0 && !didWarnAboutTailOptions[tailMode]) {
								if (tailMode !== 'collapsed' && tailMode !== 'hidden') {
									didWarnAboutTailOptions[tailMode] = true;
									error(
										'"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
										tailMode
									);
								} else if (revealOrder !== 'forwards' && revealOrder !== 'backwards') {
									didWarnAboutTailOptions[tailMode] = true;
									error(
										'<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
										tailMode
									);
								}
							}
						}
					}
					function validateSuspenseListNestedChild(childSlot, index2) {
						{
							var isArray2 = Array.isArray(childSlot);
							var isIterable = !isArray2 && typeof getIteratorFn(childSlot) === 'function';
							if (isArray2 || isIterable) {
								var type = isArray2 ? 'array' : 'iterable';
								error(
									'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>',
									type,
									index2,
									type
								);
								return false;
							}
						}
						return true;
					}
					function validateSuspenseListChildren(children, revealOrder) {
						{
							if (
								(revealOrder === 'forwards' || revealOrder === 'backwards') &&
								children !== void 0 &&
								children !== null &&
								children !== false
							) {
								if (Array.isArray(children)) {
									for (var i2 = 0; i2 < children.length; i2++) {
										if (!validateSuspenseListNestedChild(children[i2], i2)) {
											return;
										}
									}
								} else {
									var iteratorFn = getIteratorFn(children);
									if (typeof iteratorFn === 'function') {
										var childrenIterator = iteratorFn.call(children);
										if (childrenIterator) {
											var step = childrenIterator.next();
											var _i = 0;
											for (; !step.done; step = childrenIterator.next()) {
												if (!validateSuspenseListNestedChild(step.value, _i)) {
													return;
												}
												_i++;
											}
										}
									} else {
										error(
											'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
											revealOrder
										);
									}
								}
							}
						}
					}
					function initSuspenseListRenderState(
						workInProgress2,
						isBackwards,
						tail,
						lastContentRow,
						tailMode,
						lastEffectBeforeRendering
					) {
						var renderState = workInProgress2.memoizedState;
						if (renderState === null) {
							workInProgress2.memoizedState = {
								isBackwards,
								rendering: null,
								renderingStartTime: 0,
								last: lastContentRow,
								tail,
								tailMode,
								lastEffect: lastEffectBeforeRendering
							};
						} else {
							renderState.isBackwards = isBackwards;
							renderState.rendering = null;
							renderState.renderingStartTime = 0;
							renderState.last = lastContentRow;
							renderState.tail = tail;
							renderState.tailMode = tailMode;
							renderState.lastEffect = lastEffectBeforeRendering;
						}
					}
					function updateSuspenseListComponent(current2, workInProgress2, renderLanes2) {
						var nextProps = workInProgress2.pendingProps;
						var revealOrder = nextProps.revealOrder;
						var tailMode = nextProps.tail;
						var newChildren = nextProps.children;
						validateRevealOrder(revealOrder);
						validateTailOptions(tailMode, revealOrder);
						validateSuspenseListChildren(newChildren, revealOrder);
						reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
						var suspenseContext = suspenseStackCursor.current;
						var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
						if (shouldForceFallback) {
							suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
							workInProgress2.flags |= DidCapture;
						} else {
							var didSuspendBefore = current2 !== null && (current2.flags & DidCapture) !== NoFlags;
							if (didSuspendBefore) {
								propagateSuspenseContextChange(workInProgress2, workInProgress2.child, renderLanes2);
							}
							suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
						}
						pushSuspenseContext(workInProgress2, suspenseContext);
						if ((workInProgress2.mode & BlockingMode) === NoMode) {
							workInProgress2.memoizedState = null;
						} else {
							switch (revealOrder) {
								case 'forwards': {
									var lastContentRow = findLastContentRow(workInProgress2.child);
									var tail;
									if (lastContentRow === null) {
										tail = workInProgress2.child;
										workInProgress2.child = null;
									} else {
										tail = lastContentRow.sibling;
										lastContentRow.sibling = null;
									}
									initSuspenseListRenderState(
										workInProgress2,
										false,
										tail,
										lastContentRow,
										tailMode,
										workInProgress2.lastEffect
									);
									break;
								}
								case 'backwards': {
									var _tail = null;
									var row = workInProgress2.child;
									workInProgress2.child = null;
									while (row !== null) {
										var currentRow = row.alternate;
										if (currentRow !== null && findFirstSuspended(currentRow) === null) {
											workInProgress2.child = row;
											break;
										}
										var nextRow = row.sibling;
										row.sibling = _tail;
										_tail = row;
										row = nextRow;
									}
									initSuspenseListRenderState(workInProgress2, true, _tail, null, tailMode, workInProgress2.lastEffect);
									break;
								}
								case 'together': {
									initSuspenseListRenderState(workInProgress2, false, null, null, void 0, workInProgress2.lastEffect);
									break;
								}
								default: {
									workInProgress2.memoizedState = null;
								}
							}
						}
						return workInProgress2.child;
					}
					function updatePortalComponent(current2, workInProgress2, renderLanes2) {
						pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
						var nextChildren = workInProgress2.pendingProps;
						if (current2 === null) {
							workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
						} else {
							reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
						}
						return workInProgress2.child;
					}
					var hasWarnedAboutUsingNoValuePropOnContextProvider = false;
					function updateContextProvider(current2, workInProgress2, renderLanes2) {
						var providerType = workInProgress2.type;
						var context = providerType._context;
						var newProps = workInProgress2.pendingProps;
						var oldProps = workInProgress2.memoizedProps;
						var newValue = newProps.value;
						{
							if (!('value' in newProps)) {
								if (!hasWarnedAboutUsingNoValuePropOnContextProvider) {
									hasWarnedAboutUsingNoValuePropOnContextProvider = true;
									error(
										'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?'
									);
								}
							}
							var providerPropTypes = workInProgress2.type.propTypes;
							if (providerPropTypes) {
								checkPropTypes(providerPropTypes, newProps, 'prop', 'Context.Provider');
							}
						}
						pushProvider(workInProgress2, newValue);
						if (oldProps !== null) {
							var oldValue = oldProps.value;
							var changedBits = calculateChangedBits(context, newValue, oldValue);
							if (changedBits === 0) {
								if (oldProps.children === newProps.children && !hasContextChanged()) {
									return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
								}
							} else {
								propagateContextChange(workInProgress2, context, changedBits, renderLanes2);
							}
						}
						var newChildren = newProps.children;
						reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
						return workInProgress2.child;
					}
					var hasWarnedAboutUsingContextAsConsumer = false;
					function updateContextConsumer(current2, workInProgress2, renderLanes2) {
						var context = workInProgress2.type;
						{
							if (context._context === void 0) {
								if (context !== context.Consumer) {
									if (!hasWarnedAboutUsingContextAsConsumer) {
										hasWarnedAboutUsingContextAsConsumer = true;
										error(
											'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
										);
									}
								}
							} else {
								context = context._context;
							}
						}
						var newProps = workInProgress2.pendingProps;
						var render3 = newProps.children;
						{
							if (typeof render3 !== 'function') {
								error(
									"A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
								);
							}
						}
						prepareToReadContext(workInProgress2, renderLanes2);
						var newValue = readContext(context, newProps.unstable_observedBits);
						var newChildren;
						{
							ReactCurrentOwner$1.current = workInProgress2;
							setIsRendering(true);
							newChildren = render3(newValue);
							setIsRendering(false);
						}
						workInProgress2.flags |= PerformedWork;
						reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
						return workInProgress2.child;
					}
					function markWorkInProgressReceivedUpdate() {
						didReceiveUpdate = true;
					}
					function bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2) {
						if (current2 !== null) {
							workInProgress2.dependencies = current2.dependencies;
						}
						{
							stopProfilerTimerIfRunning();
						}
						markSkippedUpdateLanes(workInProgress2.lanes);
						if (!includesSomeLane(renderLanes2, workInProgress2.childLanes)) {
							return null;
						} else {
							cloneChildFibers(current2, workInProgress2);
							return workInProgress2.child;
						}
					}
					function remountFiber(current2, oldWorkInProgress, newWorkInProgress) {
						{
							var returnFiber = oldWorkInProgress.return;
							if (returnFiber === null) {
								throw new Error('Cannot swap the root fiber.');
							}
							current2.alternate = null;
							oldWorkInProgress.alternate = null;
							newWorkInProgress.index = oldWorkInProgress.index;
							newWorkInProgress.sibling = oldWorkInProgress.sibling;
							newWorkInProgress.return = oldWorkInProgress.return;
							newWorkInProgress.ref = oldWorkInProgress.ref;
							if (oldWorkInProgress === returnFiber.child) {
								returnFiber.child = newWorkInProgress;
							} else {
								var prevSibling = returnFiber.child;
								if (prevSibling === null) {
									throw new Error('Expected parent to have a child.');
								}
								while (prevSibling.sibling !== oldWorkInProgress) {
									prevSibling = prevSibling.sibling;
									if (prevSibling === null) {
										throw new Error('Expected to find the previous sibling.');
									}
								}
								prevSibling.sibling = newWorkInProgress;
							}
							var last = returnFiber.lastEffect;
							if (last !== null) {
								last.nextEffect = current2;
								returnFiber.lastEffect = current2;
							} else {
								returnFiber.firstEffect = returnFiber.lastEffect = current2;
							}
							current2.nextEffect = null;
							current2.flags = Deletion;
							newWorkInProgress.flags |= Placement;
							return newWorkInProgress;
						}
					}
					function beginWork(current2, workInProgress2, renderLanes2) {
						var updateLanes = workInProgress2.lanes;
						{
							if (workInProgress2._debugNeedsRemount && current2 !== null) {
								return remountFiber(
									current2,
									workInProgress2,
									createFiberFromTypeAndProps(
										workInProgress2.type,
										workInProgress2.key,
										workInProgress2.pendingProps,
										workInProgress2._debugOwner || null,
										workInProgress2.mode,
										workInProgress2.lanes
									)
								);
							}
						}
						if (current2 !== null) {
							var oldProps = current2.memoizedProps;
							var newProps = workInProgress2.pendingProps;
							if (oldProps !== newProps || hasContextChanged() || workInProgress2.type !== current2.type) {
								didReceiveUpdate = true;
							} else if (!includesSomeLane(renderLanes2, updateLanes)) {
								didReceiveUpdate = false;
								switch (workInProgress2.tag) {
									case HostRoot:
										pushHostRootContext(workInProgress2);
										resetHydrationState();
										break;
									case HostComponent:
										pushHostContext(workInProgress2);
										break;
									case ClassComponent: {
										var Component = workInProgress2.type;
										if (isContextProvider(Component)) {
											pushContextProvider(workInProgress2);
										}
										break;
									}
									case HostPortal:
										pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
										break;
									case ContextProvider: {
										var newValue = workInProgress2.memoizedProps.value;
										pushProvider(workInProgress2, newValue);
										break;
									}
									case Profiler:
										{
											var hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
											if (hasChildWork) {
												workInProgress2.flags |= Update;
											}
											var stateNode = workInProgress2.stateNode;
											stateNode.effectDuration = 0;
											stateNode.passiveEffectDuration = 0;
										}
										break;
									case SuspenseComponent: {
										var state = workInProgress2.memoizedState;
										if (state !== null) {
											var primaryChildFragment = workInProgress2.child;
											var primaryChildLanes = primaryChildFragment.childLanes;
											if (includesSomeLane(renderLanes2, primaryChildLanes)) {
												return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
											} else {
												pushSuspenseContext(
													workInProgress2,
													setDefaultShallowSuspenseContext(suspenseStackCursor.current)
												);
												var child = bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
												if (child !== null) {
													return child.sibling;
												} else {
													return null;
												}
											}
										} else {
											pushSuspenseContext(
												workInProgress2,
												setDefaultShallowSuspenseContext(suspenseStackCursor.current)
											);
										}
										break;
									}
									case SuspenseListComponent: {
										var didSuspendBefore = (current2.flags & DidCapture) !== NoFlags;
										var _hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
										if (didSuspendBefore) {
											if (_hasChildWork) {
												return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
											}
											workInProgress2.flags |= DidCapture;
										}
										var renderState = workInProgress2.memoizedState;
										if (renderState !== null) {
											renderState.rendering = null;
											renderState.tail = null;
											renderState.lastEffect = null;
										}
										pushSuspenseContext(workInProgress2, suspenseStackCursor.current);
										if (_hasChildWork) {
											break;
										} else {
											return null;
										}
									}
									case OffscreenComponent:
									case LegacyHiddenComponent: {
										workInProgress2.lanes = NoLanes;
										return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
									}
								}
								return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
							} else {
								if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
									didReceiveUpdate = true;
								} else {
									didReceiveUpdate = false;
								}
							}
						} else {
							didReceiveUpdate = false;
						}
						workInProgress2.lanes = NoLanes;
						switch (workInProgress2.tag) {
							case IndeterminateComponent: {
								return mountIndeterminateComponent(current2, workInProgress2, workInProgress2.type, renderLanes2);
							}
							case LazyComponent: {
								var elementType = workInProgress2.elementType;
								return mountLazyComponent(current2, workInProgress2, elementType, updateLanes, renderLanes2);
							}
							case FunctionComponent: {
								var _Component = workInProgress2.type;
								var unresolvedProps = workInProgress2.pendingProps;
								var resolvedProps =
									workInProgress2.elementType === _Component
										? unresolvedProps
										: resolveDefaultProps(_Component, unresolvedProps);
								return updateFunctionComponent(current2, workInProgress2, _Component, resolvedProps, renderLanes2);
							}
							case ClassComponent: {
								var _Component2 = workInProgress2.type;
								var _unresolvedProps = workInProgress2.pendingProps;
								var _resolvedProps =
									workInProgress2.elementType === _Component2
										? _unresolvedProps
										: resolveDefaultProps(_Component2, _unresolvedProps);
								return updateClassComponent(current2, workInProgress2, _Component2, _resolvedProps, renderLanes2);
							}
							case HostRoot:
								return updateHostRoot(current2, workInProgress2, renderLanes2);
							case HostComponent:
								return updateHostComponent(current2, workInProgress2, renderLanes2);
							case HostText:
								return updateHostText(current2, workInProgress2);
							case SuspenseComponent:
								return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
							case HostPortal:
								return updatePortalComponent(current2, workInProgress2, renderLanes2);
							case ForwardRef: {
								var type = workInProgress2.type;
								var _unresolvedProps2 = workInProgress2.pendingProps;
								var _resolvedProps2 =
									workInProgress2.elementType === type
										? _unresolvedProps2
										: resolveDefaultProps(type, _unresolvedProps2);
								return updateForwardRef(current2, workInProgress2, type, _resolvedProps2, renderLanes2);
							}
							case Fragment:
								return updateFragment(current2, workInProgress2, renderLanes2);
							case Mode:
								return updateMode(current2, workInProgress2, renderLanes2);
							case Profiler:
								return updateProfiler(current2, workInProgress2, renderLanes2);
							case ContextProvider:
								return updateContextProvider(current2, workInProgress2, renderLanes2);
							case ContextConsumer:
								return updateContextConsumer(current2, workInProgress2, renderLanes2);
							case MemoComponent: {
								var _type2 = workInProgress2.type;
								var _unresolvedProps3 = workInProgress2.pendingProps;
								var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
								{
									if (workInProgress2.type !== workInProgress2.elementType) {
										var outerPropTypes = _type2.propTypes;
										if (outerPropTypes) {
											checkPropTypes(outerPropTypes, _resolvedProps3, 'prop', getComponentName(_type2));
										}
									}
								}
								_resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
								return updateMemoComponent(
									current2,
									workInProgress2,
									_type2,
									_resolvedProps3,
									updateLanes,
									renderLanes2
								);
							}
							case SimpleMemoComponent: {
								return updateSimpleMemoComponent(
									current2,
									workInProgress2,
									workInProgress2.type,
									workInProgress2.pendingProps,
									updateLanes,
									renderLanes2
								);
							}
							case IncompleteClassComponent: {
								var _Component3 = workInProgress2.type;
								var _unresolvedProps4 = workInProgress2.pendingProps;
								var _resolvedProps4 =
									workInProgress2.elementType === _Component3
										? _unresolvedProps4
										: resolveDefaultProps(_Component3, _unresolvedProps4);
								return mountIncompleteClassComponent(
									current2,
									workInProgress2,
									_Component3,
									_resolvedProps4,
									renderLanes2
								);
							}
							case SuspenseListComponent: {
								return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
							}
							case FundamentalComponent: {
								break;
							}
							case ScopeComponent: {
								break;
							}
							case Block: {
								break;
							}
							case OffscreenComponent: {
								return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
							}
							case LegacyHiddenComponent: {
								return updateLegacyHiddenComponent(current2, workInProgress2, renderLanes2);
							}
						}
						{
							{
								throw Error(
									'Unknown unit of work tag (' +
										workInProgress2.tag +
										'). This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
					}
					function markUpdate(workInProgress2) {
						workInProgress2.flags |= Update;
					}
					function markRef$1(workInProgress2) {
						workInProgress2.flags |= Ref;
					}
					var appendAllChildren;
					var updateHostContainer;
					var updateHostComponent$1;
					var updateHostText$1;
					{
						appendAllChildren = function (parent, workInProgress2, needsVisibilityToggle, isHidden) {
							var node = workInProgress2.child;
							while (node !== null) {
								if (node.tag === HostComponent || node.tag === HostText) {
									appendInitialChild(parent, node.stateNode);
								} else if (node.tag === HostPortal);
								else if (node.child !== null) {
									node.child.return = node;
									node = node.child;
									continue;
								}
								if (node === workInProgress2) {
									return;
								}
								while (node.sibling === null) {
									if (node.return === null || node.return === workInProgress2) {
										return;
									}
									node = node.return;
								}
								node.sibling.return = node.return;
								node = node.sibling;
							}
						};
						updateHostContainer = function (workInProgress2) {};
						updateHostComponent$1 = function (current2, workInProgress2, type, newProps, rootContainerInstance) {
							var oldProps = current2.memoizedProps;
							if (oldProps === newProps) {
								return;
							}
							var instance = workInProgress2.stateNode;
							var currentHostContext = getHostContext();
							var updatePayload = prepareUpdate(
								instance,
								type,
								oldProps,
								newProps,
								rootContainerInstance,
								currentHostContext
							);
							workInProgress2.updateQueue = updatePayload;
							if (updatePayload) {
								markUpdate(workInProgress2);
							}
						};
						updateHostText$1 = function (current2, workInProgress2, oldText, newText) {
							if (oldText !== newText) {
								markUpdate(workInProgress2);
							}
						};
					}
					function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
						if (getIsHydrating()) {
							return;
						}
						switch (renderState.tailMode) {
							case 'hidden': {
								var tailNode = renderState.tail;
								var lastTailNode = null;
								while (tailNode !== null) {
									if (tailNode.alternate !== null) {
										lastTailNode = tailNode;
									}
									tailNode = tailNode.sibling;
								}
								if (lastTailNode === null) {
									renderState.tail = null;
								} else {
									lastTailNode.sibling = null;
								}
								break;
							}
							case 'collapsed': {
								var _tailNode = renderState.tail;
								var _lastTailNode = null;
								while (_tailNode !== null) {
									if (_tailNode.alternate !== null) {
										_lastTailNode = _tailNode;
									}
									_tailNode = _tailNode.sibling;
								}
								if (_lastTailNode === null) {
									if (!hasRenderedATailFallback && renderState.tail !== null) {
										renderState.tail.sibling = null;
									} else {
										renderState.tail = null;
									}
								} else {
									_lastTailNode.sibling = null;
								}
								break;
							}
						}
					}
					function completeWork(current2, workInProgress2, renderLanes2) {
						var newProps = workInProgress2.pendingProps;
						switch (workInProgress2.tag) {
							case IndeterminateComponent:
							case LazyComponent:
							case SimpleMemoComponent:
							case FunctionComponent:
							case ForwardRef:
							case Fragment:
							case Mode:
							case Profiler:
							case ContextConsumer:
							case MemoComponent:
								return null;
							case ClassComponent: {
								var Component = workInProgress2.type;
								if (isContextProvider(Component)) {
									popContext(workInProgress2);
								}
								return null;
							}
							case HostRoot: {
								popHostContainer(workInProgress2);
								popTopLevelContextObject(workInProgress2);
								resetWorkInProgressVersions();
								var fiberRoot = workInProgress2.stateNode;
								if (fiberRoot.pendingContext) {
									fiberRoot.context = fiberRoot.pendingContext;
									fiberRoot.pendingContext = null;
								}
								if (current2 === null || current2.child === null) {
									var wasHydrated = popHydrationState(workInProgress2);
									if (wasHydrated) {
										markUpdate(workInProgress2);
									} else if (!fiberRoot.hydrate) {
										workInProgress2.flags |= Snapshot;
									}
								}
								updateHostContainer(workInProgress2);
								return null;
							}
							case HostComponent: {
								popHostContext(workInProgress2);
								var rootContainerInstance = getRootHostContainer();
								var type = workInProgress2.type;
								if (current2 !== null && workInProgress2.stateNode != null) {
									updateHostComponent$1(current2, workInProgress2, type, newProps, rootContainerInstance);
									if (current2.ref !== workInProgress2.ref) {
										markRef$1(workInProgress2);
									}
								} else {
									if (!newProps) {
										if (!(workInProgress2.stateNode !== null)) {
											{
												throw Error(
													'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
												);
											}
										}
										return null;
									}
									var currentHostContext = getHostContext();
									var _wasHydrated = popHydrationState(workInProgress2);
									if (_wasHydrated) {
										if (prepareToHydrateHostInstance(workInProgress2, rootContainerInstance, currentHostContext)) {
											markUpdate(workInProgress2);
										}
									} else {
										var instance = createInstance(
											type,
											newProps,
											rootContainerInstance,
											currentHostContext,
											workInProgress2
										);
										appendAllChildren(instance, workInProgress2, false, false);
										workInProgress2.stateNode = instance;
										if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance)) {
											markUpdate(workInProgress2);
										}
									}
									if (workInProgress2.ref !== null) {
										markRef$1(workInProgress2);
									}
								}
								return null;
							}
							case HostText: {
								var newText = newProps;
								if (current2 && workInProgress2.stateNode != null) {
									var oldText = current2.memoizedProps;
									updateHostText$1(current2, workInProgress2, oldText, newText);
								} else {
									if (typeof newText !== 'string') {
										if (!(workInProgress2.stateNode !== null)) {
											{
												throw Error(
													'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
												);
											}
										}
									}
									var _rootContainerInstance = getRootHostContainer();
									var _currentHostContext = getHostContext();
									var _wasHydrated2 = popHydrationState(workInProgress2);
									if (_wasHydrated2) {
										if (prepareToHydrateHostTextInstance(workInProgress2)) {
											markUpdate(workInProgress2);
										}
									} else {
										workInProgress2.stateNode = createTextInstance(
											newText,
											_rootContainerInstance,
											_currentHostContext,
											workInProgress2
										);
									}
								}
								return null;
							}
							case SuspenseComponent: {
								popSuspenseContext(workInProgress2);
								var nextState = workInProgress2.memoizedState;
								if ((workInProgress2.flags & DidCapture) !== NoFlags) {
									workInProgress2.lanes = renderLanes2;
									if ((workInProgress2.mode & ProfileMode) !== NoMode) {
										transferActualDuration(workInProgress2);
									}
									return workInProgress2;
								}
								var nextDidTimeout = nextState !== null;
								var prevDidTimeout = false;
								if (current2 === null) {
									if (workInProgress2.memoizedProps.fallback !== void 0) {
										popHydrationState(workInProgress2);
									}
								} else {
									var prevState = current2.memoizedState;
									prevDidTimeout = prevState !== null;
								}
								if (nextDidTimeout && !prevDidTimeout) {
									if ((workInProgress2.mode & BlockingMode) !== NoMode) {
										var hasInvisibleChildContext =
											current2 === null && workInProgress2.memoizedProps.unstable_avoidThisFallback !== true;
										if (
											hasInvisibleChildContext ||
											hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)
										) {
											renderDidSuspend();
										} else {
											renderDidSuspendDelayIfPossible();
										}
									}
								}
								{
									if (nextDidTimeout || prevDidTimeout) {
										workInProgress2.flags |= Update;
									}
								}
								return null;
							}
							case HostPortal:
								popHostContainer(workInProgress2);
								updateHostContainer(workInProgress2);
								if (current2 === null) {
									preparePortalMount(workInProgress2.stateNode.containerInfo);
								}
								return null;
							case ContextProvider:
								popProvider(workInProgress2);
								return null;
							case IncompleteClassComponent: {
								var _Component = workInProgress2.type;
								if (isContextProvider(_Component)) {
									popContext(workInProgress2);
								}
								return null;
							}
							case SuspenseListComponent: {
								popSuspenseContext(workInProgress2);
								var renderState = workInProgress2.memoizedState;
								if (renderState === null) {
									return null;
								}
								var didSuspendAlready = (workInProgress2.flags & DidCapture) !== NoFlags;
								var renderedTail = renderState.rendering;
								if (renderedTail === null) {
									if (!didSuspendAlready) {
										var cannotBeSuspended =
											renderHasNotSuspendedYet() && (current2 === null || (current2.flags & DidCapture) === NoFlags);
										if (!cannotBeSuspended) {
											var row = workInProgress2.child;
											while (row !== null) {
												var suspended = findFirstSuspended(row);
												if (suspended !== null) {
													didSuspendAlready = true;
													workInProgress2.flags |= DidCapture;
													cutOffTailIfNeeded(renderState, false);
													var newThennables = suspended.updateQueue;
													if (newThennables !== null) {
														workInProgress2.updateQueue = newThennables;
														workInProgress2.flags |= Update;
													}
													if (renderState.lastEffect === null) {
														workInProgress2.firstEffect = null;
													}
													workInProgress2.lastEffect = renderState.lastEffect;
													resetChildFibers(workInProgress2, renderLanes2);
													pushSuspenseContext(
														workInProgress2,
														setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback)
													);
													return workInProgress2.child;
												}
												row = row.sibling;
											}
										}
										if (renderState.tail !== null && now() > getRenderTargetTime()) {
											workInProgress2.flags |= DidCapture;
											didSuspendAlready = true;
											cutOffTailIfNeeded(renderState, false);
											workInProgress2.lanes = SomeRetryLane;
											{
												markSpawnedWork(SomeRetryLane);
											}
										}
									} else {
										cutOffTailIfNeeded(renderState, false);
									}
								} else {
									if (!didSuspendAlready) {
										var _suspended = findFirstSuspended(renderedTail);
										if (_suspended !== null) {
											workInProgress2.flags |= DidCapture;
											didSuspendAlready = true;
											var _newThennables = _suspended.updateQueue;
											if (_newThennables !== null) {
												workInProgress2.updateQueue = _newThennables;
												workInProgress2.flags |= Update;
											}
											cutOffTailIfNeeded(renderState, true);
											if (
												renderState.tail === null &&
												renderState.tailMode === 'hidden' &&
												!renderedTail.alternate &&
												!getIsHydrating()
											) {
												var lastEffect = (workInProgress2.lastEffect = renderState.lastEffect);
												if (lastEffect !== null) {
													lastEffect.nextEffect = null;
												}
												return null;
											}
										} else if (
											now() * 2 - renderState.renderingStartTime > getRenderTargetTime() &&
											renderLanes2 !== OffscreenLane
										) {
											workInProgress2.flags |= DidCapture;
											didSuspendAlready = true;
											cutOffTailIfNeeded(renderState, false);
											workInProgress2.lanes = SomeRetryLane;
											{
												markSpawnedWork(SomeRetryLane);
											}
										}
									}
									if (renderState.isBackwards) {
										renderedTail.sibling = workInProgress2.child;
										workInProgress2.child = renderedTail;
									} else {
										var previousSibling = renderState.last;
										if (previousSibling !== null) {
											previousSibling.sibling = renderedTail;
										} else {
											workInProgress2.child = renderedTail;
										}
										renderState.last = renderedTail;
									}
								}
								if (renderState.tail !== null) {
									var next = renderState.tail;
									renderState.rendering = next;
									renderState.tail = next.sibling;
									renderState.lastEffect = workInProgress2.lastEffect;
									renderState.renderingStartTime = now();
									next.sibling = null;
									var suspenseContext = suspenseStackCursor.current;
									if (didSuspendAlready) {
										suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
									} else {
										suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
									}
									pushSuspenseContext(workInProgress2, suspenseContext);
									return next;
								}
								return null;
							}
							case FundamentalComponent: {
								break;
							}
							case ScopeComponent: {
								break;
							}
							case Block:
								break;
							case OffscreenComponent:
							case LegacyHiddenComponent: {
								popRenderLanes(workInProgress2);
								if (current2 !== null) {
									var _nextState = workInProgress2.memoizedState;
									var _prevState = current2.memoizedState;
									var prevIsHidden = _prevState !== null;
									var nextIsHidden = _nextState !== null;
									if (prevIsHidden !== nextIsHidden && newProps.mode !== 'unstable-defer-without-hiding') {
										workInProgress2.flags |= Update;
									}
								}
								return null;
							}
						}
						{
							{
								throw Error(
									'Unknown unit of work tag (' +
										workInProgress2.tag +
										'). This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
					}
					function unwindWork(workInProgress2, renderLanes2) {
						switch (workInProgress2.tag) {
							case ClassComponent: {
								var Component = workInProgress2.type;
								if (isContextProvider(Component)) {
									popContext(workInProgress2);
								}
								var flags = workInProgress2.flags;
								if (flags & ShouldCapture) {
									workInProgress2.flags = (flags & ~ShouldCapture) | DidCapture;
									if ((workInProgress2.mode & ProfileMode) !== NoMode) {
										transferActualDuration(workInProgress2);
									}
									return workInProgress2;
								}
								return null;
							}
							case HostRoot: {
								popHostContainer(workInProgress2);
								popTopLevelContextObject(workInProgress2);
								resetWorkInProgressVersions();
								var _flags = workInProgress2.flags;
								if (!((_flags & DidCapture) === NoFlags)) {
									{
										throw Error(
											'The root failed to unmount after an error. This is likely a bug in React. Please file an issue.'
										);
									}
								}
								workInProgress2.flags = (_flags & ~ShouldCapture) | DidCapture;
								return workInProgress2;
							}
							case HostComponent: {
								popHostContext(workInProgress2);
								return null;
							}
							case SuspenseComponent: {
								popSuspenseContext(workInProgress2);
								var _flags2 = workInProgress2.flags;
								if (_flags2 & ShouldCapture) {
									workInProgress2.flags = (_flags2 & ~ShouldCapture) | DidCapture;
									if ((workInProgress2.mode & ProfileMode) !== NoMode) {
										transferActualDuration(workInProgress2);
									}
									return workInProgress2;
								}
								return null;
							}
							case SuspenseListComponent: {
								popSuspenseContext(workInProgress2);
								return null;
							}
							case HostPortal:
								popHostContainer(workInProgress2);
								return null;
							case ContextProvider:
								popProvider(workInProgress2);
								return null;
							case OffscreenComponent:
							case LegacyHiddenComponent:
								popRenderLanes(workInProgress2);
								return null;
							default:
								return null;
						}
					}
					function unwindInterruptedWork(interruptedWork) {
						switch (interruptedWork.tag) {
							case ClassComponent: {
								var childContextTypes = interruptedWork.type.childContextTypes;
								if (childContextTypes !== null && childContextTypes !== void 0) {
									popContext(interruptedWork);
								}
								break;
							}
							case HostRoot: {
								popHostContainer(interruptedWork);
								popTopLevelContextObject(interruptedWork);
								resetWorkInProgressVersions();
								break;
							}
							case HostComponent: {
								popHostContext(interruptedWork);
								break;
							}
							case HostPortal:
								popHostContainer(interruptedWork);
								break;
							case SuspenseComponent:
								popSuspenseContext(interruptedWork);
								break;
							case SuspenseListComponent:
								popSuspenseContext(interruptedWork);
								break;
							case ContextProvider:
								popProvider(interruptedWork);
								break;
							case OffscreenComponent:
							case LegacyHiddenComponent:
								popRenderLanes(interruptedWork);
								break;
						}
					}
					function createCapturedValue(value, source) {
						return {
							value,
							source,
							stack: getStackByFiberInDevAndProd(source)
						};
					}
					function showErrorDialog(boundary, errorInfo) {
						return true;
					}
					function logCapturedError(boundary, errorInfo) {
						try {
							var logError = showErrorDialog(boundary, errorInfo);
							if (logError === false) {
								return;
							}
							var error2 = errorInfo.value;
							if (true) {
								var source = errorInfo.source;
								var stack = errorInfo.stack;
								var componentStack = stack !== null ? stack : '';
								if (error2 != null && error2._suppressLogging) {
									if (boundary.tag === ClassComponent) {
										return;
									}
									console['error'](error2);
								}
								var componentName = source ? getComponentName(source.type) : null;
								var componentNameMessage = componentName
									? 'The above error occurred in the <' + componentName + '> component:'
									: 'The above error occurred in one of your React components:';
								var errorBoundaryMessage;
								var errorBoundaryName = getComponentName(boundary.type);
								if (errorBoundaryName) {
									errorBoundaryMessage =
										'React will try to recreate this component tree from scratch ' +
										('using the error boundary you provided, ' + errorBoundaryName + '.');
								} else {
									errorBoundaryMessage =
										'Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.';
								}
								var combinedMessage =
									componentNameMessage + '\n' + componentStack + '\n\n' + ('' + errorBoundaryMessage);
								console['error'](combinedMessage);
							} else {
								console['error'](error2);
							}
						} catch (e) {
							setTimeout(function () {
								throw e;
							});
						}
					}
					var PossiblyWeakMap$1 = typeof WeakMap === 'function' ? WeakMap : Map;
					function createRootErrorUpdate(fiber, errorInfo, lane) {
						var update = createUpdate(NoTimestamp, lane);
						update.tag = CaptureUpdate;
						update.payload = {
							element: null
						};
						var error2 = errorInfo.value;
						update.callback = function () {
							onUncaughtError(error2);
							logCapturedError(fiber, errorInfo);
						};
						return update;
					}
					function createClassErrorUpdate(fiber, errorInfo, lane) {
						var update = createUpdate(NoTimestamp, lane);
						update.tag = CaptureUpdate;
						var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
						if (typeof getDerivedStateFromError === 'function') {
							var error$1 = errorInfo.value;
							update.payload = function () {
								logCapturedError(fiber, errorInfo);
								return getDerivedStateFromError(error$1);
							};
						}
						var inst = fiber.stateNode;
						if (inst !== null && typeof inst.componentDidCatch === 'function') {
							update.callback = function callback() {
								{
									markFailedErrorBoundaryForHotReloading(fiber);
								}
								if (typeof getDerivedStateFromError !== 'function') {
									markLegacyErrorBoundaryAsFailed(this);
									logCapturedError(fiber, errorInfo);
								}
								var error$12 = errorInfo.value;
								var stack = errorInfo.stack;
								this.componentDidCatch(error$12, {
									componentStack: stack !== null ? stack : ''
								});
								{
									if (typeof getDerivedStateFromError !== 'function') {
										if (!includesSomeLane(fiber.lanes, SyncLane)) {
											error(
												'%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
												getComponentName(fiber.type) || 'Unknown'
											);
										}
									}
								}
							};
						} else {
							update.callback = function () {
								markFailedErrorBoundaryForHotReloading(fiber);
							};
						}
						return update;
					}
					function attachPingListener(root2, wakeable, lanes) {
						var pingCache = root2.pingCache;
						var threadIDs;
						if (pingCache === null) {
							pingCache = root2.pingCache = new PossiblyWeakMap$1();
							threadIDs = /* @__PURE__ */ new Set();
							pingCache.set(wakeable, threadIDs);
						} else {
							threadIDs = pingCache.get(wakeable);
							if (threadIDs === void 0) {
								threadIDs = /* @__PURE__ */ new Set();
								pingCache.set(wakeable, threadIDs);
							}
						}
						if (!threadIDs.has(lanes)) {
							threadIDs.add(lanes);
							var ping = pingSuspendedRoot.bind(null, root2, wakeable, lanes);
							wakeable.then(ping, ping);
						}
					}
					function throwException(root2, returnFiber, sourceFiber, value, rootRenderLanes) {
						sourceFiber.flags |= Incomplete;
						sourceFiber.firstEffect = sourceFiber.lastEffect = null;
						if (value !== null && typeof value === 'object' && typeof value.then === 'function') {
							var wakeable = value;
							if ((sourceFiber.mode & BlockingMode) === NoMode) {
								var currentSource = sourceFiber.alternate;
								if (currentSource) {
									sourceFiber.updateQueue = currentSource.updateQueue;
									sourceFiber.memoizedState = currentSource.memoizedState;
									sourceFiber.lanes = currentSource.lanes;
								} else {
									sourceFiber.updateQueue = null;
									sourceFiber.memoizedState = null;
								}
							}
							var hasInvisibleParentBoundary = hasSuspenseContext(
								suspenseStackCursor.current,
								InvisibleParentSuspenseContext
							);
							var _workInProgress = returnFiber;
							do {
								if (
									_workInProgress.tag === SuspenseComponent &&
									shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)
								) {
									var wakeables = _workInProgress.updateQueue;
									if (wakeables === null) {
										var updateQueue = /* @__PURE__ */ new Set();
										updateQueue.add(wakeable);
										_workInProgress.updateQueue = updateQueue;
									} else {
										wakeables.add(wakeable);
									}
									if ((_workInProgress.mode & BlockingMode) === NoMode) {
										_workInProgress.flags |= DidCapture;
										sourceFiber.flags |= ForceUpdateForLegacySuspense;
										sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);
										if (sourceFiber.tag === ClassComponent) {
											var currentSourceFiber = sourceFiber.alternate;
											if (currentSourceFiber === null) {
												sourceFiber.tag = IncompleteClassComponent;
											} else {
												var update = createUpdate(NoTimestamp, SyncLane);
												update.tag = ForceUpdate;
												enqueueUpdate(sourceFiber, update);
											}
										}
										sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane);
										return;
									}
									attachPingListener(root2, wakeable, rootRenderLanes);
									_workInProgress.flags |= ShouldCapture;
									_workInProgress.lanes = rootRenderLanes;
									return;
								}
								_workInProgress = _workInProgress.return;
							} while (_workInProgress !== null);
							value = new Error(
								(getComponentName(sourceFiber.type) || 'A React component') +
									' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.'
							);
						}
						renderDidError();
						value = createCapturedValue(value, sourceFiber);
						var workInProgress2 = returnFiber;
						do {
							switch (workInProgress2.tag) {
								case HostRoot: {
									var _errorInfo = value;
									workInProgress2.flags |= ShouldCapture;
									var lane = pickArbitraryLane(rootRenderLanes);
									workInProgress2.lanes = mergeLanes(workInProgress2.lanes, lane);
									var _update = createRootErrorUpdate(workInProgress2, _errorInfo, lane);
									enqueueCapturedUpdate(workInProgress2, _update);
									return;
								}
								case ClassComponent:
									var errorInfo = value;
									var ctor = workInProgress2.type;
									var instance = workInProgress2.stateNode;
									if (
										(workInProgress2.flags & DidCapture) === NoFlags &&
										(typeof ctor.getDerivedStateFromError === 'function' ||
											(instance !== null &&
												typeof instance.componentDidCatch === 'function' &&
												!isAlreadyFailedLegacyErrorBoundary(instance)))
									) {
										workInProgress2.flags |= ShouldCapture;
										var _lane = pickArbitraryLane(rootRenderLanes);
										workInProgress2.lanes = mergeLanes(workInProgress2.lanes, _lane);
										var _update2 = createClassErrorUpdate(workInProgress2, errorInfo, _lane);
										enqueueCapturedUpdate(workInProgress2, _update2);
										return;
									}
									break;
							}
							workInProgress2 = workInProgress2.return;
						} while (workInProgress2 !== null);
					}
					var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
					{
						didWarnAboutUndefinedSnapshotBeforeUpdate = /* @__PURE__ */ new Set();
					}
					var PossiblyWeakSet = typeof WeakSet === 'function' ? WeakSet : Set;
					var callComponentWillUnmountWithTimer = function (current2, instance) {
						instance.props = current2.memoizedProps;
						instance.state = current2.memoizedState;
						{
							instance.componentWillUnmount();
						}
					};
					function safelyCallComponentWillUnmount(current2, instance) {
						{
							invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current2, instance);
							if (hasCaughtError()) {
								var unmountError = clearCaughtError();
								captureCommitPhaseError(current2, unmountError);
							}
						}
					}
					function safelyDetachRef(current2) {
						var ref = current2.ref;
						if (ref !== null) {
							if (typeof ref === 'function') {
								{
									invokeGuardedCallback(null, ref, null, null);
									if (hasCaughtError()) {
										var refError = clearCaughtError();
										captureCommitPhaseError(current2, refError);
									}
								}
							} else {
								ref.current = null;
							}
						}
					}
					function safelyCallDestroy(current2, destroy) {
						{
							invokeGuardedCallback(null, destroy, null);
							if (hasCaughtError()) {
								var error2 = clearCaughtError();
								captureCommitPhaseError(current2, error2);
							}
						}
					}
					function commitBeforeMutationLifeCycles(current2, finishedWork) {
						switch (finishedWork.tag) {
							case FunctionComponent:
							case ForwardRef:
							case SimpleMemoComponent:
							case Block: {
								return;
							}
							case ClassComponent: {
								if (finishedWork.flags & Snapshot) {
									if (current2 !== null) {
										var prevProps = current2.memoizedProps;
										var prevState = current2.memoizedState;
										var instance = finishedWork.stateNode;
										{
											if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
												if (instance.props !== finishedWork.memoizedProps) {
													error(
														'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
														getComponentName(finishedWork.type) || 'instance'
													);
												}
												if (instance.state !== finishedWork.memoizedState) {
													error(
														'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
														getComponentName(finishedWork.type) || 'instance'
													);
												}
											}
										}
										var snapshot = instance.getSnapshotBeforeUpdate(
											finishedWork.elementType === finishedWork.type
												? prevProps
												: resolveDefaultProps(finishedWork.type, prevProps),
											prevState
										);
										{
											var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
											if (snapshot === void 0 && !didWarnSet.has(finishedWork.type)) {
												didWarnSet.add(finishedWork.type);
												error(
													'%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
													getComponentName(finishedWork.type)
												);
											}
										}
										instance.__reactInternalSnapshotBeforeUpdate = snapshot;
									}
								}
								return;
							}
							case HostRoot: {
								{
									if (finishedWork.flags & Snapshot) {
										var root2 = finishedWork.stateNode;
										clearContainer(root2.containerInfo);
									}
								}
								return;
							}
							case HostComponent:
							case HostText:
							case HostPortal:
							case IncompleteClassComponent:
								return;
						}
						{
							{
								throw Error(
									'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
					}
					function commitHookEffectListUnmount(tag, finishedWork) {
						var updateQueue = finishedWork.updateQueue;
						var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
						if (lastEffect !== null) {
							var firstEffect = lastEffect.next;
							var effect = firstEffect;
							do {
								if ((effect.tag & tag) === tag) {
									var destroy = effect.destroy;
									effect.destroy = void 0;
									if (destroy !== void 0) {
										destroy();
									}
								}
								effect = effect.next;
							} while (effect !== firstEffect);
						}
					}
					function commitHookEffectListMount(tag, finishedWork) {
						var updateQueue = finishedWork.updateQueue;
						var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
						if (lastEffect !== null) {
							var firstEffect = lastEffect.next;
							var effect = firstEffect;
							do {
								if ((effect.tag & tag) === tag) {
									var create = effect.create;
									effect.destroy = create();
									{
										var destroy = effect.destroy;
										if (destroy !== void 0 && typeof destroy !== 'function') {
											var addendum = void 0;
											if (destroy === null) {
												addendum =
													' You returned null. If your effect does not require clean up, return undefined (or nothing).';
											} else if (typeof destroy.then === 'function') {
												addendum =
													"\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
											} else {
												addendum = ' You returned: ' + destroy;
											}
											error(
												'An effect function must not return anything besides a function, which is used for clean-up.%s',
												addendum
											);
										}
									}
								}
								effect = effect.next;
							} while (effect !== firstEffect);
						}
					}
					function schedulePassiveEffects(finishedWork) {
						var updateQueue = finishedWork.updateQueue;
						var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
						if (lastEffect !== null) {
							var firstEffect = lastEffect.next;
							var effect = firstEffect;
							do {
								var _effect = effect,
									next = _effect.next,
									tag = _effect.tag;
								if ((tag & Passive$1) !== NoFlags$1 && (tag & HasEffect) !== NoFlags$1) {
									enqueuePendingPassiveHookEffectUnmount(finishedWork, effect);
									enqueuePendingPassiveHookEffectMount(finishedWork, effect);
								}
								effect = next;
							} while (effect !== firstEffect);
						}
					}
					function commitLifeCycles(finishedRoot, current2, finishedWork, committedLanes) {
						switch (finishedWork.tag) {
							case FunctionComponent:
							case ForwardRef:
							case SimpleMemoComponent:
							case Block: {
								{
									commitHookEffectListMount(Layout | HasEffect, finishedWork);
								}
								schedulePassiveEffects(finishedWork);
								return;
							}
							case ClassComponent: {
								var instance = finishedWork.stateNode;
								if (finishedWork.flags & Update) {
									if (current2 === null) {
										{
											if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
												if (instance.props !== finishedWork.memoizedProps) {
													error(
														'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
														getComponentName(finishedWork.type) || 'instance'
													);
												}
												if (instance.state !== finishedWork.memoizedState) {
													error(
														'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
														getComponentName(finishedWork.type) || 'instance'
													);
												}
											}
										}
										{
											instance.componentDidMount();
										}
									} else {
										var prevProps =
											finishedWork.elementType === finishedWork.type
												? current2.memoizedProps
												: resolveDefaultProps(finishedWork.type, current2.memoizedProps);
										var prevState = current2.memoizedState;
										{
											if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
												if (instance.props !== finishedWork.memoizedProps) {
													error(
														'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
														getComponentName(finishedWork.type) || 'instance'
													);
												}
												if (instance.state !== finishedWork.memoizedState) {
													error(
														'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
														getComponentName(finishedWork.type) || 'instance'
													);
												}
											}
										}
										{
											instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
										}
									}
								}
								var updateQueue = finishedWork.updateQueue;
								if (updateQueue !== null) {
									{
										if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
											if (instance.props !== finishedWork.memoizedProps) {
												error(
													'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
													getComponentName(finishedWork.type) || 'instance'
												);
											}
											if (instance.state !== finishedWork.memoizedState) {
												error(
													'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
													getComponentName(finishedWork.type) || 'instance'
												);
											}
										}
									}
									commitUpdateQueue(finishedWork, updateQueue, instance);
								}
								return;
							}
							case HostRoot: {
								var _updateQueue = finishedWork.updateQueue;
								if (_updateQueue !== null) {
									var _instance = null;
									if (finishedWork.child !== null) {
										switch (finishedWork.child.tag) {
											case HostComponent:
												_instance = getPublicInstance(finishedWork.child.stateNode);
												break;
											case ClassComponent:
												_instance = finishedWork.child.stateNode;
												break;
										}
									}
									commitUpdateQueue(finishedWork, _updateQueue, _instance);
								}
								return;
							}
							case HostComponent: {
								var _instance2 = finishedWork.stateNode;
								if (current2 === null && finishedWork.flags & Update) {
									var type = finishedWork.type;
									var props = finishedWork.memoizedProps;
									commitMount(_instance2, type, props);
								}
								return;
							}
							case HostText: {
								return;
							}
							case HostPortal: {
								return;
							}
							case Profiler: {
								{
									var _finishedWork$memoize2 = finishedWork.memoizedProps,
										onCommit = _finishedWork$memoize2.onCommit,
										onRender = _finishedWork$memoize2.onRender;
									var effectDuration = finishedWork.stateNode.effectDuration;
									var commitTime2 = getCommitTime();
									if (typeof onRender === 'function') {
										{
											onRender(
												finishedWork.memoizedProps.id,
												current2 === null ? 'mount' : 'update',
												finishedWork.actualDuration,
												finishedWork.treeBaseDuration,
												finishedWork.actualStartTime,
												commitTime2,
												finishedRoot.memoizedInteractions
											);
										}
									}
								}
								return;
							}
							case SuspenseComponent: {
								commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
								return;
							}
							case SuspenseListComponent:
							case IncompleteClassComponent:
							case FundamentalComponent:
							case ScopeComponent:
							case OffscreenComponent:
							case LegacyHiddenComponent:
								return;
						}
						{
							{
								throw Error(
									'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
					}
					function hideOrUnhideAllChildren(finishedWork, isHidden) {
						{
							var node = finishedWork;
							while (true) {
								if (node.tag === HostComponent) {
									var instance = node.stateNode;
									if (isHidden) {
										hideInstance(instance);
									} else {
										unhideInstance(node.stateNode, node.memoizedProps);
									}
								} else if (node.tag === HostText) {
									var _instance3 = node.stateNode;
									if (isHidden) {
										hideTextInstance(_instance3);
									} else {
										unhideTextInstance(_instance3, node.memoizedProps);
									}
								} else if (
									(node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) &&
									node.memoizedState !== null &&
									node !== finishedWork
								);
								else if (node.child !== null) {
									node.child.return = node;
									node = node.child;
									continue;
								}
								if (node === finishedWork) {
									return;
								}
								while (node.sibling === null) {
									if (node.return === null || node.return === finishedWork) {
										return;
									}
									node = node.return;
								}
								node.sibling.return = node.return;
								node = node.sibling;
							}
						}
					}
					function commitAttachRef(finishedWork) {
						var ref = finishedWork.ref;
						if (ref !== null) {
							var instance = finishedWork.stateNode;
							var instanceToUse;
							switch (finishedWork.tag) {
								case HostComponent:
									instanceToUse = getPublicInstance(instance);
									break;
								default:
									instanceToUse = instance;
							}
							if (typeof ref === 'function') {
								ref(instanceToUse);
							} else {
								{
									if (!ref.hasOwnProperty('current')) {
										error(
											'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
											getComponentName(finishedWork.type)
										);
									}
								}
								ref.current = instanceToUse;
							}
						}
					}
					function commitDetachRef(current2) {
						var currentRef = current2.ref;
						if (currentRef !== null) {
							if (typeof currentRef === 'function') {
								currentRef(null);
							} else {
								currentRef.current = null;
							}
						}
					}
					function commitUnmount(finishedRoot, current2, renderPriorityLevel) {
						onCommitUnmount(current2);
						switch (current2.tag) {
							case FunctionComponent:
							case ForwardRef:
							case MemoComponent:
							case SimpleMemoComponent:
							case Block: {
								var updateQueue = current2.updateQueue;
								if (updateQueue !== null) {
									var lastEffect = updateQueue.lastEffect;
									if (lastEffect !== null) {
										var firstEffect = lastEffect.next;
										var effect = firstEffect;
										do {
											var _effect2 = effect,
												destroy = _effect2.destroy,
												tag = _effect2.tag;
											if (destroy !== void 0) {
												if ((tag & Passive$1) !== NoFlags$1) {
													enqueuePendingPassiveHookEffectUnmount(current2, effect);
												} else {
													{
														safelyCallDestroy(current2, destroy);
													}
												}
											}
											effect = effect.next;
										} while (effect !== firstEffect);
									}
								}
								return;
							}
							case ClassComponent: {
								safelyDetachRef(current2);
								var instance = current2.stateNode;
								if (typeof instance.componentWillUnmount === 'function') {
									safelyCallComponentWillUnmount(current2, instance);
								}
								return;
							}
							case HostComponent: {
								safelyDetachRef(current2);
								return;
							}
							case HostPortal: {
								{
									unmountHostComponents(finishedRoot, current2);
								}
								return;
							}
							case FundamentalComponent: {
								return;
							}
							case DehydratedFragment: {
								return;
							}
							case ScopeComponent: {
								return;
							}
						}
					}
					function commitNestedUnmounts(finishedRoot, root2, renderPriorityLevel) {
						var node = root2;
						while (true) {
							commitUnmount(finishedRoot, node);
							if (node.child !== null && node.tag !== HostPortal) {
								node.child.return = node;
								node = node.child;
								continue;
							}
							if (node === root2) {
								return;
							}
							while (node.sibling === null) {
								if (node.return === null || node.return === root2) {
									return;
								}
								node = node.return;
							}
							node.sibling.return = node.return;
							node = node.sibling;
						}
					}
					function detachFiberMutation(fiber) {
						fiber.alternate = null;
						fiber.child = null;
						fiber.dependencies = null;
						fiber.firstEffect = null;
						fiber.lastEffect = null;
						fiber.memoizedProps = null;
						fiber.memoizedState = null;
						fiber.pendingProps = null;
						fiber.return = null;
						fiber.updateQueue = null;
						{
							fiber._debugOwner = null;
						}
					}
					function getHostParentFiber(fiber) {
						var parent = fiber.return;
						while (parent !== null) {
							if (isHostParent(parent)) {
								return parent;
							}
							parent = parent.return;
						}
						{
							{
								throw Error(
									'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
					}
					function isHostParent(fiber) {
						return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
					}
					function getHostSibling(fiber) {
						var node = fiber;
						siblings: while (true) {
							while (node.sibling === null) {
								if (node.return === null || isHostParent(node.return)) {
									return null;
								}
								node = node.return;
							}
							node.sibling.return = node.return;
							node = node.sibling;
							while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
								if (node.flags & Placement) {
									continue siblings;
								}
								if (node.child === null || node.tag === HostPortal) {
									continue siblings;
								} else {
									node.child.return = node;
									node = node.child;
								}
							}
							if (!(node.flags & Placement)) {
								return node.stateNode;
							}
						}
					}
					function commitPlacement(finishedWork) {
						var parentFiber = getHostParentFiber(finishedWork);
						var parent;
						var isContainer;
						var parentStateNode = parentFiber.stateNode;
						switch (parentFiber.tag) {
							case HostComponent:
								parent = parentStateNode;
								isContainer = false;
								break;
							case HostRoot:
								parent = parentStateNode.containerInfo;
								isContainer = true;
								break;
							case HostPortal:
								parent = parentStateNode.containerInfo;
								isContainer = true;
								break;
							case FundamentalComponent:
							default: {
								{
									throw Error(
										'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
						}
						if (parentFiber.flags & ContentReset) {
							resetTextContent(parent);
							parentFiber.flags &= ~ContentReset;
						}
						var before = getHostSibling(finishedWork);
						if (isContainer) {
							insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent);
						} else {
							insertOrAppendPlacementNode(finishedWork, before, parent);
						}
					}
					function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
						var tag = node.tag;
						var isHost = tag === HostComponent || tag === HostText;
						if (isHost || enableFundamentalAPI) {
							var stateNode = isHost ? node.stateNode : node.stateNode.instance;
							if (before) {
								insertInContainerBefore(parent, stateNode, before);
							} else {
								appendChildToContainer(parent, stateNode);
							}
						} else if (tag === HostPortal);
						else {
							var child = node.child;
							if (child !== null) {
								insertOrAppendPlacementNodeIntoContainer(child, before, parent);
								var sibling = child.sibling;
								while (sibling !== null) {
									insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
									sibling = sibling.sibling;
								}
							}
						}
					}
					function insertOrAppendPlacementNode(node, before, parent) {
						var tag = node.tag;
						var isHost = tag === HostComponent || tag === HostText;
						if (isHost || enableFundamentalAPI) {
							var stateNode = isHost ? node.stateNode : node.stateNode.instance;
							if (before) {
								insertBefore(parent, stateNode, before);
							} else {
								appendChild(parent, stateNode);
							}
						} else if (tag === HostPortal);
						else {
							var child = node.child;
							if (child !== null) {
								insertOrAppendPlacementNode(child, before, parent);
								var sibling = child.sibling;
								while (sibling !== null) {
									insertOrAppendPlacementNode(sibling, before, parent);
									sibling = sibling.sibling;
								}
							}
						}
					}
					function unmountHostComponents(finishedRoot, current2, renderPriorityLevel) {
						var node = current2;
						var currentParentIsValid = false;
						var currentParent;
						var currentParentIsContainer;
						while (true) {
							if (!currentParentIsValid) {
								var parent = node.return;
								findParent: while (true) {
									if (!(parent !== null)) {
										{
											throw Error(
												'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
											);
										}
									}
									var parentStateNode = parent.stateNode;
									switch (parent.tag) {
										case HostComponent:
											currentParent = parentStateNode;
											currentParentIsContainer = false;
											break findParent;
										case HostRoot:
											currentParent = parentStateNode.containerInfo;
											currentParentIsContainer = true;
											break findParent;
										case HostPortal:
											currentParent = parentStateNode.containerInfo;
											currentParentIsContainer = true;
											break findParent;
									}
									parent = parent.return;
								}
								currentParentIsValid = true;
							}
							if (node.tag === HostComponent || node.tag === HostText) {
								commitNestedUnmounts(finishedRoot, node);
								if (currentParentIsContainer) {
									removeChildFromContainer(currentParent, node.stateNode);
								} else {
									removeChild(currentParent, node.stateNode);
								}
							} else if (node.tag === HostPortal) {
								if (node.child !== null) {
									currentParent = node.stateNode.containerInfo;
									currentParentIsContainer = true;
									node.child.return = node;
									node = node.child;
									continue;
								}
							} else {
								commitUnmount(finishedRoot, node);
								if (node.child !== null) {
									node.child.return = node;
									node = node.child;
									continue;
								}
							}
							if (node === current2) {
								return;
							}
							while (node.sibling === null) {
								if (node.return === null || node.return === current2) {
									return;
								}
								node = node.return;
								if (node.tag === HostPortal) {
									currentParentIsValid = false;
								}
							}
							node.sibling.return = node.return;
							node = node.sibling;
						}
					}
					function commitDeletion(finishedRoot, current2, renderPriorityLevel) {
						{
							unmountHostComponents(finishedRoot, current2);
						}
						var alternate = current2.alternate;
						detachFiberMutation(current2);
						if (alternate !== null) {
							detachFiberMutation(alternate);
						}
					}
					function commitWork(current2, finishedWork) {
						switch (finishedWork.tag) {
							case FunctionComponent:
							case ForwardRef:
							case MemoComponent:
							case SimpleMemoComponent:
							case Block: {
								{
									commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
								}
								return;
							}
							case ClassComponent: {
								return;
							}
							case HostComponent: {
								var instance = finishedWork.stateNode;
								if (instance != null) {
									var newProps = finishedWork.memoizedProps;
									var oldProps = current2 !== null ? current2.memoizedProps : newProps;
									var type = finishedWork.type;
									var updatePayload = finishedWork.updateQueue;
									finishedWork.updateQueue = null;
									if (updatePayload !== null) {
										commitUpdate(instance, updatePayload, type, oldProps, newProps);
									}
								}
								return;
							}
							case HostText: {
								if (!(finishedWork.stateNode !== null)) {
									{
										throw Error(
											'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
										);
									}
								}
								var textInstance = finishedWork.stateNode;
								var newText = finishedWork.memoizedProps;
								var oldText = current2 !== null ? current2.memoizedProps : newText;
								commitTextUpdate(textInstance, oldText, newText);
								return;
							}
							case HostRoot: {
								{
									var _root = finishedWork.stateNode;
									if (_root.hydrate) {
										_root.hydrate = false;
										commitHydratedContainer(_root.containerInfo);
									}
								}
								return;
							}
							case Profiler: {
								return;
							}
							case SuspenseComponent: {
								commitSuspenseComponent(finishedWork);
								attachSuspenseRetryListeners(finishedWork);
								return;
							}
							case SuspenseListComponent: {
								attachSuspenseRetryListeners(finishedWork);
								return;
							}
							case IncompleteClassComponent: {
								return;
							}
							case FundamentalComponent: {
								break;
							}
							case ScopeComponent: {
								break;
							}
							case OffscreenComponent:
							case LegacyHiddenComponent: {
								var newState = finishedWork.memoizedState;
								var isHidden = newState !== null;
								hideOrUnhideAllChildren(finishedWork, isHidden);
								return;
							}
						}
						{
							{
								throw Error(
									'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
					}
					function commitSuspenseComponent(finishedWork) {
						var newState = finishedWork.memoizedState;
						if (newState !== null) {
							markCommitTimeOfFallback();
							{
								var primaryChildParent = finishedWork.child;
								hideOrUnhideAllChildren(primaryChildParent, true);
							}
						}
					}
					function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
						var newState = finishedWork.memoizedState;
						if (newState === null) {
							var current2 = finishedWork.alternate;
							if (current2 !== null) {
								var prevState = current2.memoizedState;
								if (prevState !== null) {
									var suspenseInstance = prevState.dehydrated;
									if (suspenseInstance !== null) {
										commitHydratedSuspenseInstance(suspenseInstance);
									}
								}
							}
						}
					}
					function attachSuspenseRetryListeners(finishedWork) {
						var wakeables = finishedWork.updateQueue;
						if (wakeables !== null) {
							finishedWork.updateQueue = null;
							var retryCache = finishedWork.stateNode;
							if (retryCache === null) {
								retryCache = finishedWork.stateNode = new PossiblyWeakSet();
							}
							wakeables.forEach(function (wakeable) {
								var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
								if (!retryCache.has(wakeable)) {
									{
										if (wakeable.__reactDoNotTraceInteractions !== true) {
											retry = tracing.unstable_wrap(retry);
										}
									}
									retryCache.add(wakeable);
									wakeable.then(retry, retry);
								}
							});
						}
					}
					function isSuspenseBoundaryBeingHidden(current2, finishedWork) {
						if (current2 !== null) {
							var oldState = current2.memoizedState;
							if (oldState === null || oldState.dehydrated !== null) {
								var newState = finishedWork.memoizedState;
								return newState !== null && newState.dehydrated === null;
							}
						}
						return false;
					}
					function commitResetTextContent(current2) {
						resetTextContent(current2.stateNode);
					}
					var COMPONENT_TYPE = 0;
					var HAS_PSEUDO_CLASS_TYPE = 1;
					var ROLE_TYPE = 2;
					var TEST_NAME_TYPE = 3;
					var TEXT_TYPE = 4;
					if (typeof Symbol === 'function' && Symbol.for) {
						var symbolFor$1 = Symbol.for;
						COMPONENT_TYPE = symbolFor$1('selector.component');
						HAS_PSEUDO_CLASS_TYPE = symbolFor$1('selector.has_pseudo_class');
						ROLE_TYPE = symbolFor$1('selector.role');
						TEST_NAME_TYPE = symbolFor$1('selector.test_id');
						TEXT_TYPE = symbolFor$1('selector.text');
					}
					var commitHooks = [];
					function onCommitRoot$1() {
						{
							commitHooks.forEach(function (commitHook) {
								return commitHook();
							});
						}
					}
					var ceil = Math.ceil;
					var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher,
						ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner,
						IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing;
					var NoContext = 0;
					var BatchedContext = 1;
					var EventContext = 2;
					var DiscreteEventContext = 4;
					var LegacyUnbatchedContext = 8;
					var RenderContext = 16;
					var CommitContext = 32;
					var RetryAfterError = 64;
					var RootIncomplete = 0;
					var RootFatalErrored = 1;
					var RootErrored = 2;
					var RootSuspended = 3;
					var RootSuspendedWithDelay = 4;
					var RootCompleted = 5;
					var executionContext = NoContext;
					var workInProgressRoot = null;
					var workInProgress = null;
					var workInProgressRootRenderLanes = NoLanes;
					var subtreeRenderLanes = NoLanes;
					var subtreeRenderLanesCursor = createCursor(NoLanes);
					var workInProgressRootExitStatus = RootIncomplete;
					var workInProgressRootFatalError = null;
					var workInProgressRootIncludedLanes = NoLanes;
					var workInProgressRootSkippedLanes = NoLanes;
					var workInProgressRootUpdatedLanes = NoLanes;
					var workInProgressRootPingedLanes = NoLanes;
					var mostRecentlyUpdatedRoot = null;
					var globalMostRecentFallbackTime = 0;
					var FALLBACK_THROTTLE_MS = 500;
					var workInProgressRootRenderTargetTime = Infinity;
					var RENDER_TIMEOUT_MS = 500;
					function resetRenderTimer() {
						workInProgressRootRenderTargetTime = now() + RENDER_TIMEOUT_MS;
					}
					function getRenderTargetTime() {
						return workInProgressRootRenderTargetTime;
					}
					var nextEffect = null;
					var hasUncaughtError = false;
					var firstUncaughtError = null;
					var legacyErrorBoundariesThatAlreadyFailed = null;
					var rootDoesHavePassiveEffects = false;
					var rootWithPendingPassiveEffects = null;
					var pendingPassiveEffectsRenderPriority = NoPriority$1;
					var pendingPassiveEffectsLanes = NoLanes;
					var pendingPassiveHookEffectsMount = [];
					var pendingPassiveHookEffectsUnmount = [];
					var rootsWithPendingDiscreteUpdates = null;
					var NESTED_UPDATE_LIMIT = 50;
					var nestedUpdateCount = 0;
					var rootWithNestedUpdates = null;
					var NESTED_PASSIVE_UPDATE_LIMIT = 50;
					var nestedPassiveUpdateCount = 0;
					var spawnedWorkDuringRender = null;
					var currentEventTime = NoTimestamp;
					var currentEventWipLanes = NoLanes;
					var currentEventPendingLanes = NoLanes;
					var isFlushingPassiveEffects = false;
					var focusedInstanceHandle = null;
					var shouldFireAfterActiveInstanceBlur = false;
					function getWorkInProgressRoot() {
						return workInProgressRoot;
					}
					function requestEventTime() {
						if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
							return now();
						}
						if (currentEventTime !== NoTimestamp) {
							return currentEventTime;
						}
						currentEventTime = now();
						return currentEventTime;
					}
					function requestUpdateLane(fiber) {
						var mode = fiber.mode;
						if ((mode & BlockingMode) === NoMode) {
							return SyncLane;
						} else if ((mode & ConcurrentMode) === NoMode) {
							return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
						}
						if (currentEventWipLanes === NoLanes) {
							currentEventWipLanes = workInProgressRootIncludedLanes;
						}
						var isTransition = requestCurrentTransition() !== NoTransition;
						if (isTransition) {
							if (currentEventPendingLanes !== NoLanes) {
								currentEventPendingLanes =
									mostRecentlyUpdatedRoot !== null ? mostRecentlyUpdatedRoot.pendingLanes : NoLanes;
							}
							return findTransitionLane(currentEventWipLanes, currentEventPendingLanes);
						}
						var schedulerPriority = getCurrentPriorityLevel();
						var lane;
						if (
							(executionContext & DiscreteEventContext) !== NoContext &&
							schedulerPriority === UserBlockingPriority$2
						) {
							lane = findUpdateLane(InputDiscreteLanePriority, currentEventWipLanes);
						} else {
							var schedulerLanePriority = schedulerPriorityToLanePriority(schedulerPriority);
							lane = findUpdateLane(schedulerLanePriority, currentEventWipLanes);
						}
						return lane;
					}
					function requestRetryLane(fiber) {
						var mode = fiber.mode;
						if ((mode & BlockingMode) === NoMode) {
							return SyncLane;
						} else if ((mode & ConcurrentMode) === NoMode) {
							return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
						}
						if (currentEventWipLanes === NoLanes) {
							currentEventWipLanes = workInProgressRootIncludedLanes;
						}
						return findRetryLane(currentEventWipLanes);
					}
					function scheduleUpdateOnFiber(fiber, lane, eventTime) {
						checkForNestedUpdates();
						warnAboutRenderPhaseUpdatesInDEV(fiber);
						var root2 = markUpdateLaneFromFiberToRoot(fiber, lane);
						if (root2 === null) {
							warnAboutUpdateOnUnmountedFiberInDEV(fiber);
							return null;
						}
						markRootUpdated(root2, lane, eventTime);
						if (root2 === workInProgressRoot) {
							{
								workInProgressRootUpdatedLanes = mergeLanes(workInProgressRootUpdatedLanes, lane);
							}
							if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
								markRootSuspended$1(root2, workInProgressRootRenderLanes);
							}
						}
						var priorityLevel = getCurrentPriorityLevel();
						if (lane === SyncLane) {
							if (
								(executionContext & LegacyUnbatchedContext) !== NoContext &&
								(executionContext & (RenderContext | CommitContext)) === NoContext
							) {
								schedulePendingInteractions(root2, lane);
								performSyncWorkOnRoot(root2);
							} else {
								ensureRootIsScheduled(root2, eventTime);
								schedulePendingInteractions(root2, lane);
								if (executionContext === NoContext) {
									resetRenderTimer();
									flushSyncCallbackQueue();
								}
							}
						} else {
							if (
								(executionContext & DiscreteEventContext) !== NoContext &&
								(priorityLevel === UserBlockingPriority$2 || priorityLevel === ImmediatePriority$1)
							) {
								if (rootsWithPendingDiscreteUpdates === null) {
									rootsWithPendingDiscreteUpdates = /* @__PURE__ */ new Set([root2]);
								} else {
									rootsWithPendingDiscreteUpdates.add(root2);
								}
							}
							ensureRootIsScheduled(root2, eventTime);
							schedulePendingInteractions(root2, lane);
						}
						mostRecentlyUpdatedRoot = root2;
					}
					function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
						sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);
						var alternate = sourceFiber.alternate;
						if (alternate !== null) {
							alternate.lanes = mergeLanes(alternate.lanes, lane);
						}
						{
							if (alternate === null && (sourceFiber.flags & (Placement | Hydrating)) !== NoFlags) {
								warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
							}
						}
						var node = sourceFiber;
						var parent = sourceFiber.return;
						while (parent !== null) {
							parent.childLanes = mergeLanes(parent.childLanes, lane);
							alternate = parent.alternate;
							if (alternate !== null) {
								alternate.childLanes = mergeLanes(alternate.childLanes, lane);
							} else {
								{
									if ((parent.flags & (Placement | Hydrating)) !== NoFlags) {
										warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
									}
								}
							}
							node = parent;
							parent = parent.return;
						}
						if (node.tag === HostRoot) {
							var root2 = node.stateNode;
							return root2;
						} else {
							return null;
						}
					}
					function ensureRootIsScheduled(root2, currentTime) {
						var existingCallbackNode = root2.callbackNode;
						markStarvedLanesAsExpired(root2, currentTime);
						var nextLanes = getNextLanes(root2, root2 === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
						var newCallbackPriority = returnNextLanesPriority();
						if (nextLanes === NoLanes) {
							if (existingCallbackNode !== null) {
								cancelCallback(existingCallbackNode);
								root2.callbackNode = null;
								root2.callbackPriority = NoLanePriority;
							}
							return;
						}
						if (existingCallbackNode !== null) {
							var existingCallbackPriority = root2.callbackPriority;
							if (existingCallbackPriority === newCallbackPriority) {
								return;
							}
							cancelCallback(existingCallbackNode);
						}
						var newCallbackNode;
						if (newCallbackPriority === SyncLanePriority) {
							newCallbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root2));
						} else if (newCallbackPriority === SyncBatchedLanePriority) {
							newCallbackNode = scheduleCallback(ImmediatePriority$1, performSyncWorkOnRoot.bind(null, root2));
						} else {
							var schedulerPriorityLevel = lanePriorityToSchedulerPriority(newCallbackPriority);
							newCallbackNode = scheduleCallback(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root2));
						}
						root2.callbackPriority = newCallbackPriority;
						root2.callbackNode = newCallbackNode;
					}
					function performConcurrentWorkOnRoot(root2) {
						currentEventTime = NoTimestamp;
						currentEventWipLanes = NoLanes;
						currentEventPendingLanes = NoLanes;
						if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
							{
								throw Error('Should not already be working.');
							}
						}
						var originalCallbackNode = root2.callbackNode;
						var didFlushPassiveEffects = flushPassiveEffects();
						if (didFlushPassiveEffects) {
							if (root2.callbackNode !== originalCallbackNode) {
								return null;
							}
						}
						var lanes = getNextLanes(root2, root2 === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
						if (lanes === NoLanes) {
							return null;
						}
						var exitStatus = renderRootConcurrent(root2, lanes);
						if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
							prepareFreshStack(root2, NoLanes);
						} else if (exitStatus !== RootIncomplete) {
							if (exitStatus === RootErrored) {
								executionContext |= RetryAfterError;
								if (root2.hydrate) {
									root2.hydrate = false;
									clearContainer(root2.containerInfo);
								}
								lanes = getLanesToRetrySynchronouslyOnError(root2);
								if (lanes !== NoLanes) {
									exitStatus = renderRootSync(root2, lanes);
								}
							}
							if (exitStatus === RootFatalErrored) {
								var fatalError = workInProgressRootFatalError;
								prepareFreshStack(root2, NoLanes);
								markRootSuspended$1(root2, lanes);
								ensureRootIsScheduled(root2, now());
								throw fatalError;
							}
							var finishedWork = root2.current.alternate;
							root2.finishedWork = finishedWork;
							root2.finishedLanes = lanes;
							finishConcurrentRender(root2, exitStatus, lanes);
						}
						ensureRootIsScheduled(root2, now());
						if (root2.callbackNode === originalCallbackNode) {
							return performConcurrentWorkOnRoot.bind(null, root2);
						}
						return null;
					}
					function finishConcurrentRender(root2, exitStatus, lanes) {
						switch (exitStatus) {
							case RootIncomplete:
							case RootFatalErrored: {
								{
									{
										throw Error('Root did not complete. This is a bug in React.');
									}
								}
							}
							case RootErrored: {
								commitRoot(root2);
								break;
							}
							case RootSuspended: {
								markRootSuspended$1(root2, lanes);
								if (includesOnlyRetries(lanes) && !shouldForceFlushFallbacksInDEV()) {
									var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now();
									if (msUntilTimeout > 10) {
										var nextLanes = getNextLanes(root2, NoLanes);
										if (nextLanes !== NoLanes) {
											break;
										}
										var suspendedLanes = root2.suspendedLanes;
										if (!isSubsetOfLanes(suspendedLanes, lanes)) {
											var eventTime = requestEventTime();
											markRootPinged(root2, suspendedLanes);
											break;
										}
										root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), msUntilTimeout);
										break;
									}
								}
								commitRoot(root2);
								break;
							}
							case RootSuspendedWithDelay: {
								markRootSuspended$1(root2, lanes);
								if (includesOnlyTransitions(lanes)) {
									break;
								}
								if (!shouldForceFlushFallbacksInDEV()) {
									var mostRecentEventTime = getMostRecentEventTime(root2, lanes);
									var eventTimeMs = mostRecentEventTime;
									var timeElapsedMs = now() - eventTimeMs;
									var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs;
									if (_msUntilTimeout > 10) {
										root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), _msUntilTimeout);
										break;
									}
								}
								commitRoot(root2);
								break;
							}
							case RootCompleted: {
								commitRoot(root2);
								break;
							}
							default: {
								{
									{
										throw Error('Unknown root exit status.');
									}
								}
							}
						}
					}
					function markRootSuspended$1(root2, suspendedLanes) {
						suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
						suspendedLanes = removeLanes(suspendedLanes, workInProgressRootUpdatedLanes);
						markRootSuspended(root2, suspendedLanes);
					}
					function performSyncWorkOnRoot(root2) {
						if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
							{
								throw Error('Should not already be working.');
							}
						}
						flushPassiveEffects();
						var lanes;
						var exitStatus;
						if (root2 === workInProgressRoot && includesSomeLane(root2.expiredLanes, workInProgressRootRenderLanes)) {
							lanes = workInProgressRootRenderLanes;
							exitStatus = renderRootSync(root2, lanes);
							if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
								lanes = getNextLanes(root2, lanes);
								exitStatus = renderRootSync(root2, lanes);
							}
						} else {
							lanes = getNextLanes(root2, NoLanes);
							exitStatus = renderRootSync(root2, lanes);
						}
						if (root2.tag !== LegacyRoot && exitStatus === RootErrored) {
							executionContext |= RetryAfterError;
							if (root2.hydrate) {
								root2.hydrate = false;
								clearContainer(root2.containerInfo);
							}
							lanes = getLanesToRetrySynchronouslyOnError(root2);
							if (lanes !== NoLanes) {
								exitStatus = renderRootSync(root2, lanes);
							}
						}
						if (exitStatus === RootFatalErrored) {
							var fatalError = workInProgressRootFatalError;
							prepareFreshStack(root2, NoLanes);
							markRootSuspended$1(root2, lanes);
							ensureRootIsScheduled(root2, now());
							throw fatalError;
						}
						var finishedWork = root2.current.alternate;
						root2.finishedWork = finishedWork;
						root2.finishedLanes = lanes;
						commitRoot(root2);
						ensureRootIsScheduled(root2, now());
						return null;
					}
					function flushDiscreteUpdates() {
						if ((executionContext & (BatchedContext | RenderContext | CommitContext)) !== NoContext) {
							{
								if ((executionContext & RenderContext) !== NoContext) {
									error('unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.');
								}
							}
							return;
						}
						flushPendingDiscreteUpdates();
						flushPassiveEffects();
					}
					function flushPendingDiscreteUpdates() {
						if (rootsWithPendingDiscreteUpdates !== null) {
							var roots = rootsWithPendingDiscreteUpdates;
							rootsWithPendingDiscreteUpdates = null;
							roots.forEach(function (root2) {
								markDiscreteUpdatesExpired(root2);
								ensureRootIsScheduled(root2, now());
							});
						}
						flushSyncCallbackQueue();
					}
					function batchedUpdates$1(fn, a) {
						var prevExecutionContext = executionContext;
						executionContext |= BatchedContext;
						try {
							return fn(a);
						} finally {
							executionContext = prevExecutionContext;
							if (executionContext === NoContext) {
								resetRenderTimer();
								flushSyncCallbackQueue();
							}
						}
					}
					function batchedEventUpdates$1(fn, a) {
						var prevExecutionContext = executionContext;
						executionContext |= EventContext;
						try {
							return fn(a);
						} finally {
							executionContext = prevExecutionContext;
							if (executionContext === NoContext) {
								resetRenderTimer();
								flushSyncCallbackQueue();
							}
						}
					}
					function discreteUpdates$1(fn, a, b, c, d) {
						var prevExecutionContext = executionContext;
						executionContext |= DiscreteEventContext;
						{
							try {
								return runWithPriority$1(UserBlockingPriority$2, fn.bind(null, a, b, c, d));
							} finally {
								executionContext = prevExecutionContext;
								if (executionContext === NoContext) {
									resetRenderTimer();
									flushSyncCallbackQueue();
								}
							}
						}
					}
					function unbatchedUpdates(fn, a) {
						var prevExecutionContext = executionContext;
						executionContext &= ~BatchedContext;
						executionContext |= LegacyUnbatchedContext;
						try {
							return fn(a);
						} finally {
							executionContext = prevExecutionContext;
							if (executionContext === NoContext) {
								resetRenderTimer();
								flushSyncCallbackQueue();
							}
						}
					}
					function flushSync(fn, a) {
						var prevExecutionContext = executionContext;
						if ((prevExecutionContext & (RenderContext | CommitContext)) !== NoContext) {
							{
								error(
									'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.'
								);
							}
							return fn(a);
						}
						executionContext |= BatchedContext;
						{
							try {
								if (fn) {
									return runWithPriority$1(ImmediatePriority$1, fn.bind(null, a));
								} else {
									return void 0;
								}
							} finally {
								executionContext = prevExecutionContext;
								flushSyncCallbackQueue();
							}
						}
					}
					function pushRenderLanes(fiber, lanes) {
						push(subtreeRenderLanesCursor, subtreeRenderLanes, fiber);
						subtreeRenderLanes = mergeLanes(subtreeRenderLanes, lanes);
						workInProgressRootIncludedLanes = mergeLanes(workInProgressRootIncludedLanes, lanes);
					}
					function popRenderLanes(fiber) {
						subtreeRenderLanes = subtreeRenderLanesCursor.current;
						pop(subtreeRenderLanesCursor, fiber);
					}
					function prepareFreshStack(root2, lanes) {
						root2.finishedWork = null;
						root2.finishedLanes = NoLanes;
						var timeoutHandle = root2.timeoutHandle;
						if (timeoutHandle !== noTimeout) {
							root2.timeoutHandle = noTimeout;
							cancelTimeout(timeoutHandle);
						}
						if (workInProgress !== null) {
							var interruptedWork = workInProgress.return;
							while (interruptedWork !== null) {
								unwindInterruptedWork(interruptedWork);
								interruptedWork = interruptedWork.return;
							}
						}
						workInProgressRoot = root2;
						workInProgress = createWorkInProgress(root2.current, null);
						workInProgressRootRenderLanes = subtreeRenderLanes = workInProgressRootIncludedLanes = lanes;
						workInProgressRootExitStatus = RootIncomplete;
						workInProgressRootFatalError = null;
						workInProgressRootSkippedLanes = NoLanes;
						workInProgressRootUpdatedLanes = NoLanes;
						workInProgressRootPingedLanes = NoLanes;
						{
							spawnedWorkDuringRender = null;
						}
						{
							ReactStrictModeWarnings.discardPendingWarnings();
						}
					}
					function handleError(root2, thrownValue) {
						do {
							var erroredWork = workInProgress;
							try {
								resetContextDependencies();
								resetHooksAfterThrow();
								resetCurrentFiber();
								ReactCurrentOwner$2.current = null;
								if (erroredWork === null || erroredWork.return === null) {
									workInProgressRootExitStatus = RootFatalErrored;
									workInProgressRootFatalError = thrownValue;
									workInProgress = null;
									return;
								}
								if (enableProfilerTimer && erroredWork.mode & ProfileMode) {
									stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
								}
								throwException(root2, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
								completeUnitOfWork(erroredWork);
							} catch (yetAnotherThrownValue) {
								thrownValue = yetAnotherThrownValue;
								if (workInProgress === erroredWork && erroredWork !== null) {
									erroredWork = erroredWork.return;
									workInProgress = erroredWork;
								} else {
									erroredWork = workInProgress;
								}
								continue;
							}
							return;
						} while (true);
					}
					function pushDispatcher() {
						var prevDispatcher = ReactCurrentDispatcher$2.current;
						ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;
						if (prevDispatcher === null) {
							return ContextOnlyDispatcher;
						} else {
							return prevDispatcher;
						}
					}
					function popDispatcher(prevDispatcher) {
						ReactCurrentDispatcher$2.current = prevDispatcher;
					}
					function pushInteractions(root2) {
						{
							var prevInteractions = tracing.__interactionsRef.current;
							tracing.__interactionsRef.current = root2.memoizedInteractions;
							return prevInteractions;
						}
					}
					function popInteractions(prevInteractions) {
						{
							tracing.__interactionsRef.current = prevInteractions;
						}
					}
					function markCommitTimeOfFallback() {
						globalMostRecentFallbackTime = now();
					}
					function markSkippedUpdateLanes(lane) {
						workInProgressRootSkippedLanes = mergeLanes(lane, workInProgressRootSkippedLanes);
					}
					function renderDidSuspend() {
						if (workInProgressRootExitStatus === RootIncomplete) {
							workInProgressRootExitStatus = RootSuspended;
						}
					}
					function renderDidSuspendDelayIfPossible() {
						if (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) {
							workInProgressRootExitStatus = RootSuspendedWithDelay;
						}
						if (
							workInProgressRoot !== null &&
							(includesNonIdleWork(workInProgressRootSkippedLanes) ||
								includesNonIdleWork(workInProgressRootUpdatedLanes))
						) {
							markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
						}
					}
					function renderDidError() {
						if (workInProgressRootExitStatus !== RootCompleted) {
							workInProgressRootExitStatus = RootErrored;
						}
					}
					function renderHasNotSuspendedYet() {
						return workInProgressRootExitStatus === RootIncomplete;
					}
					function renderRootSync(root2, lanes) {
						var prevExecutionContext = executionContext;
						executionContext |= RenderContext;
						var prevDispatcher = pushDispatcher();
						if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes) {
							prepareFreshStack(root2, lanes);
							startWorkOnPendingInteractions(root2, lanes);
						}
						var prevInteractions = pushInteractions(root2);
						do {
							try {
								workLoopSync();
								break;
							} catch (thrownValue) {
								handleError(root2, thrownValue);
							}
						} while (true);
						resetContextDependencies();
						{
							popInteractions(prevInteractions);
						}
						executionContext = prevExecutionContext;
						popDispatcher(prevDispatcher);
						if (workInProgress !== null) {
							{
								{
									throw Error(
										'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
									);
								}
							}
						}
						workInProgressRoot = null;
						workInProgressRootRenderLanes = NoLanes;
						return workInProgressRootExitStatus;
					}
					function workLoopSync() {
						while (workInProgress !== null) {
							performUnitOfWork(workInProgress);
						}
					}
					function renderRootConcurrent(root2, lanes) {
						var prevExecutionContext = executionContext;
						executionContext |= RenderContext;
						var prevDispatcher = pushDispatcher();
						if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes) {
							resetRenderTimer();
							prepareFreshStack(root2, lanes);
							startWorkOnPendingInteractions(root2, lanes);
						}
						var prevInteractions = pushInteractions(root2);
						do {
							try {
								workLoopConcurrent();
								break;
							} catch (thrownValue) {
								handleError(root2, thrownValue);
							}
						} while (true);
						resetContextDependencies();
						{
							popInteractions(prevInteractions);
						}
						popDispatcher(prevDispatcher);
						executionContext = prevExecutionContext;
						if (workInProgress !== null) {
							return RootIncomplete;
						} else {
							workInProgressRoot = null;
							workInProgressRootRenderLanes = NoLanes;
							return workInProgressRootExitStatus;
						}
					}
					function workLoopConcurrent() {
						while (workInProgress !== null && !shouldYield()) {
							performUnitOfWork(workInProgress);
						}
					}
					function performUnitOfWork(unitOfWork) {
						var current2 = unitOfWork.alternate;
						setCurrentFiber(unitOfWork);
						var next;
						if ((unitOfWork.mode & ProfileMode) !== NoMode) {
							startProfilerTimer(unitOfWork);
							next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
							stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
						} else {
							next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
						}
						resetCurrentFiber();
						unitOfWork.memoizedProps = unitOfWork.pendingProps;
						if (next === null) {
							completeUnitOfWork(unitOfWork);
						} else {
							workInProgress = next;
						}
						ReactCurrentOwner$2.current = null;
					}
					function completeUnitOfWork(unitOfWork) {
						var completedWork = unitOfWork;
						do {
							var current2 = completedWork.alternate;
							var returnFiber = completedWork.return;
							if ((completedWork.flags & Incomplete) === NoFlags) {
								setCurrentFiber(completedWork);
								var next = void 0;
								if ((completedWork.mode & ProfileMode) === NoMode) {
									next = completeWork(current2, completedWork, subtreeRenderLanes);
								} else {
									startProfilerTimer(completedWork);
									next = completeWork(current2, completedWork, subtreeRenderLanes);
									stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
								}
								resetCurrentFiber();
								if (next !== null) {
									workInProgress = next;
									return;
								}
								resetChildLanes(completedWork);
								if (returnFiber !== null && (returnFiber.flags & Incomplete) === NoFlags) {
									if (returnFiber.firstEffect === null) {
										returnFiber.firstEffect = completedWork.firstEffect;
									}
									if (completedWork.lastEffect !== null) {
										if (returnFiber.lastEffect !== null) {
											returnFiber.lastEffect.nextEffect = completedWork.firstEffect;
										}
										returnFiber.lastEffect = completedWork.lastEffect;
									}
									var flags = completedWork.flags;
									if (flags > PerformedWork) {
										if (returnFiber.lastEffect !== null) {
											returnFiber.lastEffect.nextEffect = completedWork;
										} else {
											returnFiber.firstEffect = completedWork;
										}
										returnFiber.lastEffect = completedWork;
									}
								}
							} else {
								var _next = unwindWork(completedWork);
								if (_next !== null) {
									_next.flags &= HostEffectMask;
									workInProgress = _next;
									return;
								}
								if ((completedWork.mode & ProfileMode) !== NoMode) {
									stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
									var actualDuration = completedWork.actualDuration;
									var child = completedWork.child;
									while (child !== null) {
										actualDuration += child.actualDuration;
										child = child.sibling;
									}
									completedWork.actualDuration = actualDuration;
								}
								if (returnFiber !== null) {
									returnFiber.firstEffect = returnFiber.lastEffect = null;
									returnFiber.flags |= Incomplete;
								}
							}
							var siblingFiber = completedWork.sibling;
							if (siblingFiber !== null) {
								workInProgress = siblingFiber;
								return;
							}
							completedWork = returnFiber;
							workInProgress = completedWork;
						} while (completedWork !== null);
						if (workInProgressRootExitStatus === RootIncomplete) {
							workInProgressRootExitStatus = RootCompleted;
						}
					}
					function resetChildLanes(completedWork) {
						if (
							(completedWork.tag === LegacyHiddenComponent || completedWork.tag === OffscreenComponent) &&
							completedWork.memoizedState !== null &&
							!includesSomeLane(subtreeRenderLanes, OffscreenLane) &&
							(completedWork.mode & ConcurrentMode) !== NoLanes
						) {
							return;
						}
						var newChildLanes = NoLanes;
						if ((completedWork.mode & ProfileMode) !== NoMode) {
							var actualDuration = completedWork.actualDuration;
							var treeBaseDuration = completedWork.selfBaseDuration;
							var shouldBubbleActualDurations =
								completedWork.alternate === null || completedWork.child !== completedWork.alternate.child;
							var child = completedWork.child;
							while (child !== null) {
								newChildLanes = mergeLanes(newChildLanes, mergeLanes(child.lanes, child.childLanes));
								if (shouldBubbleActualDurations) {
									actualDuration += child.actualDuration;
								}
								treeBaseDuration += child.treeBaseDuration;
								child = child.sibling;
							}
							var isTimedOutSuspense = completedWork.tag === SuspenseComponent && completedWork.memoizedState !== null;
							if (isTimedOutSuspense) {
								var primaryChildFragment = completedWork.child;
								if (primaryChildFragment !== null) {
									treeBaseDuration -= primaryChildFragment.treeBaseDuration;
								}
							}
							completedWork.actualDuration = actualDuration;
							completedWork.treeBaseDuration = treeBaseDuration;
						} else {
							var _child = completedWork.child;
							while (_child !== null) {
								newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child.lanes, _child.childLanes));
								_child = _child.sibling;
							}
						}
						completedWork.childLanes = newChildLanes;
					}
					function commitRoot(root2) {
						var renderPriorityLevel = getCurrentPriorityLevel();
						runWithPriority$1(ImmediatePriority$1, commitRootImpl.bind(null, root2, renderPriorityLevel));
						return null;
					}
					function commitRootImpl(root2, renderPriorityLevel) {
						do {
							flushPassiveEffects();
						} while (rootWithPendingPassiveEffects !== null);
						flushRenderPhaseStrictModeWarningsInDEV();
						if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
							{
								throw Error('Should not already be working.');
							}
						}
						var finishedWork = root2.finishedWork;
						var lanes = root2.finishedLanes;
						if (finishedWork === null) {
							return null;
						}
						root2.finishedWork = null;
						root2.finishedLanes = NoLanes;
						if (!(finishedWork !== root2.current)) {
							{
								throw Error(
									'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
								);
							}
						}
						root2.callbackNode = null;
						var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
						markRootFinished(root2, remainingLanes);
						if (rootsWithPendingDiscreteUpdates !== null) {
							if (!hasDiscreteLanes(remainingLanes) && rootsWithPendingDiscreteUpdates.has(root2)) {
								rootsWithPendingDiscreteUpdates.delete(root2);
							}
						}
						if (root2 === workInProgressRoot) {
							workInProgressRoot = null;
							workInProgress = null;
							workInProgressRootRenderLanes = NoLanes;
						}
						var firstEffect;
						if (finishedWork.flags > PerformedWork) {
							if (finishedWork.lastEffect !== null) {
								finishedWork.lastEffect.nextEffect = finishedWork;
								firstEffect = finishedWork.firstEffect;
							} else {
								firstEffect = finishedWork;
							}
						} else {
							firstEffect = finishedWork.firstEffect;
						}
						if (firstEffect !== null) {
							var prevExecutionContext = executionContext;
							executionContext |= CommitContext;
							var prevInteractions = pushInteractions(root2);
							ReactCurrentOwner$2.current = null;
							focusedInstanceHandle = prepareForCommit(root2.containerInfo);
							shouldFireAfterActiveInstanceBlur = false;
							nextEffect = firstEffect;
							do {
								{
									invokeGuardedCallback(null, commitBeforeMutationEffects, null);
									if (hasCaughtError()) {
										if (!(nextEffect !== null)) {
											{
												throw Error('Should be working on an effect.');
											}
										}
										var error2 = clearCaughtError();
										captureCommitPhaseError(nextEffect, error2);
										nextEffect = nextEffect.nextEffect;
									}
								}
							} while (nextEffect !== null);
							focusedInstanceHandle = null;
							{
								recordCommitTime();
							}
							nextEffect = firstEffect;
							do {
								{
									invokeGuardedCallback(null, commitMutationEffects, null, root2, renderPriorityLevel);
									if (hasCaughtError()) {
										if (!(nextEffect !== null)) {
											{
												throw Error('Should be working on an effect.');
											}
										}
										var _error = clearCaughtError();
										captureCommitPhaseError(nextEffect, _error);
										nextEffect = nextEffect.nextEffect;
									}
								}
							} while (nextEffect !== null);
							resetAfterCommit(root2.containerInfo);
							root2.current = finishedWork;
							nextEffect = firstEffect;
							do {
								{
									invokeGuardedCallback(null, commitLayoutEffects, null, root2, lanes);
									if (hasCaughtError()) {
										if (!(nextEffect !== null)) {
											{
												throw Error('Should be working on an effect.');
											}
										}
										var _error2 = clearCaughtError();
										captureCommitPhaseError(nextEffect, _error2);
										nextEffect = nextEffect.nextEffect;
									}
								}
							} while (nextEffect !== null);
							nextEffect = null;
							requestPaint();
							{
								popInteractions(prevInteractions);
							}
							executionContext = prevExecutionContext;
						} else {
							root2.current = finishedWork;
							{
								recordCommitTime();
							}
						}
						var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
						if (rootDoesHavePassiveEffects) {
							rootDoesHavePassiveEffects = false;
							rootWithPendingPassiveEffects = root2;
							pendingPassiveEffectsLanes = lanes;
							pendingPassiveEffectsRenderPriority = renderPriorityLevel;
						} else {
							nextEffect = firstEffect;
							while (nextEffect !== null) {
								var nextNextEffect = nextEffect.nextEffect;
								nextEffect.nextEffect = null;
								if (nextEffect.flags & Deletion) {
									detachFiberAfterEffects(nextEffect);
								}
								nextEffect = nextNextEffect;
							}
						}
						remainingLanes = root2.pendingLanes;
						if (remainingLanes !== NoLanes) {
							{
								if (spawnedWorkDuringRender !== null) {
									var expirationTimes = spawnedWorkDuringRender;
									spawnedWorkDuringRender = null;
									for (var i2 = 0; i2 < expirationTimes.length; i2++) {
										scheduleInteractions(root2, expirationTimes[i2], root2.memoizedInteractions);
									}
								}
								schedulePendingInteractions(root2, remainingLanes);
							}
						} else {
							legacyErrorBoundariesThatAlreadyFailed = null;
						}
						{
							if (!rootDidHavePassiveEffects) {
								finishPendingInteractions(root2, lanes);
							}
						}
						if (remainingLanes === SyncLane) {
							if (root2 === rootWithNestedUpdates) {
								nestedUpdateCount++;
							} else {
								nestedUpdateCount = 0;
								rootWithNestedUpdates = root2;
							}
						} else {
							nestedUpdateCount = 0;
						}
						onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
						{
							onCommitRoot$1();
						}
						ensureRootIsScheduled(root2, now());
						if (hasUncaughtError) {
							hasUncaughtError = false;
							var _error3 = firstUncaughtError;
							firstUncaughtError = null;
							throw _error3;
						}
						if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
							return null;
						}
						flushSyncCallbackQueue();
						return null;
					}
					function commitBeforeMutationEffects() {
						while (nextEffect !== null) {
							var current2 = nextEffect.alternate;
							if (!shouldFireAfterActiveInstanceBlur && focusedInstanceHandle !== null) {
								if ((nextEffect.flags & Deletion) !== NoFlags) {
									if (doesFiberContain(nextEffect, focusedInstanceHandle)) {
										shouldFireAfterActiveInstanceBlur = true;
									}
								} else {
									if (
										nextEffect.tag === SuspenseComponent &&
										isSuspenseBoundaryBeingHidden(current2, nextEffect) &&
										doesFiberContain(nextEffect, focusedInstanceHandle)
									) {
										shouldFireAfterActiveInstanceBlur = true;
									}
								}
							}
							var flags = nextEffect.flags;
							if ((flags & Snapshot) !== NoFlags) {
								setCurrentFiber(nextEffect);
								commitBeforeMutationLifeCycles(current2, nextEffect);
								resetCurrentFiber();
							}
							if ((flags & Passive) !== NoFlags) {
								if (!rootDoesHavePassiveEffects) {
									rootDoesHavePassiveEffects = true;
									scheduleCallback(NormalPriority$1, function () {
										flushPassiveEffects();
										return null;
									});
								}
							}
							nextEffect = nextEffect.nextEffect;
						}
					}
					function commitMutationEffects(root2, renderPriorityLevel) {
						while (nextEffect !== null) {
							setCurrentFiber(nextEffect);
							var flags = nextEffect.flags;
							if (flags & ContentReset) {
								commitResetTextContent(nextEffect);
							}
							if (flags & Ref) {
								var current2 = nextEffect.alternate;
								if (current2 !== null) {
									commitDetachRef(current2);
								}
							}
							var primaryFlags = flags & (Placement | Update | Deletion | Hydrating);
							switch (primaryFlags) {
								case Placement: {
									commitPlacement(nextEffect);
									nextEffect.flags &= ~Placement;
									break;
								}
								case PlacementAndUpdate: {
									commitPlacement(nextEffect);
									nextEffect.flags &= ~Placement;
									var _current = nextEffect.alternate;
									commitWork(_current, nextEffect);
									break;
								}
								case Hydrating: {
									nextEffect.flags &= ~Hydrating;
									break;
								}
								case HydratingAndUpdate: {
									nextEffect.flags &= ~Hydrating;
									var _current2 = nextEffect.alternate;
									commitWork(_current2, nextEffect);
									break;
								}
								case Update: {
									var _current3 = nextEffect.alternate;
									commitWork(_current3, nextEffect);
									break;
								}
								case Deletion: {
									commitDeletion(root2, nextEffect);
									break;
								}
							}
							resetCurrentFiber();
							nextEffect = nextEffect.nextEffect;
						}
					}
					function commitLayoutEffects(root2, committedLanes) {
						while (nextEffect !== null) {
							setCurrentFiber(nextEffect);
							var flags = nextEffect.flags;
							if (flags & (Update | Callback)) {
								var current2 = nextEffect.alternate;
								commitLifeCycles(root2, current2, nextEffect);
							}
							{
								if (flags & Ref) {
									commitAttachRef(nextEffect);
								}
							}
							resetCurrentFiber();
							nextEffect = nextEffect.nextEffect;
						}
					}
					function flushPassiveEffects() {
						if (pendingPassiveEffectsRenderPriority !== NoPriority$1) {
							var priorityLevel =
								pendingPassiveEffectsRenderPriority > NormalPriority$1
									? NormalPriority$1
									: pendingPassiveEffectsRenderPriority;
							pendingPassiveEffectsRenderPriority = NoPriority$1;
							{
								return runWithPriority$1(priorityLevel, flushPassiveEffectsImpl);
							}
						}
						return false;
					}
					function enqueuePendingPassiveHookEffectMount(fiber, effect) {
						pendingPassiveHookEffectsMount.push(effect, fiber);
						if (!rootDoesHavePassiveEffects) {
							rootDoesHavePassiveEffects = true;
							scheduleCallback(NormalPriority$1, function () {
								flushPassiveEffects();
								return null;
							});
						}
					}
					function enqueuePendingPassiveHookEffectUnmount(fiber, effect) {
						pendingPassiveHookEffectsUnmount.push(effect, fiber);
						{
							fiber.flags |= PassiveUnmountPendingDev;
							var alternate = fiber.alternate;
							if (alternate !== null) {
								alternate.flags |= PassiveUnmountPendingDev;
							}
						}
						if (!rootDoesHavePassiveEffects) {
							rootDoesHavePassiveEffects = true;
							scheduleCallback(NormalPriority$1, function () {
								flushPassiveEffects();
								return null;
							});
						}
					}
					function invokePassiveEffectCreate(effect) {
						var create = effect.create;
						effect.destroy = create();
					}
					function flushPassiveEffectsImpl() {
						if (rootWithPendingPassiveEffects === null) {
							return false;
						}
						var root2 = rootWithPendingPassiveEffects;
						var lanes = pendingPassiveEffectsLanes;
						rootWithPendingPassiveEffects = null;
						pendingPassiveEffectsLanes = NoLanes;
						if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
							{
								throw Error('Cannot flush passive effects while already rendering.');
							}
						}
						{
							isFlushingPassiveEffects = true;
						}
						var prevExecutionContext = executionContext;
						executionContext |= CommitContext;
						var prevInteractions = pushInteractions(root2);
						var unmountEffects = pendingPassiveHookEffectsUnmount;
						pendingPassiveHookEffectsUnmount = [];
						for (var i2 = 0; i2 < unmountEffects.length; i2 += 2) {
							var _effect = unmountEffects[i2];
							var fiber = unmountEffects[i2 + 1];
							var destroy = _effect.destroy;
							_effect.destroy = void 0;
							{
								fiber.flags &= ~PassiveUnmountPendingDev;
								var alternate = fiber.alternate;
								if (alternate !== null) {
									alternate.flags &= ~PassiveUnmountPendingDev;
								}
							}
							if (typeof destroy === 'function') {
								{
									setCurrentFiber(fiber);
									{
										invokeGuardedCallback(null, destroy, null);
									}
									if (hasCaughtError()) {
										if (!(fiber !== null)) {
											{
												throw Error('Should be working on an effect.');
											}
										}
										var error2 = clearCaughtError();
										captureCommitPhaseError(fiber, error2);
									}
									resetCurrentFiber();
								}
							}
						}
						var mountEffects = pendingPassiveHookEffectsMount;
						pendingPassiveHookEffectsMount = [];
						for (var _i = 0; _i < mountEffects.length; _i += 2) {
							var _effect2 = mountEffects[_i];
							var _fiber = mountEffects[_i + 1];
							{
								setCurrentFiber(_fiber);
								{
									invokeGuardedCallback(null, invokePassiveEffectCreate, null, _effect2);
								}
								if (hasCaughtError()) {
									if (!(_fiber !== null)) {
										{
											throw Error('Should be working on an effect.');
										}
									}
									var _error4 = clearCaughtError();
									captureCommitPhaseError(_fiber, _error4);
								}
								resetCurrentFiber();
							}
						}
						var effect = root2.current.firstEffect;
						while (effect !== null) {
							var nextNextEffect = effect.nextEffect;
							effect.nextEffect = null;
							if (effect.flags & Deletion) {
								detachFiberAfterEffects(effect);
							}
							effect = nextNextEffect;
						}
						{
							popInteractions(prevInteractions);
							finishPendingInteractions(root2, lanes);
						}
						{
							isFlushingPassiveEffects = false;
						}
						executionContext = prevExecutionContext;
						flushSyncCallbackQueue();
						nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
						return true;
					}
					function isAlreadyFailedLegacyErrorBoundary(instance) {
						return (
							legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance)
						);
					}
					function markLegacyErrorBoundaryAsFailed(instance) {
						if (legacyErrorBoundariesThatAlreadyFailed === null) {
							legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([instance]);
						} else {
							legacyErrorBoundariesThatAlreadyFailed.add(instance);
						}
					}
					function prepareToThrowUncaughtError(error2) {
						if (!hasUncaughtError) {
							hasUncaughtError = true;
							firstUncaughtError = error2;
						}
					}
					var onUncaughtError = prepareToThrowUncaughtError;
					function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error2) {
						var errorInfo = createCapturedValue(error2, sourceFiber);
						var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
						enqueueUpdate(rootFiber, update);
						var eventTime = requestEventTime();
						var root2 = markUpdateLaneFromFiberToRoot(rootFiber, SyncLane);
						if (root2 !== null) {
							markRootUpdated(root2, SyncLane, eventTime);
							ensureRootIsScheduled(root2, eventTime);
							schedulePendingInteractions(root2, SyncLane);
						}
					}
					function captureCommitPhaseError(sourceFiber, error2) {
						if (sourceFiber.tag === HostRoot) {
							captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error2);
							return;
						}
						var fiber = sourceFiber.return;
						while (fiber !== null) {
							if (fiber.tag === HostRoot) {
								captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error2);
								return;
							} else if (fiber.tag === ClassComponent) {
								var ctor = fiber.type;
								var instance = fiber.stateNode;
								if (
									typeof ctor.getDerivedStateFromError === 'function' ||
									(typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))
								) {
									var errorInfo = createCapturedValue(error2, sourceFiber);
									var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
									enqueueUpdate(fiber, update);
									var eventTime = requestEventTime();
									var root2 = markUpdateLaneFromFiberToRoot(fiber, SyncLane);
									if (root2 !== null) {
										markRootUpdated(root2, SyncLane, eventTime);
										ensureRootIsScheduled(root2, eventTime);
										schedulePendingInteractions(root2, SyncLane);
									} else {
										if (
											typeof instance.componentDidCatch === 'function' &&
											!isAlreadyFailedLegacyErrorBoundary(instance)
										) {
											try {
												instance.componentDidCatch(error2, errorInfo);
											} catch (errorToIgnore) {}
										}
									}
									return;
								}
							}
							fiber = fiber.return;
						}
					}
					function pingSuspendedRoot(root2, wakeable, pingedLanes) {
						var pingCache = root2.pingCache;
						if (pingCache !== null) {
							pingCache.delete(wakeable);
						}
						var eventTime = requestEventTime();
						markRootPinged(root2, pingedLanes);
						if (workInProgressRoot === root2 && isSubsetOfLanes(workInProgressRootRenderLanes, pingedLanes)) {
							if (
								workInProgressRootExitStatus === RootSuspendedWithDelay ||
								(workInProgressRootExitStatus === RootSuspended &&
									includesOnlyRetries(workInProgressRootRenderLanes) &&
									now() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS)
							) {
								prepareFreshStack(root2, NoLanes);
							} else {
								workInProgressRootPingedLanes = mergeLanes(workInProgressRootPingedLanes, pingedLanes);
							}
						}
						ensureRootIsScheduled(root2, eventTime);
						schedulePendingInteractions(root2, pingedLanes);
					}
					function retryTimedOutBoundary(boundaryFiber, retryLane) {
						if (retryLane === NoLane) {
							retryLane = requestRetryLane(boundaryFiber);
						}
						var eventTime = requestEventTime();
						var root2 = markUpdateLaneFromFiberToRoot(boundaryFiber, retryLane);
						if (root2 !== null) {
							markRootUpdated(root2, retryLane, eventTime);
							ensureRootIsScheduled(root2, eventTime);
							schedulePendingInteractions(root2, retryLane);
						}
					}
					function resolveRetryWakeable(boundaryFiber, wakeable) {
						var retryLane = NoLane;
						var retryCache;
						{
							retryCache = boundaryFiber.stateNode;
						}
						if (retryCache !== null) {
							retryCache.delete(wakeable);
						}
						retryTimedOutBoundary(boundaryFiber, retryLane);
					}
					function jnd(timeElapsed) {
						return timeElapsed < 120
							? 120
							: timeElapsed < 480
								? 480
								: timeElapsed < 1080
									? 1080
									: timeElapsed < 1920
										? 1920
										: timeElapsed < 3e3
											? 3e3
											: timeElapsed < 4320
												? 4320
												: ceil(timeElapsed / 1960) * 1960;
					}
					function checkForNestedUpdates() {
						if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
							nestedUpdateCount = 0;
							rootWithNestedUpdates = null;
							{
								{
									throw Error(
										'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
									);
								}
							}
						}
						{
							if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
								nestedPassiveUpdateCount = 0;
								error(
									"Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
								);
							}
						}
					}
					function flushRenderPhaseStrictModeWarningsInDEV() {
						{
							ReactStrictModeWarnings.flushLegacyContextWarning();
							{
								ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
							}
						}
					}
					var didWarnStateUpdateForNotYetMountedComponent = null;
					function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
						{
							if ((executionContext & RenderContext) !== NoContext) {
								return;
							}
							if (!(fiber.mode & (BlockingMode | ConcurrentMode))) {
								return;
							}
							var tag = fiber.tag;
							if (
								tag !== IndeterminateComponent &&
								tag !== HostRoot &&
								tag !== ClassComponent &&
								tag !== FunctionComponent &&
								tag !== ForwardRef &&
								tag !== MemoComponent &&
								tag !== SimpleMemoComponent &&
								tag !== Block
							) {
								return;
							}
							var componentName = getComponentName(fiber.type) || 'ReactComponent';
							if (didWarnStateUpdateForNotYetMountedComponent !== null) {
								if (didWarnStateUpdateForNotYetMountedComponent.has(componentName)) {
									return;
								}
								didWarnStateUpdateForNotYetMountedComponent.add(componentName);
							} else {
								didWarnStateUpdateForNotYetMountedComponent = /* @__PURE__ */ new Set([componentName]);
							}
							var previousFiber = current;
							try {
								setCurrentFiber(fiber);
								error(
									"Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
								);
							} finally {
								if (previousFiber) {
									setCurrentFiber(fiber);
								} else {
									resetCurrentFiber();
								}
							}
						}
					}
					var didWarnStateUpdateForUnmountedComponent = null;
					function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
						{
							var tag = fiber.tag;
							if (
								tag !== HostRoot &&
								tag !== ClassComponent &&
								tag !== FunctionComponent &&
								tag !== ForwardRef &&
								tag !== MemoComponent &&
								tag !== SimpleMemoComponent &&
								tag !== Block
							) {
								return;
							}
							if ((fiber.flags & PassiveUnmountPendingDev) !== NoFlags) {
								return;
							}
							var componentName = getComponentName(fiber.type) || 'ReactComponent';
							if (didWarnStateUpdateForUnmountedComponent !== null) {
								if (didWarnStateUpdateForUnmountedComponent.has(componentName)) {
									return;
								}
								didWarnStateUpdateForUnmountedComponent.add(componentName);
							} else {
								didWarnStateUpdateForUnmountedComponent = /* @__PURE__ */ new Set([componentName]);
							}
							if (isFlushingPassiveEffects);
							else {
								var previousFiber = current;
								try {
									setCurrentFiber(fiber);
									error(
										"Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.",
										tag === ClassComponent ? 'the componentWillUnmount method' : 'a useEffect cleanup function'
									);
								} finally {
									if (previousFiber) {
										setCurrentFiber(fiber);
									} else {
										resetCurrentFiber();
									}
								}
							}
						}
					}
					var beginWork$1;
					{
						var dummyFiber = null;
						beginWork$1 = function (current2, unitOfWork, lanes) {
							var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
							try {
								return beginWork(current2, unitOfWork, lanes);
							} catch (originalError) {
								if (
									originalError !== null &&
									typeof originalError === 'object' &&
									typeof originalError.then === 'function'
								) {
									throw originalError;
								}
								resetContextDependencies();
								resetHooksAfterThrow();
								unwindInterruptedWork(unitOfWork);
								assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);
								if (unitOfWork.mode & ProfileMode) {
									startProfilerTimer(unitOfWork);
								}
								invokeGuardedCallback(null, beginWork, null, current2, unitOfWork, lanes);
								if (hasCaughtError()) {
									var replayError = clearCaughtError();
									throw replayError;
								} else {
									throw originalError;
								}
							}
						};
					}
					var didWarnAboutUpdateInRender = false;
					var didWarnAboutUpdateInRenderForAnotherComponent;
					{
						didWarnAboutUpdateInRenderForAnotherComponent = /* @__PURE__ */ new Set();
					}
					function warnAboutRenderPhaseUpdatesInDEV(fiber) {
						{
							if (
								isRendering &&
								(executionContext & RenderContext) !== NoContext &&
								!getIsUpdatingOpaqueValueInRenderPhaseInDEV()
							) {
								switch (fiber.tag) {
									case FunctionComponent:
									case ForwardRef:
									case SimpleMemoComponent: {
										var renderingComponentName = (workInProgress && getComponentName(workInProgress.type)) || 'Unknown';
										var dedupeKey = renderingComponentName;
										if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
											didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
											var setStateComponentName = getComponentName(fiber.type) || 'Unknown';
											error(
												'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render',
												setStateComponentName,
												renderingComponentName,
												renderingComponentName
											);
										}
										break;
									}
									case ClassComponent: {
										if (!didWarnAboutUpdateInRender) {
											error(
												'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
											);
											didWarnAboutUpdateInRender = true;
										}
										break;
									}
								}
							}
						}
					}
					var IsThisRendererActing = {
						current: false
					};
					function warnIfNotScopedWithMatchingAct(fiber) {
						{
							if (IsSomeRendererActing.current === true && IsThisRendererActing.current !== true) {
								var previousFiber = current;
								try {
									setCurrentFiber(fiber);
									error(
										"It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);"
									);
								} finally {
									if (previousFiber) {
										setCurrentFiber(fiber);
									} else {
										resetCurrentFiber();
									}
								}
							}
						}
					}
					function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
						{
							if (
								(fiber.mode & StrictMode) !== NoMode &&
								IsSomeRendererActing.current === false &&
								IsThisRendererActing.current === false
							) {
								error(
									"An update to %s ran an effect, but was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",
									getComponentName(fiber.type)
								);
							}
						}
					}
					function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
						{
							if (
								executionContext === NoContext &&
								IsSomeRendererActing.current === false &&
								IsThisRendererActing.current === false
							) {
								var previousFiber = current;
								try {
									setCurrentFiber(fiber);
									error(
										"An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",
										getComponentName(fiber.type)
									);
								} finally {
									if (previousFiber) {
										setCurrentFiber(fiber);
									} else {
										resetCurrentFiber();
									}
								}
							}
						}
					}
					var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV;
					var didWarnAboutUnmockedScheduler = false;
					function warnIfUnmockedScheduler(fiber) {
						{
							if (didWarnAboutUnmockedScheduler === false && Scheduler.unstable_flushAllWithoutAsserting === void 0) {
								if (fiber.mode & BlockingMode || fiber.mode & ConcurrentMode) {
									didWarnAboutUnmockedScheduler = true;
									error(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`);
								}
							}
						}
					}
					function computeThreadID(root2, lane) {
						return lane * 1e3 + root2.interactionThreadID;
					}
					function markSpawnedWork(lane) {
						if (spawnedWorkDuringRender === null) {
							spawnedWorkDuringRender = [lane];
						} else {
							spawnedWorkDuringRender.push(lane);
						}
					}
					function scheduleInteractions(root2, lane, interactions) {
						if (interactions.size > 0) {
							var pendingInteractionMap = root2.pendingInteractionMap;
							var pendingInteractions = pendingInteractionMap.get(lane);
							if (pendingInteractions != null) {
								interactions.forEach(function (interaction) {
									if (!pendingInteractions.has(interaction)) {
										interaction.__count++;
									}
									pendingInteractions.add(interaction);
								});
							} else {
								pendingInteractionMap.set(lane, new Set(interactions));
								interactions.forEach(function (interaction) {
									interaction.__count++;
								});
							}
							var subscriber = tracing.__subscriberRef.current;
							if (subscriber !== null) {
								var threadID = computeThreadID(root2, lane);
								subscriber.onWorkScheduled(interactions, threadID);
							}
						}
					}
					function schedulePendingInteractions(root2, lane) {
						scheduleInteractions(root2, lane, tracing.__interactionsRef.current);
					}
					function startWorkOnPendingInteractions(root2, lanes) {
						var interactions = /* @__PURE__ */ new Set();
						root2.pendingInteractionMap.forEach(function (scheduledInteractions, scheduledLane) {
							if (includesSomeLane(lanes, scheduledLane)) {
								scheduledInteractions.forEach(function (interaction) {
									return interactions.add(interaction);
								});
							}
						});
						root2.memoizedInteractions = interactions;
						if (interactions.size > 0) {
							var subscriber = tracing.__subscriberRef.current;
							if (subscriber !== null) {
								var threadID = computeThreadID(root2, lanes);
								try {
									subscriber.onWorkStarted(interactions, threadID);
								} catch (error2) {
									scheduleCallback(ImmediatePriority$1, function () {
										throw error2;
									});
								}
							}
						}
					}
					function finishPendingInteractions(root2, committedLanes) {
						var remainingLanesAfterCommit = root2.pendingLanes;
						var subscriber;
						try {
							subscriber = tracing.__subscriberRef.current;
							if (subscriber !== null && root2.memoizedInteractions.size > 0) {
								var threadID = computeThreadID(root2, committedLanes);
								subscriber.onWorkStopped(root2.memoizedInteractions, threadID);
							}
						} catch (error2) {
							scheduleCallback(ImmediatePriority$1, function () {
								throw error2;
							});
						} finally {
							var pendingInteractionMap = root2.pendingInteractionMap;
							pendingInteractionMap.forEach(function (scheduledInteractions, lane) {
								if (!includesSomeLane(remainingLanesAfterCommit, lane)) {
									pendingInteractionMap.delete(lane);
									scheduledInteractions.forEach(function (interaction) {
										interaction.__count--;
										if (subscriber !== null && interaction.__count === 0) {
											try {
												subscriber.onInteractionScheduledWorkCompleted(interaction);
											} catch (error2) {
												scheduleCallback(ImmediatePriority$1, function () {
													throw error2;
												});
											}
										}
									});
								}
							});
						}
					}
					function shouldForceFlushFallbacksInDEV() {
						return actingUpdatesScopeDepth > 0;
					}
					var actingUpdatesScopeDepth = 0;
					function detachFiberAfterEffects(fiber) {
						fiber.sibling = null;
						fiber.stateNode = null;
					}
					var resolveFamily = null;
					var failedBoundaries = null;
					var setRefreshHandler = function (handler) {
						{
							resolveFamily = handler;
						}
					};
					function resolveFunctionForHotReloading(type) {
						{
							if (resolveFamily === null) {
								return type;
							}
							var family = resolveFamily(type);
							if (family === void 0) {
								return type;
							}
							return family.current;
						}
					}
					function resolveClassForHotReloading(type) {
						return resolveFunctionForHotReloading(type);
					}
					function resolveForwardRefForHotReloading(type) {
						{
							if (resolveFamily === null) {
								return type;
							}
							var family = resolveFamily(type);
							if (family === void 0) {
								if (type !== null && type !== void 0 && typeof type.render === 'function') {
									var currentRender = resolveFunctionForHotReloading(type.render);
									if (type.render !== currentRender) {
										var syntheticType = {
											$$typeof: REACT_FORWARD_REF_TYPE,
											render: currentRender
										};
										if (type.displayName !== void 0) {
											syntheticType.displayName = type.displayName;
										}
										return syntheticType;
									}
								}
								return type;
							}
							return family.current;
						}
					}
					function isCompatibleFamilyForHotReloading(fiber, element) {
						{
							if (resolveFamily === null) {
								return false;
							}
							var prevType = fiber.elementType;
							var nextType = element.type;
							var needsCompareFamilies = false;
							var $$typeofNextType = typeof nextType === 'object' && nextType !== null ? nextType.$$typeof : null;
							switch (fiber.tag) {
								case ClassComponent: {
									if (typeof nextType === 'function') {
										needsCompareFamilies = true;
									}
									break;
								}
								case FunctionComponent: {
									if (typeof nextType === 'function') {
										needsCompareFamilies = true;
									} else if ($$typeofNextType === REACT_LAZY_TYPE) {
										needsCompareFamilies = true;
									}
									break;
								}
								case ForwardRef: {
									if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
										needsCompareFamilies = true;
									} else if ($$typeofNextType === REACT_LAZY_TYPE) {
										needsCompareFamilies = true;
									}
									break;
								}
								case MemoComponent:
								case SimpleMemoComponent: {
									if ($$typeofNextType === REACT_MEMO_TYPE) {
										needsCompareFamilies = true;
									} else if ($$typeofNextType === REACT_LAZY_TYPE) {
										needsCompareFamilies = true;
									}
									break;
								}
								default:
									return false;
							}
							if (needsCompareFamilies) {
								var prevFamily = resolveFamily(prevType);
								if (prevFamily !== void 0 && prevFamily === resolveFamily(nextType)) {
									return true;
								}
							}
							return false;
						}
					}
					function markFailedErrorBoundaryForHotReloading(fiber) {
						{
							if (resolveFamily === null) {
								return;
							}
							if (typeof WeakSet !== 'function') {
								return;
							}
							if (failedBoundaries === null) {
								failedBoundaries = /* @__PURE__ */ new WeakSet();
							}
							failedBoundaries.add(fiber);
						}
					}
					var scheduleRefresh = function (root2, update) {
						{
							if (resolveFamily === null) {
								return;
							}
							var staleFamilies = update.staleFamilies,
								updatedFamilies = update.updatedFamilies;
							flushPassiveEffects();
							flushSync(function () {
								scheduleFibersWithFamiliesRecursively(root2.current, updatedFamilies, staleFamilies);
							});
						}
					};
					var scheduleRoot = function (root2, element) {
						{
							if (root2.context !== emptyContextObject) {
								return;
							}
							flushPassiveEffects();
							flushSync(function () {
								updateContainer(element, root2, null, null);
							});
						}
					};
					function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
						{
							var alternate = fiber.alternate,
								child = fiber.child,
								sibling = fiber.sibling,
								tag = fiber.tag,
								type = fiber.type;
							var candidateType = null;
							switch (tag) {
								case FunctionComponent:
								case SimpleMemoComponent:
								case ClassComponent:
									candidateType = type;
									break;
								case ForwardRef:
									candidateType = type.render;
									break;
							}
							if (resolveFamily === null) {
								throw new Error('Expected resolveFamily to be set during hot reload.');
							}
							var needsRender = false;
							var needsRemount = false;
							if (candidateType !== null) {
								var family = resolveFamily(candidateType);
								if (family !== void 0) {
									if (staleFamilies.has(family)) {
										needsRemount = true;
									} else if (updatedFamilies.has(family)) {
										if (tag === ClassComponent) {
											needsRemount = true;
										} else {
											needsRender = true;
										}
									}
								}
							}
							if (failedBoundaries !== null) {
								if (failedBoundaries.has(fiber) || (alternate !== null && failedBoundaries.has(alternate))) {
									needsRemount = true;
								}
							}
							if (needsRemount) {
								fiber._debugNeedsRemount = true;
							}
							if (needsRemount || needsRender) {
								scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
							}
							if (child !== null && !needsRemount) {
								scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
							}
							if (sibling !== null) {
								scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
							}
						}
					}
					var findHostInstancesForRefresh = function (root2, families) {
						{
							var hostInstances = /* @__PURE__ */ new Set();
							var types = new Set(
								families.map(function (family) {
									return family.current;
								})
							);
							findHostInstancesForMatchingFibersRecursively(root2.current, types, hostInstances);
							return hostInstances;
						}
					};
					function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
						{
							var child = fiber.child,
								sibling = fiber.sibling,
								tag = fiber.tag,
								type = fiber.type;
							var candidateType = null;
							switch (tag) {
								case FunctionComponent:
								case SimpleMemoComponent:
								case ClassComponent:
									candidateType = type;
									break;
								case ForwardRef:
									candidateType = type.render;
									break;
							}
							var didMatch = false;
							if (candidateType !== null) {
								if (types.has(candidateType)) {
									didMatch = true;
								}
							}
							if (didMatch) {
								findHostInstancesForFiberShallowly(fiber, hostInstances);
							} else {
								if (child !== null) {
									findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
								}
							}
							if (sibling !== null) {
								findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
							}
						}
					}
					function findHostInstancesForFiberShallowly(fiber, hostInstances) {
						{
							var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
							if (foundHostInstances) {
								return;
							}
							var node = fiber;
							while (true) {
								switch (node.tag) {
									case HostComponent:
										hostInstances.add(node.stateNode);
										return;
									case HostPortal:
										hostInstances.add(node.stateNode.containerInfo);
										return;
									case HostRoot:
										hostInstances.add(node.stateNode.containerInfo);
										return;
								}
								if (node.return === null) {
									throw new Error('Expected to reach root first.');
								}
								node = node.return;
							}
						}
					}
					function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
						{
							var node = fiber;
							var foundHostInstances = false;
							while (true) {
								if (node.tag === HostComponent) {
									foundHostInstances = true;
									hostInstances.add(node.stateNode);
								} else if (node.child !== null) {
									node.child.return = node;
									node = node.child;
									continue;
								}
								if (node === fiber) {
									return foundHostInstances;
								}
								while (node.sibling === null) {
									if (node.return === null || node.return === fiber) {
										return foundHostInstances;
									}
									node = node.return;
								}
								node.sibling.return = node.return;
								node = node.sibling;
							}
						}
						return false;
					}
					var hasBadMapPolyfill;
					{
						hasBadMapPolyfill = false;
						try {
							var nonExtensibleObject = Object.preventExtensions({});
							/* @__PURE__ */ new Map([[nonExtensibleObject, null]]);
							/* @__PURE__ */ new Set([nonExtensibleObject]);
						} catch (e) {
							hasBadMapPolyfill = true;
						}
					}
					var debugCounter = 1;
					function FiberNode(tag, pendingProps, key, mode) {
						this.tag = tag;
						this.key = key;
						this.elementType = null;
						this.type = null;
						this.stateNode = null;
						this.return = null;
						this.child = null;
						this.sibling = null;
						this.index = 0;
						this.ref = null;
						this.pendingProps = pendingProps;
						this.memoizedProps = null;
						this.updateQueue = null;
						this.memoizedState = null;
						this.dependencies = null;
						this.mode = mode;
						this.flags = NoFlags;
						this.nextEffect = null;
						this.firstEffect = null;
						this.lastEffect = null;
						this.lanes = NoLanes;
						this.childLanes = NoLanes;
						this.alternate = null;
						{
							this.actualDuration = Number.NaN;
							this.actualStartTime = Number.NaN;
							this.selfBaseDuration = Number.NaN;
							this.treeBaseDuration = Number.NaN;
							this.actualDuration = 0;
							this.actualStartTime = -1;
							this.selfBaseDuration = 0;
							this.treeBaseDuration = 0;
						}
						{
							this._debugID = debugCounter++;
							this._debugSource = null;
							this._debugOwner = null;
							this._debugNeedsRemount = false;
							this._debugHookTypes = null;
							if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
								Object.preventExtensions(this);
							}
						}
					}
					var createFiber = function (tag, pendingProps, key, mode) {
						return new FiberNode(tag, pendingProps, key, mode);
					};
					function shouldConstruct$1(Component) {
						var prototype = Component.prototype;
						return !!(prototype && prototype.isReactComponent);
					}
					function isSimpleFunctionComponent(type) {
						return typeof type === 'function' && !shouldConstruct$1(type) && type.defaultProps === void 0;
					}
					function resolveLazyComponentTag(Component) {
						if (typeof Component === 'function') {
							return shouldConstruct$1(Component) ? ClassComponent : FunctionComponent;
						} else if (Component !== void 0 && Component !== null) {
							var $$typeof = Component.$$typeof;
							if ($$typeof === REACT_FORWARD_REF_TYPE) {
								return ForwardRef;
							}
							if ($$typeof === REACT_MEMO_TYPE) {
								return MemoComponent;
							}
						}
						return IndeterminateComponent;
					}
					function createWorkInProgress(current2, pendingProps) {
						var workInProgress2 = current2.alternate;
						if (workInProgress2 === null) {
							workInProgress2 = createFiber(current2.tag, pendingProps, current2.key, current2.mode);
							workInProgress2.elementType = current2.elementType;
							workInProgress2.type = current2.type;
							workInProgress2.stateNode = current2.stateNode;
							{
								workInProgress2._debugID = current2._debugID;
								workInProgress2._debugSource = current2._debugSource;
								workInProgress2._debugOwner = current2._debugOwner;
								workInProgress2._debugHookTypes = current2._debugHookTypes;
							}
							workInProgress2.alternate = current2;
							current2.alternate = workInProgress2;
						} else {
							workInProgress2.pendingProps = pendingProps;
							workInProgress2.type = current2.type;
							workInProgress2.flags = NoFlags;
							workInProgress2.nextEffect = null;
							workInProgress2.firstEffect = null;
							workInProgress2.lastEffect = null;
							{
								workInProgress2.actualDuration = 0;
								workInProgress2.actualStartTime = -1;
							}
						}
						workInProgress2.childLanes = current2.childLanes;
						workInProgress2.lanes = current2.lanes;
						workInProgress2.child = current2.child;
						workInProgress2.memoizedProps = current2.memoizedProps;
						workInProgress2.memoizedState = current2.memoizedState;
						workInProgress2.updateQueue = current2.updateQueue;
						var currentDependencies = current2.dependencies;
						workInProgress2.dependencies =
							currentDependencies === null
								? null
								: {
										lanes: currentDependencies.lanes,
										firstContext: currentDependencies.firstContext
									};
						workInProgress2.sibling = current2.sibling;
						workInProgress2.index = current2.index;
						workInProgress2.ref = current2.ref;
						{
							workInProgress2.selfBaseDuration = current2.selfBaseDuration;
							workInProgress2.treeBaseDuration = current2.treeBaseDuration;
						}
						{
							workInProgress2._debugNeedsRemount = current2._debugNeedsRemount;
							switch (workInProgress2.tag) {
								case IndeterminateComponent:
								case FunctionComponent:
								case SimpleMemoComponent:
									workInProgress2.type = resolveFunctionForHotReloading(current2.type);
									break;
								case ClassComponent:
									workInProgress2.type = resolveClassForHotReloading(current2.type);
									break;
								case ForwardRef:
									workInProgress2.type = resolveForwardRefForHotReloading(current2.type);
									break;
							}
						}
						return workInProgress2;
					}
					function resetWorkInProgress(workInProgress2, renderLanes2) {
						workInProgress2.flags &= Placement;
						workInProgress2.nextEffect = null;
						workInProgress2.firstEffect = null;
						workInProgress2.lastEffect = null;
						var current2 = workInProgress2.alternate;
						if (current2 === null) {
							workInProgress2.childLanes = NoLanes;
							workInProgress2.lanes = renderLanes2;
							workInProgress2.child = null;
							workInProgress2.memoizedProps = null;
							workInProgress2.memoizedState = null;
							workInProgress2.updateQueue = null;
							workInProgress2.dependencies = null;
							workInProgress2.stateNode = null;
							{
								workInProgress2.selfBaseDuration = 0;
								workInProgress2.treeBaseDuration = 0;
							}
						} else {
							workInProgress2.childLanes = current2.childLanes;
							workInProgress2.lanes = current2.lanes;
							workInProgress2.child = current2.child;
							workInProgress2.memoizedProps = current2.memoizedProps;
							workInProgress2.memoizedState = current2.memoizedState;
							workInProgress2.updateQueue = current2.updateQueue;
							workInProgress2.type = current2.type;
							var currentDependencies = current2.dependencies;
							workInProgress2.dependencies =
								currentDependencies === null
									? null
									: {
											lanes: currentDependencies.lanes,
											firstContext: currentDependencies.firstContext
										};
							{
								workInProgress2.selfBaseDuration = current2.selfBaseDuration;
								workInProgress2.treeBaseDuration = current2.treeBaseDuration;
							}
						}
						return workInProgress2;
					}
					function createHostRootFiber(tag) {
						var mode;
						if (tag === ConcurrentRoot) {
							mode = ConcurrentMode | BlockingMode | StrictMode;
						} else if (tag === BlockingRoot) {
							mode = BlockingMode | StrictMode;
						} else {
							mode = NoMode;
						}
						if (isDevToolsPresent) {
							mode |= ProfileMode;
						}
						return createFiber(HostRoot, null, null, mode);
					}
					function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
						var fiberTag = IndeterminateComponent;
						var resolvedType = type;
						if (typeof type === 'function') {
							if (shouldConstruct$1(type)) {
								fiberTag = ClassComponent;
								{
									resolvedType = resolveClassForHotReloading(resolvedType);
								}
							} else {
								{
									resolvedType = resolveFunctionForHotReloading(resolvedType);
								}
							}
						} else if (typeof type === 'string') {
							fiberTag = HostComponent;
						} else {
							getTag: switch (type) {
								case REACT_FRAGMENT_TYPE:
									return createFiberFromFragment(pendingProps.children, mode, lanes, key);
								case REACT_DEBUG_TRACING_MODE_TYPE:
									fiberTag = Mode;
									mode |= DebugTracingMode;
									break;
								case REACT_STRICT_MODE_TYPE:
									fiberTag = Mode;
									mode |= StrictMode;
									break;
								case REACT_PROFILER_TYPE:
									return createFiberFromProfiler(pendingProps, mode, lanes, key);
								case REACT_SUSPENSE_TYPE:
									return createFiberFromSuspense(pendingProps, mode, lanes, key);
								case REACT_SUSPENSE_LIST_TYPE:
									return createFiberFromSuspenseList(pendingProps, mode, lanes, key);
								case REACT_OFFSCREEN_TYPE:
									return createFiberFromOffscreen(pendingProps, mode, lanes, key);
								case REACT_LEGACY_HIDDEN_TYPE:
									return createFiberFromLegacyHidden(pendingProps, mode, lanes, key);
								case REACT_SCOPE_TYPE:
								default: {
									if (typeof type === 'object' && type !== null) {
										switch (type.$$typeof) {
											case REACT_PROVIDER_TYPE:
												fiberTag = ContextProvider;
												break getTag;
											case REACT_CONTEXT_TYPE:
												fiberTag = ContextConsumer;
												break getTag;
											case REACT_FORWARD_REF_TYPE:
												fiberTag = ForwardRef;
												{
													resolvedType = resolveForwardRefForHotReloading(resolvedType);
												}
												break getTag;
											case REACT_MEMO_TYPE:
												fiberTag = MemoComponent;
												break getTag;
											case REACT_LAZY_TYPE:
												fiberTag = LazyComponent;
												resolvedType = null;
												break getTag;
											case REACT_BLOCK_TYPE:
												fiberTag = Block;
												break getTag;
										}
									}
									var info = '';
									{
										if (
											type === void 0 ||
											(typeof type === 'object' && type !== null && Object.keys(type).length === 0)
										) {
											info +=
												" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
										}
										var ownerName = owner ? getComponentName(owner.type) : null;
										if (ownerName) {
											info += '\n\nCheck the render method of `' + ownerName + '`.';
										}
									}
									{
										{
											throw Error(
												'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ' +
													(type == null ? type : typeof type) +
													'.' +
													info
											);
										}
									}
								}
							}
						}
						var fiber = createFiber(fiberTag, pendingProps, key, mode);
						fiber.elementType = type;
						fiber.type = resolvedType;
						fiber.lanes = lanes;
						{
							fiber._debugOwner = owner;
						}
						return fiber;
					}
					function createFiberFromElement(element, mode, lanes) {
						var owner = null;
						{
							owner = element._owner;
						}
						var type = element.type;
						var key = element.key;
						var pendingProps = element.props;
						var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes);
						{
							fiber._debugSource = element._source;
							fiber._debugOwner = element._owner;
						}
						return fiber;
					}
					function createFiberFromFragment(elements, mode, lanes, key) {
						var fiber = createFiber(Fragment, elements, key, mode);
						fiber.lanes = lanes;
						return fiber;
					}
					function createFiberFromProfiler(pendingProps, mode, lanes, key) {
						{
							if (typeof pendingProps.id !== 'string') {
								error('Profiler must specify an "id" as a prop');
							}
						}
						var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
						fiber.elementType = REACT_PROFILER_TYPE;
						fiber.type = REACT_PROFILER_TYPE;
						fiber.lanes = lanes;
						{
							fiber.stateNode = {
								effectDuration: 0,
								passiveEffectDuration: 0
							};
						}
						return fiber;
					}
					function createFiberFromSuspense(pendingProps, mode, lanes, key) {
						var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
						fiber.type = REACT_SUSPENSE_TYPE;
						fiber.elementType = REACT_SUSPENSE_TYPE;
						fiber.lanes = lanes;
						return fiber;
					}
					function createFiberFromSuspenseList(pendingProps, mode, lanes, key) {
						var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
						{
							fiber.type = REACT_SUSPENSE_LIST_TYPE;
						}
						fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
						fiber.lanes = lanes;
						return fiber;
					}
					function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
						var fiber = createFiber(OffscreenComponent, pendingProps, key, mode);
						{
							fiber.type = REACT_OFFSCREEN_TYPE;
						}
						fiber.elementType = REACT_OFFSCREEN_TYPE;
						fiber.lanes = lanes;
						return fiber;
					}
					function createFiberFromLegacyHidden(pendingProps, mode, lanes, key) {
						var fiber = createFiber(LegacyHiddenComponent, pendingProps, key, mode);
						{
							fiber.type = REACT_LEGACY_HIDDEN_TYPE;
						}
						fiber.elementType = REACT_LEGACY_HIDDEN_TYPE;
						fiber.lanes = lanes;
						return fiber;
					}
					function createFiberFromText(content, mode, lanes) {
						var fiber = createFiber(HostText, content, null, mode);
						fiber.lanes = lanes;
						return fiber;
					}
					function createFiberFromHostInstanceForDeletion() {
						var fiber = createFiber(HostComponent, null, null, NoMode);
						fiber.elementType = 'DELETED';
						fiber.type = 'DELETED';
						return fiber;
					}
					function createFiberFromPortal(portal, mode, lanes) {
						var pendingProps = portal.children !== null ? portal.children : [];
						var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
						fiber.lanes = lanes;
						fiber.stateNode = {
							containerInfo: portal.containerInfo,
							pendingChildren: null,
							implementation: portal.implementation
						};
						return fiber;
					}
					function assignFiberPropertiesInDEV(target, source) {
						if (target === null) {
							target = createFiber(IndeterminateComponent, null, null, NoMode);
						}
						target.tag = source.tag;
						target.key = source.key;
						target.elementType = source.elementType;
						target.type = source.type;
						target.stateNode = source.stateNode;
						target.return = source.return;
						target.child = source.child;
						target.sibling = source.sibling;
						target.index = source.index;
						target.ref = source.ref;
						target.pendingProps = source.pendingProps;
						target.memoizedProps = source.memoizedProps;
						target.updateQueue = source.updateQueue;
						target.memoizedState = source.memoizedState;
						target.dependencies = source.dependencies;
						target.mode = source.mode;
						target.flags = source.flags;
						target.nextEffect = source.nextEffect;
						target.firstEffect = source.firstEffect;
						target.lastEffect = source.lastEffect;
						target.lanes = source.lanes;
						target.childLanes = source.childLanes;
						target.alternate = source.alternate;
						{
							target.actualDuration = source.actualDuration;
							target.actualStartTime = source.actualStartTime;
							target.selfBaseDuration = source.selfBaseDuration;
							target.treeBaseDuration = source.treeBaseDuration;
						}
						target._debugID = source._debugID;
						target._debugSource = source._debugSource;
						target._debugOwner = source._debugOwner;
						target._debugNeedsRemount = source._debugNeedsRemount;
						target._debugHookTypes = source._debugHookTypes;
						return target;
					}
					function FiberRootNode(containerInfo, tag, hydrate2) {
						this.tag = tag;
						this.containerInfo = containerInfo;
						this.pendingChildren = null;
						this.current = null;
						this.pingCache = null;
						this.finishedWork = null;
						this.timeoutHandle = noTimeout;
						this.context = null;
						this.pendingContext = null;
						this.hydrate = hydrate2;
						this.callbackNode = null;
						this.callbackPriority = NoLanePriority;
						this.eventTimes = createLaneMap(NoLanes);
						this.expirationTimes = createLaneMap(NoTimestamp);
						this.pendingLanes = NoLanes;
						this.suspendedLanes = NoLanes;
						this.pingedLanes = NoLanes;
						this.expiredLanes = NoLanes;
						this.mutableReadLanes = NoLanes;
						this.finishedLanes = NoLanes;
						this.entangledLanes = NoLanes;
						this.entanglements = createLaneMap(NoLanes);
						{
							this.mutableSourceEagerHydrationData = null;
						}
						{
							this.interactionThreadID = tracing.unstable_getThreadID();
							this.memoizedInteractions = /* @__PURE__ */ new Set();
							this.pendingInteractionMap = /* @__PURE__ */ new Map();
						}
						{
							switch (tag) {
								case BlockingRoot:
									this._debugRootType = 'createBlockingRoot()';
									break;
								case ConcurrentRoot:
									this._debugRootType = 'createRoot()';
									break;
								case LegacyRoot:
									this._debugRootType = 'createLegacyRoot()';
									break;
							}
						}
					}
					function createFiberRoot(containerInfo, tag, hydrate2, hydrationCallbacks) {
						var root2 = new FiberRootNode(containerInfo, tag, hydrate2);
						var uninitializedFiber = createHostRootFiber(tag);
						root2.current = uninitializedFiber;
						uninitializedFiber.stateNode = root2;
						initializeUpdateQueue(uninitializedFiber);
						return root2;
					}
					function registerMutableSourceForHydration(root2, mutableSource) {
						var getVersion = mutableSource._getVersion;
						var version = getVersion(mutableSource._source);
						if (root2.mutableSourceEagerHydrationData == null) {
							root2.mutableSourceEagerHydrationData = [mutableSource, version];
						} else {
							root2.mutableSourceEagerHydrationData.push(mutableSource, version);
						}
					}
					function createPortal(children, containerInfo, implementation) {
						var key = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
						return {
							$$typeof: REACT_PORTAL_TYPE,
							key: key == null ? null : '' + key,
							children,
							containerInfo,
							implementation
						};
					}
					var didWarnAboutNestedUpdates;
					var didWarnAboutFindNodeInStrictMode;
					{
						didWarnAboutNestedUpdates = false;
						didWarnAboutFindNodeInStrictMode = {};
					}
					function getContextForSubtree(parentComponent) {
						if (!parentComponent) {
							return emptyContextObject;
						}
						var fiber = get(parentComponent);
						var parentContext = findCurrentUnmaskedContext(fiber);
						if (fiber.tag === ClassComponent) {
							var Component = fiber.type;
							if (isContextProvider(Component)) {
								return processChildContext(fiber, Component, parentContext);
							}
						}
						return parentContext;
					}
					function findHostInstanceWithWarning(component, methodName) {
						{
							var fiber = get(component);
							if (fiber === void 0) {
								if (typeof component.render === 'function') {
									{
										{
											throw Error('Unable to find node on an unmounted component.');
										}
									}
								} else {
									{
										{
											throw Error('Argument appears to not be a ReactComponent. Keys: ' + Object.keys(component));
										}
									}
								}
							}
							var hostFiber = findCurrentHostFiber(fiber);
							if (hostFiber === null) {
								return null;
							}
							if (hostFiber.mode & StrictMode) {
								var componentName = getComponentName(fiber.type) || 'Component';
								if (!didWarnAboutFindNodeInStrictMode[componentName]) {
									didWarnAboutFindNodeInStrictMode[componentName] = true;
									var previousFiber = current;
									try {
										setCurrentFiber(hostFiber);
										if (fiber.mode & StrictMode) {
											error(
												'%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
												methodName,
												methodName,
												componentName
											);
										} else {
											error(
												'%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
												methodName,
												methodName,
												componentName
											);
										}
									} finally {
										if (previousFiber) {
											setCurrentFiber(previousFiber);
										} else {
											resetCurrentFiber();
										}
									}
								}
							}
							return hostFiber.stateNode;
						}
					}
					function createContainer(containerInfo, tag, hydrate2, hydrationCallbacks) {
						return createFiberRoot(containerInfo, tag, hydrate2);
					}
					function updateContainer(element, container, parentComponent, callback) {
						{
							onScheduleRoot(container, element);
						}
						var current$1 = container.current;
						var eventTime = requestEventTime();
						{
							if (typeof jest !== 'undefined') {
								warnIfUnmockedScheduler(current$1);
								warnIfNotScopedWithMatchingAct(current$1);
							}
						}
						var lane = requestUpdateLane(current$1);
						var context = getContextForSubtree(parentComponent);
						if (container.context === null) {
							container.context = context;
						} else {
							container.pendingContext = context;
						}
						{
							if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
								didWarnAboutNestedUpdates = true;
								error(
									'Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.',
									getComponentName(current.type) || 'Unknown'
								);
							}
						}
						var update = createUpdate(eventTime, lane);
						update.payload = {
							element
						};
						callback = callback === void 0 ? null : callback;
						if (callback !== null) {
							{
								if (typeof callback !== 'function') {
									error(
										'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
										callback
									);
								}
							}
							update.callback = callback;
						}
						enqueueUpdate(current$1, update);
						scheduleUpdateOnFiber(current$1, lane, eventTime);
						return lane;
					}
					function getPublicRootInstance(container) {
						var containerFiber = container.current;
						if (!containerFiber.child) {
							return null;
						}
						switch (containerFiber.child.tag) {
							case HostComponent:
								return getPublicInstance(containerFiber.child.stateNode);
							default:
								return containerFiber.child.stateNode;
						}
					}
					function markRetryLaneImpl(fiber, retryLane) {
						var suspenseState = fiber.memoizedState;
						if (suspenseState !== null && suspenseState.dehydrated !== null) {
							suspenseState.retryLane = higherPriorityLane(suspenseState.retryLane, retryLane);
						}
					}
					function markRetryLaneIfNotHydrated(fiber, retryLane) {
						markRetryLaneImpl(fiber, retryLane);
						var alternate = fiber.alternate;
						if (alternate) {
							markRetryLaneImpl(alternate, retryLane);
						}
					}
					function attemptUserBlockingHydration$1(fiber) {
						if (fiber.tag !== SuspenseComponent) {
							return;
						}
						var eventTime = requestEventTime();
						var lane = InputDiscreteHydrationLane;
						scheduleUpdateOnFiber(fiber, lane, eventTime);
						markRetryLaneIfNotHydrated(fiber, lane);
					}
					function attemptContinuousHydration$1(fiber) {
						if (fiber.tag !== SuspenseComponent) {
							return;
						}
						var eventTime = requestEventTime();
						var lane = SelectiveHydrationLane;
						scheduleUpdateOnFiber(fiber, lane, eventTime);
						markRetryLaneIfNotHydrated(fiber, lane);
					}
					function attemptHydrationAtCurrentPriority$1(fiber) {
						if (fiber.tag !== SuspenseComponent) {
							return;
						}
						var eventTime = requestEventTime();
						var lane = requestUpdateLane(fiber);
						scheduleUpdateOnFiber(fiber, lane, eventTime);
						markRetryLaneIfNotHydrated(fiber, lane);
					}
					function runWithPriority$2(priority, fn) {
						try {
							setCurrentUpdateLanePriority(priority);
							return fn();
						} finally {
						}
					}
					function findHostInstanceWithNoPortals(fiber) {
						var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
						if (hostFiber === null) {
							return null;
						}
						if (hostFiber.tag === FundamentalComponent) {
							return hostFiber.stateNode.instance;
						}
						return hostFiber.stateNode;
					}
					var shouldSuspendImpl = function (fiber) {
						return false;
					};
					function shouldSuspend(fiber) {
						return shouldSuspendImpl(fiber);
					}
					var overrideHookState = null;
					var overrideHookStateDeletePath = null;
					var overrideHookStateRenamePath = null;
					var overrideProps = null;
					var overridePropsDeletePath = null;
					var overridePropsRenamePath = null;
					var scheduleUpdate = null;
					var setSuspenseHandler = null;
					{
						var copyWithDeleteImpl = function (obj, path, index2) {
							var key = path[index2];
							var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
							if (index2 + 1 === path.length) {
								if (Array.isArray(updated)) {
									updated.splice(key, 1);
								} else {
									delete updated[key];
								}
								return updated;
							}
							updated[key] = copyWithDeleteImpl(obj[key], path, index2 + 1);
							return updated;
						};
						var copyWithDelete = function (obj, path) {
							return copyWithDeleteImpl(obj, path, 0);
						};
						var copyWithRenameImpl = function (obj, oldPath, newPath, index2) {
							var oldKey = oldPath[index2];
							var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
							if (index2 + 1 === oldPath.length) {
								var newKey = newPath[index2];
								updated[newKey] = updated[oldKey];
								if (Array.isArray(updated)) {
									updated.splice(oldKey, 1);
								} else {
									delete updated[oldKey];
								}
							} else {
								updated[oldKey] = copyWithRenameImpl(obj[oldKey], oldPath, newPath, index2 + 1);
							}
							return updated;
						};
						var copyWithRename = function (obj, oldPath, newPath) {
							if (oldPath.length !== newPath.length) {
								warn('copyWithRename() expects paths of the same length');
								return;
							} else {
								for (var i2 = 0; i2 < newPath.length - 1; i2++) {
									if (oldPath[i2] !== newPath[i2]) {
										warn('copyWithRename() expects paths to be the same except for the deepest key');
										return;
									}
								}
							}
							return copyWithRenameImpl(obj, oldPath, newPath, 0);
						};
						var copyWithSetImpl = function (obj, path, index2, value) {
							if (index2 >= path.length) {
								return value;
							}
							var key = path[index2];
							var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
							updated[key] = copyWithSetImpl(obj[key], path, index2 + 1, value);
							return updated;
						};
						var copyWithSet = function (obj, path, value) {
							return copyWithSetImpl(obj, path, 0, value);
						};
						var findHook = function (fiber, id) {
							var currentHook2 = fiber.memoizedState;
							while (currentHook2 !== null && id > 0) {
								currentHook2 = currentHook2.next;
								id--;
							}
							return currentHook2;
						};
						overrideHookState = function (fiber, id, path, value) {
							var hook = findHook(fiber, id);
							if (hook !== null) {
								var newState = copyWithSet(hook.memoizedState, path, value);
								hook.memoizedState = newState;
								hook.baseState = newState;
								fiber.memoizedProps = _assign({}, fiber.memoizedProps);
								scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
							}
						};
						overrideHookStateDeletePath = function (fiber, id, path) {
							var hook = findHook(fiber, id);
							if (hook !== null) {
								var newState = copyWithDelete(hook.memoizedState, path);
								hook.memoizedState = newState;
								hook.baseState = newState;
								fiber.memoizedProps = _assign({}, fiber.memoizedProps);
								scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
							}
						};
						overrideHookStateRenamePath = function (fiber, id, oldPath, newPath) {
							var hook = findHook(fiber, id);
							if (hook !== null) {
								var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
								hook.memoizedState = newState;
								hook.baseState = newState;
								fiber.memoizedProps = _assign({}, fiber.memoizedProps);
								scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
							}
						};
						overrideProps = function (fiber, path, value) {
							fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);
							if (fiber.alternate) {
								fiber.alternate.pendingProps = fiber.pendingProps;
							}
							scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
						};
						overridePropsDeletePath = function (fiber, path) {
							fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);
							if (fiber.alternate) {
								fiber.alternate.pendingProps = fiber.pendingProps;
							}
							scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
						};
						overridePropsRenamePath = function (fiber, oldPath, newPath) {
							fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);
							if (fiber.alternate) {
								fiber.alternate.pendingProps = fiber.pendingProps;
							}
							scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
						};
						scheduleUpdate = function (fiber) {
							scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
						};
						setSuspenseHandler = function (newShouldSuspendImpl) {
							shouldSuspendImpl = newShouldSuspendImpl;
						};
					}
					function findHostInstanceByFiber(fiber) {
						var hostFiber = findCurrentHostFiber(fiber);
						if (hostFiber === null) {
							return null;
						}
						return hostFiber.stateNode;
					}
					function emptyFindFiberByHostInstance(instance) {
						return null;
					}
					function getCurrentFiberForDevTools() {
						return current;
					}
					function injectIntoDevTools(devToolsConfig) {
						var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
						var ReactCurrentDispatcher2 = ReactSharedInternals.ReactCurrentDispatcher;
						return injectInternals({
							bundleType: devToolsConfig.bundleType,
							version: devToolsConfig.version,
							rendererPackageName: devToolsConfig.rendererPackageName,
							rendererConfig: devToolsConfig.rendererConfig,
							overrideHookState,
							overrideHookStateDeletePath,
							overrideHookStateRenamePath,
							overrideProps,
							overridePropsDeletePath,
							overridePropsRenamePath,
							setSuspenseHandler,
							scheduleUpdate,
							currentDispatcherRef: ReactCurrentDispatcher2,
							findHostInstanceByFiber,
							findFiberByHostInstance: findFiberByHostInstance || emptyFindFiberByHostInstance,
							findHostInstancesForRefresh,
							scheduleRefresh,
							scheduleRoot,
							setRefreshHandler,
							getCurrentFiber: getCurrentFiberForDevTools
						});
					}
					function ReactDOMRoot(container, options2) {
						this._internalRoot = createRootImpl(container, ConcurrentRoot, options2);
					}
					function ReactDOMBlockingRoot(container, tag, options2) {
						this._internalRoot = createRootImpl(container, tag, options2);
					}
					ReactDOMRoot.prototype.render = ReactDOMBlockingRoot.prototype.render = function (children) {
						var root2 = this._internalRoot;
						{
							if (typeof arguments[1] === 'function') {
								error(
									'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
								);
							}
							var container = root2.containerInfo;
							if (container.nodeType !== COMMENT_NODE) {
								var hostInstance = findHostInstanceWithNoPortals(root2.current);
								if (hostInstance) {
									if (hostInstance.parentNode !== container) {
										error(
											"render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
										);
									}
								}
							}
						}
						updateContainer(children, root2, null, null);
					};
					ReactDOMRoot.prototype.unmount = ReactDOMBlockingRoot.prototype.unmount = function () {
						{
							if (typeof arguments[0] === 'function') {
								error(
									'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
								);
							}
						}
						var root2 = this._internalRoot;
						var container = root2.containerInfo;
						updateContainer(null, root2, null, function () {
							unmarkContainerAsRoot(container);
						});
					};
					function createRootImpl(container, tag, options2) {
						var hydrate2 = options2 != null && options2.hydrate === true;
						var hydrationCallbacks = (options2 != null && options2.hydrationOptions) || null;
						var mutableSources =
							(options2 != null && options2.hydrationOptions != null && options2.hydrationOptions.mutableSources) ||
							null;
						var root2 = createContainer(container, tag, hydrate2);
						markContainerAsRoot(root2.current, container);
						var containerNodeType = container.nodeType;
						{
							var rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;
							listenToAllSupportedEvents(rootContainerElement);
						}
						if (mutableSources) {
							for (var i2 = 0; i2 < mutableSources.length; i2++) {
								var mutableSource = mutableSources[i2];
								registerMutableSourceForHydration(root2, mutableSource);
							}
						}
						return root2;
					}
					function createLegacyRoot(container, options2) {
						return new ReactDOMBlockingRoot(container, LegacyRoot, options2);
					}
					function isValidContainer(node) {
						return !!(
							node &&
							(node.nodeType === ELEMENT_NODE ||
								node.nodeType === DOCUMENT_NODE ||
								node.nodeType === DOCUMENT_FRAGMENT_NODE ||
								(node.nodeType === COMMENT_NODE && node.nodeValue === ' react-mount-point-unstable '))
						);
					}
					var ReactCurrentOwner$3 = ReactSharedInternals.ReactCurrentOwner;
					var topLevelUpdateWarnings;
					var warnedAboutHydrateAPI = false;
					{
						topLevelUpdateWarnings = function (container) {
							if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
								var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer._internalRoot.current);
								if (hostInstance) {
									if (hostInstance.parentNode !== container) {
										error(
											'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
										);
									}
								}
							}
							var isRootRenderedBySomeReact = !!container._reactRootContainer;
							var rootEl = getReactRootElementInContainer(container);
							var hasNonRootReactChild = !!(rootEl && getInstanceFromNode(rootEl));
							if (hasNonRootReactChild && !isRootRenderedBySomeReact) {
								error(
									'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.'
								);
							}
							if (
								container.nodeType === ELEMENT_NODE &&
								container.tagName &&
								container.tagName.toUpperCase() === 'BODY'
							) {
								error(
									'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.'
								);
							}
						};
					}
					function getReactRootElementInContainer(container) {
						if (!container) {
							return null;
						}
						if (container.nodeType === DOCUMENT_NODE) {
							return container.documentElement;
						} else {
							return container.firstChild;
						}
					}
					function shouldHydrateDueToLegacyHeuristic(container) {
						var rootElement = getReactRootElementInContainer(container);
						return !!(
							rootElement &&
							rootElement.nodeType === ELEMENT_NODE &&
							rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME)
						);
					}
					function legacyCreateRootFromDOMContainer(container, forceHydrate) {
						var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
						if (!shouldHydrate) {
							var warned = false;
							var rootSibling;
							while ((rootSibling = container.lastChild)) {
								{
									if (
										!warned &&
										rootSibling.nodeType === ELEMENT_NODE &&
										rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)
									) {
										warned = true;
										error(
											'render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.'
										);
									}
								}
								container.removeChild(rootSibling);
							}
						}
						{
							if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
								warnedAboutHydrateAPI = true;
								warn(
									'render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.'
								);
							}
						}
						return createLegacyRoot(
							container,
							shouldHydrate
								? {
										hydrate: true
									}
								: void 0
						);
					}
					function warnOnInvalidCallback$1(callback, callerName) {
						{
							if (callback !== null && typeof callback !== 'function') {
								error(
									'%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
									callerName,
									callback
								);
							}
						}
					}
					function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
						{
							topLevelUpdateWarnings(container);
							warnOnInvalidCallback$1(callback === void 0 ? null : callback, 'render');
						}
						var root2 = container._reactRootContainer;
						var fiberRoot;
						if (!root2) {
							root2 = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate);
							fiberRoot = root2._internalRoot;
							if (typeof callback === 'function') {
								var originalCallback = callback;
								callback = function () {
									var instance = getPublicRootInstance(fiberRoot);
									originalCallback.call(instance);
								};
							}
							unbatchedUpdates(function () {
								updateContainer(children, fiberRoot, parentComponent, callback);
							});
						} else {
							fiberRoot = root2._internalRoot;
							if (typeof callback === 'function') {
								var _originalCallback = callback;
								callback = function () {
									var instance = getPublicRootInstance(fiberRoot);
									_originalCallback.call(instance);
								};
							}
							updateContainer(children, fiberRoot, parentComponent, callback);
						}
						return getPublicRootInstance(fiberRoot);
					}
					function findDOMNode(componentOrElement) {
						{
							var owner = ReactCurrentOwner$3.current;
							if (owner !== null && owner.stateNode !== null) {
								var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
								if (!warnedAboutRefsInRender) {
									error(
										'%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
										getComponentName(owner.type) || 'A component'
									);
								}
								owner.stateNode._warnedAboutRefsInRender = true;
							}
						}
						if (componentOrElement == null) {
							return null;
						}
						if (componentOrElement.nodeType === ELEMENT_NODE) {
							return componentOrElement;
						}
						{
							return findHostInstanceWithWarning(componentOrElement, 'findDOMNode');
						}
					}
					function hydrate(element, container, callback) {
						if (!isValidContainer(container)) {
							{
								throw Error('Target container is not a DOM element.');
							}
						}
						{
							var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
							if (isModernRoot) {
								error(
									'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?'
								);
							}
						}
						return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
					}
					function render2(element, container, callback) {
						if (!isValidContainer(container)) {
							{
								throw Error('Target container is not a DOM element.');
							}
						}
						{
							var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
							if (isModernRoot) {
								error(
									'You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?'
								);
							}
						}
						return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
					}
					function unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
						if (!isValidContainer(containerNode)) {
							{
								throw Error('Target container is not a DOM element.');
							}
						}
						if (!(parentComponent != null && has(parentComponent))) {
							{
								throw Error('parentComponent must be a valid React Component');
							}
						}
						return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
					}
					function unmountComponentAtNode(container) {
						if (!isValidContainer(container)) {
							{
								throw Error('unmountComponentAtNode(...): Target container is not a DOM element.');
							}
						}
						{
							var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
							if (isModernRoot) {
								error(
									'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?'
								);
							}
						}
						if (container._reactRootContainer) {
							{
								var rootEl = getReactRootElementInContainer(container);
								var renderedByDifferentReact = rootEl && !getInstanceFromNode(rootEl);
								if (renderedByDifferentReact) {
									error(
										"unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
									);
								}
							}
							unbatchedUpdates(function () {
								legacyRenderSubtreeIntoContainer(null, null, container, false, function () {
									container._reactRootContainer = null;
									unmarkContainerAsRoot(container);
								});
							});
							return true;
						} else {
							{
								var _rootEl = getReactRootElementInContainer(container);
								var hasNonRootReactChild = !!(_rootEl && getInstanceFromNode(_rootEl));
								var isContainerReactRoot =
									container.nodeType === ELEMENT_NODE &&
									isValidContainer(container.parentNode) &&
									!!container.parentNode._reactRootContainer;
								if (hasNonRootReactChild) {
									error(
										"unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
										isContainerReactRoot
											? 'You may have accidentally passed in a React root node instead of its container.'
											: 'Instead, have the parent component update its state and rerender in order to remove this component.'
									);
								}
							}
							return false;
						}
					}
					setAttemptUserBlockingHydration(attemptUserBlockingHydration$1);
					setAttemptContinuousHydration(attemptContinuousHydration$1);
					setAttemptHydrationAtCurrentPriority(attemptHydrationAtCurrentPriority$1);
					setAttemptHydrationAtPriority(runWithPriority$2);
					var didWarnAboutUnstableCreatePortal = false;
					{
						if (
							typeof Map !== 'function' ||
							Map.prototype == null ||
							typeof Map.prototype.forEach !== 'function' ||
							typeof Set !== 'function' ||
							Set.prototype == null ||
							typeof Set.prototype.clear !== 'function' ||
							typeof Set.prototype.forEach !== 'function'
						) {
							error(
								'React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills'
							);
						}
					}
					setRestoreImplementation(restoreControlledState$3);
					setBatchingImplementation(batchedUpdates$1, discreteUpdates$1, flushDiscreteUpdates, batchedEventUpdates$1);
					function createPortal$1(children, container) {
						var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
						if (!isValidContainer(container)) {
							{
								throw Error('Target container is not a DOM element.');
							}
						}
						return createPortal(children, container, null, key);
					}
					function renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
						return unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback);
					}
					function unstable_createPortal(children, container) {
						var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
						{
							if (!didWarnAboutUnstableCreatePortal) {
								didWarnAboutUnstableCreatePortal = true;
								warn(
									'The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.'
								);
							}
						}
						return createPortal$1(children, container, key);
					}
					var Internals = {
						Events: [
							getInstanceFromNode,
							getNodeFromInstance,
							getFiberCurrentPropsFromNode,
							enqueueStateRestore,
							restoreStateIfNeeded,
							flushPassiveEffects,
							IsThisRendererActing
						]
					};
					var foundDevTools = injectIntoDevTools({
						findFiberByHostInstance: getClosestInstanceFromNode,
						bundleType: 1,
						version: ReactVersion,
						rendererPackageName: 'react-dom'
					});
					{
						if (!foundDevTools && canUseDOM && self.top === self.self) {
							if (
								(navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1) ||
								navigator.userAgent.indexOf('Firefox') > -1
							) {
								var protocol = self.location.protocol;
								if (/^(https?|file):$/.test(protocol)) {
									console.info(
										'%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
											(protocol === 'file:'
												? '\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq'
												: ''),
										'font-weight:bold'
									);
								}
							}
						}
					}
					exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
					exports.createPortal = createPortal$1;
					exports.findDOMNode = findDOMNode;
					exports.flushSync = flushSync;
					exports.hydrate = hydrate;
					exports.render = render2;
					exports.unmountComponentAtNode = unmountComponentAtNode;
					exports.unstable_batchedUpdates = batchedUpdates$1;
					exports.unstable_createPortal = unstable_createPortal;
					exports.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer;
					exports.version = ReactVersion;
				})();
			}
		}
	});

	// node_modules/react-dom/index.js
	var require_react_dom = __commonJS({
		'node_modules/react-dom/index.js'(exports, module) {
			'use strict';
			if (false) {
				checkDCE();
				module.exports = null;
			} else {
				module.exports = require_react_dom_development();
			}
		}
	});

	// node_modules/qr.js/lib/mode.js
	var require_mode = __commonJS({
		'node_modules/qr.js/lib/mode.js'(exports, module) {
			module.exports = {
				MODE_NUMBER: 1 << 0,
				MODE_ALPHA_NUM: 1 << 1,
				MODE_8BIT_BYTE: 1 << 2,
				MODE_KANJI: 1 << 3
			};
		}
	});

	// node_modules/qr.js/lib/8BitByte.js
	var require_BitByte = __commonJS({
		'node_modules/qr.js/lib/8BitByte.js'(exports, module) {
			var mode = require_mode();
			function QR8bitByte(data) {
				this.mode = mode.MODE_8BIT_BYTE;
				this.data = data;
			}
			QR8bitByte.prototype = {
				getLength: function (buffer) {
					return this.data.length;
				},
				write: function (buffer) {
					for (var i2 = 0; i2 < this.data.length; i2++) {
						buffer.put(this.data.charCodeAt(i2), 8);
					}
				}
			};
			module.exports = QR8bitByte;
		}
	});

	// node_modules/qr.js/lib/ErrorCorrectLevel.js
	var require_ErrorCorrectLevel = __commonJS({
		'node_modules/qr.js/lib/ErrorCorrectLevel.js'(exports, module) {
			module.exports = {
				L: 1,
				M: 0,
				Q: 3,
				H: 2
			};
		}
	});

	// node_modules/qr.js/lib/RSBlock.js
	var require_RSBlock = __commonJS({
		'node_modules/qr.js/lib/RSBlock.js'(exports, module) {
			var ECL = require_ErrorCorrectLevel();
			function QRRSBlock(totalCount, dataCount) {
				this.totalCount = totalCount;
				this.dataCount = dataCount;
			}
			QRRSBlock.RS_BLOCK_TABLE = [
				[1, 26, 19],
				[1, 26, 16],
				[1, 26, 13],
				[1, 26, 9],
				[1, 44, 34],
				[1, 44, 28],
				[1, 44, 22],
				[1, 44, 16],
				[1, 70, 55],
				[1, 70, 44],
				[2, 35, 17],
				[2, 35, 13],
				[1, 100, 80],
				[2, 50, 32],
				[2, 50, 24],
				[4, 25, 9],
				[1, 134, 108],
				[2, 67, 43],
				[2, 33, 15, 2, 34, 16],
				[2, 33, 11, 2, 34, 12],
				[2, 86, 68],
				[4, 43, 27],
				[4, 43, 19],
				[4, 43, 15],
				[2, 98, 78],
				[4, 49, 31],
				[2, 32, 14, 4, 33, 15],
				[4, 39, 13, 1, 40, 14],
				[2, 121, 97],
				[2, 60, 38, 2, 61, 39],
				[4, 40, 18, 2, 41, 19],
				[4, 40, 14, 2, 41, 15],
				[2, 146, 116],
				[3, 58, 36, 2, 59, 37],
				[4, 36, 16, 4, 37, 17],
				[4, 36, 12, 4, 37, 13],
				[2, 86, 68, 2, 87, 69],
				[4, 69, 43, 1, 70, 44],
				[6, 43, 19, 2, 44, 20],
				[6, 43, 15, 2, 44, 16],
				[4, 101, 81],
				[1, 80, 50, 4, 81, 51],
				[4, 50, 22, 4, 51, 23],
				[3, 36, 12, 8, 37, 13],
				[2, 116, 92, 2, 117, 93],
				[6, 58, 36, 2, 59, 37],
				[4, 46, 20, 6, 47, 21],
				[7, 42, 14, 4, 43, 15],
				[4, 133, 107],
				[8, 59, 37, 1, 60, 38],
				[8, 44, 20, 4, 45, 21],
				[12, 33, 11, 4, 34, 12],
				[3, 145, 115, 1, 146, 116],
				[4, 64, 40, 5, 65, 41],
				[11, 36, 16, 5, 37, 17],
				[11, 36, 12, 5, 37, 13],
				[5, 109, 87, 1, 110, 88],
				[5, 65, 41, 5, 66, 42],
				[5, 54, 24, 7, 55, 25],
				[11, 36, 12],
				[5, 122, 98, 1, 123, 99],
				[7, 73, 45, 3, 74, 46],
				[15, 43, 19, 2, 44, 20],
				[3, 45, 15, 13, 46, 16],
				[1, 135, 107, 5, 136, 108],
				[10, 74, 46, 1, 75, 47],
				[1, 50, 22, 15, 51, 23],
				[2, 42, 14, 17, 43, 15],
				[5, 150, 120, 1, 151, 121],
				[9, 69, 43, 4, 70, 44],
				[17, 50, 22, 1, 51, 23],
				[2, 42, 14, 19, 43, 15],
				[3, 141, 113, 4, 142, 114],
				[3, 70, 44, 11, 71, 45],
				[17, 47, 21, 4, 48, 22],
				[9, 39, 13, 16, 40, 14],
				[3, 135, 107, 5, 136, 108],
				[3, 67, 41, 13, 68, 42],
				[15, 54, 24, 5, 55, 25],
				[15, 43, 15, 10, 44, 16],
				[4, 144, 116, 4, 145, 117],
				[17, 68, 42],
				[17, 50, 22, 6, 51, 23],
				[19, 46, 16, 6, 47, 17],
				[2, 139, 111, 7, 140, 112],
				[17, 74, 46],
				[7, 54, 24, 16, 55, 25],
				[34, 37, 13],
				[4, 151, 121, 5, 152, 122],
				[4, 75, 47, 14, 76, 48],
				[11, 54, 24, 14, 55, 25],
				[16, 45, 15, 14, 46, 16],
				[6, 147, 117, 4, 148, 118],
				[6, 73, 45, 14, 74, 46],
				[11, 54, 24, 16, 55, 25],
				[30, 46, 16, 2, 47, 17],
				[8, 132, 106, 4, 133, 107],
				[8, 75, 47, 13, 76, 48],
				[7, 54, 24, 22, 55, 25],
				[22, 45, 15, 13, 46, 16],
				[10, 142, 114, 2, 143, 115],
				[19, 74, 46, 4, 75, 47],
				[28, 50, 22, 6, 51, 23],
				[33, 46, 16, 4, 47, 17],
				[8, 152, 122, 4, 153, 123],
				[22, 73, 45, 3, 74, 46],
				[8, 53, 23, 26, 54, 24],
				[12, 45, 15, 28, 46, 16],
				[3, 147, 117, 10, 148, 118],
				[3, 73, 45, 23, 74, 46],
				[4, 54, 24, 31, 55, 25],
				[11, 45, 15, 31, 46, 16],
				[7, 146, 116, 7, 147, 117],
				[21, 73, 45, 7, 74, 46],
				[1, 53, 23, 37, 54, 24],
				[19, 45, 15, 26, 46, 16],
				[5, 145, 115, 10, 146, 116],
				[19, 75, 47, 10, 76, 48],
				[15, 54, 24, 25, 55, 25],
				[23, 45, 15, 25, 46, 16],
				[13, 145, 115, 3, 146, 116],
				[2, 74, 46, 29, 75, 47],
				[42, 54, 24, 1, 55, 25],
				[23, 45, 15, 28, 46, 16],
				[17, 145, 115],
				[10, 74, 46, 23, 75, 47],
				[10, 54, 24, 35, 55, 25],
				[19, 45, 15, 35, 46, 16],
				[17, 145, 115, 1, 146, 116],
				[14, 74, 46, 21, 75, 47],
				[29, 54, 24, 19, 55, 25],
				[11, 45, 15, 46, 46, 16],
				[13, 145, 115, 6, 146, 116],
				[14, 74, 46, 23, 75, 47],
				[44, 54, 24, 7, 55, 25],
				[59, 46, 16, 1, 47, 17],
				[12, 151, 121, 7, 152, 122],
				[12, 75, 47, 26, 76, 48],
				[39, 54, 24, 14, 55, 25],
				[22, 45, 15, 41, 46, 16],
				[6, 151, 121, 14, 152, 122],
				[6, 75, 47, 34, 76, 48],
				[46, 54, 24, 10, 55, 25],
				[2, 45, 15, 64, 46, 16],
				[17, 152, 122, 4, 153, 123],
				[29, 74, 46, 14, 75, 47],
				[49, 54, 24, 10, 55, 25],
				[24, 45, 15, 46, 46, 16],
				[4, 152, 122, 18, 153, 123],
				[13, 74, 46, 32, 75, 47],
				[48, 54, 24, 14, 55, 25],
				[42, 45, 15, 32, 46, 16],
				[20, 147, 117, 4, 148, 118],
				[40, 75, 47, 7, 76, 48],
				[43, 54, 24, 22, 55, 25],
				[10, 45, 15, 67, 46, 16],
				[19, 148, 118, 6, 149, 119],
				[18, 75, 47, 31, 76, 48],
				[34, 54, 24, 34, 55, 25],
				[20, 45, 15, 61, 46, 16]
			];
			QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
				var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
				if (rsBlock == void 0) {
					throw new Error('bad rs block @ typeNumber:' + typeNumber + '/errorCorrectLevel:' + errorCorrectLevel);
				}
				var length = rsBlock.length / 3;
				var list = new Array();
				for (var i2 = 0; i2 < length; i2++) {
					var count = rsBlock[i2 * 3 + 0];
					var totalCount = rsBlock[i2 * 3 + 1];
					var dataCount = rsBlock[i2 * 3 + 2];
					for (var j = 0; j < count; j++) {
						list.push(new QRRSBlock(totalCount, dataCount));
					}
				}
				return list;
			};
			QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
				switch (errorCorrectLevel) {
					case ECL.L:
						return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
					case ECL.M:
						return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
					case ECL.Q:
						return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
					case ECL.H:
						return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
					default:
						return void 0;
				}
			};
			module.exports = QRRSBlock;
		}
	});

	// node_modules/qr.js/lib/BitBuffer.js
	var require_BitBuffer = __commonJS({
		'node_modules/qr.js/lib/BitBuffer.js'(exports, module) {
			function QRBitBuffer() {
				this.buffer = new Array();
				this.length = 0;
			}
			QRBitBuffer.prototype = {
				get: function (index) {
					var bufIndex = Math.floor(index / 8);
					return ((this.buffer[bufIndex] >>> (7 - (index % 8))) & 1) == 1;
				},
				put: function (num, length) {
					for (var i2 = 0; i2 < length; i2++) {
						this.putBit(((num >>> (length - i2 - 1)) & 1) == 1);
					}
				},
				getLengthInBits: function () {
					return this.length;
				},
				putBit: function (bit) {
					var bufIndex = Math.floor(this.length / 8);
					if (this.buffer.length <= bufIndex) {
						this.buffer.push(0);
					}
					if (bit) {
						this.buffer[bufIndex] |= 128 >>> this.length % 8;
					}
					this.length++;
				}
			};
			module.exports = QRBitBuffer;
		}
	});

	// node_modules/qr.js/lib/math.js
	var require_math = __commonJS({
		'node_modules/qr.js/lib/math.js'(exports, module) {
			var QRMath = {
				glog: function (n) {
					if (n < 1) {
						throw new Error('glog(' + n + ')');
					}
					return QRMath.LOG_TABLE[n];
				},
				gexp: function (n) {
					while (n < 0) {
						n += 255;
					}
					while (n >= 256) {
						n -= 255;
					}
					return QRMath.EXP_TABLE[n];
				},
				EXP_TABLE: new Array(256),
				LOG_TABLE: new Array(256)
			};
			for (i2 = 0; i2 < 8; i2++) {
				QRMath.EXP_TABLE[i2] = 1 << i2;
			}
			var i2;
			for (i2 = 8; i2 < 256; i2++) {
				QRMath.EXP_TABLE[i2] =
					QRMath.EXP_TABLE[i2 - 4] ^ QRMath.EXP_TABLE[i2 - 5] ^ QRMath.EXP_TABLE[i2 - 6] ^ QRMath.EXP_TABLE[i2 - 8];
			}
			var i2;
			for (i2 = 0; i2 < 255; i2++) {
				QRMath.LOG_TABLE[QRMath.EXP_TABLE[i2]] = i2;
			}
			var i2;
			module.exports = QRMath;
		}
	});

	// node_modules/qr.js/lib/Polynomial.js
	var require_Polynomial = __commonJS({
		'node_modules/qr.js/lib/Polynomial.js'(exports, module) {
			var math = require_math();
			function QRPolynomial(num, shift) {
				if (num.length == void 0) {
					throw new Error(num.length + '/' + shift);
				}
				var offset = 0;
				while (offset < num.length && num[offset] == 0) {
					offset++;
				}
				this.num = new Array(num.length - offset + shift);
				for (var i2 = 0; i2 < num.length - offset; i2++) {
					this.num[i2] = num[i2 + offset];
				}
			}
			QRPolynomial.prototype = {
				get: function (index) {
					return this.num[index];
				},
				getLength: function () {
					return this.num.length;
				},
				multiply: function (e) {
					var num = new Array(this.getLength() + e.getLength() - 1);
					for (var i2 = 0; i2 < this.getLength(); i2++) {
						for (var j = 0; j < e.getLength(); j++) {
							num[i2 + j] ^= math.gexp(math.glog(this.get(i2)) + math.glog(e.get(j)));
						}
					}
					return new QRPolynomial(num, 0);
				},
				mod: function (e) {
					if (this.getLength() - e.getLength() < 0) {
						return this;
					}
					var ratio = math.glog(this.get(0)) - math.glog(e.get(0));
					var num = new Array(this.getLength());
					for (var i2 = 0; i2 < this.getLength(); i2++) {
						num[i2] = this.get(i2);
					}
					for (var i2 = 0; i2 < e.getLength(); i2++) {
						num[i2] ^= math.gexp(math.glog(e.get(i2)) + ratio);
					}
					return new QRPolynomial(num, 0).mod(e);
				}
			};
			module.exports = QRPolynomial;
		}
	});

	// node_modules/qr.js/lib/util.js
	var require_util = __commonJS({
		'node_modules/qr.js/lib/util.js'(exports, module) {
			var Mode = require_mode();
			var Polynomial = require_Polynomial();
			var math = require_math();
			var QRMaskPattern = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			};
			var QRUtil = {
				PATTERN_POSITION_TABLE: [
					[],
					[6, 18],
					[6, 22],
					[6, 26],
					[6, 30],
					[6, 34],
					[6, 22, 38],
					[6, 24, 42],
					[6, 26, 46],
					[6, 28, 50],
					[6, 30, 54],
					[6, 32, 58],
					[6, 34, 62],
					[6, 26, 46, 66],
					[6, 26, 48, 70],
					[6, 26, 50, 74],
					[6, 30, 54, 78],
					[6, 30, 56, 82],
					[6, 30, 58, 86],
					[6, 34, 62, 90],
					[6, 28, 50, 72, 94],
					[6, 26, 50, 74, 98],
					[6, 30, 54, 78, 102],
					[6, 28, 54, 80, 106],
					[6, 32, 58, 84, 110],
					[6, 30, 58, 86, 114],
					[6, 34, 62, 90, 118],
					[6, 26, 50, 74, 98, 122],
					[6, 30, 54, 78, 102, 126],
					[6, 26, 52, 78, 104, 130],
					[6, 30, 56, 82, 108, 134],
					[6, 34, 60, 86, 112, 138],
					[6, 30, 58, 86, 114, 142],
					[6, 34, 62, 90, 118, 146],
					[6, 30, 54, 78, 102, 126, 150],
					[6, 24, 50, 76, 102, 128, 154],
					[6, 28, 54, 80, 106, 132, 158],
					[6, 32, 58, 84, 110, 136, 162],
					[6, 26, 54, 82, 110, 138, 166],
					[6, 30, 58, 86, 114, 142, 170]
				],
				G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
				G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
				G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
				getBCHTypeInfo: function (data) {
					var d = data << 10;
					while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
						d ^= QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15));
					}
					return ((data << 10) | d) ^ QRUtil.G15_MASK;
				},
				getBCHTypeNumber: function (data) {
					var d = data << 12;
					while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
						d ^= QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18));
					}
					return (data << 12) | d;
				},
				getBCHDigit: function (data) {
					var digit = 0;
					while (data != 0) {
						digit++;
						data >>>= 1;
					}
					return digit;
				},
				getPatternPosition: function (typeNumber) {
					return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
				},
				getMask: function (maskPattern, i2, j) {
					switch (maskPattern) {
						case QRMaskPattern.PATTERN000:
							return (i2 + j) % 2 == 0;
						case QRMaskPattern.PATTERN001:
							return i2 % 2 == 0;
						case QRMaskPattern.PATTERN010:
							return j % 3 == 0;
						case QRMaskPattern.PATTERN011:
							return (i2 + j) % 3 == 0;
						case QRMaskPattern.PATTERN100:
							return (Math.floor(i2 / 2) + Math.floor(j / 3)) % 2 == 0;
						case QRMaskPattern.PATTERN101:
							return ((i2 * j) % 2) + ((i2 * j) % 3) == 0;
						case QRMaskPattern.PATTERN110:
							return (((i2 * j) % 2) + ((i2 * j) % 3)) % 2 == 0;
						case QRMaskPattern.PATTERN111:
							return (((i2 * j) % 3) + ((i2 + j) % 2)) % 2 == 0;
						default:
							throw new Error('bad maskPattern:' + maskPattern);
					}
				},
				getErrorCorrectPolynomial: function (errorCorrectLength) {
					var a = new Polynomial([1], 0);
					for (var i2 = 0; i2 < errorCorrectLength; i2++) {
						a = a.multiply(new Polynomial([1, math.gexp(i2)], 0));
					}
					return a;
				},
				getLengthInBits: function (mode, type) {
					if (1 <= type && type < 10) {
						switch (mode) {
							case Mode.MODE_NUMBER:
								return 10;
							case Mode.MODE_ALPHA_NUM:
								return 9;
							case Mode.MODE_8BIT_BYTE:
								return 8;
							case Mode.MODE_KANJI:
								return 8;
							default:
								throw new Error('mode:' + mode);
						}
					} else if (type < 27) {
						switch (mode) {
							case Mode.MODE_NUMBER:
								return 12;
							case Mode.MODE_ALPHA_NUM:
								return 11;
							case Mode.MODE_8BIT_BYTE:
								return 16;
							case Mode.MODE_KANJI:
								return 10;
							default:
								throw new Error('mode:' + mode);
						}
					} else if (type < 41) {
						switch (mode) {
							case Mode.MODE_NUMBER:
								return 14;
							case Mode.MODE_ALPHA_NUM:
								return 13;
							case Mode.MODE_8BIT_BYTE:
								return 16;
							case Mode.MODE_KANJI:
								return 12;
							default:
								throw new Error('mode:' + mode);
						}
					} else {
						throw new Error('type:' + type);
					}
				},
				getLostPoint: function (qrCode) {
					var moduleCount = qrCode.getModuleCount();
					var lostPoint = 0;
					for (var row = 0; row < moduleCount; row++) {
						for (var col = 0; col < moduleCount; col++) {
							var sameCount = 0;
							var dark = qrCode.isDark(row, col);
							for (var r = -1; r <= 1; r++) {
								if (row + r < 0 || moduleCount <= row + r) {
									continue;
								}
								for (var c = -1; c <= 1; c++) {
									if (col + c < 0 || moduleCount <= col + c) {
										continue;
									}
									if (r == 0 && c == 0) {
										continue;
									}
									if (dark == qrCode.isDark(row + r, col + c)) {
										sameCount++;
									}
								}
							}
							if (sameCount > 5) {
								lostPoint += 3 + sameCount - 5;
							}
						}
					}
					for (var row = 0; row < moduleCount - 1; row++) {
						for (var col = 0; col < moduleCount - 1; col++) {
							var count = 0;
							if (qrCode.isDark(row, col)) count++;
							if (qrCode.isDark(row + 1, col)) count++;
							if (qrCode.isDark(row, col + 1)) count++;
							if (qrCode.isDark(row + 1, col + 1)) count++;
							if (count == 0 || count == 4) {
								lostPoint += 3;
							}
						}
					}
					for (var row = 0; row < moduleCount; row++) {
						for (var col = 0; col < moduleCount - 6; col++) {
							if (
								qrCode.isDark(row, col) &&
								!qrCode.isDark(row, col + 1) &&
								qrCode.isDark(row, col + 2) &&
								qrCode.isDark(row, col + 3) &&
								qrCode.isDark(row, col + 4) &&
								!qrCode.isDark(row, col + 5) &&
								qrCode.isDark(row, col + 6)
							) {
								lostPoint += 40;
							}
						}
					}
					for (var col = 0; col < moduleCount; col++) {
						for (var row = 0; row < moduleCount - 6; row++) {
							if (
								qrCode.isDark(row, col) &&
								!qrCode.isDark(row + 1, col) &&
								qrCode.isDark(row + 2, col) &&
								qrCode.isDark(row + 3, col) &&
								qrCode.isDark(row + 4, col) &&
								!qrCode.isDark(row + 5, col) &&
								qrCode.isDark(row + 6, col)
							) {
								lostPoint += 40;
							}
						}
					}
					var darkCount = 0;
					for (var col = 0; col < moduleCount; col++) {
						for (var row = 0; row < moduleCount; row++) {
							if (qrCode.isDark(row, col)) {
								darkCount++;
							}
						}
					}
					var ratio = Math.abs((100 * darkCount) / moduleCount / moduleCount - 50) / 5;
					lostPoint += ratio * 10;
					return lostPoint;
				}
			};
			module.exports = QRUtil;
		}
	});

	// node_modules/qr.js/lib/QRCode.js
	var require_QRCode = __commonJS({
		'node_modules/qr.js/lib/QRCode.js'(exports, module) {
			var BitByte = require_BitByte();
			var RSBlock = require_RSBlock();
			var BitBuffer = require_BitBuffer();
			var util = require_util();
			var Polynomial = require_Polynomial();
			function QRCode2(typeNumber, errorCorrectLevel) {
				this.typeNumber = typeNumber;
				this.errorCorrectLevel = errorCorrectLevel;
				this.modules = null;
				this.moduleCount = 0;
				this.dataCache = null;
				this.dataList = [];
			}
			var proto = QRCode2.prototype;
			proto.addData = function (data) {
				var newData = new BitByte(data);
				this.dataList.push(newData);
				this.dataCache = null;
			};
			proto.isDark = function (row, col) {
				if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
					throw new Error(row + ',' + col);
				}
				return this.modules[row][col];
			};
			proto.getModuleCount = function () {
				return this.moduleCount;
			};
			proto.make = function () {
				if (this.typeNumber < 1) {
					var typeNumber = 1;
					for (typeNumber = 1; typeNumber < 40; typeNumber++) {
						var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
						var buffer = new BitBuffer();
						var totalDataCount = 0;
						for (var i2 = 0; i2 < rsBlocks.length; i2++) {
							totalDataCount += rsBlocks[i2].dataCount;
						}
						for (var i2 = 0; i2 < this.dataList.length; i2++) {
							var data = this.dataList[i2];
							buffer.put(data.mode, 4);
							buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
							data.write(buffer);
						}
						if (buffer.getLengthInBits() <= totalDataCount * 8) break;
					}
					this.typeNumber = typeNumber;
				}
				this.makeImpl(false, this.getBestMaskPattern());
			};
			proto.makeImpl = function (test, maskPattern) {
				this.moduleCount = this.typeNumber * 4 + 17;
				this.modules = new Array(this.moduleCount);
				for (var row = 0; row < this.moduleCount; row++) {
					this.modules[row] = new Array(this.moduleCount);
					for (var col = 0; col < this.moduleCount; col++) {
						this.modules[row][col] = null;
					}
				}
				this.setupPositionProbePattern(0, 0);
				this.setupPositionProbePattern(this.moduleCount - 7, 0);
				this.setupPositionProbePattern(0, this.moduleCount - 7);
				this.setupPositionAdjustPattern();
				this.setupTimingPattern();
				this.setupTypeInfo(test, maskPattern);
				if (this.typeNumber >= 7) {
					this.setupTypeNumber(test);
				}
				if (this.dataCache == null) {
					this.dataCache = QRCode2.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
				}
				this.mapData(this.dataCache, maskPattern);
			};
			proto.setupPositionProbePattern = function (row, col) {
				for (var r = -1; r <= 7; r++) {
					if (row + r <= -1 || this.moduleCount <= row + r) continue;
					for (var c = -1; c <= 7; c++) {
						if (col + c <= -1 || this.moduleCount <= col + c) continue;
						if (
							(0 <= r && r <= 6 && (c == 0 || c == 6)) ||
							(0 <= c && c <= 6 && (r == 0 || r == 6)) ||
							(2 <= r && r <= 4 && 2 <= c && c <= 4)
						) {
							this.modules[row + r][col + c] = true;
						} else {
							this.modules[row + r][col + c] = false;
						}
					}
				}
			};
			proto.getBestMaskPattern = function () {
				var minLostPoint = 0;
				var pattern = 0;
				for (var i2 = 0; i2 < 8; i2++) {
					this.makeImpl(true, i2);
					var lostPoint = util.getLostPoint(this);
					if (i2 == 0 || minLostPoint > lostPoint) {
						minLostPoint = lostPoint;
						pattern = i2;
					}
				}
				return pattern;
			};
			proto.createMovieClip = function (target_mc, instance_name, depth) {
				var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
				var cs = 1;
				this.make();
				for (var row = 0; row < this.modules.length; row++) {
					var y = row * cs;
					for (var col = 0; col < this.modules[row].length; col++) {
						var x = col * cs;
						var dark = this.modules[row][col];
						if (dark) {
							qr_mc.beginFill(0, 100);
							qr_mc.moveTo(x, y);
							qr_mc.lineTo(x + cs, y);
							qr_mc.lineTo(x + cs, y + cs);
							qr_mc.lineTo(x, y + cs);
							qr_mc.endFill();
						}
					}
				}
				return qr_mc;
			};
			proto.setupTimingPattern = function () {
				for (var r = 8; r < this.moduleCount - 8; r++) {
					if (this.modules[r][6] != null) {
						continue;
					}
					this.modules[r][6] = r % 2 == 0;
				}
				for (var c = 8; c < this.moduleCount - 8; c++) {
					if (this.modules[6][c] != null) {
						continue;
					}
					this.modules[6][c] = c % 2 == 0;
				}
			};
			proto.setupPositionAdjustPattern = function () {
				var pos = util.getPatternPosition(this.typeNumber);
				for (var i2 = 0; i2 < pos.length; i2++) {
					for (var j = 0; j < pos.length; j++) {
						var row = pos[i2];
						var col = pos[j];
						if (this.modules[row][col] != null) {
							continue;
						}
						for (var r = -2; r <= 2; r++) {
							for (var c = -2; c <= 2; c++) {
								if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
									this.modules[row + r][col + c] = true;
								} else {
									this.modules[row + r][col + c] = false;
								}
							}
						}
					}
				}
			};
			proto.setupTypeNumber = function (test) {
				var bits = util.getBCHTypeNumber(this.typeNumber);
				for (var i2 = 0; i2 < 18; i2++) {
					var mod2 = !test && ((bits >> i2) & 1) == 1;
					this.modules[Math.floor(i2 / 3)][(i2 % 3) + this.moduleCount - 8 - 3] = mod2;
				}
				for (var i2 = 0; i2 < 18; i2++) {
					var mod2 = !test && ((bits >> i2) & 1) == 1;
					this.modules[(i2 % 3) + this.moduleCount - 8 - 3][Math.floor(i2 / 3)] = mod2;
				}
			};
			proto.setupTypeInfo = function (test, maskPattern) {
				var data = (this.errorCorrectLevel << 3) | maskPattern;
				var bits = util.getBCHTypeInfo(data);
				for (var i2 = 0; i2 < 15; i2++) {
					var mod2 = !test && ((bits >> i2) & 1) == 1;
					if (i2 < 6) {
						this.modules[i2][8] = mod2;
					} else if (i2 < 8) {
						this.modules[i2 + 1][8] = mod2;
					} else {
						this.modules[this.moduleCount - 15 + i2][8] = mod2;
					}
				}
				for (var i2 = 0; i2 < 15; i2++) {
					var mod2 = !test && ((bits >> i2) & 1) == 1;
					if (i2 < 8) {
						this.modules[8][this.moduleCount - i2 - 1] = mod2;
					} else if (i2 < 9) {
						this.modules[8][15 - i2 - 1 + 1] = mod2;
					} else {
						this.modules[8][15 - i2 - 1] = mod2;
					}
				}
				this.modules[this.moduleCount - 8][8] = !test;
			};
			proto.mapData = function (data, maskPattern) {
				var inc = -1;
				var row = this.moduleCount - 1;
				var bitIndex = 7;
				var byteIndex = 0;
				for (var col = this.moduleCount - 1; col > 0; col -= 2) {
					if (col == 6) col--;
					while (true) {
						for (var c = 0; c < 2; c++) {
							if (this.modules[row][col - c] == null) {
								var dark = false;
								if (byteIndex < data.length) {
									dark = ((data[byteIndex] >>> bitIndex) & 1) == 1;
								}
								var mask = util.getMask(maskPattern, row, col - c);
								if (mask) {
									dark = !dark;
								}
								this.modules[row][col - c] = dark;
								bitIndex--;
								if (bitIndex == -1) {
									byteIndex++;
									bitIndex = 7;
								}
							}
						}
						row += inc;
						if (row < 0 || this.moduleCount <= row) {
							row -= inc;
							inc = -inc;
							break;
						}
					}
				}
			};
			QRCode2.PAD0 = 236;
			QRCode2.PAD1 = 17;
			QRCode2.createData = function (typeNumber, errorCorrectLevel, dataList) {
				var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
				var buffer = new BitBuffer();
				for (var i2 = 0; i2 < dataList.length; i2++) {
					var data = dataList[i2];
					buffer.put(data.mode, 4);
					buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
					data.write(buffer);
				}
				var totalDataCount = 0;
				for (var i2 = 0; i2 < rsBlocks.length; i2++) {
					totalDataCount += rsBlocks[i2].dataCount;
				}
				if (buffer.getLengthInBits() > totalDataCount * 8) {
					throw new Error('code length overflow. (' + buffer.getLengthInBits() + '>' + totalDataCount * 8 + ')');
				}
				if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
					buffer.put(0, 4);
				}
				while (buffer.getLengthInBits() % 8 != 0) {
					buffer.putBit(false);
				}
				while (true) {
					if (buffer.getLengthInBits() >= totalDataCount * 8) {
						break;
					}
					buffer.put(QRCode2.PAD0, 8);
					if (buffer.getLengthInBits() >= totalDataCount * 8) {
						break;
					}
					buffer.put(QRCode2.PAD1, 8);
				}
				return QRCode2.createBytes(buffer, rsBlocks);
			};
			QRCode2.createBytes = function (buffer, rsBlocks) {
				var offset = 0;
				var maxDcCount = 0;
				var maxEcCount = 0;
				var dcdata = new Array(rsBlocks.length);
				var ecdata = new Array(rsBlocks.length);
				for (var r = 0; r < rsBlocks.length; r++) {
					var dcCount = rsBlocks[r].dataCount;
					var ecCount = rsBlocks[r].totalCount - dcCount;
					maxDcCount = Math.max(maxDcCount, dcCount);
					maxEcCount = Math.max(maxEcCount, ecCount);
					dcdata[r] = new Array(dcCount);
					for (var i2 = 0; i2 < dcdata[r].length; i2++) {
						dcdata[r][i2] = 255 & buffer.buffer[i2 + offset];
					}
					offset += dcCount;
					var rsPoly = util.getErrorCorrectPolynomial(ecCount);
					var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);
					var modPoly = rawPoly.mod(rsPoly);
					ecdata[r] = new Array(rsPoly.getLength() - 1);
					for (var i2 = 0; i2 < ecdata[r].length; i2++) {
						var modIndex = i2 + modPoly.getLength() - ecdata[r].length;
						ecdata[r][i2] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
					}
				}
				var totalCodeCount = 0;
				for (var i2 = 0; i2 < rsBlocks.length; i2++) {
					totalCodeCount += rsBlocks[i2].totalCount;
				}
				var data = new Array(totalCodeCount);
				var index = 0;
				for (var i2 = 0; i2 < maxDcCount; i2++) {
					for (var r = 0; r < rsBlocks.length; r++) {
						if (i2 < dcdata[r].length) {
							data[index++] = dcdata[r][i2];
						}
					}
				}
				for (var i2 = 0; i2 < maxEcCount; i2++) {
					for (var r = 0; r < rsBlocks.length; r++) {
						if (i2 < ecdata[r].length) {
							data[index++] = ecdata[r][i2];
						}
					}
				}
				return data;
			};
			module.exports = QRCode2;
		}
	});

	// node_modules/react-is/cjs/react-is.development.js
	var require_react_is_development = __commonJS({
		'node_modules/react-is/cjs/react-is.development.js'(exports) {
			'use strict';
			if (true) {
				(function () {
					'use strict';
					var hasSymbol = typeof Symbol === 'function' && Symbol.for;
					var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 60103;
					var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 60106;
					var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 60107;
					var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 60108;
					var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 60114;
					var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 60109;
					var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 60110;
					var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 60111;
					var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 60111;
					var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 60112;
					var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 60113;
					var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 60120;
					var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 60115;
					var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 60116;
					var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 60121;
					var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 60117;
					var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 60118;
					var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 60119;
					function isValidElementType(type) {
						return (
							typeof type === 'string' ||
							typeof type === 'function' ||
							type === REACT_FRAGMENT_TYPE ||
							type === REACT_CONCURRENT_MODE_TYPE ||
							type === REACT_PROFILER_TYPE ||
							type === REACT_STRICT_MODE_TYPE ||
							type === REACT_SUSPENSE_TYPE ||
							type === REACT_SUSPENSE_LIST_TYPE ||
							(typeof type === 'object' &&
								type !== null &&
								(type.$$typeof === REACT_LAZY_TYPE ||
									type.$$typeof === REACT_MEMO_TYPE ||
									type.$$typeof === REACT_PROVIDER_TYPE ||
									type.$$typeof === REACT_CONTEXT_TYPE ||
									type.$$typeof === REACT_FORWARD_REF_TYPE ||
									type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
									type.$$typeof === REACT_RESPONDER_TYPE ||
									type.$$typeof === REACT_SCOPE_TYPE ||
									type.$$typeof === REACT_BLOCK_TYPE))
						);
					}
					function typeOf(object) {
						if (typeof object === 'object' && object !== null) {
							var $$typeof = object.$$typeof;
							switch ($$typeof) {
								case REACT_ELEMENT_TYPE:
									var type = object.type;
									switch (type) {
										case REACT_ASYNC_MODE_TYPE:
										case REACT_CONCURRENT_MODE_TYPE:
										case REACT_FRAGMENT_TYPE:
										case REACT_PROFILER_TYPE:
										case REACT_STRICT_MODE_TYPE:
										case REACT_SUSPENSE_TYPE:
											return type;
										default:
											var $$typeofType = type && type.$$typeof;
											switch ($$typeofType) {
												case REACT_CONTEXT_TYPE:
												case REACT_FORWARD_REF_TYPE:
												case REACT_LAZY_TYPE:
												case REACT_MEMO_TYPE:
												case REACT_PROVIDER_TYPE:
													return $$typeofType;
												default:
													return $$typeof;
											}
									}
								case REACT_PORTAL_TYPE:
									return $$typeof;
							}
						}
						return void 0;
					}
					var AsyncMode = REACT_ASYNC_MODE_TYPE;
					var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
					var ContextConsumer = REACT_CONTEXT_TYPE;
					var ContextProvider = REACT_PROVIDER_TYPE;
					var Element = REACT_ELEMENT_TYPE;
					var ForwardRef = REACT_FORWARD_REF_TYPE;
					var Fragment = REACT_FRAGMENT_TYPE;
					var Lazy = REACT_LAZY_TYPE;
					var Memo = REACT_MEMO_TYPE;
					var Portal = REACT_PORTAL_TYPE;
					var Profiler = REACT_PROFILER_TYPE;
					var StrictMode = REACT_STRICT_MODE_TYPE;
					var Suspense = REACT_SUSPENSE_TYPE;
					var hasWarnedAboutDeprecatedIsAsyncMode = false;
					function isAsyncMode(object) {
						{
							if (!hasWarnedAboutDeprecatedIsAsyncMode) {
								hasWarnedAboutDeprecatedIsAsyncMode = true;
								console['warn'](
									'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
								);
							}
						}
						return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
					}
					function isConcurrentMode(object) {
						return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
					}
					function isContextConsumer(object) {
						return typeOf(object) === REACT_CONTEXT_TYPE;
					}
					function isContextProvider(object) {
						return typeOf(object) === REACT_PROVIDER_TYPE;
					}
					function isElement(object) {
						return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
					}
					function isForwardRef(object) {
						return typeOf(object) === REACT_FORWARD_REF_TYPE;
					}
					function isFragment(object) {
						return typeOf(object) === REACT_FRAGMENT_TYPE;
					}
					function isLazy(object) {
						return typeOf(object) === REACT_LAZY_TYPE;
					}
					function isMemo(object) {
						return typeOf(object) === REACT_MEMO_TYPE;
					}
					function isPortal(object) {
						return typeOf(object) === REACT_PORTAL_TYPE;
					}
					function isProfiler(object) {
						return typeOf(object) === REACT_PROFILER_TYPE;
					}
					function isStrictMode(object) {
						return typeOf(object) === REACT_STRICT_MODE_TYPE;
					}
					function isSuspense(object) {
						return typeOf(object) === REACT_SUSPENSE_TYPE;
					}
					exports.AsyncMode = AsyncMode;
					exports.ConcurrentMode = ConcurrentMode;
					exports.ContextConsumer = ContextConsumer;
					exports.ContextProvider = ContextProvider;
					exports.Element = Element;
					exports.ForwardRef = ForwardRef;
					exports.Fragment = Fragment;
					exports.Lazy = Lazy;
					exports.Memo = Memo;
					exports.Portal = Portal;
					exports.Profiler = Profiler;
					exports.StrictMode = StrictMode;
					exports.Suspense = Suspense;
					exports.isAsyncMode = isAsyncMode;
					exports.isConcurrentMode = isConcurrentMode;
					exports.isContextConsumer = isContextConsumer;
					exports.isContextProvider = isContextProvider;
					exports.isElement = isElement;
					exports.isForwardRef = isForwardRef;
					exports.isFragment = isFragment;
					exports.isLazy = isLazy;
					exports.isMemo = isMemo;
					exports.isPortal = isPortal;
					exports.isProfiler = isProfiler;
					exports.isStrictMode = isStrictMode;
					exports.isSuspense = isSuspense;
					exports.isValidElementType = isValidElementType;
					exports.typeOf = typeOf;
				})();
			}
		}
	});

	// node_modules/react-is/index.js
	var require_react_is = __commonJS({
		'node_modules/react-is/index.js'(exports, module) {
			'use strict';
			if (false) {
				module.exports = null;
			} else {
				module.exports = require_react_is_development();
			}
		}
	});

	// node_modules/prop-types/lib/ReactPropTypesSecret.js
	var require_ReactPropTypesSecret = __commonJS({
		'node_modules/prop-types/lib/ReactPropTypesSecret.js'(exports, module) {
			'use strict';
			var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
			module.exports = ReactPropTypesSecret;
		}
	});

	// node_modules/prop-types/lib/has.js
	var require_has = __commonJS({
		'node_modules/prop-types/lib/has.js'(exports, module) {
			module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
		}
	});

	// node_modules/prop-types/checkPropTypes.js
	var require_checkPropTypes = __commonJS({
		'node_modules/prop-types/checkPropTypes.js'(exports, module) {
			'use strict';
			var printWarning = function () {};
			if (true) {
				ReactPropTypesSecret = require_ReactPropTypesSecret();
				loggedTypeFailures = {};
				has = require_has();
				printWarning = function (text) {
					var message = 'Warning: ' + text;
					if (typeof console !== 'undefined') {
						console.error(message);
					}
					try {
						throw new Error(message);
					} catch (x) {}
				};
			}
			var ReactPropTypesSecret;
			var loggedTypeFailures;
			var has;
			function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
				if (true) {
					for (var typeSpecName in typeSpecs) {
						if (has(typeSpecs, typeSpecName)) {
							var error;
							try {
								if (typeof typeSpecs[typeSpecName] !== 'function') {
									var err = Error(
										(componentName || 'React class') +
											': ' +
											location +
											' type `' +
											typeSpecName +
											'` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
											typeof typeSpecs[typeSpecName] +
											'`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
									);
									err.name = 'Invariant Violation';
									throw err;
								}
								error = typeSpecs[typeSpecName](
									values,
									typeSpecName,
									componentName,
									location,
									null,
									ReactPropTypesSecret
								);
							} catch (ex) {
								error = ex;
							}
							if (error && !(error instanceof Error)) {
								printWarning(
									(componentName || 'React class') +
										': type specification of ' +
										location +
										' `' +
										typeSpecName +
										'` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
										typeof error +
										'. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
								);
							}
							if (error instanceof Error && !(error.message in loggedTypeFailures)) {
								loggedTypeFailures[error.message] = true;
								var stack = getStack ? getStack() : '';
								printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
							}
						}
					}
				}
			}
			checkPropTypes.resetWarningCache = function () {
				if (true) {
					loggedTypeFailures = {};
				}
			};
			module.exports = checkPropTypes;
		}
	});

	// node_modules/prop-types/factoryWithTypeCheckers.js
	var require_factoryWithTypeCheckers = __commonJS({
		'node_modules/prop-types/factoryWithTypeCheckers.js'(exports, module) {
			'use strict';
			var ReactIs = require_react_is();
			var assign = require_object_assign();
			var ReactPropTypesSecret = require_ReactPropTypesSecret();
			var has = require_has();
			var checkPropTypes = require_checkPropTypes();
			var printWarning = function () {};
			if (true) {
				printWarning = function (text) {
					var message = 'Warning: ' + text;
					if (typeof console !== 'undefined') {
						console.error(message);
					}
					try {
						throw new Error(message);
					} catch (x) {}
				};
			}
			function emptyFunctionThatReturnsNull() {
				return null;
			}
			module.exports = function (isValidElement, throwOnDirectAccess) {
				var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
				var FAUX_ITERATOR_SYMBOL = '@@iterator';
				function getIteratorFn(maybeIterable) {
					var iteratorFn =
						maybeIterable &&
						((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL]);
					if (typeof iteratorFn === 'function') {
						return iteratorFn;
					}
				}
				var ANONYMOUS = '<<anonymous>>';
				var ReactPropTypes = {
					array: createPrimitiveTypeChecker('array'),
					bigint: createPrimitiveTypeChecker('bigint'),
					bool: createPrimitiveTypeChecker('boolean'),
					func: createPrimitiveTypeChecker('function'),
					number: createPrimitiveTypeChecker('number'),
					object: createPrimitiveTypeChecker('object'),
					string: createPrimitiveTypeChecker('string'),
					symbol: createPrimitiveTypeChecker('symbol'),
					any: createAnyTypeChecker(),
					arrayOf: createArrayOfTypeChecker,
					element: createElementTypeChecker(),
					elementType: createElementTypeTypeChecker(),
					instanceOf: createInstanceTypeChecker,
					node: createNodeChecker(),
					objectOf: createObjectOfTypeChecker,
					oneOf: createEnumTypeChecker,
					oneOfType: createUnionTypeChecker,
					shape: createShapeTypeChecker,
					exact: createStrictShapeTypeChecker
				};
				function is(x, y) {
					if (x === y) {
						return x !== 0 || 1 / x === 1 / y;
					} else {
						return x !== x && y !== y;
					}
				}
				function PropTypeError(message, data) {
					this.message = message;
					this.data = data && typeof data === 'object' ? data : {};
					this.stack = '';
				}
				PropTypeError.prototype = Error.prototype;
				function createChainableTypeChecker(validate) {
					if (true) {
						var manualPropTypeCallCache = {};
						var manualPropTypeWarningCount = 0;
					}
					function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
						componentName = componentName || ANONYMOUS;
						propFullName = propFullName || propName;
						if (secret !== ReactPropTypesSecret) {
							if (throwOnDirectAccess) {
								var err = new Error(
									'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
								);
								err.name = 'Invariant Violation';
								throw err;
							} else if (typeof console !== 'undefined') {
								var cacheKey = componentName + ':' + propName;
								if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
									printWarning(
										'You are manually calling a React.PropTypes validation function for the `' +
											propFullName +
											'` prop on `' +
											componentName +
											'`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
									);
									manualPropTypeCallCache[cacheKey] = true;
									manualPropTypeWarningCount++;
								}
							}
						}
						if (props[propName] == null) {
							if (isRequired) {
								if (props[propName] === null) {
									return new PropTypeError(
										'The ' +
											location +
											' `' +
											propFullName +
											'` is marked as required ' +
											('in `' + componentName + '`, but its value is `null`.')
									);
								}
								return new PropTypeError(
									'The ' +
										location +
										' `' +
										propFullName +
										'` is marked as required in ' +
										('`' + componentName + '`, but its value is `undefined`.')
								);
							}
							return null;
						} else {
							return validate(props, propName, componentName, location, propFullName);
						}
					}
					var chainedCheckType = checkType.bind(null, false);
					chainedCheckType.isRequired = checkType.bind(null, true);
					return chainedCheckType;
				}
				function createPrimitiveTypeChecker(expectedType) {
					function validate(props, propName, componentName, location, propFullName, secret) {
						var propValue = props[propName];
						var propType = getPropType(propValue);
						if (propType !== expectedType) {
							var preciseType = getPreciseType(propValue);
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of type ' +
									('`' + preciseType + '` supplied to `' + componentName + '`, expected ') +
									('`' + expectedType + '`.'),
								{expectedType}
							);
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function createAnyTypeChecker() {
					return createChainableTypeChecker(emptyFunctionThatReturnsNull);
				}
				function createArrayOfTypeChecker(typeChecker) {
					function validate(props, propName, componentName, location, propFullName) {
						if (typeof typeChecker !== 'function') {
							return new PropTypeError(
								'Property `' +
									propFullName +
									'` of component `' +
									componentName +
									'` has invalid PropType notation inside arrayOf.'
							);
						}
						var propValue = props[propName];
						if (!Array.isArray(propValue)) {
							var propType = getPropType(propValue);
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of type ' +
									('`' + propType + '` supplied to `' + componentName + '`, expected an array.')
							);
						}
						for (var i2 = 0; i2 < propValue.length; i2++) {
							var error = typeChecker(
								propValue,
								i2,
								componentName,
								location,
								propFullName + '[' + i2 + ']',
								ReactPropTypesSecret
							);
							if (error instanceof Error) {
								return error;
							}
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function createElementTypeChecker() {
					function validate(props, propName, componentName, location, propFullName) {
						var propValue = props[propName];
						if (!isValidElement(propValue)) {
							var propType = getPropType(propValue);
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of type ' +
									('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.')
							);
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function createElementTypeTypeChecker() {
					function validate(props, propName, componentName, location, propFullName) {
						var propValue = props[propName];
						if (!ReactIs.isValidElementType(propValue)) {
							var propType = getPropType(propValue);
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of type ' +
									('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.')
							);
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function createInstanceTypeChecker(expectedClass) {
					function validate(props, propName, componentName, location, propFullName) {
						if (!(props[propName] instanceof expectedClass)) {
							var expectedClassName = expectedClass.name || ANONYMOUS;
							var actualClassName = getClassName(props[propName]);
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of type ' +
									('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') +
									('instance of `' + expectedClassName + '`.')
							);
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function createEnumTypeChecker(expectedValues) {
					if (!Array.isArray(expectedValues)) {
						if (true) {
							if (arguments.length > 1) {
								printWarning(
									'Invalid arguments supplied to oneOf, expected an array, got ' +
										arguments.length +
										' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
								);
							} else {
								printWarning('Invalid argument supplied to oneOf, expected an array.');
							}
						}
						return emptyFunctionThatReturnsNull;
					}
					function validate(props, propName, componentName, location, propFullName) {
						var propValue = props[propName];
						for (var i2 = 0; i2 < expectedValues.length; i2++) {
							if (is(propValue, expectedValues[i2])) {
								return null;
							}
						}
						var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
							var type = getPreciseType(value);
							if (type === 'symbol') {
								return String(value);
							}
							return value;
						});
						return new PropTypeError(
							'Invalid ' +
								location +
								' `' +
								propFullName +
								'` of value `' +
								String(propValue) +
								'` ' +
								('supplied to `' + componentName + '`, expected one of ' + valuesString + '.')
						);
					}
					return createChainableTypeChecker(validate);
				}
				function createObjectOfTypeChecker(typeChecker) {
					function validate(props, propName, componentName, location, propFullName) {
						if (typeof typeChecker !== 'function') {
							return new PropTypeError(
								'Property `' +
									propFullName +
									'` of component `' +
									componentName +
									'` has invalid PropType notation inside objectOf.'
							);
						}
						var propValue = props[propName];
						var propType = getPropType(propValue);
						if (propType !== 'object') {
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of type ' +
									('`' + propType + '` supplied to `' + componentName + '`, expected an object.')
							);
						}
						for (var key in propValue) {
							if (has(propValue, key)) {
								var error = typeChecker(
									propValue,
									key,
									componentName,
									location,
									propFullName + '.' + key,
									ReactPropTypesSecret
								);
								if (error instanceof Error) {
									return error;
								}
							}
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function createUnionTypeChecker(arrayOfTypeCheckers) {
					if (!Array.isArray(arrayOfTypeCheckers)) {
						true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
						return emptyFunctionThatReturnsNull;
					}
					for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
						var checker = arrayOfTypeCheckers[i2];
						if (typeof checker !== 'function') {
							printWarning(
								'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
									getPostfixForTypeWarning(checker) +
									' at index ' +
									i2 +
									'.'
							);
							return emptyFunctionThatReturnsNull;
						}
					}
					function validate(props, propName, componentName, location, propFullName) {
						var expectedTypes = [];
						for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
							var checker2 = arrayOfTypeCheckers[i3];
							var checkerResult = checker2(
								props,
								propName,
								componentName,
								location,
								propFullName,
								ReactPropTypesSecret
							);
							if (checkerResult == null) {
								return null;
							}
							if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
								expectedTypes.push(checkerResult.data.expectedType);
							}
						}
						var expectedTypesMessage =
							expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
						return new PropTypeError(
							'Invalid ' +
								location +
								' `' +
								propFullName +
								'` supplied to ' +
								('`' + componentName + '`' + expectedTypesMessage + '.')
						);
					}
					return createChainableTypeChecker(validate);
				}
				function createNodeChecker() {
					function validate(props, propName, componentName, location, propFullName) {
						if (!isNode(props[propName])) {
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` supplied to ' +
									('`' + componentName + '`, expected a ReactNode.')
							);
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function invalidValidatorError(componentName, location, propFullName, key, type) {
					return new PropTypeError(
						(componentName || 'React class') +
							': ' +
							location +
							' type `' +
							propFullName +
							'.' +
							key +
							'` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
							type +
							'`.'
					);
				}
				function createShapeTypeChecker(shapeTypes) {
					function validate(props, propName, componentName, location, propFullName) {
						var propValue = props[propName];
						var propType = getPropType(propValue);
						if (propType !== 'object') {
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of type `' +
									propType +
									'` ' +
									('supplied to `' + componentName + '`, expected `object`.')
							);
						}
						for (var key in shapeTypes) {
							var checker = shapeTypes[key];
							if (typeof checker !== 'function') {
								return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
							}
							var error = checker(
								propValue,
								key,
								componentName,
								location,
								propFullName + '.' + key,
								ReactPropTypesSecret
							);
							if (error) {
								return error;
							}
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function createStrictShapeTypeChecker(shapeTypes) {
					function validate(props, propName, componentName, location, propFullName) {
						var propValue = props[propName];
						var propType = getPropType(propValue);
						if (propType !== 'object') {
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of type `' +
									propType +
									'` ' +
									('supplied to `' + componentName + '`, expected `object`.')
							);
						}
						var allKeys = assign({}, props[propName], shapeTypes);
						for (var key in allKeys) {
							var checker = shapeTypes[key];
							if (has(shapeTypes, key) && typeof checker !== 'function') {
								return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
							}
							if (!checker) {
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` key `' +
										key +
										'` supplied to `' +
										componentName +
										'`.\nBad object: ' +
										JSON.stringify(props[propName], null, '  ') +
										'\nValid keys: ' +
										JSON.stringify(Object.keys(shapeTypes), null, '  ')
								);
							}
							var error = checker(
								propValue,
								key,
								componentName,
								location,
								propFullName + '.' + key,
								ReactPropTypesSecret
							);
							if (error) {
								return error;
							}
						}
						return null;
					}
					return createChainableTypeChecker(validate);
				}
				function isNode(propValue) {
					switch (typeof propValue) {
						case 'number':
						case 'string':
						case 'undefined':
							return true;
						case 'boolean':
							return !propValue;
						case 'object':
							if (Array.isArray(propValue)) {
								return propValue.every(isNode);
							}
							if (propValue === null || isValidElement(propValue)) {
								return true;
							}
							var iteratorFn = getIteratorFn(propValue);
							if (iteratorFn) {
								var iterator = iteratorFn.call(propValue);
								var step;
								if (iteratorFn !== propValue.entries) {
									while (!(step = iterator.next()).done) {
										if (!isNode(step.value)) {
											return false;
										}
									}
								} else {
									while (!(step = iterator.next()).done) {
										var entry = step.value;
										if (entry) {
											if (!isNode(entry[1])) {
												return false;
											}
										}
									}
								}
							} else {
								return false;
							}
							return true;
						default:
							return false;
					}
				}
				function isSymbol(propType, propValue) {
					if (propType === 'symbol') {
						return true;
					}
					if (!propValue) {
						return false;
					}
					if (propValue['@@toStringTag'] === 'Symbol') {
						return true;
					}
					if (typeof Symbol === 'function' && propValue instanceof Symbol) {
						return true;
					}
					return false;
				}
				function getPropType(propValue) {
					var propType = typeof propValue;
					if (Array.isArray(propValue)) {
						return 'array';
					}
					if (propValue instanceof RegExp) {
						return 'object';
					}
					if (isSymbol(propType, propValue)) {
						return 'symbol';
					}
					return propType;
				}
				function getPreciseType(propValue) {
					if (typeof propValue === 'undefined' || propValue === null) {
						return '' + propValue;
					}
					var propType = getPropType(propValue);
					if (propType === 'object') {
						if (propValue instanceof Date) {
							return 'date';
						} else if (propValue instanceof RegExp) {
							return 'regexp';
						}
					}
					return propType;
				}
				function getPostfixForTypeWarning(value) {
					var type = getPreciseType(value);
					switch (type) {
						case 'array':
						case 'object':
							return 'an ' + type;
						case 'boolean':
						case 'date':
						case 'regexp':
							return 'a ' + type;
						default:
							return type;
					}
				}
				function getClassName(propValue) {
					if (!propValue.constructor || !propValue.constructor.name) {
						return ANONYMOUS;
					}
					return propValue.constructor.name;
				}
				ReactPropTypes.checkPropTypes = checkPropTypes;
				ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
				ReactPropTypes.PropTypes = ReactPropTypes;
				return ReactPropTypes;
			};
		}
	});

	// node_modules/prop-types/index.js
	var require_prop_types = __commonJS({
		'node_modules/prop-types/index.js'(exports, module) {
			if (true) {
				ReactIs = require_react_is();
				throwOnDirectAccess = true;
				module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
			} else {
				module.exports = null();
			}
			var ReactIs;
			var throwOnDirectAccess;
		}
	});

	// node_modules/react-qr-code/lib/QRCodeSvg/index.js
	var require_QRCodeSvg = __commonJS({
		'node_modules/react-qr-code/lib/QRCodeSvg/index.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', {
				value: true
			});
			var _extends =
				Object.assign ||
				function (target) {
					for (var i2 = 1; i2 < arguments.length; i2++) {
						var source = arguments[i2];
						for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}
					return target;
				};
			var _propTypes = require_prop_types();
			var _propTypes2 = _interopRequireDefault(_propTypes);
			var _react = require_react();
			var _react2 = _interopRequireDefault(_react);
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}
			function _objectWithoutProperties(obj, keys) {
				var target = {};
				for (var i2 in obj) {
					if (keys.indexOf(i2) >= 0) continue;
					if (!Object.prototype.hasOwnProperty.call(obj, i2)) continue;
					target[i2] = obj[i2];
				}
				return target;
			}
			var propTypes = {
				bgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired,
				bgD: _propTypes2.default.string.isRequired,
				fgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired,
				fgD: _propTypes2.default.string.isRequired,
				size: _propTypes2.default.number.isRequired,
				title: _propTypes2.default.string,
				viewBoxSize: _propTypes2.default.number.isRequired,
				xmlns: _propTypes2.default.string
			};
			var defaultProps = {
				title: void 0,
				xmlns: 'http://www.w3.org/2000/svg'
			};
			var QRCodeSvg = (0, _react.forwardRef)(function (_ref, ref) {
				var bgColor = _ref.bgColor,
					bgD = _ref.bgD,
					fgD = _ref.fgD,
					fgColor = _ref.fgColor,
					size = _ref.size,
					title = _ref.title,
					viewBoxSize = _ref.viewBoxSize,
					props = _objectWithoutProperties(_ref, ['bgColor', 'bgD', 'fgD', 'fgColor', 'size', 'title', 'viewBoxSize']);
				return _react2.default.createElement(
					'svg',
					_extends({}, props, {height: size, ref, viewBox: '0 0 ' + viewBoxSize + ' ' + viewBoxSize, width: size}),
					title ? _react2.default.createElement('title', null, title) : null,
					_react2.default.createElement('path', {d: bgD, fill: bgColor}),
					_react2.default.createElement('path', {d: fgD, fill: fgColor})
				);
			});
			QRCodeSvg.displayName = 'QRCodeSvg';
			QRCodeSvg.propTypes = propTypes;
			QRCodeSvg.defaultProps = defaultProps;
			exports.default = QRCodeSvg;
		}
	});

	// node_modules/react-qr-code/lib/index.js
	var require_lib = __commonJS({
		'node_modules/react-qr-code/lib/index.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', {
				value: true
			});
			var _extends =
				Object.assign ||
				function (target) {
					for (var i2 = 1; i2 < arguments.length; i2++) {
						var source = arguments[i2];
						for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}
					return target;
				};
			var _QRCode = require_QRCode();
			var _QRCode2 = _interopRequireDefault(_QRCode);
			var _ErrorCorrectLevel = require_ErrorCorrectLevel();
			var _ErrorCorrectLevel2 = _interopRequireDefault(_ErrorCorrectLevel);
			var _propTypes = require_prop_types();
			var _propTypes2 = _interopRequireDefault(_propTypes);
			var _react = require_react();
			var _react2 = _interopRequireDefault(_react);
			var _QRCodeSvg = require_QRCodeSvg();
			var _QRCodeSvg2 = _interopRequireDefault(_QRCodeSvg);
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}
			function _objectWithoutProperties(obj, keys) {
				var target = {};
				for (var i2 in obj) {
					if (keys.indexOf(i2) >= 0) continue;
					if (!Object.prototype.hasOwnProperty.call(obj, i2)) continue;
					target[i2] = obj[i2];
				}
				return target;
			}
			var propTypes = {
				bgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
				fgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
				level: _propTypes2.default.string,
				size: _propTypes2.default.number,
				value: _propTypes2.default.string.isRequired
			};
			var defaultProps = {
				bgColor: '#FFFFFF',
				fgColor: '#000000',
				level: 'L',
				size: 256
			};
			var QRCode2 = (0, _react.forwardRef)(function (_ref, ref) {
				var bgColor = _ref.bgColor,
					fgColor = _ref.fgColor,
					level = _ref.level,
					size = _ref.size,
					value = _ref.value,
					props = _objectWithoutProperties(_ref, ['bgColor', 'fgColor', 'level', 'size', 'value']);
				var qrcode = new _QRCode2.default(-1, _ErrorCorrectLevel2.default[level]);
				qrcode.addData(value);
				qrcode.make();
				var cells = qrcode.modules;
				return _react2.default.createElement(
					_QRCodeSvg2.default,
					_extends({}, props, {
						bgColor,
						bgD: cells
							.map(function (row, rowIndex) {
								return row
									.map(function (cell, cellIndex) {
										return !cell ? 'M ' + cellIndex + ' ' + rowIndex + ' l 1 0 0 1 -1 0 Z' : '';
									})
									.join(' ');
							})
							.join(' '),
						fgColor,
						fgD: cells
							.map(function (row, rowIndex) {
								return row
									.map(function (cell, cellIndex) {
										return cell ? 'M ' + cellIndex + ' ' + rowIndex + ' l 1 0 0 1 -1 0 Z' : '';
									})
									.join(' ');
							})
							.join(' '),
						ref,
						size,
						viewBoxSize: cells.length
					})
				);
			});
			QRCode2.displayName = 'QRCode';
			QRCode2.propTypes = propTypes;
			QRCode2.defaultProps = defaultProps;
			exports.default = QRCode2;
		}
	});

	// extension/popup.jsx
	var import_webextension_polyfill = __toESM(require_browser_polyfill());
	var import_react_dom = __toESM(require_react_dom());

	// node_modules/@noble/curves/node_modules/@noble/hashes/esm/_assert.js
	function number(n) {
		if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
	}
	function bytes(b, ...lengths) {
		if (!(b instanceof Uint8Array)) throw new Error('Expected Uint8Array');
		if (lengths.length > 0 && !lengths.includes(b.length))
			throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
	}
	function hash(hash3) {
		if (typeof hash3 !== 'function' || typeof hash3.create !== 'function')
			throw new Error('Hash should be wrapped by utils.wrapConstructor');
		number(hash3.outputLen);
		number(hash3.blockLen);
	}
	function exists(instance, checkFinished = true) {
		if (instance.destroyed) throw new Error('Hash instance has been destroyed');
		if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
	}
	function output(out, instance) {
		bytes(out);
		const min = instance.outputLen;
		if (out.length < min) {
			throw new Error(`digestInto() expects output buffer of length at least ${min}`);
		}
	}

	// node_modules/@noble/curves/node_modules/@noble/hashes/esm/crypto.js
	var crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0;

	// node_modules/@noble/curves/node_modules/@noble/hashes/esm/utils.js
	var u8a = (a) => a instanceof Uint8Array;
	var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
	var rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
	var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
	if (!isLE) throw new Error('Non little-endian hardware is not supported');
	function utf8ToBytes(str) {
		if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
		return new Uint8Array(new TextEncoder().encode(str));
	}
	function toBytes(data) {
		if (typeof data === 'string') data = utf8ToBytes(data);
		if (!u8a(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
		return data;
	}
	function concatBytes(...arrays) {
		const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
		let pad = 0;
		arrays.forEach((a) => {
			if (!u8a(a)) throw new Error('Uint8Array expected');
			r.set(a, pad);
			pad += a.length;
		});
		return r;
	}
	var Hash = class {
		clone() {
			return this._cloneInto();
		}
	};
	var toStr = {}.toString;
	function wrapConstructor(hashCons) {
		const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
		const tmp = hashCons();
		hashC.outputLen = tmp.outputLen;
		hashC.blockLen = tmp.blockLen;
		hashC.create = () => hashCons();
		return hashC;
	}
	function randomBytes(bytesLength = 32) {
		if (crypto && typeof crypto.getRandomValues === 'function') {
			return crypto.getRandomValues(new Uint8Array(bytesLength));
		}
		throw new Error('crypto.getRandomValues must be defined');
	}

	// node_modules/@noble/curves/node_modules/@noble/hashes/esm/_sha2.js
	function setBigUint64(view, byteOffset, value, isLE3) {
		if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE3);
		const _32n = BigInt(32);
		const _u32_max = BigInt(4294967295);
		const wh = Number((value >> _32n) & _u32_max);
		const wl = Number(value & _u32_max);
		const h = isLE3 ? 4 : 0;
		const l = isLE3 ? 0 : 4;
		view.setUint32(byteOffset + h, wh, isLE3);
		view.setUint32(byteOffset + l, wl, isLE3);
	}
	var SHA2 = class extends Hash {
		constructor(blockLen, outputLen, padOffset, isLE3) {
			super();
			this.blockLen = blockLen;
			this.outputLen = outputLen;
			this.padOffset = padOffset;
			this.isLE = isLE3;
			this.finished = false;
			this.length = 0;
			this.pos = 0;
			this.destroyed = false;
			this.buffer = new Uint8Array(blockLen);
			this.view = createView(this.buffer);
		}
		update(data) {
			exists(this);
			const {view, buffer, blockLen} = this;
			data = toBytes(data);
			const len = data.length;
			for (let pos = 0; pos < len; ) {
				const take = Math.min(blockLen - this.pos, len - pos);
				if (take === blockLen) {
					const dataView = createView(data);
					for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
					continue;
				}
				buffer.set(data.subarray(pos, pos + take), this.pos);
				this.pos += take;
				pos += take;
				if (this.pos === blockLen) {
					this.process(view, 0);
					this.pos = 0;
				}
			}
			this.length += data.length;
			this.roundClean();
			return this;
		}
		digestInto(out) {
			exists(this);
			output(out, this);
			this.finished = true;
			const {buffer, view, blockLen, isLE: isLE3} = this;
			let {pos} = this;
			buffer[pos++] = 128;
			this.buffer.subarray(pos).fill(0);
			if (this.padOffset > blockLen - pos) {
				this.process(view, 0);
				pos = 0;
			}
			for (let i2 = pos; i2 < blockLen; i2++) buffer[i2] = 0;
			setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE3);
			this.process(view, 0);
			const oview = createView(out);
			const len = this.outputLen;
			if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
			const outLen = len / 4;
			const state = this.get();
			if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
			for (let i2 = 0; i2 < outLen; i2++) oview.setUint32(4 * i2, state[i2], isLE3);
		}
		digest() {
			const {buffer, outputLen} = this;
			this.digestInto(buffer);
			const res = buffer.slice(0, outputLen);
			this.destroy();
			return res;
		}
		_cloneInto(to) {
			to || (to = new this.constructor());
			to.set(...this.get());
			const {blockLen, buffer, length, finished, destroyed, pos} = this;
			to.length = length;
			to.pos = pos;
			to.finished = finished;
			to.destroyed = destroyed;
			if (length % blockLen) to.buffer.set(buffer);
			return to;
		}
	};

	// node_modules/@noble/curves/node_modules/@noble/hashes/esm/sha256.js
	var Chi = (a, b, c) => (a & b) ^ (~a & c);
	var Maj = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
	var SHA256_K = /* @__PURE__ */ new Uint32Array([
		1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
		310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078,
		604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
		3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
		2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
		275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222,
		2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
	]);
	var IV = /* @__PURE__ */ new Uint32Array([
		1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225
	]);
	var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
	var SHA256 = class extends SHA2 {
		constructor() {
			super(64, 32, 8, false);
			this.A = IV[0] | 0;
			this.B = IV[1] | 0;
			this.C = IV[2] | 0;
			this.D = IV[3] | 0;
			this.E = IV[4] | 0;
			this.F = IV[5] | 0;
			this.G = IV[6] | 0;
			this.H = IV[7] | 0;
		}
		get() {
			const {A, B, C, D, E, F, G, H} = this;
			return [A, B, C, D, E, F, G, H];
		}
		set(A, B, C, D, E, F, G, H) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
			this.F = F | 0;
			this.G = G | 0;
			this.H = H | 0;
		}
		process(view, offset) {
			for (let i2 = 0; i2 < 16; i2++, offset += 4) SHA256_W[i2] = view.getUint32(offset, false);
			for (let i2 = 16; i2 < 64; i2++) {
				const W15 = SHA256_W[i2 - 15];
				const W2 = SHA256_W[i2 - 2];
				const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ (W15 >>> 3);
				const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ (W2 >>> 10);
				SHA256_W[i2] = (s1 + SHA256_W[i2 - 7] + s0 + SHA256_W[i2 - 16]) | 0;
			}
			let {A, B, C, D, E, F, G, H} = this;
			for (let i2 = 0; i2 < 64; i2++) {
				const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
				const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i2] + SHA256_W[i2]) | 0;
				const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
				const T2 = (sigma0 + Maj(A, B, C)) | 0;
				H = G;
				G = F;
				F = E;
				E = (D + T1) | 0;
				D = C;
				C = B;
				B = A;
				A = (T1 + T2) | 0;
			}
			A = (A + this.A) | 0;
			B = (B + this.B) | 0;
			C = (C + this.C) | 0;
			D = (D + this.D) | 0;
			E = (E + this.E) | 0;
			F = (F + this.F) | 0;
			G = (G + this.G) | 0;
			H = (H + this.H) | 0;
			this.set(A, B, C, D, E, F, G, H);
		}
		roundClean() {
			SHA256_W.fill(0);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0, 0, 0, 0);
			this.buffer.fill(0);
		}
	};
	var sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());

	// node_modules/@noble/curves/esm/abstract/utils.js
	var utils_exports = {};
	__export(utils_exports, {
		bitGet: () => bitGet,
		bitLen: () => bitLen,
		bitMask: () => bitMask,
		bitSet: () => bitSet,
		bytesToHex: () => bytesToHex,
		bytesToNumberBE: () => bytesToNumberBE,
		bytesToNumberLE: () => bytesToNumberLE,
		concatBytes: () => concatBytes2,
		createHmacDrbg: () => createHmacDrbg,
		ensureBytes: () => ensureBytes,
		equalBytes: () => equalBytes,
		hexToBytes: () => hexToBytes,
		hexToNumber: () => hexToNumber,
		numberToBytesBE: () => numberToBytesBE,
		numberToBytesLE: () => numberToBytesLE,
		numberToHexUnpadded: () => numberToHexUnpadded,
		numberToVarBytesBE: () => numberToVarBytesBE,
		utf8ToBytes: () => utf8ToBytes2,
		validateObject: () => validateObject
	});
	var _0n = BigInt(0);
	var _1n = BigInt(1);
	var _2n = BigInt(2);
	var u8a2 = (a) => a instanceof Uint8Array;
	var hexes = /* @__PURE__ */ Array.from({length: 256}, (_, i2) => i2.toString(16).padStart(2, '0'));
	function bytesToHex(bytes3) {
		if (!u8a2(bytes3)) throw new Error('Uint8Array expected');
		let hex2 = '';
		for (let i2 = 0; i2 < bytes3.length; i2++) {
			hex2 += hexes[bytes3[i2]];
		}
		return hex2;
	}
	function numberToHexUnpadded(num) {
		const hex2 = num.toString(16);
		return hex2.length & 1 ? `0${hex2}` : hex2;
	}
	function hexToNumber(hex2) {
		if (typeof hex2 !== 'string') throw new Error('hex string expected, got ' + typeof hex2);
		return BigInt(hex2 === '' ? '0' : `0x${hex2}`);
	}
	function hexToBytes(hex2) {
		if (typeof hex2 !== 'string') throw new Error('hex string expected, got ' + typeof hex2);
		const len = hex2.length;
		if (len % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + len);
		const array = new Uint8Array(len / 2);
		for (let i2 = 0; i2 < array.length; i2++) {
			const j = i2 * 2;
			const hexByte = hex2.slice(j, j + 2);
			const byte = Number.parseInt(hexByte, 16);
			if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
			array[i2] = byte;
		}
		return array;
	}
	function bytesToNumberBE(bytes3) {
		return hexToNumber(bytesToHex(bytes3));
	}
	function bytesToNumberLE(bytes3) {
		if (!u8a2(bytes3)) throw new Error('Uint8Array expected');
		return hexToNumber(bytesToHex(Uint8Array.from(bytes3).reverse()));
	}
	function numberToBytesBE(n, len) {
		return hexToBytes(n.toString(16).padStart(len * 2, '0'));
	}
	function numberToBytesLE(n, len) {
		return numberToBytesBE(n, len).reverse();
	}
	function numberToVarBytesBE(n) {
		return hexToBytes(numberToHexUnpadded(n));
	}
	function ensureBytes(title, hex2, expectedLength) {
		let res;
		if (typeof hex2 === 'string') {
			try {
				res = hexToBytes(hex2);
			} catch (e) {
				throw new Error(`${title} must be valid hex string, got "${hex2}". Cause: ${e}`);
			}
		} else if (u8a2(hex2)) {
			res = Uint8Array.from(hex2);
		} else {
			throw new Error(`${title} must be hex string or Uint8Array`);
		}
		const len = res.length;
		if (typeof expectedLength === 'number' && len !== expectedLength)
			throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
		return res;
	}
	function concatBytes2(...arrays) {
		const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
		let pad = 0;
		arrays.forEach((a) => {
			if (!u8a2(a)) throw new Error('Uint8Array expected');
			r.set(a, pad);
			pad += a.length;
		});
		return r;
	}
	function equalBytes(b1, b2) {
		if (b1.length !== b2.length) return false;
		for (let i2 = 0; i2 < b1.length; i2++) if (b1[i2] !== b2[i2]) return false;
		return true;
	}
	function utf8ToBytes2(str) {
		if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
		return new Uint8Array(new TextEncoder().encode(str));
	}
	function bitLen(n) {
		let len;
		for (len = 0; n > _0n; n >>= _1n, len += 1);
		return len;
	}
	function bitGet(n, pos) {
		return (n >> BigInt(pos)) & _1n;
	}
	var bitSet = (n, pos, value) => {
		return n | ((value ? _1n : _0n) << BigInt(pos));
	};
	var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
	var u8n = (data) => new Uint8Array(data);
	var u8fr = (arr) => Uint8Array.from(arr);
	function createHmacDrbg(hashLen, qByteLen, hmacFn) {
		if (typeof hashLen !== 'number' || hashLen < 2) throw new Error('hashLen must be a number');
		if (typeof qByteLen !== 'number' || qByteLen < 2) throw new Error('qByteLen must be a number');
		if (typeof hmacFn !== 'function') throw new Error('hmacFn must be a function');
		let v = u8n(hashLen);
		let k = u8n(hashLen);
		let i2 = 0;
		const reset = () => {
			v.fill(1);
			k.fill(0);
			i2 = 0;
		};
		const h = (...b) => hmacFn(k, v, ...b);
		const reseed = (seed = u8n()) => {
			k = h(u8fr([0]), seed);
			v = h();
			if (seed.length === 0) return;
			k = h(u8fr([1]), seed);
			v = h();
		};
		const gen = () => {
			if (i2++ >= 1e3) throw new Error('drbg: tried 1000 values');
			let len = 0;
			const out = [];
			while (len < qByteLen) {
				v = h();
				const sl = v.slice();
				out.push(sl);
				len += v.length;
			}
			return concatBytes2(...out);
		};
		const genUntil = (seed, pred) => {
			reset();
			reseed(seed);
			let res = void 0;
			while (!(res = pred(gen()))) reseed();
			reset();
			return res;
		};
		return genUntil;
	}
	var validatorFns = {
		bigint: (val) => typeof val === 'bigint',
		function: (val) => typeof val === 'function',
		boolean: (val) => typeof val === 'boolean',
		string: (val) => typeof val === 'string',
		stringOrUint8Array: (val) => typeof val === 'string' || val instanceof Uint8Array,
		isSafeInteger: (val) => Number.isSafeInteger(val),
		array: (val) => Array.isArray(val),
		field: (val, object) => object.Fp.isValid(val),
		hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen)
	};
	function validateObject(object, validators, optValidators = {}) {
		const checkField = (fieldName, type, isOptional) => {
			const checkVal = validatorFns[type];
			if (typeof checkVal !== 'function') throw new Error(`Invalid validator "${type}", expected function`);
			const val = object[fieldName];
			if (isOptional && val === void 0) return;
			if (!checkVal(val, object)) {
				throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
			}
		};
		for (const [fieldName, type] of Object.entries(validators)) checkField(fieldName, type, false);
		for (const [fieldName, type] of Object.entries(optValidators)) checkField(fieldName, type, true);
		return object;
	}

	// node_modules/@noble/curves/esm/abstract/modular.js
	var _0n2 = BigInt(0);
	var _1n2 = BigInt(1);
	var _2n2 = BigInt(2);
	var _3n = BigInt(3);
	var _4n = BigInt(4);
	var _5n = BigInt(5);
	var _8n = BigInt(8);
	var _9n = BigInt(9);
	var _16n = BigInt(16);
	function mod(a, b) {
		const result = a % b;
		return result >= _0n2 ? result : b + result;
	}
	function pow(num, power, modulo) {
		if (modulo <= _0n2 || power < _0n2) throw new Error('Expected power/modulo > 0');
		if (modulo === _1n2) return _0n2;
		let res = _1n2;
		while (power > _0n2) {
			if (power & _1n2) res = (res * num) % modulo;
			num = (num * num) % modulo;
			power >>= _1n2;
		}
		return res;
	}
	function pow2(x, power, modulo) {
		let res = x;
		while (power-- > _0n2) {
			res *= res;
			res %= modulo;
		}
		return res;
	}
	function invert(number3, modulo) {
		if (number3 === _0n2 || modulo <= _0n2) {
			throw new Error(`invert: expected positive integers, got n=${number3} mod=${modulo}`);
		}
		let a = mod(number3, modulo);
		let b = modulo;
		let x = _0n2,
			y = _1n2,
			u = _1n2,
			v = _0n2;
		while (a !== _0n2) {
			const q = b / a;
			const r = b % a;
			const m = x - u * q;
			const n = y - v * q;
			(b = a), (a = r), (x = u), (y = v), (u = m), (v = n);
		}
		const gcd2 = b;
		if (gcd2 !== _1n2) throw new Error('invert: does not exist');
		return mod(x, modulo);
	}
	function tonelliShanks(P) {
		const legendreC = (P - _1n2) / _2n2;
		let Q, S, Z;
		for (Q = P - _1n2, S = 0; Q % _2n2 === _0n2; Q /= _2n2, S++);
		for (Z = _2n2; Z < P && pow(Z, legendreC, P) !== P - _1n2; Z++);
		if (S === 1) {
			const p1div4 = (P + _1n2) / _4n;
			return function tonelliFast(Fp2, n) {
				const root = Fp2.pow(n, p1div4);
				if (!Fp2.eql(Fp2.sqr(root), n)) throw new Error('Cannot find square root');
				return root;
			};
		}
		const Q1div2 = (Q + _1n2) / _2n2;
		return function tonelliSlow(Fp2, n) {
			if (Fp2.pow(n, legendreC) === Fp2.neg(Fp2.ONE)) throw new Error('Cannot find square root');
			let r = S;
			let g = Fp2.pow(Fp2.mul(Fp2.ONE, Z), Q);
			let x = Fp2.pow(n, Q1div2);
			let b = Fp2.pow(n, Q);
			while (!Fp2.eql(b, Fp2.ONE)) {
				if (Fp2.eql(b, Fp2.ZERO)) return Fp2.ZERO;
				let m = 1;
				for (let t2 = Fp2.sqr(b); m < r; m++) {
					if (Fp2.eql(t2, Fp2.ONE)) break;
					t2 = Fp2.sqr(t2);
				}
				const ge2 = Fp2.pow(g, _1n2 << BigInt(r - m - 1));
				g = Fp2.sqr(ge2);
				x = Fp2.mul(x, ge2);
				b = Fp2.mul(b, g);
				r = m;
			}
			return x;
		};
	}
	function FpSqrt(P) {
		if (P % _4n === _3n) {
			const p1div4 = (P + _1n2) / _4n;
			return function sqrt3mod4(Fp2, n) {
				const root = Fp2.pow(n, p1div4);
				if (!Fp2.eql(Fp2.sqr(root), n)) throw new Error('Cannot find square root');
				return root;
			};
		}
		if (P % _8n === _5n) {
			const c1 = (P - _5n) / _8n;
			return function sqrt5mod8(Fp2, n) {
				const n2 = Fp2.mul(n, _2n2);
				const v = Fp2.pow(n2, c1);
				const nv = Fp2.mul(n, v);
				const i2 = Fp2.mul(Fp2.mul(nv, _2n2), v);
				const root = Fp2.mul(nv, Fp2.sub(i2, Fp2.ONE));
				if (!Fp2.eql(Fp2.sqr(root), n)) throw new Error('Cannot find square root');
				return root;
			};
		}
		if (P % _16n === _9n) {
		}
		return tonelliShanks(P);
	}
	var FIELD_FIELDS = [
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
	function validateField(field) {
		const initial = {
			ORDER: 'bigint',
			MASK: 'bigint',
			BYTES: 'isSafeInteger',
			BITS: 'isSafeInteger'
		};
		const opts = FIELD_FIELDS.reduce((map, val) => {
			map[val] = 'function';
			return map;
		}, initial);
		return validateObject(field, opts);
	}
	function FpPow(f, num, power) {
		if (power < _0n2) throw new Error('Expected power > 0');
		if (power === _0n2) return f.ONE;
		if (power === _1n2) return num;
		let p = f.ONE;
		let d = num;
		while (power > _0n2) {
			if (power & _1n2) p = f.mul(p, d);
			d = f.sqr(d);
			power >>= _1n2;
		}
		return p;
	}
	function FpInvertBatch(f, nums) {
		const tmp = new Array(nums.length);
		const lastMultiplied = nums.reduce((acc, num, i2) => {
			if (f.is0(num)) return acc;
			tmp[i2] = acc;
			return f.mul(acc, num);
		}, f.ONE);
		const inverted = f.inv(lastMultiplied);
		nums.reduceRight((acc, num, i2) => {
			if (f.is0(num)) return acc;
			tmp[i2] = f.mul(acc, tmp[i2]);
			return f.mul(acc, num);
		}, inverted);
		return tmp;
	}
	function nLength(n, nBitLength) {
		const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
		const nByteLength = Math.ceil(_nBitLength / 8);
		return {nBitLength: _nBitLength, nByteLength};
	}
	function Field(ORDER, bitLen2, isLE3 = false, redef = {}) {
		if (ORDER <= _0n2) throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
		const {nBitLength: BITS, nByteLength: BYTES} = nLength(ORDER, bitLen2);
		if (BYTES > 2048) throw new Error('Field lengths over 2048 bytes are not supported');
		const sqrtP = FpSqrt(ORDER);
		const f = Object.freeze({
			ORDER,
			BITS,
			BYTES,
			MASK: bitMask(BITS),
			ZERO: _0n2,
			ONE: _1n2,
			create: (num) => mod(num, ORDER),
			isValid: (num) => {
				if (typeof num !== 'bigint') throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
				return _0n2 <= num && num < ORDER;
			},
			is0: (num) => num === _0n2,
			isOdd: (num) => (num & _1n2) === _1n2,
			neg: (num) => mod(-num, ORDER),
			eql: (lhs, rhs) => lhs === rhs,
			sqr: (num) => mod(num * num, ORDER),
			add: (lhs, rhs) => mod(lhs + rhs, ORDER),
			sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
			mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
			pow: (num, power) => FpPow(f, num, power),
			div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
			sqrN: (num) => num * num,
			addN: (lhs, rhs) => lhs + rhs,
			subN: (lhs, rhs) => lhs - rhs,
			mulN: (lhs, rhs) => lhs * rhs,
			inv: (num) => invert(num, ORDER),
			sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
			invertBatch: (lst) => FpInvertBatch(f, lst),
			cmov: (a, b, c) => (c ? b : a),
			toBytes: (num) => (isLE3 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES)),
			fromBytes: (bytes3) => {
				if (bytes3.length !== BYTES) throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes3.length}`);
				return isLE3 ? bytesToNumberLE(bytes3) : bytesToNumberBE(bytes3);
			}
		});
		return Object.freeze(f);
	}
	function getFieldBytesLength(fieldOrder) {
		if (typeof fieldOrder !== 'bigint') throw new Error('field order must be bigint');
		const bitLength = fieldOrder.toString(2).length;
		return Math.ceil(bitLength / 8);
	}
	function getMinHashLength(fieldOrder) {
		const length = getFieldBytesLength(fieldOrder);
		return length + Math.ceil(length / 2);
	}
	function mapHashToField(key, fieldOrder, isLE3 = false) {
		const len = key.length;
		const fieldLen = getFieldBytesLength(fieldOrder);
		const minLen = getMinHashLength(fieldOrder);
		if (len < 16 || len < minLen || len > 1024) throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
		const num = isLE3 ? bytesToNumberBE(key) : bytesToNumberLE(key);
		const reduced = mod(num, fieldOrder - _1n2) + _1n2;
		return isLE3 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
	}

	// node_modules/@noble/curves/esm/abstract/curve.js
	var _0n3 = BigInt(0);
	var _1n3 = BigInt(1);
	function wNAF(c, bits) {
		const constTimeNegate = (condition, item) => {
			const neg = item.negate();
			return condition ? neg : item;
		};
		const opts = (W) => {
			const windows = Math.ceil(bits / W) + 1;
			const windowSize = 2 ** (W - 1);
			return {windows, windowSize};
		};
		return {
			constTimeNegate,
			unsafeLadder(elm, n) {
				let p = c.ZERO;
				let d = elm;
				while (n > _0n3) {
					if (n & _1n3) p = p.add(d);
					d = d.double();
					n >>= _1n3;
				}
				return p;
			},
			precomputeWindow(elm, W) {
				const {windows, windowSize} = opts(W);
				const points = [];
				let p = elm;
				let base = p;
				for (let window2 = 0; window2 < windows; window2++) {
					base = p;
					points.push(base);
					for (let i2 = 1; i2 < windowSize; i2++) {
						base = base.add(p);
						points.push(base);
					}
					p = base.double();
				}
				return points;
			},
			wNAF(W, precomputes, n) {
				const {windows, windowSize} = opts(W);
				let p = c.ZERO;
				let f = c.BASE;
				const mask = BigInt(2 ** W - 1);
				const maxNumber = 2 ** W;
				const shiftBy = BigInt(W);
				for (let window2 = 0; window2 < windows; window2++) {
					const offset = window2 * windowSize;
					let wbits = Number(n & mask);
					n >>= shiftBy;
					if (wbits > windowSize) {
						wbits -= maxNumber;
						n += _1n3;
					}
					const offset1 = offset;
					const offset2 = offset + Math.abs(wbits) - 1;
					const cond1 = window2 % 2 !== 0;
					const cond2 = wbits < 0;
					if (wbits === 0) {
						f = f.add(constTimeNegate(cond1, precomputes[offset1]));
					} else {
						p = p.add(constTimeNegate(cond2, precomputes[offset2]));
					}
				}
				return {p, f};
			},
			wNAFCached(P, precomputesMap, n, transform) {
				const W = P._WINDOW_SIZE || 1;
				let comp = precomputesMap.get(P);
				if (!comp) {
					comp = this.precomputeWindow(P, W);
					if (W !== 1) {
						precomputesMap.set(P, transform(comp));
					}
				}
				return this.wNAF(W, comp, n);
			}
		};
	}
	function validateBasic(curve) {
		validateField(curve.Fp);
		validateObject(
			curve,
			{
				n: 'bigint',
				h: 'bigint',
				Gx: 'field',
				Gy: 'field'
			},
			{
				nBitLength: 'isSafeInteger',
				nByteLength: 'isSafeInteger'
			}
		);
		return Object.freeze({
			...nLength(curve.n, curve.nBitLength),
			...curve,
			...{p: curve.Fp.ORDER}
		});
	}

	// node_modules/@noble/curves/esm/abstract/weierstrass.js
	function validatePointOpts(curve) {
		const opts = validateBasic(curve);
		validateObject(
			opts,
			{
				a: 'field',
				b: 'field'
			},
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
		const {endo, Fp: Fp2, a} = opts;
		if (endo) {
			if (!Fp2.eql(a, Fp2.ZERO)) {
				throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
			}
			if (typeof endo !== 'object' || typeof endo.beta !== 'bigint' || typeof endo.splitScalar !== 'function') {
				throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
			}
		}
		return Object.freeze({...opts});
	}
	var {bytesToNumberBE: b2n, hexToBytes: h2b} = utils_exports;
	var DER = {
		Err: class DERErr extends Error {
			constructor(m = '') {
				super(m);
			}
		},
		_parseInt(data) {
			const {Err: E} = DER;
			if (data.length < 2 || data[0] !== 2) throw new E('Invalid signature integer tag');
			const len = data[1];
			const res = data.subarray(2, len + 2);
			if (!len || res.length !== len) throw new E('Invalid signature integer: wrong length');
			if (res[0] & 128) throw new E('Invalid signature integer: negative');
			if (res[0] === 0 && !(res[1] & 128)) throw new E('Invalid signature integer: unnecessary leading zero');
			return {d: b2n(res), l: data.subarray(len + 2)};
		},
		toSig(hex2) {
			const {Err: E} = DER;
			const data = typeof hex2 === 'string' ? h2b(hex2) : hex2;
			if (!(data instanceof Uint8Array)) throw new Error('ui8a expected');
			let l = data.length;
			if (l < 2 || data[0] != 48) throw new E('Invalid signature tag');
			if (data[1] !== l - 2) throw new E('Invalid signature: incorrect length');
			const {d: r, l: sBytes} = DER._parseInt(data.subarray(2));
			const {d: s, l: rBytesLeft} = DER._parseInt(sBytes);
			if (rBytesLeft.length) throw new E('Invalid signature: left bytes after parsing');
			return {r, s};
		},
		hexFromSig(sig) {
			const slice = (s2) => (Number.parseInt(s2[0], 16) & 8 ? '00' + s2 : s2);
			const h = (num) => {
				const hex2 = num.toString(16);
				return hex2.length & 1 ? `0${hex2}` : hex2;
			};
			const s = slice(h(sig.s));
			const r = slice(h(sig.r));
			const shl = s.length / 2;
			const rhl = r.length / 2;
			const sl = h(shl);
			const rl = h(rhl);
			return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
		}
	};
	var _0n4 = BigInt(0);
	var _1n4 = BigInt(1);
	var _2n3 = BigInt(2);
	var _3n2 = BigInt(3);
	var _4n2 = BigInt(4);
	function weierstrassPoints(opts) {
		const CURVE = validatePointOpts(opts);
		const {Fp: Fp2} = CURVE;
		const toBytes3 =
			CURVE.toBytes ||
			((_c, point, _isCompressed) => {
				const a = point.toAffine();
				return concatBytes2(Uint8Array.from([4]), Fp2.toBytes(a.x), Fp2.toBytes(a.y));
			});
		const fromBytes =
			CURVE.fromBytes ||
			((bytes3) => {
				const tail = bytes3.subarray(1);
				const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
				const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
				return {x, y};
			});
		function weierstrassEquation(x) {
			const {a, b} = CURVE;
			const x2 = Fp2.sqr(x);
			const x3 = Fp2.mul(x2, x);
			return Fp2.add(Fp2.add(x3, Fp2.mul(x, a)), b);
		}
		if (!Fp2.eql(Fp2.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
			throw new Error('bad generator point: equation left != right');
		function isWithinCurveOrder(num) {
			return typeof num === 'bigint' && _0n4 < num && num < CURVE.n;
		}
		function assertGE(num) {
			if (!isWithinCurveOrder(num)) throw new Error('Expected valid bigint: 0 < bigint < curve.n');
		}
		function normPrivateKeyToScalar(key) {
			const {allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n} = CURVE;
			if (lengths && typeof key !== 'bigint') {
				if (key instanceof Uint8Array) key = bytesToHex(key);
				if (typeof key !== 'string' || !lengths.includes(key.length)) throw new Error('Invalid key');
				key = key.padStart(nByteLength * 2, '0');
			}
			let num;
			try {
				num = typeof key === 'bigint' ? key : bytesToNumberBE(ensureBytes('private key', key, nByteLength));
			} catch (error) {
				throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
			}
			if (wrapPrivateKey) num = mod(num, n);
			assertGE(num);
			return num;
		}
		const pointPrecomputes = /* @__PURE__ */ new Map();
		function assertPrjPoint(other) {
			if (!(other instanceof Point2)) throw new Error('ProjectivePoint expected');
		}
		class Point2 {
			constructor(px, py, pz) {
				this.px = px;
				this.py = py;
				this.pz = pz;
				if (px == null || !Fp2.isValid(px)) throw new Error('x required');
				if (py == null || !Fp2.isValid(py)) throw new Error('y required');
				if (pz == null || !Fp2.isValid(pz)) throw new Error('z required');
			}
			static fromAffine(p) {
				const {x, y} = p || {};
				if (!p || !Fp2.isValid(x) || !Fp2.isValid(y)) throw new Error('invalid affine point');
				if (p instanceof Point2) throw new Error('projective point not allowed');
				const is0 = (i2) => Fp2.eql(i2, Fp2.ZERO);
				if (is0(x) && is0(y)) return Point2.ZERO;
				return new Point2(x, y, Fp2.ONE);
			}
			get x() {
				return this.toAffine().x;
			}
			get y() {
				return this.toAffine().y;
			}
			static normalizeZ(points) {
				const toInv = Fp2.invertBatch(points.map((p) => p.pz));
				return points.map((p, i2) => p.toAffine(toInv[i2])).map(Point2.fromAffine);
			}
			static fromHex(hex2) {
				const P = Point2.fromAffine(fromBytes(ensureBytes('pointHex', hex2)));
				P.assertValidity();
				return P;
			}
			static fromPrivateKey(privateKey) {
				return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
			}
			_setWindowSize(windowSize) {
				this._WINDOW_SIZE = windowSize;
				pointPrecomputes.delete(this);
			}
			assertValidity() {
				if (this.is0()) {
					if (CURVE.allowInfinityPoint && !Fp2.is0(this.py)) return;
					throw new Error('bad point: ZERO');
				}
				const {x, y} = this.toAffine();
				if (!Fp2.isValid(x) || !Fp2.isValid(y)) throw new Error('bad point: x or y not FE');
				const left = Fp2.sqr(y);
				const right = weierstrassEquation(x);
				if (!Fp2.eql(left, right)) throw new Error('bad point: equation left != right');
				if (!this.isTorsionFree()) throw new Error('bad point: not in prime-order subgroup');
			}
			hasEvenY() {
				const {y} = this.toAffine();
				if (Fp2.isOdd) return !Fp2.isOdd(y);
				throw new Error("Field doesn't support isOdd");
			}
			equals(other) {
				assertPrjPoint(other);
				const {px: X1, py: Y1, pz: Z1} = this;
				const {px: X2, py: Y2, pz: Z2} = other;
				const U1 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
				const U2 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
				return U1 && U2;
			}
			negate() {
				return new Point2(this.px, Fp2.neg(this.py), this.pz);
			}
			double() {
				const {a, b} = CURVE;
				const b3 = Fp2.mul(b, _3n2);
				const {px: X1, py: Y1, pz: Z1} = this;
				let X3 = Fp2.ZERO,
					Y3 = Fp2.ZERO,
					Z3 = Fp2.ZERO;
				let t0 = Fp2.mul(X1, X1);
				let t1 = Fp2.mul(Y1, Y1);
				let t2 = Fp2.mul(Z1, Z1);
				let t3 = Fp2.mul(X1, Y1);
				t3 = Fp2.add(t3, t3);
				Z3 = Fp2.mul(X1, Z1);
				Z3 = Fp2.add(Z3, Z3);
				X3 = Fp2.mul(a, Z3);
				Y3 = Fp2.mul(b3, t2);
				Y3 = Fp2.add(X3, Y3);
				X3 = Fp2.sub(t1, Y3);
				Y3 = Fp2.add(t1, Y3);
				Y3 = Fp2.mul(X3, Y3);
				X3 = Fp2.mul(t3, X3);
				Z3 = Fp2.mul(b3, Z3);
				t2 = Fp2.mul(a, t2);
				t3 = Fp2.sub(t0, t2);
				t3 = Fp2.mul(a, t3);
				t3 = Fp2.add(t3, Z3);
				Z3 = Fp2.add(t0, t0);
				t0 = Fp2.add(Z3, t0);
				t0 = Fp2.add(t0, t2);
				t0 = Fp2.mul(t0, t3);
				Y3 = Fp2.add(Y3, t0);
				t2 = Fp2.mul(Y1, Z1);
				t2 = Fp2.add(t2, t2);
				t0 = Fp2.mul(t2, t3);
				X3 = Fp2.sub(X3, t0);
				Z3 = Fp2.mul(t2, t1);
				Z3 = Fp2.add(Z3, Z3);
				Z3 = Fp2.add(Z3, Z3);
				return new Point2(X3, Y3, Z3);
			}
			add(other) {
				assertPrjPoint(other);
				const {px: X1, py: Y1, pz: Z1} = this;
				const {px: X2, py: Y2, pz: Z2} = other;
				let X3 = Fp2.ZERO,
					Y3 = Fp2.ZERO,
					Z3 = Fp2.ZERO;
				const a = CURVE.a;
				const b3 = Fp2.mul(CURVE.b, _3n2);
				let t0 = Fp2.mul(X1, X2);
				let t1 = Fp2.mul(Y1, Y2);
				let t2 = Fp2.mul(Z1, Z2);
				let t3 = Fp2.add(X1, Y1);
				let t4 = Fp2.add(X2, Y2);
				t3 = Fp2.mul(t3, t4);
				t4 = Fp2.add(t0, t1);
				t3 = Fp2.sub(t3, t4);
				t4 = Fp2.add(X1, Z1);
				let t5 = Fp2.add(X2, Z2);
				t4 = Fp2.mul(t4, t5);
				t5 = Fp2.add(t0, t2);
				t4 = Fp2.sub(t4, t5);
				t5 = Fp2.add(Y1, Z1);
				X3 = Fp2.add(Y2, Z2);
				t5 = Fp2.mul(t5, X3);
				X3 = Fp2.add(t1, t2);
				t5 = Fp2.sub(t5, X3);
				Z3 = Fp2.mul(a, t4);
				X3 = Fp2.mul(b3, t2);
				Z3 = Fp2.add(X3, Z3);
				X3 = Fp2.sub(t1, Z3);
				Z3 = Fp2.add(t1, Z3);
				Y3 = Fp2.mul(X3, Z3);
				t1 = Fp2.add(t0, t0);
				t1 = Fp2.add(t1, t0);
				t2 = Fp2.mul(a, t2);
				t4 = Fp2.mul(b3, t4);
				t1 = Fp2.add(t1, t2);
				t2 = Fp2.sub(t0, t2);
				t2 = Fp2.mul(a, t2);
				t4 = Fp2.add(t4, t2);
				t0 = Fp2.mul(t1, t4);
				Y3 = Fp2.add(Y3, t0);
				t0 = Fp2.mul(t5, t4);
				X3 = Fp2.mul(t3, X3);
				X3 = Fp2.sub(X3, t0);
				t0 = Fp2.mul(t3, t1);
				Z3 = Fp2.mul(t5, Z3);
				Z3 = Fp2.add(Z3, t0);
				return new Point2(X3, Y3, Z3);
			}
			subtract(other) {
				return this.add(other.negate());
			}
			is0() {
				return this.equals(Point2.ZERO);
			}
			wNAF(n) {
				return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
					const toInv = Fp2.invertBatch(comp.map((p) => p.pz));
					return comp.map((p, i2) => p.toAffine(toInv[i2])).map(Point2.fromAffine);
				});
			}
			multiplyUnsafe(n) {
				const I = Point2.ZERO;
				if (n === _0n4) return I;
				assertGE(n);
				if (n === _1n4) return this;
				const {endo} = CURVE;
				if (!endo) return wnaf.unsafeLadder(this, n);
				let {k1neg, k1, k2neg, k2} = endo.splitScalar(n);
				let k1p = I;
				let k2p = I;
				let d = this;
				while (k1 > _0n4 || k2 > _0n4) {
					if (k1 & _1n4) k1p = k1p.add(d);
					if (k2 & _1n4) k2p = k2p.add(d);
					d = d.double();
					k1 >>= _1n4;
					k2 >>= _1n4;
				}
				if (k1neg) k1p = k1p.negate();
				if (k2neg) k2p = k2p.negate();
				k2p = new Point2(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
				return k1p.add(k2p);
			}
			multiply(scalar) {
				assertGE(scalar);
				let n = scalar;
				let point, fake;
				const {endo} = CURVE;
				if (endo) {
					const {k1neg, k1, k2neg, k2} = endo.splitScalar(n);
					let {p: k1p, f: f1p} = this.wNAF(k1);
					let {p: k2p, f: f2p} = this.wNAF(k2);
					k1p = wnaf.constTimeNegate(k1neg, k1p);
					k2p = wnaf.constTimeNegate(k2neg, k2p);
					k2p = new Point2(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
					point = k1p.add(k2p);
					fake = f1p.add(f2p);
				} else {
					const {p, f} = this.wNAF(n);
					point = p;
					fake = f;
				}
				return Point2.normalizeZ([point, fake])[0];
			}
			multiplyAndAddUnsafe(Q, a, b) {
				const G = Point2.BASE;
				const mul = (P, a2) => (a2 === _0n4 || a2 === _1n4 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2));
				const sum = mul(this, a).add(mul(Q, b));
				return sum.is0() ? void 0 : sum;
			}
			toAffine(iz) {
				const {px: x, py: y, pz: z} = this;
				const is0 = this.is0();
				if (iz == null) iz = is0 ? Fp2.ONE : Fp2.inv(z);
				const ax = Fp2.mul(x, iz);
				const ay = Fp2.mul(y, iz);
				const zz = Fp2.mul(z, iz);
				if (is0) return {x: Fp2.ZERO, y: Fp2.ZERO};
				if (!Fp2.eql(zz, Fp2.ONE)) throw new Error('invZ was invalid');
				return {x: ax, y: ay};
			}
			isTorsionFree() {
				const {h: cofactor, isTorsionFree} = CURVE;
				if (cofactor === _1n4) return true;
				if (isTorsionFree) return isTorsionFree(Point2, this);
				throw new Error('isTorsionFree() has not been declared for the elliptic curve');
			}
			clearCofactor() {
				const {h: cofactor, clearCofactor} = CURVE;
				if (cofactor === _1n4) return this;
				if (clearCofactor) return clearCofactor(Point2, this);
				return this.multiplyUnsafe(CURVE.h);
			}
			toRawBytes(isCompressed = true) {
				this.assertValidity();
				return toBytes3(Point2, this, isCompressed);
			}
			toHex(isCompressed = true) {
				return bytesToHex(this.toRawBytes(isCompressed));
			}
		}
		Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp2.ONE);
		Point2.ZERO = new Point2(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
		const _bits = CURVE.nBitLength;
		const wnaf = wNAF(Point2, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
		return {
			CURVE,
			ProjectivePoint: Point2,
			normPrivateKeyToScalar,
			weierstrassEquation,
			isWithinCurveOrder
		};
	}
	function validateOpts(curve) {
		const opts = validateBasic(curve);
		validateObject(
			opts,
			{
				hash: 'hash',
				hmac: 'function',
				randomBytes: 'function'
			},
			{
				bits2int: 'function',
				bits2int_modN: 'function',
				lowS: 'boolean'
			}
		);
		return Object.freeze({lowS: true, ...opts});
	}
	function weierstrass(curveDef) {
		const CURVE = validateOpts(curveDef);
		const {Fp: Fp2, n: CURVE_ORDER} = CURVE;
		const compressedLen = Fp2.BYTES + 1;
		const uncompressedLen = 2 * Fp2.BYTES + 1;
		function isValidFieldElement(num) {
			return _0n4 < num && num < Fp2.ORDER;
		}
		function modN2(a) {
			return mod(a, CURVE_ORDER);
		}
		function invN(a) {
			return invert(a, CURVE_ORDER);
		}
		const {
			ProjectivePoint: Point2,
			normPrivateKeyToScalar,
			weierstrassEquation,
			isWithinCurveOrder
		} = weierstrassPoints({
			...CURVE,
			toBytes(_c, point, isCompressed) {
				const a = point.toAffine();
				const x = Fp2.toBytes(a.x);
				const cat = concatBytes2;
				if (isCompressed) {
					return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
				} else {
					return cat(Uint8Array.from([4]), x, Fp2.toBytes(a.y));
				}
			},
			fromBytes(bytes3) {
				const len = bytes3.length;
				const head = bytes3[0];
				const tail = bytes3.subarray(1);
				if (len === compressedLen && (head === 2 || head === 3)) {
					const x = bytesToNumberBE(tail);
					if (!isValidFieldElement(x)) throw new Error('Point is not on curve');
					const y2 = weierstrassEquation(x);
					let y = Fp2.sqrt(y2);
					const isYOdd = (y & _1n4) === _1n4;
					const isHeadOdd = (head & 1) === 1;
					if (isHeadOdd !== isYOdd) y = Fp2.neg(y);
					return {x, y};
				} else if (len === uncompressedLen && head === 4) {
					const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
					const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
					return {x, y};
				} else {
					throw new Error(
						`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`
					);
				}
			}
		});
		const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
		function isBiggerThanHalfOrder(number3) {
			const HALF = CURVE_ORDER >> _1n4;
			return number3 > HALF;
		}
		function normalizeS(s) {
			return isBiggerThanHalfOrder(s) ? modN2(-s) : s;
		}
		const slcNum = (b, from, to) => bytesToNumberBE(b.slice(from, to));
		class Signature {
			constructor(r, s, recovery) {
				this.r = r;
				this.s = s;
				this.recovery = recovery;
				this.assertValidity();
			}
			static fromCompact(hex2) {
				const l = CURVE.nByteLength;
				hex2 = ensureBytes('compactSignature', hex2, l * 2);
				return new Signature(slcNum(hex2, 0, l), slcNum(hex2, l, 2 * l));
			}
			static fromDER(hex2) {
				const {r, s} = DER.toSig(ensureBytes('DER', hex2));
				return new Signature(r, s);
			}
			assertValidity() {
				if (!isWithinCurveOrder(this.r)) throw new Error('r must be 0 < r < CURVE.n');
				if (!isWithinCurveOrder(this.s)) throw new Error('s must be 0 < s < CURVE.n');
			}
			addRecoveryBit(recovery) {
				return new Signature(this.r, this.s, recovery);
			}
			recoverPublicKey(msgHash) {
				const {r, s, recovery: rec} = this;
				const h = bits2int_modN(ensureBytes('msgHash', msgHash));
				if (rec == null || ![0, 1, 2, 3].includes(rec)) throw new Error('recovery id invalid');
				const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
				if (radj >= Fp2.ORDER) throw new Error('recovery id 2 or 3 invalid');
				const prefix = (rec & 1) === 0 ? '02' : '03';
				const R = Point2.fromHex(prefix + numToNByteStr(radj));
				const ir = invN(radj);
				const u1 = modN2(-h * ir);
				const u2 = modN2(s * ir);
				const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
				if (!Q) throw new Error('point at infinify');
				Q.assertValidity();
				return Q;
			}
			hasHighS() {
				return isBiggerThanHalfOrder(this.s);
			}
			normalizeS() {
				return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
			}
			toDERRawBytes() {
				return hexToBytes(this.toDERHex());
			}
			toDERHex() {
				return DER.hexFromSig({r: this.r, s: this.s});
			}
			toCompactRawBytes() {
				return hexToBytes(this.toCompactHex());
			}
			toCompactHex() {
				return numToNByteStr(this.r) + numToNByteStr(this.s);
			}
		}
		const utils = {
			isValidPrivateKey(privateKey) {
				try {
					normPrivateKeyToScalar(privateKey);
					return true;
				} catch (error) {
					return false;
				}
			},
			normPrivateKeyToScalar,
			randomPrivateKey: () => {
				const length = getMinHashLength(CURVE.n);
				return mapHashToField(CURVE.randomBytes(length), CURVE.n);
			},
			precompute(windowSize = 8, point = Point2.BASE) {
				point._setWindowSize(windowSize);
				point.multiply(BigInt(3));
				return point;
			}
		};
		function getPublicKey2(privateKey, isCompressed = true) {
			return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
		}
		function isProbPub(item) {
			const arr = item instanceof Uint8Array;
			const str = typeof item === 'string';
			const len = (arr || str) && item.length;
			if (arr) return len === compressedLen || len === uncompressedLen;
			if (str) return len === 2 * compressedLen || len === 2 * uncompressedLen;
			if (item instanceof Point2) return true;
			return false;
		}
		function getSharedSecret(privateA, publicB, isCompressed = true) {
			if (isProbPub(privateA)) throw new Error('first arg must be private key');
			if (!isProbPub(publicB)) throw new Error('second arg must be public key');
			const b = Point2.fromHex(publicB);
			return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
		}
		const bits2int =
			CURVE.bits2int ||
			function (bytes3) {
				const num = bytesToNumberBE(bytes3);
				const delta = bytes3.length * 8 - CURVE.nBitLength;
				return delta > 0 ? num >> BigInt(delta) : num;
			};
		const bits2int_modN =
			CURVE.bits2int_modN ||
			function (bytes3) {
				return modN2(bits2int(bytes3));
			};
		const ORDER_MASK = bitMask(CURVE.nBitLength);
		function int2octets(num) {
			if (typeof num !== 'bigint') throw new Error('bigint expected');
			if (!(_0n4 <= num && num < ORDER_MASK)) throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
			return numberToBytesBE(num, CURVE.nByteLength);
		}
		function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
			if (['recovered', 'canonical'].some((k) => k in opts)) throw new Error('sign() legacy options not supported');
			const {hash: hash3, randomBytes: randomBytes2} = CURVE;
			let {lowS, prehash, extraEntropy: ent} = opts;
			if (lowS == null) lowS = true;
			msgHash = ensureBytes('msgHash', msgHash);
			if (prehash) msgHash = ensureBytes('prehashed msgHash', hash3(msgHash));
			const h1int = bits2int_modN(msgHash);
			const d = normPrivateKeyToScalar(privateKey);
			const seedArgs = [int2octets(d), int2octets(h1int)];
			if (ent != null) {
				const e = ent === true ? randomBytes2(Fp2.BYTES) : ent;
				seedArgs.push(ensureBytes('extraEntropy', e));
			}
			const seed = concatBytes2(...seedArgs);
			const m = h1int;
			function k2sig(kBytes) {
				const k = bits2int(kBytes);
				if (!isWithinCurveOrder(k)) return;
				const ik = invN(k);
				const q = Point2.BASE.multiply(k).toAffine();
				const r = modN2(q.x);
				if (r === _0n4) return;
				const s = modN2(ik * modN2(m + r * d));
				if (s === _0n4) return;
				let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n4);
				let normS = s;
				if (lowS && isBiggerThanHalfOrder(s)) {
					normS = normalizeS(s);
					recovery ^= 1;
				}
				return new Signature(r, normS, recovery);
			}
			return {seed, k2sig};
		}
		const defaultSigOpts = {lowS: CURVE.lowS, prehash: false};
		const defaultVerOpts = {lowS: CURVE.lowS, prehash: false};
		function sign(msgHash, privKey, opts = defaultSigOpts) {
			const {seed, k2sig} = prepSig(msgHash, privKey, opts);
			const C = CURVE;
			const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
			return drbg(seed, k2sig);
		}
		Point2.BASE._setWindowSize(8);
		function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
			const sg = signature;
			msgHash = ensureBytes('msgHash', msgHash);
			publicKey = ensureBytes('publicKey', publicKey);
			if ('strict' in opts) throw new Error('options.strict was renamed to lowS');
			const {lowS, prehash} = opts;
			let _sig = void 0;
			let P;
			try {
				if (typeof sg === 'string' || sg instanceof Uint8Array) {
					try {
						_sig = Signature.fromDER(sg);
					} catch (derError) {
						if (!(derError instanceof DER.Err)) throw derError;
						_sig = Signature.fromCompact(sg);
					}
				} else if (typeof sg === 'object' && typeof sg.r === 'bigint' && typeof sg.s === 'bigint') {
					const {r: r2, s: s2} = sg;
					_sig = new Signature(r2, s2);
				} else {
					throw new Error('PARSE');
				}
				P = Point2.fromHex(publicKey);
			} catch (error) {
				if (error.message === 'PARSE')
					throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
				return false;
			}
			if (lowS && _sig.hasHighS()) return false;
			if (prehash) msgHash = CURVE.hash(msgHash);
			const {r, s} = _sig;
			const h = bits2int_modN(msgHash);
			const is = invN(s);
			const u1 = modN2(h * is);
			const u2 = modN2(r * is);
			const R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
			if (!R) return false;
			const v = modN2(R.x);
			return v === r;
		}
		return {
			CURVE,
			getPublicKey: getPublicKey2,
			getSharedSecret,
			sign,
			verify,
			ProjectivePoint: Point2,
			Signature,
			utils
		};
	}

	// node_modules/@noble/curves/node_modules/@noble/hashes/esm/hmac.js
	var HMAC = class extends Hash {
		constructor(hash3, _key) {
			super();
			this.finished = false;
			this.destroyed = false;
			hash(hash3);
			const key = toBytes(_key);
			this.iHash = hash3.create();
			if (typeof this.iHash.update !== 'function')
				throw new Error('Expected instance of class which extends utils.Hash');
			this.blockLen = this.iHash.blockLen;
			this.outputLen = this.iHash.outputLen;
			const blockLen = this.blockLen;
			const pad = new Uint8Array(blockLen);
			pad.set(key.length > blockLen ? hash3.create().update(key).digest() : key);
			for (let i2 = 0; i2 < pad.length; i2++) pad[i2] ^= 54;
			this.iHash.update(pad);
			this.oHash = hash3.create();
			for (let i2 = 0; i2 < pad.length; i2++) pad[i2] ^= 54 ^ 92;
			this.oHash.update(pad);
			pad.fill(0);
		}
		update(buf) {
			exists(this);
			this.iHash.update(buf);
			return this;
		}
		digestInto(out) {
			exists(this);
			bytes(out, this.outputLen);
			this.finished = true;
			this.iHash.digestInto(out);
			this.oHash.update(out);
			this.oHash.digestInto(out);
			this.destroy();
		}
		digest() {
			const out = new Uint8Array(this.oHash.outputLen);
			this.digestInto(out);
			return out;
		}
		_cloneInto(to) {
			to || (to = Object.create(Object.getPrototypeOf(this), {}));
			const {oHash, iHash, finished, destroyed, blockLen, outputLen} = this;
			to = to;
			to.finished = finished;
			to.destroyed = destroyed;
			to.blockLen = blockLen;
			to.outputLen = outputLen;
			to.oHash = oHash._cloneInto(to.oHash);
			to.iHash = iHash._cloneInto(to.iHash);
			return to;
		}
		destroy() {
			this.destroyed = true;
			this.oHash.destroy();
			this.iHash.destroy();
		}
	};
	var hmac = (hash3, key, message) => new HMAC(hash3, key).update(message).digest();
	hmac.create = (hash3, key) => new HMAC(hash3, key);

	// node_modules/@noble/curves/esm/_shortw_utils.js
	function getHash(hash3) {
		return {
			hash: hash3,
			hmac: (key, ...msgs) => hmac(hash3, key, concatBytes(...msgs)),
			randomBytes
		};
	}
	function createCurve(curveDef, defHash) {
		const create = (hash3) => weierstrass({...curveDef, ...getHash(hash3)});
		return Object.freeze({...create(defHash), create});
	}

	// node_modules/@noble/curves/esm/secp256k1.js
	var secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
	var secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
	var _1n5 = BigInt(1);
	var _2n4 = BigInt(2);
	var divNearest = (a, b) => (a + b / _2n4) / b;
	function sqrtMod(y) {
		const P = secp256k1P;
		const _3n3 = BigInt(3),
			_6n = BigInt(6),
			_11n = BigInt(11),
			_22n = BigInt(22);
		const _23n = BigInt(23),
			_44n = BigInt(44),
			_88n = BigInt(88);
		const b2 = (y * y * y) % P;
		const b3 = (b2 * b2 * y) % P;
		const b6 = (pow2(b3, _3n3, P) * b3) % P;
		const b9 = (pow2(b6, _3n3, P) * b3) % P;
		const b11 = (pow2(b9, _2n4, P) * b2) % P;
		const b22 = (pow2(b11, _11n, P) * b11) % P;
		const b44 = (pow2(b22, _22n, P) * b22) % P;
		const b88 = (pow2(b44, _44n, P) * b44) % P;
		const b176 = (pow2(b88, _88n, P) * b88) % P;
		const b220 = (pow2(b176, _44n, P) * b44) % P;
		const b223 = (pow2(b220, _3n3, P) * b3) % P;
		const t1 = (pow2(b223, _23n, P) * b22) % P;
		const t2 = (pow2(t1, _6n, P) * b2) % P;
		const root = pow2(t2, _2n4, P);
		if (!Fp.eql(Fp.sqr(root), y)) throw new Error('Cannot find square root');
		return root;
	}
	var Fp = Field(secp256k1P, void 0, void 0, {sqrt: sqrtMod});
	var secp256k1 = createCurve(
		{
			a: BigInt(0),
			b: BigInt(7),
			Fp,
			n: secp256k1N,
			Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
			Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
			h: BigInt(1),
			lowS: true,
			endo: {
				beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
				splitScalar: (k) => {
					const n = secp256k1N;
					const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
					const b1 = -_1n5 * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
					const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
					const b2 = a1;
					const POW_2_128 = BigInt('0x100000000000000000000000000000000');
					const c1 = divNearest(b2 * k, n);
					const c2 = divNearest(-b1 * k, n);
					let k1 = mod(k - c1 * a1 - c2 * a2, n);
					let k2 = mod(-c1 * b1 - c2 * b2, n);
					const k1neg = k1 > POW_2_128;
					const k2neg = k2 > POW_2_128;
					if (k1neg) k1 = n - k1;
					if (k2neg) k2 = n - k2;
					if (k1 > POW_2_128 || k2 > POW_2_128) {
						throw new Error('splitScalar: Endomorphism failed, k=' + k);
					}
					return {k1neg, k1, k2neg, k2};
				}
			}
		},
		sha256
	);
	var _0n5 = BigInt(0);
	var fe = (x) => typeof x === 'bigint' && _0n5 < x && x < secp256k1P;
	var ge = (x) => typeof x === 'bigint' && _0n5 < x && x < secp256k1N;
	var TAGGED_HASH_PREFIXES = {};
	function taggedHash(tag, ...messages) {
		let tagP = TAGGED_HASH_PREFIXES[tag];
		if (tagP === void 0) {
			const tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
			tagP = concatBytes2(tagH, tagH);
			TAGGED_HASH_PREFIXES[tag] = tagP;
		}
		return sha256(concatBytes2(tagP, ...messages));
	}
	var pointToBytes = (point) => point.toRawBytes(true).slice(1);
	var numTo32b = (n) => numberToBytesBE(n, 32);
	var modP = (x) => mod(x, secp256k1P);
	var modN = (x) => mod(x, secp256k1N);
	var Point = secp256k1.ProjectivePoint;
	var GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
	function schnorrGetExtPubKey(priv) {
		let d_ = secp256k1.utils.normPrivateKeyToScalar(priv);
		let p = Point.fromPrivateKey(d_);
		const scalar = p.hasEvenY() ? d_ : modN(-d_);
		return {scalar, bytes: pointToBytes(p)};
	}
	function lift_x(x) {
		if (!fe(x)) throw new Error('bad x: need 0 < x < p');
		const xx = modP(x * x);
		const c = modP(xx * x + BigInt(7));
		let y = sqrtMod(c);
		if (y % _2n4 !== _0n5) y = modP(-y);
		const p = new Point(x, y, _1n5);
		p.assertValidity();
		return p;
	}
	function challenge(...args) {
		return modN(bytesToNumberBE(taggedHash('BIP0340/challenge', ...args)));
	}
	function schnorrGetPublicKey(privateKey) {
		return schnorrGetExtPubKey(privateKey).bytes;
	}
	function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
		const m = ensureBytes('message', message);
		const {bytes: px, scalar: d} = schnorrGetExtPubKey(privateKey);
		const a = ensureBytes('auxRand', auxRand, 32);
		const t = numTo32b(d ^ bytesToNumberBE(taggedHash('BIP0340/aux', a)));
		const rand = taggedHash('BIP0340/nonce', t, px, m);
		const k_ = modN(bytesToNumberBE(rand));
		if (k_ === _0n5) throw new Error('sign failed: k is zero');
		const {bytes: rx, scalar: k} = schnorrGetExtPubKey(k_);
		const e = challenge(rx, px, m);
		const sig = new Uint8Array(64);
		sig.set(rx, 0);
		sig.set(numTo32b(modN(k + e * d)), 32);
		if (!schnorrVerify(sig, m, px)) throw new Error('sign: Invalid signature produced');
		return sig;
	}
	function schnorrVerify(signature, message, publicKey) {
		const sig = ensureBytes('signature', signature, 64);
		const m = ensureBytes('message', message);
		const pub = ensureBytes('publicKey', publicKey, 32);
		try {
			const P = lift_x(bytesToNumberBE(pub));
			const r = bytesToNumberBE(sig.subarray(0, 32));
			if (!fe(r)) return false;
			const s = bytesToNumberBE(sig.subarray(32, 64));
			if (!ge(s)) return false;
			const e = challenge(numTo32b(r), pointToBytes(P), m);
			const R = GmulAdd(P, s, modN(-e));
			if (!R || !R.hasEvenY() || R.toAffine().x !== r) return false;
			return true;
		} catch (error) {
			return false;
		}
	}
	var schnorr = /* @__PURE__ */ (() => ({
		getPublicKey: schnorrGetPublicKey,
		sign: schnorrSign,
		verify: schnorrVerify,
		utils: {
			randomPrivateKey: secp256k1.utils.randomPrivateKey,
			lift_x,
			pointToBytes,
			numberToBytesBE,
			bytesToNumberBE,
			taggedHash,
			mod
		}
	}))();

	// node_modules/@noble/hashes/esm/crypto.js
	var crypto2 = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0;

	// node_modules/@noble/hashes/esm/utils.js
	var u8a3 = (a) => a instanceof Uint8Array;
	var createView2 = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
	var rotr2 = (word, shift) => (word << (32 - shift)) | (word >>> shift);
	var isLE2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
	if (!isLE2) throw new Error('Non little-endian hardware is not supported');
	var hexes2 = Array.from({length: 256}, (v, i2) => i2.toString(16).padStart(2, '0'));
	function bytesToHex2(bytes3) {
		if (!u8a3(bytes3)) throw new Error('Uint8Array expected');
		let hex2 = '';
		for (let i2 = 0; i2 < bytes3.length; i2++) {
			hex2 += hexes2[bytes3[i2]];
		}
		return hex2;
	}
	function hexToBytes2(hex2) {
		if (typeof hex2 !== 'string') throw new Error('hex string expected, got ' + typeof hex2);
		const len = hex2.length;
		if (len % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + len);
		const array = new Uint8Array(len / 2);
		for (let i2 = 0; i2 < array.length; i2++) {
			const j = i2 * 2;
			const hexByte = hex2.slice(j, j + 2);
			const byte = Number.parseInt(hexByte, 16);
			if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
			array[i2] = byte;
		}
		return array;
	}
	function utf8ToBytes3(str) {
		if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
		return new Uint8Array(new TextEncoder().encode(str));
	}
	function toBytes2(data) {
		if (typeof data === 'string') data = utf8ToBytes3(data);
		if (!u8a3(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
		return data;
	}
	function concatBytes3(...arrays) {
		const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
		let pad = 0;
		arrays.forEach((a) => {
			if (!u8a3(a)) throw new Error('Uint8Array expected');
			r.set(a, pad);
			pad += a.length;
		});
		return r;
	}
	var Hash2 = class {
		clone() {
			return this._cloneInto();
		}
	};
	function wrapConstructor2(hashCons) {
		const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
		const tmp = hashCons();
		hashC.outputLen = tmp.outputLen;
		hashC.blockLen = tmp.blockLen;
		hashC.create = () => hashCons();
		return hashC;
	}

	// node_modules/@noble/hashes/esm/_assert.js
	function number2(n) {
		if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
	}
	function bool(b) {
		if (typeof b !== 'boolean') throw new Error(`Expected boolean, not ${b}`);
	}
	function bytes2(b, ...lengths) {
		if (!(b instanceof Uint8Array)) throw new Error('Expected Uint8Array');
		if (lengths.length > 0 && !lengths.includes(b.length))
			throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
	}
	function hash2(hash3) {
		if (typeof hash3 !== 'function' || typeof hash3.create !== 'function')
			throw new Error('Hash should be wrapped by utils.wrapConstructor');
		number2(hash3.outputLen);
		number2(hash3.blockLen);
	}
	function exists2(instance, checkFinished = true) {
		if (instance.destroyed) throw new Error('Hash instance has been destroyed');
		if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
	}
	function output2(out, instance) {
		bytes2(out);
		const min = instance.outputLen;
		if (out.length < min) {
			throw new Error(`digestInto() expects output buffer of length at least ${min}`);
		}
	}
	var assert = {
		number: number2,
		bool,
		bytes: bytes2,
		hash: hash2,
		exists: exists2,
		output: output2
	};
	var assert_default = assert;

	// node_modules/@noble/hashes/esm/_sha2.js
	function setBigUint642(view, byteOffset, value, isLE3) {
		if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE3);
		const _32n = BigInt(32);
		const _u32_max = BigInt(4294967295);
		const wh = Number((value >> _32n) & _u32_max);
		const wl = Number(value & _u32_max);
		const h = isLE3 ? 4 : 0;
		const l = isLE3 ? 0 : 4;
		view.setUint32(byteOffset + h, wh, isLE3);
		view.setUint32(byteOffset + l, wl, isLE3);
	}
	var SHA22 = class extends Hash2 {
		constructor(blockLen, outputLen, padOffset, isLE3) {
			super();
			this.blockLen = blockLen;
			this.outputLen = outputLen;
			this.padOffset = padOffset;
			this.isLE = isLE3;
			this.finished = false;
			this.length = 0;
			this.pos = 0;
			this.destroyed = false;
			this.buffer = new Uint8Array(blockLen);
			this.view = createView2(this.buffer);
		}
		update(data) {
			assert_default.exists(this);
			const {view, buffer, blockLen} = this;
			data = toBytes2(data);
			const len = data.length;
			for (let pos = 0; pos < len; ) {
				const take = Math.min(blockLen - this.pos, len - pos);
				if (take === blockLen) {
					const dataView = createView2(data);
					for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
					continue;
				}
				buffer.set(data.subarray(pos, pos + take), this.pos);
				this.pos += take;
				pos += take;
				if (this.pos === blockLen) {
					this.process(view, 0);
					this.pos = 0;
				}
			}
			this.length += data.length;
			this.roundClean();
			return this;
		}
		digestInto(out) {
			assert_default.exists(this);
			assert_default.output(out, this);
			this.finished = true;
			const {buffer, view, blockLen, isLE: isLE3} = this;
			let {pos} = this;
			buffer[pos++] = 128;
			this.buffer.subarray(pos).fill(0);
			if (this.padOffset > blockLen - pos) {
				this.process(view, 0);
				pos = 0;
			}
			for (let i2 = pos; i2 < blockLen; i2++) buffer[i2] = 0;
			setBigUint642(view, blockLen - 8, BigInt(this.length * 8), isLE3);
			this.process(view, 0);
			const oview = createView2(out);
			const len = this.outputLen;
			if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
			const outLen = len / 4;
			const state = this.get();
			if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
			for (let i2 = 0; i2 < outLen; i2++) oview.setUint32(4 * i2, state[i2], isLE3);
		}
		digest() {
			const {buffer, outputLen} = this;
			this.digestInto(buffer);
			const res = buffer.slice(0, outputLen);
			this.destroy();
			return res;
		}
		_cloneInto(to) {
			to || (to = new this.constructor());
			to.set(...this.get());
			const {blockLen, buffer, length, finished, destroyed, pos} = this;
			to.length = length;
			to.pos = pos;
			to.finished = finished;
			to.destroyed = destroyed;
			if (length % blockLen) to.buffer.set(buffer);
			return to;
		}
	};

	// node_modules/@noble/hashes/esm/sha256.js
	var Chi2 = (a, b, c) => (a & b) ^ (~a & c);
	var Maj2 = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
	var SHA256_K2 = new Uint32Array([
		1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
		310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078,
		604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
		3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
		2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
		275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222,
		2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
	]);
	var IV2 = new Uint32Array([
		1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225
	]);
	var SHA256_W2 = new Uint32Array(64);
	var SHA2562 = class extends SHA22 {
		constructor() {
			super(64, 32, 8, false);
			this.A = IV2[0] | 0;
			this.B = IV2[1] | 0;
			this.C = IV2[2] | 0;
			this.D = IV2[3] | 0;
			this.E = IV2[4] | 0;
			this.F = IV2[5] | 0;
			this.G = IV2[6] | 0;
			this.H = IV2[7] | 0;
		}
		get() {
			const {A, B, C, D, E, F, G, H} = this;
			return [A, B, C, D, E, F, G, H];
		}
		set(A, B, C, D, E, F, G, H) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
			this.F = F | 0;
			this.G = G | 0;
			this.H = H | 0;
		}
		process(view, offset) {
			for (let i2 = 0; i2 < 16; i2++, offset += 4) SHA256_W2[i2] = view.getUint32(offset, false);
			for (let i2 = 16; i2 < 64; i2++) {
				const W15 = SHA256_W2[i2 - 15];
				const W2 = SHA256_W2[i2 - 2];
				const s0 = rotr2(W15, 7) ^ rotr2(W15, 18) ^ (W15 >>> 3);
				const s1 = rotr2(W2, 17) ^ rotr2(W2, 19) ^ (W2 >>> 10);
				SHA256_W2[i2] = (s1 + SHA256_W2[i2 - 7] + s0 + SHA256_W2[i2 - 16]) | 0;
			}
			let {A, B, C, D, E, F, G, H} = this;
			for (let i2 = 0; i2 < 64; i2++) {
				const sigma1 = rotr2(E, 6) ^ rotr2(E, 11) ^ rotr2(E, 25);
				const T1 = (H + sigma1 + Chi2(E, F, G) + SHA256_K2[i2] + SHA256_W2[i2]) | 0;
				const sigma0 = rotr2(A, 2) ^ rotr2(A, 13) ^ rotr2(A, 22);
				const T2 = (sigma0 + Maj2(A, B, C)) | 0;
				H = G;
				G = F;
				F = E;
				E = (D + T1) | 0;
				D = C;
				C = B;
				B = A;
				A = (T1 + T2) | 0;
			}
			A = (A + this.A) | 0;
			B = (B + this.B) | 0;
			C = (C + this.C) | 0;
			D = (D + this.D) | 0;
			E = (E + this.E) | 0;
			F = (F + this.F) | 0;
			G = (G + this.G) | 0;
			H = (H + this.H) | 0;
			this.set(A, B, C, D, E, F, G, H);
		}
		roundClean() {
			SHA256_W2.fill(0);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0, 0, 0, 0);
			this.buffer.fill(0);
		}
	};
	var SHA224 = class extends SHA2562 {
		constructor() {
			super();
			this.A = 3238371032 | 0;
			this.B = 914150663 | 0;
			this.C = 812702999 | 0;
			this.D = 4144912697 | 0;
			this.E = 4290775857 | 0;
			this.F = 1750603025 | 0;
			this.G = 1694076839 | 0;
			this.H = 3204075428 | 0;
			this.outputLen = 28;
		}
	};
	var sha2562 = wrapConstructor2(() => new SHA2562());
	var sha224 = wrapConstructor2(() => new SHA224());

	// node_modules/nostr-tools/lib/esm/pure.js
	var verifiedSymbol = Symbol('verified');
	var isRecord = (obj) => obj instanceof Object;
	function validateEvent(event) {
		if (!isRecord(event)) return false;
		if (typeof event.kind !== 'number') return false;
		if (typeof event.content !== 'string') return false;
		if (typeof event.created_at !== 'number') return false;
		if (typeof event.pubkey !== 'string') return false;
		if (!event.pubkey.match(/^[a-f0-9]{64}$/)) return false;
		if (!Array.isArray(event.tags)) return false;
		for (let i2 = 0; i2 < event.tags.length; i2++) {
			let tag = event.tags[i2];
			if (!Array.isArray(tag)) return false;
			for (let j = 0; j < tag.length; j++) {
				if (typeof tag[j] === 'object') return false;
			}
		}
		return true;
	}
	var utf8Decoder = new TextDecoder('utf-8');
	var utf8Encoder = new TextEncoder();
	var JS = class {
		generateSecretKey() {
			return schnorr.utils.randomPrivateKey();
		}
		getPublicKey(secretKey) {
			return bytesToHex2(schnorr.getPublicKey(secretKey));
		}
		finalizeEvent(t, secretKey) {
			const event = t;
			event.pubkey = bytesToHex2(schnorr.getPublicKey(secretKey));
			event.id = getEventHash(event);
			event.sig = bytesToHex2(schnorr.sign(getEventHash(event), secretKey));
			event[verifiedSymbol] = true;
			return event;
		}
		verifyEvent(event) {
			if (typeof event[verifiedSymbol] === 'boolean') return event[verifiedSymbol];
			const hash3 = getEventHash(event);
			if (hash3 !== event.id) {
				event[verifiedSymbol] = false;
				return false;
			}
			try {
				const valid = schnorr.verify(event.sig, hash3, event.pubkey);
				event[verifiedSymbol] = valid;
				return valid;
			} catch (err) {
				event[verifiedSymbol] = false;
				return false;
			}
		}
	};
	function serializeEvent(evt) {
		if (!validateEvent(evt)) throw new Error("can't serialize event with wrong or missing properties");
		return JSON.stringify([0, evt.pubkey, evt.created_at, evt.kind, evt.tags, evt.content]);
	}
	function getEventHash(event) {
		let eventHash = sha2562(utf8Encoder.encode(serializeEvent(event)));
		return bytesToHex2(eventHash);
	}
	var i = new JS();
	var generateSecretKey = i.generateSecretKey;
	var getPublicKey = i.getPublicKey;
	var finalizeEvent = i.finalizeEvent;
	var verifyEvent = i.verifyEvent;

	// node_modules/@scure/base/lib/esm/index.js
	function assertNumber(n) {
		if (!Number.isSafeInteger(n)) throw new Error(`Wrong integer: ${n}`);
	}
	function chain(...args) {
		const wrap = (a, b) => (c) => a(b(c));
		const encode = Array.from(args)
			.reverse()
			.reduce((acc, i2) => (acc ? wrap(acc, i2.encode) : i2.encode), void 0);
		const decode = args.reduce((acc, i2) => (acc ? wrap(acc, i2.decode) : i2.decode), void 0);
		return {encode, decode};
	}
	function alphabet(alphabet2) {
		return {
			encode: (digits) => {
				if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
					throw new Error('alphabet.encode input should be an array of numbers');
				return digits.map((i2) => {
					assertNumber(i2);
					if (i2 < 0 || i2 >= alphabet2.length)
						throw new Error(`Digit index outside alphabet: ${i2} (alphabet: ${alphabet2.length})`);
					return alphabet2[i2];
				});
			},
			decode: (input) => {
				if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
					throw new Error('alphabet.decode input should be array of strings');
				return input.map((letter) => {
					if (typeof letter !== 'string') throw new Error(`alphabet.decode: not string element=${letter}`);
					const index = alphabet2.indexOf(letter);
					if (index === -1) throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet2}`);
					return index;
				});
			}
		};
	}
	function join(separator = '') {
		if (typeof separator !== 'string') throw new Error('join separator should be string');
		return {
			encode: (from) => {
				if (!Array.isArray(from) || (from.length && typeof from[0] !== 'string'))
					throw new Error('join.encode input should be array of strings');
				for (let i2 of from) if (typeof i2 !== 'string') throw new Error(`join.encode: non-string input=${i2}`);
				return from.join(separator);
			},
			decode: (to) => {
				if (typeof to !== 'string') throw new Error('join.decode input should be string');
				return to.split(separator);
			}
		};
	}
	function padding(bits, chr = '=') {
		assertNumber(bits);
		if (typeof chr !== 'string') throw new Error('padding chr should be string');
		return {
			encode(data) {
				if (!Array.isArray(data) || (data.length && typeof data[0] !== 'string'))
					throw new Error('padding.encode input should be array of strings');
				for (let i2 of data) if (typeof i2 !== 'string') throw new Error(`padding.encode: non-string input=${i2}`);
				while ((data.length * bits) % 8) data.push(chr);
				return data;
			},
			decode(input) {
				if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
					throw new Error('padding.encode input should be array of strings');
				for (let i2 of input) if (typeof i2 !== 'string') throw new Error(`padding.decode: non-string input=${i2}`);
				let end = input.length;
				if ((end * bits) % 8) throw new Error('Invalid padding: string should have whole number of bytes');
				for (; end > 0 && input[end - 1] === chr; end--) {
					if (!(((end - 1) * bits) % 8)) throw new Error('Invalid padding: string has too much padding');
				}
				return input.slice(0, end);
			}
		};
	}
	function normalize(fn) {
		if (typeof fn !== 'function') throw new Error('normalize fn should be function');
		return {encode: (from) => from, decode: (to) => fn(to)};
	}
	function convertRadix(data, from, to) {
		if (from < 2) throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
		if (to < 2) throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
		if (!Array.isArray(data)) throw new Error('convertRadix: data should be array');
		if (!data.length) return [];
		let pos = 0;
		const res = [];
		const digits = Array.from(data);
		digits.forEach((d) => {
			assertNumber(d);
			if (d < 0 || d >= from) throw new Error(`Wrong integer: ${d}`);
		});
		while (true) {
			let carry = 0;
			let done = true;
			for (let i2 = pos; i2 < digits.length; i2++) {
				const digit = digits[i2];
				const digitBase = from * carry + digit;
				if (!Number.isSafeInteger(digitBase) || (from * carry) / from !== carry || digitBase - digit !== from * carry) {
					throw new Error('convertRadix: carry overflow');
				}
				carry = digitBase % to;
				digits[i2] = Math.floor(digitBase / to);
				if (!Number.isSafeInteger(digits[i2]) || digits[i2] * to + carry !== digitBase)
					throw new Error('convertRadix: carry overflow');
				if (!done) continue;
				else if (!digits[i2]) pos = i2;
				else done = false;
			}
			res.push(carry);
			if (done) break;
		}
		for (let i2 = 0; i2 < data.length - 1 && data[i2] === 0; i2++) res.push(0);
		return res.reverse();
	}
	var gcd = (a, b) => (!b ? a : gcd(b, a % b));
	var radix2carry = (from, to) => from + (to - gcd(from, to));
	function convertRadix2(data, from, to, padding2) {
		if (!Array.isArray(data)) throw new Error('convertRadix2: data should be array');
		if (from <= 0 || from > 32) throw new Error(`convertRadix2: wrong from=${from}`);
		if (to <= 0 || to > 32) throw new Error(`convertRadix2: wrong to=${to}`);
		if (radix2carry(from, to) > 32) {
			throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
		}
		let carry = 0;
		let pos = 0;
		const mask = 2 ** to - 1;
		const res = [];
		for (const n of data) {
			assertNumber(n);
			if (n >= 2 ** from) throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
			carry = (carry << from) | n;
			if (pos + from > 32) throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
			pos += from;
			for (; pos >= to; pos -= to) res.push(((carry >> (pos - to)) & mask) >>> 0);
			carry &= 2 ** pos - 1;
		}
		carry = (carry << (to - pos)) & mask;
		if (!padding2 && pos >= from) throw new Error('Excess padding');
		if (!padding2 && carry) throw new Error(`Non-zero padding: ${carry}`);
		if (padding2 && pos > 0) res.push(carry >>> 0);
		return res;
	}
	function radix(num) {
		assertNumber(num);
		return {
			encode: (bytes3) => {
				if (!(bytes3 instanceof Uint8Array)) throw new Error('radix.encode input should be Uint8Array');
				return convertRadix(Array.from(bytes3), 2 ** 8, num);
			},
			decode: (digits) => {
				if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
					throw new Error('radix.decode input should be array of strings');
				return Uint8Array.from(convertRadix(digits, num, 2 ** 8));
			}
		};
	}
	function radix2(bits, revPadding = false) {
		assertNumber(bits);
		if (bits <= 0 || bits > 32) throw new Error('radix2: bits should be in (0..32]');
		if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32) throw new Error('radix2: carry overflow');
		return {
			encode: (bytes3) => {
				if (!(bytes3 instanceof Uint8Array)) throw new Error('radix2.encode input should be Uint8Array');
				return convertRadix2(Array.from(bytes3), 8, bits, !revPadding);
			},
			decode: (digits) => {
				if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
					throw new Error('radix2.decode input should be array of strings');
				return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
			}
		};
	}
	function unsafeWrapper(fn) {
		if (typeof fn !== 'function') throw new Error('unsafeWrapper fn should be function');
		return function (...args) {
			try {
				return fn.apply(null, args);
			} catch (e) {}
		};
	}
	var base16 = chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
	var base32 = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
	var base32hex = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
	var base32crockford = chain(
		radix2(5),
		alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'),
		join(''),
		normalize((s) => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1'))
	);
	var base64 = chain(
		radix2(6),
		alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
		padding(6),
		join('')
	);
	var base64url = chain(
		radix2(6),
		alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'),
		padding(6),
		join('')
	);
	var genBase58 = (abc) => chain(radix(58), alphabet(abc), join(''));
	var base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
	var base58flickr = genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
	var base58xrp = genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
	var XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
	var base58xmr = {
		encode(data) {
			let res = '';
			for (let i2 = 0; i2 < data.length; i2 += 8) {
				const block = data.subarray(i2, i2 + 8);
				res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
			}
			return res;
		},
		decode(str) {
			let res = [];
			for (let i2 = 0; i2 < str.length; i2 += 11) {
				const slice = str.slice(i2, i2 + 11);
				const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
				const block = base58.decode(slice);
				for (let j = 0; j < block.length - blockLen; j++) {
					if (block[j] !== 0) throw new Error('base58xmr: wrong padding');
				}
				res = res.concat(Array.from(block.slice(block.length - blockLen)));
			}
			return Uint8Array.from(res);
		}
	};
	var BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
	var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
	function bech32Polymod(pre) {
		const b = pre >> 25;
		let chk = (pre & 33554431) << 5;
		for (let i2 = 0; i2 < POLYMOD_GENERATORS.length; i2++) {
			if (((b >> i2) & 1) === 1) chk ^= POLYMOD_GENERATORS[i2];
		}
		return chk;
	}
	function bechChecksum(prefix, words, encodingConst = 1) {
		const len = prefix.length;
		let chk = 1;
		for (let i2 = 0; i2 < len; i2++) {
			const c = prefix.charCodeAt(i2);
			if (c < 33 || c > 126) throw new Error(`Invalid prefix (${prefix})`);
			chk = bech32Polymod(chk) ^ (c >> 5);
		}
		chk = bech32Polymod(chk);
		for (let i2 = 0; i2 < len; i2++) chk = bech32Polymod(chk) ^ (prefix.charCodeAt(i2) & 31);
		for (let v of words) chk = bech32Polymod(chk) ^ v;
		for (let i2 = 0; i2 < 6; i2++) chk = bech32Polymod(chk);
		chk ^= encodingConst;
		return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
	}
	function genBech32(encoding) {
		const ENCODING_CONST = encoding === 'bech32' ? 1 : 734539939;
		const _words = radix2(5);
		const fromWords = _words.decode;
		const toWords = _words.encode;
		const fromWordsUnsafe = unsafeWrapper(fromWords);
		function encode(prefix, words, limit = 90) {
			if (typeof prefix !== 'string') throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
			if (!Array.isArray(words) || (words.length && typeof words[0] !== 'number'))
				throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
			const actualLength = prefix.length + 7 + words.length;
			if (limit !== false && actualLength > limit) throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
			prefix = prefix.toLowerCase();
			return `${prefix}1${BECH_ALPHABET.encode(words)}${bechChecksum(prefix, words, ENCODING_CONST)}`;
		}
		function decode(str, limit = 90) {
			if (typeof str !== 'string') throw new Error(`bech32.decode input should be string, not ${typeof str}`);
			if (str.length < 8 || (limit !== false && str.length > limit))
				throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
			const lowered = str.toLowerCase();
			if (str !== lowered && str !== str.toUpperCase()) throw new Error(`String must be lowercase or uppercase`);
			str = lowered;
			const sepIndex = str.lastIndexOf('1');
			if (sepIndex === 0 || sepIndex === -1) throw new Error(`Letter "1" must be present between prefix and data only`);
			const prefix = str.slice(0, sepIndex);
			const _words2 = str.slice(sepIndex + 1);
			if (_words2.length < 6) throw new Error('Data must be at least 6 characters long');
			const words = BECH_ALPHABET.decode(_words2).slice(0, -6);
			const sum = bechChecksum(prefix, words, ENCODING_CONST);
			if (!_words2.endsWith(sum)) throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
			return {prefix, words};
		}
		const decodeUnsafe = unsafeWrapper(decode);
		function decodeToBytes(str) {
			const {prefix, words} = decode(str, false);
			return {prefix, words, bytes: fromWords(words)};
		}
		return {encode, decode, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords};
	}
	var bech32 = genBech32('bech32');
	var bech32m = genBech32('bech32m');
	var utf8 = {
		encode: (data) => new TextDecoder().decode(data),
		decode: (str) => new TextEncoder().encode(str)
	};
	var hex = chain(
		radix2(4),
		alphabet('0123456789abcdef'),
		join(''),
		normalize((s) => {
			if (typeof s !== 'string' || s.length % 2)
				throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
			return s.toLowerCase();
		})
	);
	var CODERS = {
		utf8,
		hex,
		base16,
		base32,
		base64,
		base64url,
		base58,
		base58xmr
	};
	var coderTypeError = `Invalid encoding type. Available types: ${Object.keys(CODERS).join(', ')}`;

	// node_modules/nostr-tools/lib/esm/nip19.js
	var utf8Decoder2 = new TextDecoder('utf-8');
	var utf8Encoder2 = new TextEncoder();
	var Bech32MaxSize = 5e3;
	function npubEncode(hex2) {
		return encodeBytes('npub', hexToBytes2(hex2));
	}
	function encodeBech32(prefix, data) {
		let words = bech32.toWords(data);
		return bech32.encode(prefix, words, Bech32MaxSize);
	}
	function encodeBytes(prefix, bytes3) {
		return encodeBech32(prefix, bytes3);
	}
	function nprofileEncode(profile) {
		let data = encodeTLV({
			0: [hexToBytes2(profile.pubkey)],
			1: (profile.relays || []).map((url) => utf8Encoder2.encode(url))
		});
		return encodeBech32('nprofile', data);
	}
	function encodeTLV(tlv) {
		let entries = [];
		Object.entries(tlv)
			.reverse()
			.forEach(([t, vs]) => {
				vs.forEach((v) => {
					let entry = new Uint8Array(v.length + 2);
					entry.set([parseInt(t)], 0);
					entry.set([v.length], 1);
					entry.set(v, 2);
					entries.push(entry);
				});
			});
		return concatBytes3(...entries);
	}

	// extension/popup.jsx
	var import_react = __toESM(require_react());
	var import_react_qr_code = __toESM(require_lib());
	function Popup() {
		let [pubKey, setPubKey] = (0, import_react.useState)('');
		let keys = (0, import_react.useRef)([]);
		(0, import_react.useEffect)(() => {
			import_webextension_polyfill.default.storage.local.get(['private_key', 'relays']).then((results) => {
				if (results.private_key) {
					let hexKey = getPublicKey(results.private_key);
					let npubKey = npubEncode(hexKey);
					setPubKey(npubKey);
					keys.current.push(npubKey);
					keys.current.push(hexKey);
					if (results.relays) {
						let relaysList = [];
						for (let url in results.relays) {
							if (results.relays[url].write) {
								relaysList.push(url);
								if (relaysList.length >= 3) break;
							}
						}
						if (relaysList.length) {
							let nprofileKey = nprofileEncode({
								pubkey: hexKey,
								relays: relaysList
							});
							keys.current.push(nprofileKey);
						}
					}
				} else {
					setPubKey(null);
				}
			});
		}, []);
		return /* @__PURE__ */ import_react.default.createElement(
			'div',
			{
				style: {marginBottom: '5px'}
			},
			/* @__PURE__ */ import_react.default.createElement('h2', null, 'nos2x'),
			pubKey === null
				? /* @__PURE__ */ import_react.default.createElement(
						'div',
						null,
						/* @__PURE__ */ import_react.default.createElement(
							'button',
							{
								onClick: openOptionsButton
							},
							'start here'
						)
					)
				: /* @__PURE__ */ import_react.default.createElement(
						import_react.default.Fragment,
						null,
						/* @__PURE__ */ import_react.default.createElement(
							'p',
							null,
							/* @__PURE__ */ import_react.default.createElement(
								'a',
								{
									onClick: toggleKeyType
								},
								'\u21A9\uFE0F'
							),
							' your public key:'
						),
						/* @__PURE__ */ import_react.default.createElement(
							'pre',
							{
								style: {
									whiteSpace: 'pre-wrap',
									wordBreak: 'break-all',
									width: '200px'
								}
							},
							/* @__PURE__ */ import_react.default.createElement('code', null, pubKey)
						),
						/* @__PURE__ */ import_react.default.createElement(
							'div',
							{
								style: {
									height: 'auto',
									maxWidth: 256,
									width: '100%'
								}
							},
							/* @__PURE__ */ import_react.default.createElement(import_react_qr_code.default, {
								size: 256,
								style: {height: 'auto', maxWidth: '100%', width: '100%'},
								value: pubKey.startsWith('n') ? pubKey.toUpperCase() : pubKey,
								viewBox: `0 0 256 256`
							})
						)
					)
		);
		async function openOptionsButton() {
			if (import_webextension_polyfill.default.runtime.openOptionsPage) {
				import_webextension_polyfill.default.runtime.openOptionsPage();
			} else {
				self.open(import_webextension_polyfill.default.runtime.getURL('options.html'));
			}
		}
		function toggleKeyType(e) {
			e.preventDefault();
			let nextKeyType = keys.current[(keys.current.indexOf(pubKey) + 1) % keys.current.length];
			setPubKey(nextKeyType);
		}
	}
	(0, import_react_dom.render)(
		/* @__PURE__ */ import_react.default.createElement(Popup, null),
		document.getElementById('main')
	);
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
