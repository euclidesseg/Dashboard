import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyJobsPageComponent } from './pages/my-jobs-page/my-jobs-page.component';

import { CardModule } from 'primeng/card';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BriefCaseRoutingModule } from './briefcase-routing.module';
import { StudiesPageComponent } from './pages/studies-page/studies-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { MotivationsPageComponent } from './pages/motivations-page/motivations-page.component';
import { HobbiesPageComponent } from './pages/hobbies-page/hobbies-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BriefcaseService } from './services/briefcase.service';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    MyJobsPageComponent,
    LayoutPageComponent,
    StudiesPageComponent,
    ExperiencePageComponent,
    MotivationsPageComponent,
    HobbiesPageComponent,
    ContactFormComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    BriefCaseRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    AboutMeComponent,
    ReactiveFormsModule
  ],
  providers:[
    BriefcaseService
  ]
})
export class BriefcaseModule { }
