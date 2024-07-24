import '~/styles/global.scss'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { hideBodyScroll, showBodyScroll } from '../utils/helpers'
import useScrollRestoration from '../utils/useScrollRestoration'

// const Layout = dynamic(() => import('../components/layout'))


export default function App({ Component, pageProps, router }) {
  const {
    draftMode,
    transparentNav,
    breadCrump,
    bgBreadCrump = false,
    JSONLD,
  } = pageProps
  const routerPackage = useRouter()
  const pageKey = routerPackage.asPath
  const [toggle, setToggle] = useState('')
  const [tab, setTab] = useState('Book a Call')

  const toggleFunc = (flag, activeTab) => {
    setToggle(flag)
    if (activeTab) {
      setTab(activeTab)
    }
  }

  useEffect(() => {
    if (toggle) {
      hideBodyScroll()
    } else {
      showBodyScroll()
    }
  }, [toggle])

  useScrollRestoration(router)

  return (
   
    <Component
      {...pageProps}
      toggleFunc={toggleFunc}
      tab={tab}
      setTab={setTab}
      toggle={toggle}
    />
  )
}
