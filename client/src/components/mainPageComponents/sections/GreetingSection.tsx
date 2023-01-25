import '../../../styles/GreetingSection.css'
import {Typography} from "@mui/material"

const GreetingSection = () => {

    return(
        <div className='greetingContainer'>
            <div className='greetingText'>
                <Typography variant="h3" component="h2" className='bookNow' sx={{ fontWeight: 'bold', color: 'white' }}>
                    BOOK A RIDE NOW
                </Typography>
                <Typography variant="h1" component="h2" className='bookNow' sx={{ fontWeight: 'bold', color: 'rgb(255, 174, 0)' }}>
                    +371 25956136
                </Typography>
                <Typography variant="h5" component="h2" className='bookNow' sx={{  fontWeight: 'medium', fontFamily: 'Monospace', letterSpacing: 10, color: 'white' }}>
                    DRIVE IN A GREAT COMPANY!
                </Typography>
            </div>
        </div>
    )
}

export default GreetingSection