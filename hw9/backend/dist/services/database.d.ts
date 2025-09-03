export interface User {
    id?: number;
    name: string;
    email: string;
    phone: string;
    category: string;
    is_active: boolean;
    avatar_url?: string;
    created_at?: Date;
}
declare class DatabaseService {
    private pool;
    constructor();
    initializeDatabase(): Promise<void>;
    createUser(user: Omit<User, 'id' | 'created_at'>): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
    disconnect(): Promise<void>;
}
export declare const databaseService: DatabaseService;
export {};
//# sourceMappingURL=database.d.ts.map