import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { PopupComponent } from "./popup/popup.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

fdescribe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      declarations: [AppComponent, PopupComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'codingchallenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("codingchallenge");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".title-header").textContent).toContain(
      "Centene Coding Challenge"
    );
  });
  it("get data for name, dob, id, active", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const name = "test";
    fixture.componentInstance.captureSelectedenroll(name, 2, "", true);
    expect(fixture.componentInstance.name).toBe(name);
  });
});
