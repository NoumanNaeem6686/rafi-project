// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import bgImage from "assets/images/countersBackground.jpg";
import { Icon } from "@mui/material";
import AlbumIcon from '@mui/icons-material/Album';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import React from "react";

function Counters() {
  return (
    <MKBox
      component="section"
      py={6}
      style={{ backgroundImage: `url(${bgImage}`, borderRadius: "10px" }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            xl={4}
            style={{
              padding: "10px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                border: "1px solid white",
                backgroundColor: "#FCFCFE",
                borderRadius: "5px",
                paddingTop: "25px",
              }}
            >
              <Grid
                item
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#E2EDFD",
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <AlbumIcon
                  fontSize="large"
                  style={{
                    color: "#086ad8",
                    margin: "12px",
                  }}
                >
                  book
                </AlbumIcon>
              </Grid>
              <DefaultCounterCard
                // count=""
                // suffix="+"
                title="Disk Pads"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            xl={4}
            style={{
              padding: "10px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                border: "1px solid white",
                backgroundColor: "#FCFCFE",
                borderRadius: "5px",
                paddingTop: "25px",
              }}
            >
              <Grid
                item
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#E2EDFD",
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <SanitizerIcon
                  fontSize="large"
                  style={{
                    color: "#086ad8",
                    margin: "12px",
                  }}
                >
                  design_services
                </SanitizerIcon>
              </Grid>
              <DefaultCounterCard
                // count=""
                // suffix="+"
                title="Brake Oil"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            xl={4}
            style={{
              padding: "10px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                border: "1px solid white",
                backgroundColor: "#FCFCFE",
                borderRadius: "5px",
                paddingTop: "25px",
              }}
            >
              <Grid
                item
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#E2EDFD",
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <AirportShuttleIcon
                  fontSize="large"
                  style={{
                    color: "#086ad8",
                    margin: "12px",
                  }}
                >
                  support_agent
                </AirportShuttleIcon>
              </Grid>
              <DefaultCounterCard
                // count=""
                // suffix="+"
                title="Shoe Rotors"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
