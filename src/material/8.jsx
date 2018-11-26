import React from 'react'
const Icon = React.memo(props => (
  <svg width="1em" height="1em" viewBox="0 0 1200 1200" {...props}>
    <defs>
      <path id="prefix__b" d="M200 950l400-200 400 200-400 200z" />
      <filter
        x="-7.5%"
        y="-7.5%"
        width="115%"
        height="130%"
        filterUnits="objectBoundingBox"
        id="prefix__a"
      >
        <feMorphology radius={5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
        <feOffset dy={30} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
      <use fill="#CFCFCF" xlinkHref="#prefix__b" />
      <path fill="#909090" d="M400 350v600l200 100 200-100V350L600 450z" />
      <path fill="#CFCFCF" d="M400 450v500l200 100V550z" />
      <g>
        <path fill="#CFCFCF" d="M200 250L600 50l400 200-400 200z" />
        <path fill="#909090" d="M200 250v200l400 200 400-200V250L600 450z" />
        <path fill="#CFCFCF" d="M200 250v200l400 200V450z" />
      </g>
    </g>
  </svg>
))
export default Icon
