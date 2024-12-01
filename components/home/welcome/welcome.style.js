import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  headerContainer: {
    marginBottom: SIZES.medium,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.small,
    height: 45,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
    fontSize: SIZES.small,
  },
  searchBtn: {
    width: 45,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,
    borderWidth: 1,
    marginRight: SIZES.small,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;