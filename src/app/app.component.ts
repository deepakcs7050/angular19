import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './component/state/counter/counter.action';
import { Observable } from 'rxjs';
import { Icounter } from './component/state/counter/counter.store';
import { AdminComponent } from './component/admin/admin.component';
import { CustomCounterComponent } from './component/custom-counter/custom-counter.component';
import { UserComponent } from './component/user/user.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule, AdminComponent, UserComponent, AsyncPipe, CustomCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'dynamic-form-container' }
})
export class AppComponent implements OnInit{
  counter$ :Observable<number> | undefined;
 
  constructor(private store :Store<Icounter>){
  this.counter$ = this.store.select('counter');
  }
ngOnInit(): void {
}

 onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

}


