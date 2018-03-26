import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LogowanieRejestracjaService } from './logowanie-rejestracja.service';

@Injectable()
export class LoggedGuardService implements CanActivate{

  constructor(private router:Router,private uzytkownicy:LogowanieRejestracjaService) { }
  canActivate(){
    if(!this.uzytkownicy.getLogged()){
      return true;
    }
    else{
      this.router.navigate(['/','listaPrzedmiotow']);
    }
  }

}
