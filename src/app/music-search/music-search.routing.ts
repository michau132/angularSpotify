import {RouterModule, Routes} from '@angular/router'
import { MusicSearchComponent } from './music-search.component';
import { AlbumDetailsComponent } from './album-details.component';

const routes: Routes = [
  {path: 'music', component: MusicSearchComponent},
  {path: 'music/albums/:id', component: AlbumDetailsComponent},
]

export const routerModule= RouterModule.forChild(routes)