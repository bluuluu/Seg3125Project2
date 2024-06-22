import React from 'react';
import './App.css';

const sharedClasses = {
  blueBackground: 'bg-blue-500',
  whiteText: 'text-white',
  centerText: 'text-center',
  flex: 'flex',
  flexCol: 'flex-col',
  justifyCenter: 'justify-center',
  itemsCenter: 'items-center',
  flexGrow: 'flex-grow',
  padding: 'p-6',
  margin: 'm-4',
  marginLeftMd: 'md:ml-0',
  marginRightMd: 'md:mr-8',
  widthMd: 'md:w-64',
  boldText: 'font-bold',
  largeText: 'text-lg',
  marginTop: 'mt-4',
  blueButton: 'bg-blue-500',
  rounded: 'rounded',
};

const ConfirmationComponent = () => {
  return (
    <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} min-h-screen`}>
      <div className={`${sharedClasses.blueBackground} ${sharedClasses.whiteText} ${sharedClasses.centerText} py-4`}>
        <h1 className={`${sharedClasses.largeText} ${sharedClasses.boldText}`}>CONFIRMATION</h1>
      </div>
      <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} md:${sharedClasses.flexRow} ${sharedClasses.justifyCenter} ${sharedClasses.itemsCenter} ${sharedClasses.flexGrow} ${sharedClasses.padding}`}>
        <img src="https://placehold.co/250x200" alt="Checkmark picture" className={`${sharedClasses.margin} ${sharedClasses.marginLeftMd} ${sharedClasses.marginRightMd} ${sharedClasses.widthMd}`} />
        <div className={sharedClasses.margin}>
          <p className={`${sharedClasses.boldText} ${sharedClasses.largeText}`}>Payment has been accepted</p>
          <p>Transaction Number: N8J9N0K02</p>
          <p className={`${sharedClasses.boldText} ${sharedClasses.largeText} ${sharedClasses.marginTop}`}>Player Information</p>
          <p>Name: XXXXXXX XXXXX</p>
          <p>Phone Number: XXX-XXX-XXXX</p>
          <p>Email Address: XXXX@XXX.com</p>
          <button onClick={() => window.location.href='/'} className={`${sharedClasses.marginTop} ${sharedClasses.blueButton} ${sharedClasses.whiteText} py-2 px-4 ${sharedClasses.rounded}`}>Return to Home</button>
        </div>
      </div>
      <div className={`${sharedClasses.blueBackground} ${sharedClasses.whiteText} ${sharedClasses.centerText} py-4`}>
        <p className={sharedClasses.boldText}>Any Question?</p>
        <p>Call us: 613 843 4328</p>
        <p>Email us: spike@volleyball.ca</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ConfirmationComponent />
    </div>
  );
}

export default App;
