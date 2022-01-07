import React, { useEffect, useState } from 'react'

const App = props=> {

  const [state, setState] = useState(props)
  const reset = () => setState(props)
  const {name, price} = state

  useEffect(() => { // useEffectはrenderの後に実行されている
    console.log('useEffect is like componentDidMount or componentDidUpdate')
  })

  useEffect(() => { // 第二引数に[]を持たせることで、mountされた時のみに実行される関数を実装できる
  console.log('useEffect is like componentDidMount')
  }, [])

  useEffect(() => { // 第二引数に[]を持たせることで、mountされた時のみに実行される関数を実装できる
    console.log('This callback is for name only.')
  }, [name])


  // const renderPreiod = () => {
  //   console.log('renderPeriod renders perod.')
  //   return '。'
  // }

  return (
    <>
      {/* <p>現在の{name}は、{price}です{renderPreiod()}</p> */}
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={reset}>reset</button>
      <input value = {name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App;
