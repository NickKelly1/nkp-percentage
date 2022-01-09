import { toPercentage } from '.';

describe('toPercentage', () => {
  it('should turn a number into a percentage', () => {
    for (let iLeft = 0; iLeft < 100; iLeft += 1) {
      for (let iRight = 0; iRight < 99; iRight += 1) {
        const sLeft = iLeft.toString().padStart(2, ' ');
        const sRight = iRight.toString().padStart(2, '0');
        const nLeft = iLeft;
        const nRight = iRight / 100;
        const num = (nLeft + nRight) / 100;
        expect(toPercentage(num)).toBe(sLeft + '.' + sRight + '%');
      }
    }
  });

  describe('should respect decimals', () => {
    it(' 0%', () => expect(toPercentage(0, { decimals: 0, })).toBe(' 0%'));
    it(' 0.0%', () => expect(toPercentage(0, { decimals: 1, })).toBe(' 0.0%'));
    it(' 0.00%', () => expect(toPercentage(0, { decimals: 2, })).toBe(' 0.00%'));
    it(' 0.000%', () => expect(toPercentage(0, { decimals: 3, })).toBe(' 0.000%'));
    it(' 0.0000%', () => expect(toPercentage(0, { decimals: 4, })).toBe(' 0.0000%'));
    it(' 0.00000%', () => expect(toPercentage(0, { decimals: 5, })).toBe(' 0.00000%'));

    it(' 0%', () => expect(toPercentage(0.001, { decimals: 0, })).toBe(' 0%'));
    it(' 0.1%', () => expect(toPercentage(0.001, { decimals: 1, })).toBe(' 0.1%'));
    it(' 0.10%', () => expect(toPercentage(0.001, { decimals: 2, })).toBe(' 0.10%'));
    it(' 0.100%', () => expect(toPercentage(0.001, { decimals: 3, })).toBe(' 0.100%'));
    it(' 0.1000%', () => expect(toPercentage(0.001, { decimals: 4, })).toBe(' 0.1000%'));
    it(' 0.10000%', () => expect(toPercentage(0.001, { decimals: 5, })).toBe(' 0.10000%'));

    it(' 0%', () => expect(toPercentage(0.0001, { decimals: 0, })).toBe(' 0%'));
    it(' 0.0%', () => expect(toPercentage(0.0001, { decimals: 1, })).toBe(' 0.0%'));
    it(' 0.01%', () => expect(toPercentage(0.0001, { decimals: 2, })).toBe(' 0.01%'));
    it(' 0.010%', () => expect(toPercentage(0.0001, { decimals: 3, })).toBe(' 0.010%'));
    it(' 0.0100%', () => expect(toPercentage(0.0001, { decimals: 4, })).toBe(' 0.0100%'));
    it(' 0.01000%', () => expect(toPercentage(0.0001, { decimals: 5, })).toBe(' 0.01000%'));

    it(' 0%', () => expect(toPercentage(0.000001, { decimals: 0, })).toBe(' 0%'));
    it(' 0.0%', () => expect(toPercentage(0.000001, { decimals: 1, })).toBe(' 0.0%'));
    it(' 0.00%', () => expect(toPercentage(0.000001, { decimals: 2, })).toBe(' 0.00%'));
    it(' 0.000%', () => expect(toPercentage(0.000001, { decimals: 3, })).toBe(' 0.000%'));
    it(' 0.0001%', () => expect(toPercentage(0.000001, { decimals: 4, })).toBe(' 0.0001%'));
    it(' 0.00010%', () => expect(toPercentage(0.000001, { decimals: 5, })).toBe(' 0.00010%'));

    it(' 1%', () => expect(toPercentage(0.005, { decimals: 0, })).toBe(' 1%'));
    it(' 0.5%', () => expect(toPercentage(0.005, { decimals: 1, })).toBe(' 0.5%'));
    it(' 0.50%', () => expect(toPercentage(0.005, { decimals: 2, })).toBe(' 0.50%'));
    it(' 0.500%', () => expect(toPercentage(0.005, { decimals: 3, })).toBe(' 0.500%'));
    it(' 0.5000%', () => expect(toPercentage(0.005, { decimals: 4, })).toBe(' 0.5000%'));
    it(' 0.50000%', () => expect(toPercentage(0.005, { decimals: 5, })).toBe(' 0.50000%'));

    it(' 0%', () => expect(toPercentage(0.000005, { decimals: 0, })).toBe(' 0%'));
    it(' 0.0%', () => expect(toPercentage(0.000005, { decimals: 1, })).toBe(' 0.0%'));
    it(' 0.00%', () => expect(toPercentage(0.000005, { decimals: 2, })).toBe(' 0.00%'));
    it(' 0.001%', () => expect(toPercentage(0.000005, { decimals: 3, })).toBe(' 0.001%'));
    it(' 0.0005%', () => expect(toPercentage(0.000005, { decimals: 4, })).toBe(' 0.0005%'));
    it(' 0.00050%', () => expect(toPercentage(0.000005, { decimals: 5, })).toBe(' 0.00050%'));

    it('100%', () => expect(toPercentage(1.00005, { decimals: 0, })).toBe('100%'));
    it('100.0%', () => expect(toPercentage(1.00005, { decimals: 1, })).toBe('100.0%'));
    it('100.01%', () => expect(toPercentage(1.00005, { decimals: 2, })).toBe('100.01%'));
    it('100.005%', () => expect(toPercentage(1.00005, { decimals: 3, })).toBe('100.005%'));
    it('100.0050%', () => expect(toPercentage(1.00005, { decimals: 4, })).toBe('100.0050%'));
    it('100.00500%', () => expect(toPercentage(1.00005, { decimals: 5, })).toBe('100.00500%'));
  });
});