import React, { useState } from "react";
import "./cardCateloge.css";
// import useStyles from "./cardStyle";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import TypographyHead from "../../../../components/commonComponent/CustomText/Head";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import {
  MenuItem,
  TextField,
  Typography,
  Box,
  Tab,
  Stack,
  Button,
  Divider,
  InputLabel,
  FormControl,
  Select,
  SelectChangeEvent,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Menu,
} from "@mui/material";
// import Surrogate_icon from "./icons/surrogates_selection_icon.svg";
// import Pause_icon from "./icons/pause_card_icon.svg";
// import Edit_icon from "./icons/edit_scheduled_pause_icon.svg";
// import Resume_icon from "./icons/resume_card_icon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import TypographyInfo from "../../../../components/commonComponent/CustomText/Info";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Card Name", width: 130 },
  { field: "productID", headerName: "Product ID", width: 130 },
  { field: "businessID", headerName: "Business ID", width: 130 },
  { field: "cardMode", headerName: "Card Mode", width: 130 },
  { field: "cardCategory", headerName: "Card Category", width: 130 },
  { field: "cardStatus", headerName: "Card Status", width: 120 },
  { field: "more", headerName: "More", type: "number", width: 20 },
  //   {field: "fullName",headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,width: 160,
  //     valueGetter: (params: GridValueGetterParams) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
];

const rows = [
  {
    id: 1,
    productID: "Snow",
    firstName: "Jon",
    age: 35,
    businessID: 123456789,
    cardMode: "Business",
    cardCategory: "Basic",
    cardStatus: "Active",
  },
  {
    id: 2,
    productID: "Snow",
    firstName: "Jon",
    age: 35,
    businessID: 123456789,
    cardMode: "Business",
    cardCategory: "Basic",
    cardStatus: "Active",
  },
  {
    id: 3,
    productID: "Snow",
    firstName: "Jon",
    age: 35,
    businessID: 123456789,
    cardMode: "Business",
    cardCategory: "Basic",
    cardStatus: "Active",
  },
  {
    id: 4,
    productID: "Snow",
    firstName: "Jon",
    age: 35,
    businessID: 123456789,
    cardMode: "Business",
    cardCategory: "Basic",
    cardStatus: "Active",
  },
];

export default function LabTabs() {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");
  const [age, setAge] = useState("");
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCardMenu = Boolean(anchorEl);
  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const singleCardOpen = () => {
    navigate("/productManagement/cardCatalogue/singleupload");
  };

  const bulkCardOpen = () => {
    navigate("/productManagement/cardCatalogue/bulkupload");
  };

  //   const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleAdd = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const style = {
    position: "absolute",
    top: "20%",
    left: "75%",
    // transform: 'translate(-50%, -50%)',
    width: 250,
    height: 100,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 10,
    p: 2,
  };

  return (
    <Stack className="container">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginLeft: 3 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Card Catelogue" value="1" />
            <Tab label="History log" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "0px" }}>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
              padding: 3,
            }}
          >
            <Box>
              <Typography
                sx={{ display: "flex", justifyContent: "flex-start" }}
                variant="body1"
                color="textPrimary"
              >
                Card Catelogue
              </Typography>
              <Typography sx={{ margin: 0 }} color="textSecondary" paragraph>
                From here you can manage all your card's information
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                endIcon={<ExpandMoreIcon />}
                aria-controls={openCardMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openCardMenu ? "true" : undefined}
                onClick={handleCardMenuClick}
                id="basic-button"
              >
                + Add New Card{" "}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openCardMenu}
                onClose={handleCardMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={singleCardOpen}>Single card upload</MenuItem>
                <MenuItem onClick={bulkCardOpen}>Bulk card Upload</MenuItem>
              </Menu>
            </Box>
            {/* <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                  onClick={singleCardOpen}
                  sx={{padding:1}}
                >
                  Single card upload
                </Typography>
                <Typography sx={{padding:1}} onClick={bulkCardOpen} id="keep-mounted-modal-description" variant="h6">
                  Bulk card Upload
                </Typography>
              </Box>
            </Modal> */}
          </Box>

          <Box sx={{ backgroundColor: "white", padding: 3, marginTop: 3 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                backgroundColor: "white",
              }}
            >
              <TypographyHead title="Card List" />
              <InfoIcon />
              <TypographyInfo
                title="From here, you filter the card by its mode, status, category and
                surrogate"
              />
            </Box>
            <Divider />

            {/* <Box>
                <Typography>Card Mode</Typography>
                <Typography>Card Category</Typography>
                <Typography>Card Status</Typography>
              </Box> */}
            <Box
              sx={{
                minWidth: 500,
                marginTop: 2,
                display: "flex",
                gap: "3%",
                justifyContent: "space-between",
                backgroundColor: "white",
              }}
            >
              <FormControl sx={{ width: "200px" }}>
                <TypographyHead title="Card Mode" />
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  //   labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleAdd}
                  sx={{ height: "50px", textAlign: "left" }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "200px" }}>
                <TypographyHead title="Card Category" />
                <Select sx={{ height: "50px", textAlign: "left" }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "200px" }}>
                <TypographyHead title="Card Status" />

                <Select sx={{ height: "50px", textAlign: "left" }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "200px" }}>
                <TypographyHead title="Choose Surrogate" />

                <Select sx={{ height: "50px", textAlign: "left" }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                paddingTop: 3,
              }}
            >
              <Button sx={{ color: "black" }} variant="outlined">
                Reset
              </Button>
              <Button variant="contained">Search</Button>
            </Box>
            <Divider sx={{ padding: 1 }} />
          </Box>
          <Box>
            <Box
              sx={{
                padding: 3,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Button sx={{ variant: "outlined" }}>Resume Card</Button>
                <Button sx={{ variant: "outlined" }}>Pause Card</Button>
                <Button sx={{ variant: "outlined" }}>
                  Edit Scheduled Pause
                </Button>
                <Button
                //   startIcon={<Surrogate_icon />}
                //   sx={{ variant: "outlined" }}
                >
                  Surrogate Selection
                </Button>
              </Box>
              <Box>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  defaultValue="Search"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
            <Box
              sx={{
                height: 400,
                width: "100vw",
                padding: 3,
                backgroundColor: "#ffffff",
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value="2">History log</TabPanel>
      </TabContext>
    </Stack>
  );
}
