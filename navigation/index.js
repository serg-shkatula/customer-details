import { useNavigation } from '@react-navigation/native';

export const screenNames = {
  NEWS: 'News',
  STATS: 'Stats',
  PROFILE: 'Profile',
};

export const NavigationReceiver = ({onReceived}) => {
  const navigation = useNavigation();
  onReceived && onReceived(navigation);
};
