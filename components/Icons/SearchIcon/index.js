import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const SearchIcon = ({
  isActive
}) => {
  const color = isActive ? '#000' : '#DDD';

  const filter = `
    <svg width="18px" height="19px" viewBox="0 0 18 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Search</title>
      <defs>
        <path d="M17.7255,17.1779643 L13.3675714,12.6455 C14.4880714,11.3135 15.102,9.63757143 15.102,7.89285714 C15.102,3.8165 11.7855,0.5 7.70914286,0.5 C3.63278571,0.5 0.316285714,3.8165 0.316285714,7.89285714 C0.316285714,11.9692143 3.63278571,15.2857143 7.70914286,15.2857143 C9.23946429,15.2857143 10.6977857,14.8241429 11.9446071,13.9479286 L16.3356429,18.5147857 C16.5191786,18.7053929 16.7660357,18.8105 17.0305714,18.8105 C17.2809643,18.8105 17.5185,18.7150357 17.6988214,18.5414643 C18.0819643,18.1727857 18.0941786,17.5614286 17.7255,17.1779643 Z M7.70914286,2.42857143 C10.7222143,2.42857143 13.1734286,4.87978571 13.1734286,7.89285714 C13.1734286,10.9059286 10.7222143,13.3571429 7.70914286,13.3571429 C4.69607143,13.3571429 2.24485714,10.9059286 2.24485714,7.89285714 C2.24485714,4.87978571 4.69607143,2.42857143 7.70914286,2.42857143 Z" id="path-1"></path>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <mask id="mask-2" fill="white">
          <use xlink:href="#path-1"></use>
        </mask>
        <use id="Search" fill="${color}" fill-rule="nonzero" xlink:href="#path-1"></use>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={22} height={23} />
  )
}

export default memo(SearchIcon);