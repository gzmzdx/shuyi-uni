import request from "./requestConfig.js"

export {home} from "./mock"

//根据图书id获取图书相关信息
export const getBookByBookId = (params)=>request.get("http://localhost:8000/api/demo/info",params)
//借书
export const realBook = (params)=>request.get("http://localhost:8000/api/demo/borrow",params)
