    export interface RespuestaPaises {
        Message: string;
        Global: datosGlobales;
        Countries: country[];
        date: string;
    }

    export interface datosGlobales{
        NewConfirmed: number,
        TotalConfirmed: number,
        NewDeaths: number,
        TotalDeaths: number,
        NewRecovered: number,
        TotalRecovered: number

    }

    export interface country{
        Country: string,
        CountryCode: string,
        Slug: string,
        NewConfirmed: number,
        TotalConfirmed: number,
        NewDeaths: number,
        TotalDeaths: number,
        NewRecovered: number,
        TotalRecovered: number,
        Date: string,
        Premium: string
    }



