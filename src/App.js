import { SplitScreen } from './SplitScreen';

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green'}}>Left!</h1>
}

const LeftHandComponent = () => {
  return <p style={{ backgroundColor: 'yellow'}}>Right!</p>
}

function App() {
    return (
      <SplitScreen leftWeight = {1} rightWeight = {3}>
          <LeftHandComponent />
          <RightHandComponent />
      </SplitScreen>
  );
}

export default App;
