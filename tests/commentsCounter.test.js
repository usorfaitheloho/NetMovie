import commentsCounter from '../src/modules/commentsCounter.js';

describe('Comments count test', () => {
  test('Adding zero comment should return the 0 as the number of items', () => {
    const items = [];
    expect(commentsCounter(items)).toBe(0);
  });
  test('Adding one comment should return the 1 as the number of items', () => {
    const items = [{}];

    expect(commentsCounter(items)).toBe(1);
  });
  test('Adding two comment should return the 1 as the number of items', () => {
    const items = [{}, {}];

    expect(commentsCounter(items)).toBe(2);
  });
});