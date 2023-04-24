import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidebarComponent } from "../briefcase/pages/sidebar/sidebar.component";
import { SharedService} from "./services/shared.service";

import { AppRoutingModule } from "../app.routing.module";


@NgModule({
    declarations:[
    ],
    imports:[
        CommonModule,
    ],
    exports:[
    ],
    providers:[
        SharedService
    ]
})
export class SharedModule{

}