import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { User } from '../utils/interfaces';
import { AuthJtwTokenService } from '../services/auth-jwt.service';

export const tokenGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthJtwTokenService<User>);
  return authService.isExpiredAuth();
};
