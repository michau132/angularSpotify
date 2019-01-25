import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {MusicSearchService} from './music-search.service'
import {filter, distinctUntilChanged, debounceTime} from 'rxjs/operators'

@Component({
  selector: 'album-search',
  template: `
    <form  class="full-width" [formGroup]="searchForm">
      <div class="input-group justify-between">
        <input type="text" class="form-control" formControlName="query" />
      </div>
    </form>

  `,
  styles: [`
    .full-width {
      width: 100%;
    }
  `]
})
export class AlbumSearchComponent implements OnInit {
  searchForm: FormGroup
  save(query) {
    this.musicService.search(query)
  }
  constructor(private musicService: MusicSearchService) {
      this.searchForm = new FormGroup({
        'query': new FormControl('Batman')
      })
      this.searchForm.get('query').valueChanges
        .pipe(
          filter(query => query.length >= 3),
          distinctUntilChanged(),
          debounceTime(400)
        )
        .subscribe(query =>
          this.musicService.search(query))
   }

  ngOnInit() {
    const {query} =this.searchForm.value
    this.musicService.search(query)
  }

}
