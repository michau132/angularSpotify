import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service';


@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
  providers: [
    // PlaylistsService,
    // { provide: 'PlaylistsData', useValue: playlistsData },
  ]
})
export class PlaylistsComponent implements OnInit {

  constructor(private playlists:PlaylistsService) {

  }
  ngOnInit() {
    this.playlists.getPlaylists();
  }
}
