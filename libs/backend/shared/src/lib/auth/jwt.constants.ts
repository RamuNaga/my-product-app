export const jwtConstants = {
  secret: process.env['JWT_SECRET'] || 'fallbackSecret',
  expiresIn: process.env['JWT_EXPIRATION'] || '3600s',
};
