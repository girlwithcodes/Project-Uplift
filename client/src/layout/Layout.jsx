import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

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