import { Link } from "react-router-dom";
import Header from './Header';
const Navbar = () => {
    return ( 
    <>
    <div>
          <Header />
    </div>
    <div className="hero">
        <img src="homes_for_sale_smithville_mo_card_image.jpg" width="100%" />
    </div>
        <nav className="navbar">
        <div className="links">
          <Link to="/" style={{
            color: 'white',
            backgroundColor: 'green',
            borderRadius: '8px'
          }}>Home</Link>
             
          
          <Link to="/contact" style={{
            color: 'white',
            backgroundColor: 'green',
            borderRadius: '8px'
          }}>Contact</Link>
        </div>
      </nav></>
     );
}
 
export default Navbar;