import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { MyJobsPageComponent } from "./pages/my-jobs-page/my-jobs-page.component";
import { StudiesPageComponent } from "./pages/studies-page/studies-page.component";
import { ExperiencePageComponent } from "./pages/experience-page/experience-page.component";
import { MotivationsPageComponent } from "./pages/motivations-page/motivations-page.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
    {
        path:'',
        component:LayoutPageComponent,
        children:[
            { path:'about-me',component:AboutMeComponent },
            { path:'my-projects',component:MyJobsPageComponent },
            { path:'studies',component:StudiesPageComponent },
            { path:'expereicence',component:ExperiencePageComponent },
            { path:'motivations',component:MotivationsPageComponent },
            { path:'contact',component:ContactComponent },
            { path:'**', redirectTo:'about-me',}
        ]
    }
]

@NgModule({
    imports:[ RouterModule.forChild( routes ) ],
    exports:[ RouterModule]
})
export class BriefCaseRoutingModule{

}
