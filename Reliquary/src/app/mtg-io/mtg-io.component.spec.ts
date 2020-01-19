import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgIOComponent } from './mtg-io.component';

describe('MtgIOComponent', () => {
  let component: MtgIOComponent;
  let fixture: ComponentFixture<MtgIOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtgIOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtgIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
