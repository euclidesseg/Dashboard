import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode-close.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{

  isDarkModeSelect: boolean = false
  constructor(private darkModeService: DarkModeService){}
  ngOnInit(): void {
    this.darkModeService.darkModeIsSelect.subscribe((value) => this.isDarkModeSelect = value)
  }
}
