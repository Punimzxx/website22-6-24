const translations = {
    th: {
        nav_home: 'หน้าหลัก',
        nav_about: 'เกี่ยวกับ',
        nav_golden: 'บริษัทในเครือ',
        nav_products: 'ผลิตภัณฑ์',
        nav_logis: 'การขนส่ง',
        nav_contact: 'ข้อมูลติดต่อ',
        product_h1 :'ผลิตภัณฑ์ของเรา',
        product_p1 :'เราเป็นผู้ผลิตเทปกาวใส พลาสติกแรปใส และกระดาษฉากมุม ที่มีเครื่องจักรและเทคโนโลยีในการผลิตที่ทันสมัย เน้นการผลิตสินค้าที่มีคุณภาพสูง มีการตรวจสอบคุณภาพของสินค้าในทุกขั้นตอน เป็นบริษัทที่มีประสบการณ์ในการผลิตและส่งออกไปต่างประเทศ ด้วยทีมช่างมืออาชีพและวัตถุดิบคุณภาพ พร้อมระบบขนส่งที่รวดเร็วและปลอดภัย ทางบริษัทยินดีอย่างยิ่งที่จะผลิตสินค้าที่มีคุณภาพให้ ลูกค้าทุกท่าน',
        product_p2 :'กระดาาฉากมุม',
        product_p3 :'พลาสติกแรป',
        product_p4 :'เทปกาว',
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
        product_h1 :'Our products',
        product_p1 :'We are a manufacturer of clear adhesive tape, clear plastic wrap and corner paper. that has modern machinery and technology in production Focus on producing high quality products. Product quality is checked at every step. It is a company with experience in producing and exporting abroad. With a team of professional technicians and quality raw materials With a fast and safe transportation system. The company is very pleased to produce quality products. All customers',
        product_p2 :'Rectangular board',
        product_p3 :'Plastic wrap',
        product_p4 :'adhesive tape',
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
        product_h1 :'产品',
        product_p1 :'我们是透明胶带、透明保鲜膜和护角纸的制造商。拥有现代化的生产机械和技术，专注于生产高质量的产品。产品质量在每一个步骤都经过检查。这是一家拥有生产和出口海外经验的公司。拥有一支专业技术人员队伍和优质原材料，拥有快速安全的运输系统。公司非常乐意生产优质的产品。所有客户',
        product_p2 :'矩形板',
        product_p3 :'保鲜膜',
        product_p4 :'胶带',
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
