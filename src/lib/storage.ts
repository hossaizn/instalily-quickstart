import type { QuickstartState } from './types';
import { initialState } from './types';

const KEY = 'instalily-quickstart-state-v1';

export function loadState(): QuickstartState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as Partial<QuickstartState>;
    return { ...initialState, ...parsed };
  } catch {
    return initialState;
  }
}

export function saveState(state: QuickstartState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // localStorage may be unavailable (private browsing, quota). Silently no-op.
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
