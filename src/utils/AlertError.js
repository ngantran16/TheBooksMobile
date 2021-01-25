import { Alert } from 'react-native';
import { translate } from '../i18n';

export function AlertError(data) {
  const error = data.data ? data.data : data;
  Alert.alert('Error', error?.message || translate('errorOccurred'));
}
