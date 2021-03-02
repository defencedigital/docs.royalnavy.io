import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledBodyRow = styled.div`
  display: flex;
  align-items: flex-start;

  & + & {
    margin-top: ${spacing('4')};
  }
`
