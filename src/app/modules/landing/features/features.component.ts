import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  featuresData = [
    {
      title: 'Duolingo',
      text: 'Duolingo uses GPT-3 to provide French grammar corrections. An internal Duolingo study shows that use of this feature leads to measurably better second language writing skills!',
    },
    {
      title: 'Viable',
      text: 'Viable helps businesses better and more quickly understand what customers are telling them by using language models, including GPT-3, to analyze customer feedback and generate summaries and insights.',
    },
    {
      title: 'Keeper Tax',
      text: 'Keeper Tax helps freelancers automatically find tax-deductible expenses by using GPT-3 to interpret data from their bank statements into usable transaction information.',
    },
  ];
}
