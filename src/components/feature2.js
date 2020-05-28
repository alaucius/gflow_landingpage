import React from "react"

import illustration2 from "../images/shared.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Feature2 = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-evenly",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
    <div>
      <img src={illustration2} alt="a blank card floating over colorful graphics" />
    </div>
    <div>
      <h3>Remember Your Adventure</h3>
      <p style={{ color: COLORS.gray }}>
        Explore your shared Memory Box to see Photos and Videos from the trip!
      </p>
    </div>
    </content>
  </div>
)

export default Feature2
