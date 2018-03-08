import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { WzorPrzedmiotu } from '../interfejsy/wzor-przedmiotu';
import { SklepSerwisService } from '../sklep-serwis.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-przedmioty',
  templateUrl: './przedmioty.component.html',
  styleUrls: ['./przedmioty.component.css']
})
export class PrzedmiotyComponent implements OnInit,OnDestroy {
  przedmioty:Array<WzorPrzedmiotu>;
  wybranyPrzedmiot=false;
  wracamUnsubscribe:Subscription;
  usunieto:Subscription;
  @ViewChild('wyszukaj')wybor;
  @ViewChild('kategoria')kategoria;
  constructor(private SklepService:SklepSerwisService,private Router:Router) { }
  szczegolyPrzedmiotu(przedmiot,i){
    this.wybranyPrzedmiot=true;
    this.Router.navigate(['listaPrzedmiotow','szczegolyPrzedmiotu',i]);
  }
  ngOnInit() {
    this.przedmioty = this.SklepService.zlapPrzedmioty();
    this.wybranyPrzedmiot=false;
    this.wracamUnsubscribe=this.SklepService.wracam.subscribe(data=>{
      this.wybranyPrzedmiot=false;
    });
    this.usunieto=this.SklepService.usunieto.subscribe(data=>{
      this.wybranyPrzedmiot=false;
      this.przedmioty.splice(+data,1);
    });
    for(let przedmiot of this.przedmioty){
      przedmiot.widocznosc=true;
    }
  }
  ngOnDestroy(){
    this.wracamUnsubscribe.unsubscribe();
    this.usunieto.unsubscribe();
  }
  kategoriaWybrana(zmienna){
    this.wybor.nativeElement.value="";
    for(let przedmiot of this.przedmioty){
      if(przedmiot.kategoria==zmienna){
      przedmiot.widocznosc=true;
      }
      else{
        przedmiot.widocznosc=false;
      }
      if(zmienna=='wszystko'){
        przedmiot.widocznosc=true;
      }
    }
    
  }
  przeszukuje(dane){
    console.log('wyszukanie dziala');
    for(let przedmiot of this.przedmioty){
      if(dane.length==0&&(this.kategoria.nativeElement.value==przedmiot.kategoria||this.kategoria.nativeElement.value=='wszystko')){
        przedmiot.widocznosc=true;
      }
      for(let i=0;i<dane.length;i++){
        if(przedmiot.nazwa[i]==dane[i].toUpperCase()&&(this.kategoria.nativeElement.value==przedmiot.kategoria||this.kategoria.nativeElement.value=='wszystko')) {
          przedmiot.widocznosc=true;
        }else{
          przedmiot.widocznosc=false;
          break;
        }
      }
     }
    }

}
