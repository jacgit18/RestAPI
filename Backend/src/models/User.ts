import { FieldSpec } from "./Model.ts";

export const userFieldDefinitions: FieldSpec[] = [
  {
    name: 'user_id',
    type: 'UUID',
    requiredForCreateRequest: false,
    returnFromDbQuery: true,
    canBeModifiedByUser: false
  },
  {
    name: 'username',
    type: 'string',
    requiredForCreateRequest: true,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
  },
  {
    name: 'email',
    type: 'string',
    requiredForCreateRequest: true,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
  },
  {
    name: 'password',
    type: 'string',
    requiredForCreateRequest: true,
    returnFromDbQuery: false, // Note: Password should not be returned from DB queries
    canBeModifiedByUser: true
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
