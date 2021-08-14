import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Layout(props) {
  return (
    <div className = "layout">
      <Header />
      <div className = "layout-children">
        { props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;