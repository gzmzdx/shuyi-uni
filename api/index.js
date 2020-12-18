import request from "./requestConfig.js"

export {home} from "./mock"

//根据图书id获取图书相关信息
export const getBookByBookId = (params)=>request.get("http://localhost:8000/api/demo/info",params)
//借书
export const realBook = (params)=>request.get("http://localhost:8000/api/demo/borrow",params)

//借还记录查询
export const BorrowedRecord = (params)=>request.get("http://localhost:8000/api/demo/borrowList",params)

//确认付款
export const payment = (params)=>request.get("http://localhost:8000/api/demo/pay",params)
//签收
export const signFor = (params)=>request.get("http://localhost:8000/api/demo/signFor",params)
