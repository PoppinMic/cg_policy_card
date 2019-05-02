import styled from 'styled-components';

import {
  FONT_PRIMARY,
  FONT_SECONDARY,
  COLOR_TEXT_PRIMARY_BLACK,
  COLOR_TEXT_SECONDARY_GRAY,
  COLOR_BORDER_LIGHT_GRAY,
  BP_TABLET,
  BP_DESKTOP
} from '../../constants/cssVars';

interface WrapperProps {
  readonly active: boolean;
}

export const CardWrapper = styled.section<WrapperProps>`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 3px;
  padding: 16px;
  margin-bottom: 16px;
  ${props =>
    props.active &&
    `box-shadow: 0px 10px 20px rgba(197, 202, 209, 0.56), 0px 25px 20px rgba(172, 168, 129, 0.2);`}
  transition: all .15s ease-in;
  h2 {
    display: inline-block;
    font-family: ${FONT_PRIMARY};
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 4px;
    color: ${COLOR_TEXT_PRIMARY_BLACK};
  }

  @media (min-width: ${BP_DESKTOP}) {
    padding-right: 245px;
  }
`;

export const CardHeader = styled.header`
  border-bottom: 1px solid ${COLOR_BORDER_LIGHT_GRAY};
  margin-bottom: 8px;
  flex: 1 1 100%;
  display: flex;
`;

export const HeaderText = styled.div`
  @media (min-width: ${BP_TABLET}) {
    display: inline-block;
    margin-left: 18px;
    padding-right: 200px;
  }
  @media (min-width: ${BP_DESKTOP}) {
    padding-right: 0;
  }
`;

export const SubHeading = styled.div`
  font-family: ${FONT_SECONDARY};
  font-size: 14px;
  line-height: 21px;
  color: ${COLOR_TEXT_SECONDARY_GRAY};
  margin-bottom: 8px;
`;

export const PolicyDetails = styled.div`
  display: none;
  &.main {
    display: flex;
  }
  flex-flow: row wrap;
  align-items: center;
  max-width: 198px;
  max-height: 52px;
  @media (min-width: ${BP_TABLET}) {
    display: flex;
  }
`;

export const PolicyField = styled.span`
  font-family: ${FONT_SECONDARY};
  font-size: 12px;
  line-height: 15px;
  color: ${COLOR_TEXT_SECONDARY_GRAY};
`;

export const PolicyStatus = styled.span`
  font-family: ${FONT_PRIMARY};
  font-size: 14px;
  line-height: 24px;
  margin-left: 1em;
  text-transform: uppercase;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  &:after {
    content: ' ';
    margin-left: 4px;
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

export const DateText = styled.p`
  flex: 0 0 100%;
  font-family: ${FONT_PRIMARY};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
  &.capitalize {
    text-transform: capitalize;
  }
`;

export const ImgWrapper = styled.div`
  flex: 0 1 109px;
  max-height: 57px;
  max-width: 109px;

  @media (min-width: ${BP_TABLET}) {
    position: absolute;
    top: 12px;
    right: 24px;
  }
  @media (min-width: ${BP_DESKTOP}) {
    top: 24px;
    max-height: 104px;
    max-width: 197px;
  }
  img {
    max-width: 100%;
  }
`;
// CSS Icon
export const CircleIcon = styled.span<WrapperProps>`
  position: relative;
  flex: 0 0 48px;
  height: 48px;
  width: 48px;
  border: 2px solid #ffd200;
  border-radius: 50%;
  box-sizing: border-box;
  display: none;
  transition: all 0.15s ease-in;
  @media (min-width: ${BP_TABLET}) {
    display: inline-block;
    ${props =>
      props.active &&
      `background: #FFE600;
      border: 2px solid #FFE600;
      box-sizing: border-box;
      transform: rotate(90deg)
    `}
  }
  &::before,
  &::after {
    content: ' ';
    position: absolute;
    width: 10px;
    height: 2.5px;
    left: calc(50% - 10px / 2);
    top: calc(50% - 2.5px / 2);
    background: #2d2d2d;
    transform: rotate(-45deg);
    transform-origin: right;
  }
  &::after {
    transform: rotate(45deg);
  }
`;
