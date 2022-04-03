import * as crypto from 'crypto';

export const SECRET = 'auth secret';
export const UPDATE = 'mongoose test';

export function hashPassword(SECRET:string, update:string){
  return  crypto.createHmac('sha256', SECRET)
                   .update(update)
                   .digest('hex');
}