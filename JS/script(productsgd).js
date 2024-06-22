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
        // Products
        products_header: 'ผลิตภัณฑ์',
        products_h1: 'ผลิตภัณฑ์ของเรา',
        products_p1: 'เราเป็นผู้ผลิตพาเลทไม้คุณภาพมาตรฐาน พาเลทไม้ที่ผลิตจากเรามีความแข็งแรง ทนทาน อายุการใช้งานยาวนาน วัตถุดิบไม้แปรรูป ไม้เบญจพรรณ ไม้MDF ไม้พาเลทสำเร็จรูป ตัดตามขนาด พร้อมจำหน่าย หรือตัดตามขนาดที่ลูกค้าต้องการ นอกจากไม้พาเลทยังมีสินค้าอื่นๆ เช่น สก็อตเทป แรปพลาสติกใส เพื่อตอบสนองความต้องการของลูกค้าที่หลากหลายอีกด้วย',
        products_p2: 'ทีมงานมากด้วยประสบการณ์กว่า 10 ปี พร้อมที่จะให้บริการคุณด้วยความเต็มใจ หากมีข้อสงสัย หรือคำถามใดๆ เรายินดีจะตอบทุกคำถามให้กับคุรลูกค้า',        
        products_h2: 'ผลิตภัณฑ์ของเรา',        
        products_h3: 'พาเลทไม้ขาเว้า',        
        products_h4: 'พาเลทไม้ MDF',        
        products_h5: 'กล่องไม้',        
        products_h6: 'พาเลทไม้อัด',        
        products_h7: 'พาเลทขาเต๋า',        
        products_h8: 'กระดาษฉากมุม',        
        products_h9: 'สก็อตเทป',        
        products_h10: 'พลาสติกแรป',              

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
        // Products
        products_header: 'Products',
        products_h1: 'Our products',
        products_p1: 'We are a manufacturer of standard quality wooden pallets. The wooden pallets produced by us are strong, durable, and have a long service life. Raw materials for processed wood, mixed deciduous wood, MDF, ready-made pallet wood, cut to size, ready for sale or cut to the size the customer wants. In addition to wooden pallets, there are also other products such as Scotch tape and clear plastic wrap to meet the needs of various customers.',
        products_p2: 'A team with over 10 years of experience is ready to serve you wholeheartedly. If you have any doubts or questions, we are happy to answer all questions for you, customers.',
        products_h2: 'Our products',
        products_h3: 'Wooden pallet with concave legs',
        products_h4: 'MDF wooden pallet',
        products_h5: 'Wooden Box',
        products_h6: 'Plywood pallet',
        products_h7: 'Dice leg pallet',
        products_h8: 'Corner Paper',
        products_h9: 'Scotch Tape',
        products_h10: 'Plastic Wrap',
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
        // Products
        products_header: '产品',
        products_h1: '我们的产品',
        products_p1: '我们是标准质量木托盘的制造商。我们生产的木托盘坚固耐用，使用寿命长。原材料为加工木材、混合落叶木、MDF、现成的托盘木材、按尺寸切割、准备出售或切割成客户想要的尺寸。除了木托盘外，还有其他产品，如透明胶带和透明塑料包装，以满足各种客户的需求。',
        products_p2: '一支拥有 10 多年经验的团队随时准备竭诚为您服务。如果您有任何疑问或问题，我们很乐意为您解答所有问题，客户。',
        products_h2: '我们的产品',
        products_h3: '带凹腿的木托盘',
        products_h4: 'MDF 木托盘',
        products_h5: '木箱',
        products_h6: '胶合板托盘',
        products_h7: '骰子腿托盘',
        products_h8: '角纸',
        products_h9: '透明胶带',
        products_h10: '塑料包装',

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
