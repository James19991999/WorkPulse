export interface SessionClaims {
  uid: string;
  orgId: string;
  role: 'employee' | 'manager' | 'admin' | 'owner';
  email: string;
}
