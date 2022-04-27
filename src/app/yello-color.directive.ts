import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYelloColor]',
})
export class YelloColorDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.background = 'yellow';
  }
}



// let ac="abcdadfd" 
// only 4 char 

// {{ ac | shorten}