import classnames from 'classnames'
import { useEffect } from 'react'

import { hideBodyScroll, showBodyScroll } from '../../utils/helpers'

export default function ModalComponent({
  otherClasses,
  show,
  handleClose,
  children,
  additionalClass,
}) {
  const modalComponentClasses = classnames(
    otherClasses,
    'flex justify-center fixed top-0 left-0 bottom-0 right-0 transition duration-300 bg-[#00000080] overflow-auto',
    show ? 'opacity-1 z-50 visible' : ' opacity-0 invisible',
  )
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeClick, {
      passive: true,
    })
    return () => {
      document.removeEventListener('keydown', handleEscapeClick)
    }
    // eslint-disable-next-line
  }, [])

  const handleEscapeClick = (event) => {
    if (event.keyCode === 27) handleClose()
  }

  useEffect(() => {
    if (show) {
      hideBodyScroll()
    } else {
      showBodyScroll()
    }
  }, [show])

  return (
    <div className={modalComponentClasses} data-testid="modal-component">
      <button
        aria-label="button-close"
        title="button-close"
        aria-labelledby="button-close"
        className={
          'modal-overlay absolute bottom-0 left-0 right-0 top-0 z-[-1] h-full w-full cursor-auto'
        }
        onClick={() => handleClose()}
      />
      <div
        className={classnames(
          'modal-wrapper my-auto h-auto overflow-auto bg-white',
          additionalClass,
        )}
      >
        {children}
      </div>
    </div>
  )
}
