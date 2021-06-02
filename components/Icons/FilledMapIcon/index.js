import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const FilledMapIcon = ({
  width = 15,
  height = 14,
  color = '#000',
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
      <g fill="none" fill-rule="evenodd">
        <g fill=${color} fill-rule="nonzero">
          <g>
            <g>
              <g>
                <path d="M3.655 0C1.645 0 .01 1.635.01 3.644c0 2.493 3.26 6.153 3.4 6.308.13.145.358.145.488 0 .139-.155 3.4-3.815 3.4-6.308C7.298 1.634 5.663 0 3.654 0zm0 9.23C2.557 7.927.667 5.355.667 3.644c0-1.648 1.34-2.988 2.988-2.988 1.647 0 2.987 1.34 2.987 2.988 0 1.71-1.89 4.282-2.987 5.586z" transform="translate(-45 -279) translate(30 269) translate(15.65 10.433) translate(2.795 2.795)" />
                <path d="M3.655 1.81c-1.011 0-1.833.823-1.833 1.834 0 1.01.822 1.833 1.833 1.833 1.01 0 1.833-.823 1.833-1.833 0-1.011-.822-1.834-1.833-1.834zm0 3.01c-.65 0-1.177-.527-1.177-1.176 0-.65.528-1.177 1.177-1.177s1.177.528 1.177 1.177S4.304 4.82 3.655 4.82z" transform="translate(-45 -279) translate(30 269) translate(15.65 10.433) translate(2.795 2.795)" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={width} height={height} style={style} />
  )
}

export default memo(FilledMapIcon);