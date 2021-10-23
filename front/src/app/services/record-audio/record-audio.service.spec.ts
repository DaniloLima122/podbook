import { TestBed } from '@angular/core/testing';

import { RecordAudioService } from './record-audio.service';

describe('RecordiAudioService', () => {
  let service: RecordAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaRecorder]
    });
    service = TestBed.inject(RecordAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
