
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserInput {
    id?: Nullable<string>;
    name: string;
    lastname: string;
    email: string;
    password: string;
    nickname?: Nullable<string>;
    documentTypeId?: Nullable<number>;
    planId?: Nullable<number>;
}

export class AuthTokenResponse {
    token: string;
}

export abstract class IMutation {
    abstract login(email: string, password: string): Nullable<AuthTokenResponse> | Promise<Nullable<AuthTokenResponse>>;

    abstract signup(userInput?: Nullable<UserInput>): Nullable<AuthTokenResponse> | Promise<Nullable<AuthTokenResponse>>;

    abstract suscribeUser(planId: number): UserResponse | Promise<UserResponse>;

    abstract updateUser(id: string, userInput: UserInput): UserResponse | Promise<UserResponse>;
}

export class CatalogResponse {
    id?: Nullable<number>;
    name: string;
    catalogId?: Nullable<number>;
    subcatalog?: Nullable<Nullable<CatalogResponse>[]>;
}

export abstract class IQuery {
    abstract getCatalogs(): CatalogResponse[] | Promise<CatalogResponse[]>;

    abstract getCatalogById(id: number): CatalogResponse | Promise<CatalogResponse>;

    abstract getUsers(): UserResponse[] | Promise<UserResponse[]>;

    abstract getUser(id: string): UserResponse | Promise<UserResponse>;

    abstract getUserByEmail(email: string): UserResponse | Promise<UserResponse>;

    abstract greeting(): string | Promise<string>;
}

export class UserResponse {
    id?: Nullable<string>;
    email?: Nullable<string>;
    name?: Nullable<string>;
    lastname?: Nullable<string>;
    nickname?: Nullable<string>;
    planId?: Nullable<number>;
    plan?: Nullable<CatalogResponse>;
    documentTypeId?: Nullable<number>;
}

type Nullable<T> = T | null;
