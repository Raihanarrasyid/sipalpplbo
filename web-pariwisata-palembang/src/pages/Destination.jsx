import React, { Component } from "react";
import HeroDestination from "@/components/destination/HeroDestination";
import DestinationInformation from "@/components/destination/DestinationInformation";
import DestinationMasonry from "@/components/destination/DestinationMasonry";
import Travel from "@/components/home/Travel";
import Highlight from "@/components/destination/Highlight";

export default class Destination extends Component {
  render() {
    return (
      <div>
        <HeroDestination />
        <DestinationInformation />
        <DestinationMasonry />
        <Travel title="Inspiration for your next trip" />
        <Highlight />
      </div>
    );
  }
}
