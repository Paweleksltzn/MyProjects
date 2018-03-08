import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WzorPrzedmiotu } from '../interfejsy/wzor-przedmiotu';
import { SklepSerwisService } from '../sklep-serwis.service';

@Component({
  selector: 'app-edycja',
  templateUrl: './edycja.component.html',
  styleUrls: ['./edycja.component.css']
})
export class EdycjaComponent implements OnInit {
  @ViewChild('form')form;
  nazwaa:string;cenaa:number;iloscc:number;wagaa:number;kategoriaa:string;;opiss:string;
  id:number;
  constructor(private ActiveRoute:ActivatedRoute,private Serwis:SklepSerwisService,private router:Router) { }

  ngOnInit() {
    this.nazwaa=this.ActiveRoute.snapshot.queryParams['nazwa'];
    this.cenaa=+this.ActiveRoute.snapshot.queryParams['cena'];
    this.wagaa=+this.ActiveRoute.snapshot.queryParams['waga'];
    this.iloscc=+this.ActiveRoute.snapshot.queryParams['ilosc'];
    this.kategoriaa=this.ActiveRoute.snapshot.queryParams['kategoria'];
    this.opiss=this.ActiveRoute.snapshot.queryParams['opis'];
    this.id=this.ActiveRoute.snapshot.params['id'];
  }
  onSubmit(){
    const przedmiot = new WzorPrzedmiotu(this.nazwaa,this.cenaa,this.wagaa,this.iloscc,this.opiss,this.kategoriaa);
    this.Serwis.przedmioty[this.id]=przedmiot;
    this.router.navigate(['../']);
  }

}
