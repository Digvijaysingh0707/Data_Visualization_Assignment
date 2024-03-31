import React, { useState } from 'react';
import { ALCOHOL_TYPE } from "../constants/constants";

const Listing = ({ type, mean, median, mode }) => {
    const [alchoholType] = useState(ALCOHOL_TYPE?.[type])

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        {mean && mean?.map((item, i) => (
                            <th key={i}>{`Class ${i + 1}`}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{`${alchoholType} Mean`}</td>
                        {mean && mean?.map((item, i) => (
                            <td key={i}>{item?.toFixed(3)}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>{`${alchoholType} Median`}</td>
                        {median && median?.map((item, i) => (
                            <td key={i}>{item?.toFixed(3)}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>{`${alchoholType} Mode`}</td>
                        {mode && mode?.map((item, i) => (
                            <td key={i}>{item?.toFixed(3)}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Listing;
