import styles from './SelectCity.module.css';
import { mockList } from './constant';
import { useMemo } from 'react';

export default ({ handleChange, setOpen, value }) => {
  const cityList = useMemo(() => {
    const list = mockList?.slice(3);
    return list.filter((item) => item.city !== value.city);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      {cityList?.map((item, index) => (
        <button
          key={index}
          className={styles.pas_item}
          onClick={() => {
            handleChange(item);
            setOpen(false);
          }}
        >
          {item.city}
        </button>
      ))}
    </div>
  );
};
