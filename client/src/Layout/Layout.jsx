import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import './Layout.css';

function Layout(props) {
  return (
    <div className = "layout">
      <Header user={props.user}/>
      <div className = "layout-children">
        { props.children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;