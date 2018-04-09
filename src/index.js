import React from 'react'
import {render} from 'react-dom'
import {Provider, Subscribe, Container} from 'unstated'

class CounterContainer extends Container {
  state = {
    count: 0
  }

  increment = () => this.setState({
    count: this.state.count + 1
  })
  decrement = () => this.setState({
    count: this.state.count - 1
  })
}

const Counter = () => (
  <Subscribe to={[CounterContainer]}>
    {counter => (
      <div>
        <button onClick={counter.decrement}>-</button>
        <span>{counter.state.count}</span>
        <button onClick={counter.increment}>+</button>
      </div>
    )}
  </Subscribe>
)

const Viewer = () => (
  <Subscribe to={[CounterContainer]}>
    {counter => (
      <div>{counter.state.count}</div>
    )}
  </Subscribe>
)

render(
  <Provider>
    <Viewer />
    <Counter />
  </Provider>,
  document.getElementById('app')
)
