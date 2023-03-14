import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Error, Menu,NavBar, Productdetails} from '.'
import { db } from '../database';
import { useState } from 'react';
import { Outlet } from 'react-router';

function Routers(props) {
    const [data, setData] = useState([]);
    const [ele, setEle] = useState({});

    const filterMenu = (word) => {
        if (word !== '') {
            console.log(word)
            const fi = db.filter(e => {
                return e.category === word
            })
            if (fi.length) {
                
                setData(fi)
            } else {
                setData([{title:' 🤨صفحة المنتج غير موجوده',img:'404.jpg'}])
            }
        }
    }
    
    const element = (e) => {
        setEle(e)
        return e
    }
    const leadRoutes = createBrowserRouter([
        {
            path: '/', element: [< NavBar fn = { filterMenu } />,<Outlet/>], children: [
                { path: 'home', element: <Home  />},
                { path: 'menu', element: <Menu cat={data} e={element} />},
                { path: 'product', element: <Productdetails e={ ele} />},
        ], errorElement: <Error />}
    ])
    return (
        <div>
            
            <RouterProvider router={leadRoutes} />
        </div>
    );
}

export default Routers;