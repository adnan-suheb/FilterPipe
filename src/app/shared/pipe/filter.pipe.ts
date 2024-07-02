import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../model/player.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(playerArr: Iplayer[], searchVal: string, searchType: string = 'all'): Iplayer[] {
    let filteredArr: Iplayer[] = []
    if (!searchVal) {
      return playerArr
    }
    if (!playerArr) {
      return []
    }



    return filteredArr = playerArr.filter(player => {

      if (searchType === 'name') {
        return player.name.toLowerCase().includes(searchVal.toLowerCase())
      } else if (searchType === 'country') {
        return player.country.toLowerCase().includes(searchVal.toLowerCase())
      } else if (searchType === 'year_debut') {
        return player.year_debut.includes(searchVal)
      } else if (searchType === 'all') {
        return player.name.toLowerCase().includes(searchVal.toLowerCase()) || player.country.toLowerCase().includes(searchVal.toLowerCase()) || player.year_debut.includes(searchVal)
      }
      else {
        return []
      }
    })


  }

}
