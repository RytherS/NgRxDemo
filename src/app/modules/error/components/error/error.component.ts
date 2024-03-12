import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { ErrorSelectors } from 'src/app/core/state/error';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public errorSource$!: Observable<string>;
  private errorSource!: string;
  public errorMessage$!: Observable<string>;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    // Maybe there is a guard for this component that gets current error state and reroutes to home (or enters default error message) if error state is invalid/empty?
    // (i.e. error page is directly routed to in address bar)
    this.errorMessage$ = this.store.select(ErrorSelectors.getErrorMessage);
    this.errorSource$ = this.store.select(ErrorSelectors.getErrorSource).pipe(
      tap(source => this.errorSource = source)
    );
  }

  public logErrorSourceClicked(): void {
    console.log(`Error Source: ${this.errorSource}`);
  }
}
