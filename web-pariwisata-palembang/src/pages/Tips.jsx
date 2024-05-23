import Facts from "@/components/tips/Facts";
import HeroTips from "@/components/tips/HeroTips";
import Summary from "@/components/tips/Summary";
import UsefulTips from "@/components/tips/UsefulTips";
import React, { Component } from "react";

export default class Tips extends Component {
  render() {
    return (
      <div>
        <HeroTips />
        <Summary />
        <Facts />
        <UsefulTips />
      </div>
    );
  }
}
