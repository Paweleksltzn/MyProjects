import { Component, OnInit } from '@angular/core';

import { ListaSerwisService } from '../lista-serwis.service';
import { SklepSerwisService } from '../sklep-serwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-zakupow',
  templateUrl: './lista-zakupow.component.html',
  styleUrls: ['./lista-zakupow.component.css']
})
export class ListaZakupowComponent implements OnInit {
  dokladanieActive=[];
  odladanieActive=[];
  zakupy;
  doPodsumowania=[];
   
  constructor(private zakupySerwis:ListaSerwisService,private serwisSklepu:SklepSerwisService,private router:Router) { }
  ngOnInit() {
    this.zakupy = this.zakupySerwis.dawajZakupy();
      for(let i=0;i<this.zakupy.length;i++){
        if(this.zakupy[i].ilosc>0){
          this.odladanieActive[i]=true;
        }else{
          this.odladanieActive[i]=false;
        }
        for(let a = 0;a<this.serwisSklepu.przedmioty.length;a++){
        if(this.serwisSklepu.przedmioty[a].ilosc>0 &&this.serwisSklepu.przedmioty[a].nazwa===this.zakupy[i].nazwa&&
          this.serwisSklepu.przedmioty[a].kategoria===this.zakupy[i].kategoria){
          this.dokladanieActive[i]=true;
          break;
        }else{
          this.dokladanieActive[i]=false;
        }
      }
      }
  }
  odkladam(zakup,index){
    this.dokladanieActive[index]=true;
    const przedmioty = this.serwisSklepu.zlapPrzedmioty();
    for(let i=0;i<przedmioty.length;i++){
      if(zakup.nazwa ===przedmioty[i].nazwa&& zakup.waga===przedmioty[i].waga&&
        zakup.cena===przedmioty[i].cena && zakup.kategoria === przedmioty[i].kategoria &&zakup.opis===przedmioty[i].opis) {
        zakup.ilosc--;
        przedmioty[i].ilosc++;
        if(zakup.ilosc<=0){
          this.odladanieActive[index]=false;
        }
      }
    }
  }
    dokladam(zakup,index){
    this.odladanieActive[index]=true;
    const przedmioty = this.serwisSklepu.zlapPrzedmioty();
    for(let i=0;i<przedmioty.length;i++){
      if(zakup.nazwa ===przedmioty[i].nazwa&& zakup.waga===przedmioty[i].waga&&zakup.cena===przedmioty[i].cena &&
         zakup.kategoria === przedmioty[i].kategoria &&zakup.opis===przedmioty[i].opis) {
        zakup.ilosc++;
        przedmioty[i].ilosc--;
        if(przedmioty[i].ilosc<=0){
          this.dokladanieActive[index]=false;
        }
      }
    }
  }
  zakupUsuniety(zakup,index){
    const przedmioty = this.serwisSklepu.zlapPrzedmioty();
    for(let i=0;i<przedmioty.length;i++){
      if(zakup.nazwa ===przedmioty[i].nazwa&& zakup.waga===przedmioty[i].waga&&zakup.cena===przedmioty[i].cena &&
         zakup.kategoria === przedmioty[i].kategoria &&zakup.opis===przedmioty[i].opis) {
        przedmioty[i].ilosc+=zakup.ilosc;
        this.zakupy.splice(index,1);
      }
    }
  }
  reset(){
   const czyPewien = confirm("Czy na pewno chcesz zresetowac swoją listę zakupow?");
   if(czyPewien){
    const przedmioty = this.serwisSklepu.zlapPrzedmioty();
    for(let zakup of this.zakupy){
    for(let i=0;i<przedmioty.length;i++){
      if(zakup.nazwa ===przedmioty[i].nazwa&& zakup.waga===przedmioty[i].waga&&
        zakup.cena===przedmioty[i].cena && zakup.kategoria === przedmioty[i].kategoria &&
        zakup.opis===przedmioty[i].opis) {
        przedmioty[i].ilosc+=zakup.ilosc;
        }
      }
     }
  this.zakupy=[];
  this.zakupySerwis.resetujZakupy();
    }
  }
  podsumowanie(){
    let cena=0;
    let waga=0;
    for(let zakup of this.zakupy){
      cena+=zakup.cena*zakup.ilosc;
      waga+=zakup.waga*zakup.ilosc;
    }
    console.log(cena);
    this.doPodsumowania[0]=cena;
    this.doPodsumowania[1]=waga;
    console.log(this.doPodsumowania);
    this.zakupySerwis.wlasciwosci=this.doPodsumowania;
    this.router.navigate(['/','podsumowanie']);
  }
}
