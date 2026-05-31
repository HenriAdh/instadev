import type { StringValue } from 'ms';

export const JWTSECRET = process.env.JWT_SECRET || 'super_secret';
export const JWTEXPIRES = (process.env.JWT_EXPIRES || '8h') as StringValue;
