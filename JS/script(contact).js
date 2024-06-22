const translations = {
    th: {
        nav_home: 'หน้าหลัก',
        nav_about: 'เกี่ยวกับ',
        nav_golden: 'บริษัทในเครือ',
        nav_products: 'ผลิตภัณฑ์',
        nav_logis: 'การขนส่ง',
        nav_contact: 'ข้อมูลติดต่อ',
        map_h1:'ที่ตั้งบริษัท',
        map_h2:'G.E. GROUP',
        map_p1:'ตั้งอยู่ที่ 286 หมู่ที่12 ตำบลหัวหว้า อำเภอศรีมหาโพธิ์ จังหวัดปราจีนบุรี 25140',
        map_p2:'โทร : 096-8425898 , 0969431117',
        map_p3:'แฟกซ์ : 037-480265',
        contact_h1:'G.E. GROUP',
        contact_h2:'เวลา เปิด-ปิด',
        contact_h3:'ADD LINE',
        contact_h4:'CONTACT',
        contace_p1:'286 หมู่ที่ 12 ตำบลหัวหว้า อำเภอศรีมหาโพธิ จ.ปราจีนบุรี 25140',
        contace_p2:'08:30น. - 17:30น.',
        contace_p3:'โทร:096-842-5898',
        contace_p4:'โทร:096-943-1117',
        contace_p5:'Facebook : Golden eagle wood products',
        contace_p6:'Email:goldeneaglewoodproducts@gmail.com',
    
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_golden: 'Affiliated companies',
        nav_products: 'Products',
        nav_logis: 'Logistics',
        nav_contact: 'Contact',
        map_h1:'Company location',
        map_h2:'G.E. GROUP',
        map_p1:'Located at 286 Village No. 12, Hua Wa Subdistrict, Si Maha Pho District. Prachinburi Province 25140',
        map_p2:'Tel : 096-8425898 , 0969431117',
        map_p3:'Fax : 037-480265',
        contact_h1:'G.E. GROUP',
        contact_h2:'Open-Close time',
        contact_h3:'ADD LINE',
        contact_h4:'CONTACT',
        contace_p1:'286 Village No. 12, Hua Wa Subdistrict, Si Maha Phot District, Prachinburi Province 25140',
        contace_p2:'08:30 a.m. - 5:30 p.m.',
        contace_p3:'Tel:096-842-5898',
        contace_p4:'Tel:096-943-1117',
        contace_p5:'Facebook : Golden eagle wood products',
        contace_p6:'Email:goldeneaglewoodproducts@gmail.com',
       
    },
    zh: {
        nav_home: '主页',
        nav_about: '关于',
        nav_golden: '附属公司',
        nav_logis: '运输',
        nav_products: '产品',
        nav_contact: '联系信息', 
        map_h1:'公司位置',
        map_h2:'G.E. GROUP',
        map_p1:'位于 286 村 12 号，华瓦镇，Si Maha Pho 县。巴真府 25140',
        map_p2:'电话：096-8425898，0969431117',
        map_p3:'传真：037-480265',
        contact_h1:'G.E. GROUP',
        contact_h2:'开门-关门时间',
        contact_h3:'添加线路',
        contact_h4:'联系方式',
        contace_p1:'286 村 12 号，华瓦镇，西玛哈波区，巴真府 25140',
        contace_p2:'上午 08:30 - 下午 5:30',
        contace_p3:'电话：096-842-5898',
        contace_p4:'电话：096-943-1117',
        contace_p5:'Facebook : Golden eagle wood products',
        contace_p6:'Email：goldeneaglewoodproducts@gmail.com',

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
