import { Component, TemplateRef } from '@angular/core';
import { Subscription, catchError, tap } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent {

  recentOrder: any
  authSubscription: Subscription | any;
  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  customerDetail: any;

  constructor(
    private dataService: DataServiceService,
    private modalService: BsModalService
  ) {
  }
  ngOnInit(): void {
    this.getNewUser();
  }

  getNewUser() {
    // Store the subscription to be able to unsubscribe later
    this.authSubscription = this.dataService.getDashboardData().pipe(
      tap((response: any) => {
        this.recentOrder = response?.recent_orders
      }),
      catchError((error: any) => {
        throw error; // Return an empty array or a default value if needed
      })
    ).subscribe();
  }

  openModal(template: TemplateRef<any>, order: any) {
    this.customerDetail = order;
    this.modalRef = this.modalService.show(template,
      Object.assign({}, this.config, { class: 'modal-dialog filter-popup  filter-room modal-dialog-centered' })
    );
  }

  close() {
    this.modalRef?.hide()
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

}
