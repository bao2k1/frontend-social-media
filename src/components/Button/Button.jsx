import styled from 'styled-components';
import {ReactComponent as ArrowDown} from 'assets/arrow-down.svg';

const StyledButton = styled.button`
    color: ${props => props.text_color};
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.radius};
    border: ${props => props.border_custom};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    background: linear-gradient(${props => props.bg_color1}, ${props => props.bg_color1}) padding-box, linear-gradient(60deg, ${props => props.bg_color1}, ${props => props.bg_color3}) border-box;
    /* background: linear-gradient(#130303, #130303) padding-box, linear-gradient(60deg, #130303, #FF0016) border-box; */
    background: ${props => props.bg_color};
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        
        font-size: ${props => props.font_size_text};
        border-bottom: ${props => props.border_bottom_text};
        
       
    }
    svg {
        position: absolute;
        top: 6px;
        right: 0;
        path {
            stroke: ${props => props.text_color};
        }
    }
`
export const Button = ({ title, text_color, bg_color, width, height, radius, border_custom, fontSize, fontWeight, font_size_text, bg_color1, bg_color2, bg_color3, isGenres, border_bottom_text, ...rest }) => {
    return (
        <StyledButton text_color={text_color} bg_color={bg_color} width={width} height={height} radius={radius} border_custom = {border_custom} fontSize = {fontSize} fontWeight = {fontWeight} font_size_text = {font_size_text} bg_color1 = {bg_color1} bg_color2 = {bg_color2} bg_color3 = {bg_color3} border_bottom_text = {border_bottom_text} {...rest}>
            <span> {title} </span>
            {isGenres ? <ArrowDown /> : " "}
        </StyledButton>
    )
}

Button.defaultProps = {
    text: 'Button',
    bg_color: null,
    bg_color1: "#130303",
    bg_color2: "#130303",
    bg_color3: "#FF0016",
    onClick: undefined,
};