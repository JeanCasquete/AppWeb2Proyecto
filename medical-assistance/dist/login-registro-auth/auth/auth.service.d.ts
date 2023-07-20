import { DatabaseService } from '../../database.service';
import { User } from '../user/user.model';
export declare class AuthService {
    private db;
    constructor(db: DatabaseService);
    registrarUsuario(usuario: User): Promise<User>;
    login(correo: string, contrasena: string): Promise<{
        user: User | null;
        message: string;
    }>;
    updateUser(userId: number, updatedUserData: User): Promise<User>;
    deleteUser(userId: number): Promise<void>;
}
