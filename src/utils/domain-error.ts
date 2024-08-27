export class DomainError extends Error {
  public readonly name: string;
  public readonly domain: boolean;
  public readonly statusCode: number;

  constructor(name: string, message: string, statusCode) {
    super(message);

    this.name = name;
    this.domain = true;
    this.statusCode = statusCode;
  }
}
