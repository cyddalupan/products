import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { Product } from '../product';
import * as Actions from '../store/actions';
import * as Selectors from '../store/selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() checked = false;
  checkAll = false;
  products$: Observable<Product[]>;
  constructor(private readonly store: Store<{}>) { }

  ngOnInit() {
    this.products$ = this.store.select(Selectors.selectData, { parentId: this.product.id });
  }

  onChange(event) {
    this.checked = event;
    if (this.checked) {
      this.store.dispatch(Actions.loadGetChildren({ id: this.product.id }));
    }
  }

  onCheckAll(event) {
    if (event) {
      this.store.dispatch(Actions.loadGetChildrenSubchildren({ id: this.product.id }));
    }
  }
}
