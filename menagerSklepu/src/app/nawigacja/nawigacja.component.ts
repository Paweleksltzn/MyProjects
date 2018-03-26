import { Component, OnInit } from '@angular/core';
import { SklepSerwisService } from '../sklep-serwis.service';
import { LogowanieRejestracjaService } from '../logowanie-rejestracja.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Http } from '@angular/http';
import { HttpPortfelService } from '../http-portfel.service';
@Component({
  selector: 'app-nawigacja',
  templateUrl: './nawigacja.component.html',
  styleUrls: ['./nawigacja.component.css']
})
export class NawigacjaComponent implements OnInit {
  home:boolean;
  logging:boolean;
  logged:boolean;
  dane;
  constructor(private Serwis:SklepSerwisService,private kontrolaUprawnien:LogowanieRejestracjaService,private router:Router,
    private http:Http,private portfel:HttpPortfelService) { }

  ngOnInit() {
    this.kontrolaUprawnien.informacje.subscribe(data=>{
      this.home=data[0];
      this.logging=data[1];
      this.logged=data[2];
    });
    this.kontrolaUprawnien.throwEmailAndToken.subscribe(data=>{
      this.dane=data;
    })
  }

  wracamDoListy(){
    this.Serwis.wracam.next(false);
  }
  goHome(){
    this.kontrolaUprawnien.setHome(true);
    this.kontrolaUprawnien.setLogowanie(false);
    this.router.navigate(['/','home']);
  }
  logOut(){
    firebase.auth().signOut();
    this.kontrolaUprawnien.informacje.next([true,false,false]);
    this.kontrolaUprawnien.setHome(true);
    this.kontrolaUprawnien.setLogged(false);
    this.kontrolaUprawnien.setLogowanie(false);
    this.router.navigate(['/']);
  }
  saveData(){
    if(confirm('Czy napewno chcesz nadpisac dane?')){
    this.http.put("https://shopmenager.firebaseio.com/"+this.dane[0]+"przedmioty.json?auth=" +this.dane[1],this.Serwis.zlapPrzedmioty()).subscribe(response=> {
    },error=>{
    });
    this.http.put("https://shopmenager.firebaseio.com/"+this.dane[0]+"portfel.json?auth="+this.dane[1],this.portfel.dajHajs()).subscribe(response=>{
    },error => {
    });
  }
  }
  wczytajDane() {
    if(confirm('Czy napewno chcesz wczytac dane z bazy?')){
    let portfel =0;
    let przedmioty =[];
    this.http.get("https://shopmenager.firebaseio.com/"+this.dane[0]+"przedmioty.json?auth="+this.dane[1]).subscribe(response=> {
      przedmioty = response.json();
      if(!przedmioty) {
        przedmioty=[];
      }
      for(const przedmiot of przedmioty) {
        if(!przedmiot.opis) {
          przedmiot.opis='';
        }
      }
      this.Serwis.setPrzedmioty(przedmioty);
      this.kontrolaUprawnien.wczytanePrzedmioty.next(przedmioty);
    },
  error=> {
    przedmioty=[];
    this.Serwis.setPrzedmioty(przedmioty);
    this.kontrolaUprawnien.wczytanePrzedmioty.next(przedmioty);
  });
  this.http.get('https://shopmenager.firebaseio.com/'+this.dane[0]+'portfel.json?auth='+ this.dane[1]).subscribe(response => {

    portfel = response.json()||0;
    this.portfel.ustawPortfel(portfel);
    this.kontrolaUprawnien.wczytanePieniadze.next(portfel);
  },error => {
    portfel = 0;
    this.portfel.ustawPortfel(portfel);
    this.kontrolaUprawnien.wczytanePieniadze.next(portfel);
  });
  }
  }
}
