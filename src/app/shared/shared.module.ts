import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DarkModeService} from "./services/dark-mode.service";
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
    declarations:[
         Error404PageComponent,
         NotificationsComponent
  ],
    imports:[
        CommonModule,
        MatSnackBarModule,
    ],
    exports:[
    ],
    providers:[
      DarkModeService
    ]
})
export class SharedModule{

}
