let state

let plusButton = document.getElementById('plus-button')
let minusButton = document.getElementById('minus-button')

const reducer = (state = {count: 0}, action) => {
  switch(action.type) {
    case "INCREASE_COUNT":
      return {count: state.count + 1}
    case "DECREASE_COUNT":
      return {count: state.count - 1}
    default: return state
  }
}

const dispatch = (action) => {
  state = reducer(state, action)
  render()
}

plusButton.addEventListener('click', () => {
  dispatch({type: "INCREASE_COUNT"})
})

minusButton.addEventListener('click', () => {
  dispatch({type: "DECREASE_COUNT"})
})

const render = () => {
  let container = document.getElementById('container')
  container.textContent = state.count
}

dispatch({type: "@@INIT"})
