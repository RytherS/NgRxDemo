import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeStateService } from '../../services/home-state.service';
import { HomeVM } from '../../models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ HomeStateService ] // HomeStateService should be a transient service used only with this component
})
export class HomeComponent implements OnInit {
  public vm$: Observable<HomeVM> = this.homeStateService.homeVm$;

  constructor(private homeStateService: HomeStateService) { }

  public ngOnInit(): void {
    this.homeStateService.loadFeeds();
  }

}
