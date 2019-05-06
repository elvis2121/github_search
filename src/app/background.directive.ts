import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';


@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = "#bf1134"
   }

}
