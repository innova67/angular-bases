import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output('onDeleteHero')
  public whenDeleteCharacter: EventEmitter<string> = new EventEmitter();

  //*Estoy recibiendo datos del main page
  @Input('personaje')
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteCharacter(id?:string):void {
    //si no hay id nunca se ejecuta
    if (!id) return;

    this.whenDeleteCharacter.emit(id);
  }
}
