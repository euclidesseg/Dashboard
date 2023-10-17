import { Component } from '@angular/core';
import { MessageDto } from '../../interfaces/message.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BriefcaseService } from '../../services/briefcase.service';
import { ServiceNotifier } from 'src/app/shared/services/notifier.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(
    private messageService:BriefcaseService,
    private snackbar: ServiceNotifier ){
  }
  onSendMessage(message : MessageDto):void{
    this.messageService.addMessage(message)
    .subscribe((reponse) =>{
      this.snackbar.showNotification(`${message.nombreempresa} Your message has been sent `, 'Ok')
    } )
  }
}
