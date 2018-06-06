const STORE_ID = 'STORE_ID';
const STORE_USERNAME = 'STORE_USERNAME';
const STORE_PROFILEPIC = 'STORE_PROFILEPIC';

const initialState = {
    id: null,
    username: null,
    profilePic: null,
};

function reducer(state = initialState, action){
    switch (action.type) {
        case STORE_ID:
            return {...state, id: action.payload};
        case STORE_USERNAME:
            return {...state, username: action.payload};
        case STORE_PROFILEPIC:
            return {...state, profilePic: action.payload}
        default:
            return state;
    }
};


export function username(username) {
    return {
        type: STORE_USERNAME,
        payload: username,
    };
};

export function profilePic(profilePic) {
    return {
        type: STORE_PROFILEPIC,
        payload: profilePic,
    };
};



export default reducer;