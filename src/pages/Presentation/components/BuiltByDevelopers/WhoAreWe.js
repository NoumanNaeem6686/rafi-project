// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/whoAreWe.jpg";

function BuiltByDevelopers() {
  return (
    <MKBox
      id="about"
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container sx={{ ml: { xs: 0, lg: 6 } }}>
          <Grid item xs={12} lg={8}>
            <MKTypography variant="h3" color="white" mb={2}>
              Who are we?
            </MKTypography>
          </Grid>
          <br />
          <br />
          <Grid item xs={12} lg={11}>
            <MKTypography
              variant="body1"
              style={{ textAlign: "justify" }}
              color="white"
              opacity={0.8}
              mb={1}
            >
              MUHAMMAD RAFI is the director of AL-KUWAIT TRDING & CO. <br/>
              We specialize in providing high-quality, reliable, and performance-driven disc brake solutions for your automotive needs. Whether you're a car enthusiast, a professional mechanic, or a fleet manager, we offer a wide range of top-notch brake components to ensure your vehicles stop safely and efficiently. Our mission is to deliver superior braking performance, exceptional customer service, and competitive pricing. Trust us to keep you and your vehicles on the road with confidence
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
