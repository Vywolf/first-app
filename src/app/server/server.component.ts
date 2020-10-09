import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 21235415;
  serverStatus: string =  '';
  

  constructor() { 
   
  }
  isEnabled(){
    
  }
  getStatus(){
    val: number = Math.random();
    console.log(val);
    
    this.serverStatus =  val > 0.5 ? 'online':'offline'
  }
  ngOnInit() {
  }
  getColor(){
    if(this.serverStatus==='online'){
      return 'green';
    }else{
      return 'red';
    }
  }

}
