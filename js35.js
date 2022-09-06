let count = 0;

function interval(countInt, intervalTime, limitInt) {
  setTimeout(() => {
    countInt++;
    console.log(countInt);
    if(countInt < limitInt) {
      interval(countInt, intervalTime, limitInt);
    }
  }, intervalTime);
}

interval(count, 1000, 10);