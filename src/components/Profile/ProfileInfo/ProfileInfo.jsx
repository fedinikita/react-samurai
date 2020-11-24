import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.mainBack} src="https://img1.badfon.ru/original/2560x1600/4/9a/peyzazh-more-volny-plyazh-zakat.jpg" alt="" />
            </div>
            <div className={s.about}>
                <div className={s.avatar}><img src="http://placehold.it/170x170" alt="" /></div>
                <div className={s.personalInfo}>
                    <div className={`${s.personalName} ${s.personalItem}`}>Федин Никита</div>
                    <div className={`${s.personalBirth} ${s.personalItem}`}>06.04.1998</div>
                    <div className={`${s.personalTown} ${s.personalItem}`}>Москва</div>
                    <div className={`${s.personalEducation} ${s.personalItem}`}>РТУ МИРЭА</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;