import {
  Injectable,
  __esm,
  init_core,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CB3OSL4S.js";

// src/app/services/counter.ts
var Counter;
var init_counter = __esm({
  "src/app/services/counter.ts"() {
    "use strict";
    init_core();
    init_core();
    Counter = class _Counter {
      count = 0;
      incrementCount() {
        this.count += 1;
      }
      decrementCount() {
        this.count -= 1;
      }
      resetCount() {
        this.count = 0;
      }
      static \u0275fac = function Counter_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Counter)();
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Counter, factory: _Counter.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Counter, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
  }
});

export {
  Counter,
  init_counter
};
//# sourceMappingURL=chunk-NUQZUD25.js.map
