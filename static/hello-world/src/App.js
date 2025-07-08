import { Button } from '@forge/react';
import { router, invoke } from '@forge/bridge';

function App() {
  const handleConnectClick = async () => {
    // router.open('https://www.blackduck.com/');
    const appContext = await invoke('getId', {test: 'test'});
    console.log(appContext);
    // You can use the appContext to perform further actions or display it in the UI

  };

  return (
    <div>
      <Button
        appearance='primary'
        isSelected
        onClick={handleConnectClick}
      >
        Connect to Black Duck Central
      </Button>
    </div>
  );
}

export default App;

