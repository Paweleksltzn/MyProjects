export class WzorPrzedmiotu {
    nazwa:string;
    waga:number;
    ilosc:number;
    cena:number;
    widocznosc:boolean;
    opis:string;
    kategoria:string;
    index:number;
    constructor(nazwa,cena,waga,ilosc,opis,kategoria, index?){
        this.cena=cena;
        this.waga=waga;
        this.ilosc=ilosc;
        this.nazwa=nazwa;
        this.opis=opis;
        this.widocznosc = true;
        this.kategoria=kategoria;
        if(index){
        this.index=index;
        }
    }
}