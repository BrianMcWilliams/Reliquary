import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YugiohComponent } from './yugioh.component';

describe('YugiohComponent', () => {
  let component: YugiohComponent;
  let fixture: ComponentFixture<YugiohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YugiohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YugiohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
