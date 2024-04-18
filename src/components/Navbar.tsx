"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { showAddModal } from "@/store/slices/modalSlice";
import { MODAL_STATE } from "@/utils/constants";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddModal from "./modals/AddModal";

const Navbar = () => {
  const modal = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bookstore
            </Typography>
            <Button color="inherit" onClick={() => dispatch(showAddModal())}>
              Add Book
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {modal === MODAL_STATE.ADD && <AddModal />}
    </>
  );
};

export default Navbar;
