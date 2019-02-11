import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListSelectorComponent } from './playlist-selector.component';
import { TrackListComponent } from './track-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlayListSelectorComponent,
    TrackListComponent
  ],
  imports: [ CommonModule, FormsModule ],
  exports: [
    PlayListSelectorComponent,
    TrackListComponent
  ],
  providers: [],
})
export class MusicSharedModule {}
