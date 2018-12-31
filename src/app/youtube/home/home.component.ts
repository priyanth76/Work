import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  info :Array<{Id:number,Name:string}>=[];
  constructor(private apiService: ApiService,
              private loggingService:LoggingService) { }

  ngOnInit() {
    this.loggingService.getStatesFromApi();
    this.getStates();
    this.loggingService.onStatesChange.subscribe(()=>{
      this.getStates();
      
      
    })
    
  }
  getStates(){
    this.info = this.loggingService.getInfo();
  }

  onDelete(index:number){
    this.loggingService.onDelete(index);
  }
  
}
