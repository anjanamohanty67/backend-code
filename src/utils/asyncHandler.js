//method-2(promise)
const asyncHandler = (requestHandler) =>{
   return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}
export {asyncHandler}
//const asyncHandler = () => {} // arrow function
//const asyncHandler = (func) => () => {}//Higher-order function
//const asyncHandler = (func)=> async ()=>{}//Higher-order async function
//method-1(error handling)
//const asyncHandler=(fn)=> async(req,res,next)=>{
//    try{
//        await fn(req,res,next)
//   }catch (error){
//      res.status (err.code||500).json({
//            success: false,
//            message: err.message
//        })
//    }
//}
