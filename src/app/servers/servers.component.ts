import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  enabled: boolean = false;
  serverCreateStatus = 'No server was created!';
  serverName: string = 'newName';


  username: string = '';
  isUsernameEmpty: boolean = true;
  isServerCreated: boolean = false;
  showParagraph: boolean = false;
  numberOfClicks: number = 0;

  clicks = [];
  constructor() {
    setTimeout(() => {
      this.enabled = true;
    }, 5000)
   }

   isNotEmpty(){
     if(this.username === ''){
       this.isUsernameEmpty = true;
     }else{
       this.isUsernameEmpty = false;
     }
   }

   onCreate(){
     this.isServerCreated = true;
     this.serverCreateStatus = 'Server: '+this.serverName+' was created!'
   }
   clearName(){
     this.username = '';
     this.isUsernameEmpty = true;
   }

  ngOnInit() {
  }
  onUpdateServer(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  hideOrShow(){
    this.showParagraph = !this.showParagraph;
    this.numberOfClicks = this.numberOfClicks+1;
    this.clicks.push(this.numberOfClicks);
    console.log(this.clicks);
    
  }
}
