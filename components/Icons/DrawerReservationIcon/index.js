import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const DrawerReservationIcon = ({
  color = '#fff',
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <defs>
        <filter id="9coartca1a">
          <feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g filter="url(#9coartca1a)" transform="translate(-33 -425) translate(31 261) translate(2 164)">
              <g>
                <path fill="${color}" fill-rule="nonzero" d="M9.992 0C4.474 0 0 4.474 0 9.99s4.474 9.99 9.992 9.99c5.516 0 9.99-4.474 9.99-9.99S15.508 0 9.992 0zm-.054 16.587c-3.642 0-6.595-2.953-6.595-6.597 0-3.644 2.953-6.597 6.595-6.597 3.644 0 6.6 2.953 6.6 6.597 0 3.644-2.956 6.597-6.6 6.597zm1.49-7.51V5.588c0-.639-.523-1.164-1.162-1.164h-.548c-.641 0-1.165.525-1.165 1.164V9.8c0 .43.238.803.59 1.005.034.05.054.108.1.152l2.979 2.98c.451.45 1.193.45 1.644 0l.388-.389c.451-.451.451-1.192 0-1.644l-2.825-2.827z"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={24} height={24} style={style} />
  )
}

export default memo(DrawerReservationIcon);