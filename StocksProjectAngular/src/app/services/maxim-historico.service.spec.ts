import { TestBed, inject } from '@angular/core/testing';

import { MaximHistoricoService } from './maxim-historico.service';

describe('MaximHistoricoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaximHistoricoService]
    });
  });

  it('should be created', inject([MaximHistoricoService], (service: MaximHistoricoService) => {
    expect(service).toBeTruthy();
  }));
});
