// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  GOOGLE_OAUTH_URL: "https://accounts.google.com/o/oauth2/v2/auth",
  GOOGLE_API_URL: "https://photoslibrary.googleapis.com/v1",
  GOOGLE_CLIENT_ID: "503677077569-udd2akn6tjr2364a7a19retsdqb5pg6f.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET: "WU6k-9iqTzTDpO869OI4S1c9",
  GOOGLE_RESPONSE_TYPE: "token",
  GOOGLE_REDIRECT_URI: "http://localhost:4200",
  GOOGLE_SCOPES: "https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/userinfo.profile",
};
