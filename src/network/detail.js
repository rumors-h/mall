import {request} from './request'
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {iid}       //注意这里是对象
  }) 

}

export function recommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.newPrice = itemInfo.price
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realprice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.goods = shopInfo.cGoods
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
  }
}

export class GoodsParams{
  constructor(info,rule){
    this.info = info.set
  }
}