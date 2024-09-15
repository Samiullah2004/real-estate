import classNames from 'classnames'
import Script from 'next/script'

import ContactForm from '../contact-form'
// import Footer from '../footer'
// import Navbar from '../navbar'

export default function Layout({
  children,
  JSONLD,
  navbar,
  footer,
  toggle,
  toggleFunc,
}) {
  return (
    <>
      {/* <Navbar {...navbar} toggleFunc={toggleFunc} /> */}
      <div
        className={classNames(
          'fixed right-0 top-0 z-[50] flex h-full justify-end overflow-hidden',
          toggle ? 'w-full' : 'w-0',
        )}
      >
        <button
          aria-label="background-button"
          title="background-button"
          aria-labelledby="background-button"
          onClick={() => toggleFunc()}
          className={classNames(
            'absolute left-0 top-0 h-full w-full bg-[#00000083]',
            toggle === 'Request Proposal' ? 'hidden' : 'block',
          )}
        ></button>
        <ContactForm
          toggleCancel={toggleFunc}
          otherClasses={classNames(
            'z-10 transition-width ',
            toggle === 'Contact Us' ? 'w-full' : 'w-0 p-0',
          )}
        />
      </div>
      <main>{children}</main>
      {JSONLD && (
        <Script id="JSON-LD" type="application/ld+json">
          {JSONLD}
        </Script>
      )}
      {/* <Footer {...footer} /> */}
    </>
  )
}
