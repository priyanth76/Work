import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute , Params } from '@angular/router';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  
  constructor(private router : Router,private route: ActivatedRoute) { }

  ngOnInit() {
    // //this.id = this.route.snapshot.params['id'];
    // this.route.params
    // .subscribe(
    //   (params : Params)=>{
    //     this.id = params['id'];
 
    //   }
    // );
    
   }

   onClick(name:string){
    this.router.navigate(['home'],{relativeTo:this.route});
   }

}
