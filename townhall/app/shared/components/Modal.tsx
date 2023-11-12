// app/components/modal.tsx
import { Portal } from './Portal'
import { useNavigate } from '@remix-run/react'

interface props {
  children: React.ReactNode
  isOpen: boolean
  ariaLabel?: string
  className?: string
}

export const Modal: React.FC<props> = ({ children, isOpen, ariaLabel, className }) => {
  const navigate = useNavigate()
  if (!isOpen) return null

  return (
    <Portal wrapperId="modal">
      <div
        aria-labelledby={ariaLabel ?? 'modal-title'}
        role="dialog"
        aria-modal="true"
        onClick={() => navigate('/home')}
      ></div>
      <div >
        <div>
          {/* This is where the modal content is rendered  */}
          {children}
        </div>
      </div>
    </Portal>
  )
}