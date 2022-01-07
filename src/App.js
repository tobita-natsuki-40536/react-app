import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0); // 配列で2つの要素を返す -> count:変数、setCount:状態
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const increment2 = () => {
    setCount(previousCount => previousCount + 1)
  }
  const decrement2 = () => {
    setCount(previousCount => previousCount - 1)
  }
  const resetcount = () => {
    // setCount(count => 0)
    setCount(0)
  }
  const double = () => {
    setCount(previousCount => previousCount * 2)
  }
  const division3 = () => {
    // if(count % 3 === 0) {
    //   setCount(previousCount => previousCount / 3)
    // }
    // setCount(previousCount => {
    //   // if(count % 3 === 0) {
    //   //   return previousCount / 3
    //   // } else {
    //   //   return previousCount
    //   // }
    //   return previousCount % 3 === 0 ? previousCount / 3 : previousCount
    // })
    setCount(previousCount =>
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    )
  }
  return (
    // <React.Fragment>
    <>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={resetcount}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={division3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
    // </ React.Fragment>
  );
}

export default App;
