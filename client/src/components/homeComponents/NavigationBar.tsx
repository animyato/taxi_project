import { Button, Avatar } from "@mui/material"
import '../../styles/NavigationBar.css';

const NavigationBar = () => {

    return(
        <div className="navbar">
            <div>
                <Avatar 
                    alt="Rimarts" 
                    sx={{ width: 80, height: 80 }} 
                    variant="square" 
                    src="https://z-p3-scontent.frix8-1.fna.fbcdn.net/v/t39.30808-6/301579928_437264611762854_9102075977686075447_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MDHexQ4kk-AAX_9O-zC&_nc_ht=z-p3-scontent.frix8-1.fna&oh=00_AfCWS1IbisiOsn_tWtnAPMU3o0bStffxhYXj4Dn2Xu-Rmg&oe=63D61AE7" 
                />
            </div>
            <div className="navButtons">
                <Button variant="contained" className="Button">
                    Home
                </Button>                
                <Button variant="contained" className="Button">
                    About
                </Button>                
                <Button variant="contained" className="Button">
                    Contact
                </Button>
            </div>
        </div>
    )
}

export default NavigationBar