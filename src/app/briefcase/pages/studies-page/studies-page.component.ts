import { Component } from '@angular/core';
import  {studies } from '../../data/studies.data'
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-studies-page',
  templateUrl: './studies-page.component.html',
  styleUrls: ['./studies-page.component.css'],
})
export class StudiesPageComponent {
  public darkModeSelected: boolean = false;
  public studies = studies;
  constructor(private darkService : DarkModeService ){
    this.darkService.darkModeIsSelect.subscribe((value) =>  {
      if(value.mode === 'dark')(
        this.darkModeSelected = true
      )
      else{
        this.darkModeSelected = false;
      }
    })
  }
}
