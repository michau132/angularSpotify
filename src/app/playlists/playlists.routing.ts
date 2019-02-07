import {RouterModule, Routes} from '@angular/router'
import { PlaylistsComponent } from './playlists.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistFormComponent } from './playlist-form.component';

const routes: Routes = [
  {path: 'playlists', component: PlaylistsComponent, children: [
    { path: '', component: PlaylistDetailComponent},
    { path: 'new', component: PlaylistFormComponent},
    { path: ':id', component: PlaylistDetailComponent},
    { path: ':id/edit', component: PlaylistFormComponent},
  ]},
]

export const routerModule= RouterModule.forChild(routes)