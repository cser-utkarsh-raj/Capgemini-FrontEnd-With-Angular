import {
  DOCUMENT,
  Injectable,
  InjectionToken,
  __esm,
  init_core,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CB3OSL4S.js";

// node_modules/@angular/common/fesm2022/_platform_location-chunk.mjs
function getDOM() {
  return _DOM;
}
function setRootDomAdapter(adapter) {
  _DOM ??= adapter;
}
var _DOM, DomAdapter, PlatformLocation, LOCATION_INITIALIZED, BrowserPlatformLocation;
var init_platform_location_chunk = __esm({
  "node_modules/@angular/common/fesm2022/_platform_location-chunk.mjs"() {
    "use strict";
    init_core();
    init_core();
    /**
     * @license Angular v21.2.8
     * (c) 2010-2026 Google LLC. https://angular.dev/
     * License: MIT
     */
    _DOM = null;
    DomAdapter = class {
    };
    PlatformLocation = class _PlatformLocation {
      historyGo(relativePosition) {
        throw new Error(ngDevMode ? "Not implemented" : "");
      }
      static \u0275fac = function PlatformLocation_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _PlatformLocation)();
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _PlatformLocation,
        factory: () => (() => inject(BrowserPlatformLocation))(),
        providedIn: "platform"
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformLocation, [{
        type: Injectable,
        args: [{
          providedIn: "platform",
          useFactory: () => inject(BrowserPlatformLocation)
        }]
      }], null, null);
    })();
    LOCATION_INITIALIZED = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Location Initialized" : "");
    BrowserPlatformLocation = class _BrowserPlatformLocation extends PlatformLocation {
      _location;
      _history;
      _doc = inject(DOCUMENT);
      constructor() {
        super();
        this._location = window.location;
        this._history = window.history;
      }
      getBaseHrefFromDOM() {
        return getDOM().getBaseHref(this._doc);
      }
      onPopState(fn) {
        const window2 = getDOM().getGlobalEventTarget(this._doc, "window");
        window2.addEventListener("popstate", fn, false);
        return () => window2.removeEventListener("popstate", fn);
      }
      onHashChange(fn) {
        const window2 = getDOM().getGlobalEventTarget(this._doc, "window");
        window2.addEventListener("hashchange", fn, false);
        return () => window2.removeEventListener("hashchange", fn);
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(newPath) {
        this._location.pathname = newPath;
      }
      pushState(state, title, url) {
        this._history.pushState(state, title, url);
      }
      replaceState(state, title, url) {
        this._history.replaceState(state, title, url);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(relativePosition = 0) {
        this._history.go(relativePosition);
      }
      getState() {
        return this._history.state;
      }
      static \u0275fac = function BrowserPlatformLocation_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BrowserPlatformLocation)();
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _BrowserPlatformLocation,
        factory: () => (() => new _BrowserPlatformLocation())(),
        providedIn: "platform"
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserPlatformLocation, [{
        type: Injectable,
        args: [{
          providedIn: "platform",
          useFactory: () => new BrowserPlatformLocation()
        }]
      }], () => [], null);
    })();
  }
});

// node_modules/@angular/common/fesm2022/_xhr-chunk.mjs
function parseCookieValue(cookieStr, name) {
  name = encodeURIComponent(name);
  for (const cookie of cookieStr.split(";")) {
    const eqIndex = cookie.indexOf("=");
    const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ""] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
var XhrFactory;
var init_xhr_chunk = __esm({
  "node_modules/@angular/common/fesm2022/_xhr-chunk.mjs"() {
    "use strict";
    /**
     * @license Angular v21.2.8
     * (c) 2010-2026 Google LLC. https://angular.dev/
     * License: MIT
     */
    XhrFactory = class {
    };
  }
});

export {
  getDOM,
  setRootDomAdapter,
  DomAdapter,
  PlatformLocation,
  init_platform_location_chunk,
  parseCookieValue,
  XhrFactory,
  init_xhr_chunk
};
//# sourceMappingURL=chunk-K5AHH6XC.js.map
