import {Component, input, output, ViewEncapsulation} from '@angular/core';
import {ButtonSize, ButtonVariant} from '../types/button-variants';

@Component({
  selector: 'ai-lib-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  encapsulation: ViewEncapsulation.None
})
export class Button {
  public variant = input<ButtonVariant>('primary');
  public size = input.required<ButtonSize>();
  public fullWidth = input<boolean>();
  public disabled = input<boolean>();

  public clicked = output<void>();
}
