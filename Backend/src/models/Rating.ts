import { FieldSpec } from "./Model.js";

export const ratingFieldDefinitions: FieldSpec[] = [
  {
    name: 'rating_id',
    type: 'UUID',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'user_id',
    type: 'UUID',
    requiredForCreateRequest: true,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'show_id',
    type: 'UUID',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'episode_id',
    type: 'UUID',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'score',
    type: 'number',
    requiredForCreateRequest: true,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
  },
  {
    name: 'created_at',
    type: 'timestamp',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
];
