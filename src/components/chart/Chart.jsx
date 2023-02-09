import React from "react"
import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {
        const dataPointsValue = props.dataPoints.map(data => data.value)
        const maxValue = Math.max(...dataPointsValue)

return (
    <div className="chart">
        {props.dataPoints.map(data => {
            return (
                <ChartBar
                 key={data.label}
                 value={data.value} 
                 label={data.label}
                 maxValue = {maxValue}
                 />
            )
        })}
    </div>
)
}

export default Chart