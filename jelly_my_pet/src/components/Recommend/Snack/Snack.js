import React from 'react';
import './Snack.css';
import catTower from 'image/catTower.jpg';
import dogChew from 'image/dogChew.jpg';
import dogFood from 'image/dogFood.jpg';
import dogLeash from 'image/dogLeash.jpg';


const Snack = () => {

    return (
      <>
          <div className="sn-main">
            <div className="sn-snacklist">
              <div className="sn-snack">
                <a href="https://shopping.naver.com/pet/stores/100045400/products/2161379417?NaPm=ct%3Dk1mzk9eo%7Cci%3Dc9bf521616737d6dd36f08f0a49d99b5b77f2f1c%7Ctr%3Dslsl%7Csn%3D184257%7Cic%3D%7Chk%3Dd5730e28f228eef2952f374238731a2b341bb569" target="_blank">
                  <img className="sn-snackImg" src={catTower} />
                </a>
              </div>
              <div className="sn-snack">
                <a href="https://smartstore.naver.com/paragonah/products/4509017569?NaPm=ct%3Dk1mziglc%7Cci%3D2d4d624eb43de25484ba5ce7013060c6cb141152%7Ctr%3Dslsl%7Csn%3D497355%7Cic%3D%7Chk%3D20796fe6d885f8eb0e06244ce5f81a352eca6a3b" target="_blank">
                  <img className="sn-snackImg" src={dogChew} />
                </a>
              </div>
              <div className="sn-snack">
                <a href="https://front.wemakeprice.com/product/201531494?utm_source=naver_ep&utm_medium=PRICE_af&utm_campaign=null&NaPm=ct%3Dk1mzjnsw%7Cci%3D3ed18c7943951f247b0c632c0aebae39149e372e%7Ctr%3Dslct%7Csn%3D197023%7Chk%3D1e001d00713848b862a5b4002d2a13fbbbd1a83d" target="_blank">
                  <img className="sn-snackImg" src={dogFood} />
                </a>
              </div>
              <div className="sn-snack">
                <a href="https://smartstore.naver.com/attifriend/products/2478758874?NaPm=ct%3Dk1mzkmiw%7Cci%3D3ab0fc1aa0def688d1c1314f1d08a5b391861531%7Ctr%3Dslsl%7Csn%3D509086%7Cic%3D%7Chk%3D64a5ebdaed333bdd1cb79d39987a131da9bd61f7" target="_blank">
                  <img className="sn-snackImg" src={dogLeash} />
                </a>
              </div>
            </div>
          </div>
      </>
    )
}

export default Snack;