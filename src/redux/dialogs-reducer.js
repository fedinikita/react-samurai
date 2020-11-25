const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Даша' },
        { id: 5, name: 'Виктория' },
        { id: 2, name: 'Никита' },
        { id: 3, name: 'Анастасия' },
        { id: 4, name: 'Денис' },
    ],
    messages: [
        { id: 1, text: 'hi' },
        { id: 6, text: 'holla' },
        { id: 2, text: 'how r u?' },
        { id: 3, text: 'what do u do?' },
        { id: 4, text: 'go pvp' },
        { id: 5, text: 'or sink?' },
    ],
    newMessageText: '',

};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state, 
                newMessageText: '',
                messages: [...state.messages, {id: 7,text: state.newMessageText}]
            };
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state, 
                newMessageText: action.messageText,
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: text,
})
export default dialogsReducer;