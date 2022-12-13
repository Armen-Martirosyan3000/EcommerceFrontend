//այստեղ պարունակում է սլայդի id-ի համարը, տվյալ սլայդի նկարը,սլայդի վերնագիրը, նկարագրությունը և բեքգրաունդի գույնը
import profile1 from "./image/profile/a.png";
import profile2 from "./image/profile/b.png";
import profile3 from "./image/profile/c.png";
import product1 from "./image/product/a.png";
import product2 from "./image/product/b.png";
import product3 from "./image/product/c.png";
import product4 from "./image/product/d.png";
import product5 from "./image/product/e.png";
import product6 from "./image/product/f.png";
import product7 from "./image/product/g.png";
import product8 from "./image/product/h.png";
import product9 from "./image/product/i.png";
import product10 from "./image/product/j.png";
import product11 from "./image/product/k.png";
import product12 from "./image/product/l.png";
import product13 from "./image/product/m.png";
import product14 from "./image/product/n.png";
import product15 from "./image/product/o.png";

export const sliderItems = [
    
 //https://i.ibb.co/DG69bQ4/2.png
 //https://i.pinimg.com/originals/22/60/a4/2260a4002dc249ed0c9af873a8e85a3d.jpg
 //https://i.pinimg.com/736x/43/a6/14/43a6140054640db3385ea9d737148731.jpg
 //https://thumbs.dreamstime.com/b/smiling-beautiful-woman-magenta-dress-beautiful-young-woman-magenta-dress-holding-hands-her-hair-looking-camera-150785353.jpg
   //https://media.istockphoto.com/id/1165095819/photo/happy-beautiful-woman-in-purple-dress-is-looking-up-and-shouting.jpg?s=612x612&w=0&k=20&c=sbooJc5w1XTfhzTqXVGm-qfIECIhL7dBvcAwA9MAUlM=
 //https://media.istockphoto.com/photos/beautiful-young-woman-in-blue-mini-dress-and-leather-jacket-is-black-picture-id1058060110?k=20&m=1058060110&s=170667a&w=0&h=E4m68-pMsOi2LBNHrP7QQckeULL6YLveS0JzDBjWEcQ=
  //https://media.istockphoto.com/id/474127806/es/foto/feliz-chica-en-negro-mini-vestido-rojo-y-zapatos-de-tacones.jpg?s=612x612&w=0&k=20&c=Dr2yk6PooPWFaBWw2fijCpeNpG9Pzxr9zhND1GNSgQo=
 //https://media.istockphoto.com/id/473563886/es/foto/pie-del-modelo-de-moda-en-negro-mini-vestido.jpg?s=612x612&w=0&k=20&c=H7mIugYotWPkB8zYetSb3qDbTKY032aWyGSg-_jc8Qc=
  //fcf1ed
  //https://media.istockphoto.com/photos/smiling-blong-woman-in-mini-dress-jacket-and-high-heels-picture-id873821516?k=20&m=873821516&s=170667a&w=0&h=Z85rqtFE2QrMsNCfOM4aRg9x8LX5P2hpW1lP0qI1TOs=
 //https://us.123rf.com/450wm/studioloco/studioloco1603/studioloco160300437/53757658-modelo-de-manera-hermoso-en-gafas-de-sol-caminando-en-vestido-amarillo-y-zapatos-de-tac%C3%B3n-rojo-estudio-.jpg
  //https://us.123rf.com/450wm/studioloco/studioloco1601/studioloco160100888/51481998-sonriendo-elegancia-mujer-joven-en-zapatos-de-tac%C3%B3n-rojo-y-amarillo-mini-vestido-de-pie-y-sosteniend.jpg
  //https://media.istockphoto.com/photos/elegant-young-woman-in-green-mini-dress-and-high-heels-is-standing-picture-id1093376314?b=1&k=6&m=1093376314&s=170667a&w=0&h=FWMzGlLV2ND8fm_qo6xDfnjZMRDpxh5ByvPkWbeqmfI=
  //https://media.istockphoto.com/photos/beautiful-young-woman-in-green-mini-dress-is-standing-legs-apart-and-picture-id1059573246?b=1&k=6&m=1059573246&s=170667a&w=0&h=iRC5IISx1DKHcogY1vTJHkB8kxwdraSJiyHiFRJLFlo=
 //https://media.istockphoto.com/id/1133160905/es/foto/hermosa-mujer-joven-en-vestido-verde-y-tacones-altos-est%C3%A1-de-pie-en-una-pierna-y-riendo-con.jpg?s=170667a&w=0&k=20&c=FFJdKQHQ2v9aGSCOQX8fs5KX4pDG1hqJSVmx4utkjok=
  //https://media.istockphoto.com/id/1133160905/es/foto/hermosa-mujer-joven-en-vestido-verde-y-tacones-altos-est%C3%A1-de-pie-en-una-pierna-y-riendo-con.jpg?s=170667a&w=0&k=20&c=FFJdKQHQ2v9aGSCOQX8fs5KX4pDG1hqJSVmx4utkjok=
 {
      id: 1,
      img: profile1,
      title: "AUTUMN COLLECTION",
      desc: "Shop now as the first 100 buyers will receive a 30% discount",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: profile2,
      title: "SUMMER SALE",
      desc: "Shop now as the first 100 buyers will receive a 30% discount",
      bg: "f5fafd",
    },
    {
      id: 3,
      img: profile3,
      title: "LOUNGEWEAR LOVE",
      desc: "Shop now as the first 100 buyers will receive a 30% discount",
      bg: "f5fafd",
    },
    //https://i.pinimg.com/736x/a6/f2/fc/a6f2fca78fc5a9186b1681d032b66074--costume-ideas-fifties-party.jpg
  ];

  //սա մեր հագուստների կատեգորիաներն են, սա աշխատում է Categories.js-ի և CategoryItem.js-ի համար
  export const categories = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0268/9027/2823/products/178618_163838_lesley_164212_she_schic_175288_albumofmemoriestaupe_176744_shareyourthoughts_175700_rita_8_650x.jpg?v=1636729658",
      title: "SHIRT STYLE!",
      cat:"women"
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/51/96/75/51967569c8c2f62440699c39ec4cf17a.jpg",
      title: "LOUNGEWEAR LOVE",
      cat:"sport"
    },
    {
      id: 3,
      img: "http://cdn.shopify.com/s/files/1/0289/9781/products/new-color-ultimate-denim-jacket-12543521259602_1000x_1442f4f3-1678-4cbf-9dd4-533ecfe8f265_grande.jpg?v=1644251320",
      title: "JEANS",
      cat:"jeans"
    },

  ];



  //այստեղ մեր ապրանքներն են, այս զանգվածում առկա է ապրանքի նկարը և իր id-ն
  export const popularProducts = [
    {
      id:1,
      img:product1,
    },
    {
      id:2,
      img:product2,
    },
    {
      id:3,
      img:product3,
    },
    {
      id:4,
      img:product4,
    },
    {
      id:5,
      img:product5,
    },
    {
      id:6,
      img:product6,
    },
    {
      id:7,
      img:product7,
    },
    {
      id:8,
      img:product8,
    },
    {
      id:9,
      img:product9,
    },
    {
      id:10,
      img:product10,
    },
    {
      id:11,
      img:product11,
    },
    {
      id:12,
      img:product12,
    },
    {
      id:13,
      img:product13,
    },
    {
      id:14,
      img:product14,
    },
    {
      id:15,
      img:product15,
    },
  ]