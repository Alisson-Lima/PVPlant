import { useState } from "react"
import ImageDesktop from "../../assets/image/desktop-image.png"
import ImageMobile from "../../assets/image/mobile-image.png"
import "./style.css"
export function BgImage(){
    const [imageWidth, setImageWidth] = useState(ImageDesktop)

    function widthImageFun(){
        let screenWidth = window.innerWidth
        if(screenWidth <= 1000){
            setImageWidth(ImageMobile)
            console.log(imageWidth)
        }else if(screenWidth > 1000){
            setImageWidth(ImageDesktop)
            console.log(imageWidth)
        }

    }
    return(
        <div className="bgImage" onChange={widthImageFun}>
            <img src={imageWidth} alt="" />
        </div>
    )
}