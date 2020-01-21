import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonapiComponent } from './pokemonapi.component';

describe('PokemonapiComponent', () => {
  let component: PokemonapiComponent;
  let fixture: ComponentFixture<PokemonapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
