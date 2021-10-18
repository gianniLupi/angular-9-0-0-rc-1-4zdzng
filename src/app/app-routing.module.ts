import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    MainComponent,
    HomeComponent,
    ContentComponent,
} from './pages';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '', component: MainComponent, 
        children: [
            { path: '', redirectTo: 'content', pathMatch: 'full' },
            { path: 'content', component: ContentComponent },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }