import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./briefcase/pages/about-me/about-me.component";

const routes: Routes =
    [
        {
            path:'auth',
            loadChildren: () => import ('./auth/auth.module').then((module) => module.AuthModule)
        },
        {
            path:'briefcase',
            loadChildren: () => import ('./briefcase/briefcase.module').then( (module) => module.BriefcaseModule)
        },
        {
            path: '',
            redirectTo:'briefcase',
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