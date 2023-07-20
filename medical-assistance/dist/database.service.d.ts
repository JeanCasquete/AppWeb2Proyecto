export declare class DatabaseService {
    private pool;
    constructor();
    query(sql: string, params?: any[]): Promise<any>;
    execute(sql: string, params?: any[]): Promise<any>;
}
