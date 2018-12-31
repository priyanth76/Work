import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { LikedVideosComponent } from "./liked-videos/liked-videos.component";
import { SettingsComponent } from "./settings/settings.component";
import { YoutubeComponent } from "./youtube.component";
import { YoutubeRoutingModule } from "./youtube-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
     YoutubeComponent,
     HomeComponent,
     LikedVideosComponent,
     SettingsComponent   
    ],
    imports:[
        CommonModule,
        FormsModule,
        YoutubeRoutingModule,
    ]
})
export class YoutubeModule{}