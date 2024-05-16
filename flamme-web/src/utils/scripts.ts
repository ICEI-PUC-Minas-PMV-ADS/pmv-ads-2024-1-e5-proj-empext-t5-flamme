function transformPricePTBR(price: number) {
    return "R$" + price.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
    });
  }
  
  export {transformPricePTBR}