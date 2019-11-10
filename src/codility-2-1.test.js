import { solution } from './codility-2-1'

let n, expectedResult;

n = [9,3,9,3,9,7,9];
expectedResult = 7;

it(`${n} : ${expectedResult}`, () => { 
  expect(solution(n)).toBe(expectedResult)
})