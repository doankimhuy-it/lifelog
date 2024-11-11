// Error codes
export const InternalServerErrorCode = 500;

// Date time
export const Second = 1000;
export const Minute = 60 * Second;
export const Hour = 60 * Minute;
export const Day = 24 * Hour;

export enum InteractionType {
  Undefined = 'undefined',
  Like = 'like',
  Comment = 'comment',
}

export enum InteractedOn {
  Undefined = 'undefined',
  Blog = 'blog',
  Comment = 'comment',
}

export enum OrderBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export enum Action {
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export const HashSaltRounds = 10;
