import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe',
})
export class MyCustomPipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      return value.substr(0, 4);
    }
    return null;
  }
}
