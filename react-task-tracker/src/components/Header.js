import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h2>Task Tracker</h2>
      <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd} 
      />
    </header>
  );
};

export default Header;