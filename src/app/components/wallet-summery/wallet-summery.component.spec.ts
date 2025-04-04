import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletSummeryComponent } from './wallet-summery.component';

describe('WalletSummeryComponent', () => {
  let component: WalletSummeryComponent;
  let fixture: ComponentFixture<WalletSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletSummeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalletSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
