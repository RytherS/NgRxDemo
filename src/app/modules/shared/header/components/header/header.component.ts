import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models';
import { ErrorActions } from 'src/app/core/state/error';
import { ErrorState } from 'src/app/core/state/error/error.state';
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

  public mockErrorClicked(): void {
    this.store.dispatch(ErrorActions.setError({
        error: {
          isError: true,
          message: "Hey, don't blame me. You asked for this!",
          routeToErrorPage: true,
          source: "HeaderComponent Mock Error"
        }
      })
    );
  }
}
