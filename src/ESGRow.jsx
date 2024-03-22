import React from "react";
import E1 from "./icon/E1.png";
import E2 from "./icon/E2.png";
import E3 from "./icon/E3.png";
import E4 from "./icon/E4.png";
import E5 from "./icon/E5.png";
import E6 from "./icon/E6.png";
import E7 from "./icon/E7.png";
import S1 from "./icon/S1.png";
import S2 from "./icon/S2.png";
import S3 from "./icon/S3.png";
import S4 from "./icon/S4.png";
import S5 from "./icon/S5.png";
import S6 from "./icon/S6.png";
import S7 from "./icon/S7.png";
import G1 from "./icon/G1.png";
import G2 from "./icon/G2.png";
import G3 from "./icon/G3.png";
import G4 from "./icon/G4.png";
import G5 from "./icon/G5.png";
import G6 from "./icon/G6.png";
import G7 from "./icon/G7.png";

export default function ESGRow({ sustainability, social, governance }) {
  const getIcon = (aspect, score) => {
    const badness = 100 - score * 100;
    var number = Math.floor(badness / 15);

    const Es = [E1, E2, E3, E4, E5, E6, E7];
    const Ss = [S1, S2, S3, S4, S5, S6, S7];
    const Gs = [G1, G2, G3, G4, G5, G6, G7];

    if (aspect === "E") return Es[number];
    if (aspect === "S") return Ss[number];
    if (aspect === "G") return Gs[number];
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src={getIcon("E", sustainability)}
            alt="Sustainability Icon"
            style={{
              width: "150px",
            }}
          />
        </div>
        <div>
          <img
            src={getIcon("S", social)}
            alt="Social Icon"
            style={{
              paddingInline: "105px",
              width: "150px",
            }}
          />
        </div>
        <div>
          <img
            src={getIcon("G", governance)}
            alt="Governance Icon"
            style={{
              width: "150px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
