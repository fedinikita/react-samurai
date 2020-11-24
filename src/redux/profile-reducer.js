const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, description: 'Я вот трачу время напрасно..', likesCount: 666 },
        { id: 2, description: 'Как у вас дела?', likesCount: 42 },
        { id: 3, description: 'Привет мир!', likesCount: 12 },
    ],
    newPostText: 'ahrimasan'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                description: state.newPostText,
                likesCount: 0
            };
            state.posts.unshift(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export default profileReducer;