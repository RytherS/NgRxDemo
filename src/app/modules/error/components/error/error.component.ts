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
    this.errorMessage$ = this.store.select(ErrorSelectors.getErrorMessage);
    this.errorSource$ = this.store.select(ErrorSelectors.getErrorSource).pipe(
      tap(source => this.errorSource = source)
    );
  }

  public logSource(): void {
    console.log(`Error Source: ${this.errorSource}`);
  }
}
