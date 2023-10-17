import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';
import { BriefcaseService } from '../../services/briefcase.service';
import { ServiceNotifier } from 'src/app/shared/services/notifier.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  isDarkSelect:boolean = false
  constructor(
    private sharedService:DarkModeService,
    private messageService: BriefcaseService,
    ){}

  ngOnInit(): void {
    this.sharedService.darkModeIsSelect
    .subscribe((value) => {
      if(value.mode === 'dark'){
        this.isDarkSelect = true;
      }
      else{
        this.isDarkSelect = false;
      }

    })

  }
}
