
const mockList = [
    {
        city: '上海',
        hotels: [
            {
                name: '上海浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '上海国际旅游度假区融侨酒店',
                url: 'https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '上海浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc7212000ass83zmBE2E_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '上海嘉定禧玥酒店',
                url: 'https://dimg04.c-ctrip.com/images/0202y1200087eyzwyF985_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '上海古象杉丽酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://dimg04.c-ctrip.com/images/0205u120008jdki160C1F_R_300_225_R5_Q70_D.jpg',
                score: '4.9',
                comment: 36,
                price: 289,
            },
        ],
    },
    {
        city: '北京',
        hotels: [
            {
                name: '北京国展三元桥逸扉酒店',
                url: 'https://dimg04.c-ctrip.com/images/0203c120009ebkfuo83E5_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 376,
                price: 12289,
            },
            {
                name: '北京行宫国际酒店',
                url: 'https://dimg04.c-ctrip.com/images/0202c120008skf6bv40D8_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.3',
                comment: 356,
                price: 2389,
            },
            {
                name: '北京浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc7212000ass83zmBE2E_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.2',
                comment: 3116,
                price: 2489,
            },
            {
                name: '北京嘉定禧玥酒店',
                url: 'https://dimg04.c-ctrip.com/images/0202y1200087eyzwyF985_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.3',
                comment: 336,
                price: 3289,
            },
            {
                name: '北京古象杉丽酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://dimg04.c-ctrip.com/images/0205u120008jdki160C1F_R_300_225_R5_Q70_D.jpg',
                score: '4.1',
                comment: 362,
                price: 5289,
            },
            
        ],
    },
    {
        city: '广州',
        hotels: [
            {
                name: '广州浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '广州国际旅游度假区融侨酒店',
                url: 'https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '广州浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc7212000ass83zmBE2E_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '广州嘉定禧玥酒店',
                url: 'https://dimg04.c-ctrip.com/images/0202y1200087eyzwyF985_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '广州古象杉丽酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://dimg04.c-ctrip.com/images/0205u120008jdki160C1F_R_300_225_R5_Q70_D.jpg',
                score: '4.9',
                comment: 36,
                price: 289,
            },
        ],
    },
    {
        city: '杭州',
        hotels: [
            {
                name: '杭州浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '杭州国际旅游度假区融侨酒店',
                url: 'https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '杭州浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc7212000ass83zmBE2E_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '杭州嘉定禧玥酒店',
                url: 'https://dimg04.c-ctrip.com/images/0202y1200087eyzwyF985_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '杭州古象杉丽酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://dimg04.c-ctrip.com/images/0205u120008jdki160C1F_R_300_225_R5_Q70_D.jpg',
                score: '4.9',
                comment: 36,
                price: 289,
            },
        ],
    },
    {
        city: '成都',
        hotels: [
            {
                name: '成都浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '成都国际旅游度假区融侨酒店',
                url: 'https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '成都浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc7212000ass83zmBE2E_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '成都嘉定禧玥酒店',
                url: 'https://dimg04.c-ctrip.com/images/0202y1200087eyzwyF985_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '成都古象杉丽酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://dimg04.c-ctrip.com/images/0205u120008jdki160C1F_R_300_225_R5_Q70_D.jpg',
                score: '4.9',
                comment: 36,
                price: 289,
            },
        ],
    },
    {
        city: '南京',
        hotels: [
            {
                name: '南京浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '南京国际旅游度假区融侨酒店',
                url: 'https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '南京浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc7212000ass83zmBE2E_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '南京嘉定禧玥酒店',
                url: 'https://dimg04.c-ctrip.com/images/0202y1200087eyzwyF985_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '南京古象杉丽酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://dimg04.c-ctrip.com/images/0205u120008jdki160C1F_R_300_225_R5_Q70_D.jpg',
                score: '4.9',
                comment: 36,
                price: 289,
            },
        ],
    },
    {
        city: '深圳',
        hotels: [
            {
                name: '深圳浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '深圳国际旅游度假区融侨酒店',
                url: 'https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '深圳浦东机场中心丽呈睿轩酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc7212000ass83zmBE2E_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '深圳嘉定禧玥酒店',
                url: 'https://dimg04.c-ctrip.com/images/0202y1200087eyzwyF985_R_300_225_R5_Q70_D.jpg',
                star: 'https://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png',
                score: '4.9',
                comment: 36,
                price: 289,
            },
            {
                name: '深圳古象杉丽酒店',
                url: 'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
                star: 'https://dimg04.c-ctrip.com/images/0205u120008jdki160C1F_R_300_225_R5_Q70_D.jpg',
                score: '4.9',
                comment: 36,
                price: 289,
            },
        ],
    },

]

export {
    mockList
}
