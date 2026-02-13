import Breadcrumbs from './Breadcrumbs'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="inner">
        <Breadcrumbs />
        {children}
      </div>
      <Footer />
    </div>
  )
}
