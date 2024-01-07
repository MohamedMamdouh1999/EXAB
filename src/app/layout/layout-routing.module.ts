import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'about-us', pathMatch: 'full' },
    { path: 'about-us', loadComponent: () => import('./../pages/about-us/about-us.component').then(c => c.AboutUsComponent) },
    { path: 'our-services', loadComponent: () => import('./../pages/our-services/our-services.component').then(c => c.OurServicesComponent) },
    { path: 'our-products', loadComponent: () => import('./../pages/our-products/our-products.component').then(c => c.OurProductsComponent) },
    { path: 'our-clients', loadComponent: () => import('./../pages/our-clients/our-clients.component').then(c => c.OurClientsComponent) },
    { path: 'contact-us', loadComponent: () => import('./../pages/contact-us/contact-us.component').then(c => c.ContactUsComponent) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
