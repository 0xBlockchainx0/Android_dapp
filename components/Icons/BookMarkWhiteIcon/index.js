import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const BookMarkWhiteIcon = ({
  color = '#000',
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22">
      <defs>
        <filter id="miitvagxma">
          <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.117647 0 0 0 0 0.125490 0 0 0 0 0.133333 0 0 0 1.000000 0" />
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g filter="url(#miitvagxma)" transform="translate(-61 -1208) translate(-6 1182)">
            <g>
              <path fill="${color}" fill-rule="nonzero" d="M17.712.702c-.183-.262-.428-.454-.737-.576C16.778.042 16.572 0 16.357 0H1.642c-.216 0-.422.042-.618.126C.715.248.469.44.287.702c-.183.262-.274.552-.274.87v18.1c0 .318.091.608.274.87.182.263.428.455.737.576.196.084.402.126.618.126.44 0 .828-.154 1.165-.463l6.192-5.954 6.193 5.954c.327.3.716.45 1.165.45.234 0 .44-.038.618-.113.309-.121.554-.313.737-.576.183-.262.274-.552.274-.87v-18.1c0-.318-.092-.608-.274-.87zm-1.524 18.534l-5.939-5.7-1.25-1.194-1.25 1.194-5.939 5.7V1.797h14.378v17.44z" transform="translate(67 26)" />
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={18} height={22} style={style} />
  )
}

export default memo(BookMarkWhiteIcon);