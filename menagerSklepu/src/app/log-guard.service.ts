import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogowanieRejestracjaService } from './logowanie-rejestracja.service';

@Injectable()
export class LogGuardService implements CanActivate{

  constructor(private uzytkownicySerwis:LogowanieRejestracjaService,private router:Router) { }

  canActivate(){
    if(this.uzytkownicySerwis.getLogged()){
      return true;
    }else {
      this.router.navigate(['/']);
    }
  }
}
