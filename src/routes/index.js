// layouts
import {HeaderOnly} from '../components/Layout'

import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Search from '../pages/Search'

const publicRoutes = [ // Không đăng nhập vẫn xem được
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null},
]

const privateRoutes = [ // Phải đăng nhập, nếu không -> Home Page

]

export {publicRoutes, privateRoutes}

