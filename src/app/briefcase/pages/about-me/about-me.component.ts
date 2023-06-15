import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  isDarkSelect:boolean = false
  constructor(private sharedService:DarkModeService){}

  ngOnInit(): void {
    this.sharedService.darkModeIsSelect
    .subscribe((value) => {this.isDarkSelect = value})

  }


}
