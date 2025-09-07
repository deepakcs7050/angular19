import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'dynamic-form-container' }
})
export class AppComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  // Signals for fields
  readonly fields = signal<{ fieldName: string; type: string; required: boolean }[]>([]);

  readonly form = this.fb.group({
    entries: this.fb.array<FormGroup>([])
  });

  readonly entries = computed(() => this.form.get('entries') as FormArray<FormGroup>);

  constructor() {
    this.loadLocalFields();
  }

  loadLocalFields(): void {
    this.http.get<{ fieldName: string; type: string; required: boolean }[]>('/assets/fields.json')
      .subscribe(res => {
        this.fields.set(res);
        this.addEntry(); // create first entity row
      });
  }

  addEntry(): void {
    const group: Record<string, any> = {};
    for (const f of this.fields()) {
      group[f.fieldName] = this.fb.control('', f.required ? Validators.required : []);
    }
    this.entries().push(this.fb.group(group));
  }

  removeEntry(index: number): void {
    this.entries().removeAt(index);
  }

  onSubmit(): void {
    console.log('Submitted form:', this.form.value.entries);
  }

}

