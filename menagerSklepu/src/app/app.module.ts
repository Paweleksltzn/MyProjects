import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NawigacjaComponent } from './nawigacja/nawigacja.component';
import { PrzedmiotyComponent } from './przedmioty/przedmioty.component';
import { ListaZakupowComponent } from './lista-zakupow/lista-zakupow.component';
import { SklepSerwisService } from './sklep-serwis.service';
import { KreatorPrzedmiotuComponent } from './kreator-przedmiotu/kreator-przedmiotu.component';
import { SzczegolyPrzedmiotuComponent } from './szczegoly-przedmiotu/szczegoly-przedmiotu.component';
import { EdycjaComponent } from './edycja/edycja.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ListaSerwisService } from './lista-serwis.service';
import { PodsumowanieComponent } from './podsumowanie/podsumowanie.component';
import { SortowaniePipe } from './sortowanie.pipe';
import { PortfelComponent } from './portfel/portfel.component';
import { HttpPortfelService } from './http-portfel.service';
import { InformacjeComponent } from './informacje/informacje.component';
import { UzytkownicyComponent } from './uzytkownicy/uzytkownicy.component';
import { LogowanieRejestracjaService } from './logowanie-rejestracja.service';
import { LogGuardService } from './log-guard.service';
import { LoggedGuardService } from './logged-guard.service';
import {HttpModule} from '@angular/http'
const routes=[
  {path:'listaPrzedmiotow',component:PrzedmiotyComponent,canActivate:[LogGuardService],children:[{path:'szczegolyPrzedmiotu/:id',
  component:SzczegolyPrzedmiotuComponent, canActivate:[SklepSerwisService]}]},
  { path:'listaZakupow',canActivate:[LogGuardService],component:ListaZakupowComponent},
  {path:'listaPrzedmiotow/:id/edycja',canActivate:[LogGuardService],component: EdycjaComponent},
  {path: 'kreatorPrzedmiotow',canActivate:[LogGuardService], component: KreatorPrzedmiotuComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home/:tryb',component:UzytkownicyComponent,canActivate:[LoggedGuardService]},
  {path:'home',component:InformacjeComponent,canActivate:[LoggedGuardService]},
  {path: 'error404', component: ErrorPageComponent},
  {path:'podsumowanie',component:PodsumowanieComponent,canActivate:[ListaSerwisService,LogGuardService]},
  {path: 'portfel',canActivate:[LogGuardService], component: PortfelComponent},
  {path: '**', redirectTo: 'error404'},
  
];
@NgModule({
  declarations: [
    AppComponent,
    NawigacjaComponent,
    PrzedmiotyComponent,
    KreatorPrzedmiotuComponent,
    ListaZakupowComponent,
    SzczegolyPrzedmiotuComponent,
    EdycjaComponent,
    ErrorPageComponent,
    PodsumowanieComponent,
    SortowaniePipe,
    PortfelComponent,
    InformacjeComponent,
    UzytkownicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule

  ],
  providers: [SklepSerwisService, ListaSerwisService,HttpPortfelService,LogowanieRejestracjaService,LogGuardService,LoggedGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
