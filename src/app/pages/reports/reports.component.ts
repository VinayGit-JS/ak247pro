import { Component } from '@angular/core';
import { WalletSummeryComponent } from "../../components/wallet-summery/wallet-summery.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [WalletSummeryComponent, TopBarComponent, SidebarComponent, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  transactions = [
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
    {
      date: '2025-03-31 18:03:14',
      openingBalance: 500,
      purchaseAmount: 500,
      quantity: 100,
      amountAfterTax: 2000,
      tax: 20,
      result: { number: 4, type1: 'SMALL', type2: 'RED' },
      select: 'SMALL',
      status: 'SUCCESS',
      winLoss: 500,
      closingBalance: 500
    },
  ]
}
