//Write your missing code here
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <Typography variant="h6">Employee App</Typography>
      <Button variant="contained" color="secondary">
        <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
          Add Employee
        </Link>
      </Button>
    </Box>
  );
};

export default Navbar;


