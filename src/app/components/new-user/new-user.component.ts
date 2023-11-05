import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, catchError, tap } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, OnDestroy {
  newUserList: any;

  authSubscription: Subscription | any;

  constructor(
    private dataService: DataServiceService
  ) {

  }
  ngOnInit(): void {
    this.getNewUser();
  }

  getNewUser() {
    // Store the subscription to be able to unsubscribe later
    this.authSubscription = this.dataService.getDashboardData().pipe(
      tap((response: any) => {
        this.newUserList = response?.new_users
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
