import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //isLogedin = false;
  user:string;
  constructor(public loggingService : LoggingService) {  }

  ngOnInit() {
   // this.isLogedin=this.loggingService.isLogedin;
  //  this.loggingService.loggedInSubscription.subscribe(data=>{
  //   this.isLogedin = data;
  // })
    this.loggingService.onStatesChange
    .subscribe(
      ()=>{
        this.user=this.loggingService.userName;
      }
    )
    //this.user=this.loggingService.userName;
  }  
  onLogout(){
    this.loggingService.onLogout();
  }
}
