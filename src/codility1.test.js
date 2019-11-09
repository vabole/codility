import { solution } from '../src/codility1'

let n, expectedResult;

it('9 : 1001 : 2', () => { 
  expect(solution(9)).toBe(2)
})


it('529 : 1000010001 : 4', () => { 
  expect(solution(529)).toBe(4)
})


it('20 : 10100 : 1', () => { 
  expect(solution(20)).toBe(1)
})

it('15 : 1111 : 0', () => { 
  expect(solution(15)).toBe(0)
})

it('32 : 100000 : 0', () => { 
  expect(solution(32)).toBe(0)
})

it('1041 : 10000010001 : 5', () => { 
  expect(solution(1041)).toBe(5)
})

n = 1;
expectedResult = 0;
it(`${n} : ${n.toString(2)} : ${expectedResult}`, () => { 
  expect(solution(n)).toBe(expectedResult)
})

it('2,147,483,647 : 1111111111111111111111111111111 : 0', () => { 
  expect(solution(2147483647)).toBe(0)
})

it('214703647 : 1100110011000001111000011111 : 0', () => { 
  expect(solution(214703647)).toBe(5)
})


n = 328;
expectedResult = 2;
it(`${n} : ${n.toString(2)} : ${expectedResult}`, () => { 
  expect(solution(n)).toBe(expectedResult)
})
