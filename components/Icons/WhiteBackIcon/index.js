import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const WhiteBackIcon = ({
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <path fill="#FFF" d="M23 0c12.703 0 23 10.297 23 23S35.703 46 23 46 0 35.703 0 23 10.297 0 23 0z" opacity=".9" transform="translate(-18 -43) translate(18 43)" />
            <g fill="#1A1824">
              <g>
                <path d="M23.8 4.171L19.767.191c-.261-.257-.68-.254-.938.007-.257.261-.254.68.007.938l2.882 2.844H.663c-.366 0-.663.297-.663.664 0 .366.297.663.663.663H21.72l-2.882 2.844c-.169.166-.236.41-.176.64.06.229.237.409.465.472.228.063.473 0 .642-.167l4.033-3.98c.127-.125.198-.295.198-.472 0-.178-.071-.348-.198-.473H23.8z" transform="translate(-18 -43) translate(18 43) rotate(180 17.658 13.73) translate(.316 .172)" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={46} height={46} style={style} />
  )
}

export default memo(WhiteBackIcon);