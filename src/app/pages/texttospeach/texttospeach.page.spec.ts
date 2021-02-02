import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TexttospeachPage } from './texttospeach.page';

describe('TexttospeachPage', () => {
  let component: TexttospeachPage;
  let fixture: ComponentFixture<TexttospeachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexttospeachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TexttospeachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
