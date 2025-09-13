import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCustomCounter, removeCustomCounter } from '../state/counter/counter.action';

@Component({
  selector: 'app-custom-counter',
  imports: [FormsModule],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.scss'
})
export class CustomCounterComponent {
addCounterValue!: number;
removeCounterValue!: number;
store = inject(Store);
 addCounter() {
    this.store.dispatch(addCustomCounter({addValue : +this.addCounterValue}));
  }

  removeCounter(){
    this.store.dispatch(removeCustomCounter({removeValue : +this.removeCounterValue}));
  }
}
