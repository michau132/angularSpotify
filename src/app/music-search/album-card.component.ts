import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'album-card',
  template: `
    <div class="card">
      <img class="card-img-top img-fluid" [src]="image.url">
      <div class="card-img-overlay">
        <h5 class="card-title">{{album.name}}</h5>
      </div>
    </div>
  `,
  styles: [`
    :host(){
      flex: 0 0 31%;
      overflow:hidden;
    }

    :host():hover .card-img-overlay{
      top: 100%;
    }
    
    .card-img-overlay{
      background: rgba(0,0,0,0.8);
      top:70%;
      color: #fff;
      font-size: 1em !important;
      transition: .2s top ease-out;
    }
  `]
})
export class AlbumCardComponent implements OnInit {

  @Input('album')
  set setAlbum(album){
    this.album = album;
    this.image = album.images[0]
  }

  album

  image

  constructor() { }

  ngOnInit() {
  }

}
