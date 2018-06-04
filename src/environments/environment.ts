// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDzIBQwa4fR6Ink3rPNP3rgO5U6nGYJIjw',
    authDomain: 'loginapp-cd2c8.firebaseapp.com',
    databaseURL: 'https://loginapp-cd2c8.firebaseio.com',
    projectId: 'loginapp-cd2c8',
    storageBucket: '',
    messagingSenderId: '105148222148'

  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
