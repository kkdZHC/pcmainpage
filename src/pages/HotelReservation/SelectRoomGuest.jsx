import styles from './SelectRoomGuest.module.css';

export default ({ setValue, setOpen, value }) => {
  const list = [
    {
      title: '房间',
      key: 'room',
      attention: '',
    },
    {
      title: '成人',
      key: 'adult',
      attention: '18岁及以上',
    },
    {
      title: '儿童',
      key: 'children',
      attention: '0-17岁',
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.guest_select}>
        {list?.map((item) => (
          <div className={styles.hs_child_kid}>
            <div className={styles.hs_ck_label}>
              <span>{item.title}</span>
              <span className={styles.hs_ck_span}>{item?.attention}</span>
            </div>
            <div className={styles.hs_actions}>
              {(() => {
                const node = (
                  <svg
                    t="1682066473897"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1476"
                    width="21"
                    height="21"
                  >
                    <path
                      d="M512 34.133333C247.808 34.133333 34.133333 247.808 34.133333 512s213.674667 477.866667 477.866667 477.866667 477.866667-213.674667 477.866667-477.866667S776.192 34.133333 512 34.133333z m266.24 456.021334c0 24.576-19.797333 44.373333-44.373333 44.373333H245.76v-1.365333c0-24.576 19.797333-44.373333 44.373333-44.373334H778.24v1.365334z"
                      fill="#eeeeee"
                      p-id="1477"
                    ></path>
                  </svg>
                );
                if (['adult', 'room'].includes(item.key)) {
                  if (value[item.key] == 1) {
                    return node;
                  }
                } else {
                  if (value[item.key] == 0) {
                    return node;
                  }
                }

                return (
                  <svg
                    t="1682066107972"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="11488"
                    width="21"
                    height="21"
                    onClick={() => {
                      const newValue = { ...value };
                      newValue[item.key] = value[item.key] - 1;
                      setValue(newValue);
                    }}
                  >
                    <path
                      d="M510.2 960.2c-245.8 0-445.9-200-445.9-445.9s200-445.9 445.9-445.9C756 68.5 956 268.5 956 514.4S756 960.2 510.2 960.2z m0-827.1C300 133.1 129 304.1 129 514.3s171 381.2 381.2 381.2 381.2-171 381.2-381.2-171-381.2-381.2-381.2z"
                      fill="#4D4D4D"
                      p-id="11489"
                    ></path>
                    <path
                      d="M733.1 546.7H287.2c-17.8 0-32.3-14.5-32.3-32.3 0-17.8 14.5-32.3 32.3-32.3h445.9c17.8 0 32.3 14.5 32.3 32.3 0 17.8-14.5 32.3-32.3 32.3z"
                      fill="#4D4D4D"
                      p-id="11490"
                    ></path>
                  </svg>
                );
              })()}

              <span className={styles.hs_count}>{value[item.key]}</span>

              <svg
                t="1682065943089"
                class="icon"
                viewBox="0 0 1025 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5280"
                width="20"
                height="20"
                onClick={() => {
                  const newValue = { ...value };
                  newValue[item.key] = value[item.key] + 1;
                  setValue(newValue);
                }}
              >
                <path
                  d="M852.812 166.713c-92.715-89.28-212.9-140.789-339.954-140.789s-250.672 51.509-339.953 140.79c-188.863 188.862-188.863 491.043 0 679.906 89.28 89.28 212.9 140.789 339.953 140.789S763.531 935.9 852.812 846.62c188.863-188.863 188.863-491.044 0-679.907m-48.074 631.833c-78.98 78.979-181.996 120.185-291.88 120.185s-212.9-41.206-291.879-120.185c-161.392-161.392-161.392-422.367 0-583.759 78.98-78.979 181.996-120.185 291.88-120.185s212.9 41.206 291.879 120.185c161.392 161.392 161.392 422.367 0 583.759"
                  fill="#707070"
                  p-id="5281"
                ></path>
                <path
                  d="M547.197 472.328V297.2c0-20.603-13.735-34.338-34.339-34.338S478.52 276.597 478.52 297.2v175.128H303.392c-20.603 0-34.339 13.735-34.339 34.339 0 10.301 3.434 17.169 10.302 24.037s13.736 10.301 24.037 10.301H478.52v175.128c0 10.302 3.434 17.17 10.301 24.037 6.868 6.868 13.736 10.302 24.037 10.302 20.604 0 34.34-13.736 34.34-34.34V541.006h175.127c20.603 0 34.338-13.735 34.338-34.338s-13.735-34.34-34.338-34.34H547.197z"
                  fill="#707070"
                  p-id="5282"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className={styles.hs_done}>
          <span className={styles.hs_done_span} onClick={() => setOpen(false)}>
            确定
          </span>
        </div>
      </div>
    </div>
  );
};
