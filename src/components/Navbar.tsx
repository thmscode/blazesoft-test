import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookstore
          </Typography>
          <Button color="inherit">Add Book</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
