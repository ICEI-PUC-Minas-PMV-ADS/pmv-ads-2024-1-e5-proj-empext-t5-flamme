function transformPricePTBR(price: number) {
    return price.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
    });
  }
  
  export {transformPricePTBR}