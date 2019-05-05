import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    // filter rules

      return items.filter(it => {
        return it.metadata.leverCode.toLowerCase().includes(searchText);
      });
    
   
  }
}
