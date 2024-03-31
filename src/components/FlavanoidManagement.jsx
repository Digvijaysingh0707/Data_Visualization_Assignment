import { useEffect, useMemo, useState } from "react"
import { getMean, getMedian, getMode, groupData } from "../utils/helper"
import { wineData } from "../constants/wineData";
import Listing from "./FlavonoidsListing";

const FlavanoidManagement = () => {
    const [flavanoidMean, setFlavanoidMean] = useState()
    const [flavanoidMedian, setFlavanoidMedian] = useState()
    const [flavanoidMode, setFlavanoidMode] = useState()

    useEffect(() => {
        const groupedData = groupData(wineData, "flavanoids")
        if (groupedData && Object.values(groupedData)?.length > 0) {
            const flavMean = getMean(groupedData)
            const flavMode = getMode(groupedData)
            const flavMedian = getMedian(groupedData)
            setFlavanoidMean(flavMean)
            setFlavanoidMode(flavMode)
            setFlavanoidMedian(flavMedian)
        }
    }, [])

    return (
        (
            (flavanoidMean && Object.values(flavanoidMean)?.length > 0) &&
            <Listing mean={Object.values(flavanoidMean)} median={Object.values(flavanoidMedian)} mode={Object.values(flavanoidMode)} />
        )
    )

}

export default FlavanoidManagement