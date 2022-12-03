import { CSSProperties, Fragment } from "react";

interface SvgProps {
  style?: CSSProperties;
  theme?: "light" | "dark";
}

const HistoTitle = ({ style, theme }: SvgProps) => {
  if (theme === "light") {
    return (
      <svg
        style={style}
        width="130"
        height="16"
        viewBox="0 0 130 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.4206 15.3877H9.40302V9.22559H3.74872V15.3877H0.721375V1.11035H3.74872V6.70605H9.40302V1.11035H12.4206V15.3877ZM17.4339 15.3877V1.11035H20.4612V15.3877H17.4339ZM33.8827 11.4229C33.8827 12.2692 33.6776 13.0049 33.2675 13.6299C32.8573 14.2549 32.2584 14.7367 31.4706 15.0752C30.6893 15.4137 29.7388 15.583 28.619 15.583C28.1242 15.583 27.6392 15.5505 27.164 15.4854C26.6952 15.4202 26.2427 15.3258 25.8065 15.2021C25.3768 15.0719 24.9667 14.9124 24.5761 14.7236V11.9111C25.2531 12.2106 25.9563 12.4808 26.6854 12.7217C27.4146 12.9626 28.1373 13.083 28.8534 13.083C29.3482 13.083 29.7453 13.0179 30.0448 12.8877C30.3508 12.7575 30.5722 12.5785 30.7089 12.3506C30.8456 12.1227 30.914 11.8623 30.914 11.5693C30.914 11.2113 30.7935 10.9053 30.5526 10.6514C30.3117 10.3975 29.9797 10.1598 29.5565 9.93848C29.1399 9.71712 28.6679 9.47949 28.1405 9.22559C27.8085 9.06934 27.4472 8.88053 27.0565 8.65918C26.6659 8.43132 26.2948 8.15462 25.9432 7.8291C25.5917 7.50358 25.302 7.1097 25.0741 6.64746C24.8528 6.17871 24.7421 5.61882 24.7421 4.96777C24.7421 4.11491 24.9374 3.38574 25.328 2.78027C25.7186 2.1748 26.2753 1.71257 26.9979 1.39355C27.7271 1.06803 28.5865 0.905273 29.5761 0.905273C30.3182 0.905273 31.0246 0.993164 31.6952 1.16895C32.3723 1.33822 33.0787 1.58561 33.8143 1.91113L32.8378 4.26465C32.1802 3.99772 31.591 3.79264 31.0702 3.64941C30.5494 3.49967 30.0188 3.4248 29.4784 3.4248C29.1008 3.4248 28.7785 3.48665 28.5116 3.61035C28.2447 3.72754 28.0429 3.89681 27.9061 4.11816C27.7694 4.33301 27.7011 4.58366 27.7011 4.87012C27.7011 5.20866 27.7987 5.49512 27.994 5.72949C28.1959 5.95736 28.4953 6.17871 28.8925 6.39355C29.2961 6.6084 29.7974 6.85905 30.3964 7.14551C31.1255 7.49056 31.7473 7.85189 32.2616 8.22949C32.7824 8.60059 33.1828 9.04004 33.4628 9.54785C33.7427 10.0492 33.8827 10.6742 33.8827 11.4229ZM43.3784 15.3877H40.3511V3.62988H36.4741V1.11035H47.2554V3.62988H43.3784V15.3877ZM63.8116 8.22949C63.8116 9.32975 63.6749 10.3324 63.4015 11.2373C63.128 12.1357 62.7113 12.9105 62.1515 13.5615C61.5981 14.2126 60.8949 14.7139 60.0421 15.0654C59.1892 15.4105 58.1801 15.583 57.0147 15.583C55.8494 15.583 54.8403 15.4105 53.9874 15.0654C53.1345 14.7139 52.4281 14.2126 51.8682 13.5615C51.3149 12.9105 50.9015 12.1325 50.628 11.2275C50.3546 10.3226 50.2179 9.31673 50.2179 8.20996C50.2179 6.7321 50.4587 5.44629 50.9405 4.35254C51.4288 3.25228 52.1775 2.39941 53.1866 1.79395C54.1957 1.18848 55.4783 0.885742 57.0343 0.885742C58.5837 0.885742 59.8565 1.18848 60.8526 1.79395C61.8552 2.39941 62.5974 3.25228 63.0792 4.35254C63.5675 5.4528 63.8116 6.74512 63.8116 8.22949ZM53.3917 8.22949C53.3917 9.22559 53.5154 10.085 53.7628 10.8076C54.0167 11.5238 54.4106 12.0771 54.9444 12.4678C55.4783 12.8519 56.1684 13.0439 57.0147 13.0439C57.8741 13.0439 58.5707 12.8519 59.1046 12.4678C59.6384 12.0771 60.0258 11.5238 60.2667 10.8076C60.5141 10.085 60.6378 9.22559 60.6378 8.22949C60.6378 6.7321 60.3578 5.55371 59.7979 4.69434C59.238 3.83496 58.3168 3.40527 57.0343 3.40527C56.1814 3.40527 55.4848 3.60059 54.9444 3.99121C54.4106 4.37533 54.0167 4.92871 53.7628 5.65137C53.5154 6.36751 53.3917 7.22689 53.3917 8.22949ZM73.5905 7.37012H79.2546V14.7725C78.5059 15.0199 77.7279 15.2184 76.9206 15.3682C76.1133 15.5114 75.1986 15.583 74.1765 15.583C72.7572 15.583 71.5528 15.3031 70.5632 14.7432C69.5736 14.1833 68.8216 13.3564 68.3073 12.2627C67.793 11.1689 67.5358 9.82454 67.5358 8.22949C67.5358 6.7321 67.8223 5.43652 68.3952 4.34277C68.9746 3.24902 69.8177 2.40267 70.9245 1.80371C72.0378 1.20475 73.3952 0.905273 74.9968 0.905273C75.752 0.905273 76.4974 0.986654 77.2331 1.14941C77.9688 1.31217 78.6361 1.52376 79.235 1.78418L78.2292 4.20605C77.793 3.9847 77.2949 3.79915 76.735 3.64941C76.1752 3.49967 75.5892 3.4248 74.9772 3.4248C74.0983 3.4248 73.3334 3.62663 72.6823 4.03027C72.0378 4.43392 71.5365 5.00033 71.1784 5.72949C70.8268 6.45215 70.6511 7.30501 70.6511 8.28809C70.6511 9.21908 70.778 10.0459 71.0319 10.7686C71.2858 11.4847 71.6862 12.0479 72.2331 12.458C72.78 12.8617 73.4929 13.0635 74.3718 13.0635C74.8015 13.0635 75.1628 13.0439 75.4557 13.0049C75.7552 12.9593 76.0352 12.9137 76.2956 12.8682V9.88965H73.5905V7.37012ZM88.2229 1.11035C89.5185 1.11035 90.5862 1.2666 91.4261 1.5791C92.2724 1.8916 92.9007 2.36361 93.3108 2.99512C93.721 3.62663 93.9261 4.42415 93.9261 5.3877C93.9261 6.03874 93.8024 6.6084 93.555 7.09668C93.3076 7.58496 92.9821 7.99837 92.5784 8.33691C92.1748 8.67546 91.7386 8.95215 91.2698 9.16699L95.469 15.3877H92.1097L88.7015 9.90918H87.0901V15.3877H84.0628V1.11035H88.2229ZM88.0081 3.59082H87.0901V7.44824H88.0667C89.0693 7.44824 89.7854 7.28223 90.2151 6.9502C90.6513 6.61165 90.8694 6.11686 90.8694 5.46582C90.8694 4.78874 90.635 4.30697 90.1663 4.02051C89.7041 3.73405 88.9847 3.59082 88.0081 3.59082ZM107.406 15.3877L106.371 11.9893H101.166L100.131 15.3877H96.869L101.908 1.05176H105.609L110.668 15.3877H107.406ZM105.648 9.4502L104.613 6.12988C104.548 5.90853 104.46 5.62533 104.35 5.28027C104.245 4.92871 104.138 4.57389 104.027 4.21582C103.923 3.85124 103.838 3.53548 103.773 3.26855C103.708 3.53548 103.617 3.86751 103.5 4.26465C103.389 4.65527 103.282 5.02637 103.178 5.37793C103.073 5.72949 102.999 5.98014 102.953 6.12988L101.928 9.4502H105.648ZM119.919 15.3877L116.482 4.18652H116.394C116.407 4.45345 116.427 4.8571 116.453 5.39746C116.485 5.93132 116.514 6.50098 116.541 7.10645C116.567 7.71191 116.58 8.25879 116.58 8.74707V15.3877H113.874V1.11035H117.996L121.374 12.0283H121.433L125.017 1.11035H129.138V15.3877H126.316V8.62988C126.316 8.18066 126.322 7.66309 126.335 7.07715C126.355 6.49121 126.378 5.93457 126.404 5.40723C126.43 4.87337 126.449 4.47298 126.462 4.20605H126.374L122.693 15.3877H119.919Z"
          fill="#7B61FF"
        />
      </svg>
    );
  }
  return (
    <svg
      style={style}
      width="129"
      height="16"
      viewBox="0 0 129 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0421 15.0963H9.02451V8.93414H3.37021V15.0963H0.342865V0.818909H3.37021V6.41461H9.02451V0.818909H12.0421V15.0963ZM17.0554 15.0963V0.818909H20.0827V15.0963H17.0554ZM33.5042 11.1314C33.5042 11.9778 33.2991 12.7134 32.889 13.3384C32.4788 13.9634 31.8798 14.4452 31.0921 14.7838C30.3108 15.1223 29.3603 15.2916 28.2405 15.2916C27.7457 15.2916 27.2607 15.259 26.7854 15.1939C26.3167 15.1288 25.8642 15.0344 25.428 14.9107C24.9983 14.7805 24.5882 14.621 24.1976 14.4322V11.6197C24.8746 11.9192 25.5778 12.1894 26.3069 12.4302C27.0361 12.6711 27.7587 12.7916 28.4749 12.7916C28.9697 12.7916 29.3668 12.7265 29.6663 12.5963C29.9723 12.466 30.1936 12.287 30.3304 12.0591C30.4671 11.8313 30.5354 11.5709 30.5354 11.2779C30.5354 10.9198 30.415 10.6138 30.1741 10.3599C29.9332 10.106 29.6012 9.86839 29.178 9.64703C28.7614 9.42568 28.2893 9.18805 27.762 8.93414C27.43 8.77789 27.0686 8.58909 26.678 8.36774C26.2874 8.13987 25.9163 7.86318 25.5647 7.53766C25.2132 7.21214 24.9235 6.81826 24.6956 6.35602C24.4742 5.88727 24.3636 5.32737 24.3636 4.67633C24.3636 3.82347 24.5589 3.0943 24.9495 2.48883C25.3401 1.88336 25.8968 1.42112 26.6194 1.10211C27.3486 0.776591 28.208 0.613831 29.1976 0.613831C29.9397 0.613831 30.6461 0.701721 31.3167 0.877502C31.9938 1.04677 32.7002 1.29417 33.4358 1.61969L32.4593 3.97321C31.8017 3.70628 31.2125 3.5012 30.6917 3.35797C30.1709 3.20823 29.6403 3.13336 29.0999 3.13336C28.7223 3.13336 28.4 3.19521 28.1331 3.31891C27.8662 3.4361 27.6643 3.60537 27.5276 3.82672C27.3909 4.04156 27.3226 4.29222 27.3226 4.57867C27.3226 4.91722 27.4202 5.20367 27.6155 5.43805C27.8173 5.66591 28.1168 5.88727 28.514 6.10211C28.9176 6.31696 29.4189 6.56761 30.0179 6.85406C30.747 7.19912 31.3688 7.56045 31.8831 7.93805C32.4039 8.30914 32.8043 8.7486 33.0843 9.25641C33.3642 9.75771 33.5042 10.3827 33.5042 11.1314ZM42.9999 15.0963H39.9726V3.33844H36.0956V0.818909H46.8769V3.33844H42.9999V15.0963ZM63.4331 7.93805C63.4331 9.03831 63.2964 10.0409 63.0229 10.9459C62.7495 11.8443 62.3328 12.619 61.7729 13.2701C61.2196 13.9211 60.5164 14.4224 59.6636 14.774C58.8107 15.119 57.8016 15.2916 56.6362 15.2916C55.4709 15.2916 54.4617 15.119 53.6089 14.774C52.756 14.4224 52.0496 13.9211 51.4897 13.2701C50.9364 12.619 50.5229 11.841 50.2495 10.9361C49.9761 10.0311 49.8393 9.02529 49.8393 7.91852C49.8393 6.44065 50.0802 5.15485 50.562 4.0611C51.0503 2.96084 51.799 2.10797 52.8081 1.5025C53.8172 0.897034 55.0998 0.594299 56.6558 0.594299C58.2052 0.594299 59.478 0.897034 60.4741 1.5025C61.4767 2.10797 62.2189 2.96084 62.7007 4.0611C63.189 5.16136 63.4331 6.45367 63.4331 7.93805ZM53.0132 7.93805C53.0132 8.93414 53.1369 9.79352 53.3843 10.5162C53.6382 11.2323 54.0321 11.7857 54.5659 12.1763C55.0998 12.5604 55.7899 12.7525 56.6362 12.7525C57.4956 12.7525 58.1922 12.5604 58.7261 12.1763C59.2599 11.7857 59.6473 11.2323 59.8882 10.5162C60.1356 9.79352 60.2593 8.93414 60.2593 7.93805C60.2593 6.44065 59.9793 5.26227 59.4194 4.40289C58.8595 3.54352 57.9383 3.11383 56.6558 3.11383C55.8029 3.11383 55.1063 3.30914 54.5659 3.69977C54.0321 4.08388 53.6382 4.63727 53.3843 5.35992C53.1369 6.07607 53.0132 6.93545 53.0132 7.93805ZM73.212 7.07867H78.8761V14.481C78.1274 14.7284 77.3494 14.927 76.5421 15.0767C75.7348 15.22 74.8201 15.2916 73.7979 15.2916C72.3787 15.2916 71.1742 15.0116 70.1847 14.4517C69.1951 13.8918 68.4431 13.065 67.9288 11.9713C67.4145 10.8775 67.1573 9.5331 67.1573 7.93805C67.1573 6.44065 67.4438 5.14508 68.0167 4.05133C68.5961 2.95758 69.4392 2.11123 70.546 1.51227C71.6593 0.91331 73.0167 0.613831 74.6183 0.613831C75.3735 0.613831 76.1189 0.695211 76.8546 0.857971C77.5903 1.02073 78.2576 1.23232 78.8565 1.49274L77.8507 3.91461C77.4145 3.69326 76.9164 3.50771 76.3565 3.35797C75.7966 3.20823 75.2107 3.13336 74.5987 3.13336C73.7198 3.13336 72.9548 3.33518 72.3038 3.73883C71.6593 4.14248 71.158 4.70888 70.7999 5.43805C70.4483 6.16071 70.2726 7.01357 70.2726 7.99664C70.2726 8.92763 70.3995 9.75446 70.6534 10.4771C70.9073 11.1933 71.3077 11.7564 71.8546 12.1666C72.4015 12.5702 73.1143 12.772 73.9933 12.772C74.4229 12.772 74.7843 12.7525 75.0772 12.7134C75.3767 12.6679 75.6567 12.6223 75.9171 12.5767V9.59821H73.212V7.07867ZM87.8444 0.818909C89.14 0.818909 90.2077 0.975159 91.0476 1.28766C91.8939 1.60016 92.5222 2.07216 92.9323 2.70367C93.3425 3.33518 93.5476 4.13271 93.5476 5.09625C93.5476 5.74729 93.4239 6.31696 93.1765 6.80524C92.9291 7.29352 92.6035 7.70693 92.1999 8.04547C91.7963 8.38401 91.3601 8.66071 90.8913 8.87555L95.0905 15.0963H91.7311L88.3229 9.61774H86.7116V15.0963H83.6843V0.818909H87.8444ZM87.6296 3.29938H86.7116V7.1568H87.6882C88.6908 7.1568 89.4069 6.99078 89.8366 6.65875C90.2728 6.32021 90.4909 5.82542 90.4909 5.17438C90.4909 4.49729 90.2565 4.01552 89.7878 3.72906C89.3255 3.44261 88.6061 3.29938 87.6296 3.29938ZM107.028 15.0963L105.992 11.6978H100.787L99.7522 15.0963H96.4905L101.53 0.760315H105.231L110.289 15.0963H107.028ZM105.27 9.15875L104.235 5.83844C104.17 5.61709 104.082 5.33388 103.971 4.98883C103.867 4.63727 103.759 4.28245 103.649 3.92438C103.545 3.55979 103.46 3.24404 103.395 2.97711C103.33 3.24404 103.239 3.57607 103.121 3.97321C103.011 4.36383 102.903 4.73492 102.799 5.08649C102.695 5.43805 102.62 5.6887 102.575 5.83844L101.549 9.15875H105.27ZM119.541 15.0963L116.103 3.89508H116.016C116.029 4.16201 116.048 4.56565 116.074 5.10602C116.107 5.63987 116.136 6.20953 116.162 6.815C116.188 7.42047 116.201 7.96735 116.201 8.45563V15.0963H113.496V0.818909H117.617L120.996 11.7369H121.055L124.639 0.818909H128.76V15.0963H125.937V8.33844C125.937 7.88922 125.944 7.37164 125.957 6.78571C125.976 6.19977 125.999 5.64313 126.025 5.11578C126.051 4.58193 126.071 4.18154 126.084 3.91461H125.996L122.314 15.0963H119.541Z"
        fill="#99F5FF"
      />
    </svg>
  );
};

