import { ICatalog } from "./CatalogModel"

export interface IUser {
  id?: string
  name: string
  lastname: string
  email: string
  password: string
  nickname?: string
  documentTypeId?: number
  planId?: number
  documentType?: ICatalog
  plan?: ICatalog
}
