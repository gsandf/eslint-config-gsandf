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

// v3 allows let without reassignment
let a = 'test';
console.log(a);

// v3 allows sparse arrays
console.log([1, , 3]);

// Allow `Array.prototype.forEach` to have no return value
export const okayForEach = [1, 2, 3].forEach(n => {
  console.log(n);
});
