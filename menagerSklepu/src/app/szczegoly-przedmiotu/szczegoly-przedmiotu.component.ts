import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ListaSerwisService } from '../lista-serwis.service';
import { SklepSerwisService } from '../sklep-serwis.service';


@Component({
  selector: 'app-szczegoly-przedmiotu',
  templateUrl: './szczegoly-przedmiotu.component.html',
  styleUrls: ['./szczegoly-przedmiotu.component.css']
})
export class SzczegolyPrzedmiotuComponent implements OnInit,OnDestroy{
  przedmiot;
  indeks:number;
  warunek;
  @ViewChild('doZakupow')doZakupow:ElementRef;
  constructor(private Serwis:SklepSerwisService,private ActivatedRoute:ActivatedRoute,
    private Renderer:Renderer2,private router:Router,private listaSerwis:ListaSerwisService) { }
  
  ngOnInit() {
    this.ActivatedRoute.params.subscribe(data=>{
      this.warunek=false;
      this.Renderer.addClass(this.doZakupow.nativeElement,'pointer');
      this.Renderer.removeClass(this.doZakupow.nativeElement,'disabled');
      this.indeks=+data['id'];
    this.przedmiot=this.Serwis.dajSzczegoly(+data['id']);
    console.log('wkracza przedmiot');
    console.log(this.przedmiot);
    if(this.przedmiot.ilosc<=0){
      this.warunek=true;
      this.Renderer.addClass(this.doZakupow.nativeElement,'disabled');
      this.Renderer.removeClass(this.doZakupow.nativeElement,'pointer');
    }  
    });
  }
  ngOnDestroy(){
  }
  dodaj(){
    this.przedmiot.ilosc++;
    this.warunek=false;
    this.Serwis.zmianaIlosci(1,this.indeks);
    this.Renderer.addClass(this.doZakupow.nativeElement,'pointer');
    this.Renderer.removeClass(this.doZakupow.nativeElement,'disabled');
  }
  odejmij(){
    this.przedmiot.ilosc--;
    if(this.przedmiot.ilosc<=0){
      this.warunek=true;
      this.Renderer.addClass(this.doZakupow.nativeElement,'disabled');
      this.Renderer.removeClass(this.doZakupow.nativeElement,'pointer');
    }
    this.Serwis.zmianaIlosci(-1,this.indeks);
  }
  usunieto(){
    console.log(this.indeks);
    this.Serwis.usunieto.next(this.indeks);
    this.router.navigate(['../']);
  }
  edycja(przedmiot){
    this.router.navigate(['listaPrzedmiotow',this.indeks,'edycja'],{queryParams:{nazwa:przedmiot.nazwa,cena:przedmiot.cena,
      waga:przedmiot.waga,ilosc:przedmiot.ilosc,kategoria:przedmiot.kategoria,opis:przedmiot.opis}});
  }
  doZakupkow(przedmiot){
    if(this.przedmiot.ilosc>0){
    this.przedmiot.ilosc--;
    if(this.przedmiot.ilosc<=0){
      this.warunek=true;
      this.Renderer.addClass(this.doZakupow.nativeElement,'disabled');
      this.Renderer.removeClass(this.doZakupow.nativeElement,'pointer');
    }
    this.listaSerwis.nowyZakup(przedmiot,this.indeks);
  }
}
}
