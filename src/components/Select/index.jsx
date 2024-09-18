import Styles from './select.module.scss';

const Select = ({
  placeholder,
  required,
  options,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <select
      id={id}
      name={name}
      className={Styles.select}
      required={required}
      value={value}
      onChange={onChange}
    >
      <option value={placeholder} defaultValue>
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
