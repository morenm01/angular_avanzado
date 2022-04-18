import { PagesRoutingModule } from './pages/pages-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing.module';


const routes: Routes = [
/*{ path: '',
    loadChildren: ()=> import( './pages/pages.module' ).then( m => m.PagesModule)
  },*/
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
