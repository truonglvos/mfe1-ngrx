import { Directive, ElementRef, Inject, Input, OnChanges } from '@angular/core';
import { IMAGE_DOMAIN } from '../constants/common';

@Directive({
  selector: '[appBgImage]',
})
export class BgImageDirective implements OnChanges {
  @Input() src: string = '';
  constructor(
    @Inject(IMAGE_DOMAIN) private domain: string,
    private el: ElementRef
  ) {
    if (!this.domain) {
      throw new Error('No provider for IMAGE_DOMAIN');
    }
  }
  ngOnChanges(): void {
    if (this.src) {
      const htmlElement = this.el.nativeElement as HTMLElement;
      htmlElement.style.backgroundImage = `url("${this.domain}${this.src}")`;
    }
  }
}
