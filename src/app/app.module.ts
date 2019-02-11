import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MusicSearchModule } from './music-search/music-search.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { rootModule } from './app.routing';

import { PlaylistsService } from './playlists/playlists.service';
import { MusicSharedModule } from './music-shared/music-shared.module';
import { PlaylistSelectionService } from './music-shared/playlist-selection.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MusicSearchModule,
    PlaylistsModule,
    NavBarModule,
    MusicSharedModule,
    rootModule,
  ],
  providers: [
    PlaylistsService,
    PlaylistSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