const HistoLabels = ({ style, theme }: SvgProps) => {
  if (theme === "light") {
    return (
      <svg
        style={style}
        width="102"
        height="86"
        viewBox="0 0 102 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_15_1657)">
          <path
            d="M13.8564 63.894H0.957397V85.8161H13.8564V63.894Z"
            fill="#7B61FF"
          />
          <path
            d="M31.3651 0.655029H18.4661V85.7442H31.3651V0.655029Z"
            fill="#7B61FF"
          />
          <path
            d="M48.8737 45.6234H35.9747V85.7307H48.8737V45.6234Z"
            fill="#7B61FF"
          />
          <path
            d="M66.3823 76.5482H53.4833V85.9286H66.3823V76.5482Z"
            fill="#7B61FF"
          />
          <path
            d="M83.891 63.894H70.9919V85.8836H83.891V63.894Z"
            fill="#7B61FF"
          />
          <path
            d="M101.4 36.2206H88.5006V85.7263H101.4V36.2206Z"
            fill="#7B61FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_1657">
            <rect
              width="100.259"
              height="85.2781"
              fill="white"
              transform="translate(0.957397 0.655029)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      style={style}
      width="101"
      height="86"
      viewBox="0 0 101 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13_627)">
        <path
          d="M13.3943 63.8243H0.465332V85.7972H13.3943V63.8243Z"
          fill="#99F5FF"
        />
        <path
          d="M30.9436 0.438477H18.0146V85.7251H30.9436V0.438477Z"
          fill="#99F5FF"
        />
        <path
          d="M48.4928 45.5112H35.5638V85.7116H48.4928V45.5112Z"
          fill="#99F5FF"
        />
        <path
          d="M66.0421 76.5077H53.1132V85.9099H66.0421V76.5077Z"
          fill="#99F5FF"
        />
        <path
          d="M83.5913 63.8243H70.6624V85.8648H83.5913V63.8243Z"
          fill="#99F5FF"
        />
        <path
          d="M101.141 36.0865H88.2117V85.7071H101.141V36.0865Z"
          fill="#99F5FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_13_627">
          <rect
            width="100.492"
            height="85.4759"
            fill="white"
            transform="translate(0.465332 0.438477)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Histogram = ({ style, theme }: SvgProps) => {
  return (
    <Fragment>
      <HistoTitle
        theme={theme}
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <HistoLabels
        theme={theme}
        style={{
          position: "absolute",
          bottom: "-4px",
          left: 79,
          height: 106,
          width: 109,
        }}
      />
    </Fragment>
  );
};

export default Histogram;