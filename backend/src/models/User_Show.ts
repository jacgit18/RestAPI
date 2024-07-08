import { FieldSpec } from "./Model.js";

export const userShowFieldDefinitions: FieldSpec[] = [
  {
    name: 'user_show_id',
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
    requiredForCreateRequest: true,
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
];
