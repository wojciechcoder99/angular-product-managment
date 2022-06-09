import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceDashToSpace'
})
export class ReplaceDashToSpacePipe implements PipeTransform {

  transform(value: string, character: string): unknown {
    return value.replace(character, ' ');
  }

}
