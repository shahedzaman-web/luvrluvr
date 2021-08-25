import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const gs = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  bgWhite: {
    backgroundColor: "white",
  },
  bgGray: {
    backgroundColor: "gray",
  },
  borderRounded: {
    borderRadius: 50,
  },
  border: {
    borderWidth: 1,
  },
  border2: {
    borderWidth: 2,
  },
  border4: {
    borderWidth: 4,
  },
  borderB2: {
    borderBottomWidth: 2,
  },
  borderB4: {
    borderBottomWidth: 4,
  },
  borderGray: {
    borderColor: "gray",
  },
  borderB: {
    borderBottomWidth: 1,
  },
  borderT: {
    borderTopWidth: 1,
  },
  borderL: {
    borderLeftWidth: 1,
  },
  borderR: {
    borderRightWidth: 1,
  },
  borderRadius50: {
    borderRadius: 200,
  },
  shadow: {
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  wP100: {
    width: "100%",
  },
  wP80: {
    width: "80%",
  },
  wP60: {
    width: "60%",
  },
  wP40: {
    width: "40%",
  },
  wP20: {
    width: "20%",
  },
  wP25: {
    width: "25%",
  },
  wP50: {
    width: "50%",
  },
  wP75: {
    width: "75%",
  },
  w2: {
    width: 2,
  },
  w4: {
    width: 4,
  },
  w8: {
    width: 8,
  },
  w10: {
    width: 10,
  },
  w12: {
    width: 12,
  },
  w16: {
    width: 16,
  },
  w20: {
    width: 20,
  },
  w24: {
    width: 24,
  },
  w28: {
    width: 28,
  },
  w32: {
    width: 32,
  },
  w36: {
    width: 36,
  },
  w40: {
    width: 40,
  },
  w44: {
    width: 44,
  },
  w48: {
    width: 48,
  },
  w52: {
    width: 52,
  },
  w56: {
    width: 56,
  },
  w60: {
    width: 60,
  },
  w64: {
    width: 64,
  },
  w68: {
    width: 68,
  },
  w72: {
    width: 72,
  },
  w76: {
    width: 76,
  },
  w80: {
    width: 80,
  },
  w84: {
    width: 84,
  },
  w88: {
    width: 88,
  },
  w92: {
    width: 92,
  },
  w96: {
    width: 96,
  },
  w100: {
    width: 100,
  },
  hP100: {
    height: "100%",
  },
  hP80: {
    height: "80%",
  },
  hP60: {
    height: "60%",
  },
  hP40: {
    height: "40%",
  },
  hP20: {
    height: "20%",
  },
  hP25: {
    height: "25%",
  },
  hP50: {
    height: "50%",
  },
  hP75: {
    height: "75%",
  },
  h2: {
    height: 2,
  },
  h4: {
    height: 4,
  },
  h8: {
    height: 8,
  },
  h10: {
    height: 10,
  },
  h12: {
    height: 12,
  },
  h16: {
    height: 16,
  },
  h20: {
    height: 20,
  },
  h24: {
    height: 24,
  },
  h28: {
    height: 28,
  },
  h32: {
    height: 32,
  },
  h36: {
    height: 36,
  },
  h40: {
    height: 40,
  },
  h44: {
    height: 44,
  },
  h48: {
    height: 48,
  },
  h52: {
    height: 52,
  },
  h56: {
    height: 56,
  },
  h60: {
    height: 60,
  },
  h64: {
    height: 64,
  },
  h68: {
    height: 68,
  },
  h72: {
    height: 72,
  },
  h76: {
    height: 76,
  },
  h80: {
    height: 80,
  },
  h84: {
    height: 84,
  },
  h88: {
    height: 88,
  },
  h92: {
    height: 92,
  },
  h96: {
    height: 96,
  },
  h100: {
    height: 100,
  },
  container: {
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 10,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alignCenter: {
    alignItems: "center",
  },spaceBetween:{
    justifyContent:"space-between"
  },spaceAround:{
    justifyContent:"space-around"
  },justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  fontDefault: {
    fontSize: 20,
  },
  textWhite: {
    color: "white",
  },
  bold: {
    fontWeight: "bold",
  },textNormal:{
    fontWeight: "normal",
  },
  italic: {
    fontStyle: "italic",
  },
  fontNormal: {
    fontSize: 16,
  },
  fontL: {
    fontSize: 24,
  },
  fontXL: {
    fontSize: 30,
  },
  fontXXL: {
    fontSize: 40,
  },
  p12: {
    padding: 12,
  },
  p16: {
    padding: 16,
  },
  p20: {
    padding: 20,
  },
  p24: {
    padding: 24,
  },
  p28: {
    padding: 28,
  },
  p32: {
    padding: 32,
  },
  p36: {
    padding: 36,
  },
  p40: {
    padding: 40,
  },
  p44: {
    padding: 44,
  },
  p48: {
    padding: 48,
  },
  p52: {
    padding: 52,
  },
  p56: {
    padding: 56,
  },
  p60: {
    padding: 60,
  },
  p64: {
    padding: 64,
  },
  p68: {
    padding: 68,
  },
  p72: {
    padding: 72,
  },
  p76: {
    padding: 76,
  },
  p80: {
    padding: 80,
  },
  p84: {
    padding: 84,
  },
  p88: {
    padding: 88,
  },
  p92: {
    padding: 92,
  },
  p96: {
    padding: 96,
  },
  pb12: {
    paddingBottom: 12,
  },
  pb16: {
    paddingBottom: 16,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb24: {
    paddingBottom: 24,
  },
  pb28: {
    paddingBottom: 28,
  },
  pb32: {
    paddingBottom: 32,
  },
  pb36: {
    paddingBottom: 36,
  },
  pb40: {
    paddingBottom: 40,
  },
  pb44: {
    paddingBottom: 44,
  },
  pb48: {
    paddingBottom: 48,
  },
  pb52: {
    paddingBottom: 52,
  },
  pb56: {
    paddingBottom: 56,
  },
  pb60: {
    paddingBottom: 60,
  },
  pb64: {
    paddingBottom: 64,
  },
  pb68: {
    paddingBottom: 68,
  },
  pb72: {
    paddingBottom: 72,
  },
  pb76: {
    paddingBottom: 76,
  },
  pb80: {
    paddingBottom: 80,
  },
  pb84: {
    paddingBottom: 84,
  },
  pb88: {
    paddingBottom: 88,
  },
  pb92: {
    paddingBottom: 92,
  },
  pb96: {
    paddingBottom: 96,
  },
  pl12: {
    paddingLeft: 12,
  },
  pl16: {
    paddingLeft: 16,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl24: {
    paddingLeft: 24,
  },
  pl28: {
    paddingLeft: 28,
  },
  pl32: {
    paddingLeft: 32,
  },
  pl36: {
    paddingLeft: 36,
  },
  pl40: {
    paddingLeft: 40,
  },
  pl44: {
    paddingLeft: 44,
  },
  pl48: {
    paddingLeft: 48,
  },
  pl52: {
    paddingLeft: 52,
  },
  pl56: {
    paddingLeft: 56,
  },
  pl60: {
    paddingLeft: 60,
  },
  pl64: {
    paddingLeft: 64,
  },
  pl68: {
    paddingLeft: 68,
  },
  pl72: {
    paddingLeft: 72,
  },
  pl76: {
    paddingLeft: 76,
  },
  pl80: {
    paddingLeft: 80,
  },
  pl84: {
    paddingLeft: 84,
  },
  pl88: {
    paddingLeft: 88,
  },
  pl92: {
    paddingLeft: 92,
  },
  pl96: {
    paddingLeft: 96,
  },
  pr12: {
    paddingRight: 12,
  },
  pr16: {
    paddingRight: 16,
  },
  pr20: {
    paddingRight: 20,
  },
  pr24: {
    paddingRight: 24,
  },
  pr28: {
    paddingRight: 28,
  },
  pr32: {
    paddingRight: 32,
  },
  pr36: {
    paddingRight: 36,
  },
  pr40: {
    paddingRight: 40,
  },
  pr44: {
    paddingRight: 44,
  },
  pr48: {
    paddingRight: 48,
  },
  pr52: {
    paddingRight: 52,
  },
  pr56: {
    paddingRight: 56,
  },
  pr60: {
    paddingRight: 60,
  },
  pr64: {
    paddingRight: 64,
  },
  pr68: {
    paddingRight: 68,
  },
  pr72: {
    paddingRight: 72,
  },
  pr76: {
    paddingRight: 76,
  },
  pr80: {
    paddingRight: 80,
  },
  pr84: {
    paddingRight: 84,
  },
  pr88: {
    paddingRight: 88,
  },
  pr92: {
    paddingRight: 92,
  },
  pr96: {
    paddingRight: 96,
  },
  pt12: {
    paddingTop: 12,
  },
  pt16: {
    paddingTop: 16,
  },
  pt20: {
    paddingTop: 20,
  },
  pt24: {
    paddingTop: 24,
  },
  pt28: {
    paddingTop: 28,
  },
  pt32: {
    paddingTop: 32,
  },
  pt36: {
    paddingTop: 36,
  },
  pt40: {
    paddingTop: 40,
  },
  pt44: {
    paddingTop: 44,
  },
  pt48: {
    paddingTop: 48,
  },
  pt52: {
    paddingTop: 52,
  },
  pt56: {
    paddingTop: 56,
  },
  pt60: {
    paddingTop: 60,
  },
  pt64: {
    paddingTop: 64,
  },
  pt68: {
    paddingTop: 68,
  },
  pt72: {
    paddingTop: 72,
  },
  pt76: {
    paddingTop: 76,
  },
  pt80: {
    paddingTop: 80,
  },
  pt84: {
    paddingTop: 84,
  },
  pt88: {
    paddingTop: 88,
  },
  pt92: {
    paddingTop: 92,
  },
  pt96: {
    paddingTop: 96,
  },
  px12: {
    paddingHorizontal: 12,
  },
  px16: {
    paddingHorizontal: 16,
  },
  px20: {
    paddingHorizontal: 20,
  },
  px24: {
    paddingHorizontal: 24,
  },
  px28: {
    paddingHorizontal: 28,
  },
  px32: {
    paddingHorizontal: 32,
  },
  px36: {
    paddingHorizontal: 36,
  },
  px40: {
    paddingHorizontal: 40,
  },
  px44: {
    paddingHorizontal: 44,
  },
  px48: {
    paddingHorizontal: 48,
  },
  px52: {
    paddingHorizontal: 52,
  },
  px56: {
    paddingHorizontal: 56,
  },
  px60: {
    paddingHorizontal: 60,
  },
  px64: {
    paddingHorizontal: 64,
  },
  px68: {
    paddingHorizontal: 68,
  },
  px72: {
    paddingHorizontal: 72,
  },
  px76: {
    paddingHorizontal: 76,
  },
  px80: {
    paddingHorizontal: 80,
  },
  px84: {
    paddingHorizontal: 84,
  },
  px88: {
    paddingHorizontal: 88,
  },
  px92: {
    paddingHorizontal: 92,
  },
  px96: {
    paddingHorizontal: 96,
  },
  py12: {
    paddingVertical: 12,
  },
  py16: {
    paddingVertical: 16,
  },
  py20: {
    paddingVertical: 20,
  },
  py24: {
    paddingVertical: 24,
  },
  py28: {
    paddingVertical: 28,
  },
  py32: {
    paddingVertical: 32,
  },
  py36: {
    paddingVertical: 36,
  },
  py40: {
    paddingVertical: 40,
  },
  py44: {
    paddingVertical: 44,
  },
  py48: {
    paddingVertical: 48,
  },
  py52: {
    paddingVertical: 52,
  },
  py56: {
    paddingVertical: 56,
  },
  py60: {
    paddingVertical: 60,
  },
  py64: {
    paddingVertical: 64,
  },
  py68: {
    paddingVertical: 68,
  },
  py72: {
    paddingVertical: 72,
  },
  py76: {
    paddingVertical: 76,
  },
  py80: {
    paddingVertical: 80,
  },
  py84: {
    paddingVertical: 84,
  },
  py88: {
    paddingVertical: 88,
  },
  py92: {
    paddingVertical: 92,
  },
  py96: {
    paddingVertical: 96,
  },
  mt12: {
    marginTop: 12,
  },
  mt16: {
    marginTop: 16,
  },
  mt20: {
    marginTop: 20,
  },
  mt24: {
    marginTop: 24,
  },
  mt28: {
    marginTop: 28,
  },
  mt32: {
    marginTop: 32,
  },
  mt36: {
    marginTop: 36,
  },
  mt40: {
    marginTop: 40,
  },
  mt44: {
    marginTop: 44,
  },
  mt48: {
    marginTop: 48,
  },
  mt52: {
    marginTop: 52,
  },
  mt56: {
    marginTop: 56,
  },
  mt60: {
    marginTop: 60,
  },
  mt64: {
    marginTop: 64,
  },
  mt68: {
    marginTop: 68,
  },
  mt72: {
    marginTop: 72,
  },
  mt76: {
    marginTop: 76,
  },
  mt80: {
    marginTop: 80,
  },
  mt84: {
    marginTop: 84,
  },
  mt88: {
    marginTop: 88,
  },
  mt92: {
    marginTop: 92,
  },
  mt96: {
    marginTop: 96,
  },
  mb12: {
    marginBottom: 12,
  },
  mb16: {
    marginBottom: 16,
  },
  mb20: {
    marginBottom: 20,
  },
  mb24: {
    marginBottom: 24,
  },
  mb28: {
    marginBottom: 28,
  },
  mb32: {
    marginBottom: 32,
  },
  mb36: {
    marginBottom: 36,
  },
  mb40: {
    marginBottom: 40,
  },
  mb44: {
    marginBottom: 44,
  },
  mb48: {
    marginBottom: 48,
  },
  mb52: {
    marginBottom: 52,
  },
  mb56: {
    marginBottom: 56,
  },
  mb60: {
    marginBottom: 60,
  },
  mb64: {
    marginBottom: 64,
  },
  mb68: {
    marginBottom: 68,
  },
  mb72: {
    marginBottom: 72,
  },
  mb76: {
    marginBottom: 76,
  },
  mb80: {
    marginBottom: 80,
  },
  mb84: {
    marginBottom: 84,
  },
  mb88: {
    marginBottom: 88,
  },
  mb92: {
    marginBottom: 92,
  },
  mb96: {
    marginBottom: 96,
  },
  ml12: {
    marginLeft: 12,
  },
  ml16: {
    marginLeft: 16,
  },
  ml20: {
    marginLeft: 20,
  },
  ml24: {
    marginLeft: 24,
  },
  ml28: {
    marginLeft: 28,
  },
  ml32: {
    marginLeft: 32,
  },
  ml36: {
    marginLeft: 36,
  },
  ml40: {
    marginLeft: 40,
  },
  ml44: {
    marginLeft: 44,
  },
  ml48: {
    marginLeft: 48,
  },
  ml52: {
    marginLeft: 52,
  },
  ml56: {
    marginLeft: 56,
  },
  ml60: {
    marginLeft: 60,
  },
  ml64: {
    marginLeft: 64,
  },
  ml68: {
    marginLeft: 68,
  },
  ml72: {
    marginLeft: 72,
  },
  ml76: {
    marginLeft: 76,
  },
  ml80: {
    marginLeft: 80,
  },
  ml84: {
    marginLeft: 84,
  },
  ml88: {
    marginLeft: 88,
  },
  ml92: {
    marginLeft: 92,
  },
  ml96: {
    marginLeft: 96,
  },
  mr12: {
    marginRight: 12,
  },
  mr16: {
    marginRight: 16,
  },
  mr20: {
    marginRight: 20,
  },
  mr24: {
    marginRight: 24,
  },
  mr28: {
    marginRight: 28,
  },
  mr32: {
    marginRight: 32,
  },
  mr36: {
    marginRight: 36,
  },
  mr40: {
    marginRight: 40,
  },
  mr44: {
    marginRight: 44,
  },
  mr48: {
    marginRight: 48,
  },
  mr52: {
    marginRight: 52,
  },
  mr56: {
    marginRight: 56,
  },
  mr60: {
    marginRight: 60,
  },
  mr64: {
    marginRight: 64,
  },
  mr68: {
    marginRight: 68,
  },
  mr72: {
    marginRight: 72,
  },
  mr76: {
    marginRight: 76,
  },
  mr80: {
    marginRight: 80,
  },
  mr84: {
    marginRight: 84,
  },
  mr88: {
    marginRight: 88,
  },
  mr92: {
    marginRight: 92,
  },
  mr96: {
    marginRight: 96,
  },
  mx12: {
    marginHorizontal: 12,
  },
  mx16: {
    marginHorizontal: 16,
  },
  mx20: {
    marginHorizontal: 20,
  },
  mx24: {
    marginHorizontal: 24,
  },
  mx28: {
    marginHorizontal: 28,
  },
  mx32: {
    marginHorizontal: 32,
  },
  mx36: {
    marginHorizontal: 36,
  },
  mx40: {
    marginHorizontal: 40,
  },
  mx44: {
    marginHorizontal: 44,
  },
  mx48: {
    marginHorizontal: 48,
  },
  mx52: {
    marginHorizontal: 52,
  },
  mx56: {
    marginHorizontal: 56,
  },
  mx60: {
    marginHorizontal: 60,
  },
  mx64: {
    marginHorizontal: 64,
  },
  mx68: {
    marginHorizontal: 68,
  },
  mx72: {
    marginHorizontal: 72,
  },
  mx76: {
    marginHorizontal: 76,
  },
  mx80: {
    marginHorizontal: 80,
  },
  mx84: {
    marginHorizontal: 84,
  },
  mx88: {
    marginHorizontal: 88,
  },
  mx92: {
    marginHorizontal: 92,
  },
  mx96: {
    marginHorizontal: 96,
  },
  my12: {
    marginVertical: 12,
  },
  my16: {
    marginVertical: 16,
  },
  my20: {
    marginVertical: 20,
  },
  my24: {
    marginVertical: 24,
  },
  my28: {
    marginVertical: 28,
  },
  my32: {
    marginVertical: 32,
  },
  my36: {
    marginVertical: 36,
  },
  my40: {
    marginVertical: 40,
  },
  my44: {
    marginVertical: 44,
  },
  my48: {
    marginVertical: 48,
  },
  my52: {
    marginVertical: 52,
  },
  my56: {
    marginVertical: 56,
  },
  my60: {
    marginVertical: 60,
  },
  my64: {
    marginVertical: 64,
  },
  my68: {
    marginVertical: 68,
  },
  my72: {
    marginVertical: 72,
  },
  my76: {
    marginVertical: 76,
  },
  my80: {
    marginVertical: 80,
  },
  my84: {
    marginVertical: 84,
  },
  my88: {
    marginVertical: 88,
  },
  my92: {
    marginVertical: 92,
  },
  my96: {
    marginVertical: 96,
  },
  m12: {
    margin: 12,
  },
  m16: {
    margin: 16,
  },
  m20: {
    margin: 20,
  },
  m24: {
    margin: 24,
  },
  m28: {
    margin: 28,
  },
  m32: {
    margin: 32,
  },
  m36: {
    margin: 36,
  },
  m40: {
    margin: 40,
  },
  m44: {
    margin: 44,
  },
  m48: {
    margin: 48,
  },
  m52: {
    margin: 52,
  },
  m56: {
    margin: 56,
  },
  m60: {
    margin: 60,
  },
  m64: {
    margin: 64,
  },
  m68: {
    margin: 68,
  },
  m72: {
    margin: 72,
  },
  m76: {
    margin: 76,
  },
  m80: {
    margin: 80,
  },
  m84: {
    margin: 84,
  },
  m88: {
    margin: 88,
  },
  m92: {
    margin: 92,
  },
  m96: {
    margin: 96,
  },
});

export default gs;
