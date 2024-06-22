const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    })

    var swiper = new Swiper(".home-slider", {
        loop:true,
        grabCursor:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev", 
        },
      });

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
        // Home
        home_h4:'Golden Eagle Wood Products Co.,Ltd',
        home_p1:'เราเป็นผู้ผลิตไม้พาเลทคุณภาพสูง ได้รับมาตรฐานสากล IPPC และมีการรับรอง ISO14001 และ ISO9001 ไม้พาเลทที่ผลิตจากเรามีความแข็งแรง ทนทาน อายุการใช้งานยาวนาน เรามีทีมงานมากด้วยประสบการณ์กว่า 10 ปี พร้อมที่จะให้บริการคุณด้วยความเต็มใจ',
        // gallery
        gallery_h1:'รูปภาพอื่นๆ',
        // products
        products_h1:'ผลิตภัณฑ์ของเรา',
        products_p1:'เราเป็นผู้ผลิตพาเลตไม้คุณภาพมาตราฐาน พาเลทไม้ที่ผลิตจากเรามีความแข็งแรง ทนทาน อายุการใช้งานยาวนาน วัตถุดิบไม้แปรรูป ไม้เบญจพรรณ ไม้MDF ไม้พาเลทสำเร็จรูปตัดตามขนาด พร้อมจำหน่าย หรือตัดตามขนาดที่ลูกค้าต้องการ นอกจากไม้พาเลทยังมีสินค้าอื่นๆ เช่น สก็อตเทป แรปพลาสติกใส เพื่อตอบสนองความต้องการของลูกค้าที่หลากหลายอีกด้วย',
        products_button:'เพิ่มเติม',
        products_h2:'พาเลทไม้ขาเว้า',
        products_h3:'พาเลทไม้ MDF',
        products_h4:'กล่องไม้',
        products_h5:'พาเลทไม้อัด',
        products_h6:'พาเลทขาเต๋า',
        products_h7:' กระดาษฉากมุม',
        products_h8:' สก็อตเทป',
        products_h9:'พลาสติกแรป',
        // about
        about_h1:'เกี่ยวกับเรา',
        about_h2:'Golden Eagle Wood Products',
        about_p1:'บริษัท โกลเด้น อีเกิ้ล วู๊ด โปรดักส์ จำกัด เป็นผู้ผลิตไม้พาเลทคุณภาพสูง ที่ได้รับมาตรฐานสากล IPPC และมีใบรับรอง ISO14001 และ ISO9001 เป็นบริษัทที่มีประสบการณ์ในการสร้างไม้พาเลทและส่งออกไปต่างประเทศ ด้วยทีมช่างมืออาชีพและวัตถุดิบคุณภาพ โดยใช้ไม้คุณภาพดีจากท้องถิ่น ที่ผ่านการตรวจสอบคุณภาพอย่างเข้มงวดในทุกขั้นตอน พร้อมระบบขนส่งที่รวดเร็วและปลอดภัย',
        about_button:'เพิ่มเติม',
        //news
        news_h1:'ข่าวสารจากท่านประธาน',
        news_p1:'บริษัทโกลเด้น อีเกิ้ล วู๊ด โปรดักส์ จำกัด เป็นผู้ผลิตไม้พาเลทคุณภาพสูง ได้รับมาตรฐานสากล IPPC และมีการรองรับ ISO14001 และ ISO 9001 เป็นบริษัทที่มีประสบการณ์ในการสร้างไม้พาเลทและส่งออกไปต่างประเทศ ด้วยพนักงานมืออาชีพและวัตถุดิบคุณภาพ โดยใช้ไม้คุณภาพดีจากท้องถิ่น ที่ผ่านการตรวจสอบคุณภาพอย่างเข้มงวดในทุกขั้นตอน',
        news_button:'เพิ่มเติม',
        // map
        map_h1:'ที่ตั้งบริษัท',
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
        // Home
        home_h4:'Golden Eagle Wood Products Co.,Ltd',
        home_p1:'We are a manufacturer of high quality wooden pallets. It has received IPPC international standards and has ISO14001 and ISO9001 certification. The wooden pallets produced from us are strong, durable, and have a long service life. We have a team with over 10 years of experience, ready to serve you with all our heart',
        // gallery
        gallery_h1:'Other Pictures',
        // Products
        products_h1:'Our products',
        products_p1:'We are a manufacturer of standard quality wooden pallets. The wooden pallets produced by us are strong, durable, and have a long service life. Raw materials for processed wood, mixed deciduous wood, MDF, ready-made pallet wood, cut to size, ready for sale or cut to the size the customer desires. In addition to wooden pallets, there are also other products such as Scotch tape and clear plastic wrap to meet the needs of various customers.',
        products_button:'More',
        products_h2:'Wooden pallets with concave legs',
        products_h3:'MDF wooden pallets',
        products_h4:'Wooden box',
        products_h5:'Plywood pallets',
        products_h6:'Dice leg pallet',
        products_h7:'Rectangular Paper',
        products_h8:'Scotch tape',
        products_h9:'Plastic Wrap',
        // about
        about_h1:'About us',
        about_h2:'Golden Eagle Wood Products',
        about_p1:'Golden Eagle Wood Products Company Limited is a manufacturer of high quality wood pallets. That has received IPPC international standards and has ISO14001 and ISO9001 certificates. It is a company with experience in building wooden pallets and exporting them abroad. With a team of professional technicians and quality raw materials Using good quality wood from local areas. that passes strict quality checks in every step with a fast and safe transportation system',
        about_button:'More',
        // news
        news_h1:'News from the President',
        news_p1:'Golden Eagle Wood Products Company Limited is a manufacturer of high quality wood pallets. It has received IPPC international standards and is supported by ISO14001 and ISO 9001. It is a company with experience in building wooden pallets and exporting them overseas. With professional staff and quality ingredients Using good quality wood from local areas. that passes strict quality checks in every step',
        news_button:'More',
        // map
        map_h1:'Company location',
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
        // Home
        home_h4:'Golden Eagle Wood Products Co.,Ltd',
        home_p1:'我们是一家高品质木托盘制造商。我们生产的木托盘符合IPPC国际标准，并通过ISO14001和ISO9001认证，坚固耐用，使用寿命长。我们拥有一支拥有10年以上经验的团队，随时准备竭诚为您服务。',
        // gallery
        gallery_h1:'其他图片',
        // products
        products_h1:'我们的产品',
        products_p1:'我们是标准质量木托盘的制造商。我们生产的木托盘坚固耐用，使用寿命长。原材料为加工木材、混合落叶木、MDF、现成的托盘木材、按尺寸切割、准备出售或切割成客户所需的尺寸。除了木托盘外，还有其他产品，如透明胶带和透明塑料包装，以满足各种客户的需求。',
        products_button:'更多',
        products_h2:'凹腿木托盘',
        products_h3:'MDF 木托盘',
        products_h4:'木箱',
        products_h5:'胶合板托盘',
        products_h6:'骰子腿托盘',
        products_h7:'矩形纸',
        products_h8:'透明胶带',
        products_h9:'塑料包装',
        // about
        about_h1:'关于我们',
        about_h2:'金鹰木制品',
        about_p1:'金鹰木制品有限公司是一家高品质木质托盘制造商。该公司已获得 IPPC 国际标准，并拥有 ISO14001 和 ISO9001 证书。该公司在建造木质托盘并将其出口到国外方面拥有丰富的经验。该公司拥有一支专业技术人员团队和优质原材料，采用来自当地的优质木材。通过快速安全的运输系统，每一步都经过严格的质量检查',
        about_button:'更多',
        // news
        news_h1:'总裁新闻',
        news_p1:'金鹰木制品有限公司是一家高品质木质托盘制造商。它已获得IPPC国际标准，并得到ISO14001和ISO 9001的支持。这是一家在建造木质托盘并将其出口到海外方面拥有丰富经验的公司。拥有专业的员工和优质的原料，使用来自当地的优质木材。每一步都经过严格的质量检查',
        news_button:'更多',
        // map
        map_h1:'公司位置',
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
