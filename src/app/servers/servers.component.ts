import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowCreateServer = true;
  createServer = 'No server was created';
  isCreated = false;
  newServer = '';
  username = '';
  isUsernameEmpty = true;

  constructor() {
    setTimeout(() => this.allowCreateServer = false, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.isCreated = !this.isCreated;
    if (!this.isCreated) {
      this.createServer = 'No server was created';
    } else {
      this.createServer = 'A server was created! Name is: ' + this.newServer;
    }
  }

  isNotEmpty(event: Event) {
    if (this.username === '') {
        this.isUsernameEmpty = true;
    } else {
      this.isUsernameEmpty = false;
    }
  }

  onResetUsername() {
    this.username = '';
    this.isUsernameEmpty = true;
  }

  onUpdateServerName(event: Event) {
    this.newServer = (<HTMLInputElement>event.target).value;
  }

}
