import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const CirclePlusIcon = ({
  color = '#1E2022',
  size = 30,
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <defs>
        <filter id="kadqmou89a" width="130.9%" height="140.6%" x="-15.5%" y="-20.3%" filterUnits="objectBoundingBox">
          <feOffset dy="-10" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="10" />
          <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g fill="${color}">
          <g filter="url(#kadqmou89a)" transform="translate(-305 -875) translate(0 757)">
            <g>
              <path d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm1 12h-2v7h-7v2h7v7h2v-7h7v-2h-7v-7z" transform="translate(305 118)" />
            </g>
          </g>
        </g>
      </g>
    </svg>`

  return (
    <SvgXml xml={filter} width={size} height={size} style={style} />
  )
}

export default memo(CirclePlusIcon);