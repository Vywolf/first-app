import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  status = '';
  serverID = 1025123;


  constructor() {
    this.status = Math.random() > 0.5 ? 'offline' : 'online';
   }

  ngOnInit() {
  }

  getColor() {
    return this.status === 'offline' ? 'red' : 'green';
  }

}
