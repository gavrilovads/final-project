import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./ProjectionsChart.css";

export default function ProjectionChart({ guestList }) {
  const uniqueGuests = guestList.filter((guest) => guest.code).length;

  const totalChildren = guestList.reduce((acc, guest) => {
    let numberOfChildren = parseInt(guest.numberOfChildren, 10);
    return isNaN(numberOfChildren) ? acc : acc + numberOfChildren;
  }, 0);

  const plusOneNamesCount = guestList.filter(
    (guest) => guest.plusOneName && guest.plusOneName.trim() !== ""
  ).length;

  console.log(uniqueGuests, totalChildren, plusOneNamesCount);
  return (
    <>
      <div className="projection-guests-chart">
        <div className="chart-tile cinzel-decorative-bold">
          Projected number of guests
        </div>
        <BarChart
          xAxis={[
            {
              id: "Projected Guests",
              data: ["Invitees", "Plus Ones", "Children"],
              scaleType: "band",
              categoryGapRatio: 0.6,
            },
          ]}
          series={[
            {
              data: [uniqueGuests, plusOneNamesCount, totalChildren],
              color: "#2f4b26",
            },
          ]}
          width={800}
          height={400}
        />
      </div>
    </>
  );
}
