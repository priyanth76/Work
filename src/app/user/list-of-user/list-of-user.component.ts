import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-list-of-user',
  templateUrl: './list-of-user.component.html',
  styleUrls: ['./list-of-user.component.css']
})
export class ListOfUserComponent implements OnInit {
  Username=null;
  user :Array<{Name:string,State:string,Gender:string,Hobby:Array<any>}>=[];
  mobile:number=123456;
  Gender:number = 1;
  GenderList = [
    {Id:1,Name:'male',displayName:'AANU'},
  {Id:2,Name:'female',displayName:'PENNU'},
  {Id:3,Name:'Transgender',displayName:'TRANSGENDER'}
]
  constructor(private loggingService:LoggingService) { }

  ngOnInit() {
   this.getUserInfo()
   this.loggingService.onStatesChange
   .subscribe(
     ()=>{
       this.getUserInfo();
     }
   )
   
  }
  onDeleteUser(index:number){
    this.loggingService.DeleteUser(index);
  }
  getUserInfo(){
    this.user= this.loggingService.getUser()
  }
  submit(f){
    console.log(f);
    console.log(this.loggingService.getUser())
  }

}
