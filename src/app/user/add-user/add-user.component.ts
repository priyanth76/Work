import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoggingService } from 'src/app/logging.service';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user :UserModel = new UserModel();
  info :Array<{Id:number,Name:string}>=[];
  
  showError = false;
  constructor(private loggingService:LoggingService) { }

  ngOnInit() {   
    this.getStates()
    this.loggingService.onStatesChange
    .subscribe(
      ()=>{
        this.getStates();
      }
    )
  }
  onAddUser(){       
    this.loggingService.onAddUser(this.user);
  }
  getStates(){
    this.info = this.loggingService.getInfo();
  }
  // onAddHobby(nAme:string){
  //   this.hobby.push({name});
  // }
  checkValue(v){
    return this.user.Hobby.indexOf(v)>-1;
  }
  toggleValue(v){
    let index = this.user.Hobby.indexOf(v);
    if(index>-1){
      this.user.Hobby.splice(index,1);
    }else{
      this.user.Hobby.push(v);
    }
  }
}
