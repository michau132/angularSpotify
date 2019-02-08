import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

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
  playlistsStream = new Subject();

  savePlaylist(playlist: Playlist) {
    if (playlist['id']) {
      this.http.put(this.serverUrl + playlist['id'], playlist).subscribe(() => this.getPlaylists())
    } else {
      playlist['id'] = Date.now();
      this.playlists.push(playlist);
    }
  }

  createPlaylist():Playlist {
    return {
      name: '',
      tracks: [],
      color: '#FF0000',
      favourite: false
    }
  }

  getPlaylistStream() {
    return this.playlistsStream
  }

  getPlaylists() {
    return this.http.get(this.serverUrl).subscribe((playlist: Playlist[]) => {
      this.playlists = playlist;
      this.playlistsStream.next(playlist)
    })
  }

  getSinglePlaylist(id) {
    return this.http.get(this.serverUrl + id)
  }
}
