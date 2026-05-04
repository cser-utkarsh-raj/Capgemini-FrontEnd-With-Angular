import {
  By,
  Counter,
  init_counter,
  init_platform_browser
} from "./chunk-Y34FISCA.js";
import "./chunk-NUQZUD25.js";
import "./chunk-2AGNKRS2.js";
import "./chunk-QEAO3CVZ.js";
import "./chunk-K5AHH6XC.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-CB3OSL4S.js";

// src/app/counter/counter.spec.ts
var require_counter_spec = __commonJS({
  "src/app/counter/counter.spec.ts"(exports) {
    init_testing();
    init_counter();
    init_platform_browser();
    describe("Counter", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Counter]
        }).compileComponents();
        fixture = TestBed.createComponent(Counter);
        component = fixture.componentInstance;
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should increase the count", () => {
        let h3 = fixture.debugElement.query(By.css("h3"));
        let button = fixture.debugElement.queryAll(By.css("button"));
        button[0].triggerEventHandler("click");
        expect(component.c.count).toEqual(1);
        fixture.detectChanges();
        expect(h3.nativeElement.textContent).toContain("1");
      });
      it("should decrease the count", () => {
        let button = fixture.debugElement.queryAll(By.css("button"));
        button[1].triggerEventHandler("click");
        expect(component.c.count).toEqual(-1);
      });
      it("should reset the count when its clicked", () => {
        let button = fixture.debugElement.queryAll(By.css("button"));
        button[0].triggerEventHandler("click");
        button[0].triggerEventHandler("click");
        button[1].triggerEventHandler("click");
        button[2].triggerEventHandler("click");
        expect(component.c.count).toEqual(0);
      });
    });
  }
});
export default require_counter_spec();
//# sourceMappingURL=spec-app-counter-counter.spec.js.map
