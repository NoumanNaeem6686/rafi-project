// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
// Presentation page components
import WhoAreWe from "pages/Presentation/components/BuiltByDevelopers/WhoAreWe";
import WhatWeDo from "pages/Presentation/components/BuiltByDevelopers/WhatWeDo";
import RealEstateInvesting from "pages/Presentation/components/BuiltByDevelopers/RealEstateInvesting";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/main-land-company-formation.jpg";
import LocationsCards from "pages/LandingPages/ContactUs/LocationCards";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        id="home"
        minHeight="71vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          backgroundSize: "100% 71vh",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={12}
            justifyContent="center"
            mx="auto"
          >
            <MKTypography
              variant="h2"
              color="white"
              textAlign="center"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {/* Your Heading here */}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 0, lg: 0, xl: 12 }}
              mt={1}
            >
              Welcome to <span style={{fontSize :'30px'}}>AL-KUWAIT & CO Trading Company!</span> We specialize in providing high-quality, reliable, and performance-driven disc brake solutions for your automotive needs. Whether you're a car enthusiast, a professional mechanic, or a fleet manager, we offer a wide range of top-notch brake components to ensure your vehicles stop safely and efficiently. Our mission is to deliver superior braking performance, exceptional customer service, and competitive pricing. Trust us to keep you and your vehicles on the road with confidence
              <br />
              
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Counters />
        {/* <Pages /> */}
        <Container sx={{ mt: 6 }}>
          <WhoAreWe />
        </Container>
        <Container sx={{ mt: 1 }}>
          <WhatWeDo />
        </Container>
        <Container sx={{ mt: 1 }}>
          <RealEstateInvesting />
        </Container>
        <LocationsCards />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
