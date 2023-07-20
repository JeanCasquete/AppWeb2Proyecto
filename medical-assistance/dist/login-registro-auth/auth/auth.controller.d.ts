import { AuthService } from './auth.service';
import { User } from '../user/user.model';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registro(usuario: User): Promise<User>;
    login(correo: string, contrasena: string): Promise<User>;
    updateUser(userId: number, updatedUserData: User): Promise<User>;
    deleteUser(userId: number): Promise<void>;
}
