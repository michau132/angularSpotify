import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistsService, Playlist} from './playlists.service';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'playlist-form',
  template: `
        <form #formRef="ngForm" (ngSubmit)="save(formRef.valid, playlist)">
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" #nameRef="ngModel" name="name" required minlength="3" [(ngModel)]="playlist.name" class="form-control">
            <div *ngIf="nameRef.touched || nameRef.dirty || formRef.submitted">
              <div class="invalid-feedback d-block" *ngIf="nameRef.errors?.required">To pole jest wymagane</div>
              <div class="invalid-feedback d-block" *ngIf="nameRef.errors?.minlength">To pole musi miec przynajmniej {{nameRef.errors.minlength.requiredLength}} znaki</div>
            </div>
          </div>
          <div class="form-group">
            <label>Opis:</label>
            <textarea name="description" maxlength="200" [(ngModel)]="playlist.description" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label>Kolor:</label>
            <input type="color" name="color" [(ngModel)]="playlist.color">
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" name="favourite" [(ngModel)]="playlist.favourite"> 
              Ulubiona
            </label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-xs-right">Zapisz</button>
          </div>
        </form>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  playlist: Playlist;

  save(valid, playlist: Playlist){
    if(valid) {
      this.playListService.savePlaylist(playlist)
      this.router.navigate(['playlists', playlist['id']])
    }
    
  }

  constructor(private route: ActivatedRoute, 
    private playListService: PlaylistsService,
              private router: Router 
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const {id} = params;
      if(id) {
        this.route.params.subscribe(params => {
          const { id } = params;
          this.playListService.getSinglePlaylist(id).subscribe((playlist: Playlist) => {
            this.playlist = playlist;
          })
        })
      } else {
        this.playlist = this.playListService.createPlaylist();
      }
      
    })
  }

}
