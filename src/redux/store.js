// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, description: 'Я вот трачу время напрасно..', likesCount: 666 },
//                 { id: 2, description: 'Как у вас дела?', likesCount: 42 },
//                 { id: 3, description: 'Привет мир!', likesCount: 12 },
//             ],
//             newPostText: 'ahrimasan'
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: 'Даша' },
//                 { id: 5, name: 'Виктория' },
//                 { id: 2, name: 'Никита' },
//                 { id: 3, name: 'Анастасия' },
//                 { id: 4, name: 'Денис' },
//             ],
//             messages: [
//                 { id: 1, text: 'hi' },
//                 { id: 6, text: 'holla' },
//                 { id: 2, text: 'how r u?' },
//                 { id: 3, text: 'what do u do?' },
//                 { id: 4, text: 'go pvp' },
//                 { id: 5, text: 'or sink?' },
//             ],
//             newMessageText: '',
//         },
//         sidebar: {

//         }
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//         this._callSubscriber(this._state);
//     }
// }


// window.store = store;
// export default store;