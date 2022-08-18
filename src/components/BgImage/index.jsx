import ImageDesktop from "../../assets/image/desktop-image.png"
import ImageMobile from "../../assets/image/mobile-image.png"
export function BgImage(){

    return(
        <div className="bgImage">
            <img src={ImageDesktop} alt="" />
        </div>
    )
}