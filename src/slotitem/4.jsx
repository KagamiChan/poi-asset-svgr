import React from 'react'
const Icon = React.memo(props => (
  <svg width="1em" height="1em" viewBox="0 0 640 640" {...props}>
    <defs>
      <path
        id="prefix__b"
        d="M379 220l-80.007 80L78.512 140 60 161.181 279 320v20l-40.299 40v40l60.292 59.298V500h200.701v-20.702L559.924 440V320L580 300v-40l-80.306-40z"
      />
      <filter
        x="-2.9%"
        y="-4.2%"
        width="111.5%"
        height="116.7%"
        filterUnits="objectBoundingBox"
        id="prefix__a"
      >
        <feOffset dx={20} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" in="shadowBlurOuter1" />
      </filter>
      <linearGradient x1="50%" y1="50%" x2="100%" y2="50%" id="prefix__c">
        <stop stopColor="#E9E100" offset="0%" />
        <stop stopColor="#FFEA00" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="50%" x2="100%" y2="50%" id="prefix__d">
        <stop stopColor="#E9E100" offset="0%" />
        <stop stopColor="#FFEA00" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
      <use fill="#FFEA00" xlinkHref="#prefix__b" />
      <path fill="url(#prefix__c)" d="M299 480h120v20H299z" />
      <path fill="url(#prefix__d)" d="M279 320h140v20H279z" />
      <path fill="url(#prefix__c)" d="M239 380h180v40H239z" />
    </g>
  </svg>
))
export default Icon
