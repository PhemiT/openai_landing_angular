import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatGpt3Component } from './what-gpt3.component';

describe('WhatGpt3Component', () => {
  let component: WhatGpt3Component;
  let fixture: ComponentFixture<WhatGpt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatGpt3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatGpt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
