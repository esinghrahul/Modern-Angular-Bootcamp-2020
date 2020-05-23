import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'James', age: 23, job: 'Twitch Streamer', employed: false},
    {name: 'Jill', age: 35, job: 'Engineer', employed: true},
    {name: 'George', age: 20, job: 'Athelete', employed: false}
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
