import { styled } from "styled-components";
import imgtrailer from "assets/imgtrailer.svg"

const StyledImg = styled.div`
    position: relative;
    img {
        width: 515px;
        height: 276px;
    }
    .watchFilm {
        display: none;
        position: absolute;
        color: #ffff;
        bottom: 50px;
        left: 60px;
        font-size: 30px;
    }
`

export const Img = ({srcLink,namefilm}) => {
    return (
        <StyledImg>
            <img src={srcLink} />
            {/* <img src="https://drive.google.com/uc?export=download&id=16wJvfbbSZlu8YkFlbbTTDOThOC9SQR8x" /> */}
            
        </StyledImg>
    )
} 