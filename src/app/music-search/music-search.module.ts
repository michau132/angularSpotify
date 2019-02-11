import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routerModule } from './music-search.routing';
import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumCardComponent } from './album-card.component';
import { MusicSearchService } from './music-search.service';
import { AlbumSearchComponent } from './album-search.component';
import { AlbumDetailsComponent } from './album-details.component';
import { MusicSharedModule } from '../music-shared/music-shared.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MusicSharedModule,
    routerModule
  ],
  declarations: [
    MusicSearchComponent,
    AlbumListComponent,
    AlbumCardComponent,
    AlbumSearchComponent,
    AlbumDetailsComponent
  ],
  exports: [
    MusicSearchComponent
  ],
  providers: [MusicSearchService]
})
export class MusicSearchModule { }
