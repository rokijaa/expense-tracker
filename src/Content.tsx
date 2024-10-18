import { ChartContainer, PieChart } from "@mui/x-charts"
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import './content.scss'

const data = [
    { value: 30, label: 'Investments' },
    { value: 30, label: 'Real Estate' },
    { value: 15, label: 'Car Business' },
    { value: 20, label: 'Plan D' },
  ];
  

const size = {
  width: 400,
  height: 200,
};
  
const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));



function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }
  
  
  export function Content() {
  
    const [inputValue, setInputValue] = useState<string>('');
  
    // State for the displayed text
    const [displayText, setDisplayText] = useState<string>('');
  
    // Update inputValue as the user types in the input field
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    // When the button is clicked, update the displayed text
    const handleButtonClick = () => {
      setDisplayText(inputValue);
    };

    return(
      <div className="cont__user">
            <div className="cont__networth">
                <h1>Networth</h1>
                <PieChart className="cont__pie" 
                    series={[{ data, innerRadius: 80 }]} {...size}>
                <PieCenterLabel>{displayText}</PieCenterLabel>
                </PieChart>
                <div>
                <input 
                  type="text" 
                  value={inputValue} 
                  onChange={handleInputChange} 
                  placeholder="Type something here" 
                />
                <button onClick={handleButtonClick}>Submit</button>
                </div>
            </div>
            <div className="cont__chart"></div>
            <div className="cont__stats"></div>
        </div>
    )
}