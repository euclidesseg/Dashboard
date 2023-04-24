import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyJobsComponent } from "./pages/my-jobs/my-jobs.component";
import { SidebarComponent } from "./pages/sidebar/sidebar.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";

const routes: Routes = [
    {
        path:'',
        component:SidebarComponent,
        children:[
            {
                path:'about-me',
                component:AboutMeComponent
            },
            {
                path:'**',
                redirectTo:'about-me', 
            }
        ]
    }
]

@NgModule({
    imports:[ RouterModule.forChild( routes ) ],
    exports:[ RouterModule]
})
export class BriefCaseRoutingModule{

}