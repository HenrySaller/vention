import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    font-family: sans-serif;
  }
`
