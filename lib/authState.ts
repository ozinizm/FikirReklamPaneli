export type SupportedPlatform = "meta" | "google";

interface AuthState {
  isLoggedIn: boolean;
  platform: SupportedPlatform | null;
}

export const authState: AuthState = {
  isLoggedIn: false,
  platform: null,
};

export function updateAuthState(partial: Partial<AuthState>) {
  Object.assign(authState, partial);
}
