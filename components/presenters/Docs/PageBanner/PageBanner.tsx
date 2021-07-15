import React, { useState } from 'react'
import { IconClose } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledPageBanner } from './partials/StyledPageBanner'
import { StyledCloseButton } from './partials/StyledCloseButton'

export const PageBanner: React.FC<ComponentWithClass> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  function handleOnClick(_: React.MouseEventHandler<HTMLButtonElement>) {
    setIsOpen(false)
  }

  return isOpen ? (
    <StyledPageBanner data-testid="page-banner">
      <div>{children}</div>
      <StyledCloseButton
        onClick={handleOnClick}
        data-testid="page-banner-button"
      >
        <IconClose size={18} />
      </StyledCloseButton>
    </StyledPageBanner>
  ) : null
}

PageBanner.displayName = 'PageBanner'
