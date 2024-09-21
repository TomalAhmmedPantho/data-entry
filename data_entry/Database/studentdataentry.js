const mongoose = require('mongoose');

const studentDataEntrySchema = new mongoose.Schema({
  dateOfRecord: {
    type: Date,
    required: true,
  },
  wakeUpTime: {
    hour: Number,
    minute: Number,
  },
  wakingUp: {
    type: Number,
    min: 0,
    max: 10,
  },
  firstGoOut: {
    type: Number,
    min: 0,
    max: 10,
  },
  firstScreenOn: {
    type: Number,
    min: 0,
    max: 10,
  },
  breakfast: {
    type: Number,
    min: 0,
    max: 10,
  },
  schooling: {
    type: String,
    enum: ['Yes', 'No'],
  },
  classActivity: {
    type: Number,
    min: 0,
    max: 10,
  },
  outdoorActivity: {
    type: Number,
    min: 0,
    max: 10,
  },
  therapyAtSchool: {
    type: String,
    enum: ['Yes', 'No'],
  },
  therapyType: {
    type: [String],
    enum: ['OT', 'PT', 'SLT'],
  },
  lunch: {
    type: Number,
    min: 0,
    max: 10,
  },
  eveningSnacks: {
    type: Number,
    min: 0,
    max: 10,
  },
  dinner: {
    type: Number,
    min: 0,
    max: 10,
  },
  goingToSleep: {
    type: Number,
    min: 0,
    max: 10,
  },
  goToBedAt: {
    hour: Number,
    minute: Number,
  },
  sleepAt: {
    hour: Number,
    minute: Number,
  },
  gettingSleepTime: {
    type: Number,
    min: 0,
    max: 10,
  },
  outgoingTendency: {
    type: Number,
    min: 0,
    max: 10,
  },
  outgoingCount: {
    type: Number,
    min: 0,
    max: 10,
  },
  screenTime: {
    type: Number,
    min: 0,
    max: 10,
  },
  junkFood: {
    type: Number,
    min: 0,
    max: 10,
  },
  makingNoise: {
    type: Number,
    min: 0,
    max: 10,
  },
  walking: {
    type: Number,
    min: 0,
    max: 10,
  },
  showingAnger: {
    type: Number,
    min: 0,
    max: 10,
  },
  glassCrashTendency: {
    type: Number,
    min: 0,
    max: 10,
  },
  pushingTendency: {
    type: Number,
    min: 0,
    max: 10,
  },
  itemThrowTendency: {
    type: Number,
    min: 0,
    max: 10,
  },
  foodWaterThrowTendency: {
    type: Number,
    min: 0,
    max: 10,
  },
  hitWithHand: {
    type: Number,
    min: 0,
    max: 10,
  },
  hitWithHead: {
    type: Number,
    min: 0,
    max: 10,
  },
  cooperateAtSchool: {
    type: Number,
    min: 0,
    max: 10,
  },
  cooperateAtHome: {
    type: Number,
    min: 0,
    max: 10,
  },
  cuttingNails: {
    type: Number,
    min: 0,
    max: 10,
  },
  hairDressing: {
    type: Number,
    min: 0,
    max: 10,
  },
  bedwetting: {
    type: Number,
    min: 0,
    max: 10,
  },
  regularMedication: {
    type: String,
    enum: ['Yes', 'No'],
  },
  otherSickness: {
    type: String,
    enum: ['Yes', 'No'],
  },
  nameOfSickness: {
    type: String,
  },
  medOtherSickness: {
    type: String,
    enum: ['Yes', 'No'],
  },
  listOfMedicine: {
    type: String,
  },
  masturbation: {
    type: Number,
    min: 0,
    max: 10,
  },
  toilet: {
    type: Number,
    min: 0,
    max: 10,
  },
  overnightSleeping: {
    type: Number,
    min: 0,
    max: 10,
  },
  specialActivity: {
    type: String,
  },
  prescriptionReports: {
    type: String, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('StudentDataEntry', studentDataEntrySchema);
