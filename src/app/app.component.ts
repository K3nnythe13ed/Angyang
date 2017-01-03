import { Component, OnInit } from '@angular/core';

import * as elasticsearch from 'elasticsearch';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app works!';
  private _client: elasticsearch.Client

  constructor() {
    this._client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    });
  }
  
  ngOnInit() {
    $('h1').text('jquery and elasticsearch libs work!');

  }
}