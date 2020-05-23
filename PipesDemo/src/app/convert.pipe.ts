import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnits: string): unknown {
    if (!value) {
      return '';
    }
    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
        break;
      case 'm':
        return value * 1.60934 * 1000;
        break;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
        break;
      default:
        throw new Error('Target Unit not supported');
    }
  }
}
