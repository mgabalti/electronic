import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-portal-layout',
  imports: [ RouterOutlet,HeaderComponent, FooterComponent],
  templateUrl: './portal-layout.component.html',
  styleUrl: './portal-layout.component.scss'
})
export class PortalLayoutComponent {

}
