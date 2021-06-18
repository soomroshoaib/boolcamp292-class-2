const CounterReducer = (state, action)=>{
    switch (action){
        case'decrament':
        return state -5;
        case'INCREAMENT':
        return state +5;
    }
}
export default CounterReducer;