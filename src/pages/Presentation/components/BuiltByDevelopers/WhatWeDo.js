// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import bgImage from "assets/images/image-3.jpg";
import diskPad from "assets/images/rafi/diskPads.jpg";
import brakeOil from 'assets/images/rafi/brakeoil.jpg'

function BuiltByDevelopers() {
  return (
    <>
      {/* ////1st card ..// */}
      <MKBox display="flex" alignItems="center" borderRadius="xl" my={2} py={2}>
        <Container>
          <Grid container sx={{ ml: { xs: 0, lg: 1 } }}>
            <Grid
              xs={0}
              lg={5}
              sx={{
                backgroundImage: `url(${brakeOil})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            ></Grid>
            <Grid item xs={12} lg={7} sx={{ paddingLeft: "40px" }}>
              <Grid item xs={12} lg={8}>
                <MKTypography variant="h3" color="black" mb={2}>
                  What is Brake Oil ?
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={11}>
                <MKTypography
                  variant="body1"
                  style={{ textAlign: "justify" }}
                  color="black"
                  opacity={0.8}
                >
                  Brake fluid, often referred to as car brake oil, is a vital
                  component in a vehicle's braking system. It is a specially
                  formulated hydraulic fluid designed to transmit the force
                  applied to the brake pedal from the driver to the brake
                  calipers or wheel cylinders. Brake fluid serves a crucial role
                  in maintaining the safety and effectiveness of the braking
                  system by ensuring that the brakes respond promptly and
                  consistently. Hydraulic Function: Brake fluid is
                  non-compressible and transmits hydraulic pressure from the
                  brake master cylinder to the brake components at each wheel,
                  such as calipers or wheel cylinders. This pressure is what
                  causes the brake pads or shoes to press against the brake
                  rotors or drums, generating friction and stopping the vehicle.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      {/* ////2nd card..// */}
      <MKBox display="flex" alignItems="center" borderRadius="xl" my={2} py={4}>
        <Container>
          <Grid container sx={{ ml: { xs: 0, lg: 1 } }}>
            <Grid item xs={12} lg={7}>
              <Grid item xs={12} lg={8}>
                <MKTypography variant="h3" color="black" mb={2}>
                  What is Disk Brake pads?
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={11}>
                <MKTypography
                  variant="body1"
                  style={{ textAlign: "justify" }}
                  color="black"
                  opacity={0.8}
                  mb={1}
                >
                  Car disc brake pads are essential components of a vehicle's
                  braking system. They are flat, friction-inducing components
                  that press against the spinning brake disc (rotor) when the
                  brake pedal is applied. This friction generates the necessary
                  force to slow down or stop the vehicle by converting kinetic
                  energy into heat energy. Brake pads are typically made of
                  composite materials, including friction material and a steel
                  backing plate, designed to withstand high temperatures and
                  provide consistent stopping power while minimizing wear on the
                  brake disc. Regular maintenance and replacement of brake pads
                  are crucial for safe and effective braking performance in
                  automobiles.
                </MKTypography>
              </Grid>
            </Grid>
            <Grid
              xs={0}
              lg={5}
              sx={{
                backgroundImage: `url(${diskPad})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            ></Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default BuiltByDevelopers;
