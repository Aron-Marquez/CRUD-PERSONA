import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title:'home'
    },
    {
        path:'persona',
        component:PersonaComponent,
        title:'persona'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
