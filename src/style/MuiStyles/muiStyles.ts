import { colors } from "../Color";

export const useStyles = {
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: colors.blue,
      height: 2,
    },
    "& .MuiTab-root.Mui-selected": {
      color: colors.black,
    },
  },
};
