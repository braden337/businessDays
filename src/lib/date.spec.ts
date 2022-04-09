import { describe, expect, it } from 'vitest';
import { BusinessDaysInMonth, DateCalculator } from './date';

describe('business days in a month', () => {
  const businessDays = new BusinessDaysInMonth();

  it('calculates correct business days in April 2022', () => {
    expect(businessDays.calculate(new Date('2022-04-01'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-02'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-03'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-04'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-05'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-06'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-07'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-08'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-09'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-10'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-11'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-12'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-13'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-14'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-15'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-16'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-17'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-18'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-19'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-20'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-21'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-22'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-23'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-24'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-25'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-26'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-27'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-28'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-29'))).toBe(21);
    expect(businessDays.calculate(new Date('2022-04-30'))).toBe(21);
  });

  it('calculates correct business days in a leap year February 2020', () => {
    expect(businessDays.calculate(new Date('2020-02-01'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-02'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-03'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-04'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-05'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-06'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-07'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-08'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-09'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-10'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-11'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-12'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-13'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-14'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-15'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-16'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-17'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-18'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-19'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-20'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-21'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-22'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-23'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-24'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-25'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-26'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-27'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-28'))).toBe(20);
    expect(businessDays.calculate(new Date('2020-02-29'))).toBe(20);
  });
});

class DummyCalculator extends DateCalculator {
  calculate(from: Date) {
    return 7;
  }
}

describe('abstract date calculator', () => {
  const dummy = new DummyCalculator();

  it('calculates 7', () => {
    expect(dummy.calculate(new Date())).toBe(7);
  });

  it('adds days', () => {
    const now = new Date();
    const tomorrow = new Date(+now + 864e5);

    expect(dummy.add(now, 1, 'day')).toEqual(tomorrow);
  });

  it('throws exception when adding with bad unit', () => {
    expect(() => dummy.add(new Date(), 1, 'year')).toThrowError(new Error('year is not an accepted unit'));
  });
});
