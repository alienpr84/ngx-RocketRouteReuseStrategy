import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseShowComponent } from './houses/house-show/house-show.component';

const routes: Routes = [
  
  Shell.childRoutes([
    { path: '', redirectTo: '/house-list', pathMatch: 'full'},
    { path: 'house-list', component: HouseListComponent},
    { path: 'house-show/:id', component: HouseShowComponent, data: { reuse: true } },
  ]),

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
