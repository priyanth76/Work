import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }
 
  

}
