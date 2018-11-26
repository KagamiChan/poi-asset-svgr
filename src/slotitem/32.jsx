import React from 'react'
const Icon = React.memo(props => (
  <svg width="1em" height="1em" viewBox="0 0 640 640" {...props}>
    <defs>
      <path id="prefix__b" d="M0 440h320v40H0z" />
      <filter
        x="-4.7%"
        y="-37.5%"
        width="118.8%"
        height="250%"
        filterUnits="objectBoundingBox"
        id="prefix__a"
      >
        <feOffset dx={20} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" in="shadowBlurOuter1" />
      </filter>
      <path id="prefix__d" d="M159.29 0L60 100.001 159.29 200 260 100.001z" />
      <filter
        x="-7.5%"
        y="-7.5%"
        width="130%"
        height="130%"
        filterUnits="objectBoundingBox"
        id="prefix__c"
      >
        <feOffset dx={20} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" in="shadowBlurOuter1" />
      </filter>
      <path id="prefix__f" d="M40 220h240L160 420z" />
      <filter
        x="-6.2%"
        y="-7.5%"
        width="125%"
        height="130%"
        filterUnits="objectBoundingBox"
        id="prefix__e"
      >
        <feOffset dx={20} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" in="shadowBlurOuter1" />
      </filter>
      <linearGradient x1="0%" y1="100%" x2="0%" y2="-96.94%" id="prefix__g">
        <stop stopColor="#9DCE79" offset="0%" />
        <stop stopColor="#BFEB9F" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(160 80)">
        <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <use fill="#BFEB9F" xlinkHref="#prefix__b" />
      </g>
      <g transform="translate(160 80)">
        <use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__d" />
        <use fill="#BFEB9F" xlinkHref="#prefix__d" />
      </g>
      <g transform="translate(160 80)">
        <use fill="#000" filter="url(#prefix__e)" xlinkHref="#prefix__f" />
        <use fill="#BFEB9F" xlinkHref="#prefix__f" />
      </g>
      <path
        d="M320.994 520H480v40H320.994v-40zM320 80l100.085 100.001L320 280V80zm.994 220h119.254L320.994 500V300z"
        fill="url(#prefix__g)"
      />
    </g>
  </svg>
))
export default Icon
