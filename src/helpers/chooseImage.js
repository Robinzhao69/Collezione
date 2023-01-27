import doom from "../../public/img/doom.webp"
import forza from "../../public/img/forza.webp"
import minecraft from "../../public/img/minecraft.webp"



function chooseImage(titleFromInput){
    let toBeAddedImage;
    switch(titleFromInput){
        case("Doom"):
            toBeAddedImage = doom
            break;
        case("Forza"):
            toBeAddedImage = forza
            break;
        case("Minecraft"):
            toBeAddedImage = minecraft
            break;
        default:
            toBeAddedImage = forza
            break;
    }
    return toBeAddedImage
}

export default chooseImage;