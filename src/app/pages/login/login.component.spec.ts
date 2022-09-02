import {DebugElement} from "@angular/core";
import { ComponentFixture, TestBed} from "@angular/core/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { By } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthService} from "../../services/auth.service";
import { LoginComponent } from "./login.component";
import SpyInstance = jest.SpyInstance;

let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let debugElement: DebugElement;
let submitSpy: SpyInstance;

const numberOfInputs: number = 2;

const FakeAuth: Pick<AuthService, keyof AuthService> = {
  get isAuth(): string {
    return "true";
  }, logout(): void {
  }, ngOnInit(): void {
  },
  login(): void {}
};

function findEl<T>(
  fixture: ComponentFixture<T>,
  testId: string
): DebugElement {
  return fixture.debugElement.query(
    By.css(`[test-id="${testId}"]`)
  );
}

export function click<T>(
  fixture: ComponentFixture<T>,
  testId: string
): void {
  const element = findEl(fixture, testId);
  const event = makeClickEvent(element.nativeElement);
  element.triggerEventHandler('click', event);
}

export function makeClickEvent(
  target: EventTarget
): Partial<MouseEvent> {
  return {
    preventDefault(): void {},
    stopPropagation(): void {},
    stopImmediatePropagation(): void {},
    type: 'click',
    target,
    currentTarget: target,
    bubbles: true,
    cancelable: true,
    button: 0
  };
}

export function setFieldValue<T>(
  fixture: ComponentFixture<T>,
  testId: string,
  value: string,
): void {
    findEl(fixture, testId).nativeElement.value = value;
}

const fillForm = () => {
  setFieldValue(fixture, "email", "abc@example.com");
  setFieldValue(fixture, "password", "Abc12345!");
}

beforeAll(() => {
  submitSpy = jest.spyOn(LoginComponent.prototype, "onLogin").mockImplementation(() => {});
})

afterEach(() => {
  jest.clearAllMocks();
});

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
    providers: [
      {provide: AuthService, useValue: FakeAuth}
    ]
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

it("initial values is form should be empty", () => {
  const formElement = debugElement.query(By.css('[test-id="form"]'));
  const inputElements = formElement.queryAll(By.css('input'))
  const inputValues = inputElements.map(e => e.nativeElement.value);
  expect(inputValues).toEqual(Array(numberOfInputs).fill(""));
})

it('submits the form successfully', () => {
  fillForm();
  findEl(fixture, 'form').triggerEventHandler('submit', {});
  expect(component.onLogin).toBeCalled();
});

it('can submit form with button click', () => {
  fillForm();
  findEl(fixture, 'submit').triggerEventHandler('click', {});
  expect(component.onLogin).toBeCalled();
})

