import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

export interface Playlist {
  id: number;
  name: string;
  tracks: number;
  color: string;
  favourite: string;
}

@Injectable()
export class PlaylistsService {

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/playlists').subscribe((playlist: Playlist[]) => {
      this.playlists = playlist;
      this.playlistsStream.next(playlist)
    })
  }

  playlists = [];
  playlistsStream = new Subject();

  savePlaylist(playlist: Playlist) {
    if (playlist.id) {
      let index = this.playlists.findIndex((old_playlist) => (
        old_playlist.id === playlist.id
      ))
      this.playlists.splice(index, 1, playlist)
    } else {
      playlist.id = Date.now()
      this.playlists.push(playlist);
    }
  }

  createPlaylist() {
    var newPlaylist = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: false
    };
    return Object.assign({}, newPlaylist);
  }

  getPlaylistStream() {
    return this.playlistsStream
  }

  getPlaylists() {
    return this.playlists;
  }

  getSinglePlaylist(id) {
    return this.playlists.find(playlist => playlist.id === parseInt(id))
  }
}
