// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../servicios/user.service';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const expectedRoles = route.data.expectedRoles as string[];

        // Verificar si el usuario tiene al menos uno de los roles esperados
        const userRoles = this.userService.getUserRoles();
        const hasRequiredRole = expectedRoles.some(role => userRoles.includes(role));

        if (hasRequiredRole) {
            return true;
        }

        // Redirigir a la página de inicio de sesión si no se cumple ningún rol
        this.router.navigate(['/login']);
        return false;
    }
}
