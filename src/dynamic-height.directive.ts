import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[dynamicHeight]'
})
export class DynamicHeightDirective implements OnInit {

  @Input() isFullScreen: boolean;
  @Input() topBar: HTMLElement;
  @Input() bottomBar: HTMLElement;

  private _parentContainerHeight: number;
  private _componentSectionsHeight: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const topBarBorders = this.getBordersWidthByElement(this.topBar);
    const topBarHeight = this.topBar.offsetHeight + topBarBorders.borderBottom + topBarBorders.borderTop;

    const bottomBarBorders = this.getBordersWidthByElement(this.bottomBar);
    const bottomBarHeight = this.bottomBar.offsetHeight + bottomBarBorders.borderBottom + bottomBarBorders.borderTop;

    this._componentSectionsHeight = (topBarHeight + bottomBarHeight);

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

  getBordersWidthByElement(el: HTMLElement) {
    return {
      borderTop: parseFloat(getComputedStyle(el).borderTop.split(' ').join('')),
      borderBottom: parseFloat(getComputedStyle(el).borderBottom.split(' ').join(''))
    }
  }

}
