import React from 'react'
import {Reboot} from 'material-ui'

import {view as Header} from './components/header'
import {view as Drawer} from './components/drawer'
import {view as Main} from './components/main'
import {view as Footer} from './components/footer'
import {view as Articles} from './components/articles'

const App = ({children}) => (
  <div>
    <Reboot />
    <Header />
    <Drawer />
    <Main>
      <Articles />
    </Main>
    {/* {children} */}
    <Footer />
  </div>
)

export default App
