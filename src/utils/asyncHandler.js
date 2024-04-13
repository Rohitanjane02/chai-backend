const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        //here catch means reject
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}



export {asyncHandler}

//const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}

//higher order function->A function who can access function as parameter and can return as well, like variables
//1. Using try catch
// const asyncHandler = (fn) => async (req, res, next) =>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
        // we are sending the status with json response
//         res.status(err.codd || 500).json({
//             succcess: false,
//             message: err.message
//         })
//     }
// }