export interface Authentication {
  username: string;
  accessToken: string;
  refreshToken: string;
  expiration: Date;
}