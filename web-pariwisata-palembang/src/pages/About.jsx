import HeroAbout from "@/components/about/HeroAbout";
import Todo from "@/components/about/Todo";
import Travel from "@/components/home/Travel";
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <HeroAbout />
        <Todo />
        <Travel title="Get inspired for your journey" />
      </div>
    );
  }
}
