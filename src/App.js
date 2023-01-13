import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './navbar/Header';
import Cryptocurrency from './pages/Cryptocurrency';
import Exchanges from './pages/Exchanges';
import Home from './pages/Home';
import News from './pages/News';
import Error from './pages/Error';
import { QueryClient , QueryClientProvider } from 'react-query';

const App = () => {

  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='cryptocurrencies' element={<Cryptocurrency />}/>
            <Route path='exchanges' element={<Exchanges />}/>
            <Route path='news' element={<News />}/>
            <Route path='*' element = {<Error />}/>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
