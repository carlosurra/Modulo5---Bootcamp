import { Component, Input } from '@angular/core';

@Component({
  selector: 'sn-welcome-hero',
  templateUrl: './welcome-hero.component.html',
  styles: [
    `
      i {
        width: 40px;
      }
    `
  ]
})
export class WelcomeHeroComponent {
  @Input() rows: HeroItem[];
}
