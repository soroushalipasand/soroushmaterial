import { PLUS_ONE } from "../Constants/constants";
const initialstate = {
    count: 0
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                count:state.count + 1
            }

            

        default: return state

    }
}
export default reducer