import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
})
export class DataFilterPipe implements PipeTransform {
  transform(items: any[], filterQuery: any): any[] {
    if (!filterQuery) return items;
    return items.filter((item) =>
      item.title.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }
}
