import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';

const DrinkIcon = ({
  color = '#227f9e',
  style
}) => {

  const filter = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <filter id="esot2m8caa">
          <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.133333 0 0 0 0 0.498039 0 0 0 0 0.619608 0 0 0 1.000000 0" />
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g filter="url(#esot2m8caa)" transform="translate(-37 -385) translate(36 107) translate(.38 277.726)">
              <g>
                <path d="M0 0H24V24H0z" transform="translate(.62 .274)" />
                <path fill="${color}" d="M11.075 13.925c.397.396.413 1.033.037 1.449l-4.97 5.498c-.528.585-1.43.63-2.014.102l-.053-.05c-.557-.556-.557-1.46 0-2.016l.053-.05 5.498-4.97c.416-.376 1.053-.36 1.45.037zm3.45-.037l5.498 4.97.052.05c.557.557.557 1.46 0 2.017l-.052.05c-.584.527-1.486.482-2.014-.103l-4.97-5.498c-.376-.416-.36-1.053.036-1.45.397-.396 1.034-.412 1.45-.036zM3.987 3.06l7.071 7.071-2.828 2.828-4.243-4.242c-1.562-1.562-1.562-4.095 0-5.657zm13.059.14l.707.707-2.865 3.502c-.18.22-.164.54.037.74.2.201.52.217.74.038l3.502-2.866.707.707-2.865 3.503c-.18.22-.164.54.037.74.2.2.52.217.74.037l3.502-2.865.708.707-3.182 3.182c-1.367 1.367-3.583 1.367-4.95 0s-1.367-3.583 0-4.95L17.047 3.2z" transform="translate(.62 .274)" />
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

export default memo(DrinkIcon);