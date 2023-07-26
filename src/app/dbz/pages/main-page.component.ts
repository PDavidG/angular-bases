import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor ( private dbzService: dbzService ) {}
     
        get characters(): Character[] {// Este get se crea para que se pueda hacer uso de los metodos dado que esta en privado
            return [...this.dbzService.characters];
        }

        onDeleteCharacter1( id: string ): void {
            this.dbzService.deleteCharacterById( id )
        }

        onNewCharacter1 ( character: Character): void {
            this.dbzService.nuevoPersonaje( character );
        }
    }
