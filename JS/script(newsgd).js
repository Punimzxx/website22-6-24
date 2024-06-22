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
        // news
        news_header:'ข่าวสาร',
        testimonial_h1:'ข่าวสารจากท่านประธาน',
        testimonial_p1:'บริษัทโกลเด้น อีเกิ้ล วู๊ด โปรดักส์ จำกัด เป็นผู้ผลิตไม้พาเลทคุณภาพสูง ได้รับมาตรฐานสากล IPPC และมีการรองรับ ISO14001 และ ISO 9001 เป็นบริษัทที่มีประสบการณ์ในการสร้างไม้พาเลทและส่งออกไปต่างประเทศ ด้วยพนักงานมืออาชีพและวัตถุดิบคุณภาพ โดยใช้ไม้คุณภาพดีจากท้องถิ่น ที่ผ่านการตรวจสอบคุณภาพอย่างเข้มงวดในทุกขั้นตอน พร้อมระบบขนส่งที่รวดเร็ว และปลอดภัย ทางบริษัทยินดีอย่างยิ่งที่จะออกแบบไม้พาเลท ที่ตรงกับความต้องการ ของลูกค้าทุกท่าน นอกจากไม้พาเลทยังมีสินค้าอื่นๆ เช่น สก็อตเทป แรปพลาสสติกใส เพิ่อตอบสนองความต้องการของลูกค้าที่หลากหลาย',
        news_h:'ข่าวสารทั่วไป',
        news_h1:'ข่าวที่1',
        // news_p1:'',
        // news_data1:'',
        news_h2:'ข่าวที่2',
        // news_p2:'',
        // news_data2:'',
        news_h3:'ข่าวที่3',
        // news_p3:'',
        // news_data3:'',
        
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
        // news
        news_header:'News',
        testimonial_h1:'News from the President',
        testimonial_p1:'Golden Eagle Wood Products Company Limited is a manufacturer of high quality wood pallets. It has received IPPC international standards and is supported by ISO14001 and ISO 9001. It is a company with experience in building wooden pallets and exporting them overseas. With professional staff and quality ingredients Using good quality wood from local areas. that passes strict quality checks in every step With a fast and safe transportation system, the company is very pleased to design wooden pallets. that matches your needs of every customer In addition to pallets, there are other products such as Scotch tape and clear plastic wrap. In order to meet the needs of various customers',
        news_h:'General news',
        news_h1:'News 1',
        // news_p1:'',
        // news_data1:'',
        news_h2:'News 2',
        // news_p2:'',
        // news_data2:'',
        news_h3:'News 3',
        // news_p3:'',
        // news_data3:'',
        
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
        // news
        news_header:'新闻',
        testimonial_h1:'总裁新闻',
        testimonial_p1:'金鹰木制品有限公司是一家高品质木托盘制造商。它已获得IPPC国际标准，并得到ISO14001和ISO 9001的支持。这是一家在建造木托盘并将其出口到海外方面拥有丰富经验的公司。拥有专业的员工和优质的原料。使用来自当地的优质木材。每一步都经过严格的质量检查。凭借快速安全的运输系统，公司非常乐意设计符合您每个客户需求的木托盘。除了托盘外，还有其他产品，例如透明胶带和透明塑料包装。为了满足各种客户的需求',
        news_h:'一般新闻',
        news_h1:'新闻 1',
        // news_p1:'',
        // news_data1:'',
        news_h2:'新闻 2',
        // news_p2:'',
        // news_data2:'',
        news_h3:'新闻 3',
        // news_p3:'',
        // news_data3:'',

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
