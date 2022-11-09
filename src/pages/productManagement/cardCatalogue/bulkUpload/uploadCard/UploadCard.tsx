import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DragDrop from "../../../../../components/commonComponent/dragDrop/DragDrop";
import PageLayout from "../../../../../components/layout/pageLayout/pageLayout";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { bulkUpload } from "../../../../../utils/Constants";
import { toggleFunctionType } from "../../../../../interface/Types";

const UploadCard = ({ toggle }: toggleFunctionType) => {
  const flexBox = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };
  return (
    <PageLayout>
      <Box sx={{ backgroundColor: "white" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {bulkUpload.UPLOAD_CARD_DETAILS}
        </Typography>
        <Typography sx={{ margin: "1% 0", fontWeight: "bold" }}>
          {bulkUpload.DOWNLOAD_SAMPLE_CSV_XLS}
        </Typography>
        <Button
          variant="text"
          startIcon={
            <FileDownloadOutlinedIcon
              color="primary"
              sx={{ fontSize: "1.5rem !important" }}
            />
          }
        >
          {bulkUpload.DOWNLOAD_SAMPLE}
        </Button>

        <DragDrop toggle={toggle} />
      </Box>
    </PageLayout>
  );
};

export default UploadCard;
