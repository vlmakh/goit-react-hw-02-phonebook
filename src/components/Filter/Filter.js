import css from './Filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <label className={css.label}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Find contact by name"
      />
    </label>
  );
}
