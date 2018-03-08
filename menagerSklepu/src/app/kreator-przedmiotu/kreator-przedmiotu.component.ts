import { Component, OnInit, ViewChild } from '@angular/core';
import { SklepSerwisService } from '../sklep-serwis.service';
import { WzorPrzedmiotu } from '../interfejsy/wzor-przedmiotu';

@Component({
  selector: 'app-kreator-przedmiotu',
  templateUrl: './kreator-przedmiotu.component.html',
  styleUrls: ['./kreator-przedmiotu.component.css']
})
export class KreatorPrzedmiotuComponent implements OnInit {
  @ViewChild('form') formularz;
  nowyPrzedmiot:WzorPrzedmiotu;
  opcjaPodstawowa="nabiał";
  constructor(private serwis:SklepSerwisService) { }
  onSubmit(){
    let x = true;
    this.nowyPrzedmiot= new WzorPrzedmiotu(this.formularz.value.nazwa.toUpperCase(),this.formularz.value.cena,
      this.formularz.value.waga,this.formularz.value.ilosc,this.formularz.value.opis,this.formularz.value.kategoria);
      const przedmioty = this.serwis.zlapPrzedmioty()
      for(let przedmiot of przedmioty){
      if(this.nowyPrzedmiot.nazwa === przedmiot.nazwa&&this.nowyPrzedmiot.kategoria === przedmiot.kategoria&&
        this.nowyPrzedmiot.cena === przedmiot.cena&&this.nowyPrzedmiot.waga === przedmiot.waga&&
        this.nowyPrzedmiot.opis === przedmiot.opis){
          x=false;
          przedmiot.ilosc += this.nowyPrzedmiot.ilosc;
        }
      }
      if(x){
      this.serwis.przedmioty.push(this.nowyPrzedmiot);
      }
      this.formularz.reset();
      this.formularz.form.patchValue({kategoria:'nabiał'})
      //console.log(this.serwis.przedmioty);
  }
  ngOnInit() {
    
    }
}
