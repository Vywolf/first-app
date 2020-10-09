import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  status = 'offline';
  serverID = 1025123;


  constructor() {
   }

  ngOnInit() {
  }

}
