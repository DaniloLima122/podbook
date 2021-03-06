import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@pages/home/home.component";
import { AuthGuard } from "app/core/auth/auth.guard";
import { LoginGuard } from "app/core/auth/login.guard";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    {
        path: 'explore',
        loadChildren: () => import('@pages/explore/explore.module').then(explore => explore.ExploreModule)
    },
    {
        path: 'podbooks',
        loadChildren: () => import('@pages/studio/studio.module').then(studio => studio.StudioModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'sign-up',
        loadChildren: () => import('@pages/account/sign-up/signup.module').then(account => account.SignUpModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => import('@pages/account/sign-in/signin.module').then(account => account.SignInModule),
        canActivate: [LoginGuard]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }