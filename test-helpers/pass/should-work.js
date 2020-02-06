// Basic code
export const example = 42;

// Prefixing globals with `window` should work
console.log(window.location);

// v2 allows non-camelCased object property names
export const tokens = {
  expires_in: 1000000,
  refresh_token: 1000000,
  access_token: 100000
};

// v2 allows destructured constants to be non-camelCase
const { expires_in } = tokens;
console.log(expires_in);

// v2 allows whitelisting non-camelCase tokens
export function UNSAFE_componentWillMount() {}
