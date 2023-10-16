import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { defaultColors } from '@/themes';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padding: { height: 40 },
  content: {
    flex: 1,
    backgroundColor: defaultColors.grayBackground,
    marginTop: statusBarHeight,
    paddingTop: 16,
  },
  card: {
    backgroundColor: defaultColors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 1,
    marginVertical: 4,
    width: wp(100) - 32,
  },
});
