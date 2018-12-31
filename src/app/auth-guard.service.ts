import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { LoggingService } from './logging.service';


@Injectable()
export class AuthGuardService implements CanActivate , CanLoad{

  constructor(private loggingService : LoggingService,
              private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot,
              state :RouterStateSnapshot):boolean {
                
                // console.log(this.loggingService.isLogedin)
                if(this.loggingService.isLogedin){
                  return true;
                }
                else{                  
                  return false;
                }
              }
  canLoad(){
    if(this.loggingService.isLogedin){
      return true;
    }
    else{                  
      return false;
    }
  }
}
