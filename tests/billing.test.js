import Chance from 'chance';
import { calculateCost } from '../libs/billing-lib';

const chance = new Chance();

test('Lowest tier', () => {
  const storage = chance.integer({ min: 1, max: 9 });

  const cost = storage * 4 * 100;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});
