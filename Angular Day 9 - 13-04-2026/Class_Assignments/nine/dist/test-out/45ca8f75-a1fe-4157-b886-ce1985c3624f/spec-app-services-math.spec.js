import {
  Injectable,
  TestBed,
  init_core,
  init_testing,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CB3OSL4S.js";

// src/app/services/math.spec.ts
init_testing();

// src/app/services/math.ts
init_core();
init_core();
var Math = class _Math {
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
  mult(a, b) {
    return a * b;
  }
  div(a, b) {
    return a / b;
  }
  static \u0275fac = function Math_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Math)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Math, factory: _Math.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Math, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/math.spec.ts
describe("Math", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Math]
    });
    service = TestBed.inject(Math);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should subtract 2 numbers", () => {
    let res = service.sub(10, 20);
    expect(res).toEqual(-10);
  });
  it("should multiply 2 numbers", () => {
    let res = service.mult(10, 20);
    expect(res).toEqual(200);
  });
  it("should divide 2 numbers", () => {
    let res = service.div(10, 10);
    expect(res).toEqual(1);
  });
  it("should add 2 numbers", () => {
    let res = service.add(10, 20);
    expect(res).toEqual(30);
  });
});
//# sourceMappingURL=spec-app-services-math.spec.js.map
