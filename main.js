const counter = (state, action) => {
    // if (!state)
    if (typeof state === 'undefined') {
        return 0;
    }
    
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case "DECREMENT": 
            return state -1;
        default: 
            return state;

    }
    
};

const store = Redux.createStore(counter);
const valueEl = document.querySelector('#value');
const render = () => {
  // console.log(store.getState());
  valueEl.innerHTML = store.getState().toString();
  
}
render();
store.subscribe(render);

