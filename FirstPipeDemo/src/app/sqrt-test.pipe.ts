import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrtTest'
})
export class SqrtTestPipe implements PipeTransform{
  transform(value:number):number {
      return Math.sqrt(value);
  }

}
