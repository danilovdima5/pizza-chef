import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputNoDots]',
})
export class InputNoDotsDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event.target.value']) onInput = (value: string) => {
    this.el.nativeElement.value = value.split('.').join('');
  };
}
