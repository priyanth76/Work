import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css']
})
export class UdemyComponent implements OnInit {
  id : number;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    //this.id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params : Params)=>{
        this.id = params['id'];
 
      }
    );
    
   }

}
