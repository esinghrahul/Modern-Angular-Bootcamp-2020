import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface PhotoResponse{
  urls:{
    regular: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class PhotoFetcherService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<PhotoResponse> ('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID ZSfRssO3PL1MoFn2eXWuPqXSSRr-af7U_ZY_lGB6n3g',
      },
    }).pipe(pluck('urls','regular'));
  }
}
