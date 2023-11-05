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
    // filtrar nombres vacios y mattar la funcion
    if (this.character.name.length === 0) return;

    // emitir datos hacia otra parte de angular que este escuchando
    this.onNewCharacter.emit(this.character);


    //*EL SIGUIENTE CAMBIO SE HIZO POR TEMAS DE PERFORMANCE SUPUESTAMENTE PERO SI NO SE HACE SE ARRUINA TODO DE AHORA EN ADELANTEEEE
    // this.character.name = '';
    // this.character.power = 0;
    this.character = { name: '', power: 0 };
  }
}
