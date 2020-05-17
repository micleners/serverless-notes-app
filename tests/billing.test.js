import Chance from 'chance';
import { calculateCost } from '../libs/billing-lib';

const chance = new Chance();

test('Lowest tier', () => {
  const storage = chance.integer({ min: 1, max: 9 });

  const cost = storage * 4 * 100;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});

test('Middle tier', () => {
  const storage = chance.integer({ min: 11, max: 99 });

  const cost = storage * 2 * 100;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});

test('Highest tier', () => {
  const storage = chance.integer({ min: 101 });

  const cost = storage * 100;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});
