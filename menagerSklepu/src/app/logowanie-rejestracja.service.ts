import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase'
import { ListaSerwisService } from './lista-serwis.service';
import { Subject } from 'rxjs/Subject';
import { HttpPortfelService } from './http-portfel.service';
import { SklepSerwisService } from './sklep-serwis.service';
@Injectable()
export class LogowanieRejestracjaService{
  token;
  throwEmailAndToken=new Subject<any>();
  dane;
  informacje = new Subject<any>();
  home;
  wczytanePrzedmioty = new Subject<any>();
  wczytanePieniadze=new Subject<any>();
  logowanie;
  logged;
  blad= new Subject<any>();
  constructor(private activeRoute:ActivatedRoute,private przedmiotySerwis: SklepSerwisService,private router:Router,private pieniadze:HttpPortfelService) { }
  setLogged(tryb){
     this.logged=tryb;
  }
  setLogowanie(tryb){
    this.logowanie=tryb;;
  }
  setHome(tryb){
     this.home=tryb;
  }
  getLogged(){
    return this.logged;
  }
  getLogowanie(){
    return this.logged;
  }
  getHome(){
    return this.logged;
  }
  autentykacja(tryb,email,haslo){
    let emailValidator='';
    for(let i=0;i<=email.length-1;i++){
      if(email[i]!='@'&&email[i]!='.'){
        emailValidator+=email[i];
      }
    }
    const dane={email:emailValidator+haslo[0]+haslo[haslo.length-1],haslo:haslo};
    if(tryb==="logowanie"){
      firebase.auth().signInWithEmailAndPassword(email,haslo).then(response=>{
        firebase.auth().currentUser.getToken().then(token=>{
          this.token=token
          this.throwEmailAndToken.next([dane.email,this.token]);
          this.pieniadze.ustawPortfel(0);
          this.przedmiotySerwis.setPrzedmioty([]);
          this.router.navigate(['/','listaPrzedmiotow']);
        });
        this.dane=dane;
        this.setLogged(true);
        this.setLogowanie(false);
        this.informacje.next([false,false,this.getLogged]);
      })
      .catch(error=>{
        this.blad.next('haslo');
      });
    }
    if(tryb==="rejestracja"){
      firebase.auth().createUserWithEmailAndPassword(email,haslo).then(email=>{
        this.router.navigate(['/']);
      })
      .catch(error=>{
        this.blad.next('email');
      });
    }
  }
}

