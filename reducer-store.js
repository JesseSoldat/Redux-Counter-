function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else if (action.type === 'RESET') {
  	return state = 0;
  }
  	else {
    return state;
  }
}

function createStore(reducer) {
	let state = 0;

	const getState = () => (state);

	const dispatch = (action) => {
		state = reducer(state, action)
	}

	return {
		getState,
		dispatch
	};
}


const store = createStore(reducer);

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let total = document.getElementById('total');
let amount = document.getElementById('amount');

total.textContent = store.getState();

const reset = {
	type: 'RESET'
}

function ResetCounter() {
	amount.value = 'Please Enter a Number'
		setTimeout(function(){
			store.dispatch(reset);
			total.innerHTML = store.getState();
			amount.value = '';
		},1000);
}

function add() {
	
	const incrementAction = {
		type: 'INCREMENT',
		amount: parseInt(amount.value),
	};
	store.dispatch(incrementAction);
	total.innerHTML =  store.getState();

	if(total.textContent === 'NaN') {
		ResetCounter();
		return;
	}
}

function subtract() {
	const decrementAction = {
	type: 'DECREMENT',
		amount: parseInt(amount.value)
	};
	store.dispatch(decrementAction);
	total.innerHTML = store.getState();

	if(total.textContent === 'NaN') {
		ResetCounter();
		return;
	}
}

// const incrementAction = {
// 	type: 'INCREMENT',
// 	amount: 3,
// };

// store.dispatch(incrementAction);
// console.log(store.getState());;
// store.dispatch(incrementAction);
// console.log(store.getState());

// const decrementAction = {
// 	type: 'DECREMENT',
// 	amount: 4
// };

// store.dispatch(decrementAction);
// console.log(store.getState());


