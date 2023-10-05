import { AppBar, Box, Container, Toolbar, Typography, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {

    const navigate = useNavigate();

    return (
        <Box sx={{flrexGroud: 1}}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' sx={{flexGrow: 1}}>
                            <Link to="/" style={{ textDecoration: "none", color: "#eee" }}>
                                Le Bernandin!
                            </Link>
                        </Typography>

                        <Button variant='contained' color='primary' onClick={() => navigate("/insert_menu")}>
                            Agregar Menu
                        </Button>
                        <Button variant='contained' color='primary' onClick={() => navigate("/login")}>
                            Login
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}