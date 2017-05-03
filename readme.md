# AngularJS Authentication with Auth0

This repo shows how to implement authentication in an AngularJS 1.x application. It goes along with SitePoint's [Easy AngularJS Authentication with Auth0](https://www.sitepoint.com/easy-angularjs-authentication-with-auth0/) article.

## Getting Started

To run this quickstart you can fork and clone this repo. You will need an Auth0 account to run the example. [Sign up](https://auth0.com/signup) for a free account and then go to your [dashboard](https://manage.auth0.com) to get your credentials.

Be sure to set the correct values for your Auth0 application in the `auth0.variables.js` file.

To run the application:

```bash
# Install the dependencies
bower install

# Install simple web server
npm install -g http-server

# Run
http-server
```

To run the server:

Open the `server` directory and run

```bash
npm install
```

to install the dependencies needed for the server. Next open up the `server.js` file and add your credentials:

```js
var authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/.well-known/jwks.json"
    }),
    audience: '{YOUR-AUTH0-API-IDENTIFIER}',
    issuer: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/",
    algorithms: ['RS256']
});
```

Run the server by executing the `node server` command.

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