import { useLikes } from '../context/LikesContext.tsx'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <button
      type="button"
      className={likes > 0 ? 'like-btn active' : 'like-btn'}
      onClick={addLike}
    >
      {likes > 0 ? '♥' : '♡'} Like ({likes})
    </button>
  )
}

export default LikeButton
