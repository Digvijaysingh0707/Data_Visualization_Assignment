import { useEffect, useState } from "react"
import { getMean, getMedian, getMode, groupData } from "../utils/helper"
import { wineData } from "../constants/wineData";
import Listing from "./Listing";

const FlavonoidManagement = () => {
    const [flavonoidMean, setFlavonoidMean] = useState()
    const [flavonoidMedian, setFlavonoidMedian] = useState()
    const [flavonoidMode, setFlavonoidMode] = useState()

    useEffect(() => {
        const groupedData = groupData(wineData, "flavonoids")
        if (groupedData && Object.values(groupedData)?.length > 0) {
            const mean = getMean(groupedData)
            const mode = getMode(groupedData)
            const median = getMedian(groupedData)
            setFlavonoidMean(mean)
            setFlavonoidMode(mode)
            setFlavonoidMedian(median)
        }
    }, [])

    return (
        <>
            <h2>Flavonoid Table</h2>
            {flavonoidMean && Object.values(flavonoidMean)?.length > 0 && (
                <Listing
                    type={"FLAVONOIDS"}
                    mean={Object.values(flavonoidMean)}
                    median={Object.values(flavonoidMedian)}
                    mode={Object.values(flavonoidMode)}
                />
            )}
        </>
    );

}

export default FlavonoidManagement