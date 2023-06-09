import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import "./Footer.css"


// Taken from Material UI 

function Copyright() {
    return (
        <>
        <div className='false'></div>
        <footer className='footer-container'> 
        <Typography variant="body2"  className='footer-text'>
            <Link style={{color: 'black'}}  target="_blank" href="https://fightzonelondon.co.uk/">
            Copyright © Fight Zone Mock up by Kohl Vernon
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
        <br></br>
        <div className='social-links'>
        <ul>
            <a href='https://www.instagram.com/fightzonelondon/?hl=en' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" className='icon' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href='https://www.google.co.uk/search?q=fightzone+locations&sxsrf=APwXEdcB54DE_xNa_NdIBFC8IFh1fTb64g%3A1682950786333&ei=gspPZLSzE8mXgQaYxKjoCg&oq=fightzone+loca&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUIIRCgATIFCCEQoAEyBQghEKABOgoIABBHENYEELADOgcIIxCKBRAnOggIABCKBRCRAjoFCAAQgAQ6CwguEK8BEMcBEIAESgQIQRgAUMkLWNAXYLkeaAFwAXgAgAGdAYgBlgSSAQMwLjSYAQCgAQHIAQjAAQE&sclient=gws-wiz-serp' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" className='icon' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            </a>
            {/* Takes user to my email */}
            <button  className='contact-button' onClick={() => window.location = 'mailto:kohlwebdev@gmail.com'}>Contact Me</button>
        </ul>
        </div>
        </footer>
        </>
    );
}

export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '20vh',
            }}
        >
            <CssBaseline />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h5" component="h2" gutterBottom>
                </Typography>
            </Container>
            <Box
                className='footer'
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                }}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}