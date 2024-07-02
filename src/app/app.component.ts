import { Component, ElementRef, ViewChild } from '@angular/core';
import { cricketPlayers } from './shared/model/player.const';
import { Iplayer } from './shared/model/player.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';

@ViewChild('inputRef') inputRef!:ElementRef
  playerArr:Array<Iplayer>=cricketPlayers

  searchVal!:string;
  searchaType!:string;


  onKeyUp(eve:Event){
    let input = eve.target as HTMLInputElement
    let val = input.value
    this.searchVal = val

    this.searchVal = (eve.target as HTMLInputElement).value
    
  }

  getDropVal(eve:Event){
    this.searchaType = (eve.target as HTMLSelectElement).value   
    
  }

  
}
