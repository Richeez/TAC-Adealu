import React from 'react'
import { FooterPage } from './footerStyled'


function Footer() {
  return (
    <FooterPage>
      <div className="footer-container ">
        <div className="icons">
          <span><i className="fab fa-instagram icon "></i></span>
          <span><i className="fab fa-twitter  icon"></i></span>
          <span><i className="fab fa-youtube icon"></i></span>
          <span><i className="fab fa-spotify  icon"></i></span>
          <span><i className="fab fa-facebook  icon"></i></span>
        </div>
        <div className="developer">
          <span>
         <small>meet developer</small> 

          </span>
        </div>
        <small>&copy; 2022 TACN Adealu | All rights reserved.</small>
      </div>
    </FooterPage>
  )
}

export default Footer