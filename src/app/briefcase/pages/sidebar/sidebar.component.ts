import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { SharedService } from "../../../shared/services/shared.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    close: boolean = false;
    darkModeSelect: boolean = false
    mode = 'Dark Mode'

    // esta injeccion la uso para obtener una referencia al DOM del body y asi asignarle o removele 
    // una clase su uso se ve estableciso en el metodo darkMode
    constructor(
        private sharedService: SharedService
    ) { }


    ngOnInit(): void {
        window.addEventListener('resize', () => {
            // window.innerWidth me obtiene el ancho actual de la ventana
            if (window.innerWidth < 500) {
                this.close = true;
            } else {
                this.close = false;
            }
        });
    }

    openOrCloseSidebar() {
        this.close = this.sharedService.openClose()
    }
    oppenWithSearch() {
        if (this.close == true) {
            this.openOrCloseSidebar()
        } else {
            return
        }
    }
    darkMode() {
        const modeObject = this.sharedService.selecDarkMode();
        this.darkModeSelect = modeObject.isActive;
        this.mode = modeObject.modeText;
    }
}