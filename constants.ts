import { Product, Coupon, SavedItem } from './types';

export const IMAGES = {
    shopee: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0957kvVW4rVjK7FaTUAh4uIdx4dXCi38xDWhDhXJYQrmqJfMbFX3oncrdA0ZlVYvTip4yn1F2DnoYeMa-P-yUwM9c06SleTjSWlIAD6d4hW2PyXEbyfi9tb8gNsrvtXtNRmx6xcFv4Sgr_KOkFkZ1QnPzGcdcF2HyfzxwFBpTQEmYLgqWJ85nIBP0Q372BniOwHNLrIAYvEDNCNoHnlGR7Te6MI1JrnbJW5hLV-GI1EpageZiIefQ0erzyw_0uH803xj8OrfOI9rV",
    amazon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI83jGiRSV0kJzeUHeUxImiTDgV8gRsTJTBF0neMVtw15qVu2FZd7GKxtOzkMS0YJH2oTjWcwCyAWNh-942-rEZjen1H6CdiEGOuDL1SJ3MDrfF-hlhUlumftTAGKs5IIRtO4IVDuz97gxxP9zLxmy3oR1EvlMqNlk5DRDAPVgGjhIw9m1Bbvx5VCBfHLsONVK9tK89GwSReaoub4gMpCbFCOmE1JM0qWkBsXg2DWZghgYjp30qOQzoASXQmENvSNGo7msg_AfZU3B",
    mercadolivre: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyQoP_5INupeeQHIe2S7wwprN_75PzhaSIs3dwGkrxzBKb28j31-ZoxS48v1WL2nZwzFIeo2ABvSPzVhUh5p6XXYH4i2lhRD2sbm3Sbg3TzBK03WFlPXSUMmvH5Z9CGo8Zqn8sHqOcDTJgVOCdiSI6QZMlr5oCGIbtHNsrU3ietpVzPBnkfI6e_qDd_4merQPopqyAb3HTqhTJfXkhQLgDE1eKob5z7Pgq0vnvCstccXg03OwXDF0dfFaz6HkGAzK33odttMnV_7eG",
    tv: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrEe54zy4rwDYC9o7NWh8pImkBXL1KfWMg0oyOVSRWeg7SD5yZBPO46I7P8NnkEdiQgLNeSVSCoP7ZUbq7KPJnneqhDKeGRP3L5rVlNS6ILIrt8scA6koXkPosf0x6pFxj5g3-LE7qnGDl0qLVjAttVdk7KtGLNmrYYPoyj_rd7DHlHoF7qCYG9q04Qz4MzmUalYaTo14H4vgs7Er81--Dbf6_VIlK-fDUp6pv2wmBe_Tduenet7hiJsFn4Lt_3eNSEWuZVkv1n5h2",
    airfryer: "https://lh3.googleusercontent.com/aida-public/AB6AXuAov0zOqpXhi_re5GLXFM7LGU5DP7AnDPor-9JlvjUVq4OwmnapWiLJedI4c3ePvo8Fg-i7BJr9gT8wo531AXM1aKKtGAG86hU6HN7iFI8EJGuYE5680sFXNk4Lth3muW928o2NkN9lK-ZbcpnUuLC6jjzhazkFPKLRG1Wbqo6_ockPQe_xRx-41GNJfe50uTU-CpOP871LIixLeASkGCy6WsqglRzIlG_jjJzCRLnDah-xzA8IbXrqRedbFE8HrX08EnhOszeVKr23",
    iphone: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh45foxcS_SBC56pSXJ0oVxC0WGYMkXJLu5a1cd2pkgGDIcaM0goM5yb7i_x5m0pBzddPDGmQYzzMC7B7GKcjGp0xehOdyRkbRLefO-bRPjuQoHsTyhGwRh-NUdS20cFxl_g2cOdNUQSTmdq_C-aWT4auHSv2GYeMzd1e2UPfeS2iEfKOoaWNY7SSPMrsgbY0ctQeJUWSrYucMvJZzkssNC5DdczoTWIovbBAUV6ECgGE5Ky5wlX-S5o6CRIdq0dg4123IEQiFOqLE",
    nespresso: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmVa_axkcBGu9XgxlfHHz4d9zxPyw5UElXjwA4wPyW89uhISXVGdk6yOWgwUMg7hn90Y6J3zbUMAkAFdXZKzSK9U12E_1K2Tju765_wFBqfOWjIluBUDKmGN7_ibkGiqt2W4tYFc6AS6jTfIDawO8ABS8CySZSjpuVCKjdLC4ur7bt7t4SufLEH-9wxFbM4wLLb4S6W14O0u8otKLdQV79uizbeMptTDBE3J0M5IhTjLF5A1TLU9GgUy5QqsTTDm6xERmFRReDZ74X",
    headphones: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKqUzxliCEw42rKwSrCgn81uCwQH-hwJYvORYWGgfYy0XdNxpwZ_Si6SNHjSJUIomMalOvkOblCtwZx3vF4XzaSbo2layF68Uc5TtfhTWeRMKnvJ3TbchMA5ebtZbVKRHOH4HDK5ku6PfODP4I-1rNYlG1j_qC4Od3aHSJR02Yp0JBZy4O3tWhSTpkB27VLYmZ70XIRF6BT6bWvUVeZ52V8Ia7dY8qa07whOhKfAEPRps5Zx2d6ng1SVuNsttF3Qug3DLBxa3hzXBI",
    smartwatch: "https://lh3.googleusercontent.com/aida-public/AB6AXuBelRQNYmgygrIb6Cf_7jj71RdR03NDLXp3-rK5A2dWqpQBqgYTFbT_Dbys3tHsIQpMLDBGHR1lq-7waL-nGqk_XOowp-71J518mLqe8Y_t-P5tLMqUQ_U2hApUIcp7lHl7i1QXJgG52P93--ypoyFNzIIl3mOQaUYeYFRrPRe4c_PcNwpjmNAxv61uYSxPmtrwiQUeMk7GNaNKI0FAWXMnPCzMqCyZ93D5LlZ-4e9KBR06wDS3_jsND4O8vf4-DDRiOG_feVUADyjH",
    tablet: "https://lh3.googleusercontent.com/aida-public/AB6AXuABy9TIOYgh26Lhte_-jDbw8_z7E-jarYAjegTcC31BphpcYX0GnFhHwXfeOZW4FGILnt3CSk8jaC2GGEsI2DLru0vSQ6EnSYjVx5ShMzHPH4jqxlp-n6mtWnXqDK2IKHFMEJ7cc_e65Mr9hY7y7jZOeLOvp3GvSHAijlJJo-6yD_IRmRve2_k0wcYbo34IBrWkP-e1XN64Jk6Kbp2WQ_WxypvCDt38LFiTJLvzjTb5JRXBTccajrI2sAon7i4lqIQcOPsxJP-Vb-jW",
    projector: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJr6hj3AvGry2uk3bK97mG4afr1fV-nrJacld1hiPkD4d5JXWYJN05BSjh2Hk4rT9-PAGMCGDwRF7iEVfwMf30iFq6CgvOH_NJL4zkJvBlbcjjoKAYMPF5fY4tLpSLJPKVuVNOW1xv1LBOditteygMbFVXPNPmHGsTYApBXYPI_9rJr0BT3pIwEEWsHOPOGm2In85vrAmXgEgLtsVQ5zcFTmzYbmAwSNm7HLFJQY8zFYBxKxaVmIa6RLoO1RT1ad5eV2LcemSP8R5-",
    profileBg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRy5TNq6rU7wDZbC3vglO1C571AvtJv4O0enFDy5RcrDtZypdE7JHp3hyg1dHgG4Sm51yzXVbIU9gnIoXTIw7wGlPbAl1rUnOabZtQeL_RSxvJh6RtJPuZVyDtofQ6T-K2oZucCgNZ5JmDB5YbFHAqiJoR9pliHYCEkZ80Mg-ohhTlpdQAfBC6n0SGpLU26gMRuC9Zuhq9c975oorPr0lQh-DG7i3w4RwTpgldfFtG7tdRh9_v92n-gM1LSvhflAO65qE9OMkyWxFG",
    headphoneHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM6K7pvlOLPmqJ1JasQcT2YvtjOtDO9KK6Rb5gPRUuwHc4CA6anldnBmlr8JzI2N8ji1CsbIlSu1gPsKqus7a5mXJLBvX-eL07YHiWl34-s4TrTG131ejPHUJhWRTQQSJ5Elygbb0nZL_9QmGULMbEytQ-0m9XtF_dsSms7F4kaHxxTFfas6I1LkvH94FvpaLvqyUwXQFlUdnzwMxE_uW42VTZQQBiaj6G0mrSGGYXzuixVRFzn_XP0lvQWsb9A65uVGoWvjRVXQho"
};

