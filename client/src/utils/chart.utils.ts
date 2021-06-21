import { Candle } from "../types";
import { timestampToIsoDate } from "./date.utils";

export function convertToLightweightCandleData(candleData: Candle) {
  return candleData?.t?.map((time, index) => {
    const onlyIsoDate = timestampToIsoDate(time).split("T")[0];
    return {
      time: onlyIsoDate,
      open: candleData.o[index],
      high: candleData.h[index],
      low: candleData.l[index],
      close: candleData.c[index],
    };
  });
}
