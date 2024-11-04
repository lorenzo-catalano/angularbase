export interface Authentication {
  username: string;
  firstName: string;
  lastName: string;
  image: string;
  accessToken: string;
  refreshToken: string;
  expiration: Date;
}