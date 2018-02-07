import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[contentResize]'
})
export class ContentResizeDirective implements OnInit {

  @Input('contentResize') isFullScreen: boolean;
  @Input() topBarHeight: any;
  @Input() bottomBarHeight: any;

  private _parentContainerHeight: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.isFullScreen) {
      this.el.nativeElement.style.height = (window.innerHeight - (this.topBarHeight + this.bottomBarHeight)).toString() + 'px';
    } else {
      this._parentContainerHeight = this.el.nativeElement.parentNode.parentNode.parentNode.height;
      this.el.nativeElement.style.height = (this._parentContainerHeight - (this.topBarHeight + this.bottomBarHeight)).toString() + 'px';
    }
  }

  @HostListener('window:resize', ['$event']) onWindowResize(event: any) {
    if (this.isFullScreen) {
      this.el.nativeElement.style.height = (window.innerHeight - (this.topBarHeight + this.bottomBarHeight)).toString() + 'px';
    } else {
      this.el.nativeElement.style.height = (this._parentContainerHeight - (this.topBarHeight + this.bottomBarHeight)).toString() + 'px';
    }
  }

}
