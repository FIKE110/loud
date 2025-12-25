import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely'
import { InitializeRequestBody } from './schema/initSchema'

    export interface Database {
    users: UserTable
    user_preorders: UserPreorderTable
    packages: PackageTable
    }

    export interface UserTable {
    id: Generated<number>
    first_name: string
    email: string
    gender: InitializeRequestBody['gender']
    last_name: string | null
    created_at: ColumnType<Date, string | undefined, never>
    }

    export interface UserPreorderTable {
        id: Generated<number>
        user_id: number
        package_code: InitializeRequestBody['package_code']
        package_price: number
        status: 'PENDING' | 'PAID' | 'REFUNDED' | 'CANCELLED'
        payment_reference: string | null  
        preorder_at: ColumnType<Date, string | undefined, never>
    }

    export interface PackageTable {
    id: Generated<number>
    code: InitializeRequestBody['package_code']
    name: string
    description: string
    launch_price: number
    created_at: ColumnType<Date, string | undefined, never>
    }

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>
export type Preorder = Selectable<UserPreorderTable>
export type NewPreorder = Insertable<UserPreorderTable>
export type PreorderUpdate = Updateable<UserPreorderTable>
export type Package = Selectable<PackageTable>
export type NewPackage = Insertable<PackageTable>
export type PackageUpdate = Updateable<PackageTable>