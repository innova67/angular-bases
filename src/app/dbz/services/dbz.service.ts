import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {
  public charactersArray: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public addCharacter(character: Character): void {

    // array temporal para tomar los datos que llegan del formulario y agregarles una id
    const tempCharacter: Character = {
      id: uuid(),
      // esto es "SPREAD", aqui le digo a Angular que tome todos los datos que ya estan en el array character y los use tal cual
      ...character
    }

    this.charactersArray.push(tempCharacter);
  }

  /**
   * borrarCharacter
   * Esto me quita los datos del array de heores en el punto en el que yo le indico
   */
  // public borrarCharacter(indice: number): void {
  //   this.charactersArray.splice(indice, 1);
  // }

  public borrarCharacterPorId(id: string): void {
    this.charactersArray = this.charactersArray.filter(character => character.id !== id)
  }

}
