import * as React from 'react';
import { AppBar, Link, Tabs, Tab, Icon, Button, Box, Paper, Toolbar, IconButton, Typography, Menu, Container, Grid } from '@mui/material';
import { FaMailBulk, FaPhone, FaDiscord, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <Paper sx={{ width: '100%', position: 'fixed', bottom: 0, bgcolor: 'rgb(44, 56, 126)' }} component="footer" square variant="outlined">
            <Box sx={{ mt: 2, mb: 1 }}>
                <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={3} container direction="column" display="flex" justify="center">
                        <Typography variant="h6" color="text.secondary" sx={{ margin: 'auto', verticalAlign: 'middle', display: 'inline-flex' }}>
                            <FaMailBulk aria-label="Email" fontSize={"large"} />
                            ajshaham@gmail
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container direction="column" display="flex" justify="center">
                        <Typography variant="h6" color="text.secondary" sx={{ margin: 'auto', verticalAlign: 'middle', display: 'inline-flex' }}>
                            <FaPhone aria-label="Phone" fontSize={"large"} />
                            (323) 422-0701
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container direction="column" display="flex" justify="center">
                        <Typography variant="h6" color="text.secondary" sx={{ margin: 'auto', verticalAlign: 'middle', display: 'inline-flex' }}>
                            <FaDiscord aria-label="Discord" fontSize={"large"} />
                            Nuja#1388
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container direction="column" display="flex" justify="center">
                        <Typography variant="h6" color="text.secondary" sx={{ margin: 'auto', verticalAlign: 'middle', display: 'inline-flex' }}>
                            <FaGithub aria-label="GitHub" fontSize={"large"} />
                            ajshaham1337
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            {/* <Box sx={{ flexGrow: 1, justifyContent: "center", display: "flex", my: 1 }}> */}
            <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center", mb: 2 }}>
                <Typography variant="caption" color="text.secondary">Alex Shaham &reg; {new Date().getFullYear()}</Typography>
            </Box>
        </Paper >
    );
}

export default Footer;
