import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutUsComponent } from '../../../pages/about-us/about-us.component';
import { OurServicesComponent } from '../../../pages/our-services/our-services.component';
import { OurClientsComponent } from '../../../pages/our-clients/our-clients.component';
import { OurProductsComponent } from '../../../pages/our-products/our-products.component';
import { ContactUsComponent } from '../../../pages/contact-us/contact-us.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, AboutUsComponent, OurServicesComponent, OurClientsComponent, OurProductsComponent, ContactUsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
