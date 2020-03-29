import {request} from "./request"
export function GetCategory() {
  return request({
    url: '/category'
  })
}

export function GetSubCategory(maitKey) {
  return request({
    url: `/subcategory?maitKey=${maitKey}`
  })
}
