import {
  Box,
  createStyles,
  UnstyledButton,
  UnstyledButtonProps,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: 4,
    borderRadius: 4,
    transition: "150ms ease-in-out",
    "&:hover": {
      backgroundColor: theme.colors.accent4[1],
    },
  },
}));

type IconButtonProps = {
  onClick: () => void;
  icon: JSX.Element;
  children: React.ReactNode;
} & UnstyledButtonProps;

export const IconButton = ({
  onClick,
  icon,
  children,
  ...props
}: IconButtonProps) => {
  const { classes } = useStyles();

  return (
    <UnstyledButton p={4} h="100%" onClick={onClick} {...props}>
      <Box className={classes.container}>
        {icon} <Box ml={4}>{children}</Box>{" "}
      </Box>
    </UnstyledButton>
  );
};
