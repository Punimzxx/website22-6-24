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
        // about
        about_header:'เกี่ยวกับบริษัท',
        about_h1:'เกี่ยวกับบริษัท',
        about_p1:'บริษัท โกลเด้น อีเกิ้ล วู๊ด โปรดักส์ จำกัด เป็นผู้ผลิตไม้พาเลทคุณภาพสูง ที่ได้รับมาตรฐานสากล IPPC และมีใบรับรอง ISO14001 และ ISO9001 เป็นบริษัทที่มีประสบการณ์ในการสร้างไม้พาเลทและส่งออกไปต่างประเทศ ด้วยทีมช่างมืออาชีพและวัตถุดิบคุณภาพ โดยใช้ไม้คุณภาพดีจากท้องถิ่น ที่ผ่านการตรวจสอบคุณภาพอย่างเข้มงวดในทุกขั้นตอน พร้อมระบบขนส่งที่รวดเร็วและปลอดภัย ทางบริษัทยินดีอย่างยิ่งที่จะออกแบบไม้พาเลทที่ตรงกับความต้องการของลูกค้าทุกท่าน นอกจากไม้พาเลทยังมีสินค้าอื่นๆ เช่น สก็อตเทป แรปพลาสติกใส กระดาษฉากมุม และทางบริษัทมีระบบขนส่งโลจิสติกส์ เพื่อตอบสนองความต้องการของลูกค้าที่หลากหลายอีกด้วย',
        about_p2:'ปีก่อตั้ง : 26 มีนาคม 2563',
        about_p3:'ทุนจดทะเบียน : 10,000,000 บาท',
        about_p4:'ยอดขาย : ไม่เปิดเผย',
        about_p5:'ผลิตภัณฑ์หลัก : ไม้แปรรูป ไม้พาเลท เทปกาว กระดาษฉากมุม ไม้อัดแผ่น แรปพลาสติกใส',
        about_p6:'จำนวนพนักงาน : 49 คน ณ เดือนมิถุนายน ปี 2567',
        about_p7:'พื้นที่ทั้งหมด : 4,012 ตารางเมตร',
        about_p8:'พื้นที่อาคาร : 1,300 ตารางเมตร',
        about_p9:'ที่อยู่สำนักงานใหญ่ : 293 หมู่ที่ 12 ตำบลหัวหว้า อำเภอศรีมหาโพธิ์ จังหวัดปราจีนบุรี 25140',
        // policy
        policy_header:'นโยบายบริษัท',
        policy_h1:'ผลิตสินค้าด้วยมาตรฐานที่มีคุณภาพ',
        policy_h2:'ส่งมอบงานตรงเวลา',
        policy_h3:'สร้างความพึงพอใจให้กับลูกค้า',
        policy_h4:'พัฒนาอย่างยั่งยืน',
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
        // about
        about_header:'About The Company',
        about_h1:'About us',
        about_header:'About the company',
        about_h1:'About the company',
        about_p1:'Golden Eagle Wood Products Company Limited is a manufacturer of high quality wood pallets. That has received IPPC international standards and has ISO14001 and ISO9001 certificates. It is a company with experience in building wooden pallets and exporting them abroad. With a team of professional technicians and quality raw materials Using good quality wood from local areas. that passes strict quality checks in every step With a fast and safe transportation system. The company is very pleased to design wooden pallets that meet the needs of every customer. In addition to wooden pallets, there are other products such as Scotch tape, clear plastic wrap, angled paper, and the company has a logistics transportation system. In order to meet the needs of various customers as well',
        about_p2:'Year of founding: 26 March 2020',
        about_p3:'Registered capital : 10,000,000 baht',
        about_p4:'Sales: not disclosed',
        about_p5:'Main products: processed wood, pallet wood, adhesive tape, corner paper, plywood sheets, clear plastic wrap',
        about_p6:'Number of employees: 49 people as of June 2024',
        about_p7:'Total area: 4,012 square meters',
        about_p8:'Building area: 1,300 square meters',
        about_p9:'Head office address: 293 Village No. 12, Hua Wa Subdistrict, Si Maha Phot District. Prachinburi Province 25140',
        // policy
        policy_header:'Company Policy',
        policy_h1:'Produce products with quality standards',
        policy_h2:'Deliver work on time',
        policy_h3:'Create customer satisfaction',
        policy_h4:'sustainable development',
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
        // about
        about_header:'关于公司',
        about_h1:'关于我们',
        about_header:'About the company',
        about_header:'关于公司',
        about_h1:'关于公司',
        about_p1:'金鹰木制品有限公司是一家高品质木托盘制造商。已获得IPPC国际标准，并拥有ISO14001和ISO9001证书。这是一家在建造木托盘并将其出口到国外方面拥有丰富经验的公司。拥有一支专业技术人员团队和优质原材料，使用来自当地的优质木材。每一步都经过严格的质量检查，拥有快速安全的运输系统。该公司非常乐意设计出满足每一位客户需求的木托盘。除了木托盘外，还有其他产品，例如透明胶带，透明保鲜膜，斜角纸，并且公司拥有物流运输系统。为了满足各种客户的需求',
        about_p2:'成立年份：2020 年 3 月 26 日',
        about_p3:'注册资本：10,000,000 泰铢',
        about_p4:'销售额：未披露',
        about_p5:'主要产品：加工木材、托盘木材、胶带、护角纸、胶合板、透明塑料包装',
        about_p6:'员工人数：截至 2024 年 6 月为 49 人',
        about_p7:'总面积：4,012 平方米',
        about_p8:'建筑面积：1,300 平方米',
        about_p9:'总部地址：293 村第 12 号，Si Maha Phot 县 Hua Wa 镇。巴真府 25140',
        // policy
        policy_header:'公司政策',
        policy_h1:'生产符合质量标准的产品',
        policy_h2:'按时交付工作',
        policy_h3:'创造客户满意度',
        policy_h4:'可持续发展',
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
