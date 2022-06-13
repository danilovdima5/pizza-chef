import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[zoomInPic]',
})
export class ZoomInPicDirective {
  @HostListener('click', ['$event.target']) onClick = (
    target: HTMLImageElement
  ) => {
    target.classList.toggle('_open');
  };
}
