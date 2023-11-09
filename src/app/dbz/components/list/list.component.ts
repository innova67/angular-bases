import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output('emisorIndice')
  public whenDeleteCharacter: EventEmitter<number> = new EventEmitter();

  //*Estoy recibiendo datos del main page
  @Input('personaje')
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteCharacter(index:number):void {
    this.whenDeleteCharacter.emit(index)
  }
}
