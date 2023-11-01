import { SearchBarContainer, Button, Input } from './SearchBar.styled';
const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target[0].value; // Отримати значення з поля вводу

    if (value.trim() === '') {
      alert('Введіть значення!!!');
    } else {
      onSubmit(value.toLowerCase()); // Викликати обробник з введеним значенням
    }
  };

  return (
    <SearchBarContainer onSubmit={handleSubmit}>
      <Input type="text" />
      <Button className="submit">Search</Button>
    </SearchBarContainer>
  );
};
export default SearchBar;
