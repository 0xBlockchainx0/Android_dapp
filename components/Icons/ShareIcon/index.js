import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const ShareIcon = ({
  color = '#000',
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <defs>
        <filter id="vx88uwxvqa">
          <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.117647 0 0 0 0 0.125490 0 0 0 0 0.133333 0 0 0 1.000000 0" />
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g fill="${color}" fill-rule="nonzero" filter="url(#vx88uwxvqa)" transform="translate(-240 -1209) translate(-6 1182) translate(246 27)">
              <path d="M6.147 5.1L8.07 3.18v10.166c0 .514.417.93.931.93s.931-.416.931-.93V3.179L11.853 5.1c.235.236.578.328.9.242.322-.085.574-.337.66-.659.085-.322-.007-.665-.244-.9L9.66.273C9.483.098 9.246 0 9 0c-.247 0-.484.098-.658.273L4.83 3.783c-.237.236-.33.58-.243.901.085.322.337.574.659.66.322.085.665-.007.9-.243z" />
              <path d="M17.069 8.069c-.514 0-.931.417-.931.931v7.138H1.862V9c0-.514-.417-.931-.931-.931S0 8.486 0 9v7.448C0 17.305.695 18 1.552 18h14.896c.857 0 1.552-.695 1.552-1.552V9c0-.514-.417-.931-.931-.931z" />
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={18} height={18} style={style} />
  )
}

export default memo(ShareIcon);