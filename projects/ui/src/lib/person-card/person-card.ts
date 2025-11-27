import { Component, input, ViewEncapsulation } from '@angular/core';
import { InlineSvgDirective } from '../inline-svg/inline-svg';
import { PersonCardData } from '../models/person-card/person-card-data';
import { Button } from '../button/button';

@Component({
  selector: 'ai-lib-person-card',
  standalone: true,
  imports: [InlineSvgDirective, Button],
  templateUrl: './person-card.html',
  styleUrl: './person-card.css',
  encapsulation: ViewEncapsulation.None,
})
export class PersonCard {
  data = input<PersonCardData>();
}
