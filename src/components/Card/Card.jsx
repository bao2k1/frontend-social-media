import { styled } from "styled-components";
import { Button } from "components/Button";

const StyledCard = styled.div`
    .card {
        display: flex;
        flex-direction: column;
        align-items: ${props => props.title_center};
        border: 10px;
        transition-duration: 0.5s;
        position: relative;
        cursor: pointer;
        span {
            color: white;
        }
        span.style-title {
            font-size: ${props => props.font_size};
            font-weight: ${props => props.font_weight};
            line-height: ${props => props.line_height};
        }
        img {
            width: ${props => props.width} ;
            height: ${props => props.height};
            border-radius: ${props => props.radius};
            object-fit: cover;
        }
        button {
            position: absolute;
            top: -15px;
            right: 90px;
        }
        .fee {
            top: 25px;
            position: absolute;
            color: #f4e8e8;
            background-color: #f44646;
            width: 40px;
            height: 20px;
            font-size: 13px;
            text-align: center;
            border-radius: 0 8px 8px 0;
            left: 5px;
        }
    }
`
export const Card = ({title, genres, srcImg, width, height, isGrid, title_center, font_size, font_weight, line_height, radius, fee, ...res}) => {
    return (
        <StyledCard width = {width} height = {height} title_center = {title_center} font_size = {font_size} font_weight = {font_weight} line_height = {line_height} radius = {radius} fee = {fee} {...res}>
            <div className="card">
                <div className="avatar">
                    <img src={srcImg} alt="" />
                </div>
                <span className="style-title">{title}</span>
                {isGrid ? 
                (<>
                    <span className="genres">{genres}</span>
                    <Button title={"7.5"} text_color={"white"} width={"40px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}></Button>
                </>)
                 : ""}
                {fee ? <span className="fee">FEE</span> : <span hidden></span>}
                
            </div>
        </StyledCard>
    )
}

Card.defaultProps = {
    font_size: '12px',
    font_weight: 400,
};