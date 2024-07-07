import { FieldSpec } from "./Model.js";

export const fieldDefinitions: FieldSpec[] = [
  {
    name: 'show_id',
    type: 'UUID',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'title',
    type: 'string',
    requiredForCreateRequest: true,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
  },
  {
    name: 'description',
    type: 'string',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
  },
  {
    name: 'genre',
    type: 'string',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
  },
  {
    name: 'release_date',
    type: 'timestamp',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
  },
  {
    name: 'average_rating',
    type: 'number',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'total_ratings',
    type: 'number',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'created_at',
    type: 'timestamp',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'updated_at',
    type: 'timestamp',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
];
