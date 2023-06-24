import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsComponent } from '../components/notifications/notifications.component';

@Injectable({providedIn: 'root'})
export class ServiceNotifier {

  constructor(private snackbar : MatSnackBar) { }

  showNotification(message:string, buttonText:string){
    this.snackbar.openFromComponent(NotificationsComponent,{
      data:{
        message:message,
        buttonText: buttonText
      },
      duration:80000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass: 'notification'
    })
  }
}
