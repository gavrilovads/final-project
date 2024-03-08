import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "./ProjectionsChart/ProjectionsChart.css";

export default function RSVPStatusChange({ guestList }) {
  const rsvpCounts = {
    yes: 0,
    no: 0,
    maybe: 0,
    "": 0, // For guests with no RSVP response
  };

  guestList.forEach((guest) => {
    switch (guest.rsvp) {
      case "Yes":
        rsvpCounts.yes++;
        break;
      case "No":
        rsvpCounts.no++;
        break;
      case "Maybe":
        rsvpCounts.maybe++;
        break;
      default:
        rsvpCounts[""]++;
        break;
    }
  });

  console.log("RSVP Counts:", rsvpCounts);

  return (
    <>
      <div className="projection-rsvp-chart">
        <div className="chart-tile cinzel-decorative-bold">
          Status of RSVP confirmations
        </div>
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: rsvpCounts.yes,
                  label: "Yes",
                  color: "#2f4b26",
                },
                { id: 1, value: rsvpCounts.no, label: "No", color: "#a07171" },
                {
                  id: 2,
                  value: rsvpCounts.maybe,
                  label: "Maybe",
                  color: "#eeb868",
                },
                {
                  id: 3,
                  value: rsvpCounts[""],
                  label: "Pending",
                  color: "#6d9f71",
                },
              ],
            },
          ]}
          width={800}
          height={400}
        />
      </div>
    </>
  );
}
