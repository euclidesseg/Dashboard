import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./briefcase/pages/about-me/about-me.component";

const routes: Routes =
    [
        {
            path: '',
            component: AboutMeComponent,
            pathMatch: "full"
        }
    ]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}