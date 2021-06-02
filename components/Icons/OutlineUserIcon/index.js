import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const OutlineUserIcon = ({
  color = '#FFF',
  style
}) => {

  const filter = `
    <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Icons/icon_user</title>
      <defs>
        <filter id="filter-1">
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix>
        </filter>
      </defs>
      <g id="Screens" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="Make-a-reservation" transform="translate(-61.000000, -224.000000)">
          <g id="Icon-box" transform="translate(46.000000, 213.000000)">
            <g id="Icons/icon_user" transform="translate(1.000000, 0.000000)" filter="url(#filter-1)">
              <g id="user" transform="translate(15.000000, 12.000000)" stroke="${color}" stroke-width="2">
                <path d="M16,18 L16,16 C16,13.790861 14.209139,12 12,12 L4,12 C1.790861,12 0,13.790861 0,16 L0,18" id="Path"></path>
                <circle id="Oval" cx="8" cy="4" r="4"></circle>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={18} height={20} style={style} />
  )
}

export default memo(OutlineUserIcon);