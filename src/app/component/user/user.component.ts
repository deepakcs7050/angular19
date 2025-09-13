import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Icounter } from '../component/state/counter/counter.store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 counter$ :Observable<number> | undefined;
 
  constructor(private store :Store<Icounter>){
  this.counter$ = this.store.select('counter');
  }
}
