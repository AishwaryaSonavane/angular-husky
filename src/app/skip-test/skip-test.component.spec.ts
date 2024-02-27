import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipTestComponent } from './skip-test.component';

describe('SkipTestComponent', () => {
  let component: SkipTestComponent;
  let fixture: ComponentFixture<SkipTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
