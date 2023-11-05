import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, catchError, tap } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnDestroy, OnInit {
  authSubscription: Subscription | any;
  topCardList: any;

  constructor(
    private dataService: DataServiceService
  ) {

  }
  ngOnInit(): void {
    this.getTopCardData();
  }

  getTopCardData() {
    // Store the subscription to be able to unsubscribe later
    this.authSubscription = this.dataService.getDashboardData().pipe(
      tap((response: any) => {
        this.topCardList = response?.top_cards
      }),
      catchError((error: any) => {
        throw error; // Return an empty array or a default value if needed
      })
    ).subscribe();
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}

