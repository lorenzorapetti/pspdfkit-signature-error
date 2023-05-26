/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import PSPDFKitView from 'react-native-pspdfkit';
import {Platform} from 'react-native';

const DOCUMENT =
  Platform.OS === 'ios' ? 'Document.pdf' : 'file:///android_asset/Document.pdf';

function App(): JSX.Element {
  return (
    <PSPDFKitView
      document={DOCUMENT}
      configuration={{
        showThumbnailBar: 'scrollable',
        pageTransition: 'scrollContinuous',
        scrollDirection: 'vertical',
      }}
      fragmentTag="PDF1"
      style={{flex: 1}}
    />
  );
}

export default App;
