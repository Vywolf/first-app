import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 21235415;
  serverStatus: string = '';

  constructor() {
    this.getStatus();
  }
  isEnabled() {

  }
  getStatus() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    console.log(this.serverStatus);
    
  }
  ngOnInit() {
  }
  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }

}
