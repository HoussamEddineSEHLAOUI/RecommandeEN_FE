import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeLieuComponent } from './like-lieu.component';

describe('LikeLieuComponent', () => {
  let component: LikeLieuComponent;
  let fixture: ComponentFixture<LikeLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeLieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
