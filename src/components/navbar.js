import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <AppBar position="sticky" sx={{ bgcolor: 'white' }}>
            <Container maxWidth="md">
                <Toolbar disableGutters>
                <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            fontFamily: 'roboto',
                            fontWeight: 400,
                            color: 'black',
                            textDecoration: 'none',
                        }}
                        component={Link} to={'/'}
                    >
                        pixabay
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
