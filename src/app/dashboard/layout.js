import UserProvider from '../context/user'
import '../globals.css'
import Nav from './Nav'
import Sidebar from './Sidebar'

export const metadata = {
  title: 'Admin Dashboard',
  description: 'movie app main dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Nav/>
          {children}
          <Sidebar/>
        </body>
      </UserProvider>
    </html>
  )
}
