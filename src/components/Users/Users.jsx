import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/unnamed.jpg';


let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                        return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.userItem}>
                    <div className={s.avaFollow}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" width='50' />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
export default Users;