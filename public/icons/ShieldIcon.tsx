import React from "react";

export const ShieldIcon = ({width="33",height="35",  gradientFrom = "#15B79E",
  gradientTo = "#125D56",}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3809 2.59766L3.48633 7.65625C2.73438 7.92969 2.1875 8.68164 2.25586 9.50195C2.25586 15.9277 4.85352 27.1387 15.3809 32.2656V2.59766ZM17.5684 32.2656C28.0273 27.1387 30.625 15.9277 30.6934 9.50195C30.6934 8.68164 30.1465 7.92969 29.3945 7.65625L17.5684 2.59766V32.2656ZM18.1836 0.478516L30.2148 5.60547C31.7188 6.28906 32.8809 7.72461 32.8809 9.50195C32.8125 16.3379 30.0098 28.7109 18.252 34.3848C17.0898 34.9316 15.791 34.9316 14.6289 34.3848C2.87109 28.7109 0.0683594 16.3379 0.0683594 9.50195C0 7.72461 1.16211 6.28906 2.66602 5.60547L14.7656 0.478516C15.8594 0 17.0898 0 18.1836 0.478516Z"
         fill={`url(#gradient-${gradientFrom}-${gradientTo})`}
      />
      <defs>
        <linearGradient
          id={`gradient-${gradientFrom}-${gradientTo}`}
          x1="13.0699"
          y1="14.0866"
          x2="17.3516"
          y2="38.3407"
          gradientUnits="userSpaceOnUse"
        >
         <stop stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
      </defs>
    </svg>
  );
};
