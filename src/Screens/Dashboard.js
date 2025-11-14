import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BottomNav from '../Componets/BottomNav';
import Slider from '../Componets/Slider';
import {
  student,
  performance,
  task,
  attendance,
  leave,
  fees,
  students,
  computeruser,
  more,
} from '../Utility/ImageUrl';
import {Themes} from '../Appdata/colors';
export default function Dashboard() {
  return (
    <>
      <View style={styles.container}>
        <Slider />
        {/* Boxes */}
        <View style={styles.mainboxView}>
          <View style={styles.innerboxView}>
            <Image source={student} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Student</Text>
          </View>
          <View style={styles.innerboxView}>
            <Image source={performance} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Performance</Text>
          </View>
          <View style={styles.innerboxView}>
            <Image source={task} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Task</Text>
          </View>
          <View style={styles.innerboxView}>
            <Image source={attendance} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Attendance</Text>
          </View>
          <View style={styles.innerboxView}>
            <Image source={leave} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Leave</Text>
          </View>
          <View style={styles.innerboxView}>
            <Image source={fees} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Fees</Text>
          </View>
          <View style={styles.innerboxView}>
            <Image source={students} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Students</Text>
          </View>
          <View style={styles.innerboxView}>
            <Image source={computeruser} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Live Classes</Text>
          </View>
          <View style={styles.innerboxView}>
            <Image source={more} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>More</Text>
          </View>
        </View>
        {/* Boxes End */}
      </View>
      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainboxView: {
    width: '95%',
    minHeight: 400,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexWrap: 'wrap',
  },
  innerboxView: {
    width: '30%',
    height: 90,
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  iconStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  iconTxt: {
    color: Themes.AppTheme.black,
    fontSize: 14,
  },
});
