import React, { CSSProperties, Fragment } from "react";
interface SvgProps {
  style?: CSSProperties;
  theme?: "light" | "dark";
}
const Surface3DIcon = ({ style }: SvgProps) => {
  return (
    <svg
      width="155"
      height="88"
      style={style}
      viewBox="0 0 98 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_155)">
        <path
          opacity="0.64"
          d="M36.0463 13.4356L38.7161 11.4509L76.2222 18.3223L58.8807 32.4693L26.6173 23.9811L36.0463 13.4356Z"
          fill="#99F5FF"
          fillOpacity="0.9"
        />
        <path
          opacity="0.6"
          d="M31.4931 38.5686C31.4931 38.5686 36.6996 38.9405 41.9424 46.6202C47.1852 54.3 53.2346 66.426 60.8971 60.363C68.5597 54.3 74.351 39.1547 78.7146 36.2202L31.4971 38.5727L31.4931 38.5686Z"
          fill="#99F5FF"
          fillOpacity="0.8"
        />
        <path
          d="M0 31.661C0 31.661 3.69819 35.3877 17.9788 8.66612C32.2593 -18.0554 37.9095 41.3617 56.4609 23.1728L67.3498 5.38807C67.3498 5.38807 73.8025 -6.73788 82.6749 5.38807C91.5473 17.514 91.9506 22.7686 98 23.1728L64.5267 45.8079L0 31.661Z"
          fill="#99F5FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_155">
          <rect width="98" height="62" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Surface3DTitle = ({ style }: SvgProps) => (
  <svg
    width="120"
    height="21"
    style={style}
    viewBox="0 0 92 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.21849 3.27245C7.21849 3.89679 7.02936 4.42772 6.6511 4.86522C6.27285 5.30272 5.74192 5.6035 5.05833 5.76756V5.80858C5.86497 5.90884 6.47565 6.15493 6.89036 6.54686C7.30508 6.93423 7.51243 7.45832 7.51243 8.11913C7.51243 9.08071 7.1638 9.83039 6.46653 10.3681C5.76927 10.9014 4.7735 11.168 3.47923 11.168C2.39459 11.168 1.43301 10.9879 0.594463 10.6279V8.83006C0.981833 9.02603 1.40794 9.18553 1.87278 9.30858C2.33763 9.43163 2.79791 9.49315 3.25364 9.49315C3.95091 9.49315 4.46588 9.37466 4.79856 9.13768C5.13125 8.9007 5.29759 8.52017 5.29759 7.99608C5.29759 7.52668 5.10618 7.194 4.72337 6.99803C4.34056 6.80207 3.72988 6.70409 2.89134 6.70409H2.13255V5.08397H2.90501C3.67975 5.08397 4.24485 4.98371 4.60032 4.78319C4.96035 4.57811 5.14036 4.22948 5.14036 3.73729C5.14036 2.98078 4.6664 2.60252 3.71849 2.60252C3.39036 2.60252 3.0554 2.65721 2.7136 2.76659C2.37636 2.87596 2.00039 3.06509 1.58567 3.33397L0.608135 1.87791C1.51959 1.22166 2.60651 0.893539 3.86888 0.893539C4.90338 0.893539 5.71914 1.10317 6.31614 1.52245C6.91771 1.94172 7.21849 2.52505 7.21849 3.27245ZM18.5891 5.93846C18.5891 7.58364 18.1197 8.84373 17.1809 9.71873C16.2467 10.5937 14.8954 11.0312 13.1272 11.0312H10.2971V1.03709H13.4348C15.0663 1.03709 16.3333 1.46776 17.2356 2.32909C18.1379 3.19041 18.5891 4.39354 18.5891 5.93846ZM16.3879 5.99315C16.3879 3.84666 15.44 2.77342 13.5442 2.77342H12.4163V9.28123H13.3254C15.3671 9.28123 16.3879 8.18521 16.3879 5.99315ZM32.1565 8.25584C32.1565 9.15819 31.8307 9.86913 31.179 10.3887C30.5319 10.9082 29.6295 11.168 28.472 11.168C27.4056 11.168 26.4622 10.9674 25.6419 10.5664V8.59764C26.3164 8.89842 26.886 9.11034 27.3509 9.23338C27.8203 9.35643 28.2487 9.41795 28.636 9.41795C29.1009 9.41795 29.4563 9.32909 29.7024 9.15135C29.9531 8.97362 30.0784 8.70929 30.0784 8.35838C30.0784 8.16242 30.0237 7.98924 29.9143 7.83885C29.805 7.6839 29.6432 7.53579 29.429 7.39452C29.2194 7.25324 28.7887 7.02765 28.137 6.71776C27.5263 6.43065 27.0683 6.15493 26.763 5.89061C26.4576 5.62629 26.2138 5.31867 26.0315 4.96776C25.8492 4.61685 25.7581 4.20669 25.7581 3.73729C25.7581 2.85317 26.0566 2.15819 26.6536 1.65233C27.2552 1.14647 28.0846 0.893539 29.1419 0.893539C29.6614 0.893539 30.1559 0.955063 30.6253 1.07811C31.0992 1.20116 31.5937 1.37433 32.1087 1.59764L31.4251 3.2451C30.8919 3.02635 30.4498 2.87368 30.0989 2.78709C29.7526 2.70051 29.4108 2.65721 29.0735 2.65721C28.6725 2.65721 28.3649 2.75064 28.1507 2.93748C27.9365 3.12433 27.8294 3.36815 27.8294 3.66893C27.8294 3.85578 27.8727 4.01984 27.9593 4.16112C28.0459 4.29784 28.1826 4.43228 28.3694 4.56444C28.5608 4.69204 29.0097 4.92446 29.7161 5.2617C30.6503 5.70832 31.2906 6.15721 31.637 6.60838C31.9834 7.055 32.1565 7.60415 32.1565 8.25584ZM43.0828 1.03709V7.50389C43.0828 8.24217 42.9165 8.88931 42.5838 9.4453C42.2557 10.0013 41.7794 10.4274 41.1551 10.7236C40.5307 11.0198 39.7925 11.168 38.9402 11.168C37.6551 11.168 36.657 10.8398 35.9461 10.1836C35.2352 9.52277 34.8797 8.62043 34.8797 7.47655V1.03709H36.992V7.15526C36.992 7.92544 37.1469 8.49054 37.4568 8.85057C37.7667 9.2106 38.2794 9.39061 38.9949 9.39061C39.6876 9.39061 40.1889 9.2106 40.4988 8.85057C40.8133 8.48599 40.9705 7.91633 40.9705 7.14159V1.03709H43.0828ZM48.6292 5.47362H49.3128C49.9827 5.47362 50.4772 5.36196 50.7962 5.13866C51.1152 4.91535 51.2747 4.56444 51.2747 4.08592C51.2747 3.61196 51.1107 3.27472 50.7826 3.0742C50.459 2.87368 49.9554 2.77342 49.2718 2.77342H48.6292V5.47362ZM48.6292 7.19627V11.0312H46.5101V1.03709H49.4222C50.7803 1.03709 51.7852 1.28547 52.4368 1.78221C53.0885 2.2744 53.4144 3.02407 53.4144 4.03123C53.4144 4.61913 53.2526 5.14321 52.929 5.6035C52.6055 6.05923 52.1475 6.41698 51.555 6.67674C53.0589 8.92349 54.0387 10.375 54.4945 11.0312H52.1429L49.7572 7.19627H48.6292ZM58.8172 11.0312H56.7323V1.03709H62.4608V2.77342H58.8172V5.35057H62.2079V7.08006H58.8172V11.0312ZM71.514 11.0312L70.7894 8.65233H67.1459L66.4213 11.0312H64.1381L67.6654 0.996078H70.2562L73.7972 11.0312H71.514ZM70.2836 6.87498C69.6136 4.71939 69.2354 3.50031 69.1488 3.21776C69.0668 2.93521 69.0075 2.7119 68.9711 2.54784C68.8207 3.13117 68.39 4.57355 67.6791 6.87498H70.2836ZM80.287 2.65721C79.4895 2.65721 78.872 2.95799 78.4345 3.55956C77.997 4.15656 77.7782 4.99054 77.7782 6.06151C77.7782 8.29002 78.6145 9.40428 80.287 9.40428C80.9888 9.40428 81.8388 9.22883 82.8368 8.87791V10.6553C82.0165 10.9971 81.1005 11.168 80.0888 11.168C78.635 11.168 77.523 10.7282 76.7528 9.84862C75.9826 8.9645 75.5975 7.69758 75.5975 6.04784C75.5975 5.00877 75.7867 4.09959 76.1649 3.3203C76.5432 2.53644 77.0855 1.93716 77.7919 1.52245C78.5028 1.10317 79.3345 0.893539 80.287 0.893539C81.2577 0.893539 82.233 1.12824 83.2128 1.59764L82.5292 3.3203C82.1555 3.14256 81.7795 2.98761 81.4013 2.85545C81.023 2.72329 80.6516 2.65721 80.287 2.65721ZM91.7055 11.0312H85.9496V1.03709H91.7055V2.77342H88.0688V4.96776H91.4525V6.70409H88.0688V9.28123H91.7055V11.0312Z"
      fill="#99F5FF"
    />
  </svg>
);

const Surface3D = ({ theme }: SvgProps) => {
  return (
    <Fragment>
      <Surface3DTitle
        theme={theme}
        style={{
          position: "absolute",
          top: 21,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Surface3DIcon
        style={{
          position: "absolute",
          bottom: 15,
          left: "50%",
          transform: "translateX(-50%)",
          height: 105,
        }}
      />
    </Fragment>
  );
};

export default Surface3D;