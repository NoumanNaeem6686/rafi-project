// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import bgImage from "assets/images/investmentLog.jpg";
// import imag1 from 'assets/images/rafi/IMG-20231005-WA0006.jpg'
import Image2 from 'assets/images/rafi/diskbreak.jpg'

function BuiltByDevelopers() {
  return (<>
    <MKBox display="flex" alignItems="center" borderRadius="xl" my={2} py={2}>
      <Container>
        <Grid container sx={{ ml: { xs: 0, lg: 1 } }}>
          <Grid
            xs={0}
            lg={5}
            sx={{
              backgroundImage: `url(${Image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          ></Grid>
          <Grid item xs={12} lg={7} sx={{ paddingLeft: "40px" }}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h3" color="black" mb={2}>
                What is Disk Brake ?
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={11}>
              <MKTypography
                variant="body1"
                style={{ textAlign: "justify" }}
                color="black"
                opacity={0.8}
              >
                The brake disc is an important component of the brake system. If
                the brake system is to be able to decelerate the vehicle in
                safety and comfort at all times – bringing it to a complete stop
                if necessary . Your vehicle's safety in every rotation. Disc
                brakes are the heart of modern braking systems, providing
                reliable stopping power when you need it most. Our high-quality
                car disc brakes are engineered for precision and durability,
                delivering exceptional performance and peace of mind on the
                road. Trust in our expertise to keep you safely in control, mile
                after mile
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>

    
    </>
  );
}

export default BuiltByDevelopers;
