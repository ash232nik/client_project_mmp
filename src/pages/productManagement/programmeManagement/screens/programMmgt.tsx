import { Button, IconButton, Stack, Typography } from "@mui/material";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { colors } from "../../../../style/Color";
import { programMmgt, tabBar } from "../../../../utils/Constants";
import { ListView } from "./listComponents/listView";
import CardList from "./listComponents/cardList";
import cardListIcon from "../../../../assets/images/cardListIcon.svg";
import ListIcon from "../../../../assets/images/list_layout.svg";
import PauseModal from "../../../../components/commonComponent/CustomModal/PauseModal";
export const ProgramManagementScreen = () => {
  const [listView, setListView] = useState(true);
  return (
    <Stack>
      <Stack
        sx={{
          borderBottom: `2px solid ${colors.lightGrey}`,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack>
            <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
              {tabBar.PROGRAMME_MANAGEMENT}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: 0.2,
                color: "#A3A3A5",
                paddingBottom: "20px",
              }}
            >
              {tabBar.TEMPORARILY_PAUSE}
            </Typography>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                padding: "0 10px",
              }}
              onClick={() => {
                setListView(false);
              }}
            >
              <IconButton color="warning" style={{ filter: "" }}>
                <img
                  src={cardListIcon}
                  alt="cardIcon"
                  style={{
                    filter:
                      listView === false
                        ? "invert(13%) sepia(100%) saturate(4636%) hue-rotate(241deg) brightness(93%) contrast(108%)"
                        : "",
                  }}
                />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                padding: "0 10px",
              }}
              onClick={() => {
                setListView(true);
              }}
            >
              <IconButton className={listView ? "active" : "inActive"}>
                <img
                  src={ListIcon}
                  alt="ListIcon"
                  style={{
                    filter:
                      listView === true
                        ? "invert(13%) sepia(100%) saturate(4636%) hue-rotate(241deg) brightness(93%) contrast(108%)"
                        : "",
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" spacing={2} sx={{ margin: "30px 0px" }}>
          <Button
            variant="contained"
            startIcon={<PlayCircleOutlineIcon sx={{ fontSize: 5 }} />}
            color="secondary"
            sx={{ padding: "3px 8px", fontSize: "12px" }}
          >
            {programMmgt.RESUME_SURROGATE}
          </Button>
          <Button
            variant="contained"
            startIcon={<PauseCircleFilledIcon sx={{ fontSize: 5 }} />}
            color="secondary"
            sx={{ padding: "3px 8px", fontSize: "12px" }}
          >
            {programMmgt.PAUSE_SURROGATE}
          </Button>
          <Button
            variant="contained"
            startIcon={<EditIcon sx={{ fontSize: 5 }} />}
            color="secondary"
            sx={{ padding: "3px 8px", fontSize: "12px" }}
          >
            {programMmgt.EDIT_SCHEDULE_PAUSE}
          </Button>
        </Stack>
      </Stack>

      <Stack>{listView ? <ListView /> : <CardList />}</Stack>
    </Stack>
  );
};
