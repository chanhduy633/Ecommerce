const products = [
    { 
        id:"products1",
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Đồ gia dụng & Bếp',
            longTitle: 'Ấm đun siêu tốc Pigeon FAVOURITE (1.5 L, Bạc, Đen)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'Chiếc ấm đun nước điện này của Pigeon sẽ sớm trở thành người bạn đồng hành tốt nhất của du khách, vị cứu tinh của sinh viên ký túc xá và là câu trả lời cho mọi cơn thèm ăn lúc nửa đêm. Với thiết bị tiện dụng này, bạn có thể đun sôi nước và sử dụng để làm mì ăn liền, súp gói, cà phê và trà xanh.',
        discount: 'Giảm thêm 10%',
        tagline: 'Ưu đãi trong ngày' 
    },
    { 
        id:"products2",
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Máy làm bánh mì Sandwich',
            longTitle: 'Máy nướng bánh mì Sandwich Flipkart SmartBuy Grill 01 (Đen)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'Máy nướng bánh mì sandwich chống dính này rất dễ sử dụng và tiện lợi. Giữ trực tiếp trên lửa để làm bánh mì nướng ngon và bánh mì nướng kẹp. Được thiết kế đặc biệt để đáp ứng nhu cầu của bạn, máy làm bánh mì sandwich giúp mọi việc bạn làm trở nên đơn giản, thông minh và tốt hơn.',
        discount: 'Từ 99+5% Off',
        tagline: 'Prestige, Nova & hơn thế nữa'
    },
    { 
         id:"products3",
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Dụng cụ tập thể dục',
            longTitle: 'AJRO DEAL Ống tập kháng lực đơn có thể điều chỉnh mới (Nhiều màu) Ống tập kháng lực (Nhiều màu)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'Sản phẩm độc đáo này có thể làm săn chắc cơ lưng, giảm mỡ bụng, cải thiện lưu thông máu và cải thiện tư thế cơ thể của bạn. Nó làm tăng sức chịu đựng, năng lượng và sức sống của cơ thể. Sức cản đàn hồi của dây tập cao su có thể được sử dụng để tập luyện và vận động theo bất kỳ cách nào bạn muốn, tùy theo nhu cầu thể chất của bạn.',
        discount: 'Giảm tới 70%',
        tagline: 'Ưu đãi trong ngày'
    },
    { 
         id:"products4",
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
         title: {
            shortTitle: 'Đồng hồ thông minh',
            longTitle: 'Đồng hồ thông minh Molife Sense 500 (Dây đen, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'Molife Sense 500, một chiếc đồng hồ thông minh tuyệt vời với màn hình lớn đẹp mắt. Chào mừng đến với màn hình vô cực 1.7 inch với các cạnh cong 2.5D. Nhờ kết nối Bluetooth 5.0 liền mạch, bạn sẽ không phải chờ đợi. Thay đổi trang phục của bạn mỗi ngày với dây đeo có thể thay đổi. Một chút màu sắc mỗi ngày xua tan sự nhàm chán.',
        discount: 'Mua ngay',
        tagline: 'Bán chạy nhất'
    },
    { 
         id:"products5",
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Máy cắt tóc, Máy sấy & hơn thế nữa',
            longTitle: 'Máy sấy tóc Nova Professional NHP 8220 (1800 W, Nhiều màu)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'Từ ₹499', 
        tagline: 'Kubra, Nova & nhiều hơn nữa' 
    }
];

module.exports = products;