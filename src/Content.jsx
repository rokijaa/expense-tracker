import { PieChart } from "@mui/x-charts"
import React, {useState} from "react"
import './content.scss'

export function Content() {
    return(
        <div className="cont__user">
            <h1 className="cont__networth"></h1>
            <PieChart
                series={[
                    {
                    data: [
                        { id: 0, value: 10},
                        { id: 1, value: 15},
                        { id: 2, value: 20},
                    ],
                    outerRadius: 100,
                    innerRadius: 80,
                    
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    )
}