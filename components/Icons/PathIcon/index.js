import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const PathIcon = ({
  color = '#DDD',
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15">
      <g fill="none" fill-rule="evenodd">
        <g fill="${color}" fill-rule="nonzero">
          <g>
            <path d="M45.879 28.25c-.149-.2-.401-.29-.642-.233L30.475 31.59c-.248.06-.434.265-.47.517-.034.253.09.5.312.625l5.457 3.065 1.344 6.088c.055.25.257.439.509.478.033.005.066.008.1.007.22 0 .424-.117.535-.307l7.66-13.13c.124-.215.107-.484-.043-.683zm-7.893 11.82l-.976-4.42 2.09-1.558c.275-.204.332-.592.128-.866-.204-.275-.592-.332-.866-.128l-2.09 1.556-3.971-2.232 11.817-2.859-6.132 10.506z" transform="translate(-30 -268) translate(0 240)" />
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={16} height={15} style={style} />
  )
}

export default memo(PathIcon);