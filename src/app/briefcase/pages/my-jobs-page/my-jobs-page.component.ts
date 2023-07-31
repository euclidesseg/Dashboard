import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs-page.component.html',
  styleUrls: ['./my-jobs-page.component.css']
})
export class MyJobsPageComponent implements OnInit {
  isDarkSelect:boolean = false;
  constructor(private darkModeService : DarkModeService){}

  ngOnInit(): void {
    this.darkModeService.darkModeIsSelect
    .subscribe((value) => this.isDarkSelect = value.dark)
  }

}
