import { DOCUMENT } from '@angular/common';
import { Injectable, OnInit, Inject} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {
  close: boolean = false;

  private _darkModeIsSelect = new BehaviorSubject<boolean>(false);
  darkModeIsSelect :Observable<boolean> =  this._darkModeIsSelect.asObservable()


  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
  }

  openClose():boolean{
    this.close = !this.close
    return this.close
  }

   selecDarkMode(): { isActive: boolean, modeText: string } {
    const isActive = !this._darkModeIsSelect.value;
    if (isActive) {
      this.document.body.classList.add('vela__blue');
      this._darkModeIsSelect.next(true);
      return { isActive: true, modeText: 'Light Mode' };
    } else {
      this.document.body.classList.remove('vela__blue');
      this._darkModeIsSelect.next(false);
      return { isActive: false, modeText: 'Dark Mode' };
    }
  }
}

// NOTAS: ( darkModeIsSelect) es una variable publica que emite un  observable, el cual recibe mediante asObservable(),
// el ultimo valor emitido por (_darkModeIsSelect).
// selecDarkMode() es el método que cambia el valor del objeto observable (_darkModeIsSelect) y emite el nuevo valor 

// El método next() de BehaviorSubject es utilizado para actualizar el valor almacenado 
// en el objeto observable y notificar a sus suscriptores del cambio.

// . El método asObservable() de la clase BehaviorSubject crea y devuelve un observable que emite el último valor emitido por el objeto
// en este caso el objeto es  _darkModeIsSelect