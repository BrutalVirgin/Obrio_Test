import { DomainError } from '../../utils/domain-error';

export class UserErrors extends DomainError {
  constructor(name: string, message: string, statusCode: number) {
    super(name, message, statusCode);
  }
  public static UserExists(): UserErrors {
    return new UserErrors('UserExists', 'User already exists', 400);
  }

  public static UserNotExists(): UserErrors {
    return new UserErrors('UserNotExists', 'User not exists', 404);
  }
}
