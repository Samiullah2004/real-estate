import classnames from 'classnames'
import Link from 'next/link'
import { groq } from 'next-sanity'

import Icon from '~/components/icon/index'

export const BUTTON_FRAGMENT = groq`
   form,
   label,
   variant,
   externalLink,
   action,
   slug,
   form,
`

export default function Button({
  label = '',
  variant = 'primary',
  otherClasses,
  form,
  slug,
  onClick,
  externalLink,
  action,
}) {
  const buttonClasses = classnames(
    otherClasses,
    variant === 'primary' &&
      `px-6 py-4 rounded-full font-Lato bg-green-600 text-sm leading-4 font-semibold text-white relative overflow-hidden group`,
    variant === 'secondary' &&
      `px-6 py-4 rounded-full font-Lato bg-transparent text-sm  leading-4 font-semibold border border-white text-white relative overflow-hidden group`,
    variant === 'text-link-dark' &&
      `p-4 rounded-full flex font-Lato items-center gap-5 leading-4 text-sm text-button_black relative after:block after:absolute after:left-0 after:top-2/4 after:-translate-y-2/4 after:w-12 after:h-12 after:rounded-full after:bg-green-600/[0.20] hover:after:w-full after:transition-all after:duration-300`,
    variant === 'text-link-light' &&
      `p-4 rounded-full flex items-center gap-5 leading-4 font-Lato text-sm text-white relative after:block after:absolute after:left-0 after:top-2/4 after:-translate-y-2/4 after:w-12 after:h-12 after:rounded-full  after:bg-white/[0.20] hover:after:w-full after:transition-all after:duration-300`,
    variant === 'tertiary' &&
      `text-green-600 font-Lato text-sm leading-4 font-semibold  not-italic uppercase tracking-[1px]  flex justify-center items-center gap-2 hover:gap-3 transition-all ease-in-out`,
  )
  const primary = variant === 'primary' || variant === 'secondary'
  const textLinkDark = variant === 'text-link-dark'
  const textLinkLight = variant === 'text-link-light'
  const tertiaryArrow = variant === 'tertiary'
  if (action == 'link' && slug) {
    const { current } = slug
    return (
      <Link
        aria-label={label}
        className={classnames(buttonClasses, 'block')}
        href={
          externalLink
            ? `${current}`
            : current?.startsWith('/')
              ? `${current}`
              : `/${current}`
        }
        target={externalLink ? '_blank' : '_self'}
        rel={externalLink ? 'noopener noreferrer' : ''}
      >
        {primary ? (
          <>
            <span className="relative block transition-all duration-200 ease-in group-hover:translate-y-[-40px] group-hover:scale-110 group-hover:opacity-0 ">
              {label}
            </span>
            <span className="absolute left-2/4 -translate-x-2/4 translate-y-[30px] whitespace-nowrap opacity-0 transition-all duration-200 ease-in group-hover:translate-y-[-17px] group-hover:opacity-100">
              {label}
            </span>
          </>
        ) : (
          <>
            {textLinkDark ? (
              <>
                {label}
                <Icon icon="black-plus" iconHeight={13} iconWidth={13} />
              </>
            ) : (
              <>
                {textLinkLight ? (
                  <>
                    {label}
                    <Icon icon="white-plus" iconHeight={13} iconWidth={13} />
                  </>
                ) : (
                  <>
                    {label}
                    {tertiaryArrow && (
                      <Icon
                        icon="tertiary-icon"
                        iconHeight={14}
                        iconWidth={16}
                      />
                    )}{' '}
                  </>
                )}
              </>
            )}
          </>
        )}
      </Link>
    )
  }

  return (
    <button
      onClick={(e) => {
        onClick && onClick(e, form)
      }}
      aria-label={label}
      title={label}
      aria-labelledby={label}
      className={buttonClasses}
      data-testid="button"
    >
      {primary ? (
        <>
          <span className="relative block transition-all duration-200 ease-in group-hover:translate-y-[-40px] group-hover:scale-110 group-hover:opacity-0 ">
            {label}
          </span>
          <span className="absolute left-2/4 -translate-x-2/4 translate-y-[30px] whitespace-nowrap opacity-0 transition-all duration-200 ease-in group-hover:translate-y-[-17px] group-hover:opacity-100">
            {label}
          </span>
        </>
      ) : (
        <>
          {textLinkDark ? (
            <>
              {label}
              <Icon icon="black-plus" iconHeight={13} iconWidth={13} />
            </>
          ) : (
            <>
              {textLinkLight ? (
                <>
                  {label}
                  <Icon icon="white-plus" iconHeight={13} iconWidth={13} />
                </>
              ) : (
                <>
                  {tertiaryArrow ? (
                    <>
                      {label}
                      <Icon
                        icon="tertiary-icon"
                        iconHeight={14}
                        iconWidth={16}
                      />
                    </>
                  ) : (
                    <>{label}</>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </button>
  )
}
