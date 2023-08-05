import React from "react";
// import { useNavigate } from "react-router-dom";
import construction from "../../assets/images/construction.png";

export default function FourZeroFour() {
  // const navigate = useNavigate();
  return (
    <section className="error-page text-center">
      <div className="container mt-30">
        <div className="error-content">
          <img src={construction} alt="construction" style={{ width: '600px', heigh: 'auto' }}/>
          <h2>This page is under construction.</h2>
          <p>
            Discover seniorcare.tech, your ultimate guide to integrated technology solutions 
            designed specifically for nursing homes, assisted living facilities, and other specialized senior care institutions. 
            In a fast-growing sector and an underserved market, we bring you invaluable insights into networking and wifi, cyber security, 
            endpoint management and protection, app management and licensing, mobile device management, hardware management, 
            telecommunications management, and more. Stay tuned for our website launch on 09/01/2023, where you'll find cutting-edge 
            information to revolutionize the way you support and care for senior citizens. Together, let's embrace technology for a brighter 
            future in senior care.
          </p>
          {/* <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="theme-btn mt-30"
          >
            go back
          </a> */}
        </div>
        <div className="text-left">
          <h4>Affordable Brands to Get You Started:</h4>
          <div className='d-flex justify-content-between'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/search?ie=UTF8&tag=srtech05-20&linkCode=ur2&linkId=90ee4f7ac2f140dfae8f3d49115d1f3a&camp=1789&creative=9325&index=pc-hardware&keywords=Beelink Computers">Affordable Desktop Solutions</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/search?ie=UTF8&tag=srtech05-20&linkCode=ur2&linkId=d6a1cddfe682fde06f85939ed9e1563e&camp=1789&creative=9325&index=pc-hardware&keywords=Unifi">Wifi and Networking</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/search?ie=UTF8&tag=srtech05-20&linkCode=ur2&linkId=56965dedfac004a0a5b11f719b5bda5c&camp=1789&creative=9325&index=pc-hardware&keywords=Laptop Mics and Cameras">Hardware Accessories</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/search?ie=UTF8&tag=srtech05-20&linkCode=ur2&linkId=6cc4b6fa95d671ddaefc82d4ca7d98fc&camp=1789&creative=9325&index=pc-hardware&keywords=Refurbished HP Laptops">Affordable Laptops</a>
          </div>
        </div>
      </div>
    </section>
  );
}
