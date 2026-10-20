import { Component } from '@angular/core';
import { History } from '../history/history';
import { Today } from '../today/today';

@Component({
  imports: [History, Today],
  selector: 'jfu-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {}
