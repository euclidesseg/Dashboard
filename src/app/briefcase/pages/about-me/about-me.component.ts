import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';
import { MessageDto } from '../../interfaces/message.interface';
import { BriefcaseService } from '../../services/briefcase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceNotifier } from 'src/app/shared/services/notifier.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  isDarkSelect:boolean = false
  constructor(
    private sharedService:DarkModeService,
    private messageService: BriefcaseService,
    private snackbar : ServiceNotifier
    ){}

  ngOnInit(): void {
    this.sharedService.darkModeIsSelect
    .subscribe((value) => {this.isDarkSelect = value})

  }


  onSendMessage(message : MessageDto):void{
    this.snackbar.showNotification(`${message.nombreempresa} Your message has been sent `, 'Ok')
    // this.messageService.addMessage(message)
    // .subscribe((reponse) =>{
    // } )
  }


}
