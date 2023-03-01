let productsDB = [
  {
    id: 1,
    title: "Verdusa Dress",
    description:
      "Verdusa Women's Elegant Ribbed Knit Bell Sleeve Fit and Flare Midi Dress.",
    size: "Large",
    imgUrl: "imgs/51jcUqRNa2L._MCnd_AC_UL320_.jpg",
    qty: 1,
    isMe: "N",
  },
  {
    id: 2,
    title: "ANRABESS Dress",
    description:
      "ANRABESS Women's Deep V Neck Short Sleeve Long Dresses Pleated High Waist Slit Club Party Evening Maxi Dress",
    size: "Large",
    imgUrl: "imgs/61qgweCmo4L._MCnd_AC_UL320_.jpg",
    qty: 1,
    isMe: "N",
  },
  {
    id: 3,
    title: "Bbonlinedress Dresses",
    description:
      "Bbonlinedress Women Short 1950s Retro Vintage Cocktail Party Swing Dresses",
    size: "Small",
    imgUrl: "imgs/61lLnqc6wnL._MCnd_AC_UL320_.jpg",
    qty: 1,
    isMe: "N",
  },
  {
    id: 4,
    title: "Short-Sleeve Maxi Dress",
    description: "Amazon Essentials Women's Short-Sleeve Maxi Dress",
    size: "Medium",
    imgUrl: "imgs/61GVCF3Nc0S._MCnd_AC_UL320_.jpg",
    qty: 1,
    isMe: "N",
  },
  {
    id: 5,
    title: "Romwe Dress",
    description:
      "Romwe Women's Romantic Off Shoulder Flounce Long Sleeve Wedding Ruffle Mesh Party Mini Dress",
    size: "X-Large",
    imgUrl: "imgs/71hnEWKsDvS._MCnd_AC_UL320_.jpg",
    qty: 1,
    isMe: "N",
  },
  {
    id: 6,
    title: "Adrianna Papell Dress",
    description: "Adrianna Papell Women's Matelasse Column Gown",
    size: "Small",
    imgUrl: "imgs/718ou1p+8oL._MCnd_AC_UL320_.jpg",
    qty: 1,
    isMe: "N",
  },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(productsDB));
}
