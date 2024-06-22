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
        // contact
        contact_header:'ข้อมูลติดต่อ',
        contact_h1:'แผนที่',
        contact_h2:'Golden Eagle Wood Products Co.,Ltd',
        contact_p1:'ตั้งอยู่ที่ 293 หมู่ที่12 ตำบลหัวหว้า อำเภอศรีมหาโพธิ์ จังหวัดปราจีนบุรี 25140',
        contact_p2:'โทร : 096-8425898 , 0969431117',
        contact_p3:'แฟกซ์ : 037-480265',
        
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
        // contact
        contact_header:'Contact',
        contact_h1:'map',
        contact_h2:'Golden Eagle Wood Products Co.,Ltd',
        contact_p1:'Located at 293 Village No. 12, Hua Wa Subdistrict, Si Maha Pho District. Prachinburi Province 25140',
        contact_p2:'Call : 096-8425898 , 0969431117',
        contact_p3:'Fax : 037-480265',
        
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
        contact_header:'联系方式',
        contact_h1:'地图',
        contact_h2:'金鹰木制品有限公司',
        contact_p1:'位于巴真府 Si Maha Pho 县 Hua Wa 镇 12 号村 293 号，邮编 25140',
        contact_p2:'电话：096-8425898、0969431117',
        contact_p3:'传真：037-480265',
        
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
