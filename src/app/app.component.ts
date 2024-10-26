import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="App">
      <div class="gradient__bg">
        <app-navbar></app-navbar>
        <app-header></app-header>
      </div>
      <app-brand></app-brand>
      <app-what-gpt3></app-what-gpt3>
      <app-features></app-features>
      <app-possibility></app-possibility>
      <!-- <app-cta></app-cta> -->
      <!-- <app-blog></app-blog> -->
      <app-footer></app-footer>
    </div>
  `, styles: [`
          * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          scroll-behavior: smooth;
      }

      body {
          background: var(--color-bg);
      }

      a {
          color: unset;
          text-decoration: none;
      }

      .gradient__bg {

          /* ff 3.6+ */
          background:-moz-radial-gradient(circle at 3% 25%, #002853 0%, #040C18 100%);

          /* safari 5.1+,chrome 10+ */
          background:-webkit-radial-gradient(circle at 3% 25%, #002853 0%, #040C18 100%);

          /* opera 11.10+ */
          background:-o-radial-gradient(circle at 3% 25%, #002853 0%, #040C18 100%);

          /* ie 10+ */
          background:-ms-radial-gradient(circle at 3% 25%, #002853 0%, #040C18 100%);

          /* global 92%+ browsers support */
          background:radial-gradient(circle at 3% 25%, #002853 0%, #040C18 100%);

      }


      .gradient__text {
          background: var(--gradient-text);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      }

      .section__padding {
          padding: 4rem 6rem;
      }

      .section__margin {
          margin: 4rem 6rem;
      }

      .scale-up-center {
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
      }

      @-webkit-keyframes scale-up-center {
          0% {
            -webkit-transform: scale(0.5);
                    transform: scale(0.5);
          }
          100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }
        @keyframes scale-up-center {
          0% {
            -webkit-transform: scale(0.5);
                    transform: scale(0.5);
          }
          100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }

        @media screen and (max-width: 700px) {
            .section__padding {
                padding: 4rem;
            }

            .section__margin {
                margin: 4rem;
            }
        }

        @media screen and (max-width: 550px) {
          .section__padding {
              padding: 4rem 2rem;
          }

          .section__margin {
              margin: 4rem 2rem;
          }
      }
  `]
})

export class AppComponent {
  title = 'openai_landing';
}
