import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  footerLinks = [
    {
      title: 'Find It Fast',
      links: [
        {
          title: 'Laptops & Computers',
          route: '/categories/laptops-computers',
        },
        {
          title: 'Cameras & Photography',
          route: '/categories/cameras-photography',
        },
        {
          title: 'Smart Phones & Tablets',
          route: '/categories/smartphones-tablets',
        },
        {
          title: 'Video Games & Consoles',
          route: '/categories/video-games-consoles',
        },
        { title: 'TV & Audio', route: '/categories/tv-audio' },
        { title: 'Gadgets', route: '/categories/gadgets' },
        {
          title: 'Waterproof Headphones',
          route: '/categories/waterproof-headphones',
        },
      ],
    },
    {
      title: '',
      links: [
        { title: 'About', route: '/about' },
        { title: 'Contact', route: '/contact' },
        { title: 'Wishlist', route: '/wishlist' },
        { title: 'Compare', route: '/compare' },
        { title: 'FAQ', route: '/faq' },
        { title: 'Store Directory', route: '/store-directory' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { title: 'My Account', route: '/account' },
        { title: 'Track your Order', route: '/track-order' },
        { title: 'Customer Service', route: '/customer-service' },
        { title: 'Returns/Exchange', route: '/returns-exchange' },
        { title: 'FAQs', route: '/faqs' },
        { title: 'Product Support', route: '/product-support' },
      ],
    },
  ];

  socialLinks = [
    { href: '#', class: 'facebook', icon: 'fa-brands fa-facebook' },
    { href: '#', class: 'whatsapp', icon: 'fa-brands fa-whatsapp' },
    { href: '#', class: 'pinterest', icon: 'fa-brands fa-pinterest' },
    { href: '#', class: 'linkedin', icon: 'fa-brands fa-linkedin' },
    { href: '#', class: 'instagram', icon: 'fa-brands fa-instagram' },
    { href: '#', class: 'youtube', icon: 'fa-brands fa-youtube' },
    { href: '#', class: 'rss', icon: 'fa-solid fa-rss' },
  ];
}
