import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { Routes, RouterModule } from '@angular/router';
import { UdemyComponent } from './udemy/udemy.component';

import { LoggingService } from './logging.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoggingComponent } from './logging/logging.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { ListOfUserComponent } from './user/list-of-user/list-of-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AuthGuardService} from './auth-guard.service';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/Http';
import { AuthInterceptor } from './shared/auth.interceptor';

const appRoutes: Routes = [
  { path: 'login', component: LoggingComponent },  
  { path: '',canActivate:[], component: MainComponent, children: [
      // {
      //   path: 'youtube', component: YoutubeComponent, children: [
      //     { path: 'home', component: HomeComponent },
      //     { path: 'likedvideos', component: LikedVideosComponent},
      //     { path: 'settings', component: SettingsComponent }

      //   ]
      // },
            // { path: 'linkedin/:id', component: LinkedinComponent },
      { path: 'youtube', loadChildren:'./youtube/youtube.module#YoutubeModule',canLoad:[AuthGuardService] },      
      { path: 'udemy/:id', component: UdemyComponent },
      {
        path: 'user', component: UserComponent, children: [
          { path: 'listuser', component: ListOfUserComponent },
          { path: 'adduser', component: AddUserComponent }         

        ]
      }
    ]
  },
  {path : '**',canActivate:[AuthGuardService],component: MainComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,    
    UdemyComponent,          
    MainComponent,
    NavbarComponent,
    LoggingComponent,
    UserComponent,
    ListOfUserComponent,
    AddUserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule, 
    ToastrModule.forRoot(),  
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LoggingService,AuthGuardService,
    {provide : HTTP_INTERCEPTORS , useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
