import { Injectable } from '@angular/core';
import { PlaylistsService } from '../playlists/playlists.service';
import {Subject} from 'rxjs';

@Injectable()
export class PlaylistSelectionService {
  constructor(private playlistsService: PlaylistsService) {}

  selectedId = 1;
  selectedIdStream = new Subject();

  select(playlistId) {
    this.selectedId = playlistId;
    this.selectedIdStream.next(this.selectedId);
  }

  addToPlaylist(track) {
    console.log(this.selectedId);
    this.playlistsService.addToPlaylist(this.selectedId, track);
  }

  getSelectionStream() {
    return this.selectedIdStream;
  }
}
