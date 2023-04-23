import styles from './SelectCity.module.css';

export default ({ setValue, setOpen }) => {
  const cityList = [
    {
      title: '国内热门城市',
      citys: [
        '北京',
        '上海',
        '天津',
        '重庆',
        '大连',
        '青岛',
        '西安',
        '南京',
        '苏州',
        '杭州',
        '厦门',
        '成都',
      ],
    },
    {
      title: '海外热门城市',
      citys: [
        '首尔',
        '曼谷',
        '普吉岛',
        '东京',
        '新加坡',
        '大阪',
        '济州市',
        '巴厘岛',
        '清迈',
        '京都',
        '吉隆坡',
        '芭提雅',
        '洛杉矶',
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      {cityList?.map((item, index) => (
        <div key={index}>
          <div className={styles.title}>{item.title}</div>
          <ul>
            {item?.citys?.map((name) => (
              <li
                onClick={() => {
                  setValue(name);
                  setOpen(false);
                }}
              >
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
