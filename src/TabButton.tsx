import { MediaQuery, clsx, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    fontSize: "14px",
    lineHeight: 1.15,
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
  },
  active: {
    borderBottom: `1px solid ${theme.colors.accent[0]}`,
  },
}));

type TabButtonProps = {
  onClick: () => void;
  active: boolean;
  children?: React.ReactNode;
};

export const TabButton = ({ onClick, active, children }: TabButtonProps) => {
  const { classes } = useStyles();

  return (
    <MediaQuery smallerThan={700} styles={{ minHeight: 55 }}>
      <button
        onClick={onClick}
        className={clsx(classes.button, active && classes.active)}
        color="dark"
        data-cy="script-btn"
      >
        {children}
      </button>
    </MediaQuery>
  );
};
