import 'react-toastify/dist/ReactToastify.css'

import clsx from 'clsx'
import React from 'react'
import { toast } from 'react-toastify'

import Icon from '../icon'

export const ToastMessage = ({ otherClasses, toastLabel }) => {
  const toastMessageClasses = clsx(
    otherClasses,
    'flex justify-between items-center gap-5 ',
  )

  return (
    <div className={toastMessageClasses} data-testid="toast-message">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-2 ">
          <Icon
            icon="error-page-icon"
            iconHeight={40}
            iconWidth={40}
            otherClasses="min-w-10 min-h-10"
          />
          <p className="font-work-sans text-base font-normal leading-6 text-white">
            {toastLabel}
          </p>
        </div>
        <button
          aria-label="Exit"
          title="Exit"
          aria-labelledby="Exit"
          onClick={() => toast.dismiss()}
          className="rounded-full bg-gray-50 p-1"
        >
          <Icon icon="cross-icon" iconHeight={16} iconWidth={16} />
        </button>
      </div>
    </div>
  )
}

export default ToastMessage
