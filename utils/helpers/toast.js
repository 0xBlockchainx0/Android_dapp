
import { Toast } from 'native-base';

const showErrorToast = ({
  text,
  buttonText = 'Ok',
  position = 'bottom',
  duration = 3000
}) => {
  Toast.show({
    text,
    textStyle: { color: 'red' },
    buttonText,
    position,
    duration
  })
}

const showInfoToast = ({
  text,
  buttonText = 'Ok',
  position = 'bottom',
  duration = 3000
}) => {
  Toast.show({
    text,
    textStyle: { color: 'white' },
    buttonText,
    position,
    duration
  })
}

const showSuccessToast = ({
  text,
  buttonText = 'Ok',
  position = 'bottom',
  duration = 3000
}) => {
  Toast.show({
    text,
    textStyle: { color: 'white' },
    buttonText,
    position,
    duration
  })
}

export {
  showErrorToast,
  showInfoToast,
  showSuccessToast
}