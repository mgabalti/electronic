import { compileHmrUpdateCallback } from '@angular/compiler';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Ichild {
  title: string | null;
  route:string | null;
}
interface ISubmenu {
  title: string | null;
  route: string | null;
  children: Ichild[] | null;
}
interface Idepart {
  title: string | null;
  submenu: ISubmenu[] | null;
}
export interface PageLink {
  title: string;
  route: string | null;
}

export interface Page {
  title: string;
  links: PageLink[];
}
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Toggle the sidebar
  // openSidebar = false;

  openSidebar = false;
  toggleSidebar() {
    this.openSidebar = !this.openSidebar;
  }

  // Close the sidebar when clicking outside
  // This is done using HostListener to listen for click events on the document

  constructor(private eRef: ElementRef) {}
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.openSidebar = false;
    }
  }



  currentChild: any[] = [];
  updateData(data: any) {
    this.currentChild = data;
    this.currentChild = !this.currentChild ? [] : this.currentChild;
  }


  currentItem: any[] = [];
  updateItem(data: any) {
    this.currentItem = data;
  }



  departmentMenu: Idepart[] = [
    { title: 'Value of the Day', submenu: null },
    { title: 'Top 100 Offers', submenu: null },
    { title: 'New Arivals', submenu: null },
    {
      title: 'Computers and Accessories',
      submenu: [
        {
          title: 'Computers and Accessories' , route:'',
          children: [
            { route:"", title: 'All Computers & Accessories' },
            { route:"", title: 'Laptops, Desktops and Monitors' },
            { route:"", title: 'Printer and Inks' },
            { route:"", title: 'Networking and Internet Devices' },
            { route:"", title: 'Computers Accessories' },
            { route:"", title: 'Softwares' },
            { route:"", title: 'All Electronics' },
          ],
        },

        {
          title: 'Offices & Stationery',
          route:null,
          children: [{ title: 'All Offices & stationery', route:null }],
        },
      ],
    },
    {
      title: 'Cameras, Audio & video',
      submenu: [
        {
          title: 'Camera & Photography',
          route:null,
          children: [
            { route:null, title: 'Lenses' },
            { route:null, title: 'Camera Accessories' },
            { route:null, title: 'Security and Surveillance' },
            { route:null, title: 'Binoculars and Telescopes' },
            { route:null, title: 'Camcorder' },
            { route:null, title: 'All Electonics' },
          ],
        },
        {
          title: 'Audio & Video',route:null,
          children: [
            {route:null, title: 'All Audio & Video' },
            {route:null, title: 'Headphones & Speakers' },
          ],
        },
      ],
    },
    {
      title: 'Mobiles and Tablets',
      submenu: [
        {
          title: 'Mobiles & Tablets',route:null,
          children: [
            { route:null, title: 'All Mobile Phones' },
            { route:null, title: 'SmartPhones' },
            { route:null, title: 'Refurbished Mobiles' },
            { route:null, title: 'All Mobile Accessories' },
            { route:null, title: 'Cases andcovers' },
            { route:null, title: 'All Electonics' },
          ],
        },
        {
          title: "",
          route:null,
          children: [{ title: 'All Tablets',route:null, }, { title: 'Tablet Accessories' ,route:null,}],
        },
      ],
    },
    {
      title: 'Movies, Musics and Video games',
      submenu: [
        {
          title: 'Movies & TV Shows',route:null,
          children: [
            { route:null, title: 'All Movies & TV Shows' },
            { route:null, title: 'All English' },
            { route:null, title: 'All Hindi' },
          ],
        },
        {
          title: 'Video Games',route:null,
          children: [
            { route:null, title: 'PC Games' },
            { route:null, title: 'Consoles' },
            { route:null, title: 'Accessories' },
          ],
        },
        {
          title: 'Music',route:null,
          children: [
            { route:null, title: 'All Music' },
            { route:null, title: 'Indian Classical' },
            { route:null, title: 'Musical Instruments' },
          ],
        },
      ],
    },
    {
      title: 'TV and Audio',
      submenu: [
        {
          title: 'Audio & Video',route:null,
          children: [
            { route:null, title: 'All Audio & Video' },
            { route:null, title: 'Televisions' },
            { route:null, title: 'Headphones' },
            { route:null, title: 'Speakers' },
            { route:null, title: 'Audio and Video Accessories' },
            { route:null, title: 'Electro Homes Appliances' },
          ],
        },
        {
          title: 'Music',route:null,
          children: [{ title: 'Televisions',route:null, }, { title: 'Headphones' , route:null,}],
        },
      ],
    },
    {
      title: 'Watches & Eyewear',
      submenu: [
        {
          title: 'Watches', route:null,
          children: [
            {route:null, title: 'All Watches' },
            {route:null, title: 'Mens Watches' },
            {route:null, title: 'Womens Watches' },
            {route:null, title: 'Premium Watches' },
            {route:null, title: 'Deals on Watches' },
          ],
        },
        { title: 'Eyewear',route:null, children: [{ title: 'Mens Sunglasses',route:null, }] },
      ],
    },
    {
      title: 'Car, motorbikes and Industrial',
      submenu: [
        {
          title: 'Car & Motorbike',route:null,
          children: [
            { route:null, title: 'All Cars and Bikes' },
            { route:null, title: 'Car & Bike Care' },
            { route:null, title: 'Lubricants' },
          ],
        },
        {
          title: 'Shop for Bike',route:null,
          children: [{ title: 'Halmets and Gloves',route:null, }, { title: 'Bike Parts',route:null, }],
        },

        {
          title: 'Industrial Supplies',route:null,
          children: [
            { route:null, title: 'All Industrial Supplies' },
            { route:null, title: 'Lab and Scientific' },
          ],
        },
      ],
    },

    {
      title: 'Accessories',
      submenu: [
        {
          title: "",
          route:null,
          children: [
            { route:null, title: 'Case' },
            { route:null, title: 'Chargers' },
            { route:null, title: 'Headphone Accessories' },
            { route:null, title: 'Headphone Cases' },
            { route:null, title: 'Headphones' },
            { route:null, title: 'Computer Accessories' },
            { route:null, title: 'Laptop Accessories' },
          ],
        },
      ],
    },
  ];

