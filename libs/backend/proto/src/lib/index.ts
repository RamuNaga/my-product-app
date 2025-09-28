import { join } from 'path';

export const protoPaths = {
  user: join(__dirname, './user.proto'),
  product: join(__dirname, './product.proto'),
  workorder: join(__dirname, './workorder.proto'),
  company: join(__dirname, './company.proto'),
  companyLocation: join(__dirname, './company-location.proto'),
};

export const protoPackages = {
  user: 'user',
  product: 'product',
  workorder: 'workorder',
  company: 'company',
  companyLocation: 'companylocation',
};
