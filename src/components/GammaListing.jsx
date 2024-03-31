const GammaListing = ({ size, mean, median, mode }) => {
    console.log("props", size, mean, median, mode)
    return (
        <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {mean?.map((item, i) => (
                        <th key={i}>{`Class ${i + 1}`}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gamma Mean</td>
                    {mean && mean.map((item, i) => (
                        <td key={i}>{item}</td>
                    ))}
                </tr>
                <tr>
                    <td>Gamma Median</td>
                    {median && median.map((item, i) => (
                        <td key={i}>{item}</td>
                    ))}

                </tr>
                <tr>
                    <td>Gamma Mode</td>
                    {mode && mode.map((item, i) => (
                        <td key={i}>{item}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    )

}

export default GammaListing