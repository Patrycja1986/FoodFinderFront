import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryComponentComponent } from './photo-gallery-component.component';

describe('PhotoGalleryComponentComponent', () => {
  let component: PhotoGalleryComponentComponent;
  let fixture: ComponentFixture<PhotoGalleryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGalleryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
