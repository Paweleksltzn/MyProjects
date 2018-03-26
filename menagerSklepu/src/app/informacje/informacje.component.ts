import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogowanieRejestracjaService } from '../logowanie-rejestracja.service';

@Component({
  selector: 'app-informacje',
  templateUrl: './informacje.component.html',
  styleUrls: ['./informacje.component.css']
})
export class InformacjeComponent implements OnInit {

  constructor(private router:Router,private serwisLogowania:LogowanieRejestracjaService) { }

  ngOnInit() {
    this.serwisLogowania.setHome(true);
    this.serwisLogowania.setLogowanie(false);
    this.serwisLogowania.informacje.next([this.serwisLogowania.getHome(),this.serwisLogowania.getLogowanie(),
      this.serwisLogowania.getLogged()]);
  }
  zarzadzanie(tryb){
    this.router.navigate(['/','home',tryb]);
  }

}
