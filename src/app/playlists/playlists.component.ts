import { Component, OnInit } from '@angular/core';


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

  constructor() {

  }
  ngOnInit() {
  }
}
