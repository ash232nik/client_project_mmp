import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { dataList, tabList } from "../../../interface/Types";
import { useStyles } from "../../../style/MuiStyles/muiStyles";
import { colors } from "../../../style/Color";

export const TabBar = ({ data }: { data: dataList }) => {
  const [value, setValue] = useState("1");
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, val: string) => {
    setValue(val);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList
            aria-label="lab API tabs example"
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            sx={{
              backgroundColor: colors.lightGrey,
              padding: "25px 30px 0  30px",
            }}
          >
            {data.map((item: tabList, index: number) => {
              return (
                <Tab
                  label={<span className={classes.tabs}>{item.data}</span>}
                  value={item.id}
                ></Tab>
              );
            })}
          </TabList>
          {data.map((item: tabList, index: number) => {
            return (
              <TabPanel value={item.id} sx={{ padding: "20px 30px 0 30px" }}>
                {item.component}
              </TabPanel>
            );
          })}
        </Box>
      </TabContext>
    </Box>
  );
};
