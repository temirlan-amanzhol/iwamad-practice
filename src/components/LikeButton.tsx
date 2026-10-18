import { useLikes } from '../context/LikesContext.tsx'
import Button from './ui/Button.tsx'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    // Secondary (outlined) until the first like, then Primary (filled)
    <Button variant={likes > 0 ? 'primary' : 'secondary'} onClick={addLike}>
      {likes > 0 ? '♥' : '♡'} Like ({likes})
    </Button>
  )
}

export default LikeButton
