import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {

    console.log(this.character);
    // filtrar nombres vacios y mattar la funcion en caso de haber
    if (this.character.name.length === 0) return;

    // emitir datos hacia otra parte de angular
    this.onNewCharacter.emit(this.character);

    (this.character.name = ''), (this.character.power = 0);
  }
}
