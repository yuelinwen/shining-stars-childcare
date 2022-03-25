import React from "react";
import "./styles.scss";
import { Button } from "@mui/material";
const InformationComponent = () => {
  return (
    <div className="info-container">
      <h1>Welcome to Shining Stars</h1>
      <p>
        Welcome! Shining Stars Child Care Centre is a day care facility serving
        Richmond Hill, Markham, Stouffville and Vaughan areas. We are located on
        Elgin Mills Road East between Leslie Street and Bayview Avenue in
        prestigious Richmond Hill, Ontario across from Richmond Green Community
        Centre. We are fully licensed by the Ministry of Education. We offer
        exciting, stimulating and educating programs for Toddlers, Preschoolers
        and Kindergarteners.
        <br />
        <br />
        Please feel free to call, email or book a tour at your convenience. We
        will be happy to give your family a tour of our facilities, meet our
        teachers and raise any questions that you may have regarding our
        programs, curriculum and registration. We look forward to meeting you
        all soon
      </p>

      <Button variant="contained" size="large" color="error">
        Read More
      </Button>
    </div>
  );
};

export default InformationComponent;
