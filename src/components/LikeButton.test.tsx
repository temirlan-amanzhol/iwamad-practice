import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import { LikesProvider } from '../context/LikesContext.tsx'
import LikeButton from './LikeButton.tsx'

test('clicking the like button changes its text', async () => {
  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>,
  )

  const button = screen.getByRole('button', { name: /like/i })
  expect(button).toHaveTextContent('♡ Like (0)')

  await userEvent.click(button)

  expect(button).toHaveTextContent('♥ Like (1)')
})
