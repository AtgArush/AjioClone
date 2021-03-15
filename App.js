import React, {Fragment} from 'react';
import Routes from './src/Navigation/Routes';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import fontFamily from './src/styles/fontFamily';

import Share from 'react-native-share';

async function test() {
  try {
    let a = await new Promise();
  } catch (error) {}
}

export default function App() {
  showMessage({
    type: 'success',
    icon: 'success',
    message: '',
  });
  return (
    <>
      <Routes />
    </>
  );
}

// import Share from 'react-native-share';

// Share.open(options)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     err && console.log(err);
//   });
