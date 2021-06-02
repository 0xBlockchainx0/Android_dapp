import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const CircleMinusIcon = ({
  color = '#D0D0D2',
  size = 30,
  style
}) => {

  const filter = `
    <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Combined Shape</title>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon_minus" fill="${color}">
          <path d="M15,0 C23.2842712,0 30,6.71572875 30,15 C30,23.2842712 23.2842712,30 15,30 C6.71572875,30 0,23.2842712 0,15 C0,6.71572875 6.71572875,0 15,0 Z M21,14.25 L9,14.25 L9,15.75 L21,15.75 L21,14.25 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={size} height={size} style={style} />
  )
}

export default memo(CircleMinusIcon);