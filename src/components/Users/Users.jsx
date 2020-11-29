import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/unnamed.jpg';

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={s.userItem}>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" width='50' />
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                            </span>
                        </div><br></br>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;