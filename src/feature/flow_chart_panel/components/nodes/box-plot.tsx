import { useMantineTheme } from "@mantine/core";
import { SVGProps } from "react";

const BoxPlot = ({ ...props }: SVGProps<SVGSVGElement>) => {
  const theme = useMantineTheme();
  const accent =
    theme.colorScheme === "dark"
      ? theme.colors.accent1[0]
      : theme.colors.accent2[0];
  return (
    <svg
      width="69"
      height="63"
      viewBox="0 0 69 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5_256)">
        <path
          d="M41.3082 23.2507H32.5776C31.7717 23.2507 31.1225 23.9699 31.1225 24.8627V32.6129C31.1225 33.5058 31.7717 34.225 32.5776 34.225H35.124V49.8246C35.124 50.9407 35.9355 51.8397 36.9429 51.8397C37.9503 51.8397 38.7618 50.9407 38.7618 49.8246V34.225H41.3082C42.1141 34.225 42.7633 33.5058 42.7633 32.6129V24.8627C42.7633 23.9699 42.1141 23.2507 41.3082 23.2507Z"
          fill={accent}
        />
        <path
          opacity="0.5"
          d="M47.1286 44.6661H55.8593C56.6652 44.6661 57.3144 43.9469 57.3144 43.054V32.9229C57.3144 32.0301 56.6652 31.3109 55.8593 31.3109H53.3128V22.0974C53.3128 20.9876 52.5013 20.0824 51.4939 20.0824C50.4866 20.0824 49.6751 20.9814 49.6751 22.0974V31.3109H47.1286C46.3227 31.3109 45.6735 32.0301 45.6735 32.9229V43.054C45.6735 43.9469 46.3227 44.6661 47.1286 44.6661ZM16.5714 37.8335H19.1178V43.3826C19.1178 44.4987 19.9293 45.3977 20.9367 45.3977C21.9441 45.3977 22.7556 44.4987 22.7556 43.3826V37.8335H25.302C26.1079 37.8335 26.7571 37.1143 26.7571 36.2214V26.9336C26.7571 26.0407 26.1079 25.3215 25.302 25.3215H22.7556V17.2613C22.7556 16.1515 21.9441 15.2462 20.9367 15.2462C19.9293 15.2462 19.1178 16.1453 19.1178 17.2613V25.3215H16.5714C15.7655 25.3215 15.1163 26.0407 15.1163 26.9336V36.2214C15.1163 37.1143 15.7655 37.8335 16.5714 37.8335Z"
          fill={accent}
        />
        <path
          d="M58.8143 22.5872H61.3607V28.1364C61.3607 29.2524 62.1722 30.1515 63.1796 30.1515C64.187 30.1515 64.9985 29.2524 64.9985 28.1364V22.5872H67.5449C68.3508 22.5872 69 21.868 69 20.9752V11.6873C69 10.7945 68.3508 10.0753 67.5449 10.0753H64.9985V2.01506C64.9985 0.905226 64.187 0 63.1796 0C62.1722 0 61.3607 0.899026 61.3607 2.01506V10.0753H58.8143C58.0084 10.0753 57.3592 10.7945 57.3592 11.6873V20.9752C57.3592 21.868 58.0084 22.5872 58.8143 22.5872Z"
          fill={accent}
        />
        <path
          d="M10.1857 34.4048H1.45511C0.649201 34.4048 0 35.124 0 36.0168V43.767C0 44.6599 0.649201 45.3791 1.45511 45.3791H4.00154V60.9787C4.00154 62.0948 4.81304 62.9938 5.82042 62.9938C6.8278 62.9938 7.63931 62.0948 7.63931 60.9787V45.3791H10.1857C10.9916 45.3791 11.6408 44.6599 11.6408 43.767V36.0168C11.6408 35.124 10.9916 34.4048 10.1857 34.4048Z"
          fill={accent}
        />
      </g>
      <defs>
        <clipPath id="clip0_5_256">
          <rect width="69" height="63" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BoxPlot;
