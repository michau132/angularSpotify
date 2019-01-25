import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MusicSearchModule } from './music-search/music-search.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { rootModule } from './app.routing';

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
    rootModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
