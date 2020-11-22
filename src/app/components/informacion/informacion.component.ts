import { Component, OnInit,Input } from '@angular/core';
import { country } from '../../interfaces/interfaces';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  @Input() informacionMostrar: country;
  constructor() { }

  ngOnInit(): void {
  }

}
