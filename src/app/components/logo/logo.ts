import { Component } from '@angular/core';

/** Firmenlogo als Inline-SVG (kein HTTP-Request nötig). Farbe über `color` des Hosts. */
@Component({
  selector: 'jfu-logo',
  template: `
    <svg viewBox="0 0 2250 2250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo Jäger Fritz & Urs">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M1002.2,1966.56l-927.85,207.633l172.848,-922.037l875.968,-166.029l-120.966,880.433Zm-730.865,-843.159l152.957,-815.935l821.405,-113.165l-105.014,764.326l-869.348,164.774Zm1099.89,-946.395l706.65,-97.355l-57.877,712.312l-752.87,142.697l104.097,-757.654Zm638.525,741.079l-68.11,838.247l-812.381,181.794l120.351,-875.966l760.14,-144.075Z"
      />
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
})
export class Logo {}
