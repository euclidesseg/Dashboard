import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css', './layout-page2.component.css']
})
export class LayoutPageComponent implements OnInit {
  isClose: boolean = false;
  darkModeSelect: boolean = false
  mode = 'Dark'

  // esta injeccion la uso para obtener una referencia al DOM del body y asi asignarle o removele
  // una clase su uso se ve estableciso en el metodo darkMode
  constructor(
    private sharedService: DarkModeService
  ) { }


  ngOnInit(): void {
    window.addEventListener('resize', () => {
      // window.innerWidth me obtiene el ancho actual de la ventana
      if (window.innerWidth < 745) {
        this.isClose = true;
      } else {
        this.isClose = false;
      }
    });
  }

  openOrCloseSidebar() {
    this.isClose = !this.isClose;
  }
  openWithSearch() {
   this.openOrCloseSidebar()
  }
  darkMode() {
    const modeObject = this.sharedService.selecDarkMode();
    this.darkModeSelect = modeObject.isActive;
    this.mode = modeObject.modeText;
  }

  public sidebarItems = [

    {   label:'About me', icon:'pi pi-user',url:'./about-me'},
    {   label:'Jobs', icon:'pi pi-briefcase',url:'./my-jobs' },
    {   label:'Studies', icon:'pi pi-book',url:'./studies' },
    {   label:'Experience', icon:'pi pi-globe',url:'./expereicence' },
    {   label:'Motivations', icon:'pi pi-heart-fill',url:'./motivations' },
  ]
}
