import css from './Filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <label className={css.label}>
      <p className={css.search}>Find contact by name</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
