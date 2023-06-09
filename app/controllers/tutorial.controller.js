const db = require("../models");
const Improvement = db.improvements;

// // Create and Save a new Improvement
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.title) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

//   // Create a Improvement
//   const improvement = new Improvement({
//     title: req.body.title,
//     description: req.body.description,
//     published: req.body.published ? req.body.published : false
//   });

//   // Save Improvement in the database
//   improvement
//     .save(improvement)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Improvement."
//       });
//     });
// };

// // Retrieve all Improvements from the database.
// exports.findAll = (req, res) => {
//   const title = req.query.title;
//   var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

//   Improvement.find(condition)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving improvements."
//       });
//     });
// };

// // Find a single Improvement with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Improvement.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Improvement with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Improvement with id=" + id });
//     });
// };

// // Update a Improvement by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Improvement.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Improvement with id=${id}. Maybe Improvement was not found!`
//         });
//       } else res.send({ message: "Improvement was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Improvement with id=" + id
//       });
//     });
// };

// // Delete a Improvement with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Improvement.findByIdAndRemove(id, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Improvement with id=${id}. Maybe Improvement was not found!`
//         });
//       } else {
//         res.send({
//           message: "Improvement was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Improvement with id=" + id
//       });
//     });
// };

// // Delete all Improvements from the database.
// exports.deleteAll = (req, res) => {
//   Improvement.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Improvements were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all improvements."
//       });
//     });
// };

// // Find all published Improvements
// exports.findAllPublished = (req, res) => {
//   Improvement.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving improvements."
//       });
//     });
// };

// Create and Save a new Improvement
exports.create = (req, res) => {
  // Retrieve the request body data
  const {
    parentImprovement,
    improvementTitle,
    due,
    description,
    primaryBenefitType,
    service,
    serviceOption,
    impactedApplication,
    impactedBusiness,
    impactedGOC,
    impactedRegion,
    stage,
    status,
    statusNote,
    owner,
    improvementCategory,
    automationTechnology,
    requestedAmount,
    committedAmount,
    spentAmount,
    secondaryOwner,
    vendor,
    baselineValue,
    expectedImprovement,
    actualImprovement,
    projectedCurrentYearIncementalCost,
    projectedOngoingAnnualCost,
    projectedCurrentYearTicketsAutomated,
    projectedAnnualTicketsAutomated,
    projectedCurrentYearTicketsEliminated,
    projectedAnnualTicketsEliminated,
    projectedCurrentYearEffortHoursSaved,
    projectedAnnualEffortHoursSaved,
    projectedCurrentYearP1P2TicketsEliminated,
    projectedAnnualP1P2TicketsEliminated,
    otherCurrentYearCostSavings,
    otherAnnualYearCostSavings,
  } = req.body;

  // Create a new Improvement document
  const improvement = new Improvement({
    parentImprovement,
    improvementTitle,
    due,
    description,
    primaryBenefitType,
    service,
    serviceOption,
    impactedApplication,
    impactedBusiness,
    impactedGOC,
    impactedRegion,
    stage,
    status,
    statusNote,
    owner,
    improvementCategory,
    automationTechnology,
    requestedAmount,
    committedAmount,
    spentAmount,
    secondaryOwner,
    vendor,
    baselineValue,
    expectedImprovement,
    actualImprovement,
    projectedCurrentYearIncementalCost,
    projectedOngoingAnnualCost,
    projectedCurrentYearTicketsAutomated,
    projectedAnnualTicketsAutomated,
    projectedCurrentYearTicketsEliminated,
    projectedAnnualTicketsEliminated,
    projectedCurrentYearEffortHoursSaved,
    projectedAnnualEffortHoursSaved,
    projectedCurrentYearP1P2TicketsEliminated,
    projectedAnnualP1P2TicketsEliminated,
    otherCurrentYearCostSavings,
    otherAnnualYearCostSavings,
  });

  // Save the Improvement document in the database
  improvement
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Improvement.",
      });
    });
};

// Retrieve all Improvements from the database.
exports.findAll = (req, res) => {
  const status = req.query.status;
  var condition = status
    ? { status: { $regex: new RegExp(status), $options: "i" } }
    : {};

  Improvement.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Improvements.",
      });
    });
};
//find by title
exports.findAllByTitle = (req, res) => {
  const improvementTitle = req.query.improvementTitle;
  var condition = improvementTitle
    ? { improvementTitle: { $regex: new RegExp(improvementTitle), $options: "i" } }
    : {};

  Improvement.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Improvements.",
      });
    });
};

// Find a single Improvement with a given id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Improvement.findById(id)
    .then((improvement) => {
      if (!improvement) {
        res.status(404).send({ message: "Improvement not found" });
      } else {
        res.send(improvement);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Improvement with id=" + id });
    });
};

// Update an Improvement by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Improvement.findByIdAndUpdate(id, req.body, { new: true })
    .then((improvement) => {
      if (!improvement) {
        res.status(404).send({ message: "Improvement not found" });
      } else {
        res.send({ message: "Improvement was updated successfully." });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error updating Improvement with id=" + id });
    });
};

// Delete an Improvement with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Improvement.findByIdAndRemove(id)
    .then((improvement) => {
      if (!improvement) {
        res.status(404).send({ message: "Improvement not found" });
      } else {
        res.send({ message: "Improvement deleted successfully" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error deleting Improvement with id=" + id });
    });
};

// Delete all Improvements from the database.

// Find all published Improvements
