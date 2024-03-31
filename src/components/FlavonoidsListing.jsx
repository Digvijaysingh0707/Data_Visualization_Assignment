const Listing = ({ mean, median, mode }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {mean && mean.map((item, i) => (
                        <th key={i}>{`Class ${i + 1}`}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Flavonoids Mean</td>
                    {mean && mean.map((item, i) => (
                        <td key={i}>{item}</td>
                    ))}
                </tr>
                <tr>
                    <td>Flavonoids Median</td>
                    {median && median.map((item, i) => (
                        <td key={i}>{item}</td>
                    ))}

                </tr>
                <tr>
                    <td>Flavonoids Mode</td>
                    {mode && mode.map((item, i) => (
                        <td key={i}>{item}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export default Listing