import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('/assets/fonts/NunitoSans-Bold.ttf') format('opentype');
        }
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url('/assets/fonts/NunitoSans-SemiBold.ttf') format('opentype');
        }
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/assets/fonts/Regular.ttf') format('opentype');
        }
      `}
  />
);
