import { FieldSpec } from "./Model";

export const episodeFieldDefinitions: FieldSpec[] = [
  {
    name: 'episode_id',
    type: 'UUID',
    requiredForCreateRequest: false,
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
    name: 'season_number',
    type: 'number',
    requiredForCreateRequest: true,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
  },
  {
    name: 'episode_number',
    type: 'number',
    requiredForCreateRequest: true,
    returnFromDbQuery: true,
    canBeModifiedByUser: true
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
    name: 'air_date',
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
