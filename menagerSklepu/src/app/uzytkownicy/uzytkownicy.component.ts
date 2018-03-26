import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogowanieRejestracjaService } from '../logowanie-rejestracja.service';

@Component({
  selector: 'app-uzytkownicy',
  templateUrl: './uzytkownicy.component.html',
  styleUrls: ['./uzytkownicy.component.css']
})
export class UzytkownicyComponent implements OnInit {
  tryb:string;
  blad:string;
  @ViewChild('autentykacja') formularz;
  constructor(private activeRoute:ActivatedRoute,private uzytkownicy:LogowanieRejestracjaService) { }

  ngOnInit() {
    this.tryb=this.activeRoute.snapshot.params['tryb'];
    this.uzytkownicy.setHome(true);
    this.uzytkownicy.setLogowanie(false);
    this.uzytkownicy.informacje.next([false,true,false]);
    this.uzytkownicy.blad.subscribe(blad=>{
      this.blad=blad;
    })
  }
  authentication(tryb){
    this.uzytkownicy.autentykacja(tryb,this.formularz.value.email,this.formularz.value.password);
  }
}