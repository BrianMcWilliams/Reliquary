import { TestBed } from '@angular/core/testing';

import { TcgplayerService } from './tcgplayer.service';

describe('TcgplayerService', () => {
  let service: TcgplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcgplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
