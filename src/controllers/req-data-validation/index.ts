import { FieldType } from "../../models/Model.ts"

type QueryParamFieldNames = 'active' | 'include' | 'limit' | 'page' | 'sort'

type SortType = 'asc' | 'desc'

type UnvalidatedField = string | number | boolean

type ValidatedField = string | number | boolean | Date | null


// Adding a field used in this module to determine whether a field is allowed to be null or not
export interface FieldSpecForValidation {
  name: string,
  type: FieldType,
  cannotBeNull: boolean,
  enumValues?: string[]
}

export interface QueryParamsFromReq {
  active?: string,
  include?: string,
  limit?: string,
  page?: string,
  sort?: string,
}


export interface QueryParams {
  active?: boolean,
  include?: string[] | number[],
  limit?: number,
  page?: number,
  sort?: {[key: string]: SortType},
}


