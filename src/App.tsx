
import './App.css'
import { WebAppProvider, useInitData} from '@vkruglikov/react-telegram-web-app'
function App() {
  // Assuming you have a function that fetches a user and returns a Promise
  
  const [initData] = useInitData();
  const userid = initData?.user?.id
  return (
    <>
    
<p>{userid}</p>
   
    </>
  )
}

export default App
