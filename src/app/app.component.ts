import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { from, Subscription } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-test-5';
  subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.getObservable().subscribe((res) => {
      const $data = from(res);

      console.log('map operator');
      $data.pipe(map((value: number) => value * 2)).subscribe((data: number) => console.log(data));

      console.log('filter operator');
      $data.pipe(filter((value: number) => value % 2 === 0)).subscribe((data: number) => console.log(data));

      console.log('reduse operator');
      $data
        .pipe(reduce((acc: number, value: number) => acc + value, 0))
        .subscribe((data: number) => console.log(data));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
