import { useEffect, useState } from "react"
import { getGamma, groupData, getMedian, getMode, getMean } from "../utils/helper"
import { wineData } from "../constants/wineData"
import Listing from "./Listing"

const GammaManagement = () => {
    const [gammaMean, setGammaMean] = useState()
    const [gammaMedian, setGammaMedian] = useState()
    const [gammaMode, setGammaMode] = useState()

    useEffect(() => {
        const groupedData = groupData(wineData, "gamma")
        const gammaData = getGamma(groupedData)
        if (gammaData && Object.values(gammaData)?.length > 0) {
            const mean = getMean(gammaData)
            const mode = getMode(gammaData)
            const median = getMedian(gammaData)
            console.log(mean, 'MEAN')
            setGammaMean(mean)
            setGammaMode(mode)
            setGammaMedian(median)
        }
    }, [])



    return (
        <>
            <h2>Gamma Table</h2>
            {gammaMean && Object.keys(gammaMean)?.length > 0 &&
                <Listing type={"GAMMA"} mean={Object.values(gammaMean)} mode={Object.values(gammaMode)} median={Object.values(gammaMedian)} />
            }
        </>
    )
}

export default GammaManagement