import { Component, OnInit } from '@angular/core';
import {MusicSearchService} from './music-search.service';

@Component({
  selector: 'album-list',
  template: `
    <div class="row justify-content-between">
     <album-card [routerLink]="['albums', album.id]" [album]="album" class="col mt-4" *ngFor="let album of albums"></album-card>
    </div>
  `,
  styles: []
})
export class AlbumListComponent implements OnInit {

  albums = [];

  constructor(private musicService: MusicSearchService) { }

  ngOnInit() {
    this.musicService.getAlbumsStream().subscribe((data: any) => {
      this.albums = data;
    });
  }

}
