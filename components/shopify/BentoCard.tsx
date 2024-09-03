'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 3, 26, 0) 0%,
      rgba(255, 255, 255, 0.04) 100%
    ),
    rgba(255, 255, 255, 0.01);
  border-radius: 20px;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 300px;
  transition-property: transform;

  &::before {
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 3, 26, 0) 0%,
        rgba(255, 255, 255, 0.08) 100%
      ),
      linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05)
      );
    border-radius: inherit;
    content: '';
    inset: 0;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
  }
`;

const StyledConnectedDots = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  > div {
    background: rgba(255, 255, 255, 0.1);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
  }

  > div:nth-child(1) {
    top: 0;
    left: 0;
  }

  > div:nth-child(2) {
    top: 0;
    left: 32px;
  }

  > div:nth-child(3) {
    top: 30px;
    left: 0;
  }

  > div:nth-child(4) {
    top: 30px;
    left: 32px;
  }
`;

const StyledLines = styled.div`
  > div {
    position: absolute;
  }

  > div:nth-child(1) {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    width: 1px;
    left: 37px;
    top: 0;
    height: 24px;
  }
  > div:nth-child(2) {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    width: 25px;
    height: 1px;
    top: 40px;
    left: 0;
  }
  > div:nth-child(3) {
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    width: 289px;
    height: 1px;
    top: 40px;
    left: 50px;
  }
`;

const StyledCircles = styled.div`
  position: absolute;
  top: 14px;
  left: 15px;

  > div {
    position: absolute;
    border-radius: 9699px;
  }

  > div:nth-child(1) {
    background: rgba(255, 255, 255, 0.01);
    box-shadow: inset 0 0 5px #ffffff1a;
    top: 0;
    left: 0;
    width: 46px;
    height: 46px;
  }

  > div:nth-child(2) {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.12) 100%
    );
    top: 5px;
    left: 5px;
    width: 37px;
    height: 37px;
  }
`;

const ConnectedCardIcon = styled.div`
  position: absolute;
  top: 42px;
  left: 50px;
`;

function BentoCard({ f }: { f: { feature: string; icon: ReactNode } }) {
  return (
    <StyledCard className="shrink-0 snap-center place-content-center p-5">
      {/* <StyledConnectedDots>
        <div key="0"></div>
        <div key="1"></div>
        <div key="2"></div>
        <div key="3"></div>
      </StyledConnectedDots> */}
      <StyledLines>
        <div key={1}></div>
        <div key={2}></div>
        <div key={3}></div>
      </StyledLines>
      <StyledCircles>
        <div key="0"></div>
        <div key="1"></div>
      </StyledCircles>
      <div>
        <svg
          fill="none"
          height="36"
          viewBox="0 0 36 36"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
          key="v3_0"
        >
          <mask
            height="36"
            id="mask0_132_10060"
            maskUnits="userSpaceOnUse"
            width="36"
            x="0"
            y="0"
            className="[mask-type:alpha]"
          >
            <rect fill="#D9D9D9" height="36" width="36"></rect>
          </mask>
          <g mask="url(#mask0_132_10060)">
            <path
              d="M19.7644 9.35367C19.7644 8.01679 18.0663 7.49183 17.34 8.60417L10.2245 19.5025C9.6382 20.4004 10.2686 21.6032 11.3255 21.6032H16.2356V26.6463C16.2356 27.9832 17.9337 28.5082 18.6599 27.3958L25.7755 16.4975C26.3618 15.5996 25.7314 14.3968 24.6745 14.3968H19.7644V9.35367Z"
              fill="url(#paint0_linear_132_10060)"
              fill-opacity="0.24"
              stroke="url(#paint1_linear_132_10060)"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_132_10060"
              x1="18"
              x2="18"
              y1="8"
              y2="28"
            >
              <stop stop-color="white" stop-opacity="0"></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_132_10060"
              x1="18"
              x2="18"
              y1="8"
              y2="28"
            >
              <stop stop-color="white"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0.8"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h3 className="font-semibold tracking-tight leading-0 mt-2 scroll-m-20 text-[#dde1ee]">
        {f.feature}
      </h3>
    </StyledCard>
  );
}

export default BentoCard;
