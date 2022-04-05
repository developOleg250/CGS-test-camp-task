import { StyleSheet } from 'react-native';
import { THEME } from './theme';

export const styles = StyleSheet.create({
  link: {
    height: THEME.Size.size30,
    width: THEME.Size.size350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.Colors.blue90,
    color: THEME.Colors.white,
    marginBottom: THEME.Spacings.sp30,
  },
  text: {
    paddingHorizontal: THEME.Size.size30,
    marginBottom: THEME.Spacings.sp10, width: '100%',
  },
  title: {
    flex: 1,
    backgroundColor: THEME.Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: THEME.Spacings.sp20,
  },
  edit: {
    fontSize: THEME.Size.size20,
    marginBottom: THEME.Size.size20,
  },
  startPage: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    flex: 1,
    backgroundColor: THEME.Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: THEME.Spacings.sp20,
  },
  btn: {
    marginVertical: THEME.Spacings.sp20,
  },
});
