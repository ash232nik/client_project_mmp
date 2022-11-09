import { Button } from "@mui/material";
import React, { useState } from "react";
import CustomModal from "./CustomModal";



function PauseModalSucces() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Pause modal Success
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleClickOpen={handleClickOpen}
        handleCloseSuccess={handleCloseSuccess}
        modal_name={"Pause modal success"}
        successModalTitle={"Card For Card - Pause"}
        successModalMsg={
          " Your action of pausing - Card For Card Surrogate has been successully sent to the reviewer"
        }
        btn={" Close"}
        scheduledSuccessModalTitle={"Card For Card - Scheduled Pause"}
        scheduledSuccessModalMsg={
          " Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer"
        }
        scheduledbtn={" Close"}
        resumeSuccessModalTitle={"AQB - Resume Now"}
      />
    </div>
  );
}

export default PauseModalSucces;
