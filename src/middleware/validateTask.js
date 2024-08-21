const validateTask = (req, res, next) => {
    const { name, status } = req.body;
  
    if (!name || !status) {
      return res.status(400).json({ 
        message: "Bad Request: Both name and status are required." 
      });
    }
  
    next(); // If validation passes, proceed to the next middleware or route handler
  };
  
module.exports = validateTask;