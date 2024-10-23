import { ChartContainer, PieChart } from "@mui/x-charts"
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import './content.scss'

interface DataItem {
  value: number;
  label: string;
}

const size = {
  width: 400,
  height: 200,
};
  
  
  export function Content() {

    return(
      <div className="cont__user">
            <div className="cont__networth">
                <h1>Networth</h1>
            </div>
            <div className="cont__chart"></div>
            <div className="cont__stats"></div>
        </div>
    )
}