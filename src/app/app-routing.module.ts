import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './homePage/home/home.component';
import {SolarComponent} from './packages/solar/solar.component';
import {GeneratorComponent} from './packages/generator/generator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'solar',
    component: SolarComponent
  },
  {
    path: 'generator',
    component: GeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
