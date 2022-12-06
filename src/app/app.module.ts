import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HighlightPlusModule} from "ngx-highlightjs/plus";
import { SyntaxeComponent } from './pages/syntaxe/syntaxe.component';
import { RouteurComponent } from './pages/routeur/routeur.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ParentComponent } from './pages/parent/parent.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterShortComponent } from './components/counter-short/counter-short.component';

@NgModule({
  declarations: [
    AppComponent,
    SyntaxeComponent,
    RouteurComponent,
    NotfoundComponent,
    ParentComponent,
    EnfantComponent,
    NavigationComponent,
    CounterComponent,
    CounterShortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighlightPlusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
