import styles from "./index.module.css"

import { Carousel } from "antd"

export default () => {
  const imgList = [
    "https://dimg04.c-ctrip.com/images/0zg5312000artha0v5BF6.png",
    "https://dimg04.c-ctrip.com/images/0zg1r12000azie5y9DE2E.jpg",
    "https://dimg04.c-ctrip.com/images/0zg3j12000augu1mgB200.png",
    "https://dimg04.c-ctrip.com/images/0zg0d12000az2xua36ED8.jpg",
    "https://dimg04.c-ctrip.com/images/0zg0q12000ay6saj1A95A.jpg",
    "https://dimg04.c-ctrip.com/images/0zg5312000artha0v5BF6.png",
    "https://dimg04.c-ctrip.com/images/0zg4612000ap2m6ht3DD7.png"
  ]
  return (
    <div className={styles.banner_wrap}>
      <div className={styles.marketAdvert_container}>
        <div className={styles.marketAdvert_ad}>
          <Carousel autoplay autoplaySpeed={5000}>
            {imgList?.map(src => (
              <img src={src} alt="" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
