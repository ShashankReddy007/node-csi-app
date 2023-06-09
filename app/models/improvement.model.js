module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      parentImprovement: {
        type: String,
      },
      improvementTitle: {
        type: String,
        required: true,
      },
      due: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      primaryBenefitType: {
        type: String,
        required: true,
      },
      service: {
        type: String,
        required: true,
      },
      serviceOption: {
        type: String,
      },
      impactedApplication: String,
      impactedBusiness: String,
      impactedGOC: String,
      impactedRegion: String,
      stage: String,
      status: { type: String, required: true },
      statusNote: String,
      owner: String,
      improvementCategory: String,
      automationTechnology: String,
      requestedAmount: String,
      committedAmount: String,
      spentAmount: String,
      secondaryOwner: String,
      vendor: String,
      baselineValue: String,
      expectedImprovement: { type: String, required: true },
      actualImprovement: String,
      projectedCurrentYearIncementalCost: { type: Number, required: true },
      projectedOngoingAnnualCost: { type: Number, required: true },

      projectedCurrentYearTicketsAutomated: { type: Number, required: true },
      projectedAnnualTicketsAutomated: { type: Number, required: true },

      projectedCurrentYearTicketsEliminated: { type: Number, required: true },
      projectedAnnualTicketsEliminated: { type: Number, required: true },

      projectedCurrentYearEffortHoursSaved: { type: Number, required: true },
      projectedAnnualEffortHoursSaved: { type: Number, required: true },

      projectedCurrentYearP1P2TicketsEliminated: {
        type: Number,
        required: true,
      },
      projectedAnnualP1P2TicketsEliminated: { type: Number, required: true },

      otherCurrentYearCostSavings: { type: Number, required: true },
      otherAnnualYearCostSavings: { type: Number, required: true },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Improvement = mongoose.model("improvement", schema);
  return Improvement;
};
