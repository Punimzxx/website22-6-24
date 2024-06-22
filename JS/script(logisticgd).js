const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    })

// translations
const translations = {
    th: {
        // nav
        nav_home: 'หน้าแรก',
        nav_about: 'เกี่ยวกับ',
        nav_products: 'ผลิตภัณฑ์',
        nav_logis:'การขนส่ง',
        nav_news: 'ข่าวสาร',
        nav_contact: 'ข้อมูลติดต่อ',
        // Logistic
        logis_header:'การขนส่ง',
        logis_h1:'บริการเหมาเที่ยวรถขนส่งสินค้า',
        logis_p1:'เราให้บริการเหมาเที่ยวรถขนส่งสินค้า ด้วยรถ 4 ล้อ 6 ล้อ สำหรับลูกค้าที่อาจมีรถขนส่งอยู่แล้วแต่ปริมาณไม่เพียงพอ สามารถใช้บริการทางเราส่งสินค้าเพื่อตอบสนองความต้องการของลูกค้าได้อย่างทันเวลา สัญญาระยะยาว เราให้บริการขนส่งสินค้าด้วยสัญญาระยะยาว โดยลูกค้าจะได้รับการบริการอย่างมืออาชีพ รวมถึงการให้คำปรึกษาวางแผนการขนส่งสินค้าเพื่อประหยัดเวลา และต้นทุนอย่างสูงสุด และยังสามารถปรับเปลี่ยนรูปแบบรถให้เหมาะกับการบรรทุกสินค้าของลูกค้าได้เช่นกัน',     
        logis_h2:'รถที่ใช้ขนส่ง',
        logis_h3:'รถบรรทุก 4 ล้อ',
        logis_h4:'รถบรรทุก 6 ล้อ ตู้ทึบ 10 บาน',
        logis_h5:'รถบรรทุก 6 ล้อ ตู้ทึบ 10 บาน (ต่อพ่วง)',
        // footer
        footer_h1:'ติดต่อเรา',
        footer_h2:'เบอร์ติดต่อ',
        footer_h3:'เวลาทำการ',
        footer_h4:'ที่ตั้ง',
        footer_p1:'โทร : 037-480-265',
        footer_p2:'โทร : 096-842-5898',
        footer_p3:'โทร : 096-943-1117',
        footer_p4:'08.30 น.-17.30 น.',
        footer_p5:'293 หมู่ที่ 12 ตำบลหัวหว้า อำเภอศรีมหาโพธิ จ.ปราจีนบุรี 25140',

    },
    en: {
        // nav
        nav_home: 'Home',
        nav_about: 'About',
        nav_products: 'Products',
        nav_logis:'Logistics',
        nav_news: 'News',
        nav_contact: 'Contact',
        // Logistic
        logis_header:'Transportation',
        logis_h1:'Freight transport charter service',
        logis_p1:'We provide transportation services with 4-wheel and 6-wheel vehicles for customers who may already have transportation vehicles but the quantity is insufficient. You can use our service to deliver products to meet customer needs in a timely manner. Long-term contracts We provide transportation services with long-term contracts. The customers will receive professional service. Including consulting on product transport planning to save time. and the highest cost and can also modify the car model to suit the customer cargo as well',
        logis_h2:'Vehicle used for transport',
        logis_h3:'4 wheel truck',
        logis_h4:'6-wheel truck, 10-door solid cabinet',
        logis_h5:'6-wheel truck, 10-door solid cabinet (trailer)',
      
        // footer
        footer_h1:'Contact us',
        footer_h2:'Contact number',
        footer_h3:'Business hours',
        footer_h4:'Location',
        footer_p1:'Tel. : 037-480-265',
        footer_p2:'Tel. : 096-842-5898',
        footer_p3:'Tel. : 096-943-1117',
        footer_p4:'08.30 a.m.-5.30 p.m.',
        footer_p5:'293 Village No. 12, Hua Wa Subdistrict, Si Maha Phot District, Prachinburi Province 25140',
    
    },
    zh: {
        // nav
        nav_home: '首页',
        nav_about: '关于我们',
        nav_products: '产品中心',
        nav_logis:'物流',
        nav_news: '新闻中心',
        nav_contact: '联系方式',
        // Logistic
        logis_header:'运输',
        logis_h1:'货运包车服务',
        logis_p1:'我们为已经拥有运输车辆但数量不足的客户提供四轮和六轮车辆的运输服务。您可以使用我们的服务及时交付产品以满足客户需求。长期合同我们提供长期合同的运输服务。客户将获得专业的服务。包括咨询产品运输计划以节省时间和成本，也可以修改车型以适合客户货物',
        logis_h2:'运输所用车辆',
        logis_h3:'4 轮卡车',
        logis_h4:'6 轮卡车，10 门实心柜',
        logis_h5:'6 轮卡车，10 门实心柜（拖车）',

        // footer
        footer_h1:'联系我们',
        footer_h2:'联系电话',
        footer_h3:'营业时间',
        footer_h4:'位置',
        footer_p1:'电话：037-480-265',
        footer_p2:'电话：096-842-5898',
        footer_p3:'电话：096-943-1117',
        footer_p4:'上午 08:30 - 下午 5:30',
        footer_p5:'293 村 12 号，Hua Wa 区，Si Maha Phot 县，巴真府 25140',

        
    }
};

// document.querySelector('select').addEventListener('change', function () {
//     const lang = this.value;
//     for (const id in translations[lang]) {
//         document.getElementById(id).innerText = translations[lang][id];
//     }
// });
document.querySelector('select').addEventListener('change', function () {
    const lang = this.value;
    for (const id in translations[lang]) {
        document.getElementById(id).innerText = translations[lang][id];
    }
});
// Load default language content
function loadDefaultLanguage(lang) {
    for (const id in translations[lang]) {
        document.getElementById(id).innerText = translations[lang][id];
    }
}
