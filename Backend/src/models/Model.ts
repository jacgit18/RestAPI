
export type FieldType = 'string' | 'UUID' | 'number' | 'timestamp' | 'boolean' | 'enum'

export interface FieldSpec {
  name: string,
  type: FieldType,
  requiredForCreateRequest: boolean,
  returnFromDbQuery: boolean,
  canBeModifiedByUser: boolean,
  enumValues?: string[]
}

export interface Episode {
  episode_id: number;
  title: string;
  season_number: number;
  episode_number: number;
  description?: string;
  air_date?: Date;
  average_rating: number;
  total_ratings: number;
  created_at: Date;
  updated_at: Date;
}



export interface Rating {
  rating_id: number;
  user_id: number;
  show_id?: number;
  episode_id?: number;
  score: number;
  created_at: Date;
}



export interface TVShow {
  show_id: number;
  title: string;
  description?: string;
  genre?: string;
  release_date?: Date;
  average_rating?: number;
  total_ratings?: number;
  created_at?: Date;
  updated_at?: Date;
  ratings: Rating[];
  episodes: Episode[];
}


export interface User {
  user_id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}




export function columnsReturnedFromDbQuery(fieldSpecs: FieldSpec[], tableName?: string): string[] {
  return fieldSpecs
    .filter((fs) => fs.returnFromDbQuery)
    // add in the table name if its ambiguous
    .map((fs) => `${tableName === undefined ? '' : tableName + '.'}${fs.name}`)
}

export function filterForModifiableFields(toFilter: any, fieldSpecs: FieldSpec[]): { [key: string]: any } {
  return fieldSpecs.reduce(
    (modifiableFields: { [key: string]: any }, fs: FieldSpec) => {
      // intentionally grouping null and undefined here
      if (fs.canBeModifiedByUser && toFilter[fs.name] != null) {
        modifiableFields[fs.name] = toFilter[fs.name]
      }
      return modifiableFields
    },
    {}
  )
}
