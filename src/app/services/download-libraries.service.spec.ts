import { TestBed } from '@angular/core/testing';

import { DownloadLibrariesService } from './downloadLibraries.service';

describe('DownloadLibrariesService', () => {
  let service: DownloadLibrariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadLibrariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
