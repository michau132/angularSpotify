import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <h3>
          <a routerLink="/" routerLinkActive="active" class="navbar-brand">Strona główna</a>
        </h3>
        <ul class="nav navbar-nav float-xs-right">
          <li class="nav-item">
            <a routerLink="/music" routerLinkActive="active" class="nav-link">Szukaj muzyki</a>
          </li>
          <li class="nav-item">
            <a routerLink="/playlists" routerLinkActive="active" class="nav-link">Twoje playlisty</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
