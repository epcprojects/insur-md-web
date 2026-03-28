import React from "react";

export const EnergyIcon = ({width="27",height="35",gradientFrom = "#15B79E",
  gradientTo = "#125D56",}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7305 0.478516C19.0723 0.205078 19.4824 0 19.8926 0C21.0547 0 21.875 1.23047 21.4648 2.32422L16.8164 15.3125H24.4043C25.3613 15.3125 26.25 16.2012 26.25 17.1582C26.25 17.7051 25.9766 18.252 25.5664 18.5938L7.45117 34.5898C7.10938 34.8633 6.69922 35 6.28906 35C5.12695 35 4.30664 33.8379 4.7168 32.7441L9.36523 19.6875H1.70898C0.751953 19.6875 0 18.9355 0 17.9785C0 17.4316 0.205078 16.9531 0.546875 16.6113L18.7305 0.478516ZM18.7988 3.34961L2.87109 17.5H10.9375C11.2793 17.5 11.6211 17.7051 11.8262 17.9785C12.0312 18.3203 12.0312 18.6621 11.9629 19.0039L7.38281 31.7188L23.4473 17.5H15.3125C14.9023 17.5 14.5605 17.3633 14.3555 17.0898C14.1504 16.748 14.1504 16.4062 14.2188 16.0645L18.7988 3.34961Z"
         fill={`url(#gradient-${gradientFrom}-${gradientTo})`}
      />
      <defs>
        <linearGradient
          id={`gradient-${gradientFrom}-${gradientTo}`}
          x1="10.2969"
          y1="14.155"
          x2="15.0913"
          y2="38.2094"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
      </defs>
    </svg>
  );
};
