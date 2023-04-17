import { DOCUMENT } from '@angular/common';
import { Injectable, OnInit, Inject} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {
  close: boolean = false;
  darkModeIsSelect: boolean = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
  }

  openClose():boolean{
    this.close = !this.close
    return this.close
  }

  selecDarkMode():{isActive: boolean, modeText:string}{
    this.darkModeIsSelect = !this.darkModeIsSelect
    if (this.darkModeIsSelect == true) {
        this.document.body.classList.add('vela__blue');
        return {isActive:true, modeText:'Ligth Mode'}
      } else {
        this.document.body.classList.remove('vela__blue');
        return {isActive:false, modeText:'Dark Mode'}
    }
  }
}
