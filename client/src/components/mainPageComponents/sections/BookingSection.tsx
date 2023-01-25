import '../../../styles/BookingSection.css'
import {Card, CardContent, CardActions, Typography, Button, TextField, CardHeader} from "@mui/material"

const BookingSection = () => {

    return(
        <div className='bookingContainer'>
            <div className='bookingTextContainer'>
                <div>
                    <Typography variant="h4" component="h2" className='bookNow' sx={{  fontWeight: 'bold', fontFamily: 'Monospace', letterSpacing: -2, color: 'black' }}>
                        BEST IN CITY
                    </Typography>
                    <Typography variant="h3" component="h2" className='bookNow' sx={{  fontWeight: 'bold', color: 'black' }}>
                        TRUSTED TAXI SERVICES IN VENTSPILS
                    </Typography>
                    <Typography variant="h6" component="h2" className='bookNow' sx={{  fontWeight: 'medium', letterSpacing: 0, color: 'black' }}>
                    Cras semper id nisl ut dapibus. Phasellus commodo ante sit amet quam malesuada, malesuada tempor augue hendrerit. Mauris hendrerit sit amet magna quis cursus. Duis nec arcu a urna sollicitudin semper. Nam malesuada quis lacus quis pretium. Nam iaculis, ex ut laoreet sodales, quam magna sodales nunc, in pretium justo sem ut turpis. Nulla ut imperdiet velit.
                    </Typography>
                    <Button variant="contained" sx={{ marginTop: 4, marginBottom: 4, backgroundColor: 'black',  "&:hover": { backgroundColor: '#212121'}}}>Read more</Button>
                </div>
            </div>
            <Card sx={{ minWidth: '450px', maxWidth: '35vw', width: "100%", backgroundColor: 'white', margin: '30px'}}>
                <CardHeader
                    sx={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', textAlign: 'center', paddingTop: '30px', paddingBottom: '0px'}}
                    title="BOOK A TAXI"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <div className='columnInput'>
                        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px' }} id="outlined-basic" label="Name" variant="outlined" color="warning" />
                        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px'}} id="outlined-basic" label="Phone" variant="outlined" color="warning" />
                    </div>
                    <div className='columnInput'>
                        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px' }} id="outlined-basic" label="When" variant="outlined" color="warning" />
                        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px'}} id="outlined-basic" label="Time" variant="outlined" color="warning" />
                    </div>
                    <div className='columnInput'>
                        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px' }} id="outlined-basic" label="Start" variant="outlined" color="warning" />
                        <TextField sx={{ backgroundColor: 'white', borderRadius: '5px'}} id="outlined-basic" label="Destination" variant="outlined" color="warning" />
                    </div>        
                    <div className='submitButton'>
                        <Button size="large" variant="contained" sx={{ width: '100%', marginBottom: 4, backgroundColor: 'black',  "&:hover": { backgroundColor: '#212121'}}}>Sumbit</Button>
                    </div>           
                </CardContent> 
            </Card>
        </div>
    )
}

export default BookingSection