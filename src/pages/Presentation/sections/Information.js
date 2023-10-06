// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../../assets/images/rafi/IMG-20231005-WA0002.jpg'
import img2 from '../../../assets/images/rafi/IMG-20231005-WA0003.jpg'
import img3 from '../../../assets/images/rafi/IMG-20231005-WA0005.jpg'
import img4 from '../../../assets/images/rafi/IMG-20231005-WA0007.jpg'
import img5 from '../../../assets/images/rafi/WhatsApp Image 2023-10-05 at 12.29.17_2b67b22b.jpg'
import img6 from '../../../assets/images/rafi/WhatsApp Image 2023-10-05 at 12.29.17_2b67b22b.jpg'
import img7 from '../../../assets/images/rafi/diiiii.jpg'
import cardImage from '../../../assets/images/rafi/card.jpg'
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/ItDevices.jpeg";
import bgBack from "assets/images/tech.jpg";
import React from "react";
function Information() {
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 1
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <MKBox component="section" py={6} my={6} id="services">
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>Take a look at some of the Products we offer at Al-Kuwait </>
                }
                // description="Technology partner for startups, businesses, entrepreneurs an innovator. Hire dedicated teams of software developers & eCommerce services providers."
              />
              <RotatingCardBack
                image={bgBack}
                title="Take a look at some of the Products we offer at Al-Kuwait"
                // description="We’re a team of passionate, dedicated people who have one overreaching goal – Your Success is Our Success."
                // action={{
                //   type: "internal",
                //   route: "/services",
                //   label: "Services",
                // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <Carousel
                 responsive={responsive}
                //  swipeable={false}
                //  draggable={false}
                //  infinite={true}
                //  autoPlay ={true}
                //  keyBoardControl={true}
                //  autoPlaySpeed={2000}
                //  centerMode ={true}
                //  containerClass="carousel-container"
                //  dotListClass="custom-dot-list-style"
                //  itemClass="carousel-item-padding-40-px"
                >

                  
                  {/* <img src={img2} alt='Image 1' style={{height : 400 , width : 800}}/>
                   <img src={img1} alt='Image 1' style={{height : 400 , width : 800}}/>
                   <img src={img7} alt='Image 1' style={{height : 400 , width : 800}}/> */}
                  
                  <div>
                   <img src={cardImage} alt='Image 1' style={{height : 350 , width : '100%'}}/>
                  </div>
                  {/* <div>
                   <img src={img3} alt='Image 1' style={{height : 400 , width : 800}}/>
                  </div>
                  <div>
                   <img src={img4} alt='Image 1' style={{height : 400 , width : 800}}/>
                  </div> */}

                </Carousel> 

                {/* <img src={cardImage} alt='card image' className="cardImage" style={{height : 400 , width : 650}}/> */}
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="switch_access_shortcut_add"
                  // title=""
                  description="Acquisition and disposition processes"
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="local_offer"
                  // title=""
                  description="Offers and contracts management"
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="account_balance_wallet"
                  // title=""
                  description="Transaction management"
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="follow_the_signs"
                  // title=""
                  description="Click2Call based lead follow-ups"
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="sms"
                  // title=""
                  description="SMS/RVM/DM & cold call campaign tracking"
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="notifications_active"
                  // title=""
                  description="Follow up reminders and nurture sequences"
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="trending_up"
                  // title=""
                  description="KPIs and lead tracking"
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
