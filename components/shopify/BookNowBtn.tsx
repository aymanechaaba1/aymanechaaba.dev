'use client';

import React from 'react';
import { BiLogoZoom } from 'react-icons/bi';
import { SiZoom } from 'react-icons/si';
import styled from 'styled-components';
import './styles/BookNowBtn.css';

const StyledContainer = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(
    162deg,
    rgba(121, 230, 242, 0.08) -0.38%,
    rgba(48, 151, 191, 0.06) 167.95%
  );
  -webkit-backdrop-filter: blur(27px);
  backdrop-filter: blur(27px);
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    162deg,
    rgba(255, 255, 255, 0.08) -0.38%,
    rgba(40, 44, 50, 0.06) 167.95%
  );
  -webkit-backdrop-filter: blur(27px);
  backdrop-filter: blur(27px);
  box-shadow: var(--chakra-shadows-none);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BookNowBtn() {
  return (
    <a target="_blank" href="https://calendly.com/aymanechaaba1/onboarding">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 318.91 99.66"
        width={400}
        className="mx-auto"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="11.24"
            y1="47.01"
            x2="69.17"
            y2="47.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#77787b" />
            <stop offset="1" stop-color="#000" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="10.73"
            y1="47.01"
            x2="188.59"
            y2="47.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#d2dbea" />
            <stop offset=".99" stop-color="#5a6283" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="57.13"
            y1="47.01"
            x2="302.04"
            y2="47.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#79e6f2" />
            <stop offset="1" stop-color="#3097bf" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-4"
            x1="57.13"
            y1="47.01"
            x2="90.97"
            y2="47.01"
            xlinkHref="#linear-gradient-2"
          />
        </defs>
        <g className="cls-9">
          <g id="OBJECTS">
            <g>
              <image
                className="cls-10"
                width="208"
                height="65"
                transform="scale(1.53)"
                xlinkHref="data:image/png;base64,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"
              />
              <path
                className="cls-5"
                d="M289.78,11.75H59.93c-2.03,0-3.3,2.05-2.59,3.83h-27.45c-10.57,0-19.17,8.6-19.17,19.17v24.53c0,10.57,8.6,19.17,19.17,19.17h27.45c-.71,1.78.56,3.83,2.59,3.83h229.85c6.78,0,12.27-5.49,12.27-12.27V24.01c0-6.78-5.49-12.27-12.27-12.27Z"
              />
            </g>
            <g>
              <path
                className="cls-1"
                d="M23.77,17.12h163.29v59.8H23.77c-6.35,0-11.5-5.15-11.5-11.5V28.62c0-6.35,5.15-11.5,11.5-11.5Z"
              />
              <path
                className="cls-3"
                d="M188.59,78.44H29.9c-10.57,0-19.17-8.6-19.17-19.17v-24.53c0-10.57,8.6-19.17,19.17-19.17h158.69v62.86ZM29.9,18.65c-8.88,0-16.1,7.22-16.1,16.1v24.53c0,8.88,7.22,16.1,16.1,16.1h155.62V18.65H29.9Z"
              />
            </g>
            <path
              className="cls-4"
              d="M302.04,24.01v46c0,6.78-5.49,12.27-12.27,12.27H59.93c-2.24,0-3.57-2.5-2.33-4.37l19.55-29.33c.63-.95.63-2.18,0-3.13l-19.55-29.33c-1.24-1.87.09-4.37,2.33-4.37h229.85c6.78,0,12.27,5.49,12.27,12.27Z"
            />
            <path
              className="cls-5"
              d="M284.03,71.54H74.11v-3.07h209.92c1.13,0,2.04-.92,2.04-2.04V28.61c0-1.13-.92-2.04-2.04-2.04H74.11v-3.07h209.92c2.82,0,5.11,2.29,5.11,5.11v37.82c0,2.82-2.29,5.11-5.11,5.11Z"
            />
            <path
              className="cls-2"
              d="M90.97,47.01l-22.09,35.26h-8.94c-2.24,0-3.57-2.5-2.33-4.37l19.55-29.33c.63-.95.63-2.18,0-3.13l-19.55-29.33c-1.24-1.87.09-4.37,2.33-4.37h8.94l22.09,35.26Z"
            />
            <polygon
              className="cls-5"
              points="92.78 47.01 70.68 82.28 67.06 82.28 89.16 47.01 67.06 11.75 70.68 11.75 92.78 47.01"
            />
            <text className="cls-7" transform="translate(107.99 57.55)">
              <tspan x="0" y="0">
                BOOK N
              </tspan>
              <tspan className="cls-6" x="110.44" y="0">
                O
              </tspan>
              <tspan className="cls-8" x="130.86" y="0">
                W
              </tspan>
            </text>
            <path
              className="cls-5"
              d="M37.26,69.71c-.39,0-.78-.15-1.08-.45l-11.98-11.98c-.6-.6-.6-1.57,0-2.17l3.59-3.59c-.53-3.03.66-6.41,2.06-8.7,1.46-2.39,3.27-3.93,4.97-4.23,2.18-.38,4.09-.68,4.97-.81l10.93-10.93c1.56-1.56,4.28-1.56,5.84,0,.78.78,1.21,1.82,1.21,2.92s-.43,2.14-1.21,2.92l-5.4,5.4c.31.18.59.4.85.66.78.78,1.21,1.82,1.21,2.92,0,.21-.02.42-.04.62.61.2,1.17.54,1.64,1.01.96.96,1.35,2.29,1.16,3.54.61.2,1.17.54,1.64,1.01h0s0,0,0,0c.78.78,1.21,1.82,1.21,2.92s-.43,2.14-1.21,2.92l-8.13,8.13c-2.66,2.66-4.99,4.01-6.92,4.01h0c-.26,0-.49-.02-.7-.06l-3.49,3.49c-.3.3-.69.45-1.08.45ZM27.44,56.19l9.82,9.82,3.11-3.11c.29-.29.68-.45,1.08-.45h0c.33,0,.66.11.92.31.21.04,1.65.16,4.9-3.1l8.13-8.14c.2-.2.31-.47.31-.75s-.11-.55-.31-.75c0,0,0,0,0,0-.4-.4-1.1-.4-1.5,0h0c-.6.6-1.57.6-2.17,0-.6-.6-.6-1.57,0-2.17h0s.87-.88.87-.88c.41-.41.41-1.09,0-1.51-.4-.4-1.1-.4-1.5,0h0c-.6.6-1.57.6-2.17,0-.6-.6-.6-1.57,0-2.17h0l.87-.87c.2-.2.31-.47.31-.75s-.11-.55-.31-.75c-.4-.4-1.1-.4-1.51,0-.6.6-1.57.6-2.17,0-.6-.6-.6-1.57,0-2.17h0s8.22-8.22,8.22-8.22c.2-.2.31-.47.31-.75s-.11-.55-.31-.75c-.4-.4-1.1-.4-1.5,0l-11.29,11.29c-.23.23-.54.39-.87.43,0,0-2.44.35-5.38.87-.63.11-1.8,1.04-2.88,2.81-1.5,2.45-2.1,5.25-1.52,7.13.17.54.02,1.13-.38,1.54l-3.11,3.11ZM42.54,62.89s0,0,0,0c0,0,0,0,0,0ZM42.54,62.89s0,0,0,0c0,0,0,0,0,0ZM42.53,62.88s0,0,0,0c0,0,0,0,0,0Z"
            />
          </g>
        </g>
      </svg>
    </a>
  );
}

export default BookNowBtn;
