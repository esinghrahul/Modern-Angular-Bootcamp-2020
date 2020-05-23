import { Component, OnInit } from '@angular/core';
import { PhotoFetcherService } from '../photo-fetcher.service'

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
   imageUrl : string;

  constructor( private photoFetcher: PhotoFetcherService) {
    this.imageRefresh();
   }

  imageRefresh() {
    this.photoFetcher.getPhoto().subscribe(photo => {
      this.imageUrl = photo;
    });
  }
  ngOnInit() {
  }

}
