import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions, UserSelectors } from 'src/app/core/state/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) { }

  public ngOnInit(): void {
    this.loading$ = this.store.select(UserSelectors.getLoading);
  }

  public loginClicked(): void {
    this.store.dispatch(UserActions.loginPageUserLoginClicked());
  }

  public proceedWithoutAccountClicked(): void {
    this.router.navigate(["/home"]);
  }
}
