import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchWord'
})
export class SearchWordPipe implements PipeTransform {

  transform(items: string[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    filter = removeAccents(filter);
    return items.filter(
      item =>
        removeAccents(item)
          .toLowerCase()
          .indexOf(filter.toLowerCase()) !== -1
    );
  }
}

function removeAccents(s) {
  var r = s.toLowerCase();
  r = r.replace(new RegExp(/\s/g), "");
  r = r.replace(new RegExp(/[àáâãäå]/g), "a");
  r = r.replace(new RegExp(/[èéêë]/g), "e");
  r = r.replace(new RegExp(/[ìíîï]/g), "i");
  r = r.replace(new RegExp(/ñ/g), "n");
  r = r.replace(new RegExp(/[òóôõö]/g), "o");
  r = r.replace(new RegExp(/[ùúûü]/g), "u");

  return r;
}

