import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const OutlineCalendarIcon = ({
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
        <g id="Make-a-reservation" transform="translate(-179.000000, -226.000000)">
          <g id="Icon-box-Copy" transform="translate(147.000000, 213.000000)">
            <g id="Icons/icon_user" transform="translate(18.000000, 0.000000)" filter="url(#filter-1)">
              <g id="calendar" transform="translate(15.000000, 14.000000)" stroke="${color}" stroke-width="2">
                <rect id="Rectangle" x="0" y="1.77777778" width="16" height="16" rx="2"></rect>
                <line x1="11.5555556" y1="0" x2="11.5555556" y2="3.55555556" id="Path"></line>
                <line x1="4.44444444" y1="0" x2="4.44444444" y2="3.55555556" id="Path"></line>
                <line x1="0" y1="7.11111111" x2="16" y2="7.11111111" id="Path"></line>
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

export default memo(OutlineCalendarIcon);