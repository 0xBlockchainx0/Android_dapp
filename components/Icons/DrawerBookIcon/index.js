import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const DrawerBookIcon = () => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14">
      <defs>
        <filter id="bbnfno9nya">
          <feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g filter="url(#bbnfno9nya)" transform="translate(-33 -318) translate(31 261) translate(2 55)">
              <g>
                <path fill="#fff" fill-rule="nonzero" d="M23.988 12.202L22.142.815C22.069.37 21.684.04 21.23.04H3.564l.15.923.15.923 1.546 9.54.15.923.15.923h17.367c.27 0 .528-.118.703-.325.175-.206.251-.478.208-.745zm-5.526-4.623H9.23c-.51 0-.923-.413-.923-.923s.413-.923.923-.923h9.23c.51 0 .924.413.924.923s-.414.923-.923.923zM3.69 12.35l-.15-.924-.766-4.724-.468-2.883L1.84.935.012 12.202c-.043.267.033.54.208.745.175.207.432.325.703.325H3.84l-.15-.923z" transform="translate(0 2)"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={24} height={24} />
  )
}

export default memo(DrawerBookIcon);