import React from "react"

import feature from "../images/camping.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="We make planning your next adventure simple and easy."
      description=""
    />
    <br></br>
    <br></br>

    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-evenly",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
    <div>
      <img src={feature} alt="a blank card floating over colorful graphics" />
    </div>
      <div>
        <h3>Event-Based Packing Lists</h3>
        <p style={{ color: COLORS.gray }}>
          Use custom packing lists created by event hosts and experts. Take the guessing out of planning your next adventure.
        </p>
      </div>

    </content>
  </div>
)

export default Content
