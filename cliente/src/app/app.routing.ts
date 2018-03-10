// tslint:disable-next-line:eofline
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ClienteComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitudComponent  } from './components/solicitud/solicitud.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClienteComponent  },
    { path: 'solicitud', component: SolicitudComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


