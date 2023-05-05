import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { OneMovieComponent } from './pages/one-movie.component';


const routes: Routes = [
{path: '', component: HomeComponent, pathMatch: 'full'},
{path: 'movie/:movieName', component: OneMovieComponent, pathMatch: 'full'},
 { path: "**", redirectTo: ""}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
