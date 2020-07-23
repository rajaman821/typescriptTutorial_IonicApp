import { TestBed } from '@angular/core/testing';

import { DatacesslayerService } from './datacesslayer.service';

describe('DatacesslayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatacesslayerService = TestBed.get(DatacesslayerService);
    expect(service).toBeTruthy();
  });
});
