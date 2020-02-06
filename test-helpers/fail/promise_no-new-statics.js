// Error: Promise.resolve is a static function. This would throw a runtime error
export const failing = new Promise.resolve(42);

// This is the correct way of returning a resolved Promise:
export const correct = Promise.resolve('test');
