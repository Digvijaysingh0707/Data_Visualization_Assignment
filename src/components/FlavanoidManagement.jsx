import { useEffect, useMemo, useState } from "react"
import { groupData } from "../utils/helper"
import { wineData } from "../constants/wineData";
import Listing from "./FlavonoidsListing";

const FlavanoidManagement = () => {
    const [groupDataArray, setGroupDataArray] = useState({})

    const getMean = useMemo(() => {
        const flavanoids = groupDataArray;
        const meanValues = {};
        for (const alcohol in flavanoids) {
            const values = flavanoids[alcohol];
            const sum = values.reduce((acc, val) => acc + parseFloat(val), 0);
            const mean = (sum / values.length).toFixed(3);
            meanValues[alcohol] = mean;
        }
        return meanValues;
    }, [groupDataArray])

    const getMedian = useMemo(() => {
        const flavanoids = groupDataArray;
        const medianValues = {};
        for (const alcohol in flavanoids) {
            const values = flavanoids[alcohol];
            const sortedValues = values.sort((a, b) => a - b);
            const mid = Math.floor(sortedValues.length / 2);
            const median =
                sortedValues.length % 2 !== 0
                    ? sortedValues[mid]
                    : (sortedValues[mid - 1] + sortedValues[mid]) / 2;
            medianValues[alcohol] = median;
        }
        return medianValues

    }, [groupDataArray])

    const getMode = useMemo(() => {
        const flavanoids = groupDataArray;

        const modeValues = {};
        for (const alcohol in flavanoids) {
            const values = flavanoids[alcohol];
            const modeMap = {};
            let maxCount = 0;
            let mode;
            values.forEach(val => {
                modeMap[val] = (modeMap[val] || 0) + 1;
                if (modeMap[val] > maxCount) {
                    maxCount = modeMap[val];
                    mode = val;
                }
            });
            modeValues[alcohol] = mode;
        }
        return modeValues
    }, [groupDataArray])



    useEffect(() => {
        const groupedData = groupData(wineData, "flavanoids")
        console.log(groupedData, 'DATA in group')
        setGroupDataArray(groupedData)
    }, [])

    return (
        <Listing mean={Object.values(getMean)} median={Object.values(getMedian)} mode={Object.values(getMode)} />
    )

}

export default FlavanoidManagement