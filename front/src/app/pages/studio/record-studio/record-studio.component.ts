import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AudioControlService } from '@services/audio-control/audio-control.service';
import { RecordAudioService } from '@services/record-audio/record-audio.service';
import { recordingStatusStratergy } from '@stratergy/StudioPage/studioStratergy';
import { RecordedAudio, RecordingStatus, Studio } from '../types/studioPage';


@Component({
  selector: 'pod-record-studio',
  templateUrl: './record-studio.component.html',
  styleUrls: ['./record-studio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecordStudioComponent implements Studio, OnDestroy {

  recordingStatus = RecordingStatus.STOPPED;

  private recorder!: Promise<any>;

  alert: { message: string, type: 'error' | 'warning' | 'success' | '' } = { message: '', type: '' }

  constructor(
    private recordingService: RecordAudioService,
    private audioControlService: AudioControlService) {
  }

  toggleRecordingStatus() {

    this.recordingStatus == RecordingStatus.STOPPED
      ? this.startRecordingAudio()
      : this.stopRecordingAudio();
  }

  async startRecordingAudio() {

    try {
      this.recorder = this.recordingService.recordAudio()

      this.recordingStatus = RecordingStatus.RECORDING;

      const { start } = await this.recorder;

      start();

      this.alert = { type: 'success', message: 'recording started' }

      setTimeout(() => this.alert = { message: '', type: '' }, 4000);

    } catch (error: any) {
      this.recordingStatus = RecordingStatus.STOPPED;
      this.alert = { type: 'error', message: error.message }
      console.log(this.alert)
    }

  }

  async stopRecordingAudio() {

    try {

      this.recordingStatus = RecordingStatus.STOPPED;

      const { stop } = await this.recorder;

      const getRecordedAudio = (recordedAudio: RecordedAudio) => {

        this.audioControlService.audioData.next(recordedAudio);
      }

      await stop(getRecordedAudio);

    } catch (error) {
      console.log(error)
    }


  }

  getRecordingStatusClass() {
    return recordingStatusStratergy[this.recordingStatus];
  }


  call(text: string) {

    return () => console.log(text)
  }

  ngOnDestroy(){
    this.stopRecordingAudio();
    this.audioControlService.closeAudioBar();
  }

}
