import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as HomeSelectors from "../../state/home.selectors";
import * as HomeActions from "../../state/home.actions";
import { DataModel, User } from 'src/app/core/models';
import { UserSelectors } from 'src/app/core/state/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public personalFeed$!: Observable<DataModel[]>;
  public orgFeed$!: Observable<DataModel[]>;
  public user$!: Observable<User | null>;
  public loadingFeeds$!: Observable<boolean>;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.dispatch(HomeActions.homePageInitialized());

    this.user$ = this.store.select(UserSelectors.getUser);
    this.loadingFeeds$ = this.store.select(HomeSelectors.getLoading);
    this.personalFeed$ = this.store.select(HomeSelectors.getPersonalFeed);
    this.orgFeed$ = this.store.select(HomeSelectors.getOrgFeed);
  }

}
