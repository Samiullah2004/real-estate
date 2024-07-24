import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

// import ToastMessage from '../components/toast-message'

export const hideBodyScroll = () => {
  if (typeof window !== 'undefined') {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  }
}

export const showBodyScroll = () => {
  if (typeof window !== 'undefined') {
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
  }
}

// export const CustomToast = (toastLabel) => {
//   setTimeout(toast.dismiss(), 15000)
//   return toast(<ToastMessage toastLabel={toastLabel} />, {
//     position: 'bottom-center',
//     hideProgressBar: true,
//     closeButton: true,
//   })
// }

export function useScrollEffect() {
  const [lastScroll, setLastScroll] = useState(0)
  const [state, setState] = useState({
    hideAndShowNav: true,
  })

  const handleScroll = () => {
    const progressbBar = document?.querySelector(
      '#blog-main-container-progress',
    )
    if (typeof window !== 'undefined' && window.scrollY >= 80) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop

      setLastScroll(scrollY)

      scrollY <= lastScroll
        ? (setState((prev) => ({
            ...prev,
            hideAndShowNav: true,
          })),
          progressbBar &&
            (progressbBar.style.marginTop =
              window.innerWidth > 1024 ? '80px' : '56px'))
        : (setState((prev) => ({
            ...prev,
            hideAndShowNav: false,
          })),
          progressbBar && (progressbBar.style.marginTop = '0px'))
    } else {
      setState((prev) => ({
        ...prev,
        hideAndShowNav: true,
      })),
        progressbBar && (progressbBar.style.marginTop = '80px')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll, {
        passive: true,
      })
    }
  }, [lastScroll])

  return state
}
