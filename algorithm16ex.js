// Q-3. 실수(소숫점이 있는 수)를 위의 조건에 처리 했을 때 소숫점 첫번째 자리까지만 출력되도록 처리하세요.
// Q-4. 음수(0보다 작은 수) 를 처리 했을 때 "절대값"이 출력되도록 처리하세요.
// Q-5. 수열의 합, 시그마 로직을 구현하세요. (에를 들어 1단의 총 합계 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 합계) 
// Q-6. HTML에 나타난 구구단 중 항목 하나를 클릭하면 '클릭된 요소'가 삭제되도록 처리하세요.
// Q-7. Q-6번 기능에 더해 삭제된 요소가 다섯번단위로 누적되면, 삭제된 요소의 결과값 총합을 경고창(alert())으로 보이게 조치하세요.

function googoodanCore(dan, limit) {
  let stepCount = 0;
  let resultArray = [];

  for(let i=1; i<= limit; i++) {
    let calc = dan*i;

    if(Number.isInteger(calc) === false) { // 만약 calc의 값이 정수가 아니라면 
      calc = calc.toFixed(1); // 소숫점 첫번째 자리까지 반올림 한다 
    }

    if(calc < 0 && i === limit) { // 만약 calc가 음수거나 i 가 limit과 같으면 
      console.log(Math.abs(calc)); //calc의 절대값을 보여줘
    }
    resultArray.push(calc);
    stepCount++;
  }
  let reduceResult = resultArray.reduce(function(prev,curr) {
    return parseFloat(prev) + parseFloat(curr);
  });
  console.log(`시그마 값 : ${reduceResult}`);
  console.log(`총 ${stepCount}번 실행`);
  return resultArray;
}
console.log(googoodanCore(-3.2,9));