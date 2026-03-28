import React from "react";

const MenuBtn = ({ startClr = "#15B79E", endClr = "#125D56" }) => {
  return (
    <svg
      width="114"
      height="106"
      viewBox="0 0 114 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_2607_19517)">
        <path
          d="M24.6492 50C24.6492 33.9837 37.6329 21 53.6492 21H59.6492C75.6654 21 88.6492 33.9837 88.6492 50C88.6492 66.0163 75.6654 79 59.6492 79H53.6492C37.6329 79 24.6492 66.0163 24.6492 50Z"
          fill="url(#paint0_linear_2607_19517)"
          shape-rendering="crispEdges"
        />
        <path
          d="M47.8992 43C47.8992 42.5858 48.235 42.25 48.6492 42.25H64.6492C65.0634 42.25 65.3992 42.5858 65.3992 43C65.3992 43.4142 65.0634 43.75 64.6492 43.75L48.6492 43.75C48.235 43.75 47.8992 43.4142 47.8992 43Z"
          fill="white"
        />
        <path
          d="M47.8992 50C47.8992 49.5858 48.235 49.25 48.6492 49.25L64.6492 49.25C65.0634 49.25 65.3992 49.5858 65.3992 50C65.3992 50.4142 65.0634 50.75 64.6492 50.75L48.6492 50.75C48.235 50.75 47.8992 50.4142 47.8992 50Z"
          fill="white"
        />
        <path
          d="M48.6492 56.25C48.235 56.25 47.8992 56.5858 47.8992 57C47.8992 57.4142 48.235 57.75 48.6492 57.75L64.6492 57.75C65.0634 57.75 65.3992 57.4142 65.3992 57C65.3992 56.5858 65.0634 56.25 64.6492 56.25L48.6492 56.25Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_2607_19517"
          x="3.8147e-05"
          y="-2.20766"
          width="113.298"
          height="107.298"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.44147" />
          <feGaussianBlur stdDeviation="12.3246" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.180392 0 0 0 0 0.827451 0 0 0 0 0.717647 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2607_19517"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2607_19517"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1.44147" />
          <feGaussianBlur stdDeviation="3.67575" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.181471 0 0 0 0 0.826373 0 0 0 0 0.718889 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2607_19517"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2607_19517"
          x1="50.4234"
          y1="45.0783"
          x2="56.8886"
          y2="85.489"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={startClr} />
          <stop offset="1" stopColor={endClr} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MenuBtn;
