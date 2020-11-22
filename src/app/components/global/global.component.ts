import { Component, OnInit, Input } from '@angular/core';
import { datosGlobales } from '../../interfaces/interfaces';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  @Input() globalMostrar: any;
  constructor() { }

  ngOnInit(): void {
  }

}
