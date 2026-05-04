import {
  Counter,
  init_counter
} from "./chunk-NUQZUD25.js";
import {
  TestBed,
  init_testing
} from "./chunk-CB3OSL4S.js";

// src/app/services/counter.spec.ts
init_testing();
init_counter();
describe("Counter", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counter);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should increase count", () => {
    service.incrementCount();
    expect(service.count).toEqual(1);
  });
  it("should increase count", () => {
    service.decrementCount();
    expect(service.count).toEqual(-1);
  });
  it("should increase count", () => {
    service.resetCount();
    expect(service.count).toEqual(0);
  });
});
//# sourceMappingURL=spec-app-services-counter.spec.js.map
