import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SharedService} from "./services/shared.service";

import { AppRoutingModule } from "../app.routing.module";


@NgModule({
    declarations:[
        SidebarComponent
    ],
    imports:[
        CommonModule,
        AppRoutingModule
    ],
    exports:[
        SidebarComponent
    ],
    providers:[
        SharedService
    ]
})
export class SharedModule{

}