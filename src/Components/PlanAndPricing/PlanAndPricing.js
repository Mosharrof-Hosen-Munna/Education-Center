import React from "react";
import { Container, Row } from "react-bootstrap";
import PricingCard from "./PricingCard";

const PlanAndPricing = () => {
  return (
    <section>
      <Container>
        <h1 className="fw-light text-center text-success my-4">
          Plan And Pricing
        </h1>
        <Row xs={1} md={3} lg={3} className="g-4">
          <PricingCard
            title="Trial"
            price="$00"
            desc="Save $00 every year compared to the monthly
plan by paying yearly."
          ></PricingCard>
          <PricingCard
            title="Monthly"
            price="$160"
            desc="Save $78 every year compared to the monthly
plan by paying yearly."
          ></PricingCard>
          <PricingCard
            title="Yearly"
            price="$255"
            desc="Save $120 every year compared to the monthly
plan by paying yearly."
          ></PricingCard>
        </Row>
      </Container>
    </section>
  );
};

export default PlanAndPricing;
