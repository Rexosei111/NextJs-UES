import {
  Box,
  Container,
  Step,
  StepButton,
  StepContent,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const steps = [
  "Fill the Booking Form",
  "Form Review",
  "Response from Sports Chairperson",
  "Payment",
];

const stepsContent = [
  "Fill and Sumbit the booking form on this page. Click on `Book Now` button to bring out the booking form. Form must be sumbitted atleast 3 days to the date you intend to use the pitch. Kindly make sure you provide either a vaild email address or phone number since that will be used for communication between you and the Sports chairperson.",
  "Your form will be reviewed by the sports chairperson to make sure it conforms to the guidlines and usage of the pitch. A response will be sent to you via email or sms and this will at most 3 days after form submission.",
  "The Chairperson's response will contain a link to make payment if your request to use the pitch has been accepted. if your request is declined, it will contain reasons for it. Please do well to reach out for clarity.",
  "You are entreated to make full payment in order to finalize the process, part payments are not allowed. After making full payment, a message will be sent via email or sms which will contain a unique ID, you are to present this ID on the day of usage of the pitch. Failure to present this ID means you will not be allowed to use the pitch.",
];
export default function BookingProcess() {
  const [activeStep, setActiveStep] = React.useState(0);

  const sm = useMediaQuery("(max-width: 600px)");

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  return (
    <Container>
      <Typography variant="h4" mb={2}>
        Securing the Pitch
      </Typography>
      <Typography variant="body1" my={2}>
        These are the steps ( in order ) to secure the pitch for your
        activities.
      </Typography>
      <Box
        sx={{
          width: "100%",
          my: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{ width: "100%" }}
          nonLinear
          alternativeLabel={sm ? false : true}
          orientation={sm ? "vertical" : "horizontal"}
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
              {sm && <StepContent>{stepsContent[activeStep]}</StepContent>}
            </Step>
          ))}
        </Stepper>
        {!sm && (
          <Typography
            my={3}
            maxWidth={600}
            variant="body1"
            textAlign={"center"}
          >
            {stepsContent[activeStep]}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
