import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {path: '**',redirectTo: 'music'},
]

export const rootModule= RouterModule.forRoot(routes, {
  //useHash: true,
})