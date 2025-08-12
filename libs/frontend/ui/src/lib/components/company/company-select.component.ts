import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  SearchCompanyStore,
} from '@my-product-app/frontend-shared';

import { Company } from '@my-product-app/frontend-graphql-types';

@Component({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  standalone: true,
  selector: 'lib-ui-company-select',
  templateUrl: './company-select.component.html',
})
export class CompanySelectComponent implements OnInit {
  readonly searchCompanyStore = inject(SearchCompanyStore);

  @Input() control!: FormControl;
  @Output() companySelected = new EventEmitter<Company>();

  // No need to convert to Observable - use signals directly
  companies = this.searchCompanyStore.companies;
  isLoading = this.searchCompanyStore.isLoading;
  errorMessage = this.searchCompanyStore.errorMessage;

  private debounceTimer?: any;

  ngOnInit() {
    this.control.valueChanges.subscribe((searchTerm: string | Company) => {
      if (this.debounceTimer) clearTimeout(this.debounceTimer);

      if (typeof searchTerm === 'string' && searchTerm.length >= 2) {
        this.debounceTimer = setTimeout(() => {
          this.searchCompanyStore.searchCompanies(searchTerm);
        }, 300);
      } else if (typeof searchTerm === 'string') {
        this.searchCompanyStore.clearCompanies();
      }
    });
  }

  onOptionSelected(company: Company) {
    this.control.setValue(company);
    this.control.markAsTouched();
    this.control.markAsDirty();
    this.companySelected.emit(company);
  }
  displayCompanyName(company: Company | null): string {
    return company ? company.name : '';
  }
}
