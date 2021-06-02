import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const PlusIcon = ({
  isActive
}) => {
  const color = isActive ? '#000' : '#FFF';

  const filter = `
    <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>22) Icons/icon_filter Copy 2</title>
      <defs>
        <filter id="filter-1">
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix>
        </filter>
      </defs>
      <g id="Screens" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="add" filter="url(#filter-1)">
          <g>
            <path fill="${color}" d="M16.6413881,7.64143201 L10.6413881,7.64143201 L10.6413881,1.64143201 C10.6413881,0.812979028 9.96981908,0.141410042 9.1413661,0.141410042 C8.31291311,0.141410042 7.64134412,0.812979028 7.64134412,1.64143201 L7.64134412,7.64143201 L1.64143201,7.64143201 C0.812979028,7.64143201 0.141410042,8.313001 0.141410042,9.14145399 C0.141410042,9.96990697 0.812979028,10.6413881 1.64143201,10.6413881 L7.64143201,10.6413881 L7.64143201,16.6413881 C7.64143201,17.4698411 8.313001,18.14141 9.14145399,18.14141 C9.96990697,18.14141 10.6413881,17.4697532 10.6413881,16.6413881 L10.6413881,10.6413881 L16.6413881,10.6413881 C17.4698411,10.6413881 18.14141,9.96981908 18.14141,9.1413661 C18.14141,8.31291311 17.4697532,7.64143201 16.6413881,7.64143201 Z" id="Path" fill-rule="nonzero"></path>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={22} height={22} />
  )
}

export default memo(PlusIcon);