export function debounce(func, delay) { //防抖函数
  let timer = null
  return function (...args) {      //执行func时的参数
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
      //func()
    }, delay)

  }
}
