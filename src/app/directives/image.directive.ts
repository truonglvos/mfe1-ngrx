import { Directive, ElementRef, Inject } from '@angular/core';
import { IMAGE_DOMAIN, SHELL_DOMAIN } from '../constants/common';

@Directive({
  selector: 'img',
})
export class ImageDirective {
  constructor(
    @Inject(SHELL_DOMAIN) private shell: string,
    @Inject(IMAGE_DOMAIN) private domain: string,
    private el: ElementRef
  ) {
    if (!this.shell) {
      throw new Error('No provider for SHELL_DOMAIN');
    }
    if (!this.domain) {
      throw new Error('No provider for IMAGE_DOMAIN');
    }
    const img = this.el.nativeElement as HTMLImageElement;
    img.src = img.src.replace(this.shell, this.domain);
  }
}
