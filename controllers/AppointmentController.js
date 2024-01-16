// AppointmentController.js
const { db } = require("../barber-api/db");
const Appointment = db.appointments;

exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    console.error("Appointment creation error:", error);
    res.status(500).send({ error: "Appointment creation failed" });
  }
};
