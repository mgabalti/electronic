import { Routes } from '@angular/router';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/portal-layout/portal-layout.component').then(
        (m) => m.PortalLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/homepage/homepage.component').then(
            (m) => m.HomepageComponent
          ),
      },
      {
        path:'listing',
        component:ProductListingComponent
      },
      {
        path:'product-detail/:id',
        loadComponent:()=>
          import('./pages/product-detail/product-detail.component').then(
            (m)=>m.ProductDetailComponent
          )
      },
      {
        path:'account',
        loadComponent:()=>
          import('./pages/account/account.component').then(
            (m)=>m.AccountComponent
          )
      },
      {
        path:'reset-password',
        loadComponent:()=>
          import('./shared/items/password-recovery/password-recovery.component').then(
            (m)=>m.PasswordRecoveryComponent
          )
      },
      {
        path:'track-order',
        loadComponent:()=>
          import('./pages/track-order/track-order.component').then(
            (m)=>m.TrackOrderComponent
          )
      }
    ],
  },
];
