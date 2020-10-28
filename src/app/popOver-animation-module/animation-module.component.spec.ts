import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationModuleComponent } from './animation-module.component';

describe('AnimationModuleComponent', () => {
  let component: AnimationModuleComponent;
  let fixture: ComponentFixture<AnimationModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
