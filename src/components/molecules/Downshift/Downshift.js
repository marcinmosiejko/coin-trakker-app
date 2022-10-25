import React, { useState } from 'react';
import {
  SearchWrapper,
  SearchResultsWrapper,
  SelectedCoin,
} from './Downshift.styles';
import { Input } from 'components/atoms/Input/Input';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import SearchResultsItem from 'components/atoms/SearchResultsItem/SearchResultsItem';

const Downshift = ({
  onChange,
  selectedCoin,
  handleSetSelectedCoin,
  isAddCoin,
  findCoins,
}) => {
  const [coinInputValue, setCoinInputValue] = useState('');
  const [matchingCoins, setMatchingCoins] = useState([]);

  const getMatchingCoins = debounce(({ inputValue }) => {
    const coins = findCoins(inputValue);
    setMatchingCoins(coins);
    setCoinInputValue(inputValue);
  }, 1);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    setInputValue,
  } = useCombobox({
    items: matchingCoins,
    onInputValueChange: getMatchingCoins,
    onSelectedItemChange: ({ selectedItem }) => {
      const input = `${selectedItem.code.toUpperCase()}.${selectedItem.name.toUpperCase()}`;
      setInputValue(input);
      onChange(input);
      handleSetSelectedCoin(selectedItem);
    },
  });

  return (
    <SearchWrapper>
      <Input
        {...getInputProps()}
        name="coin"
        id="coin"
        placeholder="Find a coin..."
        value={coinInputValue}
        isAddCoin={isAddCoin}
      />

      {isAddCoin ? (
        <SelectedCoin>
          {selectedCoin ? (
            <img src={selectedCoin.webp32} alt="selected coin logo" />
          ) : (
            <div />
          )}
        </SelectedCoin>
      ) : null}

      <SearchResultsWrapper
        isVisible={isOpen && matchingCoins.length > 0}
        {...getMenuProps()}
        aria-label="results"
      >
        {matchingCoins.map((item, index) => (
          <SearchResultsItem
            isHighlighted={highlightedIndex === index}
            key={item.code + item.name}
            data={item}
            {...getItemProps({ item, index })}
          />
        ))}
      </SearchResultsWrapper>
    </SearchWrapper>
  );
};

export default Downshift;
