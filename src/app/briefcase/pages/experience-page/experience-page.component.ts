import { Component, OnInit } from '@angular/core';
import { experiences } from '../../data/experiences.data';
import { Experiences } from 'src/app/models/experiences.model';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css'],
})
export class ExperiencePageComponent{

    public darkModeSelected: boolean = false;
    public experiences: Experiences[] = experiences;

  constructor(private darkService: DarkModeService) {

    this.darkService.darkModeIsSelect.subscribe((value) =>{
      if (value.mode === 'dark') {
        this.darkModeSelected = true;
      }else{
        this.darkModeSelected = false;
      }
    })
  }

}
