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

const routes=[
  {path:'listaPrzedmiotow',component:PrzedmiotyComponent,children:[{path:'szczegolyPrzedmiotu/:id',
  component:SzczegolyPrzedmiotuComponent, canActivate:[SklepSerwisService]}]},
  { path:'listaZakupow',component:ListaZakupowComponent},
  {path:'listaPrzedmiotow/:id/edycja',component: EdycjaComponent},
  {path: 'kreatorPrzedmiotow', component: KreatorPrzedmiotuComponent},
  {path: '', redirectTo: 'listaPrzedmiotow', pathMatch: 'full'},
  {path: 'error404', component: ErrorPageComponent},
  {path:'podsumowanie',component:PodsumowanieComponent,canActivate:[ListaSerwisService]},
  {path: '**', redirectTo: 'error404'}
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
    PodsumowanieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [SklepSerwisService, ListaSerwisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
