import {
  Counter,
  init_counter
} from "./chunk-NUQZUD25.js";
import {
  EVENT_MANAGER_PLUGINS,
  EventManagerPlugin,
  init_common,
  init_dom_renderer_chunk
} from "./chunk-QEAO3CVZ.js";
import {
  getDOM
} from "./chunk-K5AHH6XC.js";
import {
  Component,
  Console,
  DOCUMENT,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  Optional,
  RuntimeError,
  SecurityContext,
  XSS_SECURITY_URL,
  __esm,
  _sanitizeHtml,
  _sanitizeUrl,
  allowSanitizationBypassAndThrow,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  forwardRef,
  init_core,
  inject,
  setClassMetadata,
  unwrapSafeValue,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵinject,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CB3OSL4S.js";

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
function elementMatches(n, selector) {
  if (getDOM().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }
  return false;
}
var Meta, META_KEYS_MAP, Title, By, EVENT_NAMES, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerGesturesPlugin, HammerModule, DomSanitizer, DomSanitizerImpl, HydrationFeatureKind;
var init_platform_browser = __esm({
  "node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dom_renderer_chunk();
    /**
     * @license Angular v21.2.8
     * (c) 2010-2026 Google LLC. https://angular.dev/
     * License: MIT
     */
    Meta = class _Meta {
      _doc;
      _dom;
      constructor(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
      }
      addTag(tag, forceCreation = false) {
        if (!tag) return null;
        return this._getOrCreateElement(tag, forceCreation);
      }
      addTags(tags, forceCreation = false) {
        if (!tags) return [];
        return tags.reduce((result, tag) => {
          if (tag) {
            result.push(this._getOrCreateElement(tag, forceCreation));
          }
          return result;
        }, []);
      }
      getTag(attrSelector) {
        if (!attrSelector) return null;
        return this._doc.querySelector(`meta[${attrSelector}]`) || null;
      }
      getTags(attrSelector) {
        if (!attrSelector) return [];
        const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
        return list ? [].slice.call(list) : [];
      }
      updateTag(tag, selector) {
        if (!tag) return null;
        selector = selector || this._parseSelector(tag);
        const meta = this.getTag(selector);
        if (meta) {
          return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
      }
      removeTag(attrSelector) {
        this.removeTagElement(this.getTag(attrSelector));
      }
      removeTagElement(meta) {
        if (meta) {
          this._dom.remove(meta);
        }
      }
      _getOrCreateElement(meta, forceCreation = false) {
        if (!forceCreation) {
          const selector = this._parseSelector(meta);
          const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
          if (elem !== void 0) return elem;
        }
        const element = this._dom.createElement("meta");
        this._setMetaElementAttributes(meta, element);
        const head = this._doc.getElementsByTagName("head")[0];
        head.appendChild(element);
        return element;
      }
      _setMetaElementAttributes(tag, el) {
        Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
        return el;
      }
      _parseSelector(tag) {
        const attr = tag.name ? "name" : "property";
        return `${attr}="${tag[attr]}"`;
      }
      _containsAttributes(tag, elem) {
        return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
      }
      _getMetaKeyMap(prop) {
        return META_KEYS_MAP[prop] || prop;
      }
      static \u0275fac = function Meta_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Meta)(\u0275\u0275inject(DOCUMENT));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _Meta,
        factory: _Meta.\u0275fac,
        providedIn: "root"
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Meta, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{
        type: void 0,
        decorators: [{
          type: Inject,
          args: [DOCUMENT]
        }]
      }], null);
    })();
    META_KEYS_MAP = {
      httpEquiv: "http-equiv"
    };
    Title = class _Title {
      _doc;
      constructor(_doc) {
        this._doc = _doc;
      }
      getTitle() {
        return this._doc.title;
      }
      setTitle(newTitle) {
        this._doc.title = newTitle || "";
      }
      static \u0275fac = function Title_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Title)(\u0275\u0275inject(DOCUMENT));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _Title,
        factory: _Title.\u0275fac,
        providedIn: "root"
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Title, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{
        type: void 0,
        decorators: [{
          type: Inject,
          args: [DOCUMENT]
        }]
      }], null);
    })();
    By = class {
      static all() {
        return () => true;
      }
      static css(selector) {
        return (debugElement) => {
          return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
        };
      }
      static directive(type) {
        return (debugNode) => debugNode.providerTokens.indexOf(type) !== -1;
      }
    };
    EVENT_NAMES = {
      "pan": true,
      "panstart": true,
      "panmove": true,
      "panend": true,
      "pancancel": true,
      "panleft": true,
      "panright": true,
      "panup": true,
      "pandown": true,
      "pinch": true,
      "pinchstart": true,
      "pinchmove": true,
      "pinchend": true,
      "pinchcancel": true,
      "pinchin": true,
      "pinchout": true,
      "press": true,
      "pressup": true,
      "rotate": true,
      "rotatestart": true,
      "rotatemove": true,
      "rotateend": true,
      "rotatecancel": true,
      "swipe": true,
      "swipeleft": true,
      "swiperight": true,
      "swipeup": true,
      "swipedown": true,
      "tap": true,
      "doubletap": true
    };
    HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
    HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
    HammerGestureConfig = class _HammerGestureConfig {
      events = [];
      overrides = {};
      options;
      buildHammer(element) {
        const mc = new Hammer(element, this.options);
        mc.get("pinch").set({
          enable: true
        });
        mc.get("rotate").set({
          enable: true
        });
        for (const eventName in this.overrides) {
          mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
      }
      static \u0275fac = function HammerGestureConfig_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HammerGestureConfig)();
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _HammerGestureConfig,
        factory: _HammerGestureConfig.\u0275fac
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGestureConfig, [{
        type: Injectable
      }], null, null);
    })();
    HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
      _config;
      _injector;
      loader;
      _loaderPromise = null;
      constructor(doc, _config, _injector, loader) {
        super(doc);
        this._config = _config;
        this._injector = _injector;
        this.loader = loader;
      }
      supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
          return false;
        }
        if (!window.Hammer && !this.loader) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            const _console = this._injector.get(Console);
            _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
          }
          return false;
        }
        return true;
      }
      addEventListener(element, eventName, handler) {
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        if (!window.Hammer && this.loader) {
          this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
          let cancelRegistration = false;
          let deregister = () => {
            cancelRegistration = true;
          };
          zone.runOutsideAngular(() => this._loaderPromise.then(() => {
            if (!window.Hammer) {
              if (typeof ngDevMode === "undefined" || ngDevMode) {
                const _console = this._injector.get(Console);
                _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
              }
              deregister = () => {
              };
              return;
            }
            if (!cancelRegistration) {
              deregister = this.addEventListener(element, eventName, handler);
            }
          }).catch(() => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              const _console = this._injector.get(Console);
              _console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
            }
            deregister = () => {
            };
          }));
          return () => {
            deregister();
          };
        }
        return zone.runOutsideAngular(() => {
          const mc = this._config.buildHammer(element);
          const callback = function(eventObj) {
            zone.runGuarded(function() {
              handler(eventObj);
            });
          };
          mc.on(eventName, callback);
          return () => {
            mc.off(eventName, callback);
            if (typeof mc.destroy === "function") {
              mc.destroy();
            }
          };
        });
      }
      isCustomEvent(eventName) {
        return this._config.events.indexOf(eventName) > -1;
      }
      static \u0275fac = function HammerGesturesPlugin_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HammerGesturesPlugin)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(HAMMER_GESTURE_CONFIG), \u0275\u0275inject(Injector), \u0275\u0275inject(HAMMER_LOADER, 8));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _HammerGesturesPlugin,
        factory: _HammerGesturesPlugin.\u0275fac
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGesturesPlugin, [{
        type: Injectable
      }], () => [{
        type: void 0,
        decorators: [{
          type: Inject,
          args: [DOCUMENT]
        }]
      }, {
        type: HammerGestureConfig,
        decorators: [{
          type: Inject,
          args: [HAMMER_GESTURE_CONFIG]
        }]
      }, {
        type: Injector
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [HAMMER_LOADER]
        }]
      }], null);
    })();
    HammerModule = class _HammerModule {
      static \u0275fac = function HammerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HammerModule)();
      };
      static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
        type: _HammerModule
      });
      static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
        providers: [{
          provide: EVENT_MANAGER_PLUGINS,
          useClass: HammerGesturesPlugin,
          multi: true,
          deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
        }, {
          provide: HAMMER_GESTURE_CONFIG,
          useClass: HammerGestureConfig
        }]
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerModule, [{
        type: NgModule,
        args: [{
          providers: [{
            provide: EVENT_MANAGER_PLUGINS,
            useClass: HammerGesturesPlugin,
            multi: true,
            deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
          }, {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerGestureConfig
          }]
        }]
      }], null, null);
    })();
    DomSanitizer = class _DomSanitizer {
      static \u0275fac = function DomSanitizer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DomSanitizer)();
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _DomSanitizer,
        factory: function DomSanitizer_Factory(__ngFactoryType__) {
          let __ngConditionalFactory__ = null;
          if (__ngFactoryType__) {
            __ngConditionalFactory__ = new (__ngFactoryType__ || _DomSanitizer)();
          } else {
            __ngConditionalFactory__ = \u0275\u0275inject(DomSanitizerImpl);
          }
          return __ngConditionalFactory__;
        },
        providedIn: "root"
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizer, [{
        type: Injectable,
        args: [{
          providedIn: "root",
          useExisting: forwardRef(() => DomSanitizerImpl)
        }]
      }], null, null);
    })();
    DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
      _doc;
      constructor(_doc) {
        super();
        this._doc = _doc;
      }
      sanitize(ctx, value) {
        if (value == null) return null;
        switch (ctx) {
          case SecurityContext.NONE:
            return value;
          case SecurityContext.HTML:
            if (allowSanitizationBypassAndThrow(value, "HTML")) {
              return unwrapSafeValue(value);
            }
            return _sanitizeHtml(this._doc, String(value)).toString();
          case SecurityContext.STYLE:
            if (allowSanitizationBypassAndThrow(value, "Style")) {
              return unwrapSafeValue(value);
            }
            return value;
          case SecurityContext.SCRIPT:
            if (allowSanitizationBypassAndThrow(value, "Script")) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
          case SecurityContext.URL:
            if (allowSanitizationBypassAndThrow(value, "URL")) {
              return unwrapSafeValue(value);
            }
            return _sanitizeUrl(String(value));
          case SecurityContext.RESOURCE_URL:
            if (allowSanitizationBypassAndThrow(value, "ResourceURL")) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
          default:
            throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
        }
      }
      bypassSecurityTrustHtml(value) {
        return bypassSanitizationTrustHtml(value);
      }
      bypassSecurityTrustStyle(value) {
        return bypassSanitizationTrustStyle(value);
      }
      bypassSecurityTrustScript(value) {
        return bypassSanitizationTrustScript(value);
      }
      bypassSecurityTrustUrl(value) {
        return bypassSanitizationTrustUrl(value);
      }
      bypassSecurityTrustResourceUrl(value) {
        return bypassSanitizationTrustResourceUrl(value);
      }
      static \u0275fac = function DomSanitizerImpl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DomSanitizerImpl)(\u0275\u0275inject(DOCUMENT));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
        token: _DomSanitizerImpl,
        factory: _DomSanitizerImpl.\u0275fac,
        providedIn: "root"
      });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizerImpl, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{
        type: void 0,
        decorators: [{
          type: Inject,
          args: [DOCUMENT]
        }]
      }], null);
    })();
    (function(HydrationFeatureKind2) {
      HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
      HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
      HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
      HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
      HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
    })(HydrationFeatureKind || (HydrationFeatureKind = {}));
  }
});

