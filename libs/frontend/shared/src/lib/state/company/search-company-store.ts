import { Injectable, signal, computed, inject } from '@angular/core';
import { CompanyService } from '@my-product-app/frontend-data-access';
import { ApolloError } from '@apollo/client/errors';
import { CompanyModel as Company } from './company.model';

@Injectable({ providedIn: 'root' })
export class SearchCompanyStore {
  private _companies = signal<Company[]>([]);
  readonly companies = computed(() => this._companies());

  private _isLoading = signal(false);
  readonly isLoading = computed(() => this._isLoading());

  private _error = signal<string | null>(null);
  readonly errorMessage = computed(() => this._error());

  private _deferReady = signal(false);
  readonly isDeferReady = computed(() => this._deferReady());

  private companyService = inject(CompanyService);

  searchCompanies(searchTerm: string) {
    if (!searchTerm || searchTerm.length < 2) {
      // Clear companies if searchTerm too short or empty
      this._companies.set([]);
      return;
    }

    this._isLoading.set(true);
    this._error.set(null);
    this._deferReady.set(false);

    this.companyService.searchCompanies(searchTerm).subscribe({
      next: (companies: Company[]) => {
        this._companies.set(companies);
        this._isLoading.set(false);

        setTimeout(() => this._deferReady.set(true), 200);
      },
      error: (err: ApolloError) => {
        console.error('Failed to load companies', err);
        this._error.set('Failed to load companies');
        this._isLoading.set(false);
      },
    });
  }

  addCompany(company: Company) {
    this._companies.update((prev) => [company, ...prev]);
  }

  refreshCompanies() {
    // Optionally call searchCompanies with empty string or last searchTerm
    this.searchCompanies('');
  }
  clearCompanies() {
    this._companies.set([]);
  }
}
