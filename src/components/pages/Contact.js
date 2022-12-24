import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Toolbar,
  TextField,
} from "@mui/material";

import resume from "../../images/resume.pdf";

function Contact() {
  // if i want to use my own email handler
  // const submitHandler = (e) => {
  //   console.log('Submit Called');
  //   // need to send the email's content...
  // }
  // onSubmit={submitHandler}

  return (
    <div className="Contact">
      <Toolbar sx={{ minHeight: "15px !important" }} />
      <Card style={{ maxWidth: 450, margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Me
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Reach out for any business inquiries or work opportunies!
          </Typography>
          <Box
            component="form"
            action="https://formsubmit.co/ajshaham@gmail.com"
            method="POST"
          >
            <Grid container spacing={1}>
              <input
                type="hidden"
                name="_subject"
                value="Portfolio -> New Contact!"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Your message has been received!"
              />
              <Grid xs={12} sm={6} item>
                <TextField
                  name="First Name"
                  label="First Name"
                  placeholder="Enter First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  name="Last Name"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  name="Email Address"
                  label="Email"
                  placeholder="Enter Email Address"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  name="Phone Number"
                  label="Phone"
                  placeholder="Enter Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  name="Message"
                  multiline
                  rows={4}
                  placeholder="Enter Your Message"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;

// {/* <TopBar /> */}
//       <Container>
//         <Toolbar sx={{minHeight: '15px !important'}}/>
//         <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
//           I am currently looking for work opportunities:
//           <Link href={resume} target="_blank" underline="none"> RESUME</Link>
//         </Typography>
//         <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
//           Feel free to reach out to me for any business or gaming inquiries you may have!
//         </Typography>
//         <Grid container>
//           {/* <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
//             <Grid container direction="column" alignItems="center">
//               <Button><Email sx={{ fontSize: '100px' }} /></Button>
//               <Typography /> Email: ajshaham@gmail.com
//             </Grid>
//           </Grid> */}
//           <ContactCard media="Email" info="ajshaham@gmail.com" />

//           {/* <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
//             <Grid container direction="column" alignItems="center">
//               <Button><GitHub sx={{ fontSize: '100px' }} /></Button>
//               <Typography /> GitHub: https://github.com/ajshaham1337
//             </Grid>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
//             <Grid container direction="column" alignItems="center">
//               <Button><Computer sx={{ fontSize: '100px' }} /></Button>
//               <Typography /> Discord: Nuja#1388
//             </Grid>
//           </Grid> */}
//         </Grid>
//       </Container>
