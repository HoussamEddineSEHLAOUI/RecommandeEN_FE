import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandeLieuComponent } from './recommande-lieu.component';

describe('RecommandeLieuComponent', () => {
  let component: RecommandeLieuComponent;
  let fixture: ComponentFixture<RecommandeLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommandeLieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandeLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
