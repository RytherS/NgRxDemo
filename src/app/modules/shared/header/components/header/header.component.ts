import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models';
import { UserActions, UserSelectors } from 'src/app/core/state/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$!: Observable<User | null>;
  public loading$!: Observable<boolean>;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.user$ = this.store.select(UserSelectors.getUser);
    this.loading$ = this.store.select(UserSelectors.getLoading);
  }

  public loginClicked(): void {
    this.store.dispatch(UserActions.headerUserLoginClicked());
  }
}
