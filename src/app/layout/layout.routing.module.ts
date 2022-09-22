import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: LayoutComponent,
        children: [
            {
                path:'taskapplication',
                loadChildren: () => import('../taskapplication/taskapplication.module').then(t => t.TaskapplicationModule)
            },
            {
                path: 'home',
                loadChildren: () => import('../home/home.module').then(h => h.HomeModule)
            },
            {
                path:'settings',
                loadChildren: () => import('../settings/settings.module').then(s => s.SettingsModule)
            },
            {
                path:'typeuser',
                loadChildren: () => import('../typeuser/typeuser.module').then(t => t.TypeuserModule)
            },
            {
                path:'typetask',
                loadChildren: () => import('../typetask/typetask.module').then(t => t.TypetaskModule)
            },
            {
                path:'activitytask',
                loadChildren: () => import('../activitytask/activitytask.module').then(a => a.ActivitytaskModule)
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {

}