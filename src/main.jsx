import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { MyMap } from './Map/Map.jsx'
import AuthuserContext from './Context/AuthuserContext.jsx'



createRoot(document.getElementById('root')).render(
 
    <AuthuserContext>
      <RouterProvider router={MyMap} />
    </AuthuserContext>

)
