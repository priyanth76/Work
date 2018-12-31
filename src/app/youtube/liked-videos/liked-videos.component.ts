import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../logging.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-liked-videos',
  templateUrl: './liked-videos.component.html',
  styleUrls: ['./liked-videos.component.css']
})
export class LikedVideosComponent implements OnInit {

  constructor(private loggingService : LoggingService) { }

  ngOnInit() {
  }
  onAdd(form:NgForm){
    const value = form.value;
    this.loggingService.onAdd(value.id,value.statename);
  }

}
