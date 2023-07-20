import { TestBed } from '@angular/core/testing';

import { UserLogueadoService } from './user-logueado.service';

describe('UserLogueadoService', () => {
  let service: UserLogueadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLogueadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
