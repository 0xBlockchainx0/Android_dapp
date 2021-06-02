import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const DrawerBookMarkIcon = ({
  color = '#fff',
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20">
      <defs>
        <filter id="6tshiwmaoa">
          <feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g filter="url(#6tshiwmaoa)" transform="translate(-31 -532) translate(31 261) translate(0 271)">
              <g>
                <path fill="${color}" fill-rule="nonzero" d="M0 .505v19.228c0 .272.153.338.34.144l5.47-5.619c.188-.192.491-.192.68 0l5.471 5.619c.187.191.34.128.34-.144V.505c0-.272-.217-.494-.48-.494H.48C.215.011 0 .233 0 .505z"/>
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

export default memo(DrawerBookMarkIcon);