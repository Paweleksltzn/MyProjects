import { Component, OnInit } from '@angular/core';
import { ListaSerwisService } from '../lista-serwis.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { HttpPortfelService } from '../http-portfel.service';

@Component({
  selector: 'app-podsumowanie',
  templateUrl: './podsumowanie.component.html',
  styleUrls: ['./podsumowanie.component.css']
})
export class PodsumowanieComponent implements OnInit {
 wlasciwosci=[];
  constructor(private serwis:ListaSerwisService,private router:Router,private portfel:HttpPortfelService) { }
  ngOnInit() {
      this.wlasciwosci[0] = this.serwis.wlasciwosci[0];
      this.wlasciwosci[1] = this.serwis.wlasciwosci[1];
  }
  zakonczSesje(){
    this.portfel.kwota+=this.wlasciwosci[0];
    this.serwis.zakupy=[];
    this.router.navigate(['/']);
  }
}
