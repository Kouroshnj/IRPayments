import { Drivers } from "../src";

const myZarinpal = new Drivers.ZarinpalDriver("fab2e3b5-4f09-49b2-adf5-3e53c01b024d", false);
// (async () => {
//   const s = await myZarinpal.createPayment({
//     amount: (10000).toString(),
//     callback_url: "http://localhost:3000/callback",
//     orderId: "123",
//     description: "A Customer paying",
//   });
//   //   const x = await myIdPay.verifyPayment({
//   //     amount: (10000).toString(),
//   //     orderId: "123",
//   //     authorityId: s.authorityId,
//   //   });

//   console.log(s);
// })();

(async () => {
  const s = await myZarinpal.feeCalculation({
    amount: 105527,
    currency: "IRR",
  });
  console.log(s);
  //   const x = await myIdPay.verifyPayment({
  //     amount: (10000).toString(),
  //     orderId: "123",
  //     authorityId: s.authorityId,
  //   });

  console.log(s);
})();
