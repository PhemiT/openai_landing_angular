import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() imgUrl: string = '';
  @Input() date: string = '';
  @Input() text: string = '';
}
