import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WebAppProvider, useInitData} from '@vkruglikov/react-telegram-web-app'
function App() {
  // Assuming you have a function that fetches a user and returns a Promise
  
  const [initData] = useInitData();
  const userid = initData?.user?.id
  return (
    <>
    <WebAppProvider>
    
<p>{userid}</p>
    </WebAppProvider>
    </>
  )
}

export default App
