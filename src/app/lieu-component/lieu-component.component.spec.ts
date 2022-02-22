import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuComponentComponent } from './lieu-component.component';

describe('LieuComponentComponent', () => {
  let component: LieuComponentComponent;
  let fixture: ComponentFixture<LieuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieuComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
