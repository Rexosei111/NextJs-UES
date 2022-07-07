import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

const events = [
  {
    title: "Track Events",
    description:
      "All Track events (Sprints, Relays, Hurdles, Middle and Long Distance. etc) are not allowed on the field.",
  },
  {
    title: "Jump Events",
    description:
      "High Jump, Long Jump, Tripple Jump, Pole Vault are also prohibited",
  },
  {
    title: "Throw Events",
    description: "Javelin throw, discus throw, hammer throw, short put.",
  },
  {
    title: "Combined Events",
    description: "Heptathlon, Decathlon",
  },
];
export default function ProhibitedEvents() {
  return (
    <Container>
      <Typography variant="h4" my={2}>
        Prohibited Events
      </Typography>
      <Typography variant="body1" my={2}>
        These are the events that we do not permit; If your activities fall into
        any of these events, Know that your request will be declined.
      </Typography>
      <Grid container spacing={2} mb={2}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={12} md={4} lg={3} key={index}>
            <Card
              variant="outlined"
              raised={false}
              sx={{
                "&:hover": {
                  bgcolor: "#54b6ab",
                  ".myCardHeader": {
                    color: "#101817",
                  },
                  ".myCardBody": {
                    color: "#00201d",
                  },
                },
              }}
            >
              <CardHeader
                title={
                  <Typography className={"myCardHeader"}>
                    {event.title}
                  </Typography>
                }
              />
              <CardContent>
                <Typography className="myCardBody" variant="body2">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