allPages: Page[] = [
  {
    title: 'Home page',
    links: [
      { title: 'Home v1', route: '/' },
      { title: 'Home v2', route: null },
      { title: 'Home v3', route: null },
      { title: 'Home v4', route: null },
      { title: 'Home v5', route: null },
      { title: 'Home v6', route: null },
      { title: 'Home v7', route: null },
    ],
  },
  {
    title: 'Shop Pages',
    links: [
      { title: 'Shop Grid', route: "listing" },
      { title: 'Shop Grid Extended', route: null },
      { title: 'Shop List View', route: null },
      { title: 'Shop List View Small', route: null },
      { title: 'Shop Left Sidebar', route: null },
      { title: 'Shop Full width', route: null },
      { title: 'Shop Right Sidebar', route: null },
    ],
  },
  {
    title: 'Product Categories',
    links: [
      { title: '4 Column Sidebar', route: null },
      { title: '5 Column Sidebar', route: null },
      { title: '6 Column Full width', route: null },
      { title: '7 Column Full width', route: null },
    ],
  },
  {
    title: 'Static Page',
    links: [
      { title: 'About', route: null },
      { title: 'Contact v1', route: null },
      { title: 'Contact v2', route: null },
      { title: 'FAQs', route: null },
      { title: 'Store Directory', route: null },
      { title: 'Terms and Conditions', route: null },
      { title: '404', route: null },
    ],
  },
  {
    title: 'Single Product Pages',
    links: [
      { title: 'Single Product Extended', route: null },
      { title: 'Single Product Fullwidth', route: null },
      { title: 'Single Product Sidebar', route: null },
    ],
  },
  {
    title: 'WooCommerce Pages',
    links: [
      { title: 'Shop', route: null },
      { title: 'Cart', route: null },
      { title: 'Checkout', route: null },
      { title: 'My Account', route: null },
      { title: 'Track your Order', route: null },
    ],
  },
  {
    title: 'Blog pages',
    links: [
      { title: 'Blog v1', route: null },
      { title: 'Blog v2', route: null },
      { title: 'Blog v3', route: null },
      { title: 'Blog Fullwidth', route: null },
      { title: 'Single Blog Post', route: null },
    ],
  },
  {
    title: 'Shop Columns',
    links: [
      { title: '7 Column Fullwidth', route: null },
      { title: '6 Column Fullwidth', route: null },
      { title: '5 Colomn Sidebar', route: null },
      { title: '4 Colomn Sidebar', route: null },
      { title: '3 Colomn Sidebar', route: null },
    ],
  },
];

}
