const contestModel = require("../../models/contestModel");

const deleteContest = async (req, res) => {
  try {
    const contestId = req.params.id;  // Get the contest ID from the request params

    // Use deleteOne to delete the contest by its _id
    const result = await contestModel.deleteOne({ _id: contestId });

    // If no contest was deleted, return a 404 error
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: 'Contest not found',
        success: false,
        error: true
      });
    }

    // Success response if the contest was deleted
    res.json({
      message: 'Contest deleted successfully',
      success: true,
      error: false
    });

  } catch (err) {
    // Catch and return any server errors
    res.status(500).json({
      message: 'Failed to delete contest',
      success: false,
      error: true,
      details: err.message  // Include error details for debugging
    });
  }
};

module.exports = deleteContest;
