import {DebugElement} from "@angular/core";
import { ComponentFixture, TestBed} from "@angular/core/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { By } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthService} from "src/app/services/auth.service";
import { LoginComponent } from "./login.component";

let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let debugElement: DebugElement;

const numberOfInputs: number = 2;

const FakeAuth: Pick<AuthService, keyof AuthService> = {
  get isAuth(): string {
    return "true";
  }, logout(): void {
  }, ngOnInit(): void {
  },
  login(): void {}
};

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [LoginComponent],
    imports: [
      MatSnackBarModule,
      MatFormFieldModule,
      MatInputModule,
      BrowserAnimationsModule,
      MatCardModule,
      ReactiveFormsModule
    ],
  }).compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(LoginComponent);
  debugElement = fixture.debugElement;
  component = fixture.componentInstance;
  fixture.detectChanges();
})

it("the number of elements rendered in UI is equal to the form controls defined in the reactive form", () => {
  const formElement = debugElement.query(By.css('[test-id="form"]'));
  const inputElements = formElement.queryAll(By.css('input'))
  expect(inputElements.length).toBe(numberOfInputs);
})
