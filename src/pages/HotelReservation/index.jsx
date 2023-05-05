import styles from './index.module.css';
import { Input, Popover, DatePicker } from 'antd';
import SelectCity from './SelectCity';
import SelecHotelLevel from './SelecHotelLevel';
import SelectRoomGuest from './SelectRoomGuest';
import { useState } from 'react';
import classNames from 'classnames';
const { RangePicker } = DatePicker;
//import locale from 'antd/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';

export default () => {
  const [destination, setDestination] = useState('');
  const [selectCityOpen, setSelectCityOpen] = useState(false);
  const [roomGuest, setRoomGuest] = useState({
    room: 1,
    adult: 1,
    children: 0,
  });
  const [roomGuestOpen, setRoomGuestOpen] = useState(false);
  const [hotelLevelOpen, setHotelLevelOpen] = useState(false);

  const [date, setDate] = useState([dayjs(), dayjs().add(1, 'day')]);
  const [hotelLevel, setHotelLevel] = useState([]);

  const renderDestination = () => (
    <div className={styles.destination}>
      <div className={styles.destination_container}>
        <div className={styles.destination_search_box}>
          <label className={styles.label} style={{ left: 14 }}>
            目的地/酒店名称
          </label>
          <Popover
            placement="bottomLeft"
            content={
              <SelectCity
                setValue={setDestination}
                setOpen={setSelectCityOpen}
              />
            }
            trigger="click"
            open={selectCityOpen}
            onOpenChange={(value) => setSelectCityOpen(value)}
          >
            <Input
              className={styles.destination_input}
              placeholder="城市、机场、区域、地标或酒店名称"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </Popover>
          <div className={classNames(selectCityOpen && styles.bottom_line)} />
        </div>
      </div>
    </div>
  );

  const renderCalendar = () => (
    <div className={styles.calendar}>
      <div>
        <label className={styles.label} style={{ left: 14 }}>
          入住
        </label>
        <div className={styles.hs_nights}>
          <div>{dayjs(date?.[1]).diff(date?.[0], 'day')}晚</div>
        </div>
        <label className={styles.label} style={{ right: 14 }}>
          退房
        </label>
      </div>
      <RangePicker
        //locale={locale}
        format="M月DD日"
        value={date}
        disabledDate={(current) =>
          current && current < dayjs().subtract(1, 'day')
        }
        onChange={(value) => setDate(value)}
      />
    </div>
  );

  const renderRoomGuest = () => (
    <div className={styles.roomguest}>
      <div className={styles.room_guest_container}>
        <div className={styles.room_guest_normal}>
          <div style={{ padding: 14, paddingBottom: 0 }}>
            <label>房间及住客</label>
          </div>
          <Popover
            placement="bottomLeft"
            content={
              <SelectRoomGuest
                setValue={setRoomGuest}
                setOpen={setRoomGuestOpen}
                value={roomGuest}
              />
            }
            trigger="click"
            open={roomGuestOpen}
            onOpenChange={(value) => setRoomGuestOpen(value)}
          >
            <div
              style={{ padding: 14, paddingTop: 0 }}
              onClick={() => {
                setRoomGuestOpen(true);
              }}
            >
              <p className={styles.hs_show_hightlight}>
                {roomGuest.room}间, {roomGuest.adult + roomGuest.children}位
              </p>
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.hs_arrow_drop}
                width="20"
                height="20"
              >
                <path
                  d="m136 166.933 49.067-57.066c2.133-2.134 1.6-5.334-.534-7.467-1.066-1.067-2.133-1.067-3.733-1.067H74.133c-3.2 0-5.333 2.134-5.333 5.334 0 1.066.533 2.666 1.067 3.733l49.066 57.067c3.734 4.266 10.667 4.8 14.934 1.066 1.6-.533 1.6-1.066 2.133-1.6z"
                  fill="#333"
                  class="dropdown_svg__transform-group"
                ></path>
              </svg>
            </div>
          </Popover>
          <div className={classNames(roomGuestOpen && styles.bottom_line)} />
        </div>
      </div>
    </div>
  );

  const renderStar = () => (
    <div className={styles.star}>
      <div className={styles.star_rate_container}>
        <div className={styles.star_rate_normal}>
          <div style={{ padding: 14, paddingBottom: 0, paddingRight: 34 }}>
            <label>酒店级别</label>
          </div>
          <Popover
            placement="bottomLeft"
            content={
              <SelecHotelLevel
                setValue={setHotelLevel}
                setOpen={setHotelLevelOpen}
                value={hotelLevel}
              />
            }
            trigger="click"
            open={hotelLevelOpen}
            onOpenChange={(value) => setHotelLevelOpen(value)}
          >
            <div style={{ padding: 14, paddingTop: 0, paddingRight: 34 }}>
              <p className={styles.hs_show_hightlight}>
                {hotelLevel?.length > 0 ? hotelLevel?.[0]?.text : '不限'}
              </p>
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.hs_arrow_drop}
                width="20"
                height="20"
              >
                <path
                  d="m136 166.933 49.067-57.066c2.133-2.134 1.6-5.334-.534-7.467-1.066-1.067-2.133-1.067-3.733-1.067H74.133c-3.2 0-5.333 2.134-5.333 5.334 0 1.066.533 2.666 1.067 3.733l49.066 57.067c3.734 4.266 10.667 4.8 14.934 1.066 1.6-.533 1.6-1.066 2.133-1.6z"
                  fill="#333"
                  class="dropdown_svg__transform-group"
                ></path>
              </svg>
            </div>
          </Popover>
          <div className={classNames(hotelLevelOpen && styles.bottom_line)} />

        </div>
      </div>
    </div>
  );

  const renderKeyword = () => (
    <div className={styles.keyword}>
      <div className={styles.hs_search_keyword_ontainer}>
        <label>关键词（选填）</label>
        <Input
          className={styles.keyword_input}
          placeholder="机场/火车站/酒店名称..."
        />
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.search_container}>
        <div className={styles.bgImage} />
        <div className={styles.bg_title}>
          <div className={styles.text}>预订酒店</div>
          <div className={styles.easy} />
        </div>
        <div className={styles.inner_wrap}>
          {renderDestination()}
          {renderCalendar()}
          {renderRoomGuest()}
          {renderStar()}
          {renderKeyword()}
          <div className={styles.search_btn}>
            <div className={styles.search_btn_container}>
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#fff"
              >
                <path
                  d="M227.2 210.133 192 176c12.8-16 21.333-36.267 21.333-58.667 0-50.133-40.533-90.666-90.666-90.666S32 67.2 32 117.333C32 167.467 72.533 208 122.667 208c22.4 0 42.666-7.467 58.666-21.333l35.2 35.2c3.2 3.2 8.534 3.2 11.734 0 2.133-3.2 2.133-8.534-1.067-11.734zM48 117.333c0-41.6 33.067-74.666 74.667-74.666s74.666 33.066 74.666 74.666c0 41.6-33.066 74.667-74.666 74.667S48 158.933 48 117.333z"
                  class="search_svg__transform-group"
                ></path>
              </svg>
              <span className={styles.text}>搜索</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
