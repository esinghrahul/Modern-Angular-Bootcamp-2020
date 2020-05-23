import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 200, label: 'Friends' },
    { value: 1600, label: 'Likes' },
    { value: 120, label: 'Posts' },
    { value: 845, label: 'Comments' },
  ];

  items = [
    {image: '/assets/images/couch.jpeg', title: 'Couch', description: 'A cozy and comfy couch to spend your day lazying around on.', price: 99.99},
    {image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'A dresser to keep all the items to get you ready in the morning.', price: 149.99}
  ]

  constructor() {}

  ngOnInit(): void {}
}
