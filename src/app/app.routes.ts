import { Routes } from '@angular/router';

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
        loadComponent:()=>
          import('./pages/product-listing/product-listing.component').then(
            (m)=>m.ProductListingComponent
          )
      },
      {
        path:'product-detail/:id',
        loadComponent:()=>
          import('./pages/product-detail/product-detail.component').then(
            (m)=>m.ProductDetailComponent
          )
      }
    ],
  },
];
