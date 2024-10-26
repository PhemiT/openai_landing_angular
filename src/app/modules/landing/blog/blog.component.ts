import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  imageUrls = {
    blog01: '../../../../assets/blog/blog01.png',
    blog02: 'assets/blog/blog02.png',
    blog03: '../../../../assets/blog/blog03.png',
    blog04: '../../../../assets/blog/blog04.png',
    blog05: '../../../../assets/blog/blog05.png'
  };
}
