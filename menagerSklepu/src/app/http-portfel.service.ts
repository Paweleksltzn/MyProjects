import { Injectable } from '@angular/core';

@Injectable()
export class HttpPortfelService {
  kwota=0;
  constructor() { }
  dajHajs(){
    return this.kwota;
  }
  dodaje(wartosc){
    wartosc=parseInt(wartosc);
    this.kwota=this.kwota+wartosc;
    console.log(typeof(this.kwota));
  }
  resetuje(){
    this.kwota=0;
  }
  odejmuje(wartosc){
    this.kwota=this.kwota-wartosc;
  }
  ustawPortfel(data){
    this.kwota=data;
  }
}
