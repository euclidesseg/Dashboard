import { DOCUMENT } from '@angular/common';
import { Injectable, OnInit, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Mode {
  dark: boolean;
  modeText: string;
}
@Injectable({
  providedIn: 'root',
})
export class DarkModeService implements OnInit {
  private _darkModeIsSelect = new BehaviorSubject<Mode>({dark:false, modeText:'Light'});
  darkModeIsSelect: Observable<Mode> = this._darkModeIsSelect.asObservable();

  // esta injeccion la uso para obtener una referencia al DOM del body y asi asignarle o removele
  // una clase su uso se ve estableciso en el metodo selecDarkMode
  constructor(@Inject(DOCUMENT) private document: Document) {
    // Leer el valor almacenado en el Local Storage
    const modeSelected = localStorage.getItem('modeSelected');
    if (modeSelected) {
      try {
        const mode:Mode = JSON.parse(modeSelected);
        this._darkModeIsSelect.next(mode);
        if(mode.dark){
          this.document.body.classList.add('vela__blue')
        } else{
          this.document.body.classList.remove('vela__blue')
        }
      } catch (error) {
        console.error('Error parsing stored value:', error);
      }
    }
  }

  ngOnInit(): void {

  }

  selecDarkMode(){

    const isActive = !this._darkModeIsSelect.value.dark;
    if (isActive) {
      this.document.body.classList.add('vela__blue');
      this._darkModeIsSelect.next({dark:true, modeText:'Light'});
    } else {
      this.document.body.classList.remove('vela__blue');
      this._darkModeIsSelect.next({dark:false, modeText:'Dark'});
    }
    localStorage.setItem('modeSelected', JSON.stringify( this._darkModeIsSelect.value));
  }
}

// NOTAS: ( darkModeIsSelect) es una variable publica que emite un  observable, el cual recibe mediante asObservable(),
// el ultimo valor emitido por (_darkModeIsSelect).
// selecDarkMode() es el método que cambia el valor del objeto observable (_darkModeIsSelect) y emite el nuevo valor

// El método next() de BehaviorSubject es utilizado para actualizar el valor almacenado
// en el objeto observable y notificar a sus suscriptores del cambio.

// . El método asObservable() de la clase BehaviorSubject crea y devuelve un observable que emite el último valor emitido por el objeto
// en este caso el objeto es  _darkModeIsSelect

// constructor(
//  @Inject(DOCUMENT) private document: Document,
//  ) { }

// Este modo de inyección se utiliza para proporcionar una referencia
// al objeto Document en el componente o clase en la que se está utilizando.
// Es común utilizar esta inyección cuando se necesita acceder a las propiedades y métodos del objeto Document,
// como crear elementos HTML dinámicamente o manipular el árbol DOM.
