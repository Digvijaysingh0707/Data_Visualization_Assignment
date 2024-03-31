import { useEffect, useState } from "react"
import { groupData } from "../utils/helper"
import { wineData } from "../constants/wineData"
import GammaListing from "./GammaListing"

const GammaManagement = () => {
    const [gammaMean, setGammaMean] = useState()
    const [gammaMedian, setGammaMedian] = useState()
    const [gammaMode, setGammaMode] = useState()

    const getGamma = (data) => {
        const gammas = {};
        for (const category in data) {
            gammas[category] = [];
            data[category].forEach(entry => {
                const gamma = (parseFloat(entry?.Ash) * entry?.Hue) / entry?.Magnesium;
                gammas[category].push(gamma);
            });
        }
        return gammas
    }

    const getMean = (data) => {
        console.log(data, 'DATA')
        const meanValues = {};
        for (const alcohol in data) {
            const values = data[alcohol];
            const sum = values?.reduce((acc, val) => acc + parseFloat(val), 0);
            const mean = (sum / values?.length)?.toFixed(3);
            meanValues[alcohol] = mean;
        }
        setGammaMean(meanValues)
    }

    const getMedian = (data) => {
        const medianValues = {};
        for (const alcohol in data) {
            const values = data[alcohol];
            const sortedValues = values.sort((a, b) => a - b);
            const mid = Math.floor(sortedValues.length / 2);
            const median =
                sortedValues.length % 2 !== 0
                    ? sortedValues[mid]
                    : (sortedValues[mid - 1] + sortedValues[mid]) / 2;
            medianValues[alcohol] = median;
        }
        setGammaMedian(medianValues)
    }

    const getMode = (data) => {
        const modeValues = {};
        for (const alcohol in data) {
            const values = data[alcohol];
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
        setGammaMode(modeValues)
    }

    useEffect(() => {
        const groupedData = groupData(wineData)
        const gammaData = getGamma(groupedData)
        console.log(gammaData, 'gammaData')
        if (Object.keys(gammaData)?.length > 0) {
            getMean(gammaData)
            getMedian(gammaData)
            getMode(gammaData)
        }
    }, [])

    console.log(gammaMean, gammaMode, 'GAMMA MODE')

    return (
        <>{gammaMean && Object.keys(gammaMean)?.length > 0 &&
            <GammaListing size={Object.keys(gammaMean)?.length} mean={Object.keys(gammaMean)} mode={Object.keys(gammaMode)} median={Object.keys(gammaMedian)} />
        }
        </>
    )
}

export default GammaManagement