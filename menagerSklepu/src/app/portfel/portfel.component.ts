import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpPortfelService } from '../http-portfel.service';
import { LogowanieRejestracjaService } from '../logowanie-rejestracja.service';

@Component({
  selector: 'app-portfel',
  templateUrl: './portfel.component.html',
  styleUrls: ['./portfel.component.css']
})
export class PortfelComponent implements OnInit {
  validator=false;
  kwota:number;
  roznica=false;
  @ViewChild('wartosc') wartosc;
  constructor(private portfelSerwis:HttpPortfelService,private uprawnienia:LogowanieRejestracjaService) { }

  ngOnInit() {
    this.kwota = this.portfelSerwis.dajHajs();
    this.uprawnienia.wczytanePieniadze.subscribe(data=>{
      this.kwota=data;
    })
  }
  zmianaWartosci(wartosc){
    if(wartosc>0&& typeof(wartosc)!=='number'){
      this.validator=true;
      if(wartosc>this.kwota){
        this.roznica=true;
      }else{
        this.roznica=false;
      }
    }
    else {
      this.validator=false;
    }
    console.log(this.validator);
  }
  dodaje(wartosc){
    this.wartosc.nativeElement.value=null;
    this.portfelSerwis.dodaje(wartosc);
    this.validator=false;
    this.kwota = this.portfelSerwis.dajHajs();
  }
  resetuje(){
    this.portfelSerwis.resetuje();
    this.wartosc.nativeElement.value=null;
    this.validator=false;
    this.kwota = this.portfelSerwis.dajHajs();
  }
  odejmuje(wartosc){
    this.portfelSerwis.odejmuje(wartosc);
    this.wartosc.nativeElement.value=null;
    this.validator=false;
    this.kwota = this.portfelSerwis.dajHajs();
  }
}
