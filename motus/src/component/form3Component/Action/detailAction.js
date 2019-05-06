export const DetailAction = (data) => {
    console.log("Detail Action fired")
    return{
        type : "onChange",
        data
    }
}