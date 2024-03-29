import { ColorModeScript, ChakraProvider, theme} from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
<>
    <Provider store = {store}>
      <ColorModeScript />

      <ChakraProvider theme={theme}>
        <ColorModeSwitcher />
        <App />
      </ChakraProvider>
    </Provider>
  </>
);