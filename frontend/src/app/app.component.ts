import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DataStatus } from './datastatus';
import * as Actions from './store/actions';
import * as Selectors from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store<{}>) { }

  dataStatus = DataStatus;
  dataStatus$ = this.store.select(Selectors.selectDataStatus);
  products$ = this.store.select(Selectors.selectData, { parentId: 0 });

  ngOnInit() {
    this.store.dispatch(Actions.loadGetParents());
  }
}
