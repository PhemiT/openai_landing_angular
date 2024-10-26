import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  brandImages = {
    google: '../assets/google.png',
    slack: '../assets/slack.png',
    atlassian: '../assets/atlassian.png',
    dropbox: '../assets/dropbox.png',
    shopify: '../assets/shopify.png'
  };
}
