import React from 'react'
import './mobileAppDownload.css'
import { assets } from '../../assets/assets'

const MobileAppDownload = () => {
  return (
    <div className="mobile-app-download" id="mobile-app-download">
        <p>For your convenience you can now download <br/> HelathyFood app! </p>
        <div className="mobile-app-download-types">
            <img src={assets.apple_store} alt="Apple store image" />
            <img src={assets.google_play_store} alt="Google Play store image" />
        </div>
    </div>
  )
}

export default MobileAppDownload
