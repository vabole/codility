export function solution(n) {
    const binaryStr = n.toString(2);
  
    // gapLen -1 when no gap is reached
    // 0 - got '1' need to check gap
    // positive integer - gap length
    let gapLen = -1;
    let maxGapLen = 0;
    for (let digit of binaryStr) {
      // did not reach gap yet
      switch (gapLen) {
        case -1:
          if (digit === "0") {
            continue;
          } else {
            gapLen = 0;
          }
          break;
        // we found one '1', so if we get zero - thats the gap
        case 0:
          if (digit === "0") {
            gapLen = 1;
          } else {
            continue;
          }
          break;
  
        default:
          if (digit === "0") {
            gapLen += 1;
          } else {
            if (gapLen > maxGapLen) {
              maxGapLen = gapLen;
            }
            gapLen = 0;
          }
          break;
      }
    }
    return maxGapLen;
  }
  
  