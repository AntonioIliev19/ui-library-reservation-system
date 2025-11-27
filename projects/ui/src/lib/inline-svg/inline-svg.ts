import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { take } from 'rxjs';

@Directive({
  selector: '[aiLibInlineSvg]',
  standalone: true,
})
export class InlineSvgDirective implements OnChanges {
  @Input('aiLibInlineSvg')
  public iconName: string | undefined;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private httpClient: HttpClient,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['iconName'] && this.iconName) {
      const iconUrl = `icons/${this.iconName}.svg`;
      this.httpClient
        .get(iconUrl, { responseType: 'text' })
        .pipe(take(1))
        .subscribe((svgContent) => {
          this.elementRef.nativeElement.innerHTML = '';
          this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', svgContent);
        });
    }
  }
}
