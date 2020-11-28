import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([

            {
                id: 1,
                photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlhymhG-KzJ7z8w1nS2oRaP7AXjb1MatADSQ=s900-c-k-c0xffffffff-no-rj-mo',
                followed: true, fullname: 'Nikita', status: 'Im a boss of the gym', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 2,
                photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlhymhG-KzJ7z8w1nS2oRaP7AXjb1MatADSQ=s900-c-k-c0xffffffff-no-rj-mo',
                followed: true, fullname: 'Dasha', status: 'Я крутышка-малышка', location: { city: 'Balakovo', country: 'Russia' }
            },
            {
                id: 3,
                photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlhymhG-KzJ7z8w1nS2oRaP7AXjb1MatADSQ=s900-c-k-c0xffffffff-no-rj-mo',
                followed: false, fullname: 'Pasha', status: 'Duis sed fermentum nisl.', location: { city: 'Tomsk', country: 'Russia' }
            },
            {
                id: 4,
                photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlhymhG-KzJ7z8w1nS2oRaP7AXjb1MatADSQ=s900-c-k-c0xffffffff-no-rj-mo',
                followed: false, fullname: 'Masha', status: 'In blandit leo et.', location: { city: 'Bryansk', country: 'Russia' }
            },
            {   id: 5, 
                photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlhymhG-KzJ7z8w1nS2oRaP7AXjb1MatADSQ=s900-c-k-c0xffffffff-no-rj-mo', 
                followed: false, fullname: 'Lapsha', status: 'Phasellus eu congue augue.', location: { city: 'Sahalin', country: 'Russia' } },

        ])
    }

    return (
        <div className={s.userItem}>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoUrl} alt="" width='50' />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <span>
                            <div>{u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </div><br></br>
                </div>)
            }
        </div>
    )
}

export default Users;