import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchWrapper,
  SearchResultsWrapper,
  SelectedCoin,
  StyledLink,
} from './Downshift.styles';
import { Input } from 'components/atoms/Input/Input';
import { useCombobox } from 'downshift';
import SearchResultsItem from 'components/atoms/SearchResultsItem/SearchResultsItem';

const Downshift = ({
  findCoins,
  isAddCoin,
  isSearch,
  onChange,
  placeholder,
}) => {
  const [matchingCoins, setMatchingCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const getMatchingCoins = ({ inputValue }) => {
    const coins = findCoins(inputValue);
    setMatchingCoins(coins);
  };

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    setInputValue,
    reset,
  } = useCombobox({
    items: matchingCoins,
    onInputValueChange: getMatchingCoins,
    onSelectedItemChange: ({ selectedItem }) => {
      if (isAddCoin) {
        const input = `${selectedItem.code.toUpperCase()}.${selectedItem.name.toUpperCase()}`;
        setInputValue(input);
        setSelectedCoin(selectedItem);
        onChange(input);
      } else {
        reset();
      }
    },
  });

  return (
    <SearchWrapper>
      <Input
        {...getInputProps()}
        name="coin"
        id="coin"
        placeholder={placeholder}
        isAddCoin={isAddCoin}
        isSearch={isSearch}
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
        {matchingCoins.map((item, index) => {
          if (isAddCoin) {
            return (
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                key={item.code + item.name}
                data={item}
                {...getItemProps({ item, index })}
              />
            );
          } else {
            return (
              <StyledLink key={item.code + item.name} to={`/coin/${item.code}`}>
                <SearchResultsItem
                  isHighlighted={highlightedIndex === index}
                  data={item}
                  {...getItemProps({ item, index })}
                />
              </StyledLink>
            );
          }
        })}
      </SearchResultsWrapper>
    </SearchWrapper>
  );
};

Downshift.propTypes = {
  findCoins: PropTypes.func,
  isAddCoin: PropTypes.bool,
  isSearch: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Downshift;
