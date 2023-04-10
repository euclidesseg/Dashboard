import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    close: boolean = false;
    darkModeSelect: boolean = false
    mode = 'Dark Mode'

    constructor
        // esta injeccion la uso para obtener una referencia al DOM del body y asi asignarle o removele 
        // una clase su uso se ve estableciso en el metodo darkMode
        (@Inject(DOCUMENT) private document: Document) { }

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

    closeOpen() {
        this.close = !this.close
    }
    oppenWithSearch() {
        if (this.close == true) {
            this.closeOpen()
        } else {
            return
        }
    }
    darkMode() {
        this.darkModeSelect = !this.darkModeSelect
        if (this.darkModeSelect == true) {
            this.mode = "Ligth Mode"
            this.document.body.classList.add('vela__blue')
        } else {
            this.mode = 'Dark Mode'
            this.document.body.classList.remove('vela__blue')
        }

    }
}