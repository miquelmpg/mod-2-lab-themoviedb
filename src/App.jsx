import { Routes, Route } from 'react-router';
import { HomePage, DetailPage, SearchPage, LoginPage, RegisterPage, FavoritePage, GraphPage } from './pages';
import { Navbar, Jumbotron, Footer } from './components/ui';
import { PageLayout } from './components/layouts';
import { PosterProviderWrapper, ToggleProviderWrapper } from './context';

function App() {

  return (
    <>
      <Navbar/>
      <PosterProviderWrapper>
        <Jumbotron detail={true}/>
        <PageLayout>
          <Routes>
            <Route path='/' element={
              <ToggleProviderWrapper>
                <HomePage/>
              </ToggleProviderWrapper>}>
            </Route> 
            <Route path='/:movieId' element={
              <ToggleProviderWrapper>
                <DetailPage/>
              </ToggleProviderWrapper>}></Route>
            <Route path='/search' element={
              <ToggleProviderWrapper>
                <SearchPage/>
              </ToggleProviderWrapper>}></Route> 
            <Route path='/login' element={<LoginPage/>}></Route> 
            <Route path='/register' element={<RegisterPage/>}></Route> 
            <Route path='/favorite' element={
              <ToggleProviderWrapper>
                <FavoritePage/>
              </ToggleProviderWrapper>}></Route> 
            <Route path='/graph' element={<GraphPage/>}></Route> 
          </Routes>
        </PageLayout>
      </PosterProviderWrapper>
      <Footer/>
    </>
  )
}

export default App;