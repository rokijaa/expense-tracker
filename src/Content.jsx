import { ChartContainer, PieChart } from "@mui/x-charts"
import React, {useState} from "react"
import './content.scss'

export function Content() {
    return(
        <div className="cont__user">
            <h1 className="cont__networth">Networth</h1>
            <PieChart className="cont__pie"
                series={[
                    {
                    data: [
                        { id: 0, value: 188035, label: "Investments"},
                        { id: 1, value: 2000000, label: "House"},
                        { id: 2, value: 150000, label: "Business"},
                    ],
                    outerRadius: 100,
                    innerRadius: 90,
                    label: "siblby",
                    },
                ]}
                width={400}
                height={200}
            >
            <div>2,338,035</div>
            </PieChart>
        </div>
    )
}