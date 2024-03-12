import { describe, it, expect } from 'vitest';
import { helloWorld } from '@/utils/helloWorld';

describe('helloWorld', () => {
  it('exists', () => {
    expect(helloWorld).toBeDefined();
  });
});
