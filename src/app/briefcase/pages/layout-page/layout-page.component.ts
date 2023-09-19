import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css', './layout-page2.component.css'],
})
export class LayoutPageComponent implements OnInit{
  isClose: boolean = false;
  darkModeSelect: boolean = false;
  mode = '';

  // esta injeccion la uso para obtener una referencia al DOM del body y asi asignarle o removele
  // una clase su uso se ve estableciso en el metodo darkMode
  constructor(private sharedService: DarkModeService,  @Inject(DOCUMENT) private document: Document) {
    this.sharedService.darkModeIsSelect.subscribe((value) =>  {
      if(value.mode === 'dark'){
        this.darkModeSelect = true
      }else{
        this.darkModeSelect = false;
      }
    })


    if (window.innerWidth < 975) {
      this.isClose = true;
    } else {
      this.isClose = false;
    }
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 975) {
        this.isClose = true;
      } else {
        this.isClose = false;
      }
    });
  }

  openOrCloseSidebar() {
    this.isClose = !this.isClose;
  }
  changeMode(mode:string) {
   this.sharedService.selecDarkMode(mode);
  }

  public sidebarItems = [
    { label: 'About me', icon: 'pi pi-user', url: './about-me' },
    { label: 'Projects', icon: 'pi pi-briefcase', url: './my-projects' },
    { label: 'Studies', icon: 'pi pi-book', url: './studies' },
    { label: 'Experience', icon: 'pi pi-globe', url: './expereicence' },
    { label: 'Hobbies', icon: 'pi pi-heart-fill', url: './hobbies' },
    { label: 'Contact', icon: 'pi pi-phone', url: './contact' },
  ];
}
