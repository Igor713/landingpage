import Styles from './select.module.scss';

const Select = ({ placeholder, required, options, id, name, onBlur }) => {
  return (
    <select
      id={id}
      name={name}
      className={Styles.select}
      required={required}
      onBlur={onBlur}
    >
      <option value={placeholder} selected>
        {placeholder}
      </option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
