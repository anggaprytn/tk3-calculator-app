import { defaultColors } from '@/themes';
import { StyleSheet } from 'react-native';
import { hexToRGBA } from '@/utils/helpers';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: defaultColors.grayBackground,
    justifyContent: 'flex-end',
  },
  button: {
    height: 55,
    width: wp(25),
    backgroundColor: defaultColors.white,
    borderWidth: 1,
    borderColor: hexToRGBA(defaultColors.grayText, 0.1),
    borderRadius: 8,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSave: {
    height: 55 + 55,
    width: wp(25),
    backgroundColor: defaultColors.white,
    borderWidth: 1,
    borderColor: hexToRGBA(defaultColors.grayText, 0.1),
    borderRadius: 8,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row75: {
    height: 55,
    width: wp(75),
    flexDirection: 'row',
  },
  row100: {
    height: 55 + 55,
    width: wp(100),
    flexDirection: 'row',
  },
  containerText: {
    width: wp(100),
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  row: { flexDirection: 'row' },
  rowLeft: { height: 110, width: wp(75) },
});
