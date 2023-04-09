import { stripBom } from '.';

test('Correct string handling', () => {
  expect(stripBom('Hello World')).toBe('Hello World');
  expect(stripBom('\ufeffHello World')).toBe('Hello World');
});

test('Correct buffer handling', () => {
  expect(stripBom(Buffer.from('Hello World'), 'utf-8')).toBe('Hello World');
  expect(stripBom(Buffer.from('\ufeffHello World'), 'utf-8')).toBe('Hello World');
});

test('Error handling to work', () => {
  expect(() => stripBom(123 as any)).toThrowError(TypeError);
});
