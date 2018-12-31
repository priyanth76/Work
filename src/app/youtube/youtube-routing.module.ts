import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { YoutubeComponent } from "./youtube.component";
import { HomeComponent } from "./home/home.component";
import { LikedVideosComponent } from "./liked-videos/liked-videos.component";
import { SettingsComponent } from "./settings/settings.component";

const youtubeRoutes :Routes =[
    {
        path: '', component: YoutubeComponent, children: [
          { path: 'home', component: HomeComponent },
          { path: 'likedvideos', component: LikedVideosComponent},
          { path: 'settings', component: SettingsComponent}

        ]
      }
];
@NgModule({ 
    imports:[
        RouterModule.forChild(youtubeRoutes)],
        exports:[RouterModule]  
})
export class YoutubeRoutingModule{}