// src/app/counter/counter.ts
var Counter2;
var init_counter2 = __esm({
  "src/app/counter/counter.ts"() {
    "use strict";
    init_core();
    init_counter();
    init_core();
    Counter2 = class _Counter {
      c = inject(Counter);
      static \u0275fac = function Counter_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Counter)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Counter, selectors: [["app-counter"]], decls: 10, vars: 1, consts: [[3, "click"]], template: function Counter_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "p");
          \u0275\u0275text(1, "counter works!");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(2, "h3");
          \u0275\u0275text(3);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(4, "button", 0);
          \u0275\u0275domListener("click", function Counter_Template_button_click_4_listener() {
            return ctx.c.incrementCount();
          });
          \u0275\u0275text(5, "+");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(6, "button", 0);
          \u0275\u0275domListener("click", function Counter_Template_button_click_6_listener() {
            return ctx.c.decrementCount();
          });
          \u0275\u0275text(7, "-");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(8, "button", 0);
          \u0275\u0275domListener("click", function Counter_Template_button_click_8_listener() {
            return ctx.c.resetCount();
          });
          \u0275\u0275text(9, "reset");
          \u0275\u0275domElementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate(ctx.c.count);
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Counter2, [{
        type: Component,
        args: [{ selector: "app-counter", imports: [], template: '<p>counter works!</p>\n<h3>{{c.count}}</h3>\n<button (click)="c.incrementCount()">+</button>\n\n<button (click)="c.decrementCount()">-</button>\n\n<button (click)="c.resetCount()">reset</button>\n\n' }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Counter2, { className: "Counter", filePath: "counter/counter.ts", lineNumber: 10 });
    })();
  }
});

export {
  Title,
  By,
  init_platform_browser,
  Counter2 as Counter,
  init_counter2 as init_counter
};
//# sourceMappingURL=chunk-Y34FISCA.js.map
