import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from './logging.service';
import { ApiService } from './api.service';
import { NgxSpinnerService } from 'ngx-spinner';
//import { LoggingService} from './logging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task1';

  constructor(private router : Router,
              private loggingService : LoggingService,
              private apiService : ApiService,
              private ngxSpinner:NgxSpinnerService){}
  
  ngOnInit(){   
    this.loggingService.checkedIn();
    // this.apiService.getResponse()
    // .subscribe(
    //   (response)=>console.log(response)
    // )
 
   
    //this.loggingService.getStatesFromApi();

  }    
  
}
