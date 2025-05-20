import Button from "./Button";

const Header = () => {
  return (
    <header className='header'>
      <h2>Task Tracker</h2>
      <Button color='green' text='Add'/>
    </header>
  );
};

// Uncomment if needed
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// };

export default Header;