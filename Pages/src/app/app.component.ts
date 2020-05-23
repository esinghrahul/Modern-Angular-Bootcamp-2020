import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Playstation Controller',
      url: 'https://images.unsplash.com/photo-1529154691717-3306083d869e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Darts',
      url: 'https://images.unsplash.com/photo-1551485913-b408bde7842c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1039&q=80'
    },
    {
      title: 'Dungeons and Dragons',
      url: 'https://images.unsplash.com/photo-1577721583789-1ffb7b86a280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Chess',
      url: 'https://images.unsplash.com/photo-1559480423-a4c7efb6946a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1022&q=80'
    },
    {
      title: 'Golf',
      url: 'https://images.unsplash.com/photo-1521731736495-67c35dd360af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1034&q=80'
    },
  ];
  checkWindowIndex(index: number){
    return(Math.abs(this.currentPage - index)) < 3;
  }
}
