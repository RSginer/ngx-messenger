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
  private _componentSectionsHeight: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this._componentSectionsHeight = (this.topBarHeight + this.bottomBarHeight) - 3;
    if (this.isFullScreen) {
      this.setFullScreenHeight();
    } else {
      this._parentContainerHeight = this.el.nativeElement.parentNode.parentNode.parentNode.height;
      this.setParentHeight();
    }
  }

  @HostListener('window:resize', ['$event']) onWindowResize(event: any) {
    if (this.isFullScreen) {
      this.setFullScreenHeight();
    } else {
      this.setParentHeight();
    }
  }

  setFullScreenHeight() {
    this.el.nativeElement.style.height = (window.innerHeight - this._componentSectionsHeight).toString() + 'px';
  }

  setParentHeight() {
    this.el.nativeElement.style.height = (this._parentContainerHeight - this._componentSectionsHeight).toString() + 'px';
  }

}
