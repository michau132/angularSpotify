import { Component, OnInit } from '@angular/core';
import {MusicSearchService} from './music-search.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'album-details',
  template: `
    <div class="container">
      <div class="row" *ngIf="album">
        <div class="col">
          <album-card class="col mt-4" [album]="album"></album-card>
        </div>
        <div class="col">
          <h4 class="display-3 mb-2 float-xs-right">Utwory</h4>
          <track-list [tracks]="album.tracks.items"></track-list>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AlbumDetailsComponent implements OnInit {
  constructor(private musicSearch: MusicSearchService,
              private route: ActivatedRoute
    ) { }
  album;

  ngOnInit() {
    const {id} = this.route.snapshot.params
    this.musicSearch.getAlbum(id).subscribe(response => this.album = response)
  }

}
