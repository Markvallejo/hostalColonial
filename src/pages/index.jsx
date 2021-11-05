import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../theme/globalStyles"
import themeDefault from "../theme/themeDefault"

import Home from "../templates/home"

const IndexPage = () => {
  return (
    <div>
      <ThemeProvider theme={themeDefault} >
       <GlobalStyles />
       <main> <Home /> </main>
     </ThemeProvider>
    </div>
  )
}

export default IndexPage
