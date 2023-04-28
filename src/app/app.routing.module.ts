import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404PageComponent } from "./shared/pages/error404-page/error404-page.component";

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
            path: '404',
            component:Error404PageComponent,
        },
        {
            path: '',
            redirectTo:'briefcase',
            pathMatch: "full"
        },
        {
            path: '**',
            redirectTo:'404'
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