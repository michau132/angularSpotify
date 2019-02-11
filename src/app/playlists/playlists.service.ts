import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {startWith, tap} from 'rxjs/operators';

export interface Playlist {
  name: string;
  tracks: any[];
  color: string;
  favourite: boolean;
}

@Injectable()
export class PlaylistsService {

  constructor(private http: HttpClient) {

  }
  serverUrl = 'http://localhost:3000/playlists/';
  playlists = [];
  playlistsStream = new Subject <Playlist[]>();

  savePlaylist(playlist: Playlist) {
    let request;
    if (playlist['id']) {
      request = this.http.put(this.serverUrl + playlist['id'], playlist);
    } else {
      playlist['id'] = Date.now();
      this.playlists.push(playlist);
      request = this.http.post(this.serverUrl, playlist);
    }
    return request.pipe(tap(() => this.getPlaylists()));
  }

  createPlaylist(): Playlist {
    return {
      name: '',
      tracks: [],
      color: '#FF0000',
      favourite: false
    };
  }

  getPlaylistStream() {
    if (!this.playlists.length) {
      this.getPlaylists();
    }
    return this.playlistsStream.pipe(startWith(this.playlists));
  }

  getPlaylists() {
    return this.http.get(this.serverUrl).subscribe((playlist: Playlist[]) => {
      this.playlists = playlist;
      this.playlistsStream.next(playlist);
    });
  }

  getSinglePlaylist(id) {
    return this.http.get(this.serverUrl + id);
  }

  addToPlaylist(playlistId, track) {
    console.log(playlistId, 'id');
    console.log(track, 'track');
    const playlist = this.playlists.find(elem => elem.id === parseInt(playlistId, 10));
    console.log(this.playlists);
    playlist.tracks.push(track);
    this.savePlaylist(playlist)
      .subscribe(() => {});
  }
}
