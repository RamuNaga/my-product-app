import { Injectable, computed, signal } from '@angular/core';
import { RuntimeEnvConfig } from './env-config.model';

@Injectable({
  providedIn: 'root',
})
export class RuntimeConfigStore {
  private readonly _config = signal<RuntimeEnvConfig | null>(null);

  readonly config = computed(() => this._config());
  readonly apiUrl = computed(() => this._config()?.apiUrl ?? '');
  readonly authUrl = computed(() => this._config()?.authUrl ?? '');
  readonly productServiceUrl = computed(
    () => this._config()?.productServiceUrl ?? ''
  );

  setConfig(config: RuntimeEnvConfig) {
    this._config.set(config);
  }

  clearConfig() {
    this._config.set(null);
  }
}
