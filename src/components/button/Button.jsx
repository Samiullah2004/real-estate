import classnames from 'classnames'
import Link from 'next/link'
import { groq } from 'next-sanity'

import NextImage, { NEXT_IMAGE_FRAGMENT } from '../next-image'
import { useState } from 'react'

export const BUTTON_FRAGMENT = groq`
   form,
   label,
   variant,
   externalLink,
   action,
   slug,
   form,
   size,
   iconRight,
   withIcon,
   iconImageHover,
   iconImage{${NEXT_IMAGE_FRAGMENT}}
`

export default function Button({
  label = '',
  variant = 'primary',
  otherClasses,
  size = 'large',
  form,
  iconRight = false,
  slug,
  onClick,
  externalLink,
  action,
  withIcon,
  iconImage,
  iconImageHover,
  ariaLabel,
}) {
  const buttonClasses = classnames(
    otherClasses,
    'group',
    iconRight ? 'flex-row-reverse' : 'flex-row',
    variant === 'primary' &&
      `bg-primary-blue-600  bg-primary-blue-400 text-white rounded font-semibold cursor-pointer hover:bg-primary-blue-900 transition-all duration-300 flex items-center gap-2`,
    variant === 'secondary' &&
      `border-primary-blue-600 border bg-transparent text-primary-blue-600 rounded font-semibold hover:bg-primary-blue-600 hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2`,
    variant === 'tertiary' &&
      `bg-white text-primary-blue-600 rounded font-semibold hover:bg-primary-blue-100 cursor-pointer transition-all duration-300 flex items-center gap-2`,
    variant === 'text-link' &&
      `bg-transparent text-primary-blue-600 font-semibold cursor-pointer hover:text-primary-blue-900 transition-all duration-300 flex items-center gap-2`,
    (variant === 'primary' ||
      variant === 'secondary' ||
      variant === 'tertiary') &&
      size === 'large'
      ? 'py-4 px-6 text-base'
      : size === 'medium'
        ? 'px-6 py-3 text-base'
        : size === 'small'
          ? 'py-[10px] px-6 text-sm'
          : size === 'x-small' && 'py-[6px] px-4 text-sm',
  )

  if (action == 'link' && slug) {
    const { current } = slug
    return (
      <Link
        aria-label={ariaLabel ? ariaLabel : label}
        className={classnames(buttonClasses, 'block')}
        href={
          externalLink
            ? `${current}`
            : current?.startsWith('/')
              ? `${current}`
              : `/${current}`
        }
        target={
          externalLink
            ? current?.startsWith('tel:')
              ? '_self'
              : '_blank'
            : '_self'
        }
        rel={externalLink ? 'noopener noreferrer' : ''}
      >
        {withIcon && (
          <NextImage
            {...iconImage}
            otherClasses={classnames(
              'max-w-5 max-h-5 ',
              iconImageHover ? 'group-hover:hidden block' : '',
            )}
          />
        )}
        {iconImageHover && withIcon && (
          <NextImage
            {...iconImageHover}
            otherClasses="max-w-5 max-h-5 group-hover:block  hidden"
          />
        )}
        {label}
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
      {withIcon && (
        <NextImage
          {...iconImage}
          otherClasses="max-w-5 max-h-5 group-hover:hidden  block"
        />
      )}
      {withIcon && (
        <NextImage
          {...iconImageHover}
          otherClasses="max-w-5 max-h-5 group-hover:block  hidden"
        />
      )}

      {label}
    </button>
  )
}
