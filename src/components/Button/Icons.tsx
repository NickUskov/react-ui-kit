import React from "react";

export type ButtonSvgIcons = {
  nameSvg: string;
  svg: (size: string | undefined) => React.JSX.Element;
};

const addSvg: (size: string | undefined) => React.JSX.Element = (
  size: string | undefined
) => (
  <svg
    width={size === "large" ? "40" : size === "medium" ? "28" : "24"}
    height={size === "large" ? "40" : size === "medium" ? "28" : "24"}
    viewBox="0 0 35 35"
  >
    <g>
      <polyline
        fill="none"
        points="649,137.999 675,137.999 675,155.999 661,155.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="none"
        points="653,155.999 649,155.999 649,141.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="none"
        points="661,156 653,162 653,156  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </g>
    <g>
      <path
        d="M16,30c-3.74,0-7.255-1.456-9.899-4.101C1.779,21.578,0.753,15.025,3.547,9.595C3.8,9.104,4.402,8.911,4.894,9.163   c0.491,0.252,0.685,0.855,0.432,1.347C2.931,15.165,3.81,20.781,7.515,24.485C9.781,26.752,12.794,28,16,28   c3.205,0,6.219-1.248,8.485-3.515S28,19.205,28,16c0-3.206-1.248-6.219-3.515-8.485S19.206,4,16,4   c-3.206,0-6.219,1.249-8.485,3.515c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414C8.745,3.457,12.26,2,16,2   c3.74,0,7.256,1.457,9.899,4.101C28.544,8.745,30,12.26,30,16c0,3.739-1.456,7.255-4.101,9.899C23.256,28.544,19.74,30,16,30z"
        fill="currentColor"
      />
    </g>
    <g>
      <path
        d="M16,22c-0.552,0-1-0.447-1-1V11c0-0.552,0.448-1,1-1s1,0.448,1,1v10C17,21.553,16.552,22,16,22z"
        fill="currentColor"
      />
    </g>
    <g>
      <path
        d="M21,17H11c-0.552,0-1-0.448-1-1s0.448-1,1-1h10c0.553,0,1,0.448,1,1S21.553,17,21,17z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const removeSvg: (size: string | undefined) => React.JSX.Element = (
  size: string | undefined
) => (
  <svg
    width={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    height={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    viewBox="0 0 34 34"
  >
    <g>
      <polyline
        fill="none"
        points="   649,137.999 675,137.999 675,155.999 661,155.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="none"
        points="   653,155.999 649,155.999 649,141.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="none"
        points="   661,156 653,162 653,156  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </g>
    <g>
      <path
        d="M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z"
        fill="currentColor"
      />
      <path
        d="M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const editSvg: (size: string | undefined) => React.JSX.Element = (
  size: string | undefined
) => (
  <svg
    width={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    height={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    viewBox="0 0 34 34"
  >
    <g>
      <polyline
        fill="currentColor"
        points="   649,137.999 675,137.999 675,155.999 661,155.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="currentColor"
        points="   653,155.999 649,155.999 649,141.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="currentColor"
        points="   661,156 653,162 653,156  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </g>
    <path
      d="M28.172,3.828c-0.964-0.964-2.186-1.575-3.533-1.767c-1.961-0.278-3.895,0.367-5.294,1.767  c-0.391,0.391-0.391,1.024,0,1.415c0.021,0.021,0.048,0.028,0.07,0.046c0.018,0.021,0.025,0.048,0.046,0.069l2.884,2.884  L7.449,23.138l-2.293-2.293L17.793,8.208c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L3.037,20.136  c-0.001,0.001-0.002,0.001-0.003,0.002L2.292,20.88c-0.094,0.094-0.167,0.206-0.217,0.327C2.026,21.329,2,21.458,2,21.587V29  c0,0.553,0.448,1,1,1h7.414c0.265,0,0.52-0.105,0.707-0.293l17.051-17.051C30.605,10.222,30.605,6.262,28.172,3.828z M24.358,4.042  c0.914,0.13,1.744,0.545,2.399,1.2c1.409,1.41,1.606,3.567,0.614,5.199l-2.906-2.907l0,0l0,0l-2.916-2.916  C22.38,4.109,23.363,3.901,24.358,4.042z M4,28v-5.482l2.74,2.74c0.001,0.001,0.001,0.002,0.001,0.002s0.002,0.001,0.002,0.001  L9.482,28H4z M8.863,24.552L23.758,9.656l2.293,2.293L11.155,26.845L8.863,24.552z"
      fill="currentColor"
    />
  </svg>
);

const copySvg: (size: string | undefined) => React.JSX.Element = (
  size: string | undefined
) => (
  <svg
    width={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    height={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    viewBox="0 0 34 34"
  >
    <g>
      <polyline
        fill="none"
        points="   649,137.999 675,137.999 675,155.999 661,155.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="none"
        points="   653,155.999 649,155.999 649,141.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="none"
        points="   661,156 653,162 653,156  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </g>
    <g>
      <g>
        <path
          d="M25,30H3c-0.552,0-1-0.447-1-1V11c0-0.552,0.448-1,1-1s1,0.448,1,1v17h20V8H3C2.448,8,2,7.552,2,7s0.448-1,1-1h22    c0.553,0,1,0.448,1,1v22C26,29.553,25.553,30,25,30z"
          fill="currentColor"
        />
      </g>
      <g>
        <path
          d="M29,22c-0.553,0-1-0.447-1-1V4H11c-0.552,0-1-0.448-1-1s0.448-1,1-1h18c0.553,0,1,0.448,1,1v18C30,21.553,29.553,22,29,22    z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

const settingsSvg: (size: string | undefined) => React.JSX.Element = (
  size: string | undefined
) => (
  <svg
    width={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    height={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    viewBox="0 0 34 34"
  >
    <g>
      <path
        d="M30,16c0-1.969-1.431-3.611-3.307-3.94l-0.347-0.835c1.095-1.56,0.945-3.731-0.447-5.124   c-1.346-1.346-3.599-1.521-5.125-0.448l-0.835-0.346C19.61,3.431,17.969,2,16,2c-1.969,0-3.611,1.431-3.94,3.307l-0.835,0.346   C9.667,4.56,7.494,4.708,6.101,6.101c-0.756,0.755-1.172,1.76-1.172,2.829c0,0.833,0.253,1.628,0.724,2.296L5.307,12.06   C3.43,12.389,2,14.031,2,16c0,0,0,0,0,0s0,0,0,0c0,1.97,1.431,3.611,3.307,3.94l0.346,0.834c-1.094,1.561-0.945,3.732,0.448,5.125   c1.344,1.345,3.601,1.521,5.125,0.448l0.835,0.346c0.329,1.876,1.971,3.307,3.94,3.307c1.97,0,3.611-1.431,3.939-3.307l0.835-0.347   c1.559,1.095,3.73,0.947,5.125-0.447c0.756-0.756,1.172-1.76,1.172-2.829c0-0.833-0.254-1.628-0.724-2.296l0.346-0.834   C28.569,19.612,30,17.971,30,16C30,16.001,30,16.001,30,16C30,16,30,16,30,16z M26,18.002c-0.404,0-0.769,0.243-0.924,0.617   l-0.808,1.948c-0.155,0.374-0.069,0.804,0.217,1.09c0.378,0.378,0.586,0.88,0.586,1.414c0,0.535-0.208,1.037-0.586,1.415   c-0.78,0.78-2.051,0.778-2.829,0c-0.286-0.286-0.716-0.372-1.09-0.217l-1.949,0.808C18.243,25.232,18,25.597,18,26.001   c0,1.103-0.897,2-2,2c-1.103,0-2-0.897-2-2c0-0.404-0.244-0.77-0.617-0.924l-1.95-0.808c-0.375-0.155-0.803-0.069-1.09,0.217   c-0.756,0.756-2.072,0.756-2.828,0c-0.78-0.78-0.78-2.049,0-2.829c0.286-0.286,0.372-0.716,0.217-1.09l-0.808-1.948   C6.769,18.245,6.404,18.002,6,18.002c-1.103,0-2-0.897-2-2.001c0,0,0,0,0,0s0,0,0,0c0-1.103,0.897-2,2-2   c0.404,0,0.769-0.244,0.924-0.617l0.808-1.95c0.155-0.374,0.069-0.804-0.217-1.09c-0.378-0.378-0.586-0.88-0.586-1.414   c0-0.534,0.208-1.037,0.586-1.415c0.78-0.78,2.049-0.78,2.829,0c0.286,0.286,0.716,0.37,1.09,0.217l1.949-0.808   C13.756,6.769,14,6.404,14,6c0-1.103,0.897-2,2-2c1.103,0,2,0.897,2,2c0,0.404,0.244,0.769,0.617,0.924l1.95,0.808   c0.374,0.154,0.804,0.07,1.09-0.217c0.756-0.756,2.072-0.756,2.828,0c0.779,0.78,0.779,2.049,0,2.829   c-0.286,0.286-0.372,0.716-0.217,1.09l0.808,1.95C25.23,13.756,25.596,14,26,14c1.103,0,2,0.897,2,2c0,0,0,0,0,0s0,0,0,0   C28,17.104,27.103,18.002,26,18.002z"
        fill="currentColor"
      />
      <path
        d="M16,11c-2.757,0-5,2.243-5,5s2.243,5,5,5c0.552,0,1-0.447,1-1s-0.448-1-1-1c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3   c0,0.582-0.166,1.146-0.481,1.632c-0.301,0.463-0.169,1.082,0.295,1.383c0.463,0.301,1.082,0.17,1.383-0.295   C20.722,17.91,21,16.969,21,16C21,13.243,18.757,11,16,11z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const likeSvg: (size: string | undefined) => React.JSX.Element = (
  size: string | undefined
) => (
  <svg
    width={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    height={size === "large" ? "24" : size === "medium" ? "20" : "14"}
    viewBox="0 0 34 34"
  >
    <g>
      <polyline
        fill="none"
        points="   649,137.999 675,137.999 675,155.999 661,155.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="none"
        points="   653,155.999 649,155.999 649,141.999  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        fill="none"
        points="   661,156 653,162 653,156  "
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </g>
    <g>
      <g>
        <path
          d="M16,30c-0.215,0-0.43-0.069-0.61-0.207C14.844,29.372,2,19.396,2,11c0-4.411,3.589-8,8-8s8,3.589,8,8c0,0.552-0.447,1-1,1    c-0.552,0-1-0.448-1-1c0-3.309-2.691-6-6-6s-6,2.691-6,6c0,6.467,9.477,14.653,12,16.719C18.522,25.653,28,17.46,28,11    c0-3.309-2.691-6-6-6c-0.895,0-1.756,0.192-2.559,0.57c-0.5,0.236-1.097,0.021-1.331-0.478c-0.235-0.5-0.021-1.095,0.478-1.331    C19.66,3.256,20.808,3,22,3c4.411,0,8,3.589,8,8c0,8.396-12.844,18.372-13.39,18.793C16.43,29.931,16.215,30,16,30z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export const ButtonIcons: ButtonSvgIcons[] = [
  { nameSvg: "add", svg: addSvg },
  { nameSvg: "remove", svg: removeSvg },
  { nameSvg: "edit", svg: editSvg },
  { nameSvg: "copy", svg: copySvg },
  { nameSvg: "settings", svg: settingsSvg },
  { nameSvg: "like", svg: likeSvg },
];
