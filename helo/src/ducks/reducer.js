const STORE_ID = 'STORE_ID';
const STORE_USERNAME = 'STORE_USERNAME';
const STORE_USER = 'STORE_USER';
const STORE_PROFILEPIC = 'STORE_PROFILEPIC';
const STORE_POSTS = "STORE_POSTS";
const STORE_TITLE = 'STORE_TITLE';
const STORE_IMG = 'STORE_IMG';
const STORE_CONTENT = "STORE_CONTENT";

const initialState = {
    user: {},
    id: null,
    userName: null,
    profilePic: null,
    posts: [{id:1, name:"test"}],
    title: null,
    img: null,
    content: null
};

function reducer(state = initialState, action){
    switch (action.type) {
        case STORE_ID:
            return {...state, id: action.payload};
        case STORE_USERNAME:
            return {...state, userName: action.payload};
        case STORE_PROFILEPIC:
            return {...state, profilePic: action.payload};
        case STORE_USER:
            return {...state, user: action.payload};
        case STORE_POSTS:
            return {...state, posts: action.payload};
        case STORE_TITLE:
            return {...state, title: action.payload};
        case STORE_IMG:
            return {...state, img: action.payload};
        case STORE_CONTENT:
            return {...state, content: action.payload};
        default:
            return state;
    }
};
// pay attention to names to not overide state
export function getPosts(posts){
    console.log('inside reducer', posts)
    return{
        type: STORE_POSTS,
        payload: posts
    }
}

export function userData(user){
    return{
        type: STORE_USER,
        payload: user,
    };
}

export function username(username) {
    console.log('username---------', username)
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

export function getTitle(title){
    return {
        type: STORE_TITLE,
        payload: title,
    }
}
export function getImg(img){
    return {
        type: STORE_IMG,
        payload: img,
    }
}

export function getContent(content){
    return {
        type: STORE_CONTENT,
        payload: content,
    }
}


export default reducer;