import { Component} from '@angular/core';
import { CovidService } from './services/covid.service';
import { country, datosGlobales } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-project';

  constructor(private covidService:CovidService) { }

  countries: country[];

  datosGlobal : datosGlobales;
  datosSp: country;

  ngOnInit(): void {
  }

  async datos(){
    this.datosGlobal=null;
    this.datosSp=null;
   const resultados = await this.covidService.resultadoPaises();
   console.log(resultados);
   this.countries = resultados.Countries;
  
    
  }

  async datosGl(){
    this.countries = [];
    const resultados = await this.covidService.resultadoPaises();
    console.log(resultados);
    this.datosGlobal = resultados.Global;
    const countries = resultados.Countries;
    for(var country of countries){
        if(country.Country=="Spain"){
           this.datosSp=country;
        }
      }


}
}