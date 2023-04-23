import styles from "./index.module.css"
import { mockList } from "./constant"
import { Carousel } from "antd"

export default () => {
  return (
    <div className={styles.marketPlayer}>
      <div className={styles.container}>
        <Carousel autoplay autoplaySpeed={5000}>
          {mockList?.map((item, index) => (
            <div key={index}>
              <div
                className={styles.pcShopAd_container}
                style={{
                  background: `url(${item?.bgUrl}) center center / contain no-repeat`
                }}
              >
                <div className={styles.pcShopAd_word}>
                  <div className={styles.pcShopAd_title}>{item?.name}</div>
                  <div className={styles.pcShopAd_subtitle}>
                    {item?.weather}
                  </div>
                </div>
                <div className={styles.pcShopAd_shops}>
                  {item?.recommends?.map((recommend, recommendIndex) => (
                    <div
                      key={recommendIndex}
                      className={styles.shop_product_item}
                    >
                      <img
                        src={recommend?.img}
                        alt=""
                        className={styles.pcShopAd_shops_item_img}
                      />
                      <div className={styles.pcShopAd_shops_item_right}>
                        <div className={styles.pcShopAd_shops_item_title}>
                          {recommend.name}
                          <div className={styles.pcShopAd_shops_item_title}>
                            <span style={{ fontSize: 12, margin: 0 }}>￥</span>
                            <span
                              style={{
                                fontWeight: 600,
                                marginLeft: "-1px",
                                fontSize: 14
                              }}
                            >
                              {recommend.price}
                            </span>
                            <span style={{ fontSize: 12, marginLeft: 1 }}>
                              起
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
