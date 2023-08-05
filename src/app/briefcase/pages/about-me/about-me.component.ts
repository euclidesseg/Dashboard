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
    .subscribe((value) => {this.isDarkSelect = value.dark})

  }


  onSendMessage(message : MessageDto):void{
    this.messageService.addMessage(message)
    .subscribe((reponse) =>{
      this.snackbar.showNotification(`${message.nombreempresa} Your message has been sent `, 'Ok')
    } )
  }

  openPdf(){
    window.open('https://firebasestorage.googleapis.com/v0/b/portfolio-898c3.appspot.com/o/Curriculum%20Euclides.pdf?alt=media&token=b1467e2c-b941-4062-a461-4aeb2e7ca32e')
  }
}
