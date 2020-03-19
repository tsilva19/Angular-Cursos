import { Pipe, PipeTransform } from '@angular/core';


// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}