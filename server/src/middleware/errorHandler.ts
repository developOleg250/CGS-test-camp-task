interface ErrorHandler{
 statusCode:string;
}

class ErrorHandler extends Error {
 constructor(statusCode:string, message:string) {
   super();
   this.statusCode = statusCode; //create interface for error  - Property 'statusCode' does not exist on type 'ErrorHandler'
   this.message = message;
 }
}
module.exports = {
 ErrorHandler
}