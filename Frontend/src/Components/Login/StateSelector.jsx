import React from 'react';
import { Select } from 'antd';
import data from './StatesData';  // Import the data for states or options

const SearchSelect = ({Statedata}) => {

  const onChange = (value) => {
   Statedata((prev)=>{
     return {...prev, state: value};
   })
  };

  const onSearch = (value) => {
    // console.log('search:', value);
  };

  return (
    <div className="form-group mt-3">
    <label>Select State</label>
      <Select
        showSearch
        placeholder="Select a state"
        style={{ opacity: 1 }}
        className="w-100"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.label.toLowerCase().includes(input.toLowerCase())
        }
        options={data.map(option => ({
          value: option.value,
          label: option.label,
        }))}
        getPopupContainer={(trigger) => trigger.parentNode}  
      />
    </div>
  );
};

export default SearchSelect;
