import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';
import {projects} from '../../data/projects.data'
import { Projects } from 'src/app/models/project.model';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs-page.component.html',
  styleUrls: ['./my-jobs-page.component.css']
})
export class MyJobsPageComponent implements OnInit {

  public projects:Projects[] = projects;

  isDarkSelect:boolean = false;
  constructor(private darkModeService : DarkModeService){}

  ngOnInit(): void {
    this.darkModeService.darkModeIsSelect
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
