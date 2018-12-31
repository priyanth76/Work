import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logging.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private router:Router,
              private apiService:ApiService) { }

  ngOnInit() {
  }
  onAuthenticate(username:string,password:string){
    this.loggingService.onLogging(username,password);
   
  }
  navYoutube(){
    this.router.navigate(['/youtube'])
  }
}
