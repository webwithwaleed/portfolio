import React from 'react'
import icon from '../pics/insta.png'

function footer() {
  return (
    <div className="footer">
      <p>Webwithwaleed</p>
      <a className='media' href="https://www.instagram.com/webwithwaleed/"><img width={"30px"} src={icon.src} alt="instagram" /></a>
      <p>Designed by webwithwaleed</p>
    </div>
  )
}

export default footer