import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';

import { CardModule } from 'primeng/card';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BriefCaseRoutingModule } from './briefcase-routing.module';
import { SidebarComponent } from './pages/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AboutMeComponent,
    MyJobsComponent,
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    BriefCaseRoutingModule

  ],
  exports:[
    AboutMeComponent
  ]
})
export class BriefcaseModule { }
