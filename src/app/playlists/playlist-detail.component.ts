import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PlaylistsService, Playlist } from './playlists.service';
@Component({
  selector: 'playlist-detail',
  template: `
    <div *ngIf="!playlist">
      <p>Wbierz playliste!</p>
    </div>
    <div *ngIf="playlist">
      <p class="card-text">{{playlist.name}}</p>
      <track-list [tracks]="playlist.tracks"></track-list>
      <div class="form-group">
        <button class="btn btn-success float-xs-right" (click)="edit(playlist)">Edytuj</button>
      </div>
    </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  playlist;

  edit(playlist) {
    this.router.navigate(['playlists', playlist.id, 'edit']);
  }

  constructor(private route: ActivatedRoute,
              private playListService: PlaylistsService,
              private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const {id} = params;
      if (id) {
        this.playListService.getSinglePlaylist(id)
          .subscribe(playlist => {
            this.playlist = playlist;
          });
      }
    });
  }

}
