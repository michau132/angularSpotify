import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Subject, } from 'rxjs';

const clientId = '28841880d6b04d9f9d1edda3cb2b436f';
const clientSecret = '660ef8bc764246ff9128ad8e00b08088';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {
  constructor(private http: HttpClient) {
    this.getToken();
  }

  albumsStream = new Subject();
  token = '';

  getAlbumsStream() {
    return from(this.albumsStream);
  }

  getAlbum(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };

    const url = `https://api.spotify.com/v1/albums/${id}`;
    return this.http.get(url, httpOptions);
  }

  getToken(expired?: boolean) {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token && !expired) {
      this.token = token;
      return;
    }

    const myClientInfo = {
      clientID: clientId,
      clientSecret: clientSecret
    };


    const auth = btoa(`${myClientInfo.clientID}:${myClientInfo.clientSecret}`);

    const myAuthHeaders = {
      Accept: 'application/json',
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    const myAuthInit = {
      method: 'POST',
      headers: myAuthHeaders
    };

    const myAuthRequest = new Request('https://accounts.spotify.com/api/token?grant_type=client_credentials', myAuthInit);
    return fetch(myAuthRequest)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        this.token = `${data.token_type} ${data.access_token}`;
        localStorage.setItem('token', JSON.stringify(`${data.token_type} ${data.access_token}`));
      })
      .catch(err => console.log(`Fetch problem: ${err}`));
  }

  search(query: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };

    this.http.get(`https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`, httpOptions)
      .subscribe(
        (response: any) => this.albumsStream.next(response.albums.items),
        () => this.getToken(true).then(() => this.search(query)),
      );

  }
}
