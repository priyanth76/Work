import { Injectable, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from "./api.service";
import { UserModel } from "./shared/models/user.model";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class LoggingService {
    constructor(private router: Router,
        private apiService: ApiService,
        private ngxSpinner: NgxSpinnerService,
        private toastr: ToastrService) { };
    //loggedInSubscription: EventEmitter<any> = new EventEmitter();
    onStatesChange: EventEmitter<any> = new EventEmitter();
    //initialArray:boolean;
    token:string;
    userName:string;
    userObject:any=null;
    isLogedin: boolean;
    info: Array<{ Id: number, Name: string }> = [];
    Hobby: Array<any> = [];
    user: Array<UserModel> = [];

    onLogging(username: string, password: string) {
        // if(username == "priyanth" && password =="denim"){
        //    //this.loggedInSubscription.emit(true);
        //    this.router.navigate(['/']);
        //    localStorage.setItem("currentUser","loged")
        //     this.isLogedin = true;  
        //     this.apiService.login(username,password);          
        // }
        // else{
        //     this.isLogedin = false;
        // }
        this.apiService.login(username, password)
            .subscribe(
                (res: any) => {
                    if (res.Success) {
                       // alert(res.Message);                        
                        this.router.navigate(['/']);
                        localStorage.setItem("currentUser", JSON.stringify(res.Data))
                        this.isLogedin = true;
                        this.userName=res.Data.Name;
                        this.userObject= res.Data;
                        this.toastr.success('You are logged IN',this.userName);
                        this.token=res.Description;
                        localStorage.setItem("Token",this.token);
                        
                        
                        
                    }

                    else {
                        alert(res.Message);
                        this.isLogedin = false;
                    }
                }
            )
    }
    onLogout() {
        //this.loggedInSubscription.emit(false);
        this.isLogedin = false;
        localStorage.removeItem("currentUser");
        localStorage.removeItem("Token");
        this.router.navigate(['/login']);
        this.userName = null;
        this.userObject=null;
        
    }
    checkedIn() {
        if (localStorage.getItem("Token") ){
            this.isLogedin = true;
            this.token= localStorage.getItem("Token")
            this.userName=JSON.parse(localStorage.getItem("currentUser")).Name
            this.userObject = JSON.parse(localStorage.getItem("currentUser"))
            //this.router.navigate(['/']);
        }
       
        //    else{
        //       this.router.navigate(['/']);
        //    }
    }
    onAdd(id: number, name: string) {
        this.info.push({ Id: id, Name: name });
        this.onStatesChange.emit();
        this.router.navigate(['/youtube/home']);
    }
    onAddUser(user: UserModel) {
        this.user.push(user);
        this.router.navigate(['/user/listuser']);
    }

    onDelete(index: number) {
        this.info.splice(index, 1);
        this.onStatesChange.emit();
    }
    DeleteUser(index: number) {
        this.user.splice(index, 1);
        this.onStatesChange.emit();
    }

    getInfo() {
        return this.info.slice();
    }
    getUser() {
        return this.user.slice();
    }

    getStatesFromApi() {
        this.ngxSpinner.show();
        this.apiService.getResponse(1, 'mah')
            .subscribe(
                (res: any) => {
                    this.info = res;
                    this.stateChangeEmit();
                    setTimeout(
                        () => { this.ngxSpinner.hide() }, 3000
                    );
                })
    }
    stateChangeEmit() {
        this.onStatesChange.emit();
    }

}