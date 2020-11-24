import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="http://placehold.it/50x50" alt="" />
            <div>{props.description}</div>
            <div>{props.likesCount} likes</div>
        </div>
    )
}

export default Post;