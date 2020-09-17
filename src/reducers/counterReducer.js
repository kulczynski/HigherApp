export const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER' :
            if (state === null) {
                return  state = 0;
            } else if (state < 9) {
                return state + 1;
            } else {
                return state = 0;
            }
        case 'DECREASE_COUNTER' :
            if (state === null) {
                return  state = 9;
            } else if (state > 0) {
                return state - 1;
            } else {
                return state = 9;
            }
        default :
            return state;
    }
}