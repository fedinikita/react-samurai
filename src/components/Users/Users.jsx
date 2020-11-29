import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/unnamed.jpg';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': 'ac0698bf-8f46-46a0-8dde-8b20f84ed564'
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': 'ac0698bf-8f46-46a0-8dde-8b20f84ed564'
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        if (pagesCount > 30) {
            pagesCount = 30;
        }
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={s.pages}>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage === p && s.selectedPage}
                            onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(u => <div key={u.id} className={s.userItem}>
                        <div className={s.avaFollow}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" width='50' />
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.nameStatus}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.location}>
                            <div>{`u.location.city${u.id}`}</div>
                            <div>{`u.location.country${u.id}`}</div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;