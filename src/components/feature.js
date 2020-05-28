import React from "react"

import illustration1 from "../images/collab.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Feature = () => (
  <div style={{padding: "4rem 1rem", textAlign: "center" }}>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-evenly",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
    <div>
      <img src={illustration1} alt="a blank card floating over colorful graphics" />
    </div>
    <div>
      <h3>Shared Checklists</h3>
      <p style={{ color: COLORS.gray }}>
        Collaborate with your group in real-time. Coordinate and assign tasks so everyone knows exactly what they need to bring.
      </p>
    </div>
    </content>
  </div>
)

export default Feature
