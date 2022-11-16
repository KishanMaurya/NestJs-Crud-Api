export class CustomValidationError extends Error {
    status: any;
    request_user: any;
    code: any;
    request_params: any;
    request_body: any;
    constructor(
      message:string,
      status:any,
      code:any,
      request_user:any = null,
      request_params:any = null,
      request_body:any = null,
    ) {
      super(message);
  
      this.name = 'CustomValidationError';
      this.message = message;
      this.status = status;
      this.code = code;
      this.request_user = request_user;
      this.request_params = request_params;
      this.request_body = request_body;
    }
}