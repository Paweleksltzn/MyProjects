import { Injectable } from '@angular/core';
import { WzorPrzedmiotu } from './interfejsy/wzor-przedmiotu';
import { CanActivate,Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ListaSerwisService implements CanActivate{
  zakupy=[];
  aktualizacja = true;
  wlasciwosci = [];
  constructor(private router:Router) { }

  nowyZakup(przedmiot,index){
      for(let zakup of this.zakupy){
        if(zakup.nazwa==przedmiot.nazwa && zakup.cena==przedmiot.cena &&
          zakup.waga==przedmiot.waga && zakup.kategoria==przedmiot.kategoria &&zakup.opis==przedmiot.opis) {
            zakup.ilosc++;
            this.aktualizacja =false;
            console.log('if dziala');
          }
      }
      const zakupik = przedmiot;
      if(this.aktualizacja){
        console.log('nowy zakup');
    this.zakupy.push(new WzorPrzedmiotu(zakupik.nazwa,zakupik.cena,zakupik.waga,1,zakupik.opis,zakupik.kategoria,index));
      }
      this.aktualizacja=true;
  }
  dawajZakupy(){
    return this.zakupy;
  }
  resetujZakupy(){
    this.zakupy= [];
  }
  canActivate(){
    if(this.zakupy.length>0){
      return true;
    }else{
      this.router.navigate(['/','listaZakupow']);
      return false;
    }
  }
}
