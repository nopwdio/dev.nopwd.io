---
title: Token verification
description: Verifying authentication tokens.
sidebar:
  order: 4
---

All authentication components (such as `np-email-login` `np-passkey-login`) emit an `np:auth` event. This event contains the access `token` representing the user authentication proof.

## When to verify the access token?

You need to verify the `token` just before creating the user's session.

## How to send the access token to your backend?

Your frontend is reponsible for sending the `token` to your server. A typical way to do this is to transmit the `token` in an `Authorization` header like this:

```ts
// From your website
const response = await fetch("https://yourapi.com/...", {
  // ...
  headers: {
    Authorization: `Bearer ${token}`,
  },
  // ...
});
```

:::caution[Security consideration]
Always use a TLS connection to send the `token` to your backend.
:::

## How to verify the access token?

### Using our API endpoint (simplest way)

If you don't have a backend server, for example, if you're using Webflow, we have provided an API endpoint to validate the access token from nopwd.io.

```ts
const accessToken = "...";
const myDomain = "mywebsite.com";

const response = await fetch(`https://api.nopwd.io/v1/tokens/${accessToken}`);

if (!response.ok) {
  return; // invalid/expired token
}

// the access token decoded payload
const jwt = await response.json();

if (jwt.aud !== myDomain) {
  return; // audiance missmatch your website
}
```

See the API specs [here](/reference/api/token) to learn more.

### Using Third-Party JWT Libraries

To avoid mistakes in this critical flow, you can use third party libraries to verify JWT tokens. [Check the list of third party libraries here](https://jwt.io/libraries). Make sure you check for the `ES256` algorithm that NoPwd uses.

Here is an example using the battle-tested [jose library](https://github.com/panva/jose/blob/main/docs/functions/jwt_verify.jwtVerify.md).

```ts
const accessToken = "...";

// To verify the access_token
const { jwt } = await jose.jwtVerify(accessToken, getKey, {
  issuer: "nopwd.io",
  audience: "yourwebsite.com",
});

/* 
  Set the function getKey to return the public key associated with the kid.
  Don't forget to cache it after that.
 */

const authenticatedUser = jwt.sub; //the authenticated user's email
```

### On your own

The `token` is a JWT Token, and it's signed using Asymmetric Signing Algorithm ES256. This means, unlike symmetric JWT tokens that are signed and verified using the same secret key, this asymmetric JWT Token is signed using a secret key that only Nopwd knows, but can be verified using a public key that you can find [here](/reference/api/jwks).

**Checklist:**

- [ ] check 1: Check that the JWT is well-formed
- [ ] check 2: Make sure that the token is issued by nopwd: `iss = nopwd.io`
- [ ] check 3: Make sure that the audience matches your own domain's name:`aud = yourwebsite.com`
- [ ] check 4: Make sure that the token is not expired: `exp < now`
- [ ] check 5: Check the signature

:::tip[Performance tips]
To avoid calling public keys endpoint on every verification, you can cache them for further use. You then have to update your cache only when the key is not found locally.
In all case, never hard-code it. Key may change to ensure key rotation.
:::
