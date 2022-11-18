class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

class NotFoundError extends DomainError {
  resourceName: any;
  resourceIdentifier: any;
  constructor(resourceName: any, resourceIdentifier: any) {
    super(
      `Resource ${resourceName} with identifier ${resourceIdentifier} not found.`
    );
    this.resourceName = resourceName;
    this.resourceIdentifier = resourceIdentifier;
  }
}

class ValidationError extends DomainError {
  validations: any;
  constructor(message = "Invalid parameters", validations: any) {
    super(message);
    this.validations = validations;
  }
}

class ConflictError extends DomainError {}

export { NotFoundError, ValidationError, ConflictError, DomainError };
