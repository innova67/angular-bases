import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[]{
    //*hacerlo de esta manera vincula los datos a su ubicacion original, solo le estoy pasando una referencia
    // return this.dbzService.charactersArray;

    //*hacerlo asi crea un nuevo array independiente de los datos orignales al momento de ejecutarse
    return [...this.dbzService.charactersArray];
  }

  onDeleteCharacter( id:string):void {
    this.dbzService.borrarCharacterPorId(id);
  }

  onNewCharacter(personaje: Character) {
    this.dbzService.addCharacter(personaje);
  }
}
