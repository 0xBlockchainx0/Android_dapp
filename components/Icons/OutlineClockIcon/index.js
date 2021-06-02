import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const OutlineClockIcon = ({
  color = '#FFF',
  style
}) => {

  const filter = `
    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Icons/icon_user</title>
      <defs>
        <filter id="filter-1">
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix>
        </filter>
      </defs>
      <g id="Screens" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="Make-a-reservation" transform="translate(-297.000000, -227.000000)">
          <g id="Icon-box-Copy-2" transform="translate(280.000000, 213.000000)">
            <g id="Icons/icon_user" transform="translate(3.000000, 0.000000)" filter="url(#filter-1)">
              <g id="clock" transform="translate(15.000000, 15.000000)" stroke="${color}" stroke-width="2">
                <circle id="Oval" cx="8" cy="8" r="8"></circle>
                <polyline id="Path" points="8 3.2 8 8 11.2 9.6"></polyline>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={18} height={18} style={style} />
  )
}

export default memo(OutlineClockIcon);