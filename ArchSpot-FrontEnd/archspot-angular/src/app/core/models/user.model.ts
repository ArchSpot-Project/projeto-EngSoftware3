export type Role = 'admin' | 'customer' | 'member';

export interface User {
  id: number;
  cpf: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  userRole: Role;
  profession: string;
}

// Interface opcional só para criação/login (sugestao GPT):
// TODO: Tirar essa senha daqui logo logo...
export interface UserCredentials {
  email: string;
  password: string;
}