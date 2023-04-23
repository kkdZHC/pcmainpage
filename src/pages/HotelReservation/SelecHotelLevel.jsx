import styles from './SelecHotelLevel.module.css';

export default ({ setValue, setOpen, value }) => {
  const list = [
    {
      text: '二星（钻）及以下',
      order: 1,
    },
    {
      text: '三星（钻）',
      order: 2,
    },
    {
      text: '四星（钻）',
      order: 3,
    },
    {
      text: '五星（钻）',
      order: 4,
    },
  ];

  return (
    <div className={styles.wrap}>
      {list.map((item) => (
        <div
          className={styles.item}
          onClick={() => {
            const index = value?.findIndex((row) => row.text === item.text);
            console.log(index, 'index');
            if (index == -1) {
              const newValue = [...value, item];
              setValue(newValue.sort((a, b) => a.order - b.order));
            } else {
              const newValue = [...value];
              newValue.splice(index, 1);
              setValue(newValue.sort((a, b) => a.order - b.order));
            }
          }}
        >
          {item.text}
          <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            fill="#0086f6"
            style={{
              opacity:
                value?.findIndex((row) => row.text == item.text) !== -1 ? 1 : 0,
            }}
          >
            <path
              d="M33.895 124.516a7.948 7.948 0 0 0 .973-11.263c3.405-2.843 8.49-2.41 11.357.966l62.887 60.846c.956 1.126 2.948 1.126 4.076 0L220.44 56.178c2.868-3.377 7.952-3.809 11.357-.965a7.948 7.948 0 0 0 .974 11.262c-72.447 80.303-108.943 120.683-109.49 121.14-7.945 6.635-19.81 5.627-26.5-2.252l-62.887-60.847z"
              class="check_svg__transform-group"
            ></path>
          </svg>
        </div>
      ))}
      <div className={styles.hs_dr_btn}>
        <span
          className={styles.hs_reset_span}
          onClick={() => {
            setValue([]);
          }}
        >
          重置
        </span>
        <span
          className={styles.hs_done_span}
          onClick={() => {
            setOpen(false);
          }}
        >
          确定
        </span>
      </div>
    </div>
  );
};
