import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  darckModeSelect:boolean = false
  constructor(private sharedService:SharedService){}
  
  ngOnInit(): void {
    this.sharedService.darkModeIsSelect
    .subscribe((value) => {this.darckModeSelect = value})
    
  }


}
