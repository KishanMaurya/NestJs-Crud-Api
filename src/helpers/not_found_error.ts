import { CustomValidationError } from './custom_validation_error';

export class NotFoundError extends CustomValidationError {
  constructor(message:string,status:any,code:any, request_user:any = null, request_params:any = null, request_body:any = null) {
    super(message, 404, 'not_found', request_user = null, request_params = null, request_body = null);

    this.name = 'NotFoundError';
    this.status = 404;
    this.code = 'not_found';
  }
}