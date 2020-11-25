import s from './Dialogs.module.css'
import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsItems = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesItems = props.dialogsPage.messages.map(message => <Message message={message.text} key={message.id}/>)

    let sendMessage = () => {
        props.sendMessage()
    }
    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} placeholder='Enter your message...'></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;