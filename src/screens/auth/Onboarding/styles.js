import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    color: colors.grey,
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 16,
  },
  imageContainer: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    height: 50,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  image: {
    width: '100%',
    height: '50%',
    flex: 1,
  },
});

export default styles;
