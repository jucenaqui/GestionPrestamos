import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing
import { appRoutingProviders, Routing } from './app.routing';

import { AppComponent } from './app.component';
import { ClienteComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
