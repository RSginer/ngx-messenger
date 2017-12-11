import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[contentResize]'
})
export class ContentResizeDirective {


  constructor(private el: ElementRef) {
    this.el.nativeElement.style.height = (window.innerHeight - 140).toString() + 'px';
  }

  @HostListener('window:resize', ['$event']) onWindowResize(event: any) {
    this.el.nativeElement.style.height = (window.innerHeight - 140).toString() + 'px';
  }

}
