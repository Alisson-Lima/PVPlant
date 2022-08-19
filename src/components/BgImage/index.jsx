import ImageDesktop from "../../assets/image/desktop-image.png"
import ImageMobile from "../../assets/image/mobile-image.png"
import "./style.css"
export function BgImage(){

    return(
        <div className="bgImage">
            <img src={ImageMobile} alt="" />
        </div>
    )
}