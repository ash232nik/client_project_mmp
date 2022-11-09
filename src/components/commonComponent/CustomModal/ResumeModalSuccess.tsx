import React,{useState} from 'react'
import { Button } from "@mui/material";
import CustomModal from './CustomModal';

function ResumeModalSuccess() {

    const [openSuccess, setOpenSuccess] = useState(false);

    const handleClickOpen = () => {
      setOpenSuccess(true);
    };
  
    const handleCloseSuccess = () => {
      setOpenSuccess(false);
    };
  return (
    <div>
      
      <Button variant="outlined" onClick={handleClickOpen}>Resume modal Success</Button>
        <CustomModal 

        openSuccess={openSuccess}
        handleClickOpen={handleClickOpen}
        handleCloseSuccess={handleCloseSuccess}

        btnName={"Resume Modal Pause Success"}
        modal_name={"ResumePause modal success"}
        successModalTitle={"AQB - Resume Now"}
        successModalMsg={"Your action of Resuming - AQB Surrogate has been successfully sent to the reviewer."}
        btn={" Close"}
        scheduledSuccessModalTitle={"Card For Card - Scheduled Pause"}
        scheduledbtn={" Close"}

      />

    </div>
  )
}

export default ResumeModalSuccess