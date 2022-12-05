import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HighlightPlusModule} from "ngx-highlightjs/plus";
import { SyntaxeComponent } from './pages/syntaxe/syntaxe.component';
import { RouteurComponent } from './pages/routeur/routeur.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SyntaxeComponent,
    RouteurComponent,
    NotfoundComponent
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
