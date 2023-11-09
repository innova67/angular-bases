import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {  } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {
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
    },
  ];

  public onNewCharacter(character: Character): void {
    //esta seccion no anexa datos sino que genera un link entre el modulo que agrega personajes y la lista :c
    this.charactersArray.push(character);
  }

  /**
   * onDeleteCharacter
   * Esto me quita los datos del array de heores en el punto en el que yo le indico
   */
  public borrarCharacter(indice: number): void {
    this.charactersArray.splice(indice, 1);
  }

}
