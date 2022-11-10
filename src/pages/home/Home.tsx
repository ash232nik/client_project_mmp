import { Box } from "@mui/material";
import PauseModal from "../../components/commonComponent/CustomModal/PauseModal";
import PauseModalSucces from "../../components/commonComponent/CustomModal/PauseModalSuccess";
import RejectionModal from "../../components/commonComponent/CustomModal/RejectionModal";
import ResumeModal from "../../components/commonComponent/CustomModal/ResumeModal";
import ResumeModalSuccess from "../../components/commonComponent/CustomModal/ResumeModalSuccess";
import SchedulePause from "../../components/commonComponent/CustomModal/SchedulePause";
import SchedulePauseSuccess from "../../components/commonComponent/CustomModal/SchedulePauseSuccess";
import SurrogateSelection from "../../components/commonComponent/CustomModal/SurrogateSelection";

export default function Home() {
  return (
    <Box
      sx={{
        padding: "10px",
      }}
    >
      <PauseModal />
      <PauseModalSucces />
      <SchedulePause />
      <SchedulePauseSuccess />
      <ResumeModal />
      <ResumeModalSuccess />
      <SurrogateSelection />
      <RejectionModal />
    </Box>
  );
}
