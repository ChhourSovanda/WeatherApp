import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { NAV_BACKGROUND_COLOR } from "../constants/colors";

//Props
interface props {
  // dt: number;
  // temp: string;
  // main: string; //this is weather
  dayData: string[];
  tempData: any;
}

//Screen height and Width
const { width } = Dimensions.get("window");

const DailyData: React.FC<props> = ({ dayData, tempData }) => {
  return (
    <View style={styles.main}>
      <LineChart
        data={{
          labels: dayData,
          datasets: [
            {
              data: tempData,
            },
          ],
        }}
        width={width - 40} // from react-native
        height={120}
        withInnerLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: NAV_BACKGROUND_COLOR,
          backgroundGradientFrom: NAV_BACKGROUND_COLOR,
          backgroundGradientTo: NAV_BACKGROUND_COLOR,
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
          style: {
            borderRadius: 25,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "1",
            // stroke: NAV_BACKGROUND_COLOR,
            stroke: "lightgreen",
          },
        }}
        bezier
        yLabelsOffset={10}
        xLabelsOffset={5}
        style={{
          borderRadius: 25,
          alignSelf: "center",
          paddingBottom: 15,
        }}
      />
    </View>
  );
};

{
  /* <Text style={styles.otherDataValueText}>{parseInt(temp)}<Text style={styles.unitText}> °C</Text></Text> */
}
// <Text style={styles.day}>{main}</Text>
// <Text style={styles.day}>{dayname}</Text>

export default DailyData;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: "auto",
  },
});
