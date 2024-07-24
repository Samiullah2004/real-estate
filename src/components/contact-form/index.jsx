import './contact-form.scss'

import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { CustomToast } from '~/utils/helpers'

import Button from '../button/Button'
import Heading from '../heading/index'
function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}
export default function ContactForm({
  otherClasses,
  toggleCancel,
  tab,
  setTab,
}) {
  const contactFormClasses = classnames(
    otherClasses,
    'bg-white max-w-[720px] overflow-y-auto h-full',
  )
  const [click, setClick] = useState('')
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    'company-name': '',
    'company-website': '',
    description: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    try {
      await fetch('/favicon.ico', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
      CustomToast(
        'Thank you for submission! We will get in touch with you shortly.',
      )
      setState({
        name: '',
        email: '',
        phone: '',
        'company-name': '',
        'company-website': '',
        description: '',
      })
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={contactFormClasses} data-testid="contact-form">
      <div className="flex items-center justify-between border-b-[1px] border-b-[#CCCCCC] px-6 py-4">
        <div className="flex cursor-pointer items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
              fill="#051011"
            />
          </svg>
          <a
            href="tel:6197276165"
            className="font-Lato text-[16px] font-bold leading-[24px] text-primary_heading"
          >
            (619) 727-6165
          </a>
        </div>
        <button
          aria-label="cancel"
          title="cancel"
          aria-labelledby="cancel"
          onClick={() => toggleCancel()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.17721 6.00002L11.588 10.4108C11.9134 10.7362 11.9134 11.2638 11.588 11.5893C11.2625 11.9147 10.7349 11.9147 10.4094 11.5893L5.9987 7.17853L1.58795 11.5893C1.26252 11.9147 0.734878 11.9147 0.409441 11.5893C0.0840044 11.2638 0.0840044 10.7362 0.409441 10.4108L4.82019 6.00002L0.409441 1.58928C0.0840044 1.26384 0.0840044 0.736202 0.409441 0.410765C0.734878 0.0853278 1.26252 0.0853278 1.58795 0.410765L5.9987 4.82151L10.4094 0.410765C10.7349 0.0853278 11.2625 0.0853278 11.588 0.410765C11.9134 0.736202 11.9134 1.26384 11.588 1.58928L7.17721 6.00002Z"
              fill="#051011"
            />
          </svg>
        </button>
      </div>
      <div className="mt-8 w-full px-4 pb-10 md:px-[84px]">
        <Heading
          type="h3"
          otherClasses="font-Montserrat font-semibold text-button_black text-center mb-8"
        >
          It's Time to Get WISE<span className="text-green-700">.</span>
        </Heading>
        <div className="flex w-full  items-center rounded-full bg-gray-400/[0.4]  ">
          <button
            aria-label="Book a Call"
            title="Book a Call"
            aria-labelledby="Book a Call"
            onClick={() => setTab('Book a Call')}
            className={classnames(
              'flex w-full items-center justify-center gap-2 rounded-full py-[14px] font-Montserrat text-xs font-semibold leading-5 sm:text-[16px]',
              tab === 'Book a Call'
                ? '!bg-green-600 text-white'
                : ' text-gray-400',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5013 2.49998V1.66665C11.5013 1.20641 11.8744 0.833313 12.3346 0.833313C12.7949 0.833313 13.168 1.20641 13.168 1.66665V2.49998H14.8346C16.2153 2.49998 17.3346 3.61927 17.3346 4.99998V8.33331V16.6666C17.3346 18.0474 16.2153 19.1666 14.8346 19.1666H3.16797C1.78726 19.1666 0.667969 18.0474 0.667969 16.6666V8.33331V4.99998C0.667969 3.61927 1.78726 2.49998 3.16797 2.49998H4.83463V1.66665C4.83463 1.20641 5.20773 0.833313 5.66797 0.833313C6.12821 0.833313 6.5013 1.20641 6.5013 1.66665V2.49998H11.5013ZM2.33464 9.16665V16.6666C2.33464 17.1269 2.70773 17.5 3.16797 17.5H14.8346C15.2949 17.5 15.668 17.1269 15.668 16.6666V9.16665H2.33464ZM15.668 7.49998H2.33464V4.99998C2.33464 4.53974 2.70773 4.16665 3.16797 4.16665H4.83463V4.99998C4.83463 5.46022 5.20773 5.83331 5.66797 5.83331C6.12821 5.83331 6.5013 5.46022 6.5013 4.99998V4.16665H11.5013V4.99998C11.5013 5.46022 11.8744 5.83331 12.3346 5.83331C12.7949 5.83331 13.168 5.46022 13.168 4.99998V4.16665H14.8346C15.2949 4.16665 15.668 4.53974 15.668 4.99998V7.49998Z"
                fill="white"
              />
            </svg>
            Book a meeting
          </button>
          <button
            aria-label="Send a Message"
            title="Send a Message"
            aria-labelledby="Send a Message"
            onClick={() => setTab('Send a Message')}
            className={classnames(
              'flex w-full items-center justify-center gap-2 rounded-full py-3 font-Montserrat text-xs font-semibold leading-5 sm:text-base',
              tab === 'Send a Message'
                ? '!bg-green-600 text-white'
                : 'text-gray-400',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.33212 0.5H16.6655C18.038 0.5 19.1584 1.61606 19.1654 2.98704C19.1655 2.99435 19.1655 3.00167 19.1655 3.00897V13C19.1655 14.3769 18.0424 15.5 16.6655 15.5H3.33212C1.95522 15.5 0.83212 14.3769 0.83212 13V3.01143C0.831987 3.00231 0.832004 2.99318 0.83217 2.98405C0.840803 1.61443 1.96054 0.5 3.33212 0.5ZM2.49879 4.60056V13C2.49879 13.4564 2.87569 13.8333 3.33212 13.8333H16.6655C17.1219 13.8333 17.4988 13.4564 17.4988 13V4.60053L10.4767 9.51603C10.1897 9.71688 9.80782 9.71688 9.52088 9.51603L2.49879 4.60056ZM2.5876 2.6283L9.99877 7.81612L17.41 2.62828C17.2722 2.35577 16.9888 2.16667 16.6655 2.16667H3.33212C3.00882 2.16667 2.72541 2.35577 2.5876 2.6283Z"
                fill="white"
              />
            </svg>
            Send us a message
          </button>
        </div>

        {tab === 'Book a Call' && (
          <>
            <p className="mb-10 mt-4 hidden items-center justify-center text-center font-Lato text-base font-normal  text-[#7a7a7a] lg:flex">
              Book a complimentary 15-minute call to discover how WISE Digital
              Partners can help grow your business.
            </p>
            {click == '' ? (
              <div className="flex w-full flex-col gap-2 lg:grid lg:grid-cols-2">
                {contacts.map((contact, index) => (
                  <div
                    key={contact.id}
                    className="mt-4 flex flex-col justify-start gap-2 lg:gap-4"
                  >
                    <div
                      className="group relative flex h-full max-w-280 flex-col items-center gap-2 rounded-lg border border-transparent bg-gray-50 px-37 py-8 transition duration-300 ease-in hover:cursor-pointer hover:border-green-600 hover:bg-white lg:mt-0"
                      onClick={() => setClick(contact.id)}
                    >
                      <div className="our-team-slider  nth_child_img relative">
                        <Image
                          src={contact.image}
                          alt="vector"
                          width={200}
                          height={290}
                          className="absolute left-2/4 top-0 translate-x-[-50%] px-5"
                        />

                        <Image
                          src="/images/Vector.png"
                          alt={contact.id}
                          width={200}
                          height={290}
                          className="cirle-img relative z-10 w-full px-5"
                        />
                      </div>
                      <Heading
                        otherClasses="text-base font-Montserrat font-bold text-blue-900"
                        type="h4"
                      >
                        {contact.name}
                      </Heading>
                      <p className="text-center tracking-[3px]">
                        {contact.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 flex flex-col justify-start gap-2 lg:gap-4">
                <button
                  aria-label="back"
                  title="back"
                  aria-labelledby="back"
                  className="flex w-fit items-start justify-start font-Montserrat font-bold hover:text-green-500"
                  onClick={() => setClick('')}
                >
                  Go Back
                </button>
                <iframe
                  src={contacts.filter((contact) => click == contact.id)[0].url}
                  title="title"
                  width="100%"
                  height="700px"
                  className="w-full"
                ></iframe>
              </div>
            )}
          </>
        )}

        {tab === 'Send a Message' && (
          <>
            <p className="mb-10 mt-4 hidden  text-center font-Lato text-base font-normal  text-[#7a7a7a] lg:block">
              <span className="mb-2 block">
                Ready to grow your business? Tell us about your company and what
                you’re looking for—we’ll be in touch soon!
              </span>
              Interested in joining our team? Head to our
              <Link href="/about/careers" className="px-1 underline">
                careers page
              </Link>
              to explore available opportunities and apply.
            </p>
            <form
              onSubmit={handleSubmit}
              name="Contact Us"
              method="post"
              action=""
              data-netlify="true"
              className={classnames('mt-5 w-full md:mt-8')}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="font-Lato text-sm font-bold leading-5 text-primary_heading"
                >
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  required
                  type="text"
                  value={state.name}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="mt-2 h-12 w-full rounded-[2px] border-[1px] border-[#B2B2B2] bg-transparent pl-4 font-Lato text-primary_heading outline outline-[3px] outline-transparent focus:border-green-600 focus:outline-green-600/30 "
                />
              </div>
              <div className="mb-6 flex flex-col gap-5 md:flex-row lg:gap-[21px]">
                <div className="w-full md:w-2/4">
                  <label
                    htmlFor="phone"
                    className="font-Lato text-sm font-bold leading-5 text-primary_heading"
                  >
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    id="phone"
                    required
                    value={state.phone}
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    type="number"
                    className="mt-2 h-12 w-full rounded-[2px] border-[1px] border-[#B2B2B2] bg-transparent pl-4 font-Lato text-primary_heading outline outline-[3px] outline-transparent focus:border-green-600 focus:outline-green-600/30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
                <div className="w-full md:w-2/4">
                  <label
                    htmlFor="email"
                    className="font-Lato text-sm font-bold leading-5 text-primary_heading"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    value={state.email}
                    required
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="mt-2 h-12 w-full rounded-[2px] border-[1px] border-[#B2B2B2] bg-transparent pl-4 font-Lato text-primary_heading outline outline-[3px] outline-transparent focus:border-green-600 focus:outline-green-600/30"
                  />
                </div>
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="company-name"
                  className="font-Lato text-sm font-bold leading-5 text-primary_heading"
                >
                  Company Name
                </label>
                <input
                  name="company-name"
                  id="company-name"
                  type="text"
                  value={state['company-name']}
                  required
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      'company-name': e.target.value,
                    }))
                  }
                  className="mt-2 h-12 w-full rounded-[2px] border-[1px] border-[#B2B2B2] bg-transparent pl-4 font-Lato text-primary_heading outline outline-[3px] outline-transparent focus:border-green-600 focus:outline-green-600/30"
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="company-website"
                  className="font-Lato text-sm font-bold leading-5 text-primary_heading"
                >
                  Company Website (optional)
                </label>
                <input
                  name="company-website"
                  id="company-website"
                  type="text"
                  value={state['company-website']}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      'company-website': e.target.value,
                    }))
                  }
                  className="mt-2 h-12 w-full rounded-[2px] border-[1px] border-[#B2B2B2] bg-transparent pl-4 font-Lato text-primary_heading outline outline-[3px] outline-transparent focus:border-green-600 focus:outline-green-600/30"
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="description"
                  className="font-Lato text-sm font-bold leading-5 text-primary_heading"
                >
                  What would you like to discuss (required)
                </label>
                <textarea
                  type="text"
                  value={state.description}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  name="description"
                  id="description"
                  cols="30"
                  required
                  rows="10"
                  className="mt-2 h-12 w-full rounded-[2px] border-[1px] border-[#B2B2B2] bg-transparent pl-4 pt-2 font-Lato text-primary_heading outline outline-[3px] outline-transparent focus:border-green-600 focus:outline-green-600/30"
                ></textarea>
              </div>

              <Button label="Send Message" variant="primary" />
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const contacts = [
  {
    id: 'pat',
    name: 'Patrick Dillion',
    role: 'CEO',
    image: '/images/PatrickDillionBg.png',
    url: 'https://calendly.com/wisepatrick/15min?embed_domain=www.wisedigitalpartners.com&embed_type=Inline',
  },
  {
    id: 'matt',
    name: 'Matthew Hinkle',
    role: 'Director of Accounts',
    image: '/images/MattHinkleBg.png',
    url: 'https://calendly.com/wise-matt/15-min-consult?embed_domain=www.wisedigitalpartners.com&embed_type=Inline',
  },
]
