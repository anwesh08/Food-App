import Card from './Components/Card';
import Category from './Components/Category';
import Foods from './Components/Foods';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='bg-darkBackground h-full font-crimson tracking-wide'>
      <NavBar />
      <Hero />
      <Card />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
