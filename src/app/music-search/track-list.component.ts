import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'track-list',
  template: `
    <audio #audio_id controls style="width: 100%"></audio>
    <table class="table table-stripped">
      <thead>
        <tr>
          <td>#</td>
          <td>Nazwa</td>
          <td>Wykonawca</td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let track of tracks" (click)="play(audio_id, track)">
          <td>{{track.track_number}}</td>
          <td>{{track.name}}</td>
          <td>{{track.artists[0].name}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class TrackListComponent implements OnInit {

  @Input() tracks

  play(audioRef, track) {
    if(audioRef.src !== track.preview_url) {
      audioRef.src = track.preview_url
      audioRef.play()
    } else if (audioRef.paused) {
      audioRef.play()
    } else {
      audioRef.pause()
    }
  }

  constructor() { }

  ngOnInit() {
  }


}
