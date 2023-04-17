import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';

import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AboutMeComponent,
    MyJobsComponent
  ],
  imports: [
    CommonModule,
    CardModule

  ],
  exports:[
    AboutMeComponent
  ]
})
export class BriefcaseModule { }
