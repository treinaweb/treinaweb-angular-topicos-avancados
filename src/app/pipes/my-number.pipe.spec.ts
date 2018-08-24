import { MyNumberPipe } from './my-number.pipe';

describe('MyNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new MyNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
