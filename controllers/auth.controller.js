export const registerController = (req, res, next) => {
    try {
        res.status(200).json({success: false, msg: "suceess"});
    } catch (error) {
        res.status(400).json({success: false, msg: error.message});
    }
}