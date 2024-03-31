import { ALCOHOL_TYPE } from "../constants/constants";

const Listing = ({ type, mean, median, mode }) => {
    return (
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
                    <td>{ALCOHOL_TYPE?.[type]} Mean</td>
                    {mean && mean?.map((item, i) => (
                        <td key={i}>{item?.toFixed(3)}</td>
                    ))}
                </tr>
                <tr>
                    <td>{ALCOHOL_TYPE?.[type]} Median</td>
                    {median && median?.map((item, i) => (
                        <td key={i}>{item?.toFixed(3)}</td>
                    ))}

                </tr>
                <tr>
                    <td>{ALCOHOL_TYPE?.[type]} Mode</td>
                    {mode && mode?.map((item, i) => (
                        <td key={i}>{item?.toFixed(3)}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export default Listing