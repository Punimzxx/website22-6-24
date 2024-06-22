const translations = {
    th: {
        nav_home: 'หน้าหลัก',
        nav_about: 'เกี่ยวกับ',
        nav_golden: 'บริษัทในเครือ',
        nav_products: 'ผลิตภัณฑ์',
        nav_logis: 'การขนส่ง',
        nav_contact: 'ข้อมูลติดต่อ',
        logis_h1:'บริการเหมาเที่ยวรถขนส่งสินค้า',
        logis_p1:'เราให้บริการเหมาเที่ยวรถขนส่งสินค้า ด้วยรถ 4 ล้อ 6 ล้อ สำหรับลูกค้าที่อาจมีรถขนส่งอยู่แล้วแต่ปริมาณไม่เพียงพอ สามารถใช้บริการทางเราส่งสินค้าเพื่อตอบสนองความต้องการของลูกค้าได้อย่างทันเวลา สัญญาระยะยาว เราให้บริการขนส่งสินค้าด้วยสัญญาระยะยาว โดยลูกค้าจะได้รับการบริการอย่างมืออาชีพ รวมถึงการให้คำปรึกษาวางแผนการขนส่งสินค้าเพื่อประหยัดเวลา และต้นทุนอย่างสูงสุด และยังสามารถปรับเปลี่ยนรูปแบบรถให้เหมาะกับการบรรทุกสินค้าของลูกค้าได้เช่นกัน',
        logis_p2:'รถบรรทุก 4 ล้อ',
        logis_p3:'รถบรรทุก 6 ล้อ ตู้ทึบ 10 บาน',
        logis_p4:'รถบรรทุก 6 ล้อ ตู้ทึบ 10 บาน(พ่วง)',
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
        logis_h1:'Freight transport charter service',
        logis_p1:'We provide transportation services with 4-wheel and 6-wheel vehicles for customers who may already have transportation vehicles but the quantity is insufficient. You can use our service to deliver products to meet customer needs in a timely manner. Long-term contracts We provide transportation services with long-term contracts. The customers will receive professional service. Including consulting on product transport planning to save time. and the highest cost and can also modify the car model to suit the customers cargo as well',
        logis_p2:'4 wheel truck',
        logis_p3:'6-wheel truck, 10-door solid cabinet',
        logis_p4:'6-wheel truck, 10-door solid cabinet (trailer)',
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
        logis_h1:'货运包车服务',
        logis_p1:'我们为已有运输车辆但数量不足的客户提供四轮和六轮车辆的运输服务。您可以使用我们的服务及时交付产品以满足客户需求。长期合同我们提供长期合同的运输服务。客户将获得专业的服务。包括咨询产品运输计划以节省时间和成本，还可以修改车型以适合客户的货物',
        logis_p2:'4 轮卡车',
        logis_p3:'6 轮卡车，10 门实心柜',
        logis_p4:'6 轮卡车，10 门实心柜（拖车）',
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
