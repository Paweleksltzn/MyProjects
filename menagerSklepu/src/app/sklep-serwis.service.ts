import { Injectable } from '@angular/core';
import { WzorPrzedmiotu } from './interfejsy/wzor-przedmiotu';
import { Subject } from 'rxjs/Subject';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate,Router } from '@angular/router';
@Injectable()
export class SklepSerwisService implements CanActivate{
  wracam= new Subject();
  przedmioty = [];
  szczegolyPrzedmiotu = new Subject();
  usunieto = new Subject();
  edycja;
  zlapPrzedmioty(){
    return this.przedmioty;
  }
  dajSzczegoly(i) {
    return this.przedmioty[i];
  }
  constructor(private router:Router) { }
  zmianaIlosci(wartosc,indeks) {
    this.przedmioty[indeks].wartosc += wartosc;
  }
  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    if(this.przedmioty.length>=1){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
