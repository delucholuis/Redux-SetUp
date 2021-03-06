import { createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';

const initialState = { value: 0 };

const Counter = ({value, onIncrement, onDecrement, onReset}) => (
    <div>
        <h2>Value: {value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onDecrement}>-</button>
    </div>
);
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + action.payload };
        case 'DECREMENT':
            return { ...state, value: state.value - action.payload };
        case 'RESET':
            return { ...state, value: 0};
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState().value}
            onIncrement={() => store.dispatch({ type: 'INCREMENT', payload: 10})}
            onDecrement={() => store.dispatch({ type: 'DECREMENT', payload: 5})}
            onReset={() => store.dispatch({ type: 'RESET'})}
        />,
        document.getElementById('root')
    )
}
store.subscribe(
    () => {
        console.log(store.getState());
        render();
    
    }
);
render();