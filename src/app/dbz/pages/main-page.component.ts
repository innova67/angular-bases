import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public charactersArray: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    }
  ];

  public onNewCharacter(character: Character): void {
    //esta seccion no anexa datos sino que genera un link entre el modulo que agrega personajes y la lista :c
    this.charactersArray.push(character);
  }
}
