
    function CalculateSales()
    {
  let getCostPrice=document.querySelector('#costprice');
  let getSalesTax=document.querySelector('#salestax');
  let realCostPrice=Number(getCostPrice.value);
  let realSalesTax=Number(getSalesTax.value);
 let totalSalesTax=(realCostPrice*(realSalesTax/100)).toFixed(2);
 let totalCostPrice=parseFloat(realCostPrice)+parseFloat(totalSalesTax);
 let totalCostPrice2=totalCostPrice.toFixed(2);
 let totalAmount=document.getElementById('totalCostPrice').value=totalCostPrice2;
 let totalSalesTax2=document.getElementById('totalSalesTax1').value=totalSalesTax;
}
  