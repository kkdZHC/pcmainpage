import styles from './index.module.css';
import { mockList } from './constant';
import { useState } from 'react';
import classNames from 'classnames';
import { CaretDownOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import SelectCity from './SelectCity';

export default () => {
  const [scrollKey, setScrollKey] = useState(1);
  const [scrollNumber, setScrollNumber] = useState(0);

  const [selectCityOpen, setSelectCityOpen] = useState(false);
  const [citySelectItem, setCitySelectItem] = useState(mockList?.at(3));

  const [selectCityName, setSelectCityName] = useState(mockList?.[0]?.city);

  const [hotels, setHotels] = useState(mockList?.[0]?.hotels || []);

  return (
    <div className={styles.pas_container}>
      <div className={styles.pas_header}>
        <div className={styles.pas_title}>
          酒店
          <span className={styles.pas_recommend}>推荐</span>
        </div>
        <ul className={styles.pas_ul}>
          {mockList?.slice(0, 3)?.map((item) => (
            <button
              className={classNames(
                styles.pas_btn,
                selectCityName === item.city && styles.pas_active,
              )}
              onClick={() => {
                setSelectCityName(item.city);
                setHotels(item.hotels || []);
              }}
            >
              {item.city}
            </button>
          ))}
          <button
            className={classNames(
              styles.pas_btn,
              selectCityName === citySelectItem.city && styles.pas_active,
            )}
            onClick={() => {
              setSelectCityName(citySelectItem.city);
              setHotels(citySelectItem.hotels || []);
            }}
          >
            {citySelectItem.city}
          </button>
          <Popover
            placement="bottomRight"
            content={
              <SelectCity
                setOpen={setSelectCityOpen}
                value={citySelectItem}
                handleChange={(value) => {
                  setCitySelectItem(value);
                  setSelectCityName(value.city);
                  setHotels(value.hotels);
                }}
              />
            }
            trigger="click"
            open={selectCityOpen}
            onOpenChange={(value) => setSelectCityOpen(value)}
          >
            <button className={classNames(styles.pas_btn)}>
              <span style={{ marginRight: 4 }}>更多</span>
              <CaretDownOutlined />
            </button>
          </Popover>
        </ul>
      </div>
      <div className={styles.hotel_container}>
        <div
          className={styles.pas_left}
          onClick={() => {
            setScrollKey(scrollKey - 1);
            setScrollNumber(scrollNumber + 718);
          }}
          style={{ display: scrollKey == 1 && 'none' }}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.75 20.35c.3.25.8.25 1.05-.1.25-.3.25-.8-.1-1L7.1 12.2c-.1-.1-.1-.25-.05-.3l8.65-7.1c.3-.25.35-.75.1-1-.25-.3-.75-.35-1.05-.1l-8.8 7.2c-.65.6-.65 1.75.2 2.4l8.6 7.05z"
              fill="#34475e"
              class="left_svg__transform-group"
            ></path>
          </svg>
        </div>
        <ul
          className={styles.pas_hotel}
          style={{
            transform: `translate3d(${scrollNumber}px, 0px, 0px)`,
          }}
        >
          {hotels?.map((item, index) => (
            <li
              className={classNames(
                styles.pas_item,
                index >= scrollKey * 3 && styles.pas_hidden,
              )}
            >
              <div className={styles.pas_image_container}>
                <img src={item?.url} alt="" className={styles.pas_image} />
              </div>
              <div className={styles.pas_info}>
                <h3 className={styles.pas_name}>{item.name}</h3>
                <img src={item.star} alt="" className={styles.pas_level} />
                <div className={styles.pas_review}>
                  <span>
                    <span className={styles.pas_score}>
                      {item.score}
                      <em className={styles.pas_total}>/5 </em>
                    </span>
                    <span className={styles.pas_rating}>超棒</span>
                  </span>
                </div>
                <div className={styles.pas_comment}>
                  <div>{item.comment}点评</div>
                  <div className={styles.pas_price}>
                    ¥<span className={styles.pas_num}>{item.price}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div
          className={styles.pas_right}
          onClick={() => {
            setScrollKey(scrollKey + 1);
            setScrollNumber(scrollNumber - 718);
          }}
          style={{ display: scrollKey * 3 >= hotels.length && 'none' }}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.825 20.61c-.303.297-.753.292-1.048-.16-.297-.303-.293-.753.16-1.049l8.47-6.966c.152-.149.153-.299.005-.45l-8.33-6.982c-.298-.304-.293-.754-.14-1.052.303-.297.753-.293 1.051-.14l8.479 7.135c.892.76.882 1.81-.026 2.55l-8.62 7.114z"
              fill="#34475e"
              class="right_svg__transform-group"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