export const PRODUCTS: Product[] = [
    {
        id: "1",
        title: "Headphone Bluetooth Noise Cancelling Pro",
        price: "89,90",
        originalPrice: "299,00",
        image: IMAGES.headphones,
        soldCount: "5.2k",
        isViral: true,
        rating: 4.8,
        reviews: 1240,
        discount: "70%"
    },
    {
        id: "2",
        title: "Relógio Minimalista Quartz Ultra-Slim",
        price: "45,00",
        originalPrice: "149,00",
        image: IMAGES.smartwatch,
        soldCount: "2.1k",
        isViral: true
    },
     {
        id: "3",
        title: "Tablet Escrita 12\"",
        price: "19,90",
        originalPrice: "89,00",
        image: IMAGES.tablet,
        soldCount: "7.1k",
        isViral: true
    },
    {
        id: "4",
        title: "Mini Projetor Portátil 4K",
        price: "249,00",
        originalPrice: "599,00",
        image: IMAGES.projector,
        soldCount: "1.8k",
        isViral: false
    }
];

export const COUPONS: Coupon[] = [
    {
        id: "1",
        store: "Shopee Brasil",
        offer: "R$ 20 OFF",
        description: "Válido em compras acima de R$ 150. Válido apenas hoje para itens selecionados.",
        usedCount: "1.2k",
        logo: IMAGES.shopee,
        bgColor: "bg-orange-100"
    },
    {
        id: "2",
        store: "Amazon Prime",
        offer: "10% de Desconto",
        description: "Aproveite em todo o site. Válido para a primeira compra em eletrônicos.",
        usedCount: "850",
        logo: IMAGES.amazon,
        bgColor: "bg-gray-100 dark:bg-[#382b29]"
    },
    {
        id: "3",
        store: "Mercado Livre",
        offer: "R$ 50 OFF",
        description: "Válido para compras via App em produtos com selo Full.",
        usedCount: "2.4k",
        logo: IMAGES.mercadolivre,
        bgColor: "bg-yellow-100"
    }
];

export const SAVED_ITEMS: SavedItem[] = [
    { id: "1", title: 'Smart TV 4K 55" Samsung Crystal UHD', price: "2.499,00", originalPrice: "2.899,00", image: IMAGES.tv, priceDrop: true },
    { id: "2", title: 'Fritadeira Air Fryer Mondial Family 4L', price: "389,00", image: IMAGES.airfryer },
    { id: "3", title: 'iPhone 15 Apple 128GB Preto', price: "4.899,00", originalPrice: "5.299,00", image: IMAGES.iphone, priceDrop: true },
    { id: "4", title: 'Nespresso Essenza Mini Máquina de Café', price: "449,00", image: IMAGES.nespresso }
];