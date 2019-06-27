import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    { id: 1, customer: {id: 1, name: 'Maxima', country: 'Latvia', email: 'info@maxima.lv'}, total: 230, placed: new Date(2019,6,1), fulfilled: new Date(2019,6,2)},
    { id: 1, customer: {id: 1, name: 'Maxima', country: 'Latvia', email: 'info@maxima.lv'}, total: 230, placed: new Date(2019,6,1), fulfilled: new Date(2019,6,2)},
    { id: 1, customer: {id: 1, name: 'Maxima', country: 'Latvia', email: 'info@maxima.lv'}, total: 230, placed: new Date(2019,6,1), fulfilled: new Date(2019,6,2)},
    { id: 1, customer: {id: 1, name: 'Maxima', country: 'Latvia', email: 'info@maxima.lv'}, total: 230, placed: new Date(2019,6,1), fulfilled: new Date(2019,6,2)},
    { id: 1, customer: {id: 1, name: 'Maxima', country: 'Latvia', email: 'info@maxima.lv'}, total: 230, placed: new Date(2019,6,1), fulfilled: new Date(2019,6,2)}
  ];

  ngOnInit() {
  }

}
