import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';
import { MessageDto } from '../../interfaces/message.interface';
import { BriefcaseService } from '../../services/briefcase.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  send : boolean = false
  isDarkSelect:boolean = false
  constructor(
    private sharedService:DarkModeService,
    private messageService: BriefcaseService,
    ){}

  ngOnInit(): void {
    this.sharedService.darkModeIsSelect
    .subscribe((value) => {this.isDarkSelect = value})

  }


  onSendMessage(message : MessageDto):void{
    this.messageService.addMessage(message)
    .subscribe((reponse) =>{
      this.send = true;
      setTimeout(() => {
        this.send = false;
      }, 2500);
    } )
  }


}
