# AngularJS Authentication with Auth0

This repo shows how to implement authentication in an AngularJS 1.x application. It goes along with SitePoint's [Easy AngularJS Authentication with Auth0](#) article.

## Installation and Running the App

Clone the repo, then:

```bash
# Install front-end dependencies
npm install
npm install http-server -g

# Install server dependencies
cd server && npm install
```

You will need an Auth0 account to run the example. [Sign up](https://auth0.com/signup) for a free account and then go to your [dashboard](https://manage.auth0.com) to get your credentials.

Enter your domain and client ID for the front end.

```js
// app.js

...

authProvider.init({
  domain: 'YOUR_AUTH0_DOMAIN',
  clientID: 'YOUR_AUTH0_CLIENT_ID'
});

...
```

Then enter your client ID and client secret for the **express-jwt** middleware in the backend.

```js
// server/server.js

...

var authCheck = jwt({
  secret: new Buffer('YOUR_AUTH0_SECRET', 'base64'),
  audience: 'YOUR_AUTH0_CLIENT_ID'
});

...
```

With your credentials in place, you can run the app.

```bash
# Run the server
node server.js

# Run the front-end (in a new console tab)
cd ..
http-server
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.