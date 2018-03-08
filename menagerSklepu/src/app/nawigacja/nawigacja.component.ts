import { Component, OnInit } from '@angular/core';
import { SklepSerwisService } from '../sklep-serwis.service';

@Component({
  selector: 'app-nawigacja',
  templateUrl: './nawigacja.component.html',
  styleUrls: ['./nawigacja.component.css']
})
export class NawigacjaComponent implements OnInit {

  constructor(private Serwis:SklepSerwisService) { }

  ngOnInit() {
  }

  wracamDoListy(){
    this.Serwis.wracam.next(false);
  }
}